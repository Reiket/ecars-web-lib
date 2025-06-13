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
import {Category} from '@/components/Category/Category';
import type {FC} from 'react';
import {SelectExample} from './components/SelectExample';
import {AccordionExample} from './components/AccordionExample';
import {accordionContentMock} from '@src/services/mocks';
import {FilterButton} from '@/components/FilterButton/FilterButton';
import {Gallery} from '@/components/Gallery/Gallery';
import {imagesMock} from '@/services/mocks';
import {DropdownExample} from '@src/components/DropdownExample';
import {RangeSliderExample} from '@src/components/RangeSliderExample';
import {SliderExample} from '@src/components/SliderExample';

export const App: FC = () => {
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
          color="dark"
        >
          Link
        </RouterLink>
      </Section>
      <Section title="Link with icon Example">
        <LinkWithIcon
          href="/"
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
          <Input
            disabled
            placeholder="Your email"
          />
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
      <Section title="Label Example">
        <Category category="guides" />
      </Section>
      <Section title="SelectComponent Example">
        <SelectExample />
      </Section>
      <Section title="AccordionComponent Example">
        <AccordionExample items={accordionContentMock} />
      </Section>
      <Section title="FilterButton Example">
        <FilterButton>Cross</FilterButton>
      </Section>
      <Section title="Gallery Example">
        <Gallery images={imagesMock} />
      </Section>
      <Section title="DropdownComponent Example">
        <DropdownExample />
      </Section>
      <Section title="Gallery Example">
        <Gallery images={imagesMock} />
      </Section>
      <Section title="Range Slider Example">
        <RangeSliderExample />
      </Section>
      <Section title="Slider Example">
        <SliderExample />
      </Section>
    </>
  );
};
