import { render } from '@testing-library/react'

import Table from './Table'

test('should render Table component', () => {
  const view = render(
    <Table columns={['First Column', 'Second Column']}>
      <div>
        <div>
          <div>Value 1</div>
          <div>Value 2</div>
        </div>
        <div>
          <div>Value 3</div>
          <div>Value 4</div>
        </div>
      </div>
    </Table>
  )

  expect(view).toMatchSnapshot()
})