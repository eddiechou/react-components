var GroceryListComponent = (props) => (
  <ul>
    {props.items.map(item => 
      <GroceryListItem item={item}/>
    )}
  </ul>
);

{ /*}
var ApplesComponent = (props) => (
  <li>Apples</li>
);

var OrangesComponent = () => (
  <li>Oranges</li>
);
*/ }

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bold: false
    };

  }

  onListItemHover() {
    this.setState({
      bold: !this.state.bold
    });
  }

  render() {
    var style = {
      fontWeight: this.state.bold ? 'bold' : 'normal'
    };

    return (
      <li style={style} onMouseEnter={this.onListItemHover.bind(this)} onMouseLeave={this.onListItemHover.bind(this)}>{this.props.item} </li>
    );
  }
}


ReactDOM.render(<GroceryListComponent items={['apples', 'oranges']} />, document.getElementById('app'));