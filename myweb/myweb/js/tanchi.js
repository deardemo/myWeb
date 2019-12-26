// 剩余白快
var allwhitetd;
// 所有格子
var tanchitd;
//贪吃蛇的头
var tanchihead;
//蛇向下跑的定时器
var bottomtime;
//蛇向上跑的定时器
var toptime;
//蛇向左跑的定时器
var lefttime;
//蛇向右跑的定时器
var righttime;
//存放整个蛇的数组
var allshe = [];
// 存放分数的元素
var shefen = 0;
//点击开始游戏的按钮
var tanchibtn;
//设置定时的时间
var mytime = 200;


window.onload = function(){
	//点击开始游戏的按钮
	tanchibtn = document.getElementById("tanchibtn");
	
//点击重新开始游戏
tanchibtn.onclick = function(){
	//初始化定时器的时长
	mytime = 200;
	//初始化得分
	shefen = 0;
	//创建一个存放剩余白格子的数组，用来随机选取一个食物块
	allwhitetd = [];
	//清空上次失败了的存放蛇的数组
	allshe = [];
	defennum = document.getElementById("defennum");
	
	//获取所有的格子
	tanchitd = document.getElementsByClassName("tanchitd");
	// console.log(tanchitd);
	//将所有格子设置为白色
	for(var i = 0; i < tanchitd.length; i++){
		tanchitd[i].style.backgroundColor = "white";
	}
	
	
	//从表格下标中选取一个随机数成为贪吃蛇的头
	tanchihead = Math.floor(Math.random()*tanchitd.length);
	allshe.push(tanchihead);
	tanchitd[tanchihead].style.backgroundColor = "black";
		
	
	
	// alert(tanchitd[1].style.backgroundColor);
		for(var i = 0; i < tanchitd.length; i++){
			//将所有的白块放进存放剩余白格子的数组
			if(tanchitd[i].style.backgroundColor == "white"){
				// alert("ss");
				allwhitetd.push(i);
			}
		}
		
		//随机选取剩下的白快中的某一个为红色，是被吃的块
		var beichi = Math.floor(Math.random()*allwhitetd.length);
		 tanchitd[allwhitetd[beichi]].style.backgroundColor = "red";
}
}

