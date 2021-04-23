<template>
	<scroll class="scroll-wrapper" ref="scroll">
		<div class="layer animated fadeIn">
			<div class="rocket animated">
				<img src="../../assets/rocket.png" alt="">
			</div>
			<div class="layer-head">
				<el-row>
					<el-col :span="12" class="layer-head-left">
						TickNet工作室招新系统
					</el-col>
					<el-col :span="12" class="layer-head-right">
						<el-tabs @tab-click="handleClick">
							<el-tab-pane data-no="0" name="home" label="首页"></el-tab-pane>
							<el-tab-pane data-no="1" name="product" label="产品介绍"></el-tab-pane>
							<el-tab-pane data-no="2" name="group" label="组别介绍"></el-tab-pane>
							<el-tab-pane data-no="3" name="member" label="团队成员"></el-tab-pane>
							<el-tab-pane data-no="4" name="about" label="关于我们"></el-tab-pane>
						</el-tabs>
					</el-col>
				</el-row>
			</div>
			<Home></Home>
			<Product></Product>
			<Group></Group>
			<Member></Member>
			<div class="layer-foot">
				<div class="layer-foot-top">
					<div class="top-title">
						TickNet工作室
					</div>
					<div class="top-p">
						不断成长不断进步，锐意进取的优秀团队 等待您的加入
					</div>
					<div class="top-bt">
						<el-button plain>加入我们</el-button>
					</div>
				</div>
				<div class="layer-foot-bottom">
					<el-row>
						<el-col :span="8">
							<div class="bottom-mainTitle">Ticknet 工作室</div>
							<div class="bottom-content">地址：湖南科技大学南校逸夫楼305</div>
							<div class="bottom-content">电话：23897432</div>
							<div class="bottom-content">邮箱：slkdfjsg@xxx.com</div>
							<div class="bottom-icon">
								<el-button icon="el-icon-message" circle></el-button>
								<el-button icon="el-icon-star-off" circle></el-button>
								<el-button icon="el-icon-delete" circle></el-button>
							</div>
							<div class="bottom-link">
								友情链接： 百度｜新浪｜网易
							</div>
						</el-col>
						<el-col :span="8">
							<div class="bottom-sideTitle">
								团队介绍
							</div>
							<div class="bottom-content">团队成员</div>
							<div class="bottom-content">团队历史</div>
							<div class="bottom-content">团队成就</div>
						</el-col>
						<el-col :span="8">
							<div class="bottom-sideTitle">
								服务范围
							</div>
							<div class="bottom-content">产品介绍</div>
							<div class="bottom-content">组别介绍</div>
						</el-col>
					</el-row>
				</div>
			</div>
		</div>
	</scroll>
</template>

<script>
	import {
		addClass,
		removeClass
	} from '@/util/oprateClass.js'
	import scroll from '@/components/scroll.vue'
	import Group from '../group/index.vue'
	import Home from '../home/index.vue'
	import Member from '../member/index.vue'
	import Product from '../product/index.vue'
	export default {
		components: {
			Group,
			Home,
			Member,
			Product,
			scroll
		},
		data() {
			return {
				activelabel: '首页',
				activeName: '/layer/home',
				y: ''
			}
		},
		methods: {
			handleClick(e) {
				let no = e.$el.getAttribute('data-no')
				let tabhome = document.querySelector('#tab-home')
				let tabproduct = document.querySelector('#tab-product')
				let tabgroup = document.querySelector('#tab-group')
				let tabmember = document.querySelector('#tab-member')
				let tababout = document.querySelector('#tab-about')

				let home = document.querySelector('.home')
				let product = document.querySelector('.product')
				let group = document.querySelector('.group')
				let member = document.querySelector('.member')
				let about = document.querySelector('.about')
				console.log()
				let distence = [
					home.offsetTop,
					product.offsetTop,
					group.offsetTop,
					member.offsetTop,
					// about.offsetTop,
				]
				console.log(distence)
			}
		},
		watch: {

		},
		mounted() {
			let rocket = document.querySelector('.rocket')
			// rocket.addEventListener('click',() => {
			// 	var currentPosition,timer;
			// 		var speed=30;
			// 		timer=setInterval(function(){
			// 			currentPosition=document.documentElement.scrollTop || document.body.scrollTop;
			// 			currentPosition-=speed; //speed变量
			// 			if(currentPosition>0){
			// 				window.scrollTo(0,currentPosition);
			// 			}else{
			// 				window.scrollTo(0,0);
			// 				clearInterval(timer);
			// 			}
			// 		},1);
			// })
			function throttle(add, remove, rocket, delay) {
				let isRun = true
				return function(...args) {
					console.log(45)
					if (!isRun) {
						return false
					}
					console.log(window.pageYOffset, isRun)
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
			// window.onscroll = throttle(addClass, removeClass, rocket, 50)
			this.$nextTick(() => {
							this.$refs.scroll.refresh()
			})

			// () => {
			// 	if(window.pageYOffset > 600) {

			// 		throttle(addClass,1000)(rocket,'bounceInUp')
			// 	}else {
			// 		removeClass(rocket,'bounceInUp')
			// 		throttle(addClass,1000)(rocket,'bounceOutDown')

			// 	}
			// }

		},

	}
</script>

<style>
	.scroll-wrapper {
		height: 100vh;
		overflow: hidden;
	}
	.layer {
		/* overflow: hidden; */
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
		width: 100px;
		/* height: 100px; */

	}

	.layer-head {
		/* position: fixed; */
		z-index: 999;
		width: 100%;
		height: 80px;
		/* background-color: #fff; */
		margin: 0 auto;
		border-bottom: 1px solid #33A6B8;
	}

	.layer-head-left {
		height: 80px;
		font-size: 30px;
		line-height: 80px;
		font-family: 'byys';
	}

	.layer-head-right {
		margin-top: 20px;
		height: 60px;
		font-family: 'zch'
	}

	.layer-foot {}

	.layer-foot-top {
		height: 250px;
		background-color: rgb(64, 64, 64);
	}

	.top-title {
		height: 100px;
		font-size: 40px;
		line-height: 100px;
		color: #fff;

	}

	.top-p {
		height: 50px;
		font-size: 20px;
		line-height: 50px;
		color: #fff;
	}

	.top-bt {
		height: 60px;
		line-height: 80px;
	}

	.layer-foot-bottom {
		text-align: left;
		padding-top: 40px;
		color: #fff;
		height: 350px;
		background-color: #2d2d2d;
	}

	.layer-foot-bottom .el-col {
		padding-left: 10%
	}

	.bottom-mainTitle {
		font-size: 25px;
		height: 60px;
		line-height: 60px;
	}

	.bottom-sideTitle {
		color: #ddd;
		line-height: 60px;
		height: 60px;
	}

	.bottom-content {
		height: 30px;
		line-height: 30px;
	}

	.bottom-icon {
		height: 60px;
		line-height: 60px;
	}

	.bottom-link {
		height: 60px;
		line-height: 100px;
	}
</style>
