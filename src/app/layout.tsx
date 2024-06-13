import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navigate } from './components/ui/Navigate'
import { Col, Container, Row } from 'react-bootstrap'

/**
 * Fonts
 *
 * @type {*}
 */
const inter = Inter({ subsets: ['latin'] })

/**
 * Metadata
 *
 * @type {Metadata}
 */
export const metadata: Metadata = {
  title: 'NextJS Course',
}

/**
 * Main Layout
 *
 * @export
 * @param {Readonly<{
 *   children: React.ReactNode
 * }>} @param Components params
 * @param {Readonly<{ children: React.ReactNode; }>} @param.children Content
 * @returns {JSX.Element}
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Container>
          <Row>
            <Col>
              <Navigate />
            </Col>
          </Row>
          <Row>
            <Col>{children}</Col>
          </Row>
        </Container>
      </body>
    </html>
  )
}
