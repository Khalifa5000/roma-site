import React from "react";
import { Navbar, Nav, Form, FormControl, Button, Badge, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaSearch, FaUser, FaShoppingCart, FaBookmark, FaChevronDown } from "react-icons/fa";
import "./MainNavbar.css";
import LogoImage from "../assets/img/logo.png";

function MainNavbar() {
  return (
    <Navbar expand="lg" className="roma-navbar" fixed="top">
      <Container fluid className="navbar-container">

        {/* logo */}
        <Navbar.Brand as={NavLink} to="/" className="brand">
          <img src={LogoImage} alt="Roma Logo" className="brand-logo" />
        </Navbar.Brand>

        {/* languge icon */}
        <div className="top-icons d-none d-lg-flex align-items-center">
          <div className="lang-select">
            EN <FaChevronDown className="icon" />
          </div>
          <button className="icon-btn"><FaUser /></button>
          <button className="icon-btn"><FaBookmark /></button>

          {/* cart */}
          <div className="cart-btn">
            <FaShoppingCart />
            <Badge pill bg="#E99239" className="cart-badge">0</Badge>
          </div>
        </div>

        {/* MObile button */}
        <Navbar.Toggle aria-controls="roma-navbar-nav" />

        <Navbar.Collapse id="roma-navbar-nav">

          {/*  Search */}
          <div className="search-container mx-auto">

            <Button className="search-btn">
                <FaSearch />
            </Button>
            <Form className="search-form d-flex">
              <FormControl
                type="text"
                placeholder="ابحث باسم الكتاب، المؤلف، العنوان..."
                className="search-input"
              />

            </Form>
          </div>

          {/* Links */}

          <div dir="rtl"> 
          <Nav className="ms-auto nav-links align-items-center">
            <Nav.Link as={NavLink} to="/" end className="nav-item">الرئيسية</Nav.Link>
            <span className="divider"></span>

            <Nav.Link as={NavLink} to="/books" className="nav-item">جميع الكتب</Nav.Link>
            <span className="divider"></span>

            <Nav.Link as={NavLink} to="/new" className="nav-item">المنتجات الجديدة</Nav.Link>
            <span className="divider"></span>

            <Nav.Link as={NavLink} to="/notes" className="nav-item">المذكرات</Nav.Link>
            <span className="divider"></span>

            <Nav.Link as={NavLink} to="/reviews" className="nav-item">المراجعات</Nav.Link>
          </Nav>
            </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
