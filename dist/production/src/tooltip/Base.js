self.webpackChunk([2],{30:function(e,s,t){"use strict";t.r(s),t.d(s,"default",(function(){return n}));var i=t(8),l=t(1);class a extends l.a{static getConfig(){return{className:"Neo.util.Floating",ntype:"mixin-floating",mixin:!0,animateTargetId:null,modal_:!1}}}Neo.applyClassConfig(a);var o=a,d=t(26);class n extends i.a{static getConfig(){return{className:"Neo.tooltip.Base",ntype:"tooltip",cls:["neo-tooltip"],componentId_:null,delegate:null,dismissDelay:1e4,dismissDelayTaskId:null,hideDelay:400,hideDelayTaskId:null,mixins:[o],showDelay:200,showDelayTaskId:null,stayOnHover_:!0,text_:null}}afterSetComponentId(e,s){if(e){let s=this,t=Neo.getComponent(e),i=t.domListeners||[];i.push({mouseenter:s.showDelayed,delegate:s.delegate,scope:s},{mouseleave:s.hideDelayed,delegate:s.delegate,scope:s}),t.domListeners=i}}afterSetStayOnHover(e,s){if(e){let e=this,s=e.domListeners||[];s.push({mouseenter:e.onMouseEnter,scope:e},{mouseleave:e.onMouseLeave,scope:e}),e.domListeners=s}}afterSetText(e){if(e){let s=this,t=s.items||[],i=t[0];i&&"label"===i.ntype?i.text=e:(t.push({module:d.a,text:e}),s.items=t)}}clearTimeout(e){Array.isArray(e)||(e=[e]);let s,t=this;e.forEach(e=>{s=e+"DelayTaskId",t[s]&&(clearTimeout(t[s]),t[s]=null)})}hide(e){let s=this;s.clearTimeout(["dismiss","hide","show"]),s.mounted&&s.unmount()}hideDelayed(e){let s=this;s.hideDelay?s.hideDelayTaskId=setTimeout(s.hide.bind(s),s.hideDelay,e):s.hide(e)}onMouseEnter(e){let s=this,t=e.path[0].id;s.id===t&&s.clearTimeout(["dismiss","hide"])}onMouseLeave(e){let s=this,t=e.path[0].id;s.id===t&&s.hideDelayed(null)}show(e){let s=this;s.showDelayTaskId=null,s.clearTimeout("hide"),s.dismissDelay&&(s.dismissDelayTaskId=setTimeout(s.hide.bind(s),s.dismissDelay,e)),s.mounted||s.mount()}showDelayed(e){let s=this;s.showDelay?s.showDelayTaskId=setTimeout(s.show.bind(s),s.showDelay,e):s.show(e)}}Neo.applyClassConfig(n)}});