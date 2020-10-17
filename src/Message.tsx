import React from 'react';
import messageHoc from './Hoc';

// Starting with Capital letter.
// Don't show in your compiled code
// Proper method: Define props in the interface => Pass them into the component

interface UserMessage {
    name: string;
    message: string;
}

function Message( props : UserMessage) : any  {

    // let testVariable : Number = 23;
    // let testArray : number[] = [ 1, 2, 3, 4 ];
    //let testArrayString : Array <String> = [ 'A', 'B',  'C']
    //let testTuple : [ string, number ] = [ "String" , 34];

    // Tuple  
    let aTuple: Array< string | number > = [ 'Manu', 56 ]

    // Any
    let varAny: any = 4;

    // Void
    const warning = (): void => {
        console.log('Warning');
    }

    return (
        <div>
            <h2>{props.message} , { props.name } </h2>
            0. React TypeScript in 2020: Type of { aTuple[1] } is {typeof aTuple[1] } type!<br />

            1. Type of { varAny } is { typeof varAny } type!... <br />
            2. Type of { `warning` } is { typeof warning } type!... <br />

        </div>
    )
}

const example = (props: any ): any => <h2>{props.name}, {props.message} </h2>
const Message2 = messageHoc(example);

export { Message, Message2 };
/**
 * Interface Example
 
 inteface SearchFunc {
     (source: string, subString: string) : boolean;
 }

 let mySearch: SearchFunc;

 mySearch = function( source: string, subString: string) {
     let result = source.search(subString);
     return result > -1;
 }
 
 */