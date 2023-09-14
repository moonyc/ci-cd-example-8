import HelpBox from './HelpBox';
import './HelpArea.css';

const HELP_ITEMS = [
  {
    id: 'h1',
    title: 'What is Git?',
    text: 'Git is a distributed version control system that tracks changes in any set of computer files, usually used for coordinating work among programmers who are collaboratively developing source code during software development',
  },
  {
    id: 'h2',
    title: 'What is GitHub?',
    text: 'GitHub, Inc. is a platform and cloud-based service for software development and version control using Git, allowing developers to store and manage their code.',
  },
  {
    id: 'h3',
    title: 'What is GitHub Actions?',
    text: 'GitHub Actions is a continuous integration and continuous delivery (CI/CD) platform that allows you to automate your build, tet, and deployment pipeline.',
  },
];

function HelpArea() {
  return (
    <section data-testid="help-area" id="help-area">
      {HELP_ITEMS.map((item) => (
        <HelpBox key={item.id} title={item.title} text={item.text} />
      ))}
    </section>
  );
}

export default HelpArea;
