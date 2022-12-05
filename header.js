import React, { Component } from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'

export default class MenuExampleVerticalDropdown extends Component {
  state = { activeItem: 'account' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary vertical>
        <Dropdown item text='카테고리'>
          <Dropdown.Menu>
            <Dropdown.Header>드로잉</Dropdown.Header>
            <Dropdown.Item>뜨개질</Dropdown.Item>
            <Dropdown.Item>사진/영상</Dropdown.Item>
            <Dropdown.Item>라이프</Dropdown.Item>
            <Dropdown.Header>뜨개질</Dropdown.Header>
            <Dropdown.Item>대바늘</Dropdown.Item>
            <Dropdown.Item>코바늘</Dropdown.Item>
            <Dropdown.Header>라이프</Dropdown.Header>
            <Dropdown.Item>스포츠</Dropdown.Item>
            <Dropdown.Item>베이킹..</Dropdown.Item>
            <Dropdown.Item>라이프</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        <Menu.Item
          name='CLASS 스토어'
          active={activeItem === 'CLASS 스토어'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='BEST CLASS'
          active={activeItem === 'BEST CLASS'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='신규 CLASS'
          active={activeItem === '신규 CLASS'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='이벤트'
          active={activeItem === '이벤트'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}
