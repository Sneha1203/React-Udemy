import React from "react"
import ReactDOM from 'react-dom'

// function Greetings() {
//   return <h4>This is my first component</h4>
// }

// function Greetings() {
//   return (
//     <React.Fragment>   
//       <Person/>
//       <Message/>
//     </React.Fragment>
//   )
// }

// we can use <> and </> instead of <React.Fragment> and </React.Fragment>

// const Person = () => <h2>Sneha Chandak</h2>
// const Message = () => {
//   return <p>This is my Message.</p>
// }

// ReactDOM.render(<Greetings/>, document.getElementById('root'))


// function BookList() {
//   return (
//     <section>
//       <Book/>
//       {/* <Book/>
//       <Book/>
//       <Book/>
//       <Book/>
//       <Book/>
//       <Book/>
//       <Book/>
//       <Book/> */}
//     </section>
//   )
// }

// const Book = () => {
//   return (
//     <div>
//       <Image/>
//       <Title/>
//       <Author/>
//     </div>
//   )
// }

// const Image = () => {
//   return (
//     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSELpQNePAjJZS6aDw92wjLLx60VI0XNOcSTQ&usqp=CAU" alt="" />
//   )
// }

// const Title = () => {
//   return <h2>I Love You to the Moon and Back</h2>
// }

// const Author = () => {
//   return <h4>Amelia Hepworth</h4>
// }


// const author = "Amelia Hepworth"
// const Book = () => {
//   const title = "I Love You to the Moon and Back"
//   return (
//     <section>
//       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSELpQNePAjJZS6aDw92wjLLx60VI0XNOcSTQ&usqp=CAU" alt="" />
//       <h2>{title}</h2>
//       <h4>{author}</h4>
//     </section>
//   )
// }



// Passing objects as a prop
// const firstBook = {
//   img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSELpQNePAjJZS6aDw92wjLLx60VI0XNOcSTQ&usqp=CAU',
//   author: 'Amelia Hepworth',
//   title: 'I Love You to the Moon and Back'
// }

// const secondBook = {
//   img: 'https://m.media-amazon.com/images/I/71aLultW5EL.jpg',
//   author: 'Shannon Olsen',
//   title: 'Our Class is a Family'
// }

// function BookList() {
//   return (
//     <div>
//       <Book img = {firstBook.img} author = {firstBook.author} title = {firstBook.title}>
//         <p>bjfdsfbg gdfhjg  kghdfjad khdjaa jh kjhjkshdajhd hkjdhakjshd khjkhdkjahsd hkshdkajhd</p> {/*children props*/}
//       </Book>
//       <Book img = {secondBook.img} author = {secondBook.author} title = {secondBook.title}/>
//     </div>
//   )
// }

// const Book = ({img, title, author, children}) => {
//   // const {img, title, author, children} = props;
//   return (
//     <section>
//       <img src={img} alt="" />
//       <h1>{title}</h1>
//       <p>{children}</p>
//       <h3>{author}</h3>
//     </section>
//   )
// }



// Passing lists as props
// const books = [
  
//   {
//     id: 1,
//     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSELpQNePAjJZS6aDw92wjLLx60VI0XNOcSTQ&usqp=CAU',
//     author: 'Amelia Hepworth',
//     title: 'I Love You to the Moon and Back'
//   },
//   {
//     id: 2,
//     img: 'https://m.media-amazon.com/images/I/71aLultW5EL.jpg',
//     author: 'Shannon Olsen',
//     title: 'Our Class is a Family'
//   }
// ]

import { books } from "./books";
// import {data} from "./books"; we can't use any name for name exports which are not default
import Book from "./Book";
// import AnyBook from "./Book"; we can use any name for defaule exports

function BookList() {
  return <section>
    {books.map((book) => {
      // return <Book key={book.id} book={book}/> without spread operator
      return <Book key={book.id} {...book}/>; /*with spread operator*/
    })}
  </section>

}

// const Book = (props) => { without spread operator
  // const {img, title, author} = props.book; without spread operator
  // const {img, title, author} = props; /*with spread operator*/
// const Book = ({img, title, author}) => { /*with spread operator*/

//   const clickHandler = (event) => {
//     console.log(event)
//     console.log(event.target)
//     alert('clicky clicky')
//   }

//   const complexButton = (author) => {
//     console.log(author)
//   }
//   return (
//         <section onMouseOver={() => console.log(title)}>
//           <img src={img} alt="" />
//           <h1 onClick={() => console.log(title)}>{title}</h1>
//           <h3>{author}</h3>
//           <button type='button' onClick={clickHandler}>click me</button>
//           <button type='button' onClick={() => complexButton(author)}>complex button</button>
//         </section>  
//   )
// }

ReactDOM.render(<BookList/>, document.getElementById('root'))