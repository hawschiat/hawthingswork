<template>
    <custom-section 
        :is-default="true" 
        background-color="#242582" 
        :index="0" 
        id="welcome" 
        class="page-section"
    >
        <a class="top-anchor" id="welcome-top" tabindex="0" />
        <div id="adjusted-main">
            <span id="firstLine">
                Hi! I'm <strong>Seng Chiat Haw</strong>.
            </span><br>
            <div id="secondLineContainer">
                <span id="secondLine">
                    I make web stuff
                </span>
                <span id="thirdLine">
                    (...among other things)
                </span>
            </div>

            <div id="welcome-links" class="link-container">
                <a href="https://www.linkedin.com/in/haw-seng-chiat/"><span class="fab fa-linkedin" /></a>
                <a href="https://github.com/hawschiat"><span class="fab fa-github" /></a>
                <a href="https://www.facebook.com/haw.sengchiat"><span class="fab fa-facebook" /></a>
                <a href="mailto:seng.haw@mail.mcgill.ca"><span class="fas fa-envelope" /></a>
            </div>
        </div>
    </custom-section>
</template>

<script>
import CustomSection from './../components/customSection';
import anime from 'animejs';
export default {
    components: {
        CustomSection
    },
    data() {
        return {
            
        };
    },
    mounted() {
        var firstLine = anime({
                targets: '#firstLine',
                translateX: [-200,0],
                opacity: [0,1],
                duration: 1500,
                delay: 2000
            }),
            secondLine = anime({
                targets: '#secondLine',
                translateX: [-200,0],
                opacity: [0,1],
                duration: 1500,
                delay: 3000
            }),
            thirdLine = anime({
                targets: '#thirdLine',
                opacity: [0,1],
                duration: 1000,
                delay: 4000
            }),
            linkContainer = anime({
                targets: '#welcome-links',
                trasnlateY: [200,0],
                opacity: [0,1],
                duration: 1000,
                delay: 4300
            });
    }
};
</script>
