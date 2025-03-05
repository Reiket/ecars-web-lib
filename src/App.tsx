import {Section} from './components/Section';
import {Button} from '@/components/Button/Button';
import {FavButton} from '@/components/FavButton/FavButton';
import {SliderNavigate} from '@/components/SliderNavigate/SliderNavigate';

function App() {
  return (
    <>
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
      <Section title="Favorite Button Example">
        <FavButton
          isFavorite
          type="circle"
        />
        <FavButton type="transparent" />
      </Section>
      <Section title="Slider Navigate Example">
        <SliderNavigate />
      </Section>
    </>
  );
}

export default App;
