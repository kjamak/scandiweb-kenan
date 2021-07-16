import React from "react";
import { connect } from "react-redux";
import { setCurrency } from "../../features/currencySlice";
import { Text } from "../common/Typography";
import { Wrapper } from "./../CurrencyModal/styles";

class CurrencyModal extends React.Component {
  constructor(props) {
    super(props);

    this.setMoney = this.setMoney.bind(this);
  }

  setMoney(payload) {
    this.props.dispatch(setCurrency(payload));
    this.props.disableModal();
  }

  render() {
    return (
      <Wrapper>
        <Text
          marginBottom="10px"
          fontSize="1rem"
          fontWeight="500"
          onClick={() => this.setMoney({ currency: "USD", char: "$" })}
        >
          $ USD
        </Text>
        <Text
          marginBottom="10px"
          fontSize="1rem"
          fontWeight="500"
          onClick={() => this.setMoney({ currency: "GBP", char: "£" })}
        >
          £ GBP
        </Text>
        <Text
          marginBottom="10px"
          fontSize="1rem"
          fontWeight="500"
          onClick={() => this.setMoney({ currency: "AUD", char: "$" })}
        >
          $ AUD
        </Text>
        <Text
          marginBottom="10px"
          fontSize="1rem"
          fontWeight="500"
          onClick={() => this.setMoney({ currency: "JPY", char: "¥" })}
        >
          ¥ JPY
        </Text>

        <Text
          fontSize="1rem"
          fontWeight="500"
          onClick={() => this.setMoney({ currency: "RUB", char: "₽" })}
        >
          ₽ RUB
        </Text>
      </Wrapper>
    );
  }
}

export default connect()(CurrencyModal);
