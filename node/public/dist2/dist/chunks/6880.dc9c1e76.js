(self.webpackChunkyunting=self.webpackChunkyunting||[]).push([[6880],{26880:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>d});var a=n(37316),i=n.n(a),t=n(67154),r=n.n(t),a=n(85354),l=n.n(a),t=n(67294),p=n.n(t),f=n(19586),a=n(97189),h=n.n(a),v=n(50976),g=n(8201),E=n(98191),t=n(45697),a=n.n(t),o=n(39432),y=n(43036),t=function(t){function e(e){var n=t.call(this,e)||this;n._setPadShowFalse=function(){n.state.show&&n.setState({show:!1})},n._handleOnClick=function(e){var t=n.state.show;t&&(e.stopPropagation(),e.nativeEvent.stopImmediatePropagation()),setTimeout(function(){n.setState({show:!t})},0)};e=Math.max.apply(null,e.options.map(function(e){return(0,o.jD)(e.title,14)}))+32+2;return n.state={show:!1,firstLiHover:!1,panelWidth:100<e?e:100},n}l()(e,t);var n=e.prototype;return n.componentDidMount=function(){window.addEventListener("click",this._setPadShowFalse)},n.componentWillUnmount=function(){window.removeEventListener("click",this._setPadShowFalse)},n.render=function(){var e=this.state,t=e.show,n=e.panelWidth,a=this.props,i=a.activeObj,r=void 0===i?"":i,l=a.onChange,o=a.options,s=a.objName,c=a.preTitle,u=a.sufTitle,m=void 0===u?"":u,e=a.showTitle,i=void 0===e||e,u=a.overlay,e=a.divider,a=void 0===e?"right":e,e=o.find(function(e){return e.value===r}),e=""===r?m:e&&e.title;return p().createElement("div",{className:"chart_title_selector single_select_diviver_"+a,onClick:this._handleOnClick},p().createElement("div",{className:"button_content"},p().createElement("span",null,p().createElement("span",{className:"button-trigger "+(t?"sel":"")},i&&p().createElement(p().Fragment,null,c&&p().createElement("span",{className:"pre-title"},c,"："),p().createElement("span",{className:"button-title"},e)),p().createElement("i",{className:"icon-cem_arrow-launches",style:{transform:t?"rotate(-180deg)":""}})),u&&p().createElement("span",{style:{marginLeft:4}},p().createElement(y.Z,{placement:"top",overlayClassName:"alert-log-tips",overlay:u},p().createElement("i",{className:"icon-cem_file1"})))),p().createElement("div",{className:"button-panel "+(t?"active":""),style:{minWidth:n}},o.map(function(t,e){return p().createElement("div",{className:"panel-item "+(t.value===r?"sel":"")+" "+(t.disabled?"disabled":""),key:t.value,onClick:function(){var e;t.disabled||l(s?((e={})[s]=t.value,e):t.value)}},t.title)}))))},e}(p().PureComponent);t.propTypes={activeObj:a().any,onChange:a().func.isRequired,options:a().array.isRequired,objName:a().any,preTitle:a().string,sufTitle:a().string,showTitle:a().bool,overlay:a().string,divider:a().oneOf(["both","left","right","none"])};const _=t;t=function(e){var t=e.option,n=e.titles,a=e.data,e=e.overlays,i=void 0===e?[]:e;return p().createElement("div",{className:"yt_simple_talbe_wrapper",style:{height:t.height}},p().createElement("div",{className:"st_title"},n.map(function(e,t){return p().createElement("span",{key:e},e,i[t]&&p().createElement(y.Z,{placement:"top",overlayClassName:"alert-log-tips",overlay:i[t]},p().createElement("i",{className:"icon-cem_file1",style:{marginLeft:2,fontSize:14}})))})),p().createElement("div",{className:"st_content"},a.map(function(e,t){return p().createElement("div",{key:"row_"+t,className:"st_row"},e.map(function(e,t){e=2===t?function(e){if("--"===e)return p().createElement("div",{key:e+"_"+Math.random(),style:{paddingRight:16}},e);e.startsWith("-");return p().createElement("div",{key:e+"_"+Math.random()},p().createElement("span",{className:"ellipsis_value"},e))}(e):e;return p().createElement("span",{key:"col_"+t,className:"st_col"},p().createElement(y.Z,{placement:"top",overlayClassName:"alert-log-tips",overlay:e},p().createElement("span",null,e)))}))})))};const N=t;t.propTypes={titles:a().array.isRequired,data:a().array.isRequired,overlays:a().array,option:a().shape({height:a().oneOfType([a().string,a().number])})};var b=n(94644),I=n(92360),C=(n(61409),n(93162),n(70715));const w=function(e){var t=e.option,n=e.title,a=e.list,i=e.val,r=e.loading,l=e.onChange,o=e.tip,s=e.name,e=p().useState(void 0),c=e[0],u=e[1],e=p().useState(void 0),m=e[0],d=e[1];return p().useEffect(function(){var e,t;m&&c&&(e=m,(t=c).clear(),t.setOption(e))},[m,c]),p().useEffect(function(){var e=function(e){if(e)return e.length?{title:{},tooltip:{trigger:"axis"},legend:{type:"scroll",data:e.map(function(e){return e.name}),left:20,top:45,itemWidth:14,itemHeight:12,pageIconSize:12,icon:C.W4.lineRing},grid:{left:22,right:20,bottom:14,top:80,containLabel:!0},xAxis:{type:"category",boundaryGap:!1,data:e[0].data.map(function(e){return e.name})},yAxis:{type:"value"},series:e.map(function(e){return{name:e.name,data:e.data.map(function(e){return e.count}),type:"line",stack:"总量",symbol:"none",smooth:!0,areaStyle:{}}})}:null}(t);d(e)},[t]),p().createElement(g.Z,{data:m,className:"brand_analyze_index_chart",loading:r,renderTitle:p().createElement(E.Z,{data:m,onMoreClick:function(e){return function(e,t,n,a){try{var i,r;"image"===t?(0,b._v)(e,n):"data"===t&&(i=[""].concat(a.map(function(e){return e.name})),r=a.reduce(function(e,n){return e.map(function(e,t){return e.push(n.data[t].count),e})},a[0].data.map(function(e){return[e.name]})),(0,b.aT)([[i].concat(r)],n))}catch(e){I.Message.error("导出失败"),console.error("导出失败,"+e)}}(c,e,n,t)},titleSelector:p().createElement("div",{className:"chart_title_selector_wrap"},a?p().createElement(_,{onChange:function(e){return l(e.val)},objName:"val",activeObj:i,options:a,divider:"none"}):p().createElement("span",{style:{fontWeight:"bold"}},n),o&&p().createElement(y.Z,{placement:"top",overlayClassName:"alert-log-tips",overlay:o},p().createElement("i",{className:"icon-cem_file1"})))})},p().createElement(v.Z,{theme:"yunting_multi_color",loadingOption:{text:"加载中",color:"#20a0ff"},option:{},opts:{devicePixelRatio:2},style:{width:"70%",height:"100%",float:"left"},onChartReady:function(e){return u(e)}}),t&&0<t.length&&p().createElement("div",{style:{width:"28%",height:"100%",float:"right"}},p().createElement(N,{data:t.map(function(e){return[e.name,String(e.total),""+(e.total/e.data.length).toFixed(2)]}),titles:[s,"总计","均值"],option:{height:"100%"}})))};var S=[{value:"BAIDU_SEARCH_INDEX",title:"百度搜索指数"},{value:"BAIDU_FEED_INDEX",title:"百度资讯指数"},{value:"BAIDU_NEWS_INDEX",title:"百度媒体指数"}],D={BAIDU_SEARCH_INDEX:"搜索指数为您显示：互联网用户对键词搜索关注程度及持续变化情况。 算法说明：以网民在百度的搜索量为数据基础，以关键词为统计对象，科学分析并计算出各个关键词在百度网页搜索中搜索频次的加权。根据数据来源的不同，搜索指数分为PC搜索指数和移动搜索指数。",BAIDU_FEED_INDEX:"资讯指数和媒体指数为您显示：新闻资讯在互联网上对特定关键词的关注及报道程度及持续变化。 资讯指数：以百度智能分发和推荐内容数据为基础，将网民的阅读、评论、转发、点赞、不喜欢等行为的数量加权求和得出资讯指数。",BAIDU_NEWS_INDEX:"媒体指数：以各大互联网媒体报道的新闻中，与关键词相关的，被百度新闻频道收录的数量，采用新闻标题包含关键词的统计标准，数据来源、计算方法与搜索指数无直接关系。"},F=[{value:"QIHU_TREND_INDEX",title:"360关注趋势"},{value:"QIHU_EXPLOSURE_INDEX",title:"360曝光量"}],R={QIHU_TREND_INDEX:"关注趋势：显示关键词在所选周期内互联网用户的关注程度及持续变化情况。",QIHU_EXPLOSURE_INDEX:"曝光量：以360收录的网页为统计基础，分析、计算关键词的曝光次数及持续变化情况。"};const s=function(e){function t(){return e.call(this)||this}return l()(t,e),t.prototype.render=function(){var e=this.props,t=e.weibo,n=e.baidu,a=e.zhishu360,i=e.onFilterChange,r=e.changeSel,l=e.baiduSelect,o=e.select360,s=e.weiboFetching,c=e.baiduFetching,u=e.fetching360,m=e.filterParams,d=e.onFilterReady,e=e.dimensionName;return p().createElement("div",{className:"brand_index_analyze_wrap"},p().createElement(f.Z,{values:m,model:"BRAND_INDEX_ANALYSIS",showList:["condition","time","save"],filterCondition:{filter:["DIMENSION_INDEX"],dimension:h().getQuery("id"),hideAdvanced:!0},onFilterReady:d,onChange:i}),p().createElement("div",{className:"brand_index_analyze"},p().createElement(w,{option:t,title:"微博指数",tip:"微博指数是对提及量、阅读量、互动量加权得出的综合指数，更加全面的体现关键词在微博上的热度情况",loading:s,name:e}),p().createElement(w,{option:n&&n[l],title:S.filter(function(e){return e.value===l})[0].title,tip:D[l],loading:c,name:e,onChange:function(e){return r({baiduSelect:e})},list:S,val:l}),p().createElement(w,{option:a&&a[o],title:F.filter(function(e){return e.value===o})[0].title,tip:R[o],loading:u,name:e,onChange:function(e){return r({select360:e})},list:F,val:o})))},t}(p().Component);var c=n(35239),a=n(55609),n=n(64396),u=n.Z.brand.analyzeOfIndex,m=n.Z.public.menu,n=function(t){function e(e){var n=t.call(this,e)||this;return n._handleFilterReady=function(e){n.props.save({projectId:c.t.get(c.V.curProject).id,filterParams:e,dimensionId:h().getQuery("id")});var t=setInterval(function(){n.props.inboxMenu&&n.props.inboxMenu.brandInsightMenus&&(n.setState({dimensionName:n.props.inboxMenu.brandInsightMenus[c.t.get(c.V.curProject).id].find(function(e){return String(e.id)===String(h().getQuery("id"))}).name}),clearInterval(t))},100);setTimeout(function(){n.props.init()},1)},n._handleFilterChange=function(e){n.props.save({filterParams:e}),setTimeout(function(){n.props.init()},1)},n.state={dimensionName:""},n.event={onFilterChange:n._handleFilterChange,onFilterReady:n._handleFilterReady},n}l()(e,t);var n=e.prototype;return n.componentWillUnmount=function(){this.props.clean()},n.render=function(){return p().createElement(s,r()({},this.props,this.event,this.state))},e}(p().Component);const d=(0,a.connect)(function(e){var t=e.loading,e=i()(e,["loading"]);return r()({},e[u],{inboxMenu:e[m].menuList,weiboFetching:t.effects[u+"/fetchWeibo"]||!1,baiduFetching:t.effects[u+"/fetchBaidu"]||!1,fetching360:t.effects[u+"/fetch360"]||!1})},function(t){return{changeEnlargeId:function(e){return t({type:u+"/changeEnlargeId",payload:e})},changeSel:function(e){return t({type:u+"/changeSel",payload:e})},init:function(e){return t({type:u+"/init",payload:e})},save:function(e){return t({type:u+"/save",payload:e})},clean:function(){return t({type:u+"/clean"})}}})(n)}}]);