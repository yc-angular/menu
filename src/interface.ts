export interface IMenuItem {
  label: string;
  children?: IMenuItem[];
  __active?: boolean;
  path?: string;
  [x: string]: any;
}