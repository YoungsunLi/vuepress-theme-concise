<template>
    <header class="headers">
        <router-link :to="$localePath">
            <span class="site-name" v-if="$siteTitle">{{ $siteTitle }}</span>
        </router-link>
    </header>
</template>

<script>
    export default {
        name: "Headers"
    }
</script>

<style lang="stylus" scoped>
    $navbar-vertical-padding = 1.3125rem
    $navbar-horizontal-padding = 1.4rem

    .headers
        padding $navbar-vertical-padding $navbar-horizontal-padding

        .site-name
            font-size 1.375rem
            font-weight 600
            color $textColor
            position relative
            line-height 24px
            vertical-align middle

</style>
