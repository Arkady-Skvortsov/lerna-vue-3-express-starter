import { expect, describe, it } from "vitest";
import { mount } from "@vue/test-utils";
import HelloLerna from "../../HelloLerna.vue";

describe("HelloLerna component", () => {
  it('Should be displayd "Hello Lerna" message', () => {
    const msg = "Hello Lerna";

    const wrapper = mount(HelloLerna);

    expect(wrapper.find("h1").text()).toEqual(msg);
  });
});
