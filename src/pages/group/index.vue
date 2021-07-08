<!-- @format -->

<template>
    <div id="group" class="group container">
        <div class="group-title">
            <span style="border-left: 5px solid green">组别介绍</span>
        </div>
        <div class="group-contents">
            <div class="g-content">
                <div class="g-content-title">研发组</div>
                <div class="g-content-sidetitle">运维与安全工程师</div>
                <div class="g-content-p">进行日常的服务器运维</div>
                <div class="g-content-p">负责系统稳定和安全的工作</div>
                <div class="g-content-p">Linux、Web安全</div>

            </div>
            <div class="g-content">
                <div class="g-content-title">研发组</div>
                <div class="g-content-sidetitle">后端工程师</div>
                <div class="g-content-p">编写的代码在服务器端运行</div>
                <div class="g-content-p">为产品提供可靠的数据接口</div>
                <div class="g-content-p">PHP/Node/Java/Python</div>

            </div>

            <div class="g-content">
                <div class="g-content-title">研发组</div>
                <div class="g-content-sidetitle">前端工程师</div>
                <div class="g-content-p">负责PC和移动端网页开发</div>
                <div class="g-content-p">小程序、WebApp</div>
                <div class="g-content-p">JavaScript、CSS、HTML</div>

            </div>
            <div class="g-content">
                <div class="g-content-title">运营组</div>
                <div class="g-content-sidetitle">产品运营方向</div>
                <div class="g-content-p">负责工作室产品项目管理</div>
                <div class="g-content-p">完成用户调研、需求分析</div>
                <div class="g-content-p">Axure、墨刀、Xmind等</div>

            </div>
            <div class="g-content">
                <div class="g-content-title">运营组</div>
                <div class="g-content-sidetitle">新媒体编辑方向</div>
                <div class="g-content-p">湖南科技服务号运营</div>
                <div class="g-content-p">负责团队的外宣工作</div>
                <div class="g-content-p">Alexa、Spss、场景秀等</div>

            </div>
            <div class="g-content">
                <div class="g-content-title">策划组</div>
                <div class="g-content-sidetitle">策划方向</div>
                <div class="g-content-p">负责日常活动、招新策划</div>
                <div class="g-content-p">团队规章制度与监督</div>
                <div class="g-content-p">Word、Excel等</div>

            </div>
        </div>
    </div>
</template>

<script>
</script>

<style>
    .group {
        /* text-indent: 2px; */
    }
    .group-title {
        font-size: 30px;
        margin-top: 20px;
        margin-bottom: 30px;
    }
    .group-contents {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .g-content {
        position: relative;
        background-image: url(../../assets/hb.jpg);
        background-size: 100%;
        background-repeat: no-repeat;
        width: 240px;
        height: 320px;
        /* border: 1px solid #ddd; */
        margin: 40px 80px;
        padding: 40px;
    }

    .g-content-title {
        font-size: 24px;
    }
    .g-content-sidetitle {
        height: 40px;
        font-size: 18px;
        line-height: 40px;
    }
    .g-content-p {
        font-size: 16px;
        text-align: left;
        color: #9d9d9d;
        margin: 3px 0;
    }
    .g-content-bt {
        height: 50px;
        line-height: 60px;
    }
    @media screen and (max-width: 768px) {
        .g-content {
            left: -20px;
            margin: 20px auto;
            border-radius: 10px;
        }
        /* .g-content:nth-child()::before {
			content: '';
			position: absolute;
			z-index: -2;
			width: 110%;
			left: 0;
			transform: translate(-10px,-60px) rotate(-2deg);
			height: 110%;
			border-radius: 20px;
			background-image: linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%);

		} */
        .g-content::before {
            content: '';
            position: absolute;
            z-index: -2;
            width: 110%;
            left: 0;
            border-radius: 20px;
        }
        .g-content:nth-child(1) {
            left: -40px;
        }
        .g-content:nth-child(1)::before {
            transform: translate(-10px, -60px) rotate(-2deg);
            height: 110%;
            border-radius: 20px;
            background-image: linear-gradient(
                to right,
                #f78ca0 0%,
                #f9748f 19%,
                #fd868c 60%,
                #fe9a8b 100%
            );
        }
        .g-content:nth-child(2) {
            top: -50px;
            left: 40px;
        }
        .g-content:nth-child(2)::before {
            transform: translate(-10px, -60px) rotate(3deg);
            height: 110%;
            border-radius: 20px;
            background-image: linear-gradient(to top, #48c6ef 0%, #6f86d6 100%);
        }
        .g-content:nth-child(3) {
            top: -70px;
            /* left: 40px;	 */
        }
        .g-content:nth-child(3)::before {
            transform: translate(-10px, -60px) rotate(-5deg);
            height: 110%;
            border-radius: 20px;
            background-image: linear-gradient(
                to top,
                #505285 0%,
                #585e92 12%,
                #65689f 25%,
                #7474b0 37%,
                #7e7ebb 50%,
                #8389c7 62%,
                #9795d4 75%,
                #a2a1dc 87%,
                #b5aee4 100%
            );
        }
        .g-content:nth-child(4) {
            top: -80px;
            left: 40px;
        }
        .g-content:nth-child(4)::before {
            transform: translate(-10px, -60px) rotate(15deg);
            height: 110%;
            border-radius: 20px;
            background-image: linear-gradient(to top, #ff0844 0%, #ffb199 100%);
        }
        .g-content:nth-child(5) {
            top: -90px;
            left: -60px;
        }
        .g-content:nth-child(5)::before {
            transform: translate(-10px, -60px) rotate(-8deg);
            height: 110%;
            background-image: linear-gradient(to top, #cc208e 0%, #6713d2 100%);
        }
        .g-content:nth-child(6) {
            top: -110px;
            left: 60px;
        }
        .g-content:nth-child(6)::before {
            transform: translate(-10px, -60px) rotate(8deg);
            height: 110%;
            background-image: linear-gradient(-20deg, #00cdac 0%, #8ddad5 100%);
        }
    }
</style>
