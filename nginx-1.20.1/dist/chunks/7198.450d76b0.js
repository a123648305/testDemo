"use strict";(self.webpackChunkyunting=self.webpackChunkyunting||[]).push([[7198],{36724:(e,t,a)=>{a.r(t),a.d(t,{default:()=>F});var n=a(63366),r=a(87462),i=a(94578),o=a(18446),l=a.n(o),c=a(64396),d=a(55609),p=a(35239),s=a(53113),f=a(67294),u=(a(15086),a(94055)),y=a(35103),h=a(76893),m=a(7566),g=a(89212),C=a(39432);const T=function(e){var t,a,n=(0,r.Z)({},e),i=n.dataSource,o=n.onLookMsgClick,l=n.onMsgClick,c=n.gombitPagination,d=n.dateGroupType,p=n.filterReady,s=n.filterChange,T=n.outsideFilter,v=n.topicAnalyzeTableData,D=n.onChangeCardBarTable,k=n.topicAnalyzeCardBarData,F=n.fetchingGombitAnalyzeData,A=n.fetchingTopicAnalyzeTableData,b=n.fetchingTopicAnalyzeCardBarData,w=n.onTopicMsgClick,O=n.chartType,z=n.onChartTypeChange,I=n.topicAnalyzeCardBarTotalCount,N=n.topicAnalyzeCardBarTotalPreCount;return f.createElement("div",{className:"yt_serviceInsight_gombitAnalyze_wrapper"},f.createElement(y.Z,{onReady:p,onChange:s,pageType:"WAITER_SESSION_TOPIC",advanceAuthority:!1,screenValue:T&&T.headerFilterParamsNew,dateValue:T&&T.dateFilter,valueConf:["fullInfo"],showList:["quickDate","screening","save"]},f.createElement("div",{className:"content"},f.createElement("div",{style:{margin:"16px 0"}},f.createElement(m.Z,{titleOverlay:"\u8bdd\u9898\u91cf\u8ba1\u7b97\u65b9\u5f0f\uff1a\u5982\u679c\u4e00\u6761\u4f1a\u8bdd\u4e2d\u51fa\u73b0\u5b8c\u5168\u4e00\u6837\u7684\u8bdd\u9898\u65f6\uff0c\r \u8bdd\u9898\u91cf\u53ea\u8ba11\uff0c\u4f46\u591a\u6b21\u4f1a\u8bdd\u4e2d\u51fa\u73b0\u76f8\u540c\u8bdd\u9898\u65f6\uff0c\u8bdd\u9898\u91cf\u8ba1\u591a\u6b21\u3002",dataSource:i,columns:(t=o,a=d,[{titlie:"",width:"0.1%"},{title:"\u65e5\u671f",dataIndex:"name",key:"name",width:"24%",render:function(e){return f.createElement("span",null,(0,C.Sn)(a,e))}},{title:"\u8bdd\u9898\u91cf",dataIndex:"count",key:"count",width:"24%",render:function(e){return f.createElement("span",null,(0,C.hE)(e))}},{title:function(e){return f.createElement("span",{style:{paddingLeft:"20px"}},"\u73af\u6bd4",f.createElement(u.default,{overlay:"\u73af\u6bd4 = (\u5f53\u671f\u5173\u6ce8\u70b9\u58f0\u91cf\uff0d\u5f80\u671f\u5173\u6ce8\u70b9\u58f0\u91cf\uff09\xf7 \u5f80\u671f\u5173\u6ce8\u70b9\u58f0\u91cf \xd7 100%"},f.createElement("i",{style:{marginLeft:4},className:"icon-cem_file1"})))},dataIndex:"linkIndex",key:"linkIndex",width:"28%",render:function(e){return"--"===(0,g.Sv)(e.icon)?f.createElement("div",{style:{marginLeft:"40px"}},"--"):f.createElement("div",{style:{display:"inline-block",width:100,textAlign:"right"}},e.text,(0,g.Sv)(e.icon))}},{title:"\u64cd\u4f5c",key:"operator",width:"15%",render:function(e){return f.createElement("span",{style:{color:"#1890FF",cursor:"pointer"},onClick:function(){return t(e)}},"\u67e5\u770b\u6d88\u606f")}}]),title:"\u8bdd\u9898\u91cf",loading:F,onMsgClick:l,pagination:c,tooltipText:"\u8bdd\u9898\u91cf",timeType:d})),f.createElement("div",{style:{marginBottom:25}},f.createElement(h.Z,{pageType:"WAITER_SESSION_TOPIC",data:k,tableData:v,totalPreCount:N,totalCount:I,title:"\u8bdd\u9898\u5206\u6790",titleOverlay:"\u6839\u636e\u6587\u672c\u5185\u5bb9100%\u5339\u914d\u6765\u5224\u65ad\u8bdd\u9898\uff0c\u5982\u679c2\u4e2a\u6587\u672c\u5185\u5bb9100%\u4e00\u6837\uff0c\u4f1a\u5224\u65ad\u4e3a\u540c\u4e00\u4e2a\u8bdd\u9898\u3002",loading:b,tableLoading:A,onChange:D,onChartTypeChange:z,chartType:O,onMsgClick:w})))))};var v=["loading"],D=c.Z.service.gombitAnalyze,k=function(e){function t(t){var a;return(a=e.call(this,t)||this).events=void 0,a._handleFilterReady=function(e,t){var n=(0,s.X)(e.dateFilter.numOfDays,!0),r=n.dateOptions,i=n.defaultDateType;a.props.fetchParams({projectId:p.t.get(p.V.curProject).id,headerFilterParamsNew:e.headerFilterParamsNew,dateFilter:e.dateFilter,dateOptions:r,defaultDateType:i,dateGroupType:l()(e.dateFilter.from,e.dateFilter.to)?"HOUR":"DAY"})},a._handleFilterChange=function(e,t,n){var i=a.state.chartType,o=(0,s.X)(e.dateFilter.numOfDays,!0),c=o.dateOptions,d=o.defaultDateType;a.props.fetchDatas((0,r.Z)({},e,{dateOptions:c,defaultDateType:d,aspect1:"c1"===i?["\u54a8\u8be2/\u6c42\u52a9"]:void 0,dateGroupType:l()(e.dateFilter.from,e.dateFilter.to)?"HOUR":"DAY"}))},a._handleChartTypeChange=function(e){a.setState({chartType:e})},a._handleOnChangeCardBarTable=function(e,t){if("name"===t)a.props.fetchTopicAnalyzeTableData({aspect1:e})},a._handleOnMsgClick=function(e){var t=a.props,n=t.headerFilterParamsNew,i=t.dateFilter,o=t.projectId,l=t.dateGroupType,c=t.topicAnalyzeCardBarData,d=(0,g.LV)(e[0].data.name.replaceAll("/","-"),l),p=d.from,s=d.to,f={dateFilter:(0,r.Z)({},i,{numOfDays:1,dateGroupType:l,from:p,to:s,quickChoice:p.replace(/-/g,".")+" - "+s.replace(/-/g,".")}),filterModel:{project:[o]},projectId:o,filterTip:null,headerFilterParamsNew:n,topic1Names:c.map((function(e){return e.name}))};window.open("/inbox/service?"+encodeURIComponent(JSON.stringify(f)))},a._handleOnLookMsgClick=function(e){var t=a.props,n=t.headerFilterParamsNew,i=t.dateFilter,o=t.projectId,l=t.dateGroupType,c=t.topicAnalyzeCardBarData,d=(0,g.LV)(e.name.replaceAll("/","-"),l),p=d.from,s=d.to,f={dateFilter:(0,r.Z)({},i,{numOfDays:1,dateGroupType:l,from:p,to:s,quickChoice:p.replace(/-/g,".")+" - "+s.replace(/-/g,".")}),filterModel:{project:[o]},projectId:o,filterTip:null,headerFilterParamsNew:n,topic1Names:c.map((function(e){return e.name}))};window.open("/inbox/service?"+encodeURIComponent(JSON.stringify(f)))},a._handleOnTopicMsgClick=function(e,t,n){var r=a.props,i=r.headerFilterParamsNew,o=r.dateFilter,l=r.projectId;if("card"===t||"bar"===t){var c={dateFilter:"\u5f80\u671f"===e.seriesName?(0,g.yz)(o):o,filterModel:{project:[l]},projectId:l,filterTip:null,headerFilterParamsNew:i,topic1Names:"card"===t?e:[e.name]};window.open("/inbox/service?"+encodeURIComponent(JSON.stringify(c)))}else if("table"===t){var d={dateFilter:"\u5f80\u671f"===e.barType?(0,g.yz)(o):o,filterModel:{project:[l]},projectId:l,filterTip:null,headerFilterParamsNew:i,topic2Names:[e.name]};window.open("/inbox/service?"+encodeURIComponent(JSON.stringify(d)))}},a.state={chartType:"c0"},a.events={filterReady:a._handleFilterReady,filterChange:a._handleFilterChange,onLookMsgClick:a._handleOnLookMsgClick,onMsgClick:a._handleOnMsgClick,onChangeCardBarTable:a._handleOnChangeCardBarTable,onChartTypeChange:a._handleChartTypeChange,onTopicMsgClick:a._handleOnTopicMsgClick},a}(0,i.Z)(t,e);var a=t.prototype;return a.componentDidMount=function(){},a.componentWillUnmount=function(){this.props.clean()},a.render=function(){return f.createElement(T,(0,r.Z)({},this.props,this.state,this.events))},t}(f.Component);const F=(0,d.connect)((function(e){var t=e.loading,a=(0,n.Z)(e,v);return(0,r.Z)({},a[D],{fetchingTrendData:t.effects[D+"/fetchTrendData"]||!1,fetchingGombitAnalyzeData:t.effects[D+"/fetchGombitAnalyzeData"]||!1,fetchingTopicAnalyzeTableData:t.effects[D+"/fetchTopicAnalyzeTableData"]||!1,fetchingTopicAnalyzeCardBarData:t.effects[D+"/fetchTopicAnalyzeCardBarData"]||!1})}),(function(e){return{save:function(t){return e({type:D+"/save",payload:t})},clean:function(){return e({type:D+"/clean"})},fetchParams:function(t){return e({type:D+"/fetchParams",payload:t})},fetchDatas:function(t){return e({type:D+"/fetchDatas",payload:t})},fetchGombitAnalyzeData:function(t){return e({type:D+"/fetchGombitAnalyzeData",payload:t})},fetchTopicAnalyzeTableData:function(t){return e({type:D+"/fetchTopicAnalyzeTableData",payload:t})},fetchTopicAnalyzeCardBarData:function(t){return e({type:D+"/fetchTopicAnalyzeCardBarData",payload:t})}}}))(k)}}]);