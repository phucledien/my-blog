import StackbackPolicyLayout from "../../../components/stackback-policy-layout";

export default function Terms() {
  return <StackbackPolicyLayout title="Terms" description="Stackback app use, local records, TestFlight sandbox purchases and optional rewards." path="/projects/stackback/terms">
    <p className="lead">These terms explain Stackback’s current game features and local records. Availability depends on the app version and your App Store region.</p>
    <p>Developer: Phuc Le. Contact <a href="mailto:phucledien@gmail.com">phucledien@gmail.com</a> for help.</p>
    <h2>App license</h2>
    <p>An App Store download is governed by the license agreement provided with that download. <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">Apple’s standard app license agreement</a> is available here. These notes explain Stackback’s game behavior.</p>
    <h2>Local play and records</h2>
    <p>Core arithmetic and N-back play work offline. Practice progress, currencies, game inventory, upgrades and settings are local to the installation. Stackback does not provide cash redemption, player-to-player currency transfers or its own cloud wallet synchronization.</p>
    <p>Reset training preserves the wallet, items, upgrades, loadout and settings while clearing practice and training records. Removing the app can remove local data. Stackback does not provide a server-side recovery service for a lost wallet.</p>
    <h2>Game Center</h2>
    <p>Game Center is optional and managed through Apple. Eligible Climb scores, player nicknames and pictures may appear on leaderboards. Resetting local training does not erase scores held by Apple. You can manage sharing through Game Center settings.</p>
    <h2>TestFlight sandbox purchases and Plus</h2>
    <p className="notice">TestFlight beta 0.5.0 (202610041156) includes Apple sandbox purchases and optional adult-only Google sample rewarded ads. Sandbox purchases do not incur real billing. Production billing and advertising remain disabled in this beta.</p>
    <p>Sandbox purchase options include gem packs, a Starter Pack and Plus subscriptions. Apple’s purchase sheet shows the available product, localized price, subscription duration and any eligible introductory offer before confirmation. Core Daily Training remains free.</p>
    <p>Purchased currency is held locally. Restore Purchases restores verified Starter and active Plus entitlements, without repeating gem-pack grants or the Starter Pack’s one-time currency and Heart bonus. It does not reconstruct a lost local wallet.</p>
    <p>Plus provides cosmetics, additional local progress information and optional game benefits shown in the app. Apple’s purchase sheet shows the subscription period and any trial before confirmation. Apple-billed subscriptions can be managed or cancelled through your Apple Account settings.</p>
    <h2>Optional sample rewards</h2>
    <p>Optional rewards include an Open Climb sample-ad revive and a one-time double-chalk reward for a completed run. Spare Heart items are a separate path under the game’s item rules. Fair Climb never allows a revive; double chalk does not change its score or leaderboard eligibility. Plus offers the reward placements without watching ads.</p>
    <p>Sample ads require an 18-or-older age choice, Optional ads on and permission to request ads from Google’s privacy tool. Under-18 and unknown brackets receive no ads or advertising-consent requests. Turn Optional ads off to stop further ad and consent requests; declining consent in Google’s form alone does not necessarily stop requests under disclosed legitimate-interest settings. See the <a href="/projects/stackback/privacy">Privacy Policy</a> for the available controls.</p>
    <h2>Billing and support</h2>
    <p>For any future Apple-billed purchase, Apple handles billing and refund requests through <a href="https://reportaproblem.apple.com/">Report a Problem</a>. Contact Stackback support for delivery or restoration issues. <a href="https://support.apple.com/en-us/118428">Apple’s subscription instructions</a> explain how to cancel a subscription.</p>
    <p>These terms describe this TestFlight beta. Any production paid release will have updated information about its availability, delivery, restoration and refund-related behavior.</p>
    <h2>Privacy and contact</h2>
    <p>Read the <a href="/projects/stackback/privacy">Privacy Policy</a> for local records and optional services. For help, email <a href="mailto:phucledien@gmail.com">phucledien@gmail.com</a>.</p>
  </StackbackPolicyLayout>;
}
