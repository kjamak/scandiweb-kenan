import React from "react";
import { ImagesContainer, LargeImage, SmallImage, Wrapper } from "./styles";

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImage: this.props.images[0],
    };
  }

  render() {
    return (
      <Wrapper>
        <ImagesContainer>
          {this.props.images.map((image) => (
            <SmallImage
              imgURL={image}
              onClick={() => this.setState({ currentImage: image })}
            />
          ))}
        </ImagesContainer>

        <LargeImage imgURL={this.state.currentImage} />
      </Wrapper>
    );
  }
}

export default ImageGallery;
