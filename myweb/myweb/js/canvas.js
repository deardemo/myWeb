    var pencilcanvas;
	var canvahuaban;
    var ctxhuabu;
    var selectcolor;
    var rectcanvas;
    var arccanvas;
	var indexX;
	var indexY;
	var x;
	var y;
	var getcolor = "black";
	var getwidth = 2;
	var rectnew;
	var arcnew;
	var onerectcanvas;
	var onearccanvas;
	window.onload = function(){
		//画笔
		 pencilcanvas = document.getElementById("pencilcanvas");
		 // alert(pencilcanvas);
		//擦除
		 cachucanvas = document.getElementById("cachucanvas");
		//清空
		 clearcanvas = document.getElementById("clearcanvas");
		//颜色
		 colorcanvas = document.getElementById("colorcanvas");
		 selectcolor = document.getElementById("selectcolor");
		 // alert(selectcolor);
		//粗细
		 widthcanvas = document.getElementById("widthcanvas");
		 //长方形
		 onerectcanvas = document.getElementById("onerectcanvas");
		 //圆形
		 onearccanvas = document.getElementById("onearccanvas");
		 //长方形填充
		 rectcanvas = document.getElementById("rectcanvas");
		 //圆形填充
		 arccanvas = document.getElementById("arccanvas");
		 //长方形艺术效果
		 rectnew = document.getElementById("rectnew");
		 //圆形艺术效果
		 arcnew = document.getElementById("arcnew");
		//画布
		 canvahuaban = document.getElementById("canvahuaban");
		 ctxhuabu = canvahuaban.getContext("2d");
		 
		 
		 
		 
		 //点击画笔之后才能画
		 pencilcanvas.onclick = function(event){
		 	canvahuaban.style.cursor = "crosshair";
		 	mouse("black",2);
		 }
		   //实现擦除功能
		   cachucanvas.onclick = function(){
		 	  mouse("white",30);
		   }
		   //实现清空功能
		 clearcanvas.onclick = function(){
		 	ctxhuabu.clearRect(0,0,1700,950);
		 }
		 
		 //实现选择颜色功能
		 selectcolor.onchange = function(){
		 	var selector = selectcolor[selectcolor.selectedIndex].value;
		 	// alert(selector);
		 	switch(selector){
		 		case "black":
		 		   getcolor = "black";
		 		   mouse("black",getwidth);
		 		break;
		 		case "red":
		 		   getcolor = "red";
		 		   mouse("red",getwidth);
		 		break;
		 		case "green":
		 		   getcolor = "green";
		 		   mouse("green",getwidth);
		 		break;
		 		case "yellow":
		 		   getcolor = "yellow";
		 		   mouse("yellow",getwidth);
		 		break;
		 		case "blue":
		 		   getcolor = "blue";
		 		   mouse("blue",getwidth);
		 		break;
		 		case "purple":
		 		   getcolor = "purple";
		 		   mouse("purple",getwidth);
		 		break;
				case "white":
				   getcolor = "white";
				   mouse("white",getwidth);
				break;
		 	}
		 }
		 
		 //实现选择粗细的功能
		 widthcanvas.onchange = function(){
		 	var selector = widthcanvas[widthcanvas.selectedIndex].value;
		 	// alert(selector);
		 	switch(selector){
		 		case "one":
		 		   getwidth = 1;
		 		   mouse(getcolor,1);
		 		break;
		 		case "two":
		 		   getwidth = 2;
		 		   mouse(getcolor,2);
		 		break;
		 		case "three":
		 		   getwidth = 3;
		 		   mouse(getcolor,3);
		 		break;
		 		case "four":
		 	       getwidth = 4;
		 		   mouse(getcolor,4);
		 		break;
		 		case "five":
		 		   getwidth = 5;
		 		   mouse(getcolor,5);
		 		break;
		 		case "six":
		 		   getwidth = 6;
		 		   mouse(getcolor,6);
		 		break;
		 	}
		 }
		 
		 
		 //实现长方形功能
		 onerectcanvas.onclick = function(){
		 	onerectarcnew("rect",getcolor,getwidth);
		 }
		 
		 //实现圆形功能
		 onearccanvas.onclick = function(){
		 	onerectarcnew("arc",getcolor,getwidth);
		 }
		 
		 //实现长方形填充的功能
		 rectcanvas.onclick = function(){
		 	rectarc("rect",getcolor,getwidth);
		 }
		 
		 //实现圆形填充的功能
		 arccanvas.onclick = function(){
		 	rectarc("arc",getcolor,getwidth);
		 }
		 
		 //实现长方形艺术效果
		 rectnew.onclick = function(){
			 rectarcnew("rect",getcolor,getwidth);
		 }
		 //实现圆形艺术效果
		 arcnew.onclick = function(){
			 rectarcnew("arc",getcolor,getwidth);
		 }
		 
		 //根据鼠标的点击、移动、弹起来实现画画功能
		   function mouse(color,width){
		 	  canvahuaban.onmousedown = function(event){
		 		  event = event||window.event;
		 		  indexX = event.clientX;
		 		  indexY = event.clientY;
		 	  		canvahuaban.onmousemove = function(event){
		 	  			event = event||window.event;
		 	  			x = event.clientX;
		 	  			y = event.clientY;
		 				ctxhuabu.strokeStyle = color;
		 				ctxhuabu.lineWidth = width;
		 	  			ctxhuabu.beginPath();
		 				ctxhuabu.moveTo(indexX,indexY);
		 				ctxhuabu.lineTo(x,y);
		 				ctxhuabu.stroke();
		 				//把上次结尾处当做下一次的开头
		 	  			indexX = x;
		 	  			indexY = y;
		 	  			canvahuaban.onmouseup = function(event){
		 	  				canvahuaban.onmousemove = null;	
		 	  			}
		 	  		}
		 	  }
		   }
		   
		   
		   // 实现长方形或者圆形的功能
		  function onerectarcnew(type,color,width){
		  		  canvahuaban.onmousedown = function(event){
		  		  			  event = event||window.event;
		  		  			  var beginX = event.clientX;
		  		  			  var beginY = event.clientY;
		  		  		canvahuaban.onmousemove = function(event){
		  		  			event = event||window.event;
		  		  			var overx = event.clientX;
		  		  			var overy = event.clientY;
		  					ctxhuabu.strokeStyle = color;
		  					ctxhuabu.lineWidth = width;
		  		  			canvahuaban.onmouseup = function(event){
								if(type=="rect"){
									ctxhuabu.beginPath();
									ctxhuabu.rect(beginX,beginY,(overx-beginX),(overy-beginY));
									ctxhuabu.stroke();
								}
								if(type=="arc"){
									ctxhuabu.beginPath();
									ctxhuabu.arc((beginX+overx)/2,(beginY+overy)/2,Math.abs(beginX-overx)/2,0,Math.PI*2);
									ctxhuabu.stroke();
								}
		  		  				canvahuaban.onmousemove = null;	
		  						
		  		  			}
		  		  		}
		  		  }
		  }
		   
		   
		   
		   // 实现长方形或者圆形填充的功能
		   function rectarc(type,color,width){
		 	  canvahuaban.onmousedown = function(event){
		 	  			  event = event||window.event;
		 	  			  var beginX = event.clientX;
		 	  			  var beginY = event.clientY;
		 	  		canvahuaban.onmousemove = function(event){
		 				// ctxhuabu.clearRect(0,0,600,800);
		 	  			event = event||window.event;
		 	  			var overx = event.clientX;
		 	  			var overy = event.clientY;
		 				ctxhuabu.fillStyle = color;
		 				ctxhuabu.lineWidth = width;
		 				if(type=="rect"){
							// alert("s");
		 					ctxhuabu.beginPath();
		 					ctxhuabu.rect(beginX,beginY,(overx-beginX),(overy-beginY));
							ctxhuabu.fill();
		 				}
		 				if(type=="arc"){
		 					ctxhuabu.beginPath();
		 					ctxhuabu.arc((beginX+overx)/2,(beginY+overy)/2,Math.abs(beginX-overx)/4+Math.abs(beginY-overy)/4,0,Math.PI*2);
							ctxhuabu.fill();
		 				}
		 	  			canvahuaban.onmouseup = function(event){
							// ctxhuabu.stroke();
		 	  				canvahuaban.onmousemove = null;	
		 	  			}
		 	  		}
		 	  }
		   }
		   
		   
		   // 实现长方形或者圆形艺术效果的功能
		   function rectarcnew(type,color,width){
		   		 	  canvahuaban.onmousedown = function(event){
		   		 	  			  event = event||window.event;
		   		 	  			  var beginX = event.clientX;
		   		 	  			  var beginY = event.clientY;
		   		 	  		canvahuaban.onmousemove = function(event){
		   		 				// ctxhuabu.clearRect(0,0,600,800);
		   		 	  			event = event||window.event;
		   		 	  			var overx = event.clientX;
		   		 	  			var overy = event.clientY;
		   		 				ctxhuabu.strokeStyle = color;
		   		 				ctxhuabu.lineWidth = width;
		   		 				if(type=="rect"){
									
		   		 					ctxhuabu.beginPath();
		   		 					ctxhuabu.rect(beginX,beginY,(overx-beginX),(overy-beginY));
									
		   							ctxhuabu.stroke();
		   		 				}
		   		 				if(type=="arc"){
		   		 					ctxhuabu.beginPath();
		   		 					ctxhuabu.arc((beginX+overx)/2,(beginY+overy)/2,Math.abs(beginX-overx)/4+Math.abs(beginY-overy)/4,0,Math.PI*2);
		   							ctxhuabu.stroke();
		   		 				}
		   		 	  			canvahuaban.onmouseup = function(event){
		   		 	  				canvahuaban.onmousemove = null;	
		   		 	  			}
		   		 	  		}
		   		 	  }
		   }
		   
		   
          
		  
		  
		  
		  // 实现时钟
		   
		   drawzhong();
		   function drawzhong(){
		   	drawpan();
		   	drawzhen();
		   	requestAnimationFrame(drawzhong);
		   }
		   
		   
		   
		   
		   // 绘制时针/分针/秒针
		   function drawzhen(){
		   	// ctxfive.clearRect(0,0,500,500);
		   	
		   	
		   	var time = new Date();
		   	var pi = Math.PI;
		   	
		   	var s = time.getSeconds();
		   	var m =  time.getMinutes();
		   	var h = time.getHours();
			
			console.log(s);
		   	
		   	secondangle = pi / 180 * 6 * s;
		   	 minuteangle = pi / 180 * 6 * m + secondangle / 60;
		   	 hourangle = pi / 180 * 30 * h + minuteangle / 12;
		   	 
		   	 drawxuanzhuan(secondangle,"red",120,2,ctxhuabu);
		   	 drawxuanzhuan(minuteangle,"green",90,4,ctxhuabu);
		   	 drawxuanzhuan(hourangle,"blue",60,6,ctxhuabu);
		   	 
		   	 
		   }
		   
		    
		    
		    //绘制时针、分针、秒针的旋转
		    function drawxuanzhuan(angle,color,len,width,ctxhuabu){
		   	 ctxhuabu.save();
		   	 ctxhuabu.translate(150,150);
		   	 ctxhuabu.rotate(-Math.PI/2 + angle);
		   	 ctxhuabu.lineCap = "round";
		   	 ctxhuabu.strokeStyle = color;
		   	 ctxhuabu.lineWidth = width;
		   	 ctxhuabu.beginPath();
		   	 ctxhuabu.moveTo(-4,0);
		   	 ctxhuabu.lineTo(len,0);
		   	 ctxhuabu.stroke();
		   	 ctxhuabu.restore();
		   	 
		   	 // requestAnimationFrame(drawxuanzhuan);
		    }
		   
		   // 绘制表盘
		   function drawpan(){
		   	ctxhuabu.clearRect(0,0,300,300);
		   	
		   	for(var i = 0; i < 60; i++){
		   		ctxhuabu.save();
		   		ctxhuabu.translate(150,150);
		   		ctxhuabu.rotate(-Math.PI/2 + Math.PI / 180 * 6 * i);
		   		ctxhuabu.strokeStyle = i%5? "grey":"black";
		   		ctxhuabu.lineWidth = i%5? 3:6;
		   		ctxhuabu.beginPath();
		   		ctxhuabu.moveTo(110,0);
		   		ctxhuabu.lineTo(140,0);
		   		ctxhuabu.stroke();
		   		ctxhuabu.restore();
		   	}
		   	
		   }
		   
		 
	}
	
	