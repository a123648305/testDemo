(self.webpackChunkyunting=self.webpackChunkyunting||[]).push([[3966],{3966:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>k});var t=n(37316),a=n.n(t),t=n(67154),o=n.n(t),t=n(85354),l=n.n(t),t=n(67294),h=n.n(t),p=n(55815),r=n(50976),d=n(30133),c={unCollectedCount:{color:"#D96969",title:"待采集"},collectingCount:{color:"#1574B3",title:"采集中"},collectedCount:{color:"#15B374",title:"已采集"}};const f=function(e){var t=e.data,n=e.loading,e=h().useState(void 0),a=e[0],o=e[1];return h().useEffect(function(){t&&a&&new Promise(function(e){var n;e({title:{text:"各数据平台采集进度"},tooltip:{formatter:function(e){var t=e.data.fullData,n=t.unCollectedCount+t.collectedCount+t.collectingCount,e=["collectedCount","collectingCount","unCollectedCount"].map(function(e){return'<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:'+c[e].color+';"></span> '+c[e].title+"："+t[e]+'<span style="color: #8c8c8c">（'+(t[e]/n*100).toFixed(0)+"%）</span>"});return e.splice(0,0,t.dataPlatform),e.join("<br/>")}},grid:{left:"5%",right:"5%",top:50,bottom:"10%",containLabel:!0},xAxis:{type:"category",axisTick:{show:!0,alignWidthLabel:!0},data:(n=t.dataPlatformList).map(function(e){return e.dataPlatform})},yAxis:{show:!1},series:[].concat(["unCollectedCount","collectingCount","collectedCount"].map(function(t){return{type:"bar",barMaxWidth:30,stack:"store",itemStyle:{borderWidth:1,borderColor:"#fff"},data:n.map(function(e){return{value:e[t],fullData:e,itemStyle:{color:c[t].color}}})}}))})}).then(function(e){a.clear(),a.setOption(e)})},[t,a]),h().createElement("div",{className:"yt-cm-chart"},h().createElement("div",{className:"chart"},void 0===t?h().createElement(d.Z,null):null===t?h().createElement("div",{className:"empty-block"},"暂无数据"):h().createElement(r.Z,{theme:"yunting_neg_neu_pos",showLoading:n,loadingOption:{text:"",color:"#20a0ff"},option:{},style:{width:"100%",height:"100%"},onChartReady:function(e){return o(e)}})))};var i=n(43036),u=n(92360);const C=function(e){var t=e.data;e.loading;return h().createElement("div",{className:"yt-cm-summary"},h().createElement("div",{className:"summary"},void 0===t?h().createElement(d.Z,null):null===t?h().createElement("div",{className:"empty-block"},"暂无数据"):h().createElement(h().Fragment,null,h().createElement("div",{className:"title"},"采集完成度",h().createElement(i.Z,{placement:"top",overlayClassName:"alert-log-tips",overlay:h().createElement(h().Fragment,null,h().createElement("div",null,"对一个店铺的一个数据平台的目标数据的采集记为1个采集任务。如果该数据平台对应的店铺没有被采集，则状态为“待采集”；如果没有按要求全部完成，则状态为“采集中”；如果全部完成，则为“已采集”。 完成度是指这些采集任务中已经完成采集的任务的占比。"),h().createElement("div",null,"此数据是为了督促用户或者相关的管理员及时完成相应的采集任务"))},h().createElement("i",{className:"icon-cem_file1"}))),h().createElement("div",{className:"content"},h().createElement("span",null,(100*t.progressRate).toFixed(0)+"%"),h().createElement(u.Progress,{strokeWidth:8,showText:!1,percentage:100*t.progressRate})))))};var g=n(71339),y=n(61918);const E=function(e){var t=e.options,n=e.value,e=e.onChange;return h().createElement("div",{className:"yt-radio-group-button-wrapper"},h().createElement(u.Radio.Group,{value:n,onChange:e},Object.keys(t).map(function(e){return h().createElement(u.Radio.Button,{key:e,value:e},t[e])})))};function v(e,t){return[{label:"",width:16},{label:"店铺名称",prop:"name",width:.2*(e=e-5-24-40-32-144)},{label:"电商平台",prop:"platform",width:.2*e},{label:"店铺采集负责人",width:.2*e,render:function(e){var t=e.managerTeamList,e=e.managerUserList;return h().createElement(h().Fragment,null,h().createElement("div",{className:"col-manager"},h().createElement("span",null,"团队"),h().createElement("span",null,t.reduce(function(e,t){return[].concat(e,[t.name])},[]).join(","))),h().createElement("div",{className:"col-manager"},h().createElement("span",null,"成员"),h().createElement("span",null,e.reduce(function(e,t){return[].concat(e,[t.name])},[]).join(","))))}},{label:"数据平台",width:.2*e,render:function(e){return e.taskList.map(function(e){return h().createElement("div",{className:"col-platform",key:e.dataPlatform,onClick:function(){return t(e)}},h().createElement("span",null,e.dataPlatform))})}},{label:h().createElement("span",null,"采集完成度",h().createElement(i.Z,{placement:"top",overlayClassName:"alert-log-tips",overlay:h().createElement("div",null,h().createElement("div",null,"依据采集完该账号需要用户进行的一次点击即为1个任务。如“1/21”表示完成该账号在该数据平台的数据采集共需要用户完成有效点击21次，现在用户已完成1次有效点击。"),h().createElement("div",null,"每天更新所有店铺的完成度进展"))},h().createElement("i",{className:"icon-cem_file1",style:{marginLeft:4}}))),width:.2*e,render:function(e){return e.taskList.map(function(e){return h().createElement("div",{className:"col-platform",key:e.dataPlatform},h().createElement(u.Progress,{showText:!1,strokeWidth:8,percentage:(e.finishCount/e.totalCount*100).toFixed(2)}),h().createElement("span",null,e.finishCount+"/"+e.totalCount))})}},{label:"",width:16}]}var b={ALL:"全部",UNCOLLECTED:"待采集",COLLECTING:"采集中",COLLECTED:"已采集"};const S=function(e){var t=e.option,n=e.pageIndex,a=e.pageSize,o=e.status,l=e.loading,r=e.data,c=e.keyword,i=e.onPageSizeChange,u=e.onPageChange,s=e.onStatusChange,m=e.onPlatformClick,e=e.onSearch,o=0===o.length?"ALL":o[0];return h().createElement("div",{className:"yt-cm-store-list"},r?h().createElement(h().Fragment,null,h().createElement("div",{className:"yt-cm-store-filter"},h().createElement(y.Z,{defValue:c,style:{width:200},placeholder:"请输入店铺名称",onSearch:e}),h().createElement(E,{options:b,value:o,onChange:s})),h().createElement(g.Z,{columns:v(t.width,m),data:null===r?[]:r.result,total:r.count,pageIndex:n,pageSize:a,loading:l,option:t,onPageSizeChange:i,onPageChange:u})):h().createElement("div",{style:{background:"white",minHeight:500}},h().createElement(d.Z,null)))};const s=function(e){var t=e.storeData,n=e.storeListData,a=e.pageIndex,o=e.pageSize,l=e.statusList,r=e.keyword,c=e.fetchingStoreData,i=e.fetchingStoreListData,u=e.contentWidth,s=e.onPageSizeChange,m=e.onPageChange,d=e.onStatusChange,g=e.onPlatformClick,e=e.onSearch;return h().createElement("div",{className:"yt-colletion-mange-wrapper"},h().createElement(p.Z,{title:"店铺管理"}),h().createElement("div",{className:"yt-cm-content"},h().createElement("div",{className:"yt-cm-top"},h().createElement(C,{data:t,loading:c}),h().createElement("div",{className:"v-divider"}),h().createElement(f,{data:t,loading:c})),h().createElement("div",{className:"h-divider"}),h().createElement(S,{keyword:r,onPlatformClick:g,onPageSizeChange:s,onPageChange:m,onStatusChange:d,onSearch:e,status:l,loading:i,data:n,pageIndex:a,pageSize:o,option:{width:u}})))};var m=n(35239),w=n(61193),t=n(55609),P=n(84122),N=n(64396).Z.colManage.manage,n=function(n){function e(e){var t=n.call(this,e)||this;return t._handleOnPageSizeChange=function(e){t.props.fetchStoreListData({pageSize:e,pageIndex:1})},t._handleOnPageChange=function(e){t.props.fetchStoreListData({pageIndex:e})},t._handleOnStatusChange=function(e){t.props.fetchStoreListData({statusList:"ALL"===e?[]:[e],pageIndex:1})},t._handleOnSearch=function(e){t.props.fetchStoreListData({keyword:e,pageIndex:1})},t._handleOnPlatformClick=function(a){(0,P.Ln)(function(e){var t=w.Z.getUser(),n=m.t.get(m.V.curProject);e.loginFromWeb({userInfo:t,project:n}).then(function(e){e.status&&window.open(a.dataPlatformUrl,"_blank")})})},t.state={projectId:m.t.get(m.V.curProject).id},t.event={onPageSizeChange:t._handleOnPageSizeChange,onPageChange:t._handleOnPageChange,onStatusChange:t._handleOnStatusChange,onSearch:t._handleOnSearch,onPlatformClick:t._handleOnPlatformClick},t}l()(e,n);var t=e.prototype;return t.componentDidMount=function(){this.props.fetchData({projectId:this.state.projectId})},t.componentWillUnmount=function(){},t.render=function(){return h().createElement(s,o()({},this.props,this.state,this.event))},e}(h().PureComponent);const k=(0,t.connect)(function(e){var t=e.loading,e=a()(e,["loading"]);return o()({},e[N],{fetchingStoreData:t.effects[N+"/fetchStoreData"]||!1,fetchingStoreListData:t.effects[N+"/fetchStoreListData"]||!1})},function(t){return{fetchStoreListData:function(e){return t({type:N+"/fetchStoreListData",payload:e})},fetchData:function(e){return t({type:N+"/fetchData",payload:e})},clean:function(e){return t({type:N+"/clean",payload:e})}}})(n)},25022:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var t=n(67294),u=n.n(t),s=n(92360),m=n(35303),t=n(45697),t=n.n(t),d=[{label:"10项/页",value:10},{label:"20项/页",value:20},{label:"40项/页",value:40},{label:"100项/页",value:100}];const a=function(e){var t=e.onPageChange,n=e.onSizeChange,a=e.total,o=void 0===a?0:a,l=e.pageIndex,r=e.pageSize,c=e.layout,i=e.className,a=e.currLength,e=0===o?0:(l-1)*r+1,a=0===o?0:a?e+a-1:e+r-1;return 0===o?null:u().createElement("div",{className:"yt-awp-pagination "+(i||"")},u().createElement("span",{className:"total_num"},u().createElement("span",null,e+" - "+a+" "),"项，共",u().createElement("span",null," "+o+" "),"项"),u().createElement("div",{style:{textAlign:"right",float:"right"},className:"new_pagination"},u().createElement(s.Pagination,{small:!0,pageSize:r,currentPage:l,pageCount:Math.ceil(o/r),layout:0===o?"":"prev, pager, next",onCurrentChange:t}),void 0===c||c.includes("sizes")?u().createElement(m.RS,{multiple:!1,tags:!1,showSearch:!1,optionFilterProp:"label",optionLabelProp:"label",animation:"slide-up",dropdownClassName:"custom-pagination-dropdown",value:r||10,onChange:n},d.map(function(e,t){return u().createElement(m.Wx,{key:t,label:e.label,value:e.value},e.label)})):null))};t().propTypes={onPageChange:t().func,onSizeChange:t().func,total:t().number,pageIndex:t().number,pageSize:t().number,layout:t().string,className:t().string}},71339:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var t=n(67294),m=n.n(t),d=n(92360),g=n(25022),t=n(45697),n=n.n(t),t=function(e){var t=e.data,n=e.total,a=void 0===n?0:n,o=e.loading,l=e.pageIndex,r=e.columns,c=e.pageSize,i=e.onPageChange,n=e.onPageSizeChange,u=e.onSortChange,s=e.defaultSort,e=e.className,e=void 0===e?"":e;return m().useEffect(function(){var e=document.getElementsByClassName("is-sortable")[0];s&&e&&e.classList.add(s.order)},[s]),m().createElement("div",{className:"yt-awp-content-list "+e},m().createElement(d.Loading,{loading:o,className:"awp-content-loading"},m().createElement(d.Table,{defaultSort:s,columns:r,style:{width:"100%"},data:t,onSortChange:function(e){return u(e)}})),i&&m().createElement(g.Z,{onPageChange:i,onSizeChange:n,total:a,currLength:t.length,pageIndex:l,pageSize:c}))};t.propTypes={data:n().array,total:n().number,loading:n().bool,pageIndex:n().number,columns:n().array,pageSize:n().number,onPageChange:n().func,onPageSizeChange:n().func,onSortChange:n().func,defaultSort:n().any,className:n().string};const a=t},61918:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var t=n(67294),s=n.n(t),t=n(45697),n=n.n(t),t=function(e){var t=e.className,n=e.onClear,a=e.onSearch,o=e.placeholder,l=e.style,r=e.defValue,c=e.signal,e=s().useState(r),i=e[0],u=e[1];s().useEffect(function(){u(r)},[r,c]);return s().createElement("div",{style:l,className:"yt_search_input_wrapper "+(t||"")},s().createElement("input",{placeholder:o,value:i,onKeyDown:function(e){13===e.keyCode&&a(i)},onChange:function(e){return u(e.target.value)},autoComplete:"off"}),i&&s().createElement("i",{className:"icon-cem_log-off",onClick:function(){u(""),n&&n("")}}),s().createElement("i",{className:"icon-cem_small-search",onClick:function(){return a(i)}}))};t.propTypes={className:n().string,onSearch:n().func.isRequired,placeholder:n().string,style:n().object,defValue:n().string,signal:n().any,onClear:n().func};const a=t},84122:(e,t,n)=>{"use strict";n.d(t,{Ln:()=>o,YG:()=>s,Pl:()=>m,VG:()=>d,Rr:()=>g});var t=n(67154),l=n.n(t),t=n(67294),r=n.n(t),c=n(92360),i=n(5133);function a(e){c.MessageBox.confirm(r().createElement("span",null,"请先下载云听插件并安装，再进行操作!",r().createElement("br",null),"下载后刷新此页，",r().createElement("a",{href:e,target:"_black",style:{color:"#0747a6",textDecoration:"underline"}},"点这去下载"),"（",r().createElement("a",{href:"http://wiki.yuntingai.com/x/lgAB",target:"_black",style:{color:"#0747a6",textDecoration:"underline"}},"安装说明"),"）",r().createElement("br",null)),"提示",{type:"warning",confirmButtonText:"已完成下载"}).then(function(){window.location.reload()})}function u(n,e,a,o){(function t(){c.MessageBox.confirm(r().createElement("span",null,"请登录",e,"平台，再进行回复!",r().createElement("br",null),r().createElement("a",{href:a,target:"_black",style:{color:"#0747a6",textDecoration:"underline"}},"点这去登录")),"提示",{type:"warning",confirmButtonText:"已完成登录"}).then(function(e){n[o]().then(function(e){e.status||(t(),i.Z.warning("未检测到登录，请重新登录或联系管理员。"))})})})()}var o=function(t){new Promise(function(e,t){try{e(new YUNTING_OP_LOGIN)}catch(e){t(e)}}).then(function(e){t&&t(e)}).catch(function(e){a("https://yunting-1251101074.coscd.myqcloud.com/plugin/yunting-store.zip")})},s=function(t){new Promise(function(e,t){try{e(new YUNTINGPLUGIN)}catch(e){t(e)}}).then(function(e){t&&t(e)}).catch(function(e){a("https://yunting-1251101074.file.myqcloud.com/plugin/yunting.zip")})},m=function(t,n,a,o){return t.weibo.check().then(function(e){return e.status?t.weibo.reply(n.url,a).then(function(e){return e.status?o(l()({},e,{content:a,id:n.id,uid:n.uid})):i.Z.error(e.msg||"回复失败，请联系管理员")}):u(t,"微博","https://passport.weibo.cn/signin/login?entry=mweibo&yuntinglogin","weiboCheckLogin")})},d=function(t,n,a,o){return t.tieba.check().then(function(e){return e.status?t.tieba.reply(n.group,a).then(function(e){return e.status?o(l()({},e,{id:n.id,content:a})):i.Z.error(e.msg||"回复失败，请联系管理员")}):u(t,"百度贴吧","https://passport.baidu.com/v2/?login&yuntinglogin","tiebaCheckLogin")})},g=function(e,n,a,o){return e.zhihu.check().then(function(t){return t.status?e.zhihu.reply(n.zhihuId,a).then(function(e){return e.status?o(l()({},e,{id:n.id,img:t.avatar_url,uid:t.uid,username:t.name,userDesc:t.headline,userHome:t.url,content:a})):i.Z.error(e.message||"回复失败，请联系管理员")}):u(e,"知乎","https://www.zhihu.com/signin?yuntinglogin","zhihuCheckLogin")})}}}]);