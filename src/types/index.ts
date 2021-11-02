export interface IActivity{
  id: string,
  title: string,
  group: number,
  points: number,
  category: ICategory,
  description?: string
  publisherName: string,
  publisherRa: string,
  images?: string[],
  certificate?: any
}

export interface ICategory{
  id: string,
  group: number,
  label: string,
  points: number,
}

export interface INotification{
  id: string,
  message: string,
  highlight: string,
}

export enum LEFT_ICON_TYPES{
  BACK = 'back',
  MENU = 'menu',
}

export enum RIGHT_ICON_TYPES{
  NONE = 'none',
  FILTER = 'filter',
  CLOCK_ICON = 'clock_icon',
  EDIT_PROFILE = 'edit_profile',
  HELP = 'help'
}