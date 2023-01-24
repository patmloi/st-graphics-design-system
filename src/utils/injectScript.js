/**
 * Inject an external script.
 *
 * @param {*} attributes Attributes to add to the `<script>` tag.
 */
const injectScript = (attributes) => {
  const script = document.createElement('script')

  Object.assign(script, attributes)

  document.head.appendChild(script)
}

export default injectScript
