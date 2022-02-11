"use strict";(self.webpackChunkyunting=self.webpackChunkyunting||[]).push([[228],{50228:(e,t,a)=>{a.d(t,{Z:()=>Z});var n=a(63366),l=a(87462),r=a(94578),i=a(67294),o=a(64396),u=a(55609),s=a(35239),p=a(10291),c=a(79260),f=(a(61210),a(50976)),m=a(8201),d=a(60496),h=a(98191),y=a(43036),v=a(70715),g=a(94644),x=a(39432),N=["\u4e0a\u671f","\u73af\u6bd4"],b=["#D96969","#D07B49","#CDB446","#15B374"],D=function(e){return[].concat(N.map((function(t,a){var n=null===e.circleNpsValue?"--":e.circleNpsValue;return 1===a&&(n=e.rate),E(a,n)})))},E=function(e,t){return{type:"group",left:"245",top:0===e?"57%":"65%",silent:!0,children:[{type:"text",style:{text:N[e],fill:"#8C8C8C",font:"14px "+v.I8}}].concat(S(t))}},S=function(e,t){return[{type:"text",left:50,style:{text:e,fill:"#262626",font:"14px "+v.I8}}]};const T=function(e){var t=e.data,a=e.dateOptions,n=e.defaultDateType,l=e.setDefaultValue,r=e.flavorObj,o=e.className,u=e.fetchNpsData,s=i.useState(void 0),p=s[0],c=s[1],N=i.useState(void 0),E=N[0],S=N[1],T=i.useState(void 0),C=T[0],V=T[1];return i.useEffect((function(){E&&p&&function(e,t){t.clear(),t.setOption(e)}(E,p)}),[E,p]),i.useEffect((function(){if(t){var e=function(e,t,a){if(0===e.list.length)return"empty";var n={npsValue:(100*e.npsValue).toFixed(0)-0,circleNpsValue:null===e.circleNpsValue?null:(100*e.circleNpsValue).toFixed(0)-0};n.rate=n.circleNpsValue&&null!==n.npsValue?((n.npsValue-n.circleNpsValue)/n.circleNpsValue*100).toFixed(2)+"%":"--";var l,r=e.list;return{axisPointer:{link:{xAxisIndex:"all"}},title:{text:t},tooltip:{formatter:function(e){return(e||[]).map((function(e){return'<span style="font-weight: bold;font-size: 12px">'+e.name+"</span><br/>"+e.marker+e.seriesName+"\uff1a"+(null===e.data?"-":e.data)})).join("<br/><br/>")}},xAxis:[{type:"category",data:r.map((function(e){return(0,x.yV)(a,e.time)})),boundaryGap:!1,position:"bottom",axisLine:{onZero:!1}},{type:"category",data:r.map((function(e){return(0,x.yV)(a,e.time)})),gridIndex:1,show:!1,boundaryGap:!1}],yAxis:[{type:"value",name:"NPS\u5206\u503c",nameTextStyle:{color:"#262626",padding:[0,0,10,0]},minInterval:1,splitNumber:3},{type:"value",axisLine:{show:!1},axisLabel:{show:!1},gridIndex:1,name:"\u7b54\u9898\u6570\u91cf",nameTextStyle:{color:"#262626"}}],dataZoom:[{type:"slider",show:!0,xAxisIndex:[0,1],height:16,top:335}],grid:[{left:470,right:50,top:80,height:"32%",tooltip:{trigger:"axis"}},{left:470,right:50,top:265,gridIndex:1,height:"15%",tooltip:{trigger:"axis"}}],graphic:[{type:"text",left:"245",top:"30%",silent:!0,style:{text:(l=n.npsValue,l>70?"\u5353\u8d8a":l>50&&l<=70?"\u4f18\u79c0":l>10&&l<=50?"\u826f\u597d":l>5&&l<=10?"\u7cdf\u7cd5":"\u7cdf\u7cd5\u900f\u9876"),fill:"#262626",font:"26px "+v.I8}},{type:"text",left:"245",top:"43%",silent:!0,style:{text:"\u5f53\u524d\u8868\u73b0",fill:"#8C8C8C",font:"14px "+v.I8}}].concat(D(n)),series:[{data:r.map((function(e){return null!==e.npsValue?(100*e.npsValue-0).toFixed(0):null})),type:"line",smooth:!0,symbol:"circle",symbolSize:2.5,itemStyle:{},markLine:{symbolSize:0,data:[{type:"average",name:"\u5e73\u5747\u7ebf"}],lineStyle:{color:"#BFBFBF"},label:{show:!1,formatter:"\u5747\u503c"},tooltip:{show:!1}},lineStyle:{color:"#0074B8"},name:"NPS\u5206\u503c"},{data:r.map((function(e){return e.questionnaireTotal})),type:"line",symbol:"circle",symbolSize:2,smooth:!0,xAxisIndex:1,yAxisIndex:1,areaStyle:{color:"#E7F1F7"},itemStyle:{color:"#1574B3"},lineStyle:{color:"#1574B3"},name:"\u7b54\u9898\u6570\u91cf"},{tooltip:{formatter:function(e){var t=e.seriesName,a=e.data.value,n="";return a<-50?n=b[0]:-50<=a&&a<0?n=b[1]:0<=a&&a<50?n=b[2]:a<=100&&(n=b[3]),['<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:'+n+';"></span><span style="font-weight: bold">'+t+"</span>","NPS\u503c\uff1a"+a].join("<br/>")}},name:"NPS",type:"gauge",min:-100,max:100,center:["130","52%"],splitNumber:5,radius:"50%",axisLine:{show:!0,lineStyle:{color:[[.525,"#bfbfbf"],[.55,"#D07B49"],[.75,"#CDB446"],[.85,"#15B374"],[1,"#119073"]],width:18}},splitLine:{show:!0,length:26,lineStyle:{color:"#e5e5e5"}},axisTick:{show:!0,length:6},axisLabel:{color:"#262626",fontSize:"12px"},detail:{offsetCenter:[0,"90%"],formatter:["{a|"+(null===n.npsValue?"--":n.npsValue)+"}","{b|NPS}"].join("\n"),rich:{a:{color:"#262626",fontSize:40,lineHeight:60,fontFamily:v.I8},b:{color:"#262626",fontSize:12,fontFamily:v.I8}}},title:{show:!1},pointer:{show:!(null===n.npsValue),length:"60%",width:6},itemStyle:{color:"auto"},data:[{value:n.npsValue}]}]}}(t,"NPS\u5206\u6790",C);S(e)}}),[t]),i.useEffect((function(){r&&V(a.some((function(e){return e.value===r.npsAnalyze}))?r.npsAnalyze:n)}),[r,n,a]),i.createElement(m.Z,{data:E,className:"yt_research_analyze_line_chart_wrap "+(o||""),renderTitle:i.createElement(h.Z,{data:E,onMoreClick:function(e){return function(e,t,a){var n=void 0;"image"===t?(n=e,(0,g._v)(e,"nps\u5206\u6790")):"data"===t&&((n=a.list.map((function(e){return[e.time,(t=e.npsValue,(100*t).toFixed(0)-0),e.questionnaireTotal];var t}))).unshift(["\u65e5\u671f","nps\u503c","\u7b54\u9898\u6570\u91cf"]),n=[n],(0,g.aT)(n,"nps\u5206\u6790"))}(p,e,t)},title:"NPS\u5206\u6790",titleOverlay:i.createElement("div",null,i.createElement("div",null,"\u51c0\u63a8\u8350\u503c(NPS)=(\u63a8\u8350\u8005\u6570/\u603b\u6837\u672c"),i.createElement("div",null,"\u6570)x100%-(\u8d2c\u635f\u8005\u6570/\u603b\u6837\u672c\u6570)x100%\uff0c"),i.createElement("div",null,"\u7136\u540e\u53d6\u767e\u5206\u53f7\u524d\u9762\u7684\u6574\u6570\u3002")," ",i.createElement("div",null,"\u73af\u6bd4 = \uff08\u5f53\u671f - \u4e0a\u671f\uff09 \xf7 \u4e0a\u671f"))},i.createElement("div",null,i.createElement(d.Z,{onChange:function(e){V(e),u({dateGroupType:e})},activeObj:C,options:a,flavor:(r||{}).npsAnalyze,onFlavorChange:function(e){return l({key:"npsAnalyze",value:e})}})))},i.createElement(f.Z,{theme:"yunting_multi_color",loadingOption:{text:"\u52a0\u8f7d\u4e2d",color:"#20a0ff"},option:{},opts:{devicePixelRatio:2},style:{width:"100%",height:"100%"},onChartReady:function(e){return c(e)}}),i.createElement("div",{className:"reasearch_popover"},i.createElement(y.Z,{placement:"top",overlayClassName:"alert-log-tips",overlay:i.createElement("div",{className:"overlay"},i.createElement("div",null,i.createElement("span",null,"\u5353\u8d8a\uff1a"),i.createElement("span",null,"NPS\u503c\u5927\u4e8e70\u3002\u5982\u4e9a\u9a6c\u900a\uff0c\u5b83\u62e5\u6709\u5927\u91cf\u5fe0\u8bda\u5ba2\u6237\u3002")),i.createElement("div",null,i.createElement("span",null,"\u4f18\u79c0\uff1a"),i.createElement("span",null,"NPS\u7684\u5f97\u5206\u503c\u572850\u4ee5\u4e0a\u88ab\u8ba4\u4e3a\u662f\u4e0d\u9519\u7684\u3002")),i.createElement("div",null,i.createElement("span",null,"\u826f\u597d\uff1a"),i.createElement("span",null,"NPS\u503c\u5927\u4e8e10\uff0c\u6b64\u65f6\u5df2\u7ecf\u5f00\u59cb\u8131\u79bb\u5e73\u5eb8\u516c\u53f8\u7684\u8303\u7574")),i.createElement("div",null,i.createElement("span",null,"\u7cdf\u7cd5\uff1a"),i.createElement("span",null,"\u5927\u90e8\u5206\u516c\u53f8\u7684NPS\u503c\u8fd8\u662f\u57285-10\u4e4b\u95f4\u5f98\u5f8a\u3002\u6240\u4ee5\u6211\u4eec\u5c06\u5904\u4e8e\u8fd9\u4e00\u533a\u95f4\u7684\u503c\u5b9a\u4e49\u4e3a\u7cdf\u7cd5\u3002")),i.createElement("div",null,i.createElement("span",null,"\u7cdf\u7cd5\u900f\u9876\uff1a"),i.createElement("span",null,"NPS\u503c\u5c0f\u4e8e5\u65f6\uff0c\u6211\u4eec\u53ea\u80fd\u7528\u8fd9\u6837\u7684\u8bcd\u6765\u5f62\u5bb9\u4e86\u3002")))},i.createElement("i",{className:"icon-cem_file1"}))))};var C=a(50361),V=a.n(C),P=[{title:"\u5404\u7701\u5bf9\u6bd4",value:"CHINA",subTitle:"\u7701\u4efd",prop:"province"},{title:"\u5404\u56fd\u5bf9\u6bd4",value:"WORLD",subTitle:"\u56fd\u5bb6",prop:"country"}],w=a(29383);function O(e,t,a){e&&t&&new Promise((function(t){var n=function(e,t){var a,n=null==(a=e=(e=e.filter((function(e){return t?e.questionnaireTotal:e.npsValue}))).sort((function(e,a){return t?a.questionnaireTotal-e.questionnaireTotal:a.npsValue-e.npsValue})))?void 0:a.findIndex((function(e){return"\u5176\u4ed6"===e.country}));if(-1!==n){var l=e[n];(e=V()(e)).splice(n,n+1),(e=e.slice(0,9).reverse()).unshift(l)}else e=(e=V()(e)).slice(0,10).reverse();var r=Math.max.apply(Math,e.map((function(e){return e[t?"questionnaireTotal":"npsValue"]})));return{title:{text:"\u5404\u56fdNPS\u503c\u5bf9\u6bd4\u548c\u7b54\u9898\u6570"},tooltip:{formatter:function(e){var a=e.marker,n=e.data;if(n){var l=n.name,r=n.value,i=n.other;return[a+'<span style="font-size: 16px; line-height: 30px">'+l+"</span>",(0===t?"NPS\u503c\uff1a":"\u7b54\u5377\u6570\u91cf\uff1a")+(0===t&&-101===r?"\u65e0":r),(0===t?"\u7b54\u5377\u6570\u91cf\uff1a":"NPS\u503c\uff1a")+(0===t?i:-101===i?"\u65e0":i)].join("<br/>")}}},visualMap:{min:0===t?-100:0,max:0===t?100:0===r?1:r,text:0===t?void 0:["\u9ad8","\u4f4e"],inRange:{color:0===t?["#bfbfbf","#D07B49","#CDB446","#15B374","#119073"]:["#119073","#119073"]},outOfRange:{color:["white"]},pieces:0===t?[{label:"> 70\uff08\u5353\u8d8a\uff09",min:70},{label:"50 - 70\uff08\u4f18\u79c0\uff09",min:50,max:70},{label:"10 - 50\uff08\u826f\u597d\uff09",min:10,max:50},{label:"5 - 10\uff08\u7cdf\u7cd5\uff09",min:5,max:10},{label:"< 5\uff08\u7cdf\u7cd5\u900f\u9876\uff09",max:5,min:-100}]:void 0,itemWidth:16,itemHeight:12,itemGap:6,type:"piecewise",top:50,left:40,orient:"horizontal",textStyle:{fontSize:12},hoverLink:!1,show:!1},xAxis:{type:"value",show:!1,boundaryGap:[0,.01]},yAxis:{type:"category",data:e.map((function(e){return e.country})),offset:30,axisLabel:{formatter:function(e){return e.length>9?e.substring(0,9)+"...":e}}},series:[{type:"bar",barMaxWidth:24,xAxisIndex:0,yAxisIndex:0,datasetIndex:0,barGap:"43%",encode:{x:1,y:0},data:e.map((function(e){return{name:e.country,value:0===t?null!==e.npsValue?(100*e.npsValue).toFixed(0)-0:null:e.questionnaireTotal,other:0===t?e.questionnaireTotal:null!==e.npsValue?(100*e.npsValue).toFixed(0)-0:null,label:{show:!0,position:0===t&&e.npsValue<0?"left":"right",fontSize:12,color:"#262626"}}})),itemStyle:{}}],grid:{left:66,right:36,top:72,bottom:36,containLabel:!0}}}(e,a);t(n)})).then((function(e){t.clear(),t.setOption(e)}))}a(98245);var A=[{title:"NPS\u5206\u503c\u5bf9\u6bd4",value:0},{title:"\u7b54\u5377\u6570\u91cf\u5bf9\u6bd4",value:1}];function _(e,t,a){e&&t&&new Promise((function(t){var n=function(e,t){var a=Math.max.apply(Math,e.map((function(e){return e[t?"questionnaireTotal":"npsValue"]})));return{title:{text:"\u5404\u7701NPS\u503c\u5bf9\u6bd4\u548c\u7b54\u9898\u6570"},tooltip:{formatter:function(e){var a=e.marker,n=e.data;if(n){var l=n.name,r=n.value,i=n.other;return[a+'<span style="font-size: 16px; line-height: 30px">'+l+"</span>",(0===t?"NPS\u503c\uff1a":"\u7b54\u5377\u6570\u91cf\uff1a")+(0===t&&-101===r?"\u65e0":r),(0===t?"\u7b54\u5377\u6570\u91cf\uff1a":"NPS\u503c\uff1a")+(0===t?i:-101===i?"\u65e0":i)].join("<br/>")}}},visualMap:{bottom:20,min:0===t?-100:0,max:0===t?100:0===a?1:a,text:0===t?void 0:["\u9ad8","\u4f4e"],inRange:{color:0===t?["#bfbfbf","#D07B49","#CDB446","#15B374","#119073"]:["white","#1474B3"]},outOfRange:{color:["white"]},pieces:0===t?[{label:"> 70\uff08\u5353\u8d8a\uff09",min:70},{label:"50 - 70\uff08\u4f18\u79c0\uff09",min:50,max:70},{label:"10 - 50\uff08\u826f\u597d\uff09",min:10,max:50},{label:"5 - 10\uff08\u7cdf\u7cd5\uff09",min:5,max:10},{label:"< 5\uff08\u7cdf\u7cd5\u900f\u9876\uff09",max:5,min:-100}]:void 0,itemWidth:16,itemHeight:12,itemGap:6,type:"piecewise",top:350,left:40},series:[{type:"map",map:"china",left:70,label:{normal:{show:!1},emphasis:{show:!1}},itemStyle:{emphasis:{areaColor:"#CDB446"}},data:e.map((function(e){return{name:e.province.replace("\u7701",""),value:0===t?null!==e.npsValue?(100*e.npsValue).toFixed(0)-0:-101:e.questionnaireTotal,other:0===t?e.questionnaireTotal:null!==e.npsValue?(100*e.npsValue).toFixed(0)-0:-101}}))}]}}(e,a);t(n)})).then((function(e){t.clear(),t.setOption(e)}))}function F(e,t){var a,n=null==(a=e)?void 0:a.findIndex((function(e){return"\u5176\u4ed6"===e.country}));if(-1!==n){var l=e[n];(e=V()(e)).splice(n,n+1),e.push(l)}return e}const I=function(e){var t,a=e.data,n=e.flavorObj,l=e.loading,r=e.setDefaultValue,o=e.onFilterChange,u=e.area,s=i.useState(void 0),p=s[0],c=s[1],y=i.useState((n||{}).mapAnalyze||0),v=y[0],x=y[1];return i.useEffect((function(){(0,m.P)(a)&&("WORLD"===u?O(a,p,v):_(a,p,v))}),[a,p,v]),i.useEffect((function(){x((n||{}).mapAnalyze||0)}),[n]),i.createElement(m.Z,{className:"research_analyze_map",renderTitle:i.createElement(h.Z,{data:a,onMoreClick:function(e){return function(e,t,a,n,l){var r=void 0;"image"===t?(r=e,(0,g._v)(e,n)):"data"===t&&((r=a.map((function(e){return[e.province||e.country,null===e.npsValue?"\u65e0":(t=e.npsValue,(100*t).toFixed(0)-0),e.questionnaireTotal];var t}))).unshift([P.find((function(e){return e.value===l})).subTitle,"NPS\u5206\u503c","\u7b54\u9898\u6570\u91cf"]),r=[r],(0,g.aT)(r,"WORLD"===l?"\u5404\u56fdNPS\u503c\u5bf9\u6bd4\u548c\u7b54\u9898\u6570":"\u5404\u7701NPS\u503c\u5bf9\u6bd4\u548c\u7b54\u9898\u6570"))}(p,e,a,0===e?"NPS\u5206\u503c\u5bf9\u6bd4":"\u7b54\u5377\u6570\u91cf\u5bf9\u6bd4",u)},title:"WORLD"===u?"\u5404\u56fdNPS\u503c\u5bf9\u6bd4\u548c\u7b54\u9898\u6570":"\u5404\u7701NPS\u503c\u5bf9\u6bd4\u548c\u7b54\u9898\u6570",titleOverlay:(t="WORLD"===u,t?i.createElement("div",null,"\u6536\u96c6\u5230NPS\u7684\u5206\u503c\u9898\u5c31\u7b97\u56de\u6536\u4e861\u4e2a\u7b54\u9898"):i.createElement("div",null,i.createElement("div",null,"\u6536\u96c6\u5230NPS\u7684\u5206\u503c\u9898\u5c31\u7b97\u56de\u6536\u4e861\u4e2a\u7b54\u9898"),i.createElement("div",null,"\u5ba2\u6237\u7684\u57ce\u5e02\u662f\u4f9d\u636e\u7b54\u9898\u8bbf\u95ee\u95ee\u5377\u65f6\u83b7\u5f97\u7684IP"),i.createElement("div",null,"\u5730\u5740\u89e3\u6790\u5f97\u51fa")))},i.createElement(d.Z,{onChange:function(e){o({mapArea:e})},activeObj:u,options:P,flavor:(n||{}).mapArea||null,onFlavorChange:function(e){return r({key:"mapArea",value:e})}}),i.createElement(d.Z,{onChange:function(e){x(e)},activeObj:v,options:A,flavor:(n||{}).mapAnalyze,onFlavorChange:function(e){return r({key:"mapAnalyze",value:e})}})),data:a,defTitle:"\u5404\u7701NPS\u503c\u5bf9\u6bd4",loading:l},i.createElement("div",{className:"chart"},i.createElement(f.Z,{theme:"yunting_pos_neu_neg",option:{},style:{width:"100%",height:"100%"},onChartReady:function(e){return c(e)}})),i.createElement("div",{className:"table"},i.createElement(w.Z,{columns:[{label:P.find((function(e){return e.value===u})).subTitle,prop:P.find((function(e){return e.value===u})).prop},{label:"NPS\u5206\u503c",prop:"npsValue",render:function(e){return i.createElement("div",null,null===e.npsValue?"\u65e0":(100*e.npsValue).toFixed(0)-0)}},{label:"\u7b54\u9898\u6570\u91cf",prop:"questionnaireTotal"}],data:"WORLD"===u?F(a):a,currentPage:1,total:34})))};a(54898);const B=function(e){var t=e.custTimeType,a=e.custDataType,n=e.fetchingNpsCustomerData,l=e.npsCustomerData,r=e.graphicData,o=e.onFilterChange,u=e.fetchingNpsConcerns,s=e.doubleBarChartData,f=e.graphPieChartData,m=(e.fBarCompareType,e.wordChartData,e.npsAnalyzeData),d=e.fetchingMapData,h=e.mapData,y=e.mapArea,v=e.dateOptions,g=e.defaultDateType,x=e.flavorObj,N=e.setDefaultValue,b=e.fetchNpsData;e.relativeData,e.relativeRefreshTime,e.relativeDataLoading,e.handleOnRefresh;return i.createElement("div",{className:"yt_research_nps_analysis_wrapper"},i.createElement(T,{data:m,dateOptions:v,defaultDateType:g,setDefaultValue:N,flavorObj:x,fetchNpsData:b}),i.createElement(p.Z,{loading:n,title:"NPS\u5ba2\u6237\u5206\u7c7b",titleOverlay:i.createElement("div",null,i.createElement("div",null,"\u63a8\u8350\u8005(Promoter)\uff1aNPS\u5206\u503c\u4e3a9\u5206~10\u5206\u7684\u5ba2\u6237\uff0c\u4ed6\u4eec\u5177\u6709\u72c2\u70ed\u5fe0\u8bda\u5ea6\uff0c\u94c1\u6746\u7c89\u4e1d\uff0c\u53cd\u590d\u5149\u987e\uff0c\u5411\u670b\u53cb\u63a8\u8350"),i.createElement("div",null,"\u88ab\u52a8\u8005(Passive)\uff1aNPS\u5206\u503c\u4e3a7\u5206~8\u5206\u7684\u5ba2\u6237\uff0c\u4ed6\u4eec\u603b\u4f53\u6ee1\u610f\u4f46\u4e0d\u5fe0\u8bda\uff0c\u5bb9\u6613\u8f6c\u5411\u7ade\u4e89\u5bf9\u624b"),i.createElement("div",null,"\u8d2c\u635f\u8005(Detractors)\uff1aNPS\u5206\u503c\u4e3a0\u5206~6\u5206\u7684\u5ba2\u6237\uff0c\u4ed6\u4eec\u4f7f\u7528\u4e0d\u6ee1\u610f\u4e0d\u5fe0\u8bda\uff0c\u4e0d\u65ad\u62b1\u6028\u6216\u6295\u8bc9")),type:"NPS",dateOptions:v,customerData:l,graphicData:r,dataType:a,timeType:t,defaultDataType:x&&x.fCustDataType,defaultDateType:g,setDefaultValue:N,flavorObj:x&&x,onFilterChange:o}),i.createElement(I,{data:h,setDefaultValue:N,flavorObj:x,area:y,loading:d,onFilterChange:o}),i.createElement(c.Z,{title:"\u63a8\u8350\u8005\u548c\u8d2c\u635f\u8005\u5173\u6ce8\u70b9\u5bf9\u6bd4",positiveTitle:"\u63a8\u8350\u8005\u63d0\u53ca\u6570\u91cf\u6700\u591a\u7684\u8bcd",negativeTitle:"\u8d2c\u635f\u8005\u63d0\u53ca\u6700\u591a\u7684\u8bcd",defaultDataType:x&&x.fBarCompareType,setDefaultValue:N,doubleBarChartData:s,graphPieChartData:f,loading:u}))};var R=["loading"],z=o.Z.research.analyze.nps,L=function(e){function t(t){var a;return(a=e.call(this,t)||this)._handleOnWsMessage=function(e){var t=e.data;if(t.type&&"ws"===t.type){var n=t.payload,l=n.type,r=n.result;"QUESTIONNAIRE_TEXT_RESULT"===l&&"NPS_REASON"===r.textType&&a.props.save({relativeData:r.data.length?r.data:"empty",relativeRefreshTime:r.createdAt,relativeDataLoading:!1})}},a._handleOnFilterChange=function(e){e.dateGroupType?a.props.fetchNpsCustomerData({dateGroupType:e.dateGroupType}):e.mapArea&&a.props.fetchMapData({mapArea:e.mapArea})},a._handleOnRefresh=function(){a.props.createWordRelativeData({})},a.state={},a.event={onFilterChange:a._handleOnFilterChange,handleOnRefresh:a._handleOnRefresh},a}(0,r.Z)(t,e);var a=t.prototype;return a.active=function(e){var t=e.filterArgs,a=(e.title,e.questionnaireId),n=e.questionnaireBoardId,l=t[0],r=(t[1],t[2]);this.props.fetchDatas({filterModel:l.filterValue,dateFilter:l.dateFilter,dateOptions:r.dateOptions,defaultDateType:r.defaultDateType,projectId:s.t.get(s.V.curProject).id,questionnaireId:a,questionnaireBoardId:n,pageType:"research_nps"})},a.componentDidMount=function(){window.addEventListener("message",this._handleOnWsMessage)},a.componentWillUnmount=function(){window.removeEventListener("message",this._handleOnWsMessage),this.props.clear()},a.render=function(){return i.createElement(B,(0,l.Z)({},this.props,this.state,this.event))},t}(i.PureComponent);const Z=(0,u.connect)((function(e){var t=e.loading,a=(0,n.Z)(e,R);return(0,l.Z)({},a[z],{fetchNpsData:t.effects[z+"/fetchNpsData"]||!1,fetchingNpsCustomerData:t.effects[z+"/fetchNpsCustomerData"]||!1,fetchingNpsConcerns:t.effects[z+"/fetchNpsConcerns"]||!1,fetchingMapData:t.effects[z+"/fetchMapData"]||!1})}),(function(e){return{save:function(t){return e({type:z+"/save",payload:t})},fetchDatas:function(t){return e({type:z+"/fetchDatas",payload:t})},fetchNpsCustomerData:function(t){return e({type:z+"/fetchNpsCustomerData",payload:t})},fetchNpsData:function(t){return e({type:z+"/fetchNpsData",payload:t})},fetchMapData:function(t){return e({type:z+"/fetchMapData",payload:t})},setDefaultValue:function(t){return e({type:z+"/setDefaultValue",payload:t})},createWordRelativeData:function(t){return e({type:z+"/createWordRelativeData",payload:t})},clear:function(t){return e({type:z+"/clear",payload:t})}}}),null,{withRef:!0})(L)}}]);