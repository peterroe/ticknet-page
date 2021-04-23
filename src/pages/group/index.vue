<template>
	<div class="group container">
		<div class="group-title"></div>
		<div class="group-contents">
			<div class="g-content">
				<div class="g-content-title">
					研发组
				</div>
				<div class="g-content-sidetitle">
					运维与安全工程师
				</div>
				<div class="g-content-p">进行日常的服务器运维</div>
				<div class="g-content-p">负责系统稳定和安全的工作</div>
				<div class="g-content-p">Linux、Web安全</div>
				<div class="g-content-bt">
					<el-button size="mini">了解更多</el-button>
				</div>
			</div>
			<div class="g-content">
				<div class="g-content-title">
					研发组
				</div>
				<div class="g-content-sidetitle">
					后端工程师
				</div>
				<div class="g-content-p">编写的代码在服务器端运行</div>
				<div class="g-content-p">为产品提供可靠的数据接口</div>
				<div class="g-content-p">PHP/Node/Java/python</div>
				<div class="g-content-bt">
					<el-button size="mini">了解更多</el-button>
				</div>
			</div>
			<div class="g-content">
				<div class="g-content-title">
					研发组
				</div>
				<div class="g-content-sidetitle">
					前端工程师
				</div>
				<div class="g-content-p">负责PC和移动端网页开发</div>
				<div class="g-content-p">小程序、WebApp</div>
				<div class="g-content-p">JavaScript、CSS、HTML</div>
				<div class="g-content-bt">
					<el-button size="mini">了解更多</el-button>
				</div>
			</div>
			<div class="g-content">
				<div class="g-content-title">
					运营组
				</div>
				<div class="g-content-sidetitle">
					产品运营方向
				</div>
				<div class="g-content-p">负责工作室产品项目管理</div>
				<div class="g-content-p">完成用户调研、需求分析</div>
				<div class="g-content-p">Axure、墨刀、Xmind等</div>
				<div class="g-content-bt">
					<el-button size="mini">了解更多</el-button>
				</div>
			</div>
			<div class="g-content">
				<div class="g-content-title">
					运营组
				</div>
				<div class="g-content-sidetitle">
					新媒体编辑方向
				</div>
				<div class="g-content-p">湖南科技服务号运营</div>
				<div class="g-content-p">负责团队的外宣工作</div>
				<div class="g-content-p">Alexa、Spss、场景秀等</div>
				<div class="g-content-bt">
					<el-button size="mini">了解更多</el-button>
				</div>
			</div>
			<div class="g-content">
				<div class="g-content-title">
					策划组
				</div>
				<div class="g-content-sidetitle">
					策划方向
				</div>
				<div class="g-content-p">负责日常活动、招新策划</div>
				<div class="g-content-p">团队规章制度与监督</div>
				<div class="g-content-p">Word、Excel等</div>
				<div class="g-content-bt">
					<el-button size="mini">了解更多</el-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style>
	.group {
		
	}
	.group-title {
		font-size: 30px;
		margin-top: 20px;
	}
	.group-contents {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
	}
	.g-content {
		background-image: url(../../assets/hb.jpg);
		background-size: 100% ;
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
		color:#9d9d9d;
		margin: 3px 0;
	}
	.g-content-bt {
		height: 50px;
		line-height: 60px;
	}
</style>
