import { newSpecPage } from '@stencil/core/testing'
import { UiButton } from './ui-button'

describe('<ui-button />', () => {
  test('it should renders', async () => {
    const page = await newSpecPage({
      components: [UiButton],
      html: '<ui-button></ui-button>',
    })

    expect(page.root).toBeInTheDocument()
  })

  test('it should render with Primary styles (default)', async () => {
    const page = await newSpecPage({
      components: [UiButton],
      html: '<ui-button></ui-button>',
    })
    const button = page.root
    expect(button).toHaveClass('primary', 'md')
    expect(button).toMatchSnapshot()
  })

  test('it should render with Secondary styles', async () => {
    const page = await newSpecPage({
      components: [UiButton],
      html: '<ui-button color="secondary"></ui-button>',
    })
    const button = page.root
    expect(button).toHaveClass('secondary')
    expect(button).toMatchSnapshot()
  })

  test('it should render with "xs" styles', async () => {
    const page = await newSpecPage({
      components: [UiButton],
      html: '<ui-button size="xs"></ui-button>',
    })
    const button = page.root
    expect(button).toHaveClass('xs')
    expect(button).toMatchSnapshot()
  })

  test('it should render with "sm" styles', async () => {
    const page = await newSpecPage({
      components: [UiButton],
      html: '<ui-button size="sm"></ui-button>',
    })
    const button = page.root
    expect(button).toHaveClass('sm')
    expect(button).toMatchSnapshot()
  })
})
