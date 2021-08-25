 <template>
   <div 
      v-magnifier
      class="img-wrap"
     :style="{
        width: imgWidth + 'px',
        height: imgHeight + 'px',
     }"
   >
    <a 
       class="mag-wrap"
      :href="link"
      :target="blank ? '_blank' : ''"
      :style="{
         width: magWidth+'px',
         height:magHeight+'px'
      }"
    >
    <img
      class="mag-img"
      :src="imgUrl"
      :alt="imgAlt"
      :style="{
        width: imgWidth + 'px',
        height: imgHeight + 'px'
      }"
    /> 
    </a>
    <a 
     :href="link"
     class="img-lk"
     >
     <img
      class="static-img"
      :src="imgUrl"
      :alt="imgAlt"
    /> 
    </a>
   </div>
 </template>

 <script>
 import img from '@/assets/img/pxz.jpg'  
 import { magnifier } from '../directives'
 export default {
   name: 'Magnifier',
   directives:{
     magnifier
   },
   props: {
     imgWidth:{
       type: Number,
       default:200 
     },
     imgHeight:{
       type: Number,
       default:265 
     },
     magWidth:{
       type: Number,
       default:50
     },
     magHeight:{
       type: Number,
       default:50 
     },
     blank:{
       type: Boolean,
       default:false
     },
     link: String,
     imgUrl: {
       type:String,
       default:img
     },
     imgAlt: String
   }
 }
   
 </script>

 <style lang="scss" scoped>
   .img-wrap {
     position: relative;
     border: 1px solid #ddd;
     box-shadow: 0 0 5px #999;

     .mag-wrap {
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 6;
      background-color: #fff;
      box-shadow: 0 0 3px #333;
      cursor: move;
      overflow: hidden;

      &.show {
        display: block;
        transform: scale(2);
      }
       
      .mag-img {
        position: absolute;
        top: 0;
        left: 0;
      }

     }

    .static-img{
      width: 100%;
    }
   }
 </style>