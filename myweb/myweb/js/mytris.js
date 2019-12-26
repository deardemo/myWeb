	var alltristd = document.getElementsByClassName("tristd");
	console.log(typeof alltristd);
	
	var trisblackone = Math.floor(Math.random()*8);
	//下面几个是随机获取的四个黑色快
	var trisblacktwo;
	var trisblackthree;
	var trisblackfour;
	//定时器
	var timerone;
	//设置定时的时间
	var intervaltime = 300;
	//存放清楚一行后上面的所有黑快的下标；
	var allblackbefore = [];
	// 存放总的得分
    var defen = 0;
	var fn;

	
	
window.onload = function(){
	//整个俄罗斯方块的容器
	var btris = document.getElementById("btris");
	//总分
	var defennum = document.getElementById("defennum");
   //开始按钮
    var trisbtn = document.getElementById("trisbtn");
	trisbtn.onclick = function(){
		//调用获取四个黑快的函数
		gettrisblack();
		//判断一开始随机的四个的颜色，若是已经有黑色了，则说明到顶了，游戏结束
		if(alltristd[trisblackone].style.backgroundColor=="black"||alltristd[trisblacktwo].style.backgroundColor=="black"||alltristd[trisblackthree].style.backgroundColor=="black"||alltristd[trisblackfour].style.backgroundColor=="black"){
			
			clearInterval(timerone);
			
		}
		
		for(var i = 0; i< alltristd.length; i++){
			alltristd[i].style.backgroundColor = "white";
		}
		alltristd[trisblackone].style.backgroundColor = "black";
		alltristd[trisblacktwo].style.backgroundColor = "black";
		alltristd[trisblackthree].style.backgroundColor = "black";
		alltristd[trisblackfour].style.backgroundColor = "black";
		//调用黑快动起来的函数
		animationtris();
	}
	
	
	
}






