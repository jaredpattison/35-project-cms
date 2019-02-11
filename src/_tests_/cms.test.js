'use strict';

import React from "react";
import {shallow,mount} from 'enzyme';
import CMS from "../components/cms/cms.js";
import Models from "../components/cms/models";
import Record from "../components/cms/record";
import Records from "../components/cms/records";
import Reducer from "../components/cms/reducers";
import TestRenderer from "react-test-renderer";
import { Provider } from "react-redux";
import createStore from "../store/";
import record from "../components/cms/record";
const store = createStore();

describe("<CMS />", () => {
  let store, wrapper;

  beforeEach(() => {
    store = createStore();
    wrapper = mount(
      <Provider store={store}>
        <CMS />
      </Provider>
    );
  });

  it("is alive", () => {
    expect("yes").toEqual("yes");
  });

  it("Renders", () => {
    let component = mount(
      <Provider store={store}>
        <CMS />
      </Provider>
    )
    expect(component.find("nav").exists()).toBeTruthy();
  });
})
