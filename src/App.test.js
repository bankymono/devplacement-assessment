// // import { render, screen } from '@testing-library/react';
// import React from 'react'
// import ReactDOM from 'react-dom'
// import App from './App';

// it("renders without crashing", ()=>{
//   const div = document.createElement('div');

//   ReactDOM.render(<App />,div)
// });

import App from './App'

jest.mock('./services/ajaxfetch')

it("fetches data from randomuser and renders them on mount",(done)=>{
  const wrapper = shallow(<App />)

  setTimeout(()=>{
    wrapper.update()
    expect(wrapper.find('SearchBar').length).toEqual(1);

    done();
  })


})