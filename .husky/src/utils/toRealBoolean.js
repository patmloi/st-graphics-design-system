/**
 * Convert a value to a real boolean.
 *
 * @param {*} src Value.
 *
 * @returns Real boolean.
 */
const toRealBoolean = (src) =>
  (typeof src === 'boolean' && src) ||
  (typeof src === 'number' && src === 1) ||
  (typeof src === 'string' && src.toLowerCase() === 'true') ||
  (typeof src === 'string' && src.toLowerCase() === 'yes')

export default toRealBoolean
