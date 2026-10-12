import Link from "next/link";
import RupikPolicyLayout from "../../../components/rupik-policy-layout";

export default function Privacy() {
  return <RupikPolicyLayout title="Privacy policy" description="Rupik does not collect, store or share personal data. No accounts, analytics, advertising or third-party SDKs." path="/projects/rupik/privacy">
    <p className="notice"><strong>Short version:</strong> Rupik does not collect, store or share any personal data. There are no accounts, no analytics, no advertising and no third-party SDKs.</p>
    <h2>What stays on your device</h2>
    <p>Your solves, settings, lesson progress, streaks and purchases are stored on your device. If you are signed in to iCloud, Rupik can sync this save through your own iCloud account (iCloud Key-Value Storage). It is stored by Apple under your Apple ID, and the developer cannot read it.</p>
    <h2>Game Center</h2>
    <p>If you are signed in to Game Center, Rupik submits your daily-challenge result (moves and time) to Apple’s Game Center leaderboard, and shows the scores of other players. Game Center is operated by Apple under <a href="https://www.apple.com/legal/privacy/">Apple’s privacy policy</a>. Rupik never sees your Apple ID. If you are not signed in, nothing is submitted.</p>
    <h2>Purchases</h2>
    <p>In-app purchases and subscriptions are processed by Apple through StoreKit. Rupik only receives whether a purchase is active, never your payment details.</p>
    <h2>Notifications</h2>
    <p>If you allow notifications, daily reminders are scheduled locally on your device. No push server is involved.</p>
    <h2>Tracking and children</h2>
    <p>Rupik does not track you across apps or websites and contains no advertising. It is suitable for all ages and does not knowingly collect information from anyone, including children.</p>
    <h2>This website</h2>
    <p>These pages are hosted by Vercel, which processes technical request information to operate the website under <a href="https://vercel.com/legal/privacy-notice">Vercel’s Privacy Notice</a>. Nothing from the app is uploaded to this website.</p>
    <h2>Changes and contact</h2>
    <p>If this policy changes, the new version will be posted here with a new date. Questions? Email <a href="mailto:phucledien@gmail.com?subject=Rupik%20privacy">phucledien@gmail.com</a> or see the <Link href="/projects/rupik/support">support page</Link>.</p>
  </RupikPolicyLayout>;
}
