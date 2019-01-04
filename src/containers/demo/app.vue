<template>
	<div id="demo">
		<router-view  v-loading="getLoadingStatus" :fullscreen="false" element-loading-background="rgba(0, 0, 0, 0.2)" :element-loading-text="getLoadingText"></router-view>
	</div>
</template>
<script>
	import {mapGetters} from 'vuex';
	export default {
		computed :{
			...mapGetters([
				'getLoadingStatus',
				'getLoadingText'
			])
		}
	}
</script>
<style type="scss">
	#demo{
		width:100%;
		height:100%;
	}
</style>
