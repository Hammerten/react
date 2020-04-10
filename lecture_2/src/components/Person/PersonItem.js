import React from "react";
import PropTypes from "prop-types";

function PersonItem(props) {
  const { user } = props;
  return (
    <div>
      {user.id} {user.fullName}
    </div>
  );
}

PersonItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default PersonItem;
