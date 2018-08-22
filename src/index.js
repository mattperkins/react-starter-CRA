import * as React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import './css/style.css'

// main ("ROOT") component 
class Root extends React.Component {

render() {

return (

<div>
<h1>Hello, World!</h1>
</div>

)// end return
}// end render
}// end component

ReactDOM.render(<Root />, 
  document.getElementById('root'))
  registerServiceWorker()
