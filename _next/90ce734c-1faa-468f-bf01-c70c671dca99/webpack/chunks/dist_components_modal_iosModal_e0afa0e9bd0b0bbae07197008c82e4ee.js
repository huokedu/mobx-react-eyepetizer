
          window.__NEXT_REGISTER_CHUNK('dist_components_modal_iosModal_e0afa0e9bd0b0bbae07197008c82e4ee.js', function() {
            webpackJsonp([1],{311:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e){var n={};for(var o in t)e.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function l(){}e.__esModule=!0,e.EXITING=e.ENTERED=e.ENTERING=e.EXITED=e.UNMOUNTED=void 0;var u=n(19),c=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(u),p=n(0),f=o(p),d=n(84),h=o(d),m=(n(312),e.UNMOUNTED="unmounted"),E=e.EXITED="exited",y=e.ENTERING="entering",x=e.ENTERED="entered",v=e.EXITING="exiting",g=function(t){function e(n,o){i(this,e);var r=a(this,t.call(this,n,o)),s=o.transitionGroup,l=s&&!s.isMounting?n.enter:n.appear,u=void 0;return r.nextStatus=null,n.in?l?(u=E,r.nextStatus=y):u=x:u=n.unmountOnExit||n.mountOnEnter?m:E,r.state={status:u},r.nextCallback=null,r}return s(e,t),e.prototype.getChildContext=function(){return{transitionGroup:null}},e.prototype.componentDidMount=function(){this.updateStatus(!0)},e.prototype.componentWillReceiveProps=function(t){var e=this.pendingState||this.state,n=e.status;t.in?(n===m&&this.setState({status:E}),n!==y&&n!==x&&(this.nextStatus=y)):n!==y&&n!==x||(this.nextStatus=v)},e.prototype.componentDidUpdate=function(){this.updateStatus()},e.prototype.componentWillUnmount=function(){this.cancelNextCallback()},e.prototype.getTimeouts=function(){var t=this.props.timeout,e=void 0,n=void 0,o=void 0;return e=n=o=t,null!=t&&"number"!=typeof t&&(e=t.exit,n=t.enter,o=t.appear),{exit:e,enter:n,appear:o}},e.prototype.updateStatus=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this.nextStatus;if(null!==e){this.nextStatus=null,this.cancelNextCallback();var n=h.default.findDOMNode(this);e===y?this.performEnter(n,t):this.performExit(n)}else this.props.unmountOnExit&&this.state.status===E&&this.setState({status:m})},e.prototype.performEnter=function(t,e){var n=this,o=this.props.enter,r=this.context.transitionGroup?this.context.transitionGroup.isMounting:e,i=this.getTimeouts();if(!e&&!o)return void this.safeSetState({status:x},function(){n.props.onEntered(t)});this.props.onEnter(t,r),this.safeSetState({status:y},function(){n.props.onEntering(t,r),n.onTransitionEnd(t,i.enter,function(){n.safeSetState({status:x},function(){n.props.onEntered(t,r)})})})},e.prototype.performExit=function(t){var e=this,n=this.props.exit,o=this.getTimeouts();if(!n)return void this.safeSetState({status:E},function(){e.props.onExited(t)});this.props.onExit(t),this.safeSetState({status:v},function(){e.props.onExiting(t),e.onTransitionEnd(t,o.exit,function(){e.safeSetState({status:E},function(){e.props.onExited(t)})})})},e.prototype.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},e.prototype.safeSetState=function(t,e){var n=this;this.pendingState=t,e=this.setNextCallback(e),this.setState(t,function(){n.pendingState=null,e()})},e.prototype.setNextCallback=function(t){var e=this,n=!0;return this.nextCallback=function(o){n&&(n=!1,e.nextCallback=null,t(o))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},e.prototype.onTransitionEnd=function(t,e,n){this.setNextCallback(n),t?(this.props.addEndListener&&this.props.addEndListener(t,this.nextCallback),null!=e&&setTimeout(this.nextCallback,e)):setTimeout(this.nextCallback,0)},e.prototype.render=function(){var t=this.state.status;if(t===m)return null;var e=this.props,n=e.children,o=r(e,["children"]);if(delete o.in,delete o.mountOnEnter,delete o.unmountOnExit,delete o.appear,delete o.enter,delete o.exit,delete o.timeout,delete o.addEndListener,delete o.onEnter,delete o.onEntering,delete o.onEntered,delete o.onExit,delete o.onExiting,delete o.onExited,"function"==typeof n)return n(t,o);var i=f.default.Children.only(n);return f.default.cloneElement(i,o)},e}(f.default.Component);g.contextTypes={transitionGroup:c.object},g.childContextTypes={transitionGroup:function(){}},g.propTypes={},g.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:l,onEntering:l,onEntered:l,onExit:l,onExiting:l,onExited:l},g.UNMOUNTED=0,g.EXITED=1,g.ENTERING=2,g.ENTERED=3,g.EXITING=4,e.default=g},312:function(t,e,n){"use strict";function o(t){var e="transition"+t+"Timeout",n="transition"+t;return function(t){if(t[n]){if(null==t[e])return new Error(e+" wasn't supplied to CSSTransitionGroup: this can cause unreliable animations and won't be supported in a future version of React. See https://fb.me/react-animation-transition-group-timeout for more information.");if("number"!=typeof t[e])return new Error(e+" must be a number (in milliseconds)")}return null}}e.__esModule=!0,e.classNamesShape=e.timeoutsShape=void 0,e.transitionTimeout=o;var r=n(19),i=function(t){return t&&t.__esModule?t:{default:t}}(r);e.timeoutsShape=i.default.oneOfType([i.default.number,i.default.shape({enter:i.default.number,exit:i.default.number}).isRequired]),e.classNamesShape=i.default.oneOfType([i.default.string,i.default.shape({enter:i.default.string,exit:i.default.string,active:i.default.string}),i.default.shape({enter:i.default.string,enterActive:i.default.string,exit:i.default.string,exitActive:i.default.string})])},313:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(5),i=o(r),a=n(1),s=o(a),l=n(2),u=o(l),c=n(6),p=o(c),f=n(7),d=o(f),h=n(4),m=o(h),E=n(0),y=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(E),x=n(84),v=n(314),g=n(57),b=o(g),C=function(t){function e(t){(0,s.default)(this,e);var n=(0,p.default)(this,(e.__proto__||(0,i.default)(e)).call(this,t));return n.handleClick=function(t){var e=n.props.onBackdropClick;t.currentTarget===t.target&&e&&e(t),t.preventDefault()},n.el=document.createElement("div"),n}return(0,d.default)(e,t),(0,u.default)(e,[{key:"componentDidMount",value:function(){document.body.appendChild(this.el)}},{key:"componentWillUnmount",value:function(){document.body.removeChild(this.el)}},{key:"render",value:function(){var t=this,e=this.props,n=e.imgUrl,o=e.text,r=e.show,i=void 0!==r&&r,a=y.createElement(v.Transition,{in:i,timeout:{enter:0,exit:600}},function(e){return y.createElement("div",{style:{display:"exited"!==e?"block":"none"},onClick:t.handleClick,className:"jsx-2963520779 "+((0,b.default)("kyt-modal",{"kyt-modal-enter":"entering"===e,"kyt-modal-transition":"entered"===e||"exiting"===e,"kyt-modal-leave":"exiting"===e})||"")},y.createElement("div",{className:"jsx-2963520779 content"},y.createElement("img",{src:n,className:"jsx-2963520779"}),o),y.createElement(m.default,{styleId:"2963520779",css:[".kyt-modal-transition{-webkit-transition:opacity 0.3s;transition:opacity 0.3s;opacity:1;}",".kyt-modal-transition .content{opacity:1;-webkit-transition:all 0.6s;transition:all 0.6s;-webkit-transform:translate3d(-50%,-50%,0);-ms-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0);}",".kyt-modal{background:rgba(0,0,0,0.3);display:none;height:100%;left:0;position:fixed;top:0;width:100%;z-index:10;text-align:center;}",".kyt-modal .content{background:#fff;left:50%;position:absolute;top:50%;-webkit-transform:translate3d(-50%,-50%,0);-ms-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0);z-index:1000;padding-bottom:20px;width:300px;}",".kyt-modal .content img{max-width:100%;}",".kyt-modal-leave,.kyt-modal-enter{opacity:0;}",".kyt-modal-leave .content,.kyt-modal-enter .content{-webkit-transform:translate3d(-50%,-40%,0);-ms-transform:translate3d(-50%,-40%,0);transform:translate3d(-50%,-40%,0);}",".kyt-modal a{color:inherit;cursor:pointer;text-decoration:none;}",".kyt-modal a:hover{text-decoration:underline;}"]}))});return(0,x.createPortal)(a,this.el)}}]),e}(y.Component);e.default=C},314:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var r=n(315),i=o(r),a=n(319),s=o(a),l=n(311),u=o(l);t.exports={Transition:u.default,TransitionGroup:s.default,CSSTransition:i.default}},315:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0;var s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},l=n(19),u=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(l),c=n(316),p=o(c),f=n(318),d=o(f),h=n(0),m=o(h),E=n(311),y=o(E),x=n(312),v=function(t,e){return e&&e.split(" ").forEach(function(e){return(0,p.default)(t,e)})},g=function(t,e){return e&&e.split(" ").forEach(function(e){return(0,d.default)(t,e)})},b=(s({},y.default.propTypes,{classNames:x.classNamesShape,onEnter:u.func,onEntering:u.func,onEntered:u.func,onExit:u.func,onExiting:u.func,onExited:u.func}),function(t){function e(){var n,o,a;r(this,e);for(var s=arguments.length,l=Array(s),u=0;u<s;u++)l[u]=arguments[u];return n=o=i(this,t.call.apply(t,[this].concat(l))),o.onEnter=function(t,e){var n=o.getClassNames(e?"appear":"enter"),r=n.className;o.removeClasses(t,"exit"),v(t,r),o.props.onEnter&&o.props.onEnter(t)},o.onEntering=function(t,e){var n=o.getClassNames(e?"appear":"enter"),r=n.activeClassName;o.reflowAndAddClass(t,r),o.props.onEntering&&o.props.onEntering(t)},o.onEntered=function(t,e){o.removeClasses(t,e?"appear":"enter"),o.props.onEntered&&o.props.onEntered(t)},o.onExit=function(t){var e=o.getClassNames("exit"),n=e.className;o.removeClasses(t,"appear"),o.removeClasses(t,"enter"),v(t,n),o.props.onExit&&o.props.onExit(t)},o.onExiting=function(t){var e=o.getClassNames("exit"),n=e.activeClassName;o.reflowAndAddClass(t,n),o.props.onExiting&&o.props.onExiting(t)},o.onExited=function(t){o.removeClasses(t,"exit"),o.props.onExited&&o.props.onExited(t)},o.getClassNames=function(t){var e=o.props.classNames,n="string"!=typeof e?e[t]:e+"-"+t;return{className:n,activeClassName:"string"!=typeof e?e[t+"Active"]:n+"-active"}},a=n,i(o,a)}return a(e,t),e.prototype.removeClasses=function(t,e){var n=this.getClassNames(e),o=n.className,r=n.activeClassName;o&&g(t,o),r&&g(t,r)},e.prototype.reflowAndAddClass=function(t,e){t.scrollTop,v(t,e)},e.prototype.render=function(){var t=s({},this.props);return delete t.classNames,m.default.createElement(y.default,s({},t,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},e}(m.default.Component));b.propTypes={},e.default=b,t.exports=e.default},316:function(t,e,n){"use strict";function o(t,e){t.classList?t.classList.add(e):(0,i.default)(t)||(t.className=t.className+" "+e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var r=n(317),i=function(t){return t&&t.__esModule?t:{default:t}}(r);t.exports=e.default},317:function(t,e,n){"use strict";function o(t,e){return t.classList?!!e&&t.classList.contains(e):-1!==(" "+t.className+" ").indexOf(" "+e+" ")}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o,t.exports=e.default},318:function(t,e,n){"use strict";t.exports=function(t,e){t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}},319:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e){var n={};for(var o in t)e.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0;var l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},u=n(19),c=o(u),p=n(0),f=o(p),d=n(320),h=Object.values||function(t){return Object.keys(t).map(function(e){return t[e]})},m=(c.default.any,c.default.node,c.default.bool,c.default.bool,c.default.bool,c.default.func,{component:"div",childFactory:function(t){return t}}),E=function(t){function e(n,o){i(this,e);var r=a(this,t.call(this,n,o));return r.handleExited=function(t,e,n){var o=(0,d.getChildMapping)(r.props.children);t in o||(n&&n(e),r.setState(function(e){var n=l({},e.children);return delete n[t],{children:n}}))},r.state={children:(0,d.getChildMapping)(n.children,function(t){var e=function(e){r.handleExited(t.key,e,t.props.onExited)};return(0,p.cloneElement)(t,{onExited:e,in:!0,appear:r.getProp(t,"appear"),enter:r.getProp(t,"enter"),exit:r.getProp(t,"exit")})})},r}return s(e,t),e.prototype.getChildContext=function(){return{transitionGroup:{isMounting:!this.appeared}}},e.prototype.getProp=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.props;return null!=n[e]?n[e]:t.props[e]},e.prototype.componentDidMount=function(){this.appeared=!0},e.prototype.componentWillReceiveProps=function(t){var e=this,n=this.state.children,o=(0,d.getChildMapping)(t.children),r=(0,d.mergeChildMappings)(n,o);Object.keys(r).forEach(function(i){var a=r[i];if((0,p.isValidElement)(a)){var s=function(t){e.handleExited(a.key,t,a.props.onExited)},l=i in n,u=i in o,c=n[i],f=(0,p.isValidElement)(c)&&!c.props.in;!u||l&&!f?u||!l||f?u&&l&&(0,p.isValidElement)(c)&&(r[i]=(0,p.cloneElement)(a,{onExited:s,in:c.props.in,exit:e.getProp(a,"exit",t),enter:e.getProp(a,"enter",t)})):r[i]=(0,p.cloneElement)(a,{in:!1}):r[i]=(0,p.cloneElement)(a,{onExited:s,in:!0,exit:e.getProp(a,"exit",t),enter:e.getProp(a,"enter",t)})}}),this.setState({children:r})},e.prototype.render=function(){var t=this.props,e=t.component,n=t.childFactory,o=r(t,["component","childFactory"]),i=this.state.children;return delete o.appear,delete o.enter,delete o.exit,f.default.createElement(e,o,h(i).map(n))},e}(f.default.Component);E.childContextTypes={transitionGroup:c.default.object.isRequired},E.propTypes={},E.defaultProps=m,e.default=E,t.exports=e.default},320:function(t,e,n){"use strict";function o(t,e){var n=function(t){return e&&(0,i.isValidElement)(t)?e(t):t},o=Object.create(null);return t&&i.Children.map(t,function(t){return t}).forEach(function(t){o[t.key]=n(t)}),o}function r(t,e){function n(n){return n in e?e[n]:t[n]}t=t||{},e=e||{};var o=Object.create(null),r=[];for(var i in t)i in e?r.length&&(o[i]=r,r=[]):r.push(i);var a=void 0,s={};for(var l in e){if(o[l])for(a=0;a<o[l].length;a++){var u=o[l][a];s[o[l][a]]=n(u)}s[l]=n(l)}for(a=0;a<r.length;a++)s[r[a]]=n(r[a]);return s}e.__esModule=!0,e.getChildMapping=o,e.mergeChildMappings=r;var i=n(0)},86:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(o),i=n(313),a=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default=function(t){var e=t.show,n=t.onBackdropClick;return r.createElement(a.default,{show:e,imgUrl:"//static.kaiyanapp.com/eyepetizer-web/assets/images/index/landing_scan_qr_ios.e13aaceb.png",text:r.createElement("div",null,"扫描二维码",r.createElement("br",null),"下载 iOS 版开眼",r.createElement("br",null),r.createElement("a",{href:"#"},"点击跳转至 App Store")),onBackdropClick:n})}}});
          })
        