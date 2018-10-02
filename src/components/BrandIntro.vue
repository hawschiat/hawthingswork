<template>
    <logo />
</template>

<script>
import anime from 'animejs';
export default {
    data() {
        return {

        };
    },
    mounted() {
        var setDashoffset = function(el) {
            var l = el.getTotalLength();
            el.setAttribute('stroke-dasharray', l);
            return [l,0];
        };
        var lines = anime({
                targets: ['#letter-s','#letter-c'],
                strokeDashoffset: {
                    value: setDashoffset,
                    duration: 700,
                    easing: 'easeOutQuad'
                },
                delay: function(el, i) {
                    return 700 + (i * 450);
                },
                duration: 1300
            }),
            startPrompt = anime({
                targets: '#letter-prompt',
                translateX: [-145,-145],
                opacity: [0,1],
                duration: 500,
                delay: lines.duration
            }),
            hideLetterH = anime({
                targets: '#letter-h',
                opacity: [0,0]
            }),
            hideLetterA = anime({
                targets: '#letter-a',
                opacity: [0,0]
            }),
            hideLetterW = anime({
                targets: '#letter-w',
                opacity: [0,0]
            });

        var promise = startPrompt.finished.then(() => {
            startPromptLoop();
            typeLetters();
        });

        function startPromptLoop() {
            var prompt = anime({
                targets: '#letter-prompt',
                opacity: [
                    { value: 1, duration: 500 },
                    { value: 0, duration: 500 }
                ],
                duration: 1000,
                loop: true
            });
        }

        function typeLetters() {
            var promptMoveH = anime({
                    targets: '#letter-prompt',
                    translateX: [-145,-100,-50,0],
                    duration: 300,
                    delay: 50
                }),
                letterH = anime({
                    targets: ['#letter-h', '#letter-a', '#letter-w'],
                    opacity: [0,1],
                    duration: 100,
                    delay: function(el,i) {
                        return 100 + (i * 110);
                    }
                });
        }
    }
};
</script>

