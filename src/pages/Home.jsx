import pic from 'C:/Source/reacting-to-routing/src/ghibli.jpg'

const Home = () => {
    return (
      <main className='container mt-5'>
        <img className='mx-auto d-block border shadow' src={pic} alt="" />
        <div className='row justify-content-center'>
          <h1 className='text-center mt-2'>Check out this Studio Ghibli stuff!</h1>
          
        </div>
        <div className='card text-center shadow my-2'>
                <div className='card-body'>
                  <h4 className='card-title'>Studio Ghibli API Lab</h4>
                  
                  <p className="card-text">This lab shows off my React skills.</p>
                 
                  <a href='https://www.google.com' className="card-link" target="_blank">Link to info</a>
                </div>
              </div>
      </main>
    )
}

export default Home;