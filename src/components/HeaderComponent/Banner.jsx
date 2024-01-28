import React from 'react';
import Container from '../Container/Container';

const Banner = ({ header, paragraph, button, backgroundImage }) => {
    return (
        <Container>
            <div className="hero min-h-[98vh] mb-12" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">{header}</h1>
                        <p className="mb-5">{paragraph}.</p>

                        <button className="btn btn-primary">{button && button}</button>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Banner;