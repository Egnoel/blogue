import React from 'react';
import Card from '../../components/UI/Card';
import './style.css';

const Home = props =>{

    const galleryHeight = 450;
    const galleryStyle = {
        heigth:galleryHeight+'px',
        overflow:'hidden'
    }

    const sideImageHeigth = galleryHeight / 3;

    return (
        <div>
            <Card>
                <div className="galleryPost" style={galleryStyle}>

                    <section style={{width:'70%'}}>

                        <div>
                            <img src={require('../../blogPostImages/naruto.jpg').default} alt="Naruto" />
                        </div>

                    </section>

                    <section style={{width:'30%'}} className="sideImageWrapper">
                        <div style={{height:`${sideImageHeigth}px`}}>
                            <img src={require('../../blogPostImages/naruto.jpg').default} alt="Naruto" />
                        </div>

                        <div style={{height:`${sideImageHeigth}px`}}>
                            <img src={require('../../blogPostImages/naruto.jpg').default} alt="Naruto" />
                        </div>

                        <div style={{height:`${sideImageHeigth}px`}}>
                            <img src={require('../../blogPostImages/naruto.jpg').default} alt="Naruto" />
                        </div>

                    </section>

                </div>  
            </Card>
        </div>
    )
}

export default Home;
