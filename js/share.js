+function(){
	var weiboBtn = $("a.icon._weibo");
	console.log(weiboBtn);
	window.shareTitle = "iFunbox于2008年8月推出，是最好的iPhone及其他苹果产品的通用文件管理软件之一。以类似windows资源管理器的窗口方式在PC上浏览和管理iPhone、iPad、iPod Touch上的文件和目录，使苹果各类设备得以共享彼此的资源，让您轻松上传或导出电影、音乐、电子书、桌面、照片、以及应用程序。还能把您的iPhone变为一个U盘，方便携带文件。以上这些功能无需越狱便可轻松实现。",
	//window.shareUrl = "http://i-funbox.com/img/shareWeibo.png";
	window.shareUrl = "http://localhost:8081/i-funbox.com_newVersion/img/shareWeibo.png";
	
	weiboBtn.on("click", share);
	function share(){
		//d指的是window
		(function(s,d,e){
			try{}catch(e){}
			var f='http://v.t.sina.com.cn/share/share.php?',u=d.location.href,p=['url=',e(u),'&title=',e(window.shareTitle),'&appkey=2924220432','&pic=',e(window.shareUrl)].join('');function a(){if(!window.open([f,p].join(''),'mb',['toolbar=0,status=0,resizable=1,width=620,height=450,left=',(s.width-620)/2,',top=',(s.height-450)/2].join('')))u.href=[f,p].join('');};if(/Firefox/.test(navigator.userAgent)){setTimeout(a,0)}else{a()}})(screen,document,encodeURIComponent);
	}
}()