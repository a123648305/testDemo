(self.webpackChunkyunting=self.webpackChunkyunting||[]).push([[5806],{89165:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>y});var a=t(37316),r=t.n(a),i=t(67154),d=t.n(i),n=t(85354),o=t.n(n),a=t(18446),l=t.n(a),i=t(64396),u=t(97194),n=t(55609),f=t(35239),a=t(67294),A=t.n(a),g=(t(15086),t(94055)),E=t(39432),D=t(76893),v=t(48577),I=t(7566),O=t(89212);const c=function(e){var n,t,a=e.onMsgClick,r=e.dataSource,i=e.onLookMsgClick,o=e.concernPagination,l=e.dateGroupType,c=e.filterReady,d=e.filterChange,u=e.outsideFilter,f=e.onChangeCardBarTable,s=e.fetchingConcernAnalyzeData,p=e.concernAnalyzeCardBarData,C=e.fetchingConcernAnalyzeCardBarData,h=e.onConcernMsgClick,y=e.concernAnalyzeTableData,m=e.fetchingConcernAnalyzeTableData,T=e.concernAnalyzeCardBarTotalCount,e=e.concernAnalyzeCardBarTotalPreCount;return A().createElement("div",{className:"yt_serviceInsight_concernAnalyze_wrapper"},A().createElement(v.Z,{onReady:c,onChange:d,pageType:"WAITER_SESSION_FOCUS",advanceAuthority:!1,screenValue:u&&u.headerFilterParamsNew,dateValue:u&&u.dateFilter,valueConf:["fullInfo"],showList:["quickDate","screening","save"]},A().createElement("div",{className:"content"},A().createElement("div",{style:{margin:"16px 0"}},A().createElement(I.Z,{titleOverlay:"统计一、二级关注点的关注点声量，如果一个会话中提到相同的关注点多次，则该关注点的声量只计1次。如果一个会话中提到同一个「一级关注点」的不同「二级关注点」n次，则各「二级关注点」的关注点声量只计1次；而该 「一级关注点」计n次。",loading:s,dataSource:r,columns:(n=i,[{titlie:"",width:"0.1%"},{title:"日期",dataIndex:"name",key:"name",width:"25%",render:function(e){return A().createElement("span",null,(0,E.Sn)(t,e))}},{title:"关注点声量",dataIndex:"count",key:"count",width:"25%",render:function(e){return A().createElement("span",null,(0,E.uf)(e))}},{title:function(e){return A().createElement("span",{style:{paddingLeft:20}},"环比",A().createElement(g.default,{overlay:"环比 = (当期关注点声量－往期关注点声量）÷ 往期关注点声量 × 100%"},A().createElement("i",{style:{marginLeft:4},className:"icon-cem_file1"})))},dataIndex:"linkIndex",key:"linkIndex",width:"28%",render:function(e){return"--"===(0,O.Sv)(e.icon)?A().createElement("div",{style:{marginLeft:"40px"}},"--"):A().createElement("div",{style:{display:"inline-block",width:100,textAlign:"right"}},e.text,(0,O.Sv)(e.icon))}},{title:"操作",key:"operator",width:"15%",render:function(e){return A().createElement("span",{style:{color:"#1890FF",cursor:"pointer"},onClick:function(){return n(e)}},"查看消息")}}]),title:"关注点声量",onMsgClick:a,pagination:o,tooltipText:"关注点声量",timeType:t=l})),A().createElement("div",{style:{marginBottom:25}},A().createElement(D.Z,{pageType:"WAITER_SESSION_FOCUS",data:p,tableData:y,totalPreCount:e,totalCount:T,title:"关注点分析",loading:C,tableLoading:m,onChange:f,onMsgClick:h})))))};var s=t(87219),a=t(30381),p=t.n(a);function C(e,n){switch(n){case"HOUR":return{from:p()(e).format("YYYY-MM-DD HH:00:00"),to:p()(e).format("YYYY-MM-DD HH:59:59")};case"DAY":default:return{from:p()(e).format("YYYY-MM-DD HH:00:00"),to:p()(e).format("YYYY-MM-DD 23:59:59")}}}var h=i.Z.service.concernAnalyze,i=function(n){function e(e){var c=n.call(this,e)||this;return c.events=void 0,c._handleFilterReady=function(e,n){var t=(0,u.X)(e.dateFilter.numOfDays,!0),a=t.dateOptions,t=t.defaultDateType;c.props.fetchParams({projectId:f.t.get(f.V.curProject).id,headerFilterParamsNew:e.headerFilterParamsNew,dateFilter:e.dateFilter,dateOptions:a,defaultDateType:t,dateGroupType:l()(e.dateFilter.from,e.dateFilter.to)?"HOUR":"DAY"})},c._handleFilterChange=function(e,n,t){var a=(0,u.X)(e.dateFilter.numOfDays,!0),r=a.dateOptions,a=a.defaultDateType;c.props.fetchDatas(d()({},e,{dateOptions:r,defaultDateType:a,dateGroupType:l()(e.dateFilter.from,e.dateFilter.to)?"HOUR":"DAY"}))},c._handleOnChangeCardBarTable=function(e,n){"name"===n&&c.props.fetchConcernAnalyzeTableData({aspect1:e})},c._handleOnChartClick=function(e){},c._handleOnLookMsgClick=function(e){var n=c.props,t=n.headerFilterParamsNew,a=n.dateFilter,r=n.projectId,i=n.dateGroupType,o=n.concernAnalyzeCardBarData,n=C(e.name.replaceAll("/","-"),i),e=n.from,n=n.to,t={dateFilter:d()({},a,{numOfDays:1,dateGroupType:i,from:e,to:n,quickChoice:e.replace(/-/g,".")+" - "+n.replace(/-/g,".")}),filterModel:{project:[r]},projectId:r,filterTip:null,headerFilterParamsNew:(0,s.ZP)(t,function(e){e.find(function(e){return"WAITER_MODEL"===e.id})?e.find(function(e){return"WAITER_MODEL"===e.id}).values=[{id:"WAITER_ASPECT1",values:o.map(function(e){return e.name})}]:e.push({id:"WAITER_MODEL",values:[{id:"WAITER_ASPECT1",values:o.map(function(e){return e.name})}]})})};window.open("/inbox/service?"+encodeURIComponent(JSON.stringify(t)))},c._handleOnMsgClick=function(e,n){var t=c.props,a=t.headerFilterParamsNew,r=t.dateFilter,i=t.projectId,o=t.dateGroupType,l=t.concernAnalyzeCardBarData,t=C(e[0].data.name.replaceAll("/","-"),o),e=t.from,t=t.to,a={dateFilter:d()({},r,{numOfDays:1,dateGroupType:o,from:e,to:t,quickChoice:e.replace(/-/g,".")+" - "+t.replace(/-/g,".")}),filterModel:{project:[i]},projectId:i,filterTip:null,headerFilterParamsNew:(0,s.ZP)(a,function(e){e.find(function(e){return"WAITER_MODEL"===e.id})?e.find(function(e){return"WAITER_MODEL"===e.id}).values=[{id:"WAITER_ASPECT1",values:l.map(function(e){return e.name})}]:e.push({id:"WAITER_MODEL",values:[{id:"WAITER_ASPECT1",values:l.map(function(e){return e.name})}]})})};window.open("/inbox/service?"+encodeURIComponent(JSON.stringify(a)))},c._handleOnConcernMsgClick=function(n,t,e){var a=c.props,r=a.headerFilterParamsNew,i=a.dateFilter,o=a.projectId;"card"===t||"bar"===t?(a={dateFilter:"往期"===n.seriesName?(0,O.yz)(i):i,filterModel:{project:[o]},projectId:o,filterTip:null,headerFilterParamsNew:(0,s.ZP)(r,function(e){e.find(function(e){return"WAITER_MODEL"===e.id})?e.find(function(e){return"WAITER_MODEL"===e.id}).values=[{id:"WAITER_ASPECT1",values:"card"===t?n:[n.name]}]:e.push({id:"WAITER_MODEL",values:[{id:"WAITER_ASPECT1",values:"card"===t?n:[n.name]}]})})},window.open("/inbox/service?"+encodeURIComponent(JSON.stringify(a)))):"table"===t&&(r={dateFilter:"往期"===n.barType?(0,O.yz)(i):i,filterModel:{project:[o]},projectId:o,filterTip:null,headerFilterParamsNew:(0,s.ZP)(r,function(e){e.find(function(e){return"WAITER_MODEL"===e.id})?e.find(function(e){return"WAITER_MODEL"===e.id}).values=[{id:"WAITER_ASPECT2",values:[n.name]}]:e.push({id:"WAITER_MODEL",values:[{id:"WAITER_ASPECT2",values:[n.name]}]})})},window.open("/inbox/service?"+encodeURIComponent(JSON.stringify(r))))},c.events={filterReady:c._handleFilterReady,filterChange:c._handleFilterChange,onMsgClick:c._handleOnMsgClick,onLookMsgClick:c._handleOnLookMsgClick,onChartClick:c._handleOnChartClick,onConcernMsgClick:c._handleOnConcernMsgClick,onChangeCardBarTable:c._handleOnChangeCardBarTable},c}o()(e,n);var t=e.prototype;return t.componentDidMount=function(){},t.componentWillUnmount=function(){this.props.clean()},t.render=function(){return A().createElement(c,d()({},this.props,this.state,this.events))},e}(A().Component);const y=(0,n.connect)(function(e){var n=e.loading,e=r()(e,["loading"]);return d()({},e[h],{fetchingTrendData:n.effects[h+" /fetchTrendData"]||!1,fetchingConcernAnalyzeData:n.effects[h+"/fetchConcernAnalyzeData"]||!1,fetchingConcernAnalyzeTableData:n.effects[h+"/fetchConcernAnalyzeTableData"]||!1,fetchingConcernAnalyzeCardBarData:n.effects[h+"/fetchConcernAnalyzeCardBarData"]||!1})},function(n){return{save:function(e){return n({type:h+"/save",payload:e})},clean:function(){return n({type:h+"/clean"})},fetchParams:function(e){return n({type:h+"/fetchParams",payload:e})},fetchDatas:function(e){return n({type:h+"/fetchDatas",payload:e})},fetchConcernAnalyzeData:function(e){return n({type:h+"/fetchConcernAnalyzeData",payload:e})},fetchConcernAnalyzeCardBarData:function(e){return n({type:h+"/fetchConcernAnalyzeCardBarData",payload:e})},fetchConcernAnalyzeTableData:function(e){return n({type:h+"/fetchConcernAnalyzeTableData",payload:e})}}})(i)}}]);