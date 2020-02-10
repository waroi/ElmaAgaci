import React from 'react';
import Content from './Content';
import renderer from 'react-test-renderer';

import {Provider} from 'react-redux';
import {store} from './store';


test('Content', () => {
    const component = renderer.create(
        <Provider store={store}>
            <Content/>
        </Provider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

  //  component.shakeTree();


});