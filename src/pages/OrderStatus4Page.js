import React, { Component } from 'react'
import Order from '../components/Order/OrderStatus1'
import NavbarOrder from '../components/Order/NavbarOrder'
import OrderStatus4 from '../components/Order/OrderStatus4'

export default class OrderPage4 extends Component {
    render() {
        return (
            <div className="page-content d-flex align-items-stretch">
                <NavbarOrder></NavbarOrder>
                <OrderStatus4></OrderStatus4>
            </div>
        )
    }
}
