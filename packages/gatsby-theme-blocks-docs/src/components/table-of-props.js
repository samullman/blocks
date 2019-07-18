/** @jsx mdx */
import { mdx } from '@mdx-js/react'

const TableOfProps = ({ component }) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      {Object.entries(component.propertyControls)
        .filter(([key]) => key !== 'isVoid')
        .map(([key, value]) => (
          <tr key={key}>
            <td>
              <inlineCode>{key}</inlineCode>
            </td>
            <td>
              <inlineCode>{value.type}</inlineCode>
            </td>
            <td>{value.description || ''}</td>
          </tr>
        ))}
    </tbody>
  </table>
)

TableOfProps.propertyControls = {
  component: {
    type: 'component',
    description: 'Component with static propertyControls'
  }
}

export default TableOfProps