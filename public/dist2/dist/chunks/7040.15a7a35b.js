(self.webpackChunkyunting=self.webpackChunkyunting||[]).push([[7040],{56172:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>A});var a=n(37316),i=n.n(a),r=n(67154),o=n.n(r),t=n(85354),l=n.n(t),a=n(67294),w=n.n(a),r=n(55609),I=n(26198),t=n(81506),s=n.n(t),a=n(45697),t=n.n(a),u=n(92360),p=n(43036),a=n(18446),d=n.n(a),a=function(e){function t(t){var c=e.call(this,t)||this;c._setPadShowFalse=function(){c.state.show&&c.setState({show:!1})},c._handleParentClick=function(e){c.state.show&&(e.stopPropagation(),e.nativeEvent.stopImmediatePropagation())},c._handleTriggerOnClick=function(){var e=c.state.show;setTimeout(function(){c.setState({show:!e})},0)},c.valueChange=function(n){var e=c.state.options,e=function t(e){return e.filter(function(e){return!!(e.id===n||e.values&&0<t(e.values).length)&&(e.values=e.values&&t(e.values).length?t(e.values):void 0,!0)})}(JSON.parse(JSON.stringify(e)));c.setState({value:function t(e){return e.map(function(e){return Object.assign({id:e.id},e.values?{value:t(e.values)}:{})})[0]}(e)})},c.setOpenItem=function(e,n){function a(e,t){e.some(function(e){return e.id===t?(e.open=!n,c.setState({options:JSON.parse(JSON.stringify(i))}),!0):(e.values&&a(e.values,t),!1)})}var i=c.state.options;a(i,e.id)},c.getValue=function(e){return e.value?c.getValue(e.value):e.id},c.getIsFatherSel=function(e,t){return e.id===t||!!e.value&&c.getIsFatherSel(e.value,t)},c.getKeywordFilterList=function(){var e=c.state,n=e.keyword,e=e.options;return function t(e){return e.filter(function(e){return e.values&&0===t(e.values).length&&(e.values=void 0),e.values&&(e.values=t(e.values)),-1!==e.title.trim().toLocaleLowerCase().indexOf(n.trim().toLocaleLowerCase())||!!e.values&&0<t(e.values).length})}(JSON.parse(JSON.stringify(e)))},c.renderOption=function(e,n){var t=c.props,a=t.objName,i=t.flavor,r=t.onFlavorChange,t=c.state,o=t.value,l=t.keyword,s=c.getValue(o);return e.map(function(t){var e=c.getIsFatherSel(o,t.id);return w().createElement("div",{key:t.id},w().createElement("div",{className:"panel-item "+(t.disabled?"disabled":""),style:{paddingLeft:18+14*n+"px"}},w().createElement("div",{className:"panel_wrap"},t.values?w().createElement("i",{onClick:function(){return c.setOpenItem(t,t.open)},className:"icon-cem_show-more "+(t.open||0<l.length?"":"rotate")}):w().createElement("i",{style:{width:"14px",display:"inline-block"}}),w().createElement("span",null,w().createElement(u.Radio,{className:e?"fatherSel":"",style:{maxWidth:224-14*n+"px"},checked:s===t.id,onChange:function(){c.valueChange(t.id)},value:t.id},w().createElement("span",{title:t.title},t.title)))),void 0!==i&&w().createElement("i",{className:i===t.value?"icon-cem_star":"icon-cem_star-filling star_hide",onClick:function(){var e;i!==t.value&&r(a?((e={})[a]=t.value,e):t.value)}})),t.values&&(t.open||0<l.length)&&c.renderOption(t.values,n+1))})},c.getTitle=function(){function n(e,t){return e.some(function(e){return e.id===t})?e.filter(function(e){return e.id===t})[0].title:e.map(function(e){return e.values}).filter(function(e){return e}).length?n(e.map(function(e){return e.values}).flat(1),t):""}function t(e){return n(a,e.id)+"/"+(e.value?t(e.value):"")}var a=c.state.options,e=s()(c).value;return t(e).substring(0,t(e).length-1)};function n(e){return e.map(function(e){return c.getIsFatherSel(t.defaultValue,e.id)&&(e.open=!0),e.values&&(e.values=n(e.values)),e})}return c.value=t.defaultValue,c.state={show:!1,firstLiHover:!1,options:n(t.options),value:t.defaultValue,keyword:""},c}l()(t,e);var n=t.prototype;return n.componentDidMount=function(){window.addEventListener("click",this._setPadShowFalse)},n.componentWillUnmount=function(){window.removeEventListener("click",this._setPadShowFalse)},n.render=function(){var t=this,e=this.state,n=e.show,a=e.options,i=e.value,r=e.keyword,o=this.props,l=o.preTitle,s=o.showTitle,e=void 0===s||s,s=o.overlay,c=o.objName,a=r?this.getKeywordFilterList():a;return w().createElement("div",{className:"single-cascader-button-wrapper",onClick:this._handleParentClick},w().createElement("div",{className:"button_content"},w().createElement("span",{onClick:this._handleTriggerOnClick},w().createElement("span",{className:"button-trigger "+(n?"sel":"")},e&&w().createElement(w().Fragment,null,l&&w().createElement("span",{className:"pre-title"},l,"："),w().createElement("span",{className:"button-title"},this.getTitle())),w().createElement("i",{className:"icon-cem_arrow-launches",style:{transform:n?"rotate(-180deg)":""}})),s&&w().createElement("span",{style:{marginLeft:4}},w().createElement(p.Z,{placement:"top",overlayClassName:"alert-log-tips",overlay:s},w().createElement("i",{className:"icon-cem_file1"})))),w().createElement("div",{className:"button-panel "+(n?"active":""),style:{minWidth:280,zIndex:99}},w().createElement("div",{className:"keyword_wrap"},w().createElement(u.Input,{value:r,placeholder:"请输入关键词",className:"search",size:"small",icon:r?"close":"search",onChange:function(e){return t.setState({keyword:e})},onIconClick:function(){return t.setState({keyword:""})}})),w().createElement("div",{className:"button_wrap"},a.length?this.renderOption(a,0):w().createElement("div",{className:"noData"},"没有相关选项")),w().createElement("div",{className:"bottom_wrap"},w().createElement(u.Button,{type:"primary",onClick:function(){var e;t.setState({show:!1}),d()(t.state.value,t.value)||t.props.onChange(((e={})[c]=i,e)),t.value=i}},"确定"),w().createElement(u.Button,{onClick:function(){return t.setState({show:!1,value:t.value})},style:{marginRight:"8px"}},"取消")))))},t}(w().PureComponent);a.propTypes={onChange:t().func.isRequired,options:t().array.isRequired,objName:t().any,preTitle:t().string,sufTitle:t().string,showTitle:t().bool,overlay:t().string,flavor:t().string,onFlavorChange:t().func};const c=a,R=function(t){function e(e){e=t.call(this,e)||this;return e.state={},e}return l()(e,t),e.prototype.render=function(){var e=this.props,t=e.onChange,n=e.defaultValue,a=e.options,e=e.objName;return w().createElement(c,{preTitle:"分析标签",onChange:t,defaultValue:n,options:a,objName:e})},e}(w().Component);var h=n(8201),g=n(50976),y=n(83680),T=n(24062),E=n(98191),C=n(39432),O=n(94644),_=n(65556),N=n(70715),S=n(90126);function b(e,t,n,a){var i=n&&0<n.length&&n[0].values[0].values.map(function(e){return e.split("_")[1]}),n=[];try{if(e&&e instanceof Array){var n=e.sort(function(e,t){return!!(i&&t.name&&e.name)&&i.indexOf(e.name)-i.indexOf(t.name)}),r=[];try{r=JSON.parse((0,_.iM)(n))[0].dateList.map(function(e){return[e.date]})}catch(e){}var o=JSON.parse((0,_.iM)(n)).reduce(function(e,n){return n.dateList&&n.dateList.forEach(function(t){return e.some(function(e){return e[0]===t.date})&&e.find(function(e){return e[0]===t.date}).push("POSITIVE"===a?0===n.total?0:t.positive/n.total:"NEGATIVE"===a?0===n.total?0:t.negative/n.total:0===n.total?0:t.count/n.total)}),e},[].concat(r)).filter(function(e){return 1<e.length}),l=[];try{l=n&&n.filter(function(e){return!e.total}).map(function(e){return e.name})}catch(e){}var s=["日期"].concat(l);return{length:l&&l.length,datasets:[{dimensions:s,source:o}],type:"proportion"}}}catch(e){}}function k(e,t,n,a){var i=n&&0<n.length&&n[0].values[0].values.map(function(e){return e.split("_")[1]}),n=[];try{if(e&&e instanceof Array){var n=e.sort(function(e,t){return!!(i&&t.name&&e.name)&&i.indexOf(e.name)-i.indexOf(t.name)}),r=[],o=[];try{r=n&&n.map(function(e){return e.name}),o=n&&n[0]&&n[0].dateList.map(function(e){return[e.date]})}catch(e){}var l=["日期"].concat(r),s=n&&JSON.parse((0,_.WZ)(n)).reduce(function(e,t){return t.dateList.forEach(function(t){return e.some(function(e){return e[0]===t.date})&&e.find(function(e){return e[0]===t.date}).push("POSITIVE"===a?0===t.count?0:t.positive/t.count:0===t.count?0:t.negative/t.count)}),e},[].concat(o)).filter(function(e){return 1<e.length});return{length:n.length,datasets:[{dimensions:l,source:s}],type:"proportion"}}}catch(e){}}function F(e,t,n,a){var i=n&&0<n.length&&n[0].values[0].values.map(function(e){return e.split("_")[1]}),n=[];try{if(e&&e instanceof Array){var n=e.sort(function(e,t){return!!(i&&t.name&&e.name)&&i.indexOf(e.name)-i.indexOf(t.name)}),r=[],o=[];try{r=n&&n.map(function(e){return e.name}),o=n&&n[0]&&n[0].dateList.map(function(e){return[e.date]})}catch(e){}var l=["日期"].concat(r),s=(0,_.WZ)(n)&&JSON.parse((0,_.WZ)(n)).reduce(function(e,t){return t.dateList.forEach(function(t){return e.some(function(e){return e[0]===t.date})&&e.find(function(e){return e[0]===t.date}).push("POSITIVE"===a?t.positive:"NEGATIVE"===a?t.negative:t.count)}),e},[].concat(o)).filter(function(e){return 1<e.length});return{length:n.length,datasets:[{dimensions:l,source:s}],type:"vol"}}}catch(e){}}var V=[{title:"负面声量",value:"NEGATIVE"},{title:"正面声量",value:"POSITIVE"},{title:"总声量",value:"TOTAL"}],j=[{title:"负面相对占比",value:"NEGATIVE"},{title:"正面相对占比",value:"POSITIVE"},{title:"总相对占比",value:"TOTAL"}],L=[{title:"差评率",value:"NEGATIVE"},{title:"好评率",value:"POSITIVE"}],a=function(e){var s=e.analysisModel,c=e.title,t=e.options,n=e.loading,u=e.data,a=e.dateRange,p=e.timeType,i=e.fTimeType,d=e.volType,r=e.fVolType,o=e.onFilterChange,l=e.onFlavorChange,m=e.onClick,e=w().useState(void 0),f=e[0],v=e[1];return w().useEffect(function(){var e,r,o,t,n,a,l,i;f&&((0,h.P)(u)?(e=u,r=c,o=Object.values(p)[0],t=s,n=Object.values(d)[0],a=("负面相对占比走势"===r||"正面相对占比走势"===r||"总相对占比走势"===r?b:"差评率走势"===r||"好评率走势"===r?k:F)(e,0,t,n),e=a.datasets,t=a.length,l=a.type,a=e&&e[0].dimensions.slice(1),i=N.Fq.slice(),a.forEach(function(e,t){e=S.fv[e.toLocaleLowerCase()];e&&i.splice(t,0,e["TOTAL"===n?1:"NEGATIVE"===n?0:2])}),t={title:{text:r},color:i,grid:{top:80,left:48,right:"4%",bottom:40,containLabel:!0},dataset:JSON.parse(JSON.stringify(e)),legend:{top:40,left:20,itemWidth:14,itemHeight:12,type:"scroll",pageIconSize:12,data:a,icon:N.W4.lineRing},dataZoom:[{show:"slider",bottom:15,xAxisIndex:0,height:16,handleSize:"100%",showDetail:!1}],tooltip:{trigger:"item",formatter:function(e){var t=e.name,n=e.marker,a=e.seriesName,i=e.seriesIndex,i=e.data[i+1];return'<span class="yt_echart_tooltip_title">'+(r.includes("走势")?r.replace("走势",""):r)+'<span style="color: #8C8C8C;font-weight: 500;">（'+(0,C.yV)(o,t)+"）</span></span><br />"+n+" "+a+"："+("proportion"===l?(100*i).toFixed(2)+"%":C.ZP.getApproximateNum(i))}},xAxis:{type:"category",boundaryGap:!1,axisLabel:{formatter:function(e){return(0,C.yV)(o,e)}}},yAxis:{type:"value",axisLabel:{formatter:function(e){return"proportion"===l?(100*e).toFixed(2)+"%":(0,C.uf)(e)}}},series:Array.from({length:t}).map(function(e,t){return{type:"line"}})},f.clear(),f.setOption(t)):v(void 0))},[u,f]),w().createElement(h.Z,{data:u,className:"yt_trend_chart_wrapper",loading:n,renderTitle:w().createElement(E.Z,{title:c,data:u,onMoreClick:function(e){var t,n,a,i,r;t=f,n=e,a=u,i=c,Object.values(p)[0],r=s,e=Object.values(d)[0],"image"===n?(0,O._v)(t,i):"data"!==n||(e=("负面相对占比走势"===i||"正面相对占比走势"===i||"总相对占比走势"===i?b:"差评率走势"===i||"好评率走势"===i?k:F)(JSON.parse(JSON.stringify(a)),0,r,e).datasets)&&(e=[e[0].dimensions].concat(e[0].source),(0,O.aT)([e],i))}},w().createElement(T.Z,{options:t,objName:Object.keys(d)[0],activeObj:Object.values(d)[0],flavor:r,onFlavorChange:l,onChange:o}),a&&w().createElement(y.Z,{dateRange:a,objName:Object.keys(p)[0],defaultValue:Object.values(p)[0],collectValue:i,updateCollectValue:function(e){var t;return l(((t={})[Object.keys(p)[0]]=e,t))},onChange:function(e){var t;return o(((t={})[Object.keys(p)[0]]=e,t))}}))},w().createElement(g.Z,{theme:"yunting_multi_color",className:"yt_echarts_style",option:{},style:{width:"100%",height:"100%"},onChartReady:function(e){return v(e)},onEvents:{click:m}}))};const P=a;a.propTypes={title:t().string,loading:t().bool,data:t().oneOfType([t().string,t().object]),dateRange:t().number,timeType:t().object,fTimeType:t().string,formulaType:t().object,fFormulaType:t().string,onFilterChange:t().func,onFlavorChange:t().func,onClick:t().func};const m=function(e){var t=e.onFilterReady,n=e.onFilterChange,a=e.label,i=e.filterData,r=e.loading,o=e.volumeData,l=e.volTimeType,s=e.fVolTimeType,c=e.volType,u=e.fVolType,p=e.ratioLoading,d=e.ratioData,m=e.ratioTimeType,f=e.fRatioTimeType,v=e.ratioType,h=e.fRatioType,g=e.cmtLoading,y=e.commentData,T=e.cmtTimeType,E=e.fCmtTimeType,C=e.cmtType,O=e.fCmtType,_=e.analysisModel,N=e.dateRange,S=e.onFlavorChange,b=e.onVolumeClick;return w().createElement("div",{className:"yt_social_trend_wrapper"},w().createElement(I.Z,{pageType:location&&location.pathname.includes("brand")?"SOCIAL_TAG_BRAND_LINE":"SOCIAL_TAG_SERIES_LINE",onReady:t,onChange:n}),w().createElement("div",{className:"content",id:"social_tag_trend_content"},w().createElement("div",{className:"volume_charts"},i&&a&&w().createElement(R,{defaultValue:a,options:i,onChange:n,objName:"label"}),w().createElement(P,{analysisModel:_,title:""+(V.some(function(e){return e.value===c})?V.find(function(e){return e.value===c}).title:"负面声量"),loading:r,data:o,options:V,dateRange:N,timeType:{volTimeType:l},fTimeType:s,volType:{volType:c},fVolType:u,onFlavorChange:S,onFilterChange:n,onClick:function(e,t,n){return b(e,t,"vol")}}),w().createElement(P,{analysisModel:_,title:(j.some(function(e){return e.value===v})?j.find(function(e){return e.value===v}).title:"负面相对占比")+"走势",loading:p,data:d,options:j,dateRange:N,timeType:{ratioTimeType:m},fTimeType:f,volType:{ratioType:v},fVolType:h,onFlavorChange:S,onFilterChange:n,onClick:function(e,t,n){return b(e,t,"ratio")}}),w().createElement(P,{analysisModel:_,title:(L.some(function(e){return e.value===C})?L.find(function(e){return e.value===C}).title:"差评率")+"走势",loading:g,data:y,options:L,dateRange:N,timeType:{cmtTimeType:T},fTimeType:E,volType:{cmtType:C},fVolType:O,onFlavorChange:S,onFilterChange:n,onClick:function(e,t,n){return b(e,t,"cmt")}}))))};var D=n(87219),f=n(35239),v=n(64396).Z.social.tag.trend,n=function(t){function e(e){var E=t.call(this,e)||this;return E._handleOnFilterReady=function(e){E.props.fetchParams(o()({},e,{projectId:f.t.get(f.V.curProject).id,dateRange:e.dateFilter.numOfDays+Math.random(),type:E.props.type}))},E._handleOnFilterChange=function(e){var t=E.props,n=t.save,a=t.fetchVolumeData,i=t.fetchRatioData,r=t.fetchCmtData,t=t.label;e.filterValue&&(JSON.stringify(e.dateFilter)!==JSON.stringify(E.props.dateFilter)?n(o()({},e,{dateRange:e.dateFilter.numOfDays+Math.random()})):(a(t=o()({},e,{filtedObjs:(0,_.gJ)(E.props,e),label:t})),i(t),r(t))),e.volType?n({volType:e.volType}):e.ratioType?n({ratioType:e.ratioType}):e.cmtType&&n({cmtType:e.cmtType}),(e.volTimeType||e.label)&&a(o()({},e,{projectId:f.t.get(f.V.curProject).id})),(e.ratioTimeType||e.label)&&i(o()({},e,{projectId:f.t.get(f.V.curProject).id})),(e.cmtTimeType||e.label)&&r(o()({},e,{projectId:f.t.get(f.V.curProject).id}))},E._handleOnFlavorChange=function(e){E.props.updateFlavors(o()({},e,{type:E.props.type}))},E._handleOnVolumeClick=function(e,t,r){var n=e.seriesName,o=e.name,a=E.props,i=a.type,l=a.projectId,s=a.filterValue,c=a.volType,u=a.volumeData,p=a.volTimeType,d=a.ratioType,m=a.ratioData,f=a.ratioTimeType,v=a.cmtType,h=a.commentData,g=a.cmtTimeType,y=a.label,T=s.some(function(e){return"TAG_RULE"===e.id})&&s.find(function(e){return"TAG_RULE"===e.id}).values,e=s.some(function(e){return"DEFAULT"===e.id})&&s.find(function(e){return"DEFAULT"===e.id}),a=s.some(function(e){return"BRAND_SERIES"===e.id})&&s.find(function(e){return"BRAND_SERIES"===e.id}).values.some(function(e){return"SERIES"===e.id})&&s.find(function(e){return"BRAND_SERIES"===e.id}).values.find(function(e){return"SERIES"===e.id}).values,s=a&&a.map(function(e){return e.split("_")[0]}),t={projectId:l,dateFilter:(0,D.ZP)(E.props.dateFilter,function(e){var t="vol"===r?p:"ratio"===r?f:g,n="vol"===r?u[0].dateList.map(function(e){return e.date}):"ratio"===r?m[0].dateList.map(function(e){return e.date}):h[0].dateList.map(function(e){return e.date}),a=(0,C.LV)(o,t),i=a.from,a=a.to;"DAY"!==t&&"HOUR"!==t&&(parseInt(o)===parseInt(n[0])?i=e.from:parseInt(o)===parseInt(n[n.length-1])&&(a=e.to)),e.from=i,e.to=a}),filterModel:{label:y,emotion:"vol"===r?(0,_.jn)(c):"ratio"===r?(0,_.jn)(d):(0,_.jn)(v),messageType:["QUE_ANS_QUESTION","QUE_ANS_ANSWER","WEIBO","WEIBO_REPORT","COMMON_POST","NEWS_TEXT","COMPLAINT"],project:[l]},filterTip:"舆情看板/标签分析/"+("brandTrend"===i?"品牌走势":"机型走势")+"/"+t._model.option.title[0].text};T&&(t.filterModel.tag=T.map(function(e){return{id:e.id,special:"tag",values:e.values}})),e&&e.values.some(function(e){return"SOURCE"===e.id})&&(t.filterModel.source=e.values.find(function(e){return"SOURCE"===e.id}).values),"brandTrend"===i?(i=u.find(function(e){return e.name===n}).id,t.filterModel.brandsSeries=[{id:"brand",special:"brandsSeries",values:[i]}],a&&t.filterModel.brandsSeries.unshift({id:"series",special:"brandsSeries",values:s})):t.filterModel.brandsSeries=[{id:"series",special:"brandsSeries",values:s}],window.open("/inbox/public?"+encodeURIComponent(JSON.stringify(t)))},E.state={},E.event={onFilterReady:E._handleOnFilterReady,onFilterChange:E._handleOnFilterChange,onFlavorChange:E._handleOnFlavorChange,onVolumeClick:E._handleOnVolumeClick},E}l()(e,t);var n=e.prototype;return n.componentDidMount=function(){this.props.fetchAspectFliter({projectId:f.t.get(f.V.curProject).id})},n.componentWillUnmount=function(){this.props.clean()},n.render=function(){return w().createElement(m,o()({},this.props,this.state,this.event))},e}(w().PureComponent);const A=(0,r.connect)(function(e){var t=e.loading,e=i()(e,["loading"]);return o()({},e[v],{loading:t.effects[v+"/fetchVolumeData"]||!1,ratioLoading:t.effects[v+"/fetchRatioData"]||!1,cmtLoading:t.effects[v+"/fetchCmtData"]||!1})},function(t){return{fetchParams:function(e){return t({type:v+"/fetchParams",payload:e})},fetchAspectFliter:function(e){return t({type:v+"/fetchAspectFliter",payload:e})},updateFlavors:function(e){return t({type:v+"/updateFlavors",payload:e})},fetchVolumeData:function(e){return t({type:v+"/fetchVolumeData",payload:e})},fetchRatioData:function(e){return t({type:v+"/fetchRatioData",payload:e})},fetchCmtData:function(e){return t({type:v+"/fetchCmtData",payload:e})},save:function(e){return t({type:v+"/save",payload:e})},clean:function(e){return t({type:v+"/clean",payload:e})}}})(n)},83680:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var a=n(85354),i=n.n(a),r=n(67294),c=n.n(r),t=n(45697),a=n.n(t),o=n(35239),t=n(94184),u=n.n(t),l=[{name:"按天",id:"DAY"},{name:"按周",id:"WEEK"},{name:"按月",id:"MONTH"},{name:"按季",id:"QUARTER"},{name:"按年",id:"YEAR"}],s=function(n){function e(e){var t=Object.prototype.hasOwnProperty.call(e,"dateRange"),i=n.call(this,e)||this;return i.handleToggleDisplay=function(e){var t=i.state.panelShow;setTimeout(function(){return i.setState({panelShow:!t})},0)},i.handleParentClick=function(e){i.state.panelShow&&i.props.showFlavor&&(e.stopPropagation(),e.nativeEvent.stopImmediatePropagation())},i.handleCollapse=function(){return i.setState({panelShow:!1})},i.handleSwitchValue=function(t){var e,n=i.state.dateOptions,a=i.props.onChange;t!==i.state.value&&(e=(0<n.filter(function(e){return e.id===t}).length?n.filter(function(e){return e.id===t}):n)[0].id,i.setState({value:t},function(){return a&&a(e)}))},i.DATE_DIMENSIONS=t?[{id:"HOUR",name:"按时"}].concat(l):l,i.state={value:"",dateRange:parseInt(e.dateRange),dateOptions:t?[{id:"HOUR",name:"按时"}].concat(l):l,panelShow:!1},i}i()(e,n);var t=e.prototype;return t.componentDidMount=function(){var e=this.props,t=(e.uniqueId,e.dateRange),n=e.onChange,e=this.state.value;this.projectId=o.t.get(o.V.curProject).id,window.addEventListener("click",this.handleCollapse),Object.prototype.hasOwnProperty.call(this.props,"dateRange")?this.getCurrDateOptions(parseInt(t)):n&&n(e)},t.componentWillUnmount=function(){window.removeEventListener("click",this.handleCollapse)},t.componentDidUpdate=function(e,t){var n=this,a=this.props,i=a.dateRange,a=a.defaultValue;e.dateRange!==i&&this.setState({dateRange:parseInt(i)},function(){return n.getCurrDateOptions(parseInt(i))}),e.defaultValue!==a&&this.setState({value:a})},t.getCurrDateOptions=function(e,t){var n,a,i,r,o,l,s;1<=e&&(l=this.props,n=l.onChange,a=l.noHour,i=l.collectValue,r=l.defaultValue,o=this.DATE_DIMENSIONS,l=[],s="",s=1===e?(l=o.slice(a?1:0,a?2:1),(a?o.filter(function(e){return"按天"===e.name}):o.filter(function(e){return"按时"===e.name}))[0].id):1<e&&e<=7?(l=o.slice(a?1:0,a?3:2),o.filter(function(e){return"按天"===e.name})[0].id):7<e&&e<=30?(l=o.slice(a?1:0,a?4:3),o.filter(function(e){return"按天"===e.name})[0].id):30<e&&e<=60?(l=o.slice(1,a?5:4),o.filter(function(e){return"按天"===e.name})[0].id):60<e&&e<=180?(l=o.slice(1,a?5:4),o.filter(function(e){return"按周"===e.name})[0].id):(l=o.slice(1,a?6:5),o.filter(function(e){return"按月"===e.name})[0].id),l.some(function(e){return e.id===i})?s=i:t&&l.some(function(e){return e.id===r})&&(s=r),this.setState({dateOptions:l,value:s},function(){n&&n(s)}))},t.render=function(){var a=this,e=this.props,t=e.style,i=e.showFlavor,r=e.collectValue,o=e.updateCollectValue,n=this.state,l=n.dateOptions,s=n.value,e=n.panelShow,n=l.filter(function(e){return e.id===s})[0]&&l.filter(function(e){return e.id===s})[0].name;return c().createElement("div",{className:"date_dimension_selector_wrapper",style:t,onClick:this.handleParentClick},c().createElement("div",{className:e?"date_dimension_btn active":"date_dimension_btn",onClick:this.handleToggleDisplay},c().createElement("span",null,n),c().createElement("i",{className:"icon icon-cem_arrow-launches",style:{transform:e?"rotate(-180deg)":""}})),c().createElement("ul",{className:"date_dimension_panel",style:{display:e?"inline-block":"none"}},l.map(function(e){var t=e.name,n=e.id;return c().createElement("li",{className:u()(s===n?"date_dimension_item active":"date_dimension",i&&"flavor_style"),key:n,onClick:function(){return a.handleSwitchValue(n)}},c().createElement("span",null,t),c().createElement("i",{className:r===n?"icon-cem_star stared":"icon-cem_star",onClick:function(e){e.stopPropagation(),o(n===r?"":n)}}))})))},e}(r.Component);s.propTypes={noHour:a().bool,dateRange:a().number,defaultValue:a().oneOf(["HOUR","DAY","WEEK","MONTH","QUARTER","YEAR"]),onChange:a().func.isRequired,style:a().object,collectValue:a().string,updateCollectValue:a().func}},24062:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var t=n(85354),a=n.n(t),t=n(67294),f=n.n(t),t=n(45697),t=n.n(t),i=n(39432),v=n(43036),n=function(t){function e(e){var n=t.call(this,e)||this;return n.getPanelWidth=function(){var e=n.props,t=e.flavor,e=e.options,e=Math.max.apply(null,e.map(function(e){return(0,i.jD)(e.title,14)}))+2+10+32;return 100<(e+=void 0!==t?24:0)?e:100},n._setPadShowFalse=function(){n.state.show&&n.setState({show:!1})},n._handleParentClick=function(e){n.state.show&&n.props.showFlavor&&(e.stopPropagation(),e.nativeEvent.stopImmediatePropagation())},n._handleTriggerOnClick=function(){var e=n.state.show;setTimeout(function(){n.setState({show:!e})},0)},n.state={show:!1,firstLiHover:!1,panelWidth:n.getPanelWidth()},n}a()(e,t);var n=e.prototype;return n.componentDidMount=function(){window.addEventListener("click",this._setPadShowFalse)},n.componentWillUnmount=function(){window.removeEventListener("click",this._setPadShowFalse)},n.componentDidUpdate=function(e){var t=e.options,e=this.props.options;JSON.stringify(t)!==JSON.stringify(e)&&this.setState({panelWidth:this.getPanelWidth()})},n.render=function(){var e=this.state,t=e.show,n=e.panelWidth,a=this.props,i=a.activeObj,r=void 0===i?"":i,o=a.onChange,l=a.options,s=a.objName,c=a.preTitle,u=a.sufTitle,p=void 0===u?"":u,e=a.showTitle,i=void 0===e||e,u=a.overlay,e=a.divider,e=void 0===e?"right":e,d=a.flavor,m=a.onFlavorChange,a=l.find(function(e){return e.value===r}),a=""===r?p:a&&a.title;return f().createElement("div",{className:"single_select_button_wrapper single_select_diviver_"+e,onClick:this._handleParentClick},f().createElement("div",{className:"button_content"},f().createElement("span",{onClick:this._handleTriggerOnClick},f().createElement("span",{className:"button-trigger "+(t?"sel":"")},i&&f().createElement(f().Fragment,null,c&&f().createElement("span",{className:"pre-title"},c,"："),f().createElement("span",{className:"button-title"},a)),f().createElement("i",{className:"icon-cem_arrow-launches",style:{transform:t?"rotate(-180deg)":""}})),u&&f().createElement("span",{style:{marginLeft:4}},f().createElement(v.Z,{placement:"top",overlayClassName:"alert-log-tips",overlay:u},f().createElement("i",{className:"icon-cem_file1"})))),f().createElement("div",{className:"button-panel "+(t?"active":""),style:{minWidth:n}},l.map(function(n,e){return f().createElement("div",{className:"panel-item "+(n.value===r?"sel":"")+" "+(n.disabled?"disabled":""),key:n.value,onClick:function(){var e;n.disabled||o(s?((e={})[s]=n.value,e):n.value)}},n.title,f().createElement("i",{className:d===n.value?"icon-cem_star":"icon-cem_star-filling star_hide",onClick:function(e){var t;e.stopPropagation(),m(d===n.value?((t={})[s]="",t):((t={})[s]=n.value,t))}}))}))))},e}(f().PureComponent);n.propTypes={activeObj:t().any,onChange:t().func.isRequired,options:t().array.isRequired,objName:t().any,preTitle:t().string,sufTitle:t().string,showTitle:t().bool,overlay:t().string,divider:t().oneOf(["both","left","right"]),flavor:t().string,onFlavorChange:t().func};const r=n}}]);