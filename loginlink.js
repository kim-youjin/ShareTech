import React from 'react'
import { List } from 'semantic-ui-react'

const ListExampleFloatedHorizontal = () => (
  <div>
    <List floated='right' horizontal style={{padding: 30}}>
      <List.Item disabled href='#'>
      </List.Item>
      <List.Item href='#'>Login</List.Item>
      <List.Item href='#'>회원가입</List.Item>
    </List>
  </div>
)

export default ListExampleFloatedHorizontal
