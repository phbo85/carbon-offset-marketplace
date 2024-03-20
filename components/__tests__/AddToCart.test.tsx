import AddToCart from '../AddToCart'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('AddToCart', () => {
  it('should render', () => {
    render(<AddToCart id={1} max={10} price={2} />)

    expect(screen.getByRole('spinbutton')).toBeInTheDocument()
  })

  it('should calculate price correctly', async () => {
    render(<AddToCart id={1} max={10} price={2} />)

    expect(
      screen.getByRole('button', {
        name: '$20',
      })
    ).toBeInTheDocument()

    const input = screen.getByRole('spinbutton')
    await userEvent.clear(input)
    await userEvent.type(input, '1')

    expect(
      screen.getByRole('button', {
        name: '$2',
      })
    ).toBeInTheDocument()
  })

  it('should not allow to add more than max', async () => {
    render(<AddToCart id={1} max={10} price={2} />)

    const input = screen.getByRole('spinbutton')
    await userEvent.type(input, '11')
    fireEvent.blur(input)

    expect(screen.getByRole('spinbutton')).toHaveAttribute('value', '10')
  })

  it('should disable button after max is added to cart', async () => {
    render(<AddToCart id={1} max={10} price={2} />)

    const input = screen.getByRole('spinbutton')
    await userEvent.type(input, '10')
    await userEvent.click(screen.getByRole('button'))

    expect(screen.getByRole('button')).toBeDisabled()
  })
})