//是的四个黑快动起来并在合适的位置停止的函数
var animationtris = function(){
	var undertrionecolor;
	var undertritwocolor;
	var undertrithreecolor;
	var undertrifourcolor;
	var lefttrionecolor;
	var lefttritwocolor;
	var lefttrithreecolor;
	var lefttrifourcolor;
	var righttrionecolor;
	var righttritwocolor;
	var righttrithreecolor;
	var righttrifourcolor;
	var smalltrisblack;
	var mosttrisblack;
	var trblacktris = [0,8,16,24,32,40,48,56,64,72,80,88,96];
	// var trblacktris = [96,88,1,24,32,40,48,56,72,80,88,96];
	var trblacktrisnum;
	timerone = setInterval(fn,intervaltime);
	  function fn(){
		  
		  document.onkeydown = function(event){
		  					event = event || window.event;
		  					
		  					/*
		  					 * 可以通过keyCode来获取按键的编码
		  					 * 	通过它可以判断哪个按键被按下
		  					 * 除了keyCode，事件对象中还提供了几个属性
		  					 * 	altKey
		  					 * 	ctrlKey
		  					 * 	shiftKey
		  					 * 		- 这个三个用来判断alt ctrl 和 shift是否被按下
		  					 * 			如果按下则返回true，否则返回false
		  					 */
		  					
		  					//console.log(event.keyCode);
		  					
		  					//判断一个y是否被按下
		  					//判断y和ctrl是否同时被按下
		  					if(event.keyCode == 40){
								clearInterval(timerone);
								intervaltime = 50;
								timerone = setInterval(fn,intervaltime);
		  						
		  					}
		  					
		  					
		  				};
		  				
		  				document.onkeyup = function(event){
		  								event = event || window.event;
		  									clearInterval(timerone);
		  									intervaltime = 300;
		  									timerone = setInterval(fn,intervaltime);
		  							};
		  
		//设置滚轮监听事件，使得滚轮上滚时方块向左移动，下滚时方块向右移动
			btris.onmousewheel = function(event){
			event = event || window.event;
			//左右移动的时候也要判断左右是否有黑快了
			//先判断左是否有黑快，到最左了就不获取左边的颜色了 防止出错
	
			smalltrisblack = Math.min(trisblackone,trisblacktwo,trisblackthree,trisblackfour);
			if(smalltrisblack%8!=0){
				if((trisblackone-1)==trisblackfour||(trisblackone-1)==trisblacktwo){
					lefttrionecolor = "white";
				}else{
					lefttrionecolor = alltristd[trisblackone-1].style.backgroundColor;
				}
				if((trisblacktwo-1)==trisblackthree||(trisblacktwo-1)==trisblackone){
					lefttritwocolor = "white";
				}else{
					lefttritwocolor = alltristd[trisblacktwo-1].style.backgroundColor;
				}
				if((trisblackthree-1)==trisblacktwo||(trisblackthree-1)==trisblackfour){
					lefttrithreecolor = "white";
				}else{
					lefttrithreecolor = alltristd[trisblackthree-1].style.backgroundColor;
				}
				if((trisblackfour-1)==trisblackthree||(trisblackfour-1)==trisblackone){
					lefttrifourcolor = "white";
				}else{
					lefttrifourcolor = alltristd[trisblackfour-1].style.backgroundColor;
				}
				
			}
			
			//判断右是否有黑快了,到最右了就不获取右边的颜色了  防止出错
			mosttrisblack = Math.max(trisblackone,trisblacktwo,trisblackthree,trisblackfour);
			if(mosttrisblack%8!=7){
				if((trisblackone+1)==trisblackfour||(trisblackone+1)==trisblacktwo){
					righttrionecolor = "white";
				}else{
					righttrionecolor = alltristd[trisblackone+1].style.backgroundColor;
				}
				if((trisblacktwo+1)==trisblackthree||(trisblacktwo+1)==trisblackone){
					righttritwocolor = "white";
				}else{
					righttritwocolor = alltristd[trisblacktwo+1].style.backgroundColor;
				}
				if((trisblackthree+1)==trisblacktwo||(trisblackthree+1)==trisblackfour){
					righttrithreecolor = "white";
				}else{
					righttrithreecolor = alltristd[trisblackthree+1].style.backgroundColor;
				}
				if((trisblackfour+1)==trisblackthree||(trisblackfour+1)==trisblackone){
					righttrifourcolor = "white";
				}else{
					righttrifourcolor = alltristd[trisblackfour+1].style.backgroundColor;
				}
			}
			
			if(event.wheelDelta > 0 || event.detail < 0){
				// alert("滚轮向上滚");
				if(trisblackone%8!=0&&trisblacktwo%8!=0&&trisblackthree%8!=0&&trisblackfour%8!=0
				&&lefttrionecolor != "black"&&lefttritwocolor != "black"&&lefttrithreecolor != "black"&&lefttrifourcolor != "black"
				&&righttrionecolor != "black"&&righttritwocolor != "black"&&righttrithreecolor != "black"&&righttrifourcolor != "black"){
					alltristd[trisblackone].style.backgroundColor = "white";
					alltristd[trisblacktwo].style.backgroundColor = "white";
					alltristd[trisblackthree].style.backgroundColor = "white";
					alltristd[trisblackfour].style.backgroundColor = "white";
					trisblackone = trisblackone - 1;
					trisblacktwo = trisblacktwo - 1;
					trisblackthree = trisblackthree - 1;
					trisblackfour = trisblackfour - 1;
					alltristd[trisblackone].style.backgroundColor = "black";
					alltristd[trisblacktwo].style.backgroundColor = "black";
					alltristd[trisblackthree].style.backgroundColor = "black";
					alltristd[trisblackfour].style.backgroundColor = "black";
				}
			}
			
			if(event.wheelDelta < 0 || event.detail > 0){
				// alert("滚轮向上滚");
				if(trisblackone%8!=7&&trisblacktwo%8!=7&&trisblackthree%8!=7&&trisblackfour%8!=7
				&&lefttrionecolor != "black"&&lefttritwocolor != "black"&&lefttrithreecolor != "black"&&lefttrifourcolor != "black"
		   &&righttrionecolor != "black"&&righttritwocolor != "black"&&righttrithreecolor != "black"&&righttrifourcolor != "black"){
					alltristd[trisblackone].style.backgroundColor = "white";
					alltristd[trisblacktwo].style.backgroundColor = "white";
					alltristd[trisblackthree].style.backgroundColor = "white";
					alltristd[trisblackfour].style.backgroundColor = "white";
					trisblackone = trisblackone + 1;
					trisblacktwo = trisblacktwo + 1;
					trisblackthree = trisblackthree + 1;
					trisblackfour = trisblackfour + 1;
					alltristd[trisblackone].style.backgroundColor = "black";
					alltristd[trisblacktwo].style.backgroundColor = "black";
					alltristd[trisblackthree].style.backgroundColor = "black";
					alltristd[trisblackfour].style.backgroundColor = "black";
				}
			}
			
		}
		
		
		// clearInterval(timerone);
		//找出最大的一个黑色的，用这个判断整个俄罗斯方块是否到底了
		mosttrisblack = Math.max(trisblackone,trisblacktwo,trisblackthree,trisblackfour);
		// alert(mosttrisblack);
		//获取所有的的下面的颜色；判断整个俄罗斯方块x下面是否有黑色
		if(mosttrisblack<96){
			//要先拿到叠加的情况的低下的几个，叠加的上面的黑块不能判断
			if((trisblackone+8)==trisblacktwo||(trisblackone+8)==trisblackfour){
				undertrionecolor = "white";
			}else{
				undertrionecolor = alltristd[trisblackone+8].style.backgroundColor;
			}
			if((trisblacktwo+8)==trisblackthree){
				undertritwocolor = "white";
			}else{
				undertritwocolor = alltristd[trisblacktwo+8].style.backgroundColor;
			}
			if((trisblackthree+8)==trisblackfour){
				undertrithreecolor = "white";
			}else{
				undertrithreecolor = alltristd[trisblackthree+8].style.backgroundColor;
			}
			
			if((trisblackfour+8)==trisblackthree){
				undertrifourcolor = "white";
			}else{
				undertrifourcolor = alltristd[trisblackfour+8].style.backgroundColor;
			}
		}
		
		
		
		
	
		// alert(mosttriscolor);
		//判断整个俄罗斯方块是否到底了或者底下有了黑色
		if(mosttrisblack==96||mosttrisblack==97||mosttrisblack==98||mosttrisblack==99||mosttrisblack==100||mosttrisblack==101||mosttrisblack==102||mosttrisblack==103
		   ||undertrionecolor=="black"||undertritwocolor=="black"||undertrithreecolor=="black"||undertrifourcolor=="black"){
			   // alert("ss");
			clearInterval(timerone);
			
			//判断每一行的黑快数，大于等于7就消失，上面的黑快要往下移动一格
			for(var i = (trblacktris.length-1); i >= 0; i--){
				trblacktrisnum = 0;
				for(j = 0; j < 8; j++){
					if(alltristd[trblacktris[i]+j].style.backgroundColor=="black"){
						// alert("ss");
						trblacktrisnum ++;
						// console.log(trblacktrisnum);
					}
				}
				if(trblacktrisnum >=7){
					
					defen = defen + trblacktrisnum;
					for(j = 0; j < 8; j++){
						//将一行中到大了7个或者七个以上的行都变白色，这一行上面的所有黑快往下移动一位
						// alert(i);
						alltristd[trblacktris[i]+j].style.backgroundColor = "white";
					}
					
					//获得所有的消失得哪一行的上面的黑快，将他们的下标放进数组，trblacktris[i]是有7个以上黑快的行的首个下标
					for(var thisi = (trblacktris[i]-1); thisi >= 0 ; thisi--){
						if(alltristd[thisi].style.backgroundColor=="black"){
							allblackbefore.push(thisi);
						}
					}
					
						
					
					
					
					// //这一行上面的所有黑快往下移动一位
					if(allblackbefore.length > 0){
						for(var k = 0; k < allblackbefore.length; k++){
							alltristd[allblackbefore[k]].style.backgroundColor = "white";
								allblackbefore[k] = allblackbefore[k] + 8;
								// console.log(allblackbefore[k]);
								alltristd[allblackbefore[k]].style.backgroundColor = "black";
						}
					allblackbefore.splice(0,allblackbefore.length);
					
					}
					defennum.innerHTML = defen;
				}
				
			}
			
			trisblackone = Math.floor(Math.random()*8);
			gettrisblack();
			//判断一开始随机的四个的颜色，若是已经有黑色了，则说明到顶了，游戏结束
			if(alltristd[trisblackone].style.backgroundColor=="black"||alltristd[trisblacktwo].style.backgroundColor=="black"||alltristd[trisblackthree].style.backgroundColor=="black"||alltristd[trisblackfour].style.backgroundColor=="black"){
				clearInterval(timerone);
				alert("到顶了,您的分数是："+defen);
				defen = 0;
				defennum.innerHTML = defen;
				//清空黑快，点击按钮可重新开始
				for(var i = 0; i < alltristd.length; i++){
					alltristd[i].style.backgroundColor = "white";
				}
			}else{
				alltristd[trisblackone].style.backgroundColor = "black";
				alltristd[trisblacktwo].style.backgroundColor = "black";
				alltristd[trisblackthree].style.backgroundColor = "black";
				alltristd[trisblackfour].style.backgroundColor = "black";
				animationtris();
			}
		}else{
			alltristd[trisblackone].style.backgroundColor = "white";
			alltristd[trisblacktwo].style.backgroundColor = "white";
			alltristd[trisblackthree].style.backgroundColor = "white";
			alltristd[trisblackfour].style.backgroundColor = "white";
			trisblackone = trisblackone + 8;
			trisblacktwo = trisblacktwo + 8;
			trisblackthree = trisblackthree + 8;
			trisblackfour = trisblackfour + 8;
			alltristd[trisblackone].style.backgroundColor = "black";
			alltristd[trisblacktwo].style.backgroundColor = "black";
			alltristd[trisblackthree].style.backgroundColor = "black";
			alltristd[trisblackfour].style.backgroundColor = "black";
		}
		
	}
}


