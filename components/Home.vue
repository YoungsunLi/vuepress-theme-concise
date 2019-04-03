<template>
    <div class="home">
        <div v-for="page of $site.pages.filter(item => item.path !== '/')">
            <card-post :title="page.title" :path="page.path"></card-post>
        </div>
    </div>
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

<style scoped>

</style>
