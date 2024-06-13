'use server'

import { HTTPPostsRequest } from '@/api/HTTPPostsRequest'
import { PageTemplate } from '@/app/components/PageTemplate'

/**
 * Page params
 *
 * @interface Props
 * @typedef {Props}
 */
interface Props {
  /**
   * Post ID
   *
   * @type {{ id: string }}
   */
  params: { id: string }
}

/**
 * Async function for creating the Sinle Post View Server Page
 *
 * @export
 * @async
 * @param {Props} Page params
 * @param {{ id: string; }} @param.id Post ID
 * @returns {Promise<JSX.Element>}
 */
export default async function SinglePost({ params }: Props) {
  const data = await new HTTPPostsRequest().getOne(params.id)

  return (
    <PageTemplate title={data.title}>
      <p dangerouslySetInnerHTML={{ __html: data.body }} />
    </PageTemplate>
  )
}
