var e=0;
var p=0;
var s=30;
document.addEventListener("keydown",ffff)
function ffff(event) {
 if(event.which == 39){
		b1.style.transform='rotate('+Math.floor(Math.random()*360+10)+'deg)';
 e+=10;
 b1.style.left=e+"px";
 }else if(event.which == 37){
		b1.style.transform='rotate('+Math.floor(Math.random()*360+10)+'deg)';
 e-=10;
 b1.style.left=e+"px";
 console.log(e)
 }else if (event.which == 40){
    b1.style.transform='rotate('+Math.floor(Math.random()*360+10)+'deg)';
 p+=10;
 b1.style.top=p+"px"
 }else if (event.which == 38){
    b1.style.transform='rotate('+Math.floor(Math.random()*360+10)+'deg)';
 p-=10;
 b1.style.top=p+"px"
 }
 var divs=document.getElementsByClassName("ds1");
 if(p<0 || p>370 
 	|| e>110 && e<180 && p>-10 && p<150 
 	|| e>160 && e<230 && p>170
 	|| e>280 && e<370 && p<260
 	|| e>450 && e<520 && p<160 
 	|| e>400 && e<470 && p>220
 	|| e>530 && e<600 && p>170 && p<370
 	|| e>580 && e<660 && p>90 && p<280
 	|| e>710 && e<780 && p<160 
 	|| e>710 && e<780 && p>200){
 	clearInterval(sit);	
	dd.innerHTML="<div id='wl' style='color:red;font-size:50px;'>ВЫ ПРОИГРАЛИ !!!</div>";
	b1.style.background="url(gndak2.png)";
	b1.style.backgroundSize="cover";
	document.removeEventListener("keydown", ffff);
	game.style.display='inline';
    }else if(e>800){
	dur1.style.transform="rotate(-90deg)";
	dur1.style.left="965px";
	dur1.style.top="-63px";
	dur2.style.transform="rotate(90deg)";
	dur2.style.left="965px";
	dur2.style.top="282px";
    }
	if(e>1070){
		b1.style.display='none';
		dd.innerHTML="<div id='wl' style='color:#1E90FF;font-size:50px;'><strong>Вы Победили !<br>"+s+" секунд в запасе.</strong></div>";
        clearInterval(sit);	
        game.style.display='inline';	
	}
	console.log(e);
	console.log(p);
    }
    var i=0;
    function in1(){
	i++;
	if(i==1){
		finish.style.background='orange';
		finish.style.color='green';
	}else if(i==2){
		finish.style.background='green';
		finish.style.color='orange';
		i=0;
	}
	console.log(i)
    }
    setInterval(in1,1000);
	var tim=document.getElementById("timer");
    function time(){
	if (s==0){
	 dd.innerHTML="<div id='wl' style='color:red;font-size:50px;'>ВЫ ПРОИГРАЛИ !!!<br>ВРЕМЯ ВЫШЛО</div>"; 
	 b1.style.background="url(gndak2.png)";
	 b1.style.backgroundSize="cover";
	 game.style.display='inline';
	clearInterval(sit);
	}
	s--;
	timer.innerHTML=s;
	}
	var sit=setInterval(time,1000);

    function re(){
	location.reload();
    }




































