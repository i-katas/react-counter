import React from 'react'

const noop = () => {}

export default class Counter extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {count: 0}
  }

  incr() {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    let {render = noop} = this.props
    return (
      <div>
        <button onClick={() => this.incr()}>INCR</button>
        {render(this.state.count)}
      </div>
    )
  }
}
