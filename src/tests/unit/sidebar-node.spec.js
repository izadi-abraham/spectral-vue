import { shallowMount } from '@vue/test-utils'
import SidebarNode from '../../components/SidebarNode/index.vue'
import { assetsSet1Tree as tree, assetsSet1} from "../support/constants";
import router from "../../router";

const factory = () => {
  return shallowMount(SidebarNode, {global: { plugins: [router] }, props: {tree}})
}

describe('SidebarNode', () => {
    it('renders a link', () => {
      const wrapper = factory()
      expect(wrapper.find('[data-test=link]').exists()).toBeTruthy()
    })

    it('renders a sidebar-item', () => {
      const wrapper = factory()
      expect(wrapper.find('[data-test=sidebar-item]').exists()).toBeTruthy()
    })

    it('receives props correctly', () => {
      const wrapper = factory()
      expect(wrapper.props().tree).toStrictEqual(tree)
    })

    it('renders as many child as passed through props', () => {
      const wrapper = factory()
      expect(wrapper.findAllComponents('[data-test=link]').length).toEqual(assetsSet1.length)
    })
})