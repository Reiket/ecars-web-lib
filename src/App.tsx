import {Icons} from '@/services/icons';
import {Section} from './components/Section';
import {Button} from '@/components/Button/Button';
import {FavButton} from '@/components/FavButton/FavButton';
import {RouterLink} from '@/components/RouterLink/RouterLink';
import {LinkWithIcon} from '@/components/LinkWithIcon/LinkWithIcon';
import {ButtonWithIcon} from '@/components/ButtonWithIcon/ButtonWithIcon';
import {NavLink} from '@/components/NavLink/NavLink';
import {Input} from '@/components/Input/Input';
import {Field} from '@/components/Field/constants';
import {Checkbox} from '@/components/Checkbox/constants';

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
      </Section>
      <Section title="Nav Link Example">
        <NavLink to="/test">Link</NavLink>
      </Section>
      <Section title="Input Example">
        <Input
          value="Email"
          placeholder="Your email"
        />
      </Section>
      <Section title="Field Example">
        <Field
          label="Email"
          id="input_email"
        >
          <Input placeholder="Your email" />
        </Field>
      </Section>
      <Section title="Field Example">
        <Field
          error="Some error"
          label="Email"
          id="input_email"
        >
          <Input
            value="Email"
            placeholder="Your email"
          />
        </Field>
      </Section>
      <Section title="Checkbox Component Example">
        <Checkbox checked />
      </Section>
    </>
  );
}

export default App;
