import React from 'react';

import './Logo.scss';

type PropTypesLogo = {

    extended?: boolean,
    minified?: boolean,

}

const Logo: React.FC<PropTypesLogo> = ({ extended, minified } : PropTypesLogo ) => {

    return (

        <div className="container__logo">

            <div className="logo__normal"></div>
          
        </div>

    );

};

export default Logo;