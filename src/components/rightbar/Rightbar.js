import "./rightbas.css"
import { Users } from '../../dummyData'
import Online from "../online/Online"


export default function Rightbar({profile}) {

  const HomeRightbar =() =>{
    return(
      <>
      <div className="birthdayContainer">
          <img src="assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText"><b>Ankita </b> and <b> 3 other friends</b> have birthday today</span>
        </div>
        <img src="assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u)=>(
             <Online key ={u.id} user={u} />
          ))}
        </ul>
      </>
    )
  }
  const ProfileRightbar =() =>{
    return(
    <>
    <h4 className="rightbarTitle">
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfokey">City:</span>
          <span className="rightbarInfoValue">Banglore</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfokey">From:</span>
          <span className="rightbarInfoValue">Bihar</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfokey">Relationship:</span>
          <span className="rightbarInfoValue">Single</span>
        </div>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="assets/person/anki.jpg" alt="" className="rightbarFollowingimg" />
            <span className="rightbarFollowingName">Ankita Mallik</span>
          </div>
        </div>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="assets/person/anki.jpg" alt="" className="rightbarFollowingimg" />
            <span className="rightbarFollowingName">Ankita Mallik</span>
          </div>
        </div>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="assets/person/anki.jpg" alt="" className="rightbarFollowingimg" />
            <span className="rightbarFollowingName">Ankita Mallik</span>
          </div>
        </div>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="assets/person/anki.jpg" alt="" className="rightbarFollowingimg" />
            <span className="rightbarFollowingName">Ankita Mallik</span>
          </div>
        </div>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="assets/person/anki.jpg" alt="" className="rightbarFollowingimg" />
            <span className="rightbarFollowingName">Ankita Mallik</span>
          </div>
        </div>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="assets/person/anki.jpg" alt="" className="rightbarFollowingimg" />
            <span className="rightbarFollowingName">Ankita Mallik</span>
          </div>
        </div>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="assets/person/anki.jpg" alt="" className="rightbarFollowingimg" />
            <span className="rightbarFollowingName">Ankita Mallik</span>
          </div>
        </div>

      </div>
    </h4>
    </>
      )
  }
  return (
    <div className="rightbar">
      <div className="rightWrapper">
        <ProfileRightbar/>
      </div>
    </div>
  )
}
 