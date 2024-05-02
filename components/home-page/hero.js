import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/profile2.jpg'
          alt='An image showing me'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Chaitanya</h1>
      <p>
        I blog about programming and random shit.
      </p>
    </section>
  );
}

export default Hero;
