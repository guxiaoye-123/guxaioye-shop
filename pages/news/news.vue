<template>
	<view class="news">
		<news-item :list="newsList" @itemClick="goDetail"></news-item>
	</view>
</template>

<script>
	import newsItem from '../../components/news-item/news-item.vue'
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
			},
			goDetail (id) {
				uni.navigateTo({
					url: '/pages/news-detail/news-detail?id='+id
				})
				
			}
		}, 
		onLoad() {
			this.getNews()
		},
		components: {
			"news-item": newsItem,
		}
		
	}
</script>

<style lang="scss">

</style>
