import Logo from '../components/Logo';
import Counter from '../components/Counter';
import Header from '../components/Header'
import Greeting from '../components/BackendHello';
import reactLogo from '../assets/react.svg';
import viteLogo from '../assets/vite.svg';

export default function Home() {
  return (
    <>
      <div>
        <Logo href="https://vite.dev" src={viteLogo} alt="Vite logo" className="logo" />
        <Logo href="https://react.dev" src={reactLogo} alt="React logo" className="logo react" />
      </div>
      <Header title="Hello There!"/>
      <Counter />
      <p className="read-the-docs">
        Built with React and Vite! Click on the Vite and React logos to learn more
      </p>
      <p>
        The part below uses backend to say hello!
      </p>
      <Greeting />
    </>
  );
}
