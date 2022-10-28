import { lazy } from 'react';
import { Link } from 'react-router-dom';

const SingleBlog = ({ title, image, body, author, id }) => {
  return (
    <Link to={`blogs/${id}`}>
      <article className="mb-10 bg-gray-100 p-10">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <img
            src={image}
            alt={title}
            className=""
            width={600}
            loading={lazy}
          />

          <div>
            <h3 className="text-3xl font-bold mb-6">{title}</h3>
            <p className="text-xl mb-10">{body.slice(0, 100)}...</p>
            <button className="bg-blue-500 text-white text-2xl px-8 py-2 rounded-md shadow-md">
              Read more
            </button>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default SingleBlog;
