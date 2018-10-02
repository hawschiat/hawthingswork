<template>
    <custom-section background-color="#1D2597" :index="2" id="experience" class="page-section">
        <a class="top-anchor" id="experience-top" tabindex="0" />
        <div class="buffer" />
        <div class="list-container">
            list
        </div>
        <div class="download-corner">
            <span id="download-text">Prefer the PDF version? Click here! <span class="fas fa-hand-point-right" /></span>
            <a href="/assets/Seng-Chiat-Haw-CV.pdf">
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
            
        };
    }
};
</script>
