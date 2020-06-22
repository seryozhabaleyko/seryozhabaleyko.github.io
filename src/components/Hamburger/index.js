import React from 'react';
import classNames from 'classnames';

import './Hamburger.scss';

function Hamburger({className, ...rest}) {

    return (
        <div
            className={classNames('hamburger', className)}
            {...rest}
        >
            <span/>
            <span/>
            <span/>
        </div>
    );
}

export default Hamburger;