import StackbackPolicyLayout from "../../../components/stackback-policy-layout";

export default function Privacy() {
  return <StackbackPolicyLayout title="Privacy policy" description="How Stackback handles local records, Game Center and support messages." path="/projects/stackback/privacy">
    <p className="lead">Stackback keeps practice records and handwriting recognition on your device. Optional Game Center features use Apple’s services.</p>
    <p>Stackback is developed by Phuc Le. For privacy questions, contact <a href="mailto:phucledien@gmail.com?subject=Stackback%20privacy">phucledien@gmail.com</a>.</p>
    <h2>Data on your device</h2>
    <p>Stackback stores practice levels, session dates and results, response statistics, streak records, local currencies, owned and equipped items, upgrades and settings. These records support gameplay and your local progress.</p>
    <p>Handwriting recognition runs on your device. Stackback does not upload your handwritten strokes or retain raw strokes in its progress save. The app does not provide an app account or its own cloud synchronization of progress or wallets.</p>
    <h2>Apple Game Center</h2>
    <p>If you use Game Center, Stackback exchanges eligible scores and Game Center identifiers with Apple. The app caches your own player identifier, nickname and scores awaiting submission, and displays leaderboard entries and player pictures.</p>
    <p>Your Game Center nickname, picture and leaderboard scores may be visible to other players. Apple manages Game Center account information and sharing settings. See <a href="https://www.apple.com/legal/privacy/data/en/game-center/">Game Center &amp; Privacy</a>.</p>
    <h2>Support messages</h2>
    <p>If you email support, the recipient receives your email address, message and any attachments. This information is used to answer your request and investigate the reported issue. Please send only details needed for support, and omit a child’s name, birth date or other unnecessary personal information.</p>
    <p>You can contact the address above with questions or a request to delete information you sent directly to support.</p>
    <h2>Your controls and retention</h2>
    <p>Local records remain in the installation until changed or removed. Reset training clears practice and training records while preserving the wallet, inventory, settings and reward-claim accounting. It does not erase Apple Game Center scores.</p>
    <p>Removing the app can remove local data. Stackback has no server-side wallet recovery service. Apple-managed services and device backups follow Apple’s settings and policies. You can manage Game Center sharing through your device settings.</p>
    <h2>Planned paid features</h2>
    <p className="notice">In-app purchases and rewarded advertising are not active in the current TestFlight release. This section describes planned features, and this policy will be updated before those features are enabled.</p>
    <p>For planned Apple-billed purchases, Apple handles payment and purchase-account information. Stackback will use verified purchase records, product identifiers and subscription status to deliver items, recognize entitlements and avoid duplicate delivery. Stackback will not receive your payment-card details. See <a href="https://www.apple.com/legal/privacy/data/en/app-store/">App Store &amp; Privacy</a>.</p>
    <h2>Planned optional advertising and age choices</h2>
    <p>Production advertising remains disabled. The planned age controls use a neutral age bracket kept locally, without asking for a date of birth. The under-13 and unknown brackets are planned to receive no ads or advertising-consent requests. Advertising for other eligible players is planned to be optional, with the applicable consent and privacy choices available before requests.</p>
    <p>If a future version enables Google AdMob, Google’s services may process IP addresses and approximate location, device identifiers, ad and app interactions, performance information and crash diagnostics for advertising, measurement and service operation. See <a href="https://policies.google.com/privacy">Google’s Privacy Policy</a> and <a href="https://developers.google.com/admob/ios/privacy/data-disclosure">Google’s mobile ads data disclosures</a>.</p>
    <p>Planned local age or consent changes can stop advertising eligibility. A local reset of consent choices does not itself withdraw consent held by Google or delete Google-held records. The enabled release’s privacy information will explain the choices actually available.</p>
    <h2>This website</h2>
    <p>These pages are hosted by Vercel, which processes technical website-traffic information such as IP addresses and request or device information to provide its services. See <a href="https://vercel.com/legal/privacy-notice">Vercel’s Privacy Notice</a>. Stackback’s local practice progress and wallet are not uploaded to this website.</p>
    <h2>Changes</h2>
    <p>This policy will be updated when Stackback’s data practices change. The date at the top identifies the latest update.</p>
  </StackbackPolicyLayout>;
}
