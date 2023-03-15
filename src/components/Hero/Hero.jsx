import styles from "./Hero.module.css";
import hero from "../../assets/Exterior/hero.jpg";

const Hero = () => {
  return (
    <section>
      <div className={styles.hero_img_container}>
        <h1 className={styles.title}>Atlantis Homes III</h1>
        <img
          src={hero}
          className={styles.hero_img}
          alt="Atlantis homes three"
        />
      </div>
    </section>
  );
};

export default Hero;
