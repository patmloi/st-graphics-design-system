<script>
  import { Brand } from '$components/layout/navbar'
  import { currentMenu } from './photoscrollyStore.js'

  $: activeMenu = ''

  currentMenu.subscribe((value) => (activeMenu = value.split('/')[0]))

  export let value
  let scrollY
  let innerHeight
  let innerWidth
</script>

<header class="scroll {scrollY > innerHeight + 100 ? 'nav-container show' : 'nav-container'}">
  <div class="nav">
    <div class="logo">
      <Brand />
    </div>
    <ul>
      {#each value as { type, value }, i}
        <li>
          <a class={activeMenu.split('/')[0] === type ? 'active' : ''} href="#{type}">{value}</a>
        </li>
      {/each}
    </ul>
  </div>
</header>
<svelte:window bind:scrollY bind:innerHeight bind:innerWidth />

<style lang="scss" scoped>
  .scroll {
    overflow-x: auto;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
  }

  .nav-container {
    position: fixed;
    top: -100px;
    z-index: 9999;
    width: 100%;
    min-height: 44px;
    padding: 0.25rem 0;
    font-family: $font-curator-regular;
    font-size: 15px;
    background: #000;
    border-bottom: 1px solid #464646;
    @media (min-width: 1024px) {
      padding: 7px 0;
      font-size: 18px;
    }

    .nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 90rem;
      margin: 0 auto;

      .logo {
        position: fixed;
        width: 15%;
        padding: 6px 10px;
        background: #000;
        border-right: solid 1px #464646;
      }

      ul {
        display: block;
        width: 85%;
        padding: 0;
        margin: 0;
        margin-left: 15%;
        list-style-type: none;
        @media (min-width: 700px) and (max-width: 1024px) {
          padding-right: 16px;
        }

        li {
          display: inline;
          padding: 0 30px;
          color: #fff;
          border-right: solid 1px #464646;
          @media (max-width: 768px) {
            display: inline-block;
            padding: 7px 10px;
          }

          a {
            color: #868686;
            text-decoration: none;
          }

          a:hover {
            color: #fff;
          }

          a:focus,
          a:active {
            text-decoration: none;
          }

          a.active {
            color: #fff;
          }
        }

        li:last-child {
          border: none;
        }
      }
    }
  }
  @media only screen and (min-width: 768px) {
    .nav-container {
      justify-content: space-between;
    }

    .logo {
      position: relative !important;
      width: unset !important;
      border: none !important;
    }

    ul {
      width: unset !important;
      margin-left: 0;
    }
  }

  .nav-container.show {
    top: -10px;
    top: 0;
    left: 0;
    transition: top 0.5s linear;
  }

  .scroll::-webkit-scrollbar {
    display: none;
  }
</style>
