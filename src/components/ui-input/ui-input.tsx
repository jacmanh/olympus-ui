import { Component, h, Prop, State } from '@stencil/core'
import { nanoid } from 'nanoid'
import { IconList } from '../ui-icon/iconList'

@Component({
  tag: 'ui-input',
  styleUrl: 'ui-input.scss',
  shadow: false,
})
export class UiInput {
  @Prop() type: string
  @Prop() label: string
  @Prop() icon: IconList
  @Prop() success: boolean
  @Prop() error: boolean
  @Prop({ reflect: true, mutable: true }) value: string

  @State() wrapperClass: string

  inputId = nanoid(10)

  componentWillRender() {
    const classNames = ['input-wrapper']
    if (this.value) classNames.push('has-value')
    if (this.success) classNames.push('success')
    if (this.error) classNames.push('error')
    this.wrapperClass = classNames.join(' ')
  }

  handleChange(event: Event) {
    this.value = (event.target as HTMLInputElement).value
  }

  render() {
    return (
      <div class={this.wrapperClass}>
        <input
          id={this.inputId}
          class='input'
          type={this.type}
          value={this.value}
          onInput={e => this.handleChange(e)}
        />
        <label htmlFor={this.inputId}>{this.label}</label>
        {this.success ? (
          <ui-icon name='CheckIcon' />
        ) : this.error ? (
          <ui-icon name='CloseIcon' />
        ) : (
          this.icon && <ui-icon name={this.icon} />
        )}
      </div>
    )
  }
}
