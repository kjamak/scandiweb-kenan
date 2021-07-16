import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { decreaseQuantity, increaseQuantity } from "../../features/cartSlice";
import { BorderButton, ColorButton } from "../common/Button";
import { Text } from "../common/Typography";
import {
  AttributeWrapper,
  ColorWrapper,
  ItemImg,
  QuantityIncreaser,
  RightSide,
  Side,
  Wrapper,
} from "./styles";

class ProductCartItem extends React.Component {
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
              <AttributeWrapper>
                <Text fontWeight="700" fontSize="1rem" marginRight="10px">
                  {item.name.toUpperCase()}:
                </Text>
                {item.type === "swatch" ? (
                  <ColorWrapper>
                    <ColorButton color={item.value} width="60px" />
                  </ColorWrapper>
                ) : (
                  <BorderButton width="60px">{item.value}</BorderButton>
                )}
              </AttributeWrapper>
            ))}
          </AttributeWrapper>
        </Side>
        <RightSide>
          <QuantityIncreaser>
            <BorderButton
              fontSize="24px"
              onClick={() =>
                this.props.dispatch(increaseQuantity(this.props.item.id))
              }
            >
              +
            </BorderButton>
            <Text>{this.props.item.quantity}</Text>
            <BorderButton
              fontSize="24px"
              onClick={() =>
                this.props.dispatch(decreaseQuantity(this.props.item.id))
              }
            >
              -
            </BorderButton>
          </QuantityIncreaser>
          <ItemImg imgURL={this.props.item.image} />
        </RightSide>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  currency: state.currency,
});

export default connect(mapStateToProps)(ProductCartItem);
