import React from 'react'
import './breadcrumbs.css'
function Breadcrumbs({ first, second }) {
    return (
        <div class='custom-border-bottom py-3'>
            <div class='container'>
                <div class='row'>
                    <div class='col-md-12 mb-0'>
                        <a href='index.html'>{first}</a> <span class='mx-2 mb-0'>/</span>
                        <strong class='text-black'>{second}</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Breadcrumbs
