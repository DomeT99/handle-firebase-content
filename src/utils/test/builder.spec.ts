import { expect, test } from "vitest";
import { FormBuilder } from "../builder";

test("obj instance", () => {
  const form = new FormBuilder();

  expect(form).toBeInstanceOf(FormBuilder);
});

test("addTextField", () => {
  const form = new FormBuilder()
    .addTextField({
      name: "TextField",
      type: "text",
      label: "Label Text",
      placeholder: "Placeholder Text",
    })
    .build();

  expect(form).toBeTypeOf("object");
  expect(form).lengthOf(1);
  expect(form).toEqual([
    {
      name: "TextField",
      type: "text",
      label: "Label Text",
      placeholder: "Placeholder Text",
    },
  ]);
});

test("addSelectField", () => {
  const form = new FormBuilder()
    .addSelectField({
      name: "SelectField",
      type: "select",
      options: [
        {
          label: "Label Text",
          value: "Placeholder Text",
        },
      ],
    })
    .build();

  expect(form).toBeTypeOf("object");
  expect(form).lengthOf(1);
  expect(form).toEqual([
    {
      name: "SelectField",
      type: "select",
      options: [
        {
          label: "Label Text",
          value: "Placeholder Text",
        },
      ],
    },
  ]);

  expect(form[0]).toHaveProperty("options");
});
