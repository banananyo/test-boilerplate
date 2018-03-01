import App from 'containers/App';
import { shallow } from 'enzyme';
describe('App Component', () => {
  it('exists', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find('h1')).to.have.length(1);
  });
});
