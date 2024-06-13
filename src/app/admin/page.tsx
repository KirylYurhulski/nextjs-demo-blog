'use server'

import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { PageTemplate } from '../components/PageTemplate'
import { HTTPPostsRequest } from '@/api/HTTPPostsRequest'
import { Posts } from './components/posts/Posts'

/**
 * Async function for creating the Main Admin Server Page
 *
 * @export
 * @async
 * @returns {Promise<JSX.Element>}
 */
export default async function Admin() {
  return (
    <PageTemplate title={'Admin Page'}>
      <Container>
        <Row>
          <Col
            style={{
              marginBottom: '2rem',
            }}
          >
            <Link
              href="/admin/post/new"
              style={{
                textDecoration: 'none',
                backgroundColor: 'green',
                color: 'white',
                padding: '8px 14px 8px 14px',
                borderRadius: '6px',
              }}
            >
              Create
            </Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <Posts data={await new HTTPPostsRequest().getAll()} />
          </Col>
        </Row>
      </Container>
    </PageTemplate>
  )
}
