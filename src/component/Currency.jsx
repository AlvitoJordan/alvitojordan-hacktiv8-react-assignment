import React, { useState, useEffect } from "react";
import Loading from "./Loading";

function Currency() {
  const [currency, setCurrency] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://api.currencyfreaks.com/v2.0/rates/latest?apikey=55eaf30d38e24a7c992c6ea9200f1bfa&symbols=CAD,EUR,IDR,JPY,CHF,GBP")
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setCurrency(data.rates);
      });
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <table>
          <thead>
            <tr>
              <th>Currency</th>
              <th>We Buy</th>
              <th>Exchange Rate</th>
              <th>We Sell</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(currency).map((items) => (
              <tr key={items}>
                <td>{items}</td>
                <td>{(parseFloat(currency[items]) + parseFloat(currency[items]) * 0.05).toFixed(4)}</td>
                <td>{parseFloat(currency[items])}</td>
                <td>{(parseFloat(currency[items]) - parseFloat(currency[items]) * 0.05).toFixed(4)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4">
                Rates are based from 1 USD
                <br />
                This application uses API from https://currencyfreaks.com.
              </td>
            </tr>
          </tfoot>
        </table>
      )}
    </>
  );
}

export default Currency;