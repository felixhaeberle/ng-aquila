import { FocusMonitor } from '@angular/cdk/a11y';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  ChangeDetectorRef,
  EventEmitter,
  ViewChild,
  Output,
  HostBinding,
  Input,
  ElementRef,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnDestroy
} from '@angular/core';

/** The contextual type of a message. */
export type CONTEXT = 'regular' | 'info' | 'error' | 'success' | 'warning';

const ICONS: { [k: string]: string } = {
  info: 'info-circle',
  error: 'exclamation-triangle',
  success: 'check-circle',
  warning: 'exclamation-circle-warning'
};

@Component({
  selector: 'nx-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'nxMessage'
})
export class NxMessageComponent implements AfterViewInit, OnDestroy  {
  _context: CONTEXT = 'regular';

  @HostBinding('class.context-info')
  get _isInfo() {
    return this._context === 'info';
  }

  @HostBinding('class.context-success')
  get _isSuccess() {
    return this._context === 'success';
  }

  @HostBinding('class.context-warning')
  get _isWarning() {
    return this._context === 'warning';
  }

  @HostBinding('class.context-error')
  get _isError() {
    return this._context === 'error';
  }

  _allowedContexts: CONTEXT[] = ['regular', 'info', 'error', 'warning', 'success'];

  @ViewChild('closeButton') _closeButton!: ElementRef;

  /**
   * Sets the context of the message.
   * The message box will color accordingly. Default: 'regular' */
  @Input('nxContext')
  set context(value: CONTEXT) {
    this._updateContext(value);
  }
  get context(): CONTEXT {
    return this._context as CONTEXT;
  }

  _closable: boolean = false;

  /** Whether a message should have a close icon in order to be dismissed. */
  @HostBinding('class.nx-message--closable')
  @Input()
  set closable(value: boolean) {
    const newValue = coerceBooleanProperty(value);
    if (newValue !== this._closable) {
      this._closable = newValue;
      this._changeDetectorRef.markForCheck();
    }
  }
  get closable(): boolean {
    return this._closable;
  }

  private _closeButtonLabel: string = 'Close dialog';

  /** Sets the label of the close button of the message. */
  @Input()
  set closeButtonLabel(value: string) {
    if (value !== this._closeButtonLabel) {
      this._closeButtonLabel = value;
      this._changeDetectorRef.markForCheck();
    }
  }
  get closeButtonLabel(): string {
    return this._closeButtonLabel;
  }

  /** Event emitted when the close icon of the message has been clicked. */
  @Output('close') closeEvent = new EventEmitter<void>();

  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    private _focusMonitor: FocusMonitor,
  ) {}

  ngAfterViewInit() {
    if (this.closable) {
      this._focusMonitor.monitor(this._closeButton);
    }
  }

  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this._closeButton);
  }

  _emitCloseEvent() {
    this.closeEvent.emit();
  }

  get _iconName(): string {
    const context = this._allowedContexts.indexOf(this._context) >= 0
      ? this._context
      : this._allowedContexts[0];

    return ICONS[context];
  }

  _updateContext(value: CONTEXT) {
    if (value !== this._context) {
      this._context = value;
      this._changeDetectorRef.markForCheck();
    }
  }

  static ngAcceptInputType_closable: BooleanInput;
}
