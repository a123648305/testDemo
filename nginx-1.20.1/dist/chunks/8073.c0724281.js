(self.webpackChunkyunting=self.webpackChunkyunting||[]).push([[8073],{15959:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>i});const i=n.p+"html-76bb61"},7474:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>i});const i=n.p+"html-01c246"},36072:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>i});const i=n.p+"html-25a64c"},79494:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>i});const i=n.p+"html-4d6354"},98073:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>n});var t=i(85354),o=i.n(t),t=i(67294),l=i.n(t),a=i(61193),s=i(61409),c=i(62887),r=i(15959),m=c.U[parseInt(6*Math.random())],n=function(t){function e(e){e=t.call(this,e)||this;return e.state={isFirst:!0,logoImg:a.Z.getUser()&&a.Z.getUser().accountLogo?a.Z.getUser().accountLogo:"//yunting-1251101074.coscd.myqcloud.com/account_logo/"+window.location.hostname+"/130_130.png"},e.loIcon="",e}o()(e,t);var n=e.prototype;return n.componentDidMount=function(){document.getElementById("yt_logo_img")&&(document.getElementById("yt_logo_img").onerror=function(e){document.getElementById("yt_logo_img").src=i(79494)})},n.render=function(){var e=this,t=this.props.location;return this.state.isFirst?this.loIcon=i(36072):this.loIcon=i(7474),l().createElement("div",{className:"yt_dblogin_wrap",id:"particles"},l().createElement("div",{id:"login_panel_left"},l().createElement("div",{className:"yt_logo-cem"},l().createElement("img",{src:this.state.logoImg,alt:"logo.png",id:"yt_logo_img",onClick:function(){return window.open("https://www.yuntingai.com")}})),l().createElement("div",{className:"login_panel_container login_binded_container"},l().createElement("div",{className:"top_login_way"},l().createElement("span",{style:{display:this.state.isFirst?"none":"inline-block",transition:"all .3s"}},"账户登录"),l().createElement("img",{src:this.loIcon,onMouseEnter:function(){e.setState({isFirst:!1})},onMouseLeave:function(){e.setState({isFirst:!0})},onClick:function(){s.mW.push("/login")},alt:"login.png"})),l().createElement("div",{className:"main-panel normal-panel",style:{padding:"120px 30px 54px"}},l().createElement("i",{className:"icon-cem_invalid-save"}),l().createElement("h2",{className:"login_title"},"此账号已绑定微信",l().createElement("div",{className:"title_tips",style:{marginTop:"5px"}},l().createElement("div",null,"此账户为",t.state&&t.state.email),l().createElement("div",null,"请先登录该账户解绑或者换一个微信扫码绑定"))),l().createElement("div",{className:"bottom_btn",style:{marginTop:"24px"}},l().createElement("a",{onClick:function(){(0,c.wr)(t.state&&t.state.data)}},"前往个人中心"))),-1===window.navigator.userAgent.indexOf("Chrome")&&l().createElement("p",{className:"browser_tips"},"- 为避免可视化效果不兼容，推荐使用 Chrome 浏览器 -")),l().createElement("p",{className:"rights"},"© 2020 深圳视界信息技术有限公司 All rights reserved.粤ICP备14092314号")),l().createElement("div",{id:"login_img_right",style:{backgroundImage:"url("+r+")"}},l().createElement("h2",{dangerouslySetInnerHTML:{__html:m.word}}),l().createElement("img",{src:m.img,width:"100%",style:{marginTop:"50px"}})))},e}(l().PureComponent)}}]);