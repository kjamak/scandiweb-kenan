import { gql } from "@apollo/client";
import React from "react";
import { Col, Container, Row } from "react-grid-system";
import ProductCard from "../components/ProductCard/ProductCard";
import client from "../graphqlConnection";
import { Heading } from "../components/common/Typography";
import { withRouter } from "react-router";
import Nav from "./../components/common/Nav";
class CategoryPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      name: "",
      currentRoute: this.props.match.params.id,
    };
  }

  componentDidMount() {
    client
      .query({
        query: gql`
          query GetCategory {
            category(input: {title: "${this.props.match.params.id}"}) {
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
        this.setState({
          products: result.data.category.products,
          name: result.data.category.name,
        });
      });
  }

  componentDidUpdate() {
    if (this.state.currentRoute !== this.props.match.params.id) {
      client
        .query({
          query: gql`
          query GetCategory {
            category(input: {title: "${this.props.match.params.id}"}) {
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
          this.setState({
            products: result.data.category.products,
            name: result.data.category.name,
            currentRoute: this.props.match.params.id,
          });
        });
    }
  }

  render() {
    return (
      <>
        <Nav />
        <Container>
          <Heading level={2} marginTop="100px">
            {this.state.name?.charAt(0).toUpperCase() +
              this.state.name?.slice(1)}
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

export default withRouter(CategoryPage);
