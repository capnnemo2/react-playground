import React from 'react';
import Split from './composition/Split';
import './App.css';
import Tooltip from './composition/Tooltip';
import Messages from './Messages';
import {TheDate} from './state/TheDate';
import {Counter} from './state/Counter';
import {HelloWorld} from './state-drills/HelloWorld';
import {Bomb} from './state-drills/Bomb';
import {RouletteGun} from './state-drills/RouletteGun'

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
      <Split className="left" flexBasis={1}>
        Well, this is the {firstTooltip} for the left split. There must be more to this...
        <Tooltip message='one more tooltip message'>
          Aurelius?
        </Tooltip>
        <br />
        <br />
        <br />
        <Counter count={123} step={5} />
        <br />
        <br />
        <br />
        <HelloWorld />
        <br />
        <br />
        <br />
        <Bomb count={0} />
      </Split>

      <Split className="right" flexBasis={1}>
        This is the content for the {secondTooltip} split. I bet we find out soon...
        <RouletteGun />
      </Split>
      
      <div>
        <TheDate />
        <Messages name="Messages" unread={0}/>
        <Messages name="Notifications" unread={10}/>
      </div>

    </main>
  )
}

export default App;
