import React from "react";
import { Container } from "react-grid-system";
import { connect } from "react-redux";
import history from "../../history";
import { BorderButton, Button } from "../common/Button";
import { Text } from "../common/Typography";
import ProductSmallItem from "../ProductSmallItem/ProductSmallItem";
import OutsideClick from "./../common/OutsideClick";
import { ButtonsWrapper, Card, Products, TextWrapper, Wrapper } from "./styles";

class CartModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper>
        <Container>
          <OutsideClick
            hideCart={this.props.hideCart}
            cartOpened={this.props.cartOpened}
          >
            <Card>
              <TextWrapper>
                <Text fontWeight="700">My Bag,</Text>
                <Text>{this.props.items.length} items</Text>
              </TextWrapper>
              <Products>
                {this.props.items.map((item) => (
                  <ProductSmallItem item={item} />
                ))}
              </Products>
              <ButtonsWrapper>
                <BorderButton
                  onClick={() => history.push("/cart")}
                  height="52px"
                  width="50%"
                >
                  VIEW BAG
                </BorderButton>
                <Button width="50%">CHECKOUT</Button>
              </ButtonsWrapper>
            </Card>
          </OutsideClick>
        </Container>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.cart.items,
});

export default connect(mapStateToProps)(CartModal);
