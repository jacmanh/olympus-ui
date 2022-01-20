import { Component, h, Host, Prop } from '@stencil/core'
import { ButtonColorProps, ButtonShapesProps, ButtonSizeProps } from './ui-button.types'

@Component({
  tag: 'ui-button',
  styleUrl: 'ui-button.scss',
  shadow: true,
})
export class UiButton {
  @Prop() color: ButtonColorProps
  @Prop() size: ButtonSizeProps
  @Prop() shape: ButtonShapesProps

  getClassNames() {
    const color = this.color || 'primary'
    const size = this.size || 'md'
    const shape = this.shape || ''
    return [color, size, shape].join(' ')
  }

  render() {
    return (
      <Host class={this.getClassNames()}>
        <slot />
      </Host>
    )
  }
}
