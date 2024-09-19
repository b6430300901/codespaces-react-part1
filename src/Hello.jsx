// const Hello = function(props) {
//     // let name="wiphawee Laokhimsawat"
//     return (<>
//         <h1>Hello, {props.fname}{props.lname}</h1>
        
//         <hr></hr>
//         </>
//     );
// }
// export default Hello;

// export default function Hello(props) {
//     // let name="wiphawee Laokhimsawat"
//     return (<>
//         <h1>Hello, {props.fname}{props.lname} !!!</h1>
        
//         <hr></hr>
//         </>
//     );
// }
import './Hello.css';
export default function Hello({fname,lname="jaidee",age=25}) {
    // let name="wiphawee Laokhimsawat"
    return (<>
        <h1>Hello, {fname} {lname}{age} !!!</h1>
        
        <hr></hr>
        </>
    );
}