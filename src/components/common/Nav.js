import React from "react";
import { Container, Col, Row } from "react-grid-system";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/images/logo.svg";
import vector from "../../assets/images/vector.png";
import cart from "../../assets/images/cart.png";
import CurrencyModal from "./../CurrencyModal/CurrencyModal";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import CartModal from "../CartModal/CartModal";
import OutsideClick from "./OutsideClick";

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currencyVisible: false,
      cartVisible: false,
      cartOpened: false,
      currentLocation: this.props.match.params.id,
    };

    this.showCart = this.showCart.bind(this);
  }

  componentDidUpdate() {
    if (this.state.currentLocation !== this.props.match.params.id) {
      this.setState({ currentLocation: this.props.match.params.id });
    }
  }

  showCart() {
    if (this.state.cartOpened === false) {
      this.setState({
        cartVisible: true,
        cartOpened: true,
      });
    } else {
      this.setState({ cartOpened: false });
    }
  }

  render() {
    return (
      <_Container style={{ position: "fixed" }} fluid>
        <Container>
          <Row>
            <_Col sm={12}>
              <div>
                <_Link
                  selected={
                    this.state.currentLocation === "tech" ? true : false
                  }
                  to="/category/tech"
                >
                  TECH
                </_Link>
                <_Link
                  selected={
                    this.state.currentLocation === "clothes" ? true : false
                  }
                  to="/category/clothes"
                >
                  CLOTHES
                </_Link>
              </div>
              <_Link to="/">
                <img src={logo} />
              </_Link>
              <div>
                <Currency
                  onClick={() =>
                    this.setState({
                      currencyVisible: this.state.currencyVisible
                        ? false
                        : true,
                    })
                  }
                >
                  {this.props.currency.char}
                  <DropDownIcon src={vector} />
                </Currency>

                <Cart onClick={() => this.showCart()}>
                  <CartIcon src={cart} />

                  <div>
                    {this.props.items.length > 0 && (
                      <ItemCounter>
                        <div>{this.props.items?.length}</div>
                      </ItemCounter>
                    )}
                  </div>
                </Cart>
              </div>
            </_Col>
            {this.state.currencyVisible && (
              <CurrencyModal
                disableModal={() => this.setState({ currencyVisible: false })}
              />
            )}
          </Row>
        </Container>
        {this.state.cartVisible && (
          <CartModal
            hideCart={() => this.setState({ cartVisible: false })}
            cartOpened={() => this.setState({ cartOpened: false })}
          />
        )}
      </_Container>
    );
  }
}

const mapStateToProps = (state) => ({
  currency: state.currency,
  items: state.cart.items,
});

export default connect(mapStateToProps)(withRouter(Nav));

const _Container = styled(Container)`
  height: 80px;

  top: 0;
  z-index: 999;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.background};
`;

const _Col = styled(Col)`
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
  }
`;

const _Link = styled(Link)`
  height: 80px;
  border-bottom: ${({ selected, theme }) =>
    `3px solid ${selected ? theme.colors.primary : "white"}`};
  display: flex;

  padding: 10px;
  font-weight: 600;
  font-size: 1rem;
  align-items: center;
`;

const DropDownIcon = styled.img`
  width: 6px;
  height: 3px;
  margin-left: 5px;
  margin-right: 15px;
`;

const CartIcon = styled.img`
  width: 20px;
  height: 18px;
`;

const Currency = styled.div`
  font-weight: 500;
  :hover {
    cursor: pointer;
  }
`;

const Cart = styled.div`
  width: 50px;
  height: 40px;

  :hover {
    cursor: pointer;
  }
`;

const ItemCounter = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.text};
  font-weight: 700;
  color: white;
  min-width: 20px;
  height: 20px;
  display: flex;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  top: 0;
  right: 0;
  margin-top: 20px;
  margin-right: 35px;

  div {
    margin-top: -5px;
  }
`;
