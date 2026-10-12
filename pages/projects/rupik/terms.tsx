import Link from "next/link";
import RupikPolicyLayout from "../../../components/rupik-policy-layout";

export default function Terms() {
  return <RupikPolicyLayout title="Terms of use" description="Rupik is licensed under Apple’s standard EULA. Pro subscriptions, purchases and fair use." path="/projects/rupik/terms">
    <p className="lead">Rupik is licensed to you under Apple’s standard <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">Licensed Application End User License Agreement</a>, which applies in full. In addition:</p>
    <h2>Rupik Pro and purchases</h2>
    <ul>
      <li>Rupik Pro is available as a monthly or yearly auto-renewing subscription, or as a one-time lifetime purchase. 4×4, 5×5 and the Pyraminx can also be bought individually.</li>
      <li>The yearly plan may include a 7-day free trial for new subscribers. Payment is charged to your Apple ID at confirmation of purchase (or when the trial ends).</li>
      <li>Subscriptions renew automatically unless cancelled at least 24 hours before the end of the current period. Manage or cancel in Settings → Apple ID → Subscriptions. Unused trial time is forfeited when you purchase a subscription.</li>
      <li>Purchases can be restored from the Shop. Refunds are handled by Apple.</li>
    </ul>
    <h2>Fair use</h2>
    <p>Do not tamper with the app, its leaderboards or its purchases. Scores that are clearly manipulated may be removed.</p>
    <h2>No warranty</h2>
    <p>Rupik is provided “as is”. We are not liable for lost progress; keep iCloud enabled to keep a backup of your save.</p>
    <h2>Contact</h2>
    <p>See the <Link href="/projects/rupik/support">support page</Link> or email <a href="mailto:phucledien@gmail.com">phucledien@gmail.com</a>.</p>
  </RupikPolicyLayout>;
}
