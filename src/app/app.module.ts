import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MetadataFormComponent } from './metadata-create-form/metadata-form.component';
import { RouterModule } from '@angular/router';
import { MetadataModule } from './metadata-dashboard/metadata.module';
import { MetadataListComponent } from './metadata-dashboard/metadata-list.component';
import { AddMetadataComponent } from './add-metadata/add-metadata.component';
import { GetDataComponent } from './get-data/get-data.component';
import { GetDataByIdComponent } from './get-data-by-id/get-data-by-id.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MetadataFormComponent,
    AddMetadataComponent,
    GetDataComponent,
    GetDataByIdComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'createMetadata', component: MetadataFormComponent},
      { path: '', redirectTo: 'metadata', pathMatch: 'full' },
      { path: '**', redirectTo: 'metadata', pathMatch: 'full' },
     // { path: 'add', component: AddMetadataComponent },
      { path: 'getData', component: GetDataComponent },
      { path: 'getData/:id', component: GetDataByIdComponent }
    ]),
    MetadataModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
