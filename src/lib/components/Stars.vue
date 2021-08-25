<template>
  <div class="ui-star">
    <div class="view">
      <span ><slot></slot></span>
    </div>
    <div class="mid">
      <span
        v-for="num in 5"
        :key="num"
        :class="['iconfont icon-star', num <= starNum ? 'active' : '']"
        :style="{ fontSize: size + 'rem' }"
        @click="setStarNums(num)"
      ></span>
    </div>
    <div class="assess">
      <span>{{ assess[starNum] }}</span>
    </div>
  </div>
</template>

<script>
import { useStarNums } from "../hooks/index";
import { ref, watchEffect } from "vue";
export default {
  name: "Stars",
  props: {
    num: {
      type: Number,
      default: 2,
    },
    size: {
      type: Number,
      default: 2,
    },
  },
  setup(props, ctx) {
    const assess = ref([
      "非常差",
      "非常差",
      "较差",
      "一般",
      "比较满意",
      "非常满意",
    ]);

    const { starNum, setStarNums } = useStarNums(props.num, () => {
      ctx.emit("getStarNum", starNum.value);
    });

    // index.value = useStarNums(props.num).starNum
    return {
      starNum,
      setStarNums,
      assess,
    };
  },
};
</script>

<style lang="scss" scoped>
@font-face {
  font-family: "iconfont"; /* Project id 2762421 */
  src: url("//at.alicdn.com/t/font_2762421_io1v7e7tm7e.woff2?t=1629696457075")
      format("woff2"),
    url("//at.alicdn.com/t/font_2762421_io1v7e7tm7e.woff?t=1629696457075")
      format("woff"),
    url("//at.alicdn.com/t/font_2762421_io1v7e7tm7e.ttf?t=1629696457075")
      format("truetype");
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #999;

  &.active {
    color: rgb(254, 149, 23);
  }
  &.icon-star {
    transition: 1s;
  }
  &.icon-star:before {
    content: "\e61a";
  }
}

.ui-star {
  display: flex;
  width: 25rem;
  margin: .5rem auto;
  line-height: 2rem;
//   border: 1px solid red;
 
//   flex-direction:row;
 .view {

      font-family: "Times New Roman", serif;
      color: #444;
      font-weight: bold;
    //   font-size: 0.2rem;
      flex: 1;
    }
  .assess {

    font-family: Cursive;
    font-weight: bold;
    color: #aaa;
    flex: 1;
    }
    .mid {
      flex: 3;
    
  }
}
</style>