window.onkeydown = function(event){
	//分数为5的倍数时。加速
	if(shefen % 5 == 0){
		mytime = mytime - 4;
	}
	event = event || window.event;
	//向下移动
	if(event.keyCode == 40){
		//要先关闭其他的定时器
		clearInterval(lefttime);
		clearInterval(righttime);
		clearInterval(toptime);
		clearInterval(bottomtime);
		//一开始就在最后一行就按向下键的话直接失败
		if(tanchihead < 192){
			//一开始就要判断是否是红色或者黑色
			if(tanchitd[tanchihead+16].style.backgroundColor=="red"){
				bottomtime = setInterval(bottomfun,mytime);
			}
			//判断是否是黑色
			if(tanchitd[tanchihead+16].style.backgroundColor=="black"){
				alert("失败，您的最终得分是："+shefen);
				clearInterval(bottomtime);
			}
			//白色时要有定时器不断地循环判断接下来是白色还是黑色还是红色
			if(tanchitd[tanchihead+16].style.backgroundColor=="white"){
				bottomtime = setInterval(bottomfun,mytime);
			}
		}else{
			alert("失败，您的最终得分是："+shefen);
			clearInterval(bottomtime);
		}
	}
	
	function bottomfun(){
		//判断如果最后一行了还向下的话失败
		if(tanchihead > 191){
			alert("失败，您的最终得分是："+shefen);
			clearInterval(bottomtime);
		}else{
			if(tanchitd[tanchihead+16].style.backgroundColor=="red"){
				shefen++;
				defennum.innerHTML = shefen;
				tanchihead = tanchihead + 16;
				allshe.unshift(tanchihead);
				tanchitd[tanchihead].style.backgroundColor = "black";
				//接上红色的食物之后，蛇形继续向下移动
				//先变后面的颜色
				tanchitd[allshe[allshe.length-1]].style.backgroundColor = "white";
				for(var i = allshe.length-1; i > 0; i--){
					allshe[i] = allshe[i-1];
					tanchitd[allshe[i]].style.backgroundColor = "black";
				}
			
				//重新随机一个红色的食物
				allwhitetd.splice(0,allwhitetd.length);
				for(var i = 0; i < tanchitd.length; i++){
					//将所有的白块放进存放剩余白格子的数组
					if(tanchitd[i].style.backgroundColor == "white"){
						allwhitetd.push(i);
					}
				}
				//随机选取剩下的白快中的某一个为红色，是被吃的块
				var beichi = Math.floor(Math.random()*allwhitetd.length);
				 tanchitd[allwhitetd[beichi]].style.backgroundColor = "red";
			}else if(tanchitd[tanchihead+16].style.backgroundColor=="black"){
				alert("失败，您的最终得分是："+shefen);
				clearInterval(bottomtime);
			}else{
				tanchitd[allshe[allshe.length-1]].style.backgroundColor = "white";
				for(var i = allshe.length-1; i > 0; i--){
					allshe[i] = allshe[i-1];
					tanchitd[allshe[i]].style.backgroundColor = "black";
				}
				tanchihead = tanchihead + 16;
				allshe.splice(0,1);
				allshe.unshift(tanchihead);
				tanchitd[tanchihead].style.backgroundColor = "black";
			}
		}
	}
	
	//向上移动
	if(event.keyCode == 38){
		//要先关闭其他的定时器
		clearInterval(lefttime);
		clearInterval(righttime);
		clearInterval(toptime);
		clearInterval(bottomtime);
		//一开始就在第一行就按向上键的话直接失败
		if(tanchihead > 15){
			//一开始就要判断是否是红色或者黑色
			if(tanchitd[tanchihead-16].style.backgroundColor=="red"){
				toptime = setInterval(topfun,mytime);
			}
			//判断是否是黑色
			if(tanchitd[tanchihead-16].style.backgroundColor=="black"){
				alert("shibai");
				clearInterval(toptime);
			}
			//白色时要有定时器不断地循环判断接下来是白色还是黑色还是红色
			if(tanchitd[tanchihead-16].style.backgroundColor=="white"){
				toptime = setInterval(topfun,mytime);
			}
		}else{
			alert("失败，您的最终得分是："+shefen);
			clearInterval(toptime);
		}
	}
	
	function topfun(){
		if(tanchihead < 16){
			alert("失败，您的最终得分是："+shefen);
			clearInterval(toptime);
		}else{
			if(tanchitd[tanchihead-16].style.backgroundColor=="red"){
				shefen++;
				defennum.innerHTML = shefen;
				tanchihead = tanchihead - 16;
				allshe.unshift(tanchihead);
				console.log(allshe);
				tanchitd[tanchihead].style.backgroundColor = "black";
				//接上红色的食物之后，蛇形继续向上移动
				//先变后面的颜色
				tanchitd[allshe[allshe.length-1]].style.backgroundColor = "white";
				for(var i = allshe.length-1; i > 0; i--){
					allshe[i] = allshe[i-1];
					tanchitd[allshe[i]].style.backgroundColor = "black";
				}
			
				//重新随机一个红色的食物
				allwhitetd.splice(0,allwhitetd.length);
				for(var i = 0; i < tanchitd.length; i++){
					//将所有的白块放进存放剩余白格子的数组
					if(tanchitd[i].style.backgroundColor == "white"){
						// alert("ss");
						allwhitetd.push(i);
					}
				}
				//随机选取剩下的白快中的某一个为红色，是被吃的块
				var beichi = Math.floor(Math.random()*allwhitetd.length);
				 tanchitd[allwhitetd[beichi]].style.backgroundColor = "red";
			}else if(tanchitd[tanchihead-16].style.backgroundColor=="black"){
				alert("失败，您的最终得分是："+shefen);
				clearInterval(toptime);
			}else{
				tanchitd[allshe[allshe.length-1]].style.backgroundColor = "white";
				for(var i = allshe.length-1; i > 0; i--){
					allshe[i] = allshe[i-1];
					tanchitd[allshe[i]].style.backgroundColor = "black";
				}
				tanchihead = tanchihead - 16;
				allshe.splice(0,1);
				allshe.unshift(tanchihead);
				tanchitd[tanchihead].style.backgroundColor = "black";
				
			}
		}
		
	}
	
	
	//向左移动
	if(event.keyCode == 37){
		//要先关闭其他的定时器
		clearInterval(lefttime);
		clearInterval(righttime);
		clearInterval(toptime);
		clearInterval(bottomtime);
		//一开始就在最左行就按向左键的话直接失败
		if(tanchihead % 16 != 0){
		//一开始就要判断是否是红色或者黑色
		if(tanchitd[tanchihead-1].style.backgroundColor=="red"){
			lefttime = setInterval(leftfun,mytime);
		}
		//判断是否是黑色
		if(tanchitd[tanchihead-1].style.backgroundColor=="black"){
			alert("失败，您的最终得分是："+shefen);
			clearInterval(lefttime);
		}
		//白色时要有定时器不断地循环判断接下来是白色还是黑色还是红色
		if(tanchitd[tanchihead-1].style.backgroundColor=="white"){
			lefttime = setInterval(leftfun,mytime);
		}
		}else{
			alert("失败，您的最终得分是："+shefen);
			clearInterval(lefttime);
		}
	}
	
	function leftfun(){
		if(tanchihead % 16 == 0){
			alert("失败，您的最终得分是："+shefen);
			clearInterval(lefttime);
		}else{
			if(tanchitd[tanchihead-1].style.backgroundColor=="red"){
				shefen++;
				defennum.innerHTML = shefen;
				tanchihead = tanchihead - 1;
				allshe.unshift(tanchihead);
				console.log(allshe);
				tanchitd[tanchihead].style.backgroundColor = "black";
				//接上红色的食物之后，蛇形继续向上移动
				//先变后面的颜色
				tanchitd[allshe[allshe.length-1]].style.backgroundColor = "white";
				for(var i = allshe.length-1; i > 0; i--){
					allshe[i] = allshe[i-1];
					tanchitd[allshe[i]].style.backgroundColor = "black";
				}

				
				//重新随机一个红色的食物
				allwhitetd.splice(0,allwhitetd.length);
				for(var i = 0; i < tanchitd.length; i++){
					//将所有的白块放进存放剩余白格子的数组
					if(tanchitd[i].style.backgroundColor == "white"){
						// alert("ss");
						allwhitetd.push(i);
					}
				}
				//随机选取剩下的白快中的某一个为红色，是被吃的块
				var beichi = Math.floor(Math.random()*allwhitetd.length);
				 tanchitd[allwhitetd[beichi]].style.backgroundColor = "red";
			}else if(tanchitd[tanchihead-1].style.backgroundColor=="black"){
				alert("失败，您的最终得分是："+shefen);
				clearInterval(lefttime);
			}else{
				tanchitd[allshe[allshe.length-1]].style.backgroundColor = "white";
				for(var i = allshe.length-1; i > 0; i--){
					allshe[i] = allshe[i-1];
					tanchitd[allshe[i]].style.backgroundColor = "black";
				}
				tanchihead = tanchihead - 1;
				allshe.splice(0,1);
				allshe.unshift(tanchihead);
				tanchitd[tanchihead].style.backgroundColor = "black";
				
			}
		}
		
	}
	
	
	//向右移动
	if(event.keyCode == 39){
		//要先关闭其他的定时器
		clearInterval(lefttime);
		clearInterval(righttime);
		clearInterval(toptime);
		clearInterval(bottomtime);
		//一开始就在最右行就按向右键的话直接失败
		if(tanchihead % 16 != 15){
			//一开始就要判断是否是红色或者黑色
			if(tanchitd[tanchihead+1].style.backgroundColor=="red"){
				righttime = setInterval(rightfun,mytime);
			}
			//判断是否是黑色
			if(tanchitd[tanchihead+1].style.backgroundColor=="black"){
				alert("shibai");
				clearInterval(righttime);
			}
			//白色时要有定时器不断地循环判断接下来是白色还是黑色还是红色
			if(tanchitd[tanchihead+1].style.backgroundColor=="white"){
				righttime = setInterval(rightfun,mytime);
			}
		}else{
			alert("失败，您的最终得分是："+shefen);
			clearInterval(righttime);
		}
	}
	
	function rightfun(){
		if(tanchihead % 16 == 15){
			alert("失败，您的最终得分是："+shefen);
			clearInterval(righttime);
		}else{
			if(tanchitd[tanchihead+1].style.backgroundColor=="red"){
				shefen++;
				defennum.innerHTML = shefen;
				tanchihead = tanchihead + 1;
				allshe.unshift(tanchihead);
				tanchitd[tanchihead].style.backgroundColor = "black";
				//接上红色的食物之后，蛇形继续向上移动
				//先变后面的颜色
				tanchitd[allshe[allshe.length-1]].style.backgroundColor = "white";
				for(var i = allshe.length-1; i > 0; i--){
					allshe[i] = allshe[i-1];
					tanchitd[allshe[i]].style.backgroundColor = "black";
				}
				
				//重新随机一个红色的食物
				allwhitetd.splice(0,allwhitetd.length);
				for(var i = 0; i < tanchitd.length; i++){
					//将所有的白块放进存放剩余白格子的数组
					if(tanchitd[i].style.backgroundColor == "white"){
						allwhitetd.push(i);
					}
				}
				//随机选取剩下的白快中的某一个为红色，是被吃的块
				var beichi = Math.floor(Math.random()*allwhitetd.length);
				 tanchitd[allwhitetd[beichi]].style.backgroundColor = "red";
			}else if(tanchitd[tanchihead+1].style.backgroundColor=="black"){
				alert("失败，您的最终得分是："+shefen);
				clearInterval(righttime);
			}else{
				tanchitd[allshe[allshe.length-1]].style.backgroundColor = "white";
				for(var i = allshe.length-1; i > 0; i--){
					allshe[i] = allshe[i-1];
					tanchitd[allshe[i]].style.backgroundColor = "black";
				}
				tanchihead = tanchihead + 1;
				allshe.splice(0,1);
				allshe.unshift(tanchihead);
				tanchitd[tanchihead].style.backgroundColor = "black";
				
			}
		}
		
	}
	
	
}

