import { Component } from '@angular/core';
import { Input } from '@angular/core';

/** Types of headlines */
export type HeadlineType = 'page' | 'page-bold-caps' | 'section' | 'subsection-large'
                    | 'subsection-medium' | 'subsection-small' | 'subsection-xsmall';

const DEFAULT_TYPE = 'section';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[nxHeadline]',
  template: `<ng-content></ng-content>`,
  styleUrls: ['headline.component.scss'],
  host: {
    '[class.nx-heading--page]': 'type === "page"',
    '[class.nx-heading--page-bold-caps]': 'type === "page-bold-caps"',
    '[class.nx-heading--section]': 'type === "section"',
    '[class.nx-heading--subsection-large]': 'type === "subsection-large"',
    '[class.nx-heading--subsection-medium]': 'type === "subsection-medium"',
    '[class.nx-heading--subsection-small]': 'type === "subsection-small"',
    '[class.nx-heading--subsection-xsmall]': 'type === "subsection-xsmall"',

    '[class.nx-heading--negative]': 'negative',
  }
})

export class NxHeadlineComponent {
  private _classNames: string = '';
  /** @docs-private */
  public type: HeadlineType = DEFAULT_TYPE;
  /** @docs-private */
  public negative: boolean = false;

  /** Changes the type of the headline which affects the visual appearance.
   * You can combine a HeadlineType and 'negative'. */
  @Input('nxHeadline')
  set classNames(value: string) {
    if (this._classNames === value) {
      return;
    }

    this._classNames = value;
    const typeRegex = /page-bold-caps|page|section|subsection-large|subsection-medium|subsection-small|subsection-xsmall/;
    const [type = null] = this._classNames.match(typeRegex) || [DEFAULT_TYPE];
    this.type = type as any;

    this.negative = !!this._classNames.match(/negative/);
  }

  get classNames(): string {
    return this._classNames;
  }
}
