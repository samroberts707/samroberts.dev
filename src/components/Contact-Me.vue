<template>
    <div id="contact-me">
        <h1>Contact Me</h1>
        <div class="social-links">
            <a href="https://github.com/samroberts707" class="social-icon" target="_blank"><i class="fab fa-github"></i></a>
            <a href="https://twitter.com/samroberts707" class="social-icon" target="_blank"><i class="fab fa-twitter"></i></a>
            <a href="https://www.linkedin.com/in/samroberts707/" class="social-icon" target="_blank"><i class="fab fa-linkedin"></i></a>
            <a href="mailto:samroberts707@gmail.com" class="social-icon" target="_blank"><i class="fas fa-envelope"></i></a>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    div#contact-me {
        display: block;
        position: relative;
        background: #ffffff;
        padding: 10%;
        h1 {
            font-size: 3vw;
            margin-bottom: 50px;
            text-align: center;
        }
        div.social-links {
            display: block;
            width: 100%;
            text-align: center;
            a.social-icon {
                display: inline-block;
                i.fab, i.fas {
                    font-size: 4.3vw;
                    line-height: 4.4vw;
                    color: #F75D5D;
                    margin: 30px;
                    transition: color 0.4s ease-in-out;
                }
                &:hover {
                    i.fab, i.fas {
                        color: #D24A4A;
                    }
                }
            }
        }
    }
</style>
