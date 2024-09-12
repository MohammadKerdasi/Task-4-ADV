import './MakeBtn.css'

const MakeBtn = ({className}) => {
  return (
    <button
    type="submit"
    style={{ backgroundColor: "#3fbbc0", fontSize: "14px" , maxHeight : '40px' }}
    className={`btn btn-info text-light ms-4 Mk-btn ${className}`}
  >
    Make an Appointment
  </button>
  )
}

export default MakeBtn