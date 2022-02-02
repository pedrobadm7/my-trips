import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../../store'
import Map from '.'

const mockedStore = store

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(
      <Provider store={mockedStore}>
        <Map />
      </Provider>
    )

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument()
  })

  it('should render with the marker in correct place', () => {
    const place = {
      id: '1',
      name: 'Belo Horizonte',
      slug: 'belohorizonte',
      location: {
        latitude: 0,
        longitude: 0
      }
    }

    const placeTwo = {
      id: '2',
      name: 'Contagem',
      slug: 'contagem',
      location: {
        latitude: 129,
        longitude: -50
      }
    }
    render(
      <Provider store={mockedStore}>
        <Map places={[place, placeTwo]} />
      </Provider>
    )

    expect(screen.getByTitle(/belo horizonte/i)).toBeInTheDocument()
    expect(screen.getByTitle(/contagem/i)).toBeInTheDocument()
  })
})
