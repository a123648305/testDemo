(self.webpackChunkyunting=self.webpackChunkyunting||[]).push([[9731],{19731:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});n(43378);var f=n(62443),t=n(85354),i=n.n(t),A=n(8201),p=n(39432),a=n(94644),u=n(70715),E=n(87300),t=n(70596),d=n.n(t),S=n(81408),C=n(61780);function v(e,t){var n=0;return 0!==t&&(n=e/t*100,parseInt(""+e/t*100)!==e/t*100&&(n=n.toFixed(2))),n+"%"}function h(e){var t=e.map(function(e){return[e.name,e.count]});return{length:e.length,datasets:{dimensions:["日期","提及数量"],source:t}}}function c(e){var t=e.dataTmp,n=e.title,o=e.timeType,i=(e.width,e.onMsgClick,e.showLabel),c=e.pageType,a=void 0===(s=e.graphicText)?{text1:"提及了场景标签去重后的消息",text2:"场景标签提及率",text3:"消息总量"}:s,l=t.data,r=t.count,e=t.messageCount,s=t.filterCount,t=h(l).datasets.source,l=void 0===s?r:s;return{title:{text:n},tooltip:{trigger:"axis",showDelay:20,hideDelay:10,enterable:!0,confine:!0,padding:0,backgroundColor:"#ffffff",borderColor:"#e5e5e5",borderWidth:"1",extraCssText:"border-radius: 2px;\n      box-shadow: 0px 9px 28px 8px rgba(0,0,0,0.05), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 3px 6px -4px rgba(0,0,0,0.12)",axisPointer:{type:"none",label:{show:!1}},formatter:function(e,n,i){if(e.length){var e=e[0],a=e.marker,l=(e.seriesName,e.name),r=e.value;return setTimeout(function(){var e,t;i(n,(0,E.r)('<span style="font-size: 12px; color: #8c8c8c; font-weight: 400">'+(0,p.Sn)(o,l)+"</span>",["<div style='display: flex;justify-content: space-between;align-items: center;color: #8c8c8c;'><div><span style='vertical-align: bottom'>"+a+"</span>"+(t="标签数量","SCENE_INDEX"===(e=c)?t="消息数量":"SCENE_MY_ADVICE"===e&&(t="用户建议"),t)+"</div><div style='color: #262626;margin-left: 10px;'>"+(0,p.hE)(r)+"</div></div>"]))},0)}}},grid:{top:100,left:36,right:48,bottom:16,containLabel:!0},xAxis:{type:"category",boundaryGap:!1,data:t.map(function(e){return(0,p.Sn)(o,e[0])}),nameTextStyle:{color:"#626262"}},yAxis:{type:"value",axisLabel:{color:"#626262",formatter:function(e){return(0,p.hE)(e)}},interval:(0,S.lQ)(t).intVal,max:(0,S.lQ)(t).maxVal,axisLine:{show:!1,lineStyle:{type:"dashed",color:"#e5e5e5"}},splitLine:{show:!0,lineStyle:{color:["#e5e5e5"],width:1,type:"dashed"}}},graphic:{type:"group",left:40,top:52,silent:!0,children:[{type:"text",style:{text:""+(0,p.hE)(r),fill:"#262620",font:"500 24px "+u.I8}},{type:"text",left:(0,p.jD)((0,p.hE)(r),24)+(void 0!==s?24:0),top:5,style:{text:""+(void 0!==s?a.text1:""),fill:"#8C8C8C",font:"400 12px "+u.I8}},{type:"text",left:(0,p.jD)((0,p.hE)(r),24)+(void 0!==s?(0,p.jD)(a.text1,12)+24+12:0),top:3,style:{text:""+(void 0!==s?(0,p.hE)(s):""),fill:"#262620",font:"600 14px "+u.I8}},{type:"text",left:(0,p.jD)((0,p.hE)(r),24)+(void 0!==s?(0,p.jD)(a.text1,12)+(0,p.jD)((0,p.hE)(s),14)+24+12:0)+24,top:5,style:{text:a.text2,fill:"#8C8C8C",font:"400 12px "+u.I8}},{type:"text",left:(0,p.jD)((0,p.hE)(r),24)+(0,p.jD)(a.text2,12)+24+12+(void 0!==s?(0,p.jD)(a.text1,12)+(0,p.jD)((0,p.hE)(s),14)+24+12:0),top:3,style:{text:v(l,e),fill:"#262620",font:"600 14px "+u.I8}},{type:"text",left:(0,p.jD)((0,p.hE)(r),24)+(0,p.jD)(v(l,e),14)+24+12+24+(0,p.jD)(a.text2,12)+(void 0!==s?(0,p.jD)(a.text1,12)+(0,p.jD)((0,p.hE)(s),14)+24+12:0),top:5,style:{text:a.text3,fill:"#8C8C8C",font:"400 12px "+u.I8}},{type:"text",left:(0,p.jD)((0,p.hE)(r),24)+(0,p.jD)(v(l,e),14)+24+12+24+12+(0,p.jD)("场景标签提及率消息总数",12)+(void 0!==s?(0,p.jD)(a.text1,12)+(0,p.jD)((0,p.hE)(s),14)+24+12+12:0),top:3,style:{text:""+(0,p.hE)(e),fill:"#262620",font:"600 14px "+u.I8}}]},series:[{type:"line",name:"提及数量",showSymbol:i,areaStyle:{color:new(d().graphic.LinearGradient)(0,0,0,1,[{offset:0,color:"rgba(91,143,249,0.30)"},{offset:1,color:"rgba(91,143,249,0.00)"}])},emphasis:{scale:!0},data:t.map(function(e,t){return{name:e[0],value:e[1],symbol:"image://"+C.N,symbolSize:16,label:{normal:{show:i,position:"top",color:"#8C8C8C"}}}})}]}}function m(e,t,n,i){n=n.data,"image"===t?(0,a._v)(e,i):"data"===t&&(n=[(n=h(n).datasets).dimensions].concat(n.source),(0,a.aT)([n],i))}var y=n(98191),T=n(60496),x=n(50976),t=n(67294),N=n.n(t);const l=function(t){function e(e){var o=t.call(this,e)||this;return o.internalId=void 0,o.chartRef=void 0,o.chartLeaveTimeout=void 0,o.renderChart=function(){var e=o.props,t=e.data,n=e.title,i=e.timeType,a=e.onMsgClick,l=e.pageType,r=e.graphicText,e=o.state.showLabel;(0,A.P)(t)&&o.chartRef&&(r=c({dataTmp:t,title:n,timeType:i,width:o.chartRef.getWidth(),onMsgClick:a,showLabel:e,pageType:l,graphicText:r}),o.chartRef.clear(),o.chartRef.setOption(r))},o.getChartRef=function(e){return o.chartRef=e},o.state={showLabel:!1},o}i()(e,t);var n=e.prototype;return n.componentDidMount=function(){var i=this;this.internalId=setInterval(function(){var e,t,n;i.chartRef&&(i.internalId&&clearInterval(i.internalId),i.renderChart(),t=(e=i.chartRef._dom.children)[0],n=e[1],t.addEventListener("mouseleave",function(e){i.chartLeaveTimeout=setTimeout(function(){i.chartLeaveTimeout&&(n.style.display="none")},2e3)}),n&&n.addEventListener("mouseenter",function(e){i.chartLeaveTimeout=void 0}))},200)},n.componentDidUpdate=function(e,t){var n=e.data,i=this.props.data,e=t.showLabel,t=this.state.showLabel;(0,A.P)(i)&&JSON.stringify(n)!==JSON.stringify(i)&&this.renderChart(),e!==t&&this.renderChart(),!(0,A.P)(i)&&this.chartRef&&(this.chartRef=void 0)},n.render=function(){var e=this,t=this.props,n=t.className,i=t.title,a=t.data,l=t.loading,r=t.timeOptions,o=t.timeType,c=t.fTimeType,s=t.titleOverlay,u=t.onFilterChange,E=t.onFlavorChange,d=this.state.showLabel;return N().createElement(A.Z,{data:a,loading:l,className:"yt_explore_scene_line_chart_wrap "+n,renderTitle:N().createElement(y.Z,{title:i,data:a,titleOverlay:s},N().createElement(T.Z,{options:r,activeObj:o,flavor:c,rightHook:!0,onChange:function(e){return u({timeType:e})},onFlavorChange:function(e){return E({fTimeType:e})}}),N().createElement(f.default,{placement:"top",content:"显示图表标签",mouseEnterDelay:.6},N().createElement("i",{className:"icon-tubiaobiaoqian "+(d?"active":""),onClick:function(){e.setState({showLabel:!d})}})),N().createElement(f.default,{placement:"top",content:"导出数据",mouseEnterDelay:.6},N().createElement("i",{className:"icon-daochu",onClick:function(){return m(e.chartRef,"data",a,i)}})),N().createElement(f.default,{placement:"top",content:"导出图片",mouseEnterDelay:.6},N().createElement("i",{className:"icon-xiazaitupian",onClick:function(){return m(e.chartRef,"image",a,i)}})))},N().createElement(x.Z,{theme:"yt_compare_primary",className:"yt_echarts_style",option:{},style:{width:"100%",height:"100%"},onChartReady:this.getChartRef}),(0,A.P)(a)&&1e4<a.messageCount&&this.chartRef&&N().createElement("div",{style:{position:"absolute",top:54,left:(0,p.jD)((0,p.hE)(a.count),24)+102+(0,p.jD)(v(void 0===a.filterCount?a.count:a.filterCount,a.messageCount),14)+24+12+24+(0,p.jD)("场景标签提及率",12)+(void 0!==a.filterCount?(0,p.jD)("提及了场景标签去重后的消息",12)+(0,p.jD)((0,p.hE)(a.filterCount),14)+24+12:0),transition:"all 0.3s",zIndex:1}},N().createElement(f.default,{placement:"top",mouseEnterDelay:.3,content:N().createElement("div",{style:{fontSize:"16px"}},(0,p.uf)(a.messageCount))},N().createElement("div",{style:{opacity:"0",width:"58px"}},"hover"))),(0,A.P)(a)&&1e4<a.count&&this.chartRef&&N().createElement("div",{style:{position:"absolute",top:54,left:(0,p.jD)((0,p.hE)(a.count),24)-20,transition:"all 0.3s",zIndex:1}},N().createElement(f.default,{placement:"top",mouseEnterDelay:.3,content:N().createElement("div",{style:{fontSize:"16px"}},(0,p.uf)(a.count))},N().createElement("div",{style:{opacity:"0",width:"58px"}},"hover"))),(0,A.P)(a)&&1e4<a.filterCount&&this.chartRef&&N().createElement("div",{style:{position:"absolute",top:54,left:(0,p.jD)((0,p.hE)(a.count),24)+126+(0,p.jD)(v(void 0===a.filterCount?a.count:a.filterCount,a.messageCount),14)+24+12+24,transition:"all 0.3s",zIndex:1}},N().createElement(f.default,{placement:"top",mouseEnterDelay:.3,content:N().createElement("div",{style:{fontSize:"16px"}},(0,p.uf)(a.filterCount))},N().createElement("div",{style:{opacity:"0",width:"58px"}},"hover"))))},e}(N().Component)},61780:(e,t,n)=>{"use strict";n.d(t,{N:()=>i});var i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAJKADAAQAAAABAAAAJAAAAAAqDuP8AAAEp0lEQVRYCaWWTWtkVRCGT7f5GiUmpjERCdjLoFkk8wt6IYiguNAGSYg7F/MT/AWujFtRV2YjqAtlFqO4mE3WyZAZiRAxAx1IAsksEslXf1hP931vV5/pe7ujBypVp+qtt9577s29XQi3W4XbwVN0K40GBMMMGISJ64OG59ZjMq8/q+bzPva9fqiPszBpPoswzvu94tiLVAJiT125GKt9KKZRN9AgZbTHgy+ur6+PnZ+fV+v1+kaz2XzSarVOMWJy1MAIb95z2DZdyqeJOADgDQEvmI2YjZqNnZ2dVW3wXyYgd4EBS0/SCwdccPoZmaJiUI+YSqUycX19/UWuij5Feuj9L6K8IC+GKxy/vLxc7zNvqBS9cJjBlXVSVup/b2NhxZOTkw9mZma+b3ckf0xJePi4GR4+aYbaSedZnS8VQuWtYqgsFkOh0HsnTk9PPy6VSj9bezMxmmQJa2hxT1nqltd9Lq6uro6vrKz8YANe6UBDePZPK3z5Sz389qgZnp2H0LARGPHW363w50ErLL5RDHfGRBfCxMTE3b29vW93dnYa4jGPoC7IbZTEYwhq29HR0Uezs7Pf2b69OJnPf6qHP2qdU1E+9m/OF8JnH470nNTx8fEnc3NzPxpWp4T3p9TSSXg+iWoLm5qaet8XuU2DxIAHA9avhEszNcdDChS1BJCnVhwdHV0WAM8zM+yKsQlXm9c4NEe+TesF+TkCFW295gt6gH0uK46xCRczxf9cayxIQLyu5Lmm/5kQr5+VUnpBAFgeWGg0GkeddOcv/9rDrhibcPXwJ1wpqRdETYXUX1xcPPICeM8Mu2JswpVyJzzat7di70l6YK1We+AF8NLjX3rQAgPWL8fVj6Cd6+3w3UlcrVYf3NzcPFWJN/C9d0dyRSEGjH9bwwGXeLI8qqQWcTJ9b/jCj25tbb23tLT0jSe57adje3v70+Xl5fvGcZMYb+y6mX9J2rb7EOtnBh/BF81eNpsxmzObPzw8/GqoL2kfEL1wJFxwws0MZuni08NRwOlQ5It8x2zSjO/Xq2avT09Plw8ODr7uMy83RQ+9cCRccMLNDH39mS0daUCSU+I28fvlJbMps5IZL0eusLy5uXnv6urqaa4KK4IBS0/SCwdccMKt30g9P9pSVQZQrOcIoG4jJ5dauVwe39jYeGdhYeHtycnJRfskzFo92IN7bL8SH+/u7v6+trb26/7+/pWleU5i4/nB9PykH1iJsFp7sZcgnZjusQRJaM+VJf0iZpCG6uFFlGIvBmz60wFSFkJY3ivuVLo17fEi05VKiLwXpVg9Eu/5Wlx1vASkkeWFqYanzilSF0Z1aphEyCuPF9bC7ooFAYIcz8LT7JdyurV5giQAQYrpl8FLnC4JIumvUgCJEQFeQvzp+F5hJcB7auyFwWu1YwlSUt4DIYgHkpMgenydPf0aHHtqMrA9S0RK9tuTyzN61acL0cA8r5l49aVEvihy5bT3oqhpL5z3EkJOsYbKC9+z1zAV5eO83yuOvXo1IPbUlYux2vc9IRU1UHt5n/ex6ng/2MdZmDSfRZgCLBiEietZAsSZW4/J1JTlb4sXT64IgfD/AvtkxvH04K2oAAAAAElFTkSuQmCC"},81408:(e,t,n)=>{"use strict";n.d(t,{lQ:()=>i,v1:()=>a,dR:()=>l,$x:()=>u,$5:()=>r,gt:()=>o,R5:()=>c});var t=n(67154),s=n.n(t);n(87219),n(39432);var i=function(e){var t=0;e.forEach(function(e){e=e.slice(1).sort(function(e,t){return t-e}),e=parseFloat(e[0]);t<e&&(t=e)});for(var t=Math.ceil(t),n=0;n<4;n++)t%4!=0&&t++;return{intVal:(t=0===t?4:t)/4,maxVal:t}},a={SCENE_SEX:"user.gender",SCENE_AGE:"user.age",SCENE_USE_SCENE:"space",SCENE_USE:"usage",SCENE_BUY_DECISION:"buy_decision",SCENE_RELATION:"relation",SCENE_MY_ADVICE:"suggestion"},l=function(e){var t=e.oLineData,l=e.oBarData,n=e.alzOptions,i=e.alzName,a=t&&t.find(function(e){return e.name===i}),e=void 0,r=n.find(function(e){return e.name===i}).idKey+":"+i,t=l.nodes.find(function(e){return e.key===r}),o=t?t.total:0,e=l.relations.reduce(function(e,t){var n,i,a=void 0;return t.source===r?a="target":t.target===r&&(a="source"),a&&(n=l.nodes.find(function(e){return e.key===t[a]}),i=0===o?0:t.total/o,0,n&&e.push(s()({},n,{relTotal:t.total,aspectCount:o,messageCount:0,trustRate:i,upRate:0}))),e},[]);return{analyzeLineData:a=void 0===a?"empty":a,analyzeBarData:e=void 0===(e=n.find(function(e){return"relation"===e.idKey})?e.filter(function(e){return"relation"!==e.scene&&"user.age"!==e.scene&&"user.gender"!==e.scene}):e)?"empty":e}},u={"性别分布":"SCENE_SEX","性别":"SCENE_SEX","使用人的性别":"SCENE_SEX","年龄段分布":"SCENE_AGE","年龄段":"SCENE_AGE","使用人的年龄段":"SCENE_AGE","关系":"SCENE_RELATION","角色与关系":"SCENE_RELATION","使用场合":"SCENE_USE_SCENE","用途":"SCENE_USE","购买决策":"SCENE_BUY_DECISION","代言人":"SCENE_ENDORSER"},r={SCENE_USE_SCENE:"使用场合",SCENE_USE:"用途",SCENE_BUY_DECISION:"购买决策",relation:"关系","user.gender":"性别","user.age":"年龄段"},o=function(e,t,n,i,a){var l,r=e&&e.find(function(e){return"SCENE_ASPECT"===e.id}),o=e&&e.find(function(e){return"DEFAULT"===e.id});return t.includes("性别")||t.includes("年龄段")||t.includes("关系")||t.includes("使用场合")||t.includes("用途")||t.includes("购买决策")||t.includes("代言人")?(l=[].concat(e.filter(function(e){return"SCENE_ASPECT"!==e.id&&"DEFAULT"!==e.id}).map(function(e){return s()({},e)}),[{id:"SCENE_ASPECT",isSelectAll:r&&r.isSelectAll?r.isSelectAll:null,values:r?[].concat(r.values.filter(function(e){return e.id!==u[t]}).map(function(e){return s()({},e)}),[{id:u[t],label:t,values:[n]}]):[{id:u[t],label:t,values:[n]}]},{id:"DEFAULT",isSelectAll:o&&o.isSelectAll?o.isSelectAll:null,values:o?[].concat(o.values.filter(function(e){return"MESSAGE_TYPE"!==e.id}).map(function(e){return s()({},e)}),[{id:"MESSAGE_TYPE",label:"消息类型",values:i?["电商追评","电商评论"]:["COMMENT_APPEND","MESSAGE_COMMENT"]}]):[{id:"MESSAGE_TYPE",label:"消息类型",values:i?["电商追评","电商评论"]:["COMMENT_APPEND","MESSAGE_COMMENT"]}]}]),a&&l.find(function(e){return"SCENE_ASPECT"===e.id}).values.push(a),l):t?e:l=[].concat(e.filter(function(e){return"DEFAULT"!==e.id}).map(function(e){return s()({},e)}),[{id:"DEFAULT",isSelectAll:o&&o.isSelectAll?o.isSelectAll:null,values:o?[].concat(o.values.filter(function(e){return"MESSAGE_TYPE"!==e.id}).map(function(e){return s()({},e)}),[{id:"MESSAGE_TYPE",label:"消息类型",values:i?["电商追评","电商评论"]:["COMMENT_APPEND","MESSAGE_COMMENT"]}]):[{id:"MESSAGE_TYPE",label:"消息类型",values:i?["电商追评","电商评论"]:["COMMENT_APPEND","MESSAGE_COMMENT"]}]}])},c=function(e,t,n,i,a,l){var r=e&&e.find(function(e){return"SCENE_ASPECT"===e.id}),o=e&&e.find(function(e){return"DEFAULT"===e.id}),c=e&&e.find(function(e){return"TOPIC"===e.id});return t.includes("性别")||t.includes("年龄段")||t.includes("关系")||t.includes("使用场合")||t.includes("用途")||t.includes("购买决策")||t.includes("代言人")?[].concat(e.filter(function(e){return"SCENE_ASPECT"!==e.id&&"DEFAULT"!==e.id&&"TOPIC"!==e.id}).map(function(e){return s()({},e)}),[{id:"SCENE_ASPECT",isSelectAll:r&&r.isSelectAll?r.isSelectAll:null,values:r?[].concat(r.values.filter(function(e){return e.id!==u[t]}).map(function(e){return s()({},e)}),[{id:u[t],label:t,values:[n]}]):[{id:u[t],label:t,values:[n]}]},{id:"DEFAULT",isSelectAll:o&&o.isSelectAll?o.isSelectAll:null,values:o?[].concat(o.values.filter(function(e){return"MESSAGE_TYPE"!==e.id}).map(function(e){return s()({},e)}),[{id:"MESSAGE_TYPE",label:"消息类型",values:l?["电商追评","电商评论"]:["COMMENT_APPEND","MESSAGE_COMMENT"]}]):[{id:"MESSAGE_TYPE",label:"消息类型",values:l?["电商追评","电商评论"]:["COMMENT_APPEND","MESSAGE_COMMENT"]}]},{id:"TOPIC",isSelectAll:c&&c.isSelectAll?c.isSelectAll:null,values:c?[].concat(c.values.filter(function(e){return e.id!==a.id}).map(function(e){return s()({},e)}),[{id:a.id,label:a.label,values:l?[a.name]:[i]}]):[{id:a.id,label:a.label,values:l?[a.name]:[i]}]}]):t?e:[].concat(e.filter(function(e){return"DEFAULT"!==e.id}).map(function(e){return s()({},e)}),[{id:"DEFAULT",isSelectAll:o&&o.isSelectAll?o.isSelectAll:null,values:o?[].concat(o.values.filter(function(e){return"MESSAGE_TYPE"!==e.id}).map(function(e){return s()({},e)}),[{id:"MESSAGE_TYPE",label:"消息类型",values:l?["电商追评","电商评论"]:["COMMENT_APPEND","MESSAGE_COMMENT"]}]):[{id:"MESSAGE_TYPE",label:"消息类型",values:l?["电商追评","电商评论"]:["COMMENT_APPEND","MESSAGE_COMMENT"]}]}])}}}]);