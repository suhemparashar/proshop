import React, { useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Loader from '../Loader'
import Message from '../Message'
import Product from '../Products'
import Paginate from '../Paginate'
import ProductCarousel from '../ProductCarousel'
import Meta from '../Meta'
import { listProducts } from '../../actions/productActions'

const HomeScreen = ({ match }) => {

    const keyword = match.params.keyword

    const pageNumber = match.params.pageNumber || 1

    const dispatch = useDispatch()

    const productList = useSelector(state => state.productList)

    const { loading, error, products, page, pages } = productList
    useEffect(() => {
        dispatch(listProducts(keyword, pageNumber))
    }, [dispatch, keyword, pageNumber])


    return (
     
        <>
        <Meta />
        {!keyword ? <ProductCarousel /> : <Link to='/' className='btn btn-dark'>Go Back</Link>}
            <h1>Latest Products</h1>
            {loading ? <Loader/>: error?<Message variant='danger'>{error}</Message>: 
            <>
            <Row>
            {products.map((product) =>(
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
            ))}
            </Row>
            <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''}/>
            </>
            }
            
        </>
    )
}

export default HomeScreen
