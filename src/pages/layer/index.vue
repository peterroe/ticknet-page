<!--
 * @FileDescription: layer
 * @Author: 林舒恒
 * @Date: 2021.4.19
 * @LastEditors: 林舒恒
 * @LastEditTime: 2021.5.20
 -->
<template>
    <!-- <scroll class="scroll-wrapper" ref="scroll"> -->
    <div class="layer animated fadeIn">
        <div class="rocket animated">
            <img src="../../assets/rocket.png" alt="" />
        </div>
        <div class="layer-head">
            <el-row class="container">
                <el-col :xs="24" :sm="10" :span="12" class="layer-head-left">
                    <div class="head-logo-title">
                        <img src="../../assets/logo4.jpg" alt="" class="logo" />
                        <span> TickNet Studio </span>
                    </div>
                </el-col>
                <el-col :xs="0" :sm="14" :span="12" class="layer-head-right">
                    <div class="nav">
                        <ul>
                            <li><a href="#home">首页</a></li>
                            <li><a href="#product">产品介绍</a></li>
                            <li><a href="#group">组别介绍</a></li>
                            <li><a href="#member">团队成员</a></li>
                            <li><a href="#about">关于我们</a></li>
                        </ul>
                    </div>
                </el-col>
            </el-row>
        </div>
        <Home></Home>
        <Product></Product>
        <div class="cutLine container"></div>
        <Group></Group>
        <Member></Member>
        <div class="layer-foot">
            <div id="about" class="layer-foot-bottom">
                <el-row class="container">
                    <el-col :xs="24" :span="16">
                        <div class="bottom-mainTitle">Ticknet 工作室</div>
                        <div class="bottom-content">
                            地址：湖南科技大学南校逸夫楼308
                        </div>
                        <div class="bottom-content">
                            邮箱：2402007575@qq.com
                        </div>
                        <div class="bottom-icon">
                            <img src="../../assets/QQcode.png" alt="" />
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <div class="copyright">© 版权所有 湘ICP备16021626-1</div>
                </el-row>
            </div>
        </div>
    </div>
    <!-- </scroll> -->
</template>

<script>
import { addClass, removeClass } from '@/util/oprateClass.js'
// import scroll from '@/components/scroll.vue'
import Group from '../group/index.vue'
import Home from '../home/index.vue'
import Member from '../member/index.vue'
import Product from '../product/index.vue'

export default {
    components: {
        Group,
        Home,
        Member,
        Product
        // scroll
    },
    data() {
        return {
            activelabel: '首页',
            activeName: '/layer/home',
            y: ''
        }
    },
    watch: {},
    mounted() {
        const rocket = document.querySelector('.rocket')
        rocket.addEventListener('click', () => {
            let currentPosition = null
            let timer = null
            const speed = 30
            timer = setInterval(function () {
                currentPosition =
                    document.documentElement.scrollTop ||
                    document.body.scrollTop
                currentPosition -= speed // speed变量
                if (currentPosition > 0) {
                    window.scrollTo(0, currentPosition)
                } else {
                    window.scrollTo(0, 0)
                    clearInterval(timer)
                }
            }, 1)
        })
        function throttle(add, remove, rocket, delay) {
            let isRun = true
            return function (...args) {
                if (!isRun) {
                    return false
                }

                isRun = false

                setTimeout(() => {
                    if (window.pageYOffset > 600) {
                        remove(rocket, 'bounceOutDown')
                        add(rocket, 'bounceInUp')
                        isRun = true
                    } else {
                        remove(rocket, 'bounceInUp')
                        add(rocket, 'bounceOutDown')
                        isRun = true
                    }
                    isRun = true
                }, delay)
            }
        }
        window.onscroll = throttle(addClass, removeClass, rocket, 50)
        const e = '%c'

        const n =
            'color:#3bbcf2;text-shadow:1px 0px 1px #666; 5px 5px 2px #373E40, 5px 5px 5px #A2B4BA, 5px 5px 10px #82ABBA;font-weight:bolder;font-size:5px'

        console.log(
            `${e}
                -------------------------------------------------------------------------------------------------------
              /|    ___                       ___           ___           ___           ___           ___		   	 /|
             / |   /\\  \\          ___        /\\  \\         /\\__\\         /\\__\\         /\\  \\         /\\  \\    	    / |
            /  |   \\:\\  \\        /\\  \\      /::\\  \\       /:/  /        /::|  |       /::\\  \\        \\:\\  \\   	   /  |
           /   |    \\:\\  \\       \\:\\  \\    /:/\\:\\  \\     /:/__/        /:|:|  |      /:/\\:\\  \\        \\:\\  \\  	  /   |
          /    |    /::\\  \\      /::\\__\\  /:/  \\:\\  \\   /::\\__\\____   /:/|:|  |__   /::\\~\\:\\  \\       /::\\  \\ 	 /    |
         /	   |___/:/\\:\\__\\____/:/\\/__/_/:/__/ \\:\\__\\_/:/\\:::::\\__\\_/:/ |:| /\\__\\_/:/\\:\\ \\:\\__\\_____/:/\\:\\__\\__/     |
         \\     |  /:/  \\/__/ /\\/:/  /    \\:\\  \\  \\/__/ \\/_|:|~~|~    \\/__|:|/:/  / \\:\\~\\:\\ \\/__/    /:/  \\/__/  \\     |
          \\    | /:/  /      \\::/__/      \\:\\  \\          |:|  |         |:/:/  /   \\:\\ \\:\\__\\     /:/  /     	 \\    |
           \\   | \\/__/        \\:\\__\\       \\:\\  \\         |:|  |         |::/  /     \\:\\ \\/__/     \\/__/          \\   |
            \\  |               \\/__/        \\:\\__\\        |:|  |         /:/  /       \\:\\__\\            welcome to \\  |
             \\ |                             \\/__/         \\|__|         \\/__/         \\/__/  		 @ticknet studio\\ |
               -------------------------------------------------------------------------------------------------------
	 `,
            n
        )
    },
    methods: {
        handleClick(e) {}
    }
}
</script>

