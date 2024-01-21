import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Home = () => {

  const linkedinUrl = 'https://www.linkedin.com/in/renabi30';
  const githubUrl = 'https://github.com/renabi30/';
  const email = 'mailto:rbi4@jhu.edu';

  return (
    <div style={{placeItems:'center'}}>
      <p>Hi!</p>
      <h1>I'm Rena Bi</h1>
      <p>I am a CS/AMS student at Johns Hopkins University, currently based in the Baltimore-DC metropolitan area.</p>
      <div className="socialLinks" style={{paddingTop:'2em',width:'5em',justifyContent:'space-between',display:'flex'}}>
        <a href={email} target="_blank" rel="noopener noreferrer">
          <FaEnvelope />
        </a>
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
    </div>

  );
};

export default Home;