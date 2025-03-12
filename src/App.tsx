import {Section} from './components/Section';
import {Button} from '@/components/Button/Button';
import {FavButton} from '@/components/FavButton/FavButton';
import {RouterLink} from '@/components/RouterLink/RouterLink';
import {Icons} from '@/services/icons';

function App() {
  return (
    <>
      <Section title="Button Example">
        <Button
          color="gray"
          size="small"
          isTransparent
        >
          Reset
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
          withIcon
          isTransparent
        >
          More filters
          <Icons.ArrowNarrowRight />
        </Button>
      </Section>
      <Section title="Favorite Button Example">
        <FavButton
          isFavorite
          type="circle"
        />
        <FavButton type="transparent" />
      </Section>
      <Section title="Link Example">
        <RouterLink
          href={'/'}
          size={'bold'}
          color={'dark'}
        >
          Link
        </RouterLink>
      </Section>
    </>
  );
}

export default App;
