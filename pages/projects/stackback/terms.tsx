import StackbackPolicyLayout from "../../../components/stackback-policy-layout";

export default function Terms() {
  return <StackbackPolicyLayout title="Terms" description="Stackback app use, local records and information about planned paid features." path="/projects/stackback/terms">
    <p className="lead">These terms explain Stackback’s current game features and local records. Availability depends on the app version and your App Store region.</p>
    <p>Developer: Phuc Le. Contact <a href="mailto:phucledien@gmail.com">phucledien@gmail.com</a> for help.</p>
    <h2>App license</h2>
    <p>An App Store download is governed by the license agreement provided with that download. <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">Apple’s standard app license agreement</a> is available here. These notes explain Stackback’s game behavior.</p>
    <h2>Local play and records</h2>
    <p>Core arithmetic and N-back play work offline. Practice progress, currencies, game inventory, upgrades and settings are local to the installation. Stackback does not provide cash redemption, player-to-player currency transfers or its own cloud wallet synchronization.</p>
    <p>Reset training preserves the wallet, items, upgrades, loadout and settings while clearing practice and training records. Removing the app can remove local data. Stackback does not provide a server-side recovery service for a lost wallet.</p>
    <h2>Game Center</h2>
    <p>Game Center is optional and managed through Apple. Eligible Climb scores, player nicknames and pictures may appear on leaderboards. Resetting local training does not erase scores held by Apple. You can manage sharing through Game Center settings.</p>
    <h2>Planned purchases and Plus</h2>
    <p className="notice">The current TestFlight release has no active in-app purchases or rewarded advertising. The following information describes planned features for a future release; it is not an offer to purchase them now.</p>
    <p>Optional gem packs, a Starter Pack and Plus subscriptions are planned. Apple’s purchase sheet will show the available product, localized price, subscription duration and any eligible introductory offer before confirmation. Core Daily Training remains free.</p>
    <p>Planned purchased currency is held locally. Restore Purchases is planned to restore verified Starter and active Plus entitlements, without repeating gem-pack grants or the Starter Pack’s one-time currency and Heart bonus. It will not reconstruct a lost local wallet.</p>
    <p>Plus is planned to provide cosmetics, additional local progress information and optional game benefits. The enabled release will describe its benefit periods, renewal terms and any trial before purchase. Apple-billed subscriptions can be managed or cancelled through your Apple Account settings.</p>
    <h2>Planned optional rewards</h2>
    <p>An optional Open Climb rewarded-ad revive and a one-time double-chalk reward for a completed run are planned. Spare Heart items are a separate path under the game’s item rules. Fair Climb never allows a revive; double chalk does not change its score or leaderboard eligibility. Plus is planned to offer the reward placements without watching ads.</p>
    <h2>Billing and support</h2>
    <p>For any future Apple-billed purchase, Apple handles billing and refund requests through <a href="https://reportaproblem.apple.com/">Report a Problem</a>. Contact Stackback support for delivery or restoration issues. <a href="https://support.apple.com/en-us/118428">Apple’s subscription instructions</a> explain how to cancel a subscription.</p>
    <p>The terms will be updated before paid features are enabled, including their delivery, restoration and refund-related behavior.</p>
    <h2>Privacy and contact</h2>
    <p>Read the <a href="/projects/stackback/privacy">Privacy Policy</a> for local records and optional services. For help, email <a href="mailto:phucledien@gmail.com">phucledien@gmail.com</a>.</p>
  </StackbackPolicyLayout>;
}
