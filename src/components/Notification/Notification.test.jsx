import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Notification from './Notification'

const ChildComponent = ({ showNotification }) => (
  <div>
    <button
      onClick={() => showNotification('Success Message', false)}
      data-testid='success-button'
    >
      Show success message
    </button>

    <button
      onClick={() => showNotification('Error Message', true)}
      data-testid='error-button'
    >
      Show error message
    </button>
  </div>
)

describe('Notification', () => {
  it('should show a success message when showNotification is called', async () => {
    render(
      <Notification>
        <ChildComponent />
      </Notification>
    )

    const successButton = screen.getByTestId('success-button')
    await userEvent.click(successButton)

    expect(screen.getByText('Success Message')).toBeInTheDocument()
  })

  it('should show an error message when showNotification is called', async () => {
    render(
      <Notification>
        <ChildComponent />
      </Notification>
    )

    const errorButton = screen.getByTestId('error-button')
    await userEvent.click(errorButton)

    expect(screen.getByText('Error Message')).toBeInTheDocument()
  })
})