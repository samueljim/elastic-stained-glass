import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-responsive-modal';
import config from './config.json';
import Topic from './Topic';

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
        <div onClick={this.onOpenModal} className="result-item" key={this.props.data[config.id]}>
        <div className="flex justify-center align-center result-card-header">
          <img className="avatar" src={this.props.data[config.picture]} alt="avatar" />
          <a className="link" href={this.props.data[config.url]} target="_blank" rel="noopener noreferrer">
            <div className="flex wrap">
              <div>{this.props.data[config.title]}/</div>
              <div>{this.props.data[config.name]}</div>
            </div>
          </a>
        </div>
        <div className="m10-0">{this.props.data[config.info]}</div>
        {(this.props.data[config.tags]) &&
        <div className="flex wrap justify-center">
          {
            this.props.data[config.tags].slice(0, 7)
            .map(item => (
                <Topic
                key={item}
                  active={this.props.currentTopics.includes(item)}
                  toggleTopic={this.props.toggleTopic}
                  >
                  {item}&emsp;
                </Topic>
              ))
            }
        </div>
        }
        </div>
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
