import { shallowMount } from "@vue/test-utils";
import Header from "../../components/Header/index.vue";
import router from "../../router";


const msg = "new message";

const factory = () => {
  return  shallowMount(Header, {
    global: { plugins: [router] },
    props: { msg }
  });
}

describe("Header component", () => {
  it("renders props.msg when passed", async () => {
    const wrapper = factory()
    expect(wrapper.text()).toMatch(msg);
  });
});