//获取四个黑快的函数
	var gettrisblack = function(){
		

		
		//第一种，第一位是0
			if(trisblackone==0){
				//用随机数决定第二位是1或者8
				var i = Math.floor(Math.random()*2);
				if(i == 0){
					trisblacktwo = 1;
				}else{
					trisblacktwo = 8;
				}
			}
			//第一位是0，第二位是1
			if(trisblackone==0&&trisblacktwo == 1){
				//用随机数决定第三位是2或者9
				var i = Math.floor(Math.random()*2);
				if(i == 0){
					trisblackthree = 2;
				}else{
					trisblackthree = 9;
				}
			}
			//第一位是0，第二位是1，第三位是2
			if(trisblackone==0&&trisblacktwo == 1&&trisblackthree == 2){
				//用随机数决定第四位是3或者10
				var i = Math.floor(Math.random()*2);
				if(i == 0){
					trisblackfour = 3;
				}else{
					trisblackfour = 10;
				}
			}
			
			// 第一位是0，第二位是1，第三位是9
			if(trisblackone==0&&trisblacktwo == 1&&trisblackthree == 9){
				//用随机数决定第四位是8或者9或者10
				var i = Math.floor(Math.random()*3);
				if(i == 0){
					trisblackfour = 8;
				}else if(i = 1){
					trisblackfour = 10;
				}else{
					trisblackfour = 17;
				}
			}
			
			// 第一位是0，第二位是8
			if(trisblackone==0&&trisblacktwo == 8){
				//用随机数决定第三位是9或者16
				var i = Math.floor(Math.random()*2);
				if(i == 0){
					trisblackthree = 9;
				}else{
					trisblackthree = 16;
				}
			}
			
			
			// 第一位是0，第二位是8，第三位是9
			if(trisblackone==0&&trisblacktwo == 8&&trisblackthree == 9){
				//用随机数决定第四位是1或者10或者17
				var i = Math.floor(Math.random()*3);
				if(i == 0){
					trisblackfour = 1;
				}else if(i = 1){
					trisblackfour = 10;
				}else{
					trisblackfour = 17;
				}
			}
			
			// 第一位是0，第二位是8，第三位是9
			if(trisblackone==0&&trisblacktwo == 8&&trisblackthree == 16){
				//用随机数决定第四位是17或者24
				var i = Math.floor(Math.random()*2);
				if(i == 0){
					trisblackfour = 17;
				}else{
					trisblackfour = 24;
				}
			}
			
			
			
			
			
			//第二种，第一位是1
			//第二种，第一位是1
			//第二种，第一位是1
			//第二种，第一位是1
			if(trisblackone==1){
				//用随机数决定第二位是0或者2或者9
				var i = Math.floor(Math.random()*3);
				if(i == 0){
					trisblacktwo = 0;
				}
				else if(i = 1){
					trisblacktwo = 2;
				}else{
					trisblacktwo = 9;
				}
			}
			//第一位是1，第二位是0
			if(trisblackone==1&&trisblacktwo == 0){
				//此时第三位是8
					trisblackthree = 8;
				
			}
			//第一位是1，第二位是0，第三位是8
			if(trisblackone==1&&trisblacktwo == 0&&trisblackthree == 8){
				//用随机数决定第四位是9或者16
				var i = Math.floor(Math.random()*2);
				if(i == 0){
					trisblackfour = 9;
				}else{
					trisblackfour = 16;
				}
			}
			
			//第一位是1，第二位是2
			if(trisblackone==1&&trisblacktwo == 2){
				//用随机数决定第三位是3或者10
				var i = Math.floor(Math.random()*2);
				if(i == 0){
					trisblackthree = 3;
				}else{
					trisblackthree = 10;
				}
			}
			
		//第一位是1，第二位是2，第三位是3
			if(trisblackone==1&&trisblacktwo == 2&&trisblackthree == 3){
				//用随机数决定第四位是4或者11
				var i = Math.floor(Math.random()*2);
				if(i == 0){
					trisblackfour = 4;
				}else{
					trisblackfour = 11;
				}
			}
			
			//第一位是1，第二位是2，第三位是10
			if(trisblackone==1&&trisblacktwo == 2&&trisblackthree == 10){
				//用随机数决定第四位是9或者11或者18
				var i = Math.floor(Math.random()*3);
				if(i == 0){
					trisblackfour = 9;
				}else if(i = 1){
					trisblackfour = 11;
				}else{
					trisblackfour = 18;
				}
			}
			
			//第一位是1，第二位是9
			if(trisblackone==1&&trisblacktwo == 9){
				//用随机数决定第三位是8或者10或者17
				var i = Math.floor(Math.random()*3);
				if(i == 0){
					trisblackthree = 8;
				}else if(i == 1){
					trisblackthree = 10;
				}else{
					trisblackthree = 17;
				}
			}
			
			//第一位是1，第二位是9,第三位是8
			if(trisblackone==1&&trisblacktwo == 9&&trisblackthree == 8){
				//用随机数决定第四位是0或者16
				var i = Math.floor(Math.random()*2);
				if(i == 0){
					trisblackfour = 0;
				}else{
					trisblackfour = 16;
				}
			}
			
			//第一位是1，第二位是9，第三位是10
			if(trisblackone==1&&trisblacktwo == 9&&trisblackthree == 10){
				//用随机数决定第四位是9或者11或者18
				var i = Math.floor(Math.random()*3);
				if(i == 0){
					trisblackfour = 2;
				}else if(i = 1){
					trisblackfour = 11;
				}else{
					trisblackfour = 18;
				}
			}
			
			//第一位是1，第二位是9，第三位是17
			if(trisblackone==1&&trisblacktwo == 9&&trisblackthree == 17){
				//用随机数决定第四位是9或者11或者18
				var i = Math.floor(Math.random()*3);
				if(i == 0){
					trisblackfour = 16;
				}else if(i = 1){
					trisblackfour = 18;
				}else{
					trisblackfour = 25;
				}
			}
			
			
			
			
			
			
			
			
				//第三种，第一位是2
				//第三种，第一位是2
				//第三种，第一位是2
				//第三种，第一位是2
				if(trisblackone==2){
					//用随机数决定第二位是1或者3或者10
					var i = Math.floor(Math.random()*3);
					if(i == 0){
						trisblacktwo = 1;
					}
					else if(i = 1){
						trisblacktwo = 3;
					}else{
						trisblacktwo = 10;
					}
				}
				//第一位是2，第二位是1
				if(trisblackone==2&&trisblacktwo == 1){
					//用随机数决定第三位是0或者9
					var i = Math.floor(Math.random()*2);
					if(i == 0){
						trisblackthree = 0;
					}else{
						trisblackthree = 9;
					}
				}
				//第一位是2，第二位是1，第三位是0
				if(trisblackone==2&&trisblacktwo == 1&&trisblackthree == 0){
					//此时第四位是8
						trisblackfour = 8;
				}
				
				//第一位是2，第二位是1，第三位是9
				if(trisblackone==2&&trisblacktwo == 1&&trisblackthree == 9){
					//用随机数决定第四位是8或者10或者17
					var i = Math.floor(Math.random()*3);
					if(i == 0){
						trisblackfour = 8;
					}else if(i = 1){
						trisblackfour = 10;
					}else{
						trisblackfour = 17;
					}
				}
				
				
				//第一位是2，第二位是3
				if(trisblackone==2&&trisblacktwo == 3){
					//用随机数决定第三位是4或者11
					var i = Math.floor(Math.random()*2);
					if(i == 0){
						trisblackthree =4;
					}else{
						trisblackthree = 11;
					}
				}
				
			//第一位是2，第二位是3，第三位是4
				if(trisblackone==2&&trisblacktwo == 3&&trisblackthree == 4){
					//用随机数决定第四位是5或者12
					var i = Math.floor(Math.random()*2);
					if(i == 0){
						trisblackfour = 5;
					}else{
						trisblackfour = 12;
					}
				}
				
				//第一位是2，第二位是3，第三位是11
				if(trisblackone==2&&trisblacktwo == 3&&trisblackthree == 11){
					//用随机数决定第四位是9或者11或者18
					var i = Math.floor(Math.random()*3);
					if(i == 0){
						trisblackfour = 10;
					}else if(i = 1){
						trisblackfour = 12;
					}else{
						trisblackfour = 19;
					}
				}
				
				//第一位是2，第二位是10
				if(trisblackone==2&&trisblacktwo == 10){
					//用随机数决定第三位是9或者11或者18
					var i = Math.floor(Math.random()*3);
					if(i == 0){
						trisblackthree = 9;
					}else if(i == 1){
						trisblackthree = 11;
					}else{
						trisblackthree = 18;
					}
				}
				
				//第一位是2，第二位是10,第三位是9
				if(trisblackone==2&&trisblacktwo == 10&&trisblackthree == 9){
					//用随机数决定第四位是1或者8或者17
					var i = Math.floor(Math.random()*2);
					if(i == 0){
						trisblackfour = 1;
					}
					else if(i = 1){
						trisblackfour = 8;
					}else{
						trisblackfour = 17;
					}
				}
				
				//第一位是2，第二位是10，第三位是11
				if(trisblackone==2&&trisblacktwo == 10&&trisblackthree == 11){
					//用随机数决定第四位是3或者12或者19
					var i = Math.floor(Math.random()*3);
					if(i == 0){
						trisblackfour = 3;
					}else if(i = 1){
						trisblackfour = 12;
					}else{
						trisblackfour = 19;
					}
				}
				
				//第一位是2，第二位是10，第三位是18
				if(trisblackone==2&&trisblacktwo == 10&&trisblackthree == 18){
					//用随机数决定第四位是17或者19或者26
					var i = Math.floor(Math.random()*3);
					if(i == 0){
						trisblackfour = 17;
					}else if(i = 1){
						trisblackfour = 19;
					}else{
						trisblackfour = 26;
					}
				}
				
			
			
			    //第四种，第一位是3
				//第四种，第一位是3
				//第四种，第一位是3
				//第四种，第一位是3
				if(trisblackone==3){
					//用随机数决定第二位是2或者4或者11
					var i = Math.floor(Math.random()*3);
					if(i == 0){
						trisblacktwo = 2;
					}
					else if(i = 1){
						trisblacktwo = 4;
					}else{
						trisblacktwo = 11;
					}
				}
				//第一位是3，第二位是2
				if(trisblackone==3&&trisblacktwo == 2){
					//用随机数决定第三位是1或者10
					var i = Math.floor(Math.random()*2);
					if(i == 0){
						trisblackthree = 1;
					}else{
						trisblackthree = 10;
					}
				}
				//第一位是3，第二位是2，第三位是1
				if(trisblackone==3&&trisblacktwo == 2&&trisblackthree == 1){
					//用随机数决定第四位是0或者12
					var i = Math.floor(Math.random()*2);
					if(i == 0){
						trisblackfour = 0;
					}else{
						trisblackfour = 9;
					}
				}
				
				//第一位是3，第二位是2，第三位是10
				if(trisblackone==3&&trisblacktwo == 2&&trisblackthree == 10){
					//用随机数决定第四位是9或者11或者18
					var i = Math.floor(Math.random()*3);
					if(i == 0){
						trisblackfour = 9;
					}else if(i = 1){
						trisblackfour = 11;
					}else{
						trisblackfour = 18;
					}
				}
				
				
				//第一位是3，第二位是4
				if(trisblackone==3&&trisblacktwo == 4){
					//用随机数决定第三位是5或者12
					var i = Math.floor(Math.random()*2);
					if(i == 0){
						trisblackthree =5;
					}else{
						trisblackthree = 12;
					}
				}
				
			//第一位是3，第二位是4，第三位是5
				if(trisblackone==3&&trisblacktwo == 4&&trisblackthree == 5){
					//用随机数决定第四位是6或者13
					var i = Math.floor(Math.random()*2);
					if(i == 0){
						trisblackfour = 6;
					}else{
						trisblackfour = 13;
					}
				}
				
				//第一位是3，第二位是4，第三位是12
				if(trisblackone==3&&trisblacktwo == 4&&trisblackthree == 12){
					//用随机数决定第四位是11或者13或者20
					var i = Math.floor(Math.random()*3);
					if(i == 0){
						trisblackfour = 11;
					}else if(i = 1){
						trisblackfour = 13;
					}else{
						trisblackfour = 20;
					}
				}
				
				//第一位是3，第二位是11
				if(trisblackone==3&&trisblacktwo == 11){
					//用随机数决定第三位是10或者12或者19
					var i = Math.floor(Math.random()*3);
					if(i == 0){
						trisblackthree = 10;
					}else if(i == 1){
						trisblackthree = 12;
					}else{
						trisblackthree = 19;
					}
				}
				
				//第一位是3，第二位是11,第三位是10
				if(trisblackone==3&&trisblacktwo == 11&&trisblackthree == 10){
					//用随机数决定第四位是2或者9或者18
					var i = Math.floor(Math.random()*2);
					if(i == 0){
						trisblackfour = 2;
					}
					else if(i = 1){
						trisblackfour = 9;
					}else{
						trisblackfour = 18;
					}
				}
				
				//第一位是3，第二位是11，第三位是12
				if(trisblackone==3&&trisblacktwo == 11&&trisblackthree == 12){
					//用随机数决定第四位是3或者12或者19
					var i = Math.floor(Math.random()*3);
					if(i == 0){
						trisblackfour = 4;
					}else if(i = 1){
						trisblackfour = 13;
					}else{
						trisblackfour = 20;
					}
				}
				
				//第一位是3，第二位是11，第三位是19
				if(trisblackone==3&&trisblacktwo == 11&&trisblackthree == 19){
					//用随机数决定第四位是18或者20或者27
					var i = Math.floor(Math.random()*3);
					if(i == 0){
						trisblackfour = 18;
					}else if(i = 1){
						trisblackfour = 20;
					}else{
						trisblackfour = 27;
					}
				}
			
			
			
			
			
			    //第五种，第一位是4
				//第五种，第一位是4
				//第五种，第一位是4
				//第五种，第一位是4
				if(trisblackone==4){
					//用随机数决定第二位是2或者4或者11
					var i = Math.floor(Math.random()*3);
					if(i == 0){
						trisblacktwo = 3;
					}
					else if(i = 1){
						trisblacktwo = 5;
					}else{
						trisblacktwo = 12;
					}
				}
				//第一位是4，第二位是5
				if(trisblackone==4&&trisblacktwo == 5){
					//用随机数决定第三位是6或者13
					var i = Math.floor(Math.random()*2);
					if(i == 0){
						trisblackthree = 6;
					}else{
						trisblackthree = 13;
					}
				}
				//第一位是4，第二位是5，第三位是6
				if(trisblackone==4&&trisblacktwo == 5&&trisblackthree == 6){
					//用随机数决定第四位是7或者14
					var i = Math.floor(Math.random()*2);
					if(i == 0){
						trisblackfour = 7;
					}else{
						trisblackfour = 14;
					}
				}
				
				//第一位是4，第二位是5，第三位是13
				if(trisblackone==4&&trisblacktwo == 5&&trisblackthree == 13){
					//用随机数决定第四位是12或者14或者21
					var i = Math.floor(Math.random()*3);
					if(i == 0){
						trisblackfour = 12;
					}else if(i = 1){
						trisblackfour = 14;
					}else{
						trisblackfour = 21;
					}
				}
				
				
				//第一位是4，第二位是3
				if(trisblackone==4&&trisblacktwo == 3){
					//用随机数决定第三位是2或者11
					var i = Math.floor(Math.random()*2);
					if(i == 0){
						trisblackthree =2;
					}else{
						trisblackthree = 11;
					}
				}
				
			//第一位是4，第二位是3，第三位是2
				if(trisblackone==4&&trisblacktwo == 3&&trisblackthree == 2){
					//用随机数决定第四位是1或者10
					var i = Math.floor(Math.random()*2);
					if(i == 0){
						trisblackfour = 1;
					}else{
						trisblackfour = 10;
					}
				}
				
				//第一位是4，第二位是3，第三位是11
				if(trisblackone==4&&trisblacktwo == 3&&trisblackthree == 11){
					//用随机数决定第四位是10或者12或者19
					var i = Math.floor(Math.random()*3);
					if(i == 0){
						trisblackfour = 10;
					}else if(i = 1){
						trisblackfour = 12;
					}else{
						trisblackfour = 19;
					}
				}
				
				//第一位是4，第二位是12
				if(trisblackone==4&&trisblacktwo == 12){
					//用随机数决定第三位是11或者13或者20
					var i = Math.floor(Math.random()*3);
					if(i == 0){
						trisblackthree = 11;
					}else if(i == 1){
						trisblackthree = 13;
					}else{
						trisblackthree = 20;
					}
				}
				
				//第一位是4，第二位是12,第三位是13
				if(trisblackone==4&&trisblacktwo == 12&&trisblackthree == 13){
					//用随机数决定第四位是5或者14或者21
					var i = Math.floor(Math.random()*2);
					if(i == 0){
						trisblackfour = 5;
					}
					else if(i = 1){
						trisblackfour = 14;
					}else{
						trisblackfour = 21;
					}
				}
				
				//第一位是4，第二位是12，第三位是11
				if(trisblackone==4&&trisblacktwo == 12&&trisblackthree == 11){
					//用随机数决定第四位是3或者10或者19
					var i = Math.floor(Math.random()*3);
					if(i == 0){
						trisblackfour = 3;
					}else if(i = 1){
						trisblackfour = 10;
					}else{
						trisblackfour = 19;
					}
				}
				
				//第一位是4，第二位是12，第三位是20
				if(trisblackone==4&&trisblacktwo == 12&&trisblackthree == 20){
					//用随机数决定第四位是19或者21或者28
					var i = Math.floor(Math.random()*3);
					if(i == 0){
						trisblackfour = 19;
					}else if(i = 1){
						trisblackfour = 21;
					}else{
						trisblackfour = 28;
					}
				}
			
			
			
			
			
			
			    //第六种，第一位是5
				//第六种，第一位是5
				//第六种，第一位是5
				//第六种，第一位是5
				if(trisblackone==5){
					//用随机数决定第二位是4或者6或者13
					var i = Math.floor(Math.random()*3);
					if(i == 0){
						trisblacktwo = 4;
					}
					else if(i = 1){
						trisblacktwo = 6;
					}else{
						trisblacktwo = 13;
					}
				}
				//第一位是5，第二位是6
				if(trisblackone==5&&trisblacktwo == 6){
					//用随机数决定第三位是7或者14
					var i = Math.floor(Math.random()*2);
					if(i == 0){
						trisblackthree = 7;
					}else{
						trisblackthree = 14;
					}
				}
				//第一位是5，第二位是6，第三位是7
				if(trisblackone==5&&trisblacktwo == 6&&trisblackthree == 7){
					//此时第四位是15
						trisblackfour = 15;
				}
				
				//第一位是5，第二位是6，第三位是14
				if(trisblackone==5&&trisblacktwo == 6&&trisblackthree == 14){
					//用随机数决定第四位是13或者15或者22
					var i = Math.floor(Math.random()*3);
					if(i == 0){
						trisblackfour = 13;
					}else if(i = 1){
						trisblackfour = 15;
					}else{
						trisblackfour = 22;
					}
				}
				
				
				//第一位是5，第二位是4
				if(trisblackone==5&&trisblacktwo == 4){
					//用随机数决定第三位是3或者12
					var i = Math.floor(Math.random()*2);
					if(i == 0){
						trisblackthree =3;
					}else{
						trisblackthree = 12;
					}
				}
				
			//第一位是5，第二位是4，第三位是3
				if(trisblackone==5&&trisblacktwo == 4&&trisblackthree == 3){
					//用随机数决定第四位是2或者11
					var i = Math.floor(Math.random()*2);
					if(i == 0){
						trisblackfour = 2;
					}else{
						trisblackfour = 11;
					}
				}
				
				//第一位是5，第二位是4，第三位是12
				if(trisblackone==5&&trisblacktwo == 4&&trisblackthree == 12){
					//用随机数决定第四位是11或者13或者20
					var i = Math.floor(Math.random()*3);
					if(i == 0){
						trisblackfour = 11;
					}else if(i = 1){
						trisblackfour = 13;
					}else{
						trisblackfour = 20;
					}
				}
				
				//第一位是5，第二位是13
				if(trisblackone==5&&trisblacktwo == 13){
					//用随机数决定第三位是12或者14或者21
					var i = Math.floor(Math.random()*3);
					if(i == 0){
						trisblackthree = 12;
					}else if(i == 1){
						trisblackthree = 14;
					}else{
						trisblackthree = 21;
					}
				}
				
				//第一位是5，第二位是13,第三位是14
				if(trisblackone==5&&trisblacktwo == 13&&trisblackthree == 14){
					//用随机数决定第四位是6或者15或者22
					var i = Math.floor(Math.random()*2);
					if(i == 0){
						trisblackfour = 6;
					}
					else if(i = 1){
						trisblackfour = 15;
					}else{
						trisblackfour = 22;
					}
				}
				
				//第一位是5，第二位是13，第三位是12
				if(trisblackone==5&&trisblacktwo == 13&&trisblackthree == 12){
					//用随机数决定第四位是4或者11或者20
					var i = Math.floor(Math.random()*3);
					if(i == 0){
						trisblackfour = 4;
					}else if(i = 1){
						trisblackfour = 11;
					}else{
						trisblackfour = 20;
					}
				}
				
				//第一位是4，第二位是13，第三位是21
				if(trisblackone==5&&trisblacktwo == 13&&trisblackthree == 21){
					//用随机数决定第四位是20或者22或者29
					var i = Math.floor(Math.random()*3);
					if(i == 0){
						trisblackfour = 20;
					}else if(i = 1){
						trisblackfour = 22;
					}else{
						trisblackfour = 29;
					}
				}
				
			
			
			
			
			
		
		
		
		
		    //第七种，第一位是6
			//第七种，第一位是6
			//第七种，第一位是6
			//第七种，第一位是6
			if(trisblackone==6){
				//用随机数决定第二位是5或者7或者14
				var i = Math.floor(Math.random()*3);
				if(i == 0){
					trisblacktwo = 5;
				}
				else if(i = 1){
					trisblacktwo = 7;
				}else{
					trisblacktwo = 14;
				}
			}
			//第一位是6，第二位是7
			if(trisblackone==6&&trisblacktwo ==7 ){
				//此时第三位是15
					trisblackthree = 15;
				
			}
			//第一位是6，第二位是7，第三位是15
			if(trisblackone==6&&trisblacktwo == 7&&trisblackthree == 15){
				//用随机数决定第四位是13或者14
				var i = Math.floor(Math.random()*2);
				if(i == 0){
					trisblackfour = 23;
				}else{
					trisblackfour = 14;
				}
			}
			
			//第一位是6，第二位是5
			if(trisblackone==6&&trisblacktwo == 5){
				//用随机数决定第三位是4或者13
				var i = Math.floor(Math.random()*2);
				if(i == 0){
					trisblackthree = 4;
				}else{
					trisblackthree = 13;
				}
			}
			
		//第一位是6，第二位是5，第三位是4
			if(trisblackone==6&&trisblacktwo == 5&&trisblackthree == 4){
				//用随机数决定第四位是3或者12
				var i = Math.floor(Math.random()*2);
				if(i == 0){
					trisblackfour = 3;
				}else{
					trisblackfour = 12;
				}
			}
			
			//第一位是6，第二位是5，第三位是13
			if(trisblackone==6&&trisblacktwo == 5&&trisblackthree == 13){
				//用随机数决定第四位是9或者11或者18
				var i = Math.floor(Math.random()*3);
				if(i == 0){
					trisblackfour = 12;
				}else if(i = 1){
					trisblackfour = 14;
				}else{
					trisblackfour = 21;
				}
			}
			
			//第一位是6，第二位是14
			if(trisblackone==6&&trisblacktwo == 14){
				//用随机数决定第三位是13或者15或者22
				var i = Math.floor(Math.random()*3);
				if(i == 0){
					trisblackthree = 13;
				}else if(i == 1){
					trisblackthree = 15;
				}else{
					trisblackthree = 22;
				}
			}
			
			//第一位是6，第二位是14,第三位是15
			if(trisblackone==6&&trisblacktwo == 14&&trisblackthree == 15){
				//用随机数决定第四位是7或者23
				var i = Math.floor(Math.random()*2);
				if(i == 0){
					trisblackfour = 7;
				}else{
					trisblackfour = 23;
				}
			}
			
			//第一位是6，第二位是14，第三位是13
			if(trisblackone==6&&trisblacktwo == 14&&trisblackthree == 13){
				//用随机数决定第四位是5或者12或者21
				var i = Math.floor(Math.random()*3);
				if(i == 0){
					trisblackfour = 5;
				}else if(i = 1){
					trisblackfour = 12;
				}else{
					trisblackfour = 21;
				}
			}
			
			//第一位是6，第二位是14，第三位是22
			if(trisblackone==6&&trisblacktwo == 14&&trisblackthree == 22){
				//用随机数决定第四位是9或者11或者18
				var i = Math.floor(Math.random()*3);
				if(i == 0){
					trisblackfour = 21;
				}else if(i = 1){
					trisblackfour = 23;
				}else{
					trisblackfour = 30;
				}
			}
			
			
		
			
			
			
			
			
			//第八种，第一位是7
			//第八种，第一位是7
			//第八种，第一位是7
			//第八种，第一位是7
			if(trisblackone==7){
				//用随机数决定第二位是6或者15
				var i = Math.floor(Math.random()*2);
				if(i == 0){
					trisblacktwo = 6;
				}else{
					trisblacktwo = 15;
				}
			}
			//第一位是7，第二位是6
			if(trisblackone==7&&trisblacktwo == 6){
				//用随机数决定第三位是5或者14
				var i = Math.floor(Math.random()*2);
				if(i == 0){
					trisblackthree = 5;
				}else{
					trisblackthree = 14;
				}
			}
			//第一位是7，第二位是6，第三位是5
			if(trisblackone==7&&trisblacktwo == 6&&trisblackthree == 5){
				//用随机数决定第四位是4或者13
				var i = Math.floor(Math.random()*2);
				if(i == 0){
					trisblackfour = 4;
				}else{
					trisblackfour = 13;
				}
			}
			
			// 第一位是7，第二位是6，第三位是14
			if(trisblackone==7&&trisblacktwo == 6&&trisblackthree == 14){
				//用随机数决定第四位是8或者9或者10
				var i = Math.floor(Math.random()*3);
				if(i == 0){
					trisblackfour = 13;
				}else if(i = 1){
					trisblackfour = 15;
				}else{
					trisblackfour = 22;
				}
			}
			
			// 第一位是7，第二位是15
			if(trisblackone==7&&trisblacktwo == 15){
				//用随机数决定第三位是14或者23
				var i = Math.floor(Math.random()*2);
				if(i == 0){
					trisblackthree = 14;
				}else{
					trisblackthree = 23;
				}
			}
			
			
			// 第一位是7，第二位是15，第三位是14
			if(trisblackone==7&&trisblacktwo == 15&&trisblackthree == 14){
				//用随机数决定第四位是6或者13或者22
				var i = Math.floor(Math.random()*3);
				if(i == 0){
					trisblackfour = 6;
				}else if(i = 1){
					trisblackfour = 13;
				}else{
					trisblackfour = 22;
				}
			}
			
			// 第一位是7，第二位是15，第三位是23
			if(trisblackone==7&&trisblacktwo == 15&&trisblackthree == 23){
				//用随机数决定第四位是22或者31
				var i = Math.floor(Math.random()*2);
				if(i == 0){
					trisblackfour = 22;
				}else{
					trisblackfour = 31;
				}
			}
	}