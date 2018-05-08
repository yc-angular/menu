export interface IMenuItem {
  label: string;
  badge?: () => number;
  children?: IMenuItem[];
  __active?: boolean;
  path?: string;
  [x: string]: any;
}