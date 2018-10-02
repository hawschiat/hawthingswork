<template>
    <div class="experience-list-items">
        <div class="item-title">{{ this.title }}</div>
        <div class="item-date">{{ this.date }}</div>
        <div class="item-description"><slot /></div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: true
        }
    },
    data() {
        return {

        };
    }
};
</script>
