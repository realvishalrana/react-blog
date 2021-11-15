import "./single.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Singlepost from "../../components/singlePost/SinglePost";
const Single = () => {
  return (
    <div className="single">
      <Singlepost />
      <Sidebar />
    </div>
  );
};

export default Single;
