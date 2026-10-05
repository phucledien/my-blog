import TiltClubPolicyLayout from "../../../components/tilt-club-policy-layout";

export default function Support() {
  return <TiltClubPolicyLayout title="Support" description="Help with Tilt Club poker, Club Tickets, local saves and planned TestFlight purchases and rewarded ads." path="/projects/tilt-club/support">
    <p className="lead">For Tilt Club help, email <a href="mailto:phucledien@gmail.com?subject=Tilt%20Club%20support">phucledien@gmail.com</a>.</p>
    <h2>Report an issue</h2>
    <p>Include your iPhone model, iOS version, Tilt Club version and build number, and the steps that led to the issue. A screenshot of an error can help. Omit passwords, payment-card details and other information that is not needed to investigate.</p>
    <h2>Poker, chips and Club Tickets</h2>
    <p>Tilt Club is adult-oriented simulated poker against computer-controlled club characters. It has no real-money wagering, cash-out or player-to-player currency transfers.</p>
    <p>Each night starts with 1,500 free game chips. Chips are used only at the simulated table; they are not sold as in-app purchase packs. Club Tickets are a separate currency earned through play and daily rewards, with Ticket packs planned for purchase. Tickets buy card faces and item copies, including Grey and Cheat items that can affect a hand. Tickets cannot be converted into game chips.</p>
    <h2>Planned TestFlight purchases</h2>
    <p className="notice">Purchases and optional rewarded ads are being prepared for an upcoming Tilt Club TestFlight beta. The planned beta uses Apple sandbox purchases and Google’s official sample ads. Rewarded ads remain disabled while Tilt-specific privacy and consent setup is completed; production advertising is not enabled.</p>
    <p>The base app is free. Product availability depends on your build and App Store region. Apple’s purchase sheet shows the actual localized price before confirmation. TestFlight sandbox purchases do not incur real billing.</p>
    <ul>
      <li><strong>Full Club:</strong> a one-time unlock, with a verified US catalog price of $3.99. It includes all poker games and rooms, Full Club progression, the eligible once-per-night rebuy without an ad, and GUS/Pocket Club app icon choices.</li>
      <li><strong>Midnight Pack:</strong> midnight-blue table felt and a neon card back. These are cosmetic changes.</li>
      <li><strong>Lounge Soundtrack:</strong> five club tracks in the Music Room and Dot humming, following your music volume and mute settings.</li>
      <li><strong>Tip the Band:</strong> a thank-you and jukebox animation for each verified purchase. It grants no Tickets, chips, unlocks or gameplay benefits.</li>
      <li><strong>Ticket packs:</strong> Pocketful gives 100 Club Tickets, Stack gives 550, and Strongbox gives 1,200. These are consumable purchases.</li>
    </ul>
    <p>If a purchase stays pending or an icon change fails, keep the error message and contact support. An unavailable product or failed icon change is not confirmation of delivery.</p>
    <h2>Restore Purchases</h2>
    <p>Use Restore Purchases in Settings with the Apple Account used for the original purchase. It can restore verified Full Club, Midnight Pack and Lounge Soundtrack ownership. It does not repeat Ticket-pack grants or Tip the Band acknowledgements, and it cannot reconstruct a lost local Ticket wallet or item inventory.</p>
    <h2>Optional rewarded rebuy</h2>
    <p>The planned sample-ad rebuy is an optional way to return to a night after busting with 1,500 chips. It is available at most once per night, before level 5. Full Club owners receive the same eligible rebuy without watching an ad.</p>
    <p>Players can walk away and start a new night instead. Cancelling, an unfinished ad or a failed request does not earn a rebuy. Purchases do not sell chip packs or remove the night’s rebuy limit.</p>
    <h2>Age and ad privacy controls</h2>
    <p>The prepared native features ask “Are you 18 or older?” before a purchase or ad. No date of birth is requested. An unanswered or under-18 answer blocks new purchases and rewarded-ad eligibility.</p>
    <p>Settings → Purchases &amp; ads lets you change your answer or choose WITHDRAW. Withdrawal returns the answer to unknown and stops new purchase initiation and ad eligibility. When required by Google’s privacy tool, AD PRIVACY OPTIONS reopens its form to manage privacy choices. Changing a Google choice and withdrawing your local age answer are separate controls.</p>
    <h2>Local save and reset</h2>
    <p>The native app keeps your progress, Tickets, item copies and settings on this device. There is no Tilt Club cloud-wallet recovery service. Removing the app can remove local records.</p>
    <p>RESET SAVE clears local game progress, Tickets, item copies, unlocks, statistics, settings and the age answer. Purchase-delivery records and verified non-consumable ownership are preserved to avoid duplicate delivery. Restore Purchases does not replace erased Tickets or game progress.</p>
    <p>For a future Apple-billed release, Apple handles billing and refund requests through <a href="https://reportaproblem.apple.com/">Report a Problem</a>. Contact Tilt Club support for delivery and restoration issues.</p>
  </TiltClubPolicyLayout>;
}
