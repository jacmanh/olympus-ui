import { Component, Element, getAssetPath, Prop, Watch } from '@stencil/core'
import { IconList } from './iconList'

@Component({
  tag: 'ui-icon',
  styleUrl: 'ui-icon.scss',
  shadow: false,
  assetsDirs: ['assets'],
})
export class UiIcon {
  @Element() el: HTMLElement
  @Prop() name: IconList

  @Watch('name')
  async getIcon() {
    const iconUrl = getAssetPath(`./assets/${this.name}.svg`)
    const svg = await fetch(iconUrl)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        return response.text()
      })
      .catch(error => {
        console.log(error)
      })

    if (svg) {
      this.el.className = 'icon'
      this.el.innerHTML = svg
    }
  }

  connectedCallback() {
    this.getIcon()
  }
}
