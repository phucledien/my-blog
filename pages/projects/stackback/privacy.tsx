import StackbackPolicyLayout from "../../../components/stackback-policy-layout";

export default function Privacy() {
  return <StackbackPolicyLayout title="Privacy policy" description="How Stackback handles local records, Game Center, beta purchases, optional ads and support messages." path="/projects/stackback/privacy">
    <p className="lead">Stackback keeps practice records and handwriting recognition on your device. Optional Game Center features use Apple’s services.</p>
    <p>Stackback is developed by Phuc Le. For privacy questions, contact <a href="mailto:phucledien@gmail.com?subject=Stackback%20privacy">phucledien@gmail.com</a>.</p>
    <h2>Data on your device</h2>
    <p>Stackback stores practice levels, session dates and results, response statistics, streak records, local currencies, owned and equipped items, upgrades and settings. These records support gameplay and your local progress.</p>
    <p>Handwriting recognition runs on your device. Stackback does not upload your handwritten strokes or retain raw strokes in its progress save. The app does not provide an app account or its own cloud synchronization of progress or wallets.</p>
    <h2>Apple Game Center</h2>
    <p>If you use Game Center, Stackback exchanges eligible scores and Game Center identifiers with Apple. The app caches your own player identifier, nickname and scores awaiting submission, and displays leaderboard entries and player pictures.</p>
    <p>Your Game Center nickname, picture and leaderboard scores may be visible to other players. Apple manages Game Center account information and sharing settings. See <a href="https://www.apple.com/legal/privacy/data/en/game-center/">Game Center &amp; Privacy</a>.</p>
    <p>Game Center can connect automatically when permitted by Apple and Settings → Online. An explicit Off choice is preserved. Changing your age bracket does not turn Game Center on, and signing in to Game Center does not select an age bracket or opt you into ads.</p>
    <h2>Support messages</h2>
    <p>If you email support, the recipient receives your email address, message and any attachments. This information is used to answer your request and investigate the reported issue. Please send only details needed for support, and omit a child’s name, birth date or other unnecessary personal information.</p>
    <p>You can contact the address above with questions or a request to delete information you sent directly to support.</p>
    <h2>Your controls and retention</h2>
    <p>Local records remain in the installation until changed or removed. Reset training clears practice and training records while preserving the wallet, inventory, settings and reward-claim accounting. It does not erase Apple Game Center scores.</p>
    <p>Removing the app can remove local data. Stackback has no server-side wallet recovery service. Apple-managed services and device backups follow Apple’s settings and policies. You can manage Game Center sharing through your device settings.</p>
    <h2>TestFlight sandbox purchases</h2>
    <p className="notice">TestFlight beta 0.5.0 (202610041156) includes Apple sandbox purchases and optional adult-only Google sample rewarded ads. Sandbox purchases do not incur real billing. Production billing and advertising remain disabled in this beta.</p>
    <p>Apple handles test transactions and purchase-account information. Stackback uses verified purchase records, product identifiers and subscription status to deliver items, recognize entitlements and avoid duplicate delivery. Purchase and entitlement records are kept locally. Stackback does not receive your payment-card details. See <a href="https://www.apple.com/legal/privacy/data/en/app-store/">App Store &amp; Privacy</a>.</p>
    <h2>Optional sample ads and age choices</h2>
    <p>Stackback’s primary intended audience is ages 13 and older; younger players may also play. In this beta, sample ads are available only to players who select 18 or older and turn Optional ads on, when Google’s privacy tool permits ad requests. Players under 18 and those whose age bracket is unknown receive no ads or advertising-consent requests.</p>
    <p>The age choice is a neutral bracket stored on your device, not a date of birth or identity check. The age bracket starts as unknown and Optional ads is off by default. This beta uses only Google’s official sample ad units. The app configures non-personalized requests, a general-audience G content-rating cap and no Apple App Tracking Transparency permission request. Sample and non-personalized ads can still involve data processing.</p>
    <p>Google’s advertising and consent services may process IP addresses and approximate location, device identifiers, ad and app interactions, performance information, crash diagnostics and privacy choices for advertising, measurement and service operation. The privacy forms disclose participating partners, purposes and applicable legitimate-interest choices. See <a href="https://policies.google.com/privacy">Google’s Privacy Policy</a> and <a href="https://developers.google.com/admob/ios/privacy/data-disclosure">Google’s mobile ads data disclosures</a>.</p>
    <p>Settings → Age &amp; ads lets you turn Optional ads off or change your age bracket. Turning ads off stops further Google advertising and consent requests. Changing brackets starts with ads off and cancels pending ads. If you turn ads back on after switching them off, restart the app before requesting a sample ad.</p>
    <p>Where Google’s privacy tool requires it, Privacy choices reopens the form so eligible adults can change or withdraw consent and manage applicable Do Not Sell or Share choices. Declining or withdrawing consent does not necessarily stop ad requests: Google may still permit requests under the disclosed legitimate-interest settings. To stop further advertising and consent requests in Stackback, turn Optional ads off.</p>
    <p>Changing a local age bracket or turning ads off does not delete information already held by Google or its partners. Use the available privacy choices and the providers’ privacy controls for those requests.</p>
    <h2>This website</h2>
    <p>These pages are hosted by Vercel, which processes technical website-traffic information such as IP addresses and request or device information to provide its services. See <a href="https://vercel.com/legal/privacy-notice">Vercel’s Privacy Notice</a>. Stackback’s local practice progress and wallet are not uploaded to this website.</p>
    <h2>Changes</h2>
    <p>This policy will be updated when Stackback’s data practices change. The date at the top identifies the latest update.</p>
  </StackbackPolicyLayout>;
}
