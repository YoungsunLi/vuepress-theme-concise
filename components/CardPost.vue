<template>
    <div class="card-post">
        <router-link :to="path" class="card-post-link">
            <h2>{{title}}</h2>
            <aside class="card-post-aside">
                <div class="card-post-date">2019</div>
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
            path: String
        }
    }
</script>

<style lang="stylus" scoped>
    h2
        margin 0

    .card-post
        margin 12px
        padding: 16px 19px
        box-shadow 0 0 22px #e2ebf0;
        border-radius 8px;
        flex-grow 1

        &-aside
            padding-top 14px

        &-link
            color $textColor

        &-date
            display: inline

        &-more
            float: right

</style>
