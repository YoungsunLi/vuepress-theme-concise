<template>
    <div class="posts-box">
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
                pages = pages.sort(this.postsSorter);
                pages = this.formatDate(pages);
                return pages;
            },
        },
        methods: {
            postsSorter(prev, next) {
                const prevTime = new Date(prev.lastUpdated).getTime() || new Date().getTime();
                const nextTime = new Date(next.lastUpdated).getTime() || new Date().getTime();
                return prevTime - nextTime > 0 ? -1 : 1;
            },
            formatDate(pages) {
                pages.forEach(page => {
                    const lastUpdatedList = page.lastUpdated.split(' ');
                    page.lastUpdated = lastUpdatedList[0] + ' ' + (lastUpdatedList[2] || '');
                });
                return pages;
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .posts-box
        display flex
        flex-wrap wrap
        padding-bottom 2.5rem

</style>
