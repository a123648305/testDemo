(self.webpackChunkyunting=self.webpackChunkyunting||[]).push([[2806],{72806:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>m});function c(e,t){return e&&e[t]||""}var t=n(48926),a=n.n(t),t=n(85354),r=n.n(t),t=n(87757),i=n.n(t),t=n(67294),l=n.n(t),t=n(92360),o=n(61409),u=n(36144);function s(e,t){var n=0;return document.defaultView&&document.defaultView.getComputedStyle?(n=document.defaultView.getComputedStyle(e,"").getPropertyValue(t),n=Number(n.replace(/px/g,""))):e.currentStyle&&(t=t.replace(/\\-(\w)/g,function(e,t){return t.toUpperCase()}),n=e.currentStyle[t],n=Number(n.replace(/px/g,""))),n}var m=function(t){function e(e){var c=t.call(this,e)||this;return c.getPriceInfo=a()(i().mark(function e(){return i().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.getSettingData();case 2:u.h.post("/price/warning/token/find",{token:c.state.token}).then(function(e){document.querySelector("title").innerText=e.data.result.name,c.setState({compareType:e.data.result.compareType,data:e.data.result,remind:"YES"===e.data.result.remindRepetition},c.setHeight)});case 3:case"end":return e.stop()}},e)})),c.getSettingData=a()(i().mark(function e(){var t,n;return i().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.state.token,e.next=3,u.h.post("/price/warning/setting/get",{token:t});case 3:t=e.sent;try{n=JSON.parse(t.data.result.detailTitle),c.setState({activeDetail:n[0]||{}})}catch(e){console.log(e)}case 5:case"end":return e.stop()}},e)})),c.setHeight=function(){var e=s(document.querySelector(".warning-notice"),"padding-top"),t=s(document.querySelector(".monitoring-price"),"margin-top"),n=document.querySelector(".info").getBoundingClientRect(),a=document.querySelector(".warning-button").getBoundingClientRect(),r=document.querySelector(".more").getBoundingClientRect(),i=document.querySelector(".title").getBoundingClientRect(),i=document.documentElement.clientHeight-n.height-2*e-a.height-r.height-2*t-i.height-10;c.setState({contentHeight:i})},c.changeRemind=function(){u.h.post("/price/warning/token/change/remind",{token:c.state.token,remindRepetition:c.state.remind?"NO":"YES"}).then(function(e){c.setState({remind:!c.state.remind,alert:!1})})},c.handleClick=function(e){var t,n,a=c.state,r=a.token,a=a.data.compareResult;"chart"===e||"list"===e?0<a.length?(t=a.reduce(function(e,t){return new Date(t.ctime)>new Date(e)?t.ctime:e},a[0].ctime),o.mW.push("/weChatPush/"+e+"?token="+r+"&breakBackTime="+encodeURIComponent(t))):o.mW.push("/weChatPush/"+e+"?token="+r):"back"===e?(n="/warningNoticeList?token="+(t=c.props.location.query).listToken+"&sendDate="+t.listTime,(t=t.type)&&(n+="&type="+t),o.mW.push(n)):(n=c.state.data,o.mW.push("/weChatPush/"+e+"?alertValue="+n.warningPrice+"&alertType="+n.priceCompareType+"&compareType="+n.compareType+"&warningType="+n.warningType+"&token="+r))},c.state={token:"",date:"",data:{},compareType:null,remind:"",alert:!1,showTopicMore:!1,activeDetail:{},contentHeight:150},c}r()(e,t);var n=e.prototype;return n.componentDidMount=function(){var t=this;this.setState({title:document.querySelector("title").innerText});var e=this.props.location.query.token,n=this.props.location.query.sendDate?this.props.location.query.sendDate.replace(/-/g,"/"):"";this.setState({token:e,date:n},function(e){return t.getPriceInfo()}),document.querySelector("body").style.backgroundColor="#F8F8F8",document.querySelector("body").style.overflow="auto"},n.componentWillUnmount=function(){document.querySelector("title").innerText=this.state.title,document.querySelector("body").style.backgroundColor="unset",document.querySelector("body").style.overflow="unset"},n.renderMonitoringPrice=function(){var t=this,e=this.state,r=e.data,i=e.activeDetail,n=e.contentHeight,a="GT"===r.priceCompareType?"高于":"LT"===r.priceCompareType?"低于":"";"BREAK_BACK_PRICE"===r.warningType&&(a="BREAK"===r.breakBackType?"低于":"高于");e=60*r.compareResult.length>n;return l().createElement("div",{className:"monitoring-price"},l().createElement("p",{className:"title"},"监控商品价格",a,l().createElement("span",null," ",r.warningPrice)),l().createElement("div",{style:e?{height:n+"px",overflowY:"scroll"}:{}},l().createElement("ul",null,r.compareResult.map(function(e,t){var n=e.configDetailVoList.find(function(e){return"店铺"===e.topicTypeValue}),a=e.configDetailVoList.find(function(e){return e.topicTypeValue===i.name});return l().createElement("li",{key:t},l().createElement("div",{className:"left"},l().createElement("p",null,"\n                  "+(a?a.topicValue:"")+"\n                  "),l().createElement("p",null,"\n                  "+(e.sourceName||"")+"\n                   | \n                  "+(n?n.topicValue:"")+"\n                  ")),l().createElement("div",{className:"right"},e.takePrice,l().createElement("span",{style:{color:0<e.takePrice-r.warningPrice?"#15B374":"#D96969"}},"("+(0<e.takePrice-r.warningPrice?"+":"")+(Number.isInteger(e.takePrice-r.warningPrice)?e.takePrice-r.warningPrice:(e.takePrice-r.warningPrice).toFixed(2))+")")))}))),l().createElement("p",{className:"more"},l().createElement("span",null,this.state.date),l().createElement("span",{onClick:function(e){return t.handleClick("list")}},"查看更多 ",l().createElement("i",null," ",">"," ")),l().createElement("span",null,"共 ",r.total||r.compareResult.length," 条，")))},n.renderComparePrice=function(){var t=this,e=this.state.data;return l().createElement("div",{className:"compare-price"},l().createElement("p",{className:"title"},l().createElement("span",null,"监控商品"),l().createElement("span",null,"GT"===e.priceCompareType?"价格高于":"LT"===e.priceCompareType?"价格低于":"差价高于",l().createElement("br",null),l().createElement("i",null,e.warningPrice)),l().createElement("span",null,"比价商品")),l().createElement("ul",null,e.compareResult.slice(0,2).map(function(e,t){var n=e.v1.configDetailVoList.find(function(e){return"型号"===e.topicTypeValue}),a=e.v1.sourceName,r=e.v2.configDetailVoList.find(function(e){return"型号"===e.topicTypeValue}),i=e.v2.sourceName;return l().createElement("li",{key:t},l().createElement("div",{className:"left"},l().createElement("p",null,n?n.topicValue:""),l().createElement("p",null,e.v1.takePrice,l().createElement("span",{style:{color:0<e.v1.takePrice-e.v2.takePrice?"#15B374":"#D96969"}},"(",(0<e.v1.takePrice-e.v2.takePrice?"+":"")+(e.v1.takePrice-e.v2.takePrice),")")),l().createElement("p",null,"\n                  "+a+"\n                   \n                  "+c(e.v1.configDetailVoList[4],"topicValue")+"\n                   \n                  "+c(e.v1.configDetailVoList[2],"topicValue")+"\n                  ")),l().createElement("div",{className:"line"},"-"),l().createElement("div",{className:"right"},l().createElement("p",null,r?r.topicValue:""),l().createElement("p",null,e.v2.takePrice),l().createElement("p",null,"\n                  "+i+"\n                   \n                  "+c(e.v2.configDetailVoList[4],"topicValue")+"\n                   \n                  "+c(e.v2.configDetailVoList[2],"topicValue")+"\n                  ")))}),l().createElement("li",{className:"bottom more"},l().createElement("span",null,this.state.date),l().createElement("span",{onClick:function(e){return t.handleClick("list")}},"查看更多 ",l().createElement("i",null," ",">"," ")),l().createElement("span",null,"共 ",e.total||e.compareResult.length," 条，"))))},n.render=function(){var e=this,t=this.state,n=t.data,a=t.compareType,r=(t.alert,t.remind,t.showTopicMore),t=this.props.location.query.listToken;return l().createElement("div",{className:"warning-notice"},l().createElement("div",{className:"info"},n.filter&&l().createElement(l().Fragment,null,l().createElement("ul",null,n.filter.map(function(n,e){return l().createElement("li",{key:e,style:{display:e<=2||2<e&&r?"block":"none"}},l().createElement("span",null,n.name),l().createElement("span",{className:"wrap"},n.values.map(function(e,t){return l().createElement("span",{key:t},e.name+(t===n.values.length-1?"":"，"))})))})),l().createElement("div",{className:"topic_more",style:{display:3<n.filter.length&&!r?"block":"none"},onClick:function(){return e.setState({showTopicMore:!0})}},"展开更多",l().createElement("i",{className:"icon-cem_pull-down-or-take-up"})))),"PRODUCT"===a?this.renderComparePrice():"PRICE"===a&&this.renderMonitoringPrice(),l().createElement("ul",{className:"warning-button"},l().createElement("li",{onClick:function(){return e.handleClick("thresholdValue")}},l().createElement("i",{className:"icon-cem_warning-value-modification"}),"预警值修改"),t&&l().createElement("li",{onClick:function(){return e.handleClick("back")}},l().createElement("i",{className:"icon-cem_return"}),"返回提醒列表"),l().createElement("li",{onClick:function(){return e.handleClick("chart")}},l().createElement("i",{className:"icon-cem_price-monitoring-chart"}),"价格监控图表")))},e}(l().Component)}}]);