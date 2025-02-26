import {Section} from './components/Section';
import {Button} from '@/components/Button/Button';

function App() {
  return (
    <Section title="Button Example">
      <Button
        color="green"
        size="big"
      >
        Click Me!
      </Button>
      <Button
        color="gray"
        size="big"
      >
        Click Me!
      </Button>
      <Button
        color="white"
        size="small"
      >
        Click Me!
      </Button>
    </Section>
  );
}

export default App;
