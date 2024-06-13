'use server'

import { PageTemplate } from '@/app/components/PageTemplate'
import { Editor } from '../../components/editor/Editor'
import { Post } from '@/models/Post'

/**
 * Empty Post for Creation
 *
 * @type {Post}
 */
const empty: Post = {
  id: 0,
  title: '',
  body: '',
}

/**
 * Async function for creating the New Post Server Page
 *
 * @export
 * @async
 * @returns {Promise<JSX.Element>}
 */
export default async function () {
  return (
    <PageTemplate title="Create new post Page">
      <Editor data={empty} />
    </PageTemplate>
  )
}
