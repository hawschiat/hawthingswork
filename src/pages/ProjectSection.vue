<template>
    <custom-section background-color="#915A0A" :index="3" id="project" class="page-section">
        <a class="top-anchor" id="project-top" tabindex="0" />
        <div class="buffer" />
        <div class="list-container">
            <h1 class="section-title">Projects</h1>
            <list-component title="FlashPoint" date="COMP 361 Group Project (September 2018 - April 2019)">
                A medium-sized project that involves 5 people. We use pyGames and several other Python libraries to develop a video game based on FlashPoint, a board game. The video game is co-op and turn based, and the clients communicate with each other using peer-to-peer architecture.<br>
                Some of the things I did includes:<br>
                • Designed UI components that are customizable for my teammates<br>
                • Worked on the networking part of the game<br>
                <strong>See the repository <a href="https://github.com/COMP361/f2018-group10" target="_blank">here</a>.</strong>
            </list-component>
            <list-component title="DoomsDayNEO" date="ConUHacks IV (2019)">
                Created using Unity Engine, this tool visualizes the data of NEO (Near Earth Objects) from NASA’s API. It features an Earth model and asteroids that represents the NEO. When the user hovers over an asteroid, data fetched from NASA will show up as reference.<br>
                <strong>See the repository <a href="https://github.com/hawschiat/conuhacks-2019" target="_blank">here</a>.</strong>
            </list-component>
            <list-component title="Picture !t" date="Hack the North 2018">
                <a href="https://devpost.com/software/t2v" target="_blank">See on Devpost</a><br>
                We created this tool that visualizes an English sentence into an image. We used an API called Compromise JS to analyze the sentence. The API breaks down the semantic properties of the sentence so that we get the important details, such as nouns and prepositions. After that, relevant image parts are drawn from an image database. Combined with the position information (preposition), our script is able to “draw” out the described scenario.<br>
                <strong>See the repository <a href="https://github.com/mtlghtn/t2v" target="_blank">here</a>.</strong>
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
