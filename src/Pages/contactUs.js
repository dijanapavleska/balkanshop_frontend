import React from 'react'
import {Form, Field} from 'simple-react-form'


class PostsCreate extends React.Component {
  state = {}

  render() {
    return (
      <div>
        <Form state={this.state} onChange={state => this.setState(state)}>
          <Field fieldName="name" label="Name" type='text' />
    
        </Form>
        <p>My name is {this.state.name}</p>
      </div>
    )
  }
}