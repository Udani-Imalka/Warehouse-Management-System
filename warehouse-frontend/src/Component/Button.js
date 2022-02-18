import React from 'react';

function Button(props) {
    return ( 
        <div>
            <button type="text" class="btn btn-primary waves-effect waves-light" id="sa-title">{props.text}</button>
        </div>
     );
}

export default Button;
