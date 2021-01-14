import Dashboard from '../../Dashboard/Dashboard';
// import {isTSAnyKeyword} from  '@babel/types'
import { BrowserRouter as Router } from 'react-router-dom';

it("renders correctly", ()=>{
    const wrapper = shallow(
        
        <Dashboard 
        pinkButton=''
        blueButton=''
        purpleButton=''
        setPinkButton={()=>{}} 
        setBlueButton={()=>{}} 
        setPurpleButton={()=>{}} 
        setFilteredUsers={()=>{}}
        />
    );

    expect(wrapper).toMatchSnapshot();

});


it("renders correctly", ()=>{
    const wrapper = render(
        <Router>
        <Dashboard 
        pinkButton=''
        blueButton=''
        purpleButton=''
        setPinkButton={()=>{}} 
        setBlueButton={()=>{}} 
        setPurpleButton={()=>{}} 
        setFilteredUsers={()=>{}}
        />
        </Router>
    );

    expect(wrapper).toMatchSnapshot();

});




