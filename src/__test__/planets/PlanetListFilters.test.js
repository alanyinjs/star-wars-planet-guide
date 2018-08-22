import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import PlanetListFilters from '../../planets/PlanetListFilters';

describe('PlanetListFilters component', () => {
  test('PlanetListFilters matches snapshot', () => {
    const tree = shallow(<PlanetListFilters />);
    expect(toJson(tree)).toMatchSnapshot();
  });

  describe('setFilter', () => {
    test('gets rendered correctly on filter input', () => {
      const onFilterChange = jest.fn();
      const wrapper = shallow(<PlanetListFilters setFilter={onFilterChange} />);
      expect(wrapper.find('#filter').prop('onChange')).toEqual(onFilterChange);
    });

    test('called with the correct arguments', () => {
      const event = {target: {value: 'al'}};
      const onFilterChangeSpy = jest.fn();
      const wrapper = shallow(<PlanetListFilters setFilter={onFilterChangeSpy}/>);
      wrapper.find('#filter').simulate('change', event);
      expect(onFilterChangeSpy).toHaveBeenCalledWith(event);
    });
  });

  describe('setSortBy', () => {
    test('gets rendered correctly on sort-by select', () => {
      const onSortByChange = jest.fn();
      const wrapper = shallow(<PlanetListFilters setSortBy={onSortByChange} />);
      expect(wrapper.find('#sort-by').prop('onChange')).toEqual(onSortByChange);
    });

    test('called with the correct arguments', () => {
      const event = {target: {value: 'population-high-to-low'}};
      const onSortByChangeSpy = jest.fn();
      const wrapper = shallow(<PlanetListFilters setSortBy={onSortByChangeSpy}/>);
      wrapper.find('#sort-by').simulate('change', event);
      expect(onSortByChangeSpy).toHaveBeenCalledWith(event);
    });
  });
});