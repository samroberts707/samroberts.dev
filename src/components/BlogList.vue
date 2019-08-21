<template>
    <div id="blog-list">
        <div class="latest-blogs">
            <div class="featured-blog">

            </div>
            <div class="secondary-blogs">
                <div class="blog"></div>
                <div class="blog"></div>
            </div>
        </div>
        <div class="blog-list">
            <div class="blog"></div>
            <div class="blog"></div>
            <div class="blog"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BlogList',
    data: function() {
        return {
            blogs: [
                {
                    'title': 'Blog 1'
                },
                {
                    'title': 'Blog 2'
                },
                {
                    'title': 'Blog 3'
                },
                {
                    'title': 'Blog 4'
                },
                {
                    'title': 'Blog 5'
                },
                {
                    'title': 'Blog 6'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    div#blog-list {
        display: block;
        position: relative;
        padding: 10%;
        div.latest-blogs {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-column-gap: 30px;
            margin-bottom: 30px;
            div.featured-blog {
                position: relative;
                width: 100%;
                background-color: lightgray;
                &:before {
                    content: '';
                    display: block;
                    width: 100%;
                    padding-top: 100%;
                }
            }
            div.secondary-blogs {
                display: block;
                div.blog {
                    position: relative;
                    width: 100%;
                    background-color: lightgray;
                    &:first-child {
                        margin-bottom: 30px;
                    }
                    &:before {
                        content: '';
                        display: block;
                        width: 100%;
                        padding-top: calc(50% - 15px);
                    }
                }
            }
        }
        div.blog-list {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-column-gap: 30px;
            grid-row-gap: 30px;
            div.blog {
                position: relative;
                width: 100%;
                background-color: lightgray;
                &:before {
                    content: '';
                    display: block;
                    width: 100%;
                    padding-top: 100%;
                }
            }
        }
    }
</style>
