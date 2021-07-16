import { gql } from "@apollo/client";
import React from "react";
import { Col, Container, Row } from "react-grid-system";
import ProductCard from "../components/ProductCard/ProductCard";
import client from "../graphqlConnection";
import { Heading } from "./../components/common/Typography";
import { withRouter } from "react-router";
import Nav from "../components/common/Nav";
class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    client
      .query({
        query: gql`
          query GetCategory {
            category {
              name
              products {
                id
                name
                inStock
                gallery
                prices {
                  currency
                  amount
                }
              }
            }
          }
        `,
      })
      .then((result) => {
        this.setState({ products: result.data.category.products });
      });
  }

  render() {
    return (
      <>
        <Nav />
        <Container>
          <Heading level={2} marginTop="100px">
            All Products
          </Heading>
          <Row>
            {this.state.products.map((product, id) => (
              <Col key={id} md={6} lg={4}>
                <ProductCard
                  name={product.name}
                  inStock={product.inStock}
                  prices={product.prices}
                  id={product.id}
                  image={product.gallery[0]}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </>
    );
  }
}

export default withRouter(HomePage);
