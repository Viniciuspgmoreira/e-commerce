import React from 'react'
import '../src/App.css'
import HomePage from '../src/pages/homepage/homepage.component'
import { Route, Switch } from 'react-router-dom'


const Topics = (props) => (
  <div>
    <h1>Topics</h1>
    <button onClick={() => props.history.push('/')}>Click</button>

  </div>
)

const TopcisWithParams = (props) => {

  console.log(props)
  return (
    <div >
      <h2>Topic Details Page: {props.match.params.topicId}</h2>
    </div>

  )
}



function App() {

  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path='/topics' component={Topics}></Route>
        <Route path='/topics/:topicId' component={TopcisWithParams}></Route>
      </Switch>
    </div>
  );
}

export default App;

