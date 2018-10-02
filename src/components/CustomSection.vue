<template>
    <section ref="currentEl" :class="{'is-active': isActive}">
        <slot />
    </section>
</template>

<script>
export default {
    props: {
        index: {
            type: Number,
            required: true
        },
        backgroundColor: {
            type: String,
            default: '#DA0007'
        },
        isDefault: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            isActive: false,
            topY: 0
        };
    },
    mounted() {
        EventBus.$on('changeSectionActive', activeIndex => {
            if(activeIndex !== this.index) {
                this.isActive = false;
            }
        });
        this.isActive = this.isDefault;
    },
    computed: {
        scrollY() {
            return this.$root.posY;
        }
    },
    watch: {
        isActive: function() {
            if(this.isActive === true) {
                EventBus.$emit('changeSection', this.backgroundColor);
                EventBus.$emit('changeSectionActive', this.index);
            }
        },
        scrollY: function() {
            var topY = this.$refs.currentEl.offsetTop;
            var height = this.$refs.currentEl.offsetHeight;
            this.isActive = this.scrollY >= (topY - height/2) && this.scrollY < (topY + height);
        }
    }
};
</script>

