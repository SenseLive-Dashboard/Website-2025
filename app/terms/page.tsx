import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "SenseLive's terms of service governing the use of our website, products, and services.",
}

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <PageHeader title="Terms of Service" description="Last updated: March 14, 2025" />

          <div className="prose prose-lg dark:prose-invert max-w-none mt-8">
            <h2>1. Introduction</h2>
            <p>
              Welcome to SenseLive. These Terms of Service ("Terms") govern your access to and use of the SenseLive
              website, products, and services ("Services"). By accessing or using our Services, you agree to be bound by
              these Terms. If you do not agree to these Terms, you may not access or use the Services.
            </p>

            <h2>2. Definitions</h2>
            <p>Throughout these Terms, the following definitions apply:</p>
            <ul>
              <li>
                <strong>"SenseLive"</strong>, <strong>"we"</strong>, <strong>"us"</strong>, or <strong>"our"</strong>{" "}
                refers to SenseLive, its subsidiaries, and affiliates.
              </li>
              <li>
                <strong>"You"</strong> or <strong>"your"</strong> refers to the individual or entity accessing or using
                the Services.
              </li>
              <li>
                <strong>"Content"</strong> refers to any information, data, text, software, graphics, messages, or other
                materials that can be accessed through our Services.
              </li>
              <li>
                <strong>"User Content"</strong> refers to any Content that you submit, upload, or otherwise make
                available through our Services.
              </li>
            </ul>

            <h2>3. Account Registration and Security</h2>
            <p>
              To access certain features of our Services, you may need to register for an account. When you register,
              you agree to provide accurate, current, and complete information about yourself and to update this
              information to keep it accurate, current, and complete.
            </p>
            <p>
              You are responsible for safeguarding your account credentials and for all activities that occur under your
              account. You agree to notify us immediately of any unauthorized use of your account or any other breach of
              security. We cannot and will not be liable for any loss or damage arising from your failure to comply with
              these requirements.
            </p>

            <h2>4. Use of Services</h2>
            <h3>4.1 Acceptable Use</h3>
            <p>
              You agree to use our Services only for lawful purposes and in accordance with these Terms. You agree not
              to use our Services:
            </p>
            <ul>
              <li>
                In any way that violates any applicable federal, state, local, or international law or regulation.
              </li>
              <li>
                To transmit, or procure the sending of, any advertising or promotional material, including any "junk
                mail," "chain letter," "spam," or any other similar solicitation.
              </li>
              <li>
                To impersonate or attempt to impersonate SenseLive, a SenseLive employee, another user, or any other
                person or entity.
              </li>
              <li>
                To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Services, or
                which, as determined by us, may harm SenseLive or users of the Services or expose them to liability.
              </li>
            </ul>

            <h3>4.2 Monitoring and Enforcement</h3>
            <p>We have the right to:</p>
            <ul>
              <li>Remove or refuse to post any User Content for any or no reason.</li>
              <li>
                Take any action with respect to any User Content that we deem necessary or appropriate in our sole
                discretion.
              </li>
              <li>
                Disclose your identity or other information about you to any third party who claims that material posted
                by you violates their rights.
              </li>
              <li>Terminate or suspend your access to all or part of the Services for any or no reason.</li>
            </ul>

            <h2>5. Intellectual Property Rights</h2>
            <h3>5.1 SenseLive Content</h3>
            <p>
              The Services and their entire contents, features, and functionality (including but not limited to all
              information, software, text, displays, images, video, and audio, and the design, selection, and
              arrangement thereof) are owned by SenseLive, its licensors, or other providers of such material and are
              protected by United States and international copyright, trademark, patent, trade secret, and other
              intellectual property or proprietary rights laws.
            </p>
            <p>
              These Terms permit you to use the Services for your personal, non-commercial use only. You must not
              reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish,
              download, store, or transmit any of the material on our Services, except as follows:
            </p>
            <ul>
              <li>
                Your computer may temporarily store copies of such materials in RAM incidental to your accessing and
                viewing those materials.
              </li>
              <li>
                You may store files that are automatically cached by your Web browser for display enhancement purposes.
              </li>
              <li>
                You may print or download one copy of a reasonable number of pages of the website for your own personal,
                non-commercial use and not for further reproduction, publication, or distribution.
              </li>
              <li>
                If we provide desktop, mobile, or other applications for download, you may download a single copy to
                your computer or mobile device solely for your own personal, non-commercial use, provided you agree to
                be bound by our end user license agreement for such applications.
              </li>
            </ul>

            <h3>5.2 User Content</h3>
            <p>
              By posting, uploading, or otherwise making available any User Content on or through the Services, you
              grant SenseLive and its affiliates and service providers a non-exclusive, royalty-free, perpetual,
              irrevocable, and fully sublicensable right to use, reproduce, modify, adapt, publish, translate, create
              derivative works from, distribute, perform, and display such User Content throughout the world in any
              media.
            </p>
            <p>You represent and warrant that:</p>
            <ul>
              <li>
                You own or control all rights in and to the User Content and have the right to grant the license granted
                above.
              </li>
              <li>All of your User Content does and will comply with these Terms.</li>
            </ul>

            <h2>6. Products and Services</h2>
            <h3>6.1 Product Information</h3>
            <p>
              We strive to provide accurate information about our products and services. However, we do not warrant that
              product descriptions or other content on the Services are accurate, complete, reliable, current, or
              error-free.
            </p>

            <h3>6.2 Purchases</h3>
            <p>
              All purchases through our Services are subject to our order acceptance. We may, in our sole discretion,
              refuse to accept an order. After we receive your order, we will send you an email confirming receipt of
              your order. This email confirmation will constitute our acceptance of your order.
            </p>

            <h3>6.3 Pricing</h3>
            <p>
              All prices displayed on the Services are subject to change without notice. We reserve the right to correct
              any errors or omissions, and to change or update information at any time without prior notice.
            </p>

            <h2>7. Warranty Disclaimer</h2>
            <p>
              THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND,
              EITHER EXPRESS OR IMPLIED. SENSELIVE DISCLAIMS ALL WARRANTIES, INCLUDING, BUT NOT LIMITED TO, IMPLIED
              WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p>
              SENSELIVE DOES NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE
              CORRECTED, OR THAT THE SERVICES OR THE SERVER THAT MAKES THEM AVAILABLE ARE FREE OF VIRUSES OR OTHER
              HARMFUL COMPONENTS.
            </p>

            <h2>8. Limitation of Liability</h2>
            <p>
              IN NO EVENT WILL SENSELIVE, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS,
              OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN
              CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE SERVICES, INCLUDING ANY DIRECT, INDIRECT, SPECIAL,
              INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.
            </p>

            <h2>9. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless SenseLive, its affiliates, licensors, and service
              providers, and its and their respective officers, directors, employees, contractors, agents, licensors,
              suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards,
              losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your
              violation of these Terms or your use of the Services.
            </p>

            <h2>10. Governing Law and Jurisdiction</h2>
            <p>
              These Terms and any dispute or claim arising out of or related to them, their subject matter, or their
              formation shall be governed by and construed in accordance with the laws of the Commonwealth of
              Massachusetts, without giving effect to any choice or conflict of law provision or rule.
            </p>
            <p>
              Any legal suit, action, or proceeding arising out of, or related to, these Terms or the Services shall be
              instituted exclusively in the federal courts of the United States or the courts of the Commonwealth of
              Massachusetts, although we retain the right to bring any suit, action, or proceeding against you for
              breach of these Terms in your country of residence or any other relevant country.
            </p>

            <h2>11. Changes to Terms</h2>
            <p>
              We may revise and update these Terms from time to time in our sole discretion. All changes are effective
              immediately when we post them, and apply to all access to and use of the Services thereafter. Your
              continued use of the Services following the posting of revised Terms means that you accept and agree to
              the changes.
            </p>

            <h2>12. Contact Information</h2>
            <p>If you have any questions about these Terms, please contact us at:</p>
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

