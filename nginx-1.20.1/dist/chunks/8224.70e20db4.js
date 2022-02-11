"use strict";(self.webpackChunkyunting=self.webpackChunkyunting||[]).push([[8224],{22120:(e,t,n)=>{n.d(t,{R:()=>a});var a=[{id:"ENTRANCE_URL",name:"\u5165\u53e3\u94fe\u63a5"},{id:"SESSION",name:"\u4f1a\u8bdd\u4e2d"}]},35405:(e,t,n)=>{n.r(t),n.d(t,{default:()=>z});var a=n(63366),r=n(87462),o=n(94578),i=n(67294),s=n(45697),l=n.n(s),c=n(50976),p=n(43144),d=function(e){function t(t){var n;return(n=e.call(this,t)||this).inputChange=function(e){e.stopPropagation(),e.nativeEvent.stopImmediatePropagation(),n.setState({searchKeyWords:e.target.value,isShow:!1})},n.keywordChange=function(e){e.stopPropagation(),e.nativeEvent.stopImmediatePropagation(),"keydown"===e.type&&13===e.keyCode&&n.handleCompareClick(n.props.options.find((function(e){return e.toLocaleLowerCase()===n.state.searchKeyWords.trim().toLocaleLowerCase()}))),n.setState({isShow:!1})},n._setPadShowFalse=function(){n.state.show&&n.setState({show:!1})},n._handleOnClick=function(e){var t=n.state.show;t&&(e.stopPropagation(),e.nativeEvent.stopImmediatePropagation()),setTimeout((function(){n.setState({show:!t})}),0)},n.handleProductClick=function(e){e.stopPropagation(),e.nativeEvent.stopImmediatePropagation();var t=n.props.onChange;!n.state.isDisabled&&t({productCompare:""}),n.setState({productTitle:"\u65e0",searchKeyWords:"",compareTitle:"\u8bf7\u9009\u62e9"})},n.handleCompareClick=function(e){var t,a=n.props,r=a.onChange,o=a.objName,i=n.props.options;i=i.filter((function(t){return t===e})),n.setState({isShow:!0,productTitle:e,compareTitle:e}),!e.disabled&&r(o?((t={})[o]=e,t):e)},n.state={show:!1,firstLiHover:!1,isDisabled:!1,searchKeyWords:"",isShow:!0,productTitle:"\u65e0",compareTitle:"\u8bf7\u9009\u62e9"},n}(0,o.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){window.addEventListener("click",this._setPadShowFalse)},n.componentWillUnmount=function(){window.removeEventListener("click",this._setPadShowFalse)},n.render=function(){var e=this,t=this.state,n=t.show,a=t.searchKeyWords,r=t.isShow,o=t.productTitle,s=t.compareTitle,l=this.props,c=l.objName,p=l.preTitle,d=(l.sufTitle,l.showTitle),u=void 0===d||d,m=this.props.options;return m=this.searchList!==[]?this.searchList:m.filter((function(e){return e.value!==o})),i.createElement("div",{className:"co-single-select-button-wrapper",onClick:this._handleOnClick},i.createElement("span",{className:"button-trigger "+(n?"sel":"")},u&&i.createElement(i.Fragment,null,p&&i.createElement("span",{className:"pre-title"}," ",p,"\uff1a "),i.createElement("span",{className:"button-title"}," ",s," ")),i.createElement("i",{className:"icon-cem_arrow-launches",style:{transform:n?"rotate(-180deg)":""}})),i.createElement("div",{className:"button-panel "+(n?"active":"")},"productCompare"===c&&i.createElement("div",{className:"search"},i.createElement("input",{value:a,placeholder:"\u8bf7\u8f93\u5165\u5173\u952e\u8bcd",type:"text",onChange:this.inputChange,onClick:function(e){e.stopPropagation(),e.nativeEvent.stopImmediatePropagation()},onKeyDown:this.keywordChange}),r&&m&&i.createElement("i",{className:"icon-cem_search",onClick:function(t){t.stopPropagation(),t.nativeEvent.stopImmediatePropagation(),e.handleCompareClick(e.props.options.find((function(t){return t.toLocaleLowerCase()===e.state.searchKeyWords.trim().toLocaleLowerCase()})))}}),!r&&""!==a&&m&&i.createElement("i",{className:"icon-cem_close-window",onClick:function(t){t.stopPropagation(),t.nativeEvent.stopImmediatePropagation(),e.setState({searchKeyWords:"",isShow:!0})}})),i.createElement("div",{style:{overflow:"auto",maxHeight:206,marginTop:16}},r&&"productCompare"===c&&i.createElement("p",{className:"product"},o,"\u65e0"!==o&&i.createElement("i",{className:"icon-cem_cancel",onClick:this.handleProductClick})),m.map((function(t,n){return i.createElement("div",{className:"panel-item",key:t,onClick:function(){e.handleCompareClick(t)},style:{display:t===o?"none":"block"}},t)})))))},(0,p.Z)(t,[{key:"searchList",get:function(){var e=this;return this.props.options.filter((function(t){return-1!==t.toLocaleLowerCase().indexOf(e.state.searchKeyWords.trim().toLocaleLowerCase())}))}}]),t}(i.PureComponent);d.propTypes={onChange:l().func.isRequired,options:l().array.isRequired,objName:l().string.isRequired,preTitle:l().string,sufTitle:l().string,showTitle:l().bool};const u=d;var m=n(43036),h=n(31705),f=n(94644),v=n(30133),g=n(92360),y=n(61409),C=n(70715),E=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).handleDownloadChart=function(){t.instance&&(0,f._v)(t.instance,t.title)},t.handleDownloadExcel=function(){var e=t.props,n=e.data,a=e.product,r=e.comparedProduct,o=[];n.forEach((function(e){for(var t=0;t<e.dateList.length;t++){var a=e.dateList[t],r=a.date,i=a.count;o.push(n.length>1?[r,i,n[1].dateList[t].count]:[r,i])}})),o.splice(0,0,n.length>1?["\u65e5\u671f",a,r]:["\u65e5\u671f",a]),(0,f.aT)([o],t.title)},t.handleClickIcon=function(){var e=t.props,n=e.type,a=e.product,r=e.aspect,o=e.brand,i=void 0,s=void 0,l=void 0,c=r[0],p=r[1];1===n?(i="/conversation/concernAnalyze",""!==o&&(l={id:"brand",name:"\u54c1\u724c",serverKey:"brand",values:{id:o,name:o,values:o}}),(c||p)&&(s={id:"aspect",name:"\u5173\u6ce8\u70b9",serverKey:"aspect",type:"cascade",values:[{id:p?"":c,name:p?"":c,values:p?[{id:p,name:p}]:[]}]})):2===n&&(i="/conversation/commodityAnalyze",s={id:"product",name:"\u5206\u6790\u5546\u54c1",serverKey:"product",type:"radio",values:a}),y.mW.push({pathname:i,state:{defHeader:s?[s]:void 0,from:"detail",chartValue:l}})},t.setOption=function(){var e=t.props,n=e.type,a=e.loading,r=e.total,o=e.data,i=e.product,s=e.comparedProduct,l=e.selectedValue,c=e.selectedChart;if(!a&&o.length>0&&o[0].dateList&&o[0].dateList.length>0){var p={title:{text:t.title,lineHeight:20,left:0,top:0},graphic:{type:"text",left:0,top:48,cursor:"default",style:{text:r,fontSize:24,lineHeight:32}},tooltip:{trigger:"axis",formatter:function(e){return e[0].name+"<br>"+e.map((function(e){return""+e.marker+e.seriesName+"\uff1a"+e.value})).join("<br>")}},legend:{show:1===n,icon:C.W4.lineRing,left:0,top:90,itemGap:16,itemHeight:12,textStyle:{lineHeight:18}},grid:{show:!1,left:46,right:46,top:1===n?130:92},xAxis:{type:"category",boundaryGap:!1,data:o[0].dateList&&o[0].dateList.length>0?o[0].dateList.map((function(e){return e.date})):[]},yAxis:{type:"value"},series:o.map((function(e,t){return{name:0===t?i:s,type:"line",smooth:!0,showSymbol:!0,lineStyle:{color:e.name===i?"line"!==c||"line"===c&&!l?"#1574B3":"#BFBFBF":"#D1B425"},data:e.dateList.map((function(t){var n=t.date;return{date:n,value:t.count,itemStyle:{color:e.name===i?"line"===c&&l&&l!==n?"#BFBFBF":"#1574B3":"#D1B425"},symbolSize:6}}))}}))};t.instance&&t.instance.clear(),t.instance&&t.instance.setOption(p)}},t.handleClickChart=function(e){var n=e.name,a=e.seriesName,r=t.props,o=r.product,i=r.selectedValue,s=r.onChartClick;a===o&&s({selectedChart:"line",selectedValue:{date:i===n?"":n}})},t}(0,o.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this.props,t=e.product,n=e.aspect,a=e.type,r=e.brand;this.title=(1===a?t:"")+"\u300c"+(n.length>1?n.join(" | "):n[0]?n[0]:r)+"\u300d"+(1===a?"":t)+(1===a?"\u5173\u6ce8\u91cf":"\u4f1a\u8bdd\u91cf")+"\u53ca\u8d70\u52bf",this.setOption()},n.shouldComponentUpdate=function(e,t){return e.isInitial!==this.props.isInitial||(e.loading!==this.props.loading||(JSON.stringify(e.data)!==JSON.stringify(this.props.data)||(e.comparedProduct!==this.props.comparedProduct||(e.selectedChart!==this.props.selectedChart||e.selectedValue!==this.props.selectedValue))))},n.componentDidUpdate=function(){var e=this.props,t=e.product,n=e.aspect,a=e.type,r=e.brand;this.title=(1===a?t:"")+"\u300c"+(n.length>1?n.join(" | "):n[0]?n[0]:r)+"\u300d"+(1===a?"":t)+(1===a?"\u5173\u6ce8\u91cf":"\u4f1a\u8bdd\u91cf")+"\u53ca\u8d70\u52bf",this.setOption()},n.render=function(){var e=this,t=this.props,n=t.loading,a=t.isInitial,o=t.aspect,s=t.brand,l=(t.comparedProduct,t.comparisonList),p=t.data,d=t.onChange;t.onChartClick,t.productCompare;return i.createElement("div",{className:"line-chart-wrapper"},a?i.createElement(v.Z,null):n?i.createElement(g.Loading,{loading:n},i.createElement("div",{style:{height:"343px"}})):p.length>0&&p[0].dateList&&p[0].dateList.length>0?i.createElement(c.Z,{option:{},loading:n,theme:"yunting_multi_color",style:{width:"100%",height:"343px"},onChartReady:function(t){return e.instance=t},onEvents:{click:this.handleClickChart}}):i.createElement("div",{className:"empty-block"},"\u6682\u65e0\u6570\u636e"),i.createElement("div",{className:"appendix"},l&&l.length>0&&i.createElement(i.Fragment,null,i.createElement("i",null,i.createElement(u,(0,r.Z)({preTitle:"\u5bf9\u6bd4\u5546\u54c1",sufTitle:"\u8bf7\u9009\u62e9",onChange:d,objName:"productCompare",options:l},this.props)))),i.createElement(m.Z,{overlay:"\u67e5\u770b\u300c"+(o.length>1?o.join(" | "):o[0]?o[0]:s)+" \u300d\u66f4\u591a\u4fe1\u606f",placement:"top"},i.createElement("i",{className:"icon-cem_refresh-more",onClick:this.handleClickIcon})),i.createElement(h.Z,{onDownChartClick:function(){return e.handleDownloadChart()},onDownExcelClick:function(){return e.handleDownloadExcel()}})))},t}(i.Component);E.propTypes={type:l().number.isRequired,loading:l().bool.isRequired,isInitial:l().bool.isRequired,product:l().string.isRequired,total:l().number.isRequired,data:l().array.isRequired,aspect:l().array.isRequired,brand:l().string,comparedProduct:l().string,comparisonList:l().array,onChange:l().func,onChartClick:l().func,selectedChart:l().string,selectedValue:l().string};var w=n(40086),N=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).handleDownloadChart=function(){t.instance&&(0,f._v)(t.instance,t.title)},t.handleDownloadExcel=function(){var e=t.props,n=e.groupType,a=e.data,r=[];a.forEach((function(e){for(var t=e.name,n=e.children,a=0;a<n.length;a++)r.push([t,n[a].name,n[a].count])})),r.splice(0,0,["\u5e73\u53f0",n.name,"\u4f1a\u8bdd\u91cf"]),(0,f.aT)([r],t.title)},t.handleSwitchGroupType=function(e){var n=t.props,a=n.onGroupTypeChange,r=n.onChartClick;a&&a({groupType:e}),r&&r({selectedChart:"",selectedValue:{source:"",shopName:"",waiter:""}})},t.setOption=function(){var e=t.props,n=e.data,a=e.loading,r=e.selectedChart,o=e.selectedValue,i=o.waiter,s=o.shopName;!a&&n.length>0&&function(){for(var e=JSON.parse(JSON.stringify(n)),a=function(t){e[t].value=e[t].count,e[t].children.forEach((function(n){n.value=n.count,n.source=e[t].source,n.itemStyle={color:"treeMap"!==r||"treeMap"===r&&(i===n.name||s===n.name)?C.Fq[t%C.Fq.length]:"#8C8C8C"}}))},o=0;o<e.length;o++)a(o);var l={title:{text:t.title,lineHeight:20,left:0,top:0},tooltip:{trigger:"item",formatter:function(e){var t=e.marker,n=e.name,a=e.value;if(n)return""+t+n+"\uff1a"+a}},series:[{type:"treemap",top:80,left:20,right:20,bottom:0,label:{formatter:"{b}\n{@c}",lineHeight:14},nodeClick:!1,silent:!1,roam:!1,breadcrumb:{show:!1},levels:[{itemStyle:{normal:{borderWidth:0,gapWidth:2}}},{itemStyle:{normal:{borderWidth:0,gapWidth:2}}}],data:e}]};t.instance&&t.instance.clear(),t.instance&&t.instance.setOption(l)}()},t.handleClickChart=function(e){var n=e.data,a=n.name,r=n.source,o=t.props,i=o.groupType.id,s=o.selectedValue,l=s.waiter,c=s.shopName;(0,o.onChartClick)({selectedChart:c===a||l===a?"":"treeMap",selectedValue:{source:"SHOP"===i&&c===a||"WAITER"===i&&l===a?"":r,waiter:"WAITER"===i&&l!==a?a:"",shopName:"SHOP"===i&&c!==a?a:""}})},t}(0,o.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this.props,t=e.type,n=e.product,a=e.aspect,r=e.brand;this.title=(1===t?n:"")+"\u300c"+(a.length>1?a.join(" | "):a[0]?a[0]:r)+"\u300d"+(1===t?"":n)+(1===t?"\u5173\u6ce8\u70b9":"\u4f1a\u8bdd\u91cf")+"\u5206\u5e03",this.setOption()},n.shouldComponentUpdate=function(e,t){return e.type!==this.props.type||(e.loading!==this.props.loading||(e.isInitial!==this.props.isInitial||(JSON.stringify(e.data)!==JSON.stringify(this.props.data)||(e.selectedChart!==this.props.selectedChart||e.selectedValue!==this.props.selectedValue))))},n.componentDidUpdate=function(){var e=this.props,t=e.type,n=e.product,a=e.aspect,r=e.brand;this.title=(1===t?n:"")+"\u300c"+(a.length>1?a.join(" | "):a[0]?a[0]:r)+"\u300d"+(1===t?"":n)+(1===t?"\u5173\u6ce8\u70b9":"\u4f1a\u8bdd\u91cf")+"\u5206\u5e03",this.setOption()},n.render=function(){var e=this,t=this.props,n=t.loading,a=t.isInitial,r=t.data,o=t.groupType,s=r.map((function(e){return e.name})),l={list:[{name:"\u5e97\u94fa",id:"SHOP"},{name:"\u5ba2\u670d",id:"WAITER"}],value:o,placeholder:o.name,onChange:this.handleSwitchGroupType};return i.createElement("div",{className:"concern-analyze-treemap-wrapper"},a?i.createElement(v.Z,null):n?i.createElement(g.Loading,{loading:n},i.createElement("div",{style:{height:"343px"}})):r.length>0?i.createElement(i.Fragment,null,i.createElement(c.Z,{option:{},loading:n,theme:"yunting_multi_color",style:{width:"100%",height:"343px"},onChartReady:function(t){return e.instance=t},onEvents:{click:this.handleClickChart}}),i.createElement("div",{className:"legend"},s&&s.map((function(e,t){return i.createElement(i.Fragment,{key:e},i.createElement("span",{style:{backgroundColor:C.Fq[t%C.Fq.length]}}),i.createElement("span",null,e))})))):i.createElement("div",{className:"empty-block"},"\u6682\u65e0\u6570\u636e"),i.createElement("div",{className:"appendix"},i.createElement(w.Z,l),i.createElement(h.Z,{onDownChartClick:function(){return e.handleDownloadChart()},onDownExcelClick:function(){return e.handleDownloadExcel()}})))},t}(i.Component);N.propTypes={loading:l().bool.isRequired,type:l().number.isRequired,product:l().string.isRequired,aspects:l().array,brand:l().string,data:l().array.isRequired,groupType:l().object.isRequired,onGroupTypeChange:l().func.isRequired,selectedChart:l().string,selectedValue:l().object};var k=n(53754),L=n(22120),S=function(e){function t(t){var n;return(n=e.call(this,t)||this).handleMultiSelectChange=function(e){n.setState((0,r.Z)({},e),(function(){n.handleSearch()}))},n.handleInput=function(e){n.setState({customer:e})},n.handleInputKey=function(e){n.setState({keywords:e})},n.handleKeyDown=function(e){e.stopPropagation(),13===e.keyCode&&n.handleSearch()},n.handleSearch=function(){var e=n.state,t=e.customer,a=e.keywords,r=e.source,o=e.shopName,i=e.typeList,s=e.waiter,l=e.position,c=n.props.onSearch;c&&c({keywords:[a],customer:[t],source:r,shopName:o,typeList:i,waiter:s,position:l})},n.state={customer:"",keywords:"",source:[],shopName:[],typeList:[],waiter:[],position:[]},n}return(0,o.Z)(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.source,a=t.shopName,r=t.typeList,o=t.waiter,s=t.value;return i.createElement("div",{className:"conversation_header"},i.createElement("div",{className:"dialog-list-header"},i.createElement("span",null,"\u4f1a\u8bdd"),i.createElement("div",null,i.createElement(k.Z,{title:"\u5e73\u53f0",type:1,options:n&&n.map((function(e){return{id:e.id,name:e.name}})),style:{backgroundColor:"#fff",color:"#262626"},onChange:function(t){return e.handleMultiSelectChange({source:t})},value:s.source}),i.createElement(k.Z,{title:"\u5e97\u94fa",type:1,options:a&&a.map((function(e){return{id:e,name:e}})),onChange:function(t){return e.handleMultiSelectChange({shopName:t})},value:s.shopName}),i.createElement(k.Z,{title:"\u5ba2\u670d\u7c7b\u578b",type:1,options:r&&r.map((function(e){return{id:e.id,name:e.name}})),onChange:function(t){return e.handleMultiSelectChange({typeList:t})},value:s.typeList}),i.createElement(k.Z,{title:"\u5ba2\u670d",type:1,options:o&&o.map((function(e){return{id:e,name:e}})),onChange:function(t){return e.handleMultiSelectChange({waiter:t})},value:s.waiter}),i.createElement("div",{className:"con-position"},i.createElement(k.Z,{title:"\u4f1a\u8bdd\u4f4d\u7f6e",type:1,options:L.R,onChange:function(t){return e.handleMultiSelectChange({position:t})},value:s.position}),i.createElement(m.Z,{placement:"top",overlay:"\u7531\u4e8e\u5ba2\u6237\u4ece\u67d0\u4e2a\u5546\u54c1\u94fe\u63a5\u8fdb\u5165\u963f\u91cc\u65fa\u65fa\u7b49\u54a8\u8be2\u804a\u5929\u7a97\u53e3\u540e\uff0c\u4e0d\u4e00\u5b9a\u662f\u54a8\u8be2\u8be5\u5546\u54c1\u3002\u4e3a\u4e86\u63d0\u9ad8\u4e1a\u52a1\u5206\u6790\u7684\u7075\u6d3b\u6027\uff0c\u8fd9\u91cc\u5c06\u201c\u5546\u54c1\u201d\u5728\u4f1a\u8bdd\u4e2d\u7684\u4f4d\u7f6e\u505a\u533a\u5206\uff0c\u4f9b\u7528\u6237\u5207\u6362",overlayClassName:"restricted-width-pop"},i.createElement("i",{className:"icon-cem_problem-new"}))),i.createElement(g.Input,{ref:function(t){return e.input=t},icon:"search",placeholder:"\u8bf7\u8f93\u5165\u5ba2\u6237\u540d\u79f0",onChange:this.handleInput,onIconClick:this.handleSearch,onKeyDown:this.handleKeyDown}),i.createElement(g.Input,{ref:function(t){return e.keywordsinput=t},icon:"search",placeholder:"\u8bf7\u8f93\u5165\u5173\u952e\u8bcd",onChange:this.handleInputKey,onIconClick:this.handleSearch,onKeyDown:this.handleKeyDown}))))},t}(i.Component);S.propTypes={source:l().array.isRequired,shopName:l().array.isRequired,waiter:l().array.isRequired,typeList:l().array.isRequired,onSearch:l().func.isRequired};var b=n(30381),D=["50%","60%","70%","80%","60%","0"],T=n(95045),I=function(e){function t(t){var a;return(a=e.call(this,t)||this).handelListClick=function(e){a.props.fetchConversationDetail({group:e.group})},a.loadMore=function(e){var t=a.listWrap,n=t.scrollTop,r=t.offsetHeight,o=t.scrollHeight,i=a.props,s=i.conversationList,l=i.conversationListTotal,c=i.pageIndex;a.setState({listScrollBottom:o-n-r}),o-n-r>30||a.props.fetchingConversationList||s.length>=l||a.props.fetchConversationList({pageIndex:c+1})},a.formatContent=function(e){var t=a.escape2Html(a.escape2Html(e)),n=document.createElement("div");return n.innerHTML=t,n.innerText},a.escape2Html=function(e){var t={lt:"<",gt:">",nbsp:" ",amp:"&",quot:'"'};return e&&e.replace(/&(lt|gt|nbsp|amp|quot);/gi,(function(e,n){return t[n]}))},a.renderContent=function(){var e=a.state.listScrollBottom,t=a.props,r=t.conversationList,o=t.conversationListTotal,s=t.currentDisplayGroup;t.fetchingConversationList;return i.createElement("div",{className:"loading"},i.createElement("ul",{ref:function(e){return a.listWrap=e},onScroll:a.loadMore},r.length>0?r.map((function(e){return i.createElement("li",{key:e.id,className:e.group===s?"sel":"",onClick:function(){return a.handelListClick(e)}},i.createElement("img",{src:e.img?e.img:T,alt:"\u6570\u636e\u6e90"}),i.createElement("div",{className:"detail_wrap"},i.createElement("div",{className:"top"},i.createElement(m.Z,{overlay:"\u5ba2\u670d",placement:"top",mouseEnterDelay:1},i.createElement("p",{className:"shop"},e.shopName+"\uff1a"+e.serviceName)),i.createElement(m.Z,{overlay:"\u4f1a\u8bdd\u521b\u5efa\u65f6\u95f4",placement:"top",mouseEnterDelay:1},i.createElement("span",{className:"time"},b(e.createdTime).format("MM-DD HH:mm")))),i.createElement(m.Z,{overlay:""!==a.formatContent(e.lastSession)?a.formatContent(e.lastSession):"**\u65e0\u6709\u610f\u4e49\u5185\u5bb9**",placement:"top",mouseEnterDelay:1},i.createElement("div",{className:"last_cvst"},""!==a.formatContent(e.lastSession)?a.formatContent(e.lastSession):"**\u65e0\u6709\u610f\u4e49\u5185\u5bb9**")),i.createElement(m.Z,{overlay:"\u7528\u6237\u540d",placement:"top",mouseEnterDelay:1},i.createElement("div",{className:"bot"},"\u2014 "+e.userName))))})):i.createElement("div",{className:"noDate"},i.createElement("img",{style:{width:"70px"},src:n(9459),alt:""}),"\u6ca1\u6709\u6570\u636e...")),i.createElement("div",{className:"conversation_bottom"},i.createElement("span",null,"\u5171 ",i.createElement("span",null,o)," \u9879"),i.createElement("div",{className:"more"},i.createElement("p",{style:{opacity:a.props.fetchingConversationList?1:0}},"\u52a0\u8f7d\u66f4\u591a\u6570\u636e\u4e2d..."),i.createElement("p",{style:{opacity:r.length>=o&&e<30?1:0}},"\u6ca1\u6709\u66f4\u591a\u6570\u636e..."))))},a.state={listScrollBottom:100},a}(0,o.Z)(t,e);var a=t.prototype;return a.componentDidMount=function(){},a.render=function(){var e=this.props.conversationList;return i.createElement("div",{className:"conversation_list"},void 0===e?i.createElement(v.Z,{paragraph:D.concat(D.concat(D))}):this.renderContent())},t}(i.Component),P=["50%","60%","70%","80%","60%","0"],F=n(30381),Z=n(92690),x=n(1583),_=function(e){function t(t){var n;return(n=e.call(this,t)||this).formatContent=function(e){var t=n.escape2Html(n.escape2Html(e)),a=document.createElement("div");return a.innerHTML=t,a.innerText.trim()},n.escape2Html=function(e){var t={lt:"<",gt:">",nbsp:" ",amp:"&",quot:'"'};return e&&e.replace(/&(lt|gt|nbsp|amp|quot);/gi,(function(e,n){return t[n]}))},n.renderLeftConversation=function(e){var t=n.props,a=t.value,r=t.detailAspectKeywordList,o=n.state,s=o.selAspectColor,l=o.selAspectId,c=r&&r[e.id]||[],p=n.formatContent(e.content)||"";if(a.keywords&&a.keywords.length>0){var d=new RegExp(a.keywords,"ig");p=p.replace(d,'<span style="background: #e9ccc8; color: #f0f2f5;">'+a.keywords.toString()+"</span>")}if(l){var u=c.find((function(e){return e.aspectId===l}));u&&u.keywords.forEach((function(e){var t=new RegExp(e.highLightWord,"ig");p=p.replace(t,'<span style="background: '+s+'; color: #f0f2f5;">'+e.highLightWord+"</span>")}))}return i.createElement("li",{className:"left",key:e.id},i.createElement("img",{src:e.img?e.img:x,alt:"\u5934\u50cf"}),i.createElement("div",{className:"detail_wrap"},i.createElement("div",{className:"top"},i.createElement("p",{className:"shop"},e.name),i.createElement("span",{className:"time",style:{marginLeft:8}},"("+F(e.ctime).format("HH:mm:ss")+")"),c.map((function(e){var t=e.aspectId;return i.createElement("span",{id:t,key:t,style:{position:"absolute"}})}))),i.createElement("div",{className:"bot",dangerouslySetInnerHTML:{__html:p}})))},n.renderRightConversation=function(e){var t=n.props,a=t.value,r=t.detailAspectKeywordList,o=n.state,s=o.selAspectId,l=o.selAspectColor,c=r&&r[e.id]||[],p=n.formatContent(e.content)||"";if(a.keywords&&a.keywords.length>0){var d=new RegExp(a.keywords,"ig");p=p.replace(d,'<span style="background: #e9ccc8; color: #f0f2f5;">'+a.keywords.toString()+"</span>")}if(s){var u=c.find((function(e){return e.aspectId===s}));u&&u.keywords.forEach((function(e){var t=new RegExp(e.highLightWord,"ig");p=p.replace(t,'<span style="background: '+l+'; color: #f0f2f5;">'+e.highLightWord+"</span>")}))}return i.createElement("li",{className:"right",key:e.id},i.createElement("div",{className:"img_wrap"},i.createElement("img",{src:e.img?e.img:Z,alt:"\u5934\u50cf"}),i.createElement("div",{className:"waiter_type"},e.saleType)),i.createElement("div",{className:"detail_wrap"},i.createElement("div",{className:"top"},i.createElement("span",{className:"time",style:{marginRight:8}},"("+F(e.ctime).format("HH:mm:ss")+")"),i.createElement("p",{className:"shop"},e.name),c.map((function(e){var t=e.aspectId;return i.createElement("span",{id:t,key:t,style:{position:"absolute"}})}))),i.createElement("div",{className:"bot",dangerouslySetInnerHTML:{__html:p}})))},n.renderDetail=function(){var e=n.props,t=e.conversationDetail,a=e.detailProduct,r=e.detailAspect,o=e.conversationStartTime,s=e.fetchingConversationDetail,l=e.filter,c=n.state.selAspectId,p=t.filter((function(e){return"SERVER"===e.type&&""!==e.name})),d=p[0]?p[0].name:"",u=[];return r.forEach((function(e){e.aspect1&&!u.includes(e.aspect1)&&u.push(e.aspect1)})),i.createElement(g.Loading,{className:"loading",loading:s},i.createElement("h2",null,d),i.createElement("div",{className:"commodity"},i.createElement("div",{className:"name"},"\u5546\u54c1"),i.createElement("div",{className:"content"},a&&a.filter((function(e){return e.name===l.product[0]})).map((function(e){return i.createElement(m.Z,{key:e.name,overlay:i.createElement("div",{style:{lineHeight:"26px"}},i.createElement("span",{style:{color:"#262626",fontWeight:"bold"}},"\u4f1a\u8bdd\u63d0\u53ca\u5546\u54c1"),i.createElement("br",null),"\u6240\u5c5e\u54c1\u724c\uff1a",e.brand),placement:"top"},i.createElement("span",null,e.name))})),a.some((function(e){return e.name===l.product[0]}))&&a.some((function(e){return e.name!==l.product[0]}))&&i.createElement("span",{className:"line"}),a&&a.filter((function(e){return e.name!==l.product[0]})).map((function(e){return i.createElement(m.Z,{key:e.name,overlay:i.createElement("div",{style:{lineHeight:"26px"}},i.createElement("span",{style:{color:"#262626",fontWeight:"bold"}},"\u4f1a\u8bdd\u63d0\u53ca\u5546\u54c1"),i.createElement("br",null),"\u6240\u5c5e\u54c1\u724c\uff1a",e.brand),placement:"top"},i.createElement("span",{className:"compare_product"},e.name))})))),i.createElement("div",{className:"concern"},i.createElement("div",{className:"name"},"\u5173\u6ce8\u70b9"),i.createElement("div",{className:"content"},r.map((function(e){var t=C.Fq[u.indexOf(e.aspect1)%20],a=e.aspectId===c;return i.createElement(m.Z,{key:e.aspect2,overlay:i.createElement("div",{style:{lineHeight:"26px",color:"#8c8c8c"}},i.createElement("span",null,"\u4e00\u7ea7\uff1a",i.createElement("span",{style:{color:"#262626",fontWeight:"bold"}},e.aspect1)),i.createElement("br",null),"\u4e8c\u7ea7\uff1a",i.createElement("span",{style:{color:"#262626",fontWeight:"bold"}},e.aspect2)),placement:"top"},i.createElement("span",{style:{borderColor:t,background:a?t:"#f7f8fa",color:a?"#f7f8fa":"#262626"},onClick:function(){return n._handleOnTagClick(e.aspectId,t)}},e.aspect2))})))),i.createElement("div",{className:"conversation"},i.createElement("h6",null,o),i.createElement("ul",{ref:function(e){return n.scrollRef=e}},t&&t.map((function(e){return"CUSTOMER"===e.type?n.renderLeftConversation(e):n.renderRightConversation(e)})))))},n._handleOnTagClick=function(e,t){n.setState({selAspectId:n.state.selAspectId===e?"":e,selAspectColor:t})},n.state={detailList:t.conversationDetail,selAspectId:"",selAspectColor:""},n}(0,o.Z)(t,e),t.getDerivedStateFromProps=function(e,t){return JSON.stringify(t.detailList)!==JSON.stringify(e.conversationDetail)?{detailList:e.conversationDetail,selAspectId:"",selAspectColor:""}:null};var a=t.prototype;return a.componentDidUpdate=function(e,t){var n=e.conversationDetail,a=this.props.conversationDetail;if(JSON.stringify(n)!==JSON.stringify(a)&&this.scrollToBottom(),t.selAspectId!==this.state.selAspectId&&this.state.selAspectId){var r=document.getElementById(this.state.selAspectId);r&&(this.scrollRef.scrollTop=r.offsetTop)}},a.scrollToBottom=function(){if(this.scrollRef){var e=this.scrollRef.scrollHeight-this.scrollRef.clientHeight;this.scrollRef.scrollTop=e>0?e:0}},a.render=function(){var e=this.props.conversationDetail;return i.createElement("div",{className:"conversation_detail"},void 0===e?i.createElement(v.Z,{paragraph:P.concat(P)}):e.length>0?this.renderDetail():i.createElement("div",{className:"noDate"},i.createElement("img",{style:{width:"70px"},src:n(9459),alt:""}),"\u6ca1\u6709\u6570\u636e..."))},t}(i.Component),R=function(e){function t(t){var n;return(n=e.call(this,t)||this).onSearch=function(e){n.props.saveValue({conversationFilterValue:e}).then((function(){return n.props.fetchConversationList({pageIndex:1})}))},n.onKeywordSearch=function(e){n.props.saveValue({keywords:e})},n.state={},n}return(0,o.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.style,n=e.conversationFilterValue,a=e.conversationFilter,o=a.source,s=a.shopName,l=a.waiter,c=a.typeList;return i.createElement("div",{className:"conversation_wrap",style:t||{}},i.createElement(S,(0,r.Z)({},this.props,{source:o,shopName:s,waiter:l,typeList:c,value:n,onSearch:this.onSearch,onKeywordSearch:this.onKeywordSearch})),i.createElement(I,this.props),i.createElement(_,(0,r.Z)({},this.props,{value:n})))},t}(i.Component),H=n(55609),O=n(64396),q=["loading"],V=O.Z.conversationHome,W=function(e){function t(t){var n;return(n=e.call(this,t)||this).fetchConversationList=function(e){n.props.fetchList({pageIndex:e.pageIndex})},t.save({filterParams:t.filter}),n.state={},n._event={fetchConversationList:n.fetchConversationList},n}(0,o.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this.props.filter;this.props.fetchConversationFilter({product:e.product}),this.props.fetchList({pageIndex:1,filterParams:e})},n.componentWillUnmount=function(){this.props.clearConversationList()},n.componentDidUpdate=function(e){var t=this;JSON.stringify(this.props.filterParams)!==JSON.stringify(this.props.filter)&&this.props.fetchList({pageIndex:1,filterParams:this.props.filter}),JSON.stringify(e.secondFilter)!==JSON.stringify(this.props.secondFilter)&&this.props.saveValue({conversationFilterValue:this.props.secondFilter}).then((function(){return t.props.fetchList({pageIndex:1,filterParams:t.props.filter})}))},n.render=function(){return i.createElement(R,(0,r.Z)({},this.props,this._event))},t}(i.Component);W.propTypes={filter:l().object,secondFilter:l().shape({source:l().array,shopName:l().array,waiter:l().array}),style:l().object};const A=(0,H.connect)((function(e){var t=e.loading,n=(0,a.Z)(e,q);return(0,r.Z)({},n[V],{fetchingConversationList:t.effects[V+"/fetchConversationList"]||!1,fetchingConversationDetail:t.effects[V+"/fetchConversationDetail"]||!1})}),(function(e){return{fetchList:function(t){return e({type:V+"/fetchConversationList",payload:t})},fetchConversationDetail:function(t){return e({type:V+"/fetchConversationDetail",payload:t})},fetchConversationFilter:function(t){return e({type:V+"/fetchConversationFilter",payload:t})},clearConversationList:function(t){return e({type:V+"/clearConversationList",payload:t})},save:function(t){return e({type:V+"/save",payload:t})},saveValue:function(t){return e({type:V+"/saveValue",payload:t})}}}))(W);var M=n(19586),K=function(e,t,n,a){return i.createElement("div",{className:"breadcrumb-left"},i.createElement("div",null,i.createElement("span",{onClick:function(){return history.back()}},t),i.createElement("span",null," /"),i.createElement("span",null,1===e&&""===a&&"\u300c"+n.join(" | ")+"\u300d\u5173\u6ce8\u70b9\u8be6\u60c5\u5206\u6790",1===e&&""!==a&&"\u300c"+a+"\u300d\u5173\u6ce8\u70b9\u8be6\u60c5\u5206\u6790",2===e&&t+"\u8be6\u60c5\u5206\u6790")),i.createElement("span",null,1===e&&""===a&&"\u300c"+n.join(" | ")+"\u300d\u5173\u6ce8\u70b9\u8be6\u60c5\u5206\u6790",1===e&&""!==a&&"\u300c"+a+"\u300d\u5173\u6ce8\u70b9\u8be6\u60c5\u5206\u6790",2===e&&t+"\u8be6\u60c5\u5206\u6790"))};const j=function(e){var t=e.isInitial,n=e.lineChartLoading,a=e.lineChartData,r=e.comparisonList,o=e.onProductFilterChange,s=e.treeChartLoading,l=e.treeChartData,c=e.fetchTreeChartData,p=e.onFilterChange,d=e.type,u=e.filterParams,m=e.filterParams,h=m.product,f=m.aspect,v=m.brand,g=e.initialDateFilter,y=e.selectedChart,C=e.selectedValue,w=e.selectedValue,k=w.source,L=w.shopName,S=w.waiter,b=e.onChartClick,D=e.getFilterRef,T=v;return void 0===v&&(T=""),i.createElement("div",{className:"yt-conversation-detail-wrapper"},i.createElement(M.Z,{ref:D,title:K(d,h,f,T),values:{dateFilter:g},showList:["time"],onChange:p}),i.createElement("div",{className:"co-content",id:"co-content"},i.createElement("div",null,i.createElement("div",null,i.createElement(E,{type:d,isInitial:t,loading:n,data:a.data,total:a.total,product:h[0]||"",aspect:f,brand:T,comparedProduct:a.comparedProduct,comparisonList:r,onChange:o,selectedChart:y,selectedValue:C.date,onChartClick:b})),i.createElement("div",null,i.createElement(N,{type:d,isInitial:t,product:h[0]||"",aspect:f,brand:T,loading:s,data:l.data,groupType:l.groupType,onGroupTypeChange:c,selectedChart:y,selectedValue:{waiter:S,shopName:L,source:k},onChartClick:b}))),h.length>0&&i.createElement(A,{style:{height:"710px"},filter:u,secondFilter:{source:k?[k]:[],shopName:L?[L]:[],waiter:S?[S]:[]},total:a.total})))};var B=n(35239),J=["loading"],U=O.Z.conversation.detail,G=function(e){function t(t){var n;return(n=e.call(this,t)||this)._handleInitDateFilter=function(e){n.setState({initialDateFilter:e})},n._handleFilterChange=function(e){var t=n.props.filterParams;n.props.fetchDatas({filterParams:(0,r.Z)({},t,e)})},n._handleOnProductFilterChange=function(e){n._handleChartClick({selectedChart:"line",selectedValue:{date:""}}),n.props.fetchLineChartData({comparedProduct:e.productCompare})},n._handleChartClick=function(e){var t=e.selectedChart,a=e.selectedValue,o=n.props,i=o.filterParams,s=o.filterParams.dateFilter,l=o.save,c=n.filter.getValue().dateFilter;if("line"===t){var p=a.date;l({selectedChart:t,selectedValue:a,filterParams:(0,r.Z)({},i,{dateFilter:(0,r.Z)({},s,{from:p||c.from,to:p||c.to,quickChoice:p?p+" - "+p:c.quickChoice})})})}else l({selectedChart:t,selectedValue:a})},n.state={initialDateFilter:{}},n.event={onFilterChange:n._handleFilterChange,onProductFilterChange:n._handleOnProductFilterChange,onChartClick:n._handleChartClick,getFilterRef:function(e){return n.filter=e}},n}(0,o.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this.props,t=e.location,n=t.state,a=t.pathname,r=e.fetchDatas,o=B.t.get(B.V.curProject).id,i=n.aspect,s=n.aspect1,l=n.aspect2,c=n.product,p=n.brand,d=n.shopName,u=n.queryType,m=n.waiter,h=n.typeList,f=n.source,v=n.dateFilter,g=n.productList,y=void 0===g?[]:g,C=n.position;r({projectId:o,queryType:u,filterParams:{aspect:i,aspect1:s,aspect2:l,product:c,brand:p,shopName:d,waiter:m,typeList:h,source:f,position:void 0===C?[]:C,dateFilter:v},type:a.includes("commodityAnalyze")?1:2,comparisonList:y?y.filter((function(e){return e!==c[0]})):[]}),this._handleInitDateFilter(n.dateFilter)},n.componentWillUnmount=function(){this.props.reset()},n.render=function(){return i.createElement(j,(0,r.Z)({},this.props,this.state,this.event))},t}(i.PureComponent);const z=(0,H.connect)((function(e){var t=e.loading,n=(0,a.Z)(e,J);return(0,r.Z)({},n[U],{lineChartLoading:t.effects[U+"/fetchLineChartData"]||!1,treeChartLoading:t.effects[U+"/fetchTreeChartData"]||!1})}),(function(e){return{fetchDatas:function(t){return e({type:U+"/fetchDatas",payload:t})},fetchLineChartData:function(t){return e({type:U+"/fetchLineChartData",payload:t})},fetchTreeChartData:function(t){return e({type:U+"/fetchTreeChartData",payload:t})},save:function(t){return e({type:U+"/save",payload:t})},reset:function(){return e({type:U+"/reset"})}}}))(G)},40086:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(87462),r=n(94578),o=n(67294),i=n(45697),s=n.n(i),l=function(e){function t(t){var n;return(n=e.call(this,t)||this).stop=function(e){e.stopPropagation(),e.nativeEvent.stopImmediatePropagation()},n._setEvent=function(e){return 0===e?{onMouseEnter:function(){n.setState({firstLiHover:!0})},onMouseLeave:function(){n.setState({firstLiHover:!1})}}:{}},n.setShowSelFalse=function(){n.setState({show:!1})},n.state={show:!1,firstSelected:!1},n}(0,r.Z)(t,e);var n=t.prototype;return n.changeShow=function(e){var t=this;this.state.show&&this.stop(e),setTimeout((function(){t.setState({show:!t.state.show})}),0)},n.componentDidMount=function(){window.addEventListener("click",this.setShowSelFalse)},n.componentWillUnmount=function(){window.removeEventListener("click",this.setShowSelFalse)},n.render=function(){var e=this,t=this.state.show,n=this.props,r=n.placeholder,i=n.list,s=n.value,l=n.onChange,c=n.style,p=n.partingLine,d=i[0]&&i[0].id===s.id;return o.createElement("div",{className:"chart-select",style:c||{}},o.createElement("div",{className:"select "+(p?"line":""),onClick:function(t){return e.changeShow(t)}},o.createElement("div",{className:"infor "+(t?"sel":"")},o.createElement("span",{className:"placeholder"},r),o.createElement("i",{className:"icon icon-cem_arrow-launches",style:{transform:t?"rotate(-180deg)":"",top:t?"3px":""}}))),t&&o.createElement("div",{className:"position-wrap"},o.createElement("div",{className:"selItem "+(this.state.firstLiHover||d?"selPadHover":""),onClick:function(t){return e.stop(t)}},o.createElement("div",{className:"wrap"},o.createElement("ul",null,i.length>0?i.map((function(t,n){return o.createElement("li",(0,a.Z)({className:t.id===s.id?"sel":"",key:n,onClick:function(){e.setShowSelFalse(),l&&l(t,n)}},e._setEvent(n)),o.createElement("span",null,t.name))})):o.createElement("div",{className:"noData"},"\u65e0\u6570\u636e"))))))},t}(o.Component);l.defaultProps={placeholder:"\u8bf7\u9009\u62e9",list:[{name:"\u5468",id:"week"},{name:"\u6708",id:"month"}],value:{}},l.propTypes={placeholder:s().oneOfType([s().string,s().element]),list:s().array,value:s().object,onChange:s().func,style:s().object,partingLine:s().bool}},95045:(e,t,n)=>{e.exports=n.p+"img/35ee9efeb09bc0840932.png"},92690:(e,t,n)=>{e.exports=n.p+"img/c0db547fdffcaf97d9a5.png"},1583:(e,t,n)=>{e.exports=n.p+"img/7697898a8d2c725f00c4.png"},9459:(e,t,n)=>{e.exports=n.p+"img/09db3121bded8afe3a6f.png"}}]);