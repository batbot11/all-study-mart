import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import HomePage from './containers/homePage/HomePage';

import GGSIPUBBA from './components/notesTable/ipu/bba/IPU_BBA';
import IPU_BCOM from './components/notesTable/ipu/bcom/IPU_BCOM';
import IPU_MBA from './components/notesTable/ipu/mba/IPU_MBA';
import IPU_BCA from './components/notesTable/ipu/bca/IPU_BCA';

import CCSU_BBA from './components/notesTable/ccsu/bba/CCSU_BBA';
import CCSU_BCOM from './components/notesTable/ccsu/bcom/CCSU_BCOM';
import CCSU_BCA from './components/notesTable/ccsu/bca/CCSU_BCA';

import DU_BCOM from './components/notesTable/du/bcom/DU_BCOM';
import DU_BCOM_HONS from './components/notesTable/du/bcomHons/DU_BCOM_HONS';


function App() {
  return (
    <div style={{position: 'absolute', left: 0, width: '100%'}} >
      <BrowserRouter>
        <Route path="/" exact component={HomePage} />

        <Route path="/ggsipu/bba" component={GGSIPUBBA} />
        <Route path="/ggsipu/bcom" component={IPU_BCOM} />
        <Route path="/ggsipu/mba" component={IPU_MBA} />
        <Route path="/ggsipu/bca" component={IPU_BCA} />

        <Route path="/ccsu/bba" component={CCSU_BBA} />
        <Route path="/ccsu/bcom" component={CCSU_BCOM} />
        <Route path="/ccsu/bca" component={CCSU_BCA} />

        <Route path="/du/bcom" component={DU_BCOM} />
        <Route path="/du/bcom-hons" component={DU_BCOM_HONS} />
      </BrowserRouter>
    </div>
  );
}

export default App;
