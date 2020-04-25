<template>
    <div id="global-layout">
        <component :is="layout"/>
        <footer>
            <p>© 2018-present <a href="https://lsun.net/">Youngsun Li</a></p>
            <p>
                Powered by <a href="https://vuepress.vuejs.org/">VuePress</a>.
                Theme by <a href="https://github.com/YoungsunLi/vuepress-theme-concise">concise</a>
            </p>
        </footer>
    </div>
</template>

<script>
    export default {
        computed: {
            layout() {
                if (this.$pagination) {
                    this.$page.frontmatter.home = true;
                }
                if (this.$page.path) {
                    if (this.$frontmatter.layout) {
                        return this.$frontmatter.layout
                    }
                    return 'Layout'
                }
                return 'NotFound'
            }
        }
    }
</script>
<style lang="stylus" scoped>
    footer
        padding 2.5rem
        border-top 1px solid $borderColor
        text-align center
        color lighten($textColor, 25%)

    a
        font-weight normal
        color lighten($textColor, 25%)

    p
        margin 0
</style>
