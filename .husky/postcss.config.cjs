const autoprefixer = require('autoprefixer')
const pfm = require('postcss-font-magician')

const assetsBaseURI =
  process.env.NODE_ENV === 'production'
    ? 'https://www.straitstimes.com/multimedia/graphics/assets'
    : 'https://st-graphics-dev-assets.s3-ap-southeast-1.amazonaws.com'

const fontsBaseURI = `${assetsBaseURI}/fonts/v2`

const config = {
  syntax: 'postcss-scss',
  plugins: [
    autoprefixer,

    // FIXME: Font Magician doesn’t understand CSS custom properties.
    // Using SCSS variables as a workaround in the meantime.

    // TODO: Rename files and organize folder on the cloud.
    pfm({
      custom: {
        Curator: {
          variants: {
            normal: {
              // Curator Regular
              400: {
                url: {
                  woff2: `${fontsBaseURI}/CuratorRegular.woff2`,
                  woff: `${fontsBaseURI}/CuratorRegular.woff`,
                },
              },
              // Curator Bold
              700: {
                url: {
                  woff2: `${fontsBaseURI}/CuratorBold.woff2`,
                  woff: `${fontsBaseURI}/CuratorBold.woff`,
                },
              },
            },
          },
        },
        'Selane Text': {
          variants: {
            normal: {
              // Selane Text Regular
              400: {
                url: {
                  woff2: `${fontsBaseURI}/SelaneTextRegular.woff2`,
                  woff: `${fontsBaseURI}/SelaneTextRegular.woff`,
                },
              },
              // Selane Text Bold
              700: {
                url: {
                  woff2: `${fontsBaseURI}/SelaneTextBold.woff2`,
                  woff: `${fontsBaseURI}/SelaneTextBold.woff`,
                },
              },
            },
            italic: {
              // Selane Text Italic
              400: {
                url: {
                  woff2: `${fontsBaseURI}/SelaneTextRegularItalic.woff2`,
                  woff: `${fontsBaseURI}/SelaneTextRegularItalic.woff`,
                },
              },
              // Selane Text Bold Italic
              700: {
                url: {
                  woff2: `${fontsBaseURI}/SelaneTextBoldItalic.woff2`,
                  woff: `${fontsBaseURI}/SelaneTextBoldItalic.woff`,
                },
              },
            },
          },
        },
        'Selane Ten': {
          variants: {
            italic: {
              // Selane Ten Italic
              400: {
                url: {
                  woff2: `${fontsBaseURI}/SelaneTenItalicWeb.woff2`,
                  woff: `${fontsBaseURI}/SelaneTenItalicWeb.woff`,
                },
              },
            },
          },
        },
        'Selane Twenty': {
          variants: {
            normal: {
              // Selane Twenty Regular
              400: {
                url: {
                  woff2: `${fontsBaseURI}/SelaneSTTwenty.woff2`,
                  woff: `${fontsBaseURI}/SelaneSTTwenty.woff`,
                },
              },
            },
          },
        },
        'Selane Forty': {
          variants: {
            normal: {
              // Selane Forty Regular
              400: {
                url: {
                  woff2: `${fontsBaseURI}/SelaneSTForty.woff2`,
                  woff: `${fontsBaseURI}/SelaneSTForty.woff`,
                },
              },
            },
          },
        },

        // TODO: Remove the following legacy definitions.

        CuratorRegular: {
          variants: {
            normal: {
              400: {
                url: {
                  woff2: `${fontsBaseURI}/CuratorRegular.woff2`,
                  woff: `${fontsBaseURI}/CuratorRegular.woff`,
                },
              },
            },
          },
        },
        CuratorBold: {
          variants: {
            normal: {
              700: {
                url: {
                  woff2: `${fontsBaseURI}/CuratorBold.woff2`,
                  woff: `${fontsBaseURI}/CuratorBold.woff`,
                },
              },
            },
          },
        },
        CuratorItalic: {
          variants: {
            normal: {
              400: {
                url: {
                  woff2: `${fontsBaseURI}/CuratorItalic.woff2`,
                  woff: `${fontsBaseURI}/CuratorItalic.woff`,
                },
              },
            },
          },
        },
        CuratorBoldItalic: {
          variants: {
            normal: {
              700: {
                url: {
                  woff2: `${fontsBaseURI}/CuratorBoldItalic.woff2`,
                  woff: `${fontsBaseURI}/CuratorBoldItalic.woff`,
                },
              },
            },
          },
        },
        SelaneTextRegular: {
          variants: {
            normal: {
              400: {
                url: {
                  woff2: `${fontsBaseURI}/SelaneTextRegular.woff2`,
                  woff: `${fontsBaseURI}/SelaneTextRegular.woff`,
                },
              },
            },
          },
        },
        SelaneTextBold: {
          variants: {
            normal: {
              700: {
                url: {
                  woff2: `${fontsBaseURI}/SelaneTextBold.woff2`,
                  woff: `${fontsBaseURI}/SelaneTextBold.woff`,
                },
              },
            },
          },
        },
        SelaneTextRegularItalic: {
          variants: {
            normal: {
              400: {
                url: {
                  woff2: `${fontsBaseURI}/SelaneTextRegularItalic.woff2`,
                  woff: `${fontsBaseURI}/SelaneTextRegularItalic.woff`,
                },
              },
            },
          },
        },
        SelaneTextBoldItalic: {
          variants: {
            normal: {
              700: {
                url: {
                  woff2: `${fontsBaseURI}/SelaneTextBoldItalic.woff2`,
                  woff: `${fontsBaseURI}/SelaneTextBoldItalic.woff`,
                },
              },
            },
          },
        },
        SelaneTenItalic: {
          variants: {
            normal: {
              400: {
                url: {
                  woff2: `${fontsBaseURI}/SelaneTenItalicWeb.woff2`,
                  woff: `${fontsBaseURI}/SelaneTenItalicWeb.woff`,
                },
              },
            },
          },
        },
        SelaneTwenty: {
          variants: {
            normal: {
              900: {
                url: {
                  woff2: `${fontsBaseURI}/SelaneSTTwenty.woff2`,
                  woff: `${fontsBaseURI}/SelaneSTTwenty.woff`,
                },
              },
            },
          },
        },
        SelaneForty: {
          variants: {
            normal: {
              400: {
                url: {
                  woff2: `${fontsBaseURI}/SelaneSTForty.woff2`,
                  woff: `${fontsBaseURI}/SelaneSTForty.woff`,
                },
              },
            },
          },
        },
      },
      /**
       * Font Display Strategy
       *
       * `optional` is best if performance is a top priority.
       * `swap` is best if displaying text is a top priotity.
       *
       * {@link https://web.dev/font-best-practices/#choose-an-appropriate-font-display-strategy Choose an appropriate font-display strategy}
       */
      display: 'swap',
      protocol: 'https:',
    }),
  ],
}

module.exports = config
