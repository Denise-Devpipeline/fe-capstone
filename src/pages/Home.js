import BAndWPicture from "../images/b&waboutpic.jpeg";

function Home() {
  return (
    <div className="home-page">
      <img src={BAndWPicture} alt="Black and white photo of the developer" />
      <span>Something in span</span>
    </div>
  );
}

export default Home;
