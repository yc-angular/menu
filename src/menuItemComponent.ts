// import { Component, Input, OnInit, OnDestroy } from '@angular/core';
// import { MenuSubject } from './subject';
// import { Subscription } from 'rxjs/Subscription';

// @Component({
//   selector: 'yca-menu-item',
//   template: `<a (click)="toggleMenuItem(item)"><span>{{ item.name }}</span></a>
//     <div [class]="'level-' + level">
//     <yca-menu-item *ngFor="let"
//       [label]="item.subs" 
//       [parent]="item" 
//       [level]="level + 1" 
//       [filter]="filter" 
//       [active]="active">
//     </yca-menu>
//   </li>
// </ul>`,
// })
// export class MenuComponent implements OnInit, OnDestroy {
//   @Input() label: string;
//   @Input() path: string;
//   @Input() level: number = 0;
//   @Input() parent: MenuComponent = null;
//   @Input() children: MenuComponent[] = [];
//   active: boolean;
//   sub: Subscription;

//   constructor(
//     public ms: MenuSubject,
//   ) {
//   }

//   ngOnInit() {
//     this.sub = this.ms.subscribe(x => {
//       this.active = x === this;
//     });
//   }

//   ngOnDestroy() {
//     this.sub.unsubscribe();
//   }

//   toggleMenuItem(): void {
//     this.ms.next(this);
//   }

//   isActive(): boolean {
//     if (this.ms.customActiveFn) return this.ms.customActiveFn(this);
//     return this.active || this.children
//       .map(x => x.isActive())
//       .reduce((a, b) => a || b, false);
//   }
// }
