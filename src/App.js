import React from 'react';
import Split from './composition/Split';
import './App.css'
import Tooltip from './composition/Tooltip'
import Messages from './Messages';

const firstTooltip = (
  <Tooltip color='hotpink' message='tooltip message'>
    content
  </Tooltip>
)

const secondTooltip = (
  <Tooltip color='#126BCC' message='another tooltip message'>
    right
  </Tooltip>
)

function App() {
  return (
    <main className='App'>
      <Split className="left" flexBasis={2}>
        Well, this is the {firstTooltip} for the left split. There must be more to this...
        <Tooltip message='one more tooltip message'>
          Aurelius?
        </Tooltip>
      </Split>

      <Split className="right" flexBasis={3}>
        This is the content for the {secondTooltip} split. I bet we find out soon...
      </Split>
      
      <div className='App'>
        <h1>WHAT IS HAPPENING</h1>
        <Messages name="Messages" unread={0}/>
        <Messages name="Notifications" unread={10}/>
      </div>
    </main>
  )
}

export default App;
