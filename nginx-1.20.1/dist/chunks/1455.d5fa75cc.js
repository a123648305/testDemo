"use strict";(self.webpackChunkyunting=self.webpackChunkyunting||[]).push([[1455],{1455:(t,n,e)=>{e.r(n),e.d(n,{default:()=>g});var a=e(63366),r=e(87462),i=e(94578),o=e(67294),c=e(55609),l=e(44836),f=e(35239),u=e(94644),h=e(30118),p=e(64396),s=["loading"],d=p.Z.brand.brandAnalysis,C=p.Z.brand.brandAnalysisSub.interaction,y=function(t){function n(n){var e;return(e=t.call(this,n)||this)._handleOnMoreClick=function(t){"image"===t.type?(0,u._v)(t.obj,t.name):"data"===t.type&&(0,u.aT)(t.obj,t.name)},e._handleOnTypeChartClick=function(t){t?e.props.fetchInteractionChannelData({interactionType:(0,h.CA)(t.name)}):e.props.fetchInteractionChannelData({interactionType:null})},e.handleFilterChange=function(t){var n=t.dateFilter.numOfDays;e.props.cleanInteractionState(),e.getComparisionOptions(),e.props.fetchInterDatas({filterParams:t,projectId:f.t.get(f.V.curProject).id,dateRange:n})},e.getComparisionOptions=function(){var t=e.props.saveState,n=[],a="",r="",i=e.filter.refs.FilterCondition.getValue(),o=e.filter.refs.FilterCondition.getFilterList(),c=i.filter((function(t){return"dimension"===t.special}))[0].values[0];if(o&&o.length>0){for(var l=0;l<o.length;l++){var f=o[l],u=f.values,h=f.name;if("dimension"===o[l].special)n=u.filter((function(t){return String(t.id)!==String(c)})),a=h,r=u.filter((function(t){return String(t.id)===String(c)}))[0].name}t({comparisionOptions:n,curDimensionName:a,curDimensionValName:r})}},e.state={},e.event={onMoreClick:e._handleOnMoreClick,onFilterChange:e.handleFilterChange,onTypeChartClick:e._handleOnTypeChartClick,getFilterRef:function(t){return e.filter=t}},e}(0,i.Z)(n,t);var e=n.prototype;return e.componentDidMount=function(){},e.componentWillUnmount=function(){var t=this.props.cleanInteractionState;t&&t()},e.render=function(){return o.createElement(l.Z,(0,r.Z)({},this.props,this.state,this.event))},n}(o.PureComponent);const g=(0,c.connect)((function(t){var n=t.loading,e=(0,a.Z)(t,s);return(0,r.Z)({},e[d][C],{inteCountLoading:n.effects[d+"/fetchInteractionCountData"]||!1,inteTypeLoading:n.effects[d+"/fetchInteractionTypeData"]||!1,inteChannelLoading:n.effects[d+"/fetchInteractionChannelData"]||!1,satisDataLoading:n.effects[d+"/fetchInterChartData"]||!1,channelChartLoading:n.effects[d+"/fetchChannelChartData"]||!1})}),(function(t){return{fetchInterDatas:function(n){return t({type:d+"/fetchInterDatas",payload:n})},fetchInterChartData:function(n){return t({type:d+"/fetchInterChartData",payload:n})},fetchChannelChartData:function(n){return t({type:d+"/fetchChannelChartData",payload:n})},fetchInteractionCountData:function(n){return t({type:d+"/fetchInteractionCountData",payload:n})},fetchInteractionTypeData:function(n){return t({type:d+"/fetchInteractionTypeData",payload:n})},fetchInteractionChannelData:function(n){return t({type:d+"/fetchInteractionChannelData",payload:n})},saveState:function(n){return t({type:d+"/saveInteractionState",payload:n})},cleanInteractionState:function(n){return t({type:d+"/cleanInteractionState",payload:n})}}}))(y)}}]);