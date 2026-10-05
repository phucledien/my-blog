import TiltClubPolicyLayout from "../../../components/tilt-club-policy-layout";

export default function Terms() {
  return <TiltClubPolicyLayout title="Terms" description="Tilt Club simulated poker, chips and Club Tickets, sandbox purchases, restoration and optional rewarded rebuys." path="/projects/tilt-club/terms">
    <p className="lead">These terms explain Tilt Club’s simulated game economy and the purchase and rewarded-ad features in its native TestFlight beta.</p>
    <p>Developer: Phuc Le. Contact <a href="mailto:phucledien@gmail.com?subject=Tilt%20Club%20support">phucledien@gmail.com</a> for help.</p>
    <h2>License and audience</h2>
    <p>An App Store download is governed by the license agreement provided with it. <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">Apple’s standard app license agreement</a> is available here.</p>
    <p>Tilt Club is adult-oriented simulated poker. The purchase and ad features require an explicit 18-or-older answer. An unknown or under-18 answer blocks new purchase initiation and rewarded ads. App availability and age ratings depend on the App Store region and platform.</p>
    <h2>Simulated play and separate currencies</h2>
    <p>Play is against computer-controlled club characters. There is no real-money wagering, cash-out, cash conversion or player-to-player currency transfer.</p>
    <p>Every night starts with 1,500 free game chips. Chips are used within that night’s simulated poker game and are not sold as in-app purchase packs. Club Tickets are separate from game chips: they are earned through play and daily rewards and are available in Ticket packs. Tickets cannot be converted into chips.</p>
    <p>Tickets buy card faces and item copies. Grey and Cheat items can affect hands, so Ticket purchases can provide gameplay benefits as well as cosmetic choices. The currencies and items have no cash redemption.</p>
    <h2>TestFlight sandbox purchases</h2>
    <p className="notice">Tilt Club TestFlight beta 1.0 (4) uses Apple sandbox purchases and optional non-personalized Google sample ads. Sandbox purchases do not incur real billing. Production advertising is not enabled.</p>
    <p>The base app is free. Available products and the localized price are shown by Apple before purchase confirmation. The verified US catalog price for Full Club is $3.99 as a one-time, non-consumable unlock; actual availability and localized prices depend on the storefront and build.</p>
    <ul>
      <li><strong>Full Club</strong> unlocks all poker games and rooms, Full Club progression, the eligible once-per-night rebuy without an ad, and GUS/Pocket Club app icon choices.</li>
      <li><strong>Midnight Pack</strong> supplies midnight-blue felt and a neon card back, both cosmetic.</li>
      <li><strong>Lounge Soundtrack</strong> supplies five club tracks and Dot humming in the Music Room.</li>
      <li><strong>Tip the Band</strong> is a consumable thank-you and jukebox animation. It supplies no Tickets, chips, unlocks or gameplay benefits.</li>
      <li><strong>Pocketful, Stack and Strongbox</strong> are consumable packs of 100, 550 and 1,200 Club Tickets respectively.</li>
    </ul>
    <h2>Delivery and restoration</h2>
    <p>The app delivers purchases only from verified Apple transaction records and records delivery locally to prevent duplicate grants. Pending, cancelled, failed or unverified purchases do not establish ownership. An app-icon change is complete only when iOS reports success.</p>
    <p>Restore Purchases can restore verified Full Club, Midnight Pack and Lounge Soundtrack ownership through the Apple Account used for purchase. Ticket packs are consumable and are not restored. Tip acknowledgements are not repeated by restoration. Restoration does not reconstruct a lost local Ticket wallet, item inventory or game progress.</p>
    <h2>Optional rewarded rebuy</h2>
    <p>The sample-ad rebuy grants a fresh 1,500-chip stack after busting, at most once per night and before level 5. Full Club owners receive this eligible rebuy without watching an ad. Neither a Ticket pack nor Full Club removes the night’s rebuy limit.</p>
    <p>An ad rebuy is optional. You can walk away and start another night. A cancelled, unfinished or failed ad does not grant the reward; the app requires the earned reward and completion of the ad flow.</p>
    <h2>Local records and controls</h2>
    <p>Progress, Tickets, item copies and settings are local to the device. There is no Tilt Club cloud-wallet synchronization or developer-operated recovery service. Removing the app can remove these records.</p>
    <p>RESET SAVE clears game progress, Tickets, item copies, unlocks, statistics, settings and the age answer. Purchase-delivery records and verified non-consumable ownership are preserved. Consumed Ticket purchases are not delivered again after a reset.</p>
    <p>Settings → Purchases &amp; ads lets you change or withdraw the age answer. Withdrawal stops new purchase initiation and ad eligibility. Google’s AD PRIVACY OPTIONS form, when required, manages separate privacy choices. Read the <a href="/projects/tilt-club/privacy">Privacy Policy</a> for these controls and third-party data practices.</p>
    <h2>Billing and support</h2>
    <p>For a future Apple-billed release, Apple handles billing and refund requests through <a href="https://reportaproblem.apple.com/">Report a Problem</a>. Contact <a href="/projects/tilt-club/support">Tilt Club support</a> for delivery and restoration issues. These pages will be synchronized with the beta actually made available and any later production purchase or ad release.</p>
  </TiltClubPolicyLayout>;
}
