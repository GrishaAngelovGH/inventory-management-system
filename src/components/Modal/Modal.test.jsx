import { render } from '@testing-library/react'

import Modal from './Modal'

test('should render Modal component', () => {
  const view = render(
    <Modal title="Modal Title">
      <p>Modal content</p>
    </Modal>
  )

  expect(view).toMatchSnapshot()
})