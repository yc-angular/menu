/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { MenuModule, MenuSubject }  from '@yca/menu';

@Component({
  selector: 'app',
  template: `<yca-menu class="active" [items]="items"></yca-menu>`,
})
class AppComponent {
  items = [
    {
      label: '商品管理',
      path: '/dashboard/sub-shop-product',
      role: 'sub-shop'
    },
    {
      label: '订单管理',
      path: '/dashboard/sub-shop-order',
      role: 'sub-shop'
    },
    {
      label: '系统配置',
      path: '/dashboard/configuration',
      role: 'admin'
    },
    {
      label: '商城管理',
      path: '/dashboard/eshop',
      role: 'admin',
      children: [
        {
          label: '产品',
          path: '/dashboard/eshop/product',
        },
        {
          label: '分类',
          path: '/dashboard/eshop/category',
          children: [
            {
              label: '产品',
              path: '/dashboard/eshop/product',
            },
            {
              label: '分类',
              path: '/dashboard/eshop/category',
            },
            {
              label: '标签',
              path: '/dashboard/eshop/tag',
            },
            {
              label: '品牌',
              path: '/dashboard/eshop/brand',
            },
            {
              label: '套餐',
              path: '/dashboard/eshop/product-bundle',
            },
          ]
        },
        {
          label: '标签',
          path: '/dashboard/eshop/tag',
        },
        {
          label: '品牌',
          path: '/dashboard/eshop/brand',
        },
        {
          label: '套餐',
          path: '/dashboard/eshop/product-bundle',
        },
      ]
    },
  ];

  constructor(
    public ms: MenuSubject,
  ) {
    this.ms.subscribe(x => {
      console.log(x.path);
    })
  }
}

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [ BrowserModule, MenuModule, ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
