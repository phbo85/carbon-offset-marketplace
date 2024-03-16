import AddToCart from '../AddToCart'
import { render, screen } from '@testing-library/react'

describe('AddToCart', () => {
  it('should render', () => {
    render(<AddToCart id={1} max={10} price={2} />)

    expect(screen.getByRole('spinbutton')).toBeInTheDocument()
  })
})
