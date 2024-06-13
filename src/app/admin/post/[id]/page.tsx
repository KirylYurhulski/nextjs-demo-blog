'use server'

import { HTTPPostsRequest } from '@/api/HTTPPostsRequest'
import { Editor } from '../../components/editor/Editor'
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
 * Async function for creating the Edit Post Server Page
 *
 * @export
 * @async
 * @param {Props} @param Page params
 * @param {{ id: string; }} @param.id Post ID
 * @returns {Promise<JSX.Element>}
 */
export default async function ({ params }: Props) {
  return (
    <PageTemplate title={'Edit post Page'}>
      <Editor data={await new HTTPPostsRequest().getOne(params.id)} />
    </PageTemplate>
  )
}
