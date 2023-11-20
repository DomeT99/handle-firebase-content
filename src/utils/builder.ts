import type { FormSelect, FormText } from "./interface";

export class FormBuilder {
  formFields: FormText[] | FormSelect[] = [];
  constructor() {
    this.formFields = [];
  }

  public addTextField(data: FormText) {
    this.handleArray(data);
  }
  public addSelectField(data: FormSelect) {
    this.handleArray(data);
  }
  public build() {
    return this.formFields;
  }

  private handleArray(data: FormText | FormSelect) {
    this.formFields.push(data);
    return this;
  }
}
