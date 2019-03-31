<template>
    <div>
        <router-link :to="$localePath">
            <span v-if="$siteTitle">{{ $siteTitle }}</span>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style scoped>

</style>
