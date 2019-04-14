<template>
    <div class="card-post">
        <router-link :to="path" class="card-post-link">
            <h3>{{title}}</h3>
            <aside class="card-post-aside">
                <div class="card-post-date">{{lastUpdated}}</div>
                <div class="card-post-more">→</div>
            </aside>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "CardPost",
        props: {
            title: String,
            path: String,
            lastUpdated: String
        }
    }
</script>

<style lang="stylus" scoped>
    h3
        margin 0
        padding-bottom 0.5rem
        border-bottom 1px solid $borderColor

    .card-post
        margin 8px
        padding: 16px 19px 0 19px
        box-shadow 0 1px 16px $borderColor
        border-radius 8px
        border: 1px solid $borderColor;
        flex-grow 1

        &-aside
            padding 8px 0

        &-link
            color $textColor

        &-date
            display: inline

        &-more
            float: right

</style>
