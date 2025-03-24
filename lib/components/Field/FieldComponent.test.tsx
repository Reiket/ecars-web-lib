import {render, screen} from '@testing-library/react';
import {Input} from '@/components/Input/Input';
import {Field, FIELD_LABEL_TEST_ID, FIELD_TEST_ID} from '@/components/Field/constants';
import {INPUT_TEST_ID} from '@/components/Input/constants';
import '@testing-library/jest-dom';

describe('Field Component', () => {
  const labelOptions = ['Email', undefined];
  const errorOptions = ['Some error', undefined];
  const idOptions = ['email', undefined];
  labelOptions.forEach((label) => {
    errorOptions.forEach((error) => {
      idOptions.forEach((id) => {
        const errorStatus = error ? `with error - ${error}` : 'without error';
        const labelStatus = label ? `with label - ${label}` : 'without label';
        const idStatus = id ? `with id - ${id}` : 'without id';
        const testName = `render field component ${errorStatus}, ${labelStatus}, ${idStatus}`;
        test(testName, () => {
          const {container} = render(
            <Field
              label={label}
              id={id}
              error={error}
            >
              <Input />
            </Field>,
          );
          const fieldElement = screen.getByTestId(FIELD_TEST_ID);
          const fieldLabelElement = screen.queryByTestId(FIELD_LABEL_TEST_ID);
          const inputElement = screen.getByTestId(INPUT_TEST_ID);
          expect(container).toMatchSnapshot();
          expect(fieldElement).toBeInTheDocument();
          expect(inputElement).toBeInTheDocument();
          if (label) {
            expect(fieldLabelElement).toBeInTheDocument();
          }
          if (id) {
            expect(fieldLabelElement).toHaveAttribute('htmlFor', id);
            expect(inputElement).toHaveAttribute('id', id);
          }
          if (error) {
            expect(screen.getByText('Some error')).toBeInTheDocument();
            expect(inputElement).toHaveClass('error');
          }
        });
      });
    });
  });
});
