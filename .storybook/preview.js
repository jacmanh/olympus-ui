import { defineCustomElements } from '../dist/esm/loader'
import './tailwind.css'
import '../dist/olympus-ui/olympus-ui.css'

defineCustomElements()

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
