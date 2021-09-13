import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <script
          async=""
          src="https://www.clarity.ms/eus2/s/0.6.22/clarity.js"
        />
        <script
          type="text/javascript"
          async=""
          src="https://www.googleadservices.com/pagead/conversion_async.js"
        />
        <script async="" src="https://s.pinimg.com/ct/lib/main.89cd5bf4.js" />
        <script
          type="text/javascript"
          async=""
          src="https://www.googletagmanager.com/gtag/js?id=AW-825588581&amp;l=dataLayer&amp;cx=c"
        />
        <script
          src="https://connect.facebook.net/signals/config/1427692210755283?v=2.9.45&amp;r=stable"
          async=""
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-T8HJ6C2M3P"
        />
        <script
          type="text/javascript"
          src="//cdn.callrail.com/companies/429344976/6d8efb9eef2e47bb3b64/12/swap.js"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
                    function gtag(){window.dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'UA-109759671-1');
                    gtag('config', 'G-T8HJ6C2M3P');
                    gtag("config", "AW-825588581")
                    `,
          }}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
             !function(f, b, e, v, n, t, s) {
                if (f.fbq) return
                n = f.fbq = function() {
                  n.callMethod ?
                    n.callMethod.apply(n, arguments) : n.queue.push(arguments)
                }
                if (!f._fbq) f._fbq = n
                n.push = n
                n.loaded = !0
                n.version = "2.0"
                n.queue = []
                t = b.createElement(e)
                t.async = !0
                t.src = v
                s = b.getElementsByTagName(e)[0]
                s.parentNode.insertBefore(t, s)
              }(window, document, "script",
                "https://connect.facebook.net/en_US/fbevents.js")
              fbq("init", "1427692210755283")
              fbq("track", "PageView")
            `,
          }}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: ` (function(c, l, a, r, i, t, y) {
              c[a] = c[a] || function() {
                (c[a].q = c[a].q || []).push(arguments)
              }
              t = l.createElement(r)
              t.async = 1
              t.src = "https://www.clarity.ms/tag/" + i
              y = l.getElementsByTagName(r)[0]
              y.parentNode.insertBefore(t, y)
            })(window, document, "clarity", "script", "54q1erdpu0")`,
          }}
        />
        <script src="https://googleads.g.doubleclick.net/pagead/viewthroughconversion/825588581/?random=1631112054346&amp;cv=9&amp;fst=1631112054346&amp;num=1&amp;bg=ffffff&amp;guid=ON&amp;resp=GooglemKTybQhCsO&amp;u_h=1120&amp;u_w=1792&amp;u_ah=1029&amp;u_aw=1792&amp;u_cd=30&amp;u_his=2&amp;u_tz=-300&amp;u_java=false&amp;u_nplug=3&amp;u_nmime=4&amp;gtm=2oa910&amp;sendb=1&amp;ig=1&amp;data=event%3Dgtag.config&amp;frm=0&amp;url=https%3A%2F%2Fwww.a-christianglass.com%2F&amp;tiba=A-Christian%20Glass%20-%20Impact%20Resistant%20Windows%20and%20Doors&amp;hn=www.googleadservices.com&amp;async=1&amp;rfmt=3&amp;fmt=4"></script>
        <meta
          http-equiv="origin-trial"
          content="A7jJ/K14TswrMYv7k08eMRw2LMhCoHtdZIlR4bsG9p1tHmBXAgq7ZMLdccBMn+RzwQkrXZM0RPFAPiVZJKofAQsAAACHeyJvcmlnaW4iOiJodHRwczovL3d3dy5waW50ZXJlc3QuY29tOjQ0MyIsImZlYXR1cmUiOiJDb252ZXJzaW9uTWVhc3VyZW1lbnQiLCJleHBpcnkiOjE2MzE2NjM5OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://seal-seflorida.bbb.org/logo/2-a-christian-glass-and-mirror-5001778.css"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1427692210755283&ev=PageView&noscript=1" alt=""/>`,
          }}
        />
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(e){if(!window.pintrk){window.pintrk = function () {
              window.pintrk.queue.push(Array.prototype.slice.call(arguments))};var
                n=window.pintrk;n.queue=[],n.version="3.0";var
                t=document.createElement("script");t.async=!0,t.src=e;var
                r=document.getElementsByTagName("script")[0];
                r.parentNode.insertBefore(t,r)}}("https://s.pinimg.com/ct/core.js");
              pintrk('load', '2613264786567', {em: '<user_email_address>'});
              pintrk('page');
              `,
          }}
        />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<img height="1" width="1" style="display:none;" alt="" src="https://ct.pinterest.com/v3/?event=init&tid=2613264786567&pd[em]=<hashed_email_address>&noscript=1" />`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            _linkedin_partner_id = "1478002";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
          `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                (function(){var s = document.getElementsByTagName("script")[0];
                var b = document.createElement("script");
                b.type = "text/javascript";b.async = true;
                b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
                s.parentNode.insertBefore(b, s);})();
                `,
          }}
        />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=1478002&fmt=gif" /> `,
          }}
        />
        <script
          type="text/javascript"
          id="hs-script-loader"
          async=""
          defer=""
          src="//js.hs-scripts.com/19617179.js"
        />
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
