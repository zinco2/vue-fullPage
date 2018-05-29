<template>
	<div class="section" :style="{'height':offsetheight+'px'}">
		<div class="container" :style="{'transform': 'translate3d(0px,-'+ fullPage*offsetheight +'px, 0px)'}">
			<div v-for="i in bannerList" :style="{'height':offsetheight+'px','background':i.bg}">

			</div>
		</div>
		<div class="fixed-list">
			<div v-for="(i,index) in bannerList" :class="fullPage==index?'color':''" @click="pageInfo(index)">
			</div>
		</div>
	</div>
</template>
<script>
export default{
	data(){
		return {
			bannerList:[                 //盒子背景颜色
				{
					bg:"#f6f6f6"
				},
				{
					bg:"#87d9e1"
				},
				{
					bg:"#8185d7"
				},
				{
					bg:"#e187cf"
				}
			],
			offsetheight:document.documentElement.clientHeight,    //获取当前页面的高度
			fullPage:0,           //当前在第几页
			fullPageNum:false,        //是否在滑动
		}
	},
	mounted(){
		//
		//在元素加载完毕的时候添加鼠标滑动事件
		//
		if(document.addEventListener){
            document.addEventListener('DOMMouseScroll',this.scroll,false);
        }
        window.onmousewheel=document.onmousewheel=this.scroll;
	},
	methods:{
		//
		//点击左侧小点时跳转到相应的page
		//
		pageInfo(index){
			this.fullPage=index;
		},
		//
		//鼠标事件
		//
		scroll(e){
			e=e || window.event;
			//
			//是否正在滑动
			//
            if(this.fullPageNum){
                return false;
            }
            //
            //   e.wheelDelta为负数时向下滑动
            //
            if(e.wheelDelta<0){
                if(this.fullPage>=3){
                    return false
                }
                this.fullPageNum=true;
                this.pageInfo(this.fullPage+1);
                //
                //  css设置动画事件为1000，所以等到1000ms后滚动状态为false
                //
                setTimeout(()=>{
                	this.fullPageNum=false;
                },1000)
            //
            //   否则就是向上划
            //
            }else{
                if(this.fullPage<=0){
                    return false;
                }
                this.fullPageNum=true;
                this.pageInfo(this.fullPage-1);
                setTimeout(()=>{
                	this.fullPageNum=false;
                },1000)
            }
		}
	}
}

</script>
<style lang="scss">
	.section{
		overflow: hidden;
	}
	.container{
		width: 100%;height: 100%;
		position: relative; transform: translate3d(0px, 0px, 0px); transition: all 1000ms ease;
	}
	.fixed-list{
		position: fixed;
		top: 40%;right: 20px;
		div{
			width: 20px;height: 20px;background:#ccc;border-radius: 50%;margin-bottom: 20px;
		}
		div.color{
			background:#000;
		}
	}
</style>