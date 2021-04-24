<template>
	<div class="home">
		<el-carousel trigger="click" height="700px">
			<el-carousel-item class="bg-one"></el-carousel-item>
			<el-carousel-item class="bg-two"></el-carousel-item>
			<el-carousel-item class="bg-three"></el-carousel-item>
		</el-carousel>
		<div class="teamIntruduce container" >
			<div class="teamIntruduce-title">
				团队介绍
			</div>
			<div class="teamIntruduce-p">
				<p>
					工作室是由一群有梦想、热爱互联网的同学们自发成立，团队成员来自各个学院<br>
					工作方式： 以研推广使用有趣、只能的互联网应用为目标，以技术及管理提升能力、以运营及推广体现价值为工作理念，以互联网应用研发、运维<br>
					及推广为抓手，以团队建设为纽带，坚持以老带新、技术攻关<br>
					我们的奋斗目标：建设成一个有影响力、促进个人成长、能够持续发展的学生团队<br>
				</p>
				
			</div>

			<div class="teamIntruduce-photo">
				<el-row>
					<el-col :span="12">
						<img src="../../assets/logo.png" alt="">
					</el-col>
					<el-col :span="12">
						<img src="../../assets/logo.png" alt="">
					</el-col>
				</el-row>
			</div>
		</div>
		<div class="teamHistory container">
			<div class="teamHistory-title">
				团队历史
			</div>
			<div class="teamHistory-timeLine">
				<el-timeline size="large" >
				  <el-timeline-item
				    v-for="(activity, index) in activities"
				    :key="index"
				    :timestamp="activity.timestamp"
					:icon="activity.icon"
					:type="activity.type"
					:color="activity.color"
					:size="activity.size"
					placement="top">
				    {{activity.content}}
				  </el-timeline-item>
				</el-timeline>
			</div>
		</div>
		<div class="achievement container">
			<el-row>
				<el-col :span="14">
					<div class="achievement-title">
						团队成就
					</div>
					<div class="achievement-p">
						自主研发的许多产品 学生服务、校园社区等已在企业号上线，日访问量大。科大企业号关注人数近6万人，师生关注比例高达92.8%。
					</div>
					<div class="achievement-p">
						软件著作权专利四项；团队荣获国家级比赛证书共三项，省级比赛证书2项，市级证书一项
					</div>
					<div class="achievement-p">
						团队许多老成员现就职于京东、bilibili、今日头条等著名公司。
					</div>
				</el-col>
				<el-col :span="10">
					<div class="achievement-img">
						<img src="../../assets/logo.png" alt="">
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
        activities: [{
          content: '工作室正式成立',
          timestamp: '2015-6',
		  type: 'success',
		  color: '#ade8f4'
        }, {
          content: '挂靠网络信息中心，承担我校企业号开发',
          timestamp: '2016-1',
		  color: '#90e0ef'
        }, {
          content: '开始全面向全校范围招新，建立团队制度',
          timestamp: '2016-5',
		  color: '#48cae4'
        }, {
          content: '在老师的指导下，生产互联网产品10余项并上线',
          timestamp: '2018-5',
		  color: '#00b4d8'
        }, {
          content: '调整分组为：研发组设计组运营组',
          timestamp: '2018-4',
		  color: '#0096c7'
        }, {
          content: '设计组和运营组合并为运营组',
          timestamp: '2019-6',
		  color: '#0077b6'
        },{
          content: '至今...',
          // timestamp: '',
		  color: '#023e8a'
        }]
      };
    }
  };
</script>

<style>
	.home {
		font-family: 'byys';
		/* background-color: #FFDDDD; */
		/* height: 1000px; */
	}
	.teamIntruduce {
		padding-bottom: 50px;
	}
	.teamIntruduce-title {
		position: relative;
		margin-top: 120px;
		font-size: 30px;
		height: 80px;
		line-height: 80px;
		border-bottom: 1px solid #ddd;
	}
	.teamIntruduce-title::before {
		position: absolute;
		left: 540px;
		top: -80px;
		content: '';
		width: 180px;
		height: 160px;
		background-image: url(../../assets/006.png);
		background-repeat: no-repeat;
		background-size: 100%;
	}
	.teamIntruduce-p {
		/* height: 40px; */
		font-size: 18px;
		line-height: 40px;
		color:#6d6d6d;
	}
	.teamIntruduce-photo img {
		width: 400px;
	}
	.teamHistory {
		background-image: url(../../assets/预览图_千图网_编号33821555_01.png);
		background-repeat: no-repeat;
		background-size: 100%;
		position: relative;
		/* overflow: hidden; */
		/* background-color:  #f2f2f2; */
		text-align: left;
	}
	.teamHistory::after {
		position: absolute;
		right: 50px;
		bottom: -20px;
		content: '';
		width: 100px;
		height: 200px;
		background-image: url(../../assets/002.png);
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
		background-image: url(../../assets/007.png);
		background-repeat: no-repeat;
		background-size: 100%;
		
	}
	.teamHistory-title {
		text-align: center;
		height: 50px;
		line-height: 50px;
		font-size: 30px
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
		padding: 60px;
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
		background-image: url(../../assets/004.png);
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
		text-align: center;
	}
	.achievement-img img {
		width: 300px;
	}
	.el-timeline-item__timestamp  {
		color: #219ebc
	}
	.el-timeline-item__tail {
		border-left: 2px solid #219ebc;
	}
	.bg-one {
		width: 100vw;
		height: 100%;
		background-image: linear-gradient(to right, #74ebd5 0%, #9face6 100%);
	}
	.bg-two {
		width: 100vw;
		height: 100%;
		background-image: linear-gradient(to top, #a7a6cb 0%, #8989ba 52%, #8989ba 100%);
	}
	.bg-three {
		width: 100vw;
		height: 100%;
		background-image: linear-gradient(to top, #88d3ce 0%, #6e45e2 100%);
	}
</style>
