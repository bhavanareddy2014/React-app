class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }
    handleToggleVisibility() {
          this.setState((prevState)=>{
              return {
                  visibility : !prevState.visibility
              }
          })
    }
    render() {
        return (
            <div>
            <h1>VisibilityToggle</h1>
            <button onClick={this.handleToggleVisibility}> {this.state.visibility ? 'Hide details' : 'show details'}</button>
           {
               this.state.visibility && (
                   <div>
                   <p>Here are some details </p>
                   </div>
               )
           }
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle/>,document.getElementById('app'));

// let Visibility = false;

// const toggleVisibility = () =>{
//     Visibility = !Visibility;
//     render();
// }

// const render = () => {
//     const jsx = (
//         <div>
//         <h1>Visibility Toggle</h1>
//         <button onClick = {toggleVisibility}>
//         {Visibility ? 'Hide details' : 'show details'}
//         </button>
//         {Visibility && (
//             <div>
//             <p> Hey these are some details you can now see</p>
//             </div>
//         )}
//         </div>

//     ); 

//     ReactDOM.render(jsx,document.getElementById('app'));
// };

// render();