(self.webpackChunkyunting=self.webpackChunkyunting||[]).push([[1940],{86666:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>f});var r=t(67154),i=t.n(r),n=t(81506),a=t.n(n),r=t(85354),o=t.n(r),n=t(67294),s=t.n(n),d=t(8833),u=t(38603),l=t(55363),c=t(35239),r=t(55609),h=t(64396).Z.public.menu,n=function(t){function e(e){var n=t.call(this,e)||this,e=window.location.pathname;return n.state={boardId:e.substring(e.lastIndexOf("/")+1)},n.viewRef=void 0,n._handleOnFilterChange=n.handleOnFilterChange.bind(a()(n)),n}o()(e,t);var n=e.prototype;return n.handleOnFilterChange=function(){var e=arguments,n=this;setTimeout(function(){n.viewRef&&n.viewRef.active({filterArgs:Array.from(e),questionnaireBoardId:n.state.boardId})},500)},n.render=function(){var n=this,t=this.state.boardId,e=(this.props.boardList?this.props.boardList[c.t.get(c.V.curProject).id]:[]).find(function(e){return e.id===t});return s().createElement(d.Z,{title:s().createElement(l.Z,{titles:[{title:"看板",url:""},{title:e?e.name:"",url:""}]}),expandInfo:{boardId:t},className:"yt_research_nps_boarder_wrapper",pageType:"RESEARCH_BOARD_NPS",onReady:this._handleOnFilterChange,onChange:this._handleOnFilterChange,noSavingFilterList:!0},s().createElement(u.Z,{ref:function(e){return n.viewRef=e&&e.wrappedInstance}}))},e}(n.Component);const f=(0,r.connect)(function(e){return{boardList:i()({},e)[h].menuList.questionnaireBoards}})(n)}}]);