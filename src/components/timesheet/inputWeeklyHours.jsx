import React, { Component } from "react";

class InputWeekHours extends Component {
  constructor(props) {
    super(props);
    this.state = { days: props.days, total: props.total };
    this.getTotal = this.getTotal.bind(this);
  }

  handleChange = e => {
    const inputvalue = e.target.value;
    const id = e.target.id;
    var weekDays = this.state.days.map(day =>
      day.id === +id ? { ...day, value: parseInt(inputvalue) } : day
    );

    this.setState({
      days: weekDays,
      total: this.getTotal(weekDays)
    });

    //const weekDay = this.state.days.find(day => day.id === e.target.id);
  };
  getTotal = weekDays => {
    const total = weekDays.reduce((acc, curr) => acc + curr.value, 0);
    return total;
  };
  render() {
    const { days } = this.props;
    const { total } = this.state;
    const style = { width: "60px", height: "50px", textAlign: "right" };
    return (
      <React.Fragment>
        <td></td>
        {days.map(day => (
          <td key={day.id}>
            <input
              onChange={this.handleChange}
              type="text"
              id={day.id}
              //value={day.value}
              style={style}
            />
          </td>
        ))}
        <td></td>
        <td></td>
        <td>{total}</td>
      </React.Fragment>
    );
  }
}

export default InputWeekHours;
