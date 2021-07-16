import React from "react";
import styled from "styled-components";
import { Text } from "../common/Typography";
import cart from "../../assets/images/cart_large.png";
import { connect } from "react-redux";
import history from "../../history";
import { ProductImage, Wrapper, InStock, CartButton } from "./styles";

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      price: this.props.prices.find(
        (price) => price?.currency === this.props.currency?.currency
      ),
    };
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }

  mouseEnter() {
    this.setState({ hover: true });
  }

  mouseLeave() {
    this.setState({ hover: false });
  }

  render() {
    return (
      <Wrapper
        hovered={this.state.hover}
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}
        onClick={() => history.push(`/product/${this.props.id}`)}
      >
        <ProductImage imgURL={this.props.image}>
          {!this.props.inStock && (
            <InStock>
              <Text color="#8D8F9A" fontSize="1.5rem" fontWeight="400">
                OUT OF STOCK
              </Text>
            </InStock>
          )}
        </ProductImage>

        <Text marginTop="20px" fontSize="1.25rem" fontWeight={300}>
          {this.props.name}
        </Text>
        <Text marginTop="10px" fontSize="1.25rem" fontWeight={500}>
          {this.props.currency?.char}
          {
            this.props.prices.find(
              (price) => price?.currency === this.props.currency?.currency
            ).amount
          }
        </Text>
        {this.state.hover && (
          <CartButton>
            <img src={cart} />
          </CartButton>
        )}
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  currency: state.currency,
});

export default connect(mapStateToProps)(ProductCard);
