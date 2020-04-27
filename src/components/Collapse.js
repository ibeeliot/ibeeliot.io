import React, { useState } from 'react';

const style = {
  collapsed: {
    display: 'none'
  },
  expanded: {
    display: 'block',
    border: '1px solid red',
    zIndex: '40',
    position: 'absolute'
  },
  buttonStyle: {
    display: 'block',
    border: '2px solid #ffffffd9',
    zIndex: '30',
    color: 'rgba(255, 255, 255, 0.589)',
    height: '5rem',
    padding: '1rem 3rem 8rem 3rem',
    width: '18rem',
    borderRadius: '5px',
    fontSize: '3em',
    position: 'absolute',
    background: 'none',
    top: '-4em',
    left: '-7em',
    transition: 'all 500ms ease-in-out'
  }
};

const Collapse = props => {
  const [isCollapsed, setCollapsed] = useState(props.collapsed);
  const { expanded, setExpanded } = props;
  const toggleCollapse = () => {
    setCollapsed(!isCollapsed);
  };

  return (
    <div>
      <button
        style={style.buttonStyle}
        onClick={() => {
          setExpanded();
          toggleCollapse();
        }}
      >
        {isCollapsed ? 'A little more' : 'A little less'}
      </button>
      <div
        className="collapse-content"
        style={isCollapsed ? style.collapsed : style.expanded}
        aria-expanded={isCollapsed}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Collapse;
