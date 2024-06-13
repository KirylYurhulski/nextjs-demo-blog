/**
 * HTTP Request
 *
 * @export
 * @class HTTPRequest
 * @typedef {HTTPRequest}
 */
export class HTTPRequest {
  /**
   * URL
   *
   * @private
   * @readonly
   * @type {string}
   */
  private readonly url: string
  /**
   * Request Params
   *
   * @private
   * @readonly
   * @type {RequestInit}
   */
  private readonly init: RequestInit

  /**
   * Creates an instance of HTTPRequest without Cache.
   *
   * @constructor
   * @public
   * @param {string} url
   * @param {RequestInit} [init={ cache: 'no-store' }]
   */
  public constructor(url: string, init: RequestInit = { cache: 'no-store' }) {
    this.url = url
    this.init = init
  }

  /**
   * Do Request
   *
   * @public
   * @async
   * @returns {Promise<Response>}
   */
  public async Fetch(): Promise<Response> {
    const response = await fetch(this.url, this.init)
    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }
    return response
  }
}
