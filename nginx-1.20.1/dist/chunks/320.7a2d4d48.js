"use strict";(self.webpackChunkyunting=self.webpackChunkyunting||[]).push([[320],{2320:(e,t,a)=>{a.r(t),a.d(t,{default:()=>x});var n=a(63366),l=a(87462),r=a(94578),c=a(53113),i=a(64396),s=a(55609),o=a(35239),u=a(67294),f=(a(30467),a(55673)),p=(a(58136),a(5789)),d=(a(76405),a(69843)),h=(a(1025),a(65400)),m=(a(43378),a(62443)),g=(a(89858),a(51024)),v=a(23279),y=a.n(v),E=g.default.Search;const _=function(e){var t=e.title,a=e.titleTips,n=e.onChange,l=e.data,r=e.onExport,c=(0,u.useState)(""),i=c[0],s=c[1],o=(0,u.useState)(1),f=o[0],p=o[1],g=(0,u.useState)((null==l?void 0:l.result)||[]),v=g[0],_=g[1];(0,u.useEffect)((function(){var e=(null==l?void 0:l.result)||[];_(e.slice(0,10))}),[l]);var C=function(e){return e.name.replace(new RegExp(e.highlightInfo.join("|").replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"g"),(function(e,t){return'<span class="match-text">'+e+"</span>"}))},T=(0,u.useCallback)(y()((function(e){n({page:1,pageSize:10,keywords:e})}),1e3),[]),D=(0,u.useCallback)((function(e){var t=e.target.value;s(t),T(t)}),[]),N=function(e){if(!e)return"";var t=new Date,a=e.substring(0,19).replace(/-/g,"/").replace(/T/," "),n=new Date(a),l=t.getTime()-n.getTime(),r=36e5,c=864e5,i=6048e5;switch(!0){case l<r:var s=Math.abs(Math.floor(l/6e4));return s?s+"\u5206\u949f\u524d":"\u521a\u521a";case l<c:return Math.floor(l/r)+"\u5c0f\u65f6\u524d";case l<i:return Math.floor(l/c)+"\u5929\u524d";case l<2592e6:return Math.floor(l/i)+"\u5468\u524d";default:return""+a.split(" ")[0]}};return u.createElement("div",{className:"yt_explore_scene_advice_list"},u.createElement("div",{className:"list_title"},u.createElement("div",{className:"title"},t,a?u.createElement(m.default,{overlayStyle:{maxWidth:350},placement:"top",content:a,overlayClassName:"title_desc_popup"},u.createElement("i",{className:"icon-cem_file1"})):null),u.createElement("div",{className:"search"},u.createElement(E,{placeholder:"\u8bf7\u8f93\u5165\u5173\u952e\u8bcd",value:i,onChange:D,size:"small",suffix:u.createElement("span",null,u.createElement("i",{className:"icon-cem_small-search",style:{color:"#8c8c8c"}})),allowClear:!0})),u.createElement("div",{className:"btn-warp"},u.createElement(h.default,{className:"export",onClick:function(){return r({keywords:i})}},"\u5bfc\u51fa"))),u.createElement("div",{className:"list_container"},null!=l&&l.count?v.map((function(e,a){return u.createElement("div",{key:a,className:"list_item"},u.createElement("span",{className:"flex-1"},u.createElement("div",{dangerouslySetInnerHTML:{__html:C(e)}})),u.createElement(m.default,{placement:"left",content:"\u6700\u65b0\u5efa\u8bae"===t?"\u5efa\u8bae\u6570\u91cf\uff1a"+e.count:"\u7b2c\u4e00\u6b21\u63d0\u51fa\u65f6\u95f4\uff1a"+N(e.date)},"\u6700\u65b0\u5efa\u8bae"===t?u.createElement("span",{className:"sub_title"},N(e.date)):u.createElement("span",{className:"sub_title"},e.count)))})):u.createElement("div",{className:"empty-block"},"\u6682\u65e0\u6570\u636e")),null!=l&&l.count?u.createElement("div",{className:"list_footer"},u.createElement(d.default,{size:"small",className:"g-pagination",onChange:function(e){!function(e){var t=(null==l?void 0:l.result)||[];p(e),_(t.slice(10*(e-1),10*e))}(e)},showSizeChanger:!1,current:f,pageSize:10,total:null==l?void 0:l.count})):null)};var C=a(35103),T=a(19731);const D=function(e){var t=e.pageType,a=e.dateOptions,n=void 0===a?[]:a,r=e.filterReady,c=e.filterChange,i=e.onFilterChange,s=e.onFlavorChange,o=e.onMsgClick,d=e.trendData,h=e.fetchingTrendData,m=e.timeType,g=e.fTimeType,v=e.hotAdviceData,y=e.newAdviceData,E=e.fetchNewMessage,D=e.fetchHotMessage,N=e.fetchExport;return u.createElement("div",{className:"yt_explore_scene_advice_wrapper"},u.createElement(C.Z,{onReady:r,onChange:c,pageType:t,advanceAuthority:!1,touchData:["\u7535\u5546\u8bc4\u8bba"],selectValue:"\u7535\u5546\u8bc4\u8bba",valueConf:["fullInfo"],showList:["fullDate","screening","save","sourceSearch"],hasHour:!0},u.createElement("div",{className:"content"},u.createElement(T.Z,{data:d,loading:h,timeType:m,fTimeType:g,timeOptions:n,onFilterChange:i,onFlavorChange:s,onMsgClick:o,pageType:t,title:"\u7528\u6237\u5efa\u8bae\u6570\u91cf",graphicText:{text1:"\u63d0\u53ca\u7528\u6237\u5efa\u8bae\u53bb\u91cd\u540e\u7684\u6d88\u606f",text2:"\u7528\u6237\u5efa\u8bae\u63d0\u53ca\u6d88\u606f",text3:"\u6d88\u606f\u603b\u6570"},titleOverlay:u.createElement("div",null,u.createElement("p",null,"\u7528\u6237\u5efa\u8bae\u63d0\u53ca\u7387 = \u63d0\u53ca\u7528\u6237\u5efa\u8bae\u7684\u6d88\u606f\u6570\u91cf \xf7 \u6d88\u606f\u603b\u91cf"),u.createElement("p",null,"\u7528\u6237\u5efa\u8bae\u6570\u91cf\u8ba1\u7b97\u8bf4\u660e\uff1a\u5982\u679c\u4e00\u6761\u6d88\u606f\u4e2d\u51fa\u73b0\u4e00\u4e2a\u7528\u6237\u5efa\u8bae\u5c31\u8ba11\uff0c\u4e00\u6837\u7684\u7528\u6237\u5efa\u8bae\u5728\u4e00\u6761\u6d88\u606f\u4e2d\u4e0d\u91cd\u590d\u8ba1\u6570\u3002"))}),u.createElement("div",{className:"table_list"},u.createElement(f.default,{gutter:16},u.createElement(p.default,{span:12},u.createElement(_,{data:y,onExport:function(e){N((0,l.Z)({},e,{chartType:"scene_aspect_advice_new_count"}))},onChange:function(e){E(e)},title:"\u6700\u65b0\u5efa\u8bae",titleTips:"\u5c55\u793a\u9009\u62e9\u65f6\u95f4\u8303\u56f4\u5185\u7684\u5efa\u8bae\uff0c\u6309\u7167\u5efa\u8bae\u7b2c\u4e00\u6b21\u63d0\u51fa\u65f6\u95f4\u6765 \u6392\u5e8f\uff0c\u4f8b\u59822021\u5e741\u67081\u65e5\u5efa\u8bae\u201c\u5e0c\u671b\u4ef7\u683c\u4fbf\u5b9c\u70b9\u201d\uff0c1\u5468\u540e \u53c8\u6709\u4e00\u6837\u7684\u5efa\u8bae\u201c\u5e0c\u671b\u4ef7\u683c\u4fbf\u5b9c\u70b9\u201d\uff0c\u90a3\u4e48\u8be5\u5efa\u8bae\u7684\u7b2c\u4e00\u6b21 \u63d0\u51fa\u65f6\u95f4\u662f2021\u5e741\u67081\u65e5\u3002"})),u.createElement(p.default,{span:12},u.createElement(_,{data:v,onExport:function(e){N((0,l.Z)({},e,{chartType:"scene_aspect_count"}))},onChange:function(e){D(e)},title:"\u6700\u70ed\u5efa\u8bae"})))))))};var N=["loading"],w=i.Z.explore.scene.advice,F=function(e){function t(t){var a;return(a=e.call(this,t)||this).events=void 0,a._handleFilterReady=function(e,t){var n=(0,c.X)(e.dateFilter.numOfDays,!0),l=n.dateOptions,r=n.defaultDateType;a.props.fetchParams({projectId:o.t.get(o.V.curProject).id,headerFilterParamsNew:e.headerFilterParamsNew,dateFilter:e.dateFilter,dateOptions:l,defaultDateType:r,filterValues:t.fullInfo.filterValue})},a._handleFilterChange=function(e,t,n){var r=(0,c.X)(e.dateFilter.numOfDays,!0),i=r.dateOptions,s=r.defaultDateType;a.props.fetchDatas((0,l.Z)({},e,{dateOptions:i,defaultDateType:s,filterValues:t.fullInfo.filterValue}))},a._handleOnFilterChange=function(e){e.timeType&&a.props.fetchTrendData(e)},a._handleOnFlavorChange=function(e){e.fTimeType,a.props.setDefaultValue(e)},a._handleOnMsgClick=function(e){},a.events={filterReady:a._handleFilterReady,filterChange:a._handleFilterChange,onFilterChange:a._handleOnFilterChange,onFlavorChange:a._handleOnFlavorChange,onMsgClick:a._handleOnMsgClick},a}(0,r.Z)(t,e);var a=t.prototype;return a.componentDidMount=function(){},a.componentWillUnmount=function(){this.props.clean()},a.render=function(){return u.createElement(D,(0,l.Z)({},this.props,this.state,this.events))},t}(u.Component);const x=(0,s.connect)((function(e){var t=e.loading,a=(0,n.Z)(e,N);return(0,l.Z)({},a[w],{fetchingTrendData:t.effects[w+"/fetchTrendData"]||!1})}),(function(e){return{save:function(t){return e({type:w+"/save",payload:t})},clean:function(){return e({type:w+"/clean"})},setDefaultValue:function(t){return e({type:w+"/setDefaultValue",payload:t})},fetchParams:function(t){return e({type:w+"/fetchParams",payload:t})},fetchDatas:function(t){return e({type:w+"/fetchDatas",payload:t})},fetchTrendData:function(t){return e({type:w+"/fetchTrendData",payload:t})},fetchNewMessage:function(t){return e({type:w+"/fetchNewMessage",payload:t})},fetchHotMessage:function(t){return e({type:w+"/fetchHotMessage",payload:t})},fetchExport:function(t){return e({type:w+"/fetchExport",payload:t})}}}))(F)}}]);