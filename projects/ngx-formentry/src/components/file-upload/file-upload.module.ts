import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { NgxFileUploaderModule } from 'ngx-file-uploader-ampath2';

import { SharedModule } from '../../shared.module';
// import { SelectModule } from 'ng2-select/ng2-select';
import { SelectModule } from '../../components/select/select.module';
import { RemoteFileUploadComponent } from './file-upload.component';
import { WebcamModule } from 'ngx-webcam';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
    imports: [CommonModule, SelectModule, FormsModule, SharedModule, WebcamModule, NgxFileUploaderModule, PdfViewerModule],
    exports: [RemoteFileUploadComponent],
    declarations: [RemoteFileUploadComponent],
    providers: [],
})
export class RemoteFileUploadModule { }
