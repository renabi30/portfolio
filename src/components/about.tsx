import CSS from 'csstype';

const About = () => {

  const about_p1 = `
    I'm Rena, a current undergraduate at Johns Hopkins University studying Computer Science
    and Applied Mathematics & Statistics. Currently, I am a teaching assistant for Computer 
    System Fundamentals, guiding students through programming assignments on topics
    relating to computer networks, CPU architecture, and concurrency.
  `

  const about_p2 = `
    Additionally, I have a wide 
    variety of past experiences from data science research on improving surgical training to
    front-end website design. My current passions lie in developing software and researching
    mathematical models for medical devices and surgical robots. 
  `

  const about_p3 = `
    Aside from my academic interests, I love to learn new recipes and go running
    outdoors!
  `

  const about_p4 = `
    Developed using Figma, coded in Visual Studio Code using React and TypeScript, deployed using Github ⭐️
  `

  const containerStyle: CSS.Properties = {
    width:'100vw', 
    position:'absolute',
    left:0,
    top:0,
    bottom:0,
    right:0,
    marginTop:'5em',
    marginBottom:'5em',
    display:'flex',
  };

  const leftStyle: CSS.Properties = {
    width:'40%',
    height:'100%',
    display:'block',
    placeItems:'center',
    contain:'strict'
  };

  const imgStyle: CSS.Properties = {
    paddingLeft:'5em',
    maxWidth:'100%',
    maxHeight:'100%',
    position:'fixed',
  };

  const rightStyle: CSS.Properties = {
    padding:'0em 5em',
    width:'60%',
    float:'right',
    flex:'1',
    overflowY:'auto',
    display:'grid',
  };


  return (
    <div style={containerStyle}>
      <div style={leftStyle}>
        <img src="/profile.jpeg" alt="profile picture of Rena" style={imgStyle}/>
      </div>
      <div style={rightStyle}>
        <span style={{marginBottom:'20px'}}>Nice to meet you!</span>
        <span style={{marginBottom:'20px'}}>{about_p1}</span>
        <span style={{marginBottom:'20px'}}>{about_p2}</span>
        <span style={{marginBottom:'20px'}}>{about_p3}</span>
        <span style={{fontSize:'0.7em'}}>{about_p4}</span>
      </div>
    </div>
  );
};

export default About;

/*
 width: '100%', height: 'auto', overflow:'hidden',position: 'sticky', top: '0'
{ width:'40%', placeItems:'center', float:'left', flex:1, position:'sticky'}

    staticLeft: {
      width:'40%',
      float:'left'
    },
    scrollRight: {
      width:'60%',
      float:'right',
      flex:'1',
      overflowY:'auto',
      padding:'20px',
    },


<div style={{width:'40%',position:'sticky',top:'5em',textAlign:'left',padding:'2em'}}> 
        <img src="/profile.jpeg" width="100%" />
      </div>
      <div style={{width:'60%', float:'right', overflowY:'scroll', textAlign:'left', display:'grid'}}> 
        <span>Nice to meet you!</span>
        <span style={{paddingTop:'0.5em'}}>{about_p1}</span>
        <span style={{paddingTop:'0.5em'}}>{about_p2}</span>
        <span style={{fontSize:'0.7em', paddingTop:'2em'}}>{about_p3}</span>
      </div>
*/