(self.webpackChunkyunting=self.webpackChunkyunting||[]).push([[2158],{32158:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>b});var n=a(37316),r=a.n(n),t=a(67154),o=a.n(t),n=a(85354),i=a.n(n),t=a(67294),I=a.n(t),l=a(64396),U=a(27310),M=a(60222),c=a(39432),s=a(70715),n=function(r){function e(){for(var n,e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(n=r.call.apply(r,[this].concat(t))||this).chartRef=void 0,n.source=void 0,n.platforms=void 0,n.mColor=s.Fq,n.getChartRef=function(e){return n.chartRef=e},n.setValue=function(e){var t=e.reduce(function(t,e){return e.sourceList.forEach(function(e){t.includes(e.sourceName)||t.push(e.sourceName)}),t},[]),p=[["平台","动销销量","非动销销量","全部"]],e=e.reduce(function(e,i){var l=[i.date],c=[i.date],s=[i.date];return t.forEach(function(t){var e=i.sourceList.find(function(e){return e.sourceName===t}),a=0,n=0,r=0;e&&(r=(a=(o=e.countList.find(function(e){return e.flag}))?o.count:a)+(n=(o=e.countList.find(function(e){return!e.flag}))?o.count:n)),c.push(a),s.push(n),l.push(r);var o=p.find(function(e){return e[0]===t});o?(o[1]+=a,o[2]+=n,o[3]+=r):p.push([t,a,n,r])}),e[0].push(c),e[1].push(s),e[2].push(l),e},[[["日期"].concat(t)],[["日期"].concat(t)],[["日期"].concat(t)]]);n.platforms=t,n.source=[p].concat(e)},n.getOption=function(e,t){var a=3;return 1===t?a=1:0===t&&(a=2),{title:{text:e},grid:[{left:360,right:40,top:80,containLabel:!0}],dataset:n.source.map(function(e){return{source:e}}),tooltip:{trigger:"axis",formatter:function(e){var t=e[0].axisValue,e=e.map(function(e){var t=e.marker,a=e.seriesName,n=e.seriesIndex,r=e.data;e.axisValue;return{name:t+" "+a+"："+(0,c.hE)(r[n]),value:r[n]}});return(e=e.sort(function(e,t){return t.value-e.value}).map(function(e){return e.name})).splice(0,0,(0,s.Zi)("销量（"+t+"）")),e.join("</br>")}},legend:{top:40,left:360,itemWidth:14,itemHeight:12,type:"scroll",pageIconSize:12,data:n.platforms,icon:s.W4.lineRing},xAxis:{type:"category",boundaryGap:!1,axisLabel:{formatter:function(e){return(0,c.yV)(Object.values(n.props.timeType)[0],e)}}},yAxis:{axisLabel:{showMinLabel:!1,formatter:function(e){return(0,c.hE)(e)}},splitNumber:3},series:[{type:"pie",datasetIndex:0,hoverOffset:0,center:[163,156],radius:77,tooltip:{trigger:"item",formatter:function(e){var t=e.marker,a=e.percent,n=e.data,e=n.name,n=n.value;return t+" "+e+"："+(0,c.hE)(n)+"（"+a+"%）"}},label:{formatter:function(e){var t=e.data,e=t.name,t=t.value;return["{a|"+e+"}","{b|"+(0,c.hE)(t)+"}"].join("\n")},rich:{a:{color:"#000000"},b:{color:"#8C8C8C",lineHeight:14,verticalAlign:"bottom"}}},labelLine:{smooth:!0,length:5,lineStyle:{color:"#BFBFBF"}},data:n.source[0].slice(1).map(function(e,t){t=t<=8;return{value:e[a],name:e[0],label:{show:t},labelLine:{show:t},emphasis:{label:{show:t},labelLine:{show:t}}}})}].concat(n.platforms.map(function(e,t){return{type:"line",symbol:2===n.source[0].length?"circle":"none",datasetIndex:a,itemStyle:{color:s.Fq[t]}}}))}},n}return i()(e,r),e.prototype.renderChart=function(e,t,a){this.setValue(e),this.chartRef.clear(),this.chartRef.setOption(this.getOption(t,a))},e}(I().PureComponent),d=a(8201),h=a(98191),y=a(50976),v=a(60496),p=a(94644),g=a(39713),t=a(45697),t=a.n(t),n=function(r){function e(){for(var n,e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(n=r.call.apply(r,[this].concat(t))||this).handleOnMoreClick=function(e){var t=n.props,a=t.title,t=t.data;"image"===e&&n.chartRef?(0,p._v)(n.chartRef,a):"data"===e&&(0,d.P)(t)&&(0,p.aT)([n.source.reduce(function(t,e,a){return 0===a?t.push(["各平台销量"]):1===a?t.push(["动销销量"]):2===a?t.push(["非动销销量"]):3===a&&t.push(["全部销量"]),e.forEach(function(e){t.push(e.map(function(e){return e%1?(100*e).toFixed(2)+"%":e}))}),t.push([""]),t},[])],a)},n}i()(e,r);var t=e.prototype;return t.componentDidMount=function(){this.renderChart()},t.componentDidUpdate=function(e,t){var a=e.data,n=e.dataType,r=this.props,e=r.data,r=r.dataType;((0,d.P)(e)&&JSON.stringify(a)!==JSON.stringify(e)||JSON.stringify(n)!==JSON.stringify(r))&&this.renderChart(),!(0,d.P)(e)&&this.chartRef&&(this.chartRef=void 0)},t.renderChart=function(){var e=this.props,t=e.data,a=e.title,e=e.dataType;(0,d.P)(t)&&this.chartRef&&r.prototype.renderChart.call(this,t,a,Object.values(e)[0])},t.render=function(){var e=this.props,t=e.data,a=e.loading,n=e.title,r=e.titleOverlay,o=e.onChange,i=e.timeOptions,l=e.timeType,c=e.flavorTimeTpye,s=e.dataType,e=e.flavorDataType,p=Object.keys(s)[0],u=Object.keys(e)[0],f=Object.keys(l)[0],m=Object.keys(c)[0];return I().createElement(d.Z,{className:"yt_market_bm_sanalysis_pie_line_chart",data:t,loading:a,renderTitle:I().createElement(h.Z,{title:n,titleOverlay:r,data:t,onMoreClick:this.handleOnMoreClick},I().createElement(v.Z,{options:g.N,activeObj:s[p],flavor:e[u],onChange:function(e){var t;return o(((t={})[p]=e,t))},onFlavorChange:function(e){var t;return o(((t={})[u]=e,t))}}),I().createElement(v.Z,{options:i,activeObj:l[f],flavor:c[m],onChange:function(e){var t;return o(((t={})[f]=e,t))},onFlavorChange:function(e){var t;return o(((t={})[m]=e,t))}}))},I().createElement(y.Z,{onChartReady:this.getChartRef,theme:"yunting_multi_color",option:{},style:{height:"100%"}}))},e}(n);n.propTypes={data:t().any,titleOverlay:t().oneOf([t().string,t().node]),title:t().string,loading:t().bool,onChange:t().func,onClick:t().func,timeOptions:t().arrayOf({title:t().string,value:t().string}),timeType:t().object,flavorTimeTpye:t().object,dataType:t().object,flavorDataType:t().object};const V=n;n=function(r){function e(){for(var n,e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(n=r.call.apply(r,[this].concat(t))||this).handleOnMoreClick=function(e){var t=n.props,a=t.title,t=t.data;"image"===e&&n.chartRef?(0,p._v)(n.chartRef,a):"data"===e&&(0,d.P)(t)&&(0,p.aT)([n.source.reduce(function(t,e){return e.forEach(function(e){t.push(e.map(function(e){return e%1?(100*e).toFixed(2)+"%":e}))}),t.push(""),t},[])],a)},n}i()(e,r);var t=e.prototype;return t.componentDidMount=function(){this.renderChart()},t.componentDidUpdate=function(e,t){var a=e.data,n=e.dataType,r=this.props,e=r.data,r=r.dataType;((0,d.P)(e)&&JSON.stringify(a)!==JSON.stringify(e)||JSON.stringify(n)!==JSON.stringify(r))&&this.renderChart(),!(0,d.P)(e)&&this.chartRef&&(this.chartRef=void 0)},t.renderChart=function(){var e=this.props,t=e.data,a=e.title,e=e.dataType;(0,d.P)(t)&&this.chartRef&&r.prototype.renderChart.call(this,t,a,Object.values(e)[0])},t.render=function(){var e=this.props,t=e.data,a=e.loading,n=e.title,r=e.titleOverlay,o=e.onChange,i=e.timeOptions,l=e.timeType,c=e.flavorTimeTpye,s=e.dataType,e=e.flavorDataType,p=Object.keys(s)[0],u=Object.keys(e)[0],f=Object.keys(l)[0],m=Object.keys(c)[0];return I().createElement(d.Z,{className:"yt_market_bm_sanalysis_bar_line_chart",data:t,loading:a,renderTitle:I().createElement(h.Z,{title:n,titleOverlay:r,data:t,onMoreClick:this.handleOnMoreClick},I().createElement(v.Z,{options:g.N,activeObj:s[p],flavor:e[u],onChange:function(e){var t;return o(((t={})[p]=e,t))},onFlavorChange:function(e){var t;return o(((t={})[u]=e,t))}}),I().createElement(v.Z,{options:i,activeObj:l[f],flavor:c[m],onChange:function(e){var t;return o(((t={})[f]=e,t))},onFlavorChange:function(e){var t;return o(((t={})[m]=e,t))}}))},I().createElement(y.Z,{onChartReady:this.getChartRef,theme:"yunting_multi_color",option:{},style:{height:"100%"}}))},e}(function(n){function e(){for(var r,e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(r=n.call.apply(n,[this].concat(t))||this).chartRef=void 0,r.source=void 0,r.objNames=void 0,r.mColor=s.Fq,r.getChartRef=function(e){return r.chartRef=e},r.setValue=function(e,t,a){var n=e.reduce(function(a,e){return e.sourceList.forEach(function(t){var e=a.find(function(e){return t.sourceName===e[0]});e?e[1]+=t.docCount:a.push([t.sourceName,t.docCount||0])}),a},[]).sort(function(e,t){return t[1]-e[1]}),o=n.map(function(e){return e[0]});n.splice(0,0,[a,-1===t?"全部销量":1===t?"动销销量":"非动销销量"]);e=e.reduce(function(e,n){var r=[n.date];return o.forEach(function(t){var e=n.sourceList.find(function(e){return e.sourceName===t}),a=0;e&&(a=e.docCount),r.push(a)}),e.push(r),e},[["日期"].concat(o)]);r.objNames=o,r.source=[n,e]},r.getOption=function(e){var t=160<(0,c.jD)(r.source[0].reduce(function(e,t,a){return 0===a?"":e+t[0]},""),12);return{title:{text:e},grid:[{left:36,top:80,width:270,containLabel:!0},{left:360,right:40,top:80,bottom:60,containLabel:!0}],dataset:r.source.map(function(e){return{source:e}}),tooltip:{trigger:"axis",formatter:function(e){var t=e[0].axisValue,e=e.map(function(e){var t=e.marker,a=e.seriesName,n=e.seriesIndex,r=e.data;e.axisValue;return{name:t+" "+a+"："+(0,c.hE)(r[n]),value:r[n]}});return(e=e.sort(function(e,t){return t.value-e.value}).map(function(e){return e.name})).splice(0,0,(0,s.Zi)("销量（"+t+"）")),e.join("</br>")}},legend:{top:40,left:360,itemWidth:14,itemHeight:12,type:"scroll",pageIconSize:12,data:r.objNames,icon:s.W4.lineRing},dataZoom:[{bottom:20,xAxisIndex:1,height:16,handleSize:"100%",showDetail:!1}],xAxis:[{type:"category",gridIndex:0,axisLabel:{rotate:t?45:0,show:!0,formatter:function(e){return 6<e.length?e.substring(0,5)+"...":e}}},{type:"category",gridIndex:1,boundaryGap:!1,axisLabel:{formatter:function(e){return(0,c.yV)(Object.values(r.props.timeType)[0],e)}}}],yAxis:[{type:"value",gridIndex:0,splitNumber:3,minInterval:1,axisLabel:{formatter:function(e){return(0,c.hE)(e)}}},{type:"value",gridIndex:1,splitNumber:3,minInterval:1,axisLabel:{showMinLabel:!1,formatter:function(e){return(0,c.hE)(e)}}}],series:[{type:"bar",xAxisIndex:0,yAxisIndex:0,datasetIndex:0,barMaxWidth:24,itemStyle:{color:function(e){e=e.dataIndex;return s.Fq[e]}},tooltip:{trigger:"item",formatter:function(e){var t=e.marker,e=e.data;return t+" "+e[0]+"："+(0,c.hE)(e[1])}}}].concat(r.objNames.map(function(e,t){return{type:"line",xAxisIndex:1,yAxisIndex:1,symbol:2===r.source[1].length?"circle":"none",datasetIndex:1,itemStyle:{color:s.Fq[t]}}}))}},r}return i()(e,n),e.prototype.renderChart=function(e,t,a){this.setValue(e,a,t),this.chartRef.clear(),this.chartRef.setOption(this.getOption(t,a))},e}(I().PureComponent));n.propTypes={data:t().any,titleOverlay:t().oneOf([t().string,t().node]),title:t().string,loading:t().bool,onChange:t().func,onClick:t().func,timeOptions:t().arrayOf({title:t().string,value:t().string}),timeType:t().object,flavorTimeTpye:t().object,dataType:t().object,flavorDataType:t().object};const K=n;var n=function(r){function e(){for(var a,e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(a=r.call.apply(r,[this].concat(t))||this).chartRef=void 0,a.source=void 0,a.getChartRef=function(e){return a.chartRef=e},a.setValue=function(e,t){a.source=e.reduce(function(e,t){return e.push([t.sourceName,t.productCount,t.docCount]),e},[["价格带",t+"商品数",t+"销量"]])},a.getOption=function(e){return{title:{text:e},tooltip:{trigger:"axis",formatter:function(e){return e.reduce(function(e,t,a){var n=t.marker,r=t.value,o=t.seriesName,t=t.encode.y[0];return 0===a&&e.push((0,s.Zi)(r[0])),e.push(n+" "+o+"："+(0,c.hE)(r[t])),e},[]).join("</br>")}},legend:{left:20,top:40,itemWidth:14,itemHeight:12,data:[{name:a.source[0][2],icon:s.W4.lineRing},{name:a.source[0][1],icon:s.W4.square}]},grid:{bottom:50,top:100,left:36,right:36,containLabel:!0},dataZoom:[{bottom:20,xAxisIndex:[0,1],height:15,handleSize:"100%",showDetail:!1}],dataset:[{source:a.source}],xAxis:[0,1].map(function(e){return{type:"category",show:!e}}),yAxis:[0,1].map(function(e){return{type:"value",name:a.source[0][e+1],minInterval:1,splitNumber:3,nameTextStyle:{color:"#262626"},axisLabel:{formatter:function(e){return(0,c.hE)(e)}},position:e?"right":"left"}}),series:[{type:"bar",yAxisIndex:0,barMaxWidth:24},{type:"line",yAxisIndex:1}]}},a}return i()(e,r),e.prototype.renderChart=function(e,t,a){this.setValue(e,a),this.chartRef.clear(),this.chartRef.setOption(this.getOption(t))},e}(I().PureComponent),u=[{title:"全部",value:-1},{title:"动销",value:1},{title:"非动销",value:0}],n=function(r){function e(e){var n=r.call(this,e)||this;n.handleOnMoreClick=function(e){var t=n.props,a=t.title,t=t.data;"image"===e&&n.chartRef?(0,p._v)(n.chartRef,a):"data"===e&&(0,d.P)(t)&&(0,p.aT)([n.source.map(function(e){return e.map(function(e){return e%1?(100*e).toFixed(2)+"%":e})})],a)};var t=Object.values(e.dataType)[0];return n.state={seriesPrefix:u.find(function(e){return e.value===t}).title},n}i()(e,r);var t=e.prototype;return t.componentDidMount=function(){this.renderChart()},e.getDerivedStateFromProps=function(e){var t=Object.values(e.dataType)[0];return{seriesPrefix:u.find(function(e){return e.value===t}).title}},t.componentDidUpdate=function(e,t){var a=e.data,e=this.props.data;(0,d.P)(e)&&JSON.stringify(a)!==JSON.stringify(e)&&this.renderChart(),!(0,d.P)(e)&&this.chartRef&&(this.chartRef=void 0)},t.renderChart=function(){var e=this.props,t=e.data,a=e.title,e=this.state.seriesPrefix;(0,d.P)(t)&&this.chartRef&&r.prototype.renderChart.call(this,t,a,e)},t.render=function(){var e=this.props,t=e.data,a=e.loading,n=e.title,r=e.titleOverlay,o=e.dataType,i=e.flavorDataType,l=e.onChange,c=Object.keys(o)[0],s=Object.keys(i)[0];return I().createElement(d.Z,{className:"yt_market_bm_analysis_bar_line_in_one_chart",data:t,loading:a,renderTitle:I().createElement(h.Z,{title:n,titleOverlay:r,data:t,onMoreClick:this.handleOnMoreClick},I().createElement(v.Z,{options:u,activeObj:o[c],flavor:i[s],onChange:function(e){var t;return l(((t={})[c]=e,t))},onFlavorChange:function(e){var t;return l(((t={})[s]=e,t))}}))},I().createElement(y.Z,{onChartReady:this.getChartRef,theme:"yunting_multi_color",option:{},style:{height:"100%"}}))},e}(n);n.propTypes={data:t().any,dataType:t().object,flavorDataType:t().object,titleOverlay:t().oneOf([t().string,t().node]),title:t().string,loading:t().bool,onChange:t().func};const W=n;var n=a(61409),J=a(8833),q=I().createElement("div",null,I().createElement("div",null,"选定的日期范围内，符合筛选条件的商品中，再基于「商品状态=正常在售或预售」过滤出商品列表，然后对商品列表做去重求和，得出的数值即为「在售商品数」。「属性下架」和「链接下架」也是基于这种逻辑算出的 相关的销量均是基于「在售商品」展开的"),I().createElement("div",null,"同时，一定时间范围内的「在售商品数」、「属性下架」的商品数和「链接下架」的商品数不是互斥的。原因就是在一个商品在一段时间内可能先后具有「在售」和「属性下架」等状态。"),I().createElement("div",{style:{marginTop:14,textAlign:"right"}},I().createElement(n.rU,{className:"yt-feedback-read-more",to:"https://www.yuque.com/docs/share/f255c9b4-2b3a-4c9b-9b37-371717d0b99c?# 《商品状态说明》",target:"_blank"},"了解更多"))),H=I().createElement("div",null,I().createElement("div",null,"SKU：这里的「SKU」区别与电商平台的所谓的spu有区别。市场洞察中的SKU是站在品牌方的立场的描述，与电商平台无关 如：iPhone X 64G 银色 则是一个SKU在系统中对应的是“产品”这一概念"),I().createElement("div",null,"SPU：这里的「SPU」区别与电商平台的所谓的spu有区别。市场洞察中的SPU是站在品牌方的立场的描述，与电商平台无关 如：iPhone X 可以确定一个产品即为一个SPU。在系统中对应的是“型号”这一概念")),z=I().createElement("div",null,I().createElement("div",null,"「动销商品数」：在指定的事件范围内，如果商品A有关联的促销活动，则在这段时间内该商品A称之为「动销商品」"),I().createElement("div",null,"「动销率」 = 动销商品数÷在售商品数"),I().createElement("div",null,"「活动数量」指定的时间范围内与商品相关的活动的数量")),B=I().createElement("div",null,"「销量」即当期销量 如果商品A在具体的某一天有关联的促销活动，那么商品A在该天的销量称之为「动销销量」；否则为「非动销销量」"),X={width:"100%",height:"160px"};const f=function(e){var t=e.onSaleData,a=e.fetchingOnSaleData,n=e.onSaleSKUData,r=e.fetchingOnSaleSKUData,o=e.activeData,i=e.fetchingActiveData,l=e.saledData,c=e.fetchingSaledData,s=e.platformSaledData,p=e.platformSaledDataType,u=e.fPlatformSaledDataType,f=e.platformSaledTimeType,m=e.fPlatformSaledTimeType,d=e.fetchingPlatformSaledData,h=e.priceZoneData,y=e.priceZoneDataType,v=e.fPriceZoneDataType,g=e.fetchingPriceZoneData,T=e.spuTop5Data,b=e.spuTop5DataType,E=e.fSpuTop5DataType,S=e.spuTop5TimeType,C=e.fSpuTop5TimeType,D=e.fetchingSpuTop5Data,O=e.shopTop5Data,_=e.shopTop5DataType,x=e.fShopTop5DataType,N=e.shopTop5TimeType,k=e.fShopTop5TimeType,P=e.fetchingShopTop5Data,Z=e.onFilterReady,R=e.onFilterChange,w=e.timeTypeOpts,j=e.pageType,A=I().useCallback(function(e){e=e.compareValue;return R({onSaleCompareType:e})},[R]),F=I().useCallback(function(e){e=e.compareValue;return R({onSaleSKUDataCompareType:e})},[R]),L=I().useCallback(function(e){e=e.compareValue;return R({activeDataCompareType:e})},[R]),e=I().useCallback(function(e){e=e.compareValue;return R({saledDataCompareType:e})},[R]);return I().createElement(J.Z,{className:"yt_market_bm_analysis_wrapper",pageType:j,onReady:Z,onChange:R},I().createElement("div",{className:"content"},I().createElement(U.Z,{orientation:"horizontal",colNumber:4,showList:["card_0","card_1","card_2","card_3"]},I().createElement(M.Z,{key:"card_0",tip:q,loading:a,style:X,data:t,compare:t&&t[0].compare,onSetting:A}),I().createElement(M.Z,{key:"card_1",tip:H,loading:r,style:X,data:n,compare:n&&n[0].compare,onSetting:F}),I().createElement(M.Z,{key:"card_2",tip:z,loading:i,style:X,data:o,compare:o&&o[0].compare,onSetting:L}),I().createElement(M.Z,{key:"card_3",tip:B,loading:c,style:X,data:l,compare:l&&l[0].compare,onSetting:e})),I().createElement(U.Z,{orientation:"vertical",showList:["chart_0","chart_1","chart_2","chart_3"]},I().createElement(V,{key:"chart_0",data:s,title:"各平台销量占比及走势",loading:d,dataType:{platformSaledDataType:p},flavorDataType:{fPlatformSaledDataType:u},timeType:{platformSaledTimeType:f},flavorTimeTpye:{fPlatformSaledTimeType:m},timeOptions:w,onChange:R}),I().createElement(W,{key:"chart_1",data:h,title:"价格带的商品数量分布",loading:g,dataType:{priceZoneDataType:y},flavorDataType:{fPriceZoneDataType:v},onChange:R}),"MARKET_BRAND_ANALYSIS"===j&&I().createElement(K,{key:"chart_2",data:T,title:"Top5-SPU的销量",loading:D,dataType:{spuTop5DataType:b},flavorDataType:{fSpuTop5DataType:E},timeType:{spuTop5TimeType:S},flavorTimeTpye:{fSpuTop5TimeType:C},timeOptions:w,onChange:R}),I().createElement(K,{key:"chart_3",data:O,title:"Top5-店铺的销量",loading:P,dataType:{shopTop5DataType:_},flavorDataType:{fShopTop5DataType:x},timeType:{shopTop5TimeType:N},flavorTimeTpye:{fShopTop5TimeType:k},timeOptions:w,onChange:R}))))};var n=a(55609),m=a(35239),a=function(t){function e(e){var n=t.call(this,e)||this;return n._handleOnFilterReady=function(e,t,a){n.props.fetchParams(o()({},e,{filterModel:e.filterValue,projectId:m.t.get(m.V.curProject).id,timeTypeOpts:a.dateOptions,defaultTimeType:a.defaultDateType,pageType:n.state.pageType}))},n._handleOnFilterChange=function(e,t,a){e.dateFilter?n._handleOnFilterReady(e,t,a):e.onSaleCompareType?n.props.fetchOnSaleData(e):e.onSaleSKUDataCompareType?n.props.fetchOnSaleSKUData(e):e.activeDataCompareType?n.props.fetchActiveData(e):e.saledDataCompareType?n.props.fetchSaledData(e):e.platformSaledTimeType?n.props.fetchPlatformSaledData(e):void 0!==e.priceZoneDataType?n.props.fetchPriceZoneData(e):void 0!==e.spuTop5DataType||e.spuTop5TimeType?n.props.fetchSPUTop5Data(e):void 0!==e.shopTop5DataType||e.shopTop5TimeType?n.props.fetchShopTop5Data(e):void 0!==e.fPlatformSaledDataType||void 0!==e.fPlatformSaledTimeType||void 0!==e.fPriceZoneDataType||void 0!==e.fSpuTop5DataType||void 0!==e.fSpuTop5TimeType||void 0!==e.fShopTop5DataType||void 0!==e.fShopTop5TimeType?n.props.setDefaultValue(e):void 0!==e.platformSaledDataType&&n.props.save(e)},n.state={pageType:T().replace(/([A-Z])/g,"_$1").toUpperCase()},n.event={onFilterReady:n._handleOnFilterReady,onFilterChange:n._handleOnFilterChange},n}return i()(e,t),e.prototype.render=function(){return I().createElement(f,o()({},this.props,this.state,this.event))},e}(I().PureComponent);function T(){var e=window.location.pathname,e=e.substring(e.lastIndexOf("/")+1);return l.Z.market[e]}const b=(0,n.connect)(function(e){var t=e.loading,a=r()(e,["loading"]),e=T();return o()({},a[e],{fetchingOnSaleData:t.effects[e+"/fetchOnSaleData"]||!1,fetchingOnSaleSKUData:t.effects[e+"/fetchOnSaleSKUData"]||!1,fetchingActiveData:t.effects[e+"/fetchActiveData"]||!1,fetchingSaledData:t.effects[e+"/fetchSaledData"]||!1,fetchingPlatformSaledData:t.effects[e+"/fetchPlatformSaledData"]||!1,fetchingPriceZoneData:t.effects[e+"/fetchPriceZoneData"]||!1,fetchingModelTop5Data:t.effects[e+"/fetchModelTop5Data"]||!1,fetchingShopTop5Data:t.effects[e+"/fetchShopTop5Data"]||!1})},function(t){var a=T();return{fetchParams:function(e){return t({type:a+"/fetchParams",payload:e})},fetchOnSaleData:function(e){return t({type:a+"/fetchOnSaleData",payload:e})},fetchOnSaleSKUData:function(e){return t({type:a+"/fetchOnSaleSKUData",payload:e})},fetchActiveData:function(e){return t({type:a+"/fetchActiveData",payload:e})},fetchSaledData:function(e){return t({type:a+"/fetchSaledData",payload:e})},fetchPlatformSaledData:function(e){return t({type:a+"/fetchPlatformSaledData",payload:e})},fetchPriceZoneData:function(e){return t({type:a+"/fetchPriceZoneData",payload:e})},fetchModelTop5Data:function(e){return t({type:a+"/fetchModelTop5Data",payload:e})},fetchSPUTop5Data:function(e){return t({type:a+"/fetchSPUTop5Data",payload:e})},fetchShopTop5Data:function(e){return t({type:a+"/fetchShopTop5Data",payload:e})},setDefaultValue:function(e){return t({type:a+"/setDefaultValue",payload:e})},save:function(e){return t({type:a+"/save",payload:e})}}})(a)},8833:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});var t=a(67154),l=a.n(t),t=a(37316),c=a.n(t),t=a(67294),s=a.n(t),p=a(26198),u=a(97194),t=a(45697),a=a.n(t),t=function(e){var t=e.getFilterRef,a=e.className,n=e.hour,r=e.children,o=e.onReady,i=e.onChange,e=c()(e,["getFilterRef","className","hour","children","onReady","onChange"]);return s().createElement("div",{className:a},s().createElement(p.Z,l()({ref:t,onReady:function(){o.apply(null,[].concat(Array.prototype.slice.call(arguments),[(0,u.X)(arguments[0].dateFilter.numOfDays,n)]))},onChange:function(){i.apply(null,[].concat(Array.prototype.slice.call(arguments),[(0,u.X)(arguments[0].dateFilter.numOfDays,n)]))}},e)),r)};const n=t;t.propTypes={className:a().string,hour:a().bool,onReady:a().func,onChange:a().func,pageType:a().string,titles:a().shape({titel:a().string,url:a().string,state:a().object})}},27310:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});function s(e){return e=e.height,p().createElement("div",{style:{background:"#fff",height:e,display:"flex",alignItems:"center",justifyContent:"center"}},"Template")}var t=a(85354),r=a.n(t),t=a(67294),p=a.n(t),t=a(45697),t=a.n(t),i=a(92360),a=function(n){function e(){for(var o,e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(o=n.call.apply(n,[this].concat(t))||this).clientHeight=160,o.notShowList=[],o._handleOnCheckBoxChange=function(e,t){var a,n=o.props,r=n.onChange,n=n.showList;e?(a=n.slice()).push(t):a=n.filter(function(e){return e!==t}),r&&r(a)},o._renderEditableFrame=function(t,e){var a=o.props,n=a.editable,a=a.colNumber,a=void 0===a?1:a;return p().createElement("div",{id:t.key,key:t.key,style:{width:"calc("+100/a+"% - 12px)"},className:n?"child_editable":""},t,n&&p().createElement(i.Checkbox,{checked:e,className:"checkbox_style",onChange:function(e){return o._handleOnCheckBoxChange(e,t.key)}}))},o}r()(e,n);var t=e.prototype;return t.componentDidMount=function(){var e=this.props.children,e=e instanceof Array?e[0]:e,e=document.getElementById(e.key);e&&(this.childHeight=e.clientHeight)},t.render=function(){var o=this,e=this.props,t=e.className,a=void 0===t?"":t,n=e.editable,i=void 0!==n&&n,t=e.orientation,n=void 0===t?"horiziontal":t,t=e.children,e=e.showList,l=void 0===e?[]:e,c=t instanceof Array?t:[t];return this.notShowList=[],p().createElement("div",{className:"yt_drag_layout_wrapper yt_drag_layout_"+n+" "+a},c.reduce(function(e,t,a){var n=l.indexOf(t.key);if(-1<n?e[n]=o._renderEditableFrame(t,!0):o.notShowList.push(t.key),a!==c.length-1)return e;var r=e.filter(function(e){return e});return i&&0<o.notShowList.length&&o.notShowList.forEach(function(e){r.push(o._renderEditableFrame(p().createElement(s,{key:e,height:o.childHeight}),!1))}),r},[]))},e}(p().PureComponent);const n=a;a.propTypes={orientation:t().oneOf(["horizontal","vertical"]),colNumber:t().number,className:t().oneOfType([t().string,t().object]),editable:t().bool,showList:t().arrayOf(t().string),onChange:t().func}},60222:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});function o(e){var t=e.value,a=e.getValue,n=(t=d().useState(t))[0],r=t[1];return d().createElement("div",{className:"yt_modal_dashboard_edit_wrapper"},d().createElement("div",{className:"content_item"},d().createElement("span",null,"同比类型"),d().createElement("span",null,d().createElement(i(),{className:"content_item_select",value:(c.find(function(e){return e.value===n})||{}).label,onChange:function(e){var t;r(t=e),setTimeout(function(){return a&&a(t)},0)},inputIcon:d().createElement("i",{className:"icon-cem_arrow-launches",style:{color:"#8C8C8C"}})},c.map(function(e){return d().createElement(i().Option,{value:e.value,key:e.value},e.label)})))))}var n=a(67154),f=a.n(n),t=a(37316),m=a.n(t),n=a(67294),d=a.n(n),t=a(45697),n=a.n(t),h=a(25713),y=a(43036),t=a(2258),i=a.n(t),l=a(57522),c=[{value:"WEEK",label:"周"},{value:"MONTH",label:"月"},{value:"QUATER",label:"季"},{value:"YEAR",label:"年"}],t=function(r){return new Promise(function(e,t){var a=r.value,n=f()({},r,{titleText:d().createElement("div",{className:"indicator_card_comfirm"},d().createElement("span",null,"同比设置"),d().createElement("span",{onClick:function(){return window.open("https://www.yuque.com/docs/share/5615d490-0056-4bb9-b208-bf747c9048c0")}},"查看更多")),content:d().createElement(o,f()({},r,{getValue:function(e){a=e}}))});n.onOk=function(){return e(a)},n.onCancel=t,(0,l.Z)(n)})};const v=t;t.propTypes={getValue:n().func,value:n().string};function g(e){return!["",null,void 0].includes(e)}function T(e){return e&&(5<e.length?String(e).substring(0,5)+"...":e)}function b(e,t,a){var r,o;"image"===e?(r=t,o=(0,s.UO)(a[0]&&a[0].name),new Promise(function(e){var t=r.offsetWidth,a=r.cloneNode(!0),n=document.createElement("canvas");n.width=12*t,n.height=1920,n.style.width=t+"px",n.style.height="160px",n.className="yt_trend_list_canvas",n.getContext("2d").scale(12,12),a.style.width=t+"px",a.style.height="160px",a.style.position="absolute",a.style.top="0px",a.style.left="0px",a.style.zIndex=-1,a.style.opacity=0,document.body.appendChild(a),p()(a,{allowTaint:!0,taintTest:!1,canvas:n,useCORS:!0,width:t,height:160,onrendered:function(e){document.body.appendChild(e);e=e.toDataURL("png");(0,u.saveAs)(e,o,"image/png"),setTimeout(function(){document.body.removeChild(a),document.body.removeChild(document.querySelector(".yt_trend_list_canvas"))},0)}})})):"data"===e&&(e=[a.reduce(function(e,t){return[].concat(e,[[t.name,t.count]])},[])],(0,s.aT)(e,a[0]&&a[0].name))}var E=a(8201),S=a(39432),s=a(94644),t=a(29531),p=a.n(t),u=a(93162),C=[{title:"导出图片",type:"image"},{title:"导出数据",type:"data"}],D=[{title:"设置同比",type:"compare"}];a=function(e){function n(e){return a&&a[e]?a[e]:{}}function t(e){if(n(e).name){if(g(n(e).count)){var t=n(e).count;switch(n(e).format){case"myriad":t=(0,S.hE)(t);break;case"percent":a=t,t=g(null)?null:0===a?"0.00%":Math.abs(100*a).toFixed(2)+"%"}return t}return"--"}var a;return""}var a=e.data,r=e.tip,o=e.compare,i=e.onSetting,l=e.loading,c=e.paragraph,s=m()(e,["data","tip","compare","onSetting","loading","paragraph"]),e=d().useState(),p=e[0],u=e[1],e=function(e){return"myriad"!==n(e).format?t(e):n(e).count.toLocaleString()};return d().createElement("div",f()({className:"indicator_card"},s,{ref:function(e){return u(e)}}),d().createElement(E.Z,{data:a,className:"section_com",loading:l,paragraph:c},d().createElement("div",{className:"title_wrap"},d().createElement("span",{className:"chart_title"},d().createElement("span",{className:"chart_title_name"},n(0).name,r&&d().createElement(y.Z,{placement:"top",overlayClassName:"alert-log-tips",overlay:r},d().createElement("i",{className:"icon-cem_file1","data-html2canvas-ignore":!0})))),d().createElement("span",{className:"chart_title_buttons","data-html2canvas-ignore":!0},d().createElement(h.Z,{onClick:function(e){"compare"===e?v({value:o}).then(function(e){i({compareValue:e})}):b(e,p,a)},options:C.concat(i?D:[])}))),d().createElement("div",{className:"section_mid"},d().createElement("p",null,d().createElement(y.Z,{placement:"top",overlay:e(0)},d().createElement("section",null,t(0)))),n(1).name||n(2).name?d().createElement("p",null,d().createElement("span",null,d().createElement("span",null,d().createElement(y.Z,{placement:"top",overlay:n(1).name},d().createElement("section",{className:"name"},n(1).name))),d().createElement("span",null,d().createElement(y.Z,{placement:"top",overlay:e(1)},d().createElement("section",null,t(1))),"boolean"==typeof n(1).rise&&d().createElement("i",{className:n(1).rise?"icon-cem_three-states-up":"icon-cem_three-states-down"}))),d().createElement("span",null,d().createElement("span",null,d().createElement(y.Z,{placement:"top",overlay:n(2).name},d().createElement("section",{className:"name"},n(2).name))),d().createElement("span",null,d().createElement(y.Z,{placement:"top",overlay:e(2)},d().createElement("section",null,t(2))),"boolean"==typeof n(2).rise&&d().createElement("i",{className:n(2).rise?"icon-cem_three-states-up":"icon-cem_three-states-down"})))):null),(n(3).name||n(4).name)&&d().createElement("div",{className:"section_bottom"},d().createElement("span",null,d().createElement("span",null,d().createElement(y.Z,{placement:"top",overlay:n(3).name},d().createElement("section",{className:"name"},T(n(3).name)))),d().createElement("span",null,d().createElement(y.Z,{placement:"top",overlay:e(3)},d().createElement("section",null,t(3))))),n(4).name?d().createElement("span",null,d().createElement("span",null,d().createElement(y.Z,{placement:"top",overlay:n(4).name},d().createElement("section",{className:"name"},T(n(4).name)))),d().createElement("span",null,d().createElement(y.Z,{placement:"top",overlay:e(4)},d().createElement("section",null,t(4))))):null)))};const r=a;a.propTypes={data:n().arrayOf(n().shape({name:n().string,count:n().oneOfType([n().string,n().number]),rise:n().bool,format:n().oneOfType(["myriad","percent",void 0])})),tip:n().oneOfType([n().string,n().node]),compare:n().string,onSetting:n().func,loading:n().bool,paragraph:n().arrayOf(n().string)}}}]);