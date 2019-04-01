<template>
    <div class="home">
        <div v-for="page of $site.pages.filter(item => item.path !== '/')">
            <router-link :to="page.path">
                {{page.title}}
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>

</style>
