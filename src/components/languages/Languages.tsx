import './Languages.css';

export const Languages = () => {
  return (
    <section className='languages-block'>
      <h5 className="title">LANGUAGES</h5>
      <div className='language-container'>
        <p className='text'>English - <span className='text-level'>Advanced</span></p>
      </div>
      <div className='language-container'>
        <p className='text'>Spanish - <span className='text-level'>Native</span></p>
      </div>
    </section>
  )
}
