import logo from './logo.svg';
import './App.css';
import LoginPage from './Pages/LoginPage';
import DashboardPage from './Pages/DashboardPage';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <>
    <Provider store={store}>
      <LoginPage />
      <DashboardPage />
    </Provider>
    </>
  );
}

export default App;
