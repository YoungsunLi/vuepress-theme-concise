<template>
    <main>
        <ParentHome/>
        <PostsBox/>
    </main>
</template>

<script>
    import ParentHome from '@parent-theme/components/Home.vue'
    import PostsBox from '@theme/components/PostsBox.vue'

    export default {
        name: "Home",
        components: {
            ParentHome,
            PostsBox
        }
    }
</script>
