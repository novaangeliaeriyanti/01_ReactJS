// import logo from './logo.svg';
import "./App.css";
// import CartList from './views/cart/CartList';
import Counter from './components/basic/Counter';
// import CounterArrow from './components/basic/CounterArrow';
// import CounterHook from './components/basic/CounterHook';
// import ParentName from './components/parentchild/ParentName';
// import ParentComponent from './components/parentchild/ParentComponent';
// import CounterLifeCyle from './components/lifecycle/CounterLifeCyle';
// import EmployeeList from './components/parentchild/EmployeeList';
// import CartListItem from './components/parentchild/CartListItem';
import CartList from "./components/form/CartList";
import CartListRedux from "./views/cart/CartListRedux";
import CartListToolkit from "./views/cart/CartListToolkit";
import Categories from "./views/category/Categories";


function App() {
  return (
    <>
      {/* <Counter /> */}
      {/* <CounterArrow /> */}
      {/* <CounterHook/> */}
      {/* <CartListItem/> */}
      {/* <CartList /> */}
      <CartListRedux />
      {/* <CartListToolkit /> */}
      {/* <Categories/> */}
    </>
  );
}

export default App;
