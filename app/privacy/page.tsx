import type { Metadata } from "next"
import Link from "next/link"
import { PageHeader } from "@/components/page-header"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "SenseLive's privacy policy regarding the collection, use, and protection of your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <PageHeader title="Privacy Policy" description="Last updated: March 14, 2025" />

          <div className="prose prose-lg dark:prose-invert max-w-none mt-8">
            <h2>Introduction</h2>
            <p>
              SenseLive ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how
              we collect, use, disclose, and safeguard your information when you visit our website, use our products, or
              interact with our services.
            </p>
            <p>
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy,
              please do not access the site or use our services.
            </p>

            <h2>Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide to us when you:</p>
            <ul>
              <li>Register on our website</li>
              <li>Express interest in obtaining information about us or our products</li>
              <li>Participate in activities on our website (such as posting comments or entering competitions)</li>
              <li>Request customer support</li>
              <li>Purchase a product or service</li>
            </ul>
            <p>The personal information we may collect includes:</p>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Job title and company name</li>
              <li>Mailing address</li>
              <li>Payment information</li>
              <li>Other information you choose to provide</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <p>
              When you visit our website or use our services, we may automatically collect certain information about
              your device and usage patterns. This information may include:
            </p>
            <ul>
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Device information</li>
              <li>Pages visited and time spent on those pages</li>
              <li>Referring website addresses</li>
              <li>Other diagnostic data</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We may use the information we collect for various purposes, including:</p>
            <ul>
              <li>Providing, operating, and maintaining our website and services</li>
              <li>Improving, personalizing, and expanding our website and services</li>
              <li>Understanding and analyzing how you use our website and services</li>
              <li>Developing new products, services, features, and functionality</li>
              <li>Communicating with you about updates, security alerts, and support</li>
              <li>Sending you marketing and promotional communications (with your consent)</li>
              <li>Finding and preventing fraud</li>
              <li>For compliance purposes, including enforcing our Terms of Service</li>
            </ul>

            <h2>Disclosure of Your Information</h2>
            <p>We may share your information in the following situations:</p>
            <ul>
              <li>
                <strong>Business Transfers:</strong> We may share or transfer your information in connection with a
                merger, acquisition, reorganization, or sale of assets.
              </li>
              <li>
                <strong>With Affiliates:</strong> We may share your information with our affiliates, in which case we
                will require those affiliates to honor this Privacy Policy.
              </li>
              <li>
                <strong>With Business Partners:</strong> We may share your information with our business partners to
                offer you certain products, services, or promotions.
              </li>
              <li>
                <strong>With Service Providers:</strong> We may share your information with service providers to perform
                services for us or on our behalf.
              </li>
              <li>
                <strong>With Your Consent:</strong> We may disclose your personal information for any other purpose with
                your consent.
              </li>
              <li>
                <strong>Legal Requirements:</strong> We may disclose your information where required to do so by law or
                in response to valid requests by public authorities.
              </li>
            </ul>

            <h2>Security of Your Information</h2>
            <p>
              We use administrative, technical, and physical security measures to protect your personal information.
              While we have taken reasonable steps to secure the information you provide to us, please be aware that no
              security measures are perfect or impenetrable, and no method of data transmission can be guaranteed
              against interception or other types of misuse.
            </p>

            <h2>Your Data Protection Rights</h2>
            <p>Depending on your location, you may have certain rights regarding your personal information, such as:</p>
            <ul>
              <li>The right to access the personal information we have about you</li>
              <li>The right to rectify inaccurate personal information</li>
              <li>The right to request the deletion of your personal information</li>
              <li>The right to restrict the processing of your personal information</li>
              <li>The right to data portability</li>
              <li>The right to object to the processing of your personal information</li>
              <li>The right to withdraw consent</li>
            </ul>
            <p>To exercise these rights, please contact us at info@senselive.io.</p>

            <h2>Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our website and store certain
              information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being
              sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
            </p>
            <p>
              For more information about the cookies we use, please see our{" "}
              <Link href="/cookies" className="text-primary hover:underline">
                Cookie Policy
              </Link>
              .
            </p>

            <h2>Third-Party Websites</h2>
            <p>
              Our website may contain links to other websites that are not operated by us. If you click on a third-party
              link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy
              of every site you visit. We have no control over and assume no responsibility for the content, privacy
              policies, or practices of any third-party sites or services.
            </p>

            <h2>Children's Privacy</h2>
            <p>
              Our services are not intended for use by children under the age of 16. We do not knowingly collect
              personal information from children under 16. If we become aware that we have collected personal
              information from a child under 16 without verification of parental consent, we will take steps to remove
              that information from our servers.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last updated" date at the top of this page. You are advised
              to review this Privacy Policy periodically for any changes.
            </p>

            <h2>Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
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

