<template>
	<view class="home">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" circular>
			<swiper-item v-for="item in swipers" :key="item.id">
				<img :src="item.img" alt="">
			</swiper-item>
		</swiper>
		<!-- 导航区域 -->
		<view class="nav">
			<view class="nav_item" v-for="(item, index) in navs" :key="index" @click="navItemClick(item.path)">
				<view :class="item.icon">					
				</view>
		    	<text>{{item.title}}</text>
			</view>
		
		</view>
		<!-- / 导航区域 -->
		<!-- 推荐商品区域 -->
		<view class="hot_goods">
			<view class="tit">
				推荐商品
			</view>
			<goods-list :goods="goods" @goodsItemClick="goGoodsDetail"></goods-list>
		</view>
		<!-- / 推荐商品区域 -->
	</view>
</template>

<script>
	import goodsList from '../../components/goods-list/goods-list'
	export default {
		data() {
			return {
				swipers: [],
				goods: [],
				navs:[
					{
						icon: 'iconfont icon-ziyuan',
						title: '小夜超市',
						path: '/pages/goods/goods'
					},
					{
						icon: 'iconfont icon-guanyuwomen',
						title: '联系我们',
						path: '/pages/contact/contact'
					},
					{
						icon: 'iconfont icon-tupian',
						title: '社区图片',
						path: '/pages/pics/pics'
					},
					{
						icon: 'iconfont icon-shipin',
						title: '学习视频',
						path: '/pages/videos/videos'
					}
				]
			}
		},
		onLoad() {

		},
		onLoad () {
			this.getSwipers()
			this.getHotGoods()
		},
		components: {
			"goods-list": goodsList
		},
		methods: {
			// 获取轮播图数据
			async getSwipers () {
				// uni.request({
				// 	url:'http://localhost:8082/api/getlunbo',
				// 	success:res=>{
				// 		if(res.data.status != 0){
				// 			return uni.showToast({
				// 				title:'获取数据失败！'
				// 			})
				// 		}
				// 		this.swipers = res.data.message
				// 	}
				// })
				const res =await this.$myRequest({
					url:'/api/getlunbo'
				})
				this.swipers = res.data.message
				
			},
			async getHotGoods () {
				const res = await this.$myRequest({
					url:'/api/getgoods?pageindex=1'
				})
				this.goods = res.data.message
				
			},
			navItemClick (url) {
				uni.navigateTo({
					url
				})
			},
			//跳转导航到商品详情页
			goGoodsDetail (id) {
				uni.navigateTo({
					url:'/pages/goods-detail/goods-detail?id='+id
				})
			}
			
		}
	}
</script>

<style lang="scss">
.home {
	swiper {
		width: 750rpx;
		height: 380rpx;
		img {
			height: 100%;
			width: 100%;
		}
	}
	.nav {
		display: flex;
		.nav_item {
			width: 25%;
			text-align: center;
			view {
				width: 120rpx;
				height: 120rpx;
				background: $shop-color;
				border-radius: 60px;
				margin: 10px auto;
				line-height: 120rpx;
				font-size: 50rpx;
				color: #fff;
			}
			.icon-tupian {
				font-size: 45rpx;
			}
			text {
				font-size: 30rpx;
			}
		}
	}
    .hot_goods {
		margin-top: 10px;
	    overflow: hidden;
		background: #eee;
		.tit {
			height: 50px;
			line-height: 50px;
			color: $shop-color;
			text-align: center;
			letter-spacing: 20px;
			background: #fff;
			margin: 7rpx 0;
		}
	}
}
</style>
