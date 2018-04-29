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
  template: `<div class="cssmenu"><yca-menu class="active" [items]="items"></yca-menu></div>`,
})
class AppComponent {
  items = [
    {
      name: '商品管理',
      path: '/dashboard/sub-shop-product',
      role: 'sub-shop'
    },
    {
      name: '订单管理',
      path: '/dashboard/sub-shop-order',
      role: 'sub-shop'
    },
    {
      name: '系统配置',
      path: '/dashboard/configuration',
      role: 'admin'
    },
    {
      name: '商城管理',
      path: '/dashboard/eshop',
      role: 'admin',
      children: [
        {
          name: '产品',
          path: '/dashboard/eshop/product',
        },
        {
          name: '分类',
          path: '/dashboard/eshop/category',
          children: [
            {
              name: '产品',
              path: '/dashboard/eshop/product',
            },
            {
              name: '分类',
              path: '/dashboard/eshop/category',
            },
            {
              name: '标签',
              path: '/dashboard/eshop/tag',
            },
            {
              name: '品牌',
              path: '/dashboard/eshop/brand',
            },
            {
              name: '套餐',
              path: '/dashboard/eshop/product-bundle',
            },
          ]
        },
        {
          name: '标签',
          path: '/dashboard/eshop/tag',
        },
        {
          name: '品牌',
          path: '/dashboard/eshop/brand',
        },
        {
          name: '套餐',
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
