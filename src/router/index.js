import Vue from "vue"
import VueRouter from 'vue-router'

import Join from "../../src/page/Join.vue"
import Login from "../../src/page/Login.vue"
import Content from "../../src/page/content.vue"
Vue.use(VueRouter)

export default new VueRouter ({
    mode : "history", //history를 써야 자연스러운 url 기능을 사용할 수 있다. 아니면 #기호로 url 사용!
    routes : [
        {
        path:"/",
        name : "Login",
        component : Login,
        },
        {
        path:"/join",
        name : "Join",
        component : Join,
        },
        {
        path:"/content",
        name : "Content",
        component : Content,
        }
    ]
})