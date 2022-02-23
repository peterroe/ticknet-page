<!-- @format -->

<template>
    <div :id="no" class="member-img">
        <div class="img-top">
            <div class="img-top-avatar">
                <img :src="imgsrc" alt="" />
            </div>
            <div class="img-top-title">
                {{ name }}
            </div>
        </div>
        <div class="img-transfer">
            <div class="img-foot">
                <img :src="imgsrc" alt="用户头像" />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            imgsrc: {
                default: '',
                type: String
            },
            row: {
                default: 0,
                type: Number
            },
            col: {
                default: 0,
                type: Number
            },
            no: {
                default: '',
                type: String
            },
            name: {
                default: '',
                type: String
            }
        },
        data() {
            return {}
        },
        mounted() {
            const memberImg = document.querySelector(`#${this.no}`)
            let x = (this.col - 1) * 200
            let y = (this.row - 1) * 100
            if (this.row % 2 === 0) {
                // 偶数
            } else {
                x += 100
                // y += 100
            }
            // margin-top
            y += 50
            x += 'px'
            y += 'px'
            console.log(x, y)
            memberImg.style.top = y
            memberImg.style.left = x
        }
    }
</script>

<style>
    .member-img {
        position: absolute;
        left: 0px;
        top: 0px;
        z-index: 99;
        width: 200px;
        border-radius: 100px;
        height: 200px;
        /* filter: blur(5px); */
    }
    .img-foot img {
        transition: all 0.5s;
        width: 200px;
        filter: blur(30px);
        border-radius: 100px;
        transform: translate(-30px, -30px) rotate(-45deg);
    }
    .img-transfer {
        position: absolute;
        top: 30px;
        left: 29px;
        /* box-shadow: 0 0 8px #484c53; */
        transform: rotate(45deg);
        border: 1px solid #fcfcff;
        width: 142px;
        height: 142px;
        /* background-color: blue; */
        overflow: hidden;
    }
    .img-top:hover > .img-top-avatar {
        transform: translateY(-10px);
    }
    .img-top:hover + .img-transfer > .img-foot img {
        filter: blur(3px);
    }
    .img-top {
        cursor: pointer;
        position: absolute;
        z-index: 10;
        top: 40px;
        left: 60px;
    }
    .img-top-avatar {
        transition: all 1s;
        border-radius: 40px;
        border: 2px solid #8999d2;
        width: 80px;
        height: 80px;
        overflow: hidden;
    }
    .img-top-avatar img {
        width: 80px;
        height: 80px;
    }
    .img-top-title {
        color: #fff;
        height: 40px;
        font-size: 14px;
        line-height: 40px;
    }
</style>
