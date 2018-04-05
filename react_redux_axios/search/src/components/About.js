import React,{ Component} from 'react';
import Header  from './Header';
class About extends React.Component{
    render(){
        return(
            <section className="w3-container gallery-wrapper">
                <Header/>
                Hi! it is my app and i use react,redux,axios
            </section>
        )
    }
}
export default About;