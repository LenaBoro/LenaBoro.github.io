import React from 'react';
import PropTypes from 'prop-types';
import  emptyPic from '../pic/empty2.jpg';
import { Link } from 'react-router-dom';

class Card extends React.Component{
    render(){
        console.log(`serial is ${this.props.serial.show.id}`);

        if (!this.props.serial.show.image) {
            return(
                <section className="w3-container">
                    <figure>
                        <a href=''>
                            <img src={emptyPic} alt="empty page"/>
                        </a>
                    </figure>
                    <section className="header-list-cards">
                        <a href={this.props.serial.show.url}
                           className="title-cards">{this.props.serial.show.name}</a>
                    </section>
                </section>
            )
        }
        return(
            <section className="w3-container">
                <figure>
                    <a href=''>
                        <img className="avatar" src={this.props.serial.show.image.medium} alt="avatar"/>
                    </a>
                </figure>
                <section className="header-list-cards">
                    <a href={this.props.serial.show.url} className="title-cards">{this.props.serial.show.name}</a>
                </section>
            </section>
        )
    }
}

export default Card;