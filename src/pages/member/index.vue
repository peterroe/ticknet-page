<!-- @format -->

<template>
    <div id="member" class="member container">
        <div class="member-title">成员介绍</div>
        <div>
            <div class="phoneavatar">
                <phoneavatar :avatarimg="imgs"></phoneavatar>
            </div>
        </div>
    </div>
</template>

<script>
    // import Avatar from './avatar/index.vue'
    import phoneavatar from './phoneavatar/index.vue'
    export default {
        components: {
            // Avatar,
            phoneavatar
        },
        data() {
            return {
                imgs:[
                {
                    imgsrc: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1004953359,2131419137&fm=11&gp=0.jpg',
                    row: '1',
                    col: '1',
                    no: 'kjl',
                    name: '杰罗姆',
                    p: '不要因为没有掌声就放弃梦想'
                },
                {
                    imgsrc: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3155998395,3600507640&fm=26&gp=0.jpg',
                    row: '1',
                    col: '2',
                    no: 'yui',
                    name: '伊迪斯',
                    p: '但愿日子清静，抬头遇见的都是柔情'
                },
                {
                    imgsrc: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1709216491,2536617744&fm=26&gp=0.jpg',
                    row: '1',
                    col: '3',
                    no: 'fhj',
                    name: '阿尔瓦',
                    p: '对于值得与热爱的事情，就要做到极致'
                },
                {
                    imgsrc: 'https://img2.baidu.com/it/u=325567737,3478266281&fm=26&fmt=auto&gp=0.jpg',
                    row: '1',
                    col: '4',
                    no: 'ddd',
                    name: '埃琳娜',
                    p: '你什么都不知道，包括我喜欢你'
                },
                {
                    imgsrc: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1475331839,2066156315&fm=26&gp=0.jpg',
                    row: '1',
                    col: '5',
                    no: 'dfg',
                    name: '亚伯拉罕',
                    p: '活得太清醒本就是件不浪漫的事'
                },
                {
                    imgsrc: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1545190233,2172456233&fm=26&gp=0.jpg',
                    row: '2',
                    col: '2',
                    no: 'sfgfh',
                    name: '伊斯特尔',
                    p: '火苗再小，也可以反复点燃'
                },
                {
                    imgsrc: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3641306367,2787304394&fm=26&gp=0.jpg',
                    row: '2',
                    col: '3',
                    no: 'ghj',
                    name: '安东尼',
                    p: '总要尝遍所有的路，在对生活充满期待'
                },
                {
                    imgsrc: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2013128738,1744245349&fm=26&gp=0.jpg',
                    row: '2',
                    col: '4',
                    no: 'asfgfg',
                    name: '洛福斯',
                    p: '从此天光大亮，你是我全部的渴望与幻想'
                },
    
                {
                    imgsrc: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3222454269,3484359568&fm=26&gp=0.jpg',
                    row: '2',
                    col: '5',
                    no: 'ktyu',
                    name: '埃尔维斯',
                    p: '所有的温柔都源于你的强大'
                },
                {
                    imgsrc: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2622623191,3152180496&fm=26&gp=0.jpg',
                    row: '3',
                    col: '2',
                    no: 'yjkh',
                    name: '埃德温',
                    p: '努力让自己发光，对的人才会迎光而来'
                },
                {
                    imgsrc: 'https://img0.baidu.com/it/u=1001760444,1818781497&fm=26&fmt=auto&gp=0.jpg',
                    row: '3',
                    col: '3',
                    no: 'ghkn',
                    name: '格伦',
                    p: '记得在这杂乱的生活里，每天带点笑意'
                },
                {
                    imgsrc: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1709644436,2739756540&fm=26&gp=0.jpg',
                    row: '3',
                    col: '4',
                    no: 'hjkty',
                    name: '伊迪斯',
                    p: '有人喝了酒眼睛亮闪闪的讲浪漫和爱'
                },
                {
                    imgsrc: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2100401123,2895311668&fm=26&gp=0.jpg',
                    row: '5',
                    col: '3',
                    no: 'htj',
                    name: '沃伦',
                    p: '你的心，是我想要到达的蔚蓝海岸'
                }
            ]
            }
        }
    }
</script>

<style>
    .member {
        /* height: 800px; */
        /* overflow: hidden; */
        background-color: #38487e;
        /* background-image: linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%); */
        margin: 0 auto;
    }
    @media screen and (max-width: 1600px) {
        .member {
            max-width: 100%;
            margin: 0 auto;
        }
    }
    @media screen and (max-width: 800px) {
        .member {
            height: 100%;
        }
    }
    /* @media screen and (max-width: 630px) {
		.member {
			height: 600px;
		}

	}
	@media screen and (max-width: 450px) {
		.member {
			height: 700px;
		}

	}
	@media screen and (max-width: 350px) {
		.member {
			height: 780px;
		}

	} */
    .member-title {
        max-width: 100%;
        height: 50px;
        line-height: 50px;
        font-size: 30px;
        margin-top: 20px;
        color: #fff;
        margin: 0 auto !important;
    }
    .member > div {
        position: relative;
    }
    /* @media screen and (max-width: 1500px) {
		.pcavatar {
			display: none;
		}
		.phoneavatar {
			display: block;
		}
	}
	@media screen and (min-width: 1500px) {
		.pcavatar {
			display: block;
		}
		.phoneavatar {
			display: none;
		}
	} */
</style>
