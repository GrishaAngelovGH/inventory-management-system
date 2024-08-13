import { render } from '@testing-library/react'

import Layout from './Layout'

test('should render Layout component', () => {
  const view = render(
    <Layout sidebar={<div>Sidebar</div>}>
      <div>Page</div>
    </Layout>
  )

  expect(view).toMatchSnapshot()
})