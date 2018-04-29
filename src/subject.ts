import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { IMenuItem } from './interface';

Injectable()
export class MenuSubject extends Subject<IMenuItem> {
  customActiveFn: (mc: IMenuItem) => boolean;
}