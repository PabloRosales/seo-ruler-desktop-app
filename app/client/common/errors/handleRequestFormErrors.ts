import { ErrorResponse } from './ErrorResponse';
import { AxiosError } from 'axios';
import { FormError } from './FormError';

interface DefaultErrorMessages {
  validationError: string;
  duplicateFields?: string[];
  fallbackError: string;
  fields?: string[];
}

export const handleRequestFormErrors = (err: AxiosError<ErrorResponse> | undefined, defaults: DefaultErrorMessages) => {
  if (defaults.fields && err && err.response?.status === 400 && err.response.data?.message) {
    const fields: string[] = [];
    const customMessages: string[] = [];
    for (const msg of err.response.data.message) {
      for (const field of defaults.fields) {
        if (msg.includes(field) && !fields.includes(field)) {
          fields.push(field);
          break;
        }
      }
      customMessages.push(msg);
    }
    throw new FormError(defaults.validationError, fields, customMessages);
  }
  if (defaults.duplicateFields && err && err.response?.status === 409 && err.response.data?.message) {
    throw new FormError(defaults.validationError, defaults.duplicateFields, err.response.data?.message);
  }
  throw new FormError(defaults.fallbackError, []);
};
