function InfoField({ title, value, icon }) {
  return (
    <div className='d-flex mb-2 mx-0'>
      {icon}
      <div className='mx-0 lh-1'>
        <h5 className='mb-0'>{title}</h5>
        <span className='fw-light'>{value}</span>
      </div>
    </div>
  );
}

export default InfoField;