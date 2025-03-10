import {Section} from './components/Section';
import {Button} from '@/components/Button/Button';
import {FavButton} from '@/components/FavButton/FavButton';
<<<<<<< HEAD
import {SliderNavigate} from '@/components/SliderNavigate/SliderNavigate';
=======
import {RouterLink} from '@/components/RouterLink/RouterLink';
import {AiFillAccountBook} from 'react-icons/ai';
>>>>>>> 9d13291 (added Router Link component)

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
<<<<<<< HEAD
      <Section title="Slider Navigate Example">
        <SliderNavigate />
=======
      <Section title="Link Example">
        <RouterLink
          withIcon
          href={'/'}
          size={'bold'}
          color={'dark'}
        >
          <AiFillAccountBook /> request@example.com
        </RouterLink>
        <RouterLink
          withIcon
          href={'/'}
          size={'bold'}
          color={'dark'}
        >
          <AiFillAccountBook />
        </RouterLink>
>>>>>>> 9d13291 (added Router Link component)
      </Section>
    </>
  );
}

export default App;
