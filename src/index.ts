import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideModule } from '@yca/slide';
import { MenuComponent } from './component';
import { MenuSubject } from './subject';

export * from './component';
export * from './subject';
export * from './interface';

@NgModule({
  imports: [
    CommonModule,
    SlideModule.forRoot(),
  ],
  declarations: [
    MenuComponent,
  ],
  providers: [MenuSubject],
  exports: [
    MenuComponent,
  ]
})
export class MenuModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MenuModule,
      providers: [MenuSubject],
    };
  }
}
