import { gql } from "@apollo/client";
import React from "react";
import { Col, Container, Row } from "react-grid-system";
import { withRouter } from "react-router";
import client from "../graphqlConnection";
import ImageGallery from "./../components/ImageGallery/ImageGallery";
import styled from "styled-components";
import ProductInfo from "./../components/ProductInfo/ProductInfo";
import Nav from "./../components/common/Nav";

class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: undefined,
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
                description
                gallery
                attributes {
                  id
                  name
                  type
                  items {
                    displayValue
                    value
                    id
                  }
                }
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
        const product = result.data.category.products.find(
          (product) => product.id === this.props.match.params.id
        );

        this.setState({ product: product });
      });
  }

  render() {
    return (
      <>
        <Nav />
        <Container>
          <_Row>
            <Col lg={8}>
              {this.state.product && (
                <ImageGallery images={this.state.product.gallery} />
              )}
            </Col>
            <Col lg={3}>
              {this.state.product && (
                <ProductInfo product={this.state.product} />
              )}
            </Col>
          </_Row>
        </Container>
      </>
    );
  }
}

const _Row = styled(Row)`
  margin-top: 120px;
`;

export default withRouter(ProductPage);
