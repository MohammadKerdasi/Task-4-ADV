import './Third.css'

const Third = () => {
  return (
    <>
    <div style={{backgroundColor : 'var(--bs-indigo)'}}>
        <div className="container text-center py-5 px-3">
            <h3 style={{fontFamily : 'var(--second-font)' ,}} className="fw-bold text-white mb-4">In an emergency? Need help now?</h3>
            <p style={{fontFamily : 'var(--first-font)' ,}} className="text-white fs-6 mk-thirdText">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <button className=" border border-2 border-white py-2 px-4 mt-4 text-white " style={{fontFamily : 'var(--second-fontt)' , backgroundColor : 'var(--bs-indigo)'}}>Make An Appointment</button>
        </div>
    </div>    
    </>
  )
}

export default Third