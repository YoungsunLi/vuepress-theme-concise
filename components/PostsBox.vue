<template>
    <div class="home">
        <PostCard :lastUpdated="page.lastUpdated" :path="page.path" :title="page.title"
                  v-for="page of getPosts"></PostCard>
    </div>
</template>

<script>
    import PostCard from '@theme/components/PostCard.vue'

    export default {
        name: "PostsBox",
        components: {PostCard},
        computed: {
            getPosts() {
                let pages = this.$site.pages.filter(item => item.path !== '/');
                return pages.sort(this.postsSorter);
            },
        },
        methods: {
            postsSorter(prev, next) {
                const prevTime = new Date(prev.lastUpdated).getTime() || new Date().getTime();
                const nextTime = new Date(next.lastUpdated).getTime() || new Date().getTime();
                return prevTime - nextTime > 0 ? -1 : 1;
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .home
        display flex
        flex-wrap wrap
        padding 0 1rem 1.5rem
        max-width $contentWidth

</style>
