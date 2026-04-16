import LegalLayout from "@/components/LegalLayout";

export default function DataPrivacyPage() {
  return (
    <LegalLayout title="Data Privacy FAQ" lastUpdated="October 18, 2023">
      <p>At Savazar, customer trust is our top priority. These FAQs detail our commitment to protecting your data, especially within the context of Sovereign AI and the GVSS Summit.</p>

      <h2>What is Savazar's approach to Data Privacy?</h2>
      <p>Savazar continually monitors the evolving privacy regulatory and legislative landscape to identify changes and determine what tools our customers might need to meet their compliance needs. For the GVSS Summit, we strictly adhere to the principle of <strong>Data Sovereignty</strong> — ensuring that business data remains under the control of the business owner, not third-party SaaS vendors.</p>

      <h2>How do you protect my registration data?</h2>
      <p>We collect minimal data necessary for summit operations (Name, WhatsApp, Role). This data is stored in our private databases and is never shared with third-party advertising networks. We use industry-standard encryption and security hardening on our servers to prevent unauthorized access.</p>

      <h2>What does "Sovereign AI" mean for my privacy?</h2>
      <p>In our workshops, we teach you how to host AI agents on your <strong>own private VPS</strong>. This means:</p>
      <ul>
        <li>Your customer data stays on your server.</li>
        <li>Your AI models run locally or via private APIs.</li>
        <li>You are the sole owner of the logs and results.</li>
      </ul>

      <h2>Does Savazar comply with GDPR or DPDP?</h2>
      <p>Yes. Savazar India Pvt Ltd is committed to compliance with applicable data protection laws, including the European General Data Protection Regulation (GDPR) and India's Digital Personal Data Protection Act (DPDP). We provide the necessary tools and architectural patterns to help our customers meet their own compliance requirements.</p>

      <h2>Who owns the content I create during the Summit?</h2>
      <p>You do. Any workflows, agent architectures, or content generated during the Savazar GVSS Summit workshops remain the exclusive intellectual property of the participant. Savazar claims no ownership over your private configurations.</p>

      <h2>How can I request my data be deleted?</h2>
      <p>You have the right to access, correct, or delete your personal information. Please send a data request to <a href="mailto:summit@savazar.com" className="text-purple-light hover:underline">summit@savazar.com</a> with the subject line "Data Privacy Request". We will process your request within 30 days.</p>

      <h2>Contact Information</h2>
      <p>For more detailed privacy inquiries, please contact our Data Protection Officer:</p>
      <ul>
        <li>Email: summit@savazar.com</li>
        <li>Office (India): Savazar India Pvt Ltd, Hyderabad, Telangana, India</li>
        <li>Office (US): Savazar LLC, Leesburg, VA, USA</li>
      </ul>
    </LegalLayout>
  );
}
