$(document).ready(function(){
	
	
	 Vue.component("imgNav",{
	 	template:"<h1>ddd</h1>"
	 })
	 
	 //设置返回钱的单位的过滤器
	 Vue.filter("fil",function(s){
	 	return s + "元"
	 })
	 
	 var vm = new Vue({
	 	el:"#app",
	 	 data: {
	 	        searchString: "",
	 			lunckNum:Math.floor(Math.random()*10),
	 	
	 	        // 数据模型，实际环境你可以根据 Ajax 来获取
	 	
	 	        articles: [
	 	            {
	 					"name":"CSS",
	 	                "title": "What You Need To Know About CSS Variables",
	 	                "url": "https://www.runoob.com/css/css-tutorial.html",
	 	                "image": "https://static.runoob.com/images/icon/css.png",
	 					"money":25,
	 					"count":0
	 	            },
	 	            {
	 					"name":"html",
	 	                "title": "Freebie: 4 Great Looking Pricing Tables",
	 	                "url": "https://www.runoob.com/html/html-tutorial.html",
	 	                "image": "https://static.runoob.com/images/icon/html.png",
	 					"money":30,
	 					"count":0
	 	            },
	 	            {
	 					"name":"CSS3",
	 	                "title": "20 Interesting JavaScript and CSS Libraries for February 2016",
	 	                "url": "https://www.runoob.com/css3/css3-tutorial.html",
	 	                "image": "https://static.runoob.com/images/icon/css3.png",
	 					"money":60,
	 					"count":0
	 	            },
	 	            {
	 					"name":"另一个CSS3",
	 	                "title": "Quick Tip: The Easiest Way To Make Responsive Headers",
	 	                "url": "https://www.runoob.com/css3/css3-tutorial.html",
	 	                "image": "https://static.runoob.com/images/icon/css3.png",
	 					"money":40,
	 					"count":0
	 	            },
	 	            {
	 					"name":"SQL",
	 	                "title": "Learn SQL In 20 Minutes",
	 	                "url": "https://www.runoob.com/sql/sql-tutorial.html",
	 	                "image": "https://static.runoob.com/images/icon/sql.png",
	 					"money":75,
	 					"count":0
	 	            },
	 	            {
	 					"name":"HTML5",
	 	                "title": "Creating Your First Desktop App With HTML, JS and Electron",
	 	                "url": "https://www.runoob.com/js/js-tutorial.html",
	 	                "image": "https://static.runoob.com/images/icon/html.png",
	 					"money":80,
	 					"count":0
	 	            }
	 	        ],
				
	 			//存放用户订单的数组
	 			info:[],
				
				//存放刷新拼图页面数字的数组
				num:[4,7,3,1,6,5,8,2],
				
				//存放日历日期的变量
				rilidata:"",
				//存放当天实时温度的变量
				rilitem:"",
				
				//存放天气情况的对象
				weatherData:"",
				//存放天气情况的数组
				weatherDataresults:[]
				
	 	    },
	 		methods:{
	 			getlunck:function(){
	 				if(this.lunckNum==8){
	 					alert("恭喜您抽取到幸运数字8！");
	 				}else{
	 					alert("很遗憾您没有抽取到幸运数字")
	 				}
	 				var that = this;
	 				//防止关闭提示信息的时候（几毫秒），下一次抽到的号码就已将显示出来
	 				setTimeout(function(){
	 					that.lunckNum = Math.floor(Math.random()*10)
	 				},10);
	 			},
				
				// // 删除某项订单的函数
				// del:function(e){
				// 	var tr = e.parentNode.parentNode;
				// 	var parent = e.parentNode.parentNode.parentNode;
				// 	parent.removeChild(tr);
				// 	this.count = 0;
				// }
				// 
				
				//获取日历中的日期
				getrili:function(){
					// 获取表格的所有单元格
					var alltd = document.getElementsByClassName("rilitd");
					// 获取当天号数
					var tian = new Date().getDate();
					//将当天的号数传给dom
					this.rilidata = tian;
					// 获取这个月的1号是周几,判断确定在日历中的位置
					var date = new Date();
					date.setDate(1);
					var weekday=new Array(7);
					weekday[0]=7 ;
					weekday[1]=1;
					weekday[2]=2;
					weekday[3]=3;
					weekday[4]=4;
					weekday[5]=5;
					weekday[6]=6;
					var wek = weekday[date.getDay()];
					// 设置当天在日历中的位置，并设置为红色加粗
					alltd[tian+wek-2].innerHTML = "<span style='color:red;font-weight:bolder;font-size:20px'>" + tian + "</span>";
					// 设置这个月当日之前的日历
					for(var i = (wek+tian-2);i > (wek-1); i--){
						alltd[i-1].innerHTML = i-wek+1 ;
					}
					// 设置这个月当日之后的日历
					//获取当月的天数；
					var days = getDays();
					for(var i = (wek+tian);i < days+wek; i++){
						alltd[i-1].innerHTML = i-wek+1 ;
					}
					
					//设置上个月最后几天的日历
					var beforedays = getbeforeDays();
					for(var i = wek-2; i >= 0; i--){
						alltd[i].innerHTML = beforedays-wek + i + 2;
						alltd[i].style.color = "#5C9BB7";
						alltd[i].style.opacity = 0.4;
					}
					
					//设置下个月前几天的日历
					for(var i = days+wek-1; i < alltd.length; i++){
						alltd[i].innerHTML = i - days - wek + 2;
						alltd[i].style.color = "#5C9BB7";
						alltd[i].style.opacity = 0.4;
					}
					
					document.getElementById("rilibtn").style.display = "none";
					
				},
				
				// 点击搜索搜索城市天气
				gettianqi:function(){
					   var city = $("#city").val();
					       // 清空对象
					       $.ajax({
					           type: "POST",//默认是GET
					           url: "http://api.map.baidu.com/telematics/v3/weather",
					           dataType: "jsonp",
					           data: {
					               location: city, // 城市
					               output: "json", // 格式
					               // ak: "ohA7QHfg0BBrpiY4kyuIAAsD" // 百度地图ak，好像是秘钥
								   ak:"3p49MVra6urFRGOT9s8UBWr2"
					           },
					           success: function (data) {
					               vm.weatherData = data;
								   console.log(data);
								    vm.weatherDataresults = data.results;
					           }
					       });
				},
				
				 
				
				
				
	 			
	 		},
	 	    computed: {
	 	        // 计算数学，匹配搜索
	 	        filteredArticles: function () {
	 	            var articles_array = this.articles,
	 	                searchString = this.searchString;
	 	
	 	            if(!searchString){
	 	                return articles_array;
	 	            }
	 	
	 	            searchString = searchString.trim().toLowerCase();
	 	
	 	            articles_array = articles_array.filter(function(item){
	 	                if(item.title.toLowerCase().indexOf(searchString) !== -1){
	 	                    return item;
	 	                }
	 	            })
	 	
	 	            // 返回过来后的数组
	 	            return articles_array;;
	 	        },
	 			
	 			//数学计算,计算总价
	 			getsum:function(){
	 				var sum = 0;
					//forEach函数的第二个参数是s索引
	 				this.articles.forEach(function(s,i){
	 					if(parseInt(s.count)<0){
	 						s.count = 0;
	 					}
	 					sum = parseInt(sum) + parseInt(s.count)*parseInt(s.money);	
	 				});
	 				return sum
	 			},
	 			
	 			//获取订单详情的函数
	 			getinfo:function(){
	 				this.info = this.articles.filter(function(s){
	 				    if(parseInt(s.count)>0){
	 				        return s;
	 				    }
	 			    });
	 				},
					
					
					//获取1-8的随机数字返回拼图界面的函数
					getnum:function(){
						// k用来暂存
						var k;
						// j是从索引0-7取数与this.num[i]交换,换八次
						var j;
						for(var i = 0; i < this.num.length; i++){
							j = Math.floor(Math.random()*this.num.length);
							k = this.num[i];
							this.num[i] = this.num[j];
							this.num[j] = k;
						 }
					}
					
	 			},
				
			
				
				
	 	    
	 	});
	 
});


