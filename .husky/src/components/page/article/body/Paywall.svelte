<!-- <script>
  /**
   * TO TEST OAuth2
   *
   * => Production OAuth2
   * use your own account credential
   *
   * => mySPH UAT OAuth2
   * /// Test user accounts ///
   * stgraphics@test.com / st-graphics
   * stgraphics1@test.com / st-graphics
   * stgraphics2@test.com / st-graphics
   *
   */

  import { mapState } from 'vuex'
  export default {
    props: ['attributes'],
    data: function () {
      return {
        widgetContent: '',
      }
    },
    computed: {
      ...mapState(['user', 'premium']),
      isPremium() {
        return process.env.IS_PREMIUM
      },
    },
    created() {
      window.loadSubscriberContent = () => {
        this.fetchUserDetail()
      }
      this.fetchLoginContent()
    },
    methods: {
      fetchLoginContent() {
        let feedUrl =
          process.env.NODE_ENV === 'production'
            ? 'https://www.straitstimes.com/multimedia/graphics/assets/'
            : 'https://st-graphics-dev-assets.s3-ap-southeast-1.amazonaws.com/'
        feedUrl += 'premium-login-widget/index.html'
        window
          .fetch(feedUrl)
          .then((res) => {
            if (res >= 400) throw new Error(res.statusText)
            return res.text()
          })
          .then((html) => {
            this.widgetContent = html
            this.$nextTick(() => {
              if (document.title) {
                // Inject mySPH authorization URL to "Login" hyperlink
                document.querySelector('.premium-read-more a.login').href =
                  this.$premium.getAuthorizationUrl()
                // If an authorized user is not logged in the ST app, remove the login link. Related with ST app seamless login flow.
                if (
                  this.$inSTApp ||
                  (this.user !== null && this.user.aologinid && !this.user.expires)
                ) {
                  document.querySelector('.premium-read-more #subscriber-query-container').remove()
                }
              }
            })
          })
          .catch((err) => {
            console.error(err)
          })
      },
      fetchUserDetail() {
        if (this.isPremium && this.user === null) {
          /* Call ST main login detail function and response JSON
           * Production: https://straitstimes.com/login_details.php
           * UAT: https://uat.straitstimes.com/login_details.php
           * User info will reply only same domains which mean if you test on https://uat.straitstimes.com/multimedia/graphics/* env, you can only get login detail from https://uat.straitstimes.com/login_details.php
           */
          window
            .fetch('/login_details.php', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
            })
            .then((response) => response.json())
            .then((data) => {
              // Web seamless login flow
              if (
                data.seamless_login_from_app === 'no' &&
                data.loginid &&
                data.usertype !== 'anoy'
              ) {
                if (data.usertype === 'sub') {
                  // If an authorized user is a subscriber, redirect to premium mySPH login page
                  window.location.href = this.$premium.getAuthorizationUrl()
                } else {
                  // If an authorized user is not a subscriber, set user info from ST main login_details.php
                  this.$store.commit('pushResponse', {
                    user: {
                      aologinid: data.loginid,
                      aovisitorid: data.mysphw,
                      aonickname: data.display_name,
                      aoregservice: data.svc,
                    },
                  })
                  // If an authorized user is not a subscriber, remove the login link.
                  if (
                    document.querySelector('.premium-read-more #subscriber-query-container') &&
                    !this.user.expires
                  ) {
                    document
                      .querySelector('.premium-read-more #subscriber-query-container')
                      .remove()
                  }
                }
              }
            })
            .catch((err) => {
              console.error(err)
            })
        }
        return null
      },
    },
  }
</script> -->

