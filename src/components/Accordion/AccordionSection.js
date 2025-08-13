import React, { Component } from "react";
import PropTypes from "prop-types";

class AccordionSection extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
    isOpen: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    this.props.onClick(this.props.label);
  };

  render() {
    const {
      onClick,
      props: { isOpen, label },
    } = this;

    return (
      <div
        style={{
          background: isOpen ? "#ffffff99" : "#ffffff99",
          border: "1px solid #e6e6e6",
          padding: "20px 0px 20px 0px",
          textIndent: "20px",
        }}
      >
        <div onClick={onClick} style={{ cursor: "pointer" }}>
          {label}
          <div style={{ float: "right", padding: "0px 20px 0px 0px" }}>
            {!isOpen && <span>⮞</span>}
            {isOpen && <span>⮟</span>}
          </div>
        </div>
        {isOpen && <div>{this.props.children}</div>}
      </div>
    );
  }
}

export default AccordionSection;
