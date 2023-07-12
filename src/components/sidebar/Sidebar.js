import "./sidebar.css";
import FeedbackTwoToneIcon from "@mui/icons-material/FeedbackTwoTone";
import ChatTwoToneIcon from "@mui/icons-material/ChatTwoTone";
import GroupTwoToneIcon from "@mui/icons-material/GroupTwoTone";
import BookmarkBorderTwoToneIcon from "@mui/icons-material/BookmarkBorderTwoTone";
import EventAvailableTwoToneIcon from "@mui/icons-material/EventAvailableTwoTone";
import WorkTwoToneIcon from "@mui/icons-material/WorkTwoTone";
import VideoLibraryTwoToneIcon from "@mui/icons-material/VideoLibraryTwoTone";
import SchoolIcon from "@mui/icons-material/School";
import HelpIcon from "@mui/icons-material/Help";
import Friends from "../friends/Friends";
import { Users } from '../../dummyData'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sideWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <FeedbackTwoToneIcon className="feedback" />
            <span className="sidebrListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <ChatTwoToneIcon className="feedback" />
            <span className="sidebrListItemText">Chat</span>
          </li>
          <li className="sidebarListItem">
            <VideoLibraryTwoToneIcon className="feedback" />
            <span className="sidebrListItemText">Video</span>
          </li>
          <li className="sidebarListItem">
            <GroupTwoToneIcon className="feedback" />
            <span className="sidebrListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <BookmarkBorderTwoToneIcon className="feedback" />
            <span className="sidebrListItemText">Bookmark</span>
          </li>
          <li className="sidebarListItem">
            <WorkTwoToneIcon className="feedback" />
            <span className="sidebrListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <EventAvailableTwoToneIcon className="feedback" />
            <span className="sidebrListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <SchoolIcon className="feedback" />
            <span className="sidebrListItemText">Courses</span>
          </li>
          <li className="sidebarListItem">
            <HelpIcon className="feedback" />
            <span className="sidebrListItemText">Questions</span>
          </li>
          <button className="sidebarButton">Show More</button>
          <hr className="sidebarHr" />
          <ul className="sidebarFriendList">
          {Users.map((u)=>(
             <Friends key ={u.id} user={u} />
          ))}
           
          </ul>
        </ul>
      </div>
    </div>
  );
}
