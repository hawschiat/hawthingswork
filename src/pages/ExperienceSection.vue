<template>
    <custom-section background-color="#1D2597" :index="index" id="experience" class="page-section">
        <a class="top-anchor" id="experience-top" tabindex="0" />
        <div class="buffer" />
        <div class="list-container">
            <h1 class="section-title">My Experience</h1>
            <list-component title="Lead Developer - Neverguess.ca, Montreal" date="May 2018 - Present">
                • Written an educational web application from scratch, using VueJS as frontend and Yii2 (PHP) as backend (RESTful application).<br>
                • Designed the backend of the software using various AWS solutions. (Cognito, DynamoDB, Lambda, S3, etc.)<br>
                • Implemented a continuous delivery pipeline using AWS CodePipeline.<br>
                • Containerized the application using Docker and AWS Fargate.<br>
                • Written a DOCX parser using Python to allow users to import quiz questions easily.<br>
                • Programmed a quiz builder with the ability to add questions, manage images, etc. The images are processed by a Python script on Lambda to store the file based on the current date.<br>
                • Programmed a quiz exporter that sources the questions from the database, shuffles them and exports as LaTEX-formatted exam papers.<br>
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
            <a href="https://drive.google.com/file/d/18eXWpU8dRdCxg2zcTM17WGpINpDcUpwx/view?usp=sharing" target="_blank">
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
