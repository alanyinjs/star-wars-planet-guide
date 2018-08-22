import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import PlanetView from '../../planets/PlanetView';
import * as api from '../../api/planets';
import planetResults from '../fixtures/planets';
import PlanetListFilters from '../../planets/PlanetListFilters';

describe('PlanetView component',() => {
  test('PlanetView component matches snapshot', () => {
    const tree = shallow(<PlanetView />);
    tree.setState({isLoading: false});
    expect(toJson(tree)).toMatchSnapshot();
  });

  describe('componentDidMount', () => {
    test('componentDidMount gets called', () => {
      const spy = jest.spyOn(PlanetView.prototype, 'componentDidMount');
      const wrapper = shallow(<PlanetView />);
      expect(spy).toHaveBeenCalledTimes(1);
    });

    test('componentDidMount makes api call and retrieves data', async () => {
      const spy = jest.spyOn(api, 'getPlanets').mockImplementation(() => Promise.resolve(planetResults));
      const wrapper = await shallow(<PlanetView />);
      expect(spy).toHaveBeenCalledTimes(1);
      expect(wrapper.instance().state.planets.length).toBe(3);
    });
  });

  describe('setFilter method', () => {
    test('correctly gets passed to PlanetListFilter component', () => {
      const wrapper = shallow(<PlanetView />);
      wrapper.setState({isLoading: false});
      expect(wrapper.find(PlanetListFilters).prop('setFilter')).toEqual(wrapper.instance().setFilter);
    });

    test('correctly set the state when gets called', () => {
      const wrapper = shallow(<PlanetView />);
      wrapper.instance().setFilter({target: {value: 'a'}});
      expect(wrapper.state().filter).toBe('a');
    });
  });

  describe('setSortBy method', () => {
    test('correctly gets passed to PlanetListFilter component', () => {
      const wrapper = shallow(<PlanetView />);
      wrapper.setState({isLoading: false});
      expect(wrapper.find(PlanetListFilters).prop('setSortBy')).toEqual(wrapper.instance().setSortBy);
    });

    test('correctly set the state when gets called', () => {
      const wrapper = shallow(<PlanetView />);
      wrapper.instance().setSortBy({target: {value: 'population-high-to-low'}});
      expect(wrapper.state().sortBy).toBe('population-high-to-low');
    });
  });
});
