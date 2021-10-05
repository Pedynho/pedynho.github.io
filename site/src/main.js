import { createApp } from 'vue'
import App from './App.vue'
import './assets/global.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
    faInstagram, faLinkedin, faGithub, faVuejs, faJs, faNodeJs, 
    faPhp, faHtml5, faCss3, faBootstrap, faWordpress, faAws 
} from '@fortawesome/free-brands-svg-icons'
import { faUser, faPhone, faEnvelope, faMapMarkedAlt,faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons'
library.add(
    faInstagram, faLinkedin, faGithub, faUser, faPhone, faEnvelope, faExternalLinkAlt, faMapMarkedAlt, 
    faVuejs, faJs, faNodeJs, faPhp, faHtml5, faCss3, faBootstrap, faWordpress, faAws 
)
createApp(App)
.component('fa', FontAwesomeIcon)
.mount('#app')
