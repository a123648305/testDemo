(self.webpackChunkyunting=self.webpackChunkyunting||[]).push([[7198],{36724:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>f});var n=a(37316),r=a.n(n),i=a(67154),D=a.n(i),t=a(85354),o=a.n(t),n=a(18446),c=a.n(n),i=a(64396),t=a(55609),d=a(35239),p=a(97194),n=a(67294),k=a.n(n),F=(a(15086),a(94055)),A=a(48577),b=a(76893),w=a(7566),O=a(89212),z=a(39432);const l=function(e){var t,a,n=D()({},e),r=n.dataSource,i=n.onLookMsgClick,o=n.onMsgClick,l=n.gombitPagination,c=n.dateGroupType,d=n.filterReady,p=n.filterChange,s=n.outsideFilter,f=n.topicAnalyzeTableData,u=n.onChangeCardBarTable,y=n.topicAnalyzeCardBarData,h=n.fetchingGombitAnalyzeData,m=n.fetchingTopicAnalyzeTableData,g=n.fetchingTopicAnalyzeCardBarData,C=n.onTopicMsgClick,T=n.chartType,v=n.onChartTypeChange,e=n.topicAnalyzeCardBarTotalCount,n=n.topicAnalyzeCardBarTotalPreCount;return k().createElement("div",{className:"yt_serviceInsight_gombitAnalyze_wrapper"},k().createElement(A.Z,{onReady:d,onChange:p,pageType:"WAITER_SESSION_TOPIC",advanceAuthority:!1,screenValue:s&&s.headerFilterParamsNew,dateValue:s&&s.dateFilter,valueConf:["fullInfo"],showList:["quickDate","screening","save"]},k().createElement("div",{className:"content"},k().createElement("div",{style:{margin:"16px 0"}},k().createElement(w.Z,{titleOverlay:"话题量计算方式：如果一条会话中出现完全一样的话题时，\r 话题量只计1，但多次会话中出现相同话题时，话题量计多次。",dataSource:r,columns:(t=i,[{titlie:"",width:"0.1%"},{title:"日期",dataIndex:"name",key:"name",width:"24%",render:function(e){return k().createElement("span",null,(0,z.Sn)(a,e))}},{title:"话题量",dataIndex:"count",key:"count",width:"24%",render:function(e){return k().createElement("span",null,(0,z.hE)(e))}},{title:function(e){return k().createElement("span",{style:{paddingLeft:"20px"}},"环比",k().createElement(F.default,{overlay:"环比 = (当期关注点声量－往期关注点声量）÷ 往期关注点声量 × 100%"},k().createElement("i",{style:{marginLeft:4},className:"icon-cem_file1"})))},dataIndex:"linkIndex",key:"linkIndex",width:"28%",render:function(e){return"--"===(0,O.Sv)(e.icon)?k().createElement("div",{style:{marginLeft:"40px"}},"--"):k().createElement("div",{style:{display:"inline-block",width:100,textAlign:"right"}},e.text,(0,O.Sv)(e.icon))}},{title:"操作",key:"operator",width:"15%",render:function(e){return k().createElement("span",{style:{color:"#1890FF",cursor:"pointer"},onClick:function(){return t(e)}},"查看消息")}}]),title:"话题量",loading:h,onMsgClick:o,pagination:l,tooltipText:"话题量",timeType:a=c})),k().createElement("div",{style:{marginBottom:25}},k().createElement(b.Z,{pageType:"WAITER_SESSION_TOPIC",data:y,tableData:f,totalPreCount:n,totalCount:e,title:"话题分析",titleOverlay:"根据文本内容100%匹配来判断话题，如果2个文本内容100%一样，会判断为同一个话题。",loading:g,tableLoading:m,onChange:u,onChartTypeChange:v,chartType:T,onMsgClick:C})))))};var s=i.Z.service.gombitAnalyze,i=function(t){function e(e){var l=t.call(this,e)||this;return l.events=void 0,l._handleFilterReady=function(e,t){var a=(0,p.X)(e.dateFilter.numOfDays,!0),n=a.dateOptions,a=a.defaultDateType;l.props.fetchParams({projectId:d.t.get(d.V.curProject).id,headerFilterParamsNew:e.headerFilterParamsNew,dateFilter:e.dateFilter,dateOptions:n,defaultDateType:a,dateGroupType:c()(e.dateFilter.from,e.dateFilter.to)?"HOUR":"DAY"})},l._handleFilterChange=function(e,t,a){var n=l.state.chartType,r=(0,p.X)(e.dateFilter.numOfDays,!0),i=r.dateOptions,r=r.defaultDateType;l.props.fetchDatas(D()({},e,{dateOptions:i,defaultDateType:r,aspect1:"c1"===n?["咨询/求助"]:void 0,dateGroupType:c()(e.dateFilter.from,e.dateFilter.to)?"HOUR":"DAY"}))},l._handleChartTypeChange=function(e){l.setState({chartType:e})},l._handleOnChangeCardBarTable=function(e,t){"name"===t&&l.props.fetchTopicAnalyzeTableData({aspect1:e})},l._handleOnMsgClick=function(e){var t=l.props,a=t.headerFilterParamsNew,n=t.dateFilter,r=t.projectId,i=t.dateGroupType,o=t.topicAnalyzeCardBarData,t=(0,O.LV)(e[0].data.name.replaceAll("/","-"),i),e=t.from,t=t.to,o={dateFilter:D()({},n,{numOfDays:1,dateGroupType:i,from:e,to:t,quickChoice:e.replace(/-/g,".")+" - "+t.replace(/-/g,".")}),filterModel:{project:[r]},projectId:r,filterTip:null,headerFilterParamsNew:a,topic1Names:o.map(function(e){return e.name})};window.open("/inbox/service?"+encodeURIComponent(JSON.stringify(o)))},l._handleOnLookMsgClick=function(e){var t=l.props,a=t.headerFilterParamsNew,n=t.dateFilter,r=t.projectId,i=t.dateGroupType,o=t.topicAnalyzeCardBarData,t=(0,O.LV)(e.name.replaceAll("/","-"),i),e=t.from,t=t.to,o={dateFilter:D()({},n,{numOfDays:1,dateGroupType:i,from:e,to:t,quickChoice:e.replace(/-/g,".")+" - "+t.replace(/-/g,".")}),filterModel:{project:[r]},projectId:r,filterTip:null,headerFilterParamsNew:a,topic1Names:o.map(function(e){return e.name})};window.open("/inbox/service?"+encodeURIComponent(JSON.stringify(o)))},l._handleOnTopicMsgClick=function(e,t,a){var n=l.props,r=n.headerFilterParamsNew,i=n.dateFilter,o=n.projectId;"card"===t||"bar"===t?(n={dateFilter:"往期"===e.seriesName?(0,O.yz)(i):i,filterModel:{project:[o]},projectId:o,filterTip:null,headerFilterParamsNew:r,topic1Names:"card"===t?e:[e.name]},window.open("/inbox/service?"+encodeURIComponent(JSON.stringify(n)))):"table"===t&&(e={dateFilter:"往期"===e.barType?(0,O.yz)(i):i,filterModel:{project:[o]},projectId:o,filterTip:null,headerFilterParamsNew:r,topic2Names:[e.name]},window.open("/inbox/service?"+encodeURIComponent(JSON.stringify(e))))},l.state={chartType:"c0"},l.events={filterReady:l._handleFilterReady,filterChange:l._handleFilterChange,onLookMsgClick:l._handleOnLookMsgClick,onMsgClick:l._handleOnMsgClick,onChangeCardBarTable:l._handleOnChangeCardBarTable,onChartTypeChange:l._handleChartTypeChange,onTopicMsgClick:l._handleOnTopicMsgClick},l}o()(e,t);var a=e.prototype;return a.componentDidMount=function(){},a.componentWillUnmount=function(){this.props.clean()},a.render=function(){return k().createElement(l,D()({},this.props,this.state,this.events))},e}(k().Component);const f=(0,t.connect)(function(e){var t=e.loading,e=r()(e,["loading"]);return D()({},e[s],{fetchingTrendData:t.effects[s+"/fetchTrendData"]||!1,fetchingGombitAnalyzeData:t.effects[s+"/fetchGombitAnalyzeData"]||!1,fetchingTopicAnalyzeTableData:t.effects[s+"/fetchTopicAnalyzeTableData"]||!1,fetchingTopicAnalyzeCardBarData:t.effects[s+"/fetchTopicAnalyzeCardBarData"]||!1})},function(t){return{save:function(e){return t({type:s+"/save",payload:e})},clean:function(){return t({type:s+"/clean"})},fetchParams:function(e){return t({type:s+"/fetchParams",payload:e})},fetchDatas:function(e){return t({type:s+"/fetchDatas",payload:e})},fetchGombitAnalyzeData:function(e){return t({type:s+"/fetchGombitAnalyzeData",payload:e})},fetchTopicAnalyzeTableData:function(e){return t({type:s+"/fetchTopicAnalyzeTableData",payload:e})},fetchTopicAnalyzeCardBarData:function(e){return t({type:s+"/fetchTopicAnalyzeCardBarData",payload:e})}}})(i)}}]);