(self.webpackChunkyunting=self.webpackChunkyunting||[]).push([[1031],{31031:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>F});var n=a(37316),g=a.n(n),t=a(67154),f=a.n(t),n=a(85354),r=a.n(n),t=a(67294),v=a.n(t),E=a(26198),T=a(27310),n=a(93913),i=a.n(n),d=a(8201),y=a(50976),b=a(60496),C=a(98191),_=a(35642),N=a(94644),s=a(39432),t=a(18446),l=a.n(t),n=a(45697),t=a.n(n),n=function(t){function e(e){var a=t.call(this,e)||this;return a.onClick=function(e){var t;"xAxis"===e.componentType&&a.props.dataAspect2&&(t=a.props.chartTypeValue.meAspectType,a.state.showSingleAspect?a.setState({showSingleAspect:null}):"aspect1"===t?a.setState({showSingleAspect:e.value}):"aspect2"===t&&(a.props.chartTypeChange({key:"meAspectType",value:"aspect1"}),a.setState({showSingleAspect:null})))},a.state={showSingleAspect:null},a}r()(e,t);var a=e.prototype;return a.componentDidUpdate=function(e){var t,a=this.props,n=a.title,r=a.chartTypeValue,i=this.state.showSingleAspect,o=r.meAspectType;!this.chartRef||!(0,d.P)(this.data)||l()(this.data,this.dataCopy)&&this.chartRef===this.chartRefCopy||(this.dataCopy=JSON.parse(JSON.stringify(this.data)),this.chartRefCopy=this.chartRef,a=this.data,r=n,t=i?"aspect2":o,n=this.wrapRef.getBoundingClientRect().width,i=a.map(function(e){return e[t]}),o=.8*n/(42*i.length),n=1<(0,s.jD)(i.join(""),12)/(.4*n),a={title:{text:r,top:"13"},grid:{left:36,right:36,top:48,bottom:30,containLabel:!0},dataZoom:[{type:"slider",left:"5%",right:"5%",bottom:15,height:16,show:o<1}],tooltip:{trigger:"item",formatter:function(e){var t=e.name,a=e.value;return e.marker+" "+t+" "+Number(100*a).toFixed(2)+"%"}},xAxis:{data:i,triggerEvent:!0,axisLabel:{rotate:n?45:0,margin:n?15:8,formatter:function(e){return 6<e.length?e.substring(0,6)+"...":e}}},yAxis:{type:"value",min:0,axisLabel:{formatter:function(e){return(100*e).toFixed(0)+"%"}}},series:{type:"bar",data:a.map(function(e){return(Number(e.negative)+Number(e.positive))/Number(e.messageTotal)}),barMaxWidth:24}},this.chartRef.clear(),this.chartRef.setOption(a))},a.render=function(){var i=this,e=this.props,t=e.loading,o=e.title,a=e.titleOverlay,n=e.dataAspect2,r=e.chartTypeValue,c=e.chartTypeChange,s=e.flavor,l=e.updateFlavors,r=r.meAspectType,p=this.state.showSingleAspect?"aspect2":r,u=this.data;return v().createElement("div",{className:"bar_trend_chart",style:{height:"100%"},ref:function(e){return i.wrapRef=e}},v().createElement(d.Z,{data:u,loading:t,style:{height:"100%"},renderTitle:v().createElement(C.Z,{title:o,data:u,titleOverlay:a,onMoreClick:function(e){var t,a,n,r;t=i.chartRef,a=u,n=o,r=p,"image"===(e=e)?(0,N._v)(t,n):"data"===e&&(a=[a.reduce(function(e,t){return[].concat(e,[[t[r],((Number(t.negative)+Number(t.positive))/Number(t.messageTotal)*100).toFixed(2)+"%"]])},[["aspect1"===r?"一级指标":"二级指标","提及率"]])],(0,N.aT)(a,n))}},n&&v().createElement(b.Z,{options:_.Rx,activeObj:p,flavor:s.meAspectType,onFlavorChange:function(e){i.setState({showSingleAspect:null}),l({key:"meAspectType",value:e})},onChange:function(e){c({key:"meAspectType",value:e}),i.setState({showSingleAspect:null})}}))},v().createElement(y.Z,{theme:"yunting_multi_color",className:"yt_echarts_style",option:{},style:{width:"100%",height:"100%"},onChartReady:function(e){return i.chartRef=e},onEvents:{click:this.onClick}})))},i()(e,[{key:"data",get:function(){var e=this.props,t=e.dataAspect1,a=e.dataAspect2,e=e.chartTypeValue.meAspectType,n=this.state.showSingleAspect;return n?a.filter(function(e){return e.aspect1===n}):"aspect1"===e?t:a}}]),e}(v().Component);const A=n;n.propTypes={title:t().string,loading:t().bool,data:t().oneOfType([t().string,t().object]),onClick:t().func};var o=a(33798),c=a(43036),p={c1:["cem_histogram-gray","cem_histogram-colour","簇状柱形图"],c2:["cem_division","cem_division-colour","堆叠柱形图"]},n=function(e){var t=e.chartType,a=e.enable,n=void 0!==a&&a,a=e.notLimitList,r=void 0===a?[]:a,i=e.onChange;return v().createElement("div",{className:"yt-chart-type-radio-wrapper"},Object.keys(p).map(function(e){return v().createElement(c.Z,{key:e,placement:"top",overlay:p[e][2]},v().createElement("span",null,v().createElement(o.Z,{enable:!n||r.includes(e),isActive:t===e,defaultIcon:p[e][0],activeIcon:p[e][1],onClick:function(){return!n&&i(e)}})))}))};n.propTypes={chartType:t().string,enable:t().bool,options:t().object,notLimitList:t().array};const R=n;var u=a(70715),m=a(2329),n=function(t){function e(e){var c=t.call(this,e)||this;return c.onClick=function(e){var t,a,n,r,i,o;"xAxis"!==e.componentType?(t=(r=c.props).filter,o=r.projectId,a=r.curScreeningMap,n=t.filterValue,r=t.analysisModel,i=r[0].values[0],o={analyseName:a.find(function(e){return"CONFIG"===e.id}).data.find(function(e){return e.id===i.id}).options.find(function(e){return e.id===i.values[0]}).label,analysisObjs:t.analysisModel[0].values[0].values,aspect:e.name,aspectTotal:e.data.value,dateFilter:t.dateFilter,filterModel:f()({},(0,m.bF)(n),{analysis:{id:r[0].values[0].id,name:r[0].values[0].label,type:"CONFIG"===r[0].id?"CONN_CONFIG":r[0].id,values:t.analysisModel[0].values[0].values},aspect:{aspect1:"aspect1"===e.data.couAspectType?[e.name]:[],aspect2:"aspect1"===e.data.couAspectType?[]:[e.name],emotion:"正面声量"===e.seriesName?["positive"]:["negative"]}}),leftName:"客户关注",projectId:o,seriesName:"正面声量"===e.seriesName?"正面":"负面",type:"EMOTION_ASPECT_LEVEL_BAR"},window.open("/tab/detail?"+encodeURIComponent(JSON.stringify(o)))):c.props.dataAspect2&&(o=c.props.chartTypeValue.couAspectType,c.state.showSingleAspect?c.setState({showSingleAspect:null}):"aspect1"===o?c.setState({showSingleAspect:e.value}):"aspect2"===o&&(c.props.chartTypeChange({key:"couAspectType",value:"aspect1"}),c.setState({showSingleAspect:null})))},c.state={chartType:"c1",showSingleAspect:null},c}r()(e,t);var a=e.prototype;return a.componentDidUpdate=function(e,t){var a,n,r,i,o,c=this.props.title;this.chartRef&&this.wrapRef&&(0,d.P)(this.data)&&(!l()(this.data,this.dataCopy)||this.chartRef!==this.chartRefCopy||this.state.chartType!==t.chartType||e.chartTypeValue.countType!==this.props.chartTypeValue.countType)&&(this.dataCopy=JSON.parse(JSON.stringify(this.data)),this.chartRefCopy=this.chartRef,o=(n=this.state).chartType,t=n.showSingleAspect,e=this.props.chartTypeValue.couAspectType,n=this.data,a=n,n=c,r=t?"aspect2":e,i=this.props.chartTypeValue.countType,c=o,t=this.wrapRef.getBoundingClientRect().width,e=a.map(function(e){return e[r]}),o=.8*t/(42*e.length),t=1<(0,s.jD)(e.join(""),12)/(.4*t),c={title:{text:n,top:"13"},grid:{left:36,right:36,top:72,bottom:30,containLabel:!0},dataZoom:[{show:o<1,type:"slider",left:"5%",right:"5%",bottom:15,height:16}],tooltip:{trigger:"item",formatter:function(e){var t=e.name,e=e.dataIndex;return"<div>\n            <p>"+t+'</p>\n            <p>\n            <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#15B374;"></span>\n              正面声量:\n              <span>'+("count"===i?a[e].positive:(Number(a[e].positive)/(Number(a[e].negative)+Number(a[e].positive))*100).toFixed(2)+"%")+'</span>\n            </p>\n            <p>\n              <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#D96969;"></span>\n              负面声量:\n              <span>'+("count"===i?a[e].negative:(Number(a[e].negative)/(Number(a[e].negative)+Number(a[e].positive))*100).toFixed(2)+"%")+"</span>\n            </p>\n          </div>"}},legend:{top:40,left:20,right:40,itemWidth:14,itemHeight:12,type:"scroll",pageIconSize:12,data:["负面声量","正面声量"],icon:u.W4.square},xAxis:{data:e,axisLabel:{rotate:t?45:0,margin:t?15:8,formatter:function(e){return 6<e.length?e.substring(0,6)+"...":e}},triggerEvent:!0},yAxis:{type:"value",min:0,interval:"count"===i?void 0:.2,axisLabel:{formatter:"count"===i?void 0:function(e){return(100*e).toFixed(0)+"%"}}},series:[{type:"bar",name:"负面声量",data:"count"===i?a.map(function(e){return{value:Number(e.negative),couAspectType:r}}):a.map(function(e){return{value:Number(e.negative)/(Number(e.negative)+Number(e.positive)),couAspectType:r}}),stack:"c1"===c?"":"two",barMaxWidth:24,barGap:"2%",itemStyle:{borderWidth:2,borderColor:"#fff"}},{type:"bar",name:"正面声量",data:"count"===i?a.map(function(e){return{value:Number(e.positive),couAspectType:r}}):a.map(function(e){return{value:Number(e.positive)/(Number(e.negative)+Number(e.positive)),couAspectType:r}}),stack:"c1"===c?"":"two",barMaxWidth:24,barGap:"2%",itemStyle:{borderWidth:2,borderColor:"#fff"}}]},this.chartRef.clear(),this.chartRef.setOption(c))},a.render=function(){var i=this,e=this.props,t=e.loading,o=e.title,a=e.titleOverlay,n=e.dataAspect2,r=e.flavor,c=e.chartTypeValue,s=e.updateFlavors,l=e.chartTypeChange,p=this.state,u=p.chartType,e=p.showSingleAspect,p=c.couAspectType,c=c.countType,m=e?"aspect2":p,h=this.data,p=this.onClick;return v().createElement("div",{className:"bar_trend_chart",style:{height:"100%"},ref:function(e){return i.wrapRef=e}},v().createElement(d.Z,{data:h,loading:t,style:{height:"100%"},renderTitle:v().createElement(C.Z,{title:o,data:h,titleOverlay:a,onMoreClick:function(e){var t,a,n,r;t=i.chartRef,a=h,n=o,r=m,"image"===(e=e)?(0,N._v)(t,n):"data"===e&&(a=[a.reduce(function(e,t){return[].concat(e,[[t[r],t.negative,t.positive,t.messageTotal]])},[["aspect1"===r?"一级指标":"二级指标","负面","正面","消息总数"]])],(0,N.aT)(a,n))}},n&&v().createElement(b.Z,{options:_.Rx,activeObj:m,flavor:r.couAspectType,onFlavorChange:function(e){i.setState({showSingleAspect:null}),s({key:"couAspectType",value:e})},onChange:function(e){i.setState({showSingleAspect:null}),l({key:"couAspectType",value:e})}}),v().createElement(b.Z,{options:_.FP,activeObj:c,flavor:r.countType,onFlavorChange:function(e){return s({key:"countType",value:e})},onChange:function(e){return l({key:"countType",value:e})}}),v().createElement(R,{onChange:function(e){return i.setState({chartType:e})},chartType:u}))},v().createElement(y.Z,{theme:"yunting_neg_pos",className:"yt_echarts_style",option:{},style:{width:"100%",height:"100%"},onChartReady:function(e){return i.chartRef=e},onEvents:{click:p}})))},i()(e,[{key:"data",get:function(){var e=this.props,t=e.dataAspect1,a=e.dataAspect2,e=e.chartTypeValue,n=this.state.showSingleAspect,e=e.couAspectType;return n?a.filter(function(e){return e.aspect1===n}):"aspect1"===e?t:a}}]),e}(v().Component);const w=n;n.propTypes={title:t().string,loading:t().bool,data:t().oneOfType([t().string,t().object]),onClick:t().func};var S=a(60222);const h=function(e){var t=e.onFilterChange,a=e.onFilterReady,n=e.dataAspect1,r=e.dataAspect2,i=e.metion,o=e.positiveRate,c=e.negativeRate,s=e.setCompare,l=(e.MentionRateLoading,e.mentionLoading),p=e.positiveRateLoading,u=e.negativeRateLoading,m=e.chartTypeValue,h=e.flavor,d=e.chartTypeChange,y=e.updateFlavors,e=g()(e,["onFilterChange","onFilterReady","dataAspect1","dataAspect2","metion","positiveRate","negativeRate","setCompare","MentionRateLoading","mentionLoading","positiveRateLoading","negativeRateLoading","chartTypeValue","flavor","chartTypeChange","updateFlavors"]);return v().createElement("div",{className:"yt_compare_self_wrapper"},v().createElement(E.Z,{pageType:"PRODUCT_CUSTOMER",values:[],onReady:a,onChange:t}),v().createElement("div",{className:"content"},v().createElement(T.Z,{className:"aspect_card",orientation:"horizontal",colNumber:4,showList:["com_key1","com_key2","com_key3"]},v().createElement(S.Z,{key:"com_key1",data:(0,_.LK)(i),tip:(0,_.QS)(),compare:i&&i.sameRateType,style:{width:"100%",height:"160px"},onSetting:function(e){return s({cartType:"ASPECT_MENTION_RATE_CARD",sameRateType:e.compareValue})},loading:l}),v().createElement(S.Z,{key:"com_key2",data:(0,_.jr)(o),tip:(0,_.gF)(),compare:o&&o.sameRateType,style:{width:"100%",height:"160px"},onSetting:function(e){return s({cartType:"POSITIVE_ASPECT_RATE_CARD",sameRateType:e.compareValue})},loading:p}),v().createElement(S.Z,{key:"com_key3",data:(0,_.nW)(c),tip:(0,_.Oy)(),compare:c&&c.sameRateType,style:{width:"100%",height:"160px"},onSetting:function(e){return s({cartType:"NEGATIVE_ASPECT_RATE_CARD",sameRateType:e.compareValue})},loading:u})),v().createElement(T.Z,{className:"chart_wrap",orientation:"vertical",showList:["w1","w2"]},v().createElement("div",{key:"w1",className:"bar_chart"},v().createElement(A,{title:"指标提及率",titleOverlay:"「指标提及率」是指选中的消息中，具体指标的声量÷消息数量。",dataAspect1:n,dataAspect2:r,chartTypeValue:m,flavor:h,chartTypeChange:d,updateFlavors:y})),v().createElement("div",{key:"w2",className:"bar_chart"},v().createElement(w,f()({title:"指标声量",titleOverlay:"指标的排序依据“指标提及率”的排序。",dataAspect1:n,dataAspect2:r,chartTypeValue:m,flavor:h,chartTypeChange:d,updateFlavors:y},e))))))};var k=a(35239),t=a(55609),a=a(64396),x=a.Z.product.customer,O=a.Z.screening,a=function(t){function e(e){var i=t.call(this,e)||this;return i._handleOnFilterReady=function(e){l()(e,i.props.filter)||(i.props.save({projectId:k.t.get(k.V.curProject).id,filter:e}),i.props.fetchParams({projectId:k.t.get(k.V.curProject).id,filter:e}).then(function(){i.fetchData()}))},i._handleOnFilterChange=function(e){i.props.save({filter:e}),i.fetchData()},i.fetchData=function(){var e=i.props,t=e.fetchMentionRate,a=e.save,n=e.getMention,r=e.getPositiveRate,e=e.getNegativeRate;a({dataAspect1:void 0,dataAspect2:void 0,metion:void 0,positiveRate:void 0,negativeRate:void 0}),Promise.all([t({aspectType:"aspect1"}),n(),r(),e()]).then(function(){t({aspectType:"aspect2"})})},i.event={onFilterReady:i._handleOnFilterReady,onFilterChange:i._handleOnFilterChange},i}return r()(e,t),e.prototype.render=function(){return v().createElement(h,f()({},this.props,this.state,this.event))},e}(v().PureComponent);const F=(0,t.connect)(function(e){var t=e.loading,e=g()(e,["loading"]);return f()({},e[x],{curScreeningMap:e[O].curScreeningMap,MentionRateLoading:t.effects[x+"/fetchMentionRate"]||!1,mentionLoading:t.effects[x+"/getMention"]||!1,positiveRateLoading:t.effects[x+"/getPositiveRate"]||!1,negativeRateLoading:t.effects[x+"/getNegativeRate"]||!1})},function(t){return{save:function(e){return t({type:x+"/save",payload:e})},clean:function(){return t({type:x+"/clean"})},fetchParams:function(e){return t({type:x+"/fetchParams",payload:e})},updateFlavors:function(e){return t({type:x+"/updateFlavors",payload:e})},fetchMentionRate:function(e){return t({type:x+"/fetchMentionRate",payload:e})},getMention:function(){return t({type:x+"/getMention"})},getPositiveRate:function(){return t({type:x+"/getPositiveRate"})},getNegativeRate:function(){return t({type:x+"/getNegativeRate"})},setCompare:function(e){return t({type:x+"/setCompare",payload:e})},chartTypeChange:function(e){return t({type:x+"/chartTypeChange",payload:e})}}})(a)},27310:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});function l(e){return e=e.height,p().createElement("div",{style:{background:"#fff",height:e,display:"flex",alignItems:"center",justifyContent:"center"}},"Template")}var t=a(85354),r=a.n(t),t=a(67294),p=a.n(t),t=a(45697),t=a.n(t),o=a(92360),a=function(n){function e(){for(var i,e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(i=n.call.apply(n,[this].concat(t))||this).clientHeight=160,i.notShowList=[],i._handleOnCheckBoxChange=function(e,t){var a,n=i.props,r=n.onChange,n=n.showList;e?(a=n.slice()).push(t):a=n.filter(function(e){return e!==t}),r&&r(a)},i._renderEditableFrame=function(t,e){var a=i.props,n=a.editable,a=a.colNumber,a=void 0===a?1:a;return p().createElement("div",{id:t.key,key:t.key,style:{width:"calc("+100/a+"% - 12px)"},className:n?"child_editable":""},t,n&&p().createElement(o.Checkbox,{checked:e,className:"checkbox_style",onChange:function(e){return i._handleOnCheckBoxChange(e,t.key)}}))},i}r()(e,n);var t=e.prototype;return t.componentDidMount=function(){var e=this.props.children,e=e instanceof Array?e[0]:e,e=document.getElementById(e.key);e&&(this.childHeight=e.clientHeight)},t.render=function(){var i=this,e=this.props,t=e.className,a=void 0===t?"":t,n=e.editable,o=void 0!==n&&n,t=e.orientation,n=void 0===t?"horiziontal":t,t=e.children,e=e.showList,c=void 0===e?[]:e,s=t instanceof Array?t:[t];return this.notShowList=[],p().createElement("div",{className:"yt_drag_layout_wrapper yt_drag_layout_"+n+" "+a},s.reduce(function(e,t,a){var n=c.indexOf(t.key);if(-1<n?e[n]=i._renderEditableFrame(t,!0):i.notShowList.push(t.key),a!==s.length-1)return e;var r=e.filter(function(e){return e});return o&&0<i.notShowList.length&&i.notShowList.forEach(function(e){r.push(i._renderEditableFrame(p().createElement(l,{key:e,height:i.childHeight}),!1))}),r},[]))},e}(p().PureComponent);const n=a;a.propTypes={orientation:t().oneOf(["horizontal","vertical"]),colNumber:t().number,className:t().oneOfType([t().string,t().object]),editable:t().bool,showList:t().arrayOf(t().string),onChange:t().func}},60222:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});function i(e){var t=e.value,a=e.getValue,n=(t=d().useState(t))[0],r=t[1];return d().createElement("div",{className:"yt_modal_dashboard_edit_wrapper"},d().createElement("div",{className:"content_item"},d().createElement("span",null,"同比类型"),d().createElement("span",null,d().createElement(o(),{className:"content_item_select",value:(s.find(function(e){return e.value===n})||{}).label,onChange:function(e){var t;r(t=e),setTimeout(function(){return a&&a(t)},0)},inputIcon:d().createElement("i",{className:"icon-cem_arrow-launches",style:{color:"#8C8C8C"}})},s.map(function(e){return d().createElement(o().Option,{value:e.value,key:e.value},e.label)})))))}var n=a(67154),m=a.n(n),t=a(37316),h=a.n(t),n=a(67294),d=a.n(n),t=a(45697),n=a.n(t),y=a(25713),g=a(43036),t=a(2258),o=a.n(t),c=a(57522),s=[{value:"WEEK",label:"周"},{value:"MONTH",label:"月"},{value:"QUATER",label:"季"},{value:"YEAR",label:"年"}],t=function(r){return new Promise(function(e,t){var a=r.value,n=m()({},r,{titleText:d().createElement("div",{className:"indicator_card_comfirm"},d().createElement("span",null,"同比设置"),d().createElement("span",{onClick:function(){return window.open("https://www.yuque.com/docs/share/5615d490-0056-4bb9-b208-bf747c9048c0")}},"查看更多")),content:d().createElement(i,m()({},r,{getValue:function(e){a=e}}))});n.onOk=function(){return e(a)},n.onCancel=t,(0,c.Z)(n)})};const f=t;t.propTypes={getValue:n().func,value:n().string};function v(e){return!["",null,void 0].includes(e)}function E(e){return e&&(5<e.length?String(e).substring(0,5)+"...":e)}function T(e,t,a){var r,i;"image"===e?(r=t,i=(0,l.UO)(a[0]&&a[0].name),new Promise(function(e){var t=r.offsetWidth,a=r.cloneNode(!0),n=document.createElement("canvas");n.width=12*t,n.height=1920,n.style.width=t+"px",n.style.height="160px",n.className="yt_trend_list_canvas",n.getContext("2d").scale(12,12),a.style.width=t+"px",a.style.height="160px",a.style.position="absolute",a.style.top="0px",a.style.left="0px",a.style.zIndex=-1,a.style.opacity=0,document.body.appendChild(a),p()(a,{allowTaint:!0,taintTest:!1,canvas:n,useCORS:!0,width:t,height:160,onrendered:function(e){document.body.appendChild(e);e=e.toDataURL("png");(0,u.saveAs)(e,i,"image/png"),setTimeout(function(){document.body.removeChild(a),document.body.removeChild(document.querySelector(".yt_trend_list_canvas"))},0)}})})):"data"===e&&(e=[a.reduce(function(e,t){return[].concat(e,[[t.name,t.count]])},[])],(0,l.aT)(e,a[0]&&a[0].name))}var b=a(8201),C=a(39432),l=a(94644),t=a(29531),p=a.n(t),u=a(93162),_=[{title:"导出图片",type:"image"},{title:"导出数据",type:"data"}],N=[{title:"设置同比",type:"compare"}];a=function(e){function n(e){return a&&a[e]?a[e]:{}}function t(e){if(n(e).name){if(v(n(e).count)){var t=n(e).count;switch(n(e).format){case"myriad":t=(0,C.hE)(t);break;case"percent":a=t,t=v(null)?null:0===a?"0.00%":Math.abs(100*a).toFixed(2)+"%"}return t}return"--"}var a;return""}var a=e.data,r=e.tip,i=e.compare,o=e.onSetting,c=e.loading,s=e.paragraph,l=h()(e,["data","tip","compare","onSetting","loading","paragraph"]),e=d().useState(),p=e[0],u=e[1],e=function(e){return"myriad"!==n(e).format?t(e):n(e).count.toLocaleString()};return d().createElement("div",m()({className:"indicator_card"},l,{ref:function(e){return u(e)}}),d().createElement(b.Z,{data:a,className:"section_com",loading:c,paragraph:s},d().createElement("div",{className:"title_wrap"},d().createElement("span",{className:"chart_title"},d().createElement("span",{className:"chart_title_name"},n(0).name,r&&d().createElement(g.Z,{placement:"top",overlayClassName:"alert-log-tips",overlay:r},d().createElement("i",{className:"icon-cem_file1","data-html2canvas-ignore":!0})))),d().createElement("span",{className:"chart_title_buttons","data-html2canvas-ignore":!0},d().createElement(y.Z,{onClick:function(e){"compare"===e?f({value:i}).then(function(e){o({compareValue:e})}):T(e,p,a)},options:_.concat(o?N:[])}))),d().createElement("div",{className:"section_mid"},d().createElement("p",null,d().createElement(g.Z,{placement:"top",overlay:e(0)},d().createElement("section",null,t(0)))),n(1).name||n(2).name?d().createElement("p",null,d().createElement("span",null,d().createElement("span",null,d().createElement(g.Z,{placement:"top",overlay:n(1).name},d().createElement("section",{className:"name"},n(1).name))),d().createElement("span",null,d().createElement(g.Z,{placement:"top",overlay:e(1)},d().createElement("section",null,t(1))),"boolean"==typeof n(1).rise&&d().createElement("i",{className:n(1).rise?"icon-cem_three-states-up":"icon-cem_three-states-down"}))),d().createElement("span",null,d().createElement("span",null,d().createElement(g.Z,{placement:"top",overlay:n(2).name},d().createElement("section",{className:"name"},n(2).name))),d().createElement("span",null,d().createElement(g.Z,{placement:"top",overlay:e(2)},d().createElement("section",null,t(2))),"boolean"==typeof n(2).rise&&d().createElement("i",{className:n(2).rise?"icon-cem_three-states-up":"icon-cem_three-states-down"})))):null),(n(3).name||n(4).name)&&d().createElement("div",{className:"section_bottom"},d().createElement("span",null,d().createElement("span",null,d().createElement(g.Z,{placement:"top",overlay:n(3).name},d().createElement("section",{className:"name"},E(n(3).name)))),d().createElement("span",null,d().createElement(g.Z,{placement:"top",overlay:e(3)},d().createElement("section",null,t(3))))),n(4).name?d().createElement("span",null,d().createElement("span",null,d().createElement(g.Z,{placement:"top",overlay:n(4).name},d().createElement("section",{className:"name"},E(n(4).name)))),d().createElement("span",null,d().createElement(g.Z,{placement:"top",overlay:e(4)},d().createElement("section",null,t(4))))):null)))};const r=a;a.propTypes={data:n().arrayOf(n().shape({name:n().string,count:n().oneOfType([n().string,n().number]),rise:n().bool,format:n().oneOfType(["myriad","percent",void 0])})),tip:n().oneOfType([n().string,n().node]),compare:n().string,onSetting:n().func,loading:n().bool,paragraph:n().arrayOf(n().string)}}}]);