function Price({oldPrice,newPrice}) {
    let oldsStyles = {
        textDecorationLine :"line-through",

    };
    let newStyles = {
        fontWeight: "bold",

    }
    let styles = {
        backgroundColor: "pink",
        borderBottomLeftRadius:"14px",
        borderBottomRightRadius:"14px",
    }

  return (
    <div style={styles}>
      <span style={oldsStyles}>{oldPrice}</span>
      &nbsp;&nbsp; 
      <span style={newStyles}>{newPrice}</span>
    </div>
  );
}

export default Price;
