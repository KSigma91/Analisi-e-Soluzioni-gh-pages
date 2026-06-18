<template>
    <div ref="el">
        <slot />
    </div>
</template>

<script>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {
    name: 'GsapReveal',
    props: {
        y: {
            type: Number,
            default: 30
        },
        x: {
            type: Number,
            default: 0
        },
        duration: {
            type: Number,
            default: 0.65
        },
        delay: {
            type: Number,
            default: 0
        },
        stagger: {
            type: Number,
            default: 0
        },
        children: {
            type: String,
            default: ''
        },
        once: {
            type: Boolean,
            default: true
        }
    },
    mounted() {
        this.$nextTick(() => {
            const target = this.children
                ? this.$refs.el.querySelectorAll(this.children)
                : this.$refs.el

            this.animation = gsap.from(target, {
                opacity: 0,
                y: this.y,
                x: this.x,
                duration: this.duration,
                delay: this.delay,
                stagger: this.stagger,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: this.$refs.el,
                    start: 'top 85%',
                    once: this.once
                }
            })
        })
    },
    beforeDestroy() {
        if (this.animation) {
            this.animation.kill()
        }

        ScrollTrigger.getAll().forEach(trigger => {
            if (trigger.trigger === this.$refs.el) {
                trigger.kill()
            }
        })
    }
}

</script>

<style lang="scss" scoped>

</style>