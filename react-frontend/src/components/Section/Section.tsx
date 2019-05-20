import React from 'react';
import './Section.css';

const Section: React.FC = ({ children }) => {
    return (
        <div className='Section'>
            {children}
        </div>
    );
};

export default Section;
