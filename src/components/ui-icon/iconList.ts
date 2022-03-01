enum IconListEnum {
  CheckIcon = 'CheckIcon',
  CloseIcon = 'CloseIcon',
  CalendarIcon = 'CalendarIcon',
}

type IconList = keyof typeof IconListEnum

export { IconList, IconListEnum }
