import { NxRadioToggleModule } from '@aposin/ng-aquila/radio-toggle';
import { NxIconModule } from '@aposin/ng-aquila/icon';
import { NxFileUploaderModule } from '@aposin/ng-aquila/file-uploader';
import { NxRadioModule } from '@aposin/ng-aquila/radio-button';

import { NgModule } from '@angular/core';
import { FileUploaderAutoExampleComponent } from './file-uploader-auto/file-uploader-auto-example';
import { FileUploaderBasicExampleComponent } from './file-uploader-basic/file-uploader-basic-example';
import { FileUploaderDropZoneExampleComponent } from './file-uploader-drop-zone/file-uploader-drop-zone-example';
import { FileUploaderIntlExampleComponent } from './file-uploader-intl/file-uploader-intl-example';
import { FileUploaderReactiveExampleComponent } from './file-uploader-reactive/file-uploader-reactive-example';
import { FileUploaderSeparateRequestsExampleComponent } from './file-uploader-separate-requests/file-uploader-separate-requests-example';
import { FileUploaderTemplateDrivenExampleComponent } from './file-uploader-template-driven/file-uploader-template-driven-example';
import { FileUploaderTypeValidationExampleComponent } from './file-uploader-type-validation/file-uploader-type-validation-example';
import { FileUploaderValidationExampleComponent } from './file-uploader-validation/file-uploader-validation-example';
import { FileUploaderWithRequestExampleComponent } from './file-uploader-with-request/file-uploader-with-request-example';
import { FileUploaderCustomItemExampleComponent } from './file-uploader-custom-item/file-uploader-custom-item-example';
import { ExamplesSharedModule } from '../examples-shared.module';
import { FileUploaderMaxFileNumberExampleComponent } from './file-uploader-max-file-number/file-uploader-max-file-number-example';
import { FileUploaderExpertExampleComponent } from './file-uploader-expert/file-uploader-expert-example';
import { NxFormfieldModule } from '@aposin/ng-aquila/formfield';
import { NxButtonModule } from '@aposin/ng-aquila/button';
import { NxInputModule } from '@aposin/ng-aquila/input';


const EXAMPLES = [
  FileUploaderAutoExampleComponent,
  FileUploaderBasicExampleComponent,
  FileUploaderDropZoneExampleComponent,
  FileUploaderIntlExampleComponent,
  FileUploaderReactiveExampleComponent,
  FileUploaderSeparateRequestsExampleComponent,
  FileUploaderTemplateDrivenExampleComponent,
  FileUploaderTypeValidationExampleComponent,
  FileUploaderValidationExampleComponent,
  FileUploaderWithRequestExampleComponent,
  FileUploaderMaxFileNumberExampleComponent,
  FileUploaderCustomItemExampleComponent,
  FileUploaderExpertExampleComponent
];

@NgModule({
  imports: [
    NxFileUploaderModule,
    NxIconModule,
    NxRadioModule,
    NxButtonModule,
    NxRadioToggleModule,
    ExamplesSharedModule,
    NxFormfieldModule,
    NxInputModule
  ],
  declarations: [EXAMPLES],
  exports: [EXAMPLES],
})
export class FileExamplesModule {
  static components() {
    return {
      'file-uploader-auto': FileUploaderAutoExampleComponent,
      'file-uploader-basic': FileUploaderBasicExampleComponent,
      'file-uploader-drop-zone': FileUploaderDropZoneExampleComponent,
      'file-uploader-intl': FileUploaderIntlExampleComponent,
      'file-uploader-reactive': FileUploaderReactiveExampleComponent,
      'file-uploader-separate-requests': FileUploaderSeparateRequestsExampleComponent,
      'file-uploader-template-driven': FileUploaderTemplateDrivenExampleComponent,
      'file-uploader-type-validation': FileUploaderTypeValidationExampleComponent,
      'file-uploader-validation': FileUploaderValidationExampleComponent,
      'file-uploader-with-request': FileUploaderWithRequestExampleComponent,
      'file-uploader-max-file-number': FileUploaderMaxFileNumberExampleComponent,
      'file-uploader-custom-item': FileUploaderCustomItemExampleComponent,
      'file-uploader-expert': FileUploaderExpertExampleComponent,
    };
  }
}
