import BAndWPicture from "../images/b&waboutpic.jpeg";

export default function Home() {
  return (
    <div className="top-header-container">
      <div className="circle1"></div>
      <div className="header-title-wrapper">
        Welcome to my Front End Capstone Project!
      </div>

      <div className="pic-name-msg-container">
        <img src={BAndWPicture} alt="Black and white photo of the developer" />
        <div className="circle2"></div>
        <div className="f-l-name-wrapper">Denise Justice</div>
        <div className="msg-wrapper">Code, Design, Improve.....Repeat!</div>
      </div>
    </div>
  );
}
