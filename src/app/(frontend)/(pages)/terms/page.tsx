import React from 'react'

const TermsAndConditions = () => {
  return (
    // Container: Max width, responsive padding, white background, simple black shadow
    <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 bg-white  shadow-gray-900/10 rounded-lg my-10">
      {/* Header Section */}
      <header className="border-b-2 border-gray-900 pb-4 mb-6 text-center">
        <h1 className="text-4xl font-extrabold text-black mb-1">Terms & Conditions</h1>
        <p className="text-sm text-gray-700">
          <strong className="font-semibold">Last Updated:</strong> November 2025
        </p>
        <p className="text-sm text-gray-700">
          <strong className="font-semibold">Company:</strong> Urban Earth, Kathmandu, Nepal
        </p>
      </header>

      <p className="mb-4 text-gray-800">
        Welcome to Urban Earth. By accessing or using our website, you agree to the following Terms
        and Conditions. Please read them carefully.
      </p>

      {/* --- 1. Introduction --- */}
      <h2 className="text-2xl font-bold text-black mt-8 mb-3 border-b border-gray-300 pb-1">
        1. Introduction
      </h2>
      <p className="mb-4 text-gray-800">
        Urban Earth provides information and showcases flooring, tiles, carpets, and interior
        products.
      </p>

      {/* --- 2. Use of Website --- */}
      <h2 className="text-2xl font-bold text-black mt-8 mb-3 border-b border-gray-300 pb-1">
        2. Use of Website
      </h2>
      <p className="mb-3 text-gray-800">By using our website, you agree:</p>
      <ul className="list-disc list-inside ml-4 space-y-1 text-gray-700">
        <li>Not to misuse or attempt to disrupt website functionality</li>
        <li>Not to copy or reproduce our content without permission</li>
        <li>Not to engage in activities that may harm our business, servers, or users</li>
      </ul>
      <p className="mt-3 mb-4 text-gray-800 italic">
        You may browse and view product information for personal or business reference.
      </p>

      {/* --- 3. Product Information --- */}
      <h2 className="text-2xl font-bold text-black mt-8 mb-3 border-b border-gray-300 pb-1">
        3. Product Information
      </h2>
      <p className="mb-3 text-gray-800">
        Urban Earth aims to display accurate product details including photos, descriptions, colors,
        textures, and specifications.
      </p>
      <p className="mb-2 text-gray-800 font-semibold">However:</p>
      <ul className="list-disc list-inside ml-4 space-y-1 text-gray-700">
        <li>Actual colors may vary due to screen differences</li>
        <li>Product availability may change without notice</li>
        <li>Specifications may be updated based on stock or manufacturer details</li>
      </ul>
      <p className="mt-3 mb-4 text-gray-800">
        For accurate pricing or stock confirmation, please contact us directly.
      </p>

      {/* --- 4. No Online Sales --- */}
      <h2 className="text-2xl font-bold text-black mt-8 mb-3 border-b border-gray-300 pb-1">
        4. No Online Sales
      </h2>
      <p className="mb-4 text-gray-800">
        This website does not process online orders, payments, or deliveries. Any purchase
        discussions happen offline or through direct communication with our team.
      </p>

      {/* --- 5. Intellectual Property --- */}
      <h2 className="text-2xl font-bold text-black mt-8 mb-3 border-b border-gray-300 pb-1">
        5. Intellectual Property
      </h2>
      <p className="mb-3 text-gray-800">
        All content on this website—including text, images, logos, graphics, and product
        materials—is the property of Urban Earth (or suppliers) and is protected by copyright laws
        in Nepal.
      </p>
      <p className="mb-2 text-gray-800 font-semibold">You may not:</p>
      <ul className="list-disc list-inside ml-4 space-y-1 text-gray-700">
        <li>Copy, distribute, or modify website content</li>
        <li>Use product photos commercially without permission</li>
      </ul>

      {/* --- 6. Third-Party Links --- */}
      <h2 className="text-2xl font-bold text-black mt-8 mb-3 border-b border-gray-300 pb-1">
        6. Third-Party Links
      </h2>
      <p className="mb-3 text-gray-800">
        Our website may contain external links (e.g., social media, suppliers).
      </p>
      <p className="mb-2 text-gray-800 font-semibold">We are not responsible for:</p>
      <ul className="list-disc list-inside ml-4 space-y-1 text-gray-700">
        <li>The content of third-party sites</li>
        <li>Their security or privacy practices</li>
      </ul>
      <p className="mt-3 mb-4 text-gray-800">
        Users are encouraged to review third-party policies separately.
      </p>

      {/* --- 7. Limitation of Liability --- */}
      <h2 className="text-2xl font-bold text-black mt-8 mb-3 border-b border-gray-300 pb-1">
        7. Limitation of Liability
      </h2>
      <p className="mb-3 text-gray-800">Urban Earth is not liable for:</p>
      <ul className="list-disc list-inside ml-4 space-y-1 text-gray-700">
        <li>Errors or inaccuracies on the website</li>
        <li>Temporary downtime or technical issues</li>
        <li>Losses resulting from the use of website content</li>
      </ul>
      <p className="mt-3 mb-4 text-gray-800">
        Use of website information is at your own discretion.
      </p>

      {/* --- 8. Changes to the Terms --- */}
      <h2 className="text-2xl font-bold text-black mt-8 mb-3 border-b border-gray-300 pb-1">
        8. Changes to the Terms
      </h2>
      <p className="mb-4 text-gray-800">
        We may modify these Terms & Conditions at any time. Updates will be posted on this page with
        the latest revision date.
      </p>

      {/* --- 9. Contact Us --- */}
      <h2 className="text-2xl font-bold text-black mt-8 mb-3 border-b border-gray-300 pb-1">
        9. Contact Us
      </h2>
      <p className="mb-4 text-gray-800">If you have questions about these Terms, contact us at:</p>
      {/* Contact Info Box: Slightly different background for visual separation */}
      <div className="p-4 bg-gray-50 border border-gray-400 rounded-md text-gray-800">
        <p className="font-bold">Urban Earth</p>
        <p>Kathmandu, Nepal</p>
        <p>
          Email:{' '}
          <a
            href="mailto:info@urbanearth.com.np"
            className="text-black underline hover:text-gray-700"
          >
            info@urbanearth.com.np
          </a>
        </p>
        <p>Phone: +977-XXX-XXXXXX</p>
      </div>
    </div>
  )
}

export default TermsAndConditions
