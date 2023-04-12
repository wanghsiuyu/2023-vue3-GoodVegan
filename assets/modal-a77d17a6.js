import{c as x}from"./index-ef04eae2.js";import{r as G,b as U,d as Q,a as J,c as Z,e as X,f as tt,g as et}from"./component-functions-53916ee9.js";var f={},it={get exports(){return f},set exports(h){f=h}};/*!
  * Bootstrap modal.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(h,st){(function(o,c){h.exports=c(G(),U(),Q(),J(),Z(),X(),tt(),et())})(x,function(o,c,T,A,b,S,w,y){const l=r=>r&&typeof r=="object"&&"default"in r?r:{default:r},i=l(c),_=l(T),v=l(A),D=l(b),L=l(S),k=l(w),N="modal",s=".bs.modal",O=".data-api",C="Escape",I=`hide${s}`,B=`hidePrevented${s}`,m=`hidden${s}`,g=`show${s}`,M=`shown${s}`,$=`resize${s}`,V=`click.dismiss${s}`,H=`mousedown.dismiss${s}`,q=`keydown.dismiss${s}`,P=`click${s}${O}`,E="modal-open",R="fade",p="show",u="modal-static",Y=".modal.show",j=".modal-dialog",K=".modal-body",F='[data-bs-toggle="modal"]',W={backdrop:!0,focus:!0,keyboard:!0},z={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class a extends D.default{constructor(t,e){super(t,e),this._dialog=_.default.findOne(j,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new v.default,this._addEventListeners()}static get Default(){return W}static get DefaultType(){return z}static get NAME(){return N}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||i.default.trigger(this._element,g,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(E),this._adjustDialog(),this._backdrop.show(()=>this._showElement(t)))}hide(){!this._isShown||this._isTransitioning||i.default.trigger(this._element,I).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(p),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){for(const t of[window,this._dialog])i.default.off(t,s);this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new L.default({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new k.default({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const e=_.default.findOne(K,this._dialog);e&&(e.scrollTop=0),o.reflow(this._element),this._element.classList.add(p);const n=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,i.default.trigger(this._element,M,{relatedTarget:t})};this._queueCallback(n,this._dialog,this._isAnimated())}_addEventListeners(){i.default.on(this._element,q,t=>{if(t.key===C){if(this._config.keyboard){t.preventDefault(),this.hide();return}this._triggerBackdropTransition()}}),i.default.on(window,$,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),i.default.on(this._element,H,t=>{i.default.one(this._element,V,e=>{if(!(this._element!==t.target||this._element!==e.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(E),this._resetAdjustments(),this._scrollBar.reset(),i.default.trigger(this._element,m)})}_isAnimated(){return this._element.classList.contains(R)}_triggerBackdropTransition(){if(i.default.trigger(this._element,B).defaultPrevented)return;const e=this._element.scrollHeight>document.documentElement.clientHeight,n=this._element.style.overflowY;n==="hidden"||this._element.classList.contains(u)||(e||(this._element.style.overflowY="hidden"),this._element.classList.add(u),this._queueCallback(()=>{this._element.classList.remove(u),this._queueCallback(()=>{this._element.style.overflowY=n},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),n=e>0;if(n&&!t){const d=o.isRTL()?"paddingLeft":"paddingRight";this._element.style[d]=`${e}px`}if(!n&&t){const d=o.isRTL()?"paddingRight":"paddingLeft";this._element.style[d]=`${e}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each(function(){const n=a.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof n[t]>"u")throw new TypeError(`No method named "${t}"`);n[t](e)}})}}return i.default.on(document,P,F,function(r){const t=o.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&r.preventDefault(),i.default.one(t,g,d=>{d.defaultPrevented||i.default.one(t,m,()=>{o.isVisible(this)&&this.focus()})});const e=_.default.findOne(Y);e&&a.getInstance(e).hide(),a.getOrCreateInstance(t).toggle(this)}),y.enableDismissTrigger(a),o.defineJQueryPlugin(a),a})})(it);const rt=f;export{rt as M};
