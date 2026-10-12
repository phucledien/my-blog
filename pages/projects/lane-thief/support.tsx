import Link from "next/link";
import LaneThiefPolicyLayout from "../../../components/lane-thief-policy-layout";

export default function Support() {
  return <LaneThiefPolicyLayout title="Support" description="Get help with Lane Thief saves, purchases, Game Center, and advertising." path="/projects/lane-thief/support">
    <p className="lead">Need help with Lane Thief? Email <a href="mailto:phucledien@gmail.com?subject=Lane%20Thief%20support">phucledien@gmail.com</a>.</p>
    <h2>Intended audience</h2>
    <p>Lane Thief is intended for players aged 13 and older, including teenagers. For questions about the game’s intended audience or privacy, contact the email address above.</p>
    <h2>Report a problem</h2>
    <p>Include your device model, iOS version, game version, and the steps that led to the issue. Mention whether you are using a TestFlight build. Screenshots can help; leave out passwords and payment details.</p>
    <h2>Saved progress</h2>
    <p>Progress is stored on your device. Reset Save in Settings resets it. Avoid resetting or deleting the app while troubleshooting a lost-progress issue, because we do not hold a server copy of your save.</p>
    <h2>Restore purchases</h2>
    <p>Use Restore Purchases in Settings or the Store while signed in to the Apple account used for the purchase. Non-consumable purchases and eligible active subscriptions can be restored. Consumable gems are not restored in the same way.</p>
    <h2>Subscriptions and billing</h2>
    <p>Manage or cancel a Thieves’ Guild subscription in Settings → Apple Account → Subscriptions. Deleting the game does not cancel a subscription. Apple displays the price and any eligible trial before purchase. For billing or refund requests, visit <a href="https://reportaproblem.apple.com/">Apple’s Report a Problem</a>.</p>
    <h2>Game Center and ranks</h2>
    <p>Leaderboard features use Apple Game Center. Check your Game Center sign-in and internet connection if ranks are unavailable. Your local run progress and Apple’s leaderboard records are separate.</p>
    <h2>Ads and rewards</h2>
    <p>In versions with ads, rewarded ads can offer a revive or double the gold from a run. Availability depends on the connection, consent, and ad supply. A reward is granted only when the ad reports that it was earned. No Forced Ads and an active Guild Pass remove between-run ads; optional rewarded ads remain available.</p>
    <p>If an ad does not load or a reward is missing, tell us which action you selected and approximately when it happened.</p>
    <h2>Privacy and terms</h2>
    <p>Read the <Link href="/projects/lane-thief/privacy">privacy policy</Link> for information about saves, Apple services, Google AdMob, and support messages. The app uses <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">Apple’s Standard End User License Agreement</a>.</p>
  </LaneThiefPolicyLayout>;
}
