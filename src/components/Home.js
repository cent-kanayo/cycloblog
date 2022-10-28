import Feeds from './Feeds';
import Trial from './Trial';

const Home = () => {
  return (
    <main className="px-4 md:px-0 container mx-auto mb-10">
      <div className="">
        <h1>Welcome to our blog</h1>
        <Feeds />
        <Trial />
      </div>
    </main>
  );
};

export default Home;
