import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "SenseLive's cookie policy explaining how we use cookies and similar technologies on our website.",
}

export default function CookiePolicyPage() {
  return (
    <div className="flex flex-col">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30 dark:bg-gray-900">
        <div className="container px-4 md:px:6">
          <PageHeader title="Cookie Policy" description="Last updated: March 14, 2025" />

          <div className="prose prose-lg dark:prose-invert max-w-none mt-8">
            <h2>Introduction</h2>
            <p>
              This Cookie Policy explains how SenseLive ("we", "our", or "us") uses cookies and similar technologies on
              our website. By using our website, you consent to the use of cookies as described in this policy.
            </p>

            <h2>What Are Cookies?</h2>
            <p>
              Cookies are small text files that are placed on your device when you visit a website. They are widely used
              to make websites work more efficiently and provide information to the website owners. Cookies can be
              "persistent" or "session" cookies. Persistent cookies remain on your device when you go offline, while
              session cookies are deleted as soon as you close your web browser.
            </p>

            <h2>How We Use Cookies</h2>
            <p>We use cookies for the following purposes:</p>
            <ul>
              <li>
                <strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly.
                They enable core functionality such as security, network management, and account access. You may disable
                these by changing your browser settings, but this may affect how the website functions.
              </li>
              <li>
                <strong>Analytics Cookies:</strong> These cookies help us understand how visitors interact with our
                website by collecting and reporting information anonymously. This helps us improve our website and your
                experience.
              </li>
              <li>
                <strong>Functionality Cookies:</strong> These cookies enable the website to provide enhanced
                functionality and personalization. They may be set by us or by third-party providers whose services we
                have added to our pages.
              </li>
              <li>
                <strong>Targeting Cookies:</strong> These cookies may be set through our site by our advertising
                partners. They may be used by those companies to build a profile of your interests and show you relevant
                advertisements on other sites.
              </li>
              <li>
                <strong>Social Media Cookies:</strong> These cookies are set by social media services that we have added
                to the site to enable you to share our content with your friends and networks. They can track your
                browser across other sites and build a profile of your interests.
              </li>
            </ul>

            <h2>Types of Cookies We Use</h2>
            <h3>First-Party Cookies</h3>
            <p>
              First-party cookies are placed by us directly when you visit our website. We use these cookies to remember
              your preferences and settings, authenticate users, and gather analytics data about how you interact with
              our website.
            </p>

            <h3>Third-Party Cookies</h3>
            <p>
              Third-party cookies are placed by third parties when you visit our website. These may include analytics
              providers, advertising networks, and social media platforms. The information collected by these cookies
              may be shared with the third party that placed the cookie.
            </p>

            <h2>Specific Cookies We Use</h2>
            <table className="w-full border-collapse border border-border dark:border-gray-700">
              <thead>
                <tr className="bg-muted dark:bg-gray-800">
                  <th className="border border-border p-2 text-left">Cookie Name</th>
                  <th className="border border-border p-2 text-left">Purpose</th>
                  <th className="border border-border p-2 text-left">Duration</th>
                  <th className="border border-border p-2 text-left">Type</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-2">_ga</td>
                  <td className="border border-border p-2">Used by Google Analytics to distinguish users</td>
                  <td className="border border-border p-2">2 years</td>
                  <td className="border border-border p-2">Analytics</td>
                </tr>
                <tr>
                  <td className="border border-border p-2">_gid</td>
                  <td className="border border-border p-2">Used by Google Analytics to distinguish users</td>
                  <td className="border border-border p-2">24 hours</td>
                  <td className="border border-border p-2">Analytics</td>
                </tr>
                <tr>
                  <td className="border border-border p-2">_gat</td>
                  <td className="border border-border p-2">Used by Google Analytics to throttle request rate</td>
                  <td className="border border-border p-2">1 minute</td>
                  <td className="border border-border p-2">Analytics</td>
                </tr>
                <tr>
                  <td className="border border-border p-2">cookie-consent</td>
                  <td className="border border-border p-2">Stores your cookie consent preferences</td>
                  <td className="border border-border p-2">1 year</td>
                  <td className="border border-border p-2">Essential</td>
                </tr>
                <tr>
                  <td className="border border-border p-2">theme</td>
                  <td className="border border-border p-2">Stores your theme preference (light/dark)</td>
                  <td className="border border-border p-2">1 year</td>
                  <td className="border border-border p-2">Functionality</td>
                </tr>
              </tbody>
            </table>

            <h2>Managing Cookies</h2>
            <p>
              Most web browsers allow you to control cookies through their settings preferences. However, if you limit
              the ability of websites to set cookies, you may worsen your overall user experience, since it will no
              longer be personalized to you. It may also stop you from saving customized settings like login
              information.
            </p>
            <p>
              To manage cookies through your browser settings, please use the help function in your browser or visit the
              following links:
            </p>
            <ul>
              <li>
                <a
                  href="https://support.google.com/chrome/answer/95647"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Google Chrome
                </a>
              </li>
              <li>
                <a
                  href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a
                  href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Safari
                </a>
              </li>
              <li>
                <a
                  href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Microsoft Edge
                </a>
              </li>
            </ul>

            <h2>Do Not Track</h2>
            <p>
              Some browsers have a "Do Not Track" feature that signals to websites that you visit that you do not want
              to have your online activity tracked. Given that there is not yet a common understanding of how to
              interpret the DNT signal, our website does not currently respond to browser DNT signals.
            </p>

            <h2>Changes to This Cookie Policy</h2>
            <p>
              We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new
              Cookie Policy on this page and updating the "Last updated" date at the top of this page. You are advised
              to review this Cookie Policy periodically for any changes.
            </p>

            <h2>Contact Us</h2>
            <p>If you have any questions about our Cookie Policy, please contact us at:</p>
            <ul>
              <li>Email: info@senselive.io</li>
              <li>Address: 268, BHAMTEE COLONEY, NAGPUR, Maharashtra, India - 440022</li>
              <li>Phone: +91 9604070622 / +91 8408058531</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

