<template>
    <div id="experience">
        <h1>Experience</h1>
        <div class="timeline">
            <div class="item" v-in-viewport.once style="z-index:4;">
                <div class="content-wrapper">
                    <h2>Full Stack Web Dev</h2>
                    <h4><a href="https://nucreative.co.uk" target="_blank" rel="noreferrer">NU Creative</a></h4>
                    <h4>Oct 18 - Present</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium scelerisque ipsum vitae elementum. Fusce lobortis enim sed libero vehicula mattis. Praesent faucibus tempus cursus. Praesent nec vehicula metus. Suspendisse quis diam euismod, venenatis ligula sed, cursus est.</p>
                </div>
            </div>
            <div class="item" v-in-viewport.once style="z-index:3;">
                <div class="content-wrapper">
                    <h2>Junior Web Dev</h2>
                    <h4><a href="https://nucreative.co.uk" target="_blank" rel="noreferrer">NU Creative</a></h4>
                    <h4>Oct 15 - Oct 18</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium scelerisque ipsum vitae elementum. Fusce lobortis enim sed libero vehicula mattis. Praesent faucibus tempus cursus. Praesent nec vehicula metus. Suspendisse quis diam euismod, venenatis ligula sed, cursus est.</p>
                </div>
            </div>
            <div class="item" v-in-viewport.once style="z-index:2;">
                <div class="content-wrapper">
                    <h2>Systems and Database Manager</h2>
                    <h4><a href="https://www.noordgroup.co.uk" target="_blank" rel="noreferrer">Noord Group</a></h4>
                    <h4>Jun 15 - Oct 18</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium scelerisque ipsum vitae elementum. Fusce lobortis enim sed libero vehicula mattis. Praesent faucibus tempus cursus. Praesent nec vehicula metus. Suspendisse quis diam euismod, venenatis ligula sed, cursus est.</p>
                </div>
            </div>
            <div class="item" v-in-viewport.once style="z-index:1;">
                <div class="content-wrapper">
                    <h2>Junior Android Developer</h2>
                    <h4><a href="https://www.pandapayapp.com" target="_blank" rel="noreferrer">Panda Pay</a></h4>
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
            opacity: 0;
            transition: all 1s ease-in-out;
            &.in-viewport {
              opacity: 1;
            }
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
                transform: translateX(-100px);
                &.in-viewport {
                  transform: translateX(0);
                }
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
                transform: translateX(100px);
                &.in-viewport {
                  transform: translateX(0);
                }
                &::after {
                    left: -10px;
                }
            }
            div.content-wrapper {
                padding: 30px;
                h2 {
                    font-size: 2.3vw;
                    margin-bottom: 20px;
                }
                h4 {
                    font-size: 1.8vw;
                    margin-bottom: 20px;
                    a {
                        position: relative;
                        color: #f75d5d;
                        text-decoration: none;
                        &::after {
                          position: absolute;
                          left: 0;
                          width: 0;
                          height: 2px;
                          background: #f75d5d;
                          content: '';
                          opacity: 0;
                          -webkit-transition: opacity 0.3s, width 0.3s;
                          -moz-transition: opacity 0.3s, width 0.3s;
                          transition: opacity 0.3s, width 0.3s;
                          bottom: 0;
                      }
                      &:hover::after, &:focus::after {
                          opacity: 1;
                          width: 100%;
                      }
                  }
              }
              p {
                font-size: 1.4vw;
                line-height: 140%;
            }
        }
    }
}
@media screen and (max-width: 768px) {
    h1 {
        font-size: 7vw;
    }
    div.timeline {
        div.item {
            width: 100%;
            max-width: 100%;
            &:nth-child(odd) {
                border-left: 1px solid #000;
                border-right: none;
                margin-right: 0;
                text-align: left;
                transform: translateX(100px);
                &::before {
                    left: 0;
                }
                &::after {
                    left: -10px;
                }
            }
            &:nth-child(even) {
                border-left: 1px solid #000;
                margin-left: 0;
                text-align: left;
            }
            div.content-wrapper {
                h2 {
                    font-size: 5vw;
                }
                h4 {
                    font-size: 4vw;
                }
                p {
                    font-size: 3.5vw;
                }
            }
        }
    }
}
}
</style>
