<template>
	<div id="tmpl">
		 <!-- 1.0 轮播图：mint-ui中的 swipe组件实现 -->
		 <mt-swipe :auto="2000" id='swipe'>

			  <mt-swipe-item v-for='item in list'> <img :src="item"/></mt-swipe-item>

		</mt-swipe>
		<!-- 2.0 利用MUI的9宫格样式实现导航区域 -->
		<div class="mui-content">
			<ul class="mui-table-view mui-grid-view mui-grid-9">
	            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
					<router-link to="/news/newslist">
						<span class="mui-icon mui-icon-home"></span>
	                    <div class="mui-media-body">新闻资讯</div>
					</router-link>
				</li>
	            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
	                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
	                    <div class="mui-media-body">Email</div></a></li>
	            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
	                    <span class="mui-icon mui-icon-chatbubble"></span>
	                    <div class="mui-media-body">Chat</div></a></li>
	            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
	                    <span class="mui-icon mui-icon-location"></span>
	                    <div class="mui-media-body">location</div></a></li>
	            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
	                    <span class="mui-icon mui-icon-search"></span>
	                    <div class="mui-media-body">Search</div></a></li>
	            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
	                    <span class="mui-icon mui-icon-phone"></span>
	                    <div class="mui-media-body">Phone</div></a></li>
	        </ul>
	    </div>
	</div>
</template>

<script>
	export default{
		data(){
		return {
			list:['../../statics/imgs/lunbo1.jpg','../../statics/imgs/lunbo2.jpg','../../statics/imgs/lunbo3.jpg']
			}
		},
		created(){
			
		},
		methods:{
			
		}
	}
</script>

<style>
	#swipe{
		height:300px;
	}
	#swipe img{
		width: 100%;
		margin: 0 auto;
		display: block;
	}
	
	.mui-content,.mui-content ul{
		background-color: #fff!important
	}
	
	.mui-icon-home:before,
	.mui-icon-email:before,
	.mui-icon-chatbubble:before,
	.mui-icon-location:before,
	.mui-icon-search:before,
	.mui-icon-phone:before{
		content: '';
		display: inline-block;
		width: 50px;
		height: 50px;
		background-repeat: round;
	}
	
	.mui-icon-home:before{		
		background-image: url(../../statics/imgs/1.png);
	}

	.mui-icon-email:before{		
		background-image: url(../../statics/imgs/2.png);		
	}
	.mui-icon-chatbubble:before{		
		background-image: url(../../statics/imgs/3.png);		
	}
	.mui-icon-location:before{		
		background-image: url(../../statics/imgs/4.png);		
	}
	.mui-icon-search:before{		
		background-image: url(../../statics/imgs/5.png);		
	}
	.mui-icon-phone:before{		
		background-image: url(../../statics/imgs/6.png);		
	}
	
</style>