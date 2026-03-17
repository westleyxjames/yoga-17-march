import { FileText } from "lucide-react";

export function Terms() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[300px] bg-gradient-to-r from-emerald-900 to-emerald-700 text-white">
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-4">
              <FileText size={48} />
              <h1 className="text-5xl font-bold">Terms & Conditions</h1>
            </div>
            <p className="text-xl text-emerald-100">
              Please read these terms and conditions carefully before using our services
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="mb-4">
                By accessing and using YogaFit's services, including our studio facilities, online platform, and classes, 
                you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to 
                these terms, please do not use our services.
              </p>
              <p>
                These Terms and Conditions constitute a legally binding agreement made between you and YogaFit 
                ("we," "us," or "our") concerning your access to and use of our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Membership and Registration</h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 Account Creation</h3>
              <p className="mb-4">
                To access certain services, you must register for an account. You agree to provide accurate, current, 
                and complete information during the registration process and to update such information to keep it accurate, 
                current, and complete.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2 Account Security</h3>
              <p className="mb-4">
                You are responsible for safeguarding your account credentials and for any activities or actions under 
                your account. You must notify us immediately of any unauthorized use of your account.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.3 Membership Types</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Monthly membership: Billed on a recurring monthly basis</li>
                <li>Annual membership: Billed annually with a discount compared to monthly</li>
                <li>Class packages: Pre-paid packages with specific validity periods</li>
                <li>Corporate memberships: Custom arrangements for businesses</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Payment Terms</h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1 Fees and Billing</h3>
              <p className="mb-4">
                All fees are stated in US Dollars and are subject to change with 30 days' notice. Membership fees are 
                non-refundable except as expressly stated in these terms or required by law.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">3.2 Recurring Payments</h3>
              <p className="mb-4">
                By purchasing a recurring membership, you authorize us to charge your payment method on a recurring basis 
                until you cancel your membership. You must cancel at least 24 hours before your next billing date to avoid 
                being charged for the next period.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">3.3 Failed Payments</h3>
              <p className="mb-4">
                If a payment fails, we will attempt to charge your payment method again. Your account may be suspended 
                until payment is received. We reserve the right to terminate memberships with repeated payment failures.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Class Bookings and Cancellations</h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">4.1 Booking Policy</h3>
              <p className="mb-4">
                Classes can be booked through our website, mobile app, or in person at the studio. Popular classes may 
                fill quickly, and we operate on a first-come, first-served basis.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">4.2 Cancellation Policy</h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Cancellations must be made at least 2 hours before class start time</li>
                <li>Late cancellations or no-shows will be deducted from your class package</li>
                <li>Repeated no-shows may result in booking restrictions</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">4.3 Studio Cancellations</h3>
              <p>
                We reserve the right to cancel classes due to low enrollment, instructor illness, or unforeseen 
                circumstances. You will be notified as soon as possible and can reschedule or receive a credit.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Health and Safety</h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">5.1 Medical Clearance</h3>
              <p className="mb-4">
                By participating in yoga classes, you confirm that you are in good health and have no medical conditions 
                that would prevent safe participation. You should consult with your physician before beginning any exercise 
                program.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">5.2 Assumption of Risk</h3>
              <p className="mb-4">
                You understand that yoga involves physical activity and carries inherent risks of injury. You voluntarily 
                assume all risks associated with participation in our classes and services.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">5.3 Liability Waiver</h3>
              <p>
                To the fullest extent permitted by law, YogaFit, its instructors, and employees shall not be liable for 
                any injuries, damages, or losses arising from your participation in our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Code of Conduct</h2>
              <p className="mb-4">All members and visitors must:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Treat instructors, staff, and fellow members with respect</li>
                <li>Arrive on time for classes (late arrivals may be denied entry)</li>
                <li>Turn off mobile devices during class</li>
                <li>Maintain appropriate hygiene and wear suitable attire</li>
                <li>Follow all studio rules and instructor guidance</li>
                <li>Refrain from disruptive behavior</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Intellectual Property</h2>
              <p className="mb-4">
                All content provided through our services, including but not limited to text, graphics, logos, videos, 
                and software, is the property of YogaFit or its content suppliers and is protected by intellectual 
                property laws.
              </p>
              <p>
                You may not reproduce, distribute, modify, or create derivative works from our content without express 
                written permission.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Termination</h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">8.1 By You</h3>
              <p className="mb-4">
                You may cancel your membership at any time through your account settings or by contacting us. Cancellation 
                takes effect at the end of your current billing period.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">8.2 By Us</h3>
              <p>
                We reserve the right to suspend or terminate your account for violations of these terms, inappropriate 
                behavior, or any reason deemed necessary to protect our business or community.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Modifications to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. We will notify you of significant changes via 
                email or through our platform. Your continued use of our services after such modifications constitutes 
                acceptance of the updated terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Governing Law</h2>
              <p>
                These Terms and Conditions shall be governed by and construed in accordance with the laws of the State 
                of California, United States, without regard to its conflict of law provisions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Dispute Resolution</h2>
              <p className="mb-4">
                Any disputes arising from these terms or your use of our services shall first be attempted to be resolved 
                through good faith negotiation. If negotiations fail, disputes shall be resolved through binding arbitration 
                in Los Angeles, California.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Information</h2>
              <p className="mb-4">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <div className="bg-emerald-50 p-6 rounded-lg">
                <p className="mb-2"><strong>Email:</strong> trainer@yogafit.com</p>
                <p className="mb-2"><strong>Phone:</strong> +1-823-992-0223</p>
                <p><strong>Address:</strong> 123 Wellness Avenue, Los Angeles, CA 90001, United States</p>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                By using YogaFit's services, you acknowledge that you have read, understood, and agree to be bound by 
                these Terms and Conditions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
