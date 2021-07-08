
<template>
    <div id="product" class="product container">
        <div class="product-title">产品介绍</div>
        <div class="product-contents">
            <div class="p-content animated">
                <div class="p-content-icon">⚑</div>
                <div class="p-content-title">学习服务</div>
                <div class="p-content-p">
                    查课表、查成绩、查教室、图书查询、图书续借
                </div>
            </div>
            <div class="p-content animated">
                <div class="p-content-icon">⚑</div>
                <div class="p-content-title">面对面签到</div>
                <div class="p-content-p">基于位置的签到系统</div>
            </div>
            <div class="p-content animated">
                <div class="p-content-icon">⚑</div>
                <div class="p-content-title">微课堂</div>
                <div class="p-content-p">优秀的教学辅助工具</div>
            </div>
            <div class="p-content animated">
                <div class="p-content-icon">⚑</div>
                <div class="p-content-title">失物招领</div>
                <div class="p-content-p">亲，丢东西了吗？</div>
            </div>
            <div class="p-content animated">
                <div class="p-content-icon">⚑</div>
                <div class="p-content-title">上网注册</div>
                <div class="p-content-p">助力校友临时上网</div>
            </div>
            <div class="p-content animated">
                <div class="p-content-icon">⚑</div>
                <div class="p-content-title">校内社区</div>
                <div class="p-content-p">科大人自己的社区</div>
            </div>
            <div class="p-content animated">
                <div class="p-content-icon">⚑</div>
                <div class="p-content-title">党校系统</div>
                <div class="p-content-p">想要为入党的你提供一个便捷的平台</div>
            </div>
            <div class="p-content animated">
                <div class="p-content-icon">⚑</div>
                <div class="p-content-title">校园闲置</div>
                <div class="p-content-p">同校当面交易，物尽其用！</div>
            </div>
            <div class="p-content animated">
                <div class="p-content-icon">⚑</div>
                <div class="p-content-title">汽车入校申请</div>
                <div class="p-content-p">科大人乘车回校必备</div>
            </div>
            <div class="p-content animated">
                <div class="p-content-icon">⚑</div>
                <div class="p-content-title">微信考勤系统</div>
                <div class="p-content-p">艺术学院的考勤神器</div>
            </div>
        </div>
    </div>
</template>

<script>
import { addClass, removeClass } from '@/util/oprateClass.js'
export default {
    data() {
        return {}
    },

    mounted() {
        if (document.body.clientWidth < 768) {
            return
        }
        const ps = document.querySelectorAll('.p-content')
        for (let i = 0; i < ps.length; i++) {
            ps[i].addEventListener('mouseenter', () => {
                addClass(ps[i], 'swing')
            })
            ps[i].addEventListener('mouseleave', () => {
                removeClass(ps[i], 'swing')
            })
        }
    }
}
</script>

<style>
    .product {
        /* overflow: hidden; */
        /* min-width: 90%; */
        /* height: 110%; */
    }
    .product-title {
        font-size: 30px;
        height: 50px;
        line-height: 50px;
        margin-top: 20px;
        border-bottom: 1px solid #000;
    }
    .product-contents {
        margin: 100px 0;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
    }
    .p-content {
        cursor: pointer;
        position: relative;
        padding: 20px 40px;
        width: 310px;
        /* max-width: 80%; */
        margin: 50px auto;
        z-index: 999;
        height: 230px;
        /* border: 1px solid #ddd; */
        box-shadow: 3px 3px 8px #ddd;
        transform-origin: 50% -29%;
    }
    /*点*/
    .p-content::after {
        position: absolute;
        top: -74px;
        left: 148px;
        content: '';
        width: 15px;
        height: 15px;
        border-radius: 7.5px;
        background-color: #cfd0d0;
        box-shadow: 2px 2px 5px #ddd;
    }
    .p-content::before {
        content: '';
        position: absolute;
        top: -49px;
        left: 105px;
        height: 100px;
        width: 100px;
        /* border: 2px solid red; */
        opacity: 0.2;
        transform: rotate(45deg);
        box-shadow: 0px -2px 1px #c2c2c2, 2px 0px 1px #ddd inset;
        background-color: #fff;
    }
    .p-content-icon {
        height: 80px;
        line-height: 80px;
        font-size: 50px;
        color: #3894ff;
    }
    .p-content-title {
        /* color: #aaa; */
        color: #3d78bb;
        height: 30px;
        line-height: 30px;
        font-style: 25px;
    }
    .p-content-p {
        line-height: 30px;
        color: #aaa;
    }
    @media screen and (max-width: 768px) {
        .p-content-icon {
            height: 40px;
            line-height: 40px;
            font-size: 30px;
            color: #2f527a;
        }
        .p-content-p {
            color: #fff;
        }
        .p-content::after {
            display: none;
        }
        .p-content::before {
            display: none;
        }
        .p-content {
            margin: -40px auto;
            box-shadow: none;
            width: 200px;
            height: 180px;
            padding: 10px;
            border-radius: 10px;
            transition: all 0.5s;
        }
        .p-content:hover {
            transform: scale(1.2);
            z-index: 999999;
            /* transform: translate(30px,-20px); */
        }
        .p-content:nth-child(even) {
            /* background-color: #E6B518; */
            transform: rotate(12deg);
            left: 50%;
        }
        .p-content:nth-child(even):hover {
            left: 0%;
            transform: none;
        }
        .p-content:nth-child(odd) {
            /* background-color: #E3594B; */
            transform: rotate(12deg);
            right: 35%;
        }
        .p-content:nth-child(odd):hover {
            right: 0;
            transform: none;
        }
        .p-content:nth-child(1) {
            background-color: #e3594b;
        }
        .p-content:nth-child(2) {
            background-color: #94e0d4;
        }
        .p-content:nth-child(3) {
            background-color: #e6b518;
        }
        .p-content:nth-child(4) {
            background-color: #e3594b;
        }
        .p-content:nth-child(5) {
            background-color: #d6d677;
        }
        .p-content:nth-child(6) {
            background-color: #e6b518;
        }
        .p-content:nth-child(7) {
            background-color: #b36231;
        }
        .p-content:nth-child(8) {
            background-color: #d6d677;
        }
        .p-content:nth-child(9) {
            background-color: #94e0d4;
        }
        .p-content:nth-child(10) {
            background-color: #b36231;
        }
    }
</style>
