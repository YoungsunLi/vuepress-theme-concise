module.exports = {
    extend: '@vuepress/theme-default',
    plugins: [
        '@vuepress/back-to-top',
        ['@vuepress/blog', {
            directories: [
                {
                    id: 'post',
                    dirname: 'posts',
                    path: '/',
                    pagination: {
                        lengthPerPage: 2,
                    },
                    layout: 'Layout',
                    itemLayout: 'Layout',
                    itemPermalink: "/:slug"
                },
            ],
        }],
    ]
};
