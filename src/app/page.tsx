'use server'

import { PageTemplate } from './components/PageTemplate'

/**
 * Async function for creating the Main Server Page
 *
 * @export
 * @returns {Promise<JSX.Element>}
 */
export default async function Home() {
  return (
    <PageTemplate title="Home page">
      <p className="text-center">Demo web site about Next.js with Bootstrap</p>
    </PageTemplate>
  )
}
