import { AiFillHome } from 'react-icons/ai';

const AdminDash = () => {
  return (
    <div className="flex">
      <div>
        <div className="flex pb-6 border-b border-gray-500">
          <AiFillHome />
          <h5>Dashboad</h5>
        </div>
        <div className="flex pb-6 border-b border-gray-500">
          <div>
            <AiFillHome />
            <h5>Content</h5>
          </div>
          <div>
            <AiFillHome />
            <h5>Controls</h5>
          </div>
        </div>
        <div className="flex pb-6 border-b border-gray-500">
          A
          <AiFillHome />
          <h5>Dashboad</h5>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default AdminDash;
