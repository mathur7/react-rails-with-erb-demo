var Comment = React.createClass({
  render: function () {
    return (
      <div>
        <h4>{ this.props.author }</h4>
        <p>{ this.props.comment }</p>
      </div>
    )
  }
});






