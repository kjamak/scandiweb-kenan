import React from "react";
import styled from "styled-components";
import { BorderButton, Button, ColorButton } from "../common/Button";
import { Text } from "../common/Typography";
import { connect } from "react-redux";
import { addToCart } from "../../features/cartSlice";

import { AttributeWrapper, Wrapper, Description } from "./styles";

class ProductInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      attributes: [],
      err: null,
    };

    this.addAttribute = this.addAttribute.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart = () => {
    var selectedAtt = true;

    if (this.props.product.attributes.length > 0) {
      if (
        this.state.attributes.length !== this.props.product.attributes.length
      ) {
        selectedAtt = false;
      }
    }

    if (this.props.product.inStock && selectedAtt) {
      this.props.dispatch(
        addToCart({
          id: this.props.product.id,
          name: this.props.product.name,
          prices: this.props.product.prices,
          quantity: 1,
          image: this.props.product.gallery[0],
          attributes: this.state.attributes,
        })
      );
      this.setState({ err: "Item Added Sucessfully" });
      setTimeout(() => this.setState({ err: null }), 1600);
    } else {
      this.setState({ err: "Please select needed attributes" });
      setTimeout(() => this.setState({ err: null }), 1600);
    }
  };

  addAttribute = (name, value, type) => {
    const exist = this.state.attributes.find((item) => item.name === name);
    if (exist === undefined) {
      this.setState({
        attributes: [
          ...this.state.attributes,
          { name: name, value: value, type: type },
        ],
      });
    } else {
      const attrubutesWithoutItem = this.state.attributes.filter(
        (item) => item.name !== name
      );
      this.setState({
        attributes: [
          ...attrubutesWithoutItem,
          { name: name, value: value, type: type },
        ],
      });
    }
  };

  render() {
    return (
      <Wrapper>
        <Text fontWeight="600" fontSize="1.8rem" marginBottom="40px">
          {this.props.product.name}
        </Text>

        {this.props.product.attributes.map((item) => (
          <>
            <Text fontWeight="700" fontSize="1.1rem" marginBottom="10px">
              {item.name.toUpperCase()}:
            </Text>
            {item.type === "swatch" ? (
              <AttributeWrapper>
                {item.items.map((att) => (
                  <ColorButton
                    onClick={() =>
                      this.addAttribute(item.id, att.value, item.type)
                    }
                    selected={
                      this.state.attributes.find(
                        ({ name, value }) =>
                          name === item.id && value === att.value
                      )
                        ? true
                        : false
                    }
                    color={att.value}
                    width="20%"
                  />
                ))}
              </AttributeWrapper>
            ) : (
              <AttributeWrapper>
                {item.items.map((att) => (
                  <BorderButton
                    onClick={() =>
                      this.addAttribute(item.id, att.value, item.type)
                    }
                    selected={
                      this.state.attributes.find(
                        ({ name, value }) =>
                          name === item.id && value === att.value
                      )
                        ? true
                        : false
                    }
                    width="25%"
                  >
                    {att.displayValue}
                  </BorderButton>
                ))}
              </AttributeWrapper>
            )}
          </>
        ))}
        <Text
          fontWeight="700"
          fontSize="1.1rem"
          marginTop="30px"
          marginBottom="10px"
        >
          PRICE:
        </Text>
        <Text fontWeight="700" fontSize="1.8rem" marginBottom="20px">
          {this.props.currency?.char}
          {
            this.props.product.prices.find(
              (price) => price?.currency === this.props.currency?.currency
            ).amount
          }
        </Text>
        <Button onClick={this.addToCart} disabled={!this.props.product.inStock}>
          {this.props.product.inStock ? " ADD TO CART" : "OUT OF STOCK"}
        </Button>
        {this.state.err && (
          <Text
            marginTop="20px"
            textAlign="center"
            fontSize="1rem"
            color={
              this.state.err === "Please select needed attributes"
                ? "red"
                : "green"
            }
          >
            {this.state.err}
          </Text>
        )}
        <Description
          dangerouslySetInnerHTML={{ __html: this.props.product.description }}
        ></Description>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  currency: state.currency,
});

export default connect(mapStateToProps)(ProductInfo);
