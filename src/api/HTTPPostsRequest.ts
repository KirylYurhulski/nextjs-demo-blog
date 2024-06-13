import { Post } from '@/models/Post'
import { HTTPRequest } from './HTTPRequest'

/**
 * HTTP requests for working with Posts
 *
 * @export
 * @class HTTPPostsRequest
 * @typedef {HTTPPostsRequest}
 */
export class HTTPPostsRequest {
  /**
   * URL
   *
   * @private
   * @readonly
   * @type {string}
   */
  private readonly url: string = 'http://localhost:3001/posts/'

  /**
   * Get All Posts
   *
   * @public
   * @async
   * @returns {Promise<Post[]>}
   */
  public async getAll(): Promise<Post[]> {
    return (await new HTTPRequest(this.url).Fetch()).json()
  }

  /**
   * Get One Posts by ID
   *
   * @public
   * @async
   * @param {string} id
   * @returns {Promise<Post>}
   */
  public async getOne(id: string): Promise<Post> {
    return (await new HTTPRequest(`${this.url}${id.trim()}`).Fetch()).json()
  }

  /**
   * Modify Post`s Data
   *
   * @public
   * @async
   * @param {Post} data
   * @returns {Promise<Response>}
   */
  public async Modify(data: Post): Promise<Response> {
    return data.id
      ? this.Patch(data)
      : this.Post({ ...data, id: new Date().getTime() })
  }

  /**
   * HTTP Delete post
   *
   * @public
   * @async
   * @param {string} id
   * @returns {Promise<Post>}
   */
  public async Delete(id: string): Promise<Response> {
    return await new HTTPRequest(`${this.url}${id.trim()}`, {
      method: 'DELETE',
    }).Fetch()
  }

  /**
   * HTTP Create new post
   *
   * @private
   * @async
   * @param {Post} data
   * @returns {Promise<Response>}
   */
  private async Post(data: Post): Promise<Response> {
    return await new HTTPRequest(this.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...data, id: data.id.toString() }),
    }).Fetch()
  }

  /**
   * HTTP Update post data
   *
   * @private
   * @async
   * @param {Post} data
   * @returns {Promise<Response>}
   */
  private async Patch(data: Post): Promise<Response> {
    return await new HTTPRequest(`${this.url}${data.id.toString().trim()}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).Fetch()
  }
}
