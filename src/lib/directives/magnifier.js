import getStyle from '../../utils/tools.js'
export default {
  mounted(el) {
    const oImgWrap = el;
    
    const oMagWrap =  oImgWrap.querySelector('.mag-wrap');
    const  oMagImg = oMagWrap.querySelector('.mag-img');
    const imgWidth = parseInt (getStyle(oImgWrap,'width'));
    const imgHeight =parseInt(getStyle(oImgWrap,'height'));
    const magHeight =parseInt(getStyle(oMagWrap,'height'));
    const magWidth = parseInt (getStyle(oMagWrap,'width'));
    const imgX = oImgWrap.offsetLeft;
    const imgY = oImgWrap.offsetTop;
    const init = () => {
        bindEvent();
    }
    function bindEvent () {
      oImgWrap.addEventListener('mouseover',function(e){
         oMagWrap.className += ' show';
         showMag(getXY(e))
         document.addEventListener('mousemove', handleMouseMove)  
      })
      oImgWrap.addEventListener('mouseout',handleMouseOut)
    }

     function handleMouseMove (e) {
        showMag(getXY(e))
     }

     function handleMouseOut () {
        oMagWrap.className = 'mag-wrap';
        document.removeEventListener('mousemove',handleMouseMove)
     }
     
     function showMag(options){
       const { x, y, mouseX , mouseY } = options;
       oMagImg.style.left = -x + 'px';
       oMagImg.style.top = -y + 'px';
       oMagWrap.style.left = x + 'px';
       oMagWrap.style.top = y + 'px';
       if (mouseX < 0 || mouseY < 0 || 
        mouseX > imgWidth ||  mouseY > imgHeight) {
        oMagWrap.className = 'mag-wrap';
        document.removeEventListener('mousemove',handleMouseMove)
       }
     }

     function getXY (e) {
         return {
          x:e.clientX-imgX-magWidth/2,
          y:e.clientY-imgY-magHeight/2,
          mouseX:e.clientX-imgX,
          mouseY:e.clientY-imgY
         }
     }

    init ();
  }
}