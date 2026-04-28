export interface ServiceData {
  name: string;
  slug: string;
  shortDescription: string;
  image: string;
  h1: string;
  bluf: string;
  content: string[];
  steps: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
  metaTitle: string;
  metaDescription: string;
}

export const SERVICES: ServiceData[] = [
  {
    name: "Collision Repair",
    slug: "collision-repair",
    shortDescription: "View real collision repairs and before and after results.",
    image: "/images/services/collision-repair.jpg",
    h1: "Collision Repair in Marinette, WI",
    bluf: "Corey's Auto Body restores collision-damaged vehicles to pre-accident condition in Marinette, WI. We handle everything from minor fender benders to major structural damage, working directly with your insurance company so you can focus on getting back on the road.",
    content: [
      "Collision damage goes deeper than what you see on the surface. A crumpled fender often hides bent structural components, misaligned suspension geometry, and compromised safety systems. We use frame measuring equipment to detect hidden damage that visual inspection alone will miss.",
      "Every collision repair starts with a full disassembly of the damaged area. We remove trim, bumper covers, and inner panels to expose the full extent of the damage before writing an estimate. This prevents the surprises that come from writing an estimate off a parking-lot walkaround.",
      "We use OEM-spec replacement panels when available and factory-match paint systems to restore your vehicle's appearance. Our paint booth delivers controlled temperature and humidity for a finish that matches your factory paint. Not a shade off, not a texture mismatch.",
      "Marinette County's winter road salt accelerates corrosion on collision-repaired panels. We apply cavity wax and corrosion protection to every repair area, because a repair that rusts through in two years isn't a repair, it's a delay.",
      "Modern vehicles use a mix of high-strength steel, aluminum, and advanced composites in their construction. A 2020 truck has different repair procedures than a 2005 truck. The steel is stronger, the crumple zones are engineered differently, and the fastening methods have changed. We stay current on manufacturer repair procedures because using outdated techniques on modern vehicles compromises structural safety.",
      "We also handle the small stuff that matters: recalibrating advanced driver-assistance systems (ADAS) like forward collision warning, lane departure, and blind-spot monitoring after a repair. A bumper replacement that doesn't include radar recalibration leaves your safety systems unreliable, and most shops skip this step because the equipment and training cost money.",
    ],
    steps: [
      { title: "Damage Assessment", description: "Full disassembly and inspection of the damaged area to identify all visible and hidden damage." },
      { title: "Insurance Coordination", description: "We work directly with your insurance adjuster, handle the paperwork, and advocate for a complete repair." },
      { title: "Structural & Body Repair", description: "Frame straightening, panel replacement, and bodywork performed to factory specifications." },
      { title: "Paint & Reassembly", description: "Color-matched paint applied in our booth, followed by reassembly and a multi-point quality check." },
    ],
    faqs: [
      { question: "How long does collision repair take in Marinette?", answer: "Most collision repairs take 5-10 business days depending on the extent of damage and parts availability. Minor dent and paint work can be completed in 3-5 days. We provide a timeline estimate before starting and keep you updated throughout the process." },
      { question: "Do you work with all insurance companies?", answer: "Yes. We work directly with all major insurance companies including State Farm, Progressive, GEICO, Allstate, and local Wisconsin carriers. We handle the claims communication, supplemental estimates, and paperwork so you don't have to." },
      { question: "Will my car look the same after collision repair?", answer: "That's the goal and our standard. We use factory-spec replacement panels and computerized paint matching to restore your vehicle to pre-accident condition. Our paint booth provides the controlled environment needed for a seamless color match." },
      { question: "Should I get multiple estimates for collision repair?", answer: "You can, but not all estimates are equal. A low estimate often means the shop is writing from a parking-lot inspection without disassembly. Our estimates include full teardown of the damaged area so we can identify all damage upfront, which means fewer surprises and supplements once the repair is underway." },
    ],
    relatedSlugs: ["insurance-work", "auto-painting", "rust-repair"],
    metaTitle: "Collision Repair in Marinette, WI",
    metaDescription: "Collision repair at Corey's Auto Body in Marinette, WI. From fender benders to major damage. Factory-spec repairs, insurance handled. Free estimates. (715) 716-6217",
  },
  {
    name: "Corvette Work",
    slug: "corvette-work",
    shortDescription: "Specialized Corvette repair and restoration work.",
    image: "/images/services/corvette-work.jpg",
    h1: "Corvette Body Work & Restoration",
    bluf: "Corey's Auto Body specializes in Corvette body work, fiberglass repair, and full restorations, from C2 Sting Rays to modern C8s. Corvettes require specialized knowledge that most body shops don't have. We do.",
    content: [
      "Corvettes aren't built like other cars. From 1953 to present, every generation uses fiberglass or composite body panels bonded to a unique frame structure. A shop that treats a Corvette like a steel-bodied sedan will botch the repair. We understand the material science, bonding techniques, and flex characteristics that Corvette bodywork demands.",
      "Fiberglass repair isn't Bondo and a prayer. We use layered fiberglass mat and resin to rebuild structural integrity, then finish with flexible filler that moves with the panel instead of cracking at the first temperature swing. Wisconsin's 100-degree summer-to-winter temperature swings will expose a bad fiberglass repair within one season.",
      "For classic Corvette restorations, we handle complete body-off work. Fiberglass bodies come off the frame for media blasting, structural repair, and fresh gelcoat or paint. We've worked on C3 Stingrays, C2 split-windows, and everything in between.",
      "Corey personally owns and works on multiple Corvettes. This isn't a side service, it's a specialty built on hands-on ownership experience and a genuine passion for the platform.",
      "Color matching on Corvettes requires extra attention. GM used single-stage and two-stage paint systems across different generations, and the fiberglass substrate absorbs and reflects light differently than steel. A color formula that looks perfect on a steel test card can look off on a fiberglass panel. We adjust our matching process specifically for composite body panels.",
      "Parts sourcing for classic Corvettes can be the hardest part of a restoration. We know which reproduction parts are worth buying and which ones require fitment work that costs more in labor than the savings on the part. For critical components, we source NOS (new old stock) when possible and advise you on where to invest and where to save.",
    ],
    steps: [
      { title: "Corvette-Specific Assessment", description: "We evaluate fiberglass condition, frame integrity, and panel fit specific to your Corvette's generation." },
      { title: "Fiberglass & Structural Repair", description: "Layered fiberglass repair with proper resin and flex-compatible filler, not shortcuts that crack in winter." },
      { title: "Paint & Finish", description: "Color-matched paint or full respray in our controlled booth environment." },
      { title: "Assembly & Detail", description: "Careful reassembly with attention to panel gaps, trim alignment, and generation-specific details." },
    ],
    faqs: [
      { question: "Can you repair fiberglass Corvette body panels?", answer: "Yes, fiberglass repair is one of our core specialties. We use layered fiberglass mat and resin to rebuild structural integrity, then apply flexible filler that withstands Wisconsin's temperature extremes without cracking." },
      { question: "What Corvette generations do you work on?", answer: "All of them. We've worked on C2 Sting Rays, C3 Stingrays, C4s, C5s, C6s, C7s, and C8s. Each generation has different body construction and we understand the specifics of each." },
      { question: "Do you do full Corvette restorations?", answer: "Yes. We handle body-off restorations including fiberglass repair, media blasting, frame work, paint, and reassembly. We can take a barn-find project from bare frame to show-ready." },
      { question: "How much does Corvette body work cost?", answer: "Corvette body work varies based on the scope. A fiberglass crack repair might start around $400-800. Full panel replacement or extensive fiberglass rebuilds range from $1,500-4,000+ per panel. Complete restoration bodywork is project-dependent. We provide a detailed estimate after hands-on assessment." },
    ],
    relatedSlugs: ["restoration-projects", "auto-painting", "collision-repair"],
    metaTitle: "Corvette Body Work & Restoration",
    metaDescription: "Specialized Corvette body work, fiberglass repair, and restorations at Corey's Auto Body in Marinette, WI. C2 through C8. Free estimates. (715) 716-6217",
  },
  {
    name: "Rust Repair",
    slug: "rust-repair",
    shortDescription: "Proper rust repair done the right way, not covered up.",
    image: "/images/services/rust-repair.jpg",
    h1: "Rust Repair in Marinette, WI",
    bluf: "Corey's Auto Body cuts rust out completely. No Bondo cover-ups, no shortcuts. In Marinette County, road salt and Lake Michigan moisture eat through metal fast. We weld in new metal and apply real corrosion protection that lasts.",
    content: [
      "Wisconsin's combination of road salt, freeze-thaw cycles, and Lake Michigan humidity creates some of the most aggressive rust conditions in the country. Marinette County vehicles face salt exposure from November through April, and that brine doesn't just stay on the road. It coats every undercarriage surface, seam, and drain hole on your vehicle.",
      "Most shops will grind the surface rust, skim Bondo over the hole, and call it fixed. That repair lasts one winter. The rust is still eating through underneath, and within a year you're back to where you started, except now it's hidden under filler. We cut the rust out completely, back to clean metal, every time.",
      "We weld in new patch panels or fabricate replacement sections as needed. Every weld gets ground smooth, treated with corrosion-resistant primer, sealed, and undercoated. The repair area gets better corrosion protection than the factory applied, because we know what Wisconsin winters do to bare metal.",
      "Common rust areas we repair: rocker panels, cab corners, wheel arches, bed sides, floor pans, and frame sections. If the metal is compromised, we replace it. If it's surface rust, we treat it properly. Either way, you get a repair that holds up.",
      "Rust doesn't stop at body panels. We inspect and repair rust-damaged structural components including frame rails, subframes, and suspension mounting points. A rusted-through rocker panel is cosmetic. A rusted frame rail is a safety issue. We'll tell you the difference and prioritize accordingly.",
      "For trucks especially, bed-side rust and cab corner rot are the most common repair requests we see in the Marinette-Menominee area. These areas trap salt and moisture behind inner panels where you can't see the damage until it's advanced. We recommend annual undercarriage inspection for any vehicle driven year-round in northeastern Wisconsin.",
    ],
    steps: [
      { title: "Rust Assessment", description: "We probe the full extent of the corrosion. Rust is always worse than it looks from the outside." },
      { title: "Cut & Remove", description: "Rusted metal is cut out completely, back to clean solid metal. No grinding over holes." },
      { title: "Weld & Fabricate", description: "New metal welded in. Patch panels or custom-fabricated sections, ground smooth." },
      { title: "Seal & Protect", description: "Corrosion primer, seam sealer, undercoat, and paint. Better protection than factory." },
    ],
    faqs: [
      { question: "How much does rust repair cost?", answer: "Rust repair costs depend on the extent and location of the damage. Small rocker panel repairs start around $400-800 per side. Cab corners run $300-600 each. Full floor pan or extensive frame repair ranges higher. We provide free estimates so you know exactly what to expect before any work begins." },
      { question: "Is it worth fixing rust on my truck?", answer: "If the vehicle is mechanically sound and the frame isn't compromised, rust repair almost always costs less than replacement. A $1,500 rocker panel repair on a $15,000 truck is a no-brainer. We'll give you an honest assessment of whether repair makes financial sense for your situation." },
      { question: "How long does rust repair last?", answer: "Our rust repairs are built to last because we cut out all affected metal and weld in new steel with proper corrosion protection. With the cavity wax and undercoating we apply, our repairs outlast factory corrosion protection in Wisconsin conditions." },
      { question: "Can you repair rust on a truck frame?", answer: "It depends on the extent. Surface rust and minor pitting can be cleaned, treated, and coated. If the frame has significant metal loss or structural thinning, we'll be straight with you about whether repair is safe or if the frame is compromised beyond what's responsible to fix. We won't weld patches onto a frame that's not structurally sound." },
    ],
    relatedSlugs: ["auto-painting", "restoration-projects", "collision-repair"],
    metaTitle: "Rust Repair in Marinette, WI",
    metaDescription: "Rust repair done right at Corey's Auto Body in Marinette, WI. We cut out rust completely and weld in new metal. No Bondo cover-ups. Free estimates. (715) 716-6217",
  },
  {
    name: "Restoration Projects",
    slug: "restoration-projects",
    shortDescription: "Complete vehicle restorations from start to finish.",
    image: "/images/services/restoration.jpg",
    h1: "Auto Restoration in Marinette, WI",
    bluf: "Corey's Auto Body handles full vehicle restorations from frame to finish in Marinette, WI. Whether it's a classic muscle car, a vintage truck, or a family heirloom, we bring vehicles back to life with craftsmanship and attention to detail.",
    content: [
      "A restoration isn't a repair. It's a commitment to bringing a vehicle back to its best possible condition. We approach every restoration project with a clear plan, honest timeline, and transparent communication. You'll know what's happening with your vehicle at every stage.",
      "Our restoration process starts with a complete disassembly and documentation. Every part gets cataloged, every issue gets identified upfront. This prevents the scope creep and surprise costs that plague restoration projects at other shops.",
      "Body and metalwork is where we shine. Rust repair, panel fabrication, filler work, and final body prep are done to show-quality standards. We take the time to get panel gaps right, surfaces straight, and every detail dialed in before the vehicle ever sees the paint booth.",
      "We've restored everything from classic Corvettes and Camaros to vintage Ford trucks and Chevy Impalas. Each project gets the same level of care regardless of the badge on the hood.",
      "Communication is where most restoration shops fail. Projects drag on for months with no updates, costs balloon without warning, and owners feel like they're writing blank checks. We set milestones, provide photo updates, and contact you before any scope change. You'll never wonder what's happening with your vehicle.",
      "Wisconsin is one of the hardest states to find a restorable vehicle that isn't eaten by rust. That means most projects that come through our door need significant metalwork before paint is even a conversation. We factor this into our estimates honestly rather than giving you a lowball number and hitting you with supplements later.",
    ],
    steps: [
      { title: "Disassembly & Documentation", description: "Complete teardown with every part cataloged and every issue identified upfront." },
      { title: "Metalwork & Body Repair", description: "Rust removal, panel fabrication, structural repair, and body straightening." },
      { title: "Paint & Finish", description: "Full body prep, primer, paint, and clear coat in our controlled paint booth." },
      { title: "Reassembly & Detail", description: "Careful reassembly with attention to every trim piece, seal, and fastener." },
    ],
    faqs: [
      { question: "How long does a full restoration take?", answer: "Most full restorations take 3-6 months depending on the condition of the vehicle and scope of work. We provide a realistic timeline estimate during the initial assessment and keep you updated on progress throughout the project." },
      { question: "How much does a car restoration cost?", answer: "Restoration costs vary widely based on the vehicle's condition and your goals. A solid body and paint restoration typically starts around $8,000-15,000. Ground-up frame-off restorations can range from $20,000-50,000+. We provide detailed estimates before any work begins." },
      { question: "Can you restore any make and model?", answer: "We work on all makes and models. We've restored classic Corvettes, Camaros, Mustangs, Impalas, Ford trucks, and more. If it has a body that needs work, we can handle it." },
      { question: "What's the difference between a restoration and a rebuild?", answer: "A restoration brings a vehicle back to original or better-than-original condition with period-correct parts and finishes. A rebuild focuses on making the vehicle functional and sound without strict adherence to factory specs. We do both. Tell us your goals and budget, and we'll recommend the right approach for your project." },
    ],
    relatedSlugs: ["corvette-work", "auto-painting", "rust-repair"],
    metaTitle: "Auto Restoration in Marinette, WI",
    metaDescription: "Full vehicle restorations at Corey's Auto Body in Marinette, WI. Classic cars, muscle cars, trucks. Frame to finish. Free estimates. (715) 716-6217",
  },
  {
    name: "Auto Painting",
    slug: "auto-painting",
    shortDescription: "Professional auto painting with factory-quality finish.",
    image: "/images/services/auto-painting.webp",
    h1: "Auto Painting in Marinette, WI",
    bluf: "Corey's Auto Body delivers professional auto painting in Marinette, WI with factory-quality color matching. We prep every surface properly: sanding, priming, sealing, so the paint bonds correctly and lasts. From single-panel touch-ups to full-body repaints.",
    content: [
      "Paint quality comes down to preparation. A beautiful top coat over poor prep peels, chips, and fades within a year. We sand through every layer methodically, apply the correct primer for the substrate, and seal every edge before the color coat goes on. This is where shortcuts show, and where we don't take them.",
      "Our paint booth provides the controlled environment that quality paint work demands. Temperature and humidity are regulated to ensure proper flash times between coats, even film build, and zero contamination. You can't spray a factory-quality finish in a dusty garage. The environment matters as much as the technique.",
      "We use computerized paint matching to dial in your exact factory color code, including any weathering or fade adjustment needed to blend with existing panels. A repair that's a shade off defeats the purpose. Our color match process ensures seamless results whether we're painting one panel or the whole vehicle.",
      "Full repaints, color changes, single-panel repairs, and fleet painting. We handle it all. Every job gets the same prep process and booth environment regardless of size.",
      "Clear coat is where longevity lives. We apply multiple coats of automotive-grade clear with proper flash times between each layer. Rushing clear coat, or applying it too thin, leads to peeling and UV failure within a few years. Our clear coat application is built for Wisconsin's UV exposure and temperature extremes, not just for how it looks on delivery day.",
      "For color changes, we go beyond just spraying the exterior. Door jambs, under the hood, inside the trunk. Everywhere the original color shows gets painted. A color change where you open the door and see the old color underneath isn't a color change, it's a cover-up. We also update the vehicle's color documentation when applicable.",
    ],
    steps: [
      { title: "Surface Preparation", description: "Sanding, stripping, and smoothing every surface. Proper prep is 80% of a good paint job." },
      { title: "Primer & Sealer", description: "Correct primer for the substrate, seam sealer on all edges, guide coat for final blocking." },
      { title: "Color Application", description: "Computerized color match, base coat and clear coat applied in our controlled paint booth." },
      { title: "Cut & Buff", description: "Final wet-sanding and polishing for a glass-smooth, showroom-quality finish." },
    ],
    faqs: [
      { question: "How much does it cost to paint a car in Marinette?", answer: "Single-panel paint repairs start around $300-600 depending on the panel size and color complexity. A full vehicle repaint ranges from $3,000-8,000+ depending on prep work needed, color, and finish quality. We provide free estimates with transparent pricing." },
      { question: "How long does a paint job take?", answer: "Single-panel repairs typically take 2-4 days. Full vehicle repaints take 5-10 business days depending on the amount of prep work required. Custom work and color changes may take longer. We provide a timeline estimate before starting." },
      { question: "Can you match my factory paint color exactly?", answer: "Yes. We use computerized paint-matching technology that reads your vehicle's existing color and creates a formula that accounts for weathering and fade. The result is a seamless match whether we're painting one door or blending into adjacent panels." },
      { question: "What's the difference between a cheap paint job and a quality one?", answer: "Preparation. A $500 paint job skips sanding, uses minimal primer, and sprays one thin coat over existing imperfections. The result looks decent for a few months, then chips, peels, and fades. A quality paint job involves stripping to bare metal or sound substrate, proper primer for adhesion, multiple base and clear coats in a controlled booth, and final cut-and-buff. The finish lasts years, not months." },
    ],
    relatedSlugs: ["collision-repair", "restoration-projects", "rust-repair"],
    metaTitle: "Auto Painting in Marinette, WI",
    metaDescription: "Professional auto painting at Corey's Auto Body in Marinette, WI. Factory color matching, full repaints, single-panel repairs. Free estimates. (715) 716-6217",
  },
  {
    name: "Insurance Work",
    slug: "insurance-work",
    shortDescription: "We work with all insurance companies to get your vehicle repaired.",
    image: "/images/services/insurance-work.jpg",
    h1: "Insurance Auto Body Repair in Marinette, WI",
    bluf: "Corey's Auto Body works directly with all major insurance companies in Marinette, WI. We handle your claim from start to finish: paperwork, adjuster communication, supplemental estimates. So you can focus on getting your vehicle back.",
    content: [
      "Filing an insurance claim after an accident is stressful enough without having to manage the repair process yourself. We handle the insurance communication for you: filing the claim, scheduling the adjuster inspection, submitting photos and estimates, and negotiating supplemental repairs when hidden damage is found.",
      "Insurance companies sometimes push for the cheapest repair option. We advocate for the correct repair. If your vehicle needs a new panel instead of a pulled-and-filled one, we document why and submit the supplement. You shouldn't accept a compromised repair because an adjuster wants to save $200.",
      "We work with all major insurance carriers including State Farm, Progressive, GEICO, Allstate, American Family, Erie, and all Wisconsin-based carriers. We also handle claims from out-of-state insurers for visitors and seasonal residents in the Marinette-Menominee area.",
      "Your out-of-pocket cost is typically just your deductible. We work directly with your insurance company on payment so you're not caught in the middle between the shop and the insurer.",
      "Supplemental claims are normal and expected on most collision repairs. Once we disassemble the damaged area, we almost always find additional damage that wasn't visible in the initial inspection. We document everything with photos, submit the supplement to your adjuster, and get approval before proceeding. This is standard practice. A shop that never files supplements is either cutting corners or not doing complete repairs.",
      "If your vehicle is deemed a total loss by the insurance company, we can help you understand the valuation and your options. Sometimes fighting a total-loss determination makes sense; sometimes accepting it is the right financial move. We'll give you an honest assessment and help you make the best decision for your situation.",
    ],
    steps: [
      { title: "Claim Filing", description: "We help you file the claim and coordinate the initial inspection with your adjuster." },
      { title: "Estimate & Approval", description: "Detailed repair estimate submitted to your insurance company for approval." },
      { title: "Repair Process", description: "Factory-spec repairs performed. Supplemental estimates filed if hidden damage is found." },
      { title: "Direct Payment", description: "Insurance pays us directly. You pay only your deductible at pickup." },
    ],
    faqs: [
      { question: "Do I have to use the body shop my insurance recommends?", answer: "No. In Wisconsin, you have the legal right to choose any licensed body shop for your repair. You are not required to use an insurance company's 'preferred' or 'recommended' shop. We will work directly with your insurer regardless of whether we're on their list." },
      { question: "Will my insurance cover the full repair cost?", answer: "Insurance policies typically cover the cost to restore your vehicle to pre-accident condition, minus your deductible. If we find additional hidden damage during repair, we file a supplemental estimate with your insurer for the additional work." },
      { question: "How long does the insurance repair process take?", answer: "The repair timeline depends on damage severity and parts availability. Most insurance repairs take 5-10 business days. The insurance approval process typically adds 1-3 business days upfront. We keep you informed of progress and any timeline changes." },
      { question: "What if I disagree with the insurance company's repair estimate?", answer: "You have the right to a complete and proper repair. If an insurance estimate cuts corners, specifying used parts where OEM is needed or skipping blend panels, we write a supplement documenting why the additional work is necessary. We advocate for the correct repair, not the cheapest one, and most supplements are approved once properly documented." },
    ],
    relatedSlugs: ["collision-repair", "auto-painting", "rust-repair"],
    metaTitle: "Insurance Auto Body Repair in Marinette, WI",
    metaDescription: "Insurance auto body repair at Corey's Auto Body in Marinette, WI. We handle your claim start to finish. All carriers accepted. Free estimates. (715) 716-6217",
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getRelatedServices(slugs: string[]): ServiceData[] {
  return slugs.map((s) => SERVICES.find((svc) => svc.slug === s)!).filter(Boolean);
}
