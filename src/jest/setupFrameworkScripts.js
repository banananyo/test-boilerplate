import React from 'react';
import chai from 'chai';

global.React = React;
global.jestExpect = global.expect;
global.expect = chai.expect;