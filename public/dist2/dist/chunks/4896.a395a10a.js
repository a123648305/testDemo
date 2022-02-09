(self.webpackChunkyunting=self.webpackChunkyunting||[]).push([[4896],{84896:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r});var t=n(85354),l=n.n(t),t=n(67294),o=n.n(t),u=n(92360),a=n(5133),i=n(36144),t=n(30381),s=n.n(t),r=function(t){function e(e){e=t.call(this,e)||this;return e.state={visible:!1,loading:!1,columns:[{label:"挂牌价",prop:"listPrice",width:60,render:function(e){return o().createElement("div",null,Number(e.listPrice).toFixed(2))}},{label:"到手价",prop:"takePrice",width:60,render:function(e){return o().createElement("div",null,Number(e.takePrice).toFixed(2))}},{label:"历史最低价格",prop:"historyMinTakePrice",width:140,render:function(e){return o().createElement("div",null,Number(e.historyMinTakePrice).toFixed(2))}},{label:"历史低价时间",prop:"historyMinTakePriceTime",width:140,render:function(e){return o().createElement("div",null,s()(e.historyMinTakePriceTime).format("YYYY-M-DD HH:mm"))}},{label:"上一时段监控价格",prop:"beforeTakePrice",width:140,render:function(e){return o().createElement("div",null,Number(e.beforeTakePrice).toFixed(2))}},{label:"当前时段监控价格",prop:"takePrice",width:150,render:function(e){return o().createElement("div",null,Number(e.takePrice).toFixed(2))}},{label:"当前时段与上一时段差",width:180,render:function(e){return o().createElement("span",null,Number(e.takePrice-e.beforeTakePrice).toFixed(2))}},{label:"预警价格",prop:"compareLine",width:60,render:function(e){return o().createElement("span",null,Number(e.compareLine).toFixed(2))}},{label:"与预警价格的差",width:120,render:function(e){return o().createElement("span",null,Number(e.takePrice-e.compareLine).toFixed(2))}}],data:[],token:"",breakBackTime:""},e}l()(e,t);var n=e.prototype;return n.componentDidMount=function(){var e=this,t=this.props.location.query,n=t.token,t=t.breakBackTime;this.setState({token:n,breakBackTime:t&&decodeURIComponent(t)},function(){return e.fetchColumns()})},n.fetchData=function(){var r=this;this.setState({loading:!0});var e=this.state,t=e.token,e=e.breakBackTime;i.h.post("/price/list/monitors",{token:t,breakBackTime:e}).then(function(e){if(200===e.status||304===e.status){var t=e.data.result,n=[];if(0<t.length){var l=t[0].configDetailVoList;if(0<l.length){l.find(function(e){return"渠道"===e.topicTypeValue})&&(t=e.data.result.sort(function(e,t){if(e.configDetailVoList.find(function(e){return"渠道"===e.topicTypeValue})&&t.configDetailVoList.find(function(e){return"渠道"===e.topicTypeValue}))return e.configDetailVoList.find(function(e){return"渠道"===e.topicTypeValue}).topicValue.localeCompare(t.configDetailVoList.find(function(e){return"渠道"===e.topicTypeValue}).topicValue,"zh")}));for(var a=0;a<l.length;a++)n.push({prop:l[a].topicTypeId,label:l[a].topicTypeValue,width:90})}t=r.generateRows(t);r.setState({columns:r.generateColumns(n),data:t,loading:!1})}}}).catch(function(e){return a.Z.error(e.toString())})},n.fetchColumns=function(){var t=this;this.setState({loading:!0});var e=this.state.token;i.h.post("/price/warning/setting/get",{token:e}).then(function(e){200!==e.status&&304!==e.status||(e=e.data.result,e=JSON.parse(e.tableTitle),t.reduceColumns(e.filter(function(e){return"extend"===e.type})))}).catch(function(e){return a.Z.error(e.toString())})},n.reduceColumns=function(e){var t=this,n=this.state.columns,l=[];0<e.length&&e.map(function(t){var e=n.filter(function(e){return e.label===t.name});0<e.length?l.push(e[0]):(e={label:t.name,prop:"null",width:100,render:function(e){return o().createElement("div",null,"null")}},l.push(e))}),this.setState({columns:l},function(){return t.fetchData()})},n.generateColumns=function(e){var t=this.state.columns,t=[].concat(e,t);return t.forEach(function(e){e.align="center",e.width=90,e.renderHeader=function(e){e=e.label;return o().createElement("div",{className:"ellipsis"},e)}}),t},n.generateRows=function(e){for(var t=e.length-1;0<=t;t--)for(var n=e[t].configDetailVoList,l=n.length-1;0<=l;l--){var a=n[l].topicTypeId;e[t][a]=n[l].topicValue}return e},n.rowClassName=function(e,t){return 1===e.flag?"up":2===e.flag?"down":"null"},n.render=function(){var e=this,t=this.state,n=t.loading,l=t.data,a=t.columns,r=t.visible,i=document.documentElement.clientHeight,c=document.documentElement.clientWidth,t=Math.abs(i-c)/2;return o().createElement("div",{className:"yt_wechat_push_table_page",style:{transform:"translate(-"+t+"px, "+t+"px) rotate(90deg)",height:c,width:i}},o().createElement("div",{className:"content"},n?o().createElement(u.Loading,{fullscreen:!0}):0<l.length?o().createElement("div",{className:"table_zone"},o().createElement("div",{className:"top_desc"},o().createElement("span",null,"图例说明"),o().createElement("span",{className:"legend"},o().createElement("span",null,"升价"),o().createElement("span",null,"降价")),o().createElement("i",{className:"icon-cem_file1",style:{marginLeft:16,fontSize:14,color:"#0847A6"},onClick:function(){e.setState({visible:!0})}})),o().createElement("div",{className:"table_content"},o().createElement("table",{className:"wechat_push_table"},o().createElement("thead",null,o().createElement("tr",null,a.map(function(e){return"挂牌价"===e.label||"到手价"===e.label||"预警价格"===e.label?o().createElement("td",{className:"short"},e.label):"当前时段监控价格"===e.label?o().createElement("td",{style:{minWidth:"100px"}},e.label):"历史最低价时间"===e.label?o().createElement("td",{style:{minWidth:"110px"}},e.label):"历史最低价"===e.label?o().createElement("td",{style:{minWidth:"65px"}},e.label):o().createElement("td",{key:e.label,style:{minWidth:e.width+"px"},className:"当前时段与上一时段差"===e.label?"long":""},e.label)}))),o().createElement("tbody",null,l.map(function(t){return o().createElement("tr",{key:t.id,className:1===t.flag?"up":2===t.flag?"down":""},a.map(function(e){return"当前时段与上一时段差"===e.label?o().createElement("td",{key:e.label,className:"long",style:{minWidth:e.width+"px"}},Number(t.takePrice-t.beforeTakePrice).toFixed(2)):"历史最低价时间"===e.label?o().createElement("td",{key:e.label,style:{minWidth:"110px"}},s()(e.historyMinTakePriceTime).format("YYYY-M-DD HH:mm")):"历史最低价"===e.label?o().createElement("td",{key:e.label,style:{minWidth:"65px"}},Number(t[e.prop]).toFixed(2)):"与预警价格的差"===e.label?o().createElement("td",{key:e.label,style:{minWidth:e.width+"px"}},Number(t.takePrice-t.compareLine).toFixed(2)):"上时段监控价格"===e.label?o().createElement("td",{key:e.label,style:{minWidth:e.width+"px"}},Number(t[e.prop]).toFixed(2)):"当前时段监控价格"===e.label?o().createElement("td",{key:e.label,style:{minWidth:"100px"}},Number(t[e.prop]).toFixed(2)):"挂牌价"===e.label||"到手价"===e.label||"预警价格"===e.label?o().createElement("td",{key:e.label,className:"short"},Number(t[e.prop]).toFixed(2)):o().createElement("td",{key:e.label,style:{minWidth:e.width+"px"}},t[e.prop])}))}))))):o().createElement("div",{className:"noDataTips"},"暂无数据")),o().createElement(u.Dialog,{title:"关于涨价和降价说明",size:"tiny",visible:r,className:"top_desc_dialog",top:"20%",onCancel:function(){e.setState({visible:!1})}},o().createElement(u.Dialog.Body,null,o().createElement("div",null,"“降价”和“涨价”是依据该商品在预警时的价格与24小时内 的上一次有变化的价格对比决定的。如果预警时价格大于 上一次价格，则为“涨价”；如果预警时价格小于上一次价格，则为“降价”"))))},e}(o().PureComponent)}}]);