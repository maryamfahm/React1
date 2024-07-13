import PropTypes from "prop-types"

const CustomButton = ({bgColor, btnName, children}) => {
  const btnStyle = {
    backgroundColor:bgColor ||"blue",
    color:"white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor:"pointer",
    fontSize:"1rem",
    margin:"10px",
   
  }
  return (
    <button style={btnStyle}>{children || btnName}</button>
  )
}

CustomButton.propTypes = {
  bgColor: PropTypes.string,
  btnName: PropTypes.any,
  children: PropTypes.any
}


export default CustomButton