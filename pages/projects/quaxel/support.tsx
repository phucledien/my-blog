import Link from "next/link";
import QuaxelPolicyLayout from "../../../components/quaxel-policy-layout";

export default function Support() {
  return <QuaxelPolicyLayout title="Support" description="Get help with Quaxel projects, video export, subscriptions, and restoring purchases." path="/projects/quaxel/support">
    <p className="lead">Need help with Quaxel? Email <a href="mailto:phucledien@gmail.com?subject=Quaxel%20support">phucledien@gmail.com</a>.</p>
    <h2>Report a problem</h2>
    <p>Include your device model, iOS or iPadOS version, Quaxel version, and the steps that led to the issue. A screenshot can help. Please leave out passwords, payment details, and any private project files you do not want to share.</p>
    <h2>Start a project</h2>
    <p>Tap New Project, then Start from Duck Tide for a sample scene or Blank canvas to start fresh. Use PIXEL to draw and animate, SOUND to write the soundtrack, SCENE to arrange your world, and RENDER to play it full screen.</p>
    <h2>Find and back up your work</h2>
    <p>Quaxel projects are .quaxel documents in the Files app. Save them on your device or in iCloud Drive. Keep a copy before removing the app or deleting files; we do not hold server copies of your projects.</p>
    <h2>Quaxel Pro and video export</h2>
    <p>Pro unlocks video export with audio, all scene recipes, unlimited sprites, and alternate app icons. Tap the PRO chip or a locked feature to see available plans and your local price. Apple shows the final price and any eligible trial before you confirm a purchase.</p>
    <h2>Restore purchases</h2>
    <p>Use Restore purchases on the paywall or in the ••• menu while signed in to the Apple account used for the purchase. Active subscriptions and the lifetime unlock can be restored. Eligible family members can share the lifetime purchase through Apple Family Sharing.</p>
    <h2>Manage a subscription or billing issue</h2>
    <p>Subscriptions renew automatically until cancelled. Manage or cancel them in Settings → Apple Account → Subscriptions. Removing Quaxel does not cancel a subscription. For charges or refund requests, visit <a href="https://reportaproblem.apple.com/">Apple’s Report a Problem</a>.</p>
    <h2>Privacy</h2>
    <p>No app account is required, and Quaxel has no analytics, ads, or tracking. Read the <Link href="/projects/quaxel/privacy">privacy policy</Link> for details about local files, Apple purchases, and support messages.</p>
  </QuaxelPolicyLayout>;
}
