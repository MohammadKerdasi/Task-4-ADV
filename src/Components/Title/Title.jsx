import './Title.css'

const  Title = ({subTitle , Title}) => {
  return (
    <div className='Mk-Title container d-flex justify-content-center align-items-center flex-column text-center py-5'>
        <h2 className='fs-2 fw-bold position-relative pb-4  ' style={{fontFamily : 'var(--second-font)',color : 'var(--bs-lightgray)'}}>{Title}</h2>
        <p className='mt-2'>{subTitle}</p>
    </div>
  )
}

export default Title