import React from "react";
import Currency from "./Currency";
import CurrencyError from "./CurrencyError";

export default class PlayingWithDangerApp extends React.Component {
  render() {
    return (
      <div className="App">
        <CurrencyError>
          Germany: <Currency value={21} locale="de-DE" currency="US" />
        </CurrencyError>
        <CurrencyError>
          USA: <Currency value={21} locale="en-US" currency="USD" />
        </CurrencyError>

        <h2>Yoda is not all-powerful.</h2>
      </div>
    );
  }
}
