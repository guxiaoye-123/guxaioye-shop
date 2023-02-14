<template>
	<view class="news">
		<view class="news_item">
			<image src="../../static/img/新图网_黑白手写aboutus_ixintu.com.png" mode=""></image>
			<view class="right">
				<view class="tit">
					干净整洁的绿色扁平化UI套件(PSD)
				</view>
				<view class="info">
					<text>发表时间:  </text>
					<text>浏览次数:</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				newsList: []
			}
		},
		methods: {
			async getNews () {
			  const res =await this.$myRequest({
					url:'/api/getnewslist'
				})
				this.newsList = res.data.message
			}
		},
		onLoad() {
			this.getNews()
		}
		
	}
</script>

<style lang="scss">
  .news {
	  .news_item {
		  display: flex;
		  padding: 10rpx 20rpx;
		  border-bottom: 1px solid $shop-color;
		  image {
			  width: 200rpx;
			  min-width: 200rpx;
			  max-width: 200rpx;
			  height: 150rpx;
		  }
		  .right {
			  display: flex;
			  flex-direction: column;
			  justify-content: space-between;
			  margin-left: 15rpx;
			  .tit {
			  	 font-size: 30rpx;
			  }
			  .info {
				  font-size: 24rpx;
				  text:nth-child(2){
					  margin-left: 30rpx;
				  }
			  }
		  }
		  
	  }
  }
</style>
