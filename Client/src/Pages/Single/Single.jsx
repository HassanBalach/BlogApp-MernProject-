import Sidebar from "../../Components/Sidebar/Sidebar";
import SinglePost from "../../Components/SinglePost/SinglePost";
import './Single.css'

export default function Single() {
  return (
    <div className='singlePage'>
      <SinglePost />
      <Sidebar />
    </div>
  )
}
