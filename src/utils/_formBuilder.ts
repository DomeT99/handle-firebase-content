import type { FormSelect, FormText } from "./interface";

export class FormBuilder {
  formFields: FormText[] | FormSelect[] = [];
  constructor() {
    this.formFields = [];
  }

  public addTextField(data: FormText) {
    return this.handleArray(data);
  }
  public addSelectField(data: FormSelect) {
    return this.handleArray(data);
  }
  public build() {
    return this.formFields;
  }

  private handleArray(data: FormText | FormSelect) {
    this.formFields.push(data);
    return this;
  }
}
