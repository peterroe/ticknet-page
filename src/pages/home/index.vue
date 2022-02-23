<!-- @format -->

<template>
    <div id="home" class="home">
        <!-- <el-carousel trigger="click" height="700px"> -->
        <div class="bg-one">
            <div class="bg-content">
                <div class="bg-title">Tick Net工作室</div>
                <div class="bg-p">
                    不断成长不断进步 锐意进取的优秀团队<br />等待您的加入
                </div>
                <a href="http://join.ticknet.hnust.cn"><el-button plain class="joinWe"> 加入我们 </el-button></a>
            </div>
        </div>
        <!-- <el-carousel-item class="bg-two"></el-carousel-item> -->
        <!-- <el-carousel-item class="bg-three"></el-carousel-item> -->
        <!-- </el-carousel> -->
        <div id="teamIntruduce" class="teamIntruduce container">
            <div class="teamIntruduce-title">
                <span class="bg-pic">团队介绍</span>
            </div>
            <div class="teamIntruduce-p">
                <el-col :span="24">
                    <p>
                        工作室是由一群有梦想、热爱互联网的同学们自发成立，团队成员来自各个学院<br />
                    </p>

                    <p>
                        工作方式：
                        以研究助成长，以推广促提高，以技术及管理提升能力，在研发推广实用、有趣、智能的互联网应用的道路上勇往直前<br />
                    </p>
                    <p>
                        我们的奋斗目标：建设成一个有影响力、促进个人成长、能够持续发展的学生团队<br />
                    </p>
                </el-col>
            </div>

            <div class="teamIntruduce-photo">
                <el-row>
                    <el-col :xs="24" :span="12">
                        <img src="https://hnust-ticknet-swzl.oss-cn-hangzhou.aliyuncs.com/secondClass/2021/11/05/24c39755-5d83-4f60-a07a-876450df01d3.webp" alt="" />
                    </el-col>
                    <el-col :xs="24" :span="12">
                        <img src="https://hnust-ticknet-swzl.oss-cn-hangzhou.aliyuncs.com/secondClass/2021/11/05/17fae1a6-2bdd-4116-a331-70b0fc7ccd7e.webp" alt="" />
                    </el-col>
                </el-row>
            </div>
        </div>
        <div id="teamHistory" class="teamHistory container">
            <div class="teamHistory-title">团队历史</div>
            <div class="teamHistory-timeLine">
                <el-timeline size="large">
                    <el-timeline-item
                        v-for="(activity, index) in activities"
                        :key="index"
                        :timestamp="activity.timestamp"
                        :icon="activity.icon"
                        :type="activity.type"
                        :color="activity.color"
                        :size="activity.size"
                        placement="top"
                    >
                        {{ activity.content }}
                    </el-timeline-item>
                </el-timeline>
            </div>
        </div>
        <div id="achevement" class="achievement container">
            <el-row>
                <el-col :xs="24" :span="14">
                    <div class="achievement-title">团队成就</div>
                    <div class="achievement-p">
                        在湖南科技大学企业号上线了自主研发多个产品，如汽车入校，校园闲置，失物招领等，产品日访问量大。为解决学生校园生活日常需求问题提供了便利。科大企业号关注人数近八万人。
                    </div>
                    <div class="achievement-p">
                        软件著作权专利6项，团队获奖国家级比赛证书共3项，省级比赛证书2项，市级证书1项，校十佳科技创新团队
                    </div>
                    <div class="achievement-p">
                        团队许多老成员现就职于京东、哔哩哔哩、字节跳动等著名公司。
                    </div>
                </el-col>
                <el-col :xs="24" :span="10">
                    <div class="achievement-img">
                        <img src="https://hnust-ticknet-swzl.oss-cn-hangzhou.aliyuncs.com/secondClass/2021/11/05/258f8846-40af-42a4-8a99-afcf2d118855.webp" alt="" />
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                reverse: true,
                activities: [
                    {
                        content: '工作室正式成立',
                        timestamp: '2015-6',
                        type: 'success',
                        color: '#ade8f4'
                    },
                    {
                        content: '挂靠网络信息中心，承担我校企业号开发',
                        timestamp: '2016-1',
                        color: '#90e0ef'
                    },
                    {
                        content: '开始全面向全校范围招新，建立团队制度',
                        timestamp: '2016-5',
                        color: '#48cae4'
                    },
                    {
                        content: '在老师的指导下，生产互联网产品10余项并上线',
                        timestamp: '2018-5',
                        color: '#00b4d8'
                    },
                    {
                        content: '调整分组为：研发组设计组运营组',
                        timestamp: '2018-4',
                        color: '#0096c7'
                    },
                    {
                        content: '设计组和运营组合并为运营组',
                        timestamp: '2019-6',
                        color: '#0077b6'
                    },
                    {
                        content: '上线失物招领和校园闲置',
                        timestamp: '2021-3',
                        color: '#023e8a'
                    }
                ]
            }
        },
        mounted() {
            console.log(this)
        }
    }
</script>

