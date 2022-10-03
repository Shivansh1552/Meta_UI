import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MetadataFormComponent } from './home/metadata-form';
import { RouterModule } from '@angular/router';
import { MetadataModule } from './metadata/metadata.module';
import { MetadataListComponent } from './metadata/metadata-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MetadataFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'createMetadata', component: MetadataFormComponent},
      { path: '', redirectTo: 'metadata', pathMatch: 'full' },
      { path: '**', redirectTo: 'metadata', pathMatch: 'full' }
    ]),
    MetadataModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
