<template>
    <main class="home">
        <PostsBox/>
        <Pagination/>
    </main>
</template>

<script>
    import PostsBox from '@theme/components/PostsBox.vue'
    import Pagination from '@theme/components/Pagination.vue'

    export default {
        name: "Home",
        components: {
            PostsBox,
            Pagination
        }
    }
</script>

<style lang="stylus" scoped>
    .home
        padding $navbarHeight+1rem 1rem 1.5rem
        max-width $contentWidth
        margin 0 auto

</style>
