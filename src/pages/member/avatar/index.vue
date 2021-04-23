<template>
		<div class="member-img" :id='no'>
			<div class="img-transfer">
				<div class="img-foot">
					<img :src="imgsrc" alt="">
				</div>
			</div>
			<div class="img-top">
				<div class="img-top-avatar">
					<img :src="imgsrc" alt="">
				</div>
				<div class="img-top-title">
					{{name}}
				</div>
			</div>
		</div>

</template>

<script>
	export default {
		props:['imgsrc','row','col','no','name'],
		data() {

			return {

			}
		},
		mounted() {
			let memberImg = document.querySelector(`#${this.no}`)
			let x = (this.col-1) * 200
			let y = (this.row-1) * 100
			if(this.row % 2 == 0) {//偶数
				
			}else {
				x += 100
				// y += 100
			}

			y+=200
			x += 'px'
			y += 'px'
			console.log(x,y)
			memberImg.style.top = y
			memberImg.style.left = x
		},
	}
</script>

<style>
	.member-img {
		position: absolute;
		left: 0px;
		top: 0px;
		z-index: 99;
		width: 200px;
		height: 200px;
		/* background-color: red; */
		/* filter: blur(5px); */
	}
	.img-foot img {
		width: 200px;
		filter: blur(30px);
		transform: translate(-30px,-30px) rotate(-45deg);
	}
	.img-transfer {
		position: absolute;
		top: 30px;
		left: 29px;
		transform: rotate(45deg);
		border: 2px solid #fff;
		width: 142px;
		height: 142px;
		/* background-color: blue; */
		overflow: hidden;
	}
	.img-top {
		position: absolute;
		top: 40px;
		left: 60px;
	}
	.img-top-avatar {
		border-radius: 40px;
		border: 2px solid #fff;
		width: 80px;
		height: 80px;
		overflow: hidden;
	}
	.img-top-avatar img {
		width: 80px;
		height: 80px;
	}
	.img-top-title {
		color: #fff;
		height: 40px;
		font-size: 14px;
		line-height: 40px;
	}
</style>
