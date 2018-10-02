<template>
    <custom-section background-color="#1D2597" :index="index" id="experience" class="page-section">
        <a class="top-anchor" id="experience-top" tabindex="0" />
        <div class="buffer" />
        <div class="list-container">
            <h1 class="section-title">My Experience</h1>
            <list-component title="Lead Developer - Basilisk Inc, Montreal" date="May 2018 - Present">
                Basilisk is an online practice-question bank. As lead developer, I am responsible for the implementation of any technology that may improve the web application and its overall user experience.<br>
                During the first four months of this position, my job/achievement includes: <br>
                • Set up a test server environment on Amazon Web Service (Elastic Beanstalk + Amazon RDS)<br>
                • Further developed an educational web app using Yii2 Framework (PHP) and JavaScript<br>
                • Developed a quiz and user management interface for the administration page<br>
                • Developed a commission system and ticketing system<br>
                • Fixed some existing bugs and improved the UI responsiveness
            </list-component>
            <list-component 
                title="Webmaster - Arts Undergraduate Society of McGill University (AUS), Montreal" 
                date="September 2017 - Present"
            >
                I manage and the website and server of Arts Undergraduate Society (AUS) of McGill University, which is powered by WordPress. My usual tasks include updating the website with new information, and provide technical assistance to the staff.<br>
                <a href="http://ausmcgill.com" target="_blank">AUSMCGILL.COM</a>
            </list-component>
            <list-component title="Web Managing Editor - The Bull & Bear, Montreal" date="October 2016 - May 2018">
                As the Web Managing Editor, my job is to oversee the development and maintenance of the Bull & Bear's official site. Apart from that, I need to come up with or implement new ideas that may improve the reader's experience while browsing the site. I optimize the SEO (Search Engine Optimization) of the site periodically and constantly provide solutions to code modifications and sometimes webpage errors.<br>
                <a href="http://bullandbearmcgill.com/media-fund-2018/index.html" target="_blank">
                    Sample of my custom webpage design
                </a>
            </list-component>
        </div>
        <div class="download-corner" :class="{'hidden': isHidden}">
            <span id="download-text">Prefer the PDF version? Click here! <span class="fas fa-hand-point-right" /></span>
            <a href="/assets/Seng-Chiat-Haw-CV.pdf" target="_blank">
                <div id="download-icon">
                    <div class="icon-wrapper"><i class="fas fa-file-pdf" /></div>
                </div>
            </a>
        </div>
    </custom-section>
</template>

<script>
import CustomSection from './../components/customSection';
export default {
    components: {
        CustomSection
    },
    data() {
        return {
            index: 2,
            isHidden: true
        };
    },
    mounted() {
        EventBus.$on('changeSectionActive', activeIndex => {
            if(activeIndex === this.index) {
                this.isHidden = false;
            }else{
                this.isHidden = true;
            }
        });
    }
};
</script>
