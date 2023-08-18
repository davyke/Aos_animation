import movie from "../Images/movie.jpg";
import "../styles.css";
const Hero = () => {
  return (
    <>
      <div className="hero">
        <img
          data-aos-delay="500"
          data-aos-easing="ease-in-sine"
          data-aos="zoom in"
          src={movie}
          alt="developer"
        />
        <h3 data-aos="fade-up">Welcome to quick movie dive</h3>
      </div>
    </>
  );
};
export default Hero;
