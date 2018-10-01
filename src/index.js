import Vue from 'vue';
import VueRouter from "vue-router";
import router from "./routes.js";
import animatedBrand from './components/animatedBrand';
import './style/app.scss';
import "es6-promise/auto";

Vue.use(VueRouter);
Vue.component('animated-brand', animatedBrand);

window.app = new Vue({
    el: '#app',
    data: {

    },
    router
});