<div class="login-widget">
  <div class="login-widget-wrapper" v-html="widgetContent">
    <!-- Premium login widget content -->

    <div class="nocx_paywall_area premium-read-more">
      <div class="subscriber-query-container" id="subscriber-query-container">
        <p class="st">
          Already a subscriber?&nbsp;<a
            class="st login mysph_login"
            href="https://uat-idp.mysph.sph.com.sg/oauth2/ausprjdeudxm32ovr1d6/v1/authorize?response_type=code&amp;client_id=0oa3cnelylmDB0LT61d7&amp;state=eyJyZWRpcmVjdF91cmwiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvaW5kZXguaHRtbCJ9&amp;redirect_uri=https%3A%2F%2Fuat.straitstimes.com%2Fmultimedia%2Fgraphics%2Fapi%2Fpremium%2Fdevelopment%2Fcreate-session&amp;scope=openid+email+profile+entitlement+offline_access"
            >Log in</a
          >
        </p>
      </div>
      <div class="paywall-content-container">
        <div class="paywall-header">
          <h1 id="paywall-header">Dive deeper at $0.99/month</h1>
          <p id="paywall-subheader" class="st">
            Want more exclusives, sharp insights into what's happening at home and abroad? Subscribe
            now.
          </p>
        </div>
        <div class="paywall-plan recommended-plan">
          <div class="recommended">
            <p id="primary-recommended" class="description" />
          </div>
          <div class="paywall-content">
            <div class="paywall-plan-description">
              <h3 id="primary-plan-title">ST One Digital Package - Monthly</h3>
              <h2>
                <span id="primary-orig-price" class="ori-price">$9.90</span>&nbsp;
                <span id="primary-price" class="price">$0.99/month</span>
              </h2>
              <p id="primary-contract" class="st contract-period">No contract</p>
              <p id="primary-description" class="st">
                $0.99/month for the first 3 months, $9.90/month thereafter. T&amp;Cs apply.
              </p>
            </div>
            <div class="paywall-cta-container">
              <a
                id="primary-cta-url"
                class="cta-paywall"
                data-ga="click"
                href="https://subscribe.sph.com.sg/express-checkout/?pub_code=st&amp;product_code=2021ST1DSEPPROMO-THESTRAITSTIMESONEDIGITALMTHLYPREPAIDFIRST3MTHS99C-LP&amp;utm_campaign=st1d-399&amp;utm_source=paywall-st&amp;utm_medium=sph-publication&amp;utm_content=subscribebutton-pay-gfxarticle-st1d399-eo"
              >
                <p id="primary-cta-label">Subscribe now</p></a
              >
            </div>
          </div>
        </div>
        <div id="benefits-container" class="subscription-plan-container">
          <h4 id="benefits-title">Unlock these benefits</h4>
          <ul id="benefits">
            <li>
              <p id="benefits-point-1">
                All subscriber-only content on ST app and straitstimes.com
              </p>
            </li>
            <li><p id="benefits-point-2">Easy access any time via ST app on 1 mobile device</p></li>
            <li>
              <p id="benefits-point-3">
                2-week e-paper archive so you never miss out on any topic that matters to you
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- <iframe
    title="Web seamless login"
    v-if="isPremium && (user === null)"
    class="hidden-iframe"
    src="/p/login.php"
  /> -->
</div>

