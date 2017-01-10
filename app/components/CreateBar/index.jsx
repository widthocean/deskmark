import './style.scss';
import React, { PropTypes } from 'react';

const propTypes = {
    onClick: PropTypes.func.isRequired,
};
function CreateBar({onClick}) {
    return (
        <a href="#" className="list-group-item create-bar-component"  onClick={onClick} >
            + 创建新的文章
        </a>
    );
}
CreateBar.propTypes = propTypes;
export default CreateBar;