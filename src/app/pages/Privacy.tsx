import { Shield } from "lucide-react";

export function Privacy() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[300px] bg-gradient-to-r from-emerald-900 to-emerald-700 text-white">
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-4">
              <Shield size={48} />
              <h1 className="text-5xl font-bold">Privacy Policy</h1>
            </div>
            <p className="text-xl text-emerald-100">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-gray-600 mb-8">
            <strong>Last Updated: January 29, 2026</strong>
          </p>

          <div className="space-y-8 text-gray-700">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="mb-4">
                YogaFit ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains 
                how we collect, use, disclose, and safeguard your information when you use our services, including our 
                website, mobile application, and physical studio facilities.
              </p>
              <p>
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, 
                please do not access our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 Personal Information</h3>
              <p className="mb-4">We collect personal information that you voluntarily provide when you:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Register for an account</li>
                <li>Book classes or purchase memberships</li>
                <li>Subscribe to our newsletter</li>
                <li>Contact us for support</li>
                <li>Participate in surveys or promotions</li>
              </ul>
              <p className="mb-4">This information may include:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name, email address, and phone number</li>
                <li>Billing and payment information</li>
                <li>Date of birth and gender</li>
                <li>Health and fitness information (when voluntarily provided)</li>
                <li>Emergency contact information</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">2.2 Automatically Collected Information</h3>
              <p className="mb-4">When you access our services, we automatically collect certain information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Device information (IP address, browser type, operating system)</li>
                <li>Usage data (pages visited, time spent, click patterns)</li>
                <li>Location data (if you grant permission)</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">2.3 Information from Third Parties</h3>
              <p>
                We may receive information about you from third-party services such as payment processors, social media 
                platforms (if you connect your accounts), and analytics providers.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="mb-4">We use your information for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To create and manage your account</li>
                <li>To process transactions and send related information</li>
                <li>To provide customer support and respond to inquiries</li>
                <li>To send you updates, marketing communications, and promotional offers</li>
                <li>To improve our services and develop new features</li>
                <li>To monitor usage patterns and analyze trends</li>
                <li>To detect, prevent, and address technical issues or fraud</li>
                <li>To comply with legal obligations</li>
                <li>To enforce our terms and conditions</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. How We Share Your Information</h2>
              <p className="mb-4">We may share your information in the following circumstances:</p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">4.1 Service Providers</h3>
              <p className="mb-4">
                We share information with third-party service providers who perform services on our behalf, such as:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Payment processors</li>
                <li>Email service providers</li>
                <li>Cloud storage providers</li>
                <li>Analytics services</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">4.2 Legal Requirements</h3>
              <p className="mb-4">
                We may disclose your information if required by law, court order, or governmental request, or to protect 
                our rights, property, or safety.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">4.3 Business Transfers</h3>
              <p className="mb-4">
                In the event of a merger, acquisition, or sale of assets, your information may be transferred to the 
                acquiring entity.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">4.4 With Your Consent</h3>
              <p>
                We may share your information for other purposes with your explicit consent.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies and Tracking Technologies</h2>
              <p className="mb-4">
                We use cookies and similar tracking technologies to track activity on our services and store certain 
                information. Cookies are small data files stored on your device.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Types of Cookies We Use:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Essential Cookies:</strong> Necessary for the operation of our services</li>
                <li><strong>Performance Cookies:</strong> Help us understand how visitors use our services</li>
                <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                <li><strong>Marketing Cookies:</strong> Track your browsing habits to deliver relevant advertising</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Security</h2>
              <p className="mb-4">
                We implement appropriate technical and organizational security measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Encryption of sensitive data during transmission (SSL/TLS)</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication measures</li>
                <li>Employee training on data protection</li>
                <li>Secure data storage with reputable service providers</li>
              </ul>
              <p>
                However, no method of transmission over the Internet or electronic storage is 100% secure. While we 
                strive to protect your information, we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Retention</h2>
              <p className="mb-4">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this 
                privacy policy, unless a longer retention period is required or permitted by law.
              </p>
              <p>
                When we no longer need your information, we will securely delete or anonymize it. Some information may 
                be retained for legitimate business purposes or legal compliance.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Your Privacy Rights</h2>
              <p className="mb-4">Depending on your location, you may have the following rights:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Access:</strong> Request a copy of your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Receive your data in a structured, machine-readable format</li>
                <li><strong>Objection:</strong> Object to processing of your information</li>
                <li><strong>Restriction:</strong> Request restriction of processing</li>
                <li><strong>Withdraw Consent:</strong> Withdraw previously given consent</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us at trainer@yogafit.com. We will respond within the 
                timeframe required by applicable law.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Marketing Communications</h2>
              <p className="mb-4">
                We may send you marketing communications about our services, promotions, and events. You can opt out at 
                any time by:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Clicking the "unsubscribe" link in our emails</li>
                <li>Adjusting your communication preferences in your account settings</li>
                <li>Contacting us directly at trainer@yogafit.com</li>
              </ul>
              <p className="mt-4">
                Note: Even if you opt out of marketing communications, we may still send you transactional emails 
                related to your account and bookings.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Children's Privacy</h2>
              <p>
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal 
                information from children. If you believe we have collected information from a child, please contact us 
                immediately so we can delete it.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Third-Party Links</h2>
              <p>
                Our services may contain links to third-party websites or services. We are not responsible for the 
                privacy practices of these third parties. We encourage you to read their privacy policies.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. California Privacy Rights</h2>
              <p className="mb-4">
                If you are a California resident, you have additional rights under the California Consumer Privacy Act 
                (CCPA):
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Right to know what personal information is collected, used, and shared</li>
                <li>Right to delete personal information</li>
                <li>Right to opt-out of the sale of personal information (we do not sell your information)</li>
                <li>Right to non-discrimination for exercising your privacy rights</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. International Data Transfers</h2>
              <p>
                Your information may be transferred to and maintained on servers located outside of your state, province, 
                country, or other governmental jurisdiction where data protection laws may differ. By using our services, 
                you consent to this transfer.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Changes to This Privacy Policy</h2>
              <p>
                We may update this privacy policy from time to time. We will notify you of significant changes by 
                posting the new policy on this page and updating the "Last Updated" date. We encourage you to review 
                this policy periodically.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Contact Us</h2>
              <p className="mb-4">
                If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, 
                please contact us:
              </p>
              <div className="bg-emerald-50 p-6 rounded-lg">
                <p className="mb-2"><strong>Email:</strong> trainer@yogafit.com</p>
                <p className="mb-2"><strong>Phone:</strong> +1-823-992-0223</p>
                <p><strong>Address:</strong> 123 Wellness Avenue, Los Angeles, CA 90001, United States</p>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                By using YogaFit's services, you acknowledge that you have read and understood this Privacy Policy and 
                agree to the collection, use, and disclosure of your information as described herein.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
