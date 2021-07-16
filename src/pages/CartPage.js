import React from "react";
import { Col, Container, Row } from "react-grid-system";
import { withRouter } from "react-router";
import Nav from "../components/common/Nav";
import { Heading } from "../components/common/Typography";
import { connect } from "react-redux";
import ProductCartItem from "./../components/ProductCartItem/ProductCartItem";
class CartPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Nav />
        <Container>
          <Heading
            fontWeight="700"
            level={2}
            marginTop="100px"
            marginBottom="50px"
          >
            CART
          </Heading>
          <Row>
            <Col md={10}>
              {this.props.items.map((item) => (
                <ProductCartItem item={item} />
              ))}
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.cart.items,
});

export default connect(mapStateToProps)(CartPage);
