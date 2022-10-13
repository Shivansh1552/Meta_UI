import { Component, OnInit, NgModule, ViewChild, Type, ComponentFactoryResolver,ViewContainerRef, ComponentRef } from '@angular/core';

import { ApiDisplayComponent } from './api-display/api-display.component';

import { StaticContentComponent } from './static-content/static-content.component';

import { StaticPageEntryComponent } from './static-page-entry/static-page-entry.component';




@Component({

  selector: 'app-steps-config',

  templateUrl: './steps-config.component.html',

  styleUrls: ['./steps-config.component.css']

})

export class StepsConfigComponent implements OnInit {

  // getParentApi(): ParentComponentApi {
  //   return {
  //     removeStaticContent() : {
  //       this.removeStaticContent();
  //     }
  //   }
  // }



  constructor() { }



  ngOnInit(): void {

  }



 

 @ViewChild("viewContainerRef", { read: ViewContainerRef }) vcr!: ViewContainerRef;

 ref!: ComponentRef<StaticContentComponent>

 ref1! : ComponentRef<ApiDisplayComponent>

 ref2! : ComponentRef<StaticPageEntryComponent>

 

 AddStaticContent() {

   this.ref = this.vcr.createComponent(StaticContentComponent)

 }



 AddApiDisplay() {

  this.ref1 = this.vcr.createComponent(ApiDisplayComponent)

}



AddStaticPageEntry() {

  this.ref2 = this.vcr.createComponent(StaticPageEntryComponent)

}

 

 removeStaticContent() {

   const index = this.vcr.indexOf(this.ref.hostView)

 

   if (index != -1)

      this.vcr.remove(index)

 }

}

// export interface ParentComponentApi {
//   removeStaticContent() : void
// }