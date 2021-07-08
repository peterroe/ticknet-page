<!-- @format -->

<template>
    <div class="demo">
        <!-- <button @click="shuffle">Shuffle</button> -->
        <el-row>
            <el-col :span="12">
                <div v-if="imgs[0]" class="showMsg">
                    <img :src="imgs[0].imgsrc" />
                </div>
            </el-col>
            <el-col :span="12">
                <div class="a-content">
                    <div class="a-content-title">
                        {{ imgs[0] ? imgs[0].name : '' }}
                    </div>
                    <div class="a-content-p">
                        {{ imgs[0] ? imgs[0].p : '' }}
                    </div>
                </div>
            </el-col>
        </el-row>

        <transition-group name="cells" tag="div" class="a-container">
            <div
                v-for="(img, index) in imgs"
                :key="img.no"
                class="cell"
                @click.capture.stop="shut(index)"
            >
                <div>
                    <img :src="img.imgsrc" />
                </div>
            </div>
        </transition-group>
    </div>
</template>

<script>
    export default {
        props: {
            avatarimg: {
                type: Array,
                default: function () {
                    return []
                }
            }
        },
        data() {
            return {
                imgs: [],
                cells: Array.apply(null, {
                    length: 81
                }).map(function (_, index) {
                    return {
                        id: index,
                        number: (index % 9) + 1
                    }
                })
            }
        },
        mounted() {
            this.imgs = this.avatarimg
            console.log(this.imgs)
            this.$timeout = setInterval(() => {
                this.shuffle()
            }, 3000)
        },

        methods: {
            shut(e) {
                clearInterval(this.$timeout)
                this.imgs.unshift(...this.imgs.splice(e, 1))
                this.$timeout = setInterval(() => {
                    this.shuffle()
                }, 3000)
            },
            shuffle: function () {
                this.imgs.unshift(this.imgs.pop())
            }
        }
    }
</script>

<style>
    .demo {
        /* perspective: 1000px; */
        padding: 50px 0 80px 0;
        /* max-width: 100vw; */
        max-width: 1200px;
        width: 100vw;
        background-color: #38487e;
    }
    .showMsg {
        /* animation: roY ease-in 1s infinite; */
        /* transform: rotateY(-40deg); */
        /* transform-origin: left; */
        position: relative;
        z-index: 5;
        width: 170px;
        height: 170px;
        padding: 10px;
        margin: 0 0 20px 0;
        cursor: pointer;
    }
    .a-content {
        float: right;
        color: #fff;
        position: relative;
        right: 0;
        top: 0;
        z-index: 5;
        width: 170px;
        /* height: 170px; */
        padding: 10px;
        margin: 0 0 20px 0;
    }
    .a-content::after {
        content: '';
        width: 170px;
        height: 120px;
        /* max-width: 80%; */
        border-radius: 10px 0 0 10px;
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        left: 0;
        z-index: -1;
        background-color: #8999d2;
    }
    .a-content-title {
        font-size: 22px;
        height: 40px;
        line-height: 40px;
    }
    /* @keyframes roY {
        0% {
            transform: rotateY(-90deg);
        }
        100% {
            transform: rotateY(-0deg);
        }
    } */
    .showMsg::after {
        content: '';
        width: 170px;
        height: 170px;
        border-radius: 0 10px 10px 0;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        background-color: #8999d2;
    }
    .showMsg img {
        /* opacity: .8; */
        border-radius: 75px;
        width: 150px;
        height: 150px;
    }

    .a-bt {
        width: 100px;
        height: 30px;
        border: 1px solid #666666;
        border-radius: 5px;
        background: rgba(195, 197, 221, 0.36);
        margin: 10px;
    }

    .a-bt:active,
    .a-bt:hover {
        box-shadow: 2px 3px 2px #999 inset;
        border: 1.5px solid rgba(195, 197, 221, 0.57);
    }

    .a-container {
        display: flex;
        flex-wrap: wrap;
        /*flex容器为多行。该情况下flex子项溢出的部分会被放置到新行，子项内部会发生断行*/
        width: 100%;
        justify-content: center;
    }
    .a-container img {
        cursor: pointer;
    }
    .cell {
        display: flex;
        justify-content: center;
        /*在弹性盒对象的 <div> 元素中的各项周围留有空白,用于设置或检索弹性盒子元素在主轴（横轴）方向上的对齐方式*/
        align-items: stretch;
        justify-content: stretch;
        /*居中对齐弹性盒的各项 <div> 元*/
        /* width: 100px; */
        /* height: 100px; */
        /* max-height: 80px; */
        /* border: 1px solid #aaa; */
        /* margin-right: -1px; */
        /* margin-bottom: -1px; */
        padding: 5px;
    }
    .cell img {
        vertical-align: middle;
        opacity: 0.9;
        height: 80px;
        width: 80px;
        border-radius: 5px;

        /* width: 80px; */
    }
    @media screen and (min-width: 800px) {
        .cell img {
            height: 120px;
            width: 120px;
        }
        .a-content {
            right: 0px;
            top: 0;
            width: 270px;
            height: 100px;
            padding: 10px;
            margin: 0 0 20px 0;
        }
        .a-content-title {
            font-size: 25px;
        }
        .a-content-p {
            font-size: 18px;
        }
        .a-content::after {
            content: '';
            width: 270px;
            height: 180px;
            /* max-width: 80%; */
            border-radius: 10px 0 0 10px;
            top: 50%;
            /* transform: translate(0,-50%); */
        }
        .a-container {
            padding: 0 120px;
        }
    }
    /* .cell:nth-child(3n) {
            margin-right: 0;
        }

        .cell:nth-child(27n) {
            margin-bottom: 0;
        } */

    .cells-move {
        transition: transform 1s;
    }
</style>
