import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const People = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch('https://ghibliapi.herokuapp.com/people')
      .then(res => res.json())
      .then(allPeople => setPeople(allPeople))
  }, []);

  return (
    <main className='container'>
      <section className='row justify-content-center mt-5'>
        {people.map(person => (
          <div className='col-md-6' key={person.id}>
            <div className='card shadow my-2'>
              <div className='card-body'>
                <h4 className='card-title'>{person.name}</h4>
                <p className='card-subtitle text-muted'>{person.gender}</p>
                <p className="card-text">{person.age}</p>
                <a href={person.url} className="card-link" target="_blank">Link to info</a>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}

export default People;