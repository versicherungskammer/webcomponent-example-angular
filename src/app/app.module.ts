import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { CustomeElementComponent } from './custome-element/custome-element.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [CustomeElementComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [],
  entryComponents: [CustomeElementComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap(): void {
    const { injector } = this;

    const ngCustomElement = createCustomElement(CustomeElementComponent, {
      injector
    });

    customElements.define('ng-hello-world', ngCustomElement);
  }
}
