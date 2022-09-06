interface IFormError {
  fields: string[];
  message: string;
}

export class FormError extends Error implements IFormError {
  fields: string[];
  customMessages?: string[];

  constructor(message: string, fields: string[], customMessages?: string[] | string) {
    super(message);
    this.fields = fields;
    this.message = message;
    this.customMessages = Array.isArray(customMessages) ? customMessages : customMessages ? [customMessages] : undefined;
  }
}
