(self.webpackChunkyunting=self.webpackChunkyunting||[]).push([[8224],{89125:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});const a=n.p+"html-35ee9e"},38174:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});const a=n.p+"html-c0db54"},7077:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});const a=n.p+"html-769789"},92342:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});const a=n.p+"html-09db31"},22120:(e,t,n)=>{"use strict";n.d(t,{R:()=>a});var a=[{id:"ENTRANCE_URL",name:"入口链接"},{id:"SESSION",name:"会话中"}]},8224:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>K});var n=o(37316),a=o.n(n),r=o(67154),c=o.n(r),i=o(85354),s=o.n(i),p=o(67294),S=o.n(p),t=o(45697),n=o.n(t),d=o(50976),r=o(93913),l=o.n(r),i=function(t){function e(e){var a=t.call(this,e)||this;return a.inputChange=function(e){e.stopPropagation(),e.nativeEvent.stopImmediatePropagation(),a.setState({searchKeyWords:e.target.value,isShow:!1})},a.keywordChange=function(e){e.stopPropagation(),e.nativeEvent.stopImmediatePropagation(),"keydown"===e.type&&13===e.keyCode&&a.handleCompareClick(a.props.options.find(function(e){return e.toLocaleLowerCase()===a.state.searchKeyWords.trim().toLocaleLowerCase()})),a.setState({isShow:!1})},a._setPadShowFalse=function(){a.state.show&&a.setState({show:!1})},a._handleOnClick=function(e){var t=a.state.show;t&&(e.stopPropagation(),e.nativeEvent.stopImmediatePropagation()),setTimeout(function(){a.setState({show:!t})},0)},a.handleProductClick=function(e){e.stopPropagation(),e.nativeEvent.stopImmediatePropagation();e=a.props.onChange;a.state.isDisabled||e({productCompare:""}),a.setState({productTitle:"无",searchKeyWords:"",compareTitle:"请选择"})},a.handleCompareClick=function(t){var e=a.props,n=e.onChange,e=e.objName;a.props.options.filter(function(e){return e===t});a.setState({isShow:!0,productTitle:t,compareTitle:t}),t.disabled||n(e?((n={})[e]=t,n):t)},a.state={show:!1,firstLiHover:!1,isDisabled:!1,searchKeyWords:"",isShow:!0,productTitle:"无",compareTitle:"请选择"},a}s()(e,t);var n=e.prototype;return n.componentDidMount=function(){window.addEventListener("click",this._setPadShowFalse)},n.componentWillUnmount=function(){window.removeEventListener("click",this._setPadShowFalse)},n.render=function(){var n=this,e=this.state,t=e.show,a=e.searchKeyWords,r=e.isShow,o=e.productTitle,i=e.compareTitle,s=this.props,l=s.objName,c=s.preTitle,e=s.sufTitle,e=s.showTitle,s=void 0===e||e,e=this.props.options,e=this.searchList!==[]?this.searchList:e.filter(function(e){return e.value!==o});return S().createElement("div",{className:"co-single-select-button-wrapper",onClick:this._handleOnClick},S().createElement("span",{className:"button-trigger "+(t?"sel":"")},s&&S().createElement(S().Fragment,null,c&&S().createElement("span",{className:"pre-title"}," ",c,"： "),S().createElement("span",{className:"button-title"}," ",i," ")),S().createElement("i",{className:"icon-cem_arrow-launches",style:{transform:t?"rotate(-180deg)":""}})),S().createElement("div",{className:"button-panel "+(t?"active":"")},"productCompare"===l&&S().createElement("div",{className:"search"},S().createElement("input",{value:a,placeholder:"请输入关键词",type:"text",onChange:this.inputChange,onClick:function(e){e.stopPropagation(),e.nativeEvent.stopImmediatePropagation()},onKeyDown:this.keywordChange}),r&&e&&S().createElement("i",{className:"icon-cem_search",onClick:function(e){e.stopPropagation(),e.nativeEvent.stopImmediatePropagation(),n.handleCompareClick(n.props.options.find(function(e){return e.toLocaleLowerCase()===n.state.searchKeyWords.trim().toLocaleLowerCase()}))}}),!r&&""!==a&&e&&S().createElement("i",{className:"icon-cem_close-window",onClick:function(e){e.stopPropagation(),e.nativeEvent.stopImmediatePropagation(),n.setState({searchKeyWords:"",isShow:!0})}})),S().createElement("div",{style:{overflow:"auto",maxHeight:206,marginTop:16}},r&&"productCompare"===l&&S().createElement("p",{className:"product"},o,"无"!==o&&S().createElement("i",{className:"icon-cem_cancel",onClick:this.handleProductClick})),e.map(function(e,t){return S().createElement("div",{className:"panel-item",key:e,onClick:function(){n.handleCompareClick(e)},style:{display:e===o?"none":"block"}},e)}))))},l()(e,[{key:"searchList",get:function(){var t=this;return this.props.options.filter(function(e){return-1!==e.toLocaleLowerCase().indexOf(t.state.searchKeyWords.trim().toLocaleLowerCase())})}}]),e}(S().PureComponent);i.propTypes={onChange:n().func.isRequired,options:n().array.isRequired,objName:n().string.isRequired,preTitle:n().string,sufTitle:n().string,showTitle:n().bool};const u=i;var m=o(43036),h=o(31705),f=o(94644),v=o(30133),g=o(92360),y=o(61409),C=o(70715),b=function(a){function e(){for(var c,e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(c=a.call.apply(a,[this].concat(t))||this).handleDownloadChart=function(){c.instance&&(0,f._v)(c.instance,c.title)},c.handleDownloadExcel=function(){var e=c.props,r=e.data,t=e.product,e=e.comparedProduct,o=[];r.forEach(function(e){for(var t=0;t<e.dateList.length;t++){var n=e.dateList[t],a=n.date,n=n.count;o.push(1<r.length?[a,n,r[1].dateList[t].count]:[a,n])}}),o.splice(0,0,1<r.length?["日期",t,e]:["日期",t]),(0,f.aT)([o],c.title)},c.handleClickIcon=function(){var e=c.props,t=e.type,n=e.product,a=e.aspect,r=e.brand,o=void 0,i=void 0,s=void 0,e=a[0],a=a[1];1===t?(o="/conversation/concernAnalyze",""!==r&&(s={id:"brand",name:"品牌",serverKey:"brand",values:{id:r,name:r,values:r}}),(e||a)&&(i={id:"aspect",name:"关注点",serverKey:"aspect",type:"cascade",values:[{id:a?"":e,name:a?"":e,values:a?[{id:a,name:a}]:[]}]})):2===t&&(o="/conversation/commodityAnalyze",i={id:"product",name:"分析商品",serverKey:"product",type:"radio",values:n}),y.mW.push({pathname:o,state:{defHeader:i?[i]:void 0,from:"detail",chartValue:s}})},c.setOption=function(){var e=c.props,t=e.type,n=e.loading,a=e.total,r=e.data,o=e.product,i=e.comparedProduct,s=e.selectedValue,l=e.selectedChart;!n&&0<r.length&&r[0].dateList&&0<r[0].dateList.length&&(r={title:{text:c.title,lineHeight:20,left:0,top:0},graphic:{type:"text",left:0,top:48,cursor:"default",style:{text:a,fontSize:24,lineHeight:32}},tooltip:{trigger:"axis",formatter:function(e){return e[0].name+"<br>"+e.map(function(e){return""+e.marker+e.seriesName+"："+e.value}).join("<br>")}},legend:{show:1===t,icon:C.W4.lineRing,left:0,top:90,itemGap:16,itemHeight:12,textStyle:{lineHeight:18}},grid:{show:!1,left:46,right:46,top:1===t?130:92},xAxis:{type:"category",boundaryGap:!1,data:r[0].dateList&&0<r[0].dateList.length?r[0].dateList.map(function(e){return e.date}):[]},yAxis:{type:"value"},series:r.map(function(n,e){return{name:0===e?o:i,type:"line",smooth:!0,showSymbol:!0,lineStyle:{color:n.name===o?"line"!==l||"line"===l&&!s?"#1574B3":"#BFBFBF":"#D1B425"},data:n.dateList.map(function(e){var t=e.date;return{date:t,value:e.count,itemStyle:{color:n.name===o?"line"===l&&s&&s!==t?"#BFBFBF":"#1574B3":"#D1B425"},symbolSize:6}})}})},c.instance&&c.instance.clear(),c.instance&&c.instance.setOption(r))},c.handleClickChart=function(e){var t=e.name,n=e.seriesName,a=c.props,r=a.product,e=a.selectedValue,a=a.onChartClick;n===r&&a({selectedChart:"line",selectedValue:{date:e===t?"":t}})},c}s()(e,a);var t=e.prototype;return t.componentDidMount=function(){var e=this.props,t=e.product,n=e.aspect,a=e.type,e=e.brand;this.title=(1===a?t:"")+"「"+(1<n.length?n.join(" | "):n[0]||e)+"」"+(1===a?"":t)+(1===a?"关注量":"会话量")+"及走势",this.setOption()},t.shouldComponentUpdate=function(e,t){return e.isInitial!==this.props.isInitial||(e.loading!==this.props.loading||(JSON.stringify(e.data)!==JSON.stringify(this.props.data)||(e.comparedProduct!==this.props.comparedProduct||(e.selectedChart!==this.props.selectedChart||e.selectedValue!==this.props.selectedValue))))},t.componentDidUpdate=function(){var e=this.props,t=e.product,n=e.aspect,a=e.type,e=e.brand;this.title=(1===a?t:"")+"「"+(1<n.length?n.join(" | "):n[0]||e)+"」"+(1===a?"":t)+(1===a?"关注量":"会话量")+"及走势",this.setOption()},t.render=function(){var t=this,e=this.props,n=e.loading,a=e.isInitial,r=e.aspect,o=e.brand,i=(e.comparedProduct,e.comparisonList),s=e.data,l=e.onChange;e.onChartClick,e.productCompare;return S().createElement("div",{className:"line-chart-wrapper"},a?S().createElement(v.Z,null):n?S().createElement(g.Loading,{loading:n},S().createElement("div",{style:{height:"343px"}})):0<s.length&&s[0].dateList&&0<s[0].dateList.length?S().createElement(d.Z,{option:{},loading:n,theme:"yunting_multi_color",style:{width:"100%",height:"343px"},onChartReady:function(e){return t.instance=e},onEvents:{click:this.handleClickChart}}):S().createElement("div",{className:"empty-block"},"暂无数据"),S().createElement("div",{className:"appendix"},i&&0<i.length&&S().createElement(p.Fragment,null,S().createElement("i",null,S().createElement(u,c()({preTitle:"对比商品",sufTitle:"请选择",onChange:l,objName:"productCompare",options:i},this.props)))),S().createElement(m.Z,{overlay:"查看「"+(1<r.length?r.join(" | "):r[0]||o)+" 」更多信息",placement:"top"},S().createElement("i",{className:"icon-cem_refresh-more",onClick:this.handleClickIcon})),S().createElement(h.Z,{onDownChartClick:function(){return t.handleDownloadChart()},onDownExcelClick:function(){return t.handleDownloadExcel()}})))},e}(p.Component);b.propTypes={type:n().number.isRequired,loading:n().bool.isRequired,isInitial:n().bool.isRequired,product:n().string.isRequired,total:n().number.isRequired,data:n().array.isRequired,aspect:n().array.isRequired,brand:n().string,comparedProduct:n().string,comparisonList:n().array,onChange:n().func,onChartClick:n().func,selectedChart:n().string,selectedValue:n().string};var E=o(40086),D=function(a){function e(){for(var s,e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(s=a.call.apply(a,[this].concat(t))||this).handleDownloadChart=function(){s.instance&&(0,f._v)(s.instance,s.title)},s.handleDownloadExcel=function(){var e=s.props,t=e.groupType,e=e.data,r=[];e.forEach(function(e){for(var t=e.name,n=e.children,a=0;a<n.length;a++)r.push([t,n[a].name,n[a].count])}),r.splice(0,0,["平台",t.name,"会话量"]),(0,f.aT)([r],s.title)},s.handleSwitchGroupType=function(e){var t=s.props,n=t.onGroupTypeChange,t=t.onChartClick;n&&n({groupType:e}),t&&t({selectedChart:"",selectedValue:{source:"",shopName:"",waiter:""}})},s.setOption=function(){var e=s.props,a=e.data,t=e.loading,r=e.selectedChart,e=e.selectedValue,o=e.waiter,i=e.shopName;!t&&0<a.length&&function(){for(var n=JSON.parse(JSON.stringify(a)),e=0;e<n.length;e++)!function(t){n[t].value=n[t].count,n[t].children.forEach(function(e){e.value=e.count,e.source=n[t].source,e.itemStyle={color:"treeMap"!==r||"treeMap"===r&&(o===e.name||i===e.name)?C.Fq[t%C.Fq.length]:"#8C8C8C"}})}(e);var t={title:{text:s.title,lineHeight:20,left:0,top:0},tooltip:{trigger:"item",formatter:function(e){var t=e.marker,n=e.name,e=e.value;if(n)return""+t+n+"："+e}},series:[{type:"treemap",top:80,left:20,right:20,bottom:0,label:{formatter:"{b}\n{@c}",lineHeight:14},nodeClick:!1,silent:!1,roam:!1,breadcrumb:{show:!1},levels:[{itemStyle:{normal:{borderWidth:0,gapWidth:2}}},{itemStyle:{normal:{borderWidth:0,gapWidth:2}}}],data:n}]};s.instance&&s.instance.clear(),s.instance&&s.instance.setOption(t)}()},s.handleClickChart=function(e){var t=e.data,n=t.name,a=t.source,r=s.props,o=r.groupType.id,e=r.selectedValue,t=e.waiter,e=e.shopName;(0,r.onChartClick)({selectedChart:e===n||t===n?"":"treeMap",selectedValue:{source:"SHOP"===o&&e===n||"WAITER"===o&&t===n?"":a,waiter:"WAITER"===o&&t!==n?n:"",shopName:"SHOP"===o&&e!==n?n:""}})},s}s()(e,a);var t=e.prototype;return t.componentDidMount=function(){var e=this.props,t=e.type,n=e.product,a=e.aspect,e=e.brand;this.title=(1===t?n:"")+"「"+(1<a.length?a.join(" | "):a[0]||e)+"」"+(1===t?"":n)+(1===t?"关注点":"会话量")+"分布",this.setOption()},t.shouldComponentUpdate=function(e,t){return e.type!==this.props.type||(e.loading!==this.props.loading||(e.isInitial!==this.props.isInitial||(JSON.stringify(e.data)!==JSON.stringify(this.props.data)||(e.selectedChart!==this.props.selectedChart||e.selectedValue!==this.props.selectedValue))))},t.componentDidUpdate=function(){var e=this.props,t=e.type,n=e.product,a=e.aspect,e=e.brand;this.title=(1===t?n:"")+"「"+(1<a.length?a.join(" | "):a[0]||e)+"」"+(1===t?"":n)+(1===t?"关注点":"会话量")+"分布",this.setOption()},t.render=function(){var t=this,e=this.props,n=e.loading,a=e.isInitial,r=e.data,o=e.groupType,e=r.map(function(e){return e.name}),o={list:[{name:"店铺",id:"SHOP"},{name:"客服",id:"WAITER"}],value:o,placeholder:o.name,onChange:this.handleSwitchGroupType};return S().createElement("div",{className:"concern-analyze-treemap-wrapper"},a?S().createElement(v.Z,null):n?S().createElement(g.Loading,{loading:n},S().createElement("div",{style:{height:"343px"}})):0<r.length?S().createElement(p.Fragment,null,S().createElement(d.Z,{option:{},loading:n,theme:"yunting_multi_color",style:{width:"100%",height:"343px"},onChartReady:function(e){return t.instance=e},onEvents:{click:this.handleClickChart}}),S().createElement("div",{className:"legend"},e&&e.map(function(e,t){return S().createElement(p.Fragment,{key:e},S().createElement("span",{style:{backgroundColor:C.Fq[t%C.Fq.length]}}),S().createElement("span",null,e))}))):S().createElement("div",{className:"empty-block"},"暂无数据"),S().createElement("div",{className:"appendix"},S().createElement(E.Z,o),S().createElement(h.Z,{onDownChartClick:function(){return t.handleDownloadChart()},onDownExcelClick:function(){return t.handleDownloadExcel()}})))},e}(p.Component);D.propTypes={loading:n().bool.isRequired,type:n().number.isRequired,product:n().string.isRequired,aspects:n().array,brand:n().string,data:n().array.isRequired,groupType:n().object.isRequired,onGroupTypeChange:n().func.isRequired,selectedChart:n().string,selectedValue:n().object};var w=o(53754),N=o(22120),k=function(t){function e(e){var l=t.call(this,e)||this;return l.handleMultiSelectChange=function(e){l.setState(c()({},e),function(){l.handleSearch()})},l.handleInput=function(e){l.setState({customer:e})},l.handleInputKey=function(e){l.setState({keywords:e})},l.handleKeyDown=function(e){e.stopPropagation(),13===e.keyCode&&l.handleSearch()},l.handleSearch=function(){var e=l.state,t=e.customer,n=e.keywords,a=e.source,r=e.shopName,o=e.typeList,i=e.waiter,s=e.position,e=l.props.onSearch;e&&e({keywords:[n],customer:[t],source:a,shopName:r,typeList:o,waiter:i,position:s})},l.state={customer:"",keywords:"",source:[],shopName:[],typeList:[],waiter:[],position:[]},l}return s()(e,t),e.prototype.render=function(){var t=this,e=this.props,n=e.source,a=e.shopName,r=e.typeList,o=e.waiter,e=e.value;return S().createElement("div",{className:"conversation_header"},S().createElement("div",{className:"dialog-list-header"},S().createElement("span",null,"会话"),S().createElement("div",null,S().createElement(w.Z,{title:"平台",type:1,options:n&&n.map(function(e){return{id:e.id,name:e.name}}),style:{backgroundColor:"#fff",color:"#262626"},onChange:function(e){return t.handleMultiSelectChange({source:e})},value:e.source}),S().createElement(w.Z,{title:"店铺",type:1,options:a&&a.map(function(e){return{id:e,name:e}}),onChange:function(e){return t.handleMultiSelectChange({shopName:e})},value:e.shopName}),S().createElement(w.Z,{title:"客服类型",type:1,options:r&&r.map(function(e){return{id:e.id,name:e.name}}),onChange:function(e){return t.handleMultiSelectChange({typeList:e})},value:e.typeList}),S().createElement(w.Z,{title:"客服",type:1,options:o&&o.map(function(e){return{id:e,name:e}}),onChange:function(e){return t.handleMultiSelectChange({waiter:e})},value:e.waiter}),S().createElement("div",{className:"con-position"},S().createElement(w.Z,{title:"会话位置",type:1,options:N.R,onChange:function(e){return t.handleMultiSelectChange({position:e})},value:e.position}),S().createElement(m.Z,{placement:"top",overlay:"由于客户从某个商品链接进入阿里旺旺等咨询聊天窗口后，不一定是咨询该商品。为了提高业务分析的灵活性，这里将“商品”在会话中的位置做区分，供用户切换",overlayClassName:"restricted-width-pop"},S().createElement("i",{className:"icon-cem_problem-new"}))),S().createElement(g.Input,{ref:function(e){return t.input=e},icon:"search",placeholder:"请输入客户名称",onChange:this.handleInput,onIconClick:this.handleSearch,onKeyDown:this.handleKeyDown}),S().createElement(g.Input,{ref:function(e){return t.keywordsinput=e},icon:"search",placeholder:"请输入关键词",onChange:this.handleInputKey,onIconClick:this.handleSearch,onKeyDown:this.handleKeyDown}))))},e}(p.Component);k.propTypes={source:n().array.isRequired,shopName:n().array.isRequired,waiter:n().array.isRequired,typeList:n().array.isRequired,onSearch:n().func.isRequired};var L=o(30381),T=["50%","60%","70%","80%","60%","0"],I=o(89125),P=function(t){function e(e){var s=t.call(this,e)||this;return s.handelListClick=function(e){s.props.fetchConversationDetail({group:e.group})},s.loadMore=function(e){var t=s.listWrap,n=t.scrollTop,a=t.offsetHeight,r=t.scrollHeight,o=s.props,i=o.conversationList,t=o.conversationListTotal,o=o.pageIndex;s.setState({listScrollBottom:r-n-a}),30<r-n-a||s.props.fetchingConversationList||i.length>=t||s.props.fetchConversationList({pageIndex:o+1})},s.formatContent=function(e){var t=s.escape2Html(s.escape2Html(e)),e=document.createElement("div");return e.innerHTML=t,e.innerText},s.escape2Html=function(e){var n={lt:"<",gt:">",nbsp:" ",amp:"&",quot:'"'};return e&&e.replace(/&(lt|gt|nbsp|amp|quot);/gi,function(e,t){return n[t]})},s.renderContent=function(){var e=s.state.listScrollBottom,t=s.props,n=t.conversationList,a=t.conversationListTotal,r=t.currentDisplayGroup;t.fetchingConversationList;return S().createElement("div",{className:"loading"},S().createElement("ul",{ref:function(e){return s.listWrap=e},onScroll:s.loadMore},0<n.length?n.map(function(e){return S().createElement("li",{key:e.id,className:e.group===r?"sel":"",onClick:function(){return s.handelListClick(e)}},S().createElement("img",{src:e.img||I,alt:"数据源"}),S().createElement("div",{className:"detail_wrap"},S().createElement("div",{className:"top"},S().createElement(m.Z,{overlay:"客服",placement:"top",mouseEnterDelay:1},S().createElement("p",{className:"shop"},e.shopName+"："+e.serviceName)),S().createElement(m.Z,{overlay:"会话创建时间",placement:"top",mouseEnterDelay:1},S().createElement("span",{className:"time"},L(e.createdTime).format("MM-DD HH:mm")))),S().createElement(m.Z,{overlay:""!==s.formatContent(e.lastSession)?s.formatContent(e.lastSession):"**无有意义内容**",placement:"top",mouseEnterDelay:1},S().createElement("div",{className:"last_cvst"},""!==s.formatContent(e.lastSession)?s.formatContent(e.lastSession):"**无有意义内容**")),S().createElement(m.Z,{overlay:"用户名",placement:"top",mouseEnterDelay:1},S().createElement("div",{className:"bot"},"— "+e.userName))))}):S().createElement("div",{className:"noDate"},S().createElement("img",{style:{width:"70px"},src:o(92342),alt:""}),"没有数据...")),S().createElement("div",{className:"conversation_bottom"},S().createElement("span",null,"共 ",S().createElement("span",null,a)," 项"),S().createElement("div",{className:"more"},S().createElement("p",{style:{opacity:s.props.fetchingConversationList?1:0}},"加载更多数据中..."),S().createElement("p",{style:{opacity:n.length>=a&&e<30?1:0}},"没有更多数据..."))))},s.state={listScrollBottom:100},s}s()(e,t);var n=e.prototype;return n.componentDidMount=function(){},n.render=function(){var e=this.props.conversationList;return S().createElement("div",{className:"conversation_list"},void 0===e?S().createElement(v.Z,{paragraph:T.concat(T.concat(T))}):this.renderContent())},e}(S().Component),F=["50%","60%","70%","80%","60%","0"],_=o(30381),R=o(38174),x=o(7077),H=function(t){function e(e){var c=t.call(this,e)||this;return c.formatContent=function(e){var t=c.escape2Html(c.escape2Html(e)),e=document.createElement("div");return e.innerHTML=t,e.innerText.trim()},c.escape2Html=function(e){var n={lt:"<",gt:">",nbsp:" ",amp:"&",quot:'"'};return e&&e.replace(/&(lt|gt|nbsp|amp|quot);/gi,function(e,t){return n[t]})},c.renderLeftConversation=function(e){var t=c.props,n=t.value,a=t.detailAspectKeywordList,t=c.state,r=t.selAspectColor,o=t.selAspectId,t=a&&a[e.id]||[],i=c.formatContent(e.content)||"";return n.keywords&&0<n.keywords.length&&(a=new RegExp(n.keywords,"ig"),i=i.replace(a,'<span style="background: #e9ccc8; color: #f0f2f5;">'+n.keywords.toString()+"</span>")),!o||(n=t.find(function(e){return e.aspectId===o}))&&n.keywords.forEach(function(e){var t=new RegExp(e.highLightWord,"ig");i=i.replace(t,'<span style="background: '+r+'; color: #f0f2f5;">'+e.highLightWord+"</span>")}),S().createElement("li",{className:"left",key:e.id},S().createElement("img",{src:e.img||x,alt:"头像"}),S().createElement("div",{className:"detail_wrap"},S().createElement("div",{className:"top"},S().createElement("p",{className:"shop"},e.name),S().createElement("span",{className:"time",style:{marginLeft:8}},"("+_(e.ctime).format("HH:mm:ss")+")"),t.map(function(e){e=e.aspectId;return S().createElement("span",{id:e,key:e,style:{position:"absolute"}})})),S().createElement("div",{className:"bot",dangerouslySetInnerHTML:{__html:i}})))},c.renderRightConversation=function(e){var t=c.props,n=t.value,a=t.detailAspectKeywordList,t=c.state,r=t.selAspectId,o=t.selAspectColor,t=a&&a[e.id]||[],i=c.formatContent(e.content)||"";return n.keywords&&0<n.keywords.length&&(a=new RegExp(n.keywords,"ig"),i=i.replace(a,'<span style="background: #e9ccc8; color: #f0f2f5;">'+n.keywords.toString()+"</span>")),!r||(n=t.find(function(e){return e.aspectId===r}))&&n.keywords.forEach(function(e){var t=new RegExp(e.highLightWord,"ig");i=i.replace(t,'<span style="background: '+o+'; color: #f0f2f5;">'+e.highLightWord+"</span>")}),S().createElement("li",{className:"right",key:e.id},S().createElement("div",{className:"img_wrap"},S().createElement("img",{src:e.img||R,alt:"头像"}),S().createElement("div",{className:"waiter_type"},e.saleType)),S().createElement("div",{className:"detail_wrap"},S().createElement("div",{className:"top"},S().createElement("span",{className:"time",style:{marginRight:8}},"("+_(e.ctime).format("HH:mm:ss")+")"),S().createElement("p",{className:"shop"},e.name),t.map(function(e){e=e.aspectId;return S().createElement("span",{id:e,key:e,style:{position:"absolute"}})})),S().createElement("div",{className:"bot",dangerouslySetInnerHTML:{__html:i}})))},c.renderDetail=function(){var e=c.props,t=e.conversationDetail,n=e.detailProduct,a=e.detailAspect,r=e.conversationStartTime,o=e.fetchingConversationDetail,i=e.filter,s=c.state.selAspectId,e=t.filter(function(e){return"SERVER"===e.type&&""!==e.name}),e=e[0]?e[0].name:"",l=[];return a.forEach(function(e){e.aspect1&&!l.includes(e.aspect1)&&l.push(e.aspect1)}),S().createElement(g.Loading,{className:"loading",loading:o},S().createElement("h2",null,e),S().createElement("div",{className:"commodity"},S().createElement("div",{className:"name"},"商品"),S().createElement("div",{className:"content"},n&&n.filter(function(e){return e.name===i.product[0]}).map(function(e){return S().createElement(m.Z,{key:e.name,overlay:S().createElement("div",{style:{lineHeight:"26px"}},S().createElement("span",{style:{color:"#262626",fontWeight:"bold"}},"会话提及商品"),S().createElement("br",null),"所属品牌：",e.brand),placement:"top"},S().createElement("span",null,e.name))}),n.some(function(e){return e.name===i.product[0]})&&n.some(function(e){return e.name!==i.product[0]})&&S().createElement("span",{className:"line"}),n&&n.filter(function(e){return e.name!==i.product[0]}).map(function(e){return S().createElement(m.Z,{key:e.name,overlay:S().createElement("div",{style:{lineHeight:"26px"}},S().createElement("span",{style:{color:"#262626",fontWeight:"bold"}},"会话提及商品"),S().createElement("br",null),"所属品牌：",e.brand),placement:"top"},S().createElement("span",{className:"compare_product"},e.name))}))),S().createElement("div",{className:"concern"},S().createElement("div",{className:"name"},"关注点"),S().createElement("div",{className:"content"},a.map(function(e){var t=C.Fq[l.indexOf(e.aspect1)%20],n=e.aspectId===s;return S().createElement(m.Z,{key:e.aspect2,overlay:S().createElement("div",{style:{lineHeight:"26px",color:"#8c8c8c"}},S().createElement("span",null,"一级：",S().createElement("span",{style:{color:"#262626",fontWeight:"bold"}},e.aspect1)),S().createElement("br",null),"二级：",S().createElement("span",{style:{color:"#262626",fontWeight:"bold"}},e.aspect2)),placement:"top"},S().createElement("span",{style:{borderColor:t,background:n?t:"#f7f8fa",color:n?"#f7f8fa":"#262626"},onClick:function(){return c._handleOnTagClick(e.aspectId,t)}},e.aspect2))}))),S().createElement("div",{className:"conversation"},S().createElement("h6",null,r),S().createElement("ul",{ref:function(e){return c.scrollRef=e}},t&&t.map(function(e){return"CUSTOMER"===e.type?c.renderLeftConversation(e):c.renderRightConversation(e)}))))},c._handleOnTagClick=function(e,t){c.setState({selAspectId:c.state.selAspectId===e?"":e,selAspectColor:t})},c.state={detailList:e.conversationDetail,selAspectId:"",selAspectColor:""},c}s()(e,t),e.getDerivedStateFromProps=function(e,t){return JSON.stringify(t.detailList)!==JSON.stringify(e.conversationDetail)?{detailList:e.conversationDetail,selAspectId:"",selAspectColor:""}:null};var n=e.prototype;return n.componentDidUpdate=function(e,t){var n=e.conversationDetail,e=this.props.conversationDetail;JSON.stringify(n)!==JSON.stringify(e)&&this.scrollToBottom(),t.selAspectId===this.state.selAspectId||!this.state.selAspectId||(t=document.getElementById(this.state.selAspectId))&&(this.scrollRef.scrollTop=t.offsetTop)},n.scrollToBottom=function(){var e;this.scrollRef&&(e=this.scrollRef.scrollHeight-this.scrollRef.clientHeight,this.scrollRef.scrollTop=0<e?e:0)},n.render=function(){var e=this.props.conversationDetail;return S().createElement("div",{className:"conversation_detail"},void 0===e?S().createElement(v.Z,{paragraph:F.concat(F)}):0<e.length?this.renderDetail():S().createElement("div",{className:"noDate"},S().createElement("img",{style:{width:"70px"},src:o(92342),alt:""}),"没有数据..."))},e}(S().Component),O=function(n){function e(e){var t=n.call(this,e)||this;return t.onSearch=function(e){t.props.saveValue({conversationFilterValue:e}).then(function(){return t.props.fetchConversationList({pageIndex:1})})},t.onKeywordSearch=function(e){t.props.saveValue({keywords:e})},t.state={},t}return s()(e,n),e.prototype.render=function(){var e=this.props,t=e.style,n=e.conversationFilterValue,a=e.conversationFilter,r=a.source,o=a.shopName,e=a.waiter,a=a.typeList;return S().createElement("div",{className:"conversation_wrap",style:t||{}},S().createElement(k,c()({},this.props,{source:r,shopName:o,waiter:e,typeList:a,value:n,onSearch:this.onSearch,onKeywordSearch:this.onKeywordSearch})),S().createElement(P,this.props),S().createElement(H,c()({},this.props,{value:n})))},e}(S().Component),t=o(55609),r=o(64396),q=r.Z.conversationHome,i=function(n){function e(e){var t=n.call(this,e)||this;return t.fetchConversationList=function(e){t.props.fetchList({pageIndex:e.pageIndex})},e.save({filterParams:e.filter}),t.state={},t._event={fetchConversationList:t.fetchConversationList},t}s()(e,n);var t=e.prototype;return t.componentDidMount=function(){var e=this.props.filter;this.props.fetchConversationFilter({product:e.product}),this.props.fetchList({pageIndex:1,filterParams:e})},t.componentWillUnmount=function(){this.props.clearConversationList()},t.componentDidUpdate=function(e){var t=this;JSON.stringify(this.props.filterParams)!==JSON.stringify(this.props.filter)&&this.props.fetchList({pageIndex:1,filterParams:this.props.filter}),JSON.stringify(e.secondFilter)!==JSON.stringify(this.props.secondFilter)&&this.props.saveValue({conversationFilterValue:this.props.secondFilter}).then(function(){return t.props.fetchList({pageIndex:1,filterParams:t.props.filter})})},t.render=function(){return S().createElement(O,c()({},this.props,this._event))},e}(p.Component);i.propTypes={filter:n().object,secondFilter:n().shape({source:n().array,shopName:n().array,waiter:n().array}),style:n().object};const V=(0,t.connect)(function(e){var t=e.loading,e=a()(e,["loading"]);return c()({},e[q],{fetchingConversationList:t.effects[q+"/fetchConversationList"]||!1,fetchingConversationDetail:t.effects[q+"/fetchConversationDetail"]||!1})},function(t){return{fetchList:function(e){return t({type:q+"/fetchConversationList",payload:e})},fetchConversationDetail:function(e){return t({type:q+"/fetchConversationDetail",payload:e})},fetchConversationFilter:function(e){return t({type:q+"/fetchConversationFilter",payload:e})},clearConversationList:function(e){return t({type:q+"/clearConversationList",payload:e})},save:function(e){return t({type:q+"/save",payload:e})},saveValue:function(e){return t({type:q+"/saveValue",payload:e})}}})(i);var W=o(19586);const A=function(e){var t=e.isInitial,n=e.lineChartLoading,a=e.lineChartData,r=e.comparisonList,o=e.onProductFilterChange,i=e.treeChartLoading,s=e.treeChartData,l=e.fetchTreeChartData,c=e.onFilterChange,p=e.type,d=e.filterParams,u=e.filterParams,m=u.product,h=u.aspect,f=u.brand,v=e.initialDateFilter,g=e.selectedChart,y=e.selectedValue,C=e.selectedValue,E=C.source,w=C.shopName,N=C.waiter,k=e.onChartClick,L=e.getFilterRef,u=void 0===f?"":f;return S().createElement("div",{className:"yt-conversation-detail-wrapper"},S().createElement(W.Z,{ref:L,title:(C=p,e=m,f=h,L=u,S().createElement("div",{className:"breadcrumb-left"},S().createElement("div",null,S().createElement("span",{onClick:function(){return history.back()}},e),S().createElement("span",null," /"),S().createElement("span",null,1===C&&""===L&&"「"+f.join(" | ")+"」关注点详情分析",1===C&&""!==L&&"「"+L+"」关注点详情分析",2===C&&e+"详情分析")),S().createElement("span",null,1===C&&""===L&&"「"+f.join(" | ")+"」关注点详情分析",1===C&&""!==L&&"「"+L+"」关注点详情分析",2===C&&e+"详情分析"))),values:{dateFilter:v},showList:["time"],onChange:c}),S().createElement("div",{className:"co-content",id:"co-content"},S().createElement("div",null,S().createElement("div",null,S().createElement(b,{type:p,isInitial:t,loading:n,data:a.data,total:a.total,product:m[0]||"",aspect:h,brand:u,comparedProduct:a.comparedProduct,comparisonList:r,onChange:o,selectedChart:g,selectedValue:y.date,onChartClick:k})),S().createElement("div",null,S().createElement(D,{type:p,isInitial:t,product:m[0]||"",aspect:h,brand:u,loading:i,data:s.data,groupType:s.groupType,onGroupTypeChange:l,selectedChart:g,selectedValue:{waiter:N,shopName:w,source:E},onChartClick:k}))),0<m.length&&S().createElement(V,{style:{height:"710px"},filter:d,secondFilter:{source:E?[E]:[],shopName:w?[w]:[],waiter:N?[N]:[]},total:a.total})))};var M=o(35239),Z=r.Z.conversation.detail,r=function(t){function e(e){var s=t.call(this,e)||this;return s._handleInitDateFilter=function(e){s.setState({initialDateFilter:e})},s._handleFilterChange=function(e){var t=s.props.filterParams;s.props.fetchDatas({filterParams:c()({},t,e)})},s._handleOnProductFilterChange=function(e){s._handleChartClick({selectedChart:"line",selectedValue:{date:""}}),s.props.fetchLineChartData({comparedProduct:e.productCompare})},s._handleChartClick=function(e){var t=e.selectedChart,n=e.selectedValue,a=s.props,r=a.filterParams,o=a.filterParams.dateFilter,i=a.save,e=s.filter.getValue().dateFilter;"line"===t?(a=n.date,i({selectedChart:t,selectedValue:n,filterParams:c()({},r,{dateFilter:c()({},o,{from:a||e.from,to:a||e.to,quickChoice:a?a+" - "+a:e.quickChoice})})})):i({selectedChart:t,selectedValue:n})},s.state={initialDateFilter:{}},s.event={onFilterChange:s._handleFilterChange,onProductFilterChange:s._handleOnProductFilterChange,onChartClick:s._handleChartClick,getFilterRef:function(e){return s.filter=e}},s}s()(e,t);var n=e.prototype;return n.componentDidMount=function(){var e=this.props,t=e.location,n=t.state,a=t.pathname,r=e.fetchDatas,o=M.t.get(M.V.curProject).id,i=n.aspect,s=n.aspect1,l=n.aspect2,c=n.product,p=n.brand,d=n.shopName,u=n.queryType,m=n.waiter,h=n.typeList,f=n.source,v=n.dateFilter,t=n.productList,e=void 0===t?[]:t,t=n.position;r({projectId:o,queryType:u,filterParams:{aspect:i,aspect1:s,aspect2:l,product:c,brand:p,shopName:d,waiter:m,typeList:h,source:f,position:void 0===t?[]:t,dateFilter:v},type:a.includes("commodityAnalyze")?1:2,comparisonList:e?e.filter(function(e){return e!==c[0]}):[]}),this._handleInitDateFilter(n.dateFilter)},n.componentWillUnmount=function(){this.props.reset()},n.render=function(){return S().createElement(A,c()({},this.props,this.state,this.event))},e}(S().PureComponent);const K=(0,t.connect)(function(e){var t=e.loading,e=a()(e,["loading"]);return c()({},e[Z],{lineChartLoading:t.effects[Z+"/fetchLineChartData"]||!1,treeChartLoading:t.effects[Z+"/fetchTreeChartData"]||!1})},function(t){return{fetchDatas:function(e){return t({type:Z+"/fetchDatas",payload:e})},fetchLineChartData:function(e){return t({type:Z+"/fetchLineChartData",payload:e})},fetchTreeChartData:function(e){return t({type:Z+"/fetchTreeChartData",payload:e})},save:function(e){return t({type:Z+"/save",payload:e})},reset:function(){return t({type:Z+"/reset"})}}})(r)},40086:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var a=n(67154),c=n.n(a),t=n(85354),r=n.n(t),a=n(67294),p=n.n(a),t=n(45697),t=n.n(t),o=function(n){function e(e){var t=n.call(this,e)||this;return t.stop=function(e){e.stopPropagation(),e.nativeEvent.stopImmediatePropagation()},t._setEvent=function(e){return 0===e?{onMouseEnter:function(){t.setState({firstLiHover:!0})},onMouseLeave:function(){t.setState({firstLiHover:!1})}}:{}},t.setShowSelFalse=function(){t.setState({show:!1})},t.state={show:!1,firstSelected:!1},t}r()(e,n);var t=e.prototype;return t.changeShow=function(e){var t=this;this.state.show&&this.stop(e),setTimeout(function(){t.setState({show:!t.state.show})},0)},t.componentDidMount=function(){window.addEventListener("click",this.setShowSelFalse)},t.componentWillUnmount=function(){window.removeEventListener("click",this.setShowSelFalse)},t.render=function(){var n=this,e=this.state.show,t=this.props,a=t.placeholder,r=t.list,o=t.value,i=t.onChange,s=t.style,l=t.partingLine,t=r[0]&&r[0].id===o.id;return p().createElement("div",{className:"chart-select",style:s||{}},p().createElement("div",{className:"select "+(l?"line":""),onClick:function(e){return n.changeShow(e)}},p().createElement("div",{className:"infor "+(e?"sel":"")},p().createElement("span",{className:"placeholder"},a),p().createElement("i",{className:"icon icon-cem_arrow-launches",style:{transform:e?"rotate(-180deg)":"",top:e?"3px":""}}))),e&&p().createElement("div",{className:"position-wrap"},p().createElement("div",{className:"selItem "+(this.state.firstLiHover||t?"selPadHover":""),onClick:function(e){return n.stop(e)}},p().createElement("div",{className:"wrap"},p().createElement("ul",null,0<r.length?r.map(function(e,t){return p().createElement("li",c()({className:e.id===o.id?"sel":"",key:t,onClick:function(){n.setShowSelFalse(),i&&i(e,t)}},n._setEvent(t)),p().createElement("span",null,e.name))}):p().createElement("div",{className:"noData"},"无数据"))))))},e}(a.Component);o.defaultProps={placeholder:"请选择",list:[{name:"周",id:"week"},{name:"月",id:"month"}],value:{}},o.propTypes={placeholder:t().oneOfType([t().string,t().element]),list:t().array,value:t().object,onChange:t().func,style:t().object,partingLine:t().bool}}}]);