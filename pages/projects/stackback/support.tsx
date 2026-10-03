import StackbackPolicyLayout from "../../../components/stackback-policy-layout";

export default function Support() {
  return <StackbackPolicyLayout title="Support" description="Help with Stackback gameplay, local progress and Game Center." path="/projects/stackback/support">
    <p className="lead">Need help with Stackback? Email <a href="mailto:phucledien@gmail.com?subject=Stackback%20support">phucledien@gmail.com</a>.</p>
    <h2>Report a problem</h2>
    <p>Include your iPhone model, iOS version, Stackback version and build number, the steps that caused the issue, and a screenshot if it helps. A parent or guardian can contact support for a younger player. Please omit a child’s name, birth date or other personal details that are not needed to explain the issue.</p>
    <h2>Play and answer entry</h2>
    <p>Solve each arithmetic card, remember its answer, then answer the card from N turns ago. Daily Training offers 2- and 5-minute sessions; Climb continues through increasingly demanding floors.</p>
    <p>Write answers with your finger or use the keypad. Handwriting recognition and core play work on your device, including offline.</p>
    <h2>Game Center</h2>
    <p>Game Center is optional. Sign in through your iPhone settings to use eligible Climb leaderboards. Player nicknames, pictures and scores can appear on the leaderboard.</p>
    <p>Reset training does not delete scores already stored by Apple. See <a href="https://www.apple.com/legal/privacy/data/en/game-center/">Apple’s Game Center privacy information</a> for its sharing controls.</p>
    <h2>Reset training and local data</h2>
    <p>Reset training clears practice progress, sessions, Climb records, training streak records and tutorial progress. It preserves your wallet, game items, upgrades, loadout and settings.</p>
    <p>Progress and inventory are local to the installation. Stackback does not provide its own cloud wallet synchronization or a server-side recovery service. Removing the app can remove local records; device backups follow Apple’s settings.</p>
    <h2>Planned purchases, Plus and rewarded ads</h2>
    <p className="notice">The current TestFlight release has no active in-app purchases or rewarded advertising. The information below describes planned features for a future release.</p>
    <p>Planned purchases include optional gem packs, a Starter Pack and Plus. Core Daily Training remains free. Apple will show available products, localized prices and any subscription or trial terms before a purchase is confirmed.</p>
    <p>Planned Restore Purchases support covers verified active Plus and the Starter Pack’s Mint Chalk entitlement. It does not repeat gem-pack grants or the Starter Pack’s one-time currency and Heart bonus, and it does not rebuild a lost local wallet.</p>
    <p>Planned rewards include an optional Open Climb revive and a one-time double-chalk reward for a completed run. Fair Climb does not allow a revive; double chalk does not change its score. Plus is planned to offer these rewards without watching ads.</p>
    <p>Apple manages App Store billing. For a future Apple-billed purchase, use <a href="https://reportaproblem.apple.com/">Report a Problem</a> for billing or refund requests and <a href="https://support.apple.com/en-us/118428">Apple’s subscription guide</a> to manage or cancel a subscription.</p>
  </StackbackPolicyLayout>;
}