window.onload = function(){
	
	//页面一加载就根据轮播图的宽度获取设置高度
	var imglist = document.getElementsByClassName("item");
	var imgheight =  parseInt(getStyle(imglist[0],"width"))/10;
	for(var i = 0; i < imglist.length; i++){
		imglist[i].style.height = imgheight + "px";
	}
	
	
	
	
	//暂存本地弹幕的变量
	var olddanmu = [];
	//获取保存在本地的弹幕
	var Storage = {};
	Storage.set = function(name,value){
		localStorage.setItem(name,JSON.stringify(value));
	}
	Storage.get = function(name){
		return JSON.parse(localStorage.getItem(name));
	}
	
	if(Storage.get("barrage")){
		olddanmu = Storage.get("barrage");
	}else{
		olddanmu = [];
	}
	
	//初始化一些东西
	var color = "black";
	var type = "default";
	var size = 20;
	var sizearr = document.getElementsByName("size");
	var typearr = document.getElementsByName("type");
	var speed = 1;
	var speedarr = document.getElementsByName("speed");
	var content = "";
	var c_width = document.getElementById("cv_video").width;
	var c_height = document.getElementById("cv_video").height;
	//存放所有弹幕的数组
	var danmuarr = olddanmu;
	//获取画布
	var cvVideo = document.getElementById("cv_video");
	var ctx = cvVideo.getContext("2d"); 
	
	
	
	document.getElementById("colorpick").onclick = function(event){
		event = event || window.event;
		switch(event.target.id){
			case "black":
			color = "black";
			break;
			case "white":
			color = "white";
			break;
			case "red":
			color = "red";
			break;
			case "yellow":
			color = "yellow";
			break;
			case "blue":
			color = "blue";
			break;
			case "green":
			color = "green";
			break;
		}
	}
		
	
	//弹幕发送事件
	document.getElementById("send").onclick = function(){
		for(var i = 0; i < typearr.length; i++){
			if(typearr[i].checked){
				type = typearr[i].value;
			}
		}
		for(var i = 0; i < speedarr.length; i++){
			if(speedarr[i].checked){
				speed = speedarr[i].value;
			}
		}
		for(var i = 0; i < sizearr.length; i++){
			if(sizearr[i].checked){
				size = sizearr[i].value;
			}
		}
		content = document.getElementById("smsg").value;
		
		var newbarrage = new Barrage(content,color,type,speed,size);
		danmuarr.push(newbarrage);
		localStorage.removeItem("barrage");
		Storage.set("barrage",danmuarr);
	}
	
	//弹幕内容和样式的构造函数
	function Barrage(content,color,type,speed,size){
		this.content = content;
		this.color = color;
		this.type = type;
		this.speed = speed;
		this.size = size;
		
		if(type=="default"){
			this.height = Math.random()*(c_height-10);
		}else if(type=="static top"){
			this.height = Math.random()*(c_height/2+5);
		}else{
			this.height = Math.random()*(c_height/2+5)+c_height/2;
		}
		
		this.left = c_width;
	}
	
	
	//清除弹幕的函数
	document.getElementById("clear").onclick = function(){
		localStorage.removeItem("barrage");
		danmuarr = [];
	}
	
	//显示所有弹幕的函数
	document.getElementById("showall").onclick = function(){
	    for(var i = 0; i < danmuarr.length; i++){
			if(danmuarr[i].left<0){
				danmuarr[i].left = c_width + (c_width - Math.abs(danmuarr[i].left) % c_width);
			}
		}
	}
	
	
	//设置弹幕滑动的定时器
	setInterval(function(){
		ctx.clearRect(0,0,c_width,c_height);
		// ctx.save();
		for(var i = 0; i < danmuarr.length; i++){
			if(danmuarr[i]!=null){
				if(danmuarr[i].type=="default"){
					drawdefault(danmuarr[i]);
				}else{
					drawstatic(danmuarr[i]);
				}
			}
		}
	},20);
	
	
	
	//滚动条形式的弹幕函数
	function drawdefault(danmu){
		if(danmu.left=="null"||danmu.left==undefined){
			danmu.left = c_width;
		}else{
			danmu.left = danmu.left - danmu.speed*2;
		    ctx.font = danmu.size +"px sans-serif";
			ctx.fillStyle = danmu.color;
			ctx.fillText(danmu.content,danmu.left,danmu.height);
		}
	}
	
	//静止形式的弹幕函数
	function drawstatic(danmu){
		if(danmu.left=="null"||danmu.left==undefined){
			danmu.left = c_width;
		}else{
			if(danmu.left<0){
				danmu.left = -100;
				ctx.fillText(danmu.content,danmu.left,danmu.height);
			}else{
				ctx.font = danmu.size +"px sans-serif";
				ctx.fillStyle = danmu.color;
				ctx.fillText(danmu.content,c_width/2,danmu.height);
				danmu.left = danmu.left - 6;
			}
		}
	}
	
	
	
	
	
	
	//别踩白块的各种函数
	var whitebtn = document.getElementById("whitebtn");
	var whitetable = document.getElementById("whitetable");
	var whitespan = document.getElementById("whitespan");
	var timer;
	var timertwo;
	// 存放最高纪录
	var most = 0; 
	whitebtn.onclick = function(){
		//点击数
		var num = 0;
		//速度
		var speed = 5;
		//清除定时器
		clearInterval(timer);
		clearInterval(timertwo);
		
		timer = setInterval(function(){
			var trdiv = document.createElement("div") ;
			trdiv.className = "whiterow";
			//随机选取一个td将其颜色设置为黑色
			var index = Math.floor(Math.random()*4);
			//在一行里面动态添加四个div，一行里面的四块
			for (var i = 0; i < 4; i++) {
			    var tdDiv = document.createElement('div')
				tdDiv.className = "whitetd";
				if(i==index){
					tdDiv.className = "blacktd";
				}
			    trdiv.appendChild(tdDiv)
			}
			// alert(whitetable.childNodes.length);
			if(whitetable.childNodes.length==0){
				//将一行div加进总的div
				whitetable.appendChild(trdiv);
				// tr++;
			}else{
				whitetable.insertBefore(trdiv,whitetable.firstChild);
				// tr++;
			}
		},100);
		
		
		//设置第二个定时器，第一个是为了动态添加黑白块的行，第二块是控制速度，让他不要卡顿的下移
		timertwo = setInterval(function(){
	         var step = parseInt(getComputedStyle(whitetable, null)['bottom']) - speed;
	         whitetable.style.bottom = step + 'px';
			 	console.log(parseInt(getComputedStyle(whitetable, null)['bottom'])/150);
				
				//判断是否错过点击
				// alert(num);
				    if(parseInt(getComputedStyle(whitetable, null)['bottom'])/150<0){
						// alert("ss");
						if( Math.abs(parseInt(getComputedStyle(whitetable, null)['bottom'])/150) - num >1){
							alert("您错过啦,您的最终得分：" + num + ",最高纪录为:" + most);
							clearInterval(timer);
							clearInterval(timertwo);
							num = 0; 
							document.getElementById("whitespan").innerHTML = num;
							var whitetablenew = $("#whitetable");
							whitetablenew.empty();
							whitetable.style.bottom = 500 + 'px';
						}
					}			 
		},20);
		
		
		whitetable.onclick = function(event){
			event = event || window.event;
			if(event.target.className=="blacktd"){
				num++;
				event.target.style.backgroundColor = "grey";
				//盒子加速
				if (num % 10 == 0) {
				    speed++;
				}
				if(num > most){
					most = num;
				}
				document.getElementById("whitespan").innerHTML = num;
			}else{
				alert("您点错啦，您的最终得分："+num + ",最高纪录为:" + most);
				clearInterval(timer);
				clearInterval(timertwo);
				num = 0; 
				document.getElementById("whitespan").innerHTML = num;
				var whitetablenew = $("#whitetable");
				whitetablenew.empty();
				 whitetable.style.bottom = 500 + 'px';
			}
		}
	}
	
}

         window.onresize = function(){
			
			//页面大小改变时相应的改变图片的高度
			var imglist = document.getElementsByClassName("item");
			var imgheight =  parseInt(document.body.clientWidth)/10;
			for(var i = 0; i < imglist.length; i++){
				imglist[i].style.height = imgheight + "px";
			}
		}
	
	
	// window.onload = function(){
		// var shownum = document.getElementById("shownum");
		function getnum(value) {
			//拆分成数组,判断最后一个是数字还是符号,符号的话不可以再添加符号;
			var numarr = document.getElementById("shownum").value.split("");
			//去掉开始的0,也对小数点做处理
			if(document.getElementById("shownum").value==0&&!isNaN(value)&&numarr[numarr.length-1]!="."){
				document.getElementById("shownum").value = "";
				document.getElementById("shownum").value += value;
				
			}
			//如果已经有符号了,就不再加符号
			else if(isNaN(numarr[numarr.length-1])&&isNaN(value)){
			}
			
			else{
				document.getElementById("shownum").value += value;
			}
			
			
		
				
			
			
			
		}
		function getresult(){
			//分割的所有数字
			var numarr = document.getElementById("shownum").value.split(/[^0-9]/);
			//为了得到符号而分割的所有单独数字和符号
			var allarr = document.getElementById("shownum").value.split("");
			var sum = numarr[0]; 
			
			//分割的所有符号
			var fuhaoarr = [];
				for(var j = 0; j < allarr.length; j++){
					//将符号放到一个数组
					if(isNaN(allarr[j])){
						fuhaoarr.push(allarr[j]);
					}
				}
			for(var i = 0; i < numarr.length-1; i++){
				switch(fuhaoarr[i]){
					case "+":
					sum = Number(sum) + Number(numarr[i+1]);
					break;
					case "-":
					sum = Number(sum) - Number(numarr[i+1]);
					break;
					case "*":
					sum = Number(sum) * Number(numarr[i+1]);
					break;
					case "/":
					sum = Number(sum) / Number(numarr[i+1]);
					break;
					case "%":
					sum = Number(sum) % Number(numarr[i+1]);
					break;
				}
			}
		     document.getElementById("shownum").value = sum;
		
			}
			
			function clearall(){
				document.getElementById("shownum").value = "0";
			}
			
			function clearone(){
				var cleararr = document.getElementById("shownum").value.split("");
				cleararr.pop();
				//用空格拼接被拆分的数组
				var clearstr = cleararr.join("");
				document.getElementById("shownum").value = clearstr;
				if(document.getElementById("shownum").value==""){
					document.getElementById("shownum").value = 0;
				}
			}
			
		
	// }
	var timer;
