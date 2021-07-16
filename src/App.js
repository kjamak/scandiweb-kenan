import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import HomePage from "./pages/HomePage";
import { CustomThemeProvider } from "./theme/ThemeProvider";
import Nav from "./components/common/Nav";
import ProductPage from "./pages/ProductPage";
import CategoryPage from "./pages/CategoryPage";
import CartPage from "./pages/CartPage";

class App extends Component {
  render() {
    return (
      <CustomThemeProvider>
        <Router history={history}>
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/product/:id">
              <ProductPage />
            </Route>
            <Route path="/category/:id">
              <CategoryPage />
            </Route>
            <Route path="/cart">
              <CartPage />
            </Route>
          </Switch>
        </Router>
      </CustomThemeProvider>
    );
  }
}

export default App;
