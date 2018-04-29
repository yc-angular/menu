# @yca/menu

## Installation

To install this library, run:

```bash
$ npm install @yca/menu --save
```

## Consuming your library

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
$ npm install @yca/menu
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { MenuModule } from '@yca/menu';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify your library as an import
    MenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use its components, directives and pipes in your Angular application:

```xml
<!-- You can now use your library component in app.component.html -->
<yca-menu [items]="items"></yca-menu>
```

## Interfaces
```ts
interface IMenuItem {
  label: string;
  children?: IMenuItem[];
  __active?: boolean;
  path?: string;
  [x: string]: any;
}
```

## Inputs
```ts
@Input() items: IMenuItem[] = [];
@Input() filter: (items: IMenuItem[]) => IMenuItem[];
@Input() active: (item: IMenuItem) => boolean;
```

## Subject
```ts
constructor(
  public ms: MenuSubject,
) {
  this.ms.subscribe(x => {
    console.log(x.path);
  })
}
```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Yu Chen](mailto:yu.chen@live.ie)
