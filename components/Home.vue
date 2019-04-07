<template>
    <main class="home">
        <div class="posts-box">
            <card-post :path="page.path" :title="page.title" v-for="page of $site.pages.filter(item => item.path !== '/')"></card-post>
        </div>
    </main>
</template>

<script>
    import CardPost from './CardPost'

    export default {
        name: "Home",
        components: {
            CardPost
        }
    }
</script>

<style lang="stylus" scoped>
    .home
        min-height calc(100vh - 8.1rem) //8rem = $headersHeight + $footersHeight

    .posts-box
        display flex
        flex-wrap wrap
        padding  14px

</style>
