import profilePic from './assets/profile.jpg'


function Card(){
    return(
        <div className="card">
            <img
             src={profilePic}
             alt="profile picture"
             className="card-image">
            </img>

            <h2 className="card-title"> Card Name</h2>
            <p className="card-text"> Card Description</p> 
        </div>

    )
}
export default Card