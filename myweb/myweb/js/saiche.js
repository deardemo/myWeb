var pubudiv;
var getcolor = [];
var timeone;
var saitd;
var tou;
var timetwo;
var mytime = 150; 
var suijitwo;
var suijithree;
var suijifour;
var suijifive;
var suijisix;
var timeoutone;
var timeouttwo;
var timeoutthree;
var timeoutfour;
var timethree;
var saichebtn;
var num = 0;
var defennum;


window.onload = function(){
	defennum = document.getElementById("defennum");
	saitd = document.getElementsByClassName("saitd");
	saichebtn = document.getElementById("saichebtn");
	pubudiv = document.getElementsByClassName("pubudiv");
	var allcolor = ["red","skyblue","green","yellow","black","pink","grey","purple","orange","white"];
	for(var i = 0; i < pubudiv.length; i++){
		var j;
		j = Math.floor(Math.random()*allcolor.length);
		pubudiv[i].style.backgroundColor = allcolor[j];
	}
	
	// clearInterval(timeone);
	
	for(var i = 0; i < saitd.length; i++){
		saitd[i].style.backgroundColor = "white";
	}
	
	
	
	saichebtn.onclick = function(){
		tou = 215;
		saitd[tou].style.backgroundColor = "black";
		saitd[tou+1].style.backgroundColor = "black";
		saitd[tou+16].style.backgroundColor = "black";
		saitd[tou+17].style.backgroundColor = "black";
		
		
		suijitwo = Math.floor(Math.random()*16);
		saitd[suijitwo].style.backgroundColor = "black";
		suijithree = Math.floor(Math.random()*16);
		suijifour = Math.floor(Math.random()*16);
		suijifive = Math.floor(Math.random()*16);
		suijisix = Math.floor(Math.random()*16);
		timetwo = setInterval(timetwofun,mytime);
	}
	


	

}


   
 function timetwofun(){
			if(suijitwo<224){
				if(saitd[suijitwo+16].style.backgroundColor == "black"&&saitd[suijitwo+32].style.backgroundColor == "black"){
					alert("你输了,你的最后得分是："+num);
					num = 0;
					defennum.innerHTML = num;
					mytime = 150; 
					clearTimeout(timeoutone);
					clearTimeout(timeouttwo);
					clearTimeout(timeoutthree);
					clearTimeout(timeoutfour);
					clearInterval(timetwo);
					suijithree = 240;
					suijifour = 240;
					suijifive = 240;
					suijisix = 240;
					for(var i = 0; i < saitd.length; i++){
						saitd[i].style.backgroundColor = "white";
					}
					 return;
				}else{
					saitd[suijitwo].style.backgroundColor = "white";
					suijitwo = suijitwo + 16; 
					saitd[suijitwo].style.backgroundColor = "black";
				}
			}else{
				num++;
				defennum.innerHTML = num;
				if(num%5==0){
					mytime = mytime - 2;
				}
				saitd[suijitwo].style.backgroundColor = "white";
				clearInterval(timetwo);
				suijitwo = Math.floor(Math.random()*16);
				saitd[suijitwo].style.backgroundColor = "black";
				timetwo = setInterval(timetwofun,mytime);
			}
		
		
		
		
		timeoutone = setTimeout(function(){
			if(suijithree<240){
				saitd[suijithree].style.backgroundColor = "black";
				saitd[suijithree].style.backgroundColor = "white";
				suijithree = suijithree + 16;
				if(suijithree<224){
					if(saitd[suijithree].style.backgroundColor == "black"&&saitd[suijithree+16].style.backgroundColor == "black"){
						alert("你输了,你的最后得分是："+num);
						num = 0;
						defennum.innerHTML = num;
						mytime = 150; 
						clearTimeout(timeoutone);
						clearTimeout(timeouttwo);
						clearTimeout(timeoutthree);
						clearTimeout(timeoutfour);
						clearInterval(timetwo);
						suijithree = 240;
						suijifour = 240;
						suijifive = 240;
						suijisix = 240;
						for(var i = 0; i < saitd.length; i++){
							saitd[i].style.backgroundColor = "white";
						}
						 return;
					}else{
						saitd[suijithree].style.backgroundColor = "black";
					}
				}else{
					num++;
					defennum.innerHTML = num;
					if(num%5==0){
						mytime = mytime - 2;
					}
					clearInterval(timetwo);
					suijithree = Math.floor(Math.random()*16);
					saitd[suijithree].style.backgroundColor = "black";
					timetwo = setInterval(timetwofun,mytime);
				}
				
				
				timeouttwo = setTimeout(function(){
					if(suijifour<240){
						saitd[suijifour].style.backgroundColor = "black";
						saitd[suijifour].style.backgroundColor = "white";
						suijifour = suijifour + 16;
						if(suijifour<224){
							if(saitd[suijifour].style.backgroundColor == "black"&&saitd[suijifour+16].style.backgroundColor == "black"){
								alert("你输了,你的最后得分是："+num);
								num = 0;
								defennum.innerHTML = num;
								mytime = 150; 
								clearTimeout(timeoutone);
								clearTimeout(timeouttwo);
								clearTimeout(timeoutthree);
								clearTimeout(timeoutfour);
								clearInterval(timetwo);
							    suijithree = 240;
							    suijifour = 240;
							    suijifive = 240;
							    suijisix = 240;
								for(var i = 0; i < saitd.length; i++){
									saitd[i].style.backgroundColor = "white";
								}
								 return;
							}else{
								saitd[suijifour].style.backgroundColor = "black";
							}
						}else{
							num++;
							defennum.innerHTML = num;
							if(num%5==0){
								mytime = mytime - 2;
							}
							clearInterval(timetwo);
							suijifour = Math.floor(Math.random()*16);
							saitd[suijifour].style.backgroundColor = "black";
							timetwo = setInterval(timetwofun,mytime);
						}
						
						
						
						timeoutthree = setTimeout(function(){
							if(suijifive<240){
								saitd[suijifive].style.backgroundColor = "black";
								saitd[suijifive].style.backgroundColor = "white";
								suijifive = suijifive + 16;
								if(suijifive<224){
									if(saitd[suijifive].style.backgroundColor == "black"&&saitd[suijifive+16].style.backgroundColor == "black"){
										alert("你输了,你的最后得分是："+num);
										num = 0;
										defennum.innerHTML = num;
										mytime = 150; 
										clearTimeout(timeoutone);
										clearTimeout(timeouttwo);
										clearTimeout(timeoutthree);
										clearTimeout(timeoutfour);
										clearInterval(timetwo);
								        suijithree = 240;
								        suijifour = 240;
								        suijifive = 240;
								        suijisix = 240;
										
										for(var i = 0; i < saitd.length; i++){
											saitd[i].style.backgroundColor = "white";
										}
										 return;
									}else{
								        saitd[suijifive].style.backgroundColor = "black";
									}
								}else{
									num++;
									defennum.innerHTML = num;
									if(num%5==0){
										mytime = mytime - 2;
									}
									clearInterval(timetwo);
									suijifive = Math.floor(Math.random()*16);
									saitd[suijifive].style.backgroundColor = "black";
									timetwo = setInterval(timetwofun,mytime);
								}
								
								
								timeoutfour = setTimeout(function(){
									if(suijisix<240){
										saitd[suijisix].style.backgroundColor = "black";
										saitd[suijisix].style.backgroundColor = "white";
										suijisix = suijisix + 16;
										if(suijisix<224){
											if(saitd[suijisix].style.backgroundColor == "black"&&saitd[suijisix+16].style.backgroundColor == "black"){
												alert("你输了,你的最后得分是："+num);
												num = 0;
												defennum.innerHTML = num;
												mytime = 150; 
												clearTimeout(timeoutone);
												clearTimeout(timeouttwo);
												clearTimeout(timeoutthree);
												clearTimeout(timeoutfour);
												clearInterval(timetwo);
										        suijithree = 240;
										        suijifour = 240;
										        suijifive = 240;
										        suijisix = 240;
												for(var i = 0; i < saitd.length; i++){
													saitd[i].style.backgroundColor = "white";
												}
												 return;
											}else{
												saitd[suijisix].style.backgroundColor = "black";
											}
										}else{
											num++;
											defennum.innerHTML = num;
											if(num%5==0){
												mytime = mytime - 2;
											}
											clearInterval(timetwo);
											suijisix = Math.floor(Math.random()*16);
											saitd[suijisix].style.backgroundColor = "black";
											timetwo = setInterval(timetwofun,mytime);
										}
									}
								},800);
							}
							
						},800);
					}
					
				},800);
			}
			
		},800);
		
	}
	
	


