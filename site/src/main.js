import { createApp } from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faUser, faPhone, faEnvelope, faMapMarkedAlt} from '@fortawesome/free-solid-svg-icons'
library.add(faInstagram, faLinkedin, faGithub, faUser, faPhone, faEnvelope, faMapMarkedAlt )
createApp(App)
.component('fa', FontAwesomeIcon)
.mount('#app')
