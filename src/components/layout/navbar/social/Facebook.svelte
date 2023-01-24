<script>
  import { page } from '$app/stores'
  import Template from './Template.svelte'

  const props = {
    name: 'Facebook',
    href: `https://facebook.com/sharer/sharer.php?u=${encodeURI($page.url.href)}`,
    path: 'M50.119 69.381v-19.84h6.742l1.155-7.705h-7.705V37.02c0-2.118.578-3.852 3.853-3.852h4.238v-7.705c-.963 0-3.275-.385-5.972-.385-5.971 0-10.016 3.467-10.016 10.402v5.586h-6.742v7.704h6.55v19.84z',
  }
</script>

<Template {...props} />
