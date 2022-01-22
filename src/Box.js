
import './box.css';
import React from 'react';

class box extends React.Component {
    render() {
        return (
            <div className="box">
                <text className="date">{this.props.date}</text>
            </div>
          );
    }

}



export default box;
