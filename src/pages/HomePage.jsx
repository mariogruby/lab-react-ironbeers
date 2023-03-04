
import { Link } from 'react-router-dom';
import beerPic from '../assets/beers.png'
import randomBeer from '../assets/random-beer.png'
import newBeer from '../assets/new-beer.png'
import {Card} from 'antd'
import React from 'react';
import '../HomePage.css'// intente hacer un background interactivo pero no me lo visualiza, el css de homePage esta comentado
const { Meta } = Card;



    const HomePage = () => {

        return (
            <section className="intento-bg">
        <div className=" col-6 mx-auto mt-5 mb-5">
            <div className="row">
                <Link to='/beers' style={{  textDecoration: 'none'}}>
                
                    <Card
                    hoverable
                    style={{ width: 640 }}
                    cover={<img alt="" src={beerPic} />}>
                        <Meta title ="beers" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum pariatur laboriosam quae?"/>
                    </Card>
                </Link>


                <Link to='/random-beer'style={{  textDecoration: 'none'}}>
                <Card
                    hoverable
                    style={{ width: 640}}
                    cover={<img alt="" src={randomBeer} />}>
                        <Meta title ="Random beers" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum pariatur laboriosam quae?"/>
                    </Card>
                </Link>
                <Link to='/new-beer'style={{ textDecoration: 'none'}}>
                <Card
                    hoverable
                    style={{ width: 640 }}
                    cover={<img alt="" src={newBeer} />}>
                        <Meta title =" New beers" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum pariatur laboriosam quae?"/>
                    </Card>
                </Link>
    
            </div>
    
        </div>
        </section>
        )
    }
    
    export default HomePage