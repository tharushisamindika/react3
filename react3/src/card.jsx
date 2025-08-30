
import profilePic from "./assets/ProfilePicture.jpg";


function card() {

    return (
        <div className="card" >
            <img src={profilePic} alt="Profile Picture" />
            <h2>Tharushi</h2>
            <p>I am a student and i am learning</p>

        </div>


    );


}

export default card