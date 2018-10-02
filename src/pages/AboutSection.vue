<template>
    <custom-section background-color="#449B00" :index="1" id="about" class="page-section">
        <a class="top-anchor" id="about-top" tabindex="0" />
        <div id="about-content">
            <h1 class="section-title">About Me</h1>
            <div id="content-text">
                <p>
                    I am a student majoring in <strong>Computer Science</strong> and <strong>Linguistics</strong> in <i>McGill University</i>. I started programming in high school, using PHP to create some web applications that utilised MySQL database. Ever since I started studying here, I have had the chance to experiment with several other languages, tools and applications.
                </p>
                <p>
                    Recently, I have been developing web application using JavaScript, with VueJS being my favourite framework so far (this site was developed using VueJS too!) The most recent stack I am using is <i>VueJS + Yii 2 Framework (PHP)+ MySQL</i>. In time, I would like to dig deeper into reactive JavaScript and also NoSQL technology.
                </p>
                <p>
                    Aside from web technology, I am also interested in video game development. Being a gamer myself, I have always dreamt of creating a game world with its own exciting backstory. My most recent game project was a summer project I had with my friends, where we co-developed a space shooter game. It's not completed yet but we hope to finish it in the near future.
                </p>
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
