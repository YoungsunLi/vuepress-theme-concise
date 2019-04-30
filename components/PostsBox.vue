<template>
    <div class="posts-box">
        <post-card :lastUpdated="page.lastUpdated" :path="page.path" :title="page.title"
                   v-for="page of $site.pages.filter(item => item.path !== '/')"></post-card>

    </div>
</template>

<script>
    import PostCard from '@theme/components/PostCard.vue'

    export default {
        name: "PostsBox",
        components: {PostCard},
    }
</script>

<style lang="stylus" scoped>
    .posts-box
        display flex
        flex-wrap wrap
        padding-bottom 2.5rem

</style>
