import React from 'react'
import Radios from 'patchkit-radios'
import t from 'patchwork-translations'

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
          <h1><i className="fa fa-flag" /> {t('flag.FlagThisMsg')}</h1>
          <div>{t('flag.FlagMsgInfo')}</div>
          <Radios group="reason" options={[{ label: t('flag.Spam'), value: 'spam', defaultChecked: true }, { label: t('flag.Abusive'), value: 'abuse' }]} onChange={this.onChange.bind(this)} />
        </fieldset>
      </form>
    </div>
  }
}