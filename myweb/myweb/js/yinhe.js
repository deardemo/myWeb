	//存放星星横坐标的数组
	var hengarr = [];
	//存放星星纵坐标的数组
    var zongarr = [];
	//存放经历了多少秒的变量；
	var s;
	
window.onload = function(){
	
	var canvasone = document.getElementById("canvasone");
	var ctxone = canvasone.getContext("2d");
	
	var sun = new Image();
	var earth = new Image();
	var moon = new Image();
	var shui = new Image();
	var jin = new Image();
	var huo = new Image();
	var mu = new Image();
	var tu = new Image();
	
	
	sun.src = "./img/yinhe.jpg";
	earth.src = "https://cdn.pixabay.com/photo/2013/07/12/13/59/globe-147715__340.png";
	moon.src = "https://cdn.pixabay.com/photo/2012/04/10/17/38/moon-26619__340.png";
	shui.src = "https://cdn.pixabay.com/photo/2014/03/25/16/24/world-296965__340.png";
	jin.src = "https://cdn.pixabay.com/photo/2014/03/25/16/35/globe-297455__340.png";
	huo.src = "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2972719768,3308656237&fm=26&gp=0.jpg";
	mu.src = "https://cdn.pixabay.com/photo/2013/07/12/13/21/baseball-146883__340.png";
	tu.src = "https://cdn.pixabay.com/photo/2012/04/05/00/54/mars-25461__340.png";
	
	
	
	
	//初始化星星
	for(var i = 0; i < 100; i++){
		var hengstart = Math.random()*1600;
		var zongstart = Math.random()*800;
		hengarr.push(hengstart);
		zongarr.push(zongstart);
		ctxone.fillStyle = "navajowhite";
		ctxone.beginPath();
		ctxone.arc(hengstart,zongstart,2,0,Math.PI*2);
		ctxone.fill();
	}
	sun.onload = function(){
		draw1();
		//绘制星星
		drawstart();
	}
	
	
    var drawstart = function(){
		for(var i = 0; i < 100; i++){
		    var changearr = [0.02,0.04,0.06];
			// var changearr = [2,4,6];
			var changearrnew = [-0.02,-0.04,-0.06];
			// var changearrnew = [-2,-4,-6];
			var hengnum = Math.floor(Math.random()*3);
			var zongnum = Math.floor(Math.random()*3);
			hengarr[i] = hengarr[i]+changearr[hengnum];
			zongarr[i] = zongarr[i]+changearrnew[zongnum];
			ctxone.beginPath();
			ctxone.arc(hengarr[i],zongarr[i],1,0,Math.PI*2);
			ctxone.fill();
			if(hengarr[i]>=1600){
				hengarr[i] = 0;
				zongarr[i] = Math.floor(Math.random()*800);
			}
			if(zongarr[i]<=0){
				hengarr[i] = Math.floor(Math.random()*1600);
				zongarr[i] = 800;
			}
			
		}
		requestAnimationFrame(drawstart);
	}
	
	var draw1 = function(){
		
		//清除本来有的reac
		ctxone.clearRect(0,0,1600,800);
		ctxone.save();
		
		
		
		//绘制太阳
		ctxone.drawImage(sun,0,0,1600,850);
		ctxone.translate(820,400);
		ctxone.save();
		let time = new Date();
	    s = time.getTime();
		s = s + "";
		var news = s.slice(4,s.length-3);
		var newmilis = s.slice(s.length-3,s.length)/1000;
		console.log(news);
		// var month = time.getMonth()+1;
		// var 
		
		//绘制水球轨道
		ctxone.rotate(Math.PI/180 * 4.1 * 6 * news+Math.PI/180 * 4.1 * 6 * newmilis);
		ctxone.strokeStyle = "skyblue";
		ctxone.beginPath();
		ctxone.arc(0,0,120,0,2*Math.PI);
		ctxone.stroke();
		// ..绘制水球
		ctxone.translate(120,0);
		ctxone.drawImage(shui,-6,-6,12,12);
		
		
		ctxone.restore();
		ctxone.save();
		//绘制金球轨道
		ctxone.rotate(Math.PI/180 * 6 * 1.6 *news +　Math.PI/180 * 6 * 1.6 *newmilis);
		ctxone.strokeStyle = "orange";
		ctxone.beginPath();
		ctxone.arc(0,0,150,0,2*Math.PI);
		ctxone.stroke();
		// ..绘制金球
		ctxone.translate(150,0);
		ctxone.drawImage(jin,-6,-6,12,12);
		
		
		ctxone.restore();
		ctxone.save();
		//绘制地球轨道
		ctxone.rotate(Math.PI/180 * 6 * time.getSeconds() + Math.PI/180000 * 6 *time.getMilliseconds());
		ctxone.rotate(Math.PI/180 * 6 * s);
		ctxone.strokeStyle = "cornflowerblue";
		ctxone.beginPath();
		ctxone.arc(0,0,200,0,2*Math.PI);
		ctxone.stroke();
		//绘制地球
		ctxone.translate(200,0);
		ctxone.drawImage(earth,-10,-10,20,20);
		
		//绘制月球轨道
		ctxone.rotate(Math.PI/180 * 13.5 * 6 * news + Math.PI/180 * 13.5 * 6 * newmilis);
		ctxone.strokeStyle = "gray";
		ctxone.beginPath();
		ctxone.arc(0,0,30,0,2*Math.PI);
		ctxone.stroke();
		//绘制月球
		ctxone.translate(30,0);
		ctxone.drawImage(earth,-5,-5,10,10);
		
		ctxone.restore();
		ctxone.save();
		//绘制火球轨道
		ctxone.rotate(Math.PI/180 / 1.9 * 6 * news + Math.PI/180 / 1.9 * 6 * newmilis);
		ctxone.strokeStyle = "#af150b";
		ctxone.beginPath();
		ctxone.arc(0,0,250,0,2*Math.PI);
		ctxone.stroke();
		//绘制火球
		ctxone.translate(250,0);
		ctxone.drawImage(huo,-10,-10,20,20);
	
		ctxone.restore();
		ctxone.save();
		//绘制木球轨道
		ctxone.rotate(Math.PI/180 / 12 * 6 * news + Math.PI/180 / 12 * 6 * newmilis);
		ctxone.strokeStyle = "#f0f0e8";
		ctxone.beginPath();
		ctxone.arc(0,0,280,0,2*Math.PI);
		ctxone.stroke();
		//绘制木球
		ctxone.translate(280,0);
		ctxone.drawImage(mu,-10,-10,20,20);
		
		ctxone.restore();
		ctxone.save();
		//绘制土球轨道
		ctxone.rotate(Math.PI/180 / 29.5 * 6 * news +　Math.PI/180 / 29.5 * 6 * newmilis);
		ctxone.strokeStyle = "#bd773e";
		ctxone.beginPath();
		ctxone.arc(0,0,310,0,2*Math.PI);
		ctxone.stroke();
		//绘制土球
		ctxone.translate(310,0);
		ctxone.drawImage(tu,-10,-10,20,20);
		
		ctxone.restore();//返回到400，400，即400，400要出栈
		ctxone.restore();//返回到0，0，即0，0要出栈
		
		requestAnimationFrame(draw1);
		
	}
	
	}