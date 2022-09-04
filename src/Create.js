import { useState } from "react";
import { useNavigate} from "react-router-dom"

const Create = () => {
  const [ title, setTitle ] = useState('');
  const [ body, setBody ] = useState('');
  const [ author, setAuthor ] = useState('David');
  const [ isPending, setIsPending ] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reloading
    const blog = { title, body, author };

    setIsPending(true);

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(blog)
    })
    .then(() => {
      console.log('New blog added');
      setIsPending(false);
      navigate('/');
    });


  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Blog title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange = {(e) => setTitle(e.target.value)}
        />

        <label htmlFor="body">Blog body:</label>
        <textarea name="body" cols="30" rows="10" 
          required
          value={body}
          onChange = {(e) => setBody(e.target.value)}
        ></textarea>

        <label htmlFor="author">Blog author:</label>
        <select 
          name="author"
          value={ author }
          onChange = {(e) => setAuthor(e.target.value)}
        >
          <option value="David">David</option>
          <option value="Peter">Peter</option>
        </select>

        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding blog...</button>}
      </form>
    </div>
  );
}

export default Create;