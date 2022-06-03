import { render, screen } from '@testing-library/react'
import Map from '.'

describe('<Map/>', () => {
  it('shoud render without any marker', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', { name: /a js library for interactive maps/i })
    ).toBeInTheDocument()
  })

  it('shoud render with a marker in correct place', () => {
    const place = {
      id: '1',
      name: 'Lisbon',
      slug: 'lisbon',
      location: { lat: 0, long: 0 }
    }
    render(<Map places={[place]} />)
    expect(screen.getByTitle(/lisbon/i)).toBeInTheDocument()
  })
})

