import * as data from './data.json'
const word = (<any>data);
console.log(word, word.id, word.default)

const first = word[0];
console.log(first);
// word.forEach((element:any) => {

//     console.log(element);
// });
interface all_cards
{
    id: string;
    date: string;
    heading: string;
    content: string;
    name : string;
    designation: string;
    status : string;
};

// const val : all_cards
// {
       
// }

// const show_cards = {card :  all_cards} : void => {
//     let output: string = ``;

// }