import React from 'react';
import Section from '../layout/Section';
import styles from './AboutSection.module.css';

const AboutSection: React.FunctionComponent = () => {
  return (
    <Section>
      <h2 className={styles.heading}>Background</h2>
      <p className={styles.paragraph}>
        Insert user's background information here.
      </p>
      <h2 className={styles.heading}>Skills</h2>
      <ul className={styles.list}>
        <li>Skill 1</li>
        <li>Skill 2</li>
        <li>Skill 3</li>
        {/* Add more skills as needed */}
      </ul>
      <h2 className={styles.heading}>Interests</h2>
      <p className={styles.paragraph}>
        Insert user's interests here.
      </p>
    </Section>
  );
};

export default AboutSection;
