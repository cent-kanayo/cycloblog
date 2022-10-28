import SingleBlog from './SingleBlog';
import react from '../assets/react.svg';
import java from '../assets/java.svg';
import html from '../assets/html.svg';

const blogs = [
  {
    title: 'The effect of not having a website',
    author: 'Cent Kanayo',
    image: java,
    id: 1,
    body: 'Blog1 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam consequatur illum vel nihil laudantium nostrum vitae omnis tenetur, ratione aspernatur, earum nobis consectetur nam recusandae repellat eligendi distinctio sint! Qui repudiandae exercitationem, consequuntur dolorum soluta amet maiores consequatur natus, cum placeat sequi, omnis veniam minima sit magni rerum quaerat aperiam!',
  },
  {
    title: 'The effect of not having a website',
    author: 'Cent Kanayo',
    image: html,
    id: 2,
    body: 'Blog2 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam consequatur illum vel nihil laudantium nostrum vitae omnis tenetur, ratione aspernatur, earum nobis consectetur nam recusandae repellat eligendi distinctio sint! Qui repudiandae exercitationem, consequuntur dolorum soluta amet maiores consequatur natus, cum placeat sequi, omnis veniam minima sit magni rerum quaerat aperiam!',
  },
  {
    title: 'The effect of not having a website',
    author: 'Cent Kanayo',
    image: react,
    id: 3,
    body: 'Blog3 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam consequatur illum vel nihil laudantium nostrum vitae omnis tenetur, ratione aspernatur, earum nobis consectetur nam recusandae repellat eligendi distinctio sint! Qui repudiandae exercitationem, consequuntur dolorum soluta amet maiores consequatur natus, cum placeat sequi, omnis veniam minima sit magni rerum quaerat aperiam!',
  },
];

const Feeds = () => {
  return (
    <div>
      {blogs.map((blog) => (
        <SingleBlog key={blog.id} {...blog} />
      ))}
    </div>
  );
};

export default Feeds;
