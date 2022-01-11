import logo from './logo.svg';
import './App.css';
import Counter from './components/basic/Counter';
import CounterArrow from './components/basic/CounterArrow';
import CounterHook from './components/basic/CounterHook';
import ParentName from './components/parentchild/ParentName';
import ParentComponent from './components/parentchild/ParentComponent';
import CounterLifeCyle from './components/lifecycle/CounterLifeCyle';
import EmployeeList from './components/parentchild/EmployeeList';
import CartListItem from './components/parentchild/CartListItem';
import CartList from './components/form/CartList';

function App() {
  return (
    // <>
    // {/*   <Counter />
    //   <CounterArrow />
    //   <CounterHook/> */}
    //   <CartListItem/>
    // </>
    <CartList/>
  );
}

export default App;
