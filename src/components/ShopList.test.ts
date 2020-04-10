import { shallowMount } from '@vue/test-utils';
import ShopList from '@/components/ShopList.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const items = [{ message: '123' }];
    const wrapper = shallowMount(ShopList, {
      propsData: { items }
    });
    expect(wrapper.text()).toMatch(items[0].message);
  });
});