<style>
    .home {
        font-family: 'byys';
        overflow: hidden;
        /* background-color: #FFDDDD; */
        /* height: 1000px; */
    }
    .teamIntruduce {
        padding-bottom: 50px;
    }
    .bg-pic::before {
        position: absolute;
        /* left: 540px; */
        top: -80px;
        content: '';
        width: 180px;
        height: 160px;
        background-image: url('https://hnust-ticknet-swzl.oss-cn-hangzhou.aliyuncs.com/secondClass/2021/11/05/fe7311c5-3318-4afe-8067-08ebac2b60f5.webp');
        background-repeat: no-repeat;
        background-size: 100%;
    }
    .teamIntruduce-title {
        position: relative;
        margin-top: 120px;
        font-size: 30px;
        height: 80px;
        line-height: 80px;
        border-bottom: 1px solid #ddd;
    }
    /* .teamIntruduce-title */
    .teamIntruduce-p {
        /* height: 40px; */
        /* padding: 0 20px; */
        font-size: 18px;
        line-height: 40px;
        color: #6d6d6d;
    }
    .teamIntruduce-p p {
        margin: 10px 0;
    }
    .teamIntruduce-photo img {
        width: 400px;
        max-width: 80%;
        margin: 20px 0;
    }
    .teamHistory {
        background-image: url('https://hnust-ticknet-swzl.oss-cn-hangzhou.aliyuncs.com/secondClass/2021/11/05/4c0c7768-cf75-4eb9-823e-1b3224570c4b.webp');
        background-repeat: no-repeat;
        background-size: auto 100%;
        position: relative;
        /* overflow: hidden; */
        /* background-color:  #f2f2f2; */
        text-align: left;
        border: 1px solid #aaa;
    }
    .teamHistory::after {
        position: absolute;
        right: 50px;
        bottom: -23px;
        content: '';
        width: 100px;
        height: 200px;
        background-image: url('https://hnust-ticknet-swzl.oss-cn-hangzhou.aliyuncs.com/secondClass/2021/11/05/2e95fc76-457e-4b8e-8079-8f88ee0293a5.webp');
        background-repeat: no-repeat;
        background-size: 100%;
    }
    .teamHistory::before {
        position: absolute;
        left: 0;
        top: -50px;
        content: '';
        width: 150px;
        height: 200px;
        background-image: url('https://hnust-ticknet-swzl.oss-cn-hangzhou.aliyuncs.com/secondClass/2021/11/05/b59c4cf6-35d1-47e4-a064-0d174f805d7b.webp');
        background-repeat: no-repeat;
        background-size: 100%;
    }
    .teamHistory-title {
        text-align: center;
        height: 50px;
        line-height: 50px;
        font-size: 30px;
    }
    .teamHistory-timeLine {
        width: 80%;
        /* height: 300px; */
        margin: 0 auto;
    }
    .el-timeline-item__content {
        /* font-size: 16px; */
    }
    .achievement {
        text-align: left;
        padding: 20px;
    }
    .achievement-title {
        position: relative;
        font-size: 30px;
        height: 80px;
        line-height: 80px;
        border-bottom: 1px solid #ddd;
    }
    .achievement-title::before {
        content: '';
        position: absolute;
        top: 25px;
        right: 0px;
        width: 100px;
        height: 100px;
        background-image: url('https://hnust-ticknet-swzl.oss-cn-hangzhou.aliyuncs.com/secondClass/2021/11/05/cdf7c1f6-6c9e-43bb-8306-e9097eccbf87.webp');
        background-repeat: no-repeat;
        background-size: 100%;
    }
    .achievement-p {
        color: #9c9c9c;
        line-height: 25px;
        margin: 10px 0;
    }
    .achievement-img {
        /* margin: 0 auto; */
        /* height: 200px; */
        margin: 80px 0 0 0;
        text-align: center;
    }
    .achievement-img img {
        width: 300px;
        max-width: 80%;
    }
    @media screen and (max-width: 768px) {
        .achievement-img {
            margin: 30px 0 0 0;
            text-align: center;
        }
    }
    .el-timeline-item__timestamp {
        color: #219ebc;
    }
    .el-timeline-item__tail {
        border-left: 2px solid #219ebc;
    }
    .bg-one {
        width: 100%;
        /* min-height: 700px; */
        height: 500px;
        background-image: url('https://hnust-ticknet-swzl.oss-cn-hangzhou.aliyuncs.com/secondClass/2021/11/05/15f6dc0a-ebdd-48e4-8b54-5396fbf90f28.webp');
        background-repeat: no-repeat;
        background-size: 100% auto;
    }
    .bg-content {
        margin: 0 auto;
        width: 1200px;
        text-align: left;
        color: #fff;
        padding: 100px 50px;
    }
    .bg-title {
        /* padding: 0 50px; */
        height: 100px;
        line-height: 100px;
        font-size: 40px;
    }
    .bg-p {
        line-height: 25px;
        margin: 0 0 30px 0;
    }
    .joinWe {
        font-family: 'zch';
        width: 150px;
    }
    @media screen and (max-width: 768px) {
        .teamHistory {
            max-width: 100%;
            width: 100%;
            border: none;
        }
        .teamHistory::before {
            left: -30px;
        }
        .teamHistory::after {
            right: -20px;
        }
        .teamIntruduce-p {
            padding: 20px 0 0 0;
            max-width: 100%;
            width: 100vw;
        }
        .teamIntruduce-p p {
            font-size: 14px;
            line-height: 20px;
            text-align: left;
        }
    }
</style>
