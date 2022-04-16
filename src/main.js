import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

import FomanticUI from 'vue-fomantic-ui'
import 'fomantic-ui-css/semantic.min.css'
import {initializeApp} from "firebase/app"

const app = createApp(App)
app.use(FomanticUI)

/*
const firebaseConfig = {
    apiKey: "AIzaSyDtes9ZfXpEcv0I9IpFs95v04naCOKu4yc",
    authDomain: "egco427-ca8a8.firebaseapp.com",
    projectId: "egco427-ca8a8",
    storageBucket: "egco427-ca8a8.appspot.com",
    messagingSenderId: "438278000656",
    appId: "1:438278000656:web:45fd5f12e979a9df49fa95",
    measurementId: "G-V5SL4Q1B2K"
    }

    initializeApp(firebaseConfig)
    auth = getAuth()

onAuthStateChanged(auth, (user)=>{
    if(!app) {
        app = create(App).use(router).mount('#app')
    }
})

*/
createApp(App).use(router).mount('#app')
