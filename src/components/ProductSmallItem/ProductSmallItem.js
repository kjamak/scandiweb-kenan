import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from "../../features/cartSlice";

import { Text } from "../common/Typography";
import {
  AttributeButton,
  AttributeWrapper,
  CloseWrapper,
  ColorWrapper,
  ItemImg,
  QuantityButton,
  QuantityIncreaser,
  RightSide,
  Side,
  Wrapper,
} from "./styles";

class ProductSmallItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: this.props.item.prices.find(
        (price) => price?.currency === this.props.currency?.currency
      ),
    };
  }

  render() {
    return (
      <Wrapper>
        <Side>
          <Text>{this.props.item.name}</Text>
          <Text
            marginTop="10px"
            marginBottom="10px"
            fontSize="1.25rem"
            fontWeight={700}
          >
            {this.props.currency?.char}
            {
              this.props.item.prices.find(
                (price) => price?.currency === this.props.currency?.currency
              ).amount
            }
          </Text>
          <AttributeWrapper>
            {this.props.item.attributes.map((item) => (
              <div>
                {item.type === "swatch" ? (
                  <ColorWrapper>
                    <AttributeButton color={item.value} width="100%" />
                  </ColorWrapper>
                ) : (
                  <AttributeButton width="40px">{item.value}</AttributeButton>
                )}
              </div>
            ))}
          </AttributeWrapper>
        </Side>
        <RightSide>
          <QuantityIncreaser>
            <QuantityButton
              onClick={() =>
                this.props.dispatch(increaseQuantity(this.props.item.id))
              }
            >
              +
            </QuantityButton>
            <Text>{this.props.item.quantity}</Text>
            <QuantityButton
              onClick={() =>
                this.props.dispatch(decreaseQuantity(this.props.item.id))
              }
            >
              -
            </QuantityButton>
          </QuantityIncreaser>
          <ItemImg imgURL={this.props.item.image}>
            <CloseWrapper
              onClick={() =>
                this.props.dispatch(removeItem(this.props.item.id))
              }
            >
              <i class="ri-close-fill"></i>
            </CloseWrapper>
          </ItemImg>
        </RightSide>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  currency: state.currency,
});

export default connect(mapStateToProps)(ProductSmallItem);
