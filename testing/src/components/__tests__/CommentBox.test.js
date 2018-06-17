import React from "react";
import { mount } from "enzyme";
import CommentBox from "../CommentBox";
import Root from "Root";

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("has a text area and a button", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(2);
});

describe("The text area", () => {
  beforeEach(() => {
    wrapped.find("textarea").simulate("change", {
      target: { value: "new Comment" }
    });
    wrapped.update();
  });

  it("has a textarea that users can type in", () => {
    expect(wrapped.find("textarea").prop("value")).toEqual("new Comment");
  });

  it("when form is submitted, textarea gets empty", () => {
    wrapped.find("form").simulate("submit");
    wrapped.update();

    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});