<style>
    .scroll-wrapper {
        height: 100vh;
        overflow: hidden;
    }
    .layer {
        overflow: hidden;
        position: relative;
        font-family: 'byys';
    }

    .rocket {
        position: fixed;
        width: 100px;
        /* height: 100px; */
        z-index: 1000;
        bottom: 200px;
        right: 100px;
        overflow: hidden;
        transform: scale(0);
        cursor: pointer;
    }

    .rocket img {
        width: 80px;
        /* height: 100px; */
    }
    @media screen and (max-width: 768px) {
        .rocket {
            width: 60px;
            /* height: 100px; */
            bottom: 40px;
            right: 40px;
            overflow: hidden;
            transform: scale(0);
            cursor: pointer;
        }
        .rocket img {
            width: 60px;
        }
    }
    .layer-head {
        z-index: 999;
        width: 100%;
        height: 80px;
        margin: 0 auto;
    }

    .layer-head-left {
        padding: 15px 0;
        height: 80px;
        font-size: 30px;
        /* line-height: 80px; */
        text-align: left;
        font-family: 'byys';
    }
    .head-logo-title {
        height: 50px;
    }
    @media screen and (max-width: 768px) {
        .head-logo-title {
            text-align: center;
        }
    }
    .logo {
        top: 15px;
        width: 50px;
        vertical-align: middle;
    }
    .head-logo-title span {
    }
    .layer-head-right {
        /* margin-top: 20px; */
        margin: 0 auto;
        height: 80px;
        font-family: 'zch';
    }
    .layer-head-right .nav ul {
        display: flex;
        justify-content: space-between;
    }
    .layer-head-right .nav ul li {
        width: 80px;
        list-style: none;
        text-decoration: none;
        height: 80px;
        line-height: 80px;
    }
    .layer-foot {
    }

    .layer-foot-top {
        padding: 20px 40px;
        /* height: 250px; */
        background-color: rgb(64, 64, 64);
    }

    .top-title {
        height: 100px;
        font-size: 40px;
        line-height: 100px;
        color: #fff;
    }

    .top-p {
        /* height: 50px; */
        font-size: 20px;
        line-height: 50px;
        color: #fff;
    }

    .top-bt {
        height: 60px;
        line-height: 60px;
    }
    .joinWe {
        vertical-align: text-top;
        /* line-height: 50px; */
        /* background-color: rgb(32, 135, 219); */
    }
    .layer-foot-bottom {
        text-align: left;
        padding: 40px 0 0 0;
        color: #fff;
        /* height: 350px; */
        background-color: #2d2d2d;
    }

    .layer-foot-bottom .el-col {
        padding-left: 10%;
    }

    .bottom-mainTitle {
        font-size: 25px;
        height: 60px;
        line-height: 60px;
    }

    .bottom-sideTitle {
        color: #ddd;
        font-size: 20px;
        line-height: 60px;
        height: 60px;
    }

    .bottom-content {
        height: 30px;
        line-height: 30px;
    }

    .bottom-icon {
        padding: 10px 0 10px 0;
        /* height: 0px; */
        /* line-height: 60px; */
    }
    .bottom-icon img {
        width: 100px;
        height: 100px;
    }
    .bottom-link {
        height: 40px;
        line-height: 40px;
    }
    .cutLine {
        position: relative;
        height: 20px;
        width: 900px;
        max-width: 100%;
        /* transform: translate(-30px); */
        /* margin: 0 0; */
        border-radius: 0 10px 10px 0;
        background-image: radial-gradient(
            circle 248px at center,
            #16d9e3 0%,
            #30c7ec 47%,
            #46aef7 100%
        );
    }
    .cutLine::before {
        content: '';
        position: absolute;
        top: -60px;
        left: 20px;
        width: 80px;
        height: 80px;
        background-image: url('../../assets/008.png');
        background-size: 100%;
        background-repeat: no-repeat;
    }
    .copyright {
        vertical-align: top;
        text-align: center;
        height: 50px;
        line-height: 50px;
    }
    .bottom-content a {
        color: #fff !important;
    }
</style>
