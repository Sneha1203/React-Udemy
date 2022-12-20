const Book = ({img, title, author}) => { /*with spread operator*/

  const clickHandler = (event) => {
    console.log(event)
    console.log(event.target)
    alert('clicky clicky')
  }

  const complexButton = (author) => {
    console.log(author)
  }
  return (
        <section onMouseOver={() => console.log(title)}>
          <img src={img} alt="" />
          <h1 onClick={() => console.log(title)}>{title}</h1>
          <h3>{author}</h3>
          <button type='button' onClick={clickHandler}>click me</button>
          <button type='button' onClick={() => complexButton(author)}>complex button</button>
        </section>  
  )
}

export default Book