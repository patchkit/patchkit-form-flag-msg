import React from 'react'
import ModalBtn from 'patchkit-modal/btn'
import FormFlagMsg from './index'

export default class FlagMsgFormDemo extends React.Component {
  render() {
    const onSubmit = (reason, cb) => { console.log('submit', reason); cb() }
    return <div>
      <h1>patchkit-form-flag-msg</h1>
      <section className="form-flag-msg">
        <header>&lt;FormFlagMsg&gt;</header>
        <div className="content">
          <ModalBtn className="center-block" Form={FormFlagMsg} formProps={{onSubmit: onSubmit}}><a className="btn highlighted">Click to open</a></ModalBtn>
        </div>
      </section>
    </div>
  }
}