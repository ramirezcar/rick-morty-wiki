function InfoField({title, value, icon}) {
  return ( 
    <div className='row d-flex mb-2 mx-0'>
      {icon}
      <div className='col-10 mx-0 lh-1'>
        <div className='fw-bold quote row'>{title}</div>
        <span className='fw-light row'>{value}</span>
      </div>
    </div>
   );
}

export default InfoField;