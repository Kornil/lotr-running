import { mount } from "@vue/test-utils";
import InputComponent from "../InputComponent.vue";

describe("RouteComponent", () => {
  it("renders properly", () => {
    const currentProgress = 10;
    const addProgress = vi.fn();

    const wrapper = mount(InputComponent, {
      props: { currentProgress, addProgress },
    });

    expect(wrapper.find("#currentProgress").text()).include(currentProgress);
  });

  it("addProgress is called", async () => {
    const currentProgress = 10;
    const addProgress = vi.fn();

    const wrapper = mount(InputComponent, {
      props: { currentProgress, addProgress },
    });

    await wrapper.find(".add").trigger("click");
    await wrapper.find(".add").trigger("click");
    await wrapper.find(".remove").trigger("click");

    await wrapper.find("#add-progress-btn").trigger("click");

    expect(addProgress).toHaveBeenNthCalledWith(1, 1);
    expect(wrapper.find("input").element.value).toBe("0");
  });

  it("cannot input negative number", async () => {
    const currentProgress = 10;
    const addProgress = vi.fn();

    const wrapper = mount(InputComponent, {
      props: { currentProgress, addProgress },
    });

    await wrapper.find(".add").trigger("click");
    await wrapper.find(".add").trigger("click");
    await wrapper.find(".remove").trigger("click");

    expect(wrapper.find("input").element.value).toBe("1");

    await wrapper.find(".remove").trigger("click");
    await wrapper.find(".remove").trigger("click");

    expect(wrapper.find("input").element.value).toBe("0");
  });
});
