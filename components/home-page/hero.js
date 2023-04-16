import Image from 'next/image';
import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/RyanSutrisno.webp"
          alt="Ryan Sutrisno"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Ryan</h1>
      <p>This is my blog site - especially frontend framework like React</p>
    </section>
  );
}

export default Hero;
