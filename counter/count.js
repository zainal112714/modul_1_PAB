// // functional component
// const FunctionCount = () => {
//   // Membuat function Utama
//   const [count, setCount] = React.useState (0)

//   // membuat function untuk penambahan nilai
//   const incrementCount = () => {
//     setCount (count + 1);
//   }

//   // membuat function pengurangan nilai
//   const decrementCount = () => {
//     setCount (count - 1);
//   }

//   return (
//     <div>
//         <h2>{count}</h2>
//         <button onClick={incrementCount}>+ 1</button>
//         <button onClick={decrementCount}>- 1</button>
//     </div>
//   )
// }

// class component
class ClassCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decreaseCount = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h2><strong>{this.state.count}</strong></h2>
        <div>
          <button onClick={this.decreaseCount}>-1</button>
          <button onClick={this.increaseCount}>+1</button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<FunctionCount />, document.getElementById('root'));