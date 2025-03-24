import {FieldComponent} from '@/components/Field/FieldComponent';
import {FieldError} from '@/components/Field/components/FieldError';
import {FieldLabel} from '@/components/Field/components/FieldLabel';

export const Field = Object.assign(FieldComponent, {
  Label: FieldLabel,
  Error: FieldError,
});

export const FIELD_TEST_ID = 'fieldTestId';
export const FIELD_LABEL_TEST_ID = 'fieldLabelTestId';
