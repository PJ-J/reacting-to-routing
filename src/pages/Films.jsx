import React, { useEffect, useState } from 'react';

const Films = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch('https://ghibliapi.herokuapp.com/films')
      .then(res => res.json())
      .then(allFilms => setFilms(allFilms))
  }, []);

  return (
    <main className='container'>
      <section className='row justify-content-center mt-5'>
        {films.map(film => (
          <div className='col-md-6' key={film.id}>
            <div className='card shadow my-2'>
              <img src={film.image} className="card-img-top" alt="..." />
              <div className='card-body'>
                <h4 className='card-title'>{film.title}</h4>
                <p className='card-subtitle text-muted'>{film.original_title}</p>
                <p className="card-text">{film.description}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}

export default Films;