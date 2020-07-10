import { BrowserRouter, Switch, Route} from 'react-router-dom';
import React from 'react';
import './index.css';
import './tailwind.output.css';

import Page from './pages/Page';
import ModeSelectionPage from './pages/ModeSelectionPage';
import GamePage from './pages/GamePage';
import EndgamePage from './pages/EndgamePage';


function App() {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Page component={ModeSelectionPage}/>}/>
        <Route exact path="/game" render={() => <Page component={GamePage}/>}/>
        <Route exact path="/fin" render={() => <Page component={EndgamePage}/>}/>
        <Route path="*" render={() => <h1>404 NOT FOUND</h1>}/>
      </Switch>
    </BrowserRouter> 
  );
}

export default App;
