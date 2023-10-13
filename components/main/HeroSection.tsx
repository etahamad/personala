import Image from 'next/image';
import Section from '../layout/Section';
import Button from '../ui/Button';
import LinkText from '../ui/LinkText';
import Callout from './Callout';
import Header from './Header';

const HeroSection: React.FunctionComponent = () => {
  return (
    <main className="hero-section" id="hero">
      <Header />
      <Section>
        <h2 className="about-heading leading-snug font-medium text-base text-zinc-900">
          {'about Omar.'}
        </h2>
        <div className="about-content-wrapper leading-6 text-sm font-normal text-zinc-500 mt-4">
          <p>
            {
              'Hello! I am Omar, an engineer with a passion for designing and building scalable websites and applications. I strive to create products with excellent user experience, aesthetic design, and meaningful impact.'
            }
          </p>
        </div>
        <Callout className="mt-4">
          <p>
            {
              'I am currently open to new opportunities in engineering roles, particularly those involving user interface and experience design, and frontend engineering.'
            }
          </p>
          <p className="mt-2 mb-4">
            {
              'I enjoy working with a team of engineers and designers who are passionate about building great products. Interested in collaborating? Feel free to schedule a meeting!'
            }
          </p>
          <div className="flex flex-row items-center justify-start gap-4">
            <Button onClick={() => window.open('https://cal.com/omarhamad')}>
              {'Schedule a meeting / cal.com'}
            </Button>
            <LinkText
              href={'/resume'}
              className="text-zinc-600 font-medium text-sm">
              {'Resume'}
            </LinkText>
          </div>
        </Callout>
      </Section>
    </main>
  );
};

export default HeroSection;
