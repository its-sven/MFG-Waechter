var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e){t.appendChild(e)}function i(t,e,n){t.insertBefore(e,n||null)}function a(t){t.parentNode.removeChild(t)}function l(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function f(){return u(" ")}function d(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function p(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let m;function v(t){m=t}const h=[],$=[],g=[],y=[],b=Promise.resolve();let j=!1;function x(t){g.push(t)}let _=!1;const k=new Set;function w(){if(!_){_=!0;do{for(let t=0;t<h.length;t+=1){const e=h[t];v(e),C(e.$$)}for(v(null),h.length=0;$.length;)$.pop()();for(let t=0;t<g.length;t+=1){const e=g[t];k.has(e)||(k.add(e),e())}g.length=0}while(h.length);for(;y.length;)y.pop()();j=!1,_=!1,k.clear()}}function C(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(x)}}const T=new Set;function E(t,e){-1===t.$$.dirty[0]&&(h.push(t),j||(j=!0,b.then(w)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function S(s,c,i,l,u,f,d,p=[-1]){const h=m;v(s);const $=s.$$={fragment:null,ctx:null,props:f,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(c.context||(h?h.$$.context:[])),callbacks:n(),dirty:p,skip_bound:!1,root:c.target||h.$$.root};d&&d($.root);let g=!1;if($.ctx=i?i(s,c.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return $.ctx&&u($.ctx[t],$.ctx[t]=o)&&(!$.skip_bound&&$.bound[t]&&$.bound[t](o),g&&E(s,t)),e})):[],$.update(),g=!0,o($.before_update),$.fragment=!!l&&l($.ctx),c.target){if(c.hydrate){const t=function(t){return Array.from(t.childNodes)}(c.target);$.fragment&&$.fragment.l(t),t.forEach(a)}else $.fragment&&$.fragment.c();c.intro&&((y=s.$$.fragment)&&y.i&&(T.delete(y),y.i(b))),function(t,n,s,c){const{fragment:i,on_mount:a,on_destroy:l,after_update:u}=t.$$;i&&i.m(n,s),c||x((()=>{const n=a.map(e).filter(r);l?l.push(...n):o(n),t.$$.on_mount=[]})),u.forEach(x)}(s,c.target,c.anchor,c.customElement),w()}var y,b;v(h)}function A(t){let e;return{c(){e=l("i"),d(e,"class","fas fa-lock")},m(t,n){i(t,e,n)},d(t){t&&a(e)}}}function D(t){let e;return{c(){e=l("i"),d(e,"class","fas fa-lock-open")},m(t,n){i(t,e,n)},d(t){t&&a(e)}}}function O(e){let n,o,r,s,m,v,h,$,g,y,b,j,x,_,k,w,C,T,E,S,O,H,N,F,M,P,q,B,G=e[0].Temp+"",I=e[0].Humidity+"";function L(t,e){return t[0].Door?D:A}let W=L(e),z=W(e);return{c(){n=l("div"),o=l("div"),o.textContent="Überwachung Schul-MFG",r=f(),s=l("div"),m=l("div"),m.textContent="Die Werte werden jede Sekunde aktualisiert.",v=f(),h=l("div"),$=l("div"),$.textContent="Temperatur:",g=f(),y=l("div"),b=u(G),j=u("° C"),x=f(),_=l("div"),k=f(),w=l("div"),C=l("div"),C.textContent="Luftfeuchtigkeit:",T=f(),E=l("div"),S=u(I),O=u("%"),H=f(),N=l("div"),F=f(),M=l("div"),P=l("div"),P.textContent="Tür-Status:",q=f(),B=l("div"),z.c(),d(o,"class","main-title svelte-8898jf"),d(m,"class","description svelte-8898jf"),d($,"class","title svelte-8898jf"),d(y,"class","value svelte-8898jf"),d(h,"class","section temperature svelte-8898jf"),d(_,"class","spacer svelte-8898jf"),d(C,"class","title svelte-8898jf"),d(E,"class","value svelte-8898jf"),d(w,"class","section humidity svelte-8898jf"),d(N,"class","spacer svelte-8898jf"),d(P,"class","title svelte-8898jf"),d(B,"class","value svelte-8898jf"),d(M,"class","section doors svelte-8898jf"),d(s,"class","applets svelte-8898jf"),d(n,"class","outer svelte-8898jf")},m(t,e){i(t,n,e),c(n,o),c(n,r),c(n,s),c(s,m),c(s,v),c(s,h),c(h,$),c(h,g),c(h,y),c(y,b),c(y,j),c(s,x),c(s,_),c(s,k),c(s,w),c(w,C),c(w,T),c(w,E),c(E,S),c(E,O),c(s,H),c(s,N),c(s,F),c(s,M),c(M,P),c(M,q),c(M,B),z.m(B,null)},p(t,[e]){1&e&&G!==(G=t[0].Temp+"")&&p(b,G),1&e&&I!==(I=t[0].Humidity+"")&&p(S,I),W!==(W=L(t))&&(z.d(1),z=W(t),z&&(z.c(),z.m(B,null)))},i:t,o:t,d(t){t&&a(n),z.d()}}}function H(t,e,n){let o={Temp:"20.1",Humidity:21,Door:!1};return setInterval((async function(){var t={action:"get-values"},e=new FormData;for(var r in t)e.append(r,t[r]);const s=await fetch("/api",{method:"POST",body:e});var c=await s.json();n(0,o=c)}),1e3),[o]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),S(this,t,H,O,s,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
