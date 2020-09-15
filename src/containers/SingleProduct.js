import React from 'react'
import Header from '../components/Header/Header'
import AProduct from '../components/SingleProduct/ProductDetail'
import Breadcrumbs from '../components/BreadCrumbs/Breadcrumbs'
import model_5 from '../public/img/model_5.png';
import Footer from '../components/Footer/Footer';

function SingleProduct() {
    return (
        <div>
            <Header image={model_5} />
            <Breadcrumbs first='Product' second='Cool Clothing with Brown Stripes' />
            <AProduct />
            <Footer />
        </div>
    )
}

export default SingleProduct
