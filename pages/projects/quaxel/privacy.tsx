import QuaxelPolicyLayout from "../../../components/quaxel-policy-layout";

export default function Privacy() {
  return <QuaxelPolicyLayout title="Privacy policy" description="How Quaxel handles your projects, App Store purchases, and support messages." path="/projects/quaxel/privacy">
    <p className="lead">Quaxel is a pixel, sound, and scene editor by Oliver Le. The app works without collecting your personal data.</p>
    <h2>Data collection in the app</h2>
    <p>Quaxel has no accounts, analytics, advertising, or tracking. We do not operate servers that receive your projects or app activity.</p>
    <h2>Your projects and exports</h2>
    <p>Your sprites, songs, and scenes are saved as .quaxel files on your device, or in iCloud Drive if you choose to store them there. We cannot access them. Videos you export are saved or shared only where you choose through the system sharing options.</p>
    <p>You can manage and delete project files in the Files app. iCloud storage and device backups follow your Apple account settings.</p>
    <h2>App Store purchases</h2>
    <p>Apple processes payments for Quaxel Pro. Quaxel uses verified StoreKit product and transaction information on your device to check active subscriptions, lifetime ownership, refunds, and Family Sharing. We do not receive your payment details, name, or email address from Apple, and this purchase information is not sent to our servers.</p>
    <p>Manage subscriptions in Settings → Apple Account → Subscriptions. Apple handles its own data under <a href="https://www.apple.com/legal/privacy/data/en/app-store/">App Store &amp; Privacy</a>.</p>
    <h2>Children</h2>
    <p>Quaxel does not collect personal information from anyone, including children.</p>
    <h2>Contacting support</h2>
    <p>If you email <a href="mailto:phucledien@gmail.com?subject=Quaxel%20privacy">phucledien@gmail.com</a>, we receive the email address, message, and attachments you choose to send. We use them to respond and investigate your request. Please send only information needed for support. You can contact the same address to request deletion of information you sent us.</p>
    <h2>This website</h2>
    <p>These pages are hosted by Vercel, which processes technical request information to operate the website under <a href="https://vercel.com/legal/privacy-notice">Vercel’s Privacy Notice</a>. Your Quaxel projects and app activity are not uploaded to this website.</p>
    <h2>Changes to this policy</h2>
    <p>We will update this page if Quaxel’s data practices change. The date above identifies the latest update.</p>
  </QuaxelPolicyLayout>;
}
