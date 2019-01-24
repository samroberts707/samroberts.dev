<template>
    <div id="experience">
        <h1>Experience</h1>
        <div class="timeline">
            <div class="item">
                <div class="content-wrapper">
                    <h2>Full Stack Web Dev</h2>
                    <h4>NU Creative</h4>
                    <h4>Oct 18 - Present</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium scelerisque ipsum vitae elementum. Fusce lobortis enim sed libero vehicula mattis. Praesent faucibus tempus cursus. Praesent nec vehicula metus. Suspendisse quis diam euismod, venenatis ligula sed, cursus est.</p>
                </div>
            </div>
            <div class="item">
                <div class="content-wrapper">
                    <h2>Junior Web Dev</h2>
                    <h4>NU Creative</h4>
                    <h4>Oct 15 - Oct 18</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium scelerisque ipsum vitae elementum. Fusce lobortis enim sed libero vehicula mattis. Praesent faucibus tempus cursus. Praesent nec vehicula metus. Suspendisse quis diam euismod, venenatis ligula sed, cursus est.</p>
                </div>
            </div>
            <div class="item">
                <div class="content-wrapper">
                    <h2>Systems and Database Manager</h2>
                    <h4>Noord</h4>
                    <h4>Jun 15 - Oct 18</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium scelerisque ipsum vitae elementum. Fusce lobortis enim sed libero vehicula mattis. Praesent faucibus tempus cursus. Praesent nec vehicula metus. Suspendisse quis diam euismod, venenatis ligula sed, cursus est.</p>
                </div>
            </div>
            <div class="item">
                <div class="content-wrapper">
                    <h2>Junior Android Developer</h2>
                    <h4>Panda Pay</h4>
                    <h4>Jan 15 - Jun 15</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium scelerisque ipsum vitae elementum. Fusce lobortis enim sed libero vehicula mattis. Praesent faucibus tempus cursus. Praesent nec vehicula metus. Suspendisse quis diam euismod, venenatis ligula sed, cursus est.</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
div#experience {
    display: block;
    position: relative;
    background: #EAEAEA;
    padding: 10%;
    h1 {
        font-size: 3vw;
        margin-bottom: 50px;
        text-align: center;
    }
    div.timeline {
        display: block;
        width: 100%;
        div.item {
            display: block;
            position: relative;
            width: 50%;
            max-width: 50%;
            &::before {
                position: absolute;
                display: block;
                content: "";
                width: 50%;
                height: 1px;
                background-color: #000;
                bottom: 0;
            }
            &::after {
                position: absolute;
                display: block;
                content: "";
                z-index: 2;
                bottom: -10px;
                width: 20px;
                height: 20px;
                background-color: #f75d5d;
                border-radius: 50%;
            }
            &:nth-child(odd) {
                border-right: 1px solid #000;
                margin-right: 50%;
                text-align: right;
                &::before {
                    right: 0;
                }
                &::after {
                    right: -10px;
                }
            }
            &:nth-child(even) {
                border-left: 1px solid #000;
                margin-left: 50%;
                text-align: left;
                &::after {
                    left: -10px;
                }
            }
            div.content-wrapper {
                padding: 30px;
                h2 {

                }
                h4 {

                }
                p {

                }
            }
        }
    }
    @media screen and (max-width: 768px) {
        h1 {
            font-size: 7vw;
        }
    }
}
</style>
