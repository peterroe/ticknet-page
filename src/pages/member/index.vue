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
                    imgsrc: 'https://img-blog.csdnimg.cn/4bd107f2c292495a8ffbcf18064745ce.webp',
                    row: '1',
                    col: '1',
                    no: 'kjl',
                    name: '',
                    p: '程序员的问题是你无法预料他在做什么，直到为时已晚'
                },
                {
                    imgsrc: 'https://img-blog.csdnimg.cn/2339b12d0dea454cbab81895824ef663.webp',
                    row: '1',
                    col: '2',
                    no: 'yui',
                    name: '',
                    p: '就算它工作不正常也别担心。如果一切正常，你早该失业了'
                },
                {
                    imgsrc: 'https://img-blog.csdnimg.cn/d96621e9b12b4d3683c7bf6e99b86ab2.webp',
                    row: '1',
                    col: '3',
                    no: 'fhj',
                    name: '',
                    p: '首先学习计算机科学及理论。接着形成自己编程的风格。然后把这一切都忘掉，尽管改程序就是了'
                },
                {
                    imgsrc: 'https://img-blog.csdnimg.cn/2a0fa2e287a64689937e791c9cca84ff.webp',
                    row: '1',
                    col: '4',
                    no: 'ddd',
                    name: '',
                    p: '计算机没什么用。他们只会告诉你答案'
                },
                {
                    imgsrc: 'https://img-blog.csdnimg.cn/7410dcb0ee8b44e58cb089ad981ff68d.webp',
                    row: '1',
                    col: '5',
                    no: 'dfg',
                    name: '',
                    p: 'Just do it。很多孩子听了乔丹的话，从此进入it行业'
                },
                {
                    imgsrc: 'https://img-blog.csdnimg.cn/f82679dd003d4bb7a15dd3f604951f9c.webp',
                    row: '2',
                    col: '2',
                    no: 'sfgfh',
                    name: '',
                    p: '好的软件的作用是让复杂的东西看起来简单'
                },
                {
                    imgsrc: 'https://img-blog.csdnimg.cn/4e5653088f674d9284e093dc0784494a.webp',
                    row: '2',
                    col: '3',
                    no: 'ghj',
                    name: '',
                    p: '计算机会不会思考这个问题就像问潜水艇会不会游泳一样'
                },
                {
                    imgsrc: 'https://img-blog.csdnimg.cn/3c8dfaf680d9433886f97c913caf408c.webp',
                    row: '2',
                    col: '4',
                    no: 'asfgfg',
                    name: '',
                    p: '我终于明白‘向上兼容性’是怎么回事了。这是指我们得保留所有原有错误。'
                },
    
                {
                    imgsrc: 'https://img-blog.csdnimg.cn/28bd63c7bf09444c8a008c89a5cfe66b.webp',
                    row: '2',
                    col: '5',
                    no: 'ktyu',
                    name: '',
                    p: '控制复杂性是计算机编程的本质。'
                },
                {
                    imgsrc: 'https://img-blog.csdnimg.cn/17db4a341b2545648fddd87859ed5b2b.webp',
                    row: '3',
                    col: '2',
                    no: 'yjkh',
                    name: '',
                    p: '不管演示在彩排的时候有多好，一旦在观众面前展示时，演示不出错的几率与观众人数成反比'
                },
                {
                    imgsrc: 'https://img-blog.csdnimg.cn/c7b2ec67cd2646c89e2d8e33eb24fe83.webp',
                    row: '3',
                    col: '3',
                    no: 'ghkn',
                    name: '',
                    p: '靠代码行数来衡量开发进程就好比用重量来衡量飞机制造的进度'
                },
                {
                    imgsrc: 'https://img-blog.csdnimg.cn/c99ad299252b47ef9fe3cee6dce69ffa.webp',
                    row: '3',
                    col: '4',
                    no: 'hjkty',
                    name: '',
                    p: '要是Java真的有垃圾回收的话，大部分程序在执行的时候就会把自己干掉了'
                },
                {
                    imgsrc: 'https://img-blog.csdnimg.cn/505695a0292445948f808e1af821062d.webp',
                    row: '5',
                    col: '3',
                    no: 'htj',
                    name: '',
                    p: '计算机语言设计犹如在公园里漫步。我是说侏罗纪公园'
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
