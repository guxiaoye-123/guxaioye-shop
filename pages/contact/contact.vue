<template>
	<view class="contact">
		<image class="img" src="/static/img/新图网_关于我们简介矢量图_ixintu.com.png" mode=""></image>
		<view class="info">
			<view class="" @click="phone">
				联系电话：400-8181-6023 （点击拨打）
			</view>
			<view class="">
				联系地址：成都市锦江区锦江城市花园2单元104
			</view>
		</view>
		<map :longitude="longitude" :latitude="latitude" :markers="markers"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:1,
				longitude:104.15329,
				latitude:30.603615,
				markers: [
					{
						longitude:104.15329,
						latitude:30.603615,
						callout: { //marker气泡
								  	    content: '城市花园',
								  	    color: "#fff",
								  	    bgColor: "rgba(15, 158, 250, 1)",
								  	    borderRadius: 10,
								  	    fontSize: 12,
								  	    textAlign: "center",
								  	    padding: 5,
								  	    display: 'ALWAYS',
								  	}
					}
				]
			}
		},
		methods: {
			phone () {
				uni.makePhoneCall({
					phoneNumber: '400-8181-6023'
				})
			}
			
		}
	}
</script>

<style lang="scss" scoped>
.contact {
	.img {
		width: 100%;
		height: 320rpx;
	}
	.info {
		padding: 10rpx 20rpx;
		font-size: 30rpx;
		view {
			line-height: 60rpx;
			border-bottom: 1px solid #eee;
		}
	}
	map {
		height: 750rpx;
		width: 750rpx;
	}
}
</style>
