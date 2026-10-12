import LaneThiefPolicyLayout from "../../../components/lane-thief-policy-layout";

export default function Privacy() {
  return <LaneThiefPolicyLayout title="Privacy policy" description="How Lane Thief handles saved progress, Game Center, purchases, advertising, and support messages." path="/projects/lane-thief/privacy">
    <p className="lead">Lane Thief is a timing game by Oliver Le. This page explains how the game and its optional services handle information.</p>
    <h2>Intended audience</h2>
    <p>Lane Thief is intended for players aged 13 and older, including teenagers. It is not intended for children under 13. This intended audience does not mean that every player is old enough to consent to advertising-related data use where they live.</p>
    <h2>Saved progress</h2>
    <p>Your progress, gold, gems, inventory, equipment, settings, run history, and cached purchase entitlements are saved on your device. No separate Lane Thief account is required. We do not operate a game server that receives your save file.</p>
    <p>Settings → Reset Save resets local progress. Removing the app also removes its local app data; device backups follow your Apple settings. Resetting progress does not cancel an Apple subscription or delete information held by Apple or Google.</p>
    <h2>Game Center</h2>
    <p>If you use Game Center, the game submits scores and game context, including the wave reached and selected outfit, to Apple’s leaderboards. It retrieves leaderboard scores and player display names for the Ranks screen. Apple manages your Game Center identity and privacy settings under <a href="https://www.apple.com/legal/privacy/data/en/game-center/">Game Center &amp; Privacy</a>.</p>
    <h2>Purchases and subscriptions</h2>
    <p>Apple processes in-app purchases and subscriptions. The game uses StoreKit to verify transactions and check your entitlements on your device. We do not receive your payment-card details. Apple handles purchase information under <a href="https://www.apple.com/legal/privacy/data/en/app-store/">App Store &amp; Privacy</a>.</p>
    <h2>Advertising</h2>
    <p>Versions with advertising use Google AdMob for optional rewarded ads and occasional ads between runs. The game requests non-personalized ads and does not request App Tracking Transparency permission to access your advertising identifier. Non-personalized ads can still involve data collection.</p>
    <p>Google’s advertising SDK may process IP addresses (including an estimate of general location), device or app identifiers, ad impressions and interactions, crash information, and performance data for advertising, measurement, and service operation. Read <a href="https://policies.google.com/technologies/ads">Google’s advertising information</a> and <a href="https://policies.google.com/privacy">Google’s Privacy Policy</a>.</p>
    <p>In versions with advertising, Google’s User Messaging Platform checks whether a consent message is required and whether ads may be requested. Your consent choices affect ad availability. For questions about advertising data or your privacy choices, contact us at the address below.</p>
    <h2>Game analytics</h2>
    <p>The game’s own event log is kept in memory for diagnostics and is not sent to a separate analytics service. Development builds can also print these events to device or editor logs. This does not cover information processed by Google’s advertising SDK or Apple’s services as described above.</p>
    <h2>Support and privacy requests</h2>
    <p>If you email <a href="mailto:phucledien@gmail.com?subject=Lane%20Thief%20privacy">phucledien@gmail.com</a>, we receive your email address, message, and any attachments you choose to send. We use this information to respond and investigate the request. Please send only information needed for support. You can contact the same address with privacy questions or a request to delete information you sent directly to support.</p>
    <h2>This website</h2>
    <p>These pages are hosted by Vercel, which processes technical request information to operate the website under <a href="https://vercel.com/legal/privacy-notice">Vercel’s Privacy Notice</a>. Your game save is not uploaded to this website.</p>
    <h2>Changes</h2>
    <p>We will update this page when the game’s data practices change. The date above identifies the latest update.</p>
  </LaneThiefPolicyLayout>;
}
