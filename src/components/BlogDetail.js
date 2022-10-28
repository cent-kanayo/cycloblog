import { useParams } from 'react-router-dom';
import CommentForm from './CommentForm';

const blogs = [
  {
    title: 'The effect of not having a website',
    author: 'Cent Kanayo',
    image:
      'https://images.pexels.com/photos/7568294/pexels-photo-7568294.jpeg?auto=compress&cs=tinysrgb&w=1600',
    id: 1,
    body: 'Blog1 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam consequatur illum vel nihil laudantium nostrum vitae omnis tenetur, ratione aspernatur, earum nobis consectetur nam recusandae repellat eligendi distinctio sint! Qui repudiandae exercitationem, consequuntur dolorum soluta amet maiores consequatur natus, cum placeat sequi, omnis veniam minima sit magni rerum quaerat aperiam!',
  },
  {
    title: 'The effect of not having a website',
    author: 'Cent Kanayo',
    image:
      'https://images.pexels.com/photos/4835419/pexels-photo-4835419.jpeg?auto=compress&cs=tinysrgb&w=1600',
    id: 2,
    body: 'Blog2 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam consequatur illum vel nihil laudantium nostrum vitae omnis tenetur, ratione aspernatur, earum nobis consectetur nam recusandae repellat eligendi distinctio sint! Qui repudiandae exercitationem, consequuntur dolorum soluta amet maiores consequatur natus, cum placeat sequi, omnis veniam minima sit magni rerum quaerat aperiam!',
  },
  {
    title: 'The effect of not having a website',
    author: 'Cent Kanayo',
    image:
      'https://images.pexels.com/photos/10962228/pexels-photo-10962228.jpeg?auto=compress&cs=tinysrgb&w=1600',
    id: 3,
    body: 'Blog3 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam consequatur illum vel nihil laudantium nostrum vitae omnis tenetur, ratione aspernatur, earum nobis consectetur nam recusandae repellat eligendi distinctio sint! Qui repudiandae exercitationem, consequuntur dolorum soluta amet maiores consequatur natus, cum placeat sequi, omnis veniam minima sit magni rerum quaerat aperiam!',
  },
];

const BlogDetail = () => {
  const { id } = useParams();
  console.log(id);
  const { image, title, body, author } = blogs.find((blog) => blog.id === +id);
  return (
    <div className="md:w-1/3 mx-auto p-4 md:p-0">
      <article>
        <div className="flex flex-col gap-4">
          <h3 className="text-3xl font-bold order-2">{title}</h3>
          <img src={image} alt={title} className="block order-1" width={400} />
        </div>
        <div className="flex justify-between items-center">
          <p className="text-sm">{author}</p>
          <p className="text-sm">12/03/2012</p>
        </div>
        <div>
          <p className="text-xl">{body}</p>
        </div>
      </article>
      <CommentForm />
    </div>
  );
};

export default BlogDetail;
