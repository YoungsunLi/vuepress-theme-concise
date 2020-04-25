<template>
    <PluginPagination/>
</template>

<script>
    import PluginPagination from '@vuepress/plugin-blog/lib/client/components/Pagination.vue'

    export default {
        name: 'Pagination',
        components: {PluginPagination}

    }
</script>

<style lang="stylus">
    .pagination
        margin 20px 8px
        box-shadow 0 1px 16px $borderColor
        user-select none

    .pagination > li > a, .pagination > li > span
        color $textColor
        border 1px solid $borderColor;

    .pagination > li > a:hover, .pagination > li > span:hover, .pagination > li > a:focus, .pagination > li > span:focus
        background-color rgba($accentColor, 0.1)
        border-color rgba($accentColor, 0.2)

    .pagination > .active > a, .pagination > .active > span, .pagination > .active > a:hover, .pagination > .active > span:hover, .pagination > .active > a:focus, .pagination > .active > span:focus
        background-color $textColor
        border-color $textColor

    .pagination > .disabled > span, .pagination > .disabled > span:hover, .pagination > .disabled > span:focus, .pagination > .disabled > a, .pagination > .disabled > a:hover, .pagination > .disabled > a:focus
        border-color $borderColor

</style>