<style lang="scss">
  /* stylelint-disable */
  .login-widget {
    padding: px-to-rem(20) 0;

    &.inline {
      .login-widget-wrapper {
        max-width: $screen-lg;

        // @include inline_align();
      }
    }

    iframe,
    .hidden-iframe {
      display: none;
      height: 0;
      visibility: hidden;
    }

    .login-widget-wrapper {
      max-width: px-to-rem(860);
      margin: 0 auto;

      .premium-read-more a.subscribe-now {
        border-bottom: none;

        &:hover {
          border-bottom: none;
        }
      }
    }
  }

  .nocx_paywall_area {
    position: relative;
    width: 100%;
    background-color: #fff;
  }

  .nocx_paywall_area *,
  .nocx_paywall_area *::before,
  .nocx_paywall_area *::after {
    box-sizing: border-box;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  .nocx_paywall_area h1,
  .nocx_paywall_area h2,
  .nocx_paywall_area h3,
  .nocx_paywall_area h4,
  .nocx_paywall_area h5,
  .nocx_paywall_area h5 {
    font-family: SelaneWebSTForty, SelaneForty, 'Times New Roman', Times, serif;
    font-weight: 400;
  }

  .nocx_paywall_area h1 {
    font-size: 32px;
  }

  .nocx_paywall_area h2 {
    font-size: 20px;
  }

  .nocx_paywall_area h3 {
    font-size: 22px;
  }

  .nocx_paywall_area h4 {
    font-size: 20px;
  }

  .nocx_paywall_area p {
    margin-bottom: 0;
    font-family: Curator, CuratorRegular, 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 140%;
  }

  .nocx_paywall_area p.gray-900 {
    color: #1a1a1a;
  }

  .nocx_paywall_area p.semi-bold {
    font-weight: 600;
  }

  .nocx_paywall_area p.st {
    font-family: Curator, CuratorRegular, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  .nocx_paywall_area p.google {
    padding-top: 9px;
    font-family: Barlow, Roboto, Helvetica, Arial, sans-serif;
  }

  .nocx_paywall_area a:hover,
  .nocx_paywall_area a:active,
  .nocx_paywall_area a:link {
    text-decoration: none;
  }

  .nocx_paywall_area a.st {
    color: #12239a;
  }

  .nocx_paywall_area a.cta-faq {
    color: #12239a;
  }

  .nocx_paywall_area a.cta-google {
    //display: box;
    display: flexbox;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
    font-family: Barlow, Roboto, Helvetica, Arial, sans-serif;
    font-size: 18px;
    color: #6c757d;
    border: 1px solid #bdbdbd;
    border-radius: 40px;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
  }

  .nocx_paywall_area a p {
    line-height: 100%;
  }

  .nocx_paywall_area .cta-paywall {
    display: inline-block;
    padding: 5px 24px;
    font-family: Curator, CuratorRegular, 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 18px;
    color: #333;
    background-color: #13fdfd;
    border-radius: 20px;
  }

  .nocx_paywall_area .cta-paywall.outline {
    background-color: #fff;
    border: 1px solid #13fdfd;
  }

  .nocx_paywall_area .cta-paywall.full {
    width: 100%;
  }

  .nocx_paywall_area::before {
    position: absolute;
    left: 0;
    width: 100%;
    height: 50px;
    margin-top: -50px;
    content: '';
    background: -webkit-gradient(
      linear,
      left bottom,
      left top,
      color-stop(12.3%, #fff),
      color-stop(89.6%, rgb(255 255 255 / 0%))
    );
    background: linear-gradient(bottom, #fff 12.3%, rgb(255 255 255 / 0%) 89.6%);
    background: linear-gradient(0deg, #fff 12.3%, rgb(255 255 255 / 0%) 89.6%);
  }

  .nocx_paywall_area .subscriber-query-container {
    padding-top: 25px;
    text-align: center;
  }

  .nocx_paywall_area .subscriber-query-container p {
    margin: 25px auto 15px;
    font-weight: 500;
  }

  .nocx_paywall_area .paywall-content-container {
    padding: 0 15px;
    text-align: center;
    border-top: 1px solid #cfd2d7;
    border-bottom: 1px solid #cfd2d7;
  }

  .nocx_paywall_area .paywall-content-container .paywall-header {
    padding: 25px 0;
  }

  .nocx_paywall_area .paywall-content-container .paywall-header h1 {
    margin-bottom: 24px;
    font-size: 22px;
  }

  .nocx_paywall_area .paywall-content-container .paywall-plan {
    width: 100%;
    margin: 0 auto 20px;
    border: 1px solid #dee2e6;
    border-radius: 4px;
  }

  .nocx_paywall_area .paywall-content-container .paywall-plan.recommended-plan {
    border: 1px solid #fbdb32;
  }

  .nocx_paywall_area .paywall-content-container .paywall-plan.recommended-plan .recommended {
    background-color: #fbdb32;
  }

  .nocx_paywall_area
    .paywall-content-container
    .paywall-plan.recommended-plan
    .recommended
    .description {
    font-family: Curator, CuratorRegular, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  .nocx_paywall_area .paywall-content-container .paywall-plan .paywall-content {
    display: block;
    padding: 24px 24px 20px;
  }

  .nocx_paywall_area
    .paywall-content-container
    .paywall-plan
    .paywall-content
    .paywall-plan-description {
    width: 100%;
    text-align: left;
  }

  .nocx_paywall_area
    .paywall-content-container
    .paywall-plan
    .paywall-content
    .paywall-plan-description
    h3 {
    padding-bottom: 15px;
    color: black;
  }

  .nocx_paywall_area
    .paywall-content-container
    .paywall-plan
    .paywall-content
    .paywall-plan-description
    h2 {
    padding-bottom: 15px;
    font-family: Curator, CuratorRegular, 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: normal;
    color: #1a1a1a;
  }

  .nocx_paywall_area
    .paywall-content-container
    .paywall-plan
    .paywall-content
    .paywall-plan-description
    h2
    .ori-price {
    text-decoration: line-through;
  }

  .nocx_paywall_area
    .paywall-content-container
    .paywall-plan
    .paywall-content
    .paywall-plan-description
    p {
    color: #666;
  }

  .nocx_paywall_area
    .paywall-content-container
    .paywall-plan
    .paywall-content
    .paywall-plan-description
    p.contract-period {
    padding-bottom: 15px;
    font-family: Curator, CuratorBold, 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 600;
  }

  .nocx_paywall_area
    .paywall-content-container
    .paywall-plan
    .paywall-content
    .paywall-cta-container {
    width: 100%;
    padding-top: 20px;
    text-align: left;
  }

  .nocx_paywall_area .paywall-content-container .paywall-plan .promo-container {
    margin: 0 24px 24px;
    text-align: left;
  }

  .nocx_paywall_area .paywall-content-container .paywall-plan .promo-container .promo-items {
    display: box;
    display: flexbox;
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 5px;
    margin-top: 15px;
    background: #f5f5f5;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    -webkit-box-align: center;
    -ms-flex-align: center;
  }

  .nocx_paywall_area
    .paywall-content-container
    .paywall-plan
    .promo-container
    .promo-items
    .promo-image-holder {
    width: 60px;
  }

  .nocx_paywall_area
    .paywall-content-container
    .paywall-plan
    .promo-container
    .promo-items
    .promo-image-holder
    img {
    width: 100%;
  }

  .nocx_paywall_area
    .paywall-content-container
    .paywall-plan
    .promo-container
    .promo-items
    .promo-content {
    width: auto;
    margin-left: 15px;
    text-align: left;
  }

  .nocx_paywall_area .paywall-content-container .subscription-plan-container {
    margin: 20px auto;
  }

  .nocx_paywall_area .paywall-content-container .subscription-plan-container h4 {
    padding-bottom: 24px;
    color: black;
  }

  .nocx_paywall_area .paywall-content-container .subscription-plan-container ul {
    display: inline-block;
    padding-left: 20px;
    margin: 0;
    font-family: Curator, CuratorRegular, 'Helvetica Neue', Helvetica, Arial, sans-serif;
    text-align: left;
    list-style-image: url('https://static1.straitstimes.com.sg/icons/green-circle-tick.svg');
  }

  .nocx_paywall_area .paywall-content-container .subscription-plan-container ul li {
    margin-bottom: 14px;
  }

  .nocx_paywall_area .paywall-content-container .faq-container {
    width: 100%;
    margin: 20px 0;
  }

  .nocx_paywall_area .paywall-content-container .faq-container h4 {
    padding-bottom: 24px;
    color: black;
  }

  .nocx_paywall_area .subcribe-google {
    margin: 40px 0;
    text-align: center;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' stroke='%23727f8e' stroke-linecap='butt' stroke-linejoin='round' fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 .5h10m-10 5h10' stroke-opacity='0.5'/%3E%3C/svg%3E");
    background-repeat: repeat-x;
    background-position: 0 -6px;
    border-top: 6px double transparent;
  }

  .nocx_paywall_area .subcribe-google h2 {
    padding-top: 38px;
    font-size: 22px;
    color: black;
  }

  .nocx_paywall_area .subcribe-google .cta-container {
    width: 316px;
    margin: 10px auto 0;
  }

  .nocx_paywall_area .subcribe-google::after {
    position: absolute;
    bottom: -35px;
    left: 0;
    width: 100%;
    content: '';
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' stroke='%23727f8e' stroke-linecap='butt' stroke-linejoin='round' fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 .5h10m-10 5h10' stroke-opacity='0.5'/%3E%3C/svg%3E");
    background-repeat: repeat-x;
    background-position: 0 0;
    border-bottom: 6px double transparent;
  }

  @media (min-width: 768px) {
    .nocx_paywall_area .cta-paywall.full {
      width: auto;
    }

    .nocx_paywall_area .paywall-content-container .paywall-header h1 {
      margin-bottom: 1rem;
      font-size: 32px;
    }

    .nocx_paywall_area .paywall-content-container .paywall-header {
      padding: 35px 0;
    }

    .nocx_paywall_area .paywall-content-container .paywall-plan .paywall-content {
      display: box;
      display: flexbox;
      display: flex;
      padding: 24px 24px 15px;
    }

    .nocx_paywall_area
      .paywall-content-container
      .paywall-plan
      .paywall-content
      .paywall-plan-description {
      width: 70%;
    }

    .nocx_paywall_area
      .paywall-content-container
      .paywall-plan
      .paywall-content
      .paywall-cta-container {
      display: box;
      display: flexbox;
      display: flex;
      flex-direction: column-reverse;
      flex-direction: column-reverse;
      align-items: flex-end;
      width: 30%;
      padding-top: 0;
      text-align: right;
      -webkit-box-align: end;
      -ms-flex-align: end;
      -webkit-box-orient: vertical;
      -webkit-box-direction: reverse;
    }

    .nocx_paywall_area .paywall-content-container .subscription-plan-container ul {
      padding-left: 0;
      margin: 0 auto;
    }

    .nocx_paywall_area .paywall-content-container .faq-container {
      margin: 20px auto;
    }

    .nocx_paywall_area .subcribe-google .cta-container {
      margin: 28px auto 0;
    }

    .nocx_paywall_area .subcribe-google::after {
      bottom: -49px;
    }
  }
</style>
