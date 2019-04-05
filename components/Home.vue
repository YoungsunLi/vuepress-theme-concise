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
    .posts-box
        display flex
        flex-wrap wrap
        margin 0 14px

</style>
