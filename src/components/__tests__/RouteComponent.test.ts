import { mount } from "@vue/test-utils";
import RouteComponent from "../RouteComponent.vue";

describe("RouteComponent", () => {
  it("renders properly", () => {
    const milestone = "Home";
    const progressPercent = 14;
    const wrapper = mount(RouteComponent, {
      props: { milestone, progressPercent },
    });

    expect(wrapper.find("#milestone").text()).toBe(milestone);
    expect(wrapper.find("#progressPercent").text()).include(progressPercent);
  });
});
