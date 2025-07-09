import {FieldComponent} from '@/components/Field/FieldComponent';
import {FieldLabel} from '@/components/Field/components/FieldLabel';
import {FieldError} from '@/components/Field/components/FieldError';

export const Field = Object.assign(FieldComponent, {
  Label: FieldLabel,
  Error: FieldError,
});
