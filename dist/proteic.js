<<<<<<< HEAD
!function(t,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var e=n();for(var r in e)("object"==typeof exports?exports:t)[r]=e[r]}}(this,function(){return function(t){function n(r){if(e[r])return e[r].exports;var i=e[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}var e={};return n.m=t,n.c=e,n.p="",n(0)}([function(t,n,e){"use strict";var r=e(19);n.Linechart=r.default;var i=e(17);n.Barchart=i.default;var o=e(18);n.Gauge=o.default;var a=e(22);n.Scatterplot=a.default;var u=e(24);n.Streamgraph=u.default;var s=e(23);n.StackedArea=s.default;var c=e(26);n.Swimlane=c.default;var f=e(25);n.Sunburst=f.default;var l=e(20);n.Network=l.default;var h=e(21);n.PieChart=h.default;var A=e(28);n.WebsocketDatasource=A.default;var p=e(27);n.HTTPDatasource=p.default;var d=e(4);n.Globals=d.default},function(t,n,e){!function(t,e){e(n)}(this,function(t){"use strict";function n(t){return function(n,e){return Bc(t(n),e)}}function e(t,n,e){var r=Math.abs(n-t)/Math.max(0,e),i=Math.pow(10,Math.floor(Math.log(r)/Math.LN10)),o=r/i;return o>=Pc?i*=10:o>=jc?i*=5:o>=Dc&&(i*=2),n<t?-i:i}function r(t){return t.length}function i(t,n,e){var r=t(e);return"translate("+(isFinite(r)?r:n(e))+",0)"}function o(t,n,e){var r=t(e);return"translate(0,"+(isFinite(r)?r:n(e))+")"}function a(t){var n=t.bandwidth()/2;return t.round()&&(n=Math.round(n)),function(e){return t(e)+n}}function u(){return!this.__axis}function s(t,n){function e(e){var A,p=null==s?n.ticks?n.ticks.apply(n,r):n.domain():s,d=null==c?n.tickFormat?n.tickFormat.apply(n,r):sf:c,g=Math.max(f,0)+h,y=t===cf||t===lf?i:o,v=n.range(),w=v[0]+.5,x=v[v.length-1]+.5,m=(n.bandwidth?a:sf)(n.copy()),b=e.selection?e.selection():e,B=b.selectAll(".domain").data([null]),E=b.selectAll(".tick").data(p,n).order(),_=E.exit(),M=E.enter().append("g").attr("class","tick"),C=E.select("line"),Q=E.select("text"),G=t===cf||t===hf?-1:1,H=t===hf||t===ff?(A="x","y"):(A="y","x");B=B.merge(B.enter().insert("path",".tick").attr("class","domain").attr("stroke","#000")),E=E.merge(M),C=C.merge(M.append("line").attr("stroke","#000").attr(A+"2",G*f).attr(H+"1",.5).attr(H+"2",.5)),Q=Q.merge(M.append("text").attr("fill","#000").attr(A,G*g).attr(H,.5).attr("dy",t===cf?"0em":t===lf?"0.71em":"0.32em")),e!==b&&(B=B.transition(e),E=E.transition(e),C=C.transition(e),Q=Q.transition(e),_=_.transition(e).attr("opacity",Af).attr("transform",function(t){return y(m,this.parentNode.__axis||m,t)}),M.attr("opacity",Af).attr("transform",function(t){return y(this.parentNode.__axis||m,m,t)})),_.remove(),B.attr("d",t===hf||t==ff?"M"+G*l+","+w+"H0.5V"+x+"H"+G*l:"M"+w+","+G*l+"V0.5H"+x+"V"+G*l),E.attr("opacity",1).attr("transform",function(t){return y(m,m,t)}),C.attr(A+"2",G*f),Q.attr(A,G*g).text(d),b.filter(u).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",t===ff?"start":t===hf?"end":"middle"),b.each(function(){this.__axis=m})}var r=[],s=null,c=null,f=6,l=6,h=3;return e.scale=function(t){return arguments.length?(n=t,e):n},e.ticks=function(){return r=uf.call(arguments),e},e.tickArguments=function(t){return arguments.length?(r=null==t?[]:uf.call(t),e):r.slice()},e.tickValues=function(t){return arguments.length?(s=null==t?null:uf.call(t),e):s&&s.slice()},e.tickFormat=function(t){return arguments.length?(c=t,e):c},e.tickSize=function(t){return arguments.length?(f=l=+t,e):f},e.tickSizeInner=function(t){return arguments.length?(f=+t,e):f},e.tickSizeOuter=function(t){return arguments.length?(l=+t,e):l},e.tickPadding=function(t){return arguments.length?(h=+t,e):h},e}function c(t){return s(cf,t)}function f(t){return s(ff,t)}function l(t){return s(lf,t)}function h(t){return s(hf,t)}function A(){for(var t,n=0,e=arguments.length,r={};n<e;++n){if(!(t=arguments[n]+"")||t in r)throw new Error("illegal type: "+t);r[t]=[]}return new p(r)}function p(t){this._=t}function d(t,n){return t.trim().split(/^|\s+/).map(function(t){var e="",r=t.indexOf(".");if(r>=0&&(e=t.slice(r+1),t=t.slice(0,r)),t&&!n.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:e}})}function g(t,n){for(var e,r=0,i=t.length;r<i;++r)if((e=t[r]).name===n)return e.value}function y(t,n,e){for(var r=0,i=t.length;r<i;++r)if(t[r].name===n){t[r]=pf,t=t.slice(0,r).concat(t.slice(r+1));break}return null!=e&&t.push({name:n,value:e}),t}function v(t){return function(){var n=this.ownerDocument,e=this.namespaceURI;return e===df&&n.documentElement.namespaceURI===df?n.createElement(t):n.createElementNS(e,t)}}function w(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function x(){return new m}function m(){this._="@"+(++wf).toString(36)}function b(t,n,e){return t=B(t,n,e),function(n){var e=n.relatedTarget;e&&(e===this||8&e.compareDocumentPosition(this))||t.call(this,n)}}function B(n,e,r){return function(i){var o=t.event;t.event=i;try{n.call(this,this.__data__,e,r)}finally{t.event=o}}}function E(t){return t.trim().split(/^|\s+/).map(function(t){var n="",e=t.indexOf(".");return e>=0&&(n=t.slice(e+1),t=t.slice(0,e)),{type:t,name:n}})}function _(t){return function(){var n=this.__on;if(n){for(var e,r=0,i=-1,o=n.length;r<o;++r)e=n[r],t.type&&e.type!==t.type||e.name!==t.name?n[++i]=e:this.removeEventListener(e.type,e.listener,e.capture);++i?n.length=i:delete this.__on}}}function M(t,n,e){var r=Ef.hasOwnProperty(t.type)?b:B;return function(i,o,a){var u,s=this.__on,c=r(n,o,a);if(s)for(var f=0,l=s.length;f<l;++f)if((u=s[f]).type===t.type&&u.name===t.name)return this.removeEventListener(u.type,u.listener,u.capture),this.addEventListener(u.type,u.listener=c,u.capture=e),void(u.value=n);this.addEventListener(t.type,c,e),u={type:t.type,name:t.name,value:n,listener:c,capture:e},s?s.push(u):this.__on=[u]}}function C(n,e,r,i){var o=t.event;n.sourceEvent=t.event,t.event=n;try{return e.apply(r,i)}finally{t.event=o}}function Q(){}function G(){return[]}function H(t,n){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=n}function k(t,n,e,r,i,o){for(var a,u=0,s=n.length,c=o.length;u<c;++u)(a=n[u])?(a.__data__=o[u],r[u]=a):e[u]=new H(t,o[u]);for(;u<s;++u)(a=n[u])&&(i[u]=a)}function T(t,n,e,r,i,o,a){var u,s,c,f={},l=n.length,h=o.length,A=new Array(l);for(u=0;u<l;++u)(s=n[u])&&(A[u]=c=qf+a.call(s,s.__data__,u,n),c in f?i[u]=s:f[c]=s);for(u=0;u<h;++u)c=qf+a.call(t,o[u],u,o),(s=f[c])?(r[u]=s,s.__data__=o[u],f[c]=null):e[u]=new H(t,o[u]);for(u=0;u<l;++u)(s=n[u])&&f[A[u]]===s&&(i[u]=s)}function Y(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}function I(t){return function(){this.removeAttribute(t)}}function S(t){return function(){this.removeAttributeNS(t.space,t.local)}}function O(t,n){return function(){this.setAttribute(t,n)}}function N(t,n){return function(){this.setAttributeNS(t.space,t.local,n)}}function q(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttribute(t):this.setAttribute(t,e)}}function P(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,e)}}function j(t){return function(){this.style.removeProperty(t)}}function D(t,n,e){return function(){this.style.setProperty(t,n,e)}}function z(t,n,e){return function(){var r=n.apply(this,arguments);null==r?this.style.removeProperty(t):this.style.setProperty(t,r,e)}}function L(t){return function(){delete this[t]}}function K(t,n){return function(){this[t]=n}}function U(t,n){return function(){var e=n.apply(this,arguments);null==e?delete this[t]:this[t]=e}}function R(t){return t.trim().split(/^|\s+/)}function F(t){return t.classList||new J(t)}function J(t){this._node=t,this._names=R(t.getAttribute("class")||"")}function W(t,n){for(var e=F(t),r=-1,i=n.length;++r<i;)e.add(n[r])}function Z(t,n){for(var e=F(t),r=-1,i=n.length;++r<i;)e.remove(n[r])}function X(t){return function(){W(this,t)}}function V(t){return function(){Z(this,t)}}function $(t,n){return function(){(n.apply(this,arguments)?W:Z)(this,t)}}function tt(){this.textContent=""}function nt(t){return function(){this.textContent=t}}function et(t){return function(){var n=t.apply(this,arguments);this.textContent=null==n?"":n}}function rt(){this.innerHTML=""}function it(t){return function(){this.innerHTML=t}}function ot(t){return function(){var n=t.apply(this,arguments);this.innerHTML=null==n?"":n}}function at(){this.nextSibling&&this.parentNode.appendChild(this)}function ut(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function st(){return null}function ct(){var t=this.parentNode;t&&t.removeChild(this)}function ft(t,n,e){var r=Xf(t),i=r.CustomEvent;i?i=new i(n,e):(i=r.document.createEvent("Event"),e?(i.initEvent(n,e.bubbles,e.cancelable),i.detail=e.detail):i.initEvent(n,!1,!1)),t.dispatchEvent(i)}function lt(t,n){return function(){return ft(this,t,n)}}function ht(t,n){return function(){return ft(this,t,n.apply(this,arguments))}}function At(t,n){this._groups=t,this._parents=n}function pt(){return new At([[document.documentElement]],fl)}function dt(){t.event.stopImmediatePropagation()}function gt(t,n){var e=t.document.documentElement,r=ll(t).on("dragstart.drag",null);n&&(r.on("click.drag",dl,!0),setTimeout(function(){r.on("click.drag",null)},0)),"onselectstart"in e?r.on("selectstart.drag",null):(e.style.MozUserSelect=e.__noselect,delete e.__noselect)}function yt(t,n,e,r,i,o,a,u,s,c){this.target=t,this.type=n,this.subject=e,this.identifier=r,this.active=i,this.x=o,this.y=a,this.dx=u,this.dy=s,this._=c}function vt(){return!t.event.button}function wt(){return this.parentNode}function xt(n){return null==n?{x:t.event.x,y:t.event.y}:n}function mt(t,n){var e=Object.create(t.prototype);for(var r in n)e[r]=n[r];return e}function bt(){}function Bt(t){var n;return t=(t+"").trim().toLowerCase(),(n=_l.exec(t))?(n=parseInt(n[1],16),new Qt(n>>8&15|n>>4&240,n>>4&15|240&n,(15&n)<<4|15&n,1)):(n=Ml.exec(t))?Et(parseInt(n[1],16)):(n=Cl.exec(t))?new Qt(n[1],n[2],n[3],1):(n=Ql.exec(t))?new Qt(255*n[1]/100,255*n[2]/100,255*n[3]/100,1):(n=Gl.exec(t))?_t(n[1],n[2],n[3],n[4]):(n=Hl.exec(t))?_t(255*n[1]/100,255*n[2]/100,255*n[3]/100,n[4]):(n=kl.exec(t))?Gt(n[1],n[2]/100,n[3]/100,1):(n=Tl.exec(t))?Gt(n[1],n[2]/100,n[3]/100,n[4]):Yl.hasOwnProperty(t)?Et(Yl[t]):"transparent"===t?new Qt(NaN,NaN,NaN,0):null}function Et(t){return new Qt(t>>16&255,t>>8&255,255&t,1)}function _t(t,n,e,r){return r<=0&&(t=n=e=NaN),new Qt(t,n,e,r)}function Mt(t){return t instanceof bt||(t=Bt(t)),t?(t=t.rgb(),new Qt(t.r,t.g,t.b,t.opacity)):new Qt}function Ct(t,n,e,r){return 1===arguments.length?Mt(t):new Qt(t,n,e,null==r?1:r)}function Qt(t,n,e,r){this.r=+t,this.g=+n,this.b=+e,this.opacity=+r}function Gt(t,n,e,r){return r<=0?t=n=e=NaN:e<=0||e>=1?t=n=NaN:n<=0&&(t=NaN),new Tt(t,n,e,r)}function Ht(t){if(t instanceof Tt)return new Tt(t.h,t.s,t.l,t.opacity);if(t instanceof bt||(t=Bt(t)),!t)return new Tt;if(t instanceof Tt)return t;t=t.rgb();var n=t.r/255,e=t.g/255,r=t.b/255,i=Math.min(n,e,r),o=Math.max(n,e,r),a=NaN,u=o-i,s=(o+i)/2;return u?(a=n===o?(e-r)/u+6*(e<r):e===o?(r-n)/u+2:(n-e)/u+4,u/=s<.5?o+i:2-o-i,a*=60):u=s>0&&s<1?0:a,new Tt(a,u,s,t.opacity)}function kt(t,n,e,r){return 1===arguments.length?Ht(t):new Tt(t,n,e,null==r?1:r)}function Tt(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r}function Yt(t,n,e){return 255*(t<60?n+(e-n)*t/60:t<180?e:t<240?n+(e-n)*(240-t)/60:n)}function It(t){if(t instanceof Ot)return new Ot(t.l,t.a,t.b,t.opacity);if(t instanceof Lt){var n=t.h*Il;return new Ot(t.l,Math.cos(n)*t.c,Math.sin(n)*t.c,t.opacity)}t instanceof Qt||(t=Mt(t));var e=jt(t.r),r=jt(t.g),i=jt(t.b),o=Nt((.4124564*e+.3575761*r+.1804375*i)/Nl),a=Nt((.2126729*e+.7151522*r+.072175*i)/ql),u=Nt((.0193339*e+.119192*r+.9503041*i)/Pl);return new Ot(116*a-16,500*(o-a),200*(a-u),t.opacity)}function St(t,n,e,r){return 1===arguments.length?It(t):new Ot(t,n,e,null==r?1:r)}function Ot(t,n,e,r){this.l=+t,this.a=+n,this.b=+e,this.opacity=+r}function Nt(t){return t>Ll?Math.pow(t,1/3):t/zl+jl}function qt(t){return t>Dl?t*t*t:zl*(t-jl)}function Pt(t){return 255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055)}function jt(t){return(t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function Dt(t){if(t instanceof Lt)return new Lt(t.h,t.c,t.l,t.opacity);t instanceof Ot||(t=It(t));var n=Math.atan2(t.b,t.a)*Sl;return new Lt(n<0?n+360:n,Math.sqrt(t.a*t.a+t.b*t.b),t.l,t.opacity)}function zt(t,n,e,r){return 1===arguments.length?Dt(t):new Lt(t,n,e,null==r?1:r)}function Lt(t,n,e,r){this.h=+t,this.c=+n,this.l=+e,this.opacity=+r}function Kt(t){if(t instanceof Rt)return new Rt(t.h,t.s,t.l,t.opacity);t instanceof Qt||(t=Mt(t));var n=t.r/255,e=t.g/255,r=t.b/255,i=(Xl*r+Wl*n-Zl*e)/(Xl+Wl-Zl),o=r-i,a=(Jl*(e-i)-Rl*o)/Fl,u=Math.sqrt(a*a+o*o)/(Jl*i*(1-i)),s=u?Math.atan2(a,o)*Sl-120:NaN;return new Rt(s<0?s+360:s,u,i,t.opacity)}function Ut(t,n,e,r){return 1===arguments.length?Kt(t):new Rt(t,n,e,null==r?1:r)}function Rt(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r}function Ft(t,n,e,r,i){var o=t*t,a=o*t;return((1-3*t+3*o-a)*n+(4-6*o+3*a)*e+(1+3*t+3*o-3*a)*r+a*i)/6}function Jt(t,n){return function(e){return t+e*n}}function Wt(t,n,e){return t=Math.pow(t,e),n=Math.pow(n,e)-t,e=1/e,function(r){return Math.pow(t+r*n,e)}}function Zt(t,n){var e=n-t;return e?Jt(t,e>180||e<-180?e-360*Math.round(e/360):e):ah(isNaN(t)?n:t)}function Xt(t){return 1===(t=+t)?Vt:function(n,e){return e-n?Wt(n,e,t):ah(isNaN(n)?e:n)}}function Vt(t,n){var e=n-t;return e?Jt(t,e):ah(isNaN(t)?n:t)}function $t(t){return function(n){var e,r,i=n.length,o=new Array(i),a=new Array(i),u=new Array(i);for(e=0;e<i;++e)r=Ct(n[e]),o[e]=r.r||0,a[e]=r.g||0,u[e]=r.b||0;return o=t(o),a=t(a),u=t(u),r.opacity=1,function(t){return r.r=o(t),r.g=a(t),r.b=u(t),r+""}}}function tn(t){return function(){return t}}function nn(t){return function(n){return t(n)+""}}function en(t){return"none"===t?xh:(Vl||(Vl=document.createElement("DIV"),$l=document.documentElement,th=document.defaultView),Vl.style.transform=t,t=th.getComputedStyle($l.appendChild(Vl),null).getPropertyValue("transform"),$l.removeChild(Vl),t=t.slice(7,-1).split(","),mh(+t[0],+t[1],+t[2],+t[3],+t[4],+t[5]))}function rn(t){return null==t?xh:(nh||(nh=document.createElementNS("http://www.w3.org/2000/svg","g")),nh.setAttribute("transform",t),(t=nh.transform.baseVal.consolidate())?(t=t.matrix,mh(t.a,t.b,t.c,t.d,t.e,t.f)):xh)}function on(t,n,e,r){function i(t){return t.length?t.pop()+" ":""}function o(t,r,i,o,a,u){if(t!==i||r!==o){var s=a.push("translate(",null,n,null,e);u.push({i:s-4,x:hh(t,i)},{i:s-2,x:hh(r,o)})}else(i||o)&&a.push("translate("+i+n+o+e)}function a(t,n,e,o){t!==n?(t-n>180?n+=360:n-t>180&&(t+=360),o.push({i:e.push(i(e)+"rotate(",null,r)-2,x:hh(t,n)})):n&&e.push(i(e)+"rotate("+n+r)}function u(t,n,e,o){t!==n?o.push({i:e.push(i(e)+"skewX(",null,r)-2,x:hh(t,n)}):n&&e.push(i(e)+"skewX("+n+r)}function s(t,n,e,r,o,a){if(t!==e||n!==r){var u=o.push(i(o)+"scale(",null,",",null,")");a.push({i:u-4,x:hh(t,e)},{i:u-2,x:hh(n,r)})}else 1===e&&1===r||o.push(i(o)+"scale("+e+","+r+")")}return function(n,e){var r=[],i=[];return n=t(n),e=t(e),o(n.translateX,n.translateY,e.translateX,e.translateY,r,i),a(n.rotate,e.rotate,r,i),u(n.skewX,e.skewX,r,i),s(n.scaleX,n.scaleY,e.scaleX,e.scaleY,r,i),n=e=null,function(t){for(var n,e=-1,o=i.length;++e<o;)r[(n=i[e]).i]=n.x(t);return r.join("")}}}function an(t){return((t=Math.exp(t))+1/t)/2}function un(t){return((t=Math.exp(t))-1/t)/2}function sn(t){return((t=Math.exp(2*t))-1)/(t+1)}function cn(t){return function(n,e){var r=t((n=kt(n)).h,(e=kt(e)).h),i=Vt(n.s,e.s),o=Vt(n.l,e.l),a=Vt(n.opacity,e.opacity);return function(t){return n.h=r(t),n.s=i(t),n.l=o(t),n.opacity=a(t),n+""}}}function fn(t,n){var e=Vt((t=St(t)).l,(n=St(n)).l),r=Vt(t.a,n.a),i=Vt(t.b,n.b),o=Vt(t.opacity,n.opacity);return function(n){return t.l=e(n),t.a=r(n),t.b=i(n),t.opacity=o(n),t+""}}function ln(t){return function(n,e){var r=t((n=zt(n)).h,(e=zt(e)).h),i=Vt(n.c,e.c),o=Vt(n.l,e.l),a=Vt(n.opacity,e.opacity);return function(t){return n.h=r(t),n.c=i(t),n.l=o(t),n.opacity=a(t),n+""}}}function hn(t){return function n(e){function r(n,r){var i=t((n=Ut(n)).h,(r=Ut(r)).h),o=Vt(n.s,r.s),a=Vt(n.l,r.l),u=Vt(n.opacity,r.opacity);return function(t){return n.h=i(t),n.s=o(t),n.l=a(Math.pow(t,e)),n.opacity=u(t),n+""}}return e=+e,r.gamma=n,r}(1)}function An(){return Dh||(Kh(pn),Dh=Lh.now()+zh)}function pn(){Dh=0}function dn(){this._call=this._time=this._next=null}function gn(t,n,e){var r=new dn;return r.restart(t,n,e),r}function yn(){An(),++Oh;for(var t,n=eh;n;)(t=Dh-n._time)>=0&&n._call.call(null,t),n=n._next;--Oh}function vn(){Dh=(jh=Lh.now())+zh,Oh=Nh=0;try{yn()}finally{Oh=0,xn(),Dh=0}}function wn(){var t=Lh.now(),n=t-jh;n>Ph&&(zh-=n,jh=t)}function xn(){for(var t,n,e=eh,r=1/0;e;)e._call?(r>e._time&&(r=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:eh=n);rh=t,mn(r)}function mn(t){if(!Oh){Nh&&(Nh=clearTimeout(Nh));var n=t-Dh;n>24?(t<1/0&&(Nh=setTimeout(vn,n)),qh&&(qh=clearInterval(qh))):(qh||(qh=setInterval(wn,Ph)),Oh=1,Kh(vn))}}function bn(t,n){var e=t.__transition;if(!e||!(e=e[n])||e.state>Wh)throw new Error("too late");return e}function Bn(t,n){var e=t.__transition;if(!e||!(e=e[n])||e.state>Xh)throw new Error("too late");return e}function En(t,n){var e=t.__transition;if(!e||!(e=e[n]))throw new Error("too late");return e}function _n(t,n,e){function r(t){e.state=Zh,e.timer.restart(i,e.delay,e.time),e.delay<=t&&i(t-e.delay)}function i(r){var c,f,l,h;if(e.state!==Zh)return a();for(c in s)if(h=s[c],h.name===e.name){if(h.state===Vh)return Uh(i);h.state===$h?(h.state=nA,h.timer.stop(),h.on.call("interrupt",t,t.__data__,h.index,h.group),delete s[c]):+c<n&&(h.state=nA,h.timer.stop(),delete s[c])}if(Uh(function(){e.state===Vh&&(e.state=$h,e.timer.restart(o,e.delay,e.time),o(r))}),e.state=Xh,e.on.call("start",t,t.__data__,e.index,e.group),e.state===Xh){for(e.state=Vh,u=new Array(l=e.tween.length),c=0,f=-1;c<l;++c)(h=e.tween[c].value.call(t,t.__data__,e.index,e.group))&&(u[++f]=h);u.length=f+1}}function o(n){for(var r=n<e.duration?e.ease.call(null,n/e.duration):(e.timer.restart(a),e.state=tA,1),i=-1,o=u.length;++i<o;)u[i].call(null,r);e.state===tA&&(e.on.call("end",t,t.__data__,e.index,e.group),a())}function a(){e.state=nA,e.timer.stop(),delete s[n];for(var r in s)return;delete t.__transition}var u,s=t.__transition;s[n]=e,e.timer=gn(r,0,e.time)}function Mn(t,n){var e,r;return function(){var i=Bn(this,t),o=i.tween;if(o!==e){r=e=o;for(var a=0,u=r.length;a<u;++a)if(r[a].name===n){r=r.slice(),r.splice(a,1);break}}i.tween=r}}function Cn(t,n,e){var r,i;if("function"!=typeof e)throw new Error;return function(){var o=Bn(this,t),a=o.tween;if(a!==r){i=(r=a).slice();for(var u={name:n,value:e},s=0,c=i.length;s<c;++s)if(i[s].name===n){i[s]=u;break}s===c&&i.push(u)}o.tween=i}}function Qn(t,n,e){var r=t._id;return t.each(function(){var t=Bn(this,r);(t.value||(t.value={}))[n]=e.apply(this,arguments)}),function(t){return En(t,r).value[n]}}function Gn(t){return function(){this.removeAttribute(t)}}function Hn(t){return function(){this.removeAttributeNS(t.space,t.local)}}function kn(t,n,e){var r,i;return function(){var o=this.getAttribute(t);return o===e?null:o===r?i:i=n(r=o,e)}}function Tn(t,n,e){var r,i;return function(){var o=this.getAttributeNS(t.space,t.local);return o===e?null:o===r?i:i=n(r=o,e)}}function Yn(t,n,e){var r,i,o;return function(){var a,u=e(this);return null==u?void this.removeAttribute(t):(a=this.getAttribute(t),a===u?null:a===r&&u===i?o:o=n(r=a,i=u))}}function In(t,n,e){var r,i,o;return function(){var a,u=e(this);return null==u?void this.removeAttributeNS(t.space,t.local):(a=this.getAttributeNS(t.space,t.local),a===u?null:a===r&&u===i?o:o=n(r=a,i=u))}}function Sn(t,n){function e(){var e=this,r=n.apply(e,arguments);return r&&function(n){e.setAttributeNS(t.space,t.local,r(n))}}return e._value=n,e}function On(t,n){function e(){var e=this,r=n.apply(e,arguments);return r&&function(n){e.setAttribute(t,r(n))}}return e._value=n,e}function Nn(t,n){return function(){bn(this,t).delay=+n.apply(this,arguments)}}function qn(t,n){return n=+n,function(){bn(this,t).delay=n}}function Pn(t,n){return function(){Bn(this,t).duration=+n.apply(this,arguments)}}function jn(t,n){return n=+n,function(){Bn(this,t).duration=n}}function Dn(t,n){if("function"!=typeof n)throw new Error;return function(){Bn(this,t).ease=n}}function zn(t){return(t+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||"start"===t})}function Ln(t,n,e){var r,i,o=zn(n)?bn:Bn;return function(){var a=o(this,t),u=a.on;u!==r&&(i=(r=u).copy()).on(n,e),a.on=i}}function Kn(t){return function(){var n=this.parentNode;for(var e in this.__transition)if(+e!==t)return;n&&n.removeChild(this)}}function Un(t,n){var e,r,i;return function(){var o=Xf(this).getComputedStyle(this,null),a=o.getPropertyValue(t),u=(this.style.removeProperty(t),o.getPropertyValue(t));return a===u?null:a===e&&u===r?i:i=n(e=a,r=u)}}function Rn(t){return function(){this.style.removeProperty(t)}}function Fn(t,n,e){var r,i;return function(){var o=Xf(this).getComputedStyle(this,null).getPropertyValue(t);return o===e?null:o===r?i:i=n(r=o,e)}}function Jn(t,n,e){var r,i,o;return function(){var a=Xf(this).getComputedStyle(this,null),u=a.getPropertyValue(t),s=e(this);return null==s&&(this.style.removeProperty(t),s=a.getPropertyValue(t)),u===s?null:u===r&&s===i?o:o=n(r=u,i=s)}}function Wn(t,n,e){function r(){var r=this,i=n.apply(r,arguments);return i&&function(n){r.style.setProperty(t,i(n),e)}}return r._value=n,r}function Zn(t){return function(){this.textContent=t}}function Xn(t){return function(){var n=t(this);this.textContent=null==n?"":n}}function Vn(t,n,e,r){this._groups=t,this._parents=n,this._name=e,this._id=r}function $n(t){return pt().transition(t)}function te(){return++EA}function ne(t){return+t}function ee(t){return t*t}function re(t){return t*(2-t)}function ie(t){return((t*=2)<=1?t*t:--t*(2-t)+1)/2}function oe(t){return t*t*t}function ae(t){return--t*t*t+1}function ue(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}function se(t){return 1-Math.cos(t*kA)}function ce(t){return Math.sin(t*kA)}function fe(t){return(1-Math.cos(HA*t))/2}function le(t){return Math.pow(2,10*t-10)}function he(t){return 1-Math.pow(2,-10*t)}function Ae(t){return((t*=2)<=1?Math.pow(2,10*t-10):2-Math.pow(2,10-10*t))/2}function pe(t){return 1-Math.sqrt(1-t*t)}function de(t){return Math.sqrt(1- --t*t)}function ge(t){return((t*=2)<=1?1-Math.sqrt(1-t*t):Math.sqrt(1-(t-=2)*t)+1)/2}function ye(t){return 1-ve(1-t)}function ve(t){return(t=+t)<TA?DA*t*t:t<IA?DA*(t-=YA)*t+SA:t<NA?DA*(t-=OA)*t+qA:DA*(t-=PA)*t+jA}function we(t){return((t*=2)<=1?1-ve(1-t):ve(t-1)+1)/2}function xe(t,n){for(var e;!(e=t.__transition)||!(e=e[n]);)if(!(t=t.parentNode))return VA.time=An(),VA;return e}function me(){t.event.stopImmediatePropagation()}function be(t){return{type:t}}function Be(){return!t.event.button}function Ee(){var t=this.ownerSVGElement||this;return[[0,0],[t.width.baseVal.value,t.height.baseVal.value]]}function _e(t){for(;!t.__brush;)if(!(t=t.parentNode))return;return t.__brush}function Me(t){return t[0][0]===t[1][0]||t[0][1]===t[1][1]}function Ce(t){var n=t.__brush;return n?n.dim.output(n.selection):null}function Qe(){return He(cp)}function Ge(){return He(fp)}function He(n){function e(t){var e=t.property("__brush",u).selectAll(".overlay").data([be("overlay")]);e.enter().append("rect").attr("class","overlay").attr("pointer-events","all").attr("cursor",hp.overlay).merge(e).each(function(){var t=_e(this).extent;ll(this).attr("x",t[0][0]).attr("y",t[0][1]).attr("width",t[1][0]-t[0][0]).attr("height",t[1][1]-t[0][1])}),t.selectAll(".selection").data([be("selection")]).enter().append("rect").attr("class","selection").attr("cursor",hp.selection).attr("fill","#777").attr("fill-opacity",.3).attr("stroke","#fff").attr("shape-rendering","crispEdges");var i=t.selectAll(".handle").data(n.handles,function(t){return t.type});i.exit().remove(),i.enter().append("rect").attr("class",function(t){return"handle handle--"+t.type}).attr("cursor",function(t){return hp[t.type]}),t.each(r).attr("fill","none").attr("pointer-events","all").style("-webkit-tap-highlight-color","rgba(0,0,0,0)").on("mousedown.brush touchstart.brush",a)}function r(){var t=ll(this),n=_e(this).selection;n?(t.selectAll(".selection").style("display",null).attr("x",n[0][0]).attr("y",n[0][1]).attr("width",n[1][0]-n[0][0]).attr("height",n[1][1]-n[0][1]),t.selectAll(".handle").style("display",null).attr("x",function(t){return"e"===t.type[t.type.length-1]?n[1][0]-h/2:n[0][0]-h/2}).attr("y",function(t){return"s"===t.type[0]?n[1][1]-h/2:n[0][1]-h/2}).attr("width",function(t){return"n"===t.type||"s"===t.type?n[1][0]-n[0][0]+h:h}).attr("height",function(t){return"e"===t.type||"w"===t.type?n[1][1]-n[0][1]+h:h})):t.selectAll(".selection,.handle").style("display","none").attr("x",null).attr("y",null).attr("width",null).attr("height",null)}function i(t,n){return t.__brush.emitter||new o(t,n)}function o(t,n){this.that=t,this.args=n,this.state=t.__brush,this.active=0}function a(){function e(){var t=Gf(E);!O||b||B||(Math.abs(t[0]-q[0])>Math.abs(t[1]-q[1])?B=!0:b=!0),q=t,m=!0,ip(),o()}function o(){var t;switch(w=q[0]-N[0],x=q[1]-N[1],M){case ap:case op:C&&(w=Math.max(T-l,Math.min(I-d,w)),h=l+w,g=d+w),Q&&(x=Math.max(Y-A,Math.min(S-y,x)),p=A+x,v=y+x);break;case up:C<0?(w=Math.max(T-l,Math.min(I-l,w)),h=l+w,g=d):C>0&&(w=Math.max(T-d,Math.min(I-d,w)),h=l,g=d+w),Q<0?(x=Math.max(Y-A,Math.min(S-A,x)),p=A+x,v=y):Q>0&&(x=Math.max(Y-y,Math.min(S-y,x)),p=A,v=y+x);break;case sp:C&&(h=Math.max(T,Math.min(I,l-w*C)),g=Math.max(T,Math.min(I,d+w*C))),Q&&(p=Math.max(Y,Math.min(S,A-x*Q)),v=Math.max(Y,Math.min(S,y+x*Q)))}g<h&&(C*=-1,t=l,l=d,d=t,t=h,h=g,g=t,_ in Ap&&D.attr("cursor",hp[_=Ap[_]])),v<p&&(Q*=-1,t=A,A=y,y=t,t=p,p=v,v=t,_ in pp&&D.attr("cursor",hp[_=pp[_]])),G.selection&&(k=G.selection),b&&(h=k[0][0],g=k[1][0]),B&&(p=k[0][1],v=k[1][1]),k[0][0]===h&&k[0][1]===p&&k[1][0]===g&&k[1][1]===v||(G.selection=[[h,p],[g,v]],r.call(E),P.brush())}function a(){if(me(),t.event.touches){if(t.event.touches.length)return;s&&clearTimeout(s),s=setTimeout(function(){s=null},500),j.on("touchmove.brush touchend.brush touchcancel.brush",null)}else gt(t.event.view,m),z.on("keydown.brush keyup.brush mousemove.brush mouseup.brush",null);j.attr("pointer-events","all"),D.attr("cursor",hp.overlay),G.selection&&(k=G.selection),Me(k)&&(G.selection=null,r.call(E)),P.end()}function u(){switch(t.event.keyCode){case 16:O=C&&Q;break;case 18:M===up&&(C&&(d=g-w*C,l=h+w*C),Q&&(y=v-x*Q,A=p+x*Q),M=sp,o());break;case 32:M!==up&&M!==sp||(C<0?d=g-w:C>0&&(l=h-w),Q<0?y=v-x:Q>0&&(A=p-x),M=ap,D.attr("cursor",hp.selection),o());break;default:return}ip()}function c(){switch(t.event.keyCode){case 16:O&&(b=B=O=!1,o());break;case 18:M===sp&&(C<0?d=g:C>0&&(l=h),Q<0?y=v:Q>0&&(A=p),M=up,o());break;case 32:M===ap&&(t.event.altKey?(C&&(d=g-w*C,l=h+w*C),Q&&(y=v-x*Q,A=p+x*Q),M=sp):(C<0?d=g:C>0&&(l=h),Q<0?y=v:Q>0&&(A=p),M=up),D.attr("cursor",hp[_]),o());break;default:return}ip()}if(t.event.touches){if(t.event.changedTouches.length<t.event.touches.length)return ip()}else if(s)return;if(f.apply(this,arguments)){var l,h,A,p,d,g,y,v,w,x,m,b,B,E=this,_=t.event.target.__data__.type,M="selection"===(t.event.metaKey?_="overlay":_)?op:t.event.altKey?sp:up,C=n===fp?null:dp[_],Q=n===cp?null:gp[_],G=_e(E),H=G.extent,k=G.selection,T=H[0][0],Y=H[0][1],I=H[1][0],S=H[1][1],O=C&&Q&&t.event.shiftKey,N=Gf(E),q=N,P=i(E,arguments).beforestart();"overlay"===_?G.selection=k=[[l=n===fp?T:N[0],A=n===cp?Y:N[1]],[d=n===fp?I:l,y=n===cp?S:A]]:(l=k[0][0],A=k[0][1],d=k[1][0],y=k[1][1]),h=l,p=A,g=d,v=y;var j=ll(E).attr("pointer-events","none"),D=j.selectAll(".overlay").attr("cursor",hp[_]);if(t.event.touches)j.on("touchmove.brush",e,!0).on("touchend.brush touchcancel.brush",a,!0);else{var z=ll(t.event.view).on("keydown.brush",u,!0).on("keyup.brush",c,!0).on("mousemove.brush",e,!0).on("mouseup.brush",a,!0);gl(t.event.view)}me(),rA(E),r.call(E),P.start()}}function u(){var t=this.__brush||{selection:null};return t.extent=c.apply(this,arguments),t.dim=n,t}var s,c=Ee,f=Be,l=A(e,"start","brush","end"),h=6;return e.move=function(t,e){t.selection?t.on("start.brush",function(){i(this,arguments).beforestart().start()}).on("interrupt.brush end.brush",function(){i(this,arguments).end()}).tween("brush",function(){function t(t){a.selection=1===t&&Me(c)?null:f(t),r.call(o),u.brush()}var o=this,a=o.__brush,u=i(o,arguments),s=a.selection,c=n.input("function"==typeof e?e.apply(this,arguments):e,a.extent),f=yh(s,c);return s&&c?t:t(1)}):t.each(function(){var t=this,o=arguments,a=t.__brush,u=n.input("function"==typeof e?e.apply(t,o):e,a.extent),s=i(t,o).beforestart();rA(t),a.selection=null==u||Me(u)?null:u,r.call(t),s.start().brush().end()})},o.prototype={beforestart:function(){return 1===++this.active&&(this.state.emitter=this,this.starting=!0),this},start:function(){return this.starting&&(this.starting=!1,this.emit("start")),this},brush:function(){return this.emit("brush"),this},end:function(){return 0===--this.active&&(delete this.state.emitter,this.emit("end")),this},emit:function(t){C(new rp(e,t,n.output(this.state.selection)),l.apply,l,[t,this.that,this.args])}},e.extent=function(t){return arguments.length?(c="function"==typeof t?t:ep([[+t[0][0],+t[0][1]],[+t[1][0],+t[1][1]]]),e):c},e.filter=function(t){return arguments.length?(f="function"==typeof t?t:ep(!!t),e):f},e.handleSize=function(t){return arguments.length?(h=+t,e):h},e.on=function(){var t=l.on.apply(l,arguments);return t===l?e:t},e}function ke(t){return function(n,e){return t(n.source.value+n.target.value,e.source.value+e.target.value)}}function Te(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function Ye(){return new Te}function Ie(t){return t.source}function Se(t){return t.target}function Oe(t){return t.radius}function Ne(t){return t.startAngle}function qe(t){return t.endAngle}function Pe(){}function je(t,n){var e=new Pe;if(t instanceof Pe)t.each(function(t,n){e.set(n,t)});else if(Array.isArray(t)){var r,i=-1,o=t.length;if(null==n)for(;++i<o;)e.set(i,t[i]);else for(;++i<o;)e.set(n(r=t[i],i,t),r)}else if(t)for(var a in t)e.set(a,t[a]);return e}function De(){return{}}function ze(t,n,e){t[n]=e}function Le(){return je()}function Ke(t,n,e){t.set(n,e)}function Ue(){}function Re(t,n){var e=new Ue;if(t instanceof Ue)t.each(function(t){e.add(t)});else if(t){var r=-1,i=t.length;if(null==n)for(;++r<i;)e.add(t[r]);else for(;++r<i;)e.add(n(t[r],r,t))}return e}function Fe(t){return new Function("d","return {"+t.map(function(t,n){return JSON.stringify(t)+": d["+n+"]"}).join(",")+"}")}function Je(t,n){var e=Fe(t);return function(r,i){return n(e(r),i,t)}}function We(t){var n=Object.create(null),e=[];return t.forEach(function(t){for(var r in t)r in n||e.push(n[r]=r)}),e}function Ze(t,n,e,r){if(isNaN(n)||isNaN(e))return t;var i,o,a,u,s,c,f,l,h,A=t._root,p={data:r},d=t._x0,g=t._y0,y=t._x1,v=t._y1;if(!A)return t._root=p,t;for(;A.length;)if((c=n>=(o=(d+y)/2))?d=o:y=o,(f=e>=(a=(g+v)/2))?g=a:v=a,i=A,!(A=A[l=f<<1|c]))return i[l]=p,t;if(u=+t._x.call(null,A.data),s=+t._y.call(null,A.data),n===u&&e===s)return p.next=A,i?i[l]=p:t._root=p,t;do i=i?i[l]=new Array(4):t._root=new Array(4),(c=n>=(o=(d+y)/2))?d=o:y=o,(f=e>=(a=(g+v)/2))?g=a:v=a;while((l=f<<1|c)===(h=(s>=a)<<1|u>=o));return i[h]=A,i[l]=p,t}function Xe(t){var n,e,r,i,o=t.length,a=new Array(o),u=new Array(o),s=1/0,c=1/0,f=-(1/0),l=-(1/0);for(e=0;e<o;++e)isNaN(r=+this._x.call(null,n=t[e]))||isNaN(i=+this._y.call(null,n))||(a[e]=r,u[e]=i,r<s&&(s=r),r>f&&(f=r),i<c&&(c=i),i>l&&(l=i));for(f<s&&(s=this._x0,f=this._x1),l<c&&(c=this._y0,l=this._y1),this.cover(s,c).cover(f,l),e=0;e<o;++e)Ze(this,a[e],u[e],t[e]);return this}function Ve(t){for(var n=0,e=t.length;n<e;++n)this.remove(t[n]);return this}function $e(t){return t[0]}function tr(t){return t[1]}function nr(t,n,e){var r=new er(null==n?$e:n,null==e?tr:e,NaN,NaN,NaN,NaN);return null==t?r:r.addAll(t)}function er(t,n,e,r,i,o){this._x=t,this._y=n,this._x0=e,this._y0=r,
this._x1=i,this._y1=o,this._root=void 0}function rr(t){for(var n={data:t.data},e=n;t=t.next;)e=e.next={data:t.data};return n}function ir(t){return t.x+t.vx}function or(t){return t.y+t.vy}function ar(t){return t.index}function ur(t,n){var e=t.get(n);if(!e)throw new Error("missing: "+n);return e}function sr(t){return t.x}function cr(t){return t.y}function fr(t){if(!(n=Qd.exec(t)))throw new Error("invalid format: "+t);var n,e=n[1]||" ",r=n[2]||">",i=n[3]||"-",o=n[4]||"",a=!!n[5],u=n[6]&&+n[6],s=!!n[7],c=n[8]&&+n[8].slice(1),f=n[9]||"";"n"===f?(s=!0,f="g"):Cd[f]||(f=""),(a||"0"===e&&"="===r)&&(a=!0,e="0",r="="),this.fill=e,this.align=r,this.sign=i,this.symbol=o,this.zero=a,this.width=u,this.comma=s,this.precision=c,this.type=f}function lr(t){return t}function hr(n){return Hd=Td(n),t.format=Hd.format,t.formatPrefix=Hd.formatPrefix,Hd}function Ar(){this.reset()}function pr(t,n,e){var r=t.s=n+e,i=r-n,o=r-i;t.t=n-o+(e-i)}function dr(t){return t>1?0:t<-1?yg:Math.acos(t)}function gr(t){return t>1?vg:t<-1?-vg:Math.asin(t)}function yr(t){return(t=kg(t/2))*t}function vr(){}function wr(t,n){t&&Og.hasOwnProperty(t.type)&&Og[t.type](t,n)}function xr(t,n,e){var r,i=-1,o=t.length-e;for(n.lineStart();++i<o;)r=t[i],n.point(r[0],r[1],r[2]);n.lineEnd()}function mr(t,n){var e=-1,r=t.length;for(n.polygonStart();++e<r;)xr(t[e],n,1);n.polygonEnd()}function br(){jg.point=Er}function Br(){_r(Nd,qd)}function Er(t,n){jg.point=_r,Nd=t,qd=n,t*=bg,n*=bg,Pd=t,jd=Mg(n=n/2+wg),Dd=kg(n)}function _r(t,n){t*=bg,n*=bg,n=n/2+wg;var e=t-Pd,r=e>=0?1:-1,i=r*e,o=Mg(n),a=kg(n),u=Dd*a,s=jd*o+u*Mg(i),c=u*r*kg(i);qg.add(_g(c,s)),Pd=t,jd=o,Dd=a}function Mr(t){return[_g(t[1],t[0]),gr(t[2])]}function Cr(t){var n=t[0],e=t[1],r=Mg(e);return[r*Mg(n),r*kg(n),kg(e)]}function Qr(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]}function Gr(t,n){return[t[1]*n[2]-t[2]*n[1],t[2]*n[0]-t[0]*n[2],t[0]*n[1]-t[1]*n[0]]}function Hr(t,n){t[0]+=n[0],t[1]+=n[1],t[2]+=n[2]}function kr(t,n){return[t[0]*n,t[1]*n,t[2]*n]}function Tr(t){var n=Yg(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]/=n,t[1]/=n,t[2]/=n}function Yr(t,n){Zd.push(Xd=[zd=t,Kd=t]),n<Ld&&(Ld=n),n>Ud&&(Ud=n)}function Ir(t,n){var e=Cr([t*bg,n*bg]);if(Wd){var r=Gr(Wd,e),i=[r[1],-r[0],0],o=Gr(i,r);Tr(o),o=Mr(o);var a,u=t-Rd,s=u>0?1:-1,c=o[0]*mg*s,f=Bg(u)>180;f^(s*Rd<c&&c<s*t)?(a=o[1]*mg,a>Ud&&(Ud=a)):(c=(c+360)%360-180,f^(s*Rd<c&&c<s*t)?(a=-o[1]*mg,a<Ld&&(Ld=a)):(n<Ld&&(Ld=n),n>Ud&&(Ud=n))),f?t<Rd?jr(zd,t)>jr(zd,Kd)&&(Kd=t):jr(t,Kd)>jr(zd,Kd)&&(zd=t):Kd>=zd?(t<zd&&(zd=t),t>Kd&&(Kd=t)):t>Rd?jr(zd,t)>jr(zd,Kd)&&(Kd=t):jr(t,Kd)>jr(zd,Kd)&&(zd=t)}else Yr(t,n);Wd=e,Rd=t}function Sr(){Lg.point=Ir}function Or(){Xd[0]=zd,Xd[1]=Kd,Lg.point=Yr,Wd=null}function Nr(t,n){if(Wd){var e=t-Rd;zg.add(Bg(e)>180?e+(e>0?360:-360):e)}else Fd=t,Jd=n;jg.point(t,n),Ir(t,n)}function qr(){jg.lineStart()}function Pr(){Nr(Fd,Jd),jg.lineEnd(),Bg(zg)>dg&&(zd=-(Kd=180)),Xd[0]=zd,Xd[1]=Kd,Wd=null}function jr(t,n){return(n-=t)<0?n+360:n}function Dr(t,n){return t[0]-n[0]}function zr(t,n){return t[0]<=t[1]?t[0]<=n&&n<=t[1]:n<t[0]||t[1]<n}function Lr(t,n){t*=bg,n*=bg;var e=Mg(n);Kr(e*Mg(t),e*kg(t),kg(n))}function Kr(t,n,e){++Vd,tg+=(t-tg)/Vd,ng+=(n-ng)/Vd,eg+=(e-eg)/Vd}function Ur(){Ug.point=Rr}function Rr(t,n){t*=bg,n*=bg;var e=Mg(n);lg=e*Mg(t),hg=e*kg(t),Ag=kg(n),Ug.point=Fr,Kr(lg,hg,Ag)}function Fr(t,n){t*=bg,n*=bg;var e=Mg(n),r=e*Mg(t),i=e*kg(t),o=kg(n),a=_g(Yg((a=hg*o-Ag*i)*a+(a=Ag*r-lg*o)*a+(a=lg*i-hg*r)*a),lg*r+hg*i+Ag*o);$d+=a,rg+=a*(lg+(lg=r)),ig+=a*(hg+(hg=i)),og+=a*(Ag+(Ag=o)),Kr(lg,hg,Ag)}function Jr(){Ug.point=Lr}function Wr(){Ug.point=Xr}function Zr(){Vr(cg,fg),Ug.point=Lr}function Xr(t,n){cg=t,fg=n,t*=bg,n*=bg,Ug.point=Vr;var e=Mg(n);lg=e*Mg(t),hg=e*kg(t),Ag=kg(n),Kr(lg,hg,Ag)}function Vr(t,n){t*=bg,n*=bg;var e=Mg(n),r=e*Mg(t),i=e*kg(t),o=kg(n),a=hg*o-Ag*i,u=Ag*r-lg*o,s=lg*i-hg*r,c=Yg(a*a+u*u+s*s),f=lg*r+hg*i+Ag*o,l=c&&-dr(f)/c,h=_g(c,f);ag+=l*a,ug+=l*u,sg+=l*s,$d+=h,rg+=h*(lg+(lg=r)),ig+=h*(hg+(hg=i)),og+=h*(Ag+(Ag=o)),Kr(lg,hg,Ag)}function $r(t,n){return[t>yg?t-xg:t<-yg?t+xg:t,n]}function ti(t,n,e){return(t%=xg)?n||e?Jg(ei(t),ri(n,e)):ei(t):n||e?ri(n,e):$r}function ni(t){return function(n,e){return n+=t,[n>yg?n-xg:n<-yg?n+xg:n,e]}}function ei(t){var n=ni(t);return n.invert=ni(-t),n}function ri(t,n){function e(t,n){var e=Mg(n),u=Mg(t)*e,s=kg(t)*e,c=kg(n),f=c*r+u*i;return[_g(s*o-f*a,u*r-c*i),gr(f*o+s*a)]}var r=Mg(t),i=kg(t),o=Mg(n),a=kg(n);return e.invert=function(t,n){var e=Mg(n),u=Mg(t)*e,s=kg(t)*e,c=kg(n),f=c*o-s*a;return[_g(s*o+c*a,u*r+f*i),gr(f*r-u*i)]},e}function ii(t,n,e,r,i,o){if(e){var a=Mg(n),u=kg(n),s=r*e;null==i?(i=n+r*xg,o=n-s/2):(i=oi(a,i),o=oi(a,o),(r>0?i<o:i>o)&&(i+=r*xg));for(var c,f=i;r>0?f>o:f<o;f-=s)c=Mr([a,-u*Mg(f),-u*kg(f)]),t.point(c[0],c[1])}}function oi(t,n){n=Cr(n),n[0]-=t,Tr(n);var e=dr(-n[1]);return((-n[2]<0?-e:e)+xg-dg)%xg}function ai(t,n,e,r){this.x=t,this.z=n,this.o=e,this.e=r,this.v=!1,this.n=this.p=null}function ui(t){if(n=t.length){for(var n,e,r=0,i=t[0];++r<n;)i.n=e=t[r],e.p=i,i=e;i.n=e=t[0],e.p=i}}function si(t,n,e,r){function i(i,o){return t<=i&&i<=e&&n<=o&&o<=r}function o(i,o,u,c){var f=0,l=0;if(null==i||(f=a(i,u))!==(l=a(o,u))||s(i,o)<0^u>0){do c.point(0===f||3===f?t:e,f>1?r:n);while((f=(f+u+4)%4)!==l)}else c.point(o[0],o[1])}function a(r,i){return Bg(r[0]-t)<dg?i>0?0:3:Bg(r[0]-e)<dg?i>0?2:1:Bg(r[1]-n)<dg?i>0?1:0:i>0?3:2}function u(t,n){return s(t.x,n.x)}function s(t,n){var e=a(t,1),r=a(n,1);return e!==r?e-r:0===e?n[1]-t[1]:1===e?t[0]-n[0]:2===e?t[1]-n[1]:n[0]-t[0]}return function(a){function s(t,n){i(t,n)&&M.point(t,n)}function c(){for(var n=0,e=0,i=g.length;e<i;++e)for(var o,a,u=g[e],s=1,c=u.length,f=u[0],l=f[0],h=f[1];s<c;++s)o=l,a=h,f=u[s],l=f[0],h=f[1],a<=r?h>r&&(l-o)*(r-a)>(h-a)*(t-o)&&++n:h<=r&&(l-o)*(r-a)<(h-a)*(t-o)&&--n;return n}function f(){M=C,d=[],g=[],_=!0}function l(){var t=c(),n=_&&t,e=(d=Xc(d)).length;(n||e)&&(a.polygonStart(),n&&(a.lineStart(),o(null,null,1,a),a.lineEnd()),e&&ly(d,u,t,o,a),a.polygonEnd()),M=a,d=g=y=null}function h(){Q.point=p,g&&g.push(y=[]),E=!0,B=!1,m=b=NaN}function A(){d&&(p(v,w),x&&B&&C.rejoin(),d.push(C.result())),Q.point=s,B&&M.lineEnd()}function p(o,a){var u=i(o,a);if(g&&y.push([o,a]),E)v=o,w=a,x=u,E=!1,u&&(M.lineStart(),M.point(o,a));else if(u&&B)M.point(o,a);else{var s=[m=Math.max(Ay,Math.min(hy,m)),b=Math.max(Ay,Math.min(hy,b))],c=[o=Math.max(Ay,Math.min(hy,o)),a=Math.max(Ay,Math.min(hy,a))];cy(s,c,t,n,e,r)?(B||(M.lineStart(),M.point(s[0],s[1])),M.point(c[0],c[1]),u||M.lineEnd(),_=!1):u&&(M.lineStart(),M.point(o,a),_=!1)}m=o,b=a,B=u}var d,g,y,v,w,x,m,b,B,E,_,M=a,C=sy(),Q={point:s,lineStart:h,lineEnd:A,polygonStart:f,polygonEnd:l};return Q}}function ci(){gy.point=li,gy.lineEnd=fi}function fi(){gy.point=gy.lineEnd=vr}function li(t,n){t*=bg,n*=bg,Wg=t,Zg=kg(n),Xg=Mg(n),gy.point=hi}function hi(t,n){t*=bg,n*=bg;var e=kg(n),r=Mg(n),i=Bg(t-Wg),o=Mg(i),a=kg(i),u=r*a,s=Xg*e-Zg*r*o,c=Zg*e+Xg*r*o;dy.add(_g(Yg(u*u+s*s),c)),Wg=t,Zg=e,Xg=r}function Ai(t,n,e){var r=qc(t,n-dg,e).concat(n);return function(t){return r.map(function(n){return[t,n]})}}function pi(t,n,e){var r=qc(t,n-dg,e).concat(n);return function(t){return r.map(function(n){return[n,t]})}}function di(){function t(){return{type:"MultiLineString",coordinates:n()}}function n(){return qc(Cg(o/g)*g,i,g).map(h).concat(qc(Cg(c/y)*y,s,y).map(A)).concat(qc(Cg(r/p)*p,e,p).filter(function(t){return Bg(t%g)>dg}).map(f)).concat(qc(Cg(u/d)*d,a,d).filter(function(t){return Bg(t%y)>dg}).map(l))}var e,r,i,o,a,u,s,c,f,l,h,A,p=10,d=p,g=90,y=360,v=2.5;return t.lines=function(){return n().map(function(t){return{type:"LineString",coordinates:t}})},t.outline=function(){return{type:"Polygon",coordinates:[h(o).concat(A(s).slice(1),h(i).reverse().slice(1),A(c).reverse().slice(1))]}},t.extent=function(n){return arguments.length?t.extentMajor(n).extentMinor(n):t.extentMinor()},t.extentMajor=function(n){return arguments.length?(o=+n[0][0],i=+n[1][0],c=+n[0][1],s=+n[1][1],o>i&&(n=o,o=i,i=n),c>s&&(n=c,c=s,s=n),t.precision(v)):[[o,c],[i,s]]},t.extentMinor=function(n){return arguments.length?(r=+n[0][0],e=+n[1][0],u=+n[0][1],a=+n[1][1],r>e&&(n=r,r=e,e=n),u>a&&(n=u,u=a,a=n),t.precision(v)):[[r,u],[e,a]]},t.step=function(n){return arguments.length?t.stepMajor(n).stepMinor(n):t.stepMinor()},t.stepMajor=function(n){return arguments.length?(g=+n[0],y=+n[1],t):[g,y]},t.stepMinor=function(n){return arguments.length?(p=+n[0],d=+n[1],t):[p,d]},t.precision=function(n){return arguments.length?(v=+n,f=Ai(u,a,90),l=pi(r,e,v),h=Ai(c,s,90),A=pi(o,i,v),t):v},t.extentMajor([[-180,-90+dg],[180,90-dg]]).extentMinor([[-180,-80-dg],[180,80+dg]])}function gi(){return di()()}function yi(){_y.point=vi}function vi(t,n){_y.point=wi,Vg=ty=t,$g=ny=n}function wi(t,n){Ey.add(ny*t-ty*n),ty=t,ny=n}function xi(){wi(Vg,$g)}function mi(t,n){t<My&&(My=t),t>Qy&&(Qy=t),n<Cy&&(Cy=n),n>Gy&&(Gy=n)}function bi(t,n){ky+=t,Ty+=n,++Yy}function Bi(){jy.point=Ei}function Ei(t,n){jy.point=_i,bi(iy=t,oy=n)}function _i(t,n){var e=t-iy,r=n-oy,i=Yg(e*e+r*r);Iy+=i*(iy+t)/2,Sy+=i*(oy+n)/2,Oy+=i,bi(iy=t,oy=n)}function Mi(){jy.point=bi}function Ci(){jy.point=Gi}function Qi(){Hi(ey,ry)}function Gi(t,n){jy.point=Hi,bi(ey=iy=t,ry=oy=n)}function Hi(t,n){var e=t-iy,r=n-oy,i=Yg(e*e+r*r);Iy+=i*(iy+t)/2,Sy+=i*(oy+n)/2,Oy+=i,i=oy*t-iy*n,Ny+=i*(iy+t),qy+=i*(oy+n),Py+=3*i,bi(iy=t,oy=n)}function ki(t){this._context=t}function Ti(){this._string=[]}function Yi(t){return"m0,"+t+"a"+t+","+t+" 0 1,1 0,"+-2*t+"a"+t+","+t+" 0 1,1 0,"+2*t+"z"}function Ii(t){return t.length>1}function Si(t,n){return((t=t.x)[0]<0?t[1]-vg-dg:vg-t[1])-((n=n.x)[0]<0?n[1]-vg-dg:vg-n[1])}function Oi(t){var n,e=NaN,r=NaN,i=NaN;return{lineStart:function(){t.lineStart(),n=1},point:function(o,a){var u=o>0?yg:-yg,s=Bg(o-e);Bg(s-yg)<dg?(t.point(e,r=(r+a)/2>0?vg:-vg),t.point(i,r),t.lineEnd(),t.lineStart(),t.point(u,r),t.point(o,r),n=0):i!==u&&s>=yg&&(Bg(e-i)<dg&&(e-=i*dg),Bg(o-u)<dg&&(o-=u*dg),r=Ni(e,r,o,a),t.point(i,r),t.lineEnd(),t.lineStart(),t.point(u,r),n=0),t.point(e=o,r=a),i=u},lineEnd:function(){t.lineEnd(),e=r=NaN},clean:function(){return 2-n}}}function Ni(t,n,e,r){var i,o,a=kg(t-e);return Bg(a)>dg?Eg((kg(n)*(o=Mg(r))*kg(e)-kg(r)*(i=Mg(n))*kg(t))/(i*o*a)):(n+r)/2}function qi(t,n,e,r){var i;if(null==t)i=e*vg,r.point(-yg,i),r.point(0,i),r.point(yg,i),r.point(yg,0),r.point(yg,-i),r.point(0,-i),r.point(-yg,-i),r.point(-yg,0),r.point(-yg,i);else if(Bg(t[0]-n[0])>dg){var o=t[0]<n[0]?yg:-yg;i=e*o/2,r.point(-o,i),r.point(0,i),r.point(o,i)}else r.point(n[0],n[1])}function Pi(t){return function(n){var e=new ji;for(var r in t)e[r]=t[r];return e.stream=n,e}}function ji(){}function Di(t,n,e){var r=n[1][0]-n[0][0],i=n[1][1]-n[0][1],o=t.clipExtent&&t.clipExtent();t.scale(150).translate([0,0]),null!=o&&t.clipExtent(null),Ng(e,t.stream(Hy));var a=Hy.result(),u=Math.min(r/(a[1][0]-a[0][0]),i/(a[1][1]-a[0][1])),s=+n[0][0]+(r-u*(a[1][0]+a[0][0]))/2,c=+n[0][1]+(i-u*(a[1][1]+a[0][1]))/2;return null!=o&&t.clipExtent(o),t.scale(150*u).translate([s,c])}function zi(t,n,e){return Di(t,[[0,0],n],e)}function Li(t){return Pi({point:function(n,e){n=t(n,e),this.stream.point(n[0],n[1])}})}function Ki(t,n){function e(r,i,o,a,u,s,c,f,l,h,A,p,d,g){var y=c-r,v=f-i,w=y*y+v*v;if(w>4*n&&d--){var x=a+h,m=u+A,b=s+p,B=Yg(x*x+m*m+b*b),E=gr(b/=B),_=Bg(Bg(b)-1)<dg||Bg(o-l)<dg?(o+l)/2:_g(m,x),M=t(_,E),C=M[0],Q=M[1],G=C-r,H=Q-i,k=v*G-y*H;(k*k/w>n||Bg((y*G+v*H)/w-.5)>.3||a*h+u*A+s*p<Wy)&&(e(r,i,o,a,u,s,C,Q,_,x/=B,m/=B,b,d,g),g.point(C,Q),e(C,Q,_,x,m,b,c,f,l,h,A,p,d,g))}}return function(n){function r(e,r){e=t(e,r),n.point(e[0],e[1])}function i(){y=NaN,b.point=o,n.lineStart()}function o(r,i){var o=Cr([r,i]),a=t(r,i);e(y,v,g,w,x,m,y=a[0],v=a[1],g=r,w=o[0],x=o[1],m=o[2],Jy,n),n.point(y,v)}function a(){b.point=r,n.lineEnd()}function u(){i(),b.point=s,b.lineEnd=c}function s(t,n){o(f=t,n),l=y,h=v,A=w,p=x,d=m,b.point=o}function c(){e(y,v,g,w,x,m,l,h,f,A,p,d,Jy,n),b.lineEnd=a,a()}var f,l,h,A,p,d,g,y,v,w,x,m,b={point:r,lineStart:i,lineEnd:a,polygonStart:function(){n.polygonStart(),b.lineStart=u},polygonEnd:function(){n.polygonEnd(),b.lineStart=i}};return b}}function Ui(t){return Ri(function(){return t})()}function Ri(t){function n(t){return t=f(t[0]*bg,t[1]*bg),[t[0]*g+u,s-t[1]*g]}function e(t){return t=f.invert((t[0]-u)/g,(s-t[1])/g),t&&[t[0]*mg,t[1]*mg]}function r(t,n){return t=a(t,n),[t[0]*g+u,s-t[1]*g]}function i(){f=Jg(c=ti(m,b,B),a);var t=a(w,x);return u=y-t[0]*g,s=v+t[1]*g,o()}function o(){return p=d=null,n}var a,u,s,c,f,l,h,A,p,d,g=150,y=480,v=250,w=0,x=0,m=0,b=0,B=0,E=null,_=Uy,M=null,C=by,Q=.5,G=Zy(r,Q);return n.stream=function(t){return p&&d===t?p:p=Xy(_(c,G(C(d=t))))},n.clipAngle=function(t){return arguments.length?(_=+t?Ry(E=t*bg,6*bg):(E=null,Uy),o()):E*mg},n.clipExtent=function(t){return arguments.length?(C=null==t?(M=l=h=A=null,by):si(M=+t[0][0],l=+t[0][1],h=+t[1][0],A=+t[1][1]),o()):null==M?null:[[M,l],[h,A]]},n.scale=function(t){return arguments.length?(g=+t,i()):g},n.translate=function(t){return arguments.length?(y=+t[0],v=+t[1],i()):[y,v]},n.center=function(t){return arguments.length?(w=t[0]%360*bg,x=t[1]%360*bg,i()):[w*mg,x*mg]},n.rotate=function(t){return arguments.length?(m=t[0]%360*bg,b=t[1]%360*bg,B=t.length>2?t[2]%360*bg:0,i()):[m*mg,b*mg,B*mg]},n.precision=function(t){return arguments.length?(G=Zy(r,Q=t*t),o()):Yg(Q)},n.fitExtent=function(t,e){return Di(n,t,e)},n.fitSize=function(t,e){return zi(n,t,e)},function(){return a=t.apply(this,arguments),n.invert=a.invert&&e,i()}}function Fi(t){var n=0,e=yg/3,r=Ri(t),i=r(n,e);return i.parallels=function(t){return arguments.length?r(n=t[0]*bg,e=t[1]*bg):[n*mg,e*mg]},i}function Ji(t){function n(t,n){return[t*e,kg(n)/e]}var e=Mg(t);return n.invert=function(t,n){return[t/e,gr(n*e)]},n}function Wi(t,n){function e(t,n){var e=Yg(o-2*i*kg(n))/i;return[e*kg(t*=i),a-e*Mg(t)]}var r=kg(t),i=(r+kg(n))/2;if(Bg(i)<dg)return Ji(t);var o=1+r*(2*i-r),a=Yg(o)/i;return e.invert=function(t,n){var e=a-n;return[_g(t,Bg(e))/i*Tg(e),gr((o-(t*t+e*e)*i*i)/(2*i))]},e}function Zi(t){var n=t.length;return{point:function(e,r){for(var i=-1;++i<n;)t[i].point(e,r)},sphere:function(){for(var e=-1;++e<n;)t[e].sphere()},lineStart:function(){for(var e=-1;++e<n;)t[e].lineStart()},lineEnd:function(){for(var e=-1;++e<n;)t[e].lineEnd()},polygonStart:function(){for(var e=-1;++e<n;)t[e].polygonStart()},polygonEnd:function(){for(var e=-1;++e<n;)t[e].polygonEnd()}}}function Xi(t){return function(n,e){var r=Mg(n),i=Mg(e),o=t(r*i);return[o*i*kg(n),o*kg(e)]}}function Vi(t){return function(n,e){var r=Yg(n*n+e*e),i=t(r),o=kg(i),a=Mg(i);return[_g(n*o,r*a),gr(r&&e*o/r)]}}function $i(t,n){return[t,Gg(Ig((vg+n)/2))]}function to(t){var n,e=Ui(t),r=e.scale,i=e.translate,o=e.clipExtent;return e.scale=function(t){return arguments.length?(r(t),n&&e.clipExtent(null),e):r()},e.translate=function(t){return arguments.length?(i(t),n&&e.clipExtent(null),e):i()},e.clipExtent=function(t){if(!arguments.length)return n?null:o();if(n=null==t){var a=yg*r(),u=i();t=[[u[0]-a,u[1]-a],[u[0]+a,u[1]+a]]}return o(t),e},e.clipExtent(null)}function no(t){return Ig((vg+t)/2)}function eo(t,n){function e(t,n){o>0?n<-vg+dg&&(n=-vg+dg):n>vg-dg&&(n=vg-dg);var e=o/Hg(no(n),i);return[e*kg(i*t),o-e*Mg(i*t)]}var r=Mg(t),i=t===n?kg(t):Gg(r/Mg(n))/Gg(no(n)/no(t)),o=r*Hg(no(t),i)/i;return i?(e.invert=function(t,n){var e=o-n,r=Tg(i)*Yg(t*t+e*e);return[_g(t,Bg(e))/i*Tg(e),2*Eg(Hg(o/r,1/i))-vg]},e):$i}function ro(t,n){return[t,n]}function io(t,n){function e(t,n){var e=o-n,r=i*t;return[e*kg(r),o-e*Mg(r)]}var r=Mg(t),i=t===n?kg(t):(r-Mg(n))/(n-t),o=r/i+t;return Bg(i)<dg?ro:(e.invert=function(t,n){var e=o-n;return[_g(t,Bg(e))/i*Tg(e),o-Tg(i)*Yg(t*t+e*e)]},e)}function oo(t,n){var e=Mg(n),r=Mg(t)*e;return[e*kg(t)/r,kg(n)/r]}function ao(t,n,e,r){return 1===t&&1===n&&0===e&&0===r?by:Pi({point:function(i,o){this.stream.point(i*t+e,o*n+r)}})}function uo(t,n){return[Mg(n)*kg(t),kg(n)]}function so(t,n){var e=Mg(n),r=1+Mg(t)*e;return[e*kg(t)/r,kg(n)/r]}function co(t,n){return[Gg(Ig((vg+n)/2)),-t]}function fo(t,n){return t.parent===n.parent?1:2}function lo(t){return t.reduce(ho,0)/t.length}function ho(t,n){return t+n.x}function Ao(t){return 1+t.reduce(po,0)}function po(t,n){return Math.max(t,n.y)}function go(t){for(var n;n=t.children;)t=n[0];return t}function yo(t){for(var n;n=t.children;)t=n[n.length-1];return t}function vo(t,n){if(t===n)return t;var e=t.ancestors(),r=n.ancestors(),i=null;for(t=e.pop(),n=r.pop();t===n;)i=t,t=e.pop(),n=r.pop();return i}function wo(t,n){var e,r,i,o,a,u=new Eo(t),s=+t.value&&(u.value=t.value),c=[u];for(null==n&&(n=mo);e=c.pop();)if(s&&(e.value=+e.data.value),(i=n(e.data))&&(a=i.length))for(e.children=new Array(a),o=a-1;o>=0;--o)c.push(r=e.children[o]=new Eo(i[o])),r.parent=e,r.depth=e.depth+1;return u.eachBefore(Bo)}function xo(){return wo(this).eachBefore(bo)}function mo(t){return t.children}function bo(t){t.data=t.data.data}function Bo(t){var n=0;do t.height=n;while((t=t.parent)&&t.height<++n)}function Eo(t){this.data=t,this.depth=this.height=0,this.parent=null}function _o(t){this._=t,this.next=null}function Mo(t,n){var e=n.x-t.x,r=n.y-t.y,i=t.r-n.r;return i*i+1e-6>e*e+r*r}function Co(t,n){var e,r,i,o=null,a=t.head;switch(n.length){case 1:e=Qo(n[0]);break;case 2:e=Go(n[0],n[1]);break;case 3:e=Ho(n[0],n[1],n[2])}for(;a;)i=a._,r=a.next,e&&Mo(e,i)?o=a:(o?(t.tail=o,o.next=null):t.head=t.tail=null,n.push(i),e=Co(t,n),n.pop(),t.head?(a.next=t.head,t.head=a):(a.next=null,t.head=t.tail=a),o=t.tail,o.next=r),a=r;return t.tail=o,e}function Qo(t){return{x:t.x,y:t.y,r:t.r}}function Go(t,n){var e=t.x,r=t.y,i=t.r,o=n.x,a=n.y,u=n.r,s=o-e,c=a-r,f=u-i,l=Math.sqrt(s*s+c*c);return{x:(e+o+s/l*f)/2,y:(r+a+c/l*f)/2,r:(l+i+u)/2}}function Ho(t,n,e){var r=t.x,i=t.y,o=t.r,a=n.x,u=n.y,s=n.r,c=e.x,f=e.y,l=e.r,h=2*(r-a),A=2*(i-u),p=2*(s-o),d=r*r+i*i-o*o-a*a-u*u+s*s,g=2*(r-c),y=2*(i-f),v=2*(l-o),w=r*r+i*i-o*o-c*c-f*f+l*l,x=g*A-h*y,m=(A*w-y*d)/x-r,b=(y*p-A*v)/x,B=(g*d-h*w)/x-i,E=(h*v-g*p)/x,_=b*b+E*E-1,M=2*(m*b+B*E+o),C=m*m+B*B-o*o,Q=(-M-Math.sqrt(M*M-4*_*C))/(2*_);return{x:m+b*Q+r,y:B+E*Q+i,r:Q}}function ko(t,n,e){var r=t.x,i=t.y,o=n.r+e.r,a=t.r+e.r,u=n.x-r,s=n.y-i,c=u*u+s*s;if(c){var f=.5+((a*=a)-(o*=o))/(2*c),l=Math.sqrt(Math.max(0,2*o*(a+c)-(a-=c)*a-o*o))/(2*c);e.x=r+f*u+l*s,e.y=i+f*s-l*u}else e.x=r+a,e.y=i}function To(t,n){var e=n.x-t.x,r=n.y-t.y,i=t.r+n.r;return i*i>e*e+r*r}function Yo(t,n,e){var r=t.x-n,i=t.y-e;return r*r+i*i}function Io(t){this._=t,this.next=null,this.previous=null}function So(t){if(!(i=t.length))return 0;var n,e,r,i;if(n=t[0],n.x=0,n.y=0,!(i>1))return n.r;if(e=t[1],n.x=-e.r,e.x=n.r,e.y=0,!(i>2))return n.r+e.r;ko(e,n,r=t[2]);var o,a,u,s,c,f,l,h=n.r*n.r,A=e.r*e.r,p=r.r*r.r,d=h+A+p,g=h*n.x+A*e.x+p*r.x,y=h*n.y+A*e.y+p*r.y;n=new Io(n),e=new Io(e),r=new Io(r),n.next=r.previous=e,e.next=n.previous=r,r.next=e.previous=n;t:for(u=3;u<i;++u){if(ko(n._,e._,r=t[u]),r=new Io(r),(c=n.previous)===(s=e.next)){if(To(s._,r._)){n=e,e=s,--u;continue t}}else{f=s._.r,l=c._.r;do if(f<=l){if(To(s._,r._)){e=s,n.next=e,e.previous=n,--u;continue t}s=s.next,f+=s._.r}else{if(To(c._,r._)){n=c,n.next=e,e.previous=n,--u;continue t}c=c.previous,l+=c._.r}while(s!==c.next)}for(r.previous=n,r.next=e,n.next=e.previous=e=r,d+=p=r._.r*r._.r,g+=p*r._.x,y+=p*r._.y,h=Yo(n._,o=g/d,a=y/d);(r=r.next)!==e;)(p=Yo(r._,o,a))<h&&(n=r,h=p);e=n.next}for(n=[e._],r=e;(r=r.next)!==e;)n.push(r._);for(r=Mv(n),u=0;u<i;++u)n=t[u],n.x-=r.x,n.y-=r.y;return r.r}function Oo(t){return null==t?null:No(t)}function No(t){if("function"!=typeof t)throw new Error;return t}function qo(){return 0}function Po(t){return Math.sqrt(t.value)}function jo(t){return function(n){n.children||(n.r=Math.max(0,+t(n)||0))}}function Do(t,n){return function(e){if(r=e.children){var r,i,o,a=r.length,u=t(e)*n||0;if(u)for(i=0;i<a;++i)r[i].r+=u;if(o=So(r),u)for(i=0;i<a;++i)r[i].r-=u;e.r=o+u}}}function zo(t){return function(n){var e=n.parent;n.r*=t,e&&(n.x=e.x+t*n.x,n.y=e.y+t*n.y)}}function Lo(t){return t.id}function Ko(t){return t.parentId}function Uo(t,n){return t.parent===n.parent?1:2}function Ro(t){var n=t.children;return n?n[0]:t.t}function Fo(t){var n=t.children;return n?n[n.length-1]:t.t}function Jo(t,n,e){var r=e/(n.i-t.i);n.c-=r,n.s+=e,t.c+=r,n.z+=e,n.m+=e}function Wo(t){for(var n,e=0,r=0,i=t.children,o=i.length;--o>=0;)n=i[o],n.z+=e,n.m+=e,e+=n.s+(r+=n.c)}function Zo(t,n,e){return t.a.parent===n.parent?t.a:e}function Xo(t,n){this._=t,this.parent=null,this.children=null,this.A=null,this.a=this,this.z=0,this.m=0,this.c=0,this.s=0,this.t=null,this.i=n}function Vo(t){for(var n,e,r,i,o,a=new Xo(t,0),u=[a];n=u.pop();)if(r=n._.children)for(n.children=new Array(o=r.length),i=o-1;i>=0;--i)u.push(e=n.children[i]=new Xo(r[i],i)),e.parent=n;return(a.parent=new Xo(null,0)).children=[a],a}function $o(t,n,e,r,i,o){for(var a,u,s,c,f,l,h,A,p,d,g,y=[],v=n.children,w=0,x=0,m=v.length,b=n.value;w<m;){s=i-e,c=o-r;do f=v[x++].value;while(!f&&x<m);for(l=h=f,d=Math.max(c/s,s/c)/(b*t),g=f*f*d,p=Math.max(h/g,g/l);x<m;++x){if(f+=u=v[x].value,u<l&&(l=u),u>h&&(h=u),g=f*f*d,A=Math.max(h/g,g/l),A>p){f-=u;break}p=A}y.push(a={value:f,dice:s<c,children:v.slice(w,x)}),a.dice?kv(a,e,r,i,b?r+=c*f/b:o):qv(a,e,r,b?e+=s*f/b:i,o),b-=f,w=x}return y}function ta(t,n){return t[0]-n[0]||t[1]-n[1]}function na(t){for(var n=t.length,e=[0,1],r=2,i=2;i<n;++i){for(;r>1&&Fv(t[e[r-2]],t[e[r-1]],t[i])<=0;)--r;e[r++]=i}return e.slice(0,r)}function ea(t){if(!(t>=1))throw new Error;this._size=t,this._call=this._error=null,this._tasks=[],this._data=[],this._waiting=this._active=this._ended=this._start=0}function ra(t){if(!t._start)try{ia(t)}catch(n){if(t._tasks[t._ended+t._active-1])aa(t,n);else if(!t._data)throw n}}function ia(t){for(;t._start=t._waiting&&t._active<t._size;){var n=t._ended+t._active,e=t._tasks[n],r=e.length-1,i=e[r];e[r]=oa(t,n),--t._waiting,++t._active,e=i.apply(null,e),t._tasks[n]&&(t._tasks[n]=e||Vv)}}function oa(t,n){return function(e,r){t._tasks[n]&&(--t._active,++t._ended,t._tasks[n]=null,null==t._error&&(null!=e?aa(t,e):(t._data[n]=r,t._waiting?ra(t):ua(t))))}}function aa(t,n){var e,r=t._tasks.length;for(t._error=n,t._data=void 0,t._waiting=NaN;--r>=0;)if((e=t._tasks[r])&&(t._tasks[r]=null,e.abort))try{e.abort()}catch(t){}t._active=NaN,ua(t)}function ua(t){if(!t._active&&t._call){var n=t._data;t._data=void 0,t._call(t._error,n)}}function sa(t){return new ea(arguments.length?+t:1/0)}function ca(t){return function(n,e){t(null==n?e:null)}}function fa(t){var n=t.responseType;return n&&"text"!==n?t.response:t.responseText}function la(t,n){return function(e){return t(e.responseText,n)}}function ha(t){function n(n){var o=n+"",a=e.get(o);if(!a){if(i!==yw)return i;e.set(o,a=r.push(n))}return t[(a-1)%t.length]}var e=je(),r=[],i=yw;return t=null==t?[]:gw.call(t),n.domain=function(t){if(!arguments.length)return r.slice();r=[],e=je();for(var i,o,a=-1,u=t.length;++a<u;)e.has(o=(i=t[a])+"")||e.set(o,r.push(i));return n},n.range=function(e){return arguments.length?(t=gw.call(e),n):t.slice()},n.unknown=function(t){return arguments.length?(i=t,n):i},n.copy=function(){return ha().domain(r).range(t).unknown(i)},n}function Aa(){function t(){var t=i().length,r=a[1]<a[0],l=a[r-0],h=a[1-r];n=(h-l)/Math.max(1,t-s+2*c),u&&(n=Math.floor(n)),l+=(h-l-n*(t-s))*f,e=n*(1-s),u&&(l=Math.round(l),e=Math.round(e));var A=qc(t).map(function(t){return l+n*t});return o(r?A.reverse():A)}var n,e,r=ha().unknown(void 0),i=r.domain,o=r.range,a=[0,1],u=!1,s=0,c=0,f=.5;return delete r.unknown,r.domain=function(n){return arguments.length?(i(n),t()):i()},r.range=function(n){return arguments.length?(a=[+n[0],+n[1]],t()):a.slice()},r.rangeRound=function(n){return a=[+n[0],+n[1]],u=!0,t()},r.bandwidth=function(){return e},r.step=function(){return n},r.round=function(n){return arguments.length?(u=!!n,t()):u},r.padding=function(n){return arguments.length?(s=c=Math.max(0,Math.min(1,n)),t()):s},r.paddingInner=function(n){return arguments.length?(s=Math.max(0,Math.min(1,n)),t()):s},r.paddingOuter=function(n){return arguments.length?(c=Math.max(0,Math.min(1,n)),t()):c},r.align=function(n){return arguments.length?(f=Math.max(0,Math.min(1,n)),t()):f},r.copy=function(){return Aa().domain(i()).range(a).round(u).paddingInner(s).paddingOuter(c).align(f)},t()}function pa(t){var n=t.copy;return t.padding=t.paddingOuter,delete t.paddingInner,delete t.paddingOuter,t.copy=function(){return pa(n())},t}function da(){return pa(Aa().paddingInner(1))}function ga(t,n){return(n-=t=+t)?function(e){return(e-t)/n}:vw(n)}function ya(t){return function(n,e){var r=t(n=+n,e=+e);return function(t){return t<=n?0:t>=e?1:r(t)}}}function va(t){return function(n,e){var r=t(n=+n,e=+e);return function(t){return t<=0?n:t>=1?e:r(t)}}}function wa(t,n,e,r){var i=t[0],o=t[1],a=n[0],u=n[1];return o<i?(i=e(o,i),a=r(u,a)):(i=e(i,o),a=r(a,u)),function(t){return a(i(t))}}function xa(t,n,e,r){var i=Math.min(t.length,n.length)-1,o=new Array(i),a=new Array(i),u=-1;for(t[i]<t[0]&&(t=t.slice().reverse(),n=n.slice().reverse());++u<i;)o[u]=e(t[u],t[u+1]),a[u]=r(n[u],n[u+1]);return function(n){var e=Mc(t,n,1,i)-1;return a[e](o[e](n))}}function ma(t,n){return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp())}function ba(t,n){function e(){return i=Math.min(u.length,s.length)>2?xa:wa,o=a=null,r}function r(n){return(o||(o=i(u,s,f?ya(t):t,c)))(+n)}var i,o,a,u=xw,s=xw,c=yh,f=!1;return r.invert=function(t){return(a||(a=i(s,u,ga,f?va(n):n)))(+t)},r.domain=function(t){return arguments.length?(u=dw.call(t,ww),e()):u.slice()},r.range=function(t){return arguments.length?(s=gw.call(t),e()):s.slice()},r.rangeRound=function(t){return s=gw.call(t),c=vh,e()},r.clamp=function(t){return arguments.length?(f=!!t,e()):f},r.interpolate=function(t){return arguments.length?(c=t,e()):c},e()}function Ba(t){var n=t.domain;return t.ticks=function(t){var e=n();return zc(e[0],e[e.length-1],null==t?10:t)},t.tickFormat=function(t,e){return mw(n(),t,e)},t.nice=function(r){var i=n(),o=i.length-1,a=null==r?10:r,u=i[0],s=i[o],c=e(u,s,a);return c&&(c=e(Math.floor(u/c)*c,Math.ceil(s/c)*c,a),i[0]=Math.floor(u/c)*c,i[o]=Math.ceil(s/c)*c,n(i)),t},t}function Ea(){var t=ba(ga,hh);return t.copy=function(){return ma(t,Ea())},Ba(t)}function _a(){function t(t){return+t}var n=[0,1];return t.invert=t,t.domain=t.range=function(e){return arguments.length?(n=dw.call(e,ww),t):n.slice()},t.copy=function(){return _a().domain(n)},Ba(t)}function Ma(t,n){return(n=Math.log(n/t))?function(e){return Math.log(e/t)/n}:vw(n)}function Ca(t,n){return t<0?function(e){return-Math.pow(-n,e)*Math.pow(-t,1-e)}:function(e){return Math.pow(n,e)*Math.pow(t,1-e)}}function Qa(t){return isFinite(t)?+("1e"+t):t<0?0:t}function Ga(t){return 10===t?Qa:t===Math.E?Math.exp:function(n){return Math.pow(t,n)}}function Ha(t){return t===Math.E?Math.log:10===t&&Math.log10||2===t&&Math.log2||(t=Math.log(t),function(n){return Math.log(n)/t})}function ka(t){return function(n){return-t(-n)}}function Ta(){function n(){return o=Ha(i),a=Ga(i),r()[0]<0&&(o=ka(o),a=ka(a)),e}var e=ba(Ma,Ca).domain([1,10]),r=e.domain,i=10,o=Ha(10),a=Ga(10);return e.base=function(t){return arguments.length?(i=+t,n()):i},e.domain=function(t){return arguments.length?(r(t),n()):r()},e.ticks=function(t){var n,e=r(),u=e[0],s=e[e.length-1];(n=s<u)&&(h=u,u=s,s=h);var c,f,l,h=o(u),A=o(s),p=null==t?10:+t,d=[];if(!(i%1)&&A-h<p){if(h=Math.round(h)-1,A=Math.round(A)+1,u>0){for(;h<A;++h)for(f=1,c=a(h);f<i;++f)if(l=c*f,!(l<u)){if(l>s)break;d.push(l)}}else for(;h<A;++h)for(f=i-1,c=a(h);f>=1;--f)if(l=c*f,!(l<u)){if(l>s)break;d.push(l)}}else d=zc(h,A,Math.min(A-h,p)).map(a);return n?d.reverse():d},e.tickFormat=function(n,r){if(null==r&&(r=10===i?".0e":","),"function"!=typeof r&&(r=t.format(r)),n===1/0)return r;null==n&&(n=10);var u=Math.max(1,i*n/e.ticks().length);return function(t){var n=t/a(Math.round(o(t)));return n*i<i-.5&&(n*=i),n<=u?r(t):""}},e.nice=function(){return r(bw(r(),{floor:function(t){return a(Math.floor(o(t)))},ceil:function(t){return a(Math.ceil(o(t)))}}))},e.copy=function(){return ma(e,Ta().base(i))},e}function Ya(t,n){return t<0?-Math.pow(-t,n):Math.pow(t,n)}function Ia(){function t(t,n){return(n=Ya(n,e)-(t=Ya(t,e)))?function(r){return(Ya(r,e)-t)/n}:vw(n)}function n(t,n){return n=Ya(n,e)-(t=Ya(t,e)),function(r){return Ya(t+n*r,1/e)}}var e=1,r=ba(t,n),i=r.domain;return r.exponent=function(t){return arguments.length?(e=+t,i(i())):e},r.copy=function(){return ma(r,Ia().exponent(e))},Ba(r)}function Sa(){return Ia().exponent(.5)}function Oa(){function t(){var t=0,o=Math.max(1,r.length);for(i=new Array(o-1);++t<o;)i[t-1]=Uc(e,t/o);return n}function n(t){if(!isNaN(t=+t))return r[Mc(i,t)]}var e=[],r=[],i=[];return n.invertExtent=function(t){var n=r.indexOf(t);return n<0?[NaN,NaN]:[n>0?i[n-1]:e[0],n<i.length?i[n]:e[e.length-1]]},n.domain=function(n){if(!arguments.length)return e.slice();e=[];for(var r,i=0,o=n.length;i<o;++i)r=n[i],null==r||isNaN(r=+r)||e.push(r);return e.sort(Bc),t()},n.range=function(n){return arguments.length?(r=gw.call(n),t()):r.slice()},n.quantiles=function(){return i.slice()},n.copy=function(){return Oa().domain(e).range(r)},n}function Na(){function t(t){if(t<=t)return a[Mc(o,t,0,i)]}function n(){var n=-1;for(o=new Array(i);++n<i;)o[n]=((n+1)*r-(n-i)*e)/(i+1);return t}var e=0,r=1,i=1,o=[.5],a=[0,1];return t.domain=function(t){return arguments.length?(e=+t[0],r=+t[1],n()):[e,r]},t.range=function(t){return arguments.length?(i=(a=gw.call(t)).length-1,n()):a.slice()},t.invertExtent=function(t){var n=a.indexOf(t);return n<0?[NaN,NaN]:n<1?[e,o[0]]:n>=i?[o[i-1],r]:[o[n-1],o[n]]},t.copy=function(){return Na().domain([e,r]).range(a)},Ba(t)}function qa(){function t(t){if(t<=t)return e[Mc(n,t,0,r)]}var n=[.5],e=[0,1],r=1;return t.domain=function(i){return arguments.length?(n=gw.call(i),r=Math.min(n.length,e.length-1),t):n.slice()},t.range=function(i){return arguments.length?(e=gw.call(i),r=Math.min(n.length,e.length-1),t):e.slice()},t.invertExtent=function(t){var r=e.indexOf(t);return[n[r-1],n[r]]},t.copy=function(){return qa().domain(n).range(e)},t}function Pa(t,n,e,r){function i(n){return t(n=new Date(+n)),n}return i.floor=i,i.ceil=function(e){return t(e=new Date(e-1)),n(e,1),t(e),e},i.round=function(t){var n=i(t),e=i.ceil(t);return t-n<e-t?n:e},i.offset=function(t,e){return n(t=new Date(+t),null==e?1:Math.floor(e)),t},i.range=function(e,r,o){var a=[];if(e=i.ceil(e),o=null==o?1:Math.floor(o),!(e<r&&o>0))return a;do a.push(new Date(+e));while(n(e,o),t(e),e<r);return a},i.filter=function(e){return Pa(function(n){if(n>=n)for(;t(n),!e(n);)n.setTime(n-1)},function(t,r){if(t>=t)for(;--r>=0;)for(;n(t,1),!e(t););})},e&&(i.count=function(n,r){return Bw.setTime(+n),Ew.setTime(+r),t(Bw),t(Ew),Math.floor(e(Bw,Ew))},i.every=function(t){return t=Math.floor(t),isFinite(t)&&t>0?t>1?i.filter(r?function(n){return r(n)%t===0}:function(n){return i.count(0,n)%t===0}):i:null}),i}function ja(t){return Pa(function(n){n.setDate(n.getDate()-(n.getDay()+7-t)%7),n.setHours(0,0,0,0)},function(t,n){t.setDate(t.getDate()+7*n)},function(t,n){return(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*Qw)/kw})}function Da(t){return Pa(function(n){n.setUTCDate(n.getUTCDate()-(n.getUTCDay()+7-t)%7),n.setUTCHours(0,0,0,0)},function(t,n){t.setUTCDate(t.getUTCDate()+7*n)},function(t,n){return(n-t)/kw})}function za(t){if(0<=t.y&&t.y<100){var n=new Date(-1,t.m,t.d,t.H,t.M,t.S,t.L);return n.setFullYear(t.y),n}return new Date(t.y,t.m,t.d,t.H,t.M,t.S,t.L)}function La(t){if(0<=t.y&&t.y<100){var n=new Date(Date.UTC(-1,t.m,t.d,t.H,t.M,t.S,t.L));return n.setUTCFullYear(t.y),n}return new Date(Date.UTC(t.y,t.m,t.d,t.H,t.M,t.S,t.L))}function Ka(t){return{y:t,m:0,d:1,H:0,M:0,S:0,L:0}}function Ua(t){function n(t,n){return function(e){var r,i,o,a=[],u=-1,s=0,c=t.length;for(e instanceof Date||(e=new Date(+e));++u<c;)37===t.charCodeAt(u)&&(a.push(t.slice(s,u)),null!=(i=Gx[r=t.charAt(++u)])?r=t.charAt(++u):i="e"===r?" ":"0",(o=n[r])&&(r=o(e,i)),a.push(r),s=u+1);return a.push(t.slice(s,u)),a.join("")}}function e(t,n){return function(e){var i=Ka(1900),o=r(i,t,e+="",0);if(o!=e.length)return null;if("p"in i&&(i.H=i.H%12+12*i.p),"W"in i||"U"in i){"w"in i||(i.w="W"in i?1:0);var a="Z"in i?La(Ka(i.y)).getUTCDay():n(Ka(i.y)).getDay();i.m=0,i.d="W"in i?(i.w+6)%7+7*i.W-(a+5)%7:i.w+7*i.U-(a+6)%7;
}return"Z"in i?(i.H+=i.Z/100|0,i.M+=i.Z%100,La(i)):n(i)}}function r(t,n,e,r){for(var i,o,a=0,u=n.length,s=e.length;a<u;){if(r>=s)return-1;if(i=n.charCodeAt(a++),37===i){if(i=n.charAt(a++),o=z[i in Gx?n.charAt(a++):i],!o||(r=o(t,e,r))<0)return-1}else if(i!=e.charCodeAt(r++))return-1}return r}function i(t,n,e){var r=H.exec(n.slice(e));return r?(t.p=k[r[0].toLowerCase()],e+r[0].length):-1}function o(t,n,e){var r=I.exec(n.slice(e));return r?(t.w=S[r[0].toLowerCase()],e+r[0].length):-1}function a(t,n,e){var r=T.exec(n.slice(e));return r?(t.w=Y[r[0].toLowerCase()],e+r[0].length):-1}function u(t,n,e){var r=q.exec(n.slice(e));return r?(t.m=P[r[0].toLowerCase()],e+r[0].length):-1}function s(t,n,e){var r=O.exec(n.slice(e));return r?(t.m=N[r[0].toLowerCase()],e+r[0].length):-1}function c(t,n,e){return r(t,b,n,e)}function f(t,n,e){return r(t,B,n,e)}function l(t,n,e){return r(t,E,n,e)}function h(t){return C[t.getDay()]}function A(t){return M[t.getDay()]}function p(t){return G[t.getMonth()]}function d(t){return Q[t.getMonth()]}function g(t){return _[+(t.getHours()>=12)]}function y(t){return C[t.getUTCDay()]}function v(t){return M[t.getUTCDay()]}function w(t){return G[t.getUTCMonth()]}function x(t){return Q[t.getUTCMonth()]}function m(t){return _[+(t.getUTCHours()>=12)]}var b=t.dateTime,B=t.date,E=t.time,_=t.periods,M=t.days,C=t.shortDays,Q=t.months,G=t.shortMonths,H=Ja(_),k=Wa(_),T=Ja(M),Y=Wa(M),I=Ja(C),S=Wa(C),O=Ja(Q),N=Wa(Q),q=Ja(G),P=Wa(G),j={a:h,A:A,b:p,B:d,c:null,d:fu,e:fu,H:lu,I:hu,j:Au,L:pu,m:du,M:gu,p:g,S:yu,U:vu,w:wu,W:xu,x:null,X:null,y:mu,Y:bu,Z:Bu,"%":qu},D={a:y,A:v,b:w,B:x,c:null,d:Eu,e:Eu,H:_u,I:Mu,j:Cu,L:Qu,m:Gu,M:Hu,p:m,S:ku,U:Tu,w:Yu,W:Iu,x:null,X:null,y:Su,Y:Ou,Z:Nu,"%":qu},z={a:o,A:a,b:u,B:s,c:c,d:ru,e:ru,H:ou,I:ou,j:iu,L:su,m:eu,M:au,p:i,S:uu,U:Xa,w:Za,W:Va,x:f,X:l,y:tu,Y:$a,Z:nu,"%":cu};return j.x=n(B,j),j.X=n(E,j),j.c=n(b,j),D.x=n(B,D),D.X=n(E,D),D.c=n(b,D),{format:function(t){var e=n(t+="",j);return e.toString=function(){return t},e},parse:function(t){var n=e(t+="",za);return n.toString=function(){return t},n},utcFormat:function(t){var e=n(t+="",D);return e.toString=function(){return t},e},utcParse:function(t){var n=e(t,La);return n.toString=function(){return t},n}}}function Ra(t,n,e){var r=t<0?"-":"",i=(r?-t:t)+"",o=i.length;return r+(o<e?new Array(e-o+1).join(n)+i:i)}function Fa(t){return t.replace(Tx,"\\$&")}function Ja(t){return new RegExp("^(?:"+t.map(Fa).join("|")+")","i")}function Wa(t){for(var n={},e=-1,r=t.length;++e<r;)n[t[e].toLowerCase()]=e;return n}function Za(t,n,e){var r=Hx.exec(n.slice(e,e+1));return r?(t.w=+r[0],e+r[0].length):-1}function Xa(t,n,e){var r=Hx.exec(n.slice(e));return r?(t.U=+r[0],e+r[0].length):-1}function Va(t,n,e){var r=Hx.exec(n.slice(e));return r?(t.W=+r[0],e+r[0].length):-1}function $a(t,n,e){var r=Hx.exec(n.slice(e,e+4));return r?(t.y=+r[0],e+r[0].length):-1}function tu(t,n,e){var r=Hx.exec(n.slice(e,e+2));return r?(t.y=+r[0]+(+r[0]>68?1900:2e3),e+r[0].length):-1}function nu(t,n,e){var r=/^(Z)|([+-]\d\d)(?:\:?(\d\d))?/.exec(n.slice(e,e+6));return r?(t.Z=r[1]?0:-(r[2]+(r[3]||"00")),e+r[0].length):-1}function eu(t,n,e){var r=Hx.exec(n.slice(e,e+2));return r?(t.m=r[0]-1,e+r[0].length):-1}function ru(t,n,e){var r=Hx.exec(n.slice(e,e+2));return r?(t.d=+r[0],e+r[0].length):-1}function iu(t,n,e){var r=Hx.exec(n.slice(e,e+3));return r?(t.m=0,t.d=+r[0],e+r[0].length):-1}function ou(t,n,e){var r=Hx.exec(n.slice(e,e+2));return r?(t.H=+r[0],e+r[0].length):-1}function au(t,n,e){var r=Hx.exec(n.slice(e,e+2));return r?(t.M=+r[0],e+r[0].length):-1}function uu(t,n,e){var r=Hx.exec(n.slice(e,e+2));return r?(t.S=+r[0],e+r[0].length):-1}function su(t,n,e){var r=Hx.exec(n.slice(e,e+3));return r?(t.L=+r[0],e+r[0].length):-1}function cu(t,n,e){var r=kx.exec(n.slice(e,e+1));return r?e+r[0].length:-1}function fu(t,n){return Ra(t.getDate(),n,2)}function lu(t,n){return Ra(t.getHours(),n,2)}function hu(t,n){return Ra(t.getHours()%12||12,n,2)}function Au(t,n){return Ra(1+qw.count(ex(t),t),n,3)}function pu(t,n){return Ra(t.getMilliseconds(),n,3)}function du(t,n){return Ra(t.getMonth()+1,n,2)}function gu(t,n){return Ra(t.getMinutes(),n,2)}function yu(t,n){return Ra(t.getSeconds(),n,2)}function vu(t,n){return Ra(jw.count(ex(t),t),n,2)}function wu(t){return t.getDay()}function xu(t,n){return Ra(Dw.count(ex(t),t),n,2)}function mu(t,n){return Ra(t.getFullYear()%100,n,2)}function bu(t,n){return Ra(t.getFullYear()%1e4,n,4)}function Bu(t){var n=t.getTimezoneOffset();return(n>0?"-":(n*=-1,"+"))+Ra(n/60|0,"0",2)+Ra(n%60,"0",2)}function Eu(t,n){return Ra(t.getUTCDate(),n,2)}function _u(t,n){return Ra(t.getUTCHours(),n,2)}function Mu(t,n){return Ra(t.getUTCHours()%12||12,n,2)}function Cu(t,n){return Ra(1+sx.count(Mx(t),t),n,3)}function Qu(t,n){return Ra(t.getUTCMilliseconds(),n,3)}function Gu(t,n){return Ra(t.getUTCMonth()+1,n,2)}function Hu(t,n){return Ra(t.getUTCMinutes(),n,2)}function ku(t,n){return Ra(t.getUTCSeconds(),n,2)}function Tu(t,n){return Ra(fx.count(Mx(t),t),n,2)}function Yu(t){return t.getUTCDay()}function Iu(t,n){return Ra(lx.count(Mx(t),t),n,2)}function Su(t,n){return Ra(t.getUTCFullYear()%100,n,2)}function Ou(t,n){return Ra(t.getUTCFullYear()%1e4,n,4)}function Nu(){return"+0000"}function qu(){return"%"}function Pu(n){return Cx=Ua(n),t.timeFormat=Cx.format,t.timeParse=Cx.parse,t.utcFormat=Cx.utcFormat,t.utcParse=Cx.utcParse,Cx}function ju(t){return t.toISOString()}function Du(t){var n=new Date(t);return isNaN(n)?null:n}function zu(t){return new Date(t)}function Lu(t){return t instanceof Date?+t:+new Date(+t)}function Ku(t,n,r,i,o,a,u,s,c){function f(e){return(u(e)<e?d:a(e)<e?g:o(e)<e?y:i(e)<e?v:n(e)<e?r(e)<e?w:x:t(e)<e?m:b)(e)}function l(n,r,i,o){if(null==n&&(n=10),"number"==typeof n){var a=Math.abs(i-r)/n,u=Ec(function(t){return t[2]}).right(B,a);u===B.length?(o=e(r/zx,i/zx,n),n=t):u?(u=B[a/B[u-1][2]<B[u][2]/a?u-1:u],o=u[1],n=u[0]):(o=e(r,i,n),n=s)}return null==o?n:n.every(o)}var h=ba(ga,hh),A=h.invert,p=h.domain,d=c(".%L"),g=c(":%S"),y=c("%I:%M"),v=c("%I %p"),w=c("%a %d"),x=c("%b %d"),m=c("%B"),b=c("%Y"),B=[[u,1,Ox],[u,5,5*Ox],[u,15,15*Ox],[u,30,30*Ox],[a,1,Nx],[a,5,5*Nx],[a,15,15*Nx],[a,30,30*Nx],[o,1,qx],[o,3,3*qx],[o,6,6*qx],[o,12,12*qx],[i,1,Px],[i,2,2*Px],[r,1,jx],[n,1,Dx],[n,3,3*Dx],[t,1,zx]];return h.invert=function(t){return new Date(A(t))},h.domain=function(t){return arguments.length?p(dw.call(t,Lu)):p().map(zu)},h.ticks=function(t,n){var e,r=p(),i=r[0],o=r[r.length-1],a=o<i;return a&&(e=i,i=o,o=e),e=l(t,i,o,n),e=e?e.range(i,o+1):[],a?e.reverse():e},h.tickFormat=function(t,n){return null==n?f:c(n)},h.nice=function(t,n){var e=p();return(t=l(t,e[0],e[e.length-1],n))?p(bw(e,t)):h},h.copy=function(){return ma(h,Ku(t,n,r,i,o,a,u,s,c))},h}function Uu(t){var n=t.length;return function(e){return t[Math.max(0,Math.min(n-1,Math.floor(e*n)))]}}function Ru(t){function n(n){var o=(n-e)/(r-e);return t(i?Math.max(0,Math.min(1,o)):o)}var e=0,r=1,i=!1;return n.domain=function(t){return arguments.length?(e=+t[0],r=+t[1],n):[e,r]},n.clamp=function(t){return arguments.length?(i=!!t,n):i},n.interpolator=function(e){return arguments.length?(t=e,n):t},n.copy=function(){return Ru(t).domain([e,r]).clamp(i)},Ba(n)}function Fu(t){return t.innerRadius}function Ju(t){return t.outerRadius}function Wu(t){return t.startAngle}function Zu(t){return t.endAngle}function Xu(t){return t&&t.padAngle}function Vu(t){return t>=1?sm:t<=-1?-sm:Math.asin(t)}function $u(t,n,e,r,i,o,a,u){var s=e-t,c=r-n,f=a-i,l=u-o,h=(f*(n-o)-l*(t-i))/(l*s-f*c);return[t+h*s,n+h*c]}function ts(t,n,e,r,i,o,a){var u=t-e,s=n-r,c=(a?o:-o)/Math.sqrt(u*u+s*s),f=c*s,l=-c*u,h=t+f,A=n+l,p=e+f,d=r+l,g=(h+p)/2,y=(A+d)/2,v=p-h,w=d-A,x=v*v+w*w,m=i-o,b=h*d-p*A,B=(w<0?-1:1)*Math.sqrt(Math.max(0,m*m*x-b*b)),E=(b*w-v*B)/x,_=(-b*v-w*B)/x,M=(b*w+v*B)/x,C=(-b*v+w*B)/x,Q=E-g,G=_-y,H=M-g,k=C-y;return Q*Q+G*G>H*H+k*k&&(E=M,_=C),{cx:E,cy:_,x01:-f,y01:-l,x11:E*(i/m-1),y11:_*(i/m-1)}}function ns(t){this._context=t}function es(t){return t[0]}function rs(t){return t[1]}function is(t){this._curve=t}function os(t){function n(n){return new is(t(n))}return n._curve=t,n}function as(t){var n=t.curve;return t.angle=t.x,delete t.x,t.radius=t.y,delete t.y,t.curve=function(t){return arguments.length?n(os(t)):n()._curve},t}function us(t,n,e){t._context.bezierCurveTo((2*t._x0+t._x1)/3,(2*t._y0+t._y1)/3,(t._x0+2*t._x1)/3,(t._y0+2*t._y1)/3,(t._x0+4*t._x1+n)/6,(t._y0+4*t._y1+e)/6)}function ss(t){this._context=t}function cs(t){this._context=t}function fs(t){this._context=t}function ls(t,n){this._basis=new ss(t),this._beta=n}function hs(t,n,e){t._context.bezierCurveTo(t._x1+t._k*(t._x2-t._x0),t._y1+t._k*(t._y2-t._y0),t._x2+t._k*(t._x1-n),t._y2+t._k*(t._y1-e),t._x2,t._y2)}function As(t,n){this._context=t,this._k=(1-n)/6}function ps(t,n){this._context=t,this._k=(1-n)/6}function ds(t,n){this._context=t,this._k=(1-n)/6}function gs(t,n,e){var r=t._x1,i=t._y1,o=t._x2,a=t._y2;if(t._l01_a>am){var u=2*t._l01_2a+3*t._l01_a*t._l12_a+t._l12_2a,s=3*t._l01_a*(t._l01_a+t._l12_a);r=(r*u-t._x0*t._l12_2a+t._x2*t._l01_2a)/s,i=(i*u-t._y0*t._l12_2a+t._y2*t._l01_2a)/s}if(t._l23_a>am){var c=2*t._l23_2a+3*t._l23_a*t._l12_a+t._l12_2a,f=3*t._l23_a*(t._l23_a+t._l12_a);o=(o*c+t._x1*t._l23_2a-n*t._l12_2a)/f,a=(a*c+t._y1*t._l23_2a-e*t._l12_2a)/f}t._context.bezierCurveTo(r,i,o,a,t._x2,t._y2)}function ys(t,n){this._context=t,this._alpha=n}function vs(t,n){this._context=t,this._alpha=n}function ws(t,n){this._context=t,this._alpha=n}function xs(t){this._context=t}function ms(t){return t<0?-1:1}function bs(t,n,e){var r=t._x1-t._x0,i=n-t._x1,o=(t._y1-t._y0)/(r||i<0&&-0),a=(e-t._y1)/(i||r<0&&-0),u=(o*i+a*r)/(r+i);return(ms(o)+ms(a))*Math.min(Math.abs(o),Math.abs(a),.5*Math.abs(u))||0}function Bs(t,n){var e=t._x1-t._x0;return e?(3*(t._y1-t._y0)/e-n)/2:n}function Es(t,n,e){var r=t._x0,i=t._y0,o=t._x1,a=t._y1,u=(o-r)/3;t._context.bezierCurveTo(r+u,i+u*n,o-u,a-u*e,o,a)}function _s(t){this._context=t}function Ms(t){this._context=new Cs(t)}function Cs(t){this._context=t}function Qs(t){return new _s(t)}function Gs(t){return new Ms(t)}function Hs(t){this._context=t}function ks(t){var n,e,r=t.length-1,i=new Array(r),o=new Array(r),a=new Array(r);for(i[0]=0,o[0]=2,a[0]=t[0]+2*t[1],n=1;n<r-1;++n)i[n]=1,o[n]=4,a[n]=4*t[n]+2*t[n+1];for(i[r-1]=2,o[r-1]=7,a[r-1]=8*t[r-1]+t[r],n=1;n<r;++n)e=i[n]/o[n-1],o[n]-=e,a[n]-=e*a[n-1];for(i[r-1]=a[r-1]/o[r-1],n=r-2;n>=0;--n)i[n]=(a[n]-i[n+1])/o[n];for(o[r-1]=(t[r]+i[r-1])/2,n=0;n<r-1;++n)o[n]=2*t[n+1]-i[n+1];return[i,o]}function Ts(t,n){this._context=t,this._t=n}function Ys(t){return new Ts(t,0)}function Is(t){return new Ts(t,1)}function Ss(t,n){return t[n]}function Os(t){for(var n,e=0,r=-1,i=t.length;++r<i;)(n=+t[r][1])&&(e+=n);return e}function Ns(t){return t[0]}function qs(t){return t[1]}function Ps(){this._=null}function js(t){t.U=t.C=t.L=t.R=t.P=t.N=null}function Ds(t,n){var e=n,r=n.R,i=e.U;i?i.L===e?i.L=r:i.R=r:t._=r,r.U=i,e.U=r,e.R=r.L,e.R&&(e.R.U=e),r.L=e}function zs(t,n){var e=n,r=n.L,i=e.U;i?i.L===e?i.L=r:i.R=r:t._=r,r.U=i,e.U=r,e.L=r.R,e.L&&(e.L.U=e),r.R=e}function Ls(t){for(;t.L;)t=t.L;return t}function Ks(t,n,e,r){var i=[null,null],o=gb.push(i)-1;return i.left=t,i.right=n,e&&Rs(i,t,n,e),r&&Rs(i,n,t,r),pb[t.index].halfedges.push(o),pb[n.index].halfedges.push(o),i}function Us(t,n,e){var r=[n,e];return r.left=t,r}function Rs(t,n,e,r){t[0]||t[1]?t.left===e?t[1]=r:t[0]=r:(t[0]=r,t.left=n,t.right=e)}function Fs(t,n,e,r,i){var o,a=t[0],u=t[1],s=a[0],c=a[1],f=u[0],l=u[1],h=0,A=1,p=f-s,d=l-c;if(o=n-s,p||!(o>0)){if(o/=p,p<0){if(o<h)return;o<A&&(A=o)}else if(p>0){if(o>A)return;o>h&&(h=o)}if(o=r-s,p||!(o<0)){if(o/=p,p<0){if(o>A)return;o>h&&(h=o)}else if(p>0){if(o<h)return;o<A&&(A=o)}if(o=e-c,d||!(o>0)){if(o/=d,d<0){if(o<h)return;o<A&&(A=o)}else if(d>0){if(o>A)return;o>h&&(h=o)}if(o=i-c,d||!(o<0)){if(o/=d,d<0){if(o>A)return;o>h&&(h=o)}else if(d>0){if(o<h)return;o<A&&(A=o)}return!(h>0||A<1)||(h>0&&(t[0]=[s+h*p,c+h*d]),A<1&&(t[1]=[s+A*p,c+A*d]),!0)}}}}}function Js(t,n,e,r,i){var o=t[1];if(o)return!0;var a,u,s=t[0],c=t.left,f=t.right,l=c[0],h=c[1],A=f[0],p=f[1],d=(l+A)/2,g=(h+p)/2;if(p===h){if(d<n||d>=r)return;if(l>A){if(s){if(s[1]>=i)return}else s=[d,e];o=[d,i]}else{if(s){if(s[1]<e)return}else s=[d,i];o=[d,e]}}else if(a=(l-A)/(p-h),u=g-a*d,a<-1||a>1)if(l>A){if(s){if(s[1]>=i)return}else s=[(e-u)/a,e];o=[(i-u)/a,i]}else{if(s){if(s[1]<e)return}else s=[(i-u)/a,i];o=[(e-u)/a,e]}else if(h<p){if(s){if(s[0]>=r)return}else s=[n,a*n+u];o=[r,a*r+u]}else{if(s){if(s[0]<n)return}else s=[r,a*r+u];o=[n,a*n+u]}return t[0]=s,t[1]=o,!0}function Ws(t,n,e,r){for(var i,o=gb.length;o--;)Js(i=gb[o],t,n,e,r)&&Fs(i,t,n,e,r)&&(Math.abs(i[0][0]-i[1][0])>wb||Math.abs(i[0][1]-i[1][1])>wb)||delete gb[o]}function Zs(t){return pb[t.index]={site:t,halfedges:[]}}function Xs(t,n){var e=t.site,r=n.left,i=n.right;return e===i&&(i=r,r=e),i?Math.atan2(i[1]-r[1],i[0]-r[0]):(e===r?(r=n[1],i=n[0]):(r=n[0],i=n[1]),Math.atan2(r[0]-i[0],i[1]-r[1]))}function Vs(t,n){return n[+(n.left!==t.site)]}function $s(t,n){return n[+(n.left===t.site)]}function tc(){for(var t,n,e,r,i=0,o=pb.length;i<o;++i)if((t=pb[i])&&(r=(n=t.halfedges).length)){var a=new Array(r),u=new Array(r);for(e=0;e<r;++e)a[e]=e,u[e]=Xs(t,gb[n[e]]);for(a.sort(function(t,n){return u[n]-u[t]}),e=0;e<r;++e)u[e]=n[a[e]];for(e=0;e<r;++e)n[e]=u[e]}}function nc(t,n,e,r){var i,o,a,u,s,c,f,l,h,A,p,d,g=pb.length,y=!0;for(i=0;i<g;++i)if(o=pb[i]){for(a=o.site,s=o.halfedges,u=s.length;u--;)gb[s[u]]||s.splice(u,1);for(u=0,c=s.length;u<c;)A=$s(o,gb[s[u]]),p=A[0],d=A[1],f=Vs(o,gb[s[++u%c]]),l=f[0],h=f[1],(Math.abs(p-l)>wb||Math.abs(d-h)>wb)&&(s.splice(u,0,gb.push(Us(a,A,Math.abs(p-t)<wb&&r-d>wb?[t,Math.abs(l-t)<wb?h:r]:Math.abs(d-r)<wb&&e-p>wb?[Math.abs(h-r)<wb?l:e,r]:Math.abs(p-e)<wb&&d-n>wb?[e,Math.abs(l-e)<wb?h:n]:Math.abs(d-n)<wb&&p-t>wb?[Math.abs(h-n)<wb?l:t,n]:null))-1),++c);c&&(y=!1)}if(y){var v,w,x,m=1/0;for(i=0,y=null;i<g;++i)(o=pb[i])&&(a=o.site,v=a[0]-t,w=a[1]-n,x=v*v+w*w,x<m&&(m=x,y=o));if(y){var b=[t,n],B=[t,r],E=[e,r],_=[e,n];y.halfedges.push(gb.push(Us(a=y.site,b,B))-1,gb.push(Us(a,B,E))-1,gb.push(Us(a,E,_))-1,gb.push(Us(a,_,b))-1)}}for(i=0;i<g;++i)(o=pb[i])&&(o.halfedges.length||delete pb[i])}function ec(){js(this),this.x=this.y=this.arc=this.site=this.cy=null}function rc(t){var n=t.P,e=t.N;if(n&&e){var r=n.site,i=t.site,o=e.site;if(r!==o){var a=i[0],u=i[1],s=r[0]-a,c=r[1]-u,f=o[0]-a,l=o[1]-u,h=2*(s*l-c*f);if(!(h>=-xb)){var A=s*s+c*c,p=f*f+l*l,d=(l*A-c*p)/h,g=(s*p-f*A)/h,y=yb.pop()||new ec;y.arc=t,y.site=i,y.x=d+a,y.y=(y.cy=g+u)+Math.sqrt(d*d+g*g),t.circle=y;for(var v=null,w=db._;w;)if(y.y<w.y||y.y===w.y&&y.x<=w.x){if(!w.L){v=w.P;break}w=w.L}else{if(!w.R){v=w;break}w=w.R}db.insert(v,y),v||(hb=y)}}}}function ic(t){var n=t.circle;n&&(n.P||(hb=n.N),db.remove(n),yb.push(n),js(n),t.circle=null)}function oc(){js(this),this.edge=this.site=this.circle=null}function ac(t){var n=vb.pop()||new oc;return n.site=t,n}function uc(t){ic(t),Ab.remove(t),vb.push(t),js(t)}function sc(t){var n=t.circle,e=n.x,r=n.cy,i=[e,r],o=t.P,a=t.N,u=[t];uc(t);for(var s=o;s.circle&&Math.abs(e-s.circle.x)<wb&&Math.abs(r-s.circle.cy)<wb;)o=s.P,u.unshift(s),uc(s),s=o;u.unshift(s),ic(s);for(var c=a;c.circle&&Math.abs(e-c.circle.x)<wb&&Math.abs(r-c.circle.cy)<wb;)a=c.N,u.push(c),uc(c),c=a;u.push(c),ic(c);var f,l=u.length;for(f=1;f<l;++f)c=u[f],s=u[f-1],Rs(c.edge,s.site,c.site,i);s=u[0],c=u[l-1],c.edge=Ks(s.site,c.site,null,i),rc(s),rc(c)}function cc(t){for(var n,e,r,i,o=t[0],a=t[1],u=Ab._;u;)if(r=fc(u,a)-o,r>wb)u=u.L;else{if(i=o-lc(u,a),!(i>wb)){r>-wb?(n=u.P,e=u):i>-wb?(n=u,e=u.N):n=e=u;break}if(!u.R){n=u;break}u=u.R}Zs(t);var s=ac(t);if(Ab.insert(n,s),n||e){if(n===e)return ic(n),e=ac(n.site),Ab.insert(s,e),s.edge=e.edge=Ks(n.site,s.site),rc(n),void rc(e);if(!e)return void(s.edge=Ks(n.site,s.site));ic(n),ic(e);var c=n.site,f=c[0],l=c[1],h=t[0]-f,A=t[1]-l,p=e.site,d=p[0]-f,g=p[1]-l,y=2*(h*g-A*d),v=h*h+A*A,w=d*d+g*g,x=[(g*v-A*w)/y+f,(h*w-d*v)/y+l];Rs(e.edge,c,p,x),s.edge=Ks(c,t,null,x),e.edge=Ks(t,p,null,x),rc(n),rc(e)}}function fc(t,n){var e=t.site,r=e[0],i=e[1],o=i-n;if(!o)return r;var a=t.P;if(!a)return-(1/0);e=a.site;var u=e[0],s=e[1],c=s-n;if(!c)return u;var f=u-r,l=1/o-1/c,h=f/c;return l?(-h+Math.sqrt(h*h-2*l*(f*f/(-2*c)-s+c/2+i-o/2)))/l+r:(r+u)/2}function lc(t,n){var e=t.N;if(e)return fc(e,n);var r=t.site;return r[1]===n?r[0]:1/0}function hc(t,n,e){return(t[0]-e[0])*(n[1]-t[1])-(t[0]-n[0])*(e[1]-t[1])}function Ac(t,n){return n[1]-t[1]||n[0]-t[0]}function pc(t,n){var e,r,i,o=t.sort(Ac).pop();for(gb=[],pb=new Array(t.length),Ab=new Ps,db=new Ps;;)if(i=hb,o&&(!i||o[1]<i.y||o[1]===i.y&&o[0]<i.x))o[0]===e&&o[1]===r||(cc(o),e=o[0],r=o[1]),o=t.pop();else{if(!i)break;sc(i.arc)}if(tc(),n){var a=+n[0][0],u=+n[0][1],s=+n[1][0],c=+n[1][1];Ws(a,u,s,c),nc(a,u,s,c)}this.edges=gb,this.cells=pb,Ab=db=gb=pb=null}function dc(t,n,e){this.target=t,this.type=n,this.transform=e}function gc(t,n,e){this.k=t,this.x=n,this.y=e}function yc(t){return t.__zoom||Bb}function vc(){t.event.stopImmediatePropagation()}function wc(){return!t.event.button}function xc(){var t,n,e=this;return e instanceof SVGElement?(e=e.ownerSVGElement||e,t=e.width.baseVal.value,n=e.height.baseVal.value):(t=e.clientWidth,n=e.clientHeight),[[0,0],[t,n]]}function mc(){return this.__zoom||Bb}var bc="4.4.3",Bc=function(t,n){return t<n?-1:t>n?1:t>=n?0:NaN},Ec=function(t){return 1===t.length&&(t=n(t)),{left:function(n,e,r,i){for(null==r&&(r=0),null==i&&(i=n.length);r<i;){var o=r+i>>>1;t(n[o],e)<0?r=o+1:i=o}return r},right:function(n,e,r,i){for(null==r&&(r=0),null==i&&(i=n.length);r<i;){var o=r+i>>>1;t(n[o],e)>0?i=o:r=o+1}return r}}},_c=Ec(Bc),Mc=_c.right,Cc=_c.left,Qc=function(t,n){return n<t?-1:n>t?1:n>=t?0:NaN},Gc=function(t){return null===t?NaN:+t},Hc=function(t,n){var e,r,i=t.length,o=0,a=0,u=-1,s=0;if(null==n)for(;++u<i;)isNaN(e=Gc(t[u]))||(r=e-o,o+=r/++s,a+=r*(e-o));else for(;++u<i;)isNaN(e=Gc(n(t[u],u,t)))||(r=e-o,o+=r/++s,a+=r*(e-o));if(s>1)return a/(s-1)},kc=function(t,n){var e=Hc(t,n);return e?Math.sqrt(e):e},Tc=function(t,n){var e,r,i,o=-1,a=t.length;if(null==n){for(;++o<a;)if(null!=(r=t[o])&&r>=r){e=i=r;break}for(;++o<a;)null!=(r=t[o])&&(e>r&&(e=r),i<r&&(i=r))}else{for(;++o<a;)if(null!=(r=n(t[o],o,t))&&r>=r){e=i=r;break}for(;++o<a;)null!=(r=n(t[o],o,t))&&(e>r&&(e=r),i<r&&(i=r))}return[e,i]},Yc=Array.prototype,Ic=Yc.slice,Sc=Yc.map,Oc=function(t){return function(){return t}},Nc=function(t){return t},qc=function(t,n,e){t=+t,n=+n,e=(i=arguments.length)<2?(n=t,t=0,1):i<3?1:+e;for(var r=-1,i=0|Math.max(0,Math.ceil((n-t)/e)),o=new Array(i);++r<i;)o[r]=t+r*e;return o},Pc=Math.sqrt(50),jc=Math.sqrt(10),Dc=Math.sqrt(2),zc=function(t,n,r){var i=e(t,n,r);return qc(Math.ceil(t/i)*i,Math.floor(n/i)*i+i/2,i)},Lc=function(t){return Math.ceil(Math.log(t.length)/Math.LN2)+1},Kc=function(){function t(t){var i,o,a=t.length,u=new Array(a);for(i=0;i<a;++i)u[i]=n(t[i],i,t);var s=e(u),c=s[0],f=s[1],l=r(u,c,f);Array.isArray(l)||(l=zc(c,f,l));for(var h=l.length;l[0]<=c;)l.shift(),--h;for(;l[h-1]>=f;)l.pop(),--h;var A,p=new Array(h+1);for(i=0;i<=h;++i)A=p[i]=[],A.x0=i>0?l[i-1]:c,A.x1=i<h?l[i]:f;for(i=0;i<a;++i)o=u[i],c<=o&&o<=f&&p[Mc(l,o,0,h)].push(t[i]);return p}var n=Nc,e=Tc,r=Lc;return t.value=function(e){return arguments.length?(n="function"==typeof e?e:Oc(e),t):n},t.domain=function(n){return arguments.length?(e="function"==typeof n?n:Oc([n[0],n[1]]),t):e},t.thresholds=function(n){return arguments.length?(r="function"==typeof n?n:Oc(Array.isArray(n)?Ic.call(n):n),t):r},t},Uc=function(t,n,e){if(null==e&&(e=Gc),r=t.length){if((n=+n)<=0||r<2)return+e(t[0],0,t);if(n>=1)return+e(t[r-1],r-1,t);var r,i=(r-1)*n,o=Math.floor(i),a=+e(t[o],o,t),u=+e(t[o+1],o+1,t);return a+(u-a)*(i-o)}},Rc=function(t,n,e){return t=Sc.call(t,Gc).sort(Bc),Math.ceil((e-n)/(2*(Uc(t,.75)-Uc(t,.25))*Math.pow(t.length,-1/3)))},Fc=function(t,n,e){return Math.ceil((e-n)/(3.5*kc(t)*Math.pow(t.length,-1/3)))},Jc=function(t,n){var e,r,i=-1,o=t.length;if(null==n){for(;++i<o;)if(null!=(r=t[i])&&r>=r){e=r;break}for(;++i<o;)null!=(r=t[i])&&r>e&&(e=r)}else{for(;++i<o;)if(null!=(r=n(t[i],i,t))&&r>=r){e=r;break}for(;++i<o;)null!=(r=n(t[i],i,t))&&r>e&&(e=r)}return e},Wc=function(t,n){var e,r=0,i=t.length,o=-1,a=i;if(null==n)for(;++o<i;)isNaN(e=Gc(t[o]))?--a:r+=e;else for(;++o<i;)isNaN(e=Gc(n(t[o],o,t)))?--a:r+=e;if(a)return r/a},Zc=function(t,n){var e,r=[],i=t.length,o=-1;if(null==n)for(;++o<i;)isNaN(e=Gc(t[o]))||r.push(e);else for(;++o<i;)isNaN(e=Gc(n(t[o],o,t)))||r.push(e);return Uc(r.sort(Bc),.5)},Xc=function(t){for(var n,e,r,i=t.length,o=-1,a=0;++o<i;)a+=t[o].length;for(e=new Array(a);--i>=0;)for(r=t[i],n=r.length;--n>=0;)e[--a]=r[n];return e},Vc=function(t,n){var e,r,i=-1,o=t.length;if(null==n){for(;++i<o;)if(null!=(r=t[i])&&r>=r){e=r;break}for(;++i<o;)null!=(r=t[i])&&e>r&&(e=r)}else{for(;++i<o;)if(null!=(r=n(t[i],i,t))&&r>=r){e=r;break}for(;++i<o;)null!=(r=n(t[i],i,t))&&e>r&&(e=r)}return e},$c=function(t){for(var n=0,e=t.length-1,r=t[0],i=new Array(e<0?0:e);n<e;)i[n]=[r,r=t[++n]];return i},tf=function(t,n){for(var e=n.length,r=new Array(e);e--;)r[e]=t[n[e]];return r},nf=function(t,n){if(e=t.length){var e,r,i=0,o=0,a=t[o];for(n||(n=Bc);++i<e;)(n(r=t[i],a)<0||0!==n(a,a))&&(a=r,o=i);return 0===n(a,a)?o:void 0}},ef=function(t,n,e){for(var r,i,o=(null==e?t.length:e)-(n=null==n?0:+n);o;)i=Math.random()*o--|0,r=t[o+n],t[o+n]=t[i+n],t[i+n]=r;return t},rf=function(t,n){var e,r=0,i=t.length,o=-1;if(null==n)for(;++o<i;)(e=+t[o])&&(r+=e);else for(;++o<i;)(e=+n(t[o],o,t))&&(r+=e);return r},of=function(t){if(!(o=t.length))return[];for(var n=-1,e=Vc(t,r),i=new Array(e);++n<e;)for(var o,a=-1,u=i[n]=new Array(o);++a<o;)u[a]=t[a][n];return i},af=function(){return of(arguments)},uf=Array.prototype.slice,sf=function(t){return t},cf=1,ff=2,lf=3,hf=4,Af=1e-6,pf={value:function(){}};p.prototype=A.prototype={constructor:p,on:function(t,n){var e,r=this._,i=d(t+"",r),o=-1,a=i.length;{if(!(arguments.length<2)){if(null!=n&&"function"!=typeof n)throw new Error("invalid callback: "+n);for(;++o<a;)if(e=(t=i[o]).type)r[e]=y(r[e],t.name,n);else if(null==n)for(e in r)r[e]=y(r[e],t.name,null);return this}for(;++o<a;)if((e=(t=i[o]).type)&&(e=g(r[e],t.name)))return e}},copy:function(){var t={},n=this._;for(var e in n)t[e]=n[e].slice();return new p(t)},call:function(t,n){if((e=arguments.length-2)>0)for(var e,r,i=new Array(e),o=0;o<e;++o)i[o]=arguments[o+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(r=this._[t],o=0,e=r.length;o<e;++o)r[o].value.apply(n,i)},apply:function(t,n,e){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var r=this._[t],i=0,o=r.length;i<o;++i)r[i].value.apply(n,e)}};var df="http://www.w3.org/1999/xhtml",gf={svg:"http://www.w3.org/2000/svg",xhtml:df,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},yf=function(t){var n=t+="",e=n.indexOf(":");return e>=0&&"xmlns"!==(n=t.slice(0,e))&&(t=t.slice(e+1)),gf.hasOwnProperty(n)?{space:gf[n],local:t}:t},vf=function(t){var n=yf(t);return(n.local?w:v)(n)},wf=0;m.prototype=x.prototype={constructor:m,get:function(t){for(var n=this._;!(n in t);)if(!(t=t.parentNode))return;return t[n]},set:function(t,n){return t[this._]=n},remove:function(t){return this._ in t&&delete t[this._]},toString:function(){return this._}};var xf=function(t){return function(){return this.matches(t)}};if("undefined"!=typeof document){var mf=document.documentElement;if(!mf.matches){var bf=mf.webkitMatchesSelector||mf.msMatchesSelector||mf.mozMatchesSelector||mf.oMatchesSelector;xf=function(t){return function(){return bf.call(this,t)}}}}var Bf=xf,Ef={};if(t.event=null,"undefined"!=typeof document){var _f=document.documentElement;"onmouseenter"in _f||(Ef={mouseenter:"mouseover",mouseleave:"mouseout"})}var Mf=function(t,n,e){var r,i,o=E(t+""),a=o.length;{if(!(arguments.length<2)){for(u=n?M:_,null==e&&(e=!1),r=0;r<a;++r)this.each(u(o[r],n,e));return this}var u=this.node().__on;if(u)for(var s,c=0,f=u.length;c<f;++c)for(r=0,s=u[c];r<a;++r)if((i=o[r]).type===s.type&&i.name===s.name)return s.value}},Cf=function(){for(var n,e=t.event;n=e.sourceEvent;)e=n;return e},Qf=function(t,n){var e=t.ownerSVGElement||t;if(e.createSVGPoint){var r=e.createSVGPoint();return r.x=n.clientX,r.y=n.clientY,r=r.matrixTransform(t.getScreenCTM().inverse()),[r.x,r.y]}var i=t.getBoundingClientRect();return[n.clientX-i.left-t.clientLeft,n.clientY-i.top-t.clientTop]},Gf=function(t){var n=Cf();return n.changedTouches&&(n=n.changedTouches[0]),Qf(t,n)},Hf=function(t){return null==t?Q:function(){return this.querySelector(t)}},kf=function(t){"function"!=typeof t&&(t=Hf(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,a,u=n[i],s=u.length,c=r[i]=new Array(s),f=0;f<s;++f)(o=u[f])&&(a=t.call(o,o.__data__,f,u))&&("__data__"in o&&(a.__data__=o.__data__),c[f]=a);return new At(r,this._parents)},Tf=function(t){return null==t?G:function(){return this.querySelectorAll(t)}},Yf=function(t){"function"!=typeof t&&(t=Tf(t));for(var n=this._groups,e=n.length,r=[],i=[],o=0;o<e;++o)for(var a,u=n[o],s=u.length,c=0;c<s;++c)(a=u[c])&&(r.push(t.call(a,a.__data__,c,u)),i.push(a));return new At(r,i)},If=function(t){"function"!=typeof t&&(t=Bf(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,a=n[i],u=a.length,s=r[i]=[],c=0;c<u;++c)(o=a[c])&&t.call(o,o.__data__,c,a)&&s.push(o);return new At(r,this._parents)},Sf=function(t){return new Array(t.length)},Of=function(){return new At(this._enter||this._groups.map(Sf),this._parents)};H.prototype={constructor:H,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,n){return this._parent.insertBefore(t,n)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};var Nf=function(t){return function(){return t}},qf="$",Pf=function(t,n){if(!t)return A=new Array(this.size()),c=-1,this.each(function(t){A[++c]=t}),A;var e=n?T:k,r=this._parents,i=this._groups;"function"!=typeof t&&(t=Nf(t));for(var o=i.length,a=new Array(o),u=new Array(o),s=new Array(o),c=0;c<o;++c){var f=r[c],l=i[c],h=l.length,A=t.call(f,f&&f.__data__,c,r),p=A.length,d=u[c]=new Array(p),g=a[c]=new Array(p),y=s[c]=new Array(h);e(f,l,d,g,y,A,n);for(var v,w,x=0,m=0;x<p;++x)if(v=d[x]){for(x>=m&&(m=x+1);!(w=g[m])&&++m<p;);v._next=w||null}}return a=new At(a,r),a._enter=u,a._exit=s,a},jf=function(){return new At(this._exit||this._groups.map(Sf),this._parents)},Df=function(t){for(var n=this._groups,e=t._groups,r=n.length,i=e.length,o=Math.min(r,i),a=new Array(r),u=0;u<o;++u)for(var s,c=n[u],f=e[u],l=c.length,h=a[u]=new Array(l),A=0;A<l;++A)(s=c[A]||f[A])&&(h[A]=s);for(;u<r;++u)a[u]=n[u];return new At(a,this._parents)},zf=function(){for(var t=this._groups,n=-1,e=t.length;++n<e;)for(var r,i=t[n],o=i.length-1,a=i[o];--o>=0;)(r=i[o])&&(a&&a!==r.nextSibling&&a.parentNode.insertBefore(r,a),a=r);return this},Lf=function(t){function n(n,e){return n&&e?t(n.__data__,e.__data__):!n-!e}t||(t=Y);for(var e=this._groups,r=e.length,i=new Array(r),o=0;o<r;++o){for(var a,u=e[o],s=u.length,c=i[o]=new Array(s),f=0;f<s;++f)(a=u[f])&&(c[f]=a);c.sort(n)}return new At(i,this._parents).order()},Kf=function(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this},Uf=function(){var t=new Array(this.size()),n=-1;return this.each(function(){t[++n]=this}),t},Rf=function(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r=t[n],i=0,o=r.length;i<o;++i){var a=r[i];if(a)return a}return null},Ff=function(){var t=0;return this.each(function(){++t}),t},Jf=function(){return!this.node()},Wf=function(t){for(var n=this._groups,e=0,r=n.length;e<r;++e)for(var i,o=n[e],a=0,u=o.length;a<u;++a)(i=o[a])&&t.call(i,i.__data__,a,o);return this},Zf=function(t,n){var e=yf(t);if(arguments.length<2){var r=this.node();return e.local?r.getAttributeNS(e.space,e.local):r.getAttribute(e)}return this.each((null==n?e.local?S:I:"function"==typeof n?e.local?P:q:e.local?N:O)(e,n))},Xf=function(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView},Vf=function(t,n,e){var r;return arguments.length>1?this.each((null==n?j:"function"==typeof n?z:D)(t,n,null==e?"":e)):Xf(r=this.node()).getComputedStyle(r,null).getPropertyValue(t)},$f=function(t,n){return arguments.length>1?this.each((null==n?L:"function"==typeof n?U:K)(t,n)):this.node()[t]};J.prototype={add:function(t){var n=this._names.indexOf(t);n<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var n=this._names.indexOf(t);n>=0&&(this._names.splice(n,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};var tl=function(t,n){var e=R(t+"");if(arguments.length<2){for(var r=F(this.node()),i=-1,o=e.length;++i<o;)if(!r.contains(e[i]))return!1;return!0}return this.each(("function"==typeof n?$:n?X:V)(e,n))},nl=function(t){return arguments.length?this.each(null==t?tt:("function"==typeof t?et:nt)(t)):this.node().textContent},el=function(t){return arguments.length?this.each(null==t?rt:("function"==typeof t?ot:it)(t)):this.node().innerHTML},rl=function(){return this.each(at)},il=function(){return this.each(ut)},ol=function(t){var n="function"==typeof t?t:vf(t);return this.select(function(){return this.appendChild(n.apply(this,arguments))})},al=function(t,n){var e="function"==typeof t?t:vf(t),r=null==n?st:"function"==typeof n?n:Hf(n);return this.select(function(){return this.insertBefore(e.apply(this,arguments),r.apply(this,arguments)||null)})},ul=function(){return this.each(ct)},sl=function(t){return arguments.length?this.property("__data__",t):this.node().__data__},cl=function(t,n){return this.each(("function"==typeof n?ht:lt)(t,n))},fl=[null];At.prototype=pt.prototype={constructor:At,select:kf,selectAll:Yf,filter:If,data:Pf,enter:Of,exit:jf,merge:Df,order:zf,sort:Lf,call:Kf,nodes:Uf,node:Rf,size:Ff,empty:Jf,each:Wf,attr:Zf,style:Vf,property:$f,classed:tl,text:nl,html:el,raise:rl,lower:il,append:ol,insert:al,remove:ul,datum:sl,on:Mf,dispatch:cl};var ll=function(t){return"string"==typeof t?new At([[document.querySelector(t)]],[document.documentElement]):new At([[t]],fl)},hl=function(t){return"string"==typeof t?new At([document.querySelectorAll(t)],[document.documentElement]):new At([null==t?[]:t],fl)},Al=function(t,n,e){arguments.length<3&&(e=n,n=Cf().changedTouches);for(var r,i=0,o=n?n.length:0;i<o;++i)if((r=n[i]).identifier===e)return Qf(t,r);return null},pl=function(t,n){null==n&&(n=Cf().touches);for(var e=0,r=n?n.length:0,i=new Array(r);e<r;++e)i[e]=Qf(t,n[e]);return i},dl=function(){t.event.preventDefault(),t.event.stopImmediatePropagation()},gl=function(t){var n=t.document.documentElement,e=ll(t).on("dragstart.drag",dl,!0);"onselectstart"in n?e.on("selectstart.drag",dl,!0):(n.__noselect=n.style.MozUserSelect,n.style.MozUserSelect="none")},yl=function(t){return function(){return t}};yt.prototype.on=function(){var t=this._.on.apply(this._,arguments);return t===this._?this:t};var vl=function(){function n(t){t.on("mousedown.drag",e).on("touchstart.drag",o).on("touchmove.drag",a).on("touchend.drag touchcancel.drag",u).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function e(){if(!f&&l.apply(this,arguments)){var n=s("mouse",h.apply(this,arguments),Gf,this,arguments);n&&(ll(t.event.view).on("mousemove.drag",r,!0).on("mouseup.drag",i,!0),gl(t.event.view),dt(),c=!1,n("start"))}}function r(){dl(),c=!0,d.mouse("drag")}function i(){ll(t.event.view).on("mousemove.drag mouseup.drag",null),gt(t.event.view,c),dl(),d.mouse("end")}function o(){if(l.apply(this,arguments)){var n,e,r=t.event.changedTouches,i=h.apply(this,arguments),o=r.length;for(n=0;n<o;++n)(e=s(r[n].identifier,i,Al,this,arguments))&&(dt(),e("start"))}}function a(){var n,e,r=t.event.changedTouches,i=r.length;for(n=0;n<i;++n)(e=d[r[n].identifier])&&(dl(),e("drag"))}function u(){var n,e,r=t.event.changedTouches,i=r.length;for(f&&clearTimeout(f),f=setTimeout(function(){f=null},500),n=0;n<i;++n)(e=d[r[n].identifier])&&(dt(),e("end"))}function s(e,r,i,o,a){var u,s,c,f=i(r,e),l=g.copy();if(C(new yt(n,"beforestart",u,e,y,f[0],f[1],0,0,l),function(){
return null!=(t.event.subject=u=p.apply(o,a))&&(s=u.x-f[0]||0,c=u.y-f[1]||0,!0)}))return function t(h){var A,p=f;switch(h){case"start":d[e]=t,A=y++;break;case"end":delete d[e],--y;case"drag":f=i(r,e),A=y}C(new yt(n,h,u,e,A,f[0]+s,f[1]+c,f[0]-p[0],f[1]-p[1],l),l.apply,l,[h,o,a])}}var c,f,l=vt,h=wt,p=xt,d={},g=A("start","drag","end"),y=0;return n.filter=function(t){return arguments.length?(l="function"==typeof t?t:yl(!!t),n):l},n.container=function(t){return arguments.length?(h="function"==typeof t?t:yl(t),n):h},n.subject=function(t){return arguments.length?(p="function"==typeof t?t:yl(t),n):p},n.on=function(){var t=g.on.apply(g,arguments);return t===g?n:t},n},wl=function(t,n,e){t.prototype=n.prototype=e,e.constructor=t},xl=.7,ml=1/xl,bl="\\s*([+-]?\\d+)\\s*",Bl="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",El="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",_l=/^#([0-9a-f]{3})$/,Ml=/^#([0-9a-f]{6})$/,Cl=new RegExp("^rgb\\("+[bl,bl,bl]+"\\)$"),Ql=new RegExp("^rgb\\("+[El,El,El]+"\\)$"),Gl=new RegExp("^rgba\\("+[bl,bl,bl,Bl]+"\\)$"),Hl=new RegExp("^rgba\\("+[El,El,El,Bl]+"\\)$"),kl=new RegExp("^hsl\\("+[Bl,El,El]+"\\)$"),Tl=new RegExp("^hsla\\("+[Bl,El,El,Bl]+"\\)$"),Yl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};wl(bt,Bt,{displayable:function(){return this.rgb().displayable()},toString:function(){return this.rgb()+""}}),wl(Qt,Ct,mt(bt,{brighter:function(t){return t=null==t?ml:Math.pow(ml,t),new Qt(this.r*t,this.g*t,this.b*t,this.opacity)},darker:function(t){return t=null==t?xl:Math.pow(xl,t),new Qt(this.r*t,this.g*t,this.b*t,this.opacity)},rgb:function(){return this},displayable:function(){return 0<=this.r&&this.r<=255&&0<=this.g&&this.g<=255&&0<=this.b&&this.b<=255&&0<=this.opacity&&this.opacity<=1},toString:function(){var t=this.opacity;return t=isNaN(t)?1:Math.max(0,Math.min(1,t)),(1===t?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(1===t?")":", "+t+")")}})),wl(Tt,kt,mt(bt,{brighter:function(t){return t=null==t?ml:Math.pow(ml,t),new Tt(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?xl:Math.pow(xl,t),new Tt(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=this.h%360+360*(this.h<0),n=isNaN(t)||isNaN(this.s)?0:this.s,e=this.l,r=e+(e<.5?e:1-e)*n,i=2*e-r;return new Qt(Yt(t>=240?t-240:t+120,i,r),Yt(t,i,r),Yt(t<120?t+240:t-120,i,r),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1}}));var Il=Math.PI/180,Sl=180/Math.PI,Ol=18,Nl=.95047,ql=1,Pl=1.08883,jl=4/29,Dl=6/29,zl=3*Dl*Dl,Ll=Dl*Dl*Dl;wl(Ot,St,mt(bt,{brighter:function(t){return new Ot(this.l+Ol*(null==t?1:t),this.a,this.b,this.opacity)},darker:function(t){return new Ot(this.l-Ol*(null==t?1:t),this.a,this.b,this.opacity)},rgb:function(){var t=(this.l+16)/116,n=isNaN(this.a)?t:t+this.a/500,e=isNaN(this.b)?t:t-this.b/200;return t=ql*qt(t),n=Nl*qt(n),e=Pl*qt(e),new Qt(Pt(3.2404542*n-1.5371385*t-.4985314*e),Pt(-.969266*n+1.8760108*t+.041556*e),Pt(.0556434*n-.2040259*t+1.0572252*e),this.opacity)}})),wl(Lt,zt,mt(bt,{brighter:function(t){return new Lt(this.h,this.c,this.l+Ol*(null==t?1:t),this.opacity)},darker:function(t){return new Lt(this.h,this.c,this.l-Ol*(null==t?1:t),this.opacity)},rgb:function(){return It(this).rgb()}}));var Kl=-.14861,Ul=1.78277,Rl=-.29227,Fl=-.90649,Jl=1.97294,Wl=Jl*Fl,Zl=Jl*Ul,Xl=Ul*Rl-Fl*Kl;wl(Rt,Ut,mt(bt,{brighter:function(t){return t=null==t?ml:Math.pow(ml,t),new Rt(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?xl:Math.pow(xl,t),new Rt(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=isNaN(this.h)?0:(this.h+120)*Il,n=+this.l,e=isNaN(this.s)?0:this.s*n*(1-n),r=Math.cos(t),i=Math.sin(t);return new Qt(255*(n+e*(Kl*r+Ul*i)),255*(n+e*(Rl*r+Fl*i)),255*(n+e*(Jl*r)),this.opacity)}}));var Vl,$l,th,nh,eh,rh,ih=function(t){var n=t.length-1;return function(e){var r=e<=0?e=0:e>=1?(e=1,n-1):Math.floor(e*n),i=t[r],o=t[r+1],a=r>0?t[r-1]:2*i-o,u=r<n-1?t[r+2]:2*o-i;return Ft((e-r/n)*n,a,i,o,u)}},oh=function(t){var n=t.length;return function(e){var r=Math.floor(((e%=1)<0?++e:e)*n),i=t[(r+n-1)%n],o=t[r%n],a=t[(r+1)%n],u=t[(r+2)%n];return Ft((e-r/n)*n,i,o,a,u)}},ah=function(t){return function(){return t}},uh=function t(n){function e(t,n){var e=r((t=Ct(t)).r,(n=Ct(n)).r),i=r(t.g,n.g),o=r(t.b,n.b),a=Vt(t.opacity,n.opacity);return function(n){return t.r=e(n),t.g=i(n),t.b=o(n),t.opacity=a(n),t+""}}var r=Xt(n);return e.gamma=t,e}(1),sh=$t(ih),ch=$t(oh),fh=function(t,n){var e,r=n?n.length:0,i=t?Math.min(r,t.length):0,o=new Array(r),a=new Array(r);for(e=0;e<i;++e)o[e]=yh(t[e],n[e]);for(;e<r;++e)a[e]=n[e];return function(t){for(e=0;e<i;++e)a[e]=o[e](t);return a}},lh=function(t,n){var e=new Date;return t=+t,n-=t,function(r){return e.setTime(t+n*r),e}},hh=function(t,n){return t=+t,n-=t,function(e){return t+n*e}},Ah=function(t,n){var e,r={},i={};null!==t&&"object"==typeof t||(t={}),null!==n&&"object"==typeof n||(n={});for(e in n)e in t?r[e]=yh(t[e],n[e]):i[e]=n[e];return function(t){for(e in r)i[e]=r[e](t);return i}},ph=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,dh=new RegExp(ph.source,"g"),gh=function(t,n){var e,r,i,o=ph.lastIndex=dh.lastIndex=0,a=-1,u=[],s=[];for(t+="",n+="";(e=ph.exec(t))&&(r=dh.exec(n));)(i=r.index)>o&&(i=n.slice(o,i),u[a]?u[a]+=i:u[++a]=i),(e=e[0])===(r=r[0])?u[a]?u[a]+=r:u[++a]=r:(u[++a]=null,s.push({i:a,x:hh(e,r)})),o=dh.lastIndex;return o<n.length&&(i=n.slice(o),u[a]?u[a]+=i:u[++a]=i),u.length<2?s[0]?nn(s[0].x):tn(n):(n=s.length,function(t){for(var e,r=0;r<n;++r)u[(e=s[r]).i]=e.x(t);return u.join("")})},yh=function(t,n){var e,r=typeof n;return null==n||"boolean"===r?ah(n):("number"===r?hh:"string"===r?(e=Bt(n))?(n=e,uh):gh:n instanceof Bt?uh:n instanceof Date?lh:Array.isArray(n)?fh:isNaN(n)?Ah:hh)(t,n)},vh=function(t,n){return t=+t,n-=t,function(e){return Math.round(t+n*e)}},wh=180/Math.PI,xh={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1},mh=function(t,n,e,r,i,o){var a,u,s;return(a=Math.sqrt(t*t+n*n))&&(t/=a,n/=a),(s=t*e+n*r)&&(e-=t*s,r-=n*s),(u=Math.sqrt(e*e+r*r))&&(e/=u,r/=u,s/=u),t*r<n*e&&(t=-t,n=-n,s=-s,a=-a),{translateX:i,translateY:o,rotate:Math.atan2(n,t)*wh,skewX:Math.atan(s)*wh,scaleX:a,scaleY:u}},bh=on(en,"px, ","px)","deg)"),Bh=on(rn,", ",")",")"),Eh=Math.SQRT2,_h=2,Mh=4,Ch=1e-12,Qh=function(t,n){var e,r,i=t[0],o=t[1],a=t[2],u=n[0],s=n[1],c=n[2],f=u-i,l=s-o,h=f*f+l*l;if(h<Ch)r=Math.log(c/a)/Eh,e=function(t){return[i+t*f,o+t*l,a*Math.exp(Eh*t*r)]};else{var A=Math.sqrt(h),p=(c*c-a*a+Mh*h)/(2*a*_h*A),d=(c*c-a*a-Mh*h)/(2*c*_h*A),g=Math.log(Math.sqrt(p*p+1)-p),y=Math.log(Math.sqrt(d*d+1)-d);r=(y-g)/Eh,e=function(t){var n=t*r,e=an(g),u=a/(_h*A)*(e*sn(Eh*n+g)-un(g));return[i+u*f,o+u*l,a*e/an(Eh*n+g)]}}return e.duration=1e3*r,e},Gh=cn(Zt),Hh=cn(Vt),kh=ln(Zt),Th=ln(Vt),Yh=hn(Zt),Ih=hn(Vt),Sh=function(t,n){for(var e=new Array(n),r=0;r<n;++r)e[r]=t(r/(n-1));return e},Oh=0,Nh=0,qh=0,Ph=1e3,jh=0,Dh=0,zh=0,Lh="object"==typeof performance&&performance.now?performance:Date,Kh="function"==typeof requestAnimationFrame?requestAnimationFrame:function(t){setTimeout(t,17)};dn.prototype=gn.prototype={constructor:dn,restart:function(t,n,e){if("function"!=typeof t)throw new TypeError("callback is not a function");e=(null==e?An():+e)+(null==n?0:+n),this._next||rh===this||(rh?rh._next=this:eh=this,rh=this),this._call=t,this._time=e,mn()},stop:function(){this._call&&(this._call=null,this._time=1/0,mn())}};var Uh=function(t,n,e){var r=new dn;return n=null==n?0:+n,r.restart(function(e){r.stop(),t(e+n)},n,e),r},Rh=function(t,n,e){var r=new dn,i=n;return null==n?(r.restart(t,n,e),r):(n=+n,e=null==e?An():+e,r.restart(function o(a){a+=i,r.restart(o,i+=n,e),t(a)},n,e),r)},Fh=A("start","end","interrupt"),Jh=[],Wh=0,Zh=1,Xh=2,Vh=3,$h=4,tA=5,nA=6,eA=function(t,n,e,r,i,o){var a=t.__transition;if(a){if(e in a)return}else t.__transition={};_n(t,e,{name:n,index:r,group:i,on:Fh,tween:Jh,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:Wh})},rA=function(t,n){var e,r,i,o=t.__transition,a=!0;if(o){n=null==n?null:n+"";for(i in o)(e=o[i]).name===n?(r=e.state>Xh&&e.state<tA,e.state=nA,e.timer.stop(),r&&e.on.call("interrupt",t,t.__data__,e.index,e.group),delete o[i]):a=!1;a&&delete t.__transition}},iA=function(t){return this.each(function(){rA(this,t)})},oA=function(t,n){var e=this._id;if(t+="",arguments.length<2){for(var r,i=En(this.node(),e).tween,o=0,a=i.length;o<a;++o)if((r=i[o]).name===t)return r.value;return null}return this.each((null==n?Mn:Cn)(e,t,n))},aA=function(t,n){var e;return("number"==typeof n?hh:n instanceof Bt?uh:(e=Bt(n))?(n=e,uh):gh)(t,n)},uA=function(t,n){var e=yf(t),r="transform"===e?Bh:aA;return this.attrTween(t,"function"==typeof n?(e.local?In:Yn)(e,r,Qn(this,"attr."+t,n)):null==n?(e.local?Hn:Gn)(e):(e.local?Tn:kn)(e,r,n))},sA=function(t,n){var e="attr."+t;if(arguments.length<2)return(e=this.tween(e))&&e._value;if(null==n)return this.tween(e,null);if("function"!=typeof n)throw new Error;var r=yf(t);return this.tween(e,(r.local?Sn:On)(r,n))},cA=function(t){var n=this._id;return arguments.length?this.each(("function"==typeof t?Nn:qn)(n,t)):En(this.node(),n).delay},fA=function(t){var n=this._id;return arguments.length?this.each(("function"==typeof t?Pn:jn)(n,t)):En(this.node(),n).duration},lA=function(t){var n=this._id;return arguments.length?this.each(Dn(n,t)):En(this.node(),n).ease},hA=function(t){"function"!=typeof t&&(t=Bf(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,a=n[i],u=a.length,s=r[i]=[],c=0;c<u;++c)(o=a[c])&&t.call(o,o.__data__,c,a)&&s.push(o);return new Vn(r,this._parents,this._name,this._id)},AA=function(t){if(t._id!==this._id)throw new Error;for(var n=this._groups,e=t._groups,r=n.length,i=e.length,o=Math.min(r,i),a=new Array(r),u=0;u<o;++u)for(var s,c=n[u],f=e[u],l=c.length,h=a[u]=new Array(l),A=0;A<l;++A)(s=c[A]||f[A])&&(h[A]=s);for(;u<r;++u)a[u]=n[u];return new Vn(a,this._parents,this._name,this._id)},pA=function(t,n){var e=this._id;return arguments.length<2?En(this.node(),e).on.on(t):this.each(Ln(e,t,n))},dA=function(){return this.on("end.remove",Kn(this._id))},gA=function(t){var n=this._name,e=this._id;"function"!=typeof t&&(t=Hf(t));for(var r=this._groups,i=r.length,o=new Array(i),a=0;a<i;++a)for(var u,s,c=r[a],f=c.length,l=o[a]=new Array(f),h=0;h<f;++h)(u=c[h])&&(s=t.call(u,u.__data__,h,c))&&("__data__"in u&&(s.__data__=u.__data__),l[h]=s,eA(l[h],n,e,h,l,En(u,e)));return new Vn(o,this._parents,n,e)},yA=function(t){var n=this._name,e=this._id;"function"!=typeof t&&(t=Tf(t));for(var r=this._groups,i=r.length,o=[],a=[],u=0;u<i;++u)for(var s,c=r[u],f=c.length,l=0;l<f;++l)if(s=c[l]){for(var h,A=t.call(s,s.__data__,l,c),p=En(s,e),d=0,g=A.length;d<g;++d)(h=A[d])&&eA(h,n,e,d,A,p);o.push(A),a.push(s)}return new Vn(o,a,n,e)},vA=pt.prototype.constructor,wA=function(){return new vA(this._groups,this._parents)},xA=function(t,n,e){var r="transform"==(t+="")?bh:aA;return null==n?this.styleTween(t,Un(t,r)).on("end.style."+t,Rn(t)):this.styleTween(t,"function"==typeof n?Jn(t,r,Qn(this,"style."+t,n)):Fn(t,r,n),e)},mA=function(t,n,e){var r="style."+(t+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(null==n)return this.tween(r,null);if("function"!=typeof n)throw new Error;return this.tween(r,Wn(t,n,null==e?"":e))},bA=function(t){return this.tween("text","function"==typeof t?Xn(Qn(this,"text",t)):Zn(null==t?"":t+""))},BA=function(){for(var t=this._name,n=this._id,e=te(),r=this._groups,i=r.length,o=0;o<i;++o)for(var a,u=r[o],s=u.length,c=0;c<s;++c)if(a=u[c]){var f=En(a,n);eA(a,t,e,c,u,{time:f.time+f.delay+f.duration,delay:0,duration:f.duration,ease:f.ease})}return new Vn(r,this._parents,t,e)},EA=0,_A=pt.prototype;Vn.prototype=$n.prototype={constructor:Vn,select:gA,selectAll:yA,filter:hA,merge:AA,selection:wA,transition:BA,call:_A.call,nodes:_A.nodes,node:_A.node,size:_A.size,empty:_A.empty,each:_A.each,on:pA,attr:uA,attrTween:sA,style:xA,styleTween:mA,text:bA,remove:dA,tween:oA,delay:cA,duration:fA,ease:lA};var MA=3,CA=function t(n){function e(t){return Math.pow(t,n)}return n=+n,e.exponent=t,e}(MA),QA=function t(n){function e(t){return 1-Math.pow(1-t,n)}return n=+n,e.exponent=t,e}(MA),GA=function t(n){function e(t){return((t*=2)<=1?Math.pow(t,n):2-Math.pow(2-t,n))/2}return n=+n,e.exponent=t,e}(MA),HA=Math.PI,kA=HA/2,TA=4/11,YA=6/11,IA=8/11,SA=.75,OA=9/11,NA=10/11,qA=.9375,PA=21/22,jA=63/64,DA=1/TA/TA,zA=1.70158,LA=function t(n){function e(t){return t*t*((n+1)*t-n)}return n=+n,e.overshoot=t,e}(zA),KA=function t(n){function e(t){return--t*t*((n+1)*t+n)+1}return n=+n,e.overshoot=t,e}(zA),UA=function t(n){function e(t){return((t*=2)<1?t*t*((n+1)*t-n):(t-=2)*t*((n+1)*t+n)+2)/2}return n=+n,e.overshoot=t,e}(zA),RA=2*Math.PI,FA=1,JA=.3,WA=function t(n,e){function r(t){return n*Math.pow(2,10*--t)*Math.sin((i-t)/e)}var i=Math.asin(1/(n=Math.max(1,n)))*(e/=RA);return r.amplitude=function(n){return t(n,e*RA)},r.period=function(e){return t(n,e)},r}(FA,JA),ZA=function t(n,e){function r(t){return 1-n*Math.pow(2,-10*(t=+t))*Math.sin((t+i)/e)}var i=Math.asin(1/(n=Math.max(1,n)))*(e/=RA);return r.amplitude=function(n){return t(n,e*RA)},r.period=function(e){return t(n,e)},r}(FA,JA),XA=function t(n,e){function r(t){return((t=2*t-1)<0?n*Math.pow(2,10*t)*Math.sin((i-t)/e):2-n*Math.pow(2,-10*t)*Math.sin((i+t)/e))/2}var i=Math.asin(1/(n=Math.max(1,n)))*(e/=RA);return r.amplitude=function(n){return t(n,e*RA)},r.period=function(e){return t(n,e)},r}(FA,JA),VA={time:null,delay:0,duration:250,ease:ue},$A=function(t){var n,e;t instanceof Vn?(n=t._id,t=t._name):(n=te(),(e=VA).time=An(),t=null==t?null:t+"");for(var r=this._groups,i=r.length,o=0;o<i;++o)for(var a,u=r[o],s=u.length,c=0;c<s;++c)(a=u[c])&&eA(a,t,n,c,u,e||xe(a,n));return new Vn(r,this._parents,t,n)};pt.prototype.interrupt=iA,pt.prototype.transition=$A;var tp=[null],np=function(t,n){var e,r,i=t.__transition;if(i){n=null==n?null:n+"";for(r in i)if((e=i[r]).state>Zh&&e.name===n)return new Vn([[t]],tp,n,+r)}return null},ep=function(t){return function(){return t}},rp=function(t,n,e){this.target=t,this.type=n,this.selection=e},ip=function(){t.event.preventDefault(),t.event.stopImmediatePropagation()},op={name:"drag"},ap={name:"space"},up={name:"handle"},sp={name:"center"},cp={name:"x",handles:["e","w"].map(be),input:function(t,n){return t&&[[t[0],n[0][1]],[t[1],n[1][1]]]},output:function(t){return t&&[t[0][0],t[1][0]]}},fp={name:"y",handles:["n","s"].map(be),input:function(t,n){return t&&[[n[0][0],t[0]],[n[1][0],t[1]]]},output:function(t){return t&&[t[0][1],t[1][1]]}},lp={name:"xy",handles:["n","e","s","w","nw","ne","se","sw"].map(be),input:function(t){return t},output:function(t){return t}},hp={overlay:"crosshair",selection:"move",n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"},Ap={e:"w",w:"e",nw:"ne",ne:"nw",se:"sw",sw:"se"},pp={n:"s",s:"n",nw:"sw",ne:"se",se:"ne",sw:"nw"},dp={overlay:1,selection:1,n:null,e:1,s:null,w:-1,nw:-1,ne:1,se:1,sw:-1},gp={overlay:1,selection:1,n:-1,e:null,s:1,w:null,nw:-1,ne:-1,se:1,sw:1},yp=function(){return He(lp)},vp=Math.cos,wp=Math.sin,xp=Math.PI,mp=xp/2,bp=2*xp,Bp=Math.max,Ep=function(){function t(t){var o,a,u,s,c,f,l=t.length,h=[],A=qc(l),p=[],d=[],g=d.groups=new Array(l),y=new Array(l*l);for(o=0,c=-1;++c<l;){for(a=0,f=-1;++f<l;)a+=t[c][f];h.push(a),p.push(qc(l)),o+=a}for(e&&A.sort(function(t,n){return e(h[t],h[n])}),r&&p.forEach(function(n,e){n.sort(function(n,i){return r(t[e][n],t[e][i])})}),o=Bp(0,bp-n*l)/o,s=o?n:bp/l,a=0,c=-1;++c<l;){for(u=a,f=-1;++f<l;){var v=A[c],w=p[v][f],x=t[v][w],m=a,b=a+=x*o;y[w*l+v]={index:v,subindex:w,startAngle:m,endAngle:b,value:x}}g[v]={index:v,startAngle:u,endAngle:a,value:h[v]},a+=s}for(c=-1;++c<l;)for(f=c-1;++f<l;){var B=y[f*l+c],E=y[c*l+f];(B.value||E.value)&&d.push(B.value<E.value?{source:E,target:B}:{source:B,target:E})}return i?d.sort(i):d}var n=0,e=null,r=null,i=null;return t.padAngle=function(e){return arguments.length?(n=Bp(0,e),t):n},t.sortGroups=function(n){return arguments.length?(e=n,t):e},t.sortSubgroups=function(n){return arguments.length?(r=n,t):r},t.sortChords=function(n){return arguments.length?(null==n?i=null:(i=ke(n))._=n,t):i&&i._},t},_p=Array.prototype.slice,Mp=function(t){return function(){return t}},Cp=Math.PI,Qp=2*Cp,Gp=1e-6,Hp=Qp-Gp;Te.prototype=Ye.prototype={constructor:Te,moveTo:function(t,n){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,n){this._+="L"+(this._x1=+t)+","+(this._y1=+n)},quadraticCurveTo:function(t,n,e,r){this._+="Q"+ +t+","+ +n+","+(this._x1=+e)+","+(this._y1=+r)},bezierCurveTo:function(t,n,e,r,i,o){this._+="C"+ +t+","+ +n+","+ +e+","+ +r+","+(this._x1=+i)+","+(this._y1=+o)},arcTo:function(t,n,e,r,i){t=+t,n=+n,e=+e,r=+r,i=+i;var o=this._x1,a=this._y1,u=e-t,s=r-n,c=o-t,f=a-n,l=c*c+f*f;if(i<0)throw new Error("negative radius: "+i);if(null===this._x1)this._+="M"+(this._x1=t)+","+(this._y1=n);else if(l>Gp)if(Math.abs(f*u-s*c)>Gp&&i){var h=e-o,A=r-a,p=u*u+s*s,d=h*h+A*A,g=Math.sqrt(p),y=Math.sqrt(l),v=i*Math.tan((Cp-Math.acos((p+l-d)/(2*g*y)))/2),w=v/y,x=v/g;Math.abs(w-1)>Gp&&(this._+="L"+(t+w*c)+","+(n+w*f)),this._+="A"+i+","+i+",0,0,"+ +(f*h>c*A)+","+(this._x1=t+x*u)+","+(this._y1=n+x*s)}else this._+="L"+(this._x1=t)+","+(this._y1=n);else;},arc:function(t,n,e,r,i,o){t=+t,n=+n,e=+e;var a=e*Math.cos(r),u=e*Math.sin(r),s=t+a,c=n+u,f=1^o,l=o?r-i:i-r;if(e<0)throw new Error("negative radius: "+e);null===this._x1?this._+="M"+s+","+c:(Math.abs(this._x1-s)>Gp||Math.abs(this._y1-c)>Gp)&&(this._+="L"+s+","+c),e&&(l>Hp?this._+="A"+e+","+e+",0,1,"+f+","+(t-a)+","+(n-u)+"A"+e+","+e+",0,1,"+f+","+(this._x1=s)+","+(this._y1=c):(l<0&&(l=l%Qp+Qp),this._+="A"+e+","+e+",0,"+ +(l>=Cp)+","+f+","+(this._x1=t+e*Math.cos(i))+","+(this._y1=n+e*Math.sin(i))))},rect:function(t,n,e,r){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)+"h"+ +e+"v"+ +r+"h"+-e+"Z"},toString:function(){return this._}};var kp=function(){function t(){var t,u=_p.call(arguments),s=n.apply(this,u),c=e.apply(this,u),f=+r.apply(this,(u[0]=s,u)),l=i.apply(this,u)-mp,h=o.apply(this,u)-mp,A=f*vp(l),p=f*wp(l),d=+r.apply(this,(u[0]=c,u)),g=i.apply(this,u)-mp,y=o.apply(this,u)-mp;if(a||(a=t=Ye()),a.moveTo(A,p),a.arc(0,0,f,l,h),l===g&&h===y||(a.quadraticCurveTo(0,0,d*vp(g),d*wp(g)),a.arc(0,0,d,g,y)),a.quadraticCurveTo(0,0,A,p),a.closePath(),t)return a=null,t+""||null}var n=Ie,e=Se,r=Oe,i=Ne,o=qe,a=null;return t.radius=function(n){return arguments.length?(r="function"==typeof n?n:Mp(+n),t):r},t.startAngle=function(n){return arguments.length?(i="function"==typeof n?n:Mp(+n),t):i},t.endAngle=function(n){return arguments.length?(o="function"==typeof n?n:Mp(+n),t):o},t.source=function(e){return arguments.length?(n=e,t):n},t.target=function(n){return arguments.length?(e=n,t):e},t.context=function(n){return arguments.length?(a=null==n?null:n,t):a},t},Tp="$";Pe.prototype=je.prototype={constructor:Pe,has:function(t){return Tp+t in this},get:function(t){return this[Tp+t]},set:function(t,n){return this[Tp+t]=n,this},remove:function(t){var n=Tp+t;return n in this&&delete this[n]},clear:function(){for(var t in this)t[0]===Tp&&delete this[t]},keys:function(){var t=[];for(var n in this)n[0]===Tp&&t.push(n.slice(1));return t},values:function(){var t=[];for(var n in this)n[0]===Tp&&t.push(this[n]);return t},entries:function(){var t=[];for(var n in this)n[0]===Tp&&t.push({key:n.slice(1),value:this[n]});return t},size:function(){var t=0;for(var n in this)n[0]===Tp&&++t;return t},empty:function(){for(var t in this)if(t[0]===Tp)return!1;return!0},each:function(t){for(var n in this)n[0]===Tp&&t(this[n],n.slice(1),this)}};var Yp=function(){function t(n,i,a,u){if(i>=o.length)return null!=r?r(n):null!=e?n.sort(e):n;for(var s,c,f,l=-1,h=n.length,A=o[i++],p=je(),d=a();++l<h;)(f=p.get(s=A(c=n[l])+""))?f.push(c):p.set(s,[c]);return p.each(function(n,e){u(d,e,t(n,i,a,u))}),d}function n(t,e){if(++e>o.length)return t;var i,u=a[e-1];return null!=r&&e>=o.length?i=t.entries():(i=[],t.each(function(t,r){i.push({key:r,values:n(t,e)})})),null!=u?i.sort(function(t,n){return u(t.key,n.key)}):i}var e,r,i,o=[],a=[];return i={object:function(n){return t(n,0,De,ze)},map:function(n){return t(n,0,Le,Ke)},entries:function(e){return n(t(e,0,Le,Ke),0)},key:function(t){return o.push(t),i},sortKeys:function(t){return a[o.length-1]=t,i},sortValues:function(t){return e=t,i},rollup:function(t){return r=t,i}}},Ip=je.prototype;Ue.prototype=Re.prototype={constructor:Ue,has:Ip.has,add:function(t){return t+="",this[Tp+t]=t,this},remove:Ip.remove,clear:Ip.clear,values:Ip.keys,size:Ip.size,empty:Ip.empty,each:Ip.each};var Sp=function(t){var n=[];for(var e in t)n.push(e);return n},Op=function(t){var n=[];for(var e in t)n.push(t[e]);return n},Np=function(t){var n=[];for(var e in t)n.push({key:e,value:t[e]});return n},qp=function(t){function n(t,n){var r,i,o=e(t,function(t,e){return r?r(t,e-1):(i=t,void(r=n?Je(t,n):Fe(t)))});return o.columns=i,o}function e(t,n){function e(){if(f>=c)return a;if(i)return i=!1,o;var n,e=f;if(34===t.charCodeAt(e)){for(var r=e;r++<c;)if(34===t.charCodeAt(r)){if(34!==t.charCodeAt(r+1))break;++r}return f=r+2,n=t.charCodeAt(r+1),13===n?(i=!0,10===t.charCodeAt(r+2)&&++f):10===n&&(i=!0),t.slice(e+1,r).replace(/""/g,'"')}for(;f<c;){var u=1;if(n=t.charCodeAt(f++),10===n)i=!0;else if(13===n)i=!0,10===t.charCodeAt(f)&&(++f,++u);else if(n!==s)continue;return t.slice(e,f-u)}return t.slice(e)}for(var r,i,o={},a={},u=[],c=t.length,f=0,l=0;(r=e())!==a;){for(var h=[];r!==o&&r!==a;)h.push(r),r=e();n&&null==(h=n(h,l++))||u.push(h)}return u}function r(n,e){return null==e&&(e=We(n)),[e.map(a).join(t)].concat(n.map(function(n){return e.map(function(t){return a(n[t])}).join(t)})).join("\n")}function i(t){return t.map(o).join("\n")}function o(n){return n.map(a).join(t)}function a(t){return null==t?"":u.test(t+="")?'"'+t.replace(/\"/g,'""')+'"':t}var u=new RegExp('["'+t+"\n]"),s=t.charCodeAt(0);return{parse:n,parseRows:e,format:r,formatRows:i}},Pp=qp(","),jp=Pp.parse,Dp=Pp.parseRows,zp=Pp.format,Lp=Pp.formatRows,Kp=qp("\t"),Up=Kp.parse,Rp=Kp.parseRows,Fp=Kp.format,Jp=Kp.formatRows,Wp=function(t,n){function e(){var e,i,o=r.length,a=0,u=0;for(e=0;e<o;++e)i=r[e],a+=i.x,u+=i.y;for(a=a/o-t,u=u/o-n,e=0;e<o;++e)i=r[e],i.x-=a,i.y-=u}var r;return null==t&&(t=0),null==n&&(n=0),e.initialize=function(t){r=t},e.x=function(n){return arguments.length?(t=+n,e):t},e.y=function(t){return arguments.length?(n=+t,e):n},e},Zp=function(t){return function(){return t}},Xp=function(){return 1e-6*(Math.random()-.5)},Vp=function(t){var n=+this._x.call(null,t),e=+this._y.call(null,t);return Ze(this.cover(n,e),n,e,t)},$p=function(t,n){if(isNaN(t=+t)||isNaN(n=+n))return this;var e=this._x0,r=this._y0,i=this._x1,o=this._y1;if(isNaN(e))i=(e=Math.floor(t))+1,o=(r=Math.floor(n))+1;else{if(!(e>t||t>i||r>n||n>o))return this;var a,u,s=i-e,c=this._root;switch(u=(n<(r+o)/2)<<1|t<(e+i)/2){case 0:do a=new Array(4),a[u]=c,c=a;while(s*=2,i=e+s,o=r+s,t>i||n>o);break;case 1:do a=new Array(4),a[u]=c,c=a;while(s*=2,e=i-s,o=r+s,e>t||n>o);break;case 2:do a=new Array(4),a[u]=c,c=a;while(s*=2,i=e+s,r=o-s,t>i||r>n);break;case 3:do a=new Array(4),a[u]=c,c=a;while(s*=2,e=i-s,r=o-s,e>t||r>n)}this._root&&this._root.length&&(this._root=c)}return this._x0=e,this._y0=r,this._x1=i,this._y1=o,this},td=function(){var t=[];return this.visit(function(n){if(!n.length)do t.push(n.data);while(n=n.next)}),t},nd=function(t){return arguments.length?this.cover(+t[0][0],+t[0][1]).cover(+t[1][0],+t[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]},ed=function(t,n,e,r,i){this.node=t,this.x0=n,this.y0=e,this.x1=r,this.y1=i},rd=function(t,n,e){var r,i,o,a,u,s,c,f=this._x0,l=this._y0,h=this._x1,A=this._y1,p=[],d=this._root;for(d&&p.push(new ed(d,f,l,h,A)),null==e?e=1/0:(f=t-e,l=n-e,h=t+e,A=n+e,e*=e);s=p.pop();)if(!(!(d=s.node)||(i=s.x0)>h||(o=s.y0)>A||(a=s.x1)<f||(u=s.y1)<l))if(d.length){var g=(i+a)/2,y=(o+u)/2;p.push(new ed(d[3],g,y,a,u),new ed(d[2],i,y,g,u),new ed(d[1],g,o,a,y),new ed(d[0],i,o,g,y)),(c=(n>=y)<<1|t>=g)&&(s=p[p.length-1],p[p.length-1]=p[p.length-1-c],p[p.length-1-c]=s)}else{var v=t-+this._x.call(null,d.data),w=n-+this._y.call(null,d.data),x=v*v+w*w;if(x<e){var m=Math.sqrt(e=x);f=t-m,l=n-m,h=t+m,A=n+m,r=d.data}}return r},id=function(t){if(isNaN(o=+this._x.call(null,t))||isNaN(a=+this._y.call(null,t)))return this;var n,e,r,i,o,a,u,s,c,f,l,h,A=this._root,p=this._x0,d=this._y0,g=this._x1,y=this._y1;if(!A)return this;if(A.length)for(;;){if((c=o>=(u=(p+g)/2))?p=u:g=u,(f=a>=(s=(d+y)/2))?d=s:y=s,n=A,!(A=A[l=f<<1|c]))return this;if(!A.length)break;(n[l+1&3]||n[l+2&3]||n[l+3&3])&&(e=n,h=l)}for(;A.data!==t;)if(r=A,!(A=A.next))return this;return(i=A.next)&&delete A.next,r?(i?r.next=i:delete r.next,this):n?(i?n[l]=i:delete n[l],(A=n[0]||n[1]||n[2]||n[3])&&A===(n[3]||n[2]||n[1]||n[0])&&!A.length&&(e?e[h]=A:this._root=A),this):(this._root=i,this)},od=function(){return this._root},ad=function(){var t=0;return this.visit(function(n){if(!n.length)do++t;while(n=n.next)}),t},ud=function(t){var n,e,r,i,o,a,u=[],s=this._root;for(s&&u.push(new ed(s,this._x0,this._y0,this._x1,this._y1));n=u.pop();)if(!t(s=n.node,r=n.x0,i=n.y0,o=n.x1,a=n.y1)&&s.length){var c=(r+o)/2,f=(i+a)/2;(e=s[3])&&u.push(new ed(e,c,f,o,a)),(e=s[2])&&u.push(new ed(e,r,f,c,a)),(e=s[1])&&u.push(new ed(e,c,i,o,f)),(e=s[0])&&u.push(new ed(e,r,i,c,f))}return this},sd=function(t){var n,e=[],r=[];for(this._root&&e.push(new ed(this._root,this._x0,this._y0,this._x1,this._y1));n=e.pop();){var i=n.node;if(i.length){var o,a=n.x0,u=n.y0,s=n.x1,c=n.y1,f=(a+s)/2,l=(u+c)/2;(o=i[0])&&e.push(new ed(o,a,u,f,l)),(o=i[1])&&e.push(new ed(o,f,u,s,l)),(o=i[2])&&e.push(new ed(o,a,l,f,c)),(o=i[3])&&e.push(new ed(o,f,l,s,c))}r.push(n)}for(;n=r.pop();)t(n.node,n.x0,n.y0,n.x1,n.y1);return this},cd=function(t){return arguments.length?(this._x=t,this):this._x},fd=function(t){return arguments.length?(this._y=t,this):this._y},ld=nr.prototype=er.prototype;ld.copy=function(){var t,n,e=new er(this._x,this._y,this._x0,this._y0,this._x1,this._y1),r=this._root;if(!r)return e;if(!r.length)return e._root=rr(r),e;for(t=[{source:r,target:e._root=new Array(4)}];r=t.pop();)for(var i=0;i<4;++i)(n=r.source[i])&&(n.length?t.push({source:n,target:r.target[i]=new Array(4)}):r.target[i]=rr(n));return e},ld.add=Vp,ld.addAll=Xe,ld.cover=$p,ld.data=td,ld.extent=nd,ld.find=rd,ld.remove=id,ld.removeAll=Ve,ld.root=od,ld.size=ad,ld.visit=ud,ld.visitAfter=sd,ld.x=cd,ld.y=fd;var hd,Ad=function(t){function n(){function t(t,n,e,r,i){var o=t.data,u=t.r,A=l+u;{if(!o)return n>c+A||r<c-A||e>f+A||i<f-A;if(o.index>s.index){var p=c-o.x-o.vx,d=f-o.y-o.vy,g=p*p+d*d;g<A*A&&(0===p&&(p=Xp(),g+=p*p),0===d&&(d=Xp(),g+=d*d),g=(A-(g=Math.sqrt(g)))/g*a,s.vx+=(p*=g)*(A=(u*=u)/(h+u)),s.vy+=(d*=g)*A,o.vx-=p*(A=1-A),o.vy-=d*A)}}}for(var n,r,s,c,f,l,h,A=i.length,p=0;p<u;++p)for(r=nr(i,ir,or).visitAfter(e),n=0;n<A;++n)s=i[n],l=o[s.index],h=l*l,c=s.x+s.vx,f=s.y+s.vy,r.visit(t)}function e(t){if(t.data)return t.r=o[t.data.index];for(var n=t.r=0;n<4;++n)t[n]&&t[n].r>t.r&&(t.r=t[n].r)}function r(){if(i){var n,e,r=i.length;for(o=new Array(r),n=0;n<r;++n)e=i[n],o[e.index]=+t(e,n,i)}}var i,o,a=1,u=1;return"function"!=typeof t&&(t=Zp(null==t?1:+t)),n.initialize=function(t){i=t,r()},n.iterations=function(t){return arguments.length?(u=+t,n):u},n.strength=function(t){return arguments.length?(a=+t,n):a},n.radius=function(e){return arguments.length?(t="function"==typeof e?e:Zp(+e),r(),n):t},n},pd=function(t){function n(t){return 1/Math.min(c[t.source.index],c[t.target.index])}function e(n){for(var e=0,r=t.length;e<p;++e)for(var i,o,s,c,l,h,A,d=0;d<r;++d)i=t[d],o=i.source,s=i.target,c=s.x+s.vx-o.x-o.vx||Xp(),l=s.y+s.vy-o.y-o.vy||Xp(),h=Math.sqrt(c*c+l*l),h=(h-u[d])/h*n*a[d],c*=h,l*=h,s.vx-=c*(A=f[d]),s.vy-=l*A,o.vx+=c*(A=1-A),o.vy+=l*A}function r(){if(s){var n,e,r=s.length,h=t.length,A=je(s,l);for(n=0,c=new Array(r);n<h;++n)e=t[n],e.index=n,"object"!=typeof e.source&&(e.source=ur(A,e.source)),"object"!=typeof e.target&&(e.target=ur(A,e.target)),c[e.source.index]=(c[e.source.index]||0)+1,c[e.target.index]=(c[e.target.index]||0)+1;for(n=0,f=new Array(h);n<h;++n)e=t[n],f[n]=c[e.source.index]/(c[e.source.index]+c[e.target.index]);a=new Array(h),i(),u=new Array(h),o()}}function i(){if(s)for(var n=0,e=t.length;n<e;++n)a[n]=+h(t[n],n,t)}function o(){if(s)for(var n=0,e=t.length;n<e;++n)u[n]=+A(t[n],n,t)}var a,u,s,c,f,l=ar,h=n,A=Zp(30),p=1;return null==t&&(t=[]),e.initialize=function(t){s=t,r()},e.links=function(n){return arguments.length?(t=n,r(),e):t},e.id=function(t){return arguments.length?(l=t,e):l},e.iterations=function(t){return arguments.length?(p=+t,e):p},e.strength=function(t){return arguments.length?(h="function"==typeof t?t:Zp(+t),i(),e):h},e.distance=function(t){return arguments.length?(A="function"==typeof t?t:Zp(+t),o(),e):A},e},dd=10,gd=Math.PI*(3-Math.sqrt(5)),yd=function(t){function n(){e(),p.call("tick",o),a<u&&(h.stop(),p.call("end",o))}function e(){var n,e,r=t.length;for(a+=(c-a)*s,l.each(function(t){t(a)}),n=0;n<r;++n)e=t[n],null==e.fx?e.x+=e.vx*=f:(e.x=e.fx,e.vx=0),null==e.fy?e.y+=e.vy*=f:(e.y=e.fy,e.vy=0)}function r(){for(var n,e=0,r=t.length;e<r;++e){if(n=t[e],n.index=e,isNaN(n.x)||isNaN(n.y)){var i=dd*Math.sqrt(e),o=e*gd;
n.x=i*Math.cos(o),n.y=i*Math.sin(o)}(isNaN(n.vx)||isNaN(n.vy))&&(n.vx=n.vy=0)}}function i(n){return n.initialize&&n.initialize(t),n}var o,a=1,u=.001,s=1-Math.pow(u,1/300),c=0,f=.6,l=je(),h=gn(n),p=A("tick","end");return null==t&&(t=[]),r(),o={tick:e,restart:function(){return h.restart(n),o},stop:function(){return h.stop(),o},nodes:function(n){return arguments.length?(t=n,r(),l.each(i),o):t},alpha:function(t){return arguments.length?(a=+t,o):a},alphaMin:function(t){return arguments.length?(u=+t,o):u},alphaDecay:function(t){return arguments.length?(s=+t,o):+s},alphaTarget:function(t){return arguments.length?(c=+t,o):c},velocityDecay:function(t){return arguments.length?(f=1-t,o):1-f},force:function(t,n){return arguments.length>1?(null==n?l.remove(t):l.set(t,i(n)),o):l.get(t)},find:function(n,e,r){var i,o,a,u,s,c=0,f=t.length;for(null==r?r=1/0:r*=r,c=0;c<f;++c)u=t[c],i=n-u.x,o=e-u.y,a=i*i+o*o,a<r&&(s=u,r=a);return s},on:function(t,n){return arguments.length>1?(p.on(t,n),o):p.on(t)}}},vd=function(){function t(t){var n,u=i.length,s=nr(i,sr,cr).visitAfter(e);for(a=t,n=0;n<u;++n)o=i[n],s.visit(r)}function n(){if(i){var t,n,e=i.length;for(u=new Array(e),t=0;t<e;++t)n=i[t],u[n.index]=+s(n,t,i)}}function e(t){var n,e,r,i,o,a=0;if(t.length){for(r=i=o=0;o<4;++o)(n=t[o])&&(e=n.value)&&(a+=e,r+=e*n.x,i+=e*n.y);t.x=r/a,t.y=i/a}else{n=t,n.x=n.data.x,n.y=n.data.y;do a+=u[n.data.index];while(n=n.next)}t.value=a}function r(t,n,e,r){if(!t.value)return!0;var i=t.x-o.x,s=t.y-o.y,h=r-n,A=i*i+s*s;if(h*h/l<A)return A<f&&(0===i&&(i=Xp(),A+=i*i),0===s&&(s=Xp(),A+=s*s),A<c&&(A=Math.sqrt(c*A)),o.vx+=i*t.value*a/A,o.vy+=s*t.value*a/A),!0;if(!(t.length||A>=f)){(t.data!==o||t.next)&&(0===i&&(i=Xp(),A+=i*i),0===s&&(s=Xp(),A+=s*s),A<c&&(A=Math.sqrt(c*A)));do t.data!==o&&(h=u[t.data.index]*a/A,o.vx+=i*h,o.vy+=s*h);while(t=t.next)}}var i,o,a,u,s=Zp(-30),c=1,f=1/0,l=.81;return t.initialize=function(t){i=t,n()},t.strength=function(e){return arguments.length?(s="function"==typeof e?e:Zp(+e),n(),t):s},t.distanceMin=function(n){return arguments.length?(c=n*n,t):Math.sqrt(c)},t.distanceMax=function(n){return arguments.length?(f=n*n,t):Math.sqrt(f)},t.theta=function(n){return arguments.length?(l=n*n,t):Math.sqrt(l)},t},wd=function(t){function n(t){for(var n,e=0,a=r.length;e<a;++e)n=r[e],n.vx+=(o[e]-n.x)*i[e]*t}function e(){if(r){var n,e=r.length;for(i=new Array(e),o=new Array(e),n=0;n<e;++n)i[n]=isNaN(o[n]=+t(r[n],n,r))?0:+a(r[n],n,r)}}var r,i,o,a=Zp(.1);return"function"!=typeof t&&(t=Zp(null==t?0:+t)),n.initialize=function(t){r=t,e()},n.strength=function(t){return arguments.length?(a="function"==typeof t?t:Zp(+t),e(),n):a},n.x=function(r){return arguments.length?(t="function"==typeof r?r:Zp(+r),e(),n):t},n},xd=function(t){function n(t){for(var n,e=0,a=r.length;e<a;++e)n=r[e],n.vy+=(o[e]-n.y)*i[e]*t}function e(){if(r){var n,e=r.length;for(i=new Array(e),o=new Array(e),n=0;n<e;++n)i[n]=isNaN(o[n]=+t(r[n],n,r))?0:+a(r[n],n,r)}}var r,i,o,a=Zp(.1);return"function"!=typeof t&&(t=Zp(null==t?0:+t)),n.initialize=function(t){r=t,e()},n.strength=function(t){return arguments.length?(a="function"==typeof t?t:Zp(+t),e(),n):a},n.y=function(r){return arguments.length?(t="function"==typeof r?r:Zp(+r),e(),n):t},n},md=function(t,n){if((e=(t=n?t.toExponential(n-1):t.toExponential()).indexOf("e"))<0)return null;var e,r=t.slice(0,e);return[r.length>1?r[0]+r.slice(2):r,+t.slice(e+1)]},bd=function(t){return t=md(Math.abs(t)),t?t[1]:NaN},Bd=function(t,n){return function(e,r){for(var i=e.length,o=[],a=0,u=t[0],s=0;i>0&&u>0&&(s+u+1>r&&(u=Math.max(1,r-s)),o.push(e.substring(i-=u,i+u)),!((s+=u+1)>r));)u=t[a=(a+1)%t.length];return o.reverse().join(n)}},Ed=function(t,n){t=t.toPrecision(n);t:for(var e,r=t.length,i=1,o=-1;i<r;++i)switch(t[i]){case".":o=e=i;break;case"0":0===o&&(o=i),e=i;break;case"e":break t;default:o>0&&(o=0)}return o>0?t.slice(0,o)+t.slice(e+1):t},_d=function(t,n){var e=md(t,n);if(!e)return t+"";var r=e[0],i=e[1],o=i-(hd=3*Math.max(-8,Math.min(8,Math.floor(i/3))))+1,a=r.length;return o===a?r:o>a?r+new Array(o-a+1).join("0"):o>0?r.slice(0,o)+"."+r.slice(o):"0."+new Array(1-o).join("0")+md(t,Math.max(0,n+o-1))[0]},Md=function(t,n){var e=md(t,n);if(!e)return t+"";var r=e[0],i=e[1];return i<0?"0."+new Array(-i).join("0")+r:r.length>i+1?r.slice(0,i+1)+"."+r.slice(i+1):r+new Array(i-r.length+2).join("0")},Cd={"":Ed,"%":function(t,n){return(100*t).toFixed(n)},b:function(t){return Math.round(t).toString(2)},c:function(t){return t+""},d:function(t){return Math.round(t).toString(10)},e:function(t,n){return t.toExponential(n)},f:function(t,n){return t.toFixed(n)},g:function(t,n){return t.toPrecision(n)},o:function(t){return Math.round(t).toString(8)},p:function(t,n){return Md(100*t,n)},r:Md,s:_d,X:function(t){return Math.round(t).toString(16).toUpperCase()},x:function(t){return Math.round(t).toString(16)}},Qd=/^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i,Gd=function(t){return new fr(t)};fr.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(null==this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(null==this.precision?"":"."+Math.max(0,0|this.precision))+this.type};var Hd,kd=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"],Td=function(t){function n(t){function n(t){var n,i,s,v=p,w=d;if("c"===A)w=g(t)+w,t="";else{t=+t;var x=(t<0||1/t<0)&&(t*=-1,!0);if(t=g(t,h),x)for(n=-1,i=t.length,x=!1;++n<i;)if(s=t.charCodeAt(n),48<s&&s<58||"x"===A&&96<s&&s<103||"X"===A&&64<s&&s<71){x=!0;break}if(v=(x?"("===u?u:"-":"-"===u||"("===u?"":u)+v,w=w+("s"===A?kd[8+hd/3]:"")+(x&&"("===u?")":""),y)for(n=-1,i=t.length;++n<i;)if(s=t.charCodeAt(n),48>s||s>57){w=(46===s?o+t.slice(n+1):t.slice(n))+w,t=t.slice(0,n);break}}l&&!c&&(t=r(t,1/0));var m=v.length+t.length+w.length,b=m<f?new Array(f-m+1).join(e):"";switch(l&&c&&(t=r(b+t,b.length?f-w.length:1/0),b=""),a){case"<":return v+t+w+b;case"=":return v+b+t+w;case"^":return b.slice(0,m=b.length>>1)+v+t+w+b.slice(m)}return b+v+t+w}t=Gd(t);var e=t.fill,a=t.align,u=t.sign,s=t.symbol,c=t.zero,f=t.width,l=t.comma,h=t.precision,A=t.type,p="$"===s?i[0]:"#"===s&&/[boxX]/.test(A)?"0"+A.toLowerCase():"",d="$"===s?i[1]:/[%p]/.test(A)?"%":"",g=Cd[A],y=!A||/[defgprs%]/.test(A);return h=null==h?A?6:12:/[gprs]/.test(A)?Math.max(1,Math.min(21,h)):Math.max(0,Math.min(20,h)),n.toString=function(){return t+""},n}function e(t,e){var r=n((t=Gd(t),t.type="f",t)),i=3*Math.max(-8,Math.min(8,Math.floor(bd(e)/3))),o=Math.pow(10,-i),a=kd[8+i/3];return function(t){return r(o*t)+a}}var r=t.grouping&&t.thousands?Bd(t.grouping,t.thousands):lr,i=t.currency,o=t.decimal;return{format:n,formatPrefix:e}};hr({decimal:".",thousands:",",grouping:[3],currency:["$",""]});var Yd=function(t){return Math.max(0,-bd(Math.abs(t)))},Id=function(t,n){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(bd(n)/3)))-bd(Math.abs(t)))},Sd=function(t,n){return t=Math.abs(t),n=Math.abs(n)-t,Math.max(0,bd(n)-bd(t))+1},Od=function(){return new Ar};Ar.prototype={constructor:Ar,reset:function(){this.s=this.t=0},add:function(t){pr(pg,t,this.t),pr(this,pg.s,this.s),this.s?this.t+=pg.t:this.s=pg.t},valueOf:function(){return this.s}};var Nd,qd,Pd,jd,Dd,zd,Ld,Kd,Ud,Rd,Fd,Jd,Wd,Zd,Xd,Vd,$d,tg,ng,eg,rg,ig,og,ag,ug,sg,cg,fg,lg,hg,Ag,pg=new Ar,dg=1e-6,gg=1e-12,yg=Math.PI,vg=yg/2,wg=yg/4,xg=2*yg,mg=180/yg,bg=yg/180,Bg=Math.abs,Eg=Math.atan,_g=Math.atan2,Mg=Math.cos,Cg=Math.ceil,Qg=Math.exp,Gg=Math.log,Hg=Math.pow,kg=Math.sin,Tg=Math.sign||function(t){return t>0?1:t<0?-1:0},Yg=Math.sqrt,Ig=Math.tan,Sg={Feature:function(t,n){wr(t.geometry,n)},FeatureCollection:function(t,n){for(var e=t.features,r=-1,i=e.length;++r<i;)wr(e[r].geometry,n)}},Og={Sphere:function(t,n){n.sphere()},Point:function(t,n){t=t.coordinates,n.point(t[0],t[1],t[2])},MultiPoint:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)t=e[r],n.point(t[0],t[1],t[2])},LineString:function(t,n){xr(t.coordinates,n,0)},MultiLineString:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)xr(e[r],n,0)},Polygon:function(t,n){mr(t.coordinates,n)},MultiPolygon:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)mr(e[r],n)},GeometryCollection:function(t,n){for(var e=t.geometries,r=-1,i=e.length;++r<i;)wr(e[r],n)}},Ng=function(t,n){t&&Sg.hasOwnProperty(t.type)?Sg[t.type](t,n):wr(t,n)},qg=Od(),Pg=Od(),jg={point:vr,lineStart:vr,lineEnd:vr,polygonStart:function(){qg.reset(),jg.lineStart=br,jg.lineEnd=Br},polygonEnd:function(){var t=+qg;Pg.add(t<0?xg+t:t),this.lineStart=this.lineEnd=this.point=vr},sphere:function(){Pg.add(xg)}},Dg=function(t){return Pg.reset(),Ng(t,jg),2*Pg},zg=Od(),Lg={point:Yr,lineStart:Sr,lineEnd:Or,polygonStart:function(){Lg.point=Nr,Lg.lineStart=qr,Lg.lineEnd=Pr,zg.reset(),jg.polygonStart()},polygonEnd:function(){jg.polygonEnd(),Lg.point=Yr,Lg.lineStart=Sr,Lg.lineEnd=Or,qg<0?(zd=-(Kd=180),Ld=-(Ud=90)):zg>dg?Ud=90:zg<-dg&&(Ld=-90),Xd[0]=zd,Xd[1]=Kd}},Kg=function(t){var n,e,r,i,o,a,u;if(Ud=Kd=-(zd=Ld=1/0),Zd=[],Ng(t,Lg),e=Zd.length){for(Zd.sort(Dr),n=1,r=Zd[0],o=[r];n<e;++n)i=Zd[n],zr(r,i[0])||zr(r,i[1])?(jr(r[0],i[1])>jr(r[0],r[1])&&(r[1]=i[1]),jr(i[0],r[1])>jr(r[0],r[1])&&(r[0]=i[0])):o.push(r=i);for(a=-(1/0),e=o.length-1,n=0,r=o[e];n<=e;r=i,++n)i=o[n],(u=jr(r[1],i[0]))>a&&(a=u,zd=i[0],Kd=r[1])}return Zd=Xd=null,zd===1/0||Ld===1/0?[[NaN,NaN],[NaN,NaN]]:[[zd,Ld],[Kd,Ud]]},Ug={sphere:vr,point:Lr,lineStart:Ur,lineEnd:Jr,polygonStart:function(){Ug.lineStart=Wr,Ug.lineEnd=Zr},polygonEnd:function(){Ug.lineStart=Ur,Ug.lineEnd=Jr}},Rg=function(t){Vd=$d=tg=ng=eg=rg=ig=og=ag=ug=sg=0,Ng(t,Ug);var n=ag,e=ug,r=sg,i=n*n+e*e+r*r;return i<gg&&(n=rg,e=ig,r=og,$d<dg&&(n=tg,e=ng,r=eg),i=n*n+e*e+r*r,i<gg)?[NaN,NaN]:[_g(e,n)*mg,gr(r/Yg(i))*mg]},Fg=function(t){return function(){return t}},Jg=function(t,n){function e(e,r){return e=t(e,r),n(e[0],e[1])}return t.invert&&n.invert&&(e.invert=function(e,r){return e=n.invert(e,r),e&&t.invert(e[0],e[1])}),e};$r.invert=$r;var Wg,Zg,Xg,Vg,$g,ty,ny,ey,ry,iy,oy,ay=function(t){function n(n){return n=t(n[0]*bg,n[1]*bg),n[0]*=mg,n[1]*=mg,n}return t=ti(t[0]*bg,t[1]*bg,t.length>2?t[2]*bg:0),n.invert=function(n){return n=t.invert(n[0]*bg,n[1]*bg),n[0]*=mg,n[1]*=mg,n},n},uy=function(){function t(t,n){e.push(t=r(t,n)),t[0]*=mg,t[1]*=mg}function n(){var t=i.apply(this,arguments),n=o.apply(this,arguments)*bg,s=a.apply(this,arguments)*bg;return e=[],r=ti(-t[0]*bg,-t[1]*bg,0).invert,ii(u,n,s,1),t={type:"Polygon",coordinates:[e]},e=r=null,t}var e,r,i=Fg([0,0]),o=Fg(90),a=Fg(6),u={point:t};return n.center=function(t){return arguments.length?(i="function"==typeof t?t:Fg([+t[0],+t[1]]),n):i},n.radius=function(t){return arguments.length?(o="function"==typeof t?t:Fg(+t),n):o},n.precision=function(t){return arguments.length?(a="function"==typeof t?t:Fg(+t),n):a},n},sy=function(){var t,n=[];return{point:function(n,e){t.push([n,e])},lineStart:function(){n.push(t=[])},lineEnd:vr,rejoin:function(){n.length>1&&n.push(n.pop().concat(n.shift()))},result:function(){var e=n;return n=[],t=null,e}}},cy=function(t,n,e,r,i,o){var a,u=t[0],s=t[1],c=n[0],f=n[1],l=0,h=1,A=c-u,p=f-s;if(a=e-u,A||!(a>0)){if(a/=A,A<0){if(a<l)return;a<h&&(h=a)}else if(A>0){if(a>h)return;a>l&&(l=a)}if(a=i-u,A||!(a<0)){if(a/=A,A<0){if(a>h)return;a>l&&(l=a)}else if(A>0){if(a<l)return;a<h&&(h=a)}if(a=r-s,p||!(a>0)){if(a/=p,p<0){if(a<l)return;a<h&&(h=a)}else if(p>0){if(a>h)return;a>l&&(l=a)}if(a=o-s,p||!(a<0)){if(a/=p,p<0){if(a>h)return;a>l&&(l=a)}else if(p>0){if(a<l)return;a<h&&(h=a)}return l>0&&(t[0]=u+l*A,t[1]=s+l*p),h<1&&(n[0]=u+h*A,n[1]=s+h*p),!0}}}}},fy=function(t,n){return Bg(t[0]-n[0])<dg&&Bg(t[1]-n[1])<dg},ly=function(t,n,e,r,i){var o,a,u=[],s=[];if(t.forEach(function(t){if(!((n=t.length-1)<=0)){var n,e,r=t[0],a=t[n];if(fy(r,a)){for(i.lineStart(),o=0;o<n;++o)i.point((r=t[o])[0],r[1]);return void i.lineEnd()}u.push(e=new ai(r,t,null,!0)),s.push(e.o=new ai(r,null,e,!1)),u.push(e=new ai(a,t,null,!1)),s.push(e.o=new ai(a,null,e,!0))}}),u.length){for(s.sort(n),ui(u),ui(s),o=0,a=s.length;o<a;++o)s[o].e=e=!e;for(var c,f,l=u[0];;){for(var h=l,A=!0;h.v;)if((h=h.n)===l)return;c=h.z,i.lineStart();do{if(h.v=h.o.v=!0,h.e){if(A)for(o=0,a=c.length;o<a;++o)i.point((f=c[o])[0],f[1]);else r(h.x,h.n.x,1,i);h=h.n}else{if(A)for(c=h.p.z,o=c.length-1;o>=0;--o)i.point((f=c[o])[0],f[1]);else r(h.x,h.p.x,-1,i);h=h.p}h=h.o,c=h.z,A=!A}while(!h.v);i.lineEnd()}}},hy=1e9,Ay=-hy,py=function(){var t,n,e,r=0,i=0,o=960,a=500;return e={stream:function(e){return t&&n===e?t:t=si(r,i,o,a)(n=e)},extent:function(u){return arguments.length?(r=+u[0][0],i=+u[0][1],o=+u[1][0],a=+u[1][1],t=n=null,e):[[r,i],[o,a]]}}},dy=Od(),gy={sphere:vr,point:vr,lineStart:ci,lineEnd:vr,polygonStart:vr,polygonEnd:vr},yy=function(t){return dy.reset(),Ng(t,gy),+dy},vy=[null,null],wy={type:"LineString",coordinates:vy},xy=function(t,n){return vy[0]=t,vy[1]=n,yy(wy)},my=function(t,n){var e=t[0]*bg,r=t[1]*bg,i=n[0]*bg,o=n[1]*bg,a=Mg(r),u=kg(r),s=Mg(o),c=kg(o),f=a*Mg(e),l=a*kg(e),h=s*Mg(i),A=s*kg(i),p=2*gr(Yg(yr(o-r)+a*s*yr(i-e))),d=kg(p),g=p?function(t){var n=kg(t*=p)/d,e=kg(p-t)/d,r=e*f+n*h,i=e*l+n*A,o=e*u+n*c;return[_g(i,r)*mg,_g(o,Yg(r*r+i*i))*mg]}:function(){return[e*mg,r*mg]};return g.distance=p,g},by=function(t){return t},By=Od(),Ey=Od(),_y={point:vr,lineStart:vr,lineEnd:vr,polygonStart:function(){_y.lineStart=yi,_y.lineEnd=xi},polygonEnd:function(){_y.lineStart=_y.lineEnd=_y.point=vr,By.add(Bg(Ey)),Ey.reset()},result:function(){var t=By/2;return By.reset(),t}},My=1/0,Cy=My,Qy=-My,Gy=Qy,Hy={point:mi,lineStart:vr,lineEnd:vr,polygonStart:vr,polygonEnd:vr,result:function(){var t=[[My,Cy],[Qy,Gy]];return Qy=Gy=-(Cy=My=1/0),t}},ky=0,Ty=0,Yy=0,Iy=0,Sy=0,Oy=0,Ny=0,qy=0,Py=0,jy={point:bi,lineStart:Bi,lineEnd:Mi,polygonStart:function(){jy.lineStart=Ci,jy.lineEnd=Qi},polygonEnd:function(){jy.point=bi,jy.lineStart=Bi,jy.lineEnd=Mi},result:function(){var t=Py?[Ny/Py,qy/Py]:Oy?[Iy/Oy,Sy/Oy]:Yy?[ky/Yy,Ty/Yy]:[NaN,NaN];return ky=Ty=Yy=Iy=Sy=Oy=Ny=qy=Py=0,t}};ki.prototype={_radius:4.5,pointRadius:function(t){return this._radius=t,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){0===this._line&&this._context.closePath(),this._point=NaN},point:function(t,n){switch(this._point){case 0:this._context.moveTo(t,n),this._point=1;break;case 1:this._context.lineTo(t,n);break;default:this._context.moveTo(t+this._radius,n),this._context.arc(t,n,this._radius,0,xg)}},result:vr},Ti.prototype={_circle:Yi(4.5),pointRadius:function(t){return this._circle=Yi(t),this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){0===this._line&&this._string.push("Z"),this._point=NaN},point:function(t,n){switch(this._point){case 0:this._string.push("M",t,",",n),this._point=1;break;case 1:this._string.push("L",t,",",n);break;default:this._string.push("M",t,",",n,this._circle)}},result:function(){if(this._string.length){var t=this._string.join("");return this._string=[],t}}};var Dy=function(t,n){function e(t){return t&&("function"==typeof o&&i.pointRadius(+o.apply(this,arguments)),Ng(t,r(i))),i.result()}var r,i,o=4.5;return e.area=function(t){return Ng(t,r(_y)),_y.result()},e.bounds=function(t){return Ng(t,r(Hy)),Hy.result()},e.centroid=function(t){return Ng(t,r(jy)),jy.result()},e.projection=function(n){return arguments.length?(r=null==n?(t=null,by):(t=n).stream,e):t},e.context=function(t){return arguments.length?(i=null==t?(n=null,new Ti):new ki(n=t),"function"!=typeof o&&i.pointRadius(o),e):n},e.pointRadius=function(t){return arguments.length?(o="function"==typeof t?t:(i.pointRadius(+t),+t),e):o},e.projection(t).context(n)},zy=Od(),Ly=function(t,n){var e=n[0],r=n[1],i=[kg(e),-Mg(e),0],o=0,a=0;zy.reset();for(var u=0,s=t.length;u<s;++u)if(f=(c=t[u]).length)for(var c,f,l=c[f-1],h=l[0],A=l[1]/2+wg,p=kg(A),d=Mg(A),g=0;g<f;++g,h=v,p=x,d=m,l=y){var y=c[g],v=y[0],w=y[1]/2+wg,x=kg(w),m=Mg(w),b=v-h,B=b>=0?1:-1,E=B*b,_=E>yg,M=p*x;if(zy.add(_g(M*B*kg(E),d*m+M*Mg(E))),o+=_?b+B*xg:b,_^h>=e^v>=e){var C=Gr(Cr(l),Cr(y));Tr(C);var Q=Gr(i,C);Tr(Q);var G=(_^b>=0?-1:1)*gr(Q[2]);(r>G||r===G&&(C[0]||C[1]))&&(a+=_^b>=0?1:-1)}}return(o<-dg||o<dg&&zy<-dg)^1&a},Ky=function(t,n,e,r){return function(i,o){function a(n,e){var r=i(n,e);t(n=r[0],e=r[1])&&o.point(n,e)}function u(t,n){var e=i(t,n);g.point(e[0],e[1])}function s(){m.point=u,g.lineStart()}function c(){m.point=a,g.lineEnd()}function f(t,n){d.push([t,n]);var e=i(t,n);w.point(e[0],e[1])}function l(){w.lineStart(),d=[]}function h(){f(d[0][0],d[0][1]),w.lineEnd();var t,n,e,r,i=w.clean(),a=v.result(),u=a.length;if(d.pop(),A.push(d),d=null,u)if(1&i){if(e=a[0],(n=e.length-1)>0){for(x||(o.polygonStart(),x=!0),o.lineStart(),t=0;t<n;++t)o.point((r=e[t])[0],r[1]);o.lineEnd()}}else u>1&&2&i&&a.push(a.pop().concat(a.shift())),p.push(a.filter(Ii))}var A,p,d,g=n(o),y=i.invert(r[0],r[1]),v=sy(),w=n(v),x=!1,m={point:a,lineStart:s,lineEnd:c,polygonStart:function(){m.point=f,m.lineStart=l,m.lineEnd=h,p=[],A=[]},polygonEnd:function(){m.point=a,m.lineStart=s,m.lineEnd=c,p=Xc(p);var t=Ly(A,y);p.length?(x||(o.polygonStart(),x=!0),ly(p,Si,t,e,o)):t&&(x||(o.polygonStart(),x=!0),o.lineStart(),e(null,null,1,o),o.lineEnd()),x&&(o.polygonEnd(),x=!1),p=A=null},sphere:function(){o.polygonStart(),o.lineStart(),e(null,null,1,o),o.lineEnd(),o.polygonEnd()}};return m}},Uy=Ky(function(){return!0},Oi,qi,[-yg,-vg]),Ry=function(t,n){function e(e,r,i,o){ii(o,t,n,i,e,r)}function r(t,n){return Mg(t)*Mg(n)>u}function i(t){var n,e,i,u,f;return{lineStart:function(){u=i=!1,f=1},point:function(l,h){var A,p=[l,h],d=r(l,h),g=s?d?0:a(l,h):d?a(l+(l<0?yg:-yg),h):0;if(!n&&(u=i=d)&&t.lineStart(),d!==i&&(A=o(n,p),(fy(n,A)||fy(p,A))&&(p[0]+=dg,p[1]+=dg,d=r(p[0],p[1]))),d!==i)f=0,d?(t.lineStart(),A=o(p,n),t.point(A[0],A[1])):(A=o(n,p),t.point(A[0],A[1]),t.lineEnd()),n=A;else if(c&&n&&s^d){var y;g&e||!(y=o(p,n,!0))||(f=0,s?(t.lineStart(),t.point(y[0][0],y[0][1]),t.point(y[1][0],y[1][1]),t.lineEnd()):(t.point(y[1][0],y[1][1]),t.lineEnd(),t.lineStart(),t.point(y[0][0],y[0][1])))}!d||n&&fy(n,p)||t.point(p[0],p[1]),n=p,i=d,e=g},lineEnd:function(){i&&t.lineEnd(),n=null},clean:function(){return f|(u&&i)<<1}}}function o(t,n,e){var r=Cr(t),i=Cr(n),o=[1,0,0],a=Gr(r,i),s=Qr(a,a),c=a[0],f=s-c*c;if(!f)return!e&&t;var l=u*s/f,h=-u*c/f,A=Gr(o,a),p=kr(o,l),d=kr(a,h);Hr(p,d);var g=A,y=Qr(p,g),v=Qr(g,g),w=y*y-v*(Qr(p,p)-1);if(!(w<0)){var x=Yg(w),m=kr(g,(-y-x)/v);if(Hr(m,p),m=Mr(m),!e)return m;var b,B=t[0],E=n[0],_=t[1],M=n[1];E<B&&(b=B,B=E,E=b);var C=E-B,Q=Bg(C-yg)<dg,G=Q||C<dg;if(!Q&&M<_&&(b=_,_=M,M=b),G?Q?_+M>0^m[1]<(Bg(m[0]-B)<dg?_:M):_<=m[1]&&m[1]<=M:C>yg^(B<=m[0]&&m[0]<=E)){var H=kr(g,(-y+x)/v);return Hr(H,p),[m,Mr(H)]}}}function a(n,e){var r=s?t:yg-t,i=0;return n<-r?i|=1:n>r&&(i|=2),e<-r?i|=4:e>r&&(i|=8),i}var u=Mg(t),s=u>0,c=Bg(u)>dg;return Ky(r,i,e,s?[0,-t]:[-yg,t-yg])},Fy=function(t){return{stream:Pi(t)}};ji.prototype={constructor:ji,point:function(t,n){this.stream.point(t,n)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};var Jy=16,Wy=Mg(30*bg),Zy=function(t,n){return+n?Ki(t,n):Li(t)},Xy=Pi({point:function(t,n){this.stream.point(t*bg,n*bg)}}),Vy=function(){return Fi(Wi).scale(155.424).center([0,33.6442])},$y=function(){return Vy().parallels([29.5,45.5]).scale(1070).translate([480,250]).rotate([96,0]).center([-.6,38.7])},tv=function(){function t(t){var n=t[0],e=t[1];return u=null,i.point(n,e),u||(o.point(n,e),u)||(a.point(n,e),u)}function n(){return e=r=null,t}var e,r,i,o,a,u,s=$y(),c=Vy().rotate([154,0]).center([-2,58.5]).parallels([55,65]),f=Vy().rotate([157,0]).center([-3,19.9]).parallels([8,18]),l={point:function(t,n){u=[t,n]}};return t.invert=function(t){var n=s.scale(),e=s.translate(),r=(t[0]-e[0])/n,i=(t[1]-e[1])/n;return(i>=.12&&i<.234&&r>=-.425&&r<-.214?c:i>=.166&&i<.234&&r>=-.214&&r<-.115?f:s).invert(t)},t.stream=function(t){return e&&r===t?e:e=Zi([s.stream(r=t),c.stream(t),f.stream(t)])},t.precision=function(t){return arguments.length?(s.precision(t),c.precision(t),f.precision(t),n()):s.precision()},t.scale=function(n){return arguments.length?(s.scale(n),c.scale(.35*n),f.scale(n),t.translate(s.translate())):s.scale()},t.translate=function(t){if(!arguments.length)return s.translate();var e=s.scale(),r=+t[0],u=+t[1];return i=s.translate(t).clipExtent([[r-.455*e,u-.238*e],[r+.455*e,u+.238*e]]).stream(l),o=c.translate([r-.307*e,u+.201*e]).clipExtent([[r-.425*e+dg,u+.12*e+dg],[r-.214*e-dg,u+.234*e-dg]]).stream(l),a=f.translate([r-.205*e,u+.212*e]).clipExtent([[r-.214*e+dg,u+.166*e+dg],[r-.115*e-dg,u+.234*e-dg]]).stream(l),n()},t.fitExtent=function(n,e){return Di(t,n,e)},t.fitSize=function(n,e){return zi(t,n,e)},t.scale(1070)},nv=Xi(function(t){return Yg(2/(1+t))});nv.invert=Vi(function(t){return 2*gr(t/2)});var ev=function(){return Ui(nv).scale(124.75).clipAngle(179.999)},rv=Xi(function(t){return(t=dr(t))&&t/kg(t)});rv.invert=Vi(function(t){return t});var iv=function(){return Ui(rv).scale(79.4188).clipAngle(179.999)};$i.invert=function(t,n){return[t,2*Eg(Qg(n))-vg]};var ov=function(){return to($i).scale(961/xg)},av=function(){return Fi(eo).scale(109.5).parallels([30,30])};ro.invert=ro;var uv=function(){return Ui(ro).scale(152.63)},sv=function(){return Fi(io).scale(131.154).center([0,13.9389])};oo.invert=Vi(Eg);var cv=function(){return Ui(oo).scale(144.049).clipAngle(60)},fv=function(){function t(){return i=o=null,a}var n,e,r,i,o,a,u=1,s=0,c=0,f=1,l=1,h=by,A=null,p=by;return a={stream:function(t){return i&&o===t?i:i=h(p(o=t))},clipExtent:function(i){return arguments.length?(p=null==i?(A=n=e=r=null,by):si(A=+i[0][0],n=+i[0][1],e=+i[1][0],r=+i[1][1]),t()):null==A?null:[[A,n],[e,r]]},scale:function(n){return arguments.length?(h=ao((u=+n)*f,u*l,s,c),t()):u},translate:function(n){return arguments.length?(h=ao(u*f,u*l,s=+n[0],c=+n[1]),t()):[s,c]},reflectX:function(n){return arguments.length?(h=ao(u*(f=n?-1:1),u*l,s,c),t()):f<0},reflectY:function(n){return arguments.length?(h=ao(u*f,u*(l=n?-1:1),s,c),t()):l<0},fitExtent:function(t,n){return Di(a,t,n)},fitSize:function(t,n){return zi(a,t,n)}}};uo.invert=Vi(gr);var lv=function(){return Ui(uo).scale(249.5).clipAngle(90+dg)};so.invert=Vi(function(t){return 2*Eg(t)});var hv=function(){return Ui(so).scale(250).clipAngle(142)};co.invert=function(t,n){return[-n,2*Eg(Qg(t))-vg]};var Av=function(){var t=to(co),n=t.center,e=t.rotate;return t.center=function(t){return arguments.length?n([-t[1],t[0]]):(t=n(),[t[1],-t[0]])},t.rotate=function(t){return arguments.length?e([t[0],t[1],t.length>2?t[2]+90:90]):(t=e(),[t[0],t[1],t[2]-90])},e([0,0,90]).scale(159.155)},pv=function(){function t(t){var o,a=0;t.eachAfter(function(t){var e=t.children;e?(t.x=lo(e),t.y=Ao(e)):(t.x=o?a+=n(t,o):0,t.y=0,o=t)});var u=go(t),s=yo(t),c=u.x-n(u,s)/2,f=s.x+n(s,u)/2;return t.eachAfter(i?function(n){n.x=(n.x-t.x)*e,n.y=(t.y-n.y)*r}:function(n){n.x=(n.x-c)/(f-c)*e,n.y=(1-(t.y?n.y/t.y:1))*r})}var n=fo,e=1,r=1,i=!1;return t.separation=function(e){return arguments.length?(n=e,t):n},t.size=function(n){return arguments.length?(i=!1,e=+n[0],r=+n[1],t):i?null:[e,r]},t.nodeSize=function(n){return arguments.length?(i=!0,e=+n[0],r=+n[1],t):i?[e,r]:null},t},dv=function(t){var n,e,r,i,o=this,a=[o];do for(n=a.reverse(),a=[];o=n.pop();)if(t(o),e=o.children)for(r=0,i=e.length;r<i;++r)a.push(e[r]);while(a.length);return this},gv=function(t){for(var n,e,r=this,i=[r];r=i.pop();)if(t(r),n=r.children)for(e=n.length-1;e>=0;--e)i.push(n[e]);return this},yv=function(t){for(var n,e,r,i=this,o=[i],a=[];i=o.pop();)if(a.push(i),n=i.children)for(e=0,r=n.length;e<r;++e)o.push(n[e]);for(;i=a.pop();)t(i);return this},vv=function(t){return this.eachAfter(function(n){for(var e=+t(n.data)||0,r=n.children,i=r&&r.length;--i>=0;)e+=r[i].value;n.value=e})},wv=function(t){return this.eachBefore(function(n){n.children&&n.children.sort(t)})},xv=function(t){for(var n=this,e=vo(n,t),r=[n];n!==e;)n=n.parent,r.push(n);for(var i=r.length;t!==e;)r.splice(i,0,t),t=t.parent;return r},mv=function(){for(var t=this,n=[t];t=t.parent;)n.push(t);return n},bv=function(){var t=[];return this.each(function(n){t.push(n)}),t},Bv=function(){var t=[];return this.eachBefore(function(n){n.children||t.push(n)}),t},Ev=function(){var t=this,n=[];return t.each(function(e){e!==t&&n.push({source:e.parent,target:e})}),n};Eo.prototype=wo.prototype={constructor:Eo,each:dv,eachAfter:yv,eachBefore:gv,sum:vv,sort:wv,path:xv,ancestors:mv,descendants:bv,leaves:Bv,links:Ev,copy:xo};var _v=function(t){for(var n,e=(t=t.slice()).length,r=null,i=r;e;){var o=new _o(t[e-1]);i=i?i.next=o:r=o,t[n]=t[--e]}return{head:r,tail:i}},Mv=function(t){return Co(_v(t),[])},Cv=function(t){return So(t),t},Qv=function(t){return function(){return t}},Gv=function(){function t(t){return t.x=e/2,t.y=r/2,n?t.eachBefore(jo(n)).eachAfter(Do(i,.5)).eachBefore(zo(1)):t.eachBefore(jo(Po)).eachAfter(Do(qo,1)).eachAfter(Do(i,t.r/Math.min(e,r))).eachBefore(zo(Math.min(e,r)/(2*t.r))),t}var n=null,e=1,r=1,i=qo;return t.radius=function(e){return arguments.length?(n=Oo(e),t):n},t.size=function(n){return arguments.length?(e=+n[0],r=+n[1],t):[e,r]},t.padding=function(n){return arguments.length?(i="function"==typeof n?n:Qv(+n),t):i},t},Hv=function(t){t.x0=Math.round(t.x0),t.y0=Math.round(t.y0),t.x1=Math.round(t.x1),t.y1=Math.round(t.y1)},kv=function(t,n,e,r,i){for(var o,a=t.children,u=-1,s=a.length,c=t.value&&(r-n)/t.value;++u<s;)o=a[u],o.y0=e,o.y1=i,o.x0=n,o.x1=n+=o.value*c},Tv=function(){function t(t){var a=t.height+1;return t.x0=t.y0=i,t.x1=e,t.y1=r/a,t.eachBefore(n(r,a)),o&&t.eachBefore(Hv),t}function n(t,n){return function(e){e.children&&kv(e,e.x0,t*(e.depth+1)/n,e.x1,t*(e.depth+2)/n);var r=e.x0,o=e.y0,a=e.x1-i,u=e.y1-i;a<r&&(r=a=(r+a)/2),u<o&&(o=u=(o+u)/2),e.x0=r,e.y0=o,e.x1=a,e.y1=u}}var e=1,r=1,i=0,o=!1;return t.round=function(n){return arguments.length?(o=!!n,t):o},t.size=function(n){return arguments.length?(e=+n[0],r=+n[1],t):[e,r]},t.padding=function(n){return arguments.length?(i=+n,t):i},t},Yv="$",Iv={depth:-1},Sv={},Ov=function(){function t(t){var r,i,o,a,u,s,c,f=t.length,l=new Array(f),h={};for(i=0;i<f;++i)r=t[i],u=l[i]=new Eo(r),null!=(s=n(r,i,t))&&(s+="")&&(c=Yv+(u.id=s),h[c]=c in h?Sv:u);for(i=0;i<f;++i)if(u=l[i],s=e(t[i],i,t),null!=s&&(s+="")){if(a=h[Yv+s],!a)throw new Error("missing: "+s);if(a===Sv)throw new Error("ambiguous: "+s);a.children?a.children.push(u):a.children=[u],u.parent=a}else{if(o)throw new Error("multiple roots");o=u}if(!o)throw new Error("no root");if(o.parent=Iv,o.eachBefore(function(t){t.depth=t.parent.depth+1,--f}).eachBefore(Bo),o.parent=null,f>0)throw new Error("cycle");return o}var n=Lo,e=Ko;return t.id=function(e){return arguments.length?(n=No(e),t):n},t.parentId=function(n){return arguments.length?(e=No(n),t):e},t};Xo.prototype=Object.create(Eo.prototype);var Nv=function(){function t(t){var r=Vo(t);if(r.eachAfter(n),r.parent.m=-r.z,r.eachBefore(e),s)t.eachBefore(i);else{var c=t,f=t,l=t;t.eachBefore(function(t){t.x<c.x&&(c=t),t.x>f.x&&(f=t),t.depth>l.depth&&(l=t)});var h=c===f?1:o(c,f)/2,A=h-c.x,p=a/(f.x+h+A),d=u/(l.depth||1);t.eachBefore(function(t){t.x=(t.x+A)*p,t.y=t.depth*d})}return t}function n(t){var n=t.children,e=t.parent.children,i=t.i?e[t.i-1]:null;if(n){Wo(t);var a=(n[0].z+n[n.length-1].z)/2;i?(t.z=i.z+o(t._,i._),t.m=t.z-a):t.z=a}else i&&(t.z=i.z+o(t._,i._));t.parent.A=r(t,i,t.parent.A||e[0])}function e(t){t._.x=t.z+t.parent.m,t.m+=t.parent.m}function r(t,n,e){if(n){for(var r,i=t,a=t,u=n,s=i.parent.children[0],c=i.m,f=a.m,l=u.m,h=s.m;u=Fo(u),i=Ro(i),u&&i;)s=Ro(s),a=Fo(a),a.a=t,r=u.z+l-i.z-c+o(u._,i._),r>0&&(Jo(Zo(u,t,e),t,r),c+=r,f+=r),l+=u.m,c+=i.m,h+=s.m,f+=a.m;u&&!Fo(a)&&(a.t=u,a.m+=l-f),i&&!Ro(s)&&(s.t=i,s.m+=c-h,e=t)}return e}function i(t){t.x*=a,t.y=t.depth*u}var o=Uo,a=1,u=1,s=null;return t.separation=function(n){return arguments.length?(o=n,t):o},t.size=function(n){return arguments.length?(s=!1,a=+n[0],u=+n[1],t):s?null:[a,u]},t.nodeSize=function(n){return arguments.length?(s=!0,a=+n[0],u=+n[1],t):s?[a,u]:null},t},qv=function(t,n,e,r,i){for(var o,a=t.children,u=-1,s=a.length,c=t.value&&(i-e)/t.value;++u<s;)o=a[u],o.x0=n,o.x1=r,o.y0=e,o.y1=e+=o.value*c},Pv=(1+Math.sqrt(5))/2,jv=function t(n){function e(t,e,r,i,o){$o(n,t,e,r,i,o)}return e.ratio=function(n){return t((n=+n)>1?n:1)},e}(Pv),Dv=function(){function t(t){return t.x0=t.y0=0,t.x1=i,t.y1=o,t.eachBefore(n),a=[0],r&&t.eachBefore(Hv),t}function n(t){var n=a[t.depth],r=t.x0+n,i=t.y0+n,o=t.x1-n,h=t.y1-n;o<r&&(r=o=(r+o)/2),h<i&&(i=h=(i+h)/2),t.x0=r,t.y0=i,t.x1=o,t.y1=h,t.children&&(n=a[t.depth+1]=u(t)/2,r+=l(t)-n,i+=s(t)-n,o-=c(t)-n,h-=f(t)-n,o<r&&(r=o=(r+o)/2),h<i&&(i=h=(i+h)/2),e(t,r,i,o,h))}var e=jv,r=!1,i=1,o=1,a=[0],u=qo,s=qo,c=qo,f=qo,l=qo;return t.round=function(n){return arguments.length?(r=!!n,t):r},t.size=function(n){return arguments.length?(i=+n[0],o=+n[1],t):[i,o]},t.tile=function(n){return arguments.length?(e=No(n),t):e},t.padding=function(n){return arguments.length?t.paddingInner(n).paddingOuter(n):t.paddingInner()},t.paddingInner=function(n){return arguments.length?(u="function"==typeof n?n:Qv(+n),t):u},t.paddingOuter=function(n){return arguments.length?t.paddingTop(n).paddingRight(n).paddingBottom(n).paddingLeft(n):t.paddingTop()},t.paddingTop=function(n){return arguments.length?(s="function"==typeof n?n:Qv(+n),t):s},t.paddingRight=function(n){return arguments.length?(c="function"==typeof n?n:Qv(+n),t):c},t.paddingBottom=function(n){return arguments.length?(f="function"==typeof n?n:Qv(+n),t):f},t.paddingLeft=function(n){return arguments.length?(l="function"==typeof n?n:Qv(+n),t):l},t},zv=function(t,n,e,r,i){function o(t,n,e,r,i,a,u){if(t>=n-1){var c=s[t];return c.x0=r,c.y0=i,c.x1=a,c.y1=u,void 0}for(var l=f[t],h=e/2+l,A=t+1,p=n-1;A<p;){var d=A+p>>>1;f[d]<h?A=d+1:p=d}var g=f[A]-l,y=e-g;if(u-i>a-r){var v=(i*y+u*g)/e;o(t,A,g,r,i,a,v),o(A,n,y,r,v,a,u)}else{var w=(r*y+a*g)/e;o(t,A,g,r,i,w,u),o(A,n,y,w,i,a,u)}}var a,u,s=t.children,c=s.length,f=new Array(c+1);for(f[0]=u=a=0;a<c;++a)f[a+1]=u+=s[a].value;o(0,c,t.value,n,e,r,i)},Lv=function(t,n,e,r,i){(1&t.depth?qv:kv)(t,n,e,r,i)},Kv=function t(n){function e(t,e,r,i,o){if((a=t._squarify)&&a.ratio===n)for(var a,u,s,c,f,l=-1,h=a.length,A=t.value;++l<h;){for(u=a[l],s=u.children,c=u.value=0,f=s.length;c<f;++c)u.value+=s[c].value;u.dice?kv(u,e,r,i,r+=(o-r)*u.value/A):qv(u,e,r,e+=(i-e)*u.value/A,o),A-=u.value}else t._squarify=a=$o(n,t,e,r,i,o),a.ratio=n}return e.ratio=function(n){return t((n=+n)>1?n:1)},e}(Pv),Uv=function(t){for(var n,e=-1,r=t.length,i=t[r-1],o=0;++e<r;)n=i,i=t[e],o+=n[1]*i[0]-n[0]*i[1];return o/2},Rv=function(t){for(var n,e,r=-1,i=t.length,o=0,a=0,u=t[i-1],s=0;++r<i;)n=u,u=t[r],s+=e=n[0]*u[1]-u[0]*n[1],o+=(n[0]+u[0])*e,a+=(n[1]+u[1])*e;return s*=3,[o/s,a/s]},Fv=function(t,n,e){return(n[0]-t[0])*(e[1]-t[1])-(n[1]-t[1])*(e[0]-t[0])},Jv=function(t){if((e=t.length)<3)return null;var n,e,r=new Array(e),i=new Array(e);for(n=0;n<e;++n)r[n]=[+t[n][0],+t[n][1],n];for(r.sort(ta),n=0;n<e;++n)i[n]=[r[n][0],-r[n][1]];var o=na(r),a=na(i),u=a[0]===o[0],s=a[a.length-1]===o[o.length-1],c=[];for(n=o.length-1;n>=0;--n)c.push(t[r[o[n]][2]]);for(n=+u;n<a.length-s;++n)c.push(t[r[a[n]][2]]);return c},Wv=function(t,n){for(var e,r,i=t.length,o=t[i-1],a=n[0],u=n[1],s=o[0],c=o[1],f=!1,l=0;l<i;++l)o=t[l],e=o[0],r=o[1],r>u!=c>u&&a<(s-e)*(u-r)/(c-r)+e&&(f=!f),s=e,c=r;return f},Zv=function(t){for(var n,e,r=-1,i=t.length,o=t[i-1],a=o[0],u=o[1],s=0;++r<i;)n=a,e=u,o=t[r],a=o[0],u=o[1],n-=a,e-=u,s+=Math.sqrt(n*n+e*e);return s},Xv=[].slice,Vv={};ea.prototype=sa.prototype={constructor:ea,defer:function(t){if("function"!=typeof t||this._call)throw new Error;if(null!=this._error)return this;var n=Xv.call(arguments,1);return n.push(t),++this._waiting,this._tasks.push(n),ra(this),this},abort:function(){return null==this._error&&aa(this,new Error("abort")),this},await:function(t){if("function"!=typeof t||this._call)throw new Error;return this._call=function(n,e){t.apply(null,[n].concat(e))},ua(this),this},awaitAll:function(t){
if("function"!=typeof t||this._call)throw new Error;return this._call=t,ua(this),this}};var $v=function(t,n){return t=null==t?0:+t,n=null==n?1:+n,1===arguments.length?(n=t,t=0):n-=t,function(){return Math.random()*n+t}},tw=function(t,n){var e,r;return t=null==t?0:+t,n=null==n?1:+n,function(){var i;if(null!=e)i=e,e=null;else do e=2*Math.random()-1,i=2*Math.random()-1,r=e*e+i*i;while(!r||r>1);return t+n*i*Math.sqrt(-2*Math.log(r)/r)}},nw=function(){var t=tw.apply(this,arguments);return function(){return Math.exp(t())}},ew=function(t){return function(){for(var n=0,e=0;e<t;++e)n+=Math.random();return n}},rw=function(t){var n=ew(t);return function(){return n()/t}},iw=function(t){return function(){return-Math.log(1-Math.random())/t}},ow=function(t,n){function e(t){var n,e=c.status;if(!e&&fa(c)||e>=200&&e<300||304===e){if(o)try{n=o.call(r,c)}catch(t){return void u.call("error",r,t)}else n=c;u.call("load",r,n)}else u.call("error",r,t)}var r,i,o,a,u=A("beforesend","progress","load","error"),s=je(),c=new XMLHttpRequest,f=null,l=null,h=0;if("undefined"==typeof XDomainRequest||"withCredentials"in c||!/^(http(s)?:)?\/\//.test(t)||(c=new XDomainRequest),"onload"in c?c.onload=c.onerror=c.ontimeout=e:c.onreadystatechange=function(t){c.readyState>3&&e(t)},c.onprogress=function(t){u.call("progress",r,t)},r={header:function(t,n){return t=(t+"").toLowerCase(),arguments.length<2?s.get(t):(null==n?s.remove(t):s.set(t,n+""),r)},mimeType:function(t){return arguments.length?(i=null==t?null:t+"",r):i},responseType:function(t){return arguments.length?(a=t,r):a},timeout:function(t){return arguments.length?(h=+t,r):h},user:function(t){return arguments.length<1?f:(f=null==t?null:t+"",r)},password:function(t){return arguments.length<1?l:(l=null==t?null:t+"",r)},response:function(t){return o=t,r},get:function(t,n){return r.send("GET",t,n)},post:function(t,n){return r.send("POST",t,n)},send:function(n,e,o){return c.open(n,t,!0,f,l),null==i||s.has("accept")||s.set("accept",i+",*/*"),c.setRequestHeader&&s.each(function(t,n){c.setRequestHeader(n,t)}),null!=i&&c.overrideMimeType&&c.overrideMimeType(i),null!=a&&(c.responseType=a),h>0&&(c.timeout=h),null==o&&"function"==typeof e&&(o=e,e=null),null!=o&&1===o.length&&(o=ca(o)),null!=o&&r.on("error",o).on("load",function(t){o(null,t)}),u.call("beforesend",r,c),c.send(null==e?null:e),r},abort:function(){return c.abort(),r},on:function(){var t=u.on.apply(u,arguments);return t===u?r:t}},null!=n){if("function"!=typeof n)throw new Error("invalid callback: "+n);return r.get(n)}return r},aw=function(t,n){return function(e,r){var i=ow(e).mimeType(t).response(n);if(null!=r){if("function"!=typeof r)throw new Error("invalid callback: "+r);return i.get(r)}return i}},uw=aw("text/html",function(t){return document.createRange().createContextualFragment(t.responseText)}),sw=aw("application/json",function(t){return JSON.parse(t.responseText)}),cw=aw("text/plain",function(t){return t.responseText}),fw=aw("application/xml",function(t){var n=t.responseXML;if(!n)throw new Error("parse error");return n}),lw=function(t,n){return function(e,r,i){arguments.length<3&&(i=r,r=null);var o=ow(e).mimeType(t);return o.row=function(t){return arguments.length?o.response(la(n,r=t)):r},o.row(r),i?o.get(i):o}},hw=lw("text/csv",jp),Aw=lw("text/tab-separated-values",Up),pw=Array.prototype,dw=pw.map,gw=pw.slice,yw={name:"implicit"},vw=function(t){return function(){return t}},ww=function(t){return+t},xw=[0,1],mw=function(n,r,i){var o,a=n[0],u=n[n.length-1],s=e(a,u,null==r?10:r);switch(i=Gd(null==i?",f":i),i.type){case"s":var c=Math.max(Math.abs(a),Math.abs(u));return null!=i.precision||isNaN(o=Id(s,c))||(i.precision=o),t.formatPrefix(i,c);case"":case"e":case"g":case"p":case"r":null!=i.precision||isNaN(o=Sd(s,Math.max(Math.abs(a),Math.abs(u))))||(i.precision=o-("e"===i.type));break;case"f":case"%":null!=i.precision||isNaN(o=Yd(s))||(i.precision=o-2*("%"===i.type))}return t.format(i)},bw=function(t,n){t=t.slice();var e,r=0,i=t.length-1,o=t[r],a=t[i];return a<o&&(e=r,r=i,i=e,e=o,o=a,a=e),t[r]=n.floor(o),t[i]=n.ceil(a),t},Bw=new Date,Ew=new Date,_w=Pa(function(){},function(t,n){t.setTime(+t+n)},function(t,n){return n-t});_w.every=function(t){return t=Math.floor(t),isFinite(t)&&t>0?t>1?Pa(function(n){n.setTime(Math.floor(n/t)*t)},function(n,e){n.setTime(+n+e*t)},function(n,e){return(e-n)/t}):_w:null};var Mw=_w.range,Cw=1e3,Qw=6e4,Gw=36e5,Hw=864e5,kw=6048e5,Tw=Pa(function(t){t.setTime(Math.floor(t/Cw)*Cw)},function(t,n){t.setTime(+t+n*Cw)},function(t,n){return(n-t)/Cw},function(t){return t.getUTCSeconds()}),Yw=Tw.range,Iw=Pa(function(t){t.setTime(Math.floor(t/Qw)*Qw)},function(t,n){t.setTime(+t+n*Qw)},function(t,n){return(n-t)/Qw},function(t){return t.getMinutes()}),Sw=Iw.range,Ow=Pa(function(t){var n=t.getTimezoneOffset()*Qw%Gw;n<0&&(n+=Gw),t.setTime(Math.floor((+t-n)/Gw)*Gw+n)},function(t,n){t.setTime(+t+n*Gw)},function(t,n){return(n-t)/Gw},function(t){return t.getHours()}),Nw=Ow.range,qw=Pa(function(t){t.setHours(0,0,0,0)},function(t,n){t.setDate(t.getDate()+n)},function(t,n){return(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*Qw)/Hw},function(t){return t.getDate()-1}),Pw=qw.range,jw=ja(0),Dw=ja(1),zw=ja(2),Lw=ja(3),Kw=ja(4),Uw=ja(5),Rw=ja(6),Fw=jw.range,Jw=Dw.range,Ww=zw.range,Zw=Lw.range,Xw=Kw.range,Vw=Uw.range,$w=Rw.range,tx=Pa(function(t){t.setDate(1),t.setHours(0,0,0,0)},function(t,n){t.setMonth(t.getMonth()+n)},function(t,n){return n.getMonth()-t.getMonth()+12*(n.getFullYear()-t.getFullYear())},function(t){return t.getMonth()}),nx=tx.range,ex=Pa(function(t){t.setMonth(0,1),t.setHours(0,0,0,0)},function(t,n){t.setFullYear(t.getFullYear()+n)},function(t,n){return n.getFullYear()-t.getFullYear()},function(t){return t.getFullYear()});ex.every=function(t){return isFinite(t=Math.floor(t))&&t>0?Pa(function(n){n.setFullYear(Math.floor(n.getFullYear()/t)*t),n.setMonth(0,1),n.setHours(0,0,0,0)},function(n,e){n.setFullYear(n.getFullYear()+e*t)}):null};var rx=ex.range,ix=Pa(function(t){t.setUTCSeconds(0,0)},function(t,n){t.setTime(+t+n*Qw)},function(t,n){return(n-t)/Qw},function(t){return t.getUTCMinutes()}),ox=ix.range,ax=Pa(function(t){t.setUTCMinutes(0,0,0)},function(t,n){t.setTime(+t+n*Gw)},function(t,n){return(n-t)/Gw},function(t){return t.getUTCHours()}),ux=ax.range,sx=Pa(function(t){t.setUTCHours(0,0,0,0)},function(t,n){t.setUTCDate(t.getUTCDate()+n)},function(t,n){return(n-t)/Hw},function(t){return t.getUTCDate()-1}),cx=sx.range,fx=Da(0),lx=Da(1),hx=Da(2),Ax=Da(3),px=Da(4),dx=Da(5),gx=Da(6),yx=fx.range,vx=lx.range,wx=hx.range,xx=Ax.range,mx=px.range,bx=dx.range,Bx=gx.range,Ex=Pa(function(t){t.setUTCDate(1),t.setUTCHours(0,0,0,0)},function(t,n){t.setUTCMonth(t.getUTCMonth()+n)},function(t,n){return n.getUTCMonth()-t.getUTCMonth()+12*(n.getUTCFullYear()-t.getUTCFullYear())},function(t){return t.getUTCMonth()}),_x=Ex.range,Mx=Pa(function(t){t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)},function(t,n){t.setUTCFullYear(t.getUTCFullYear()+n)},function(t,n){return n.getUTCFullYear()-t.getUTCFullYear()},function(t){return t.getUTCFullYear()});Mx.every=function(t){return isFinite(t=Math.floor(t))&&t>0?Pa(function(n){n.setUTCFullYear(Math.floor(n.getUTCFullYear()/t)*t),n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0)},function(n,e){n.setUTCFullYear(n.getUTCFullYear()+e*t)}):null};var Cx,Qx=Mx.range,Gx={"-":"",_:" ",0:"0"},Hx=/^\s*\d+/,kx=/^%/,Tx=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;Pu({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});var Yx="%Y-%m-%dT%H:%M:%S.%LZ",Ix=Date.prototype.toISOString?ju:t.utcFormat(Yx),Sx=+new Date("2000-01-01T00:00:00.000Z")?Du:t.utcParse(Yx),Ox=1e3,Nx=60*Ox,qx=60*Nx,Px=24*qx,jx=7*Px,Dx=30*Px,zx=365*Px,Lx=function(){return Ku(ex,tx,jw,qw,Ow,Iw,Tw,_w,t.timeFormat).domain([new Date(2e3,0,1),new Date(2e3,0,2)])},Kx=function(){return Ku(Mx,Ex,fx,sx,ax,ix,Tw,_w,t.utcFormat).domain([Date.UTC(2e3,0,1),Date.UTC(2e3,0,2)])},Ux=function(t){return t.match(/.{6}/g).map(function(t){return"#"+t})},Rx=Ux("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"),Fx=Ux("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6"),Jx=Ux("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9"),Wx=Ux("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5"),Zx=Ih(Ut(300,.5,0),Ut(-240,.5,1)),Xx=Ih(Ut(-100,.75,.35),Ut(80,1.5,.8)),Vx=Ih(Ut(260,.75,.35),Ut(80,1.5,.8)),$x=Ut(),tm=function(t){(t<0||t>1)&&(t-=Math.floor(t));var n=Math.abs(t-.5);return $x.h=360*t-100,$x.s=1.5-1.5*n,$x.l=.8-.9*n,$x+""},nm=Uu(Ux("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")),em=Uu(Ux("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")),rm=Uu(Ux("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")),im=Uu(Ux("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921")),om=function(t){return function(){return t}},am=1e-12,um=Math.PI,sm=um/2,cm=2*um,fm=function(){function t(){var t,c,f=+n.apply(this,arguments),l=+e.apply(this,arguments),h=o.apply(this,arguments)-sm,A=a.apply(this,arguments)-sm,p=Math.abs(A-h),d=A>h;if(s||(s=t=Ye()),l<f&&(c=l,l=f,f=c),l>am)if(p>cm-am)s.moveTo(l*Math.cos(h),l*Math.sin(h)),s.arc(0,0,l,h,A,!d),f>am&&(s.moveTo(f*Math.cos(A),f*Math.sin(A)),s.arc(0,0,f,A,h,d));else{var g,y,v=h,w=A,x=h,m=A,b=p,B=p,E=u.apply(this,arguments)/2,_=E>am&&(i?+i.apply(this,arguments):Math.sqrt(f*f+l*l)),M=Math.min(Math.abs(l-f)/2,+r.apply(this,arguments)),C=M,Q=M;if(_>am){var G=Vu(_/f*Math.sin(E)),H=Vu(_/l*Math.sin(E));(b-=2*G)>am?(G*=d?1:-1,x+=G,m-=G):(b=0,x=m=(h+A)/2),(B-=2*H)>am?(H*=d?1:-1,v+=H,w-=H):(B=0,v=w=(h+A)/2)}var k=l*Math.cos(v),T=l*Math.sin(v),Y=f*Math.cos(m),I=f*Math.sin(m);if(M>am){var S=l*Math.cos(w),O=l*Math.sin(w),N=f*Math.cos(x),q=f*Math.sin(x);if(p<um){var P=b>am?$u(k,T,N,q,S,O,Y,I):[Y,I],j=k-P[0],D=T-P[1],z=S-P[0],L=O-P[1],K=1/Math.sin(Math.acos((j*z+D*L)/(Math.sqrt(j*j+D*D)*Math.sqrt(z*z+L*L)))/2),U=Math.sqrt(P[0]*P[0]+P[1]*P[1]);C=Math.min(M,(f-U)/(K-1)),Q=Math.min(M,(l-U)/(K+1))}}B>am?Q>am?(g=ts(N,q,k,T,l,Q,d),y=ts(S,O,Y,I,l,Q,d),s.moveTo(g.cx+g.x01,g.cy+g.y01),Q<M?s.arc(g.cx,g.cy,Q,Math.atan2(g.y01,g.x01),Math.atan2(y.y01,y.x01),!d):(s.arc(g.cx,g.cy,Q,Math.atan2(g.y01,g.x01),Math.atan2(g.y11,g.x11),!d),s.arc(0,0,l,Math.atan2(g.cy+g.y11,g.cx+g.x11),Math.atan2(y.cy+y.y11,y.cx+y.x11),!d),s.arc(y.cx,y.cy,Q,Math.atan2(y.y11,y.x11),Math.atan2(y.y01,y.x01),!d))):(s.moveTo(k,T),s.arc(0,0,l,v,w,!d)):s.moveTo(k,T),f>am&&b>am?C>am?(g=ts(Y,I,S,O,f,-C,d),y=ts(k,T,N,q,f,-C,d),s.lineTo(g.cx+g.x01,g.cy+g.y01),C<M?s.arc(g.cx,g.cy,C,Math.atan2(g.y01,g.x01),Math.atan2(y.y01,y.x01),!d):(s.arc(g.cx,g.cy,C,Math.atan2(g.y01,g.x01),Math.atan2(g.y11,g.x11),!d),s.arc(0,0,f,Math.atan2(g.cy+g.y11,g.cx+g.x11),Math.atan2(y.cy+y.y11,y.cx+y.x11),d),s.arc(y.cx,y.cy,C,Math.atan2(y.y11,y.x11),Math.atan2(y.y01,y.x01),!d))):s.arc(0,0,f,m,x,d):s.lineTo(Y,I)}else s.moveTo(0,0);if(s.closePath(),t)return s=null,t+""||null}var n=Fu,e=Ju,r=om(0),i=null,o=Wu,a=Zu,u=Xu,s=null;return t.centroid=function(){var t=(+n.apply(this,arguments)+ +e.apply(this,arguments))/2,r=(+o.apply(this,arguments)+ +a.apply(this,arguments))/2-um/2;return[Math.cos(r)*t,Math.sin(r)*t]},t.innerRadius=function(e){return arguments.length?(n="function"==typeof e?e:om(+e),t):n},t.outerRadius=function(n){return arguments.length?(e="function"==typeof n?n:om(+n),t):e},t.cornerRadius=function(n){return arguments.length?(r="function"==typeof n?n:om(+n),t):r},t.padRadius=function(n){return arguments.length?(i=null==n?null:"function"==typeof n?n:om(+n),t):i},t.startAngle=function(n){return arguments.length?(o="function"==typeof n?n:om(+n),t):o},t.endAngle=function(n){return arguments.length?(a="function"==typeof n?n:om(+n),t):a},t.padAngle=function(n){return arguments.length?(u="function"==typeof n?n:om(+n),t):u},t.context=function(n){return arguments.length?(s=null==n?null:n,t):s},t};ns.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:this._context.lineTo(t,n)}}};var lm=function(t){return new ns(t)},hm=function(){function t(t){var u,s,c,f=t.length,l=!1;for(null==i&&(a=o(c=Ye())),u=0;u<=f;++u)!(u<f&&r(s=t[u],u,t))===l&&((l=!l)?a.lineStart():a.lineEnd()),l&&a.point(+n(s,u,t),+e(s,u,t));if(c)return a=null,c+""||null}var n=es,e=rs,r=om(!0),i=null,o=lm,a=null;return t.x=function(e){return arguments.length?(n="function"==typeof e?e:om(+e),t):n},t.y=function(n){return arguments.length?(e="function"==typeof n?n:om(+n),t):e},t.defined=function(n){return arguments.length?(r="function"==typeof n?n:om(!!n),t):r},t.curve=function(n){return arguments.length?(o=n,null!=i&&(a=o(i)),t):o},t.context=function(n){return arguments.length?(null==n?i=a=null:a=o(i=n),t):i},t},Am=function(){function t(t){var n,f,l,h,A,p=t.length,d=!1,g=new Array(p),y=new Array(p);for(null==u&&(c=s(A=Ye())),n=0;n<=p;++n){if(!(n<p&&a(h=t[n],n,t))===d)if(d=!d)f=n,c.areaStart(),c.lineStart();else{for(c.lineEnd(),c.lineStart(),l=n-1;l>=f;--l)c.point(g[l],y[l]);c.lineEnd(),c.areaEnd()}d&&(g[n]=+e(h,n,t),y[n]=+i(h,n,t),c.point(r?+r(h,n,t):g[n],o?+o(h,n,t):y[n]))}if(A)return c=null,A+""||null}function n(){return hm().defined(a).curve(s).context(u)}var e=es,r=null,i=om(0),o=rs,a=om(!0),u=null,s=lm,c=null;return t.x=function(n){return arguments.length?(e="function"==typeof n?n:om(+n),r=null,t):e},t.x0=function(n){return arguments.length?(e="function"==typeof n?n:om(+n),t):e},t.x1=function(n){return arguments.length?(r=null==n?null:"function"==typeof n?n:om(+n),t):r},t.y=function(n){return arguments.length?(i="function"==typeof n?n:om(+n),o=null,t):i},t.y0=function(n){return arguments.length?(i="function"==typeof n?n:om(+n),t):i},t.y1=function(n){return arguments.length?(o=null==n?null:"function"==typeof n?n:om(+n),t):o},t.lineX0=t.lineY0=function(){return n().x(e).y(i)},t.lineY1=function(){return n().x(e).y(o)},t.lineX1=function(){return n().x(r).y(i)},t.defined=function(n){return arguments.length?(a="function"==typeof n?n:om(!!n),t):a},t.curve=function(n){return arguments.length?(s=n,null!=u&&(c=s(u)),t):s},t.context=function(n){return arguments.length?(null==n?u=c=null:c=s(u=n),t):u},t},pm=function(t,n){return n<t?-1:n>t?1:n>=t?0:NaN},dm=function(t){return t},gm=function(){function t(t){var u,s,c,f,l,h=t.length,A=0,p=new Array(h),d=new Array(h),g=+i.apply(this,arguments),y=Math.min(cm,Math.max(-cm,o.apply(this,arguments)-g)),v=Math.min(Math.abs(y)/h,a.apply(this,arguments)),w=v*(y<0?-1:1);for(u=0;u<h;++u)(l=d[p[u]=u]=+n(t[u],u,t))>0&&(A+=l);for(null!=e?p.sort(function(t,n){return e(d[t],d[n])}):null!=r&&p.sort(function(n,e){return r(t[n],t[e])}),u=0,c=A?(y-h*w)/A:0;u<h;++u,g=f)s=p[u],l=d[s],f=g+(l>0?l*c:0)+w,d[s]={data:t[s],index:u,value:l,startAngle:g,endAngle:f,padAngle:v};return d}var n=dm,e=pm,r=null,i=om(0),o=om(cm),a=om(0);return t.value=function(e){return arguments.length?(n="function"==typeof e?e:om(+e),t):n},t.sortValues=function(n){return arguments.length?(e=n,r=null,t):e},t.sort=function(n){return arguments.length?(r=n,e=null,t):r},t.startAngle=function(n){return arguments.length?(i="function"==typeof n?n:om(+n),t):i},t.endAngle=function(n){return arguments.length?(o="function"==typeof n?n:om(+n),t):o},t.padAngle=function(n){return arguments.length?(a="function"==typeof n?n:om(+n),t):a},t},ym=os(lm);is.prototype={areaStart:function(){this._curve.areaStart()},areaEnd:function(){this._curve.areaEnd()},lineStart:function(){this._curve.lineStart()},lineEnd:function(){this._curve.lineEnd()},point:function(t,n){this._curve.point(n*Math.sin(t),n*-Math.cos(t))}};var vm=function(){return as(hm().curve(ym))},wm=function(){var t=Am().curve(ym),n=t.curve,e=t.lineX0,r=t.lineX1,i=t.lineY0,o=t.lineY1;return t.angle=t.x,delete t.x,t.startAngle=t.x0,delete t.x0,t.endAngle=t.x1,delete t.x1,t.radius=t.y,delete t.y,t.innerRadius=t.y0,delete t.y0,t.outerRadius=t.y1,delete t.y1,t.lineStartAngle=function(){return as(e())},delete t.lineX0,t.lineEndAngle=function(){return as(r())},delete t.lineX1,t.lineInnerRadius=function(){return as(i())},delete t.lineY0,t.lineOuterRadius=function(){return as(o())},delete t.lineY1,t.curve=function(t){return arguments.length?n(os(t)):n()._curve},t},xm={draw:function(t,n){var e=Math.sqrt(n/um);t.moveTo(e,0),t.arc(0,0,e,0,cm)}},mm={draw:function(t,n){var e=Math.sqrt(n/5)/2;t.moveTo(-3*e,-e),t.lineTo(-e,-e),t.lineTo(-e,-3*e),t.lineTo(e,-3*e),t.lineTo(e,-e),t.lineTo(3*e,-e),t.lineTo(3*e,e),t.lineTo(e,e),t.lineTo(e,3*e),t.lineTo(-e,3*e),t.lineTo(-e,e),t.lineTo(-3*e,e),t.closePath()}},bm=Math.sqrt(1/3),Bm=2*bm,Em={draw:function(t,n){var e=Math.sqrt(n/Bm),r=e*bm;t.moveTo(0,-e),t.lineTo(r,0),t.lineTo(0,e),t.lineTo(-r,0),t.closePath()}},_m=.8908130915292852,Mm=Math.sin(um/10)/Math.sin(7*um/10),Cm=Math.sin(cm/10)*Mm,Qm=-Math.cos(cm/10)*Mm,Gm={draw:function(t,n){var e=Math.sqrt(n*_m),r=Cm*e,i=Qm*e;t.moveTo(0,-e),t.lineTo(r,i);for(var o=1;o<5;++o){var a=cm*o/5,u=Math.cos(a),s=Math.sin(a);t.lineTo(s*e,-u*e),t.lineTo(u*r-s*i,s*r+u*i)}t.closePath()}},Hm={draw:function(t,n){var e=Math.sqrt(n),r=-e/2;t.rect(r,r,e,e)}},km=Math.sqrt(3),Tm={draw:function(t,n){var e=-Math.sqrt(n/(3*km));t.moveTo(0,2*e),t.lineTo(-km*e,-e),t.lineTo(km*e,-e),t.closePath()}},Ym=-.5,Im=Math.sqrt(3)/2,Sm=1/Math.sqrt(12),Om=3*(Sm/2+1),Nm={draw:function(t,n){var e=Math.sqrt(n/Om),r=e/2,i=e*Sm,o=r,a=e*Sm+e,u=-o,s=a;t.moveTo(r,i),t.lineTo(o,a),t.lineTo(u,s),t.lineTo(Ym*r-Im*i,Im*r+Ym*i),t.lineTo(Ym*o-Im*a,Im*o+Ym*a),t.lineTo(Ym*u-Im*s,Im*u+Ym*s),t.lineTo(Ym*r+Im*i,Ym*i-Im*r),t.lineTo(Ym*o+Im*a,Ym*a-Im*o),t.lineTo(Ym*u+Im*s,Ym*s-Im*u),t.closePath()}},qm=[xm,mm,Em,Hm,Gm,Tm,Nm],Pm=function(){function t(){var t;if(r||(r=t=Ye()),n.apply(this,arguments).draw(r,+e.apply(this,arguments)),t)return r=null,t+""||null}var n=om(xm),e=om(64),r=null;return t.type=function(e){return arguments.length?(n="function"==typeof e?e:om(e),t):n},t.size=function(n){return arguments.length?(e="function"==typeof n?n:om(+n),t):e},t.context=function(n){return arguments.length?(r=null==n?null:n,t):r},t},jm=function(){};ss.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:us(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:us(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}};var Dm=function(t){return new ss(t)};cs.prototype={areaStart:jm,areaEnd:jm,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x2,this._y2),this._context.closePath();break;case 2:this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath();break;case 3:this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4)}},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._x2=t,this._y2=n;break;case 1:this._point=2,this._x3=t,this._y3=n;break;case 2:this._point=3,this._x4=t,this._y4=n,this._context.moveTo((this._x0+4*this._x1+t)/6,(this._y0+4*this._y1+n)/6);break;default:us(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}};var zm=function(t){return new cs(t)};fs.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3;var e=(this._x0+4*this._x1+t)/6,r=(this._y0+4*this._y1+n)/6;this._line?this._context.lineTo(e,r):this._context.moveTo(e,r);break;case 3:this._point=4;default:us(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}};var Lm=function(t){return new fs(t)};ls.prototype={lineStart:function(){this._x=[],this._y=[],this._basis.lineStart()},lineEnd:function(){var t=this._x,n=this._y,e=t.length-1;if(e>0)for(var r,i=t[0],o=n[0],a=t[e]-i,u=n[e]-o,s=-1;++s<=e;)r=s/e,this._basis.point(this._beta*t[s]+(1-this._beta)*(i+r*a),this._beta*n[s]+(1-this._beta)*(o+r*u));this._x=this._y=null,this._basis.lineEnd()},point:function(t,n){this._x.push(+t),this._y.push(+n)}};var Km=function t(n){function e(t){return 1===n?new ss(t):new ls(t,n)}return e.beta=function(n){return t(+n)},e}(.85);As.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:hs(this,this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2,this._x1=t,this._y1=n;break;case 2:this._point=3;default:hs(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var Um=function t(n){function e(t){return new As(t,n)}return e.tension=function(n){return t(+n)},e}(0);ps.prototype={areaStart:jm,areaEnd:jm,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath();break;case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath();break;case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5)}},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._x3=t,this._y3=n;break;case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=n);break;case 2:this._point=3,this._x5=t,this._y5=n;break;default:hs(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var Rm=function t(n){function e(t){return new ps(t,n)}return e.tension=function(n){return t(+n)},e}(0);ds.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:hs(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var Fm=function t(n){function e(t){return new ds(t,n)}return e.tension=function(n){return t(+n)},e}(0);ys.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:this.point(this._x2,this._y2)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha))}switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3;default:gs(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var Jm=function t(n){function e(t){return n?new ys(t,n):new As(t,0)}return e.alpha=function(n){return t(+n)},e}(.5);vs.prototype={areaStart:jm,areaEnd:jm,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath();break;case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath();break;case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5)}},point:function(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha))}switch(this._point){case 0:this._point=1,this._x3=t,this._y3=n;break;case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=n);break;case 2:this._point=3,this._x5=t,this._y5=n;
break;default:gs(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var Wm=function t(n){function e(t){return n?new vs(t,n):new ps(t,0)}return e.alpha=function(n){return t(+n)},e}(.5);ws.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha))}switch(this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:gs(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var Zm=function t(n){function e(t){return n?new ws(t,n):new ds(t,0)}return e.alpha=function(n){return t(+n)},e}(.5);xs.prototype={areaStart:jm,areaEnd:jm,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(t,n){t=+t,n=+n,this._point?this._context.lineTo(t,n):(this._point=1,this._context.moveTo(t,n))}};var Xm=function(t){return new xs(t)};_s.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:Es(this,this._t0,Bs(this,this._t0))}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){var e=NaN;if(t=+t,n=+n,t!==this._x1||n!==this._y1){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3,Es(this,Bs(this,e=bs(this,t,n)),e);break;default:Es(this,this._t0,e=bs(this,t,n))}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n,this._t0=e}}},(Ms.prototype=Object.create(_s.prototype)).point=function(t,n){_s.prototype.point.call(this,n,t)},Cs.prototype={moveTo:function(t,n){this._context.moveTo(n,t)},closePath:function(){this._context.closePath()},lineTo:function(t,n){this._context.lineTo(n,t)},bezierCurveTo:function(t,n,e,r,i,o){this._context.bezierCurveTo(n,t,r,e,o,i)}},Hs.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var t=this._x,n=this._y,e=t.length;if(e)if(this._line?this._context.lineTo(t[0],n[0]):this._context.moveTo(t[0],n[0]),2===e)this._context.lineTo(t[1],n[1]);else for(var r=ks(t),i=ks(n),o=0,a=1;a<e;++o,++a)this._context.bezierCurveTo(r[0][o],i[0][o],r[1][o],i[1][o],t[a],n[a]);(this._line||0!==this._line&&1===e)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(t,n){this._x.push(+t),this._y.push(+n)}};var Vm=function(t){return new Hs(t)};Ts.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&2===this._point&&this._context.lineTo(this._x,this._y),(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:if(this._t<=0)this._context.lineTo(this._x,n),this._context.lineTo(t,n);else{var e=this._x*(1-this._t)+t*this._t;this._context.lineTo(e,this._y),this._context.lineTo(e,n)}}this._x=t,this._y=n}};var $m=function(t){return new Ts(t,.5)},tb=Array.prototype.slice,nb=function(t,n){if((r=t.length)>1)for(var e,r,i=1,o=t[n[0]],a=o.length;i<r;++i){e=o,o=t[n[i]];for(var u=0;u<a;++u)o[u][1]+=o[u][0]=isNaN(e[u][1])?e[u][0]:e[u][1]}},eb=function(t){for(var n=t.length,e=new Array(n);--n>=0;)e[n]=n;return e},rb=function(){function t(t){var o,a,u=n.apply(this,arguments),s=t.length,c=u.length,f=new Array(c);for(o=0;o<c;++o){for(var l,h=u[o],A=f[o]=new Array(s),p=0;p<s;++p)A[p]=l=[0,+i(t[p],h,p,t)],l.data=t[p];A.key=h}for(o=0,a=e(f);o<c;++o)f[a[o]].index=o;return r(f,a),f}var n=om([]),e=eb,r=nb,i=Ss;return t.keys=function(e){return arguments.length?(n="function"==typeof e?e:om(tb.call(e)),t):n},t.value=function(n){return arguments.length?(i="function"==typeof n?n:om(+n),t):i},t.order=function(n){return arguments.length?(e=null==n?eb:"function"==typeof n?n:om(tb.call(n)),t):e},t.offset=function(n){return arguments.length?(r=null==n?nb:n,t):r},t},ib=function(t,n){if((r=t.length)>0){for(var e,r,i,o=0,a=t[0].length;o<a;++o){for(i=e=0;e<r;++e)i+=t[e][o][1]||0;if(i)for(e=0;e<r;++e)t[e][o][1]/=i}nb(t,n)}},ob=function(t,n){if((e=t.length)>0){for(var e,r=0,i=t[n[0]],o=i.length;r<o;++r){for(var a=0,u=0;a<e;++a)u+=t[a][r][1]||0;i[r][1]+=i[r][0]=-u/2}nb(t,n)}},ab=function(t,n){if((i=t.length)>0&&(r=(e=t[n[0]]).length)>0){for(var e,r,i,o=0,a=1;a<r;++a){for(var u=0,s=0,c=0;u<i;++u){for(var f=t[n[u]],l=f[a][1]||0,h=f[a-1][1]||0,A=(l-h)/2,p=0;p<u;++p){var d=t[n[p]],g=d[a][1]||0,y=d[a-1][1]||0;A+=g-y}s+=l,c+=A*l}e[a-1][1]+=e[a-1][0]=o,s&&(o-=c/s)}e[a-1][1]+=e[a-1][0]=o,nb(t,n)}},ub=function(t){var n=t.map(Os);return eb(t).sort(function(t,e){return n[t]-n[e]})},sb=function(t){return ub(t).reverse()},cb=function(t){var n,e,r=t.length,i=t.map(Os),o=eb(t).sort(function(t,n){return i[n]-i[t]}),a=0,u=0,s=[],c=[];for(n=0;n<r;++n)e=o[n],a<u?(a+=i[e],s.push(e)):(u+=i[e],c.push(e));return c.reverse().concat(s)},fb=function(t){return eb(t).reverse()},lb=function(t){return function(){return t}};Ps.prototype={constructor:Ps,insert:function(t,n){var e,r,i;if(t){if(n.P=t,n.N=t.N,t.N&&(t.N.P=n),t.N=n,t.R){for(t=t.R;t.L;)t=t.L;t.L=n}else t.R=n;e=t}else this._?(t=Ls(this._),n.P=null,n.N=t,t.P=t.L=n,e=t):(n.P=n.N=null,this._=n,e=null);for(n.L=n.R=null,n.U=e,n.C=!0,t=n;e&&e.C;)r=e.U,e===r.L?(i=r.R,i&&i.C?(e.C=i.C=!1,r.C=!0,t=r):(t===e.R&&(Ds(this,e),t=e,e=t.U),e.C=!1,r.C=!0,zs(this,r))):(i=r.L,i&&i.C?(e.C=i.C=!1,r.C=!0,t=r):(t===e.L&&(zs(this,e),t=e,e=t.U),e.C=!1,r.C=!0,Ds(this,r))),e=t.U;this._.C=!1},remove:function(t){t.N&&(t.N.P=t.P),t.P&&(t.P.N=t.N),t.N=t.P=null;var n,e,r,i=t.U,o=t.L,a=t.R;if(e=o?a?Ls(a):o:a,i?i.L===t?i.L=e:i.R=e:this._=e,o&&a?(r=e.C,e.C=t.C,e.L=o,o.U=e,e!==a?(i=e.U,e.U=t.U,t=e.R,i.L=t,e.R=a,a.U=e):(e.U=i,i=e,t=e.R)):(r=t.C,t=e),t&&(t.U=i),!r){if(t&&t.C)return void(t.C=!1);do{if(t===this._)break;if(t===i.L){if(n=i.R,n.C&&(n.C=!1,i.C=!0,Ds(this,i),n=i.R),n.L&&n.L.C||n.R&&n.R.C){n.R&&n.R.C||(n.L.C=!1,n.C=!0,zs(this,n),n=i.R),n.C=i.C,i.C=n.R.C=!1,Ds(this,i),t=this._;break}}else if(n=i.L,n.C&&(n.C=!1,i.C=!0,zs(this,i),n=i.L),n.L&&n.L.C||n.R&&n.R.C){n.L&&n.L.C||(n.R.C=!1,n.C=!0,Ds(this,n),n=i.L),n.C=i.C,i.C=n.L.C=!1,zs(this,i),t=this._;break}n.C=!0,t=i,i=i.U}while(!t.C);t&&(t.C=!1)}}};var hb,Ab,pb,db,gb,yb=[],vb=[],wb=1e-6,xb=1e-12;pc.prototype={constructor:pc,polygons:function(){var t=this.edges;return this.cells.map(function(n){var e=n.halfedges.map(function(e){return Vs(n,t[e])});return e.data=n.site.data,e})},triangles:function(){var t=[],n=this.edges;return this.cells.forEach(function(e,r){if(o=(i=e.halfedges).length)for(var i,o,a,u=e.site,s=-1,c=n[i[o-1]],f=c.left===u?c.right:c.left;++s<o;)a=f,c=n[i[s]],f=c.left===u?c.right:c.left,a&&f&&r<a.index&&r<f.index&&hc(u,a,f)<0&&t.push([u.data,a.data,f.data])}),t},links:function(){return this.edges.filter(function(t){return t.right}).map(function(t){return{source:t.left.data,target:t.right.data}})},find:function(t,n,e){for(var r,i,o=this,a=o._found||0,u=o.cells.length;!(i=o.cells[a]);)if(++a>=u)return null;var s=t-i.site[0],c=n-i.site[1],f=s*s+c*c;do i=o.cells[r=a],a=null,i.halfedges.forEach(function(e){var r=o.edges[e],u=r.left;if(u!==i.site&&u||(u=r.right)){var s=t-u[0],c=n-u[1],l=s*s+c*c;l<f&&(f=l,a=u.index)}});while(null!==a);return o._found=r,null==e||f<=e*e?i.site:null}};var mb=function(){function t(t){return new pc(t.map(function(r,i){var o=[Math.round(n(r,i,t)/wb)*wb,Math.round(e(r,i,t)/wb)*wb];return o.index=i,o.data=r,o}),r)}var n=Ns,e=qs,r=null;return t.polygons=function(n){return t(n).polygons()},t.links=function(n){return t(n).links()},t.triangles=function(n){return t(n).triangles()},t.x=function(e){return arguments.length?(n="function"==typeof e?e:lb(+e),t):n},t.y=function(n){return arguments.length?(e="function"==typeof n?n:lb(+n),t):e},t.extent=function(n){return arguments.length?(r=null==n?null:[[+n[0][0],+n[0][1]],[+n[1][0],+n[1][1]]],t):r&&[[r[0][0],r[0][1]],[r[1][0],r[1][1]]]},t.size=function(n){return arguments.length?(r=null==n?null:[[0,0],[+n[0],+n[1]]],t):r&&[r[1][0]-r[0][0],r[1][1]-r[0][1]]},t},bb=function(t){return function(){return t}};gc.prototype={constructor:gc,scale:function(t){return 1===t?this:new gc(this.k*t,this.x,this.y)},translate:function(t,n){return 0===t&0===n?this:new gc(this.k,this.x+this.k*t,this.y+this.k*n)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var Bb=new gc(1,0,0);yc.prototype=gc.prototype;var Eb=function(){t.event.preventDefault(),t.event.stopImmediatePropagation()},_b=function(){function n(t){t.on("wheel.zoom",c).on("mousedown.zoom",f).on("dblclick.zoom",l).on("touchstart.zoom",h).on("touchmove.zoom",p).on("touchend.zoom touchcancel.zoom",d).style("-webkit-tap-highlight-color","rgba(0,0,0,0)").property("__zoom",mc)}function e(t,n){return n=Math.max(x,Math.min(m,n)),n===t.k?t:new gc(n,t.x,t.y)}function r(t,n,e){var r=n[0]-e[0]*t.k,i=n[1]-e[1]*t.k;return r===t.x&&i===t.y?t:new gc(t.k,r,i)}function i(t,n){var e=t.invertX(n[0][0])-b,r=t.invertX(n[1][0])-B,i=t.invertY(n[0][1])-E,o=t.invertY(n[1][1])-_;return t.translate(r>e?(e+r)/2:Math.min(0,e)||Math.max(0,r),o>i?(i+o)/2:Math.min(0,i)||Math.max(0,o))}function o(t){return[(+t[0][0]+ +t[1][0])/2,(+t[0][1]+ +t[1][1])/2]}function a(t,n,e){t.on("start.zoom",function(){u(this,arguments).start()}).on("interrupt.zoom end.zoom",function(){u(this,arguments).end()}).tween("zoom",function(){var t=this,r=arguments,i=u(t,r),a=w.apply(t,r),s=e||o(a),c=Math.max(a[1][0]-a[0][0],a[1][1]-a[0][1]),f=t.__zoom,l="function"==typeof n?n.apply(t,r):n,h=Q(f.invert(s).concat(c/f.k),l.invert(s).concat(c/l.k));return function(t){if(1===t)t=l;else{var n=h(t),e=c/n[2];t=new gc(e,s[0]-n[0]*e,s[1]-n[1]*e)}i.zoom(null,t)}})}function u(t,n){for(var e,r=0,i=G.length;r<i;++r)if((e=G[r]).that===t)return e;return new s(t,n)}function s(t,n){this.that=t,this.args=n,this.index=-1,this.active=0,this.extent=w.apply(t,n)}function c(){function n(){o.wheel=null,o.end()}if(v.apply(this,arguments)){var o=u(this,arguments),a=this.__zoom,s=Math.max(x,Math.min(m,a.k*Math.pow(2,-t.event.deltaY*(t.event.deltaMode?120:1)/500))),c=Gf(this);if(o.wheel)o.mouse[0][0]===c[0]&&o.mouse[0][1]===c[1]||(o.mouse[1]=a.invert(o.mouse[0]=c)),clearTimeout(o.wheel);else{if(a.k===s)return;o.mouse=[c,a.invert(c)],rA(this),o.start()}Eb(),o.wheel=setTimeout(n,T),o.zoom("mouse",i(r(e(a,s),o.mouse[0],o.mouse[1]),o.extent))}}function f(){function n(){Eb(),o.moved=!0,o.zoom("mouse",i(r(o.that.__zoom,o.mouse[0]=Gf(o.that),o.mouse[1]),o.extent))}function e(){a.on("mousemove.zoom mouseup.zoom",null),gt(t.event.view,o.moved),Eb(),o.end()}if(!y&&v.apply(this,arguments)){var o=u(this,arguments),a=ll(t.event.view).on("mousemove.zoom",n,!0).on("mouseup.zoom",e,!0),s=Gf(this);gl(t.event.view),vc(),o.mouse=[s,this.__zoom.invert(s)],rA(this),o.start()}}function l(){if(v.apply(this,arguments)){var o=this.__zoom,u=Gf(this),s=o.invert(u),c=o.k*(t.event.shiftKey?.5:2),f=i(r(e(o,c),u,s),w.apply(this,arguments));Eb(),M>0?ll(this).transition().duration(M).call(a,f,u):ll(this).call(n.transform,f)}}function h(){if(v.apply(this,arguments)){var n,e,r,i,o=u(this,arguments),a=t.event.changedTouches,s=a.length;for(vc(),e=0;e<s;++e)r=a[e],i=Al(this,a,r.identifier),i=[i,this.__zoom.invert(i),r.identifier],o.touch0?o.touch1||(o.touch1=i):(o.touch0=i,n=!0);return g&&(g=clearTimeout(g),!o.touch1)?(o.end(),i=ll(this).on("dblclick.zoom"),void(i&&i.apply(this,arguments))):void(n&&(g=setTimeout(function(){g=null},k),rA(this),o.start()))}}function p(){var n,o,a,s,c=u(this,arguments),f=t.event.changedTouches,l=f.length;for(Eb(),g&&(g=clearTimeout(g)),n=0;n<l;++n)o=f[n],a=Al(this,f,o.identifier),c.touch0&&c.touch0[2]===o.identifier?c.touch0[0]=a:c.touch1&&c.touch1[2]===o.identifier&&(c.touch1[0]=a);if(o=c.that.__zoom,c.touch1){var h=c.touch0[0],A=c.touch0[1],p=c.touch1[0],d=c.touch1[1],y=(y=p[0]-h[0])*y+(y=p[1]-h[1])*y,v=(v=d[0]-A[0])*v+(v=d[1]-A[1])*v;o=e(o,Math.sqrt(y/v)),a=[(h[0]+p[0])/2,(h[1]+p[1])/2],s=[(A[0]+d[0])/2,(A[1]+d[1])/2]}else{if(!c.touch0)return;a=c.touch0[0],s=c.touch0[1]}c.zoom("touch",i(r(o,a,s),c.extent))}function d(){var n,e,r=u(this,arguments),i=t.event.changedTouches,o=i.length;for(vc(),y&&clearTimeout(y),y=setTimeout(function(){y=null},k),n=0;n<o;++n)e=i[n],r.touch0&&r.touch0[2]===e.identifier?delete r.touch0:r.touch1&&r.touch1[2]===e.identifier&&delete r.touch1;r.touch1&&!r.touch0&&(r.touch0=r.touch1,delete r.touch1),r.touch0||r.end()}var g,y,v=wc,w=xc,x=0,m=1/0,b=-m,B=m,E=b,_=B,M=250,Q=Qh,G=[],H=A("start","zoom","end"),k=500,T=150;return n.transform=function(t,n){var e=t.selection?t.selection():t;e.property("__zoom",mc),t!==e?a(t,n):e.interrupt().each(function(){u(this,arguments).start().zoom(null,"function"==typeof n?n.apply(this,arguments):n).end()})},n.scaleBy=function(t,e){n.scaleTo(t,function(){var t=this.__zoom.k,n="function"==typeof e?e.apply(this,arguments):e;return t*n})},n.scaleTo=function(t,a){n.transform(t,function(){var t=w.apply(this,arguments),n=this.__zoom,u=o(t),s=n.invert(u),c="function"==typeof a?a.apply(this,arguments):a;return i(r(e(n,c),u,s),t)})},n.translateBy=function(t,e,r){n.transform(t,function(){return i(this.__zoom.translate("function"==typeof e?e.apply(this,arguments):e,"function"==typeof r?r.apply(this,arguments):r),w.apply(this,arguments))})},s.prototype={start:function(){return 1===++this.active&&(this.index=G.push(this)-1,this.emit("start")),this},zoom:function(t,n){return this.mouse&&"mouse"!==t&&(this.mouse[1]=n.invert(this.mouse[0])),this.touch0&&"touch"!==t&&(this.touch0[1]=n.invert(this.touch0[0])),this.touch1&&"touch"!==t&&(this.touch1[1]=n.invert(this.touch1[0])),this.that.__zoom=n,this.emit("zoom"),this},end:function(){return 0===--this.active&&(G.splice(this.index,1),this.index=-1,this.emit("end")),this},emit:function(t){C(new dc(n,t,this.that.__zoom),H.apply,H,[t,this.that,this.args])}},n.filter=function(t){return arguments.length?(v="function"==typeof t?t:bb(!!t),n):v},n.extent=function(t){return arguments.length?(w="function"==typeof t?t:bb([[+t[0][0],+t[0][1]],[+t[1][0],+t[1][1]]]),n):w},n.scaleExtent=function(t){return arguments.length?(x=+t[0],m=+t[1],n):[x,m]},n.translateExtent=function(t){return arguments.length?(b=+t[0][0],B=+t[1][0],E=+t[0][1],_=+t[1][1],n):[[b,E],[B,_]]},n.duration=function(t){return arguments.length?(M=+t,n):M},n.interpolate=function(t){return arguments.length?(Q=t,n):Q},n.on=function(){var t=H.on.apply(H,arguments);return t===H?n:t},n};t.version=bc,t.bisect=Mc,t.bisectRight=Mc,t.bisectLeft=Cc,t.ascending=Bc,t.bisector=Ec,t.descending=Qc,t.deviation=kc,t.extent=Tc,t.histogram=Kc,t.thresholdFreedmanDiaconis=Rc,t.thresholdScott=Fc,t.thresholdSturges=Lc,t.max=Jc,t.mean=Wc,t.median=Zc,t.merge=Xc,t.min=Vc,t.pairs=$c,t.permute=tf,t.quantile=Uc,t.range=qc,t.scan=nf,t.shuffle=ef,t.sum=rf,t.ticks=zc,t.tickStep=e,t.transpose=of,t.variance=Hc,t.zip=af,t.axisTop=c,t.axisRight=f,t.axisBottom=l,t.axisLeft=h,t.brush=yp,t.brushX=Qe,t.brushY=Ge,t.brushSelection=Ce,t.chord=Ep,t.ribbon=kp,t.nest=Yp,t.set=Re,t.map=je,t.keys=Sp,t.values=Op,t.entries=Np,t.color=Bt,t.rgb=Ct,t.hsl=kt,t.lab=St,t.hcl=zt,t.cubehelix=Ut,t.dispatch=A,t.drag=vl,t.dragDisable=gl,t.dragEnable=gt,t.dsvFormat=qp,t.csvParse=jp,t.csvParseRows=Dp,t.csvFormat=zp,t.csvFormatRows=Lp,t.tsvParse=Up,t.tsvParseRows=Rp,t.tsvFormat=Fp,t.tsvFormatRows=Jp,t.easeLinear=ne,t.easeQuad=ie,t.easeQuadIn=ee,t.easeQuadOut=re,t.easeQuadInOut=ie,t.easeCubic=ue,t.easeCubicIn=oe,t.easeCubicOut=ae,t.easeCubicInOut=ue,t.easePoly=GA,t.easePolyIn=CA,t.easePolyOut=QA,t.easePolyInOut=GA,t.easeSin=fe,t.easeSinIn=se,t.easeSinOut=ce,t.easeSinInOut=fe,t.easeExp=Ae,t.easeExpIn=le,t.easeExpOut=he,t.easeExpInOut=Ae,t.easeCircle=ge,t.easeCircleIn=pe,t.easeCircleOut=de,t.easeCircleInOut=ge,t.easeBounce=ve,t.easeBounceIn=ye,t.easeBounceOut=ve,t.easeBounceInOut=we,t.easeBack=UA,t.easeBackIn=LA,t.easeBackOut=KA,t.easeBackInOut=UA,t.easeElastic=ZA,t.easeElasticIn=WA,t.easeElasticOut=ZA,t.easeElasticInOut=XA,t.forceCenter=Wp,t.forceCollide=Ad,t.forceLink=pd,t.forceManyBody=vd,t.forceSimulation=yd,t.forceX=wd,t.forceY=xd,t.formatDefaultLocale=hr,t.formatLocale=Td,t.formatSpecifier=Gd,t.precisionFixed=Yd,t.precisionPrefix=Id,t.precisionRound=Sd,t.geoArea=Dg,t.geoBounds=Kg,t.geoCentroid=Rg,t.geoCircle=uy,t.geoClipExtent=py,t.geoDistance=xy,t.geoGraticule=di,t.geoGraticule10=gi,t.geoInterpolate=my,t.geoLength=yy,t.geoPath=Dy,t.geoAlbers=$y,t.geoAlbersUsa=tv,t.geoAzimuthalEqualArea=ev,t.geoAzimuthalEqualAreaRaw=nv,t.geoAzimuthalEquidistant=iv,t.geoAzimuthalEquidistantRaw=rv,t.geoConicConformal=av,t.geoConicConformalRaw=eo,t.geoConicEqualArea=Vy,t.geoConicEqualAreaRaw=Wi,t.geoConicEquidistant=sv,t.geoConicEquidistantRaw=io,t.geoEquirectangular=uv,t.geoEquirectangularRaw=ro,t.geoGnomonic=cv,t.geoGnomonicRaw=oo,t.geoIdentity=fv,t.geoProjection=Ui,t.geoProjectionMutator=Ri,t.geoMercator=ov,t.geoMercatorRaw=$i,t.geoOrthographic=lv,t.geoOrthographicRaw=uo,t.geoStereographic=hv,t.geoStereographicRaw=so,t.geoTransverseMercator=Av,t.geoTransverseMercatorRaw=co,t.geoRotation=ay,t.geoStream=Ng,t.geoTransform=Fy,t.cluster=pv,t.hierarchy=wo,t.pack=Gv,t.packSiblings=Cv,t.packEnclose=Mv,t.partition=Tv,t.stratify=Ov,t.tree=Nv,t.treemap=Dv,t.treemapBinary=zv,t.treemapDice=kv,t.treemapSlice=qv,t.treemapSliceDice=Lv,t.treemapSquarify=jv,t.treemapResquarify=Kv,t.interpolate=yh,t.interpolateArray=fh,t.interpolateBasis=ih,t.interpolateBasisClosed=oh,t.interpolateDate=lh,t.interpolateNumber=hh,t.interpolateObject=Ah,t.interpolateRound=vh,t.interpolateString=gh,t.interpolateTransformCss=bh,t.interpolateTransformSvg=Bh,t.interpolateZoom=Qh,t.interpolateRgb=uh,t.interpolateRgbBasis=sh,t.interpolateRgbBasisClosed=ch,t.interpolateHsl=Gh,t.interpolateHslLong=Hh,t.interpolateLab=fn,t.interpolateHcl=kh,t.interpolateHclLong=Th,t.interpolateCubehelix=Yh,t.interpolateCubehelixLong=Ih,t.quantize=Sh,t.path=Ye,t.polygonArea=Uv,t.polygonCentroid=Rv,t.polygonHull=Jv,t.polygonContains=Wv,t.polygonLength=Zv;t.quadtree=nr;t.queue=sa,t.randomUniform=$v,t.randomNormal=tw,t.randomLogNormal=nw,t.randomBates=rw,t.randomIrwinHall=ew,t.randomExponential=iw,t.request=ow,t.html=uw,t.json=sw,t.text=cw,t.xml=fw,t.csv=hw,t.tsv=Aw,t.scaleBand=Aa,t.scalePoint=da,t.scaleIdentity=_a,t.scaleLinear=Ea,t.scaleLog=Ta,t.scaleOrdinal=ha,t.scaleImplicit=yw,t.scalePow=Ia,t.scaleSqrt=Sa,t.scaleQuantile=Oa,t.scaleQuantize=Na,t.scaleThreshold=qa,t.scaleTime=Lx,t.scaleUtc=Kx,t.schemeCategory10=Rx,t.schemeCategory20b=Fx,t.schemeCategory20c=Jx,t.schemeCategory20=Wx,t.interpolateCubehelixDefault=Zx,t.interpolateRainbow=tm,t.interpolateWarm=Xx,t.interpolateCool=Vx,t.interpolateViridis=nm,t.interpolateMagma=em,t.interpolateInferno=rm,t.interpolatePlasma=im,t.scaleSequential=Ru,t.creator=vf,t.local=x,t.matcher=Bf,t.mouse=Gf,t.namespace=yf,t.namespaces=gf,t.select=ll,t.selectAll=hl,t.selection=pt,t.selector=Hf,t.selectorAll=Tf,t.touch=Al,t.touches=pl,t.window=Xf,t.customEvent=C,t.arc=fm,t.area=Am,t.line=hm,t.pie=gm,t.radialArea=wm,t.radialLine=vm,t.symbol=Pm,t.symbols=qm,t.symbolCircle=xm,t.symbolCross=mm,t.symbolDiamond=Em,t.symbolSquare=Hm,t.symbolStar=Gm,t.symbolTriangle=Tm,t.symbolWye=Nm,t.curveBasisClosed=zm,t.curveBasisOpen=Lm,t.curveBasis=Dm,t.curveBundle=Km,t.curveCardinalClosed=Rm,t.curveCardinalOpen=Fm,t.curveCardinal=Um,t.curveCatmullRomClosed=Wm,t.curveCatmullRomOpen=Zm,t.curveCatmullRom=Jm,t.curveLinearClosed=Xm,t.curveLinear=lm,t.curveMonotoneX=Qs,t.curveMonotoneY=Gs,t.curveNatural=Vm,t.curveStep=$m,t.curveStepAfter=Is,t.curveStepBefore=Ys,t.stack=rb,t.stackOffsetExpand=ib,t.stackOffsetNone=nb,t.stackOffsetSilhouette=ob,t.stackOffsetWiggle=ab,t.stackOrderAscending=ub,t.stackOrderDescending=sb,t.stackOrderInsideOut=cb,t.stackOrderNone=eb,t.stackOrderReverse=fb,t.timeInterval=Pa,t.timeMillisecond=_w,t.timeMilliseconds=Mw,t.utcMillisecond=_w,t.utcMilliseconds=Mw,t.timeSecond=Tw,t.timeSeconds=Yw,t.utcSecond=Tw,t.utcSeconds=Yw,t.timeMinute=Iw,t.timeMinutes=Sw,t.timeHour=Ow,t.timeHours=Nw,t.timeDay=qw,t.timeDays=Pw,t.timeWeek=jw,t.timeWeeks=Fw,t.timeSunday=jw,t.timeSundays=Fw,t.timeMonday=Dw,t.timeMondays=Jw,t.timeTuesday=zw,t.timeTuesdays=Ww,t.timeWednesday=Lw,t.timeWednesdays=Zw,t.timeThursday=Kw,t.timeThursdays=Xw,t.timeFriday=Uw,t.timeFridays=Vw,t.timeSaturday=Rw,t.timeSaturdays=$w,t.timeMonth=tx,t.timeMonths=nx,t.timeYear=ex,t.timeYears=rx,t.utcMinute=ix,t.utcMinutes=ox,t.utcHour=ax,t.utcHours=ux,t.utcDay=sx,t.utcDays=cx,t.utcWeek=fx,t.utcWeeks=yx,t.utcSunday=fx,t.utcSundays=yx,t.utcMonday=lx,t.utcMondays=vx,t.utcTuesday=hx,t.utcTuesdays=wx,t.utcWednesday=Ax,t.utcWednesdays=xx,t.utcThursday=px,t.utcThursdays=mx,t.utcFriday=dx,t.utcFridays=bx,t.utcSaturday=gx,t.utcSaturdays=Bx,t.utcMonth=Ex,t.utcMonths=_x,t.utcYear=Mx,t.utcYears=Qx,t.timeFormatDefaultLocale=Pu,t.timeFormatLocale=Ua,t.isoFormat=Ix,t.isoParse=Sx,t.now=An,t.timer=gn,t.timerFlush=yn,t.timeout=Uh,t.interval=Rh,t.transition=$n,t.active=np,t.interrupt=rA,t.voronoi=mb,t.zoom=_b,t.zoomTransform=yc,t.zoomIdentity=Bb,Object.defineProperty(t,"__esModule",{value:!0})})},function(t,n){"use strict";var e=function(){function t(){}return t.prototype.configure=function(t,n){this.config=t,this.svg=n},t.prototype.clean=function(){this.svg.selectAll(".serie").remove()},t}();Object.defineProperty(n,"__esModule",{value:!0}),n.default=e},function(t,n){"use strict";function e(t){return t&&t.constructor===Array&&t instanceof Array}function r(t){return t&&t.constructor===Object&&t instanceof Object}function i(t){return t&&"[object Function]"==={}.toString.call(t)}function o(t){return!isNaN(parseFloat(t))&&isFinite(t)}function a(t){return t%2===0}function u(t){var n=null,e=null;return!(!t||"string"!=typeof t)&&(n=t.split("%"),e=+n[0],2===n.length&&e>=0&&e<=100)}function s(t,n){var e=new Set,r=null;if(!t||!t.length)return new Set;for(var i=0;i<t.length;i++)r=n?t[i][n]:t[i],r&&e.add(r);return e}function c(t,n){var e=Object.prototype.toString,r=function(t){return t},i=function(t){return r(null!==t&&"object"==typeof t&&t[n.prop]||t)};return t instanceof Array&&t.length?("[object Object]"!==e.call(n)&&(n={}),"function"!=typeof n.parser&&(n.parser=r),n.desc=n.desc?-1:1,t.sort(function(t,e){return t=i.call(n,t),e=i.call(n,e),n.desc*(t<e?-1:+(t>e))})):[]}function f(t,n,e){for(var r=0;r<t.length;r++)if(t[r][n]===e)return t[r];return null}function l(t){return null!=t?JSON.parse(JSON.stringify(t)):null}function h(t){return t*Math.PI/180}function A(t,n){return function(e){for(var r=0,i=n;r<i.length;r++){var o=i[r],a=e[o];if(t.indexOf(a)!=-1)return!1}return!0}}n.isArray=e,n.isObject=r,n.isFunction=i,n.isNumeric=o,n.isEven=a,n.isPercentage=u,n.keys=s,n.sortBy=c,n.findElement=f,n.copy=l,n.deg2rad=h,n.isValuesInObjectKeys=A},function(t,n){"use strict";var e=function(){function t(){}return t}();e.COMPONENT_TRANSITION_TIME=100,e.COMPONENT_HIDE_SHOW_TRANSITION_TIME=300,e.COMPONENT_HIDE_OPACITY=.06,e.COMPONENT_DATA_KEY_ATTRIBUTE="data-proteic-key",e.LEGEND_DATA_KEY_ATTRIBUTE="data-proteic-legend-key",e.LEGEND_HIDE_OPACITY=.3,e.BREAKPOINT=768,e.ASPECT_RATIO=.7,e.LOADING_ICON="data:image/gif;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=",
Object.defineProperty(n,"__esModule",{value:!0}),n.default=e},function(t,n,e){"use strict";var r=e(48),i=e(16),o=e(3),a=e(67),u=e(1),s=function(){function t(t,n,e,i){this.ds=null,this.dispatcher=u.dispatch("onmessage","onopen","onerror","addLoading","removeLoading"),this.config=this.loadConfigFromUser(e,i),this.context=new r.SvgContext(t,this.config),this.data=n}return t.prototype.draw=function(t){void 0===t&&(t=this.data),this.context.draw(o.copy(t)),this.data=t},t.prototype.datasource=function(t){var n=this;this.ds=t,this.ds.configure(this.dispatcher),this.dispatcher.on("addLoading",function(){return n.context.addLoading()}),this.dispatcher.on("removeLoading",function(){return n.context.removeLoading()}),this.dispatcher.on("onmessage",function(t){return n.keepDrawing(t)}),this.dispatcher.on("onopen",function(t){}),this.dispatcher.on("onerror",function(t){console.error("onerror",t)})},t.prototype.loadConfigFromUser=function(t,n){var e=new i.default;for(var r in n)e.put(r,r in t?t[r]:n[r]);var o=e.get("width");return o=a.calculateWidth(o,e.get("selector"))-e.get("marginLeft")-e.get("marginRight"),e.put("width",o),e},t}();Object.defineProperty(n,"__esModule",{value:!0}),n.default=s},function(t,n,e){"use strict";function r(){return K.scaleOrdinal().range(U)}function i(){return K.scaleOrdinal().range(R)}function o(){return K.scaleOrdinal().range(F)}function a(){return K.scaleOrdinal().range(J)}function u(){return K.scaleOrdinal().range(W)}function s(){return K.scaleOrdinal().range(Z)}function c(){return K.scaleOrdinal().range(X)}function f(){return K.scaleOrdinal().range(V)}function l(){return K.scaleOrdinal().range($)}function h(){return K.scaleOrdinal().range(tt)}function A(){return K.scaleOrdinal().range(nt)}function p(){return K.scaleOrdinal().range(et)}function d(){return K.scaleOrdinal().range(rt)}function g(){return K.scaleOrdinal().range(it)}function y(){return K.scaleOrdinal().range(ot)}function v(){return K.scaleOrdinal().range(at)}function w(){return K.scaleOrdinal().range(ut)}function x(){return K.scaleOrdinal().range(st)}function m(){return K.scaleOrdinal().range(ct)}function b(){return K.scaleOrdinal().range(ft)}function B(){return K.scaleOrdinal().range(lt)}function E(){return K.scaleOrdinal().range(ht)}function _(){return K.scaleOrdinal().range(At)}function M(){return K.scaleOrdinal().range(pt)}function C(){return K.scaleOrdinal().range(dt)}function Q(){return K.scaleOrdinal().range(gt)}function G(){return K.scaleOrdinal().range(yt)}function H(){return K.scaleOrdinal().range(vt)}function k(){return K.scaleOrdinal().range(wt)}function T(){return K.scaleOrdinal().range(xt)}function Y(){return K.scaleOrdinal().range(mt)}function I(){return K.scaleOrdinal().range(bt)}function S(){return K.scaleOrdinal().range(Bt)}function O(){return K.scaleOrdinal().range(Et)}function N(){return K.scaleOrdinal().range(_t)}function q(){return K.scaleOrdinal().range(Mt)}function P(){return K.scaleOrdinal().range(Ct)}function j(){return K.scaleOrdinal().range(Qt)}function D(){return K.scaleOrdinal().range(Gt)}function z(){return K.scaleOrdinal().range(Ht)}function L(){return K.scaleOrdinal().range(kt)}var K=e(1),U=["#e1c8df","#9ecd9d","#acd9d6","#e4e36b","#bfa1c5","#e4d3b8","#facba8","#ced4ea","#acd9d6"],R=["#b6dde2","#6394af","#e4e9ab","#8ea876","#f7dce1","#cc878f","#fadaac","#f29a83","#8d7e9e"],F=["#6b68a9","#8cc590","#b9487d","#bfa1c5","#4e6936","#71bbc3","#484156","#ccaf44","#d0553c"],J=["#f1a30d","#1d4763","#84c7bc","#c1212d","#8fbe46","#076837","#563a2d","#563a2d","#87325d"],W=["#f1a30d","#0c3183","#acd9d6","#c1212d","#8fbe46","#076837","#8a6338","#8d2d84","#f09bbc"],Z=["#71bbc3","#1d4763","#8fbe46","#4e6936","#ee8998","#c1212d","#f5af3c","#e95e2e","#634484"],X=["#ea671e","#684592","#84b92a","#cd131c","#3c5ba2","#5baddc","#ffde06","#5db68b","#775e47"],V=["#ebd646","#a50f38","#00a096","#f09bbc","#065b78","#72722a","#005231","#4d4e98","#7c4d25"],$=["#fff1c6","#fee5a7","#fcda87","#face64","#f8bf4b","#f6b030","#f4a009","#d28514","#b36c17","#955618","#7a4317","#613214","#49230f"],tt=["#ffecb8","#fbd68b","#f7bf5e","#f3a82f","#df7520","#cd4925","#be0a26","#a81023","#941320","#80141d","#6d1419","#5a1215","#470f0f"],nt=["#fde4d4","#f1c4af","#f7bf5e","#db826a","#d0614d","#c73e36","#be0a26","#a81023","#941320","#80141d","#6d1419","#5a1215","#470f0f"],et=["#fbe3e3","#f9cfcc","#f0aaa9","#ed7e7e","#ea647b","#e74576","#e41270","#c70f65","#aa105c","#8d1253","#731448","#5a123c","#420e30"],rt=["#f9d8e6","#ebbed7","#dda4c7","#c890bb","#b27daf","#8a4c94","#622181","#622181","#50216b","#472060","#3e1f55","#361e4b","#2d1c41"],it=["#f6e8f1","#dcc5de","#c2a3c9","#a980b3","#905e9f","#793f8e","#622181","#592175","#4f216b","#462060","#3d1f55","#351e4b","#2c1c41"],ot=["#e5f2f9","#d1e5f5","#afd3ed","#91afd7","#738bbf","#3c5a9e","#0c3183","#132a68","#10204c","#0b193b","#06142f","#051228","#061020"],at=["#eff8fd","#d9eff6","#c2e5ef","#a8dae8","#90cbe4","#76b8e1","#5baddc","#4d96cc","#427ebc","#3a67ab","#324c88","#29366b","#1e2354"],ut=["#edf7e7","#c8e3d2","#91cdbf","#41b5ab","#218ba4","#145d94","#0c3183","#0d2d76","#0d2a6a","#0e265e","#0d2253","#0c1e47","#0b1a3c"],st=["#e2ecf6","#cadfe6","#b1d3d6","#94c6c6","#74b9b6","#4caca6","#00a096","#008d89","#007b7c","#006a6f","#005963","#004a57","#063b4c"],ct=["#faf9de","#e9efc3","#d7e4a7","#c5d989","#b1ce6a","#9cc34c","#84b92a","#6fa32b","#5a8f2a","#477c29","#346b27","#205b24","#074d21"],ft=["#eaf3e5","#c7d5be","#a3ba9a","#80a078","#5c885a","#357442","#00632e","#00592b","#004e27","#004423","#033a1e","#053019","#052613"],lt=["#f7eccd","#d9cba6","#bcad82","#a29162","#887946","#716330","#5b501f","#51461d","#483d1b","#3f3418","#362b15","#2d2311","#231a0d"],ht=["#f7eccd","#eed3ab","#e4bb89","#dba269","#ad7446","#834d2c","#5e2f19","#552a18","#4c2516","#432113","#3a1c11","#32180f","#29130b"],At=["#e5e8ea","#bdbfc3","#999a9f","#77797f","#595c64","#3e444c","#253038","#20282e","#1a2024","#15181b","#0e1112","#070808","#000000"],pt=["#f4f3f9","#e0dced","#cbc6e0","#b7b0d4","#948cbf","#706baa","#4d4e98","#484889","#42427a","#3d3c6c","#37365e","#313050","#2c2a44"],dt=["#fbe5ee","#f8ccd5","#f4b2bc","#f096a3","#d56976","#bc3f52","#a50f38","#951735","#851b31","#761d2e","#671e2a","#581d26","#4a1c22"],gt=["#eaf6fc","#cfe4f4","#cfe4f4","#91bfe3","#6999bb","#417797","#065b78","#11536b","#174b5f","#194354","#1a3b49","#1a343f","#192d35"],yt=["#fff7d0","#e9e09b","#d1ca62","#b7b623","#9e9e28","#88872a","#72722a","#676726","#5c5c23","#51511f","#47471b","#3d3d17","#333413"],vt=["#f2edde","#d8d1c0","#bfb699","#a09778","#837b5a","#686141","#4f4b2c","#3e3e1f","#2e3313","#292d14","#232613","#1e2012","#191a10"],wt=["#98141f","#ab332c","#bf5040","#d5705b","#e4a57f","#f3d6a6","#f5f2b8","#cfdbb1","#a4c4a9","#71ada1","#4e868f","#2e637d","#06456c"],xt=["#d43d4f","#df564b","#eb6d45","#f08e53","#f8b96f","#fee08b","#f5f2b8","#d7e5b1","#b5d7aa","#8ec8a3","#6abda3","#4fa4b5","#3489be"],mt=["#651035","#ae1143","#c9314b","#dd7257","#eeb27a","#feeb9e","#f5f2b8","#cadfba","#96cabb","#50b4bb","#3eaecc","#206791","#0c2c63"],bt=["#3f3128","#683828","#933624","#d5705b","#db9c5e","#feeb9e","#f5f2b8","#cfdbb1","#a4c4a9","#71ada1","#628f85","#53746d","#475b57"],Bt=["#e7511e","#eb6929","#ee7f37","#f29446","#f9c083","#ffe9c3","#ffeee3","#f9cfc1","#f3a9ab","#db6882","#c71360","#891953","#4b1c47"],Et=["#b2172b","#c4443e","#d76a5a","#ed937e","#f4b8a2","#fcdbc7","#efefef","#bfcad5","#8ba7bc","#4d87a5","#3c7ca0","#28729b","#036896"],_t=["#b2172b","#c54532","#da6c3b","#f29446","#f8bc67","#fee08b","#efece5","#c9c5c1","#a5a19f","#808080","#666666","#333333","#000000"],Mt=["#98141f","#ab332c","#f9bc47","#fdcf66","#fede8d","#ffecb3","#f9eff6","#e8d0e3","#a4c4a9","#a973aa","#834f96","#622181","#402357"],Ct=["#59194b","#85134b","#c71360","#db6882","#eba7a8","#fce0ca","#faefe1","#dbd9aa","#b9c26e","#94ad31","#728b2b","#546c25","#39521f"],Qt=["#55296e","#75408e","#8a5fa0","#a081b5","#beadcf","#ddd7e7","#eae8ed","#c1d4bc","#93be86","#58a951","#3c853e","#23662f","#084a22"],Gt=["#b2172b","#c5403c","#d96453","#ef8972","#f6b49c","#fcdbc7","#f9ebde","#dad6a8","#b9c16d","#94ad31","#728b2b","#546c25","#39521f"],Ht=["#735146","#846454","#977a65","#aa9177","#c2ad91","#dbcaad","#edebd6","#c4d6aa","#94bf7c","#58a951","#3c853e","#23662f","#084a22"],kt=["#8b5219","#a46821","#bf812c","#cfa151","#e2c489","#f6e8c3","#f5f1df","#cbdccc","#9cc6b9","#60afa6","#359790","#1d7d75","#00665e"];n.category1=r,n.category2=i,n.category3=o,n.category4=a,n.category5=u,n.category6=s,n.category7=c,n.category8=f,n.sequentialYellow=l,n.sequentialRedOrange=h,n.sequentialRed=A,n.sequentialPink=p,n.sequentialPurplePink=d,n.sequentialPurple=g,n.sequentialBlue=y,n.sequentialLightBlue=v,n.sequentialBlueViolet=w,n.sequentialTurquoise=x,n.sequentialLightGreen=m,n.sequentialDarkGreen=b,n.sequentialGreenBrown=B,n.sequentialBrown=E,n.sequentialGrey=_,n.sequentialVioletCb=M,n.sequentialPinkCb=C,n.sequentialBlueCb=Q,n.sequentialGreenCb=G,n.sequentialGreenBrownCb=H,n.diverging_spectral1=k,n.diverging_spectral2=T,n.diverging_spectral3=Y,n.diverging_brown_turquoise=I,n.diverging_orange_pink=S,n.diverging_red_blue=O,n.diverging_red_grey=N,n.diverging_orange_violet=q,n.diverging_purple_green=P,n.diverging_violet_green=j,n.diverging_red_green=D,n.diverging_brown_green=z,n.diverging_lightBrown_turquoise=L},function(t,n,e){"use strict";function r(t,n,e,r){return c.nest().key(function(t){return t[n]}).rollup(function(t){for(var n={},i=0;i<t.length;i++){var o=t[i];o&&(n[o[r]]=o[e])}return n}).entries(t)}function i(t,n){return void 0===n&&(n="key"),c.nest().key(function(t){return t[n]}).entries(t)}function o(t){for(var n=Array(),e=0;e<t.length;e++)for(var r=0;r<t[e].values.length;r++){var i=t[e].key,o=t[e].values[r].x,a=t[e].values[r].y;n.push({key:i,x:o,y:a})}return n}function a(t){var n={links:Array(),nodes:Array()};return t.map(function(t){return"link"===t.class?n.links.push(t):n.nodes.push(t)}),n}function u(t,n,e){t.forEach(function(t){n.map(function(n){t[n]=c.timeParse(e)(t[n])})})}function s(t,n,e,r,i,o,a){return t.forEach(function(t){switch(e){case"time":t[o]=c.timeParse(n)(t[o]);break;case"linear":t[o]=+t[o]}switch(i){case"time":t[a]=c.timeParse(r)(t[a]);break;case"linear":t[a]=+t[a]}}),t}var c=e(1);n.simple2stacked=r,n.simple2nested=i,n.nested2simple=o,n.simple2Linked=a,n.convertPropretiesToTimeFormat=u,n.convertByXYFormat=s},function(t,n,e){"use strict";var r=e(33),i=function(){function t(){}return t.prototype.initialize=function(){this.container=new r.default(this.config)},t.prototype.setConfig=function(t){this.config=t},t.prototype.addLoading=function(){this.container.addLoadingIcon()},t.prototype.removeLoading=function(){this.container.removeLoadingIcon()},t}();Object.defineProperty(n,"__esModule",{value:!0}),n.default=i},function(t,n,e){"use strict";var r=this&&this.__extends||function(t,n){function e(){this.constructor=t}for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r]);t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)},i=e(2),o=e(4),a=e(1),u=function(t){function n(){return t.call(this)||this}return r(n,t),n.prototype.render=function(){},n.prototype.update=function(t){var n=this,e=a.nest().key(function(t){return t.key}).entries(t),r=null,i=null,u=this.config.get("colorScale"),s=(this.config.get("height"),this.config.get("width"));return 1===e.length&&"undefined"===e[0].key?void console.warn("Not showing legend, since there is a valid key"):(this.svg.selectAll("g.legend").remove(),r=this.svg.append("g").attr("class","legend"),i=r.selectAll(".legend-entry").data(e,function(t){return t.key}).enter().append("g").attr("class","legend-entry").attr(o.default.LEGEND_DATA_KEY_ATTRIBUTE,function(t){return t.key}),i.append("rect").attr("x",s+10).attr("y",function(t,n){return 25*n}).attr("height",20).attr("width",20).style("fill",function(t){return u(t.key)}).style("stroke",function(t){return u(t.key)}).style("opacity",.8).on("click.default",function(t){return n.toggle(t)}),void i.append("text").attr("x",s+25+10).attr("y",function(t,n){return 25*n+7}).attr("dy","0.55em").text(function(t){return t.key}).style("font","14px Montserrat, sans-serif").on("click.default",function(){return n.toggle}))},n.prototype.toggle=function(t){var n=t.key,e=this.svg.selectAll("*["+o.default.COMPONENT_DATA_KEY_ATTRIBUTE+'="'+n+'"]'),r=this.config.get("colorScale");if(!e.empty()){var i=parseInt(e.style("opacity"));i=1==i?o.default.COMPONENT_HIDE_OPACITY:1;var a=this.svg.select(".legend-entry["+o.default.LEGEND_DATA_KEY_ATTRIBUTE+'="'+n+'"]');a.selectAll("rect").transition().duration(o.default.COMPONENT_HIDE_SHOW_TRANSITION_TIME).style("fill",function(t){return 1===i?r(t.key):"transparent"}),e.transition().duration(o.default.COMPONENT_HIDE_SHOW_TRANSITION_TIME).style("opacity",i)}},n}(i.default);Object.defineProperty(n,"__esModule",{value:!0}),n.default=u},function(t,n,e){"use strict";var r=this&&this.__extends||function(t,n){function e(){this.constructor=t}for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r]);t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)},i=e(43),o=e(45),a=e(2),u=function(t){function n(){var n=t.call(this)||this;return n._x=new i.default,n._y=new o.default,n}return r(n,t),n.prototype.render=function(){this._y.render(),this._x.render()},n.prototype.update=function(t){this._y.update(t),this._x.update(t)},n.prototype.configure=function(n,e){t.prototype.configure.call(this,n,e),this._y.configure(n,e),this._x.configure(n,e)},Object.defineProperty(n.prototype,"x",{get:function(){return this._x},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"y",{get:function(){return this._y},enumerable:!0,configurable:!0}),n}(a.default);Object.defineProperty(n,"__esModule",{value:!0}),n.default=u},function(t,n){"use strict";function e(t,n){t.sort(function(t,e){var r=t[n],i=e[n];return r<i?-1:r>i?1:0})}n.sortByField=e},function(t,n){"use strict";var e=function(){function t(){this.dispatcher=null,this.source=null,this.isWaitingForData=!0}return t.prototype.start=function(){},t.prototype.stop=function(){},t.prototype.configure=function(t){this.dispatcher=t},t}();Object.defineProperty(n,"__esModule",{value:!0}),n.default=e},function(t,n,e){"use strict";var r=this&&this.__extends||function(t,n){function e(){this.constructor=t}for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r]);t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)},i=e(2),o=e(4),a=e(1),u=function(t){function n(n,e){var r=t.call(this)||this;return r.x=n,r.y=e,r}return r(n,t),n.prototype.render=function(){},n.prototype.update=function(t){var n=this,e=this.config.get("propertyKey"),r=this.config.get("propertyX"),i=this.config.get("propertyY"),u=a.nest().key(function(t){return t[e]}).entries(t),s=null,c=this.config.get("markerShape"),f=this.config.get("markerSize"),l=(this.config.get("markerOutlineWidth"),this.config.get("colorScale")),h=null,A=null,p=a.symbol().size(f);switch(A=this.svg.selectAll("g.points"),c){case"dot":p.type(a.symbolCircle);break;case"ring":p.type(a.symbolCircle);break;case"cross":p.type(a.symbolCross);break;case"diamond":p.type(a.symbolDiamond);break;case"square":p.type(a.symbolSquare);break;case"star":p.type(a.symbolStar);break;case"triangle":p.type(a.symbolTriangle);break;case"wye":p.type(a.symbolWye);break;case"circle":p.type(a.symbolCircle);break;default:p.type(a.symbolCircle)}h=A.data(u,function(t){return t.values},function(t){return t[r]}),h.enter().append("g").attr("class","points").attr(o.default.COMPONENT_DATA_KEY_ATTRIBUTE,function(t){return t[e]}).style("stroke",function(t){return l(t[e])}).selectAll("circle").data(function(t){return t.values}).enter().append("path").attr("class","marker").attr("d",p).style("stroke",function(t){return l(t[e])}).style("fill",function(t){return"ring"!==c?l(t[e]):"transparent"}).attr("transform",function(t){return"translate("+n.x.xAxis.scale()(t[r])+", "+n.y.yAxis.scale()(t[i])+")"}),this.svg.selectAll(".marker").transition().duration(o.default.COMPONENT_TRANSITION_TIME).ease(a.easeLinear).attr("transform",function(t){return"translate("+n.x.xAxis.scale()(t[r])+", "+n.y.yAxis.scale()(t[i])+")"}),h.exit().remove(),s=this.svg.selectAll(".marker"),s.on("mousedown.user",this.config.get("onDown")).on("mouseup.user",this.config.get("onUp")).on("mouseleave.user",this.config.get("onLeave")).on("mouseover.user",this.config.get("onHover")).on("click.user",this.config.get("onClick"))},n}(i.default);Object.defineProperty(n,"__esModule",{value:!0}),n.default=u},function(t,n,e){"use strict";var r=this&&this.__extends||function(t,n){function e(){this.constructor=t}for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r]);t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)},i=e(2),o=function(t){function n(){return t.call(this)||this}return r(n,t),n.prototype.update=function(t){var n=t[t.length-1];this.svg.select(".value").text(n.value),this.svg.select(".label").text(n.label)},n.prototype.render=function(){var t=this.svg.append("g").attr("class","text-indicator").attr("pointer-events","none").style("text-anchor","middle").style("alignment-baseline","central");t.append("text").attr("class","value").attr("x",0).attr("y",0).attr("pointer-events","none").text("").style("text-anchor","middle"),t.append("text").attr("class","label").attr("x",0).attr("y",0).attr("pointer-events","none").text("").style("transform","translate(0, 1.5em").style("text-anchor","middle")},n.prototype.translate=function(t,n){this.svg.select("g.text-indicator").attr("transform","translate("+t+", "+n+")")},n}(i.default);Object.defineProperty(n,"__esModule",{value:!0}),n.default=o},function(t,n,e){"use strict";var r=this&&this.__extends||function(t,n){function e(){this.constructor=t}for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r]);t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)},i=e(10),o=e(9),a=e(40),u=e(8),s=e(11),c=e(7),f=function(t){function n(){var n=t.call(this)||this;return n.axes=new i.default,n.streams=new a.default(n.axes),n}return r(n,t),n.prototype.draw=function(t){var n=this.config.get("xAxisFormat"),e=(this.config.get("xAxisType"),this.config.get("yAxisFormat"),this.config.get("yAxisType"),this.config.get("propertyX"));this.config.get("propertyY");c.convertPropretiesToTimeFormat(t,[e],n),s.sortByField(t,e),this.container.updateComponents(t)},n.prototype.initialize=function(){t.prototype.initialize.call(this);var n=(this.config.get("markerSize"),this.config.get("areaOpacity"),this.config.get("legend"));this.container.add(this.axes).add(this.streams),n&&(this.legend=new o.default,this.container.add(this.legend))},n}(u.default);Object.defineProperty(n,"__esModule",{value:!0}),n.default=f},function(t,n){"use strict";var e=function(){function t(){this.properties={}}return t.prototype.put=function(t,n){return this.properties[t]=n,this},t.prototype.get=function(t){return this.properties[t]},t}();Object.defineProperty(n,"__esModule",{value:!0}),n.default=e},function(t,n,e){"use strict";var r=this&&this.__extends||function(t,n){function e(){this.constructor=t}for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r]);t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)},i=e(5),o=e(49),a=e(57),u=e(3),s=function(t){function n(n,e){return void 0===e&&(e={}),t.call(this,new o.default,n,e,a.defaults)||this}return r(n,t),n.prototype.fire=function(t,n){"transition"===t&&("grouped"===n?this.config.put("stacked",!1):"stacked"===n&&this.config.put("stacked",!0),this.draw())},n.prototype.keepDrawing=function(t){var n=t.constructor;if(n===Array)this.data=t;else{for(var e=!1,r=0;r<this.data.length;r++){var i=this.data[r];if(i.x===t.x&&i.key===t.key){this.data[r]=t,e=!0;break}}e||this.data.push(t)}this.draw(u.copy(this.data))},n}(i.default);Object.defineProperty(n,"__esModule",{value:!0}),n.default=s},function(t,n,e){"use strict";var r=this&&this.__extends||function(t,n){function e(){this.constructor=t}for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r]);t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)},i=e(5),o=e(50),a=e(58),u=function(t){function n(n,e){return void 0===e&&(e={}),t.call(this,new o.default,n,e,a.defaults)||this}return r(n,t),n.prototype.keepDrawing=function(n){this.data=[n[0]],t.prototype.draw.call(this)},n}(i.default);Object.defineProperty(n,"__esModule",{value:!0}),n.default=u},function(t,n,e){"use strict";var r=this&&this.__extends||function(t,n){function e(){this.constructor=t}for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r]);t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)},i=e(5),o=e(51),a=e(59),u=e(3),s=function(t){function n(n,e){return void 0===e&&(e={}),t.call(this,new o.default,n,e,a.defaults)||this}return r(n,t),n.prototype.keepDrawing=function(t){var n=this.config.get("nullValues"),e=this.config.get("maxNumberOfElements"),r=this.data.length,i=t.constructor,o=[this.config.get("propertyX"),this.config.get("propertyY"),this.config.get("propertyKey")];if(i===Array){var a=t.filter(u.isValuesInObjectKeys(n,o));this.data=this.data.concat(a)}else this.data.push(t);if(r>e){var s=r-e;this.data=this.data.slice(s)}this.draw(u.copy(this.data))},n}(i.default);Object.defineProperty(n,"__esModule",{value:!0}),n.default=s},function(t,n,e){"use strict";var r=this&&this.__extends||function(t,n){function e(){this.constructor=t}for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r]);t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)},i=e(5),o=e(52),a=e(60),u=e(3),s=function(t){function n(n,e){return void 0===e&&(e={}),t.call(this,new o.default,n,e,a.defaults)||this}return r(n,t),n.prototype.keepDrawing=function(t){var n=t.constructor;n===Array?this.data=this.data.concat(t):this.data.push(t),this.draw(u.copy(this.data))},n}(i.default);Object.defineProperty(n,"__esModule",{value:!0}),n.default=s},function(t,n,e){"use strict";var r=this&&this.__extends||function(t,n){function e(){this.constructor=t}for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r]);t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)},i=e(5),o=e(53),a=e(61),u=e(3),s=function(t){function n(n,e){return void 0===e&&(e={}),t.call(this,new o.default,n,e,a.defaults)||this}return r(n,t),n.prototype.keepDrawing=function(t){var n=t.constructor;n===Array?this.data?this.data=this.data.concat(t):this.data=t:this.data.push(t),this.draw(u.copy(this.data))},n}(i.default);Object.defineProperty(n,"__esModule",{value:!0}),n.default=s},function(t,n,e){"use strict";var r=this&&this.__extends||function(t,n){function e(){this.constructor=t}for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r]);t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)},i=e(5),o=e(54),a=e(62),u=e(3),s=function(t){function n(n,e){return void 0===e&&(e={}),t.call(this,new o.default,n,e,a.defaults)||this}return r(n,t),n.prototype.keepDrawing=function(t){var n=t.constructor;n===Array?this.data?this.data=this.data.concat(t):this.data=t:this.data.push(t),this.draw(u.copy(this.data))},n}(i.default);Object.defineProperty(n,"__esModule",{value:!0}),n.default=s},function(t,n,e){"use strict";var r=this&&this.__extends||function(t,n){function e(){this.constructor=t}for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r]);t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)},i=e(5),o=e(15),a=e(63),u=e(3),s=function(t){function n(n,e){return void 0===e&&(e={}),t.call(this,new o.default,n,e,a.defaults)||this}return r(n,t),n.prototype.keepDrawing=function(t){var n=t.constructor;n===Array?this.data=this.data.concat(t):this.data.push(t),this.draw(u.copy(this.data))},n}(i.default);Object.defineProperty(n,"__esModule",{value:!0}),n.default=s},function(t,n,e){"use strict";var r=this&&this.__extends||function(t,n){function e(){this.constructor=t}for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r]);t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)},i=e(5),o=e(15),a=e(64),u=e(3),s=function(t){function n(n,e){return void 0===e&&(e={}),t.call(this,new o.default,n,e,a.defaults)||this}return r(n,t),n.prototype.keepDrawing=function(t){var n=t.constructor;n===Array?this.data=this.data.concat(t):this.data.push(t),this.draw(u.copy(this.data))},n}(i.default);Object.defineProperty(n,"__esModule",{value:!0}),n.default=s},function(t,n,e){"use strict";var r=this&&this.__extends||function(t,n){function e(){this.constructor=t}for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r]);t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)},i=e(5),o=e(55),a=e(65),u=e(3),s=function(t){function n(n,e){return void 0===e&&(e={}),t.call(this,new o.default,n,e,a.defaults)||this}return r(n,t),n.prototype.keepDrawing=function(t){var n=t.constructor;n===Array?this.data?this.data=this.data.concat(t):this.data=t:this.data.push(t),this.draw(u.copy(this.data))},n}(i.default);Object.defineProperty(n,"__esModule",{value:!0}),n.default=s},function(t,n,e){"use strict";var r=this&&this.__extends||function(t,n){function e(){this.constructor=t}for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r]);t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)},i=e(5),o=e(56),a=e(66),u=e(3),s=function(t){function n(n,e){return void 0===e&&(e={}),t.call(this,new o.default,n,e,a.defaults)||this}return r(n,t),n.prototype.keepDrawing=function(t){var n=t.constructor;n===Array?this.data=this.data.concat(t):this.data.push(t),this.draw(u.copy(this.data))},n}(i.default);Object.defineProperty(n,"__esModule",{value:!0}),n.default=s},function(t,n,e){"use strict";var r=this&&this.__extends||function(t,n){function e(){this.constructor=t}for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r]);t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)},i=e(12),o=e(1),a=function(t){function n(n){var e=t.call(this)||this;return e.source=n,e.intervalId=-1,e.isWaitingForData=!1,e}return r(n,t),n.prototype.start=function(){if(!this.isWaitingForData){t.prototype.start.call(this);var n=this.source.pollingTime,e=this.source.url;this._startPolling(e,n),this.isWaitingForData=!0}},n.prototype._startPolling=function(t,n){var e=this;void 0===n&&(n=1e3);var r=window.setInterval;this.intervalId=r(function(){return e._startRequest(t)},n)},n.prototype._startRequest=function(t){var n=this;o.request(t).get(function(t,e){return n._handleResponse(e)})},n.prototype._stopPolling=function(){var t=window.clearInterval;t(this.intervalId)},n.prototype._handleResponse=function(t){var n=JSON.parse;if(4===t.readyState&&200===t.status){var e=n(t.response);this._handleOK(e)}else this._handleError(t)},n.prototype._handleOK=function(t){this.dispatcher.call("onmessage",null,t)},n.prototype._handleError=function(t){this.dispatcher.call("onerror",null,t)},n.prototype.stop=function(){this.isWaitingForData&&(this._stopPolling(),this.isWaitingForData=!1)},n}(i.default);Object.defineProperty(n,"__esModule",{value:!0}),n.default=a},function(t,n,e){"use strict";var r=this&&this.__extends||function(t,n){function e(){this.constructor=t}for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r]);t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)},i=e(12),o=function(t){function n(n){var e=t.call(this)||this;return e.source=n,e}return r(n,t),n.prototype.configure=function(t){this.dispatcher=t},n.prototype.start=function(){var n=this;t.prototype.start.call(this),this.ws=new WebSocket(this.source.endpoint),this.dispatcher.call("addLoading",null,{}),this.ws.onopen=function(t){n.dispatcher.call("onopen",null,t)},this.ws.onerror=function(t){throw new Error("An error occurred trying to reach the websocket server"+t)},this.ws.onmessage=function(t){n.isWaitingForData&&(n.dispatcher.call("removeLoading",null,t),n.isWaitingForData=!1);var e=JSON.parse(t.data);n.dispatcher.call("onmessage",null,e)}},n.prototype.stop=function(){t.prototype.stop.call(this),this.ws&&this.ws.close()},n}(i.default);Object.defineProperty(n,"__esModule",{value:!0}),n.default=o},function(t,n,e){"use strict";var r=e(1),i=function(){function t(){}return t}();i.CURVE_LINEAR=r.curveLinear,i.CURVE_LINEAR_CLOSED=r.curveLinearClosed,i.CURVE_MONOTONE_X=r.curveMonotoneX,i.CURVE_MONOTONE_Y=r.curveMonotoneY,i.CURVE_NATURAL=r.curveNatural,i.CURVE_STEP=r.curveStep,i.CURVE_STEP_AFTER=r.curveStepAfter,i.CURVE_STEP_BEFORE=r.curveStepBefore,Object.defineProperty(n,"__esModule",{value:!0}),n.default=i},function(t,n,e){"use strict";var r=this&&this.__extends||function(t,n){function e(){this.constructor=t}for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r]);t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)},i=e(2),o=e(4),a=e(1),u=function(t){function n(n,e){var r=t.call(this)||this;return r.x=n,r.y=e,r}return r(n,t),n.prototype.render=function(){var t=this,n=this.config.get("height"),e=this.config.get("propertyX"),r=this.config.get("propertyY"),i=this.config.get("curve");this.areaGenerator=a.area().curve(i).x(function(n){return t.x.xAxis.scale()(n[e])}).y0(n).y1(function(n){return t.y.yAxis.scale()(n[r])})},n.prototype.update=function(t){var n=this,e=this.config.get("propertyKey"),r=a.nest().key(function(t){return t[e]}).entries(t),i=this.svg.selectAll("g.area"),u=this.config.get("colorScale"),s=(this.config.get("height"),this.config.get("areaOpacity"));i=i.data(r,function(t){return t[e]}).enter().append("g").attr("class","area").attr(o.default.COMPONENT_DATA_KEY_ATTRIBUTE,function(t){return t[e]}).append("svg:path").style("fill",function(t){return u(t[e])}).style("fill-opacity",s).attr("d",function(t){return n.areaGenerator(t.values)}).attr("class","areaPath"),this.svg.selectAll(".areaPath").data(r,function(t){return t[e]}).transition().duration(o.default.COMPONENT_TRANSITION_TIME).attr("d",function(t){return n.areaGenerator(t.values)})},n}(i.default);Object.defineProperty(n,"__esModule",{value:!0}),n.default=u},function(t,n,e){"use strict";var r=this&&this.__extends||function(t,n){function e(){this.constructor=t}for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r]);t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)},i=e(2),o=e(7),a=e(4),u=e(1),s=function(t){function n(n,e){var r=t.call(this)||this;return r.x=n,r.y=e,r}return r(n,t),n.prototype.render=function(){},n.prototype.update=function(t){var n=null,e=this.config.get("stacked");this.clean(),e?this.updateStacked(t):this.updateGrouped(t),n=this.svg.selectAll("g.barSeries rect"),n.on("mousedown.user",this.config.get("onDown")).on("mouseup.user",this.config.get("onUp")).on("mouseleave.user",this.config.get("onLeave")).on("mouseover.user",this.config.get("onHover")).on("click.user",this.config.get("onClick"))},n.prototype.updateStacked=function(t){var n=this.config.get("propertyKey"),e=this.config.get("propertyX"),r=this.config.get("propertyY"),i=u.map(t,function(t){return t[n]}).keys(),s=this.config.get("stack");t=s.keys(i)(o.simple2stacked(t,e,r,n));var c=this.config.get("colorScale"),f=this.svg.selectAll(".barSeries").data(t),l=f.enter().append("g"),h=this.x.xAxis.scale(),A=this.y.yAxis.scale();f.merge(l).attr("class","barSeries").attr(a.default.COMPONENT_DATA_KEY_ATTRIBUTE,function(t){return t[n]}).style("fill",function(t,e){return c(void 0!==t[n]?t[n]:e)}).selectAll("rect").data(function(t){return t}).enter().append("rect").attr("x",function(t){return h(t.data[n])}).attr("y",function(t){return A(t[1])}).attr("height",function(t){return A(t[0])-A(t[1])}).attr("width",h.bandwidth())},n.prototype.updateGrouped=function(t){var n=this.config.get("propertyKey"),e=this.config.get("propertyX"),r=this.config.get("propertyY"),i=u.map(t,function(t){return t[n]}).keys(),s=this.config.get("colorScale"),c=null,f=this.x.xAxis.scale(),l=this.y.yAxis.scale(),h=u.scaleBand().domain(i).range([0,f.bandwidth()]),A=this.config.get("height"),p=o.simple2nested(t,"key");c=this.svg.selectAll("g.barSeries").data(p,function(t){return t.values}),c.enter().append("g").attr("class","barSeries").attr(a.default.COMPONENT_DATA_KEY_ATTRIBUTE,function(t){return t[n]}).selectAll("rect").data(function(t){return t.values}).enter().append("rect").attr("transform",function(t){return"translate("+f(t[e])+")"}).attr("width",h.bandwidth()).attr("x",function(t){return h(t[n])}).attr("y",function(t){return l(t[r])}).attr("height",function(t){return A-l(t[r])}).style("fill",function(t,e){
return s(void 0!==t[n]?t[n]:e)}).attr("class","bar"),this.svg.selectAll(".bar").data(t,function(t){return t[e]}).attr("width",h.bandwidth()).attr("x",function(t){return h(t[n])}).attr("y",function(t){return l(t[r])}).attr("height",function(t){return A-l(t[r])}).transition().duration(a.default.COMPONENT_TRANSITION_TIME)},n}(i.default);Object.defineProperty(n,"__esModule",{value:!0}),n.default=s},function(t,n,e){"use strict";var r=this&&this.__extends||function(t,n){function e(){this.constructor=t}for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r]);t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)},i=e(2),o=e(1),a=function(t){function n(n,e){var r=t.call(this)||this;return r.x=n,r.y=e,r}return r(n,t),n.prototype.update=function(t){var n=this,e=this.config.get("propertyKey"),r=this.config.get("propertyX"),i=this.config.get("propertyY"),a=this.config.get("markerShape"),u=this.config.get("markerSize"),s=this.config.get("colorScale"),c=null,f=null,l=this.config.get("width"),h=this.config.get("height"),A=o.symbol().size(u).context(this.canvasCtx);switch(a){case"dot":A.type(o.symbolCircle);break;case"ring":A.type(o.symbolCircle);break;case"cross":A.type(o.symbolCross);break;case"diamond":A.type(o.symbolDiamond);break;case"square":A.type(o.symbolSquare);break;case"star":A.type(o.symbolStar);break;case"triangle":A.type(o.symbolTriangle);break;case"wye":A.type(o.symbolWye);break;case"circle":A.type(o.symbolCircle);break;default:A.type(o.symbolCircle)}f=this.svg.append("proteic"),c=f.selectAll("proteic.g.points"),this.canvasCtx.clearRect(0,0,l,h),c.data(t,function(t){return t[e]}).enter().call(function(t){var o=n;t.each(function(t){o.canvasCtx.save(),o.canvasCtx.translate(o.x.xAxis.scale()(t[r]),o.y.yAxis.scale()(t[i])),o.canvasCtx.beginPath(),o.canvasCtx.strokeStyle=s(t[e]),o.canvasCtx.fillStyle=s(t[e]),A(),o.canvasCtx.closePath(),o.canvasCtx.stroke(),"ring"!==a&&o.canvasCtx.fill(),o.canvasCtx.restore()})})},n.prototype.render=function(){this.canvas=o.select(this.config.get("selector")).append("canvas").attr("id","point-set-canvas").attr("width",this.config.get("width")).attr("height",this.config.get("height")).style("position","absolute").style("z-index",2).style("transform","translate("+this.config.get("marginLeft")+"px, "+this.config.get("marginTop")+"px)"),this.canvasCtx=this.canvas.node().getContext("2d")},n}(i.default);Object.defineProperty(n,"__esModule",{value:!0}),n.default=a},function(t,n,e){"use strict";var r=e(1),i=e(4),o=function(){function t(t){this.components=[],this.config=t;var n=this.config.get("selector"),e=this.config.get("width"),r=this.config.get("height"),i=this.config.get("marginLeft"),o=this.config.get("marginRight"),a=this.config.get("marginTop"),u=this.config.get("marginBottom");e+=i+o,r+=a+u,this.initializeContainer(n,e,r,i,a)}return t.prototype.add=function(t){return this.components.push(t),t.configure(this.config,this.svg),t.render(),this},t.prototype.initializeContainer=function(t,n,e,i,o){this.svg=r.select(t).style("position","relative").style("width",n+"px").style("height",e+"px").append("svg:svg").attr("preserveAspectRatio","xMinYMin meet").attr("viewBox","0 0 "+n+" "+e).attr("width","100%").attr("class","proteic").attr("width",n).attr("height",e).style("position","absolute").append("g").attr("class","chartContainer").attr("transform","translate("+i+","+o+")")},t.prototype.updateComponents=function(t){for(var n=0;n<this.components.length;n++){var e=this.components[n];e.update(t)}},t.prototype.translate=function(t,n){this.svg.attr("transform","translate("+t+", "+n+")")},t.prototype.viewBox=function(t,n){this.svg.attr("viewBox","0 0 "+t+" "+n)},t.prototype.zoom=function(t){this.svg.call(r.zoom().scaleExtent([.5,4]).on("zoom",t))},t.prototype.addLoadingIcon=function(){var t=i.default.LOADING_ICON;this.svg.append("image").attr("id","loadingIcon").attr("width","25%").attr("height","25%").attr("x","25%").attr("y","25%").attr("xlink:href",t)},t.prototype.removeLoadingIcon=function(){this.svg.select('image[id="loadingIcon"]').transition().duration(200).remove()},t}();Object.defineProperty(n,"__esModule",{value:!0}),n.default=o},function(t,n,e){"use strict";var r=this&&this.__extends||function(t,n){function e(){this.constructor=t}for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r]);t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)},i=e(3),o=e(2),a=e(1),u=function(t){function n(){return t.call(this)||this}return r(n,t),n.prototype.render=function(){var t=null,n=this.config.get("invertColorScale"),e=this.config.get("colorScale"),r=this.config.get("width"),o=this.config.get("height"),u=this.config.get("ringWidth"),s=this.config.get("ringMargin"),c=this.config.get("ticks"),f=this.config.get("minAngle"),l=this.config.get("maxAngle"),h=this.config.get("minLevel"),A=this.config.get("maxLevel"),p=this.config.get("labelInset"),d=a.scaleLinear().domain([h,A]).range([0,1]),g=d.ticks(c),y=l-f,v=(r>o?o:r)/2,w=function(){return"translate("+v+","+v+")"},x=a.range(c).map(function(){return 1/c}),m=a.arc().innerRadius(v-u-s).outerRadius(v-s).startAngle(function(t,n){return i.deg2rad(f+t*n*y)}).endAngle(function(t,n){return i.deg2rad(f+t*(n+1)*y)});e.domain([0,1]);var b=this.svg.append("g").attr("class","arc").attr("transform",w),B=b.selectAll("path").data(x).enter().append("path").attr("id",function(t,n){return"sector-"+n}).attr("d",m);B.attr("fill",function(t,r){return e(n?1-t*r:t*r)}),t=this.svg.append("g").attr("class","labels").attr("transform",w),t.selectAll("text").data(g).enter().append("text").attr("transform",function(t){var n=d(t),e=f+n*y;return"rotate("+e+") translate(0,"+(p-v)+")"}).text(function(t){return t}).style("text-anchor","middle").style("font","18px Montserrat, sans-serif")},n.prototype.update=function(){},n}(o.default);Object.defineProperty(n,"__esModule",{value:!0}),n.default=u},function(t,n,e){"use strict";var r=this&&this.__extends||function(t,n){function e(){this.constructor=t}for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r]);t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)},i=e(3),o=e(2),a=e(1),u=function(t){function n(){return t.call(this)||this}return r(n,t),n.prototype.render=function(){var t=(this.config.get("invertColorScale"),this.config.get("colorScale"),this.config.get("width")),n=this.config.get("height"),e=this.config.get("ringWidth"),r=this.config.get("ringMargin"),o=this.config.get("ticks"),u=this.config.get("minAngle"),s=this.config.get("maxAngle"),c=this.config.get("minLevel"),f=this.config.get("maxLevel"),l=(this.config.get("labelInset"),this.config.get("needleNutRadius")),h=this.config.get("needleLenghtRatio"),A=a.scaleLinear().domain([c,f]).range([0,1]),p=(A.ticks(o),s-u),d=(t>n?n:t)/2,g=h*d,y=function(){return"translate("+d+","+d+")"},v=(a.range(o).map(function(){return 1/o}),a.arc().innerRadius(d-e-r).outerRadius(d-r).startAngle(function(t,n){return i.deg2rad(u+t*n*p)}).endAngle(function(t,n){return i.deg2rad(u+t*(n+1)*p)}),a.scaleLinear().domain([c,f]).range([90+u,90+s]));this.svg.append("path").attr("class","needle").datum(0).attr("transform",function(t){return"translate("+d+", "+d+") rotate("+(v(t)-90)+")"}).attr("d","M "+(0-l)+" 0 L 0 "+(0-g)+" L "+l+" 0").style("fill","#666666"),this.svg.append("circle").attr("class","needle").attr("transform",y).attr("cx",0).attr("cy",0).attr("r",l).style("fill","#666666")},n.prototype.update=function(t){var n=t[t.length-1],e=this.config.get("width"),r=this.config.get("height"),i=this.config.get("needleNutRadius"),o=this.config.get("needleLenghtRatio"),u=this.config.get("propertyValue"),s=this.config.get("minAngle"),c=this.config.get("maxAngle"),f=this.config.get("minLevel"),l=this.config.get("maxLevel"),h=(e>r?r:e)/2,A=o*h,p=a.scaleLinear().domain([f,l]).range([90+s,90+c]);this.svg.select(".needle").transition().attr("transform",function(t){return"translate("+h+", "+h+") rotate("+(p(n[u])-90)+")"}).attr("d","M "+(0-i)+" 0 L 0 "+(0-A)+" L "+i+" 0")},n}(o.default);Object.defineProperty(n,"__esModule",{value:!0}),n.default=u},function(t,n,e){"use strict";var r=this&&this.__extends||function(t,n){function e(){this.constructor=t}for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r]);t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)},i=e(2),o=e(4),a=e(1),u=function(t){function n(n,e){var r=t.call(this)||this;return r.x=n,r.y=e,r}return r(n,t),n.prototype.render=function(){var t=this,n=this.config.get("propertyX"),e=this.config.get("propertyY"),r=this.config.get("curve");this.lineGenerator=a.line().curve(r).x(function(e){return t.x.xAxis.scale()(e[n])}).y(function(n){return t.y.yAxis.scale()(n[e])})},n.prototype.update=function(t){var n=this,e=this.config.get("propertyKey"),r=a.nest().key(function(t){return t[e]}).entries(t),i=this.svg.selectAll("g.lineSeries"),u=this.config.get("colorScale");i.data(r,function(t){return t[e]}).enter().append("g").attr("class","lineSeries").attr(o.default.COMPONENT_DATA_KEY_ATTRIBUTE,function(t){return t[e]}).attr("stroke",function(t){return u(t[e])}).append("svg:path").style("stroke",function(t){return u(t[e])}).style("stroke-width",1.9).style("fill","none").attr("d",function(t){return n.lineGenerator(t.values)}).attr("class","line");this.svg.selectAll(".line").data(r,function(t){return t[e]}).attr("d",function(t){return n.lineGenerator(t.values)}).transition().duration(o.default.COMPONENT_TRANSITION_TIME).ease(a.easeLinear)},n}(i.default);Object.defineProperty(n,"__esModule",{value:!0}),n.default=u},function(t,n,e){"use strict";var r=this&&this.__extends||function(t,n){function e(){this.constructor=t}for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r]);t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)},i=e(2),o=e(7),a=e(4),u=e(1),s=function(t){function n(){var n=t.call(this)||this;return n.toggle=0,n}return r(n,t),n.prototype.render=function(){var t=this,n=this.config.get("width"),e=this.config.get("height");this.simulation=u.forceSimulation().force("link",u.forceLink().id(function(t){return t.id}).distance(50)).force("charge",u.forceManyBody()).force("center",u.forceCenter(n/2,e/2)),this.dragstarted=function(n){u.event.active||t.simulation.alphaTarget(.3).restart(),n.fx=n.x,n.fy=n.y},this.dragged=function(t){t.fx=u.event.x,t.fy=u.event.y},this.dragended=function(n){u.event.active||t.simulation.alphaTarget(1),n.fx=null,n.fy=null}},n.prototype.update=function(t){var n=this,e=(this.config.get("nodeRadius"),this.config.get("colorScale")),r=this.config.get("linkWeight"),i=this.config.get("nodeWeight"),s=this.config.get("minLinkWeight"),c=this.config.get("maxLinkWeight"),f=this.config.get("minNodeWeight"),l=this.config.get("maxNodeWeight"),h=this.config.get("weighted"),A=u.scaleLinear().domain([s,c]).range([0,3]),p=u.scaleLinear().domain([f,l]).range([0,15]),d=this.config.get("labelShow"),g=this.config.get("labelField"),y=null,v=null,w=null;t=o.simple2Linked(t),this.svg.selectAll("g.links").remove(),this.svg.selectAll("g.nodes").remove(),this.svg.selectAll("g.labels").remove(),v=this.svg.append("g").attr("class","serie").append("g").attr("class","links").selectAll("line").data(t.links).enter().append("line").attr(a.default.COMPONENT_DATA_KEY_ATTRIBUTE,function(t){return console.log(t),t.key}).attr("stroke-width",function(t){return h&&t.weight?A(t.weight):r}).attr("stroke","#999").attr("stroke-opacity",1),y=this.svg.select("g.serie").append("g").attr("class","nodes").selectAll("circle").data(t.nodes).enter().append("circle").attr(a.default.COMPONENT_DATA_KEY_ATTRIBUTE,function(t){return t.key}).attr("r",function(t){return h&&t.weight?p(t.weight):i}).attr("fill",function(t){return e(t.key)}).attr("stroke","white").call(u.drag().on("start",this.dragstarted).on("drag",this.dragged).on("end",this.dragended));y.on("mousedown.user",this.config.get("onDown")).on("mouseup.user",this.config.get("onUp")).on("mouseleave.user",this.config.get("onLeave")).on("mouseover.user",this.config.get("onHover")).on("click.user",this.config.get("onClick")),d&&(w=this.svg.select("g.serie").append("g").attr("class","labels").selectAll("text").data(t.nodes).enter().append("text").attr(a.default.COMPONENT_DATA_KEY_ATTRIBUTE,function(t){return t.key}).attr("dx",10).attr("dy",".35em").attr("font-size",".85em").text("string"==typeof g?function(t){return t[g]}:g).on("mousedown.user",this.config.get("onDown")).on("mouseup.user",this.config.get("onUp")).on("mouseleave.user",this.config.get("onLeave")).on("mouseover.user",this.config.get("onHover")).on("click.user",this.config.get("onClick"))),this.simulation.nodes(t.nodes).on("tick",function(){return d?n.tickedWithText(v,y,w):n.ticked(v,y)}),this.simulation.force("link").links(t.links)},n.prototype.tickedWithText=function(t,n,e){this.ticked(t,n),e.attr("x",function(t){return t.x}).attr("y",function(t){return t.y})},n.prototype.ticked=function(t,n){t.attr("x1",function(t){return t.source.x}).attr("y1",function(t){return t.source.y}).attr("x2",function(t){return t.target.x}).attr("y2",function(t){return t.target.y}),n.attr("cx",function(t){return t.x}).attr("cy",function(t){return t.y})},n.prototype.zoom=function(t){var n=t.transform;this.svg.selectAll(".nodes circle").attr("transform",n),this.svg.selectAll(".links line").attr("transform",n),this.svg.selectAll(".labels text").attr("transform",n)},n}(i.default);Object.defineProperty(n,"__esModule",{value:!0}),n.default=s},function(t,n,e){"use strict";var r=this&&this.__extends||function(t,n){function e(){this.constructor=t}for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r]);t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)},i=e(2),o=e(44),a=e(46),u=function(t){function n(){var n=t.call(this)||this;return n._x=new o.default,n._y=new a.default,n}return r(n,t),n.prototype.configure=function(n,e){t.prototype.configure.call(this,n,e),this._x.configure(n,e),this._y.configure(n,e)},n.prototype.render=function(){this._x.render(),this._y.render()},n.prototype.update=function(t){this._x.update(t),this._y.update(t)},Object.defineProperty(n.prototype,"x",{get:function(){return this._x},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"y",{get:function(){return this._y},enumerable:!0,configurable:!0}),n}(i.default);Object.defineProperty(n,"__esModule",{value:!0}),n.default=u},function(t,n,e){"use strict";var r=this&&this.__extends||function(t,n){function e(){this.constructor=t}for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r]);t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)},i=e(2),o=e(4),a=e(1),u=function(t){function n(){return t.call(this)||this}return r(n,t),n.prototype.render=function(){},n.prototype.update=function(t){var n=this.config.get("propertyKey"),e=this.config.get("propertyX"),r=this.config.get("width"),i=this.config.get("height"),u=Math.min(r,i)/2,s=this.config.get("colorScale"),c=a.pie().value(function(t){return t[e]})(t),f=a.arc().innerRadius(0).outerRadius(u),l=this.svg.selectAll("g.slice").data(c),h=l.enter();h.append("g").attr(o.default.COMPONENT_DATA_KEY_ATTRIBUTE,function(t){return t.data[n]}).append("path").attr("fill",function(t,e){return s(void 0!==t.data[n]?t.data[n]:e)}).attr("d",f)},n}(i.default);Object.defineProperty(n,"__esModule",{value:!0}),n.default=u},function(t,n,e){"use strict";var r=this&&this.__extends||function(t,n){function e(){this.constructor=t}for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r]);t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)},i=e(2),o=e(7),a=e(4),u=e(1),s=function(t){function n(n){var e=t.call(this)||this;return e.xyAxes=n,e.areaGenerator=u.area().curve(u.curveCardinal).y0(function(t){return e.xyAxes.y.yAxis.scale()(t[0])}).y1(function(t){return e.xyAxes.y.yAxis.scale()(t[1])}),e}return r(n,t),n.prototype.render=function(){},n.prototype.update=function(t){var n=this,e=this.config.get("propertyKey"),r=this.config.get("propertyX"),i=this.config.get("propertyY");this.clean();var s=this.config.get("colorScale"),c=this.config.get("onDown"),f=this.config.get("onUp"),l=this.config.get("onLeave"),h=this.config.get("onHover"),A=this.config.get("onClick"),p=(u.map(t,function(t){return t[e]}).keys(),o.simple2stacked(t,r,i,e)),d=this.config.get("stack"),g=d(p),y=null;this.areaGenerator.x(function(t){return n.xyAxes.x.xAxis.scale()(new Date(t.data[e]))}),y=this.svg.selectAll(".serie").data(g).enter().append("g").attr("class","serie").style("stroke",function(t,n){return s(t[e])}).attr(a.default.COMPONENT_DATA_KEY_ATTRIBUTE,function(t){return t[e]}),y.append("path").attr("class","layer").attr("d",this.areaGenerator).style("fill",function(t,n){return s(t[e])}),y.exit().remove(),y.attr("opacity",1).on("mousedown.user",c).on("mouseup.user",f).on("mouseleave.user",l).on("mouseover.user",h).on("click.user",A)},n}(i.default);Object.defineProperty(n,"__esModule",{value:!0}),n.default=s},function(t,n,e){"use strict";var r=this&&this.__extends||function(t,n){function e(){this.constructor=t}for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r]);t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)},i=e(2),o=e(1),a=function(t){function n(n,e){var r=t.call(this)||this;return r.x=n,r.y=e,r}return r(n,t),n.prototype.removePaths=function(){this.svg.selectAll("path").remove()},n.prototype.getAncestors=function(t){for(var n=[],e=t;e.parent;)n.unshift(e),e=e.parent;return n},n.prototype.update=function(t){var n=this,e=o.arc().startAngle(function(t){return Math.max(0,Math.min(2*Math.PI,n.x.xRadialAxis(t.x0)))}).endAngle(function(t){return Math.max(0,Math.min(2*Math.PI,n.x.xRadialAxis(t.x1)))}).innerRadius(function(t){return Math.max(0,n.y.yRadialAxis(t.y0))}).outerRadius(function(t){return Math.max(0,n.y.yRadialAxis(t.y1))}),r=this.config.get("colorScale");this.removePaths();var i=o.stratify().id(function(t){return t.id}).parentId(function(t){return t.parent})(t);i.sum(function(t){return t.value}),o.partition()(i);var a=this.svg.selectAll("path").data(i.descendants()).enter().append("path").attr("d",function(t){return e(t)}).style("fill",function(t){return t.parent?r(t.data.label):"white"}).style("stroke","#fff").style("stroke-width","2").style("shape-rendering","crispEdge");a.on("mouseover.default",function(t){var e=n.getAncestors(t);e.length>0&&n.svg.selectAll("path").style("opacity",.3),n.svg.selectAll("path").filter(function(t){return e.indexOf(t)>=0}).style("opacity",1),n.svg.select(".text-indicator .label").text(t.data.label),n.svg.select(".text-indicator .value").text(t.value)}).on("mouseout.default",function(t){n.svg.selectAll("path").style("opacity",1),n.svg.select(".text-indicator .label").style("font-weight","normal"),n.svg.select(".text-indicator .label").text(""),n.svg.select(".text-indicator .value").text("")}),a.on("mousedown.user",this.config.get("onDown")).on("mouseup.user",this.config.get("onUp")).on("mouseleave.user",this.config.get("onLeave")).on("mouseover.user",this.config.get("onHover")).on("click.user",this.config.get("onClick"))},n.prototype.render=function(){},n}(i.default);Object.defineProperty(n,"__esModule",{value:!0}),n.default=a},function(t,n,e){"use strict";var r=this&&this.__extends||function(t,n){function e(){this.constructor=t}for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r]);t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)},i=e(2),o=e(7),a=e(4),u=e(1),s=function(t){function n(n){var e=t.call(this)||this;return e.xyAxes=n,e}return r(n,t),n.prototype.render=function(){},n.prototype.update=function(t){var n=this.config.get("propertyKey"),e=this.config.get("propertyStart"),r=this.config.get("propertyEnd"),i=this.config.get("colorScale"),s=this.config.get("height"),c=this.config.get("onDown"),f=this.config.get("onUp"),l=this.config.get("onLeave"),h=this.config.get("onHover"),A=this.config.get("onClick"),p=u.map(t,function(t){return t[n]}).keys(),d=this.svg.selectAll(".serie").data(t),g=null,y=null,v=null,w=null,x=null,m=null,b=null,B=(u.scaleBand().range([0,p.length+1]).domain(p),this.xyAxes.x.xAxis.scale()),E=this.xyAxes.y.yAxis.scale();t=o.simple2nested(t),m=u.extent(t,function(t,n){return n}),b=u.scaleLinear().domain([m[0],m[1]+1]).range([0,s]),d=this.svg.selectAll(".serie").data(t),g=d.enter().append("g"),y=d.merge(g).attr("class","serie").attr(a.default.COMPONENT_DATA_KEY_ATTRIBUTE,function(t){return t[n]}),v=y.selectAll("rect").data(function(t){return t.values}),w=v.enter().append("rect"),x=v.merge(w).attr("width",function(t){return B(t[r])-B(t[e])}).attr("x",function(t){return B(t[e])}).attr("y",function(t){return E(t[n])}).attr("height",function(){return.8*b(1)}).style("fill",function(t){return i(t[n])}),v=this.svg.selectAll("g.serie rect"),v.on("mousedown.user",c).on("mouseup.user",f).on("mouseleave.user",l).on("mouseover.user",h).on("click.user",A)},n}(i.default);Object.defineProperty(n,"__esModule",{value:!0}),n.default=s},function(t,n,e){"use strict";var r=this&&this.__extends||function(t,n){function e(){this.constructor=t}for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r]);t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)},i=e(1),o=e(2),a=function(t){function n(){return t.call(this)||this}return r(n,t),n.prototype.render=function(){var t=this.config.get("width"),n=this.config.get("height"),e=this.config.get("xAxisFormat"),r=this.config.get("xAxisType"),i=this.config.get("xAxisLabel"),o=this.config.get("xAxisGrid");this.initializeXAxis(t,n,e,r,o),this.svg.append("g").attr("class","x axis "+r).attr("transform","translate(0,"+n+")").call(this._xAxis),this.svg.append("text").attr("class","xaxis-title").attr("text-anchor","middle").attr("x",t/2).attr("y",n+40).text(i).style("font","0.8em Montserrat, sans-serif")},n.prototype.update=function(t){var n=this,e=this.config.get("propertyX"),r=this.config.get("xAxisType");if("linear"===r){var o=i.min(t,function(t){return t[e]}),a=i.max(t,function(t){return t[e]});this.updateDomainByMinMax(o,a)}else if("time"===r){var o=i.min(t,function(t){return t[e]||t[n.config.get("propertyStart")]}),a=i.max(t,function(t){return t[e]||t[n.config.get("propertyEnd")]});this.updateDomainByMinMax(o,a)}else{var u=i.map(t,function(t){return t[e]}).keys();this.updateDomainByKeys(u)}this.transition()},n.prototype.updateDomainByKeys=function(t){this._xAxis.scale().domain(t)},n.prototype.updateDomainByMinMax=function(t,n){this._xAxis.scale().domain([t,n])},n.prototype.transition=function(t){void 0===t&&(t=200),this.svg.selectAll(".x.axis").transition().duration(t).call(this._xAxis),this.svg.select(".x.axis path").raise()},n.prototype.initializeXAxis=function(t,n,e,r,o){switch(r){case"time":this._xAxis=i.axisBottom(i.scaleTime().range([0,t]));break;case"linear":this._xAxis=i.axisBottom(i.scaleLinear().range([0,t])).tickFormat(i.format(e));break;case"categorical":this._xAxis=i.axisBottom(i.scaleBand().rangeRound([0,t]).padding(.1).align(.5));break;default:throw new Error('Not allowed type for XAxis. Only allowed "time",  "linear" or "categorical". Got: '+r)}o&&this._xAxis.tickSizeInner(-n).tickPadding(9)},Object.defineProperty(n.prototype,"xAxis",{get:function(){return this._xAxis},enumerable:!0,configurable:!0}),n}(o.default);Object.defineProperty(n,"__esModule",{value:!0}),n.default=a},function(t,n,e){"use strict";var r=this&&this.__extends||function(t,n){function e(){this.constructor=t}for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r]);t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)},i=e(2),o=e(1),a=function(t){function n(){return t.call(this)||this}return r(n,t),n.prototype.update=function(t){},n.prototype.render=function(){this._xRadialAxis=o.scaleLinear().range([0,2*Math.PI])},Object.defineProperty(n.prototype,"xRadialAxis",{get:function(){return this._xRadialAxis},enumerable:!0,configurable:!0}),n}(i.default);Object.defineProperty(n,"__esModule",{value:!0}),n.default=a},function(t,n,e){"use strict";var r=this&&this.__extends||function(t,n){function e(){this.constructor=t}for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r]);t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)},i=e(2),o=e(4),a=e(1),u=e(7),s=function(t){function n(n){var e=t.call(this)||this;return e._orient="left",e.selection=null,null!=n&&(e._orient=n),e}return r(n,t),Object.defineProperty(n.prototype,"orient",{get:function(){return this._orient},enumerable:!0,configurable:!0}),n.prototype.render=function(){var t=this.config.get("width"),n=this.config.get("height"),e=this.config.get("yAxisFormat"),r=this.config.get("yAxisType"),i=this.config.get("yAxisLabel"),o=this.config.get("yAxisGrid");this.initializeYAxis(t,n,e,r,o);var a=this.svg.append("g").attr("class","y axis").attr("transform","left"===this.orient?"translate( 0, 0 )":"translate( "+t+", 0 )").call(this._yAxis);this.svg.append("text").attr("class","yaxis-title").attr("transform","rotate(-90)").attr("text-anchor","middle").attr("x",0-n/2).attr("y",-55).text(i).style("font","0.8em Montserrat, sans-serif"),this.selection=a},n.prototype.update=function(t){var n=this.config.get("propertyKey"),e=this.config.get("propertyY"),r=this.config.get("propertyX"),i=this.config.get("yAxisType"),o=this.config.get("yAxisShow"),s=this.config.get("stacked");if(this.selection.attr("opacity",o?1:0),"linear"===i)if(s){var c=a.map(t,function(t){return t[n]}).keys(),f=this.config.get("stack"),l=f.keys(c)(u.simple2stacked(t,r,e,n)),h=a.min(l,function(t){return a.min(t,function(t){return t[0]})}),A=a.max(l,function(t){return a.max(t,function(t){return t[1]})});this.updateDomainByMinMax(h,A)}else{var h=a.min(t,function(t){return t[e]}),A=a.max(t,function(t){return t[e]});this.updateDomainByMinMax(h,A)}else if("categorical"===i){var c=a.map(t,function(t){return t[n]}).keys().sort();this._yAxis.scale().domain(c)}else console.warn("could not recognize y axis type",i);null!==t&&t.length&&this.transition()},n.prototype.updateDomainByMinMax=function(t,n){this._yAxis.scale().domain([t,n])},n.prototype.transition=function(t){void 0===t&&(t=200),this.selection.transition().duration(o.default.COMPONENT_TRANSITION_TIME).call(this._yAxis),this.svg.selectAll(".y.axis path").raise()},n.prototype.initializeYAxis=function(t,n,e,r,i){switch(r){case"linear":this._yAxis="left"===this.orient?a.axisLeft(a.scaleLinear().range([n,0])).tickFormat(a.format(e)):a.axisRight(a.scaleLinear().range([n,0])).tickFormat(a.format(e));break;case"categorical":this._yAxis="left"===this.orient?a.axisLeft(a.scaleBand().rangeRound([n,0]).padding(.1).align(.5)):a.axisRight(a.scaleBand().rangeRound([n,0]).padding(.1).align(.5));break;default:throw new Error('Not allowed type for YAxis. Only allowed "time",  "linear" or "categorical". Got: '+r)}i&&"left"===this.orient&&this._yAxis.tickSizeInner(-t).tickSizeOuter(0).tickPadding(20)},Object.defineProperty(n.prototype,"yAxis",{get:function(){return this._yAxis},enumerable:!0,configurable:!0}),n}(i.default);Object.defineProperty(n,"__esModule",{value:!0}),n.default=s},function(t,n,e){"use strict";var r=this&&this.__extends||function(t,n){function e(){this.constructor=t}for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r]);t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)},i=e(2),o=e(1),a=function(t){function n(){return t.call(this)||this}return r(n,t),n.prototype.render=function(){var t=this.config.get("width"),n=this.config.get("height"),e=null;e=Math.min(t,n)/2-10,this._yRadialAxis=o.scaleSqrt().range([0,e])},n.prototype.update=function(t){},Object.defineProperty(n.prototype,"yRadialAxis",{get:function(){return this._yRadialAxis},enumerable:!0,configurable:!0}),n}(i.default);Object.defineProperty(n,"__esModule",{value:!0}),n.default=a},function(t,n,e){"use strict";var r=this&&this.__extends||function(t,n){function e(){this.constructor=t}for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r]);t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)},i=e(2),o=e(1),a=function(t){function n(n){var e=t.call(this)||this;return e.zoomerComponent=n,e.zoom=o.zoom().scaleExtent([.5,4]),e}return r(n,t),n.prototype.render=function(){var t=this,n=this.config.get("selector");o.select(n).call(this.zoom),this.zoom.on("zoom",function(){t.zoomerComponent.zoom(o.event)})},n.prototype.update=function(t){},n}(i.default);Object.defineProperty(n,"__esModule",{value:!0}),n.default=a},function(t,n){"use strict";var e=function(){function t(t,n){this.strategy=t,this.strategy.setConfig(n),this.strategy.initialize()}return t.prototype.draw=function(t){this.strategy.draw(t)},t.prototype.addLoading=function(){this.strategy.addLoading()},t.prototype.removeLoading=function(){this.strategy.removeLoading()},t}();n.SvgContext=e},function(t,n,e){"use strict";var r=this&&this.__extends||function(t,n){function e(){this.constructor=t}for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r]);t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)},i=e(10),o=e(31),a=e(9),u=e(8),s=e(11),c=e(7),f=function(t){function n(){var n=t.call(this)||this;return n.axes=new i.default,n.bars=new o.default(n.axes.x,n.axes.y),n}return r(n,t),n.prototype.draw=function(t){var n=this.config.get("xAxisFormat"),e=this.config.get("xAxisType"),r=this.config.get("yAxisFormat"),i=this.config.get("yAxisType"),o=this.config.get("propertyX"),a=this.config.get("propertyY");c.convertByXYFormat(t,n,e,r,i,o,a),s.sortByField(t,o),this.container.updateComponents(t)},n.prototype.initialize=function(){t.prototype.initialize.call(this);var n=this.config.get("legend");this.container.add(this.axes).add(this.bars),n&&(this.legend=new a.default,this.container.add(this.legend))},n}(u.default);Object.defineProperty(n,"__esModule",{value:!0}),n.default=f},function(t,n,e){"use strict";var r=this&&this.__extends||function(t,n){function e(){this.constructor=t}for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r]);t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)},i=e(8),o=e(34),a=e(35),u=e(14),s=function(t){function n(){var n=t.call(this)||this;return n.dial=new o.default,n.dialNeedle=new a.default,n.textIndicator=new u.default,n}return r(n,t),n.prototype.draw=function(t){this.container.updateComponents(t)},n.prototype.initialize=function(){if(t.prototype.initialize.call(this),this.container.add(this.dial).add(this.dialNeedle),this.config.get("numericIndicator")){var n=this.config.get("width"),e=this.config.get("height"),r=(n>e?e:n)/2,i=r+75;this.container.add(this.textIndicator),this.textIndicator.translate(r,i)}},n}(i.default);Object.defineProperty(n,"__esModule",{value:!0}),n.default=s},function(t,n,e){"use strict";var r=this&&this.__extends||function(t,n){function e(){this.constructor=t}for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r]);t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)},i=e(10),o=e(36),a=e(13),u=e(30),s=e(9),c=e(8),f=e(11),l=e(7),h=function(t){function n(){var n=t.call(this)||this;return n.axes=new i.default,n.lines=new o.default(n.axes.x,n.axes.y),n}return r(n,t),n.prototype.draw=function(t){var n=this.config.get("xAxisFormat"),e=this.config.get("xAxisType"),r=this.config.get("yAxisFormat"),i=this.config.get("yAxisType"),o=this.config.get("propertyX"),a=this.config.get("propertyY");l.convertByXYFormat(t,n,e,r,i,o,a),f.sortByField(t,o),this.container.updateComponents(t)},n.prototype.initialize=function(){t.prototype.initialize.call(this);var n=this.config.get("markerSize"),e=this.config.get("areaOpacity"),r=this.config.get("legend");this.container.add(this.axes).add(this.lines),e>0&&(this.area=new u.default(this.axes.x,this.axes.y),this.container.add(this.area)),n>0&&(this.markers=new a.default(this.axes.x,this.axes.y),this.container.add(this.markers)),r&&(this.legend=new s.default,this.container.add(this.legend))},n}(c.default);Object.defineProperty(n,"__esModule",{value:!0}),n.default=h},function(t,n,e){"use strict";var r=this&&this.__extends||function(t,n){function e(){this.constructor=t}for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r]);t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)},i=e(37),o=e(9),a=e(47),u=e(8),s=function(t){function n(){return t.call(this)||this}return r(n,t),n.prototype.draw=function(t){this.container.updateComponents(t)},n.prototype.initialize=function(){t.prototype.initialize.call(this);
var n=this.config.get("legend"),e=this.config.get("zoom");this.linkedNodes=new i.default,this.container.add(this.linkedNodes),n&&(this.legend=new o.default,this.container.add(this.legend)),e&&(this.zoom=new a.default(this.linkedNodes),this.container.add(this.zoom))},n}(u.default);Object.defineProperty(n,"__esModule",{value:!0}),n.default=s},function(t,n,e){"use strict";var r=this&&this.__extends||function(t,n){function e(){this.constructor=t}for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r]);t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)},i=e(8),o=e(39),a=e(9),u=function(t){function n(){var n=t.call(this)||this;return n.sectors=new o.default,n}return r(n,t),n.prototype.draw=function(t){this.container.translate(this.config.get("width")/2,this.config.get("height")/2),this.container.updateComponents(t)},n.prototype.initialize=function(){t.prototype.initialize.call(this),this.container.add(this.sectors);var n=this.config.get("legend");n&&(this.legend=new a.default,this.container.add(this.legend))},n}(i.default);Object.defineProperty(n,"__esModule",{value:!0}),n.default=u},function(t,n,e){"use strict";var r=this&&this.__extends||function(t,n){function e(){this.constructor=t}for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r]);t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)},i=e(10),o=e(13),a=e(9),u=e(8),s=e(11),c=e(7),f=e(32),l=function(t){function n(){var n=t.call(this)||this;return n.axes=new i.default,n.markers=new o.default(n.axes.x,n.axes.y),n.canvasMarkers=new f.default(n.axes.x,n.axes.y),n}return r(n,t),n.prototype.draw=function(t){var n=this.config.get("xAxisFormat"),e=this.config.get("xAxisType"),r=this.config.get("yAxisFormat"),i=this.config.get("yAxisType"),o=this.config.get("propertyX"),a=this.config.get("propertyY");c.convertByXYFormat(t,n,e,r,i,o,a),s.sortByField(t,o),this.container.updateComponents(t)},n.prototype.initialize=function(){t.prototype.initialize.call(this);var n=this.config.get("legend");this.container.add(this.axes),this.config.get("canvas")?this.container.add(this.canvasMarkers):this.container.add(this.markers),n&&(this.legend=new a.default,this.container.add(this.legend))},n}(u.default);Object.defineProperty(n,"__esModule",{value:!0}),n.default=l},function(t,n,e){"use strict";var r=this&&this.__extends||function(t,n){function e(){this.constructor=t}for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r]);t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)},i=e(8),o=e(38),a=e(41),u=e(14),s=function(t){function n(){var n=t.call(this)||this;return n.axes=new o.default,n.disk=new a.default(n.axes.x,n.axes.y),n.textIndicator=new u.default,n}return r(n,t),n.prototype.draw=function(t){this.container.translate(this.config.get("width")/2,this.config.get("height")/2),this.container.updateComponents(t)},n.prototype.initialize=function(){t.prototype.initialize.call(this),this.container.add(this.axes).add(this.disk).add(this.textIndicator)},n}(i.default);Object.defineProperty(n,"__esModule",{value:!0}),n.default=s},function(t,n,e){"use strict";var r=this&&this.__extends||function(t,n){function e(){this.constructor=t}for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r]);t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)},i=e(10),o=e(9),a=e(42),u=e(8),s=e(11),c=e(7),f=function(t){function n(){var n=t.call(this)||this;return n.axes=new i.default,n.boxes=new a.default(n.axes),n}return r(n,t),n.prototype.draw=function(t){var n=this.config.get("xAxisFormat"),e=this.config.get("propertyStart"),r=this.config.get("propertyEnd");c.convertPropretiesToTimeFormat(t,[e,r],n),s.sortByField(t,e),this.container.updateComponents(t)},n.prototype.initialize=function(){t.prototype.initialize.call(this);var n=(this.config.get("markerSize"),this.config.get("areaOpacity"),this.config.get("legend"));this.container.add(this.axes),n&&(this.legend=new o.default,this.container.add(this.legend).add(this.boxes))},n}(u.default);Object.defineProperty(n,"__esModule",{value:!0}),n.default=f},function(t,n,e){"use strict";var r=e(6),i=e(1);n.defaults={selector:"#chart",colorScale:r.category5(),stacked:!1,xAxisType:"categorical",xAxisFormat:"",xAxisLabel:"",xAxisGrid:!1,yAxisType:"linear",yAxisFormat:"",yAxisLabel:"",yAxisShow:!0,yAxisGrid:!0,marginTop:20,marginRight:250,marginBottom:130,marginLeft:150,width:"100%",height:350,legend:!0,propertyX:"x",propertyY:"y",propertyKey:"key",stack:i.stack().value(function(t,n){return t.value[n]}),onDown:function(t){},onHover:function(t){},onLeave:function(t){},onClick:function(t){},onUp:function(t){}}},function(t,n,e){"use strict";var r=e(6);n.defaults={selector:"#chart",colorScale:r.diverging_spectral2(),invertColorScale:!0,minLevel:0,maxLevel:100,minAngle:-90,maxAngle:90,ringWidth:50,ringMargin:20,labelInset:10,needleNutRadius:25,needleLenghtRatio:.8,numericIndicator:!0,label:"km/h",marginTop:20,marginRight:250,marginBottom:30,marginLeft:50,width:"50%",height:250,ticks:10,propertyValue:"value"}},function(t,n,e){"use strict";var r=e(6),i=e(29);n.defaults={selector:"#chart",colorScale:r.category7(),curve:i.default.CURVE_MONOTONE_X,areaOpacity:0,xAxisType:"linear",xAxisFormat:"",xAxisLabel:null,xAxisGrid:!0,yAxisType:"linear",yAxisFormat:"",yAxisLabel:null,yAxisShow:!0,yAxisGrid:!0,marginTop:20,marginRight:250,marginBottom:130,marginLeft:150,markerShape:"dot",markerSize:0,markerOutlineWidth:2,width:"100%",height:250,legend:!0,propertyX:"x",propertyY:"y",propertyKey:"key",nullValues:["NULL","NUL","\\N",NaN,null],onDown:function(t){},onHover:function(t){},onLeave:function(t){},onClick:function(t){},onUp:function(t){},maxNumberOfElements:10}},function(t,n,e){"use strict";var r=e(6);n.defaults={selector:"#chart",colorScale:r.category7(),marginTop:20,marginRight:250,marginBottom:130,marginLeft:150,width:"100%",height:250,nodeRadius:8.5,legend:!0,linkWeight:1,nodeWeight:8,minLinkValue:0,maxLinkValue:10,minNodeWeight:0,maxNodeWeight:100,weighted:!1,labelShow:!0,labelField:"id",zoom:!0,onDown:function(t){},onHover:function(t){},onLeave:function(t){},onClick:function(t){},onUp:function(t){}}},function(t,n,e){"use strict";var r=e(6);n.defaults={selector:"#chart",colorScale:r.category8(),marginTop:0,marginRight:"100",marginBottom:0,marginLeft:0,width:"500",height:"500",transitionDuration:300,maxNumberOfElements:5,legend:!0,propertyX:"x",propertyKey:"key",sortData:{descending:!1,prop:"x"},onDown:function(t){},onHover:function(t){},onLeave:function(t){},onClick:function(t){},onUp:function(t){}}},function(t,n,e){"use strict";var r=e(6);n.defaults={selector:"#chart",colorScale:r.category7(),xAxisType:"linear",xAxisFormat:".1f",xAxisLabel:"",xAxisGrid:!0,yAxisType:"linear",yAxisFormat:".1f",yAxisLabel:"",yAxisShow:!0,yAxisGrid:!0,marginTop:20,marginRight:250,marginBottom:130,marginLeft:150,markerShape:"circle",markerSize:15,width:"100%",height:250,legend:!0,propertyX:"x",propertyY:"y",propertyKey:"key",onDown:function(t){},onHover:function(t){},onLeave:function(t){},onClick:function(t){},onUp:function(t){},maxNumberOfElements:100,canvas:!1}},function(t,n,e){"use strict";var r=e(6),i=e(1);n.defaults={selector:"#chart",colorScale:r.category2(),xAxisType:"time",xAxisFormat:"%y/%m/%d",xAxisLabel:"",xAxisGrid:!0,yAxisType:"linear",yAxisFormat:"",yAxisLabel:"",yAxisShow:!0,yAxisGrid:!0,marginTop:20,marginRight:250,marginBottom:130,marginLeft:150,width:"100%",height:250,legend:!0,propertyX:"x",propertyY:"y",propertyKey:"key",stacked:!0,stack:i.stack().value(function(t,n){return t.value[n]}).order(i.stackOrderInsideOut).offset(i.stackOffsetNone),onDown:function(t){},onHover:function(t){},onLeave:function(t){},onClick:function(t){},onUp:function(t){},maxNumberOfElements:100}},function(t,n,e){"use strict";var r=e(6),i=e(1);n.defaults={selector:"#chart",colorScale:r.category4(),xAxisType:"time",xAxisFormat:"%y/%m/%d",xAxisLabel:"",xAxisGrid:!0,yAxisType:"linear",yAxisFormat:"",yAxisLabel:"",yAxisShow:!1,yAxisGrid:!1,marginTop:20,marginRight:250,marginBottom:130,marginLeft:150,width:"100%",height:250,legend:!0,propertyX:"x",propertyY:"y",propertyKey:"key",stack:i.stack().value(function(t,n){return t.value[n]}).order(i.stackOrderInsideOut).offset(i.stackOffsetWiggle),stacked:!0,onDown:function(t){},onHover:function(t){},onLeave:function(t){},onClick:function(t){},onUp:function(t){},maxNumberOfElements:100}},function(t,n,e){"use strict";var r=e(6);n.defaults={selector:"#chart",colorScale:r.category8(),marginTop:20,marginRight:20,marginBottom:30,marginLeft:50,width:"50%",height:450,tickLabel:"",transitionDuration:300,maxNumberOfElements:5,sortData:{descending:!1,prop:"x"},onDown:function(t){},onHover:function(t){},onLeave:function(t){},onClick:function(t){},onUp:function(t){}}},function(t,n,e){"use strict";var r=e(6);n.defaults={selector:"#chart",colorScale:r.category3(),xAxisType:"time",xAxisFormat:"%y/%m/%d",xAxisLabel:"",xAxisGrid:!0,yAxisType:"categorical",yAxisFormat:"s",yAxisLabel:"",yAxisShow:!0,yAxisGrid:!0,marginTop:20,marginRight:250,marginBottom:30,marginLeft:50,width:"100%",height:250,legend:!0,propertyStart:"start",propertyEnd:"end",propertyKey:"key",onDown:function(t){},onHover:function(t){},onLeave:function(t){},onClick:function(t){},onUp:function(t){}}},function(t,n,e){"use strict";function r(t,n){if("auto"===t)return o.select(n).node().getBoundingClientRect().width;if(i.isNumeric(t))return t;if(i.isPercentage(t)){var e=void 0,r=void 0;return e=o.select(n).node().getBoundingClientRect().width,r=t.split("%")[0],Math.round(r*e/100)}throw Error("Unknow config width value: "+t)}var i=e(3),o=e(1);n.calculateWidth=r}])});
//# sourceMappingURL=proteic.js.map
=======
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('d3')) :
    typeof define === 'function' && define.amd ? define(['exports', 'd3'], factory) :
    (factory((global.proteic = global.proteic || {}),global.d3));
}(this, (function (exports,d3) { 'use strict';

function __extends(d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var SvgContext = (function () {
    function SvgContext(strategy, config) {
        this.strategy = strategy;
        this.strategy.setConfig(config);
        this.strategy.initialize();
    }
    SvgContext.prototype.draw = function (data) {
        this.strategy.draw(data);
    };
    SvgContext.prototype.addLoading = function () {
        this.strategy.addLoading();
    };
    SvgContext.prototype.removeLoading = function () {
        this.strategy.removeLoading();
    };
    return SvgContext;
}());

var Config = (function () {
    function Config() {
        this.properties = {};
    }
    Config.prototype.put = function (key, value) {
        this.properties[key] = value;
        return this;
    };
    Config.prototype.get = function (key) {
        return this.properties[key];
    };
    return Config;
}());

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function isPercentage(n) {
    var split = null;
    var number = null;
    if (!n || typeof n !== 'string') {
        return false;
    }
    split = n.split('%');
    number = (+split[0]);
    return split.length === 2 &&
        (number >= 0) &&
        (number <= 100);
}



function copy(object) {
    return object != null ? JSON.parse(JSON.stringify(object)) : null;
}
function deg2rad(deg) {
    return deg * Math.PI / 180;
}
function isValuesInObjectKeys(values, keys) {
    return function (obj) {
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            var value = obj[key];
            if (values.indexOf(value) != -1) {
                return false;
            }
        }
        return true;
    };
}

function calculateWidth(widthConfig, selector) {
    if (widthConfig === 'auto') {
        return d3.select(selector)
            .node()
            .getBoundingClientRect()
            .width;
    }
    else if (isNumeric(widthConfig)) {
        return widthConfig;
    }
    else if (isPercentage(widthConfig)) {
        var containerWidth = void 0, percentage = void 0;
        containerWidth = d3.select(selector)
            .node()
            .getBoundingClientRect()
            .width;
        percentage = widthConfig.split('%')[0];
        return Math.round(percentage * containerWidth / 100);
    }
    else {
        throw Error('Unknow config width value: ' + widthConfig);
    }
}

var Chart = (function () {
    function Chart(strategy, data, userConfig, defaults) {
        this.ds = null;
        this.dispatcher = d3.dispatch('onmessage', 'onopen', 'onerror', 'addLoading', 'removeLoading');
        this.config = this.loadConfigFromUser(userConfig, defaults);
        this.context = new SvgContext(strategy, this.config);
        this.data = data;
    }
    Chart.prototype.draw = function (data) {
        if (data === void 0) { data = this.data; }
        this.context.draw(copy(data));
        this.data = data;
    };
    Chart.prototype.datasource = function (ds) {
        var _this = this;
        this.ds = ds;
        this.ds.configure(this.dispatcher);
        this.dispatcher.on('addLoading', function () { return _this.context.addLoading(); });
        this.dispatcher.on('removeLoading', function () { return _this.context.removeLoading(); });
        this.dispatcher.on('onmessage', function (data) { return _this.keepDrawing(data); });
        this.dispatcher.on('onopen', function (event$$1) {
        });
        this.dispatcher.on('onerror', function (error) {
            console.error('onerror', error);
        });
    };
    Chart.prototype.loadConfigFromUser = function (userData, defaults) {
        var config = new Config();
        for (var v in defaults) {
            config.put(v, (v in userData) ? userData[v] : defaults[v]);
        }
        var width = config.get('width');
        width = calculateWidth(width, config.get('selector')) - config.get('marginLeft') - config.get('marginRight');
        config.put('width', width);
        return config;
    };
    return Chart;
}());

var Component = (function () {
    function Component() {
    }
    Component.prototype.configure = function (config, svg) {
        this.config = config;
        this.svg = svg;
    };
    Component.prototype.clean = function () {
        this.svg.selectAll('.serie').remove();
    };
    return Component;
}());

var XAxis = (function (_super) {
    __extends(XAxis, _super);
    function XAxis() {
        return _super.call(this) || this;
    }
    XAxis.prototype.render = function () {
        var width = this.config.get('width'), height = this.config.get('height'), xAxisFormat = this.config.get('xAxisFormat'), xAxisType = this.config.get('xAxisType'), xAxisLabel = this.config.get('xAxisLabel'), xAxisGrid = this.config.get('xAxisGrid');
        this.initializeXAxis(width, height, xAxisFormat, xAxisType, xAxisGrid);
        this.svg
            .append('g')
            .attr('class', "x axis " + xAxisType)
            .attr('transform', 'translate(0,' + height + ')')
            .call(this._xAxis);
        this.svg
            .append('text')
            .attr('class', 'xaxis-title')
            .attr("text-anchor", "middle")
            .attr('x', width / 2)
            .attr('y', height + 40)
            .text(xAxisLabel)
            .style('font', '0.8em Montserrat, sans-serif');
    };
    XAxis.prototype.update = function (data) {
        var _this = this;
        var propertyX = this.config.get('propertyX');
        var xAxisType = this.config.get('xAxisType');
        if (xAxisType === 'linear') {
            var min$$1 = d3.min(data, function (d) { return d[propertyX]; }), max$$1 = d3.max(data, function (d) { return d[propertyX]; });
            this.updateDomainByMinMax(min$$1, max$$1);
        }
        else if (xAxisType === 'time') {
            var min$$1 = d3.min(data, function (d) { return (d[propertyX] || d[_this.config.get('propertyStart')]); }), max$$1 = d3.max(data, function (d) { return (d[propertyX] || d[_this.config.get('propertyEnd')]); });
            this.updateDomainByMinMax(min$$1, max$$1);
        }
        else {
            var keys = d3.map(data, function (d) { return d[propertyX]; }).keys();
            this.updateDomainByKeys(keys);
        }
        this.transition();
    };
    XAxis.prototype.updateDomainByKeys = function (keys) {
        this._xAxis.scale().domain(keys);
    };
    XAxis.prototype.updateDomainByMinMax = function (min$$1, max$$1) {
        this._xAxis.scale().domain([min$$1, max$$1]);
    };
    XAxis.prototype.transition = function (time) {
        if (time === void 0) { time = 200; }
        this.svg.selectAll('.x.axis').transition().duration(time).call(this._xAxis);
        this.svg.select('.x.axis path').raise();
    };
    XAxis.prototype.initializeXAxis = function (width, height, xAxisFormat, xAxisType, xAxisGrid) {
        switch (xAxisType) {
            case 'time':
                this._xAxis = d3.axisBottom(d3.scaleTime().range([0, width]));
                break;
            case 'linear':
                this._xAxis = d3.axisBottom(d3.scaleLinear().range([0, width]))
                    .tickFormat(d3.format(xAxisFormat));
                break;
            case 'categorical':
                this._xAxis = d3.axisBottom(d3.scaleBand().rangeRound([0, width])
                    .padding(0.1).align(0.5));
                break;
            default:
                throw new Error('Not allowed type for XAxis. Only allowed "time",  "linear" or "categorical". Got: ' + xAxisType);
        }
        if (xAxisGrid) {
            this._xAxis
                .tickSizeInner(-height)
                .tickPadding(9);
        }
    };
    Object.defineProperty(XAxis.prototype, "xAxis", {
        get: function () {
            return this._xAxis;
        },
        enumerable: true,
        configurable: true
    });
    return XAxis;
}(Component));

var Globals = (function () {
    function Globals() {
    }
    return Globals;
}());
Globals.COMPONENT_TRANSITION_TIME = 100;
Globals.COMPONENT_HIDE_SHOW_TRANSITION_TIME = 300;
Globals.COMPONENT_HIDE_OPACITY = 0.06;
Globals.COMPONENT_DATA_KEY_ATTRIBUTE = 'data-proteic-key';
Globals.LEGEND_DATA_KEY_ATTRIBUTE = 'data-proteic-legend-key';
Globals.LEGEND_HIDE_OPACITY = 0.3;
Globals.BREAKPOINT = 768;
Globals.ASPECT_RATIO = 0.7;
Globals.LOADING_ICON = 'data:image/gif;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=';

function simple2stacked(data, xProperty, yProperty, keyProperty) {
    return d3.nest().key(function (d) { return d[xProperty]; }).rollup(function (values) {
        var r = {};
        for (var i = 0; i < values.length; i++) {
            var object = values[i];
            if (object) {
                r[object[keyProperty]] = object[yProperty];
            }
        }
        return r;
    }).entries(data);
}
function simple2nested(data, key) {
    if (key === void 0) { key = 'key'; }
    return d3.nest().key(function (d) { return d[key]; }).entries(data);
}

function simple2Linked(data) {
    var linkedData = { links: Array(), nodes: Array() };
    data.map(function (d) { return d.class === 'link' ? linkedData.links.push(d) : linkedData.nodes.push(d); });
    return linkedData;
}
function convertPropretiesToTimeFormat(data, properties, format$$1) {
    data.forEach(function (d) {
        properties.map(function (p) {
            d[p] = d3.timeParse(format$$1)(d[p]);
        });
    });
}
function convertByXYFormat(data, xAxisFormat, xAxisType, yAxisFormat, yAxisType, propertyX, propertyY) {
    data.forEach(function (d) {
        switch (xAxisType) {
            case 'time':
                d[propertyX] = d3.timeParse(xAxisFormat)(d[propertyX]);
                break;
            case 'linear':
                d[propertyX] = +d[propertyX];
                break;
        }
        switch (yAxisType) {
            case 'time':
                d[propertyY] = d3.timeParse(yAxisFormat)(d[propertyY]);
                break;
            case 'linear':
                d[propertyY] = +d[propertyY];
                break;
        }
    });
    return data;
}

var YAxis = (function (_super) {
    __extends(YAxis, _super);
    function YAxis(orient) {
        var _this = _super.call(this) || this;
        _this._orient = 'left';
        _this.selection = null;
        if (orient != null) {
            _this._orient = orient;
        }
        return _this;
    }
    Object.defineProperty(YAxis.prototype, "orient", {
        get: function () {
            return this._orient;
        },
        enumerable: true,
        configurable: true
    });
    YAxis.prototype.render = function () {
        var width = this.config.get('width'), height = this.config.get('height'), yAxisFormat = this.config.get('yAxisFormat'), yAxisType = this.config.get('yAxisType'), yAxisLabel = this.config.get('yAxisLabel'), yAxisGrid = this.config.get('yAxisGrid');
        this.initializeYAxis(width, height, yAxisFormat, yAxisType, yAxisGrid);
        var yAxisG = this.svg
            .append('g')
            .attr('class', 'y axis')
            .attr("transform", this.orient === 'left'
            ? "translate( 0, 0 )"
            : "translate( " + width + ", 0 )")
            .call(this._yAxis);
        this.svg
            .append('text')
            .attr('class', 'yaxis-title')
            .attr("transform", "rotate(-90)")
            .attr("text-anchor", "middle")
            .attr('x', 0 - height / 2)
            .attr('y', 0 - 55)
            .text(yAxisLabel)
            .style('font', '0.8em Montserrat, sans-serif');
        this.selection = yAxisG;
    };
    YAxis.prototype.update = function (data) {
        var propertyKey = this.config.get('propertyKey');
        var propertyY = this.config.get('propertyY');
        var propertyX = this.config.get('propertyX');
        var yAxisType = this.config.get('yAxisType'), yAxisShow = this.config.get('yAxisShow'), layoutStacked = this.config.get('stacked');
        this.selection.attr('opacity', yAxisShow ? 1 : 0);
        if (yAxisType === 'linear') {
            if (layoutStacked) {
                var keys = d3.map(data, function (d) { return d[propertyKey]; }).keys();
                var stack_1 = this.config.get('stack');
                var stackedData = stack_1.keys(keys)(simple2stacked(data, propertyX, propertyY, propertyKey));
                var min$$1 = d3.min(stackedData, function (serie) { return d3.min(serie, function (d) { return d[0]; }); });
                var max$$1 = d3.max(stackedData, function (serie) { return d3.max(serie, function (d) { return d[1]; }); });
                this.updateDomainByMinMax(min$$1, max$$1);
            }
            else {
                var min$$1 = d3.min(data, function (d) { return d[propertyY]; }), max$$1 = d3.max(data, function (d) { return d[propertyY]; });
                this.updateDomainByMinMax(min$$1, max$$1);
            }
        }
        else if (yAxisType === 'categorical') {
            var keys = d3.map(data, function (d) { return d[propertyKey]; }).keys().sort();
            this._yAxis.scale().domain(keys);
        }
        else {
            console.warn('could not recognize y axis type', yAxisType);
        }
        if (data !== null && data.length) {
            this.transition();
        }
    };
    YAxis.prototype.updateDomainByMinMax = function (min$$1, max$$1) {
        this._yAxis.scale().domain([min$$1, max$$1]);
    };
    YAxis.prototype.transition = function (time) {
        if (time === void 0) { time = 200; }
        this.selection.transition().duration(Globals.COMPONENT_TRANSITION_TIME).call(this._yAxis);
        this.svg.selectAll('.y.axis path').raise();
    };
    YAxis.prototype.initializeYAxis = function (width, height, yAxisFormat, yAxisType, yAxisGrid) {
        switch (yAxisType) {
            case 'linear':
                this._yAxis = (this.orient === 'left')
                    ? d3.axisLeft(d3.scaleLinear().range([height, 0])).tickFormat(d3.format(yAxisFormat))
                    : d3.axisRight(d3.scaleLinear().range([height, 0])).tickFormat(d3.format(yAxisFormat));
                break;
            case 'categorical':
                this._yAxis = (this.orient === 'left')
                    ? d3.axisLeft(d3.scaleBand().rangeRound([height, 0]).padding(0.1).align(0.5))
                    : d3.axisRight(d3.scaleBand().rangeRound([height, 0]).padding(0.1).align(0.5));
                break;
            default:
                throw new Error('Not allowed type for YAxis. Only allowed "time",  "linear" or "categorical". Got: ' + yAxisType);
        }
        if (yAxisGrid && this.orient === 'left') {
            this._yAxis
                .tickSizeInner(-width)
                .tickSizeOuter(0)
                .tickPadding(20);
        }
    };
    Object.defineProperty(YAxis.prototype, "yAxis", {
        get: function () {
            return this._yAxis;
        },
        enumerable: true,
        configurable: true
    });
    return YAxis;
}(Component));

var XYAxis = (function (_super) {
    __extends(XYAxis, _super);
    function XYAxis() {
        var _this = _super.call(this) || this;
        _this._x = new XAxis();
        _this._y = new YAxis();
        return _this;
    }
    XYAxis.prototype.render = function () {
        this._y.render();
        this._x.render();
    };
    XYAxis.prototype.update = function (data) {
        this._y.update(data);
        this._x.update(data);
    };
    XYAxis.prototype.configure = function (config, svg) {
        _super.prototype.configure.call(this, config, svg);
        this._y.configure(config, svg);
        this._x.configure(config, svg);
    };
    Object.defineProperty(XYAxis.prototype, "x", {
        get: function () {
            return this._x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XYAxis.prototype, "y", {
        get: function () {
            return this._y;
        },
        enumerable: true,
        configurable: true
    });
    return XYAxis;
}(Component));

var Lineset = (function (_super) {
    __extends(Lineset, _super);
    function Lineset(x, y) {
        var _this = _super.call(this) || this;
        _this.x = x;
        _this.y = y;
        return _this;
    }
    Lineset.prototype.render = function () {
        var _this = this;
        var propertyX = this.config.get('propertyX');
        var propertyY = this.config.get('propertyY');
        var curve = this.config.get('curve');
        this.lineGenerator = d3.line()
            .curve(curve)
            .x(function (d) { return _this.x.xAxis.scale()(d[propertyX]); })
            .y(function (d) { return _this.y.yAxis.scale()(d[propertyY]); });
    };
    Lineset.prototype.update = function (data) {
        var _this = this;
        var propertyKey = this.config.get('propertyKey');
        var dataSeries = d3.nest().key(function (d) { return d[propertyKey]; }).entries(data);
        var series = this.svg.selectAll('g.lineSeries');
        var colorScale = this.config.get('colorScale');
        var lines = series.data(dataSeries, function (d) { return d[propertyKey]; })
            .enter()
            .append('g')
            .attr('class', 'lineSeries')
            .attr(Globals.COMPONENT_DATA_KEY_ATTRIBUTE, function (d) { return d[propertyKey]; })
            .attr('stroke', function (d) { return colorScale(d[propertyKey]); })
            .append('svg:path')
            .style('stroke', function (d) { return colorScale(d[propertyKey]); })
            .style('stroke-width', 1.9)
            .style('fill', 'none')
            .attr('d', function (d) { return _this.lineGenerator(d.values); })
            .attr('class', 'line');
        this.svg.selectAll('.line')
            .data(dataSeries, function (d) { return d[propertyKey]; })
            .attr('d', function (d) { return _this.lineGenerator(d.values); })
            .transition()
            .duration(Globals.COMPONENT_TRANSITION_TIME)
            .ease(d3.easeLinear);
    };
    return Lineset;
}(Component));

var Pointset = (function (_super) {
    __extends(Pointset, _super);
    function Pointset(x, y) {
        var _this = _super.call(this) || this;
        _this.x = x;
        _this.y = y;
        return _this;
    }
    Pointset.prototype.render = function () {
    };
    Pointset.prototype.update = function (data) {
        var _this = this;
        var propertyKey = this.config.get('propertyKey');
        var propertyX = this.config.get('propertyX');
        var propertyY = this.config.get('propertyY');
        var dataSeries = d3.nest()
            .key(function (d) { return d[propertyKey]; })
            .entries(data), markers = null, markerShape = this.config.get('markerShape'), markerSize = this.config.get('markerSize'), markerOutlineWidth = this.config.get('markerOutlineWidth'), colorScale = this.config.get('colorScale'), points = null, series = null;
        var shape = d3.symbol().size(markerSize);
        series = this.svg.selectAll('g.points');
        switch (markerShape) {
            case 'dot':
                shape.type(d3.symbolCircle);
                break;
            case 'ring':
                shape.type(d3.symbolCircle);
                break;
            case 'cross':
                shape.type(d3.symbolCross);
                break;
            case 'diamond':
                shape.type(d3.symbolDiamond);
                break;
            case 'square':
                shape.type(d3.symbolSquare);
                break;
            case 'star':
                shape.type(d3.symbolStar);
                break;
            case 'triangle':
                shape.type(d3.symbolTriangle);
                break;
            case 'wye':
                shape.type(d3.symbolWye);
                break;
            case 'circle':
                shape.type(d3.symbolCircle);
                break;
            default:
                shape.type(d3.symbolCircle);
        }
        points = series
            .data(dataSeries, function (d) { return d.values; }, function (d) { return d[propertyX]; });
        points.enter()
            .append('g')
            .attr('class', 'points')
            .attr(Globals.COMPONENT_DATA_KEY_ATTRIBUTE, function (d) { return d[propertyKey]; })
            .style('stroke', function (d) { return colorScale(d[propertyKey]); })
            .selectAll('circle')
            .data(function (d) { return d.values; })
            .enter()
            .append('path')
            .attr('class', 'marker')
            .attr('d', shape)
            .style('stroke', function (d) { return colorScale(d[propertyKey]); })
            .style('fill', function (d) { return markerShape !== 'ring' ? colorScale(d[propertyKey]) : 'transparent'; })
            .attr('transform', function (d) { return "translate(" + _this.x.xAxis.scale()(d[propertyX]) + ", " + _this.y.yAxis.scale()(d[propertyY]) + ")"; });
        this.svg.selectAll('.marker')
            .transition()
            .duration(Globals.COMPONENT_TRANSITION_TIME)
            .ease(d3.easeLinear)
            .attr('transform', function (d) { return "translate(" + _this.x.xAxis.scale()(d[propertyX]) + ", " + _this.y.yAxis.scale()(d[propertyY]) + ")"; });
        points
            .exit()
            .remove();
        markers = this.svg.selectAll('.marker');
        markers
            .on('mousedown.user', this.config.get('onDown'))
            .on('mouseup.user', this.config.get('onUp'))
            .on('mouseleave.user', this.config.get('onLeave'))
            .on('mouseover.user', this.config.get('onHover'))
            .on('click.user', this.config.get('onClick'));
    };
    return Pointset;
}(Component));

var Areaset = (function (_super) {
    __extends(Areaset, _super);
    function Areaset(x, y) {
        var _this = _super.call(this) || this;
        _this.x = x;
        _this.y = y;
        return _this;
    }
    Areaset.prototype.render = function () {
        var _this = this;
        var height = this.config.get('height'), propertyX = this.config.get('propertyX'), propertyY = this.config.get('propertyY'), curve = this.config.get('curve');
        this.areaGenerator = d3.area()
            .curve(curve)
            .x(function (d) { return _this.x.xAxis.scale()(d[propertyX]); })
            .y0(height)
            .y1(function (d) { return _this.y.yAxis.scale()(d[propertyY]); });
    };
    Areaset.prototype.update = function (data) {
        var _this = this;
        var propertyKey = this.config.get('propertyKey');
        var dataSeries = d3.nest().key(function (d) { return d[propertyKey]; }).entries(data);
        var areas = this.svg.selectAll('g.area');
        var colorScale = this.config.get('colorScale');
        var height = this.config.get('height');
        var areaOpacity = this.config.get('areaOpacity');
        areas = areas.data(dataSeries, function (d) { return d[propertyKey]; })
            .enter()
            .append('g')
            .attr('class', 'area')
            .attr(Globals.COMPONENT_DATA_KEY_ATTRIBUTE, function (d) { return d[propertyKey]; })
            .append('svg:path')
            .style('fill', function (d) { return colorScale(d[propertyKey]); })
            .style('fill-opacity', areaOpacity)
            .attr('d', function (d) { return _this.areaGenerator(d.values); })
            .attr('class', 'areaPath');
        this.svg.selectAll('.areaPath')
            .data(dataSeries, function (d) { return d[propertyKey]; })
            .transition()
            .duration(Globals.COMPONENT_TRANSITION_TIME)
            .attr('d', function (d) { return _this.areaGenerator(d.values); });
    };
    return Areaset;
}(Component));

var Legend = (function (_super) {
    __extends(Legend, _super);
    function Legend() {
        return _super.call(this) || this;
    }
    Legend.prototype.render = function () {
    };
    Legend.prototype.update = function (data) {
        var _this = this;
        var dataSeries = d3.nest()
            .key(function (d) { return d.key; }).entries(data), legend = null, entries = null, colorScale = this.config.get('colorScale'), height = this.config.get('height'), width = this.config.get('width');
        if (dataSeries.length === 1 && dataSeries[0].key === 'undefined') {
            console.warn('Not showing legend, since there is a valid key');
            return;
        }
        this.svg.selectAll('g.legend').remove();
        legend = this.svg.append('g').attr('class', 'legend');
        entries = legend.selectAll('.legend-entry')
            .data(dataSeries, function (d) { return d.key; })
            .enter()
            .append('g')
            .attr('class', 'legend-entry')
            .attr(Globals.LEGEND_DATA_KEY_ATTRIBUTE, function (d) { return d.key; });
        entries.append('rect')
            .attr('x', width + 10)
            .attr('y', function (d, i) { return i * 25; })
            .attr('height', 20)
            .attr('width', 20)
            .style('fill', function (d) { return colorScale(d.key); })
            .style('stroke', function (d) { return colorScale(d.key); })
            .style('opacity', 0.8)
            .on('click.default', function (d) { return _this.toggle(d); });
        entries.append('text')
            .attr("x", width + 25 + 10)
            .attr("y", function (d, i) { return i * 25 + 7; })
            .attr("dy", "0.55em")
            .text(function (d) { return d.key; })
            .style('font', '14px Montserrat, sans-serif')
            .on('click.default', function () { return _this.toggle; });
    };
    Legend.prototype.toggle = function (d) {
        var key = d.key, element = this.svg.selectAll('*[' + Globals.COMPONENT_DATA_KEY_ATTRIBUTE + '="' + key + '"]'), colorScale = this.config.get('colorScale');
        if (!element.empty()) {
            var opacity_1 = parseInt(element.style('opacity'));
            opacity_1 = (opacity_1 == 1) ? Globals.COMPONENT_HIDE_OPACITY : 1;
            var legendEntry = this.svg.select('.legend-entry[' + Globals.LEGEND_DATA_KEY_ATTRIBUTE + '="' + key + '"]');
            legendEntry.selectAll('rect')
                .transition()
                .duration(Globals.COMPONENT_HIDE_SHOW_TRANSITION_TIME)
                .style('fill', function (d) {
                return (opacity_1 === 1) ? colorScale(d.key) : 'transparent';
            });
            element
                .transition()
                .duration(Globals.COMPONENT_HIDE_SHOW_TRANSITION_TIME)
                .style('opacity', opacity_1);
        }
    };
    return Legend;
}(Component));

var Container = (function () {
    function Container(config) {
        this.components = [];
        this.config = config;
        var selector = this.config.get('selector'), width = this.config.get('width'), height = this.config.get('height'), marginLeft = this.config.get('marginLeft'), marginRight = this.config.get('marginRight'), marginTop = this.config.get('marginTop'), marginBottom = this.config.get('marginBottom');
        width += marginLeft + marginRight;
        height += marginTop + marginBottom;
        this.initializeContainer(selector, width, height, marginLeft, marginTop);
    }
    Container.prototype.add = function (component) {
        this.components.push(component);
        component.configure(this.config, this.svg);
        component.render();
        return this;
    };
    Container.prototype.initializeContainer = function (selector, width, height, marginLeft, marginTop) {
        this.svg = d3.select(selector)
            .style('position', 'relative')
            .style('width', width + "px")
            .style('height', height + "px")
            .append('svg:svg')
            .attr('preserveAspectRatio', "xMinYMin meet")
            .attr("viewBox", "0 0 " + width + " " + height)
            .attr('width', '100%')
            .attr('class', 'proteic')
            .attr('width', width)
            .attr('height', height)
            .style('position', 'absolute')
            .append('g')
            .attr('class', 'chartContainer')
            .attr('transform', 'translate(' + marginLeft + ',' + marginTop + ')');
    };
    Container.prototype.updateComponents = function (data) {
        for (var i = 0; i < this.components.length; i++) {
            var component = this.components[i];
            component.update(data);
        }
    };
    Container.prototype.translate = function (x, y) {
        this.svg.attr('transform', "translate(" + x + ", " + y + ")");
    };
    Container.prototype.viewBox = function (w, h) {
        this.svg.attr("viewBox", "0 0 " + w + " " + h);
    };
    Container.prototype.zoom = function (z) {
        this.svg.call(d3.zoom().scaleExtent([1 / 2, 4]).on("zoom", z));
    };
    Container.prototype.addLoadingIcon = function () {
        var icon = Globals.LOADING_ICON;
        this.svg.append('image').attr('id', 'loadingIcon')
            .attr('width', '25%')
            .attr('height', '25%')
            .attr('x', '25%')
            .attr('y', '25%')
            .attr('xlink:href', icon);
    };
    Container.prototype.removeLoadingIcon = function () {
        this.svg.select('image[id="loadingIcon"]').transition().duration(200).remove();
    };
    return Container;
}());

var SvgChart = (function () {
    function SvgChart() {
    }
    SvgChart.prototype.initialize = function () {
        this.container = new Container(this.config);
    };
    SvgChart.prototype.setConfig = function (config) {
        this.config = config;
    };
    SvgChart.prototype.addLoading = function () {
        this.container.addLoadingIcon();
    };
    SvgChart.prototype.removeLoading = function () {
        this.container.removeLoadingIcon();
    };
    return SvgChart;
}());

function sortByField(array, field) {
    array.sort(function (e1, e2) {
        var a = e1[field];
        var b = e2[field];
        return (a < b) ? -1 : (a > b) ? 1 : 0;
    });
}

var SvgStrategyLinechart = (function (_super) {
    __extends(SvgStrategyLinechart, _super);
    function SvgStrategyLinechart() {
        var _this = _super.call(this) || this;
        _this.axes = new XYAxis();
        _this.lines = new Lineset(_this.axes.x, _this.axes.y);
        return _this;
    }
    SvgStrategyLinechart.prototype.draw = function (data) {
        var xAxisFormat = this.config.get('xAxisFormat'), xAxisType = this.config.get('xAxisType'), yAxisFormat = this.config.get('yAxisFormat'), yAxisType = this.config.get('yAxisType'), propertyX = this.config.get('propertyX'), propertyY = this.config.get('propertyY');
        convertByXYFormat(data, xAxisFormat, xAxisType, yAxisFormat, yAxisType, propertyX, propertyY);
        sortByField(data, propertyX);
        this.container.updateComponents(data);
    };
    SvgStrategyLinechart.prototype.initialize = function () {
        _super.prototype.initialize.call(this);
        var markerSize = this.config.get('markerSize'), areaOpacity = this.config.get('areaOpacity'), legend = this.config.get('legend');
        this.container.add(this.axes).add(this.lines);
        if (areaOpacity > 0) {
            this.area = new Areaset(this.axes.x, this.axes.y);
            this.container.add(this.area);
        }
        if (markerSize > 0) {
            this.markers = new Pointset(this.axes.x, this.axes.y);
            this.container.add(this.markers);
        }
        if (legend) {
            this.legend = new Legend();
            this.container.add(this.legend);
        }
    };
    return SvgStrategyLinechart;
}(SvgChart));

var paletteCategory2 = [
    '#b6dde2',
    '#6394af',
    '#e4e9ab',
    '#8ea876',
    '#f7dce1',
    '#cc878f',
    '#fadaac',
    '#f29a83',
    '#8d7e9e'
];
var paletteCategory3 = [
    '#6b68a9',
    '#8cc590',
    '#b9487d',
    '#bfa1c5',
    '#4e6936',
    '#71bbc3',
    '#484156',
    '#ccaf44',
    '#d0553c'
];
var paletteCategory4 = [
    '#f1a30d',
    '#1d4763',
    '#84c7bc',
    '#c1212d',
    '#8fbe46',
    '#076837',
    '#563a2d',
    '#563a2d',
    '#87325d'
];
var paletteCategory5 = [
    '#f1a30d',
    '#0c3183',
    '#acd9d6',
    '#c1212d',
    '#8fbe46',
    '#076837',
    '#8a6338',
    '#8d2d84',
    '#f09bbc'
];
var paletteCategory7 = [
    '#ea671e',
    '#684592',
    '#84b92a',
    '#cd131c',
    '#3c5ba2',
    '#5baddc',
    '#ffde06',
    '#5db68b',
    '#775e47'
];
var paletteCategory8 = [
    '#ebd646',
    '#a50f38',
    '#00a096',
    '#f09bbc',
    '#065b78',
    '#72722a',
    '#005231',
    '#4d4e98',
    '#7c4d25'
];
var paletteDivergingSpectral2 = [
    '#d43d4f',
    '#df564b',
    '#eb6d45',
    '#f08e53',
    '#f8b96f',
    '#fee08b',
    '#f5f2b8',
    '#d7e5b1',
    '#b5d7aa',
    '#8ec8a3',
    '#6abda3',
    '#4fa4b5',
    '#3489be'
];

function category2() {
    return d3.scaleOrdinal().range(paletteCategory2);
}
function category3() {
    return d3.scaleOrdinal().range(paletteCategory3);
}
function category4() {
    return d3.scaleOrdinal().range(paletteCategory4);
}
function category5() {
    return d3.scaleOrdinal().range(paletteCategory5);
}

function category7() {
    return d3.scaleOrdinal().range(paletteCategory7);
}
function category8() {
    return d3.scaleOrdinal().range(paletteCategory8);
}





















function diverging_spectral2() {
    return d3.scaleOrdinal().range(paletteDivergingSpectral2);
}

var Interpolation = (function () {
    function Interpolation() {
    }
    return Interpolation;
}());
Interpolation.CURVE_LINEAR = d3.curveLinear;
Interpolation.CURVE_LINEAR_CLOSED = d3.curveLinearClosed;
Interpolation.CURVE_MONOTONE_X = d3.curveMonotoneX;
Interpolation.CURVE_MONOTONE_Y = d3.curveMonotoneY;
Interpolation.CURVE_NATURAL = d3.curveNatural;
Interpolation.CURVE_STEP = d3.curveStep;
Interpolation.CURVE_STEP_AFTER = d3.curveStepAfter;
Interpolation.CURVE_STEP_BEFORE = d3.curveStepBefore;

var defaults = {
    selector: '#chart',
    colorScale: category7(),
    curve: Interpolation.CURVE_MONOTONE_X,
    areaOpacity: 0,
    xAxisType: 'linear',
    xAxisFormat: '',
    xAxisLabel: null,
    xAxisGrid: true,
    yAxisType: 'linear',
    yAxisFormat: '',
    yAxisLabel: null,
    yAxisShow: true,
    yAxisGrid: true,
    marginTop: 20,
    marginRight: 250,
    marginBottom: 130,
    marginLeft: 150,
    markerShape: 'dot',
    markerSize: 0,
    markerOutlineWidth: 2,
    width: '100%',
    height: 250,
    legend: true,
    propertyX: 'x',
    propertyY: 'y',
    propertyKey: 'key',
    nullValues: ['NULL', 'NUL', '\\N', NaN, null],
    onDown: function (d) {
    },
    onHover: function (d) {
    },
    onLeave: function (d) {
    },
    onClick: function (d) {
    },
    onUp: function (d) {
    },
    maxNumberOfElements: 10,
};

var Linechart = (function (_super) {
    __extends(Linechart, _super);
    function Linechart(data, userConfig) {
        if (userConfig === void 0) { userConfig = {}; }
        return _super.call(this, new SvgStrategyLinechart(), data, userConfig, defaults) || this;
    }
    Linechart.prototype.keepDrawing = function (datum) {
        var nullValues = this.config.get('nullValues');
        var maxNumberOfElements = this.config.get('maxNumberOfElements'), numberOfElements = this.data.length, datumType = datum.constructor, keys$$1 = [
            this.config.get('propertyX'),
            this.config.get('propertyY'),
            this.config.get('propertyKey')
        ];
        if (datumType === Array) {
            var filteredDatum = datum.filter(isValuesInObjectKeys(nullValues, keys$$1));
            this.data = this.data.concat(filteredDatum);
        }
        else {
            this.data.push(datum);
        }
        if (numberOfElements > maxNumberOfElements) {
            var position = numberOfElements - maxNumberOfElements;
            this.data = this.data.slice(position);
        }
        this.draw(copy(this.data));
    };
    return Linechart;
}(Chart));

var Barset = (function (_super) {
    __extends(Barset, _super);
    function Barset(x, y) {
        var _this = _super.call(this) || this;
        _this.x = x;
        _this.y = y;
        return _this;
    }
    Barset.prototype.render = function () {
    };
    Barset.prototype.update = function (data) {
        var bars = null, stacked = this.config.get('stacked');
        this.clean();
        if (stacked) {
            this.updateStacked(data);
        }
        else {
            this.updateGrouped(data);
        }
        bars = this.svg.selectAll('g.barSeries rect');
        bars
            .on('mousedown.user', this.config.get('onDown'))
            .on('mouseup.user', this.config.get('onUp'))
            .on('mouseleave.user', this.config.get('onLeave'))
            .on('mouseover.user', this.config.get('onHover'))
            .on('click.user', this.config.get('onClick'));
    };
    Barset.prototype.updateStacked = function (data) {
        var propertyKey = this.config.get('propertyKey');
        var propertyX = this.config.get('propertyX');
        var propertyY = this.config.get('propertyY');
        var keys = d3.map(data, function (d) { return d[propertyKey]; }).keys();
        var stack$$1 = this.config.get('stack');
        data = stack$$1.keys(keys)(simple2stacked(data, propertyX, propertyY, propertyKey));
        var colorScale = this.config.get('colorScale'), layer = this.svg.selectAll('.barSeries').data(data), layerEnter = layer.enter().append('g'), x = this.x.xAxis.scale(), y = this.y.yAxis.scale();
        layer.merge(layerEnter)
            .attr('class', 'barSeries')
            .attr(Globals.COMPONENT_DATA_KEY_ATTRIBUTE, function (d) { return d[propertyKey]; })
            .style('fill', function (d, i) { return d[propertyKey] !== undefined ? colorScale(d[propertyKey]) : colorScale(i); })
            .selectAll('rect')
            .data(function (d) { return d; })
            .enter().append('rect')
            .attr("x", function (d) { return x(d.data[propertyKey]); })
            .attr("y", function (d) { return y(d[1]); })
            .attr("height", function (d) { return y(d[0]) - y(d[1]); })
            .attr("width", x.bandwidth());
    };
    Barset.prototype.updateGrouped = function (data) {
        var propertyKey = this.config.get('propertyKey');
        var propertyX = this.config.get('propertyX');
        var propertyY = this.config.get('propertyY');
        var keys = d3.map(data, function (d) { return d[propertyKey]; }).keys(), colorScale = this.config.get('colorScale'), layer = null, x = this.x.xAxis.scale(), y = this.y.yAxis.scale(), xGroup = d3.scaleBand().domain(keys).range([0, x.bandwidth()]), height = this.config.get('height');
        var dataNested = simple2nested(data, 'key');
        layer = this.svg.selectAll('g.barSeries')
            .data(dataNested, function (d) { return d.values; });
        layer
            .enter()
            .append('g')
            .attr('class', 'barSeries')
            .attr(Globals.COMPONENT_DATA_KEY_ATTRIBUTE, function (d) { return d[propertyKey]; })
            .selectAll('rect')
            .data(function (d) { return d.values; })
            .enter()
            .append('rect')
            .attr('transform', function (d) { return 'translate(' + x(d[propertyX]) + ')'; })
            .attr('width', xGroup.bandwidth())
            .attr("x", function (d) { return xGroup(d[propertyKey]); })
            .attr("y", function (d) { return y(d[propertyY]); })
            .attr("height", function (d) { return height - y(d[propertyY]); })
            .style('fill', function (d, i) { return d[propertyKey] !== undefined ? colorScale(d[propertyKey]) : colorScale(i); })
            .attr('class', 'bar');
        this.svg.selectAll('.bar')
            .data(data, function (d) { return d[propertyX]; })
            .attr('width', xGroup.bandwidth())
            .attr("x", function (d) { return xGroup(d[propertyKey]); })
            .attr("y", function (d) { return y(d[propertyY]); })
            .attr("height", function (d) { return height - y(d[propertyY]); })
            .transition()
            .duration(Globals.COMPONENT_TRANSITION_TIME);
    };
    return Barset;
}(Component));

var SvgStrategyBarchart = (function (_super) {
    __extends(SvgStrategyBarchart, _super);
    function SvgStrategyBarchart() {
        var _this = _super.call(this) || this;
        _this.axes = new XYAxis();
        _this.bars = new Barset(_this.axes.x, _this.axes.y);
        return _this;
    }
    SvgStrategyBarchart.prototype.draw = function (data) {
        var xAxisFormat = this.config.get('xAxisFormat'), xAxisType = this.config.get('xAxisType'), yAxisFormat = this.config.get('yAxisFormat'), yAxisType = this.config.get('yAxisType'), propertyX = this.config.get('propertyX'), propertyY = this.config.get('propertyY');
        convertByXYFormat(data, xAxisFormat, xAxisType, yAxisFormat, yAxisType, propertyX, propertyY);
        sortByField(data, propertyX);
        this.container.updateComponents(data);
    };
    SvgStrategyBarchart.prototype.initialize = function () {
        _super.prototype.initialize.call(this);
        var legend = this.config.get('legend');
        this.container.add(this.axes).add(this.bars);
        if (legend) {
            this.legend = new Legend();
            this.container.add(this.legend);
        }
    };
    return SvgStrategyBarchart;
}(SvgChart));

var defaults$1 = {
    selector: '#chart',
    colorScale: category5(),
    stacked: false,
    xAxisType: 'categorical',
    xAxisFormat: '',
    xAxisLabel: '',
    xAxisGrid: false,
    yAxisType: 'linear',
    yAxisFormat: '',
    yAxisLabel: '',
    yAxisShow: true,
    yAxisGrid: true,
    marginTop: 20,
    marginRight: 250,
    marginBottom: 130,
    marginLeft: 150,
    width: '100%',
    height: 350,
    legend: true,
    propertyX: 'x',
    propertyY: 'y',
    propertyKey: 'key',
    stack: d3.stack().value(function (d, k) { return d.value[k]; }),
    onDown: function (d) {
    },
    onHover: function (d) {
    },
    onLeave: function (d) {
    },
    onClick: function (d) {
    },
    onUp: function (d) {
    }
};

var Barchart = (function (_super) {
    __extends(Barchart, _super);
    function Barchart(data, userConfig) {
        if (userConfig === void 0) { userConfig = {}; }
        return _super.call(this, new SvgStrategyBarchart(), data, userConfig, defaults$1) || this;
    }
    Barchart.prototype.fire = function (event$$1, data) {
        if (event$$1 === 'transition') {
            if (data === 'grouped') {
                this.config.put('stacked', false);
            }
            else if (data === 'stacked') {
                this.config.put('stacked', true);
            }
            this.draw();
        }
    };
    Barchart.prototype.keepDrawing = function (datum) {
        var datumType = datum.constructor;
        if (datumType === Array) {
            this.data = datum;
        }
        else {
            var found = false;
            for (var i = 0; i < this.data.length; i++) {
                var d = this.data[i];
                if (d['x'] === datum['x'] && d['key'] === datum['key']) {
                    this.data[i] = datum;
                    found = true;
                    break;
                }
            }
            if (!found) {
                this.data.push(datum);
            }
        }
        this.draw(copy(this.data));
    };
    return Barchart;
}(Chart));

var Dial = (function (_super) {
    __extends(Dial, _super);
    function Dial() {
        return _super.call(this) || this;
    }
    Dial.prototype.render = function () {
        var labels = null, invertColorScale = this.config.get('invertColorScale'), colorScale = this.config.get('colorScale'), width = this.config.get('width'), height = this.config.get('height'), ringWidth = this.config.get('ringWidth'), ringMargin = this.config.get('ringMargin'), ticks = this.config.get('ticks'), minAngle = this.config.get('minAngle'), maxAngle = this.config.get('maxAngle'), minLevel = this.config.get('minLevel'), maxLevel = this.config.get('maxLevel'), labelInset = this.config.get('labelInset'), scale = d3.scaleLinear()
            .domain([minLevel, maxLevel])
            .range([0, 1]), scaleMarkers = scale.ticks(ticks), range$$1 = maxAngle - minAngle, r = ((width > height) ?
            height : width) / 2, translation = (function () { return 'translate(' + r + ',' + r + ')'; }), tickData = d3.range(ticks).map(function () { return 1 / ticks; }), arc$$1 = d3.arc()
            .innerRadius(r - ringWidth - ringMargin)
            .outerRadius(r - ringMargin)
            .startAngle(function (d, i) { return deg2rad(minAngle + ((d * i) * range$$1)); })
            .endAngle(function (d, i) { return deg2rad(minAngle + ((d * (i + 1)) * range$$1)); });
        colorScale.domain([0, 1]);
        var arcs = this.svg.append('g')
            .attr('class', 'arc')
            .attr('transform', translation);
        var arcPaths = arcs.selectAll('path')
            .data(tickData)
            .enter().append('path')
            .attr('id', function (d, i) { return 'sector-' + i; })
            .attr('d', arc$$1);
        arcPaths.attr('fill', function (d, i) { return colorScale(invertColorScale
            ? (1 - d * i)
            : (d * i)); });
        labels = this.svg.append('g')
            .attr('class', 'labels')
            .attr('transform', translation);
        labels.selectAll('text')
            .data(scaleMarkers)
            .enter().append('text')
            .attr('transform', function (d) {
            var ratio = scale(d);
            var newAngle = minAngle + (ratio * range$$1);
            return 'rotate(' + newAngle + ') translate(0,' + (labelInset - r) + ')';
        })
            .text(function (d) { return d; })
            .style('text-anchor', 'middle')
            .style('font', '18px Montserrat, sans-serif');
    };
    Dial.prototype.update = function () {
    };
    return Dial;
}(Component));

var DialNeedle = (function (_super) {
    __extends(DialNeedle, _super);
    function DialNeedle() {
        return _super.call(this) || this;
    }
    DialNeedle.prototype.render = function () {
        var invertColorScale = this.config.get('invertColorScale'), colorScale = this.config.get('colorScale'), width = this.config.get('width'), height = this.config.get('height'), ringWidth = this.config.get('ringWidth'), ringMargin = this.config.get('ringMargin'), ticks = this.config.get('ticks'), minAngle = this.config.get('minAngle'), maxAngle = this.config.get('maxAngle'), minLevel = this.config.get('minLevel'), maxLevel = this.config.get('maxLevel'), labelInset = this.config.get('labelInset'), needleNutRadius = this.config.get('needleNutRadius'), needleLenghtRatio = this.config.get('needleLenghtRatio'), scale = d3.scaleLinear()
            .domain([minLevel, maxLevel])
            .range([0, 1]), scaleMarkers = scale.ticks(ticks), range$$1 = maxAngle - minAngle, r = ((width > height) ?
            height : width) / 2, needleLen = needleLenghtRatio * (r), translation = (function () { return 'translate(' + r + ',' + r + ')'; }), angleScale = d3.scaleLinear()
            .domain([minLevel, maxLevel])
            .range([90 + minAngle, 90 + maxAngle]);
        this.svg.append('path')
            .attr('class', 'needle')
            .datum(0)
            .attr('transform', function (d) { return "translate(" + r + ", " + r + ") rotate(" + (angleScale(d) - 90) + ")"; })
            .attr('d', "M " + (0 - needleNutRadius) + " " + 0 + " L " + 0 + " " + (0 - needleLen) + " L " + needleNutRadius + " " + 0)
            .style('fill', '#666666');
        this.svg.append('circle')
            .attr('class', 'needle')
            .attr('transform', translation)
            .attr('cx', 0)
            .attr('cy', 0)
            .attr('r', needleNutRadius)
            .style('fill', '#666666');
    };
    DialNeedle.prototype.update = function (data) {
        var datum = data[data.length - 1], width = this.config.get('width'), height = this.config.get('height'), needleNutRadius = this.config.get('needleNutRadius'), needleLenghtRatio = this.config.get('needleLenghtRatio'), propertyValue = this.config.get('propertyValue'), minAngle = this.config.get('minAngle'), maxAngle = this.config.get('maxAngle'), minLevel = this.config.get('minLevel'), maxLevel = this.config.get('maxLevel'), r = ((width > height) ?
            height : width) / 2, needleLen = needleLenghtRatio * (r), angleScale = d3.scaleLinear()
            .domain([minLevel, maxLevel])
            .range([90 + minAngle, 90 + maxAngle]);
        this.svg.select('.needle')
            .transition()
            .attr('transform', function (d) { return "translate(" + r + ", " + r + ") rotate(" + (angleScale(datum[propertyValue]) - 90) + ")"; })
            .attr('d', "M " + (0 - needleNutRadius) + " " + 0 + " L " + 0 + " " + (0 - needleLen) + " L " + needleNutRadius + " " + 0);
    };
    return DialNeedle;
}(Component));

var TextIndicator = (function (_super) {
    __extends(TextIndicator, _super);
    function TextIndicator() {
        return _super.call(this) || this;
    }
    TextIndicator.prototype.update = function (data) {
        var datum = data[data.length - 1];
        this.svg.select('.value')
            .text(datum.value);
        this.svg.select('.label')
            .text(datum.label);
    };
    TextIndicator.prototype.render = function () {
        var indicator = this.svg.append('g')
            .attr('class', 'text-indicator')
            .attr('pointer-events', 'none')
            .style('text-anchor', 'middle')
            .style('alignment-baseline', 'central');
        indicator.append('text')
            .attr('class', 'value')
            .attr('x', 0)
            .attr('y', 0)
            .attr('pointer-events', 'none')
            .text('')
            .style('text-anchor', 'middle');
        indicator.append('text')
            .attr('class', 'label')
            .attr('x', 0)
            .attr('y', 0)
            .attr('pointer-events', 'none')
            .text('')
            .style('transform', 'translate(0, 1.5em')
            .style('text-anchor', 'middle');
    };
    TextIndicator.prototype.translate = function (x, y) {
        this.svg
            .select('g.text-indicator')
            .attr('transform', "translate(" + x + ", " + y + ")");
    };
    return TextIndicator;
}(Component));

var SvgStrategyGauge = (function (_super) {
    __extends(SvgStrategyGauge, _super);
    function SvgStrategyGauge() {
        var _this = _super.call(this) || this;
        _this.dial = new Dial();
        _this.dialNeedle = new DialNeedle();
        _this.textIndicator = new TextIndicator();
        return _this;
    }
    SvgStrategyGauge.prototype.draw = function (data) {
        this.container.updateComponents(data);
    };
    SvgStrategyGauge.prototype.initialize = function () {
        _super.prototype.initialize.call(this);
        this.container.add(this.dial).add(this.dialNeedle);
        if (this.config.get('numericIndicator')) {
            var width = this.config.get('width'), height = this.config.get('height');
            var r = ((width > height) ? height : width) / 2;
            var indicatorOffset = r + 75;
            this.container.add(this.textIndicator);
            this.textIndicator.translate(r, indicatorOffset);
        }
    };
    return SvgStrategyGauge;
}(SvgChart));

var defaults$2 = {
    selector: '#chart',
    colorScale: diverging_spectral2(),
    invertColorScale: true,
    minLevel: 0,
    maxLevel: 100,
    minAngle: -90,
    maxAngle: 90,
    ringWidth: 50,
    ringMargin: 20,
    labelInset: 10,
    needleNutRadius: 25,
    needleLenghtRatio: 0.8,
    numericIndicator: true,
    label: 'km/h',
    marginTop: 20,
    marginRight: 250,
    marginBottom: 30,
    marginLeft: 50,
    width: '50%',
    height: 250,
    ticks: 10,
    propertyValue: 'value'
};

var Gauge = (function (_super) {
    __extends(Gauge, _super);
    function Gauge(data, userConfig) {
        if (userConfig === void 0) { userConfig = {}; }
        return _super.call(this, new SvgStrategyGauge(), data, userConfig, defaults$2) || this;
    }
    Gauge.prototype.keepDrawing = function (datum) {
        this.data = [datum[0]];
        _super.prototype.draw.call(this);
    };
    return Gauge;
}(Chart));

var CanvasPointset = (function (_super) {
    __extends(CanvasPointset, _super);
    function CanvasPointset(x, y) {
        var _this = _super.call(this) || this;
        _this.x = x;
        _this.y = y;
        return _this;
    }
    CanvasPointset.prototype.update = function (data) {
        var _this = this;
        var propertyKey = this.config.get('propertyKey');
        var propertyX = this.config.get('propertyX');
        var propertyY = this.config.get('propertyY');
        var markerShape = this.config.get('markerShape'), markerSize = this.config.get('markerSize'), colorScale = this.config.get('colorScale'), points = null, series = null, dataContainer = null, width = this.config.get('width'), height = this.config.get('height');
        var shape = d3.symbol()
            .size(markerSize)
            .context(this.canvasCtx);
        switch (markerShape) {
            case 'dot':
                shape.type(d3.symbolCircle);
                break;
            case 'ring':
                shape.type(d3.symbolCircle);
                break;
            case 'cross':
                shape.type(d3.symbolCross);
                break;
            case 'diamond':
                shape.type(d3.symbolDiamond);
                break;
            case 'square':
                shape.type(d3.symbolSquare);
                break;
            case 'star':
                shape.type(d3.symbolStar);
                break;
            case 'triangle':
                shape.type(d3.symbolTriangle);
                break;
            case 'wye':
                shape.type(d3.symbolWye);
                break;
            case 'circle':
                shape.type(d3.symbolCircle);
                break;
            default:
                shape.type(d3.symbolCircle);
        }
        dataContainer = this.svg.append('proteic');
        series = dataContainer.selectAll('proteic.g.points');
        this.canvasCtx.clearRect(0, 0, width, height);
        series
            .data(data, function (d) { return d[propertyKey]; })
            .enter()
            .call(function (s) {
            var self = _this;
            s.each(function (d) {
                self.canvasCtx.save();
                self.canvasCtx.translate(self.x.xAxis.scale()(d[propertyX]), self.y.yAxis.scale()(d[propertyY]));
                self.canvasCtx.beginPath();
                self.canvasCtx.strokeStyle = colorScale(d[propertyKey]);
                self.canvasCtx.fillStyle = colorScale(d[propertyKey]);
                shape();
                self.canvasCtx.closePath();
                self.canvasCtx.stroke();
                if (markerShape !== 'ring') {
                    self.canvasCtx.fill();
                }
                self.canvasCtx.restore();
            });
        });
    };
    CanvasPointset.prototype.render = function () {
        this.canvas = d3.select(this.config.get('selector')).append('canvas')
            .attr('id', 'point-set-canvas')
            .attr('width', this.config.get('width'))
            .attr('height', this.config.get('height'))
            .style('position', 'absolute')
            .style('z-index', 2)
            .style('transform', "translate(" + this.config.get('marginLeft') + "px, " + this.config.get('marginTop') + "px)");
        this.canvasCtx = this.canvas.node().getContext('2d');
    };
    return CanvasPointset;
}(Component));

var SvgStrategyScatterplot = (function (_super) {
    __extends(SvgStrategyScatterplot, _super);
    function SvgStrategyScatterplot() {
        var _this = _super.call(this) || this;
        _this.axes = new XYAxis();
        _this.markers = new Pointset(_this.axes.x, _this.axes.y);
        _this.canvasMarkers = new CanvasPointset(_this.axes.x, _this.axes.y);
        return _this;
    }
    SvgStrategyScatterplot.prototype.draw = function (data) {
        var xAxisFormat = this.config.get('xAxisFormat'), xAxisType = this.config.get('xAxisType'), yAxisFormat = this.config.get('yAxisFormat'), yAxisType = this.config.get('yAxisType'), propertyX = this.config.get('propertyX'), propertyY = this.config.get('propertyY');
        convertByXYFormat(data, xAxisFormat, xAxisType, yAxisFormat, yAxisType, propertyX, propertyY);
        sortByField(data, propertyX);
        this.container.updateComponents(data);
    };
    SvgStrategyScatterplot.prototype.initialize = function () {
        _super.prototype.initialize.call(this);
        var legend = this.config.get('legend');
        this.container.add(this.axes);
        if (this.config.get('canvas')) {
            this.container.add(this.canvasMarkers);
        }
        else {
            this.container.add(this.markers);
        }
        if (legend) {
            this.legend = new Legend();
            this.container.add(this.legend);
        }
    };
    return SvgStrategyScatterplot;
}(SvgChart));

var defaults$3 = {
    selector: '#chart',
    colorScale: category7(),
    xAxisType: 'linear',
    xAxisFormat: '.1f',
    xAxisLabel: '',
    xAxisGrid: true,
    yAxisType: 'linear',
    yAxisFormat: '.1f',
    yAxisLabel: '',
    yAxisShow: true,
    yAxisGrid: true,
    marginTop: 20,
    marginRight: 250,
    marginBottom: 130,
    marginLeft: 150,
    markerShape: 'circle',
    markerSize: 15,
    width: '100%',
    height: 250,
    legend: true,
    propertyX: 'x',
    propertyY: 'y',
    propertyKey: 'key',
    onDown: function (d) {
    },
    onHover: function (d) {
    },
    onLeave: function (d) {
    },
    onClick: function (d) {
    },
    onUp: function (d) {
    },
    maxNumberOfElements: 100,
    canvas: false
};

var Scatterplot = (function (_super) {
    __extends(Scatterplot, _super);
    function Scatterplot(data, userConfig) {
        if (userConfig === void 0) { userConfig = {}; }
        return _super.call(this, new SvgStrategyScatterplot(), data, userConfig, defaults$3) || this;
    }
    Scatterplot.prototype.keepDrawing = function (datum) {
        var datumType = datum.constructor;
        if (datumType === Array) {
            if (this.data) {
                this.data = this.data.concat(datum);
            }
            else {
                this.data = datum;
            }
        }
        else {
            this.data.push(datum);
        }
        this.draw(copy(this.data));
    };
    return Scatterplot;
}(Chart));

var Streamset = (function (_super) {
    __extends(Streamset, _super);
    function Streamset(xyAxes) {
        var _this = _super.call(this) || this;
        _this.xyAxes = xyAxes;
        _this.areaGenerator = d3.area()
            .curve(d3.curveCardinal)
            .y0(function (d) { return _this.xyAxes.y.yAxis.scale()(d[0]); })
            .y1(function (d) { return _this.xyAxes.y.yAxis.scale()(d[1]); });
        return _this;
    }
    Streamset.prototype.render = function () {
    };
    Streamset.prototype.update = function (data) {
        var _this = this;
        var propertyKey = this.config.get('propertyKey');
        var propertyX = this.config.get('propertyX');
        var propertyY = this.config.get('propertyY');
        this.clean();
        var colorScale = this.config.get('colorScale'), onDown = this.config.get('onDown'), onUp = this.config.get('onUp'), onLeave = this.config.get('onLeave'), onHover = this.config.get('onHover'), onClick = this.config.get('onClick'), keys = d3.map(data, function (d) { return d[propertyKey]; }).keys(), data4stack = simple2stacked(data, propertyX, propertyY, propertyKey), stack$$1 = this.config.get('stack'), dataSeries = stack$$1(data4stack), series = null;
        this.areaGenerator.x(function (d) { return _this.xyAxes.x.xAxis.scale()((new Date(d.data[propertyKey]))); });
        series = this.svg.selectAll('.serie')
            .data(dataSeries)
            .enter()
            .append('g')
            .attr('class', 'serie')
            .style('stroke', function (d, i) { return colorScale(d[propertyKey]); })
            .attr(Globals.COMPONENT_DATA_KEY_ATTRIBUTE, function (d) { return d[propertyKey]; });
        series
            .append('path')
            .attr('class', 'layer')
            .attr('d', this.areaGenerator)
            .style('fill', function (d, i) { return colorScale(d[propertyKey]); });
        series.exit().remove();
        series
            .attr('opacity', 1)
            .on('mousedown.user', onDown)
            .on('mouseup.user', onUp)
            .on('mouseleave.user', onLeave)
            .on('mouseover.user', onHover)
            .on('click.user', onClick);
    };
    return Streamset;
}(Component));

var SvgStrategyStreamgraph = (function (_super) {
    __extends(SvgStrategyStreamgraph, _super);
    function SvgStrategyStreamgraph() {
        var _this = _super.call(this) || this;
        _this.axes = new XYAxis();
        _this.streams = new Streamset(_this.axes);
        return _this;
    }
    SvgStrategyStreamgraph.prototype.draw = function (data) {
        var xAxisFormat = this.config.get('xAxisFormat'), xAxisType = this.config.get('xAxisType'), yAxisFormat = this.config.get('yAxisFormat'), yAxisType = this.config.get('yAxisType'), propertyX = this.config.get('propertyX'), propertyY = this.config.get('propertyY');
        convertPropretiesToTimeFormat(data, [propertyX], xAxisFormat);
        sortByField(data, propertyX);
        this.container.updateComponents(data);
    };
    SvgStrategyStreamgraph.prototype.initialize = function () {
        _super.prototype.initialize.call(this);
        var markerSize = this.config.get('markerSize'), areaOpacity = this.config.get('areaOpacity'), legend = this.config.get('legend');
        this.container.add(this.axes).add(this.streams);
        if (legend) {
            this.legend = new Legend();
            this.container.add(this.legend);
        }
    };
    return SvgStrategyStreamgraph;
}(SvgChart));

var defaults$4 = {
    selector: '#chart',
    colorScale: category4(),
    xAxisType: 'time',
    xAxisFormat: '%y/%m/%d',
    xAxisLabel: '',
    xAxisGrid: true,
    yAxisType: 'linear',
    yAxisFormat: '',
    yAxisLabel: '',
    yAxisShow: false,
    yAxisGrid: false,
    marginTop: 20,
    marginRight: 250,
    marginBottom: 130,
    marginLeft: 150,
    width: '100%',
    height: 250,
    legend: true,
    propertyX: 'x',
    propertyY: 'y',
    propertyKey: 'key',
    stack: d3.stack().value(function (d, k) { return d.value[k]; }).order(d3.stackOrderInsideOut).offset(d3.stackOffsetWiggle),
    stacked: true,
    onDown: function (d) {
    },
    onHover: function (d) {
    },
    onLeave: function (d) {
    },
    onClick: function (d) {
    },
    onUp: function (d) {
    },
    maxNumberOfElements: 100,
};

var Streamgraph = (function (_super) {
    __extends(Streamgraph, _super);
    function Streamgraph(data, userConfig) {
        if (userConfig === void 0) { userConfig = {}; }
        return _super.call(this, new SvgStrategyStreamgraph(), data, userConfig, defaults$4) || this;
    }
    Streamgraph.prototype.keepDrawing = function (datum) {
        var datumType = datum.constructor;
        if (datumType === Array) {
            this.data = this.data.concat(datum);
        }
        else {
            this.data.push(datum);
        }
        this.draw(copy(this.data));
    };
    return Streamgraph;
}(Chart));

var defaults$5 = {
    selector: '#chart',
    colorScale: category2(),
    xAxisType: 'time',
    xAxisFormat: '%y/%m/%d',
    xAxisLabel: '',
    xAxisGrid: true,
    yAxisType: 'linear',
    yAxisFormat: '',
    yAxisLabel: '',
    yAxisShow: true,
    yAxisGrid: true,
    marginTop: 20,
    marginRight: 250,
    marginBottom: 130,
    marginLeft: 150,
    width: '100%',
    height: 250,
    legend: true,
    propertyX: 'x',
    propertyY: 'y',
    propertyKey: 'key',
    stacked: true,
    stack: d3.stack().value(function (d, k) { return d.value[k]; }).order(d3.stackOrderInsideOut).offset(d3.stackOffsetNone),
    onDown: function (d) {
    },
    onHover: function (d) {
    },
    onLeave: function (d) {
    },
    onClick: function (d) {
    },
    onUp: function (d) {
    },
    maxNumberOfElements: 100,
};

var StackedArea = (function (_super) {
    __extends(StackedArea, _super);
    function StackedArea(data, userConfig) {
        if (userConfig === void 0) { userConfig = {}; }
        return _super.call(this, new SvgStrategyStreamgraph(), data, userConfig, defaults$5) || this;
    }
    StackedArea.prototype.keepDrawing = function (datum) {
        var datumType = datum.constructor;
        if (datumType === Array) {
            this.data = this.data.concat(datum);
        }
        else {
            this.data.push(datum);
        }
        this.draw(copy(this.data));
    };
    return StackedArea;
}(Chart));

var Timeboxset = (function (_super) {
    __extends(Timeboxset, _super);
    function Timeboxset(xyAxes) {
        var _this = _super.call(this) || this;
        _this.xyAxes = xyAxes;
        return _this;
    }
    Timeboxset.prototype.render = function () {
    };
    Timeboxset.prototype.update = function (data) {
        var propertyKey = this.config.get('propertyKey');
        var propertyStart = this.config.get('propertyStart');
        var propertyEnd = this.config.get('propertyEnd');
        var colorScale = this.config.get('colorScale'), height = this.config.get('height'), onDown = this.config.get('onDown'), onUp = this.config.get('onUp'), onLeave = this.config.get('onLeave'), onHover = this.config.get('onHover'), onClick = this.config.get('onClick'), keys = d3.map(data, function (d) { return d[propertyKey]; }).keys(), layer = this.svg.selectAll('.serie').data(data), layerEnter = null, layerMerge = null, box = null, boxEnter = null, boxMerge = null, extLanes = null, yLanes = null, yLanesBand = d3.scaleBand().range([0, keys.length + 1]).domain(keys), x = this.xyAxes.x.xAxis.scale(), y = this.xyAxes.y.yAxis.scale();
        data = simple2nested(data);
        extLanes = d3.extent(data, function (d, i) { return i; });
        yLanes = d3.scaleLinear().domain([extLanes[0], extLanes[1] + 1]).range([0, height]);
        layer = this.svg.selectAll('.serie').data(data);
        layerEnter = layer.enter().append('g');
        layerMerge = layer.merge(layerEnter)
            .attr('class', 'serie')
            .attr(Globals.COMPONENT_DATA_KEY_ATTRIBUTE, function (d) { return d[propertyKey]; });
        box = layerMerge.selectAll('rect')
            .data(function (d) { return d.values; });
        boxEnter = box.enter().append('rect');
        boxMerge = box.merge(boxEnter)
            .attr('width', function (d) { return x(d[propertyEnd]) - x(d[propertyStart]); })
            .attr('x', function (d) { return x(d[propertyStart]); })
            .attr('y', function (d) { return y(d[propertyKey]); })
            .attr('height', function () { return 0.8 * yLanes(1); })
            .style('fill', function (d) { return colorScale(d[propertyKey]); });
        box = this.svg.selectAll('g.serie rect');
        box
            .on('mousedown.user', onDown)
            .on('mouseup.user', onUp)
            .on('mouseleave.user', onLeave)
            .on('mouseover.user', onHover)
            .on('click.user', onClick);
    };
    return Timeboxset;
}(Component));

var SvgStrategySwimlane = (function (_super) {
    __extends(SvgStrategySwimlane, _super);
    function SvgStrategySwimlane() {
        var _this = _super.call(this) || this;
        _this.axes = new XYAxis();
        _this.boxes = new Timeboxset(_this.axes);
        return _this;
    }
    SvgStrategySwimlane.prototype.draw = function (data) {
        var xAxisFormat = this.config.get('xAxisFormat'), propertyStart = this.config.get('propertyStart'), propertyEnd = this.config.get('propertyEnd');
        convertPropretiesToTimeFormat(data, [propertyStart, propertyEnd], xAxisFormat);
        sortByField(data, propertyStart);
        this.container.updateComponents(data);
    };
    SvgStrategySwimlane.prototype.initialize = function () {
        _super.prototype.initialize.call(this);
        var markerSize = this.config.get('markerSize'), areaOpacity = this.config.get('areaOpacity'), legend = this.config.get('legend');
        this.container.add(this.axes);
        if (legend) {
            this.legend = new Legend();
            this.container.add(this.legend).add(this.boxes);
        }
    };
    return SvgStrategySwimlane;
}(SvgChart));

var defaults$6 = {
    selector: '#chart',
    colorScale: category3(),
    xAxisType: 'time',
    xAxisFormat: '%y/%m/%d',
    xAxisLabel: '',
    xAxisGrid: true,
    yAxisType: 'categorical',
    yAxisFormat: 's',
    yAxisLabel: '',
    yAxisShow: true,
    yAxisGrid: true,
    marginTop: 20,
    marginRight: 250,
    marginBottom: 30,
    marginLeft: 50,
    width: '100%',
    height: 250,
    legend: true,
    propertyStart: 'start',
    propertyEnd: 'end',
    propertyKey: 'key',
    onDown: function (d) {
    },
    onHover: function (d) {
    },
    onLeave: function (d) {
    },
    onClick: function (d) {
    },
    onUp: function (d) {
    }
};

var Swimlane = (function (_super) {
    __extends(Swimlane, _super);
    function Swimlane(data, userConfig) {
        if (userConfig === void 0) { userConfig = {}; }
        return _super.call(this, new SvgStrategySwimlane(), data, userConfig, defaults$6) || this;
    }
    Swimlane.prototype.keepDrawing = function (datum) {
        var datumType = datum.constructor;
        if (datumType === Array) {
            this.data = this.data.concat(datum);
        }
        else {
            this.data.push(datum);
        }
        this.draw(copy(this.data));
    };
    return Swimlane;
}(Chart));

var XRadialAxis = (function (_super) {
    __extends(XRadialAxis, _super);
    function XRadialAxis() {
        return _super.call(this) || this;
    }
    XRadialAxis.prototype.update = function (data) { };
    XRadialAxis.prototype.render = function () {
        this._xRadialAxis = d3.scaleLinear().range([0, 2 * Math.PI]);
    };
    Object.defineProperty(XRadialAxis.prototype, "xRadialAxis", {
        get: function () {
            return this._xRadialAxis;
        },
        enumerable: true,
        configurable: true
    });
    return XRadialAxis;
}(Component));

var YRadialAxis = (function (_super) {
    __extends(YRadialAxis, _super);
    function YRadialAxis() {
        return _super.call(this) || this;
    }
    YRadialAxis.prototype.render = function () {
        var width = this.config.get('width'), height = this.config.get('height'), radius = null;
        radius = (Math.min(width, height) / 2) - 10;
        this._yRadialAxis = d3.scaleSqrt().range([0, radius]);
    };
    
    YRadialAxis.prototype.update = function (data) { };
    
    Object.defineProperty(YRadialAxis.prototype, "yRadialAxis", {
        get: function () {
            return this._yRadialAxis;
        },
        enumerable: true,
        configurable: true
    });
    return YRadialAxis;
}(Component));

var RadialAxes = (function (_super) {
    __extends(RadialAxes, _super);
    function RadialAxes() {
        var _this = _super.call(this) || this;
        _this._x = new XRadialAxis();
        _this._y = new YRadialAxis();
        return _this;
    }
    RadialAxes.prototype.configure = function (config, svg) {
        _super.prototype.configure.call(this, config, svg);
        this._x.configure(config, svg);
        this._y.configure(config, svg);
    };
    RadialAxes.prototype.render = function () {
        this._x.render();
        this._y.render();
    };
    RadialAxes.prototype.update = function (data) {
        this._x.update(data);
        this._y.update(data);
    };
    Object.defineProperty(RadialAxes.prototype, "x", {
        get: function () {
            return this._x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadialAxes.prototype, "y", {
        get: function () {
            return this._y;
        },
        enumerable: true,
        configurable: true
    });
    return RadialAxes;
}(Component));

var SunburstDisk = (function (_super) {
    __extends(SunburstDisk, _super);
    function SunburstDisk(x, y) {
        var _this = _super.call(this) || this;
        _this.x = x;
        _this.y = y;
        return _this;
    }
    SunburstDisk.prototype.removePaths = function () {
        this.svg.selectAll('path').remove();
    };
    SunburstDisk.prototype.getAncestors = function (node) {
        var path = [];
        var current = node;
        while (current.parent) {
            path.unshift(current);
            current = current.parent;
        }
        return path;
    };
    SunburstDisk.prototype.update = function (data) {
        var _this = this;
        var arcGen = d3.arc()
            .startAngle(function (d) { return Math.max(0, Math.min(2 * Math.PI, _this.x.xRadialAxis(d.x0))); })
            .endAngle(function (d) { return Math.max(0, Math.min(2 * Math.PI, _this.x.xRadialAxis(d.x1))); })
            .innerRadius(function (d) { return Math.max(0, _this.y.yRadialAxis(d.y0)); })
            .outerRadius(function (d) { return Math.max(0, _this.y.yRadialAxis(d.y1)); });
        var colorScale = this.config.get('colorScale');
        this.removePaths();
        var root = d3.stratify()
            .id(function (d) { return d.id; })
            .parentId(function (d) { return d.parent; })(data);
        root.sum(function (d) { return d.value; });
        d3.partition()(root);
        var paths = this.svg.selectAll('path')
            .data(root.descendants())
            .enter().append('path')
            .attr('d', function (d) { return arcGen(d); })
            .style('fill', function (d) {
            if (!d.parent) {
                return 'white';
            }
            else {
                return colorScale(d.data.label);
            }
        })
            .style('stroke', '#fff')
            .style('stroke-width', '2')
            .style('shape-rendering', 'crispEdge');
        paths
            .on('mouseover.default', function (d) {
            var ancestors = _this.getAncestors(d);
            if (ancestors.length > 0) {
                _this.svg.selectAll('path')
                    .style('opacity', 0.3);
            }
            _this.svg.selectAll('path')
                .filter(function (node) { return ancestors.indexOf(node) >= 0; })
                .style('opacity', 1);
            _this.svg.select('.text-indicator .label').text(d.data.label);
            _this.svg.select('.text-indicator .value').text(d.value);
        })
            .on('mouseout.default', function (d) {
            _this.svg.selectAll('path').style('opacity', 1);
            _this.svg.select('.text-indicator .label').style('font-weight', 'normal');
            _this.svg.select('.text-indicator .label').text('');
            _this.svg.select('.text-indicator .value').text('');
        });
        paths
            .on('mousedown.user', this.config.get('onDown'))
            .on('mouseup.user', this.config.get('onUp'))
            .on('mouseleave.user', this.config.get('onLeave'))
            .on('mouseover.user', this.config.get('onHover'))
            .on('click.user', this.config.get('onClick'));
    };
    SunburstDisk.prototype.render = function () {
    };
    return SunburstDisk;
}(Component));

var SvgStrategySunburst = (function (_super) {
    __extends(SvgStrategySunburst, _super);
    function SvgStrategySunburst() {
        var _this = _super.call(this) || this;
        _this.axes = new RadialAxes();
        _this.disk = new SunburstDisk(_this.axes.x, _this.axes.y);
        _this.textIndicator = new TextIndicator();
        return _this;
    }
    SvgStrategySunburst.prototype.draw = function (data) {
        this.container.translate(this.config.get('width') / 2, this.config.get('height') / 2);
        this.container.updateComponents(data);
    };
    SvgStrategySunburst.prototype.initialize = function () {
        _super.prototype.initialize.call(this);
        this.container
            .add(this.axes)
            .add(this.disk)
            .add(this.textIndicator);
    };
    return SvgStrategySunburst;
}(SvgChart));

var defaults$7 = {
    selector: '#chart',
    colorScale: category8(),
    marginTop: 20,
    marginRight: 20,
    marginBottom: 30,
    marginLeft: 50,
    width: '50%',
    height: 450,
    tickLabel: '',
    transitionDuration: 300,
    maxNumberOfElements: 5,
    sortData: {
        descending: false,
        prop: 'x'
    },
    onDown: function (d) {
    },
    onHover: function (d) {
    },
    onLeave: function (d) {
    },
    onClick: function (d) {
    },
    onUp: function (d) {
    }
};

var Sunburst = (function (_super) {
    __extends(Sunburst, _super);
    function Sunburst(data, userConfig) {
        if (userConfig === void 0) { userConfig = {}; }
        return _super.call(this, new SvgStrategySunburst(), data, userConfig, defaults$7) || this;
    }
    Sunburst.prototype.keepDrawing = function (datum) {
        var datumType = datum.constructor;
        if (datumType === Array) {
            if (this.data) {
                this.data = this.data.concat(datum);
            }
            else {
                this.data = datum;
            }
        }
        else {
            this.data.push(datum);
        }
        this.draw(copy(this.data));
    };
    return Sunburst;
}(Chart));

var LinkedNodeset = (function (_super) {
    __extends(LinkedNodeset, _super);
    function LinkedNodeset() {
        var _this = _super.call(this) || this;
        _this.toggle = 0;
        return _this;
    }
    LinkedNodeset.prototype.render = function () {
        var _this = this;
        var width = this.config.get('width'), height = this.config.get('height');
        this.simulation = d3.forceSimulation()
            .force("link", d3.forceLink().id(function (d) { return d.id; }).distance(50))
            .force("charge", d3.forceManyBody())
            .force("center", d3.forceCenter(width / 2, height / 2));
        this.dragstarted = function (d) {
            if (!d3.event.active)
                _this.simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
        };
        this.dragged = function (d) {
            d.fx = d3.event['x'];
            d.fy = d3.event['y'];
        };
        this.dragended = function (d) {
            if (!d3.event.active)
                _this.simulation.alphaTarget(1);
            d.fx = null;
            d.fy = null;
        };
    };
    LinkedNodeset.prototype.update = function (data) {
        var _this = this;
        var nodeRadius = this.config.get('nodeRadius'), colorScale = this.config.get('colorScale'), linkWeight = this.config.get('linkWeight'), nodeWeight = this.config.get('nodeWeight'), minLinkWeight = this.config.get('minLinkWeight'), maxLinkWeight = this.config.get('maxLinkWeight'), minNodeWeight = this.config.get('minNodeWeight'), maxNodeWeight = this.config.get('maxNodeWeight'), weighted = this.config.get('weighted'), linkScaleRadius = d3.scaleLinear().domain([minLinkWeight, maxLinkWeight]).range([0, 3]), nodeScaleRadius = d3.scaleLinear().domain([minNodeWeight, maxNodeWeight]).range([0, 15]), labelShow = this.config.get('labelShow'), labelField = this.config.get('labelField'), node = null, link = null, text = null;
        data = simple2Linked(data);
        this.svg.selectAll('g.links').remove();
        this.svg.selectAll('g.nodes').remove();
        this.svg.selectAll('g.labels').remove();
        link = this.svg.append('g')
            .attr('class', 'serie')
            .append("g")
            .attr("class", "links")
            .selectAll("line")
            .data(data.links)
            .enter()
            .append("line")
            .attr(Globals.COMPONENT_DATA_KEY_ATTRIBUTE, function (d) { console.log(d); return d.key; })
            .attr("stroke-width", function (d) { return (weighted && d.weight) ? linkScaleRadius(d.weight) : linkWeight; })
            .attr("stroke", "#999")
            .attr("stroke-opacity", 1);
        node = this.svg.select('g.serie').append("g")
            .attr("class", "nodes")
            .selectAll("circle")
            .data(data.nodes)
            .enter()
            .append("circle")
            .attr(Globals.COMPONENT_DATA_KEY_ATTRIBUTE, function (d) { return d.key; })
            .attr("r", function (d) { return (weighted && d.weight) ? nodeScaleRadius(d.weight) : nodeWeight; })
            .attr("fill", function (d) { return colorScale(d.key); })
            .attr("stroke", "white")
            .call(d3.drag()
            .on("start", this.dragstarted)
            .on("drag", this.dragged)
            .on("end", this.dragended));
        var chart = this;
        node
            .on('mousedown.user', this.config.get('onDown'))
            .on('mouseup.user', this.config.get('onUp'))
            .on('mouseleave.user', this.config.get('onLeave'))
            .on('mouseover.user', this.config.get('onHover'))
            .on('click.user', this.config.get('onClick'));
        if (labelShow) {
            text = this.svg.select('g.serie').append("g")
                .attr("class", "labels")
                .selectAll('text')
                .data(data.nodes)
                .enter()
                .append('text')
                .attr(Globals.COMPONENT_DATA_KEY_ATTRIBUTE, function (d) { return d.key; })
                .attr('dx', 10)
                .attr('dy', '.35em')
                .attr('font-size', '.85em')
                .text(typeof labelField === 'string' ? function (d) { return d[labelField]; } : labelField)
                .on('mousedown.user', this.config.get('onDown'))
                .on('mouseup.user', this.config.get('onUp'))
                .on('mouseleave.user', this.config.get('onLeave'))
                .on('mouseover.user', this.config.get('onHover'))
                .on('click.user', this.config.get('onClick'));
        }
        this.simulation.nodes(data.nodes).on("tick", function () { return labelShow ? _this.tickedWithText(link, node, text) : _this.ticked(link, node); });
        this.simulation.force("link").links(data.links);
    };
    LinkedNodeset.prototype.tickedWithText = function (link, node, text) {
        this.ticked(link, node);
        text
            .attr('x', function (d) { return d.x; })
            .attr('y', function (d) { return d.y; });
    };
    LinkedNodeset.prototype.ticked = function (link, node) {
        link
            .attr("x1", function (d) { return d.source.x; })
            .attr("y1", function (d) { return d.source.y; })
            .attr("x2", function (d) { return d.target.x; })
            .attr("y2", function (d) { return d.target.y; });
        node
            .attr("cx", function (d) { return d.x; })
            .attr("cy", function (d) { return d.y; });
    };
    LinkedNodeset.prototype.zoom = function (event$$1) {
        var transform = event$$1.transform;
        this.svg.selectAll('.nodes circle').attr('transform', transform);
        this.svg.selectAll('.links line').attr('transform', transform);
        this.svg.selectAll('.labels text').attr('transform', transform);
    };
    return LinkedNodeset;
}(Component));

var ZoomComponent = (function (_super) {
    __extends(ZoomComponent, _super);
    function ZoomComponent(zoomerComponent) {
        var _this = _super.call(this) || this;
        _this.zoomerComponent = zoomerComponent;
        _this.zoom = d3.zoom().scaleExtent([1 / 2, 4]);
        return _this;
    }
    ZoomComponent.prototype.render = function () {
        var _this = this;
        var selector = this.config.get('selector');
        d3.select(selector).call(this.zoom);
        this.zoom.on('zoom', function () {
            _this.zoomerComponent.zoom(d3.event);
        });
    };
    ZoomComponent.prototype.update = function (data) {
    };
    return ZoomComponent;
}(Component));

var SvgStrategyNetwork = (function (_super) {
    __extends(SvgStrategyNetwork, _super);
    function SvgStrategyNetwork() {
        return _super.call(this) || this;
    }
    SvgStrategyNetwork.prototype.draw = function (data) {
        this.container.updateComponents(data);
    };
    SvgStrategyNetwork.prototype.initialize = function () {
        _super.prototype.initialize.call(this);
        var legend = this.config.get('legend');
        var zoom$$1 = this.config.get('zoom');
        this.linkedNodes = new LinkedNodeset();
        this.container.add(this.linkedNodes);
        if (legend) {
            this.legend = new Legend();
            this.container.add(this.legend);
        }
        if (zoom$$1) {
            this.zoom = new ZoomComponent(this.linkedNodes);
            this.container.add(this.zoom);
        }
    };
    return SvgStrategyNetwork;
}(SvgChart));

var defaults$8 = {
    selector: '#chart',
    colorScale: category7(),
    marginTop: 20,
    marginRight: 250,
    marginBottom: 130,
    marginLeft: 150,
    width: '100%',
    height: 250,
    nodeRadius: 8.5,
    legend: true,
    linkWeight: 1,
    nodeWeight: 8,
    minLinkValue: 0,
    maxLinkValue: 10,
    minNodeWeight: 0,
    maxNodeWeight: 100,
    weighted: false,
    labelShow: true,
    labelField: 'id',
    zoom: true,
    onDown: function (d) {
    },
    onHover: function (d) {
    },
    onLeave: function (d) {
    },
    onClick: function (d) {
    },
    onUp: function (d) {
    }
};

var Network = (function (_super) {
    __extends(Network, _super);
    function Network(data, userConfig) {
        if (userConfig === void 0) { userConfig = {}; }
        return _super.call(this, new SvgStrategyNetwork(), data, userConfig, defaults$8) || this;
    }
    Network.prototype.keepDrawing = function (datum) {
        var datumType = datum.constructor;
        if (datumType === Array) {
            this.data = this.data.concat(datum);
        }
        else {
            this.data.push(datum);
        }
        this.draw(copy(this.data));
    };
    return Network;
}(Chart));

var SectorSet = (function (_super) {
    __extends(SectorSet, _super);
    function SectorSet() {
        return _super.call(this) || this;
    }
    SectorSet.prototype.render = function () {
    };
    SectorSet.prototype.update = function (data) {
        var propertyKey = this.config.get('propertyKey');
        var propertyX = this.config.get('propertyX');
        var width = this.config.get('width');
        var height = this.config.get('height');
        var radius = Math.min(width, height) / 2;
        var colorScale = this.config.get('colorScale');
        var myPie = d3.pie().value(function (d) { return d[propertyX]; })(data);
        var myArc = d3.arc().innerRadius(0).outerRadius(radius);
        var arcs = this.svg.selectAll("g.slice").data(myPie);
        var newBlock = arcs.enter();
        newBlock
            .append("g")
            .attr(Globals.COMPONENT_DATA_KEY_ATTRIBUTE, function (d) { return d.data[propertyKey]; })
            .append("path")
            .attr('fill', function (d, i) {
            return d.data[propertyKey] !== undefined ? colorScale(d.data[propertyKey]) : colorScale(i);
        })
            .attr("d", myArc);
    };
    return SectorSet;
}(Component));

var SvgStrategyPieChart = (function (_super) {
    __extends(SvgStrategyPieChart, _super);
    function SvgStrategyPieChart() {
        var _this = _super.call(this) || this;
        _this.sectors = new SectorSet();
        return _this;
    }
    SvgStrategyPieChart.prototype.draw = function (data) {
        this.container.translate(this.config.get('width') / 2, this.config.get('height') / 2);
        this.container.updateComponents(data);
    };
    SvgStrategyPieChart.prototype.initialize = function () {
        _super.prototype.initialize.call(this);
        this.container
            .add(this.sectors);
        var legend = this.config.get('legend');
        if (legend) {
            this.legend = new Legend();
            this.container.add(this.legend);
        }
    };
    return SvgStrategyPieChart;
}(SvgChart));

var defaults$9 = {
    selector: '#chart',
    colorScale: category8(),
    marginTop: 0,
    marginRight: '100',
    marginBottom: 0,
    marginLeft: 0,
    width: '500',
    height: '500',
    transitionDuration: 300,
    maxNumberOfElements: 5,
    legend: true,
    propertyX: 'x',
    propertyKey: 'key',
    sortData: {
        descending: false,
        prop: 'x'
    },
    onDown: function (d) {
    },
    onHover: function (d) {
    },
    onLeave: function (d) {
    },
    onClick: function (d) {
    },
    onUp: function (d) {
    }
};

var PieChart = (function (_super) {
    __extends(PieChart, _super);
    function PieChart(data, userConfig) {
        if (userConfig === void 0) { userConfig = {}; }
        return _super.call(this, new SvgStrategyPieChart, data, userConfig, defaults$9) || this;
    }
    PieChart.prototype.keepDrawing = function (datum) {
        var datumType = datum.constructor;
        if (datumType === Array) {
            if (this.data) {
                this.data = this.data.concat(datum);
            }
            else {
                this.data = datum;
            }
        }
        else {
            this.data.push(datum);
        }
        this.draw(copy(this.data));
    };
    return PieChart;
}(Chart));

var Datasource = (function () {
    function Datasource() {
        this.dispatcher = null;
        this.source = null;
        this.isWaitingForData = true;
    }
    Datasource.prototype.start = function () {
    };
    Datasource.prototype.stop = function () {
    };
    Datasource.prototype.configure = function (dispatcher) {
        this.dispatcher = dispatcher;
    };
    return Datasource;
}());

var WebsocketDatasource = (function (_super) {
    __extends(WebsocketDatasource, _super);
    function WebsocketDatasource(source) {
        var _this = _super.call(this) || this;
        _this.source = source;
        return _this;
    }
    WebsocketDatasource.prototype.configure = function (dispatcher) {
        this.dispatcher = dispatcher;
    };
    WebsocketDatasource.prototype.start = function () {
        var _this = this;
        _super.prototype.start.call(this);
        this.ws = new WebSocket(this.source['endpoint']);
        this.dispatcher.call('addLoading', null, {});
        this.ws.onopen = function (e) {
            _this.dispatcher.call('onopen', null, e);
        };
        this.ws.onerror = function (e) {
            throw new Error('An error occurred trying to reach the websocket server' + e);
        };
        this.ws.onmessage = function (e) {
            if (_this.isWaitingForData) {
                _this.dispatcher.call('removeLoading', null, e);
                _this.isWaitingForData = false;
            }
            var data = JSON.parse(e.data);
            _this.dispatcher.call('onmessage', null, data);
        };
    };
    WebsocketDatasource.prototype.stop = function () {
        _super.prototype.stop.call(this);
        if (this.ws) {
            this.ws.close();
        }
    };
    return WebsocketDatasource;
}(Datasource));

var HTTPDatasource = (function (_super) {
    __extends(HTTPDatasource, _super);
    function HTTPDatasource(source) {
        var _this = _super.call(this) || this;
        _this.source = source;
        _this.intervalId = -1;
        _this.isWaitingForData = false;
        return _this;
    }
    HTTPDatasource.prototype.start = function () {
        if (!this.isWaitingForData) {
            _super.prototype.start.call(this);
            var pollingTime = this.source.pollingTime;
            var url = this.source.url;
            this._startPolling(url, pollingTime);
            this.isWaitingForData = true;
        }
    };
    HTTPDatasource.prototype._startPolling = function (url, time) {
        var _this = this;
        if (time === void 0) { time = 1000; }
        var interval = window.setInterval;
        this.intervalId = interval(function () { return _this._startRequest(url); }, time);
    };
    HTTPDatasource.prototype._startRequest = function (url) {
        var _this = this;
        d3.request(url).get(function (e, response) { return _this._handleResponse(response); });
    };
    HTTPDatasource.prototype._stopPolling = function () {
        var clearInterval = window.clearInterval;
        clearInterval(this.intervalId);
    };
    HTTPDatasource.prototype._handleResponse = function (xmlHttpRequest) {
        var parseJson = JSON.parse;
        if (xmlHttpRequest.readyState === 4 && xmlHttpRequest.status === 200) {
            var response = parseJson(xmlHttpRequest.response);
            this._handleOK(response);
        }
        else {
            this._handleError(xmlHttpRequest);
        }
    };
    HTTPDatasource.prototype._handleOK = function (data) {
        this.dispatcher.call('onmessage', null, data);
    };
    HTTPDatasource.prototype._handleError = function (data) {
        this.dispatcher.call('onerror', null, data);
    };
    HTTPDatasource.prototype.stop = function () {
        if (this.isWaitingForData) {
            this._stopPolling();
            this.isWaitingForData = false;
        }
    };
    return HTTPDatasource;
}(Datasource));

exports.Linechart = Linechart;
exports.Barchart = Barchart;
exports.Gauge = Gauge;
exports.Scatterplot = Scatterplot;
exports.Streamgraph = Streamgraph;
exports.StackedArea = StackedArea;
exports.Swimlane = Swimlane;
exports.Sunburst = Sunburst;
exports.Network = Network;
exports.PieChart = PieChart;
exports.WebsocketDatasource = WebsocketDatasource;
exports.HTTPDatasource = HTTPDatasource;
exports.Globals = Globals;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=proteic.js.map
>>>>>>> b0307ccd6b41edc5145868cb362d1c78a750c17a
