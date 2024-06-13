'use client'

import Link from 'next/link'
import { Container, Nav, Navbar } from 'react-bootstrap'

/**
 * Client components for NavBar
 *
 * @returns {JSX.Element}
 */
export const Navigate = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/" as={Link}>
          Demo project Next.js
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" as={Link}>
              Home
            </Nav.Link>
            <Nav.Link href="/blog" as={Link}>
              Blog
            </Nav.Link>
            <Nav.Link href="/admin" as={Link}>
              Admin
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
