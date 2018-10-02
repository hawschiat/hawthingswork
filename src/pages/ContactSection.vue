<template>
    <custom-section background-color="#AF005A" :index="4" id="contact" class="page-section">
        <a class="top-anchor" id="contact-top" tabindex="0" />
        <div id="contact-wrapper">
            <h1 class="section-title">Let's talk!</h1>
            <br><br>
            <div id="end-links" class="link-container">
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
export default {
    components: {
        CustomSection
    },
    data() {
        return {
            
        };
    }
};
</script>
