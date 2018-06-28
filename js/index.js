window.onload=function(){
	
	// 导航
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

	//轮播图
	/*let lb1=document.querySelectorAll(".lb1");
	let lb2=document.querySelectorAll(".lb2");
	let lbd=document.querySelectorAll(".lb2 div");
	let lb=document.querySelector(".lb");
	let index=0;
	let t=setInterval(move,2000);
	lb1[0].style.zIndex=10;
	lbd[0].className="hot";
	function move(){
		index++;
		if(index==lb1.length){
			index=0;
		}
		lb1.forEach(function(v,index,obj){
			v.style.zIndex=5;
		})
		lbd.forEach(function(v,index,obj){
			v.className="";
		})
		
		lb1[index].style.zIndex=10;
		lbd[index].className="hot";
	}
	function movel(){
		index--;
		if(index<0){
			index=lb1.length-1;
		}
		lb1.forEach(function(v,index,obj){
			v.style.zIndex=5;
		})
		lbd.forEach(function(v,index,obj){
			v.className="";
		})
		lb1[index].style.zIndex=10;
		lbd[index].className="hot";
		
	}
	lb.onmouseenter=function(){
		clearInterval(t);
	}
	lb.onmouseleave=function(){
		t=setInterval(move,2000);
	}
	for(let i=0;i<lbd.length;i++){
		lbd[i].onclick=function(){
			lb1.forEach(function(v,index,obj){
				v.style.zIndex=5;
			})
			lbd.forEach(function(v,index,obj){
				v.className="";
			})
			lb1[i].style.zIndex=10;
			lbd[i].className="hot";
			index=i;	
		}
	}*/
	// 热门商品
	function ccc(num){
		let rmxs=document.querySelectorAll(".rmxs")[num];
	let lbt=rmxs.querySelectorAll("img");
	let rmxh=document.querySelectorAll(".rmxh")[num];
	let lbd1=rmxh.querySelectorAll("div");
	lbt[0].style.zIndex=10;
	lbd1[0].className="hot1";
	for(let i=0;i<lbd1.length;i++){
		lbd1[i].onclick=function(){
			lbt.forEach(function(v,index,obj){
				v.style.zIndex=5;
			})
			lbd1.forEach(function(v,index,obj){
				v.className="";
			})
			lbt[i].style.zIndex=10;
			lbd1[i].className="hot1";	
		}
	}
	}
	ccc(0)
	ccc(1)
	ccc(2)
	ccc(3)
	// 单选
	function dxx(num){
		let dxxs=document.querySelectorAll(".dxxs")[num];
		let lbt1=dxxs.querySelectorAll("img");
		let dxxh=document.querySelectorAll(".dxxh")[num];
		let lbd2=dxxh.querySelectorAll("div");
		lbt1[0].style.zIndex=10;
		lbd2[0].className="hot2";
		for(let i=0;i<lbd2.length;i++){
			lbd2[i].onclick=function(){
				lbt1.forEach(function(v,index,obj){
				v.style.zIndex=5;
				})
				lbd2.forEach(function(v,index,obj){
					v.className="";
				})
				lbt1[i].style.zIndex=10;
				lbd2[i].className="hot2";	
			}
		}
	}
	dxx(0);
	dxx(1);
	dxx(2);
	dxx(3);
	// 列表
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
	let i=document.querySelector(".jtzw i");
	let xl=document.querySelector(".xl");
	console.log(i)
	jtzw.onclick=function(){
		xl.classList.toggle("xl1");
		i.style.transform="rotate(90deg)";
	}
	
	// 隐藏
	

	let fh=document.querySelector(".fh");
	
	window.onscroll=function(){	
		let c=document.body.scrollTop ||document.documentElement.scrollTop;
		if(c>600){
			fh.style.display="block";
		}
		else{
			fh.style.display="none";
		}
		fh.onclick=function(){
		
			animate(document.documentElement,{scrollTop:0});
		}
	}
	let wheight=innerHeight;
	let daohan3=document.querySelector(".daohan");
	window.onscroll=function(){
		let  g1=document.body.scrollTop||document.documentElement.scrollTop ;
		if(g1+wheight>1000){
			daohan3.style.display="block";
		}
		else{
			daohan3.style.display="none";
		}
	}
	/*let rl1=daohang1.querySelectorAll(".rl1")[0];
		let rl12=document.querySelectorAll(".rl12")[0];
		rl1.onmouseenter=function(){
			rl12.style.display="block";
		}
		rl1.onmouseleave=function(){
			rl12.style.display="none";
		}*/	
}