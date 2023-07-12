import './friend.css'

export default function Friends({user}) {
  return (
    <li className="sidebarFriend">
        <img src={user.profilePicture} alt="" className="sidebarFriendImg" />
        <span className="sidebarFriendNamr">{user.username}</span>
    </li>
  )
}

