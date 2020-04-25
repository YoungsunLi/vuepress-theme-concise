<template>
    <li class="post-card">
        <router-link :to="path" class="post-card-link">
            <h3>{{title}}</h3>
            <aside>
                <div class="post-card-date">{{formatDate}}</div>
                <div class="post-card-more">→</div>
            </aside>
        </router-link>
    </li>
</template>

<script>
    export default {
        name: "PostCard",
        props: {
            title: String,
            date: String,
            path: String,
        },
        computed: {
            formatDate() {
                // date = '2020-03-18T00:00:00.000Z'
                return this.date ? this.date.split('T')[0] : '1970-01-01';
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .post-card
        margin 8px
        padding 15px 19px 0 19px
        box-shadow 0 1px 16px $borderColor
        border-radius 8px
        border 1px solid $borderColor;
        flex-grow 1
        list-style-type none;

        h3
            margin 0
            padding-bottom 0.5rem
            border-bottom 1px solid $borderColor

        aside
            padding 5px 0 8px 0
            color rgba($textColor, 0.7)

        &-link
            color $textColor

        &-date
            display: inline
            font-size 14px

        &-more
            float: right

    .post-card:hover, .post-card:focus
        background-color rgba($accentColor, 0.1)
        border-color rgba($accentColor, 0.2)

        h3
            color $accentColor
            border-color rgba($accentColor, 0.2)

        aside
            color rgba($accentColor, 0.7)

</style>
