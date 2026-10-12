import Link from "next/link";
import RupikPolicyLayout from "../../../components/rupik-policy-layout";

export default function Support() {
  return <RupikPolicyLayout title="Support" description="Get help with Rupik purchases, subscriptions, Game Center, iCloud sync and controls." path="/projects/rupik/support">
    <p className="lead">Questions, bugs or ideas? Email <a href="mailto:phucledien@gmail.com?subject=Rupik%20support">phucledien@gmail.com</a> and include your iOS version and device.</p>
    <h2>How do I restore my purchases?</h2>
    <p>Open Shop and tap “Restore purchases”. Make sure you are signed in to the Apple ID used for the purchase.</p>
    <h2>How do I cancel my subscription?</h2>
    <p>Settings → your name → Subscriptions → Rupik. You keep Pro until the end of the paid period. Deleting the app does not cancel a subscription. For billing or refunds, visit <a href="https://reportaproblem.apple.com/">Apple’s Report a Problem</a>.</p>
    <h2>The daily leaderboard is empty or asks me to sign in</h2>
    <p>Sign in to Game Center in Settings → Game Center, then reopen Daily. Scores appear after you finish today’s puzzle.</p>
    <h2>Does my progress sync between my iPhone and iPad?</h2>
    <p>Yes, through iCloud. Sign in with the same Apple ID and keep iCloud Drive enabled for Rupik.</p>
    <h2>How do I change the app icon?</h2>
    <p>Shop → Icons. The alternate icons are part of Rupik Pro.</p>
    <h2>How do I turn a layer?</h2>
    <p>Swipe a sticker in the direction you want that layer to move. Drag outside the cube to look around. You can also turn on the on-screen move pad in Settings.</p>
    <h2>Privacy and terms</h2>
    <p>Read the <Link href="/projects/rupik/privacy">privacy policy</Link> and the <Link href="/projects/rupik/terms">terms</Link>.</p>
  </RupikPolicyLayout>;
}
