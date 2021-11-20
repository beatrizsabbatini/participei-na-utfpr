export interface IActivity{
  id: string,
  title: string,
  category: ICategory,
  description?: string
  publisherName: string,
  publisherId: string,
  images?: string[],
  certificate?: any,
  saved?: boolean
}

export interface ICategory{
  id: string | undefined,
  group: number | undefined,
  label: string | undefined,
  points: number | undefined,
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