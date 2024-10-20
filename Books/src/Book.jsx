import React, { useState } from 'react';
import axios from 'axios';

const Book = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [publishedYear, setPublishedYear] = useState('');

  const handleSubmit = async () => {
    

    try {
        const response = await axios.post('http://localhost:5000/api/routes', {
            title,
            author,
            genre,
            publishedYear,
          });
          

      console.log(response.data); 
      setTitle(''); 
      setAuthor('');
      setGenre('');
      setPublishedYear('');
    } catch (error) {
      console.error('Error creating book:', error);
      
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Author:</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Genre:</label>
        <input
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Published Year:</label>
        <input
          type="number"
          value={publishedYear}
          onChange={(e) => setPublishedYear(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Book</button>
    </form>
  );
};

export default Book;
