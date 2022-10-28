import { useState } from 'react';

const CommentForm = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    comment: '',
  });

  const handleChange = (e) => {
    setUser((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-2">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Please enter your name"
            value={user.name}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="name">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Please enter your name"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="name">Comment</label>
          <textarea
            name="comment"
            cols="30"
            rows="10"
            placeholder="Please enter your comment"
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CommentForm;
