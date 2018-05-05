import React, { Component } from 'react';

import WrappedComponent from "./componentwrappers";
import './App.css';
import { Home } from "./Components"; 

const App = WrappedComponent(Home);

export default App;
