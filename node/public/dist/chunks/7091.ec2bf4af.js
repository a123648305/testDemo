(self.webpackChunkyunting=self.webpackChunkyunting||[]).push([[7091],{93427:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r});const r=n.p+"html-33f0af"},77091:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>_});var r=n(67154),l=n.n(r),a=n(37316),c=n.n(a),t=n(85354),s=n.n(t),r=n(67294),i=n.n(r),a=n(55609),t=n(64396),o=(n(45697),n(61409)),r=function(e){var t=e.item;return i().createElement("div",{className:"link_card_item"},i().createElement("div",{className:"card_item_title"},t.docName),i().createElement("div",{className:"link_item"},t.itemVOList.sort(function(e,t){return t.sort-e.sort}).slice(0,3).map(function(e){return i().createElement("p",{key:t.name,className:"link_txt"},i().createElement(o.rU,{to:e.detailUrl.startsWith("http")?e.detailUrl:"http://"+e.detailUrl,target:"_blank"},e.title))})),i().createElement("div",{className:"check_more"},i().createElement(o.rU,{to:t.detailUrl.startsWith("http")?t.detailUrl:"http://"+t.detailUrl,target:"_blank"},"查看全部")))};const m=r;r.propTypes={};var u={USE_GUIDE:"使用指南",CORE_FUNCTION:"云听核心产品功能",LEARN_MORE:"了解更多"};const p=function(t){function e(e){e=t.call(this,e)||this;return e.state={},e}return s()(e,t),e.prototype.render=function(){var e=this.props.list;return i().createElement("div",{className:"yt_help_center_wrapper",onScroll:function(){70<document.querySelector(".yt_help_center_wrapper").scrollTop?document.querySelector(".help_logo").classList.add("bg"):document.querySelector(".help_logo").classList.remove("bg")}},i().createElement("div",{className:"yt_help_center_content"},i().createElement("div",{className:"help_logo"},i().createElement("p",{onClick:function(){o.mW.push("/inbox/public")}},i().createElement("img",{src:n(93427),alt:""}),i().createElement("span",null,"云听CEM")),i().createElement("span",{className:"help_line"}," | "),i().createElement("span",{className:"help_small_title"},"帮助中心")),i().createElement("div",{className:"link_card_box"},e.map(function(e){return i().createElement("div",{key:e.code},e.code&&e.data.length&&"USE_GUIDE"!==e.code?i().createElement("div",{className:"title_block"},u[e.code]):"",i().createElement("div",{className:"lint_list"},e.data.sort(function(e,t){return t.sort-e.sort}).map(function(e){return i().createElement(m,{item:e,key:e.code})})))}))))},e}(i().Component);var d=t.Z.userHelp.helpCenter,t=function(n){function e(e){var t=n.call(this,e)||this;return e.fetchHelpList(),t.state={},t}s()(e,n);var t=e.prototype;return t.componentDidMount=function(){},t.render=function(){return i().createElement(p,this.props)},e}(i().Component);const _=(0,a.connect)(function(e){var t=e.loading,e=c()(e,["loading"]);return l()({},e[d],{loading:t.effects[d+"/"]||!1})},function(t){return{save:function(e){return t({type:d+"/save",payload:e})},fetchHelpList:function(e){return t({type:d+"/fetchHelpList",payload:e})}}})(t)}}]);