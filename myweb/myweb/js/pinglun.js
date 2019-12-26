var vm;
var lastdata;
//存放上次的本地数据的数组
var zancun;
//定义本地存储
	const Storage = {};
	Storage.set = function(name,value){
		localStorage.setItem(name,value);
	}
	
	Storage.get = function(name){
		return localStorage.getItem(name);
	}
$(document).ready(function(){
	
	if(Storage.get("pinglun")){
		lastdata = Storage.get("pinglun");
		zancun = lastdata.split(",");
	}else{
		zancun = [];
	}
	
	vm = new Vue({
		el:"#app",
		data:{
			//存放所有评论的数组
			pinglun:zancun,
			//存放搜索的内容的数组
			souarr:[],
			//存放新的评论的变量
			newpinglun:"",
			//存放搜索内容的变量
			searchneirong:""
		},
		methods:{
			getpinglun:function(){
				this.pinglun.push(this.newpinglun);
				localStorage.removeItem("pinglun");
				Storage.set("pinglun",this.pinglun);
				// console.log(Storage.get("pinglun"));
				this.newpinglun = "";
				alert("评论成功！谢谢您的意见或建议！");
			},
			
			searchsousuo:function(){
				var searchneirong = this.searchneirong;
				this.souarr =  this.pinglun.filter(function(s){
					var i = s.indexOf(searchneirong);
					if(i!==-1){
						return s;
					}
				})
			},
		}
	});
});


	　 var show = function(){
	$("#showall").toggle();
}

function deletethis(a){
	var thistd = $("#"+a);
	var deleteneirong = thistd.parent().prev().html();
	vm.pinglun.forEach(function(n,i){
		if(n==deleteneirong){
			//接收用的数组要删掉那个评论
			vm.pinglun.splice(i,1);
			//更新要显示的内容
			vm.searchsousuo();
			//清空本地缓存，再将更新后的接收数组更新到本地
			localStorage.removeItem("pinglun");
			Storage.set("pinglun",vm.pinglun);
		}
	});
}