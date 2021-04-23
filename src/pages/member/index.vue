<template>
	<div class="member container">
		<template v-for='it in imgs'>
			<Avatar 
			  :imgsrc="it.imgsrc" 
			  :row="it.row" 
			  :col="it.col" 
			  :no="it.no" 
			  :name="it.name">
			</Avatar>
		</template>
	</div>
</template>

<script>
	import Avatar from './avatar/index.vue'
	export default {
		
		data() {
			return {
				imgs: [
					{
						imgsrc:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1004953359,2131419137&fm=11&gp=0.jpg',
						row: '1',
						col: '1',
						no: 'kjl',
						name: 'asdfgfg'
					},
					{
						imgsrc:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3225163326,3627210682&fm=26&gp=0.jpg',
						row: '1',
						col: '2',
						no: 'yui',
						name: 'asdfgfg'
					},
					{
						imgsrc:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1709216491,2536617744&fm=26&gp=0.jpg',
						row: '1',
						col: '3',
						no: 'fhj',
						name: 'asfhgg'
					},
					{
						imgsrc:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=181054249,3834661047&fm=11&gp=0.jpg',
						row: '1',
						col: '4',
						no: 'ddd',
						name: 'ashnfg'
					},
					{
						imgsrc:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2297130679,3467505620&fm=26&gp=0.jpg',
						row: '1',
						col: '5',
						no: 'dfg',
						name: 'jasfg'
					},
					{
						imgsrc:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1545190233,2172456233&fm=26&gp=0.jpg',
						row: '2',
						col: '2',
						no: 'sfgfh',
						name: 'fghjsfg'
					},
					{
						imgsrc:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3641306367,2787304394&fm=26&gp=0.jpg',
						row: '2',
						col: '3',
						no: 'ghj',
						name: 'shjfg'
					},
					{
						imgsrc:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2100401123,2895311668&fm=26&gp=0.jpg',
						row: '2',
						col: '4',
						no: 'htj',
						name: 'hjfg'
					},
					{
						imgsrc:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3222454269,3484359568&fm=26&gp=0.jpg',
						row: '2',
						col: '5',
						no: 'ktyu',
						name: 'jg'
					},
					{
						imgsrc:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2622623191,3152180496&fm=26&gp=0.jpg',
						row: '3',
						col: '2',
						no: 'yjkh',
						name: 'hj'
					},
					{
						imgsrc:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2297130679,3467505620&fm=26&gp=0.jpg',
						row: '3',
						col: '3',
						no: 'ghkn',
						name: 'fgh'
					},
					{
						imgsrc:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1709644436,2739756540&fm=26&gp=0.jpg',
						row: '3',
						col: '4',
						no: 'hjkty',
						name: 'ghjasfg'
					}
				]
			}
		},
		components:{
			Avatar
		},
	}
</script>

<style>
	.member {
		position: relative;
		height: 800px;
		background-image: linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%);
		
	}
	
</style>
