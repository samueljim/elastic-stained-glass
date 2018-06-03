import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-responsive-modal';
import {config} from './config';

export default class ModalApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div>
        <div onClick={this.onOpenModal}>{this.props.children}</div>
        <Modal key={this.props.data.id + 'modal'} open={open} onClose={this.onCloseModal} center>
          <h1>{this.props.data[config.title]}</h1>
          <img src={this.props.data[config.picture]} center/>
          <h2>{this.props.data[config.fullname]}</h2>
          <h3>{this.props.data[config.description]}</h3>
        </Modal>
      </div>
    );
  }
}
