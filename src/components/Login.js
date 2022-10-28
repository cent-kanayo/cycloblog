import { useState } from 'react';

const Login = () => {
  const [admin, setAdmin] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setAdmin((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = admin;
    console.log(username, password);
    if (!username || !password) {
      setError(true);
      return;
    }
    setAdmin({
      username: '',
      password: '',
    });
  };
  return (
    <main className="px-6 mt-20 h-full">
      {error && <h2>Invalid credentials</h2>}

      <form
        className="sm:w-1/2 md:w-1/3 m-auto bg-gray-200 px-4 py-8 shadow-sm hover:shadow-lg"
        onSubmit={handleSubmit}
      >
        <div className="flex space-y-2 mb-2 flex-col">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={admin.username}
            onChange={handleChange}
            className="outline-none border p-2 rounded-md"
            placeholder="Enter username"
          />
        </div>
        <div className="flex space-y-2 mb-2 flex-col">
          <label htmlFor="username">Password</label>
          <input
            type="password"
            name="password"
            value={admin.password}
            onChange={handleChange}
            className="outline-none border p-2 rounded-md"
            placeholder="Enter password"
          />
        </div>
        <button
          type="submit"
          className="bg-orange-500 px-8 py-2 border-none rounded-md text-white mt-2"
        >
          Login
        </button>
      </form>
    </main>
  );
};

export default Login;
