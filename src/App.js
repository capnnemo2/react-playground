import React from 'react';
import Split from './composition/Split';
import './App.css';
import Tooltip from './composition/Tooltip';
import Messages from './Messages';
import {TheDate} from './state/TheDate';
import {Counter} from './state/Counter';
import {HelloWorld} from './state-drills/HelloWorld';
import {Bomb} from './state-drills/Bomb';
import {RouletteGun} from './state-drills/RouletteGun';
import Tabs from './state/Tabs';
import Accordion from './state-drills/Accordion';

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

const tabsProps = [
  { name: 'First tab',
    content: 'This is the content of the first tab.'},
  { name: 'Second tab',
    content: 'This is the content of the second tab. There is more writing here than in the first tab.'},
  { name: 'Third tab',
    content: 'This is the content of the third tab. There is more writing her than in the first tab. There is also more writing here than in the second tab.'}
]

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
        <RouletteGun bulletInChamber={8} />
        <Tabs tabs={tabsProps} />
        <Accordion />
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
