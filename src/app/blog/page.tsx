'use server'

import { HTTPPostsRequest } from '@/api/HTTPPostsRequest'
import { Posts } from '../components/posts/Posts'
import { PageTemplate } from '../components/PageTemplate'

/**
 * Async function for creating the Blog Server Page
 *
 * @export
 * @async
 * @returns {Promise<JSX.Element>}
 */
export default async function Blog() {
  return (
    <PageTemplate title="Blog page">
      <Posts
        data={await new HTTPPostsRequest().getAll()}
      />
    </PageTemplate>
  )
}
