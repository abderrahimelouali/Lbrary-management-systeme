

const TermsOfService = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-3xl font-bold text-purple-800 mb-4">
        Terms of Service
      </h1>

      <p className="text-gray-700 mb-4">
        Welcome to <strong>LibriTech</strong>, your trusted book loan platform.
        By using our services, you agree to the following terms and conditions.
      </p>

      {/* 📚 Book Loans & Returns */}
      <h2 className="text-xl font-semibold text-purple-700 mt-4 mb-2">
        1. Book Loans & Return Policy
      </h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>
          Users can borrow books for a maximum period of{" "}
          <strong>1 month (30 days)</strong>.
        </li>
        <li>
          After the due date, users have a <strong>7-day grace period</strong>{" "}
          to return the book without penalties.
        </li>
        <li>Books must be returned in their original condition and on time.</li>
        <li>
          Failure to return a book after the grace period will result in
          **penalties**, including fines or borrowing restrictions.
        </li>
      </ul>

      {/* 💵 Payment Terms */}
      <h2 className="text-xl font-semibold text-purple-700 mt-4 mb-2">
        2. Payment Terms
      </h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>
          All payments are made via <strong>Cash on Delivery (COD)</strong> upon
          receiving the book.
        </li>
        <li>
          Failure to pay may result in **account suspension** until all dues are
          cleared.
        </li>
      </ul>

      {/* ⚠️ Late Returns & Penalties */}
      <h2 className="text-xl font-semibold text-purple-700 mt-4 mb-2">
        3. Late Returns & Penalties
      </h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>
          If a book is not returned after the{" "}
          <strong>7-day grace period</strong>, a **late fee of $2 per day** will
          be applied.
        </li>
        <li>
          If a book is not returned within{" "}
          <strong>30 days after the due date</strong>, it will be considered
          **lost**, and the user must pay the book’s full price.
        </li>
        <li>
          Users with **unpaid fines** will be restricted from borrowing more
          books.
        </li>
      </ul>

      {/* 📖 Book Condition & Damages */}
      <h2 className="text-xl font-semibold text-purple-700 mt-4 mb-2">
        4. Book Condition & Damage Fees
      </h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Books must be returned in **good condition**.</li>
        <li>
          Minor damages (e.g., torn pages, marks) will result in a **repair
          fee**.
        </li>
        <li>
          Severe damage or loss of a book requires the **full book replacement
          cost**.
        </li>
      </ul>

      {/* 🚫 User Responsibilities & Account Bans */}
      <h2 className="text-xl font-semibold text-purple-700 mt-4 mb-2">
        5. User Responsibilities
      </h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Users must provide **accurate contact and address details**.</li>
        <li>
          Repeated late returns or unpaid penalties may result in a **temporary
          or permanent account ban**.
        </li>
        <li>
          Accounts found to be abusing the system (e.g., not returning books,
          creating fake accounts) will be **banned indefinitely**.
        </li>
      </ul>

      {/* 🔄 Platform Rights */}
      <h2 className="text-xl font-semibold text-purple-700 mt-4 mb-2">
        6. Service Limitations
      </h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>
          LibriTech reserves the right to **change loan durations, fees, or
          policies** at any time.
        </li>
        <li>
          Service availability depends on **book stock and delivery locations**.
        </li>
      </ul>

      <p className="text-gray-700 mt-4">
        By using <strong>LibriTech</strong>, you agree to these terms. Happy
        reading!
      </p>
    </div>
  );
};

export default TermsOfService;
