<template>
    <div class="theme-container">

        <headers></headers>

        <navbar></navbar>

        <home v-if="$page.frontmatter.home"></home>

        <page v-else></page>

        <footers></footers>
    </div>
</template>

<script>
    import Headers from '../components/Headers'
    import Navbar from '../components/Navbar'
    import Home from '../components/Home'
    import Page from '../components/Page'
    import Footers from '../components/Footers'

    export default {
        name: "Layout",
        components: {
            Headers,
            Navbar,
            Home,
            Page,
            Footers
        }
    }
</script>

<style scoped>

</style>
