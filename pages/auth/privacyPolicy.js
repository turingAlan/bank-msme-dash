import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-6 text-3xl font-bold text-gray-800">
          Privacy Policy
        </h1>

        <div className="mb-6 rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 text-xl font-semibold text-gray-700">
            1. Information We Collect
          </h2>
          <p className="mb-4 text-gray-600">
            We collect information you provide directly to us, such as when you
            create an account, subscribe to our newsletter, or contact us for
            support. This may include your name, email address, and any other
            information you choose to provide.
          </p>
        </div>

        <div className="mb-6 rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 text-xl font-semibold text-gray-700">
            2. How We Use Your Information
          </h2>
          <p className="mb-4 text-gray-600">
            We use the information we collect to:
          </p>
          <ul className="mb-4 list-inside list-disc text-gray-600">
            <li>Provide, maintain, and improve our services</li>
            <li>Send you technical notices, updates, and support messages</li>
            <li>Respond to your comments, questions, and requests</li>
            <li>Communicate with you about products, services, and events</li>
          </ul>
        </div>

        <div className="mb-6 rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 text-xl font-semibold text-gray-700">
            3. Sharing of Information
          </h2>
          <p className="mb-4 text-gray-600">
            We do not share your personal information with third parties except
            as described in this privacy policy. We may share your information
            with:
          </p>
          <ul className="mb-4 list-inside list-disc text-gray-600">
            <li>Service providers who perform services on our behalf</li>
            <li>
              Law enforcement or other government agencies, as required by law
            </li>
          </ul>
        </div>

        <div className="mb-6 rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 text-xl font-semibold text-gray-700">
            4. Security
          </h2>
          <p className="mb-4 text-gray-600">
            We take reasonable measures to help protect your personal
            information from loss, theft, misuse, unauthorized access,
            disclosure, alteration, and destruction.
          </p>
        </div>

        <div className="mb-6 rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 text-xl font-semibold text-gray-700">
            5. Changes to This Policy
          </h2>
          <p className="mb-4 text-gray-600">
            We may update this privacy policy from time to time. We will notify
            you of any changes by posting the new privacy policy on this page.
          </p>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 text-xl font-semibold text-gray-700">
            6. Contact Us
          </h2>
          <p className="mb-4 text-gray-600">
            If you have any questions about this privacy policy, please contact
            us at:
          </p>
          <p className="text-gray-600">
            Email: privacy@example.com
            <br />
            Address: 123 Privacy Street, Securetown, ST 12345
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
