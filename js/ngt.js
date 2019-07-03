function validate() {
	if(document.getElementById("pwd").value==document.getElementById("pwd1").value) {
		document.getElementById("tishi").innerHTML="<font color='green'>两次密码相同</font>";
		document.getElementById("submit").disabled=false;
	}
	else {
		document.getElementById("tishi").innerHTML="<font color='red'>两次密码不相同</font>";
		document.getElementById("submit").disabled=true;
	}
}
function lalala(){
	if(document.getElementById("pwd").value==document.getElementById("us").value) {
		document.getElementById("tishi1").innerHTML="<font color='red'>不能与用户名相同</font>";
		document.getElementById("submit").disabled=true;
	}else {
		document.getElementById("tishi1").innerHTML="<font></font>";
		document.getElementById("submit").disabled=false;
	}
}

//弹出框、遮罩层
function Dialog(id){//定义对话框类型对象。类型
	this.id=id;
	this.close_handler=null;
	var that=this;
	document.getElementById(id).children[0].onclick=function(){
		that.close();
		if(typeof that.close_handler=='function'){
			that.close_handler();
		}
	}
}
Dialog.prototype.show=function(){//显示Dialog对话框
    var dlg=document.getElementById(this.id);
    dlg.style.display='block';
    dlg=null;
}
Dialog.prototype.close=function(){//关闭Dialog对话框
    var dlg=document.getElementById(this.id);//根据id获取对话框的DOM引用
    dlg.style.display='none'; 
	dlg=null;
}
function openDialog(){//定义打开对话框方法
	document.getElementById('pageCover').style.display='block';	
	var dlg=new Dialog('dlgTest');
	dlg.show();
	dlg.close_handler=function(){
		document.getElementById('pageCover').style.display='none';
	}
}

//图片
var img = new Array(3); 
 var start = null;
 var counter = 1;

 //获取页面元素
var next = document.getElementById("nImg");
if(document.images) 
 {
for(i = 1; i <= 3; i++)
   {
     img[i] = new Image();
     img[i].src ="images/"+ i + ".jpg";
   }
 }
function anim()
 {
   counter++;
   next.src = img[counter].src;
   if(counter == 3)
    counter = 0;
 }
function slide()
 {
 	
     start = setInterval("anim()", 2000);
   
 }
 
 //图片左右
var m = 1;
		function nextImg(){
		m++;
		//获取页面元素
		var next = document.getElementById("Img");
		//更改元素的src属性
		next.src = "images/mo"+m+".jpg";
		if(m==3){
		m=0;
		} 
		}