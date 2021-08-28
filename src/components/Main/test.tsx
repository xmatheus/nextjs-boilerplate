import { render, screen } from '@testing-library/react'
import Main from '.'

describe('<Main />', () => {
  it('should render the Heading ', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /react avançadooo/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
