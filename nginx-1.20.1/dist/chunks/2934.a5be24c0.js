(self.webpackChunkyunting=self.webpackChunkyunting||[]).push([[2934],{2402:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>h});var t=n(37316),a=n.n(t),t=n(67154),o=n.n(t),t=n(85354),r=n.n(t),t=n(67294),u=n.n(t),t=n(55609),l=n(26198),s=n(50976),d=n(8201),p=n(98191),f=n(70715),m=n(94644);const c=function(e){var r=e.data,t=e.loading,i=e.title,n=e.onClick,l=e.volType,e=u().useState(void 0),c=e[0],a=e[1];return u().useEffect(function(){var e,t,n;c&&((0,d.P)(r)?(n={title:{text:i},color:n="negative"===(t=l)?"#D96969":"#1574B3",dataset:{dimensions:"negative"===t?["机型ID","机型","负面声量"]:["机型ID","机型","声量"],source:(e=r).map(function(e){return[e.id,e.type,e.count]}),sourceHeader:!1},tooltip:{trigger:"item",formatter:function(e){return""+e.marker+e.name+" ："+e.value[2]}},grid:{top:69,left:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"value",boundaryGap:[0,.01],axisLabel:{color:"#262626",font:"12px "+f.I8+" 400"}},yAxis:{type:"category",data:e.map(function(e){return e.type}),inverse:!0,axisLabel:{color:"#262626",font:"12px "+f.I8+" 400",formatter:function(e){return 16<e.length?e.substring(0,16)+"...":e}}},series:[{type:"bar",encode:{x:"negative"===t?"负面声量":"声量",y:"机型"},barMaxWidth:"22",large:!0,largeThreshold:400,progressive:0,itemStyle:n}]},c.clear(),c.setOption(n)):a(void 0))},[r,c]),u().createElement(d.Z,{loading:t,data:r,renderTitle:u().createElement(p.Z,{title:i,data:r,onMoreClick:function(e){var t,n,a,o;t=c,n=r,a=i,o=l,"image"===(e=e)?(0,m._v)(t,a):"data"===e&&(o=[n.reduce(function(e,t){return[].concat(e,[[t.id,t.type,t.count]])},["negative"===o?["机型ID","机型","负面声量总数"]:["机型ID","机型","声量总数"]])],(0,m.aT)(o,a))}})},u().createElement(s.Z,{theme:"yunting_neg_pos",option:{},style:{width:"100%",height:"100%"},onChartReady:function(e){return a(e)},onEvents:{click:n}}))};const i=function(e){var t=e.brand,n=e.loading,a=e.volumeData,o=e.negativeVolData,r=e.onFilterChange,i=e.onVolumeClick;return u().createElement("div",{className:"yt_social_modelsTop_wrapper"},u().createElement(l.Z,{onReady:r,onChange:r,pageType:"SOCIAL_SERIES_TOP10"}),u().createElement("div",{className:"content",id:"social_modelsTop_content"},u().createElement("div",{className:"social_top10_volume_chart"},u().createElement(c,{loading:n,data:a,title:t+"机型声量Top10",volType:"normal",onClick:function(e,t){return i(e,t,"all")}}),u().createElement(c,{loading:n,data:o,title:t+"机型负面声量Top10",volType:"negative",onClick:function(e,t){return i(e,t,"negative")}}))))};var v=n(35239),g=n(90126),y=n(64396).Z.social.models.top,n=function(t){function e(e){var d=t.call(this,e)||this;return d._handleOnVolumeClick=function(e,t,n){var a=e.componentType,o=e.seriesType,r=e.value,i=d.props,l=i.dateFilter,c=i.filterValue,u=i.projectId,s=i.brand,e=c.some(function(e){return"VOC_ASPECT"===e.id})&&c.find(function(e){return"VOC_ASPECT"===e.id}).values,i=c.some(function(e){return"TAG_RULE"===e.id})&&c.find(function(e){return"TAG_RULE"===e.id}).values,c=c.some(function(e){return"DEFAULT"===e.id})&&c.find(function(e){return"DEFAULT"===e.id});"series"===a&&"bar"===o&&(s={dateFilter:l,projectId:u,filterModel:{project:[u],brandsSeries:[{id:"series",special:"brandsSeries",values:[r[0]]}],messageType:["QUE_ANS_QUESTION","QUE_ANS_ANSWER","WEIBO","WEIBO_REPORT","COMMON_POST","NEWS_TEXT","COMPLAINT"],escore:"all"===n?["1","0","-1"]:["-1"]},filterTip:"舆情看板/机型分析/机型Top10/"+("all"===n?s+"机型声量Top10":s+"机型负面声量Top10")},i&&(s.filterModel.tag=i.map(function(e){return{id:e.id,special:"tag",values:e.values}})),c&&c.values.some(function(e){return"SOURCE"===e.id})&&(s.filterModel.source=c.values.find(function(e){return"SOURCE"===e.id}).values),e&&(s.filterModel.vocAspect=(0,g.ou)(e)),window.open("/inbox/public?"+encodeURIComponent(JSON.stringify(s))))},d._handleOnFilterChange=function(e){d.props.fetchDatas(o()({},e,{projectId:v.t.get(v.V.curProject).id}))},d.state={},d.event={onVolumeClick:d._handleOnVolumeClick,onFilterChange:d._handleOnFilterChange},d}return r()(e,t),e.prototype.render=function(){return u().createElement(i,o()({},this.props,this.state,this.event))},e}(u().PureComponent);const h=(0,t.connect)(function(e){var t=e.loading,e=a()(e,["loading"]);return o()({},e[y],{loading:t.effects[y+"/fetchVolumeData"]||!1,negativeLoading:t.effects[y+"/fetchNegativeVolumeData"]||!1})},function(t){return{fetchDatas:function(e){return t({type:y+"/fetchDatas",payload:e})},fetchVolumeData:function(e){return t({type:y+"/fetchVolumeData",payload:e})},fetchNegativeVolumeData:function(e){return t({type:y+"/fetchNegativeVolumeData",payload:e})},save:function(e){return t({type:y+"/save",payload:e})},clean:function(e){return t({type:y+"/clean",payload:e})}}})(n)}}]);