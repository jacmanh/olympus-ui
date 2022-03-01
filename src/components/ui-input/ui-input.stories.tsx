import { IconListEnum } from '../ui-icon/iconList'

export default {
  title: 'Atom/ui-input',
  args: {
    label: 'Email',
    value: 'Ma Valeur',
  },
  argTypes: {
    state: {
      options: ['success', 'error'],
      control: { type: 'select' },
    },
    icon: {
      options: Object.values(IconListEnum),
      control: { type: 'select' },
    },
  },
}

export const Text = ({ label, icon, state, value }) => {
  const attributes = []
  if (label) attributes.push(`label="${label}"`)
  if (value) attributes.push(`value="${value}"`)
  if (icon) attributes.push(`icon="${icon}"`)
  if (state) attributes.push(state)

  return `<ui-input type="text" ${attributes.join(' ')} />`
}
