
const About = () => {
  return (
    <div style={{width:'100vw',boxSizing:'border-box',position:'absolute',left:0,top:0,bottom:0,right:0,padding:'2em',placeItems:'center',display:'flex'}}>
      <div style={{width:'40%', position:'sticky', top:'2em', textAlign:'left', padding:'2em'}}> 
        <img src="/profile.jpeg" width="80%" />
      </div>
      <div style={{width: '60%', float:'right', overflowY:'auto', textAlign:'left'}}> 
        Nice to meet you! <br></br>
        I'm Rena, a current undergraduate junior studying Computer Science and Applied Mathematics & Statistics at Johns Hopkins University.
        My current interests lie in developing software for medical devices and robotics.
      </div>
    </div>
  );
};

export default About;