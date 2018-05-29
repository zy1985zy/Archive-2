/**
 * 所有的信息写在函数内部 防止直接改html作弊
 * @author QQ:1018595261
 * */
(function(){
	var sl=window.location.href;
	// if(sl.indexOf('sinapps') !=  -1 || sl.indexOf('qqapps') !=  -1){
	// 	$('#tjcj').val('分享到微博');
	// 	$('#reks').hide();
	// }
	var imgs=['images/0.jpg','images/1.jpg','images/10.jpg','images/11.jpg','images/15.jpg','images/12.jpg','images/13.jpg','images/14.jpg','images/2.jpg','images/3.jpg','images/4.jpg','images/5.jpg','images/6.jpg','images/7.jpg','images/8.jpg','images/9.jpg','images/an1.png','images/an2.png','images/bg.png','images/cp1.jpg','images/cp10.jpg','images/cp11.jpg','images/cp12.jpg','images/cp2.jpg','images/cp3.jpg','images/cp4.jpg','images/cp5.jpg','images/cp6.jpg','images/cp7.jpg','images/cp8.jpg','images/cp9.jpg','images/dian.png','images/ditu.jpg','images/ds.png','images/out.png','images/top.png','images/ww.png','images/y.png','images/yun.png'];
	function loadimg(i){
		var img=new Image();
		img.src=imgs[i];
		if(document.all){
			if(img.readyState=="complete"){
				if(i+1 < imgs.length){
					loadimg(i+1);
				}
			}else{
				img.onreadystatechange=function(){
					if(img.readyState=="complete"){
						if(i+1 < imgs.length){
							loadimg(i+1);
						}
					}  
				}
			}
		}else{  
			img.onload=function(){
				if(img.complete==true){
					if(i+1 < imgs.length)
					loadimg(i+1);
				}  
			}          
		} 
	}
	loadimg(0);
	function rand(n,m,f){
		if(f){
			return  Math.random()*(m-n)+n;
		}else{
			return  Math.ceil(Math.random()*(m-n)+n);
		}
	}
	
	$('#jm .j1').click(function(){
		var _31=ckdl3() || ckdl();
		if(_31){
		$('#jm').fadeOut(100,function(){
			$('#a0').fadeIn(100);
			$('#waper').height($('#a0').height());
		});
		}
	});
	
	$('#jm .j2').click(function(){
		var _31=ckdl3() || ckdl();
		if(_31){
		$('#jm').fadeOut(100,function(){
			$('#ditu').fadeIn(100);
			$('#menu').fadeIn(100);
			$('#waper').height($('#ditu').height());
			setTimeout(function(){sj()},10000);
		});
		}
	});
	
	var _a=[
		['2013年有个家伙叫小叶子.','images/1.jpg'],
		['第一次他买比特币的时候，比特币一个才100元.','images/2.jpg'],
		['他爹：“就你这臭小子,还想娶我们家的小芳,你是高富帅吗?别癞蛤蟆想吃天鹅肉了!3天后小芳就和别人成亲!”','images/3.jpg'],
		['**下决心：“我要去北京!赚大钱!娶小芳”','images/4.jpg'],
		['向村里的恶霸彪叔借了5000元高利贷,说好四十天内还清,否则…..','images/5.jpg'],
		['…….就要迎娶彪叔家的六指智障的二丫头----凤姐…..','images/6.jpg'],
		['伟大的北京我来啦~~!','images/7.jpg']
	];
	var _i=0;
	$('#a0 .a0').click(function(){
		if(_i==6){
			$('#a0').fadeOut(100,function(){
				$('#ditu').fadeIn(100);
				$('#menu').fadeIn(100);
				$('#waper').height($('#ditu').height());
				setTimeout(function(){sj()},10000);
				
			});
			return false;
		}
		$('#a0 p img').fadeOut(100,function(){
			this.src=_a[_i][1];
			$(this).fadeIn(100);
		});
		$('#a0 .ot').fadeOut(100,function(){
			this.innerHTML=_a[_i][0];
			$(this).fadeIn(100);
		});
		_i++;
	});
	
	var _z=2000;
	var _c=[0,100];
	var _t=[0,3];
	var _lx=0.1;
	var _jz=5000;
	var _jk=100;
 	var _s=false;
	var _cp=[['IPHONE 10','cp1.jpg',3000,5000,false,false],
		['狗狗币','images/cp11.jpg',1,200,false,false],
		['IOST','images/cp9.jpg',30,2000,false,false],
		['ETH','images/cp7.jpg',15000,150000,false,false],
		['波场币','images/cp2.jpg',1,100,false,false],
		['LTC','images/cp4.jpg',1,100,false,false],
		['EOS','images/cp5.jpg',1,100,false,false],
		['BCH','images/cp3.jpg',50,2000,false,false],
		['LBTC','images/cp6.jpg',50,2000,false,false],
		['Bitcoin','images/cp12.jpg',50000,300000,false,false],
		['星云币','images/cp10.jpg',50,2000,false,false],
		['iphone X','images/cp10.jpg',3000,20000,false,false],
		['Neo小蚁','images/cp8.jpg',500,5000,false,false]];
	var _cp1={'产品编号':'随机价格'};
	function cp1(){
		_cp1={};
		var l=_cp.length - 1;
		var f=rand(3,6);
		for(var i=0;i<f;i++){
			var a=rand(0,l);
			if(typeof(_cp1[a])=='undefined'){
				if(_cp[a][4]){
					_cp1[a]=rand(_cp[a][4],_cp[a][3]);_cp[a][4]=false;
				}else if(_cp[a][5]){
					_cp1[a]=rand(_cp[a][2],_cp[a][5]);_cp[a][5]=false;
				}else{
					_cp1[a]=rand(_cp[a][2],_cp[a][3]);
				}
			}else{
				i--;
			}
		}
	}
	
	var _cp2={};
	
	function cp2add(i,j,c){
		var m=Math.min(parseInt(_z/j),(_c[1]-_c[0]));
		var y=c=m<c?m:c;
        var jo=j;
		if(c<1){return 0;}
		if(_cp2[i]){
			var z=_cp2[i];
			j=Math.ceil((z[0]*z[1]+j*c)/(c+z[1]));
			c=c+z[1];
		}
		_cp2[i]=[j,c];
		zcwu(y,-y*jo);
		return y;
	}
	
	function cp2remove(i,c){
		var cw=_cp2[i];
		var j=_cp1[i];
		c=c>cw[1]?cw[1]:c;
		zcwu(-c,c*j);
		if(cw[1]-c > 0){
			_cp2[i]=[cw[0],cw[1]-c];
		}else{
			delete _cp2[i];
		}
		return c;
	}
	
	function ccwu(){
		$('.a2 .a22').html('');
		for(i  in _cp2){
			var dl=document.createElement('dl');
			dl.i=i;
			dl.innerHTML='<dd class="pic"><img src="'+_cp[i][1]+'"></dd><dd class="nr">'+_cp[i][0]+'</dd><dd class="jge">'+_cp2[i][0]+'￥</dd><dd class="jshu">'+_cp2[i][1]+'</dd>';
			dl.onclick=function(){
				maichu(this);
				se2.style.left='';
				se1.style.width='';
			}
			$(dl).appendTo('.a2 .a22');
		}
	}
	
	function zcwu(c,zj,jk,t){
		_z=_z+zj;
		if(_z < 0){
			jk=Math.abs(_z)+jk;
			_z=0;
		}
		_c[0]=_c[0]+c;
		$('#zican').html(_z);
		$('#ccwo').html(_c[0]+'/'+_c[1]);
		if(jk){
			_jk=_jk+jk;
			_jk=Math.min(_jk,100);
			$('#jkang').html(_jk);
		}
		if(t){
			_t[0]=_t[0]+t;
			$('#tianshu').html(_t[0]+'/'+_t[1]);
		}
	}
	
	function html(){
		$('.a1 .a11').html('');
		for(i  in _cp1){
			var dl=document.createElement('dl');
			dl.i=i;
			dl.innerHTML='<dd class="pic"><img src="'+_cp[i][1]+'"></dd><dd class="nr">'+_cp[i][0]+'</dd><dd class="jge">'+_cp1[i]+'￥</dd>';
			dl.onclick=function(){
				maijin(this);
				se2.style.left='';
				se1.style.width='';
			}
			$(dl).appendTo('.a1 .a11');
		}
		ccwu();
	}
	
	function cpk(){
		cp1();
		html();
		$('#ditu').fadeOut(100,function(){
			$('#a1').fadeIn(100);
			$('#waper').height($('#a1').height());
		});
	}
	
	$('#ditu a').click(function(){
		var s=this.className.replace(/[^\d]/g,'');
		if(s < 11){
			if(_t[0] < 3){
				zcwu(0,0,-1.5,1);
			}
			if(_t[0] >= 3){
				jguo();
			}else if(_jk < 10){
				notice('你晕倒在街头被人送进医院了，住院'+(_t[1]-_t[0])+'天。');
				zcwu(0,0,0,_t[1]-_t[0]);
			}else{
				_jz=_lx*_jz+_jz;
                _s=false;
				$('#qianz').html(parseInt(_jz));
				$('#tianshu').html(_t[0]+'/'+_t[1]);
				cpk();
			}
		}else{
			fuw(s);
		}
	});
	
	function fuw(s){
		switch(parseInt(s)){
			case 11:
				$('#fw .fw').css({'background':'url(./images/15.jpg) no-repeat','padding-top':'340px'});
				$('#fwnr').html('');
				$('#fw .fw2 .an3').val('还债');
				$('#fw .fw2 .an4').val('算了');
			break;
			case 12:
				$('#fw .fw').css({'background':'url(./images/9.jpg) no-repeat','padding-top':'380px'});
				$('#fwnr').html('你面庞发黑，两眼发直，看来病的不轻啊！做个全身检查吧');
				$('#fw .fw2 .an3').val('开点药吧');
				$('#fw .fw2 .an4').val('真黑');
			break;
			case 13:
				$('#fw .fw').css({'background':'url(./images/10.jpg) no-repeat','padding-top':'380px'});
				$('#fwnr').html('房价在噌噌往上涨，这套最便宜了，一次性支付￥'+(50000+_t[0]*1000)+'元，要租房吗？');
				$('#fw .fw2 .an3').val('换套大的');
				$('#fw .fw2 .an4').val('算了');
			break;
			case 14:
				$('#fw .fw').css({'background':'url(./images/8.jpg) no-repeat','padding-top':'380px'});
				$('#fwnr').html('先生需要什么服务吗？我们这里有全身保健、魅力宝贝按摩、特殊服务。你需要吗？');
				$('#fw .fw2 .an3').val('好啊');
				$('#fw .fw2 .an4').val('算了');
			break;
		}
		$('#ditu').fadeOut(100,function(){
			$('#fw').fadeIn(100);
			$('#waper').height($('#fw').height());
		});
	}
	
	$('#gfw').click(function(){
		$('#fw').fadeOut(100,function(){
			$('#ditu').fadeIn(100);
			$('#waper').height($('#ditu').height());
		});
	});
	var _1=true;
	$('#gfg').click(function(){
		switch(this.value){
			case '还债':
				if(_jz > _z){
					notice('你的资产不够还债');	
				}else{
					notice('你还债'+_jz+'元');	
					_jz=0;
					zcwu(0,-_jz);
				}
			break;
			case '开点药吧':
				var s=100-_jk;
				var g=parseInt(_z/500);
				var s=s > g?g:s;
				if(s==0){
					notice('你很健康');
				}else{
					notice('花了'+(s*500)+'元，增加'+s+'个健康指数');
					zcwu(0,-s*500,s);
				}
			break;
			case '换套大的':
				if(_z > (50000+_t[0]*1000)){
					_c[1]=_c[1]+50;
					notice('你的出租屋已经增加到'+_c[1]);
					zcwu(0,-(50000+_t[0]*1000));
				}else{
					notice('你的资产不够.');
				}
			break;
			case '好啊':
				if(_z > 1000){
					var s=rand(0,2);	
				}else if(_z > 700){
					var s=rand(0,1);	
				}else if(_z > 300){
					var s=0;	
				}else{
					notice('没钱别来捣乱。');
					var s=false;
				}
				if(s!==false){
					var ts=['你做了个全身保健花了300','你做了个魅力宝贝按摩花了500','你享受了特殊的服务花了1000'];
					var qs=[300,500,1000];
					notice(ts[s]);
					zcwu(0,-qs[s],qs[s]/100);
				}
			break;
		}
		if(_1){
			setTimeout(function(){
			$('#fw').fadeOut(100,function(){
				$('#ditu').fadeIn(100);
				$('#waper').height($('#ditu').height());
			});
			_1=true;
			},2000);
		}
		_1=false;
	});
	
	$('#out').click(function(){
		$('#a1').fadeOut(100,function(){
			$('#ditu').fadeIn(100);
			$(this).fadeOut(100);
			$('#waper').height($('#ditu').height());
		});
	});
	
	function jguo(){
		if(_z < _jz){
			$('#ditu').fadeOut(100,function(){
				$('#jg img').attr('src','images/11.jpg');
				$('#jg').fadeIn(100);
				$('#waper').height($('#jg').height());
				ui.error('我还不起欠款，被迫与凤姐洞房。小芳成了恶霸彪哥的老婆，成为了我的丈母娘！',5000);
			});
		}else if(_z < _jz+500000){
			$('#ditu').fadeOut(100,function(){
				$('#jg img').attr('src','images/12.jpg');
				$('#jg').fadeIn(100);
				$('#waper').height($('#jg').height());
				ui.error('我回乡后带着礼金去提亲。可这点钱小芳她爹根本不屑一顾，把我轰出了门！',5000);
			});
		}else if(_z < _jz+1000000){
			$('#ditu').fadeOut(100,function(){
				$('#jg img').attr('src','images/13.jpg');
				$('#jg').fadeIn(100);
				$('#waper').height($('#jg').height());
				ui.success('我终于赚到钱了，取到了小芳，过上了农夫、山泉、还有点田的幸福生活！',5000);
			});
		}else{
			$('#ditu').fadeOut(100,function(){
				$('#jg img').attr('src','images/14.jpg');
				$('#jg').fadeIn(100);
				$('#waper').height($('#jg').height());
				ui.success('我是人生的最大赢家，钱对于我来说，那就是浮云！！！',5000);
			});
		}
		setTimeout(function(){
			$('#jg1').fadeIn(200);
			if(_z < 500000){
				$('#tsyuyan').html('很遗憾!<br>您经过40天努力赚的资产：');
			}else{
				$('#tsyuyan').html('恭喜!!<br>您经过40天努力赚的资产：');
			}
			$('#jg1 h1').html(_z+'￥');
		},3000);
	}
	
	
	var ses=document.getElementById('ses');
	
	function maijin(t){
		var dj=_cp1[t.i];
		var cs=_c[1]-_c[0];
		var z=Math.min(cs,parseInt(_z/dj));
		if(z==0){
			if(cs==0){
				notice('你的屋子已经放满了。');
			}else{
				notice('你的资产不足，买不起别捣乱。');
			}
			return false;
		}
		$('#se .se1 strong').html(_cp[t.i][0]);
		$('#se .se1 img').attr('src',_cp[t.i][1]);
		ses.innerHTML='购买'+z+'件';
		ses.z=z;
		_tm=[t.i,z,1];
		$('#se').fadeIn(200);
	}
	
	function maichu(t){
		if(typeof(_cp1[t.i])=='undefined'){
			notice('这里没有'+_cp[t.i][0]+'的买卖。');
			return 0;
		}
		var dj=_cp2[t.i][0];
		var z=_cp2[t.i][1];
		ses.z=z;
		$('#se .se1 strong').html(_cp[t.i][0]);
		$('#se .se1 img').attr('src',_cp[t.i][1]);
		ses.innerHTML='卖出'+z+'件';
		_tm=[t.i,z,0];
		$('#se').fadeIn(200);
	}
	
		
	var se1=document.getElementById('se21');
	var se2=document.getElementById('se22');
	var _tm=['产品编号','件数'];
	se2.onmousedown=function(e){
		var e=e||event;
		var self=this;
		self.x=e.clientX-self.offsetLeft;
		try{e.preventDefault();}catch(o){e.returnValue = false;}
		document.onmousemove=function(e){
			var e=e||event;
			var x=e.clientX-self.x;
			x=x>282?282:x;
			x=x<0?0:x;
			se2.style.left=x+'px';
			se1.style.width=x+3+'px';
			var j=Math.ceil(x/282*ses.z);
			_tm[1]=j;
			if(_tm[2]){
			ses.innerHTML='购买'+j+'件';
			}else{
			ses.innerHTML='卖出'+j+'件';
			}
		};
		document.onmouseup=function(){
			document.onmousemove='';
		};
	};
	$('#jzhang,#zren').click(function(){
		var self=this;
		$('#se').fadeOut(200,function(){
			if(self.className=='an1'){
				if(_tm[2]){
					cp2add(_tm[0],_cp1[_tm[0]],_tm[1]);
				}else{
					cp2remove(_tm[0],_tm[1]);	
				}
				ccwu();
			}
		});
	});
	function notice(s,t){
		ui.notice(s,t,false);
	}
	function dians(t){
		$('#z0 .znr').html(t);
                $('#z0').fadeIn(200);
	}
	$('#z0 .close').click(function(){
		$('#z0').fadeOut(200);
	});
	function sj(){
		if($('#a1').is(":hidden")){
			setTimeout(sj,5000);
			return false;	
		}
		 if(_s==true){
			setTimeout(sj,5000);
			return false;
		}
		var i=rand(0,80);
          	if(i < 24){
          		_s=true;
          	}
		switch(i){
			case 0:
				var j=parseInt(rand(0.1,0.6,true)*_z);
				notice('路上遇到打劫的损失'+j+'元。',3000);
				zcwu(0,-j);
			break;
			case 1:
				notice('被拽入粉灯区被骗500元',3000);
				zcwu(0,-500);
			break;
			case 2:
				notice('吃了地沟油油条腹泻,损失健康20',3000);
				zcwu(0,0,-20);
			break;
			case 3:
				notice('吃了M汉堡，健康减10',3000);
				zcwu(0,0,-10);
			break;
			case 4:
				notice('吃了个面筋肚子疼，健康减10',3000);
				zcwu(0,0,-10);
			break;
			case 5:
				var d=rand(30,70);
				notice('小芳从村里偷跑出来看你,给你大蒜'+d+'头',3000);
				var td=0;
				if(_c[1]-_c[0] < d){
					var td=_c[1]-_c[0];
					setTimeout(function(){
						notice('你的出租屋空间不够,只放进'+td+'头',3000);
					},2000);
				}
				if(td > 0){
					cp2add(5,0,td);
				}else{
					cp2add(5,0,d);
				}
				ccwu();
			break;
			case 6:
				notice('狗屎运买彩票中了1000元',3000);
				zcwu(0,1000);
			break;
			case 7:
				notice('找小姐被抓，拘留3天，罚款1000元',3000);
				zcwu(0,-1000,0,3);
			break;
			case 8:
				notice('小芳来北京看你住了一夜,你懂得',3000);
			break;
			case 9:
				notice('遇到城管货品减少1/3',3000);
				var s={};
                var g=0;
				for(var i in _cp2){
                    var si=Math.ceil(_cp2[i][1]/3*2);
					s[i]=[_cp2[i][0],si];
                    g+=(_cp2[i][1]-si);
				}
                zcwu(-g,0);
                _cp2=s;
				ccwu();
			break;
			case 10:
				dians('美元上涨黄金下跌');
				jgzf(3,5);
			break;
			case 11:
				dians('网上可以看电影了，盗版DVD卖不出去');
				jgzf(6,5);
			break;
			case 12:
				dians('最近流行理财，黄金上涨。');
				jgzf(3,4);
			break;
			case 13:
				dians('粗制滥造的影片占据影院，众观众渴望看到进口大片，盗版 DVD火爆。');
				jgzf(6,4);
			break;
			case 14:
				dians('夏季服装热卖！');
				jgzf(2,4);
			break;
			case 15:
				dians('IPHONE 10市场追捧。');
				jgzf(0,4);
			break;
			case 16:
				dians('走私汽车大肆倾销。');
				jgzf(9,4);
			break;
			case 17:
				dians('国家查处走私问题。');
				jgzf(9,5);jgzf(10,5);
			break;
			case 18:
				dians('听说蒜能防癌。');
				jgzf(5,4);
			break;
			case 19:
				dians('农副市场加以监控大蒜价格下跌。');
				jgzf(5,5);
			break;
			case 20:
				dians('化妆品出现质量问题，很多人因此进入医院。');
				jgzf(8,5);
			break;
			case 21:
				dians('娱乐圈再次传出绯闻。');
				jgzf(4,4);
			break;
			case 22:
				dians('杂志过期。');
				jgzf(4,5);
			break;
			case 23:
				dians('出口服装专内销价格便宜。');
				jgzf(2,5);
			break;
		}
		setTimeout(sj,12000);
	}
	function jgzf(i,j){
		if(_cp1[i]){
			_cp[i][j]=_cp1[i];
		}else if(_cp2[i]){
			_cp[i][j]=_cp2[i][0];
		}else{
			_cp[i][j]=parseInt(_cp[i][2]+(_cp[i][3]-_cp[i][2])*0.4);
		}
	}
	$('#tjcj').click(function(){
/*		A.aj(ROOT+'apps/app.php','type=bjfs&zc='+_z+'&jksr='+_jk+'&jz='+_jz,function(da){
			if(da.ztai){
				window.location.href='top.php';	
			}else{
				ui.alert('保存失败。',5000);
			}
		},'json');*/
//////////////////////////////////////////////////
    var dappContactAddress = "n1obsZgkXmPiYZBVbzdMWCtCPcQAUkVbZpF";
    var nebulas = require("nebulas"), Account = Account, neb = new nebulas.Neb();
//    neb.setRequest(new nebulas.HttpRequest("https://mainnet.nebulas.io"))
    neb.setRequest(new nebulas.HttpRequest("https://testnet.nebulas.io"))

    var NebPay = require("nebpay");     //https://github.com/nebulasio/nebPay
    var nebPay = new NebPay();
    var serialNumber;
        var to = dappContactAddress;
        var value = "0";
        var callFunction = "save";
        var callArgs = "[\"" + _z + "\",\"" + _jk + "\"]";
        console.log(callArgs);
		
        serialNumber = nebPay.call(to, value, callFunction, callArgs, {    //使用nebpay的call接口去调用合约,
            listener: function (resp) {
                console.log("thecallback is " + resp)
            }
        });		
/*	var NebPay = require("nebpay"); //https://github.com/nebulasio/nebPay
    var nebpay = new NebPay();

    //var dappAddress = "n1nk8EEJcCE2J1fk2wdFCLMkhH8cttrxGJE";
    var txHash = "8f1ad354e2a5dd992ffaa3aa1b35fad074379760ca2e00d906e8b732809c03a3";*/
//////////////////////////////////////////////////
	});
	$('#phb').click(function(){
        var to = dappAddress;
        var value = "0";
        var callFunction = "getAll";
        var callArgs = "[]";
        nebpay.simulateCall(to, value, callFunction, callArgs, {
            listener: function(resp) {
                //console.log(JSON.stringify(resp.result));
				if(resp.result == ""){
					$("#searchresult").html('<div class="panel-body" >暂时没有记录</div>');
					return;
				}
                var myArr = JSON.parse(resp.result);
				if(myArr.length == 0){
					$("#searchresult").html('<div class="panel-body">暂时没有记录</div>');
					return;
				}

                var tempStr = "";

                for (var i = 0; i < myArr.length; i++) {
                    if (i % 2 == 0) {
                        tempStr += '<div class="panel-body"> ';
                    } else {
                        tempStr += '<div class="panel-footer">';
                    }

                    //					
                    tempStr += '<p>';
                    tempStr += myArr[i].title;
                    tempStr += '</p>';
                    tempStr += '<p>';
                    tempStr += myArr[i].content;
                    tempStr += '</p>';
                    tempStr += '<p>';
                    tempStr += '<small><cite>' + '作者：' + myArr[i].author + '</cite></small>';
                    tempStr += '<br>';
                    tempStr += '<a class="btn" href="javascript:void(0)" id="like" onclick="addLike(';
                    tempStr += myArr[i].index;
                    tempStr += ')">收藏</a>';

                    tempStr += '</p> </div> ';
                }
                console.log(tempStr);
                $("#searchresult").html(tempStr);
            }
          });
        });									  
	$('#reks').click(function(){
		_z=2000;
		_c=[0,100];
		_t=[0,3];T
		_jz=5000;
		_jk=100;
		zcwu(0,0);
		_cp1={'产品编号':'随机价格'};
		_cp2={};
		$('#zican').html(_z);
		$('#ccwo').html('0/100');
		$('#jkang').html(_jk);
		$('#tianshu').html('0/3');
		$('#qianz').html(_jz);
		
		$('#jg').fadeOut(100,function(){
			$('#ditu').fadeIn(100);
			$('#jg1').css('display','none');
			$('#waper').height($('#ditu').height());
		});
	});
})();