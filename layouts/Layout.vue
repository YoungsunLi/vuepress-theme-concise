<template>
    <div class="theme-container">

        <headers></headers>

        <sidebar></sidebar>

        <home v-if="$page.frontmatter.home"></home>

        <page v-else></page>

        <footers></footers>
    </div>
</template>

<script>
    import Headers from '../components/Headers'
    import Sidebar from '../components/Sidebar'
    import Home from '../components/Home'
    import Page from '../components/Page'
    import Footers from '../components/Footers'

    export default {
        name: "Layout",
        components: {
            Headers,
            Sidebar,
            Home,
            Page,
            Footers
        }
    }
</script>

<style lang="stylus" scoped>

</style>