var load = function(){
	clearInterval(timer);
	var progress = $(".progress");
	var clientwidth = Math.floor(document.body.clientWidth/100)*100;
	var progressBar = $(".progress-bar");
		progress.addClass("active");
		timer = setInterval(function(){
			for(var i = 0; i < progress.length; i++){
				// var wid = getStyle(progressBar.get(i),null)["width"];
				
				progressBar.get(i).style.width = parseInt(getStyle(progressBar.get(i),"width")) + 100 + "px";
				if(parseInt(progressBar.get(i).style.width)>clientwidth){
						// alert("ss");
						progressBar.get(i).style.width = 0 + "px";
							clearInterval(timer);
							// progress.removeClass("active");
					
				}
			}
		},10);
		
}

var stop = function(){
	var progress = $(".progress");
	progress.removeClass("active");
	clearInterval(timer);
		
}


	// 拼图判断函数

	function pintu(e){
		// 得到八个拼图对象
		var pin = document.getElementsByClassName("tu");
		// alert($("#"+pin[1].id).position().left);
		// alert($("#"+pin[1].id).position().top);
		// alert(pin[0].innerHTML);
		// if(pin[0].innerHTML==7){
		// 	alert("ss");
		// }
		var one,two,three,four,five,six,seven,eight;
		for(var i = 0; i < pin.length; i++){
			switch(pin[i].innerHTML){
				case "1":
			    one = pin[i];
				break;
				case "2":
				 two = pin[i];
				break;
				case "3":
				 three = pin[i];
				break;
				case "4":
				 four = pin[i];
				break;
				case "5":
				 five = pin[i];
				break;
				case "6":
				 six = pin[i];
				break;
				case "7":
				 seven = pin[i];
				break;
				case "8":
				 eight = pin[i];
				break;
			}
		}
		// alert(seven.id);
		
		   
			if($("#"+seven.id).position().left==0&&$("#"+seven.id).position().top==240&&
			$("#"+four.id).position().left==0&&$("#"+four.id).position().top==120&&
			$("#"+three.id).position().left==240&&$("#"+three.id).position().top==0&&
			$("#"+one.id).position().left==0&&$("#"+one.id).position().top==0&&
			$("#"+five.id).position().left==120&&$("#"+five.id).position().top==120&&
			$("#"+six.id).position().left==240&&$("#"+six.id).position().top==120&&
			$("#"+eight.id).position().left==120&&$("#"+eight.id).position().top==240&&
			$("#"+two.id).position().left==120&&$("#"+two.id).position().top==0){
				alert("恭喜您拼对了！");
			};
			   
			 
		// 分别算出空白处的上下左右
		var empty =  $("#empty");
		var emptyleft = empty.position().left;
		var emptytop = empty.position().top;
		// 将传进来的对象转成jquery的形式,分别算出点击的对象的上下左右
		var e = $("#"+e.id);
		var eleft = e.position().left;
		var etop = e.position().top;
		
		// 算出备点对象与空白处上下左右的差值
		var left = Math.abs(emptyleft-eleft);
		var top = Math.abs(emptytop-etop);
		
		// 被点击对象在空白格附近时两个对象互换位置
		if(left==0&&top==120||left==120&&top==0){
			empty.get(0).style.top = etop + "px";
			empty.get(0).style.left = eleft + "px";
			e.get(0).style.top = emptytop + "px";
			e.get(0).style.left = emptyleft + "px";
			// var time = empty.get(0).innerHTML;
			// empty.get(0).innerHTML = e.get(0).innerHTML; 
			// e.get(0).innerHTML = time;
			// 
		}
	}
	
	

	
	
	
	//获取这个月的天数的函数
	function getDays() {
	            //构造当前日期对象
	            var date = new Date();
	            //获取年份
	            var year = date.getFullYear();
	            //获取当前月份
	            var mouth = date.getMonth() + 1;
	            //定义当月的天数；
	            var days;
	            //当月份为二月时，根据闰年还是非闰年判断天数
	            if (mouth == 2) {
	                days = year % 4 == 0 ? 29 : 28;
	            }
	            else if (mouth == 1 || mouth == 3 || mouth == 5 || mouth == 7 || mouth == 8 || mouth == 10 || mouth == 12) {
	                //月份为：1,3,5,7,8,10,12 时，为大月.则天数为31；
	                days = 31;
	            }
	            else {
	                //其他月份，天数为：30.
	                days = 30;
	            }
	            return days;
	        }
			
			//获取上个月的天数的函数
			function getbeforeDays() {
			            //构造当前日期对象
			            var date = new Date();
			            //获取年份
			            var year = date.getFullYear();
			            //获取上个月的月份
			            var mouth = date.getMonth();
			            //定义当月的天数；
			            var days;
			            //当月份为二月时，根据闰年还是非闰年判断天数
			            if (mouth == 2) {
			                days = year % 4 == 0 ? 29 : 28;
			            }
			            else if (mouth == 1 || mouth == 3 || mouth == 5 || mouth == 7 || mouth == 8 || mouth == 10 || mouth == 12) {
			                //月份为：1,3,5,7,8,10,12 时，为大月.则天数为31；
			                days = 31;
			            }
			            else {
			                //其他月份，天数为：30.
			                days = 30;
			            }
			            return days;
			        }
					
					
					
			//设置灯箱中跑马灯的函数
			var nowpao = 0;
			var paoTimer;
			var allpao = document.getElementsByClassName("paoma");
			
			paoTimer = setInterval(function(){
				// console.log(allpao);
				for(var i = 0; i < allpao.length; i++){
					allpao[i].style.opacity = 0.3;
					}
					allpao[nowpao].style.opacity = 1;
					nowpao++;
					if(nowpao == 4){
						nowpao = 0;
					}
					
			},1000);
			
				
	




/*
	 * 定义一个函数，用来获取指定元素的当前的样式
	 * 参数：
	 * 		obj 要获取样式的元素
	 * 		name 要获取的样式名
	 */
	
	function getStyle(obj , name){
		
		if(window.getComputedStyle){
			//正常浏览器的方式，具有getComputedStyle()方法
			return getComputedStyle(obj , null)[name];
		}else{
			//IE8的方式，没有getComputedStyle()方法
			return obj.currentStyle[name];
		}
		
		//return window.getComputedStyle?getComputedStyle(obj , null)[name]:obj.currentStyle[name];
		
	}
	
	

                  
                 