import "./styles/Home.css";

function Wave() {
  return (
    <svg
      className="wave"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -100 1440 320"
    >
      <path
        fill="#0073d1"
        fill-opacity="1"
        d="M0,96L40,90.7C80,85,160,75,240,90.7C320,107,400,149,480,170.7C560,192,640,192,720,165.3C800,139,880,85,960,64C1040,43,1120,53,1200,58.7C1280,64,1360,64,1400,64L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
      ></path>
    </svg>
  );
}

function Home() {
  return (
    <div className="home">
      <div className="section one"></div>
      <Wave />
      <div className="section two"></div>
      <div className="section three"></div>
    </div>
  );
}

export default Home;
