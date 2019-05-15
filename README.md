# Webkomponente in Angular mit @Angular/Elements

Das Umsetzung dieser Beschreibung ist einem kleinen Beispielprojekt in diesem Repository umgesetzt.

1. Neues Projekt mit Angular CLI anlegen

```
ng new angular-webcomponent
cd angular-webcomponent
```

2. NPM-Pakete für `@angular/elements` und `@webcomponents/custom-elements`.
   `@webcomponents/custom-elements` stellt die benötigten polyfills für den Einsatz in nicht unterstützten Browsern zur Verfügung.

```
npm install @angular/elements @webcomponents/custom-elements --save
```

3. Veröffentlichen einer Komponente als HtmlCustomElement

```javascript
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
```

4. Zur Unterstützung zum Bau eines Singlebundles `ngx-build-plus` installieren.
   Mit `ngx-build-plus` kann die Standardfunktionalität von Angular CLI erweitert werden, ohne das das Projekt aus der CLI verwalteten herausgenommen werden muss.

```
npm install ngx-build-plus --save-dev
```

In der angular.json müssen folgende Änderungen vorgenommen werden.

```
"architect": {
        "build": {
          "builder": "ngx-build-plus:build"
        }
        "serve": {
          "builder": "ngx-build-plus:dev-server"
        }
}
```

5. Falls die Anwendung auf Browsern läuft, die den neuen Standard bereits unterstützen, kann gleich nach ES2015 kompliert werden.
   In der tsconfig.app.json kann unter den compilerOptions als Ziel

```
"target": "es2015"
```

angegeben werden.

6. Läuft die Webkomponente nicht innerhalb einer Angular-Umgebung muss zusätzlich noch `zone.js` zur Change Detection mit eingebunden werden.
   Dies erfolgt mittels import in der main.ts

```javascript
import 'zone.js';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
```

7. Bau der Anwendung

```
ng build --prod --output-hashing none --single-bundle true
```
