window.onload=function(){
	let wheight=innerHeight;
	let daohan=document.querySelector(".daohan");
	window.onscroll=function(){
		let  g1=document.body.scrollTop||document.documentElement.scrollTop ;
		if(g1+wheight>1000){
			daohan.style.display="block";
		}
		else{
			daohan.style.display="none";
		}
	}
	function dh(num){
		let daohang1=document.querySelectorAll(".daohang1")[num];
		let a=daohang1.querySelectorAll("a")[1];
		let rs=document.querySelectorAll(".rs")[num];
		a.onmouseenter=function(){
			// animate(rs,{display:"block"})
			rs.style.display="block";
		}
		a.onmouseleave=function(){
			// animate(rs,{display:"none"})
			rs.style.display="none";
		}
		let a1=daohang1.querySelectorAll("a")[2];
		let rl=document.querySelectorAll(".rl")[num];
		a1.onmouseenter=function(){
			rl.style.display="block";
		}
		a1.onmouseleave=function(){
			rl.style.display="none";
		}
		let a2=daohang1.querySelectorAll("a")[3];
		let jl=document.querySelectorAll(".jl")[num];
		a2.onmouseenter=function(){
			jl.style.display="block";
		}
		a2.onmouseleave=function(){
			jl.style.display="none";
		}
	}
	dh(1);
	dh(0);
	let lbyzz=document.querySelector(".lbyzz");
	let ul1=document.querySelectorAll(".lbyzz ul")[5];
	let liw=ul1.querySelectorAll("li")[2];
	let ewm=document.querySelector(".ewm");
	console.log(lbyzz,ul1,liw,ewm)
	liw.onmouseenter=function(){
		ewm.style.display="block";
	}
	liw.onmouseleave=function(){
		ewm.style.display="none";
	}
	let jtzw=document.querySelector(".jtzw");
	let xl=document.querySelector(".xl");
	jtzw.onclick=function(){
		xl.style.display="block";
	}
	jtzw.onmouseleave=function(){
		xl.style.display="none";
	}
	let dth=document.querySelectorAll(".dth");
	let bth=document.querySelector(".bth");
	let dianji=document.querySelectorAll(".bth div");
	console.log(dth,dianji)
	dth[0].style.zIndex=10;
	dianji[0].className="hh";

	for(let i=0;i<dianji.length;i++){
		dianji[i].onclick=function(){
			dth.forEach(function(v,index,obj){
				v.style.zIndex=5;
			})
			dianji.forEach(function(v,index,obj){
				v.className="";
			})
			dth[i].style.zIndex=10;
			dianji[i].className="hh";
			index=i;	
		}
	}
}

