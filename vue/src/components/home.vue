<template>
	<div id="tmpl">
	 <!-- 1.0 轮播图：mint-ui中的 swipe组件实现 -->
		 <mt-swipe :auto="2000">
		  <!-- <mt-swipe-item>1</mt-swipe-item>
		   -->
			  <mt-swipe-item v-for='item in list'> <img :src="item"/></mt-swipe-item>
			
		</mt-swipe>
	</div>
</template>

<script>
	export default{
		data(){
		return {
			list:['./statics/imgs/lunbo1','../../statics/imgs/lunbo2','../../statics/imgs/lunbo3']
			}
		},
		created(){
			
		},
		methods:{
			
		}
	}
</script>

<style>
	
</style>