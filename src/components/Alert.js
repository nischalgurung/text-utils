import React from "react";

export default function Alert(props) {
  function capitalize(word) {
    const capWord =
      word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
    return capWord;
  }
  return (
    props.alert && (
      <div className={`alert alert-${props.alert.type}`} role="alert">
        {capitalize(props.alert.type)}: {props.alert.message}
      </div>
    )
  );
}
