import React from 'react' 
import ReactDOM from 'react-dom' 
import Counter from './Counter'

ReactDOM.render(<Counter render={n => <span>{n}</span>}/>, document.body)
