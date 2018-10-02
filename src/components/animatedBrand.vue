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
        anime({
            targets: '#letter-prompt',
            opacity: [
                { value: 1, duration: 500 },
                { value: 0, duration: 500 }
            ],
            duration: 1000,
            loop: true
        });
    }
};
</script>

