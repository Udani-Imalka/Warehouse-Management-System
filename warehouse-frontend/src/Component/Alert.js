import React from 'react';

class Alert extends React.Component {

    constructor(){
        super();
        this.state = {
            alert: false,
        }
    }

    
    render() { 
        return (<div className="col-xl-3 col-lg-4 col-sm-6 mb-2">
        <div className="p-3">
          <p>A success message!</p>
          <button
            type="button"
            className="btn btn-primary waves-effect waves-light"
            id="sa-success"
          >
              Click me
          </button>
        </div>
      </div>);
    }
}
 
export default Alert;


