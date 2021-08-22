import './App.css';
import Profile from './Profile/Profile';

function App() {
  const user={fullName:'Ahmed Kouki'  ,
              bio:'Full stack web development, I have experience in dealing with programming and modern web technologies, I built a lot of projects that have increased my experience and trained a lot, I am a fast learner and always love to develop myself . ',
              profession:'Senior developer ,Full-stack MERN developer'};
  const handleName=(user)=>{alert(`Your Name's : ${user.fullName}`)};


  return (
          <div className='App'>
            <h1>Profile User</h1>
            <Profile user={user} handleName={handleName}>
              <img src='/assets/avatarUser.png' alt='AvatarUserImage' className='avatar'/>
            </Profile>
          </div>
  );
}

export default App;