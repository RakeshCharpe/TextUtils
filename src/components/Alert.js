import React from "react";

const Alert = (props) => {

    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.slice(0,1).toUpperCase()+lower.slice(1);
    }
    return (
        props.alert && <div
            className={`alert alert-${props.alert.type} alert-dismissible fade show`
}
      role="alert"
    >
          <strong>{capitalize(props.alert.type)}</strong>: { props.alert.msg}
     
    </div>
  );
};

export default Alert;
