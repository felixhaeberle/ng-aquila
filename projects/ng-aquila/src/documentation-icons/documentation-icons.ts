// @ts-nocheck
import { ICON_MAPPINGS } from './icon-list';
import  { toString } from '@carbon/icon-helpers';
import { DomSanitizer } from '@angular/platform-browser';

import { NxIconModule, NxIconRegistry } from '@aposin/ng-aquila/icon';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [NxIconModule],
  exports: [],
  providers: [],
})
export class NxDocumentationIconModule {
  constructor(private _iconRegistry: NxIconRegistry, private _sanitizer: DomSanitizer) {
    /* Bypass SVG sanitizing */
    const getSvgString = (svg: any): string => {
      return this._sanitizer.bypassSecurityTrustHtml(toString(svg));
    }

    Object.keys(ICON_MAPPINGS)
    .forEach(iconName =>
      this._iconRegistry.addSvgIconLiteral(iconName, getSvgString(ICON_MAPPINGS[iconName].svg)));
    }
}
