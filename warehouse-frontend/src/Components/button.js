import React from 'react'

function Button(props) {
    return ( 
        <div>
            <button type="button" class="btn btn-primary waves-effect waves-light">{props.text}</button>
        </div>
     );
}

export default Button;
