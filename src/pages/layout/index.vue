<template>
	<div class="layout animated">
		
		<div class="img-xq1 animated ">
			<img src="../../assets/xq1.png" alt="">
		</div>
		<div class="img-xq2 animated ">
			<img src="../../assets/xq2.png" alt="" class="xq2">
		</div>
		<div class="img-line">
			<img src="../../assets/line.png" alt="" class="line">
		</div>
		<div class="tabs animated ">
			  <el-tabs v-model="activeName">
			    <el-tab-pane  label="首页" name="first"></el-tab-pane>
			    <el-tab-pane  label="产品介绍" name="second"></el-tab-pane>
			    <el-tab-pane  label="组别介绍" name="third"></el-tab-pane>
			    <el-tab-pane  label="团队成员" name="fourth"></el-tab-pane>
				<el-tab-pane  label="关于我们" name="five"></el-tab-pane>
			  </el-tabs>
		</div>
		<div @click="jump" class="btn animated ">
			  <el-button class="bt-join" type="primary">
				  <span class="bt-join-link">GO</span>
			  </el-button>
		</div>
		<div class="img-cicle  ">
			<img src="../../assets/circle.png" class="bg1">
		</div>
	</div>
</template>

<script>
	import {addClass, removeClass} from '@/util/oprateClass.js'
	export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
	  async jump() {
		  let btn = document.querySelector('.btn')
		  let xq1 = document.querySelector('.img-xq1')
		  let xq2 = document.querySelector('.img-xq2')
		  let tabs = document.querySelector('.tabs')
		  let layout = document.querySelector('.layout')
		  // removeClass(btn,'rotateIn')
		  // removeClass(xq1,'rotateInUpRight')
		  // removeClass(xq2,'bounceIn')
		  // removeClass(tabs,'lightSpeedIn')
		  setTimeout(() => {
		  	addClass(btn,'rotateOut')
		  },100)
		  setTimeout(() => {
		  	addClass(xq1,'rotateOutDownRight')
		  },500)
		  setTimeout(() => {
		  	addClass(xq2,'bounceOut')
		  },900)
		  setTimeout(() => {
		  	addClass(tabs,'lightSpeedOut')
		  },1300)
		  setTimeout(() => {
		  	addClass(layout,'fadeOut')
		  },1500) 
		  setTimeout(() => {
		  	this.$router.push('/layer')
		  },2000)
	  }
    },
	mounted() {
		let btn = document.querySelector('.btn')
		let xq1 = document.querySelector('.img-xq1')
		let xq2 = document.querySelector('.img-xq2')
		let tabs = document.querySelector('.tabs')
		setTimeout(() => {
			addClass(btn,'rotateIn')
		},1700)
		setTimeout(() => {
			addClass(xq1,'rotateInUpRight')
		},500)
		setTimeout(() => {
			addClass(xq2,'bounceIn')
		},900)
		setTimeout(() => {
			addClass(tabs,'lightSpeedIn')
		},1300)
	},
  };
</script>

<style>
	.layout {
		overflow: hidden;
		width: 100vw;
		height: 100vh;
		position: relative;
		font-family: 'llcht';
		background-image: linear-gradient(-20deg, #2b5876 0%, #4e4376 100%);
	}
	.img-cicle {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%)  scale(.8);
	}
	.bg1 {
		/* height: 100%; */
		width: 100%;
		animation: rotates linear 10s  infinite;
	}
	.img-xq1 {
		position: absolute;
		top: 12%;
		left: 10%;
		margin-top: -281px;
		margin-left: -298px;
		transform: scale(0);
	}
	.img-xq1 img {
		width: 560px;
	}
	.img-xq2 {
		position: absolute;
		width: 80px;
		bottom: 5%;
		right: 15%;
		transform:   scale(0);
	}
	.xq2 {
		max-width: 400px;
	}
	.img-line {
		position: absolute;
		width: 20%;
		top: 5%;
		right: 3%;
		/* transform: translate(-50%, -50%)  ; */
	}
	.line {
		transform: rotate(20deg);
		width: 100%;
		opacity: .7;
	}
	.btn {
		position: absolute;
		z-index: 500;
		top: 50%;
		left: 50%;
		margin-top: -30px;
		margin-left: -30px;
		transform: scale(0);
	}
	.btn:hover ~ .img-cicle > .bg1 {
		/* animation-play-state:paused; */
		/* animation: rotaten linear .5s  infinite; */
		animation-duration: .5s;
	}
	.btn:hover > .bt-join {
		animation: shadow linear 2s  infinite;
		
	}
	.btn:hover  .bt-join-link {
		color: #868686 !important;
		text-shadow: 0 0 10px #fff,0 0 20px #fff,0 0 30px #fff,0 0 40px #fff;
	}
	.bt-join {
		border: none;
		/* font-size: 20px; */
		width: 60px;
		height: 60px;
		border-radius: 40px;
		box-shadow: 0 0 20px #404b76 inset,
		0 0 100px #000 ;
		background-color: #414e79;
	}
	.bt-join:hover {
		background-color: #414e79;
	}
	.bt-join-link {
		font-family: 'llcht';
		color: #bdbdbd;
		text-decoration: none;
		font-size: 30px;
	}
	@keyframes rotates{
		from{
			transform:rotate(0deg) ;
		}
		to{
			transform:rotate(360deg) ;
		}
	}
	@keyframes rotaten{
		0%{
			transform:rotate(360deg) scale(1)
		}
		50%{
			transform:rotate(180deg) scale(2);
		}
		100% {
			transform:rotate(0deg) scale(1);
		}
	}
	@keyframes shadow{
		0%{
			box-shadow: 0 0 20px #404b76 inset,
			0 0 50px #000 ;
		}
		50%{
			box-shadow: 0 0 80px #404b76 inset,
			0 0 200px #000 ;
		}
		100% {
			box-shadow: 0 0 20px #404b76 inset,
			0 0 50px #000 ;
		}
	}
	.tabs {
		z-index: 100;
		position: absolute;
		top: 5%;
		left: 50%;
		margin-left: -300px;
		/* max-width: 75%; */
		height: 300px;
		transform: scale(0);
	}
	@media screen and (max-width: 768px) {
		.tabs {
			margin-left: -200px;
		}
	}
	.el-tabs__item  {
		color: #48cae4;
		width: 120px;
	}
	.el-tabs__item:hover {
		color: #48cae4;
	}
	.el-tabs__item.is-active{
	    color:#48cae4;
	}
	.el-tabs__active-bar{
		background-color:#48cae4;
	}
	.el-tabs__nav-wrap::after,.el-tabs__nav-scroll::after  {
		content: '' !important;
		height: 0px;
	}
</style>
