import React from 'react';
import Nouislider from 'nouislider-react';

interface Props {
  defaultValues?: {
    lowerValue?: number;
    upperValue?: number;
  };
  onChange?: (values: { lowerValue: number; upperValue: number }) => void;
}

interface State {
  lowerValue: number;
  upperValue: number;
}

const RATES = {
  MIN: 25,
  MAX: 140,
  START_MAX: 60,
};

class NonLinearSlider extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      lowerValue: props.defaultValues?.lowerValue ?? RATES.MIN,
      upperValue: props.defaultValues?.upperValue ?? RATES.START_MAX,
    };
  }

  componentDidMount() {
    this.setDefaultValues();
  }

  setDefaultValues() {
    const { defaultValues } = this.props;
    const { lowerValue, upperValue } = defaultValues || {
      lowerValue: RATES.MIN,
      upperValue: RATES.START_MAX,
    };

    this.setState(
      {
        lowerValue,
        upperValue,
      },
      this.resonateValue
    );
  }

  resonateValue = () => {
    const { onChange } = this.props;
    const { lowerValue, upperValue } = this.state;
    if (onChange && typeof onChange === 'function') {
      onChange({
        lowerValue,
        upperValue,
      });
    }
  };

  onSlide = (values: any) => {
    const lowerValue = values[0].toFixed(0);
    const upperValue = values[1].toFixed(0);
    this.setState(
      {
        lowerValue,
        upperValue,
      },
      this.resonateValue
    );
  };

  render() {
    const { lowerValue, upperValue } = this.state;
    return (
      <div className="mb-3">
        <div className="d-flex justify-content-between align-items-center range-data">
          <span
            className="example-val d-flex justify-content-center align-items-center"
            id="lower-value"
          >
            {`$ ${lowerValue}`}
          </span>
          <span
            className="example-val d-flex justify-content-center align-items-center"
            id="upper-value"
          >
            {`$ ${upperValue}`}
          </span>
        </div>
        <Nouislider
          connect
          start={[lowerValue, upperValue]}
          behaviour="tap"
          range={{
            min: [RATES.MIN],
            max: [RATES.MAX],
          }}
          onSlide={this.onSlide}
          className="custom-range-slider"
        />
      </div>
    );
  }
}

export default NonLinearSlider;
