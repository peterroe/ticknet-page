<template>
	<div class="product container" >
		<div class="product-title">
			产品介绍
		</div>
		<div class="product-contents">
			<div class="p-content animated">
				<div class="p-content-icon">⚑</div>
				<div class="p-content-title">
					学习服务
				</div>
				<div class="p-content-p">
					查课表、查成绩、查教室、图书查询、图书续借
				</div>
			</div>
			<div class="p-content animated">
				<div class="p-content-icon">⚑</div>
				<div class="p-content-title">
					面对面签到
				</div>
				<div class="p-content-p">
					汽车入校申请
				</div>
			</div>
			<div class="p-content animated">
				<div class="p-content-icon">⚑</div>
				<div class="p-content-title">
					微服务
				</div>
				<div class="p-content-p">
					优秀的教学辅助工具
				</div>
			</div>
			<div class="p-content animated">
				<div class="p-content-icon">⚑</div>
				<div class="p-content-title">
					失物招领
				</div>
				<div class="p-content-p">
					亲，丢东西了吗？
				</div>
			</div>
			<div class="p-content animated">
				<div class="p-content-icon">⚑</div>
				<div class="p-content-title">
					上网注册
				</div>
				<div class="p-content-p">
					助力校友临时上网
				</div>
			</div>
			<div class="p-content animated">
				<div class="p-content-icon">⚑</div>
				<div class="p-content-title">
					校内社区
				</div>
				<div class="p-content-p">
					科大人自己的社区
				</div>
			</div>
			<div class="p-content animated">
				<div class="p-content-icon">⚑</div>
				<div class="p-content-title">
					
				</div>
				<div class="p-content-p">
					更多产品敬请期待
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {addClass, removeClass} from '@/util/oprateClass.js'
	export default {
		data(){
			return {
				
			}
		},
		methods:{
			
		},
		mounted(){
			let ps = document.querySelectorAll('.p-content')
			for(let i = 0; i < ps.length; i++) {
				ps[i].addEventListener('mouseenter',() => {
					addClass(ps[i],'swing')
				})
				ps[i].addEventListener('mouseleave',() => {
					removeClass(ps[i],'swing')
				})
			}
		}
	}
</script>

<style>
	.product {
		
	}
	.product-title {
		font-size: 30px;
		margin-top: 20px;
	}
	.product-contents {
		margin-top: 50px;
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
	}
	.p-content {
		cursor: pointer;
		position: relative;
		padding: 20px 40px;
		width: 300px;
		margin: 50px;
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
		left: 142px;
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
		left: 98px;
		height: 100px;
		width: 100px;
		/* border: 2px solid red; */
		opacity: .2;
		transform: rotate(45deg);
		box-shadow: 0px -2px 1px #c2c2c2,
					2px 0px 1px #ddd inset;
		background-color: #fff;
	}
	.p-content-icon {
		height: 80px;
		line-height: 80px;
		font-size: 50px;
		color:#3894ff;
	}
	.p-content-title {
		color:#3894ff;
		height: 30px;
		line-height: 30px;
		font-style: 25px;
	}
	.p-content-p {
		line-height: 30px;
		color: #aaaaaa;
	}
</style>
