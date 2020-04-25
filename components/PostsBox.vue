<template>
    <ul class="posts-box">
        <PostCard
                :date="page.frontmatter.date"
                :path="page.path"
                :title="page.title"
                v-for="page of $pagination.pages"
        ></PostCard>
    </ul>
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
        margin 0
        padding 0

</style>
