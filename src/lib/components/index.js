import Stars from './Stars.vue'
import Magnifier from './Magnifier.vue'

const componentPool = [
    Stars,Magnifier
]

export default {
    install(app,options){
      const { components } =  options;
      if (components) {
          componentPool.map(comp=>{
            components.map(item => {
              if (comp.name == item) {
                 app.component(comp.name,comp) 
              }
            })
          })
      } else {
         componentPool.map(el=>{
            app.component(el.name,el)  
         })
      }  
    }
}