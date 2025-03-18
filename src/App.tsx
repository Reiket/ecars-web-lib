import {Section} from './components/Section';
import {Button} from '@/components/Button/Button';
import {FavButton} from '@/components/FavButton/FavButton';
import {RouterLink} from '@/components/RouterLink/RouterLink';
import {Icons} from '@/services/icons';
import {LinkWithIcon} from '@/components/LinkWithIcon/LinkWithIcon';
<<<<<<< HEAD
import {ButtonWithIcon} from '@/components/ButtonWithIcon/ButtonWithIcon';
=======
import {NavLink} from '@/components/NavLink/NavLink';

>>>>>>> b949915 (added navLink component)
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
          href="/"
          size="bold"
          color="dark"
        >
          Link
        </RouterLink>
      </Section>
      <Section title="Link with icon Example">
        <LinkWithIcon
          href="/"
          size="bold"
          color="green"
          LeftIcon={Icons.ArrowNarrowLeft}
        >
          +971 55 811 9024
        </LinkWithIcon>
      </Section>
<<<<<<< HEAD
      <Section title="Button with icon Example">
        <ButtonWithIcon
          color="white"
          size="small"
          isTransparent
          RightIcon={Icons.ArrowNarrowRight}
          LeftIcon={Icons.ArrowNarrowLeft}
        >
          More filters
        </ButtonWithIcon>
=======
      <Section title="Nav Link Example">
        <NavLink to="/test">Link</NavLink>
>>>>>>> b949915 (added navLink component)
      </Section>
    </>
  );
}

export default App;
