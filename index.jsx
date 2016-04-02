import React from 'react'
import Radios from 'patchkit-radios'

export default class FlagMsgForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { reason: 'spam' }
  }

  componentDidMount() {
    this.props.setIsValid(true)
  }

  onChange(reason) {
    this.setState({ reason: reason })
  }

  submit(cb) {
    this.props.onSubmit(this.state.reason, cb)
  }

  render() {
    return <div>
      <form className="inline" onSubmit={e=>e.preventDefault()}>
        <fieldset>
          <h1><i className="fa fa-flag" /> Flag this Message</h1>
          <div>{"Flagging hides unwanted/negative content. What's your reason for flagging this message?"}</div>
          <Radios group="reason" options={[{ label: 'Spam', value: 'spam', defaultChecked: true }, { label: 'Abusive', value: 'abuse' }]} onChange={this.onChange.bind(this)} />
        </fieldset>
      </form>
    </div>
  }
}