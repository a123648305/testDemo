(self.webpackChunkyunting=self.webpackChunkyunting||[]).push([[3216],{78500:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>m});var a=n(37316),r=n.n(a),c=n(67154),o=n.n(c),t=n(85354),i=n.n(t),a=n(67294),w=n.n(a),N=n(61918),P=n(37841),L=n(43036),j=n(61409),k=n(92360),z=n(35535),D=n(1145),s={"全部":"ALL","云听":"YT","当前项目":"CURRENT"},V=Object.keys(s).map(function(e){return{key:e,value:s[e]}});const l=function(e){var t=e.drawerVisible,n=e.spuName,a=e.spuId,r=e.loading,c=e.name,o=e.onFilterChange,i=e.type,s=e.entryList,l=e.total,p=e.pageIndex,u=e.pageSize,d=e.onDelete,h=e.onPageChange,m=e.onPageSizeChange,g=w().useState("ALL"),f=g[0],y=g[1],b=w().useState(void 0),v=b[0],C=b[1],e=w().useState(!1),g=e[0],I=e[1],b=w().useState(""),e=b[0],_=b[1],b=w().useState(""),E=b[0],S=b[1];return w().useEffect(function(){v&&t&&v.wrappedInstance.show({spuName:n,spuId:a,type:i})},[v,t]),w().createElement("div",{className:"project_base_spu"},w().createElement("div",{className:"yt_product_setting_subscribe_base_list_wrapper"},w().createElement("div",{className:"top_zone"},w().createElement("div",{className:"left_zone"},w().createElement(N.Z,{onSearch:function(e){return o({name:e})},onClear:function(e){return o({name:e})},placeholder:"搜索词条",defValue:c,style:{width:168}}),w().createElement(P.Z,{options:V,activeKey:f,onTabClick:function(e){y(e),o({tabType:e})}})),w().createElement("div",{className:"right_zone"},w().createElement(L.Z,{overlay:w().createElement("div",null,"关于词条库，",w().createElement(j.rU,{className:"yt-feedback-read-more",to:"https://www.yuque.com/docs/share/b6548b05-b10c-4c4a-a55c-be008b5672fa?# 《行业词条结构功能说明》",target:"_blank"},"了解更多")),placement:"top"},w().createElement("i",{className:"icon-cem_file1",style:{marginRight:10,fontSize:14,color:"#979797"}})),w().createElement(k.Button,{type:"primary",onClick:function(){v.wrappedInstance.show({spuId:a,type:i,spuName:n})}},"申请"+i+"词条"))),i&&w().createElement(D.Z,{loading:r,data:s,total:l,pageIndex:p,pageSize:u,onPageChange:h,onPageSizeChange:m,onEdit:function(e,t){v&&v.wrappedInstance.show({id:e.id,copy:"copy"===t,type:i,spuId:a,spuName:n})},onDelete:function(){d(E),I(!1)},onClickDelete:function(e){I(!0),_(e.name),S(e.id)},entryVisible:g,entryName:e,onCancel:function(){I(!1),_(""),S("")},type:i}),w().createElement(z.Z,{ref:C,type:i})))};var p=n(35239),c=n(55609),t=n(64396),u=n(55815),d=t.Z.product.setting.public,h=t.Z.product.setting.base.sku,a=function(c){function e(e){var t=c.call(this,e)||this;t._handleOnFilterChange=function(e){void 0!==e.name?t.props.fetchList({name:e.name,pageIndex:1}):e.tabType&&t.props.fetchList({projectIds:"ALL"===e.tabType?["yt",p.t.get(p.V.curProject).id]:"YT"===e.tabType?["yt"]:[p.t.get(p.V.curProject).id],name:t.props.name,pageIndex:1})},t._handleOnPageChange=function(e){t.props.fetchList({pageIndex:e,name:t.props.name})},t._handleOnPageSizeChange=function(e){t.props.fetchList({pageIndex:1,pageSize:e,name:t.props.name})},t._handleOnDelete=function(e){t.props.fetchDelete({ids:[e]})};var n=e.location,a=n.state||n.query||{},r=a.spuName;a.name;return t.state={spuName:r},t.event={onFilterChange:t._handleOnFilterChange,onPageChange:t._handleOnPageChange,onPageSizeChange:t._handleOnPageSizeChange,onDelete:t._handleOnDelete},e.save({drawerVisible:n.query&&n.query.drawerVisible,spuId:n.state&&n.state.spuId||n.query&&n.query.spuId}),e.titleChange([{title:"知识库",url:"/account/project/base"},{title:"「"+r+"」的SKU知识",state:{type:""}}]),t}i()(e,c);var t=e.prototype;return t.componentDidMount=function(){var e=this.props.location;this.props.fetchList({projectId:p.t.get(p.V.curProject).id,type:"SKU",projectIds:["yt",p.t.get(p.V.curProject).id],spuId:e.state&&e.state.spuId||e.query&&e.query.spuId})},t.componentWillUnmount=function(){this.props.clean()},t.render=function(){return w().createElement("div",{style:{height:"100%"}},w().createElement(u.Z,{title:(e={title:"「"+this.state.spuName+"」的SKU知识"},t=e.title,e=e.url,[{title:"所有项目",url:"/account/project"},{title:p.t.get(p.V.backProjectConfig).name,url:"/account/project/preview"},{title:"知识库",url:"/account/project/base"},{title:t,url:e}])}),w().createElement(l,o()({},this.props,this.state,this.event)));var e,t},e}(a.PureComponent);const m=(0,c.connect)(function(e){var t=e.loading,e=r()(e,["loading"]);return o()({},e[h],{loading:t.effects[h+"/fetchList"]||!1})},function(t){return{save:function(e){return t({type:h+"/save",payload:e})},clean:function(e){return t({type:h+"/clean",payload:e})},fetchList:function(e){return t({type:h+"/fetchList",payload:e})},fetchDelete:function(e){return t({type:h+"/fetchDelete",payload:e})},titleChange:function(e){return t({type:d+"/titleChange",payload:e})}}})(a)}}]);