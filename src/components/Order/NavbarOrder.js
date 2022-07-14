import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavbarOrder extends Component {
    render() {
        return (

            <nav className="col-md-3 side-navbar">
                <ul className="list-unstyled">
                    <li><Link to="/order/status1"> <i className="icon-home" />Đơn đang duyệt </Link></li>
                    <li><Link to="/order/status2"> <i className="icon icon-bill" />Đơn đang giao</Link></li>
                    <li><Link to="/order/status3"> <i className="icon-interface-windows" />Đơn đã giao</Link></li>
                    <li><Link to="/order/status4"> <i className="icon-interface-windows" />Đơn đã hủy</Link></li>
                </ul>
            </nav>


        )
    }
}
