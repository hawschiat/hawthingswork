<template>
    <custom-section background-color="#915A0A" :index="3" id="project" class="page-section">
        <a class="top-anchor" id="project-top" tabindex="0" />
        <div class="buffer" />
        <div class="list-container">
            <h1 class="section-title">Projects</h1>
            <list-component title="AnimaCard Builder" date="McHacks V (2018)">
                <a href="https://devpost.com/software/animacard-builder" target="_blank">See on Devpost</a><br>
                Our team built this web applications using purely HTML, CSS, and JavaScript (with CreateJS). It allows the user to customize their own postcard on a HTML canvas, with moving sprites made possible with sprite sheets.
            </list-component>
            <list-component title="Picture !t" date="Hack the North 2018">
                <a href="https://devpost.com/software/t2v" target="_blank">See on Devpost</a><br>
                We created this tool that visualizes an English sentence into an image. We used an API called Compromise JS to analyze the sentence. The API breaks down the semantic properties of the sentence so that we get the important details, such as nouns and prepositions. After that, relevant image parts are drawn from an image database. Combined with the position information (preposition), our script is able to “draw” out the described scenario.
            </list-component>
            <list-component title="Space Shooter Game" date="Summer 2018">
                Summer independent project - work in progress. This game is developed using Unity Engine, and it's to become a co-op sci-fi shooter game. I am working on the networking/communication function.
            </list-component>
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
