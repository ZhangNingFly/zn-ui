import { createApp } from 'vue'
import App from './App.vue'
import Plugins from './lib/components'

createApp(App).use(Plugins,{ components: null }).mount('#app')
