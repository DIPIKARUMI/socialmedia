import './online.css'

export default function Online({user}) {
  return (
    <li className="rightBarFriend">
            <div className="rightbarProfileImgContainer">
              <img src={user.profilePicture} alt="" className="rightbarProfileImg" />
              <span className="rightBarOnliner"></span>
            </div>
            <span className="rightbarUsername">{user.username}</span>
          </li>
  )
}
