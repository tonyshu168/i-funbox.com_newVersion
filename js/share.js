+function(){
	//sina微博分享
	var weiboBtn = $("a.icon._weibo.weiboHover");
	window.shareTitle = "iFunbox于2008年8月推出，是最好的iPhone及其他苹果产品的通用文件管理软件之一。以类似windows资源管理器的窗口方式在PC上浏览和管理iPhone、iPad、iPod Touch上的文件和目录，使苹果各类设备得以共享彼此的资源，让您轻松上传或导出电影、音乐、电子书、桌面、照片、以及应用程序。还能把您的iPhone变为一个U盘，方便携带文件。以上这些功能无需越狱便可轻松实现。",
	window.shareUrl = "http://i-funbox.com/img/shareWeibo.png";
	//window.shareUrl = "http://localhost:8081/i-funbox.com_newVersion/img/shareWeibo.png";
	
	weiboBtn.on("click", share);
	function share(){
		//d指的是window
		(function(s,d,e){
			try{}catch(e){}
			var f='http://v.t.sina.com.cn/share/share.php?',u=d.location.href,p=['url=',e(u),'&title=',e(window.shareTitle),'&appkey=2924220432','&pic=',e(window.shareUrl)].join('');function a(){if(!window.open([f,p].join(''),'mb',['toolbar=0,status=0,resizable=1,width=620,height=450,left=',(s.width-620)/2,',top=',(s.height-450)/2].join('')))u.href=[f,p].join('');};if(/Firefox/.test(navigator.userAgent)){setTimeout(a,0)}else{a()}})(screen,document,encodeURIComponent);
	}

	//facebook分享
	var facebookBtn = $("a.icon._facebook.facebookHover");
	facebookBtn.on("click",function(){
		FB.ui({
	    	/*
		    method: 'share',
		    display: 'popup',
		    href: 'http://i-funbox.com/en_about.html',   
		    */
		    method: 'feed',
		    display: 'popup',
		    href: 'http://i-funbox.com/en_about.html',
		    link: 'http://i-funbox.com/en_about.html',
		    caption: 'iFunbox',
		    description: "Launched in August 2008, iFunbox is one of the best file manager for iPhone, iPad and iPod Touch. With iFunbox you can manage files on your device just like Windows File Explorer on your PC, take advantage of the device's storage and use it as a portable USB disk, and import/export music, video, photo files with no effort. The best part about using iFunbox is it requires no jailbreak at all. ",
		    picture: "http://i-funbox.com/img/share_openGraph.png"
		}, function(response){});
	})

	//初始化facebook sdk.js
	window.fbAsyncInit = function() {
		FB.init({
			appId      : '1081342002011898',
			xfbml      : true,
			version    : 'v2.8'
		});
		FB.AppEvents.logPageView();
	};

	(function(d, s, id){
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) {return;}
		js = d.createElement(s); js.id = id;
    	js.src = "//connect.facebook.net/en_US/sdk.js";
    	fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    //分享到twitter
    var twitterBtn = $("a.icon._twitter.twitterHover"),
    	text = "the File and App Management Tool for iPhone, iPad & iPod Touch. It's available on Windows and Mac OSX, ... and It's Free !",
    	url = "https://twitter.com/intent/tweet?button_hashtag=iFunbox"
    twitterBtn.attr("href", url + "&text=" + encodeURIComponent(text));
    twitterBtn.attr("data-url", "http://i-funbox.com");

    !function(d, s, id){
    	var js, fjs = d.getElementsByTagName(s)[0],
    	p = /^http:/.test(d.location) ? "http" : "https";
    	if(!d.getElementById(id)){
    		js = d.createElement(s);
    		js.id = id;
    		js.src = p + "://platform.twitter.com/widgets.js";
    		fjs.parentNode.insertBefore(js, fjs);
    	}
    }(document, "script", "twitter-wjs");
}()