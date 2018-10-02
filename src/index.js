import Vue from 'vue';
import Logo from './components/Logo';
import CustomSection from './components/customSection';
import WelcomeSection from './pages/WelcomeSection';
import AboutSection from './pages/AboutSection';
import ExperienceSection from './pages/ExperienceSection';
import ProjectSection from './pages/ProjectSection';
import ContactSection from './pages/ContactSection';
import BrandIntro from './components/BrandIntro';
import AnimatedBrand from './components/animatedBrand';
import ScrollerLink from './components/scrollerLink';
import ListComponent from './components/ListComponent';
import smoothscroll from 'smoothscroll-polyfill';
import './style/app.scss';
import "es6-promise/auto";

window.EventBus = new Vue();

smoothscroll.polyfill();

Vue.component('logo', Logo);
Vue.component('brand-intro', BrandIntro);
Vue.component('animated-brand', AnimatedBrand);
Vue.component('scroller-link', ScrollerLink);
Vue.component('list-component', ListComponent);
Vue.component('custom-section', CustomSection);
Vue.component('welcome-section', WelcomeSection);
Vue.component('about-section', AboutSection);
Vue.component('experience-section', ExperienceSection);
Vue.component('project-section', ProjectSection);
Vue.component('contact-section', ContactSection);

window.app = new Vue({
    el: '#app',
    data: {
        onMainPage: true,
        posY: 0,
        windowHeight: 0,
        minimizePoint: 0,
        bgColor: '#242582'
    },
    watch: {
        posY: function() {
            var bottom = this.posY + this.windowHeight;
            if(bottom > this.minimizePoint) {
                this.onMainPage = false;
            }else{
                this.onMainPage = true;
            }
        }
    },
    mounted() {
        EventBus.$on('changeSection', newColor => {
            this.bgColor = newColor;
        });

        this.$nextTick(() => {
            var height = window.innerHeight;
            window.addEventListener('resize', () => {
                this.windowHeight = height;
            });
            this.windowHeight = height;
            this.minimizePoint = height + height/2;
        });
    },
    created () {
        window.addEventListener('scroll', () => {
            this.posY = window.scrollY;
        });
    }
});