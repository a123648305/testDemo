(self.webpackChunkyunting=self.webpackChunkyunting||[]).push([[1455],{1455:(t,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>s});var n=e(37316),a=e.n(n),n=e(67154),r=e.n(n),n=e(85354),i=e.n(n),n=e(67294),o=e.n(n),n=e(55609),c=e(44836),l=e(35239),f=e(94644),h=e(30118),e=e(64396),u=e.Z.brand.brandAnalysis,p=e.Z.brand.brandAnalysisSub.interaction,e=function(n){function t(t){var u=n.call(this,t)||this;return u._handleOnMoreClick=function(t){"image"===t.type?(0,f._v)(t.obj,t.name):"data"===t.type&&(0,f.aT)(t.obj,t.name)},u._handleOnTypeChartClick=function(t){t?u.props.fetchInteractionChannelData({interactionType:(0,h.CA)(t.name)}):u.props.fetchInteractionChannelData({interactionType:null})},u.handleFilterChange=function(t){var n=t.dateFilter.numOfDays;u.props.cleanInteractionState(),u.getComparisionOptions(),u.props.fetchInterDatas({filterParams:t,projectId:l.t.get(l.V.curProject).id,dateRange:n})},u.getComparisionOptions=function(){var t=u.props.saveState,n=[],e="",a="",r=u.filter.refs.FilterCondition.getValue(),i=u.filter.refs.FilterCondition.getFilterList(),o=r.filter(function(t){return"dimension"===t.special})[0].values[0];if(i&&0<i.length){for(var c=0;c<i.length;c++){var l=i[c],f=l.values,l=l.name;"dimension"===i[c].special&&(n=f.filter(function(t){return String(t.id)!==String(o)}),e=l,a=f.filter(function(t){return String(t.id)===String(o)})[0].name)}t({comparisionOptions:n,curDimensionName:e,curDimensionValName:a})}},u.state={},u.event={onMoreClick:u._handleOnMoreClick,onFilterChange:u.handleFilterChange,onTypeChartClick:u._handleOnTypeChartClick,getFilterRef:function(t){return u.filter=t}},u}i()(t,n);var e=t.prototype;return e.componentDidMount=function(){},e.componentWillUnmount=function(){var t=this.props.cleanInteractionState;t&&t()},e.render=function(){return o().createElement(c.Z,r()({},this.props,this.state,this.event))},t}(o().PureComponent);const s=(0,n.connect)(function(t){var n=t.loading,t=a()(t,["loading"]);return r()({},t[u][p],{inteCountLoading:n.effects[u+"/fetchInteractionCountData"]||!1,inteTypeLoading:n.effects[u+"/fetchInteractionTypeData"]||!1,inteChannelLoading:n.effects[u+"/fetchInteractionChannelData"]||!1,satisDataLoading:n.effects[u+"/fetchInterChartData"]||!1,channelChartLoading:n.effects[u+"/fetchChannelChartData"]||!1})},function(n){return{fetchInterDatas:function(t){return n({type:u+"/fetchInterDatas",payload:t})},fetchInterChartData:function(t){return n({type:u+"/fetchInterChartData",payload:t})},fetchChannelChartData:function(t){return n({type:u+"/fetchChannelChartData",payload:t})},fetchInteractionCountData:function(t){return n({type:u+"/fetchInteractionCountData",payload:t})},fetchInteractionTypeData:function(t){return n({type:u+"/fetchInteractionTypeData",payload:t})},fetchInteractionChannelData:function(t){return n({type:u+"/fetchInteractionChannelData",payload:t})},saveState:function(t){return n({type:u+"/saveInteractionState",payload:t})},cleanInteractionState:function(t){return n({type:u+"/cleanInteractionState",payload:t})}}})(e)}}]);