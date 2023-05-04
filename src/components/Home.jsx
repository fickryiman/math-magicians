import React from 'react';
import styles from './Home.module.css';

const Home = () => (
  <div className={styles.container}>
    <h2 className="greeting">
      Welcome to our page!
    </h2>
    <p className={styles.sentences}>
      Mathematics is a branch of science that deals with the study of numbers, quantities,
      and shapes, as well as the relationships between them, using logical reasoning and
      quantitative calculations.
    </p>
    <br />
    <p className={styles.sentences}>
      Mathematics is a field of study that deals with numbers, quantities, shapes, and the
      relationships between them. It involves using logical reasoning and quantitative
      calculations to solve problems and develop theories. Mathematics is used in various fields,
      such as science, engineering, finance, and economics, to model and analyze real-world
      phenomena. It is a fundamental discipline that plays a critical role in advancing scientific
      knowledge and technological innovation. The study of math also helps develop
      critical thinking, problem-solving, and analytical skills, which are essential
      for success in various professions and everyday life.
    </p>
    <br />
    <p className={styles.sentences}>
      Mathematics is a fundamental aspect of human knowledge that goes beyond mere calculations
      and formulas. At its core, mathematics is a way of thinking and reasoning that enables
      us to understand and model the world around us. It is a language that allows us to
      describe complex phenomena, from the smallest subatomic particles to the largest galaxies,
      in a precise and quantitative way.
      Moreover, mathematics embodies the human spirit of inquiry, curiosity, and creativity.
      It allows us to explore abstract concepts and develop new theories, without being constrained
      by the physical world. Through mathematics, we can uncover hidden patterns and structures in
      nature and create innovative solutions to complex problems.
      In essence, mathematics is not just a subject or a tool, but a way of seeing and
      understanding the world. It reflects our innate desire to explore, discover, and make
      sense of the universe, and it plays a crucial role in shaping our understanding of the
      natural and physical world.
    </p>
  </div>
);

export default Home;
