(self.webpackChunkyunting=self.webpackChunkyunting||[]).push([[5213],{75213:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>ce});function p(e){return 16<(e=void 0===e?"":e).length?e.substring(0,15)+"...":e}var a=n(37316),l=n.n(a),i=n(67154),s=n.n(i),r=n(85354),o=n.n(r),c=n(67294),f=n.n(c),t=n(55609),u=(n(30467),n(55673)),d=(n(58136),n(5789)),m=(n(89626),n(70302)),h=(n(1025),n(65400)),g=n(61409),v=(n(9405),n(89552)),E=(n(76405),n(69843)),y=(n(15086),n(94055)),a=n(30381),C=n.n(a),S=n(43036),k=n(35239),i=n(45697),r=n.n(i),a=n(93913),N=n.n(a),i=n(81506),_=n.n(i),b=(n(35797),n(64749)),a=n(18446),w=n.n(a),F=n(92360),D=n(5133),L=function(t){function e(e){var i=t.call(this,e)||this;return i.sortList=function(e,t,n){n.stopPropagation(),n.nativeEvent.stopImmediatePropagation();var a=JSON.parse(JSON.stringify(i.state.value)),l=a.splice(e,1)[0];switch(t){case"top":a.unshift(l);break;case"up":a.splice(e-1,0,l);break;case"down":a.splice(e+1,0,l)}i.setState({value:a},function(e){return i.props.onChange&&i.props.onChange(i.getValue())})},i.state={value:e.defaultChecks||[],searchWord:""},i}o()(e,t);var n=e.prototype;return n.onSel=function(e,t){var n=this.state.value;(n=JSON.parse(JSON.stringify(n))).map(function(e){return e.id}).includes(t.id)?n.splice(n.findIndex(function(e){return e.id===t.id}),1):n.push(t),this.props.maxSelect&&n.length>this.props.maxSelect?D.Z.warning("最多选择"+this.props.maxSelect+"个对象！"):this.setState({value:n})},n.getValue=function(){return this.state.value},n.render=function(){var n=this,e=this.props,t=e.options,a=e.defaultChecks,l=e.maxSelect,i=e.onCancel,r=e.onChange,o=e.disabledValue,e=this.state,c=e.value,s=e.searchWord,u=a.map(function(e){return e.id}),d=c.map(function(e){return e.id}),t=t.filter(function(e){return!u.includes(e.id)}),a=a.filter(function(e){return!s||-1!==(e.label||"").toLocaleLowerCase().indexOf(s.trim().toLocaleLowerCase())}),t=t.filter(function(e){return!s||-1!==(e.label||"").toLocaleLowerCase().indexOf(s.trim().toLocaleLowerCase())});return f().createElement("div",{className:"filter-sort-select-trend"},f().createElement("div",{className:"selItem "+(this.props.triangle?"triangle":""),onClick:function(e){e.stopPropagation(),e.nativeEvent.stopImmediatePropagation()}},f().createElement("div",{className:"wrap"},f().createElement("div",{className:"title_name"},"添加展示",f().createElement("span",null,"（最多"+l+"个，已添加"+c.length+"个）")),f().createElement("div",null,f().createElement(F.Input,{value:s,placeholder:"请输入关键词",className:"search",size:"small",icon:s?"close":"search",onChange:function(e){return n.setState({searchWord:e})},onIconClick:function(){return n.setState({searchWord:""})}})),f().createElement("ul",null,a.map(function(t,e){return f().createElement("li",{className:(d.includes(t.id)?"sel":"")+(t.disable?" disable":""),key:e,onClick:function(e){o.includes(t.id)||n.onSel(e,t)}},f().createElement(F.Checkbox,{className:"check-all",checked:d.includes(t.id),disabled:o.includes(t.id)||!d.includes(t.id)&&c.length>=l,onChange:function(e){return o.includes(t.id)?"":n.onSel(e,t)}},f().createElement("span",null,p(t.label))))}),t.slice(0,100-a.length).map(function(t,e){return f().createElement("li",{className:(d.includes(t.id)?"sel":"")+(t.disable?" disable":""),key:e,onClick:function(e){return n.onSel(e,t)}},f().createElement(F.Checkbox,{className:"check-all",checked:d.includes(t.id),onChange:function(e){return n.onSel(e,t)},disabled:!d.includes(t.id)&&c.length>=l},f().createElement("span",{className:"dark"},p(t.label))))}),100<a.length+t.length?f().createElement("li",{style:{color:"#d96969"}},"数值展示不超过100条，查看更多请搜索"):null,0===a.length&&0===t.length&&f().createElement("div",{className:"noData"},"没有相关选项"))),f().createElement("div",{className:"line"}),f().createElement("div",{className:"control"},f().createElement("div",null,f().createElement(F.Button,{type:"",onClick:i},"取消"),f().createElement(F.Button,{type:"primary",onClick:function(){return r(c)}},"确定")))))},e}(c.Component);L.propTypes={options:r().array,value:r().array,onChange:r().func,show:r().bool,onCancel:r().func,maxSelect:r().number};var I=n(51474),V=n(49101),A=b.default.Option;const O=function(t){function e(e){var c=t.call(this,e)||this;return c.defaultIsSelectAllChange=function(){var e=JSON.parse(JSON.stringify(c.props)).defaultConfig,t=_()(c).curFast;e.defaultChecked.forEach(function(e){e.id===t.id&&(e.isSelectAll=!e.isSelectAll)}),c.props.defaultValueChange({value:{defaultChecked:e.defaultChecked}}).then(function(){c.props.onSearch()})},c.defaultChecksNameChange=function(e){c.setState({defaultValue:e}),c.props.defaultValueChange({value:{defaultChecksName:[e]}}).then(function(){c.props.onSearch()})},c.defaultCheckedChange=function(e,t){var n=JSON.parse(JSON.stringify(c.props)).defaultConfig,a=n.defaultNumberChecked,l=_()(c),i=l.curFast,l=l.curFastShowList,r=JSON.parse(JSON.stringify(i.values));if("add"===e)var o,r=1===a?[t]:(o=[],r.push(t),l.forEach(function(t){return r.forEach(function(e){return e===t.id&&o.push(e)})}),o);else if("del"===e){if(1===r.length)return void D.Z.warning("至少保留一个选项");r.splice(r.indexOf(t),1)}n.defaultChecked.forEach(function(e){e.id===i.id&&(e.values=r)}),c.props.fetchTopicCheck({brandId:t}),c.props.defaultValueChange({value:{defaultChecked:n.defaultChecked}}).then(function(){c.props.onSearch()})},c.defaultChecksChange=function(e,t){var n=JSON.parse(JSON.stringify(c.curFastShowList)),a=JSON.parse(JSON.stringify(c.props)).defaultConfig;"add"===e?n.push(t):"del"===e?n.splice(n.findIndex(function(e){return e.id===t.id}),1):"replace"===e&&(n=t),a.defaultChecks.forEach(function(e){e.id===c.curFast.id&&(e.values=n)}),c.props.defaultValueChange({value:{defaultChecks:a.defaultChecks}})},c.clickListener=function(){c.setState({showSelector:!1})},c.state={showSelector:!1,maxWidth:500,defaultValue:""},c}o()(e,t);var n=e.prototype;return n.componentDidMount=function(){var o=this;window.addEventListener("click",this.clickListener),new I.ZP(document.querySelector(".fast_wrap"),{sort:!0,animation:150,draggable:".fast_block",handel:".handel",onEnd:function(e){var t=e.oldIndex,n=e.newIndex,a=JSON.parse(JSON.stringify(o.props)).defaultConfig,l=o.curFast,e=o.curFastShowList,i=JSON.parse(JSON.stringify(e)),t=i.splice(t,1)[0];i.splice(n,0,t),a.defaultChecks.forEach(function(e){e.id===l.id&&(e.values=i)});var r={defaultChecks:a.defaultChecks};w()(l.values,i.filter(function(e){return l.values.includes(e.id)}).map(function(e){return e.id}))||(a.defaultChecked.forEach(function(n){n.id===l.id&&(n.values=[],i.forEach(function(t){l.values.forEach(function(e){t.id===e&&n.values.push(e)})}))}),r.defaultChecked=a.defaultChecked),o.props.defaultValueChange({value:r}).then(function(){return r.defaultChecked&&o.props.onSearch()})}})},n.componentWillUnmount=function(){window.removeEventListener("click",this.clickListener)},n.render=function(){var n=this,e=this.props,t=e.defaultConfig,a=e.screeningList,l=this.state,i=l.showSelector,r=l.defaultValue,o=this.curFast,e=this.curFastShowList,c=o.isSelectAll,l=t.defaultChecksName,s=void 0===l?[]:l,u=t.defaultNumberChecked,l=t.defaultNumberConfig,t=(t.defaultChecks||[]).map(function(e){return{value:e.id,label:e.label}}),a=a.map(function(e){return e.data}).flat(1).filter(function(e){return e.id===s[0]}).length?a.map(function(e){return e.data}).flat(1).filter(function(e){return e.id===s[0]})[0]:{};return f().createElement("div",{className:"opnion_fast_filter"},f().createElement("div",{className:"name"},f().createElement("span",{className:"filter_select"},f().createElement(b.default,{defaultValue:"1",bordered:!1},f().createElement(A,{value:"1"},"电商评论")),f().createElement(b.default,{value:r||s[0],bordered:!1,onChange:function(e){return n.defaultChecksNameChange(e)},options:t}))),f().createElement("div",{className:"fast_wrap"},c&&f().createElement("div",{className:"cover",onClick:this.defaultIsSelectAllChange}),e.map(function(t){return f().createElement("span",{key:t.id,className:"fast_block "+(o.values.includes(t.id)?"select":"")+" "+(o.values.length>=u&&1!==u?"disabled":"")+" "+(c?"disabled_all":""),onClick:function(){return c?"":(o.values.length<u||o.values.includes(t.id)||1===u)&&n.defaultCheckedChange(o.values.includes(t.id)?"del":"add",t.id)}},f().createElement("span",{title:t.label},t.label),f().createElement("i",{className:"icon-cem_cancel",onClick:function(e){e.stopPropagation(),n.defaultChecksChange("del",t)}}))})),f().createElement("div",{className:"add",onClick:function(e){e.stopPropagation(),n.setState({showSelector:!i})}},f().createElement(V.Z,null),i&&f().createElement(L,{options:a.options,defaultChecks:e,onChange:function(e){n.setState({showSelector:!1}),n.defaultChecksChange("replace",e)},disabledValue:o.values,maxSelect:l,onCancel:function(){return n.setState({showSelector:!1})}})))},N()(e,[{key:"curFast",get:function(){var t=this.props.defaultConfig;return t.defaultChecked.find(function(e){return e.id===t.defaultChecksName[0]})||{}}},{key:"curFastShowList",get:function(){var t=this.props.defaultConfig;return(t.defaultChecks.find(function(e){return e.id===t.defaultChecksName[0]})||{}).values||[]}}]),e}(f().Component),x=function(t){function e(e){var n=t.call(this,e)||this;return n._handleOnHide=function(){var e=n.props,t=e.showKind,e=e.changeShow;t&&"screening"!==t&&e(null)},n.state={},n}o()(e,t);var n=e.prototype;return n.componentDidMount=function(){window.addEventListener("click",this._handleOnHide)},n.componentWillUnmount=function(){window.removeEventListener("click",this._handleOnHide)},n.render=function(){var t=this,e=this.props,n=e.screeningList,a=e.children,l=e.defaultConfig,i=e.defaultValueChange,r=e.onSearch,o=e.showKind,e=e.fetchTopicCheck;return f().createElement("div",{className:"opnion_header_Filter",style:{height:a?"100%":""}},f().createElement("div",{className:"opnion_header_Filter_bar"},l&&f().createElement(O,{ref:function(e){return t.fastRef=e},defaultConfig:l,screeningList:n,defaultValueChange:i,onSearch:r,disabled:"screening"===o,fetchTopicCheck:e})))},e}(f().Component);var i=n(64396),T=i.Z.IDBHeaderScreening.headerScreening,P=i.Z.IDBHeaderScreening.screening,M=i.Z.IDBHeaderScreening.savedScreening,J=i.Z.IDBHeaderScreening.timeScreening,Y=i.Z.opinion.opinionScreening;Array.prototype.deepcopy=function(){return JSON.parse(JSON.stringify(this))};a=function(t){function e(a){var e,c=t.call(this,a)||this;return c.getValue=function(){var e=c.props,t=e.screeningValues,n=e.defaultConfig,a=e.dateFilter,l=e.content,i=e.advancedFilter,e=e.curScreeningMap,t=t.deepcopy().filter(function(e){return 0<e.values.length}),r=JSON.parse(JSON.stringify(n)),e=e.filter(function(e){return e.data.some(function(e){return e.id===r.defaultChecksName[0]})})[0],o=r.defaultChecked&&r.defaultChecked.find(function(e){return e.id===r.defaultChecksName[0]})||{};return o.isSelectAll&&t.forEach(function(e){e.values.some(function(e){return e.id===r.defaultChecksName[0]})&&e.values.forEach(function(e){e.id===r.defaultChecksName[0]&&(e.values=[])})}),JSON.parse(JSON.stringify({dateFilter:a,filterModel:s()({content:l&&l[0]&&l[0].contain&&l[0].contain.length?l:void 0},i),headerFilterParamsNew:t,analysisModel:e?[{id:e.id,values:r.defaultChecked.filter(function(e){return e.id===r.defaultChecksName[0]&&(e.values=o.isSelectAll?[]:e.values,!0)})}]:void 0}))},c.getTransferValue=function(){var e=c.props,t=e.screeningList,n=e.curScreeningMap,a=e.screeningValues;return{defaultConfig:e.defaultConfig,screeningList:t,curScreeningMap:n,screeningValues:a,dateFilter:e.dateFilter}},c.getFullValue=function(){var e={screeningValues:c.props.screeningValues,defaultConfig:c.props.defaultConfig,curScreeningMap:c.props.curScreeningMap},e=JSON.parse(JSON.stringify(e));return function(e,t,n){e=JSON.parse(JSON.stringify(e));e.forEach(function(t){n.forEach(function(e){t.id===e.id&&(t.label=e.label,t.values.forEach(function(t){e.data.forEach(function(e){t.id===e.id&&(t.label=e.label,t.values=t.values.map(function(t){var n={id:t};return e.options.forEach(function(e){t===e.id&&(n.label=e.label)}),n}))})}))})});var a=t.defaultChecked.find(function(e){return e.id===t.defaultChecksName[0]})||{};return a.isSelectAll&&e.forEach(function(e){e.values.some(function(e){return e.id===t.defaultChecksName[0]})&&e.values.forEach(function(e){e.id===t.defaultChecksName[0]&&(e.values=[{label:"全部"}])})}),{filterValue:e,analysisModel:JSON.parse(JSON.stringify(e)).filter(function(e){return!!e.values.some(function(e){return e.id===t.defaultChecksName[0]})&&(e.values=e.values.filter(function(e){return e.id===t.defaultChecksName[0]}),e.values=a.isSelectAll?[{label:"全部"}]:e.values,!0)})}}(e.screeningValues,e.defaultConfig,e.curScreeningMap)},c._handelSearch=function(){var e=c.props.valueConf,t=void 0===e?[]:e,n=c.getValue(),e={selectValue:c.props.selectValue,comparisonItems:c.props.comparisonItemsSave};t.includes("fullInfo")&&(e.fullInfo=c.getFullValue()),c.props.onChange&&c.props.onChange(n,e)},c._changeFilter=function(a,e){c.props.init({type:c.props.selectValue&&c.props.comparisonItems?a:c.props.type,screening:{noSavingFilterList:c.props.noSavingFilterList},hasHour:c.props.hasHour,dateValue:c.props.dateValue,filterId:e?e.id:c.props.filterId}).then(function(){var e=c.props.valueConf,t=void 0===e?[]:e,n=c.getValue(),e={selectValue:a,comparisonItems:c.props.comparisonItemsSave};t.includes("fullInfo")&&(e.fullInfo=c.getFullValue()),c.props.onChange&&c.props.onChange(n,e)})},c._handelSearchButtonClick=function(){return c.props.freshFastFilter().then(function(){return c._handelSearch()})},a.transferValue&&a.transferValue.dateFilter&&a.save({dateFilter:a.transferValue.dateFilter}),c.state={},c._event={onFilterReady:c._handelOnFilterReady,onSearchButtonClick:c._handelSearchButtonClick,onSearch:c._handelSearch,changeFilter:c._changeFilter,getSaveRef:function(e){return c.saveRef=e}},a.selectValue&&a.comparisonItems&&a.findTouchSpotByAccountId(),a.screenValue&&Array.isArray(a.screenValue)&&(e=a.screenValue),a.init({type:a.pageType,hasHour:a.hasHour,screening:{value:e,noSavingFilterList:a.noSavingFilterList},dateValue:a.dateValue,contentValue:a.contentValue,filterId:a.filterId}).then(function(){var e=c.props.valueConf,t=void 0===e?[]:e,n=c.getValue(),e={selectValue:c.props.selectValue,comparisonItems:c.props.comparisonItemsSave};t.includes("fullInfo")&&(e.fullInfo=c.getFullValue()),a.onReady&&a.onReady(n,e)}),c}o()(e,t);var n=e.prototype;return n.componentDidMount=function(){},n.componentWillUnmount=function(){this.props.clear()},n.render=function(){return f().createElement(x,s()({},this.state,this._event,this.props,{saveRef:this.saveRef}))},e}(f().Component);a.propTypes={title:r().oneOfType([r().string,r().node]),onChange:r().func,pageType:r().string,onReady:r().func,valueConf:r().array,expandInfo:r().object,noSavingFilterList:r().bool,transferValue:r().object,advanceAuthority:r().bool,sourceSearch:r().bool,contentSearch:r().bool,hasHour:r().bool,rightContent:r().node,filterId:r().string,filterDateFilter:r().object,recordId:r().string,selectValue:r().string,touchData:r().arrayOf(r().string),findTouchSpotByAccountId:r().func};const R=(0,t.connect)(function(e){var t=e.loading,e=l()(e,["loading"]);return s()({},e[T],e[P],{savedScreening:s()({},e[M]),dateFilter:e[J].dateFilter,fetchingScreeningMap:t.effects[T+"/init"]||!1})},function(t){return{freshFastFilter:function(e){return t({type:T+"/freshFastFilter",payload:e})},defaultValueChange:function(e){return t({type:T+"/defaultValueChange",payload:e})},dateValueChange:function(e){return t({type:T+"/dateValueChange",payload:e})},clearAllValues:function(e){return t({type:T+"/clearAllValues",payload:e})},clear:function(){return t({type:T+"/clear"})},save:function(e){return t({type:T+"/save",payload:e})},changeShow:function(e){return t({type:T+"/changeShow",payload:e})},changeAdvancedShow:function(e){return t({type:T+"/changeAdvancedShow",payload:e})},updateScreeningValues:function(e){return t({type:P+"/updateScreeningValues",payload:e})},contentChange:function(e){return t({type:T+"/contentChange",payload:e})},savedFilterChange:function(e){return t({type:T+"/savedFilterChange",payload:e})},init:function(e){return t({type:T+"/init",payload:e})},fetchTopicCheck:function(e){return t({type:Y+"/fetchTopicCheck",payload:e})}}},null,{withRef:!0})(a);var z=n(50976);const B=function(e){var n=e.loading,a=e.chartData,l=e.enlarge,i=e.date,e=f().useState(void 0),r=e[0],t=e[1];return f().useEffect(function(){var e,t;r&&!n&&a&&0<a.length&&(e=a,e={title:{show:l,text:"一周数据走势",textStyle:{color:"#262626",fontSize:"12px",lineHeight:17},padding:-8},backgroundColor:l?"#fff":"#f1f3f4",tooltip:{trigger:"axis",formatter:'<span style="margin-right: 38px;color: #262626;font-size: 12px;">{b}</span><span style="font-weight: 600;font-size: 12px;color: #262626;">{c}</span>'},grid:{show:!1,top:l?40:0,left:l?35:0,right:l?35:0,bottom:l?20:0},xAxis:{type:"category",boundaryGap:!1,data:t=i,axisLine:{show:l},axisLabel:{show:l,interval:t&&2<t.length?t.length-2:0,color:"#626262"},axisTick:{show:!1},splitLine:{show:!1}},yAxis:{type:"value",axisLine:{show:!1},axisLabel:{show:l,color:"#626262"},axisTick:{show:!1},splitLine:{show:l,lineStyle:{type:"dashed",color:"#E5E5E5"}},splitNumber:4,minInterval:1},series:[{type:"line",symbol:"none",smooth:!0,lineStyle:{color:l?"#7262FD":"#5B8FF9",width:1.5},data:0<e.length?e:[]}]},r.clear(),r.setOption(e))},[r,n,a]),f().createElement(z.Z,{theme:"yunting_multi_color",style:l?{width:"324px",height:"224px"}:{width:"54px",height:"24px"},showLoading:n,loadingOption:{text:"",color:"#1574B3"},option:{},onChartReady:function(e){return t(e)}})};function Z(e){var t=1===(n=parseInt(C()().format("E")))?e+1:e,e=C()().subtract(n+7*t-1,"days").format("YYYY-MM-DD"),n=C()().subtract(n+7*(t-1),"days").format("YYYY-MM-DD");return[e,n=!t?C()().subtract(1,"days").format("YYYY-MM-DD"):n]}function U(){return[Z(0),Z(1),Z(2),Z(3),Z(4)].reverse()}var H=i.Z.opinion.everyOpinion,j=i.Z.opinion.opinionScreening,r=function(t){function e(e){var n=t.call(this,e)||this;return n.onFilterReady=function(e,t){e=(e.headerFilterParamsNew.length?e.headerFilterParamsNew:e.analysisModel).map(function(e){delete e.isSelectAll;var t=e.values.map(function(e){return delete e.isSelectAll,delete e.label,e});return s()({},e,{values:t})});n.props.fetchParams({projectId:k.t.get(k.V.curProject).id,headerFilterParamsNew:e,dateFilter:{from:U()[0][0],to:U()[0][1]}})},n.onFilterChange=function(e,t){e=(e.headerFilterParamsNew.length?e.headerFilterParamsNew:e.analysisModel).map(function(e){delete e.isSelectAll;var t=e.values.map(function(e){return delete e.isSelectAll,delete e.label,e});return s()({},e,{values:t})});n.props.fetchParams({projectId:k.t.get(k.V.curProject).id,headerFilterParamsNew:e})},n.customPage=function(e,t,n){if("page"!==t)return n;e=U()[e-1].map(function(e){return C()(e,"YYYY-MM-DD").format("MM/DD")});return f().createElement("a",{className:"nofollow"},e.join("~"))},n.onPageChange=function(e){n.props.save({dateFilter:{from:U()[e-1][0],to:U()[e-1][1]}}),n.props.opinionFind()},n.state={},n.event={},n}return o()(e,t),e.prototype.render=function(){var e=this.props,t=e.loading,n=e.opinionData,a=e.pageType,e=e.check;return f().createElement(v.default,{spinning:t},f().createElement("div",{className:"everyday_table"},f().createElement("div",{className:"everyday_table_header"},f().createElement("span",{className:"title"},"每周典型意见"),f().createElement("span",{className:"tip"},f().createElement(S.Z,{overlay:f().createElement("span",null,"只展示最近5周的数据。",f().createElement("br",null),"因为项目中的数据会有变化，例如添加一条新链接，历史的评论数据有所增加，对应的每周典型意见结果跟前几天计算的结果不一致，因此系统每天更新最近5周的数据，确保分析最新数据。"),placement:"top",mouseEnterDelay:.5},f().createElement("i",{className:"icon-cem_file1",style:{marginLeft:4,fontSize:14,color:"#979797",verticalAlign:"unset"}}))),f().createElement(R,{pageType:a,onReady:this.onFilterReady,onChange:this.onFilterChange,advanceAuthority:!1,sourceSearch:!0,touchData:["电商评论"],selectValue:"电商评论",valueConf:["fullInfo"],hasHour:!1})),n&&n.length?f().createElement("div",{className:"list"},n.map(function(e,t){var n=t<10?"#729FF9":"#8c8c8c",a=e.trend&&e.trend.opinionInfoMsg;return f().createElement("div",{className:"item",key:e.id},f().createElement("span",{className:"index",style:{background:n}},t+1),f().createElement("span",{className:"name"},e.id),f().createElement(y.default,{overlayClassName:4<t&&t<10||14<t?"every_table_tip_bottom":"every_table_tip",getPopupContainer:function(){return document.querySelector(".list")},title:a?f().createElement(B,{loading:!1,chartData:a.map(function(e){return e.name}),enlarge:!0,date:a.map(function(e){return C()(e.id,"YYYY-MM-DD").format("YYYY/MM/DD")})}):f().createElement("div",{className:"empty-block",style:{height:"216px"}},"暂无数据"),placement:4<t&&t<10||14<t?"leftBottom":"leftTop",mouseEnterDelay:.5},f().createElement("span",{className:"total"},a?f().createElement(B,{loading:!1,chartData:a&&a.map(function(e){return e.name}),enlarge:!1}):f().createElement("i",{className:"icon-cem_line",style:{color:"rgb(191, 191, 191)",fontSize:20}}))))})):e?f().createElement("div",{className:"empty-block"},"暂无数据"):f().createElement("div",{className:"not-generated-block"},"最近5周的典型意见结果将在明天8点前生成"),f().createElement("div",null,f().createElement("span",{className:"result_update_time"},"结果更新时间：每天1~8点。"),f().createElement(E.default,{size:"small",total:5,itemRender:this.customPage,pageSize:1,onChange:this.onPageChange}))))},e}(f().PureComponent);const W=(0,t.connect)(function(e){var t=e.loading,e=l()(e,["loading"]);return s()({},e[H],e[j],{loading:t.effects["${namespace}/opinionFind"]||!1})},function(t){return{opinionFind:function(e){return t({type:H+"/opinionFind",payload:e})},save:function(e){return t({type:H+"/save",payload:e})},clean:function(e){return t({type:H+"/clean",payload:e})},fetchParams:function(e){return t({type:H+"/fetchParams",payload:e})}}})(r);n(14574);var q=n(56590),G=(n(75314),n(11187)),a=(n(23461),n(53740)),r=(n(89858),n(51024)),K=n(39432),X=i.Z.opinion.savaFilter,$=i.Z.opinion.savaResult,Q=r.default.Search,ee=a.Z.Paragraph,n=function(t){function e(e){var a=t.call(this,e)||this;return a.handleDeleteClick=function(e){(0,a.props.save)({modalShow:!0,target:e})},a.handleUpClick=function(e){console.log(e)},a.handleEditClick=function(e,t,n){""!==e?e!==n&&(0,a.props.opinionRename)({newName:e,id:t}):G.default.error("输入错误，名称不能为空")},a.handleSearch=function(e){a.props.save({name:e}),a.props.opinionList({name:e})},a.state={value:"",isJump:!1},a._event={},a.props.save({projectId:k.t.get(k.V.curProject).id}),a}o()(e,t);var n=e.prototype;return n.componentDidMount=function(){this.props.opinionList()},n.componentWillUnmount=function(){this.props.clean()},n.render=function(){var a=this,e=this.props,t=e.filterData,n=e.save,l=e.modalShow,i=e.opinionDelete,r=e.target,o=e.loading,c=e.pageNumber,e=this.state,s=e.value,u=e.isJump;return f().createElement("div",{className:"opinion_filter_list left_list"},f().createElement(v.default,{spinning:o},f().createElement("div",{className:"opinion_filter_list_header"},f().createElement("span",{className:"opinion_filter_list_header_title"},"计算任务"),f().createElement("span",{className:"tip"},f().createElement(S.Z,{overlay:"最多保存20个计算任务，超过20个时默认删除之前的任务。列表中只展示离线查询的任务，不展示立即查询的任务。",placement:"top",mouseEnterDelay:.5,getPopupContainer:function(){return document.querySelector(".opinion_filter_list.left_list")}},f().createElement("i",{className:"icon-cem_file1",style:{marginLeft:4,fontSize:14,color:"#979797",verticalAlign:"unset"}}))),f().createElement("span",{className:"search"},f().createElement(Q,{placeholder:"请输入",onSearch:function(e){return a.handleSearch(e)},onChange:function(e){a.setState({value:e.target.value})},size:"small",suffix:f().createElement("span",{onClick:function(){return a.handleSearch(s)}},f().createElement("i",{className:"icon-cem_small-search",style:{color:"#8c8c8c"}})),allowClear:!0}))),t&&t.list&&0<t.list.length?f().createElement(q.default,{className:"filter_tab",itemLayout:"vertical",size:"small",pagination:{onChange:function(e){var t=a.props,n=t.save,t=t.opinionList;n({pageNumber:e}),t()},pageSize:10,size:"small",total:t&&t.total,hideOnSinglePage:!0,showSizeChanger:!1,current:c},dataSource:t&&t.list,renderItem:function(t){return f().createElement(q.default.Item,{key:t.id},f().createElement(y.default,{placement:"top",mouseEnterDelay:.5,title:"REPEATEDLY"===t.calculationType?f().createElement("div",null,t.name,f().createElement("br",null),"下一次结果生成时间：",(t.lastStartTime?C()(t.lastStartTime,"YYYY-MM-DD").add(t.calculationFrequency,"days"):C()().add(1,"days")).format("YYYY/MM/DD")):null,getPopupContainer:function(){return document.querySelector(".opinion_filter_list.left_list")}},f().createElement("span",{className:"opinion_filter_list_many"},"REPEATEDLY"===t.calculationType?"多":"单"),f().createElement("span",{className:"opinion_filter_list_content"},f().createElement(g.rU,{to:{pathname:"/explore/opinion/screen",query:{id:t.id}},onClick:function(e){u&&e.preventDefault()}},f().createElement(ee,{editable:{autoSize:{maxRows:1,minRows:1},maxLength:40,tooltip:!1,icon:f().createElement("i",{className:"icon-bianji",onClick:function(e){return e.preventDefault()}}),onChange:function(e){a.setState({isJump:!1}),a.handleEditClick(e.trim(),t.id,t.name)},onStart:function(){return a.setState({isJump:!0})},onCancel:function(){return a.setState({isJump:!1})}}},t.name))),f().createElement("span",{className:"opinion_filter_list_date"},(0,K.qS)(t.updateTime.split("T")[0])),f().createElement("span",{className:"opinion_filter_list_delete",onClick:function(){return a.handleDeleteClick(t)}},f().createElement("i",{className:"icon-cem_trash"})),f().createElement("span",{className:"opinion_filter_list_edit",onClick:function(){return a.handleDeleteClick(t)}},f().createElement("i",{className:"icon-bianji"}))))}}):f().createElement("div",{className:"empty-block"},"无计算任务")),f().createElement(F.Dialog,{className:"data_url_delete_dialog",title:"删除",size:"tiny",visible:l,onCancel:function(){return n({modalShow:!1})},lockScroll:!1},f().createElement(F.Dialog.Body,null,f().createElement("div",{className:"dialog-content"},r&&"是否删除“"+r.name+"”"+("REPEATEDLY"===r.calculationType?"，该任务为多次任务，删除后不再生成对应的结果，但之前已生成的结果还会保存在列表中":"计算任务"))),f().createElement(F.Dialog.Footer,{className:"dialog-footer"},f().createElement(F.Button,{onClick:function(){return n({modalShow:!1})}},"取消"),f().createElement(F.Button,{type:"primary",onClick:function(){i().then(function(){return a.props.taskList()})}},"确定"))))},e}(c.Component);const te=(0,t.connect)(function(e){var t=e.loading,e=l()(e,["loading"]);return s()({},e[X],{loading:t.effects[X+"/opinionList"]||!1})},function(t){return{save:function(e){return t({type:X+"/save",payload:e})},clean:function(){return t({type:X+"/clean"})},opinionList:function(e){return t({type:X+"/opinionList",payload:e})},opinionDelete:function(e){return t({type:X+"/opinionDelete",payload:e})},opinionRename:function(e){return t({type:X+"/opinionRename",payload:e})},taskList:function(e){return t({type:$+"/taskList",payload:e})}}})(n);var ne=i.Z.opinion.savaResult,ae=r.default.Search,le=a.Z.Paragraph,a=function(t){function e(e){var l=t.call(this,e)||this;return l.handleDeleteClick=function(e){(0,l.props.save)({modalShow:!0,target:e})},l.handleUpClick=function(e){console.log(e)},l.handleEditClick=function(e,t,n){""!==e?n!==e&&(0,l.props.taskRename)({value:e,id:t}):G.default.error("输入错误，名称不能为空")},l.handleSearch=function(e){l.props.save({name:e}),l.props.taskList({name:e})},l.handleCalculating=function(e){var t=l.state.nowTime;return 0<t.diff(C()(e),"minutes")?f().createElement("span",{style:{color:"#F08A8A"}},"超时",t.diff(C()(e),"minutes"),"分钟"):0===t.diff(C()(e),"minutes")?0<t.diff(C()(e),"seconds")?f().createElement("span",{style:{color:"#F08A8A"}},"超时1分钟"):"预估"+C()(e).diff(t,"seconds")+"秒后生成":t.diff(C()(e),"minutes")<0?"预估"+C()(e).diff(t,"minutes")+"分钟后生成":void 0},l.handleTime=function(e,t,n,a){switch(e){case"ENABLE":return"待生成";case"FAILURE":return f().createElement("span",{style:{color:"#F08A8A"}},"生成失败");case"DISABLE":return 5e5<a?"无法计算结果，观点数已超上限":f().createElement("span",{style:{color:"#F08A8A"}},"生成失败");case"EXPIRED":return f().createElement("span",{style:{color:"#F08A8A"}},"生成失败");case"CALCULATING":case"CALCULATING_NLP":return l.handleCalculating(t);case"FINISH":return(0,K.qS)(n.split("T")[0]);case"TO_BE_GENERATED":return C()(t).format("YYYY/MM/DD HH:mm")+" 后生成";default:return}},l.handleUpdateClick=function(e){l.props.taskUpdate({id:e})},l._handleOnWsMessage=function(e){var t=e.data,n=l.state.taskIds;t.type&&"ws"===t.type&&(t=(e=t.payload).type,e=e.result,"OPINION_TASK_RESULT"===t&&(n.includes(e.taskId)||(n.push(e.taskId),l.setState({taskIds:n}))))},l.state={value:"",isJump:!1,nowTime:C()(),taskIds:[]},l._event={},l.props.save({projectId:k.t.get(k.V.curProject).id}),l}o()(e,t);var n=e.prototype;return n.componentDidMount=function(){var e=this;setInterval(function(){return e.setState({nowTime:C()()})},1e3),this.props.taskList(),window.addEventListener("message",this._handleOnWsMessage)},n.componentWillUnmount=function(){window.removeEventListener("message",this._handleOnWsMessage),this.props.clean()},n.render=function(){var a=this,e=this.props,t=e.filterData,n=e.save,l=e.modalShow,i=e.taskDelete,r=e.target,o=e.loading,c=e.pageNumber,e=this.state,s=e.value,u=e.isJump,d=e.taskIds;return f().createElement("div",{className:"opinion_filter_list right_list"},f().createElement(v.default,{spinning:o},f().createElement("div",{className:"opinion_filter_list_header"},f().createElement("span",{className:"opinion_filter_list_header_title"},"保存的典型意见结果"),f().createElement("span",{className:"tip"},f().createElement(S.Z,{overlay:"最多保存100个典型意见结果，超过100个时默认删除之前保存的结果。不管是立即查询还是离线查询的任务结果都会在列表中展示。",placement:"top",mouseEnterDelay:.5,getPopupContainer:function(){return document.querySelector(".opinion_filter_list.right_list")}},f().createElement("i",{className:"icon-cem_file1 tipppp",style:{marginLeft:4,fontSize:14,color:"#979797",verticalAlign:"unset"}}))),f().createElement("span",{className:"search"},f().createElement(ae,{placeholder:"请输入",onSearch:function(e){return a.handleSearch(e)},onChange:function(e){return a.setState({value:e.target.value})},size:"small",suffix:f().createElement("span",{onClick:function(){return a.handleSearch(s)}},f().createElement("i",{className:"icon-cem_small-search",style:{color:"#8c8c8c"}})),allowClear:!0}))),t&&t.list&&0<t.list.length?f().createElement(q.default,{className:"result_tab",itemLayout:"vertical",size:"small",pagination:{onChange:function(e){var t=a.props,n=t.save,t=t.taskList;n({pageNumber:e}),t()},pageSize:10,size:"small",total:t.total,hideOnSinglePage:!0,showSizeChanger:!1,current:c},dataSource:t&&t.list,renderItem:function(t){return f().createElement(q.default.Item,{key:t.id},f().createElement("span",{className:"opinion_filter_list_many"},"REPEATEDLY"===t.calculationType?"多":"单"),f().createElement("span",{className:"opinion_filter_list_content"},f().createElement(g.rU,{to:{pathname:"/opinionDetail?"+encodeURIComponent(JSON.stringify({id:t.id}))},onClick:function(e){"TO_BE_GENERATED"===t.status&&(e.preventDefault(),G.default.warning("请您明天查看结果")),u&&e.preventDefault()},target:"_blank"},f().createElement(le,{editable:{tooltip:"按ESC退出编辑",icon:f().createElement("i",{className:"icon-bianji",onClick:function(e){return e.preventDefault()}}),autoSize:{maxRows:1},maxLength:40,onChange:function(e){a.setState({isJump:!1}),a.handleEditClick(e.trim(),t.id,t.name)},onStart:function(){return a.setState({isJump:!0})},onCancel:function(){return a.setState({isJump:!1})}}},t.name))),f().createElement("span",{className:"opinion_filter_list_date"},a.handleTime(0<d.length&&d.includes(t.id)?"FINISH":t.status,t.predictTime,t.updateTime,t.opinionTotal),("FAILURE"===t.status||"DISABLE"===t.status&&t.opinionTotal<=5e5||"EXPIRED"===t.status)&&f().createElement("i",{className:"icon-cem_auto-refresh",style:{color:"#7262FD",marginLeft:4},onClick:function(){return a.handleUpdateClick(t.id)}})),f().createElement("span",{className:"opinion_filter_list_delete",onClick:function(){return a.handleDeleteClick(t)}},f().createElement("i",{className:"icon-cem_trash"})),f().createElement("span",{className:"opinion_filter_list_edit",onClick:function(){return a.handleDeleteClick(t)}},f().createElement("i",{className:"icon-bianji"})))}}):f().createElement("div",{className:"empty-block"},"无保存结果")),f().createElement(F.Dialog,{className:"data_url_delete_dialog",title:"删除",size:"tiny",visible:l,onCancel:function(){return n({modalShow:!1})},lockScroll:!1},f().createElement(F.Dialog.Body,null,f().createElement("div",{className:"dialog-content"},"是否删除“",r&&r.name,"”典型意见结果")),f().createElement(F.Dialog.Footer,{className:"dialog-footer"},f().createElement(F.Button,{onClick:function(){return n({modalShow:!1})}},"取消"),f().createElement(F.Button,{type:"primary",onClick:i},"确定"))))},e}(c.Component);const ie=(0,t.connect)(function(e){var t=e.loading,e=l()(e,["loading"]);return s()({},e[ne],{loading:t.effects[ne+"/taskList"]||!1})},function(t){return{save:function(e){return t({type:ne+"/save",payload:e})},clean:function(){return t({type:ne+"/clean"})},taskList:function(e){return t({type:ne+"/taskList",payload:e})},taskDelete:function(e){return t({type:ne+"/taskDelete",payload:e})},taskUpdate:function(e){return t({type:ne+"/taskUpdate",payload:e})},taskRename:function(e){return t({type:ne+"/taskRename",payload:e})}}})(a);const re=function(e){return(0,c.useEffect)(function(){},[]),f().createElement("div",{className:"yt_opinion_home"},f().createElement(h.default,{type:"primary",size:"large",onClick:function(){return g.mW.push("/explore/opinion/screen")}},"开始探索"),f().createElement(W,null),f().createElement("div",{className:"opinion-list-wrapper"},f().createElement(u.default,{gutter:16},f().createElement(d.default,{span:12},f().createElement(m.Z,{bordered:!1},f().createElement(te,null))),f().createElement(d.default,{span:12},f().createElement(m.Z,{bordered:!1},f().createElement(ie,null))))))};var oe=i.Z.opinionHome,i=function(t){function e(e){e=t.call(this,e)||this;return e.state={},e._event={},e}o()(e,t);var n=e.prototype;return n.componentDidMount=function(){},n.render=function(){return f().createElement(re,s()({},this.state,this.props,this._event))},e}(c.Component);const ce=(0,t.connect)(function(e){e.loading;e=l()(e,["loading"]);return s()({},e[oe])},function(t){return{save:function(e){return t({type:oe+"/save",payload:e})},clean:function(){return t({type:oe+"/clean"})}}})(i)}}]);