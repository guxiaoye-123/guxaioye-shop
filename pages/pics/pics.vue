<template>
	<view class="pics">
		 <scroll-view class="left" scroll-y>
			 <view
			 @click="leftClickHandle(index,item.id)"
			  :class="active===index?'active':''" 
			  v-for="(item,index) in cates" 
			  :key="item.id">
			  {{item.title}}
			  </view>
		 </scroll-view>
		 <scroll-view class="right" scroll-y>
			 <view class="item" v-for="item in secondData" :key="item.id">
			 	<image @click="previewImg(item.img_url)" src="../../static/img/1887906.jpg" mode=""></image>
				<text>{{item.title}}</text>
			 </view>
			 <view class="" v-if="secondData.length === 0">
			 	暂无数据
			 </view>
		 </scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cates: [],
				active: 1,
				secondData: []
			};
		},
		methods: {
			async getPicsCate () {
			  const res = await this.$myRequest({
					url: '/api/getimgcategory'
				})
				this.cates = res.data.message
				this.leftClickHandle(0, this.cates[0].id)
			},
			async leftClickHandle (index, id) {
				this.active = index
				//获取右侧数据
				  const res = await this.$myRequest({
					url: '/api/getimages/'+ id
				})
				this.secondData = res.data.message
			},
			previewImg (current) {
				const urls = this.secondData.map(item => {
					return item.img_url
				})
				uni.previewImage({
					current,
					urls
				})
			}
		},
		onLoad() {
			this.getPicsCate()
		}
	}
</script>

<style lang="scss">
page {
	height: 100%;
}
.pics {
	height: 100%;
	display: flex;
	.left {
		width: 200rpx;
		height: 100%;
		border-right: 1px solid #eee;
		view {
			 height: 60px;
			 line-height: 60px;
			 color: #333;
			 text-align: center;
			 font-size: 30rpx;
			 border-top: 1px solid #eee;
			 
		}
	}
	.active {
		background-color: $shop-color;
		color: #fff;
	}
	.right {
		height: 100%;
		width: 520rpx;
		margin: 10rpx auto;
		.item {
			image {
				width: 520rpx;
				height: 520rpx;
				border-radius: 5px;
			}
			text {
				font-size: 30rpx;
				line-height: 60rpx;
			}
		}
	}
}
</style>
