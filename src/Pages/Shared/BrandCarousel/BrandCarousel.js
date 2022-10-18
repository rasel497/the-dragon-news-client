import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Barand1 from '../../../assets/brands/Brand1.jpg';
import Barand2 from '../../../assets/brands/Brand2.png';


const BrandCarousel = () => {
    return (

        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Barand1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Barand2}
                    alt="Second slide"
                />
            </Carousel.Item>
        </Carousel>

    );
};

export default BrandCarousel;
// M-60/8 2:33