//需先引入jqeury libs
+function(){
	var support = document.getElementsByClassName("_support")[0],    //点赞的图标
		praise = document.getElementsByClassName("praise")[0],       //整个点赞 p 标记
		praiseCount = document.querySelector(".praise span"),        //点赞数量
		addOne = document.getElementsByClassName("addOne")[0],       //点赞 "+1"
		praisedText = /en_about.html/g.test(location.href)?"You praised, thanks!!!" : "已点过，谢谢！！！";    //对应中英文

	$.get("data/ifb_db.php", function(data){
		data == 0 ?praise.style.visibility = "hidden" : praiseCount.innerHTML = data;
	})

	support.addEventListener("click", function(){
		var clickTime = localStorage.ifb_web_clickTime || null,          //点赞时间
			now = new Date().getTime();
		if(!clickTime || clickTime + 1000*60*60*24 < now ){      //首次点赞与在一天过后点赞方可有用
			addOne.className.indexOf("addOneAnim") >= 0 && (addOne.className = "addOne");    //addOne包含 "addOneAnim" 动画class, 则移除 "addOneAnim"

			$.get("data/ifb_db.php?mark=write",function(data){
				//console.log(data);
				addOne.className = "addOneAnim";    //点赞成功后的动画
				praiseCount.innerHTML = data.counter;            //获取点赞数据
				localStorage.ifb_web_clickTime = now;            //保存用户点赞的时间
			})
		}
		else{
			praised();
		}
	})

	function praised(){   //已点赞过，出现 "已点赞，谢谢！！！"，后再出现总点赞数量
		var tempPraise = praise.innerHTML;
		praise.innerHTML = praisedText;
		praise.style.color = "#262626";
		var timer = setTimeout(function(){
			praise.className = "praise invert";
			sessionStorage.ifb_rotated = 1;  //旋转动画结束
		},800)

		var timer01 = setInterval(function(){
			var rotated = sessionStorage.ifb_rotated || {};
			if(rotated == 1){
				clearTimeout(timer);
				praise.className = "praise";
				praise.innerHTML = tempPraise;
				praise.style.color = "#1ba8e8";
				clearInterval(timer01);
			}
		},2000)
	}
}()