timeone = setInterval(function(){
	var allnum = [-20,-15,-10,-5,0,5,10,15,20];
	for(var i = 0; i < pubudiv.length; i++){
		var j;
		j = Math.floor(Math.random()*allnum.length);
		pubudiv[i].style.height = 28 + parseInt(allnum[j]) + "px";
	}
	
},200);











window.onkeydown = function(event){
	event = event || window.event;

		//向下移动
		if(event.keyCode == 40){
			if(tou+16<224){
				saitd[tou].style.backgroundColor = "white";
				saitd[tou+1].style.backgroundColor = "white";
				saitd[tou+16].style.backgroundColor = "white";
				saitd[tou+17].style.backgroundColor = "white";
				tou = tou + 16;
				saitd[tou].style.backgroundColor = "black";
				saitd[tou+1].style.backgroundColor = "black";
				saitd[tou+16].style.backgroundColor = "black";
				saitd[tou+17].style.backgroundColor = "black";
			}
		}
		//向上移动
		if(event.keyCode == 38){
			if((tou-16)>=0){
				saitd[tou].style.backgroundColor = "white";
				saitd[tou+1].style.backgroundColor = "white";
				saitd[tou+16].style.backgroundColor = "white";
				saitd[tou+17].style.backgroundColor = "white";
				tou = tou - 16;
				saitd[tou].style.backgroundColor = "black";
				saitd[tou+1].style.backgroundColor = "black";
				saitd[tou+16].style.backgroundColor = "black";
				saitd[tou+17].style.backgroundColor = "black";
			}
		}
		//向左移动
		if(event.keyCode == 37){
			if((tou-1)%16!=15){
				saitd[tou].style.backgroundColor = "white";
				saitd[tou+1].style.backgroundColor = "white";
				saitd[tou+16].style.backgroundColor = "white";
				saitd[tou+17].style.backgroundColor = "white";
				tou = tou - 1;
				saitd[tou].style.backgroundColor = "black";
				saitd[tou+1].style.backgroundColor = "black";
				saitd[tou+16].style.backgroundColor = "black";
				saitd[tou+17].style.backgroundColor = "black";
			}
		}
		//向右移动
		if(event.keyCode == 39){
			if((tou+1)%16!=15){
				saitd[tou].style.backgroundColor = "white";
				saitd[tou+1].style.backgroundColor = "white";
				saitd[tou+16].style.backgroundColor = "white";
				saitd[tou+17].style.backgroundColor = "white";
				tou = tou + 1;
				saitd[tou].style.backgroundColor = "black";
				saitd[tou+1].style.backgroundColor = "black";
				saitd[tou+16].style.backgroundColor = "black";
				saitd[tou+17].style.backgroundColor = "black";
			}
		}
}


