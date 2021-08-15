console.log('App.js is running');

//JSX-JavaScript XML
const app ={
    Title:'reactapp',
    Subtitle:'app',
    options:[]
};
const onFormSubmit = (e) =>{
e.preventDefault();

const option = e.target.elements.option.value;

if(option){
    app.options.push(option);
    e.target.elements.option.value = ' ';
    renderApp();
}

};
const removeAll = () =>{
    app.options = [];
    renderApp();
}
const onMakeDecision = () =>{
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option)
    console.log(randomNum);
    
};

const appRoot = document.getElementById('app');

const numbers = [55,66,77];

const renderApp  = () =>{
    const  template =(<div>
        <h1>{app.Title}</h1>
        {app.subtitle && <p>{app.Subtitle}</p>}
        <p>{app.options.length > 0 ? "here are options " : "No options "}</p>
        <button disabled = {app.options.length === 0} onClick = {onMakeDecision}>what should I do ?</button>
        <button onClick = {removeAll}>Remove all</button>
        {
           numbers.map((num) =>{
               return <p key ={num}>Number:{num}</p>
           })
        }
        <ol>
        {
           app.options.map((option) =>{
                return <li key={option}>{option}</li>
            })
        }
      
        </ol>
        <form onSubmit = {onFormSubmit}>
        <input type ="text" name ="option"></input>
        <button >Add Option</button>
        </form>
        </div>
        );
        
        ReactDOM.render(template,appRoot);


}
renderApp();
// const  user ={
//     name:'sandeep',
//     age:19,
//     location:'Madanapalle',
    
    
// }
// function getLocation(location){
//     if(location){
//         return <p>location:{location}</p>;
//     }
//     else{
//         return undefined;
//     }
// }
// const userName = 'sandeep';
// const userAge = 19;
// const userLocation ='madanapalle'
// const templatetwo = (
//     <div>
//     <h1>{user.name? user.name :'Anonymous'}</h1>
//     {(user.age && user.age >=18) && <p>Age:{user.age}</p>}
    
//     {getLocation(user.location)}
//     </div>
// );

