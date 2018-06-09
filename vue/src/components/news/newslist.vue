<template>
	<!--<div id="tmpl">-->
		<!--&lt;!&ndash;1.0 实现新闻资讯列表样式&ndash;&gt;-->
		<!--<ul class="mui-table-view">-->
			<!--<li v-for="item in list" class="mui-table-view-cell mui-media">-->
			<!--<router-link v-bind="{to:'/news/newsinfo/'+item.id}" >-->
				<!--<img class="mui-media-object mui-pull-left" :src="item.img_url">-->
				<!--<div class="mui-media-body">-->
				<!--{{item.title}}-->
				<!--<p class='mui-ellipsis' v-text="item.zhaiyao"></p>-->
					<!--<div class="ft">-->
					<!--<span>发表时间:{{item.add_time | datefmt('YYYY-MM-DD HH:mm:ss')}}</span>-->
					<!--<span class="click">点击数：{{item.click}}</span>-->
					<!--</div>-->
				<!--</div>-->
			<!--</router-link>-->
			<!--</li>-->
		<!--</ul>-->
	<!--</div>-->
</template>

<script>
	import common from '../../kits/common'

    export default{
        data() {
            return {
                list: [] //新闻列表功能
            }
        },
        created() {
            console.log('huangbang')
            this.getnewslist();
        },
        methods: {
            // 获取api中的新闻资讯数据
            getnewslist() {
                // 1.0 确定url
                var url = common.apidomain + '/api/getnewslist';

                // 2.0 利用$http.get方法请求到数据
                this.$http.get(url).then(function (res) {
                    // 3.0 获取到响应报文体数据
					console.log('huangbang')
                    var body = res.body;
                    console.log(body)
                })
            }
        }
    }
</script>

<style scoped>

</style>