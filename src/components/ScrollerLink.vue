<template>
    <a class="scroller-link" @click="scrollTo"><slot /></a>
</template>

<script>
export default {
    props: {
        to: {
            type: String,
            required: true,
            validator: value => {
                return value.indexOf('#') === 0;
            }
        }
    },
    data() {
        return {

        };
    },
    methods: {
        scrollTo: function(event) {
            var target = document.querySelector(this.to);
            target.scrollIntoView({
                block: "start",
                behavior: 'smooth'
            });
        }
    }
};
</script>

