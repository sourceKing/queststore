

const ProdImg = (props) => (
  <div
    style={{
      display: "inline-block",
      //flexFlow: 'column',
      //alignItems: 'flex-end',
      //justifyContent: 'flex-end',
      width: "100%",
      height: "100%",
      padding: "0 12px 12px 12px",
      //backgroundColor: props.color,
    }}
  >
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexFlow: "column",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        backgroundColor: props.color,
        borderRadius: 10,
        // backgroundImage: "url('"+props.url+"')",
        //backgroundSize: 'cover',
        //backgroundPosition: 'center',
        //backgroundRepeat: 'no-repeat'
      }}
    >
      {props.children}
    </div>
  </div>
);

export default ProdImg;