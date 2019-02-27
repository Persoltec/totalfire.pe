import React from "react";
import PropTypes from "prop-types";
import ScrollUpButton from "react-scroll-up-button";
import { Icon } from 'react-icons-kit'


import {ic_keyboard_arrow_up} from 'react-icons-kit/md/ic_keyboard_arrow_up'
// import { Link } from 'gatsby'
// import github from '../img/github-icon.svg'
// import logo from '../img/logo.svg'

const BackToTop = class extends React.Component {
  render() {
    return (
      <ScrollUpButton
        ContainerClassName="scrollUp"
        TransitionClassName="scrollUpTransition"
        ToggledStyle={{ right: 10 }}
        style={{
          position: "fixed",
          right: "-100px",
          bottom: "40px",
          transition: "right 0.5s"
        }}
      >
        <a class="button is-primary">
  <Icon size={32}  icon={ic_keyboard_arrow_up} />

        </a>
      </ScrollUpButton>
    );
  }
};

export default BackToTop;
