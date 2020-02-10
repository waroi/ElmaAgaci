import React from 'react';
import Basket from './Basket';
import renderer from 'react-test-renderer';

import {Provider} from 'react-redux';
import {store} from './store';


test('Basket', () => {
    const component = renderer.create(
       <Provider store={store}><Basket /></Provider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    //  component.shakeTree();

    // default kontrol
  // expect(tree.children.props).toBe([]);


});