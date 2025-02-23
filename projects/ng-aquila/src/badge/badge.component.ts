
import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { coerceBooleanProperty, BooleanInput } from '@angular/cdk/coercion';
/** Possible badge types. */
export type NxBadgeType = 'active' | 'positive' | 'critical' | 'negative' | '';

@Component({
  selector: 'nx-badge',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./badge.component.scss'],
  host: {
    '[class.nx-badge--active]': 'type === "active"',
    '[class.nx-badge--positive]': 'type === "positive"',
    '[class.nx-badge--critical]': 'type === "critical"',
    '[class.nx-badge--negative]': 'type === "negative"',
    '[class.nx-badge--vibrant]': 'vibrant'
  }
})
export class NxBadgeComponent {
  private _type!: NxBadgeType;
  private _vibrant: boolean = false;

  constructor(private _changeDetRef: ChangeDetectorRef) { }

  /** Sets the class name for the badge element.  */
  @Input()
  set type(value: NxBadgeType) {
    if (value !== this._type) {
      this._type = value;
      this._changeDetRef.markForCheck();
    }
  }
  get type(): NxBadgeType {
    return this._type;
  }
  /** Change badge style to vibrant. */
  @Input()
  set vibrant(value: boolean) {
    const newValue = coerceBooleanProperty(value);

    if (value !== this._vibrant) {
      this._vibrant = newValue;
      this._changeDetRef.markForCheck();
    }
  }
  get vibrant(): boolean {
    return this._vibrant;
  }

  static ngAcceptInputType_vibrant: BooleanInput;
  static ngAcceptInputType_type: BooleanInput;
}
