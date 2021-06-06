import React from "react";
import { connect } from "react-redux";
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Line,
  LabelList,
} from "recharts";

import { LoaderBox } from "components/LoaderBox/LoaderBox";
import ErrorMessage from "components/ErrorMessage/ErrorMessage";
import { getCryptoData } from "actions/crytpoActions";
import "./GraphDisplay.scss";

const PriceLabel = (props) => {
  const { x, y, stroke, value, index } = props;
  const formatValue = (value) => {
    return (
      "$" +
      value.toLocaleString(undefined, {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
      })
    );
  };
  return (
    <text
      x={index === 0 ? x - 5 : x + 5}
      y={index === 0 ? y + 16 : y + 24}
      fill={stroke}
      fontSize={index !== 6 ? 16 : 28}
      textAnchor={index === 0 ? "start" : "end"}
      fontWeight="bold"
    >
      {index !== 0 && index !== 6 ? "" : formatValue(value)}
    </text>
  );
};

class GraphDisplay extends React.Component {
  componentDidMount() {
    this.props.getCryptoData(this.props.crypto);
  }

  formatXAxis = (val) => {
    let formattedDate = val.toDateString().slice(4, 10);
    return formattedDate;
  };

  render() {
    const { data, loading, error } = this.props;
    return (
      <div className="section-less-padding">
        <div className="container">
          <h3 className="graph-header">{this.props.crypto}</h3>
          {loading ? (
            <LoaderBox customClass={"graph-loader-box"} />
          ) : error ? (
            <ErrorMessage />
          ) : (
            <div className="graph-container">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart width={400} height={300} data={data}>
                  <XAxis
                    dataKey="x"
                    stroke="#fff"
                    interval="preserveStartEnd"
                    tickSize={8}
                    tickFormatter={this.formatXAxis}
                  />
                  <YAxis
                    type="number"
                    hide={true}
                    stroke="#fff"
                    domain={["dataMin-1000", "dataMin+1000"]}
                  />
                  <Line
                    type="monotone"
                    dataKey="y"
                    stroke="#fff"
                    strokeWidth={2}
                  >
                    <LabelList
                      dataKey="y"
                      stroke="#2f2b53"
                      content={<PriceLabel />}
                    />
                  </Line>
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { crypto } = ownProps;
  return {
    data: state[crypto].statistics.historicalData,
    loading: state.loading.cryptoDataLoading,
    error: state.error.cryptoDataError,
  };
};

export default connect(mapStateToProps, { getCryptoData })(GraphDisplay);
