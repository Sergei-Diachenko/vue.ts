(function(){"use strict";var e={965:function(e,a,n){var t=n(61),u=n(252);function l(e,a,n,t,l,o){const r=(0,u.up)("CanvasComponent");return(0,u.wg)(),(0,u.j4)(r)}var o=n(612);const r=e=>((0,u.dD)("data-v-7ef84c7d"),e=e(),(0,u.Cn)(),e),i={class:"container"},s={class:"controls"},v=r((()=>(0,u._)("h2",null,"Управление",-1))),c={class:"control-panel"},d={class:"control-panel__props"},h=r((()=>(0,u._)("label",{for:"radius"},"Радиус окружности:",-1))),p={class:"control-panel__props"},f=r((()=>(0,u._)("label",{for:"side"},"Размер стороны квадрата:",-1))),g={class:"control-panel__props"},_=r((()=>(0,u._)("label",{for:"squareX"},"Координата X квадрата:",-1))),b={class:"control-panel__props"},m=r((()=>(0,u._)("label",{for:"squareY"},"Координата Y квадрата:",-1)));function w(e,a,n,l,r,w){return(0,u.wg)(),(0,u.iD)("div",i,[(0,u._)("div",{class:"canvas",style:(0,o.j5)({width:l.canvasWidth,height:l.canvasHeight})},[(0,u._)("canvas",{ref:"canvasRef",onMousedown:a[0]||(a[0]=(...e)=>l.startDragging&&l.startDragging(...e)),onMouseup:a[1]||(a[1]=(...e)=>l.stopDragging&&l.stopDragging(...e)),onMousemove:a[2]||(a[2]=(...e)=>l.handleMouseMove&&l.handleMouseMove(...e)),style:{width:"100%",height:"100%"}},null,544)],4),(0,u._)("div",s,[v,(0,u._)("div",c,[(0,u._)("div",d,[h,(0,u.wy)((0,u._)("input",{type:"number",id:"radius","onUpdate:modelValue":a[3]||(a[3]=e=>l.radius=e),onInput:a[4]||(a[4]=(...e)=>l.updateCanvas&&l.updateCanvas(...e))},null,544),[[t.nr,l.radius,void 0,{number:!0}]])]),(0,u._)("div",p,[f,(0,u.wy)((0,u._)("input",{type:"number",id:"side","onUpdate:modelValue":a[5]||(a[5]=e=>l.side=e),onInput:a[6]||(a[6]=(...e)=>l.updateCanvas&&l.updateCanvas(...e))},null,544),[[t.nr,l.side,void 0,{number:!0}]])]),(0,u._)("div",g,[_,(0,u.wy)((0,u._)("input",{type:"number",id:"squareX","onUpdate:modelValue":a[7]||(a[7]=e=>l.squareX=e),onInput:a[8]||(a[8]=(...e)=>l.updateCanvas&&l.updateCanvas(...e))},null,544),[[t.nr,l.squareX,void 0,{number:!0}]])]),(0,u._)("div",b,[m,(0,u.wy)((0,u._)("input",{type:"number",id:"squareY","onUpdate:modelValue":a[9]||(a[9]=e=>l.squareY=e),onInput:a[10]||(a[10]=(...e)=>l.updateCanvas&&l.updateCanvas(...e))},null,544),[[t.nr,l.squareY,void 0,{number:!0}]])]),(0,u._)("button",{class:"control-panel__btn",onClick:a[11]||(a[11]=(...e)=>l.resetValues&&l.resetValues(...e))},"Сброс")])])])}var M=n(931),C={name:"CanvasComponent",setup(){const e=(0,M.iH)(null),a=(0,M.iH)(null),n=(0,M.iH)(!1),t=(0,M.iH)(""),l=(0,M.iH)(""),o=(0,M.iH)(100),r=(0,M.iH)(50),i=(0,M.iH)(0),s=(0,M.iH)(0),v=(0,M.iH)(0),c=(0,M.iH)(0),d=e=>{n.value=!0,v.value=e.offsetX-i.value,c.value=e.offsetY-s.value},h=()=>{n.value=!1},p=a=>{if(n.value){const n=e.value.width/2,t=e.value.height/2,u=Math.min(n,t,o.value),l=a.offsetX,d=a.offsetY,h=Math.sqrt(Math.pow(l-n,2)+Math.pow(d-t,2));if(h<=u-r.value/2)i.value=Math.ceil(l-v.value),s.value=Math.ceil(d-c.value);else{const e=Math.atan2(d-t,l-n),a=n+Math.cos(e)*(u-r.value/2),o=t+Math.sin(e)*(u-r.value/2);i.value=Math.ceil(a-v.value),s.value=Math.ceil(o-c.value)}}},f=()=>{const n=e.value.width/2,t=e.value.height/2,u=Math.min(n,t,o.value);a.value.beginPath(),a.value.arc(n,t,u-1,0,2*Math.PI),a.value.stroke()},g=()=>{const n=r.value/2,t=e.value.width/2,u=e.value.height/2;a.value.beginPath(),a.value.rect(Math.ceil(t-n+i.value),Math.ceil(u-n+s.value),r.value,r.value),a.value.stroke()},_=()=>{const n=e.value.width/2,t=e.value.height/2;a.value.beginPath(),a.value.moveTo(0,t),a.value.lineTo(e.value.width,t),a.value.moveTo(n,0),a.value.lineTo(n,e.value.height),a.value.stroke()},b=()=>{a.value&&a.value.clearRect(0,0,e.value.width,e.value.height)},m=()=>{const n=e.value;n.width=n.offsetWidth,n.height=n.offsetHeight,a.value=n.getContext("2d"),b(),_(),f(),g()},w=()=>{o.value=100,r.value=50,i.value=0,s.value=0,v.value=0,c.value=0,m()};return(0,u.bv)((()=>{e.value;m(),(0,u.m0)((()=>{m()}))})),{canvasRef:e,canvasWidth:t,canvasHeight:l,radius:o,side:r,squareX:i,squareY:s,startDragging:d,stopDragging:h,handleMouseMove:p,drawCircle:f,drawSquare:g,drawAxes:_,clearCanvas:b,updateCanvas:m,resetValues:w}}},y=n(744);const H=(0,y.Z)(C,[["render",w],["__scopeId","data-v-7ef84c7d"]]);var q=H,k=(0,u.aZ)({name:"App",components:{CanvasComponent:q}});const O=(0,y.Z)(k,[["render",l]]);var j=O;(0,t.ri)(j).mount("#app")}},a={};function n(t){var u=a[t];if(void 0!==u)return u.exports;var l=a[t]={exports:{}};return e[t](l,l.exports,n),l.exports}n.m=e,function(){var e=[];n.O=function(a,t,u,l){if(!t){var o=1/0;for(v=0;v<e.length;v++){t=e[v][0],u=e[v][1],l=e[v][2];for(var r=!0,i=0;i<t.length;i++)(!1&l||o>=l)&&Object.keys(n.O).every((function(e){return n.O[e](t[i])}))?t.splice(i--,1):(r=!1,l<o&&(o=l));if(r){e.splice(v--,1);var s=u();void 0!==s&&(a=s)}}return a}l=l||0;for(var v=e.length;v>0&&e[v-1][2]>l;v--)e[v]=e[v-1];e[v]=[t,u,l]}}(),function(){n.d=function(e,a){for(var t in a)n.o(a,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){var e={143:0};n.O.j=function(a){return 0===e[a]};var a=function(a,t){var u,l,o=t[0],r=t[1],i=t[2],s=0;if(o.some((function(a){return 0!==e[a]}))){for(u in r)n.o(r,u)&&(n.m[u]=r[u]);if(i)var v=i(n)}for(a&&a(t);s<o.length;s++)l=o[s],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(v)},t=self["webpackChunkdiachenko_canvas_ts"]=self["webpackChunkdiachenko_canvas_ts"]||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))}();var t=n.O(void 0,[998],(function(){return n(965)}));t=n.O(t)})();
//# sourceMappingURL=app.3b791f73.js.map