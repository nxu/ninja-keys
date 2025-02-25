export interface INinjaAction {
  id: string;
  title: string;
  hotkey?: string;
  handler?: Function;
  mdIcon?: string;
  icon?: string;
  parent?: string;
  keywords?: string;
  children?: string[];
  section?: string;
}
export interface INinjaActionData extends Omit<INinjaAction, 'children'> {
  children?: (INinjaActionData | string)[];
}
