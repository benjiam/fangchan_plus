var orderConfig = {
    "jd.com": {
        "name": "JD",
        "listUrl": "http://order.jd.com/center/list.action",
        "urlPattern": "^(http://cart\\.jd\\.com/.*|http://cart\\.360buy\\.com/.*|http://order\\.jd\\.com/.*)",
        "notLoginReg": "<input .*id=\"loginType\".*",
        "tradeStartStatus": "等待自提|等待收货|正在出库",
        "tradeEndStatus": "已完成|已取消",
        "parseListTaskNum": 0,
        "listPageFilterReg": "<table.*</table>",
        "listPageProductRowSel": "tr",
        "listPageProductNameSel": "td:nth-child(2) > div > a:nth-child(1) > img:nth-child(1)",
        "listPageOrderIdSel": "td:nth-child(1) > a",
        "listPageOrderStatusSel": "td:nth-child(6)",
        "listPageDetailLinkSel": "a[name='orderIdLinks']",

        "detailPageFilterReg": "",
        "trackUrlSel": "http://order.jd.com/lazy/getOrderShowJson.action",
        "osTimeSel": "",
        "osContentSel": "",
		"finishReg":"完成配送"
    },

    "taobao.com": {
        "name": "TAOBAO",
        "listUrl": "http://trade.taobao.com/trade/itemlist/list_bought_items.htm",
        "urlPattern": "^(http://buy\\.tmall.com/.*|http://buy\\.taobao.com/.*|http://trade\\.taobao.com/.*)",
        "notLoginReg": "登录名.*登录密码.*忘记登录密码|login.taobao.com/member/login.jhtml",
        "tradeStartStatus": "买家已付款|卖家已发货",
        "tradeEndStatus": "交易成功|交易关闭|退款中的订单",
        "parseListTaskNum": 0,
        "listPageFilterReg": "<table.*</table>",
        "listPageProductRowSel": "tbody",
        "listPageProductNameSel": "tr:nth-child(3) > td.baobei > div > a",
        "listPageOrderIdSel": "tr:nth-child(2) > td > span > label > span.order-num",
        "listPageOrderStatusSel": "tr:nth-child(3) > td.trade-status > a:nth-child(1)",
        "listPageDetailLinkSel": "tr:nth-child(3) > td.trade-status > span > a.detail-link",

        "detailPageFilterReg": "",
        "trackUrlSel": "#J_ExList",
        "expressCompanySel": ".logistics-list > dl > dd:nth-child(4)",
        "expressIdSel": ".logistics-list > dl > dd:nth-child(6)",
        "osTimeSel": "",
        "osContentSel": "",
		"finishReg":"签收"
    },

    "tmall.com": {
        "name": "TAOBAO",
        "listUrl": "http://trade.taobao.com/trade/itemlist/list_bought_items.htm",
        "urlPattern": "^(http://buy\\.tmall.com/.*|http://buy\\.taobao.com/.*|http://trade\\.taobao.com/.*)",
        "notLoginReg": "登录名.*登录密码.*忘记登录密码|检测到您已经登录的账户:.*快速登录",
        "tradeStartStatus": "买家已付款|卖家已发货",
        "tradeEndStatus": "交易成功|交易关闭|退款中的订单",
        "parseListTaskNum": 0,
        "listPageFilterReg": "<table.*</table>",
        "listPageProductRowSel": "tbody",
        "listPageProductNameSel": "tr:nth-child(3) > td.baobei > div > a",
        "listPageOrderIdSel": "tr:nth-child(2) > td > span > label > span.order-num",
        "listPageOrderStatusSel": "tr:nth-child(3) > td.trade-status > a:nth-child(1)",
        "listPageDetailLinkSel": "tr:nth-child(3) > td.trade-status > span > a.detail-link",

        "detailPageFilterReg": "",
        "trackUrlSel": "#J_ExList",
        "expressCompanySel": ".logistics-list > dl > dd:nth-child(4)",
        "expressIdSel": ".logistics-list > dl > dd:nth-child(6)",
        "osTimeSel": "",
        "osContentSel": "",
		"finishReg":"签收"
    },

    "z.cn": {
        "name": "AMAZON",
        "listUrl": "https://www.amazon.cn/gp/css/order-history",
        "urlPattern": "^(http://www.amazon.cn/gp/product/handle-buy-box/.*)",
        "notLoginReg": "我是一个新客户.*记住登录状态。",
        "tradeStartStatus": "配送(?!成功)",
        "tradeEndStatus": "配送成功",
        "parseListTaskNum": 0,
        "listPageFilterReg": "<body.*</body>",
        "listPageProductRowSel": "div.action-box",
        "listPageProductNameSel": ".item-title",
        "listPageOrderIdSel": "ul.order-details > li > span:nth-child(2) > a",
        "listPageOrderStatusSel": "div.status > h2",
        "listPageDetailLinkSel": "div.order-links > a:nth-child(1)",

        "detailPageFilterReg": "",
        "trackUrlSel": "",
        "osTimeSel": "",
        "osContentSel": "",
		"finishReg":"配送成功",

        "host": "https://www.amazon.cn"
    },

    "global": {
        "parseOrderInterval": "1800000",
        "switch": "ON",
        "helpUrl":"http://baidu.com/"
    }
};

function ConfigKeys(){
    this.getNameKey = function(){
		return "name";
	}
	this.getListUrlKey = function(){
		return "listUrl";
	}
	this.getUrlPatternKey = function(){
		return "urlPattern";
	}
	this.getNotLoginRegKey= function(){
		return "notLoginReg";
	}
	this.getStartStatusKey = function(){
		return "tradeStartStatus";
	}
	this.getEndStatusKey = function(){
		return "tradeEndStatus";
	}
	this.getParseListTaskNumKey = function(){
		return "parseListTaskNum";
	}
	this.getListPageFilterRegKey = function(){
		return "listPageFilterReg";
	}
	this.getListPageProductRowSelKey = function(){
		return "listPageProductRowSel"
	}
	this.getListPageProductNameSelKey = function(){
		return "listPageProductNameSel";
	}
	this.getListPageOrderIdSelKey = function(){
		return "listPageOrderIdSel";
	}
	this.getListPageOrderStatusSelKey = function(){
		return "listPageOrderStatusSel";
	}
	this.getListPageDetailLinkSelKey = function(){
		return "listPageDetailLinkSel";
	}
	this.getDetailPageFilterRegKey = function(){
		return "detailPageFilterReg";
	}
	this.getTrackUrlSelKey = function(){
		return "trackUrlSel";
	}
	this.getExpressCompanySelKey = function(){
		return "expressCompanySel";
	}
	this.getExpressIdSelKey = function(){
		return "expressIdSel";
	}
	this.getOrderStatusTimeSelectorKey = function(){
		return "osTimeSel";
	}
	this.getOrderStatusContentSelectorKey = function(){
		return "osContentSel";
	}
	this.getParseListIntervalKey = function(){
		return "parseListInterval";
	}
	this.getParseOrderIntervalKey = function(){
		return 'parseOrderInterval';
	}
	this.getSwitchKey = function(){
		return 'switch';
	}
}

var configKeys = new ConfigKeys();

/*	
 	local storage 存储的订单key value
		key : 	'order:' + siteName + ":订单号";
		value:	
		{
				'expressId':2830100269, 
				'expresscompany':'京东快递'|'亚马逊快递'|'申通'|... , 
				'detailLink':'',
				'status':'NEW'|'RUNNING'|'FINISH'|'CANCEL' ,
				'productName':商品名称 , 
				'trackUrl': '' , 
				'content':[{'time':年-月-日 H:M:S,'context':内容}...] ,
		}	
*/



function OrderTool(){

	function isSwitchOn(){
		if(orderConfig.global[configKeys.getSwitchKey()]=='ON')
			return true;
		else
			return false;
	}

	// 对local storage中未完成订单的调度
	function schedule(){
		if(!isSwitchOn())
			return;
		var globalConfig = orderConfig['global']; 
		var interval = parseInt(globalConfig[configKeys.getParseOrderIntervalKey()]);
		setInterval(function(){
			parseOrder();
		}, interval);
	}

	// 判断用户的浏览页面是否触发List页面解析
	function triggerListParse(url, configs, enforce){
		if(!isSwitchOn())
			return;
		for(var site in configs){
			if(site=='global')
				continue;
			var config = configs[site];
			var urlReg = new RegExp(config[configKeys.getUrlPatternKey()]);
			if(enforce || urlReg.test(url)){
				//触发List页面解析：在接下来一段时间内，解析List页面
				//List解析队列至多保存3个解析任务，少于3个添加新任务
				var taskNum = getListPageTaskNum(config);
				var timeLine = [5, 30, 90, 5*60, 10*60, 20*60];
				if(taskNum < timeLine.length){
					var n = timeLine.length - taskNum;
					for(var i=0; i<n; i++){
						(function(config){
							setTimeout(function(){
								parseListPage(config);
							}, timeLine[i]*1000);	
						})(config);

					}
				}
				setListPageTaskNum(config, timeLine.length);
			}
		}
	}

	function getListPageTaskNum(config){
		return parseInt(config[configKeys.getParseListTaskNumKey()]);		 
	}

	function getParseListInterval(config){
		return parseInt(config[configKeys.getParseListIntervalKey()]);
	}

	function setListPageTaskNum(config, num){
		config[configKeys.getParseListTaskNumKey()] = num;
	}

	function replaceHtml(html){
		if(!!!html)
			return html;
		// xxx.com/> -> xxx.com>
		node = html.replace(/[\n\r]/g, "").replace(/.com\/>/gim, ".com>").replace(/.cn\/>/gim,".cn>");
		node = node.replace(/<script.*?<\/script>/gim,"");
		node = node.replace(/on[a-z|A-Z]+=\"/gm,"XXXX=\"");
		return node;
	}
	
	// 解析local storage中保存的RUNNING状态的订单
	function parseOrder(){
		for(var orderKey in localStorage) {
        	if(orderKey.indexOf("order:") == 0) {
    			var orderValue = getOrderValue(orderKey);
    			var status = orderValue['status'];
    			if(status == 'RUNNING'|| status == 'NEW') {
					parseEachOrder(orderKey, orderValue, parseOrderCallBack);
				}
        	}
    	}  
	}

	function parseListPage(config){
		var taskNum = getListPageTaskNum(config);
		if(taskNum<=0)
			return;
		setListPageTaskNum(config, taskNum-1);

		// 下载List页面, 解析
		var listUrl = config[configKeys.getListUrlKey()];
		var notLoginReg = new RegExp(config[configKeys.getNotLoginRegKey()]);
		$.post(listUrl, function(data){
				data = replaceHtml(data);
				
				// 异常
				if(!!!data || notLoginReg.test(data)){
					console.log(config['name'], "parse List:未登录");
					return;
				}

				// 用正则匹配最小的一块html,
				var filterReg = config['listPageFilterReg'];
				var reg = new RegExp(filterReg);
				var node = reg.exec(data);
				if(!!!node || node.length != 1){
					console.log(config['name'],"list page parse error");
                    var params = ['msg=LIST_PAGE_PARSE_ERROR',  'type=ARMANI_EXTENSION_ORDER'];
					sendLog(params);
					return;
				}
				
				// 解析
				parseGeneralListNode(node[0], config);
			}
		);
	}

	function parseGeneralListNode(node, config){

		var siteName = config[configKeys.getNameKey()];
		var productNameSel = config[configKeys.getListPageProductNameSelKey()];
		var orderIdSel = config[configKeys.getListPageOrderIdSelKey()];
		var orderStatusSel = config[configKeys.getListPageOrderStatusSelKey()];
		var orderDetailLinkSel = config[configKeys.getListPageDetailLinkSelKey()];
		var rowSel = config[configKeys.getListPageProductRowSelKey()];
		var orderStartStatusReg = new RegExp(config[configKeys.getStartStatusKey()]);
		var orderEndStatusReg = new RegExp(config[configKeys.getEndStatusKey()]);
		var hasNewOrder = false;
		$(rowSel,node).each(function(i, data) {
			var orderId = $(orderIdSel, $(data)).text().trim();
			var detailLink =  $(orderDetailLinkSel, $(data)).attr('href');
			if(!!!orderId || orderId.length<=0)
				return;
			
			// 取出每个订单的名称, 订单号，订单状态，包含物流信息的link
			var orderStatus = $(orderStatusSel, $(data)).text().trim();
			if(siteName == 'JD')
				var productName = $(productNameSel, $(data)).attr('title');
			else if(siteName == 'TAOBAO' || siteName == 'TMALL')
				var productName = $(productNameSel, $(data)).text().trim();
			else if(siteName == 'AMAZON'){
				var productName = $(productNameSel, $(data)).text().trim();
				detailLink =  config.host + detailLink;
			}
				

			//在途
			if(orderStartStatusReg.test(orderStatus)){
				var orderKey = getOrderKey(orderId, siteName);
				var orderValue = getOrderValue(orderKey);
				if(orderValue==null){//新订单
					var orderValue = newOrderValue('', '', detailLink,
									'NEW', productName);
					setStorage(orderKey, JSON.stringify(orderValue));
					hasNewOrder = true;					
					//openWindow(orderKey, true);
				}
			}
			//已完成
			else{
				var orderKey = getOrderKey(orderId, siteName);
				var orderValue = getOrderValue(orderKey);
				if(orderValue!=null)
					setOrderFinish(orderKey, orderValue);
			}
        });	

		// 发现新的未完成订单，立刻解析一次订单详情
		if(hasNewOrder){
			setTimeout(
				function(){
					parseOrder();
				},
			10000);
		}

	}

	function newOrderValue(expressId, expressCompany, detailLink, 
						_status, productName){
		var orderValue = {};
		orderValue['productName'] = productName;
		orderValue['expressId'] = expressId;
		orderValue['expressCompany'] = expressCompany;
		orderValue['detailLink'] = detailLink;
		orderValue['status'] = _status;
		orderValue['content'] = [];
		return orderValue;
	}

	function setOrderFinish(orderKey, orderValue){
		orderValue['status'] = 'FINISH';
		storeOrder(orderKey, orderValue);
	}

	// 将订单状态改为CANCEL(场景：用户选择了弹框中的取消提醒)
	function setOrderCancel(orderKey, orderValue){
		orderValue['status'] = 'CANCEL';
		storeOrder(orderKey, orderValue);
	}
	function storeOrder(key,val){
		try{
			val = JSON.stringify(val);
			setStorage(key, val);
		}catch(e){
			console.log(e);
		}
	}

	function getOrderKey(orderNum, siteName){
		return "order:"+siteName+":"+orderNum;
	}

	function getOrderValue(orderKey){
		var tmpStr = getStorage(orderKey);
		if(tmpStr==null)
			return null;
		try{
			return JSON.parse(tmpStr);
		}catch(e){
			console.log(e);
			return null;
		}
	}


	function getConfig(orderKey){
		if(orderKey.indexOf('TAOBAO')>0){
			return orderConfig['taobao.com'];
		}else if(orderKey.indexOf('JD')>0){
			return orderConfig['jd.com'];
		}else if(orderKey.indexOf('AMAZON')>0){
			return orderConfig['z.cn'];
		}else if(orderKey.indexOf('TMALL'))
			return orderConfig['tmall.com'];
	}

	// 解析一个订单的快递状态
	function parseEachOrder(orderKey, orderValue, callback){
		// 根据不同的站点去解析
		// 京东的订单接口通过url拼接得到
		// 淘宝的订单接口通过parsedetail页面获取
		// 亚马逊订单接口通过parsedetail页面获取
		var config = getConfig(orderKey);
		var site = config[configKeys.getNameKey()];
		if(site == 'JD'){
			parseJDOrder(config,orderKey, orderValue, callback);
			return;
		}

		var detailLink = orderValue['detailLink'];
		var notLoginReg = new RegExp(config[configKeys.getNotLoginRegKey()]);
		$.post(detailLink, function(data){
			var node = replaceHtml(data);
			if(notLoginReg.test(node)){
				console.log("not log in " + config['name']);
				var params = ['msg=NOT_LOGIN_IN_' + config['name'],  'type=ARMANI_EXTENSION_ORDER'];
				sendLog(params);
				if(!!!config['hadOpenLoginWindow']){
					openLoginWindow(site);
					config['hadOpenLoginWindow'] = true;
				}
				return;
			}
			if(site == 'TAOBAO' || site == 'TMALL'){		
				parseTaobaoOrder(node, config, orderKey, orderValue, callback);
			}else if(site == 'AMAZON'){
				parseAmazonOrder(node, config, orderKey, orderValue, callback);
			}
		});
	}

	function parseJDOrder(config, orderKey, orderValue, callback){
		var arr = orderKey.split(':');
		if(arr.length != 3)
			return ;
		orderValue['expressCompany'] = '京东快递';
		var id = arr[2];
		var url = config[configKeys.getTrackUrlSelKey()];
		$.post(url, {orderId:id}, 
        	function(data){
				var notLoginReg = new RegExp(config[configKeys.getNotLoginRegKey()]);
				if(notLoginReg.test(data)){
					if(!!!config['hadOpenLoginWindow']){
						openLoginWindow(config[configKeys.getNameKey()]);
						config['hadOpenLoginWindow'] = true;
					}
					return;
				}				
				try{
					var json = JSON.parse(data);
					if(!!!json){
						var params = ['err=JD_JSON_FORMAT_CHANGED1.',
                            "type=ARMANI_EXTENSION_ORDER"];
						sendLog(params);
						console.log('JD json format changed1.');
						return;
					}
				}catch(e){
                    var params = ['err=JD_JSON_FORMAT_CHANGED1.',
                        "type=ARMANI_EXTENSION_ORDER"];
					sendLog(params);
					console.log(e);
					return;
				}
				orderValue['content'] = transJdContentArr(config,json,orderValue);
				callback(orderKey, orderValue);
			}
    	);
	}

	function transJdContentArr(config, json, orderValue){
		var arr = json['orderTrackInfos'];
		arr.reverse();
		var r = [];
		var finishReg = new RegExp(config['finishReg']);
		for(var i=0; i<arr.length; i++){
			var a = arr[i];
			var trans = {};
			trans['context'] = a['title'] || a['content'];
			if(finishReg.test(trans['context']))
				orderValue['status'] = 'FINISH';
			var mill = a['creationTime'];
			if(mill == null || mill<=0){
				console.log("JD json format changed2.");
                var params = ['JD_JSON_FORMAT_CHANGED2.',
                    "type=ARMANI_EXTENSION_ORDER"];
				sendLog(params);
				trans['time'] = '';
				r.push(trans);
			}else{
				var t = new Date(mill);
				trans['time'] = t.getFullYear() + '-' + (t.getMonth()+1) + '-' + t.getDate() + ' ' +
							t.getHours() + ':' + t.getMinutes() + ':' + t.getSeconds();
				r.push(trans);
			}
		}
		return r;
	}
	
	function parseAmazonOrder(node, config, orderKey, orderValue, callback){
		orderValue['trackUrl'] = config.host + $($('img[alt="跟踪包裹"]', node)).parent().attr("href");
		if(/^http/.test(orderValue['trackUrl'])){
			$.get(orderValue['trackUrl'], function(data){
				data = replaceHtml(data);
				$("tr > td:nth-child(1)", data).each(function(i,data){
					if($(data).text().trim()=='配送公司：') {
						var tmp = $(data).parent().children();
						if(tmp.length==2)
							orderValue['expressCompany'] = $(tmp[1]).text().trim();
					}
					if($(data).text().trim()=='包裹号：') {
						tmp = $(data).parent().children();
						if(tmp.length==2)
							orderValue['expressId'] = $(tmp[1]).text().trim();
					}

				});
				contents = [];
				var finishReg = new RegExp(config['finishReg']);
				$("tr > td[nowrap='nowrap']", data).each(function(i,td){
					var tdTxt = $(td).text().trim();
					var dates = /(\d\d)\s+(\d)月\s+(\d\d)/.exec(tdTxt);
					if(!!dates && dates.length==4){
						var row = $(td).parent();
						var tds = $('td', row);
						var time = /(\d\d):(\d\d):(\d\d)\s+([p,P,a,A,m,M]{2})/.exec($(tds[1]).text().trim());
						if(time.length!=5){
                            var params = ['err=AMAZON_ORDER_STATUS_TIME_FORMAT_CHANGED.',
                                "type=ARMANI_EXTENSION_ORDER"];
							sendLog(params);
							console.log("AMAZON_ORDER_STATUS_TIME_FORMAT_CHANGED.");
							return;
						}
						var year = '20' + dates[1];
						var month = dates[2];
						var day = dates[3];
						var hour = parseInt(time[1]);
						var min = time[2];
						var sec = time[3];
						if(time[4]=='PM'||time[4]=='pm')
							hour += 12;
						var content = $(tds[3]).text().trim() + ' ' + $(tds[4]).text().trim();
						if(finishReg.test(content))
							orderValue['status'] = 'FINISH';
						var info = {};
						info['time'] =  year + '-' + month + '-' + day + ' ' +
							hour + ':' + min + ':' + sec;
						info['context'] = content;
						contents.push(info);
					}else{
                        var params = ['err=AMAZON_ORDER_STATUS_TABLE_FORMAT_CHANGED.',
                            "type=ARMANI_EXTENSION_ORDER"];
						sendLog(params);
					}
				});
				orderValue['content'] = contents;
				callback(orderKey, orderValue);
			});
		}else{
            var params = ['err=AMAZON_TRACK_URL_PARSE_ERROR.',
                "type=ARMANI_EXTENSION_ORDER"];
			sendLog(params);
			console.log("amazon track url parse error.");
		}		
	}	

	// 解析淘宝订单
	function parseTaobaoOrder(node, config, orderKey, orderValue, callback){
		var expressComSel = config[configKeys.getExpressCompanySelKey()];
		var expressCom = $(expressComSel,node).text().trim();
		orderValue['expressCompany'] = expressCom;
		var expressIdSel = config[configKeys.getExpressIdSelKey()];
		var expressId = $(expressIdSel,node).text().trim();
		expressId = /\d+/.exec(expressId);
		if(!!!expressId)
			return;
		expressId = expressId[0];
		orderValue['expressId'] = expressId;

		var urlSel = config[configKeys.getTrackUrlSelKey()];
		var trackUrl = $(urlSel, node).attr('data-url');
		if(!!trackUrl && trackUrl.length>0 && trackUrl.indexOf('http')==0)
			orderValue['trackUrl'] = trackUrl;
		else{
			console.log("taobao parse track url error.");
			return;
		}
		$.get(trackUrl,{},
			function(data){
				var tmp = data.match(/\{.*/g);
				var err = false;
				if(tmp.length==1)
					data = tmp[0].match(/.*\}/);
				else{
					console.log('taobao 解析物流 unmatch. ', orderKey, orderValue);
					err = true;
				}
				try{
					var json = JSON.parse(data[0]);
					if(json == undefined || json['traces'] == null){
						console.log('taobao 解析物流 error. ', orderKey, orderValue);
						err = true;
					}
				}catch(e){
					console.log(e);
					err = true;
				}
				if(err){
                    var params = ['err=TAOBAO_ORDER_JSON_FORMAT_CHANGED.',
                        "type=ARMANI_EXTENSION_ORDER"];
					sendLog(params);
					return;
				}
				var finishReg = new RegExp(config['finishReg']);
				if(finishReg.test(data[0]))
					orderValue['status'] = 'FINISH';
				orderValue['content'] = transTaobaoContentArr(json['traces']);
				callback(orderKey, orderValue);
			}
		);
	}

	// 将淘宝快递的状态内容转成我们存储的标准格式
	function transTaobaoContentArr(arr){
		arr.reverse();
		var r = [];
		for(var i=0; i<arr.length; i++){
			var a = arr[i];
			var trans = {};
			var time = a['acceptTime'];
			if(time==null){
				trans['time'] = '';
			}else{
				trans['time'] = time;
			}
			var context1 = a['acceptAddress'] || ' ';
			var context2 = a['remark'] || ' '; 		
			trans['context'] = context1 + context2;
			r.push(trans);
		} 
		return r;
	}

	// 订单状态解析后的回调
	function parseOrderCallBack(orderKey, newOrderValue){		
	 	var oldValue = JSON.parse(getStorage(orderKey));
		if(newOrderValue['status'] == 'NEW'){
			// 新发现的订单，状态未签收
			// 首先弹窗，用户可选择取消订单
			newOrderValue['status'] = 'RUNNING';
			storeOrder(orderKey, newOrderValue);
		    openWindow(orderKey, true, 0);
			setTimeout(function(){
				orderValue = getOrderValue(orderKey);
				if(orderValue['status'] != 'CANCEL')
					openWindow(orderKey, false, newOrderValue['content'].length);
			}, 15*1000);
			return;
		}
		var contentArray = oldValue['content'];
		var newContentArray = newOrderValue['content'];
		var oldFirstStatusTime;
		if(contentArray.length != newContentArray.length && 
			newOrderValue['status'] == 'RUNNING') {
        	console.info("new status", newContentArray);
		    openWindow(orderKey, false, newContentArray.length);			
    	}
		storeOrder(orderKey, newOrderValue);
	}

	/**
		订单状态弹窗
	*/
	function openWindow(key, isNew, msgIndex){
		var site = key.split(":")[1];
        var isFeeded = localStorage["order.isFeeded"];
        console.log('弹窗：订单', key, isNew);
        if (isFeeded == "true") {
            var notification = window.webkitNotifications
                .createHTMLNotification("order-notification.html?key=" + 
                        encodeURIComponent(key) + "&isNew=" + isNew + "&msgIndex=" + msgIndex);
            notification.show();	
        }
	}

	function openLoginWindow(site){
		console.log('弹窗：登录', site);
        var isFeeded = localStorage["order.isFeeded"];
        var todayFeeded =localStorage["order.todayFeeded"];
        var todayTimeStamp = new Date();
        var notifyTimeStamp = todayTimeStamp.getFullYear() + "-"
                                + todayTimeStamp.getMonth() + "-"
                                + todayTimeStamp.getDate();
        if (isFeeded == "true" && todayFeeded !== notifyTimeStamp) {
            var notification = window.webkitNotifications
                .createHTMLNotification("order-notification.html?site=" + 
                        encodeURIComponent(site));
            localStorage["order.todayFeeded"] = notifyTimeStamp;
            notification.show();
        }
	}

	function getStorage(key) {
    	return localStorage[key];
	}

	function setStorage(key, val) {
    	localStorage[key] = val;
	}

	// 第一次安装启动时，用源代码中定义的配置，后面用localstorage中的配置
	// 每次启动浏览器，从服务器端下载配置，写入到local storage
	function updateConfig(){
		//var testUrl = "http://nb171x.corp.youdao.com:4133/order.json";
		var configUrl = "http://zhushou.huihui.cn/conf/orderparser.json"//testUrl;
		$.getJSON(configUrl)
			.done(function(data){
				console.log(data);
				if(typeof data == 'object'){
					try{
						localStorage['orderConfig'] = JSON.stringify(data);
					}catch(e){
						console.log(e);
					}
				}
			})
			.fail(function(jqxhr, textStatus, error ) {
  				var err = textStatus + ', ' + error;
  				console.log( "update config failed: " + err);
			});

		var configStr = localStorage['orderConfig']; 			
		if(!!configStr){
			try{
				orderConfig = JSON.parse(configStr);
			}catch(e){
				console.log(e);
			}
		}
	}

	return {
		parseOrder:parseOrder,
		schedule:schedule,
		triggerListParse:triggerListParse,
		updateConfig:updateConfig
	};
}

var orderIsSwitchOn = localStorage["order.isSwitchON"];
if (orderIsSwitchOn === "true") {
    OrderTool().updateConfig();
    OrderTool().schedule();
    chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
        switch (request.type) {
            case 'visitUrl':
                OrderTool().triggerListParse(request.url, orderConfig, false);
                break;
            default: break;
        }
    });
}
