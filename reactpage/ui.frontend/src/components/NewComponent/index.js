import React from 'react';
import { MapTo } from '@adobe/aem-react-editable-components';

const NewComponent = (props) => {
    return (
        <div>
            <p>My Text Component: {props.text}</p>
            <p>My Checkbox is: {props.checkbox ? 'checked' : 'unchecked'}</p>
        </div>
    );
};

export default MapTo('reactapp/components/new-component')(NewComponent);