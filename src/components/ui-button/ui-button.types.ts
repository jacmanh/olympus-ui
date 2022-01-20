export enum ButtonColors {
  primary = 'primary',
  secondary = 'secondary',
  green = 'green',
  greenLight = 'greenLight',
  blue = 'blue',
  purple = 'purple',
  transparent = 'transparent',
}
export enum ButtonSizes {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
}
export enum ButtonShapes {
  circle = 'circle',
}

export type ButtonColorProps = keyof typeof ButtonColors
export type ButtonSizeProps = keyof typeof ButtonSizes
export type ButtonShapesProps = keyof typeof ButtonShapes | null
