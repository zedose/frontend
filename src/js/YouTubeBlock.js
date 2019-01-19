import Modal from 'react-modal';
import YouTube from 'react-youtube';
import Block from './Block';
import React, { Component}  from 'react';

class YouTubeBlock extends Block {
  constructor(props) {
    super(props);
    this.state = {
        description: "this is a description",
        url: "http://youtube.com",
        videoActive:false,

    };
    this.openVideoModal = this.openVideoModal.bind(this);
    this.onCloseVideoModal = this.onCloseVideoModal.bind(this);

  }

  getThumbnail(){
    const opts = {
      playerVars: {
          autoplay: 1
        },

      }

    return (
      <div onClick={this.openVideoModal} className="BlockThumbnail"><div>Play</div>
        <Modal isOpen={this.state.videoActive}
               onRequestClose={this.onCloseVideoModal}
               contentLabel="Video Title">
          <div>
          <div>Header</div><button onClick={this.onCloseVideoModal}>X</button>
            <YouTube videoId="a7tAPh06kIg" opt={opts}/>
          </div>

        </Modal>
      </div>
    )
  }

  openVideoModal(){
    this.setState({
          videoActive: true
        });
  }



  onCloseVideoModal(){
    this.setState({
          videoActive: false
        });
  }
}

export default YouTubeBlock;
