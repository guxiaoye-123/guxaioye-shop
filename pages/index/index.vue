<template>
	<view class="home">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" circular>
			<swiper-item v-for="item in swipers" :key="item.id">
				<img :src="item.img" alt="">
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swipers: []
			}
		},
		onLoad() {

		},
		onLoad () {
			this.getSwipers()
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
				console.log(res);
				
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
}
</style>
