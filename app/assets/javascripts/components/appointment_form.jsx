var AppointmentForm = createReactClass({
  handleChange: function (e) {
    var name = e.target.name;
    var obj = {};
    obj[name] = e.target.value;
    this.props.onUserInput(obj);
  },

  handleSubmit: function (e) {
    e.preventDefault();
    this.props.onFormSubmit();
  },

  setApptTime: function (e) {
    var name = 'appt_time';
    var obj = {};
    if(obj[name] = e.toDate()){
      this.props.onUserInput(obj);
    }
  },

  render: function () {
    var inputProps = {name: 'appt_time'};

    return(
        <div>
          <h2>Make a new appointment</h2>
          <form onSubmit={this.handleSubmit}>
            <input name="title"
                   placeholder="Appointment title"
                   value={this.props.title}
                   onChange={this.handleChange}
            />
            <Datetime inputProps={inputProps} value={this.props.appt_time}
                      input={false} open={true}
                      onChange={this.setApptTime}
            />
            <input type="submit" value="Make Appointment" className="submit-button" />
          </form>
        </div>
    )
  }
});