<template>
	<view class="">
		<view class="news_item" @click="navigator(item.id)" v-for="item in list" :key="item.id">
			<image src="../../static/img/新图网_黑白手写aboutus_ixintu.com.png" mode=""></image>
			<view class="right">
				<view class="tit">
					{{item.title}}
				</view>
				<view class="info">
					<text>发表时间: {{item.add_time | formatDate}} </text>
					<text>浏览次数:{{item.click}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['list'],
		data() {
			return {
				
			}
		},
		methods: {
			navigator (id) {
				this.$emit('itemClick', id)
			}
		}
	}
</script>

<style lang="scss">
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
</style>
