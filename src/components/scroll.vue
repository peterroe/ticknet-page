<template>
	<div ref="wrapper">
		<slot></slot>
	</div>
</template>

<script>
	import BScroll from '@better-scroll/core'
	import MouseWheel from '@better-scroll/mouse-wheel'
	BScroll.use(MouseWheel)



	export default {
		props: {
			probeType: {
				type: Number, // 非实时派发scroll事件和位置参数, 类型由0,1,2,3,
				default: 1
			},
			scrollX: {
				type: Boolean, // 是否横向滚动
				default: false
			},
			scrollY: {
				type: Boolean, // 是否纵向滚动
				default: true
			},
			click: {
				type: Boolean, // 是否派发点击事件
				default: true
			},
			listenScroll: {
				type: Boolean, // 监听滚动
				default: false
			},
			data: {
				type: Array, // 组件数据,可用于重新刷新scroll组件
				default: null
			},

			/**
			 * 是否派发顶部下拉的事件，用于下拉刷新
			 */

			beforeScroll: {
				type: Boolean, // 滚动之前做些什么
				default: false
			},
			refreshDelay: {
				type: Number, // scroll刷新时间
				default: 20
			},
			eventPassthrough: {
				type: String, // 支持原生滚动
				default: ''
			},
			specifiedIndexAsContent: {
				type: Number,
				default: 0
			},
			bounce: {
				type: Object,
				default: () => {
					return {
						top: false,
						bottom: true
					}
				}
			}
		},
		mounted() {
			// 也可以使用nextTick来初始化
			setTimeout(() => {
				this.initScroll()
			}, 20)
		},
		data() {
			return {
				btnShow: false
			}
		},
		methods: {
			// 初始化
			initScroll() {
				if (!this.$refs.wrapper) {
					return
				}
				// 根据自己的需求传入配置项
				this.scroll = new BScroll(this.$refs.wrapper, {
					probeType: this.probeType,
					click: this.click,
					scrollX: this.scrollX,
					bounce: this.bounce,
					specifiedIndexAsContent: this.specifiedIndexAsContent,
					mouseWheel: {
						speed: 20,
						invert: false,
						easeTime: 300
					}
				})
				// 监听 scroll
				if (this.listenScroll) {
					const me = this
					this.scroll.on('scroll', pos => {
						// me.$emit('scroll', pos)
						if (pos.y < -80) {
							this.btnShow = true
						}
					})
				}
				// 是否派发滚动到底部事件，用于上拉加载
				if (this.pullup) {
					this.scroll.on('pullingUp', () => {
						if (this.scroll.y <= this.scroll.maxScrollY + 50) {
							this.$emit('pullingUp')
						}
					})
				}
				// 是否派发顶部下拉事件，用于下拉刷新
				if (this.pulldown) {
					this.scroll.on('touchEnd', (pos) => {
						// 下拉动作
						if (pos.y > 50) {
							this.$emit('pulldown')
						}
					})
				}
				if (this.beforeScroll) {
					this.scroll.on('beforeScrollStart', () => {
						this.$emit('beforeScroll')
					})
				}
			},
			disable() {
				this.scroll && this.scroll.disable()
			},
			enable() {
				this.scroll && this.scroll.enable()
			},
			refresh() {
				this.scroll && this.scroll.refresh()
			},
			scrollToTop() {
				this.scroll && this.scroll.scrollTo(0, -5, 80)
			},
			scrollTo() {
				this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
			},
			scrollToElement() {
				this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
			},
			finishPullDown() {
				this.scroll && this.scroll.finishPullDown()
			},
			finishPullUp() {
				this.scroll && this.scroll.finishPullUp()
			},
			closePullUp() {
				this.scroll && this.scroll.closePullUp()
			}
		},
		watch: {
			// 这个可以设置data来刷新scroll组件
			data() {
				setTimeout(() => {
					this.refresh()
				}, this.refreshDelay)
			}
		}
	}
</script>
