import React from 'react'
import { Link } from 'react-router-dom';
import view_1 from '../../public/img/view_1.png';
import view_2 from '../../public/img/view_2.png';
import view_3 from '../../public/img/view_3.png';
import './style.css'
function filterbar() {
    return (
        <div className="container">
            <div className="row products_bar_row">
                <div className="col">
                    <div

                        className="products_bar d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-start justify-content-center">
                        <div className="products_bar_links">
                            <ul className="d-flex flex-row align-items-start justify-content-start">
                                <li><Link href="#">All</Link></li>
                                <li><Link href="#">Hot Products</Link></li>
                                <li className="active"><Link href="#">New Products</Link></li>
                                <li><Link href="#">Sale Products</Link></li>
                            </ul>
                        </div>
                        <div className="products_bar_side d-flex flex-row align-items-center justify-content-start ml-lg-auto">
                            <div className="products_dropdown product_dropdown_sorting">
                                <div className="isotope_sorting_text"><span>Default Sorting</span><i className="fa fa-caret-down"
                                    aria-hidden="true"></i></div>
                                <ul>
                                    <li className="item_sorting_btn" data-isotope-option='{ "sortBy": "original-order" }'>
                                        Default</li>
                                    <li className="item_sorting_btn" data-isotope-option='{ "sortBy": "price" }'>Price</li>
                                    <li className="item_sorting_btn" data-isotope-option='{ "sortBy": "name" }'>Name</li>
                                </ul>
                            </div>
                            <div className="product_view d-flex flex-row align-items-center justify-content-start">
                                <div className="view_item active"><img src={view_1} alt="" /></div>
                                <div className="view_item"><img src={view_2} alt="" /></div>
                                <div className="view_item"><img src={view_3} alt="" /></div>
                            </div>
                            <div className="products_dropdown text-right product_dropdown_filter">
                                <div className="isotope_filter_text"><span>Filter</span><i className="fa fa-caret-down"
                                    aria-hidden="true"></i></div>
                                <ul>
                                    <li className="item_filter_btn" data-filter="*">All</li>
                                    <li className="item_filter_btn" data-filter=".hot">Hot</li>
                                    <li className="item_filter_btn" data-filter=".new">New</li>
                                    <li className="item_filter_btn" data-filter=".sale">Sale</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default filterbar
