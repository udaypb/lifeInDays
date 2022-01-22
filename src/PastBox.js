
import './pastBox.css';
import React from 'react';

class PastBox extends React.Component {
    render() {
        return (
            <div className="pastBox">
                <text className="date">{this.props.date}</text>
            </div>
          );
    }

}



export default PastBox;
