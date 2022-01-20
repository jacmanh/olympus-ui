import { ButtonColors, ButtonShapes, ButtonSizes } from './ui-button.types'

export default {
  title: 'Atom/ui-button',
  parameters: {},
}

interface ComponentProps {
  color: ButtonColors
  shape: ButtonShapes
  text?: string
}

const getComponent = ({ color = ButtonColors.primary, shape = null, text = null }: ComponentProps) => {
  return Object.keys(ButtonSizes)
    .map(
      key => `
        <div class="grid gap-3">
          <ui-button shape="${shape || ''}" color="${color}" size="${ButtonSizes[key]}">${text || `Button ${key}`}</ui-button>
          <ui-button shape="${shape || ''}" color="${color}" size="${ButtonSizes[key]}" disabled>${text || 'Disabled'}</ui-button>
        </div>
      `,
    )
    .join('')
}

const ListTemplate = (args: ComponentProps) => {
  return `<div class="flex items-start gap-2">
      ${getComponent(args)}
    </div>`
}

export const Primary = ListTemplate.bind({})
Primary.args = {
  name: 'Primary',
  color: 'primary',
}

export const Secondary = ListTemplate.bind({})
Secondary.args = {
  name: 'Secondary',
  color: 'secondary',
}

export const Blue = ListTemplate.bind({})
Blue.args = {
  name: 'Blue',
  color: 'blue',
}

export const Green = ListTemplate.bind({})
Green.args = {
  name: 'Green',
  color: 'green',
}

export const GreenLight = ListTemplate.bind({})
GreenLight.args = {
  name: 'GreenLight',
  color: 'greenLight',
}

export const Purple = ListTemplate.bind({})
Purple.args = {
  name: 'Purple',
  color: 'purple',
}

export const Transparent = ListTemplate.bind({})
Transparent.args = {
  name: 'Transparent',
  color: 'transparent',
}

export const Circle = ListTemplate.bind({})
Circle.args = {
  name: 'Circle',
  shape: 'circle',
  text: 'C',
}
