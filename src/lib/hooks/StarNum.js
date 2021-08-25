import { ref } from 'vue'
 
export default function  useStarNum (num,callback){
   const starNum = ref(num);
   const setStarNums = (num) => {
       starNum.value =  num;
       callback();
   }
   return {
     starNum,
     setStarNums
   }
}