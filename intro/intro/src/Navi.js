import React from "react";
import { Link } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,

} from "reactstrap";

import CartSummary from './CartSummary';


export default class Navi extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Northwind App</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/components">components</NavLink>
                            </NavItem>
                            <NavItem>
                                <Link to={'form'}>Go To Form</Link>
                            </NavItem>
                            <NavItem>
                                <Link  to={'form'}>Go To Form1</Link>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                            </NavItem>
                            <CartSummary removeFromCart={this.props.removeFromCart} cart={this.props.cart} ></CartSummary>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}