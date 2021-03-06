import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

//Create vuex store
const store = createStore({
    state() {
        return {}
    },
    mutations: {

    },
    actions: {

    },
    getters: {

    }
})

const app = createApp(App)  // Create new vuejs instance 
app.use(store)              // Attach our new store to this vuejs instance
app.mount('#app')           // mount vuejs instance with template

