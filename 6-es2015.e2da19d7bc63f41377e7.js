(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{dWOj:function(e,t,o){"use strict";o.d(t,"a",(function(){return u}));var i=o("EM62"),s=o("ZTXN"),r=o("e2XY"),n=o("fAiE"),a=o("E5oP"),c=o("2kYt"),l=o("VKQk");function h(e,t){if(1&e){const e=i.Ub();i.Tb(0,"span",6),i.ac("click",(function(){return i.vc(e),i.ec(2).emitCloseButtonClick()}))("keyup",(function(t){return i.vc(e),i.ec(2)._onCloseKeyup(t)})),i.Ob(1,"nx-icon",7),i.Sb()}}function p(e,t){if(1&e){const e=i.Ub();i.Tb(0,"div",0),i.ac("click",(function(t){return i.vc(e),i.ec()._onClick(t)})),i.Tb(1,"div",1),i.Ob(2,"div",2),i.Hc(3,h,2,0,"span",3),i.Tb(4,"span",4),i.ic(5),i.Pb(6,5),i.Sb(),i.Sb(),i.Sb()}if(2&e){const e=i.ec();i.kc("ngClass",e.classList)("dir",e.dir),i.Bb(2),i.kc("ngStyle",e.arrowStyle),i.Bb(1),i.kc("ngIf",e.showCloseButton),i.Bb(1),i.kc("id",e.id),i.Bb(2),i.kc("ngTemplateOutlet",null==e._lazyContent?null:e._lazyContent._template)}}const d=["*"];let u=(()=>{class e{constructor(e){this._dir=e,this.closed=new i.o,this.closeButtonClick=new s.a,this.showCloseButton=!1,this.arrowStyle={}}get dir(){return this._dir&&"rtl"===this._dir.value?"rtl":"ltr"}ngOnDestroy(){this.closed.complete()}emitCloseButtonClick(){this.closeButtonClick.next()}_onCloseKeyup(e){!e||e.keyCode!==n.f&&e.keyCode!==n.o||this.emitCloseButtonClick(),e.preventDefault()}emitClosedEvent(){this.closed.emit()}get classList(){if(this.direction)return"nx-popover--"+this.direction}_onClick(e){e.stopPropagation()}}return e.\u0275fac=function(t){return new(t||e)(i.Nb(a.c,8))},e.\u0275cmp=i.Hb({type:e,selectors:[["nx-popover"]],contentQueries:function(e,t,o){var s;1&e&&i.Gb(o,r.a,!0),2&e&&i.qc(s=i.bc())&&(t._lazyContent=s.first)},viewQuery:function(e,t){var o;1&e&&i.Nc(i.N,!0),2&e&&i.qc(o=i.bc())&&(t.templateRef=o.first)},outputs:{closed:"nxClosed"},exportAs:["nxPopover"],ngContentSelectors:d,decls:1,vars:0,consts:[["role","tooltip","aria-hidden","false",3,"ngClass","dir","click"],["tabindex","0",1,"nx-popover__content"],[1,"nx-popover__arrow",3,"ngStyle"],["aria-label","close","tabindex","0","role","button","class","nx-popover__close-icon",3,"click","keyup",4,"ngIf"],[3,"id"],[3,"ngTemplateOutlet"],["aria-label","close","tabindex","0","role","button",1,"nx-popover__close-icon",3,"click","keyup"],["aria-hidden","true","name","close"]],template:function(e,t){1&e&&(i.jc(),i.Hc(0,p,7,6,"ng-template"))},directives:[c.q,a.b,c.w,c.t,c.A,l.a],styles:[".nx-popover__content[_ngcontent-%COMP%]{font-size:var(--popover-content-font-size);line-height:var(--popover-content-line-height);font-weight:var(--popover-content-font-weight);letter-spacing:var(--popover-content-letter-spacing);background-color:var(--popover-background-color);color:var(--popover-text-color);border:1px solid var(--popover-border-color);border-radius:4px;box-shadow:0 2px 4px rgba(65,65,65,.5);padding:23px;display:block}.nx-popover__content[_ngcontent-%COMP%]:focus{outline:none}.nx-popover__content[_ngcontent-%COMP%]::-moz-focus-inner{border:0}.nx-popover__close-icon[_ngcontent-%COMP%]{display:flex;position:absolute;top:4px;right:4px;cursor:pointer;font-size:var(--popover-close-icon-size);color:var(--popover-close-icon-color);border-radius:2px}[dir=rtl][_ngcontent-%COMP%]   .nx-popover__close-icon[_ngcontent-%COMP%]{right:auto;left:4px}.nx-popover__close-icon[_ngcontent-%COMP%]:focus{outline:none}.nx-popover__close-icon[_ngcontent-%COMP%]::-moz-focus-inner{border:0}  [data-whatinput=keyboard] .nx-popover__close-icon:focus,   [data-whatinput=keyboard] .nx-popover__content:focus{box-shadow:var(--focus-box-shadow)}@media screen and (-ms-high-contrast:active){  [data-whatinput=keyboard] .nx-popover__close-icon:focus,   [data-whatinput=keyboard] .nx-popover__content:focus{box-shadow:0 0 0 2px background,0 0 0 6px windowText}}.nx-popover__arrow[_ngcontent-%COMP%]{width:12px;height:12px;background-color:inherit;position:absolute;transform:translate(-50%);border-top:1px solid var(--popover-border-color);border-left:1px solid var(--popover-border-color)}.nx-popover--top[_ngcontent-%COMP%]   .nx-popover__arrow[_ngcontent-%COMP%]{transform:translate(-50%) rotate(225deg);bottom:-5px;box-shadow:2px 2px 1px 1px var(--popover-background-color),-2px -2px 4px rgba(65,65,65,.5)}.nx-popover--right[_ngcontent-%COMP%]   .nx-popover__arrow[_ngcontent-%COMP%]{transform:translateY(-50%) rotate(-45deg);left:-5px}.nx-popover--bottom[_ngcontent-%COMP%]   .nx-popover__arrow[_ngcontent-%COMP%]{transform:translate(-50%) rotate(45deg);top:-5px}.nx-popover--left[_ngcontent-%COMP%]   .nx-popover__arrow[_ngcontent-%COMP%]{transform:translateY(-50%) rotate(135deg);right:-5px}"],changeDetection:0}),e})()},e2XY:function(e,t,o){"use strict";o.d(t,"a",(function(){return s}));var i=o("EM62");let s=(()=>{class e{constructor(e){this._template=e}}return e.\u0275fac=function(t){return new(t||e)(i.Nb(i.N))},e.\u0275dir=i.Ib({type:e,selectors:[["ng-template","nxPopoverContent",""]]}),e})()},kMq3:function(e,t,o){"use strict";o.d(t,"a",(function(){return w}));var i=o("5XID"),s=o("HYj3"),r=o("Sv/w"),n=o("EM62"),a=o("ZTXN"),c=o("KTx3"),l=o("kuMc"),h=o("YtkY"),p=o("xVbo"),d=o("2kYt"),u=o("fAiE"),b=o("e4iD"),v=o("sg/T"),g=o("cZZj"),_=o("E5oP");let f=0;function y(e){return Error(`Popover direction "${e}" is invalid.`)}let w=(()=>{class e{constructor(e,t,o,i,s,r,h,p,d,b){this.overlay=e,this.elementRef=t,this.viewContainerRef=o,this.eventManager=i,this._focusTrapFactory=s,this._focusMonitor=r,this._ngZone=h,this._platform=p,this._dir=d,this._document=b,this._destroyed=new a.a,this._overlayDestroyed=new a.a,this._show=!1,this._closeable=null,this._modal=!1,this._elementFocusedBeforePopoverWasOpened=null,this._manualListeners=new Map,this._possiblePopoverDirections=["bottom","top","left","right"],this.id="nx-popover-"+f++,this.changeShow=new n.o,this._closeOnClickOutside=!0,this.direction="right",this.popoverInitialVisible=!1,this.visibleChange=new n.o,this.trigger="click",this.scrollStrategy="close",this._documentClickObservable=Object(c.a)(document,"click");const v=t.nativeElement;this._platform.IOS||this._platform.ANDROID?this._manualListeners.set("touchstart",()=>{"hover"===this.trigger&&(this.show=!0)}):this._manualListeners.set("mouseenter",()=>{"hover"===this.trigger&&(this.show=!0)}).set("mouseleave",()=>{"hover"===this.trigger&&(this.show=!1)}).set("keydown",e=>{switch(e.keyCode){case u.o:case u.f:this.handleClick();break;default:return}}),this._manualListeners.forEach((e,t)=>v.addEventListener(t,e)),this._focusMonitor.monitor(v).pipe(Object(l.a)(this._destroyed)).subscribe(e=>{"keyboard"===e&&"hover"===this.trigger&&this._ngZone.run(()=>this.show=!0)}),this._dirChangeSubscription=this._dir.change.subscribe(this._dirChangeHandler.bind(this))}set show(e){e=Object(i.b)(e),this._show!==e&&(this._show=e,this._show?this.openPopover():this.closePopover())}get show(){return this._show}set closeable(e){this._closeable=Object(i.b)(e),this.popover&&(this.popover.showCloseButton=this.isCloseable())}get closeable(){return this._closeable}set closeOnClickOutside(e){this._closeOnClickOutside=Object(i.b)(e)}get closeOnClickOutside(){return this._closeOnClickOutside}set modal(e){this._modal=Object(i.b)(e)}get modal(){return this._modal}ngOnInit(){this.popover.showCloseButton=this.isCloseable()}ngAfterViewInit(){this.popover.id=this.id,this.eventManager.addGlobalEventListener("window","keyup.esc",()=>{this.isOpen&&(this.show=!1)}),this.popover.closeButtonClick.pipe(Object(l.a)(this._destroyed)).subscribe(()=>{this.show=!1}),(this.popoverInitialVisible||this._show)&&(this.show=!0)}ngOnDestroy(){this.show=!1,this._manualListeners.forEach((e,t)=>{this.elementRef.nativeElement.removeEventListener(t,e)}),this._manualListeners.clear(),this._dirChangeSubscription.unsubscribe(),this._overlayDestroyed.next(),this._destroyed.next(),this._overlayDestroyed.complete(),this._destroyed.complete()}get isOpen(){return this.overlayRef&&this.createOverlay().hasAttached()}isCloseable(){return"click"===this.trigger&&null===this._closeable||this._closeable}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}handleClick(){"click"===this.trigger?this.show=!this.isOpen:"hover"===this.trigger&&(this.show=!0)}open(){this.show=!0}close(){this.show=!1}toggle(){this.show=!this.show}openPopover(){if(!this.createOverlay().hasAttached()){this._embeddedViewRef=this.createOverlay().attach(this.portal);const e=this._embeddedViewRef.rootNodes[0];this._focusTrap=this._focusTrapFactory.create(e),this._elementFocusedBeforePopoverWasOpened=this.elementRef.nativeElement,this._autoFocusFirstTabbableElement(e),this.closeOnClickOutside&&this.waitForClose()}}_autoFocusFirstTabbableElement(e){this._focusTrap.focusInitialElementWhenReady().then(t=>{t||e.focus()})}closePopover(){this.overlayRef&&(this._returnFocusAfterPopover(),this.overlayRef.detach(),this._embeddedViewRef=null,this._focusTrap.destroy())}createOverlay(){var e;if(!this.overlayRef){this.portal=new r.i(this.popover.templateRef,this.viewContainerRef);const t=new s.d;t.positionStrategy=this.getPosition(),this._positionStrategy=t.positionStrategy,t.scrollStrategy="reposition"===this.scrollStrategy?this.overlay.scrollStrategies.reposition():this.overlay.scrollStrategies.close(),t.scrollStrategy.enable(),t.direction=(null===(e=this._dir)||void 0===e?void 0:e.value)||"ltr",this._modal&&(t.hasBackdrop=!0),this.overlayRef=this.overlay.create(t),this.subscribeToPositions(t.positionStrategy),this._subscribeToAttach(),this._subscribeToDetach(),this._modal&&this._closeOnClickOutside&&this._subscribeToBackdropClick()}return this.overlayRef}subscribeToPositions(e){e.positionChanges.pipe(Object(l.a)(this._overlayDestroyed)).subscribe(e=>{const t=e.connectionPair;this.positionOverlay(t),this.positionArrow(t),this._embeddedViewRef&&!this._embeddedViewRef.destroyed&&this._embeddedViewRef.detectChanges()})}_subscribeToBackdropClick(){this.overlayRef.backdropClick().pipe(Object(l.a)(this._overlayDestroyed)).subscribe(e=>{this.show=!1})}_subscribeToDetach(){this.overlayRef.detachments().pipe(Object(l.a)(this._overlayDestroyed)).subscribe(e=>{this.show&&(this.show=!1),this.changeShow.emit(this._show),this.popover.emitClosedEvent()})}_subscribeToAttach(){this.overlayRef.attachments().pipe(Object(l.a)(this._overlayDestroyed)).subscribe(e=>{this.changeShow.emit(this._show)})}waitForClose(){return this._documentClickObservable.pipe(Object(h.a)(e=>e.target),Object(p.a)(e=>!this.elementRef.nativeElement.contains(e)),Object(l.a)(this.popover.closed)).subscribe(()=>{this.show=!1})}positionOverlay(e){"end"===e.originX&&"start"===e.overlayX?this.popover.direction=this.isRtl?"left":"right":"bottom"===e.originY&&"top"===e.overlayY?this.popover.direction="bottom":"start"===e.originX&&"end"===e.overlayX?this.popover.direction=this.isRtl?"right":"left":"top"===e.originY&&"bottom"===e.overlayY&&(this.popover.direction="top")}positionArrow(e){const t=this.elementRef.nativeElement.getBoundingClientRect().left+this.elementRef.nativeElement.getBoundingClientRect().width/2-(this.overlayRef.overlayElement.parentElement.offsetLeft+this.overlayRef.overlayElement.offsetLeft);if(e.originX===e.overlayX){const e={};e.left=t+"px",this.popover.arrowStyle=e}"bottom"!==e.originY&&"top"!==e.originY||"center"!==e.overlayX||(this.popover.arrowStyle={left:t+"px"}),"end"!==e.originX&&"start"!==e.originX||"center"!==e.overlayY||(this.popover.arrowStyle={top:"50%"})}getPosition(){const e=this._getOrigin(this.direction),t=this._getOverlayPosition(this.direction),o=this._getOffset(this.direction),i=this._getFallbackPositions(this.direction);return this.overlay.position().flexibleConnectedTo(this.elementRef).withPositions([Object.assign(Object.assign(Object.assign({},e),t),o),...i])}_returnFocusAfterPopover(){const e=this._elementFocusedBeforePopoverWasOpened;e&&"function"==typeof e.focus&&e.focus()}_getOrigin(e){switch(e){case"top":case"bottom":return{originX:"center",originY:e};case"left":return{originX:this.isRtl?"end":"start",originY:"center"};case"right":return{originX:this.isRtl?"start":"end",originY:"center"};default:throw y(e)}}_getOverlayPosition(e){switch(e){case"top":case"bottom":return{overlayX:"center",overlayY:this._getInversePosition(e)};case"left":return{overlayX:this.isRtl?"start":"end",overlayY:"center"};case"right":return{overlayX:this.isRtl?"end":"start",overlayY:"center"};default:throw y(e)}}_getOffset(e){switch(e){case"top":return{offsetY:-16};case"bottom":return{offsetY:16};case"left":return{offsetX:-16};case"right":return{offsetX:16};default:throw y(e)}}_getInversePopoverDirection(e){return{top:"bottom",right:"left",bottom:"top",left:"right"}[e]}_getInversePosition(e){return{top:"bottom",bottom:"top",start:"end",end:"start",center:"center"}[e]}_getFallbackPositions(e,t=this._possiblePopoverDirections){if(!e)return[];const o=t.filter(t=>t!==e);let i=[];switch(e){case"top":case"bottom":i=this._getVerticalFallbackPositionPairs(e);break;case"left":case"right":i=this._getHorizontalFallbackPositionPairs(e)}const s=this._getInversePopoverDirection(e),r=o.indexOf(s)>-1?s:t[0];return[...i,...this._getFallbackPositions(r,o)]}_getVerticalFallbackPositionPairs(e){const t=e===this.direction,o=[],i=Object.assign(Object.assign(Object.assign({},this._getOrigin(e)),this._getOverlayPosition(e)),this._getOffset(e));return t||o.push(i),o.push(Object.assign(Object.assign({},i),{originX:"start",overlayX:"start"}),Object.assign(Object.assign({},i),{originX:"end",overlayX:"end"})),o}_getHorizontalFallbackPositionPairs(e){const t=this._getOffset(e);return[Object.assign(Object.assign(Object.assign({},this._getOrigin(e)),this._getOverlayPosition(e)),t)]}_dirChangeHandler(){this.overlayRef&&(this.closePopover(),this.overlayRef.dispose(),this.overlayRef=null,this._overlayDestroyed.next())}get isRtl(){var e;return"rtl"===(null===(e=this._dir)||void 0===e?void 0:e.value)}}return e.\u0275fac=function(t){return new(t||e)(n.Nb(s.c),n.Nb(n.l),n.Nb(n.R),n.Nb(b.c),n.Nb(v.h),n.Nb(v.g),n.Nb(n.A),n.Nb(g.a),n.Nb(_.c,8),n.Nb(d.e,8))},e.\u0275dir=n.Ib({type:e,selectors:[["","nxPopoverTriggerFor",""]],hostAttrs:["aria-haspopup","true"],hostVars:2,hostBindings:function(e,t){1&e&&n.ac("click",(function(){return t.handleClick()})),2&e&&n.Cb("aria-expanded",t.isOpen)("aria-describedby",t.isOpen?t.id:null)},inputs:{show:["nxPopoverShow","show"],closeable:["nxPopoverCloseable","closeable"],closeOnClickOutside:"closeOnClickOutside",popover:["nxPopoverTriggerFor","popover"],direction:["nxPopoverDirection","direction"],popoverInitialVisible:["nxPopoverInitialVisible","popoverInitialVisible"],visibleChange:["nxPopoverVisibleChange","visibleChange"],modal:["nxPopoverModal","modal"],trigger:["nxPopoverTrigger","trigger"],scrollStrategy:["nxPopoverScrollStrategy","scrollStrategy"]},outputs:{changeShow:"nxPopoverShowChange"},exportAs:["nxPopoverTrigger"]}),e})()},pT7h:function(e,t,o){"use strict";o.d(t,"a",(function(){return a}));var i=o("HYj3"),s=o("2kYt"),r=o("0FLW"),n=o("EM62");let a=(()=>{class e{}return e.\u0275mod=n.Lb({type:e}),e.\u0275inj=n.Kb({factory:function(t){return new(t||e)},imports:[[s.c,i.f,r.c]]}),e})();o("dWOj"),o("kMq3"),o("e2XY")}}]);