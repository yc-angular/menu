import { Component, Input } from '@angular/core';
import { IMenuItem } from './interface';
import { MenuSubject } from './subject';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'yca-menu',
  template: `<ul [class]="'lv-' + level">
  <li *ngFor="let item of filteredMenu()" [ngClass]="{ active: isActive(item), 'has-sub': item.children && item.children.length }">
    <a (click)="toggleMenuItem(item)"><span>{{ item.label }}</span></a>
    <yca-menu *ngIf="item.children" 
      [ngClass]="{ active: isActive(item) }"
      [items]="item.children" 
      [parent]="item" 
      [level]="level + 1" 
      [filter]="filter" 
      [active]="active">
    </yca-menu>
  </li>
</ul>`,
})
export class MenuComponent {
  @Input() items: IMenuItem[] = [];
  @Input() filter: (items: IMenuItem[]) => IMenuItem[];
  @Input() active: (item: IMenuItem) => boolean;
  @Input() level: number = 0;
  @Input() parent: IMenuItem = null;

  sub: Subscription;

  constructor(
    public ms: MenuSubject,
  ) {
  }

  ngOnInit() {
    this.sub = this.ms.subscribe(x => {
      for (let i of this.items) {
        i.__active = i === x;
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  filteredMenu() {
    if (!this.filter) return this.items;
    return this.filter(this.items);
  }

  toggleMenuItem(item: IMenuItem): void {
    this.ms.next(item);
  }

  isActive(item: IMenuItem): boolean {
    if (this.active) return this.active(item);
    return item.__active || this.isChildActive(item);
  }

  isChildActive(item: IMenuItem): boolean {
    if (!item.children || !item.children.length) return false;
    return item.children.map(x => this.isActive(x)).reduce((a, b) => a || b, false);
  }

}
