import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import elementPlus from './plugins/element-plus'

createApp(App).use(vuetify).use(elementPlus).mount('#app')
