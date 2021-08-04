import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './components/screens/HomeScreen'
import ProductScreen from './components/screens/ProductScreen'
import CartScreen from './components/screens/CartScreen'
import LoginScreen from './components/screens/LoginScreen'
import RegisterScreen from './components/screens/RegisterScreen'
import ProfileScreen from './components/screens/ProfileScreen'
import ShippingScreen from './components/screens/ShippingScreen'
import PaymentScreen from './components/screens/PaymentScreen'
import PlaceOrderScreen from './components/screens/PlaceOrderScreen'
import OrderScreen from './components/screens/OrderScreen'
import UserListScreen from './components/screens/UserListScreen'
import UserEditScreen from './components/screens/UserEditScreen'

const App = () => {
  return (
    <Router>
    <Header />
    
    <main className='py-3'>
    <Container>
    <Route path='/order/:id' component={OrderScreen} />
    <Route path='/login' component={LoginScreen} />
    <Route path='/placeorder' component={PlaceOrderScreen} />
    <Route path='/shipping' component={ShippingScreen} />
    <Route path='/payment' component={PaymentScreen} />
    <Route path='/register' component={RegisterScreen} />
    <Route path='/profile' component={ProfileScreen} />
    <Route path='/product/:id' component={ProductScreen} />
    <Route path='/cart/:id?' component={CartScreen} />
    <Route path='/admin/userlist' component={UserListScreen} />
    <Route path='/admin/user/:id/edit' component={UserEditScreen} />
    <Route path='/' component={HomeScreen} exact />
    </Container>
    </main>
    
    
    <Footer/>
    </Router>
    
  );
}

export default App
