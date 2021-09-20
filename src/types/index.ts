export interface IActivity{
  id: string,
  title: string,
  group: number,
  points: number,
  category: string
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