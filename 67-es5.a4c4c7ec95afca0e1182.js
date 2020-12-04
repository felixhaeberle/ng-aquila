!function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function t(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{YPO8:function(e,o,i){"use strict";i.r(o),i.d(o,"ModalExamplesModule",(function(){return ae}));var a=i("4TwE"),c=i("kPBv"),l=i("6c6m"),s=i("ydLu"),r=i("6+d8"),u=i("aln5"),d=i("EM62"),m=i("tPQ2"),b=i("XMW0"),p=i("ImiB"),f=i("VqxJ"),h=i("PCf9"),x=i("XEMv"),v=i("6+vd"),g=i("XiE1"),y=i("CSE7");function T(e,t){1&e&&(d.Tb(0,"div",4),d.Tb(1,"h3",5),d.Jc(2,"Basic Modal Dialog"),d.Sb(),d.Tb(3,"p",6),d.Jc(4,"Any content can be included in a modal view and styled as necessary. This example shows some arbitrary components ("),d.Tb(5,"code"),d.Jc(6,"nxHeadline"),d.Sb(),d.Jc(7,", "),d.Tb(8,"code"),d.Jc(9,"nxCopytext"),d.Sb(),d.Jc(10," and "),d.Tb(11,"code"),d.Jc(12,"nx-formfield"),d.Sb(),d.Jc(13,") and styling ("),d.Tb(14,"code"),d.Jc(15,"u-text-center"),d.Sb(),d.Jc(16,")."),d.Sb(),d.Tb(17,"nx-formfield",7),d.Ob(18,"input",8),d.Sb(),d.Tb(19,"nx-formfield",9),d.Ob(20,"input",8),d.Sb(),d.Tb(21,"nx-formfield",10),d.Tb(22,"nx-dropdown"),d.Ob(23,"nx-dropdown-item",11),d.Ob(24,"nx-dropdown-item",12),d.Ob(25,"nx-dropdown-item",13),d.Ob(26,"nx-dropdown-item",14),d.Sb(),d.Sb(),d.Sb())}function S(e,t){if(1&e&&d.Ob(0,"nx-modal",15,16),2&e){d.ec();var n=d.rc(4);d.kc("nxBody",n)}}var w,J=((w=function e(){n(this,e)}).\u0275fac=function(e){return new(e||w)},w.\u0275cmp=d.Hb({type:w,selectors:[["ng-component"]],decls:6,vars:1,consts:[["nxButton","primary","type","button"],["basicModalButton",""],["basicModalBody",""],[3,"nxBody",4,"nxOpenModalOnClick"],[1,"u-text-center"],["nxHeadline","subsection-medium"],["nxCopytext","small"],["nxLabel","First Name"],["nxInput",""],["nxLabel","Last Name"],["nxLabel","Car brand"],["nxValue","BMW"],["nxValue","Audi"],["nxValue","Volvo"],["nxValue","Mini"],[3,"nxBody"],["basicModal",""]],template:function(e,t){if(1&e&&(d.Tb(0,"button",0,1),d.Jc(2,"Show Modal"),d.Sb(),d.Hc(3,T,27,0,"ng-template",null,2,d.Ic),d.Hc(5,S,2,1,"nx-modal",3)),2&e){var n=d.rc(1);d.Bb(5),d.kc("nxOpenModalOnClick",n)}},directives:[m.a,b.a,p.a,f.a,h.b,x.b,v.a,g.a,y.b],encapsulation:2}),w),k=i("6F4J"),C=["template"];function M(e,t){if(1&e){var n=d.Ub();d.Tb(0,"div",2),d.Tb(1,"h3",3),d.Jc(2,"Modal from a template"),d.Sb(),d.Tb(3,"p",4),d.Jc(4,"This content is placed within the "),d.Tb(5,"code"),d.Jc(6,"nx-modal-container"),d.Sb(),d.Sb(),d.Sb(),d.Tb(7,"div",5),d.Tb(8,"button",6),d.ac("click",(function(){return d.vc(n),d.ec().closeDialog("Cancel")})),d.Jc(9,"Cancel"),d.Sb(),d.Tb(10,"button",7),d.Jc(11,"Proceed"),d.Sb(),d.Sb()}}var R,B=((R=function(){function e(t){n(this,e),this.dialogService=t}return t(e,[{key:"openFromTemplate",value:function(){var e=this;this.dialogRef=this.dialogService.open(this.templateRef,{ariaLabel:"A simple modal",showCloseIcon:!0}),this.dialogRef.afterClosed().subscribe((function(t){e.actionResult=t}))}},{key:"closeDialog",value:function(e){this.dialogRef.close(e)}}]),e}()).\u0275fac=function(e){return new(e||R)(d.Nb(r.a))},R.\u0275cmp=d.Hb({type:R,selectors:[["ng-component"]],viewQuery:function(e,t){var n;1&e&&d.Nc(C,!0),2&e&&d.qc(n=d.bc())&&(t.templateRef=n.first)},decls:6,vars:1,consts:[["nxButton","",1,"nx-margin-right-xs",3,"click"],["template",""],["nxModalContent",""],["nxHeadline","subsection-medium"],["nxCopytext","small"],["nxModalActions",""],["nxButton","small secondary","type","button",1,"nx-margin-bottom-0","nx-margin-right-xs",3,"click"],["nxModalClose","Proceed","nxButton","small","type","button",1,"nx-margin-bottom-0"]],template:function(e,t){1&e&&(d.Tb(0,"button",0),d.ac("click",(function(){return t.openFromTemplate()})),d.Jc(1,"open modal"),d.Sb(),d.Ob(2,"br"),d.Jc(3),d.Hc(4,M,12,0,"ng-template",null,1,d.Ic)),2&e&&(d.Bb(3),d.Lc("\nThe user clicked on: ",t.actionResult," "))},directives:[m.a,y.c,p.a,f.a,y.a,k.a],styles:[""]}),R),H=["template"];function D(e,t){1&e&&(d.Tb(0,"div",2),d.Tb(1,"h3",3),d.Jc(2,"No close on click outside"),d.Sb(),d.Tb(3,"p",4),d.Jc(4,"This modal view will not close on click outside or ESC. You need to use the action buttons."),d.Sb(),d.Sb(),d.Tb(5,"div",5),d.Tb(6,"button",6),d.Jc(7,"Cancel"),d.Sb(),d.Tb(8,"button",7),d.Jc(9,"Proceed"),d.Sb(),d.Sb())}var L,O=((L=function(){function e(t){n(this,e),this.dialogService=t}return t(e,[{key:"openFromTemplate",value:function(){this.dialogService.open(this.templateRef,{ariaLabel:"A simple modal",disableClose:!0})}}]),e}()).\u0275fac=function(e){return new(e||L)(d.Nb(r.a))},L.\u0275cmp=d.Hb({type:L,selectors:[["ng-component"]],viewQuery:function(e,t){var n;1&e&&d.Nc(H,!0),2&e&&d.qc(n=d.bc())&&(t.templateRef=n.first)},decls:5,vars:0,consts:[["nxButton","",1,"nx-margin-right-xs",3,"click"],["template",""],["nxModalContent",""],["nxHeadline","subsection-medium"],["nxCopytext","small"],["nxModalActions",""],["nxModalClose","","nxButton","small secondary","type","button",1,"nx-margin-bottom-0","nx-margin-right-xs"],["nxModalClose","","nxButton","small","type","button",1,"nx-margin-bottom-0"]],template:function(e,t){1&e&&(d.Tb(0,"button",0),d.ac("click",(function(){return t.openFromTemplate()})),d.Jc(1,"open modal"),d.Sb(),d.Ob(2,"br"),d.Hc(3,D,10,0,"ng-template",null,1,d.Ic))},directives:[m.a,y.c,p.a,f.a,y.a,k.a],styles:[""]}),L),N=["template"];function F(e,t){1&e&&(d.Tb(0,"div",2),d.Tb(1,"h3",3),d.Jc(2,"Modal with Disclaimer"),d.Sb(),d.Tb(3,"p",4),d.Jc(4,"Conditions and Disclaimer"),d.Sb(),d.Tb(5,"p",5),d.Jc(6," Some copy text that describes what this overlay is all about. This text provides the user with additional information and lorem ipsum dolor is max. three lines long. "),d.Sb(),d.Tb(7,"p",4),d.Jc(8,"In case of an accident"),d.Sb(),d.Tb(9,"p",5),d.Jc(10," Some copy text that describes what this overlay is all about. Tdiam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing Some copy text that describes what this overlay is all about. Tdiam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing et justo duo dolores et ea rebum. "),d.Sb(),d.Sb(),d.Tb(11,"div",6),d.Tb(12,"button",7),d.Jc(13,"Disagree"),d.Sb(),d.Tb(14,"button",8),d.Jc(15,"Agree"),d.Sb(),d.Sb())}var I,A=((I=function(){function e(t){n(this,e),this.dialogService=t}return t(e,[{key:"openFromTemplate",value:function(){var e=this;this.dialogRef=this.dialogService.open(this.templateRef,{ariaLabel:"A modal with content and actions sections",showCloseIcon:!0}),this.dialogRef.afterClosed().subscribe((function(t){e.actionResult=t}))}},{key:"closeDialog",value:function(e){this.dialogRef.close(e)}}]),e}()).\u0275fac=function(e){return new(e||I)(d.Nb(r.a))},I.\u0275cmp=d.Hb({type:I,selectors:[["ng-component"]],viewQuery:function(e,t){var n;1&e&&d.Nc(N,!0),2&e&&d.qc(n=d.bc())&&(t.templateRef=n.first)},decls:6,vars:1,consts:[["nxButton","",1,"nx-margin-right-xs",3,"click"],["template",""],["nxModalContent",""],["nxHeadline","subsection-medium",1,"disclaimer__headline"],["nxCopytext","",1,"disclaimer__section-headline"],["nxCopytext",""],["nxModalActions",""],["nxModalClose","Disagree","nxButton","small secondary","type","button",1,"nx-margin-bottom-0","nx-margin-right-xs"],["nxModalClose","Agree","nxButton","small","type","button",1,"nx-margin-bottom-0"]],template:function(e,t){1&e&&(d.Tb(0,"button",0),d.ac("click",(function(){return t.openFromTemplate()})),d.Jc(1,"open dialog"),d.Sb(),d.Ob(2,"br"),d.Jc(3),d.Hc(4,F,16,0,"ng-template",null,1,d.Ic)),2&e&&(d.Bb(3),d.Lc("\nThe user clicked on: ",t.actionResult," "))},directives:[m.a,y.c,p.a,f.a,y.a,k.a],styles:[""]}),I),j=["template"];function q(e,t){if(1&e&&(d.Tb(0,"div"),d.Tb(1,"h3",2),d.Jc(2,"Modal with injected data"),d.Sb(),d.Tb(3,"p",3),d.Jc(4),d.Sb(),d.Sb()),2&e){var n=t.$implicit;d.Bb(4),d.Lc("Injected data: ",n.name,"")}}var P,E=((P=function(){function e(t){n(this,e),this.dialogService=t}return t(e,[{key:"openFromTemplate",value:function(){var e=this;this.dialogRef=this.dialogService.open(this.templateRef,{showCloseIcon:!0,ariaLabel:"A modal with injected data",data:{name:"Max Mustermann"}}),this.dialogRef.afterClosed().subscribe((function(t){e.actionResult=t}))}},{key:"closeDialog",value:function(){this.dialogRef.close()}}]),e}()).\u0275fac=function(e){return new(e||P)(d.Nb(r.a))},P.\u0275cmp=d.Hb({type:P,selectors:[["ng-component"]],viewQuery:function(e,t){var n;1&e&&d.Nc(j,!0),2&e&&d.qc(n=d.bc())&&(t.templateRef=n.first)},decls:4,vars:0,consts:[["nxButton","",1,"nx-margin-right-xs",3,"click"],["template",""],["nxHeadline","subsection-medium",1,"disclaimer__headline"],["nxCopytext",""]],template:function(e,t){1&e&&(d.Tb(0,"button",0),d.ac("click",(function(){return t.openFromTemplate()})),d.Jc(1,"open modal with injected data"),d.Sb(),d.Hc(2,q,5,1,"ng-template",null,1,d.Ic))},directives:[m.a,p.a,f.a],styles:[""]}),P),Q=["template"];function _(e,t){1&e&&(d.Tb(0,"p",2),d.Jc(1,"I am a modal dialog with a smaller width of 350px."),d.Sb())}var V,U=((V=function(){function e(t){n(this,e),this.dialogService=t}return t(e,[{key:"openFromTemplate",value:function(){this.dialogService.open(this.templateRef,{showCloseIcon:!0,ariaLabel:"A modal with fixed width",width:"350px"})}}]),e}()).\u0275fac=function(e){return new(e||V)(d.Nb(r.a))},V.\u0275cmp=d.Hb({type:V,selectors:[["ng-component"]],viewQuery:function(e,t){var n;1&e&&d.Nc(Q,!0),2&e&&d.qc(n=d.bc())&&(t.templateRef=n.first)},decls:4,vars:0,consts:[["nxButton","",3,"click"],["template",""],["nxCopytext",""]],template:function(e,t){1&e&&(d.Tb(0,"button",0),d.ac("click",(function(){return t.openFromTemplate()})),d.Jc(1,"open fixed width modal"),d.Sb(),d.Hc(2,_,2,0,"ng-template",null,1,d.Ic))},directives:[m.a,f.a],styles:[""]}),V),X=["template"],W=["template2"];function Y(e,t){if(1&e){var n=d.Ub();d.Tb(0,"div",3),d.Tb(1,"h3",4),d.Jc(2,"Modal from a template"),d.Sb(),d.Tb(3,"p",5),d.Jc(4,"This content is placed within the "),d.Tb(5,"code"),d.Jc(6,"nx-modal-container"),d.Sb(),d.Sb(),d.Tb(7,"button",1),d.ac("click",(function(){return d.vc(n),d.ec().closeTemplateDialog()})),d.Jc(8,"Close Modal"),d.Sb(),d.Sb()}}var K,$,z=(($=function e(){n(this,e)}).\u0275fac=function(e){return new(e||$)},$.\u0275cmp=d.Hb({type:$,selectors:[["ng-component"]],decls:5,vars:0,consts:[[1,"u-text-center"]],template:function(e,t){1&e&&(d.Tb(0,"div",0),d.Tb(1,"h3"),d.Jc(2,"Modal Dialog from a component "),d.Sb(),d.Tb(3,"p"),d.Jc(4," Any content can be included in a modal view and styled as necessary. "),d.Sb(),d.Sb())},encapsulation:2}),$),G=((K=function(){function e(t){n(this,e),this.dialogService=t}return t(e,[{key:"openFromTemplate",value:function(){this.templateDialogRef=this.dialogService.open(this.templateRef,{ariaLabel:"A simple dialog"})}},{key:"openFromComponent",value:function(){this.componentDialogRef=this.dialogService.open(z,{ariaLabel:"A simple dialog",showCloseIcon:!0})}},{key:"closeTemplateDialog",value:function(){this.templateDialogRef.close()}}]),e}()).\u0275fac=function(e){return new(e||K)(d.Nb(r.a))},K.\u0275cmp=d.Hb({type:K,selectors:[["ng-component"]],viewQuery:function(e,t){var n;1&e&&(d.Nc(X,!0),d.Nc(W,!0)),2&e&&(d.qc(n=d.bc())&&(t.templateRef=n.first),d.qc(n=d.bc())&&(t.templateRef2=n.first))},decls:6,vars:0,consts:[["nxButton","",1,"nx-margin-right-xs",3,"click"],["nxButton","",3,"click"],["template",""],[1,"centered-content"],["nxHeadline","subsection-medium"],["nxCopytext","small"]],template:function(e,t){1&e&&(d.Tb(0,"button",0),d.ac("click",(function(){return t.openFromTemplate()})),d.Jc(1,"open from template"),d.Sb(),d.Tb(2,"button",1),d.ac("click",(function(){return t.openFromComponent()})),d.Jc(3,"open from component"),d.Sb(),d.Hc(4,Y,9,0,"ng-template",null,2,d.Ic))},directives:[m.a,p.a,f.a],styles:[".centered-content[_ngcontent-%COMP%]{display:flex;flex-direction:column}"]}),K),Z=i("E5oP"),ee=["template"];function te(e,t){if(1&e){var n=d.Ub();d.Tb(0,"div",2),d.Tb(1,"h3",3),d.Jc(2,"Modal with configured locale direction"),d.Sb(),d.Tb(3,"p",4),d.Jc(4,"This content is placed within the "),d.Tb(5,"code"),d.Jc(6,"nx-modal-container"),d.Sb(),d.Sb(),d.Tb(7,"button",0),d.ac("click",(function(){return d.vc(n),d.ec().closeTemplateDialog()})),d.Jc(8,"Close Modal"),d.Sb(),d.Sb()}}var ne,oe=((ne=function(){function e(t,o){n(this,e),this.dialogService=t,this.dir=o}return t(e,[{key:"openFromTemplate",value:function(){this.templateDialogRef=this.dialogService.open(this.templateRef,{ariaLabel:"Dialog with direction",direction:this.dir.value})}},{key:"closeTemplateDialog",value:function(){this.templateDialogRef.close()}}]),e}()).\u0275fac=function(e){return new(e||ne)(d.Nb(r.a),d.Nb(Z.c))},ne.\u0275cmp=d.Hb({type:ne,selectors:[["ng-component"]],viewQuery:function(e,t){var n;1&e&&d.Nc(ee,!0),2&e&&d.qc(n=d.bc())&&(t.templateRef=n.first)},decls:4,vars:0,consts:[["nxButton","",3,"click"],["template",""],[1,"centered-content"],["nxHeadline","subsection-medium"],["nxCopytext","small"]],template:function(e,t){1&e&&(d.Tb(0,"button",0),d.ac("click",(function(){return t.openFromTemplate()})),d.Jc(1,"Open modal with direction"),d.Sb(),d.Hc(2,te,9,0,"ng-template",null,1,d.Ic))},directives:[m.a,p.a,f.a],styles:[".centered-content[_ngcontent-%COMP%]{display:flex;flex-direction:column}"]}),ne);i("gO+g");var ie,ae=((ie=function(){function e(){n(this,e)}return t(e,null,[{key:"components",value:function(){return{"modal-basic":J,"modal-closing":B,"modal-closing-behaviour":O,"modal-content-actions":A,"modal-data-injection":E,"modal-fixed-width":U,"modal-opening":G,"modal-with-direction":oe}}}]),e}()).\u0275mod=d.Lb({type:ie}),ie.\u0275inj=d.Kb({factory:function(e){return new(e||ie)},imports:[[r.b.forRoot(),s.b,l.b,c.b,a.a,u.a]]}),ie)}}])}();