/**
 * AmpReady — Blog Data
 *
 * Static blog post data for the AmpReady website.
 * Used by the blog index and individual post pages.
 */

import { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    slug: "how-much-does-ev-charger-installation-cost",
    title: "How Much Does EV Charger Installation Cost in 2026?",
    excerpt:
      "A complete breakdown of EV charger installation costs, from simple garage installs to complex panel upgrades. Understand what drives pricing and how to budget for your project.",
    content: `
## The Real Cost of Installing an EV Charger at Home

If you are shopping for an EV charger, you have probably seen the hardware prices. But the installation cost is where most homeowners get surprised. Let us break it down.

## Simple Install: $500–$1,200

A "simple" install means your electrical panel has spare capacity, your garage is close to the panel, and you are mounting a standard Level 2 charger on an interior wall. The electrician runs wire from the panel to the charger location, installs a dedicated 240V circuit, and you are done.

Factors that keep it simple:
- 200A service with spare breaker slots
- Garage shares a wall with the panel location
- Unfinished basement or garage makes wire runs easy
- Standard 40A–50A circuit is sufficient

## Moderate Complexity: $1,200–$2,500

Things get more expensive when the wire run is longer, walls need to be opened and repaired, or the charger requires a higher amperage circuit. Outdoor mounting, trenching for detached garages, and conduit runs all add labor and materials.

Common moderate-cost factors:
- 30–60 foot wire run through finished walls
- Outdoor-rated conduit and weatherproof installation
- Drywall repair after wire fishing
- Upgrading from a 30A to a 60A circuit for faster charging

## Panel Upgrade Required: $3,000–$5,500+

If your home has 100A service and the panel is full, you will likely need a service upgrade. This involves your utility company, permits, and significantly more electrical work. It is the most common reason a $1,000 job becomes a $4,000 job.

Signs you might need an upgrade:
- Your main breaker is 100A or less
- The panel has no empty breaker slots
- You already have electric appliances (dryer, water heater, range)
- Your utility company recommends it during assessment

## How to Get an Accurate Quote

The biggest mistake homeowners make is calling electricians without knowing their panel situation. Every electrician will ask:

1. What is your panel capacity? (100A, 150A, 200A?)
2. How many spare breaker slots do you have?
3. How far is your parking spot from the panel?
4. What charger are you installing? (amperage matters)

AmpReady helps you gather this information before you call, so electricians can give you accurate quotes without a site visit.

## Hidden Costs to Watch For

- **Permits:** $50–$300 depending on your municipality
- **Inspection:** Often included, but some electricians charge separately
- **Drywall repair:** $200–$500 if walls need to be opened
- **Trenching:** $500–$2,000 for underground runs to detached garages
- **Utility coordination:** Free to $500 for service upgrades

## The Bottom Line

Most homeowners with 200A service and a standard garage setup should budget $800–$1,500. If you have an older home with 100A service, budget $3,000–$5,000 to be safe. The best way to know for sure is to assess your panel and get multiple quotes from licensed electricians.
    `,
    author: "AmpReady Team",
    publishedAt: "2026-01-15",
    updatedAt: "2026-06-01",
    tags: ["Cost & Pricing", "Installation", "Budget", "For Homeowners"],
    readingTime: 6,
  },
  {
    slug: "do-i-need-a-panel-upgrade",
    title: "Do I Need a Panel Upgrade for My EV Charger?",
    excerpt:
      "Learn how to assess your electrical panel's capacity for an EV charger. We explain load calculations, warning signs, and when an upgrade is truly necessary.",
    content: `
## Understanding Your Electrical Panel

Your electrical panel is the distribution center for all electricity in your home. Every circuit — lights, outlets, appliances — connects here. Adding a 40A or 50A EV charger circuit is a significant load, so your panel needs to handle it safely.

## The 125% Rule

The National Electrical Code (NEC) requires that continuous loads (like EV chargers) be sized at 125% of their rated current. This means:

- A 40A charger needs a 50A circuit breaker
- A 48A charger needs a 60A circuit breaker
- A 80A charger needs a 100A circuit breaker

This is why your charger's amperage rating directly impacts whether your panel can accommodate it.

## Load Calculation: The Math That Matters

Electricians perform a load calculation to determine if your panel can handle the additional circuit. The rough formula considers:

- Square footage of your home (general lighting and receptacles)
- Major appliances (HVAC, water heater, dryer, range, etc.)
- Existing 240V circuits
- The new EV charger circuit

If the total calculated load exceeds 80% of your panel's rating, an upgrade is required.

## Quick Assessment Guide

### Probably Fine (No Upgrade Needed)
- 200A service with 4+ spare breaker slots
- Gas water heater and gas range
- No other major 240V loads (hot tub, pool, etc.)
- Installing a 32A–40A charger

### Maybe (Get a Professional Assessment)
- 150A service with 2–3 spare slots
- Mixed gas/electric appliances
- Installing a 48A–50A charger
- Older home with recent additions

### Likely Needs Upgrade
- 100A service with a full panel
- Electric water heater, dryer, and range
- Installing a 48A+ charger
- No spare breaker slots visible

## Warning Signs Your Panel Is Strained

Even before adding an EV charger, look for these signs:

- Breakers trip frequently when multiple appliances run
- Lights dim when the HVAC kicks on
- The panel feels warm to the touch
- You hear buzzing or crackling from the panel
- The panel is more than 30 years old

## What a Panel Upgrade Involves

A service upgrade typically includes:

1. **Utility coordination:** Your utility may need to upgrade the service line to your home
2. **New meter base:** The existing meter may not support higher amperage
3. **New panel:** A larger panel with more breaker slots
4. **Grounding updates:** Modern code requirements for grounding and bonding
5. **Permits and inspection:** Required in virtually all jurisdictions

Timeline: 2–6 weeks from quote to completion, depending on utility scheduling.

## Alternatives to a Full Upgrade

If you are close to the limit but not quite over, consider:

- **Load management devices:** Smart switches that pause EV charging when other large loads are active
- **Lower-amperage charger:** A 24A or 32A charger adds less load and may still meet your needs
- **Time-of-use charging:** Charging overnight when other loads are minimal (does not reduce panel load, but reduces simultaneous demand)

## How AmpReady Helps

AmpReady's intake process includes a panel assessment section. We guide you through taking photos of your panel label, counting breaker slots, and documenting existing loads. This information goes directly into your job packet so electricians can tell you upfront whether you need an upgrade — before they visit your home.
    `,
    author: "AmpReady Team",
    publishedAt: "2026-02-03",
    updatedAt: "2026-05-20",
    tags: ["panel upgrade", "electrical", "safety", "homeowners"],
    readingTime: 8,
  },
  {
    slug: "level-1-vs-level-2-vs-level-3-charging",
    title: "Level 1 vs Level 2 vs Level 3: Which EV Charger Do You Need?",
    excerpt:
      "Understand the differences between EV charging levels, typical charging speeds, and which option makes sense for your daily driving and home setup.",
    content: `
## EV Charging Levels Explained

Not all EV charging is the same. The three levels differ in voltage, amperage, and where they are typically installed. Choosing the right level for your home depends on your driving habits, your car's capabilities, and your electrical setup.

## Level 1: Standard Household Outlet (120V)

Level 1 charging uses the same 120V outlet your phone charger uses. Every EV sold in North America includes a Level 1 charging cable.

**Speed:** 3–5 miles of range per hour of charging
**Best for:** Drivers with short commutes (under 30 miles/day), plug-in hybrids, or emergency top-ups
**Cost:** $0 (uses included cable) to $300 (dedicated outdoor outlet)
**Installation:** None required — just plug into a standard outlet

The downside is speed. A full charge from empty takes 40–60 hours. For most drivers, Level 1 is too slow for daily use.

## Level 2: Dedicated 240V Circuit (The Standard Home Charger)

Level 2 is what most homeowners install. It requires a dedicated 240V circuit, similar to what your dryer or electric range uses.

**Speed:** 20–50 miles of range per hour of charging
**Best for:** Daily drivers, EV owners with 100+ mile commutes, anyone who wants overnight full charging
**Cost:** $500–$2,500 for installation (charger hardware separate)
**Installation:** Licensed electrician required; permits usually needed

Level 2 chargers range from 16A to 80A, but most residential installations are 32A–50A. A 40A charger on a 50A circuit adds about 30–35 miles of range per hour — enough to fully charge most EVs overnight.

## Level 3: DC Fast Charging (Public Only)

Level 3, also called DC Fast Charging (DCFC), uses direct current at high voltage (400V–900V). These are the chargers you see at highway rest stops, shopping centers, and Tesla Supercharger stations.

**Speed:** 100–350+ miles of range per hour (typically 10–80% in 20–40 minutes)
**Best for:** Road trips, long-distance travel, quick top-ups during the day
**Cost:** Not applicable for home installation (prohibitively expensive)
**Installation:** Requires industrial electrical service; not feasible for residential

Level 3 is not a home charging option. The electrical infrastructure required costs hundreds of thousands of dollars and demands utility-level power delivery.

## Choosing the Right Level for Your Home

For 95% of homeowners, Level 2 is the right answer. Here is how to decide:

**Choose Level 1 if:**
- You drive under 30 miles per day
- You have a plug-in hybrid with small battery (under 20 kWh)
- You cannot install Level 2 (rental, HOA restrictions, no panel capacity)

**Choose Level 2 if:**
- You drive 40+ miles per day
- You want the convenience of overnight full charging
- You have a full battery electric vehicle (not a plug-in hybrid)
- You plan to keep your EV long-term

**Level 3 is not a home option.** Use it for road trips and public charging only.

## Amperage Within Level 2: How Much Do You Need?

Not all Level 2 chargers are the same. The amperage determines charging speed:

- **16A–24A:** 12–20 miles/hour. Budget option, slower but functional.
- **32A–40A:** 25–35 miles/hour. The sweet spot for most homes. Most EVs max out at 32A–48A onboard charging anyway.
- **48A–50A:** 35–45 miles/hour. Future-proofing. Good if you have a large battery EV (100+ kWh) or want maximum speed.
- **60A–80A:** 45–60+ miles/hour. Overkill for most homes. Requires significant electrical capacity and premium charger hardware.

## Your Car's Onboard Charger Matters

Your EV has a built-in charger (the onboard charger) that converts AC to DC for the battery. This limits how fast you can charge regardless of your home charger's rating:

- Tesla Model 3/Y: 11.5 kW (48A) max
- Ford Mustang Mach-E: 10.5 kW (48A) max
- Chevy Bolt: 11 kW (48A) max on newer models, 7.2 kW (32A) on older
- Nissan Leaf: 6.6 kW (32A) max on newer models

Installing a 60A charger for a car that maxes out at 32A is wasted money. Check your car's specs before choosing a charger.

## Cost Comparison Summary

| Level | Hardware Cost | Installation Cost | Speed | Best For |
|-------|-------------|-------------------|-------|----------|
| Level 1 | $0–$300 | $0 | 3–5 mi/hr | Short commutes, PHEVs |
| Level 2 (32A) | $400–$700 | $800–$1,500 | 25–30 mi/hr | Most EV owners |
| Level 2 (48A) | $600–$1,200 | $1,000–$2,500 | 35–45 mi/hr | Large battery EVs |
| Level 3 | N/A | N/A | 100+ mi/hr | Public charging only |

## Bottom Line

For almost every homeowner, a 32A–40A Level 2 charger is the right choice. It provides overnight full charging for any daily commute, does not require a panel upgrade in most homes, and hits the sweet spot of cost versus performance. Only upgrade to 48A+ if you have a large-battery EV and confirmed panel capacity.
    `,
    author: "AmpReady Team",
    publishedAt: "2026-02-20",
    updatedAt: "2026-06-01",
    tags: ["charging levels", "level 2", "buying guide", "homeowners"],
    readingTime: 7,
  },
  {
    slug: "finding-a-licensed-electrician-for-ev-charger-installation",
    title: "How to Find a Licensed Electrician for EV Charger Installation",
    excerpt:
      "What to look for when hiring an electrician for your EV charger. Licensing, certifications, insurance, and the questions you should ask before hiring.",
    content: `
## Why Licensing Matters for EV Charger Installation

EV charger installation involves high-voltage electrical work, dedicated circuits, and often permit coordination. An unlicensed installer risks fire hazards, code violations, and voided warranties. In most jurisdictions, electrical work must be performed by a licensed electrician.

## Required Credentials

### State Electrical License
Every electrician should hold a valid state electrical license. License types vary by state:

- **Master Electrician:** Can perform all electrical work and supervise others
- **Journeyman Electrician:** Can perform work under a master's supervision
- **Electrical Contractor:** Business license that employs licensed electricians

Verify the license with your state's licensing board. Most have online lookup tools.

### EVITP Certification (Preferred)
The Electric Vehicle Infrastructure Training Program (EVITP) is the gold standard for EV charger installation. EVITP-certified electricians have completed specialized training on:

- EV charger types and compatibility
- Load calculations for EV circuits
- NEC Article 625 (EV charging systems)
- Safety protocols specific to EV infrastructure

While not legally required in all areas, EVITP certification demonstrates expertise that general electricians may not have.

### Insurance Requirements

A qualified electrician should carry:

- **General liability insurance:** $500,000–$1,000,000 minimum
- **Workers' compensation:** If they have employees
- **Bonding:** Required in some states for contractor licensing

Always ask for a certificate of insurance before work begins.

## Red Flags to Avoid

Watch for these warning signs when evaluating electricians:

- **No license verification:** They hesitate to provide a license number
- **No permit discussion:** They suggest skipping permits to "save money"
- **Vague quotes:** They give a number without seeing your panel or asking about wire runs
- **No insurance proof:** They cannot provide a certificate of insurance
- **Cash-only demands:** They insist on cash payment without a contract
- **Unrealistically low prices:** Significantly below other quotes often means corners are being cut

## Questions to Ask Before Hiring

### About Their Experience
1. How many EV charger installations have you completed?
2. What brands and amperages have you installed?
3. Have you handled panel upgrades for EV chargers?
4. Do you coordinate permits and inspections?

### About Your Specific Job
5. Have you reviewed my panel photos and job packet?
6. What is your estimated wire run length and route?
7. Will drywall need to be opened and repaired?
8. What is your timeline from start to finish?

### About the Quote
9. Is this a fixed price or an estimate?
10. What could cause the price to change?
11. Are permits and inspection fees included?
12. What is your warranty on workmanship?

## The Permit Process

A legitimate electrician will handle or guide you through permits. The process typically involves:

1. **Permit application:** Submitted to your local building department
2. **Electrical work:** Performed by the licensed electrician
3. **Rough inspection:** Inspector verifies wiring before walls are closed
4. **Final inspection:** Inspector verifies the completed installation
5. **Certificate of completion:** Provided by the electrician

Skipping permits risks:
- Fines from your municipality
- Home insurance issues if a fire occurs
- Problems when selling your home
- Voided manufacturer warranties

## How AmpReady Vets Electricians

Every electrician in the AmpReady network is verified for:

- Active state electrical license
- General liability insurance
- EV charger installation experience
- Customer reviews and ratings
- Background check (where available)

We also collect feedback after every job to maintain quality standards. Electricians with poor ratings or complaints are removed from the network.

## Getting Multiple Quotes

We recommend getting 2–3 quotes for any EV charger installation. Prices can vary significantly based on:

- The electrician's assessment of complexity
- Their hourly labor rate
- How busy they are (lower demand = lower prices)
- Whether they include permit fees

AmpReady makes this easy by sending your job packet to multiple qualified electricians simultaneously. Each reviews the same information and provides an independent quote — no repeated explanations, no inconsistent assumptions.

## Bottom Line

Hire a licensed electrician with EV experience, verify their insurance, and never skip permits. The upfront cost of doing it right is always less than the cost of fixing a bad installation — or worse, dealing with a fire hazard in your home.
    `,
    author: "AmpReady Team",
    publishedAt: "2026-03-10",
    updatedAt: "2026-05-15",
    tags: ["electricians", "hiring", "licensing", "safety"],
    readingTime: 6,
  },
  {
    slug: "understanding-ev-charger-plug-types",
    title: "Understanding EV Charger Plug Types and Connectors",
    excerpt:
      "J1772, NACS, CCS, CHAdeMO — we decode the alphabet soup of EV charging connectors and explain what you need for home charging.",
    content: `
## The Connector Landscape

EV charging connectors can be confusing. Different regions, car manufacturers, and charging levels use different plugs. For home charging, you only need to know a few key types.

## Level 1 and Level 2: AC Charging Connectors

### J1772 (SAE J1772)
The standard connector for Level 1 and Level 2 AC charging in North America. Almost every non-Tesla EV uses this plug.

- **Used by:** Ford, GM, BMW, Mercedes, Hyundai, Kia, Volkswagen, Nissan (Leaf), and virtually all non-Tesla EVs
- **Charging levels:** Level 1 (120V) and Level 2 (240V)
- **Max amperage:** 80A
- **Pins:** 5 (2 power, 1 ground, 2 signaling)

If you buy a non-Tesla EV in North America, your home charger will almost certainly have a J1772 connector.

### NACS (North American Charging Standard)
Formerly called the Tesla connector, NACS is Tesla's proprietary connector that has been opened to other manufacturers. As of 2024–2025, most major automakers have announced adoption.

- **Used by:** Tesla (all models), and soon Ford, GM, Rivian, Mercedes, BMW, Honda, Hyundai, and others
- **Charging levels:** Level 1, Level 2, and DC fast charging (Level 3)
- **Max amperage:** 48A (Level 2), 500A+ (DC fast charging)
- **Pins:** 5 (smaller, more compact than J1772)

NACS is smaller and lighter than J1772, and handles both AC and DC charging through the same connector. If you own a Tesla or plan to buy a newer EV from an adopting manufacturer, NACS is your connector.

### Tesla Wall Connector (Gen 3)
Tesla's home charger uses the NACS connector. It can be configured for various amperages and includes WiFi connectivity for monitoring and scheduling.

- **Compatible with:** All Tesla vehicles
- **Adapter available for:** J1772 vehicles (Tesla sells an adapter)
- **Max output:** 48A (11.5 kW) on a 60A circuit

## DC Fast Charging: Level 3 Connectors

For home charging, you do not need to worry about DC fast charging connectors. But for public charging awareness, here are the main types:

### CCS (Combined Charging System)
The standard for DC fast charging in North America and Europe. CCS adds two DC power pins below the J1772 connector.

- **CCS1:** North American version (uses J1772 top half)
- **CCS2:** European version (uses Type 2 top half)
- **Used by:** Most non-Tesla EVs for DC fast charging

### CHAdeMO
An older DC fast charging standard primarily used by Japanese manufacturers. It is declining in popularity as CCS and NACS take over.

- **Used by:** Nissan Leaf (older models), some Mitsubishi vehicles
- **Declining:** Fewer new stations support CHAdeMO

### NACS (DC)
Tesla's connector handles DC fast charging at Supercharger stations. Tesla has opened the standard, and Superchargers are becoming available to non-Tesla vehicles through adapters.

## Adapters: Making Connectors Work Together

Adapters allow you to charge at stations with different connector types:

- **J1772 to Tesla:** Allows Tesla vehicles to use standard Level 1/2 chargers (included with Tesla vehicles)
- **Tesla to J1772:** Allows non-Tesla vehicles to use Tesla Wall Connectors (sold by Tesla and third parties)
- **CCS to NACS:** Allows non-Tesla vehicles to use Tesla Superchargers (rolling out 2024–2025)
- **NACS to CCS:** Allows Tesla vehicles to use CCS fast chargers (available from Tesla)

For home charging, the most common adapter need is Tesla to J1772, if you have a non-Tesla EV and want to use a Tesla Wall Connector.

## What Connector Do You Need for Home Charging?

### If you own a Tesla:
- **Best option:** Tesla Wall Connector (NACS) — fastest, most integrated
- **Alternative:** J1772 charger with Tesla adapter — works fine, slightly less convenient

### If you own a non-Tesla EV:
- **Best option:** J1772 charger — universal, no adapter needed
- **Alternative:** Tesla Wall Connector with Tesla-to-J1772 adapter — sometimes cheaper, requires adapter

### If you have multiple EVs (Tesla and non-Tesla):
- **Best option:** J1772 charger — works with both (Tesla includes J1772 adapter)
- **Alternative:** Dual-charger setup — one of each type

## NEMA Outlet Types for Level 2

Some homeowners prefer a hardwired charger; others prefer a NEMA outlet with a portable charger. Common NEMA outlets for Level 2:

- **NEMA 14-50:** 50A, 240V. The most common RV-style outlet. Supports up to 40A charging.
- **NEMA 6-50:** 50A, 240V. Welder-style outlet. Same capacity as 14-50, no neutral pin.
- **NEMA 14-30:** 30A, 240V. Dryer-style outlet. Supports up to 24A charging.

Note: The outlet must match your charger or be compatible with an adapter. Most portable Level 2 chargers include a NEMA 14-50 plug.

## Future-Proofing Your Installation

The EV charging landscape is evolving rapidly. NACS is gaining adoption, but J1772 will remain relevant for years. To future-proof:

1. Install a high-amperage circuit (50A or 60A) even if your current charger is lower
2. Consider a hardwired charger rather than an outlet — easier to swap later
3. Choose a charger with smart features (WiFi, scheduling, load management)
4. Keep adapters on hand for travel flexibility

## Bottom Line

For home charging in North America:
- **Tesla owners:** NACS (Tesla Wall Connector) is best
- **Non-Tesla owners:** J1772 is the standard and safest choice
- **Mixed households:** J1772 charger works for everyone

Do not overthink DC fast charging connectors for home. Level 2 AC charging is all you need for daily use.
    `,
    author: "AmpReady Team",
    publishedAt: "2026-04-05",
    updatedAt: "2026-06-01",
    tags: ["connectors", "J1772", "NACS", "buying guide"],
    readingTime: 7,
  },
  {
    slug: "ev-charger-installation-permits-and-inspections",
    title: "EV Charger Installation Permits and Inspections: What Homeowners Need to Know",
    excerpt:
      "Navigate the permit and inspection process for EV charger installation. Learn which permits you need, how long they take, and what inspectors look for.",
    content: `
## Why Permits Are Required

Electrical work that adds a new circuit to your home's electrical system requires a permit in virtually every jurisdiction in the United States. EV charger installation falls squarely into this category because it involves:

- Adding a new dedicated 240V circuit
- Potentially upgrading your electrical panel
- Running new wire through walls, ceilings, or underground
- Connecting to your home's main electrical service

Permits exist to ensure the work is done safely, meets the National Electrical Code (NEC), and is inspected by a qualified official.

## Types of Permits You May Need

### Electrical Permit (Always Required)
The primary permit for EV charger installation. It covers:

- New circuit installation
- Panel modifications or upgrades
- Wire runs and conduit
- Outlet or hardwired connection installation

Cost: $50–$300 depending on your municipality
Timeline: Same-day approval to 5 business days

### Building Permit (Sometimes Required)
If the installation involves structural modifications, you may need a building permit:

- Opening walls that are structural (load-bearing)
- Trenching through foundations
- Installing outdoor pedestals or posts
- Adding a new garage or carport for charging

Cost: $100–$500
Timeline: 3–10 business days

### Planning/Zoning Approval (Rarely Required)
Some jurisdictions require zoning approval for:

- Outdoor charging stations in front yards
- Commercial installations in residential areas
- Installations in historic districts

Cost: $200–$1,000+
Timeline: 2–6 weeks

## The Permit Process Step by Step

### 1. Application
Your electrician or you (if doing it yourself) submit an application to the local building department. Required information typically includes:

- Property address and owner information
- Scope of work description
- Electrical load calculations
- Single-line diagram showing the new circuit
- Panel specifications
- Charger specifications (voltage, amperage)

Most electricians handle this as part of their service.

### 2. Review
The building department reviews the application for:

- Code compliance (NEC and local amendments)
- Load calculation accuracy
- Safety considerations
- Proper circuit sizing

Simple EV charger permits are often approved immediately or within 1–2 days. Complex jobs requiring panel upgrades may take longer.

### 3. Permit Issuance
Once approved, you receive a permit that must be posted at the job site. The permit includes:

- Permit number
- Scope of approved work
- Inspection requirements
- Expiration date (typically 6–12 months)

### 4. Electrical Work
The licensed electrician performs the work according to the approved plans. During this phase:

- All work must match the permit application
- Changes to scope may require permit amendments
- The permit must remain visible at the site

### 5. Rough Inspection (If Required)
Some jurisdictions require a rough inspection before walls are closed:

- Inspector verifies wire gauge and type
- Conduit installation is checked
- Panel connections are reviewed
- Grounding and bonding are verified

This inspection happens while wires are still exposed.

### 6. Final Inspection
After work is complete, a final inspection verifies:

- The installation matches the approved plans
- All connections are properly made
- The charger operates correctly
- Ground fault protection is functional
- Proper labeling is in place
- The work area is clean and safe

The inspector may test the charger under load and verify voltage and amperage.

### 7. Certificate of Completion
After passing final inspection, you receive:

- A certificate of completion or compliance
- The permit is closed in the system
- Your installation is officially on record

## What Inspectors Look For

Understanding inspector priorities helps ensure a smooth process:

### Electrical Code Compliance
- **NEC Article 625:** Specific to EV charging systems
- **Circuit sizing:** 125% rule for continuous loads
- **Wire gauge:** Properly sized for amperage and distance
- **Conduit:** Proper type and installation for the environment
- **Grounding:** Equipment grounding conductor present and connected

### Safety Features
- **GFCI protection:** Required for most EV charger circuits
- **Disconnecting means:** A way to de-energize the charger within sight
- **Proper labeling:** Circuit breaker labeled, charger labeled with specs
- **Clearances:** Proper spacing from combustible materials

### Documentation
- **Permit posting:** Visible at the job site
- **Plans available:** Approved plans on site for inspector reference
- **Manufacturer specs:** Charger installation manual available

## Timeline Expectations

### Simple Installation (No Panel Upgrade)
- Permit application: 1–3 days
- Electrical work: 1 day
- Inspection scheduling: 1–5 days
- Final inspection: 1 day
- **Total: 1–2 weeks**

### Complex Installation (With Panel Upgrade)
- Permit application: 3–5 days
- Utility coordination: 1–3 weeks
- Electrical work: 1–2 days
- Rough inspection: 1–3 days after scheduling
- Final inspection: 1–3 days after scheduling
- **Total: 3–6 weeks**

## Common Permit Delays and How to Avoid Them

### Incomplete Applications
**Problem:** Missing load calculations, unclear scope, or incorrect addresses.
**Solution:** Have your electrician prepare the application. They know what the department expects.

### Busy Inspection Schedules
**Problem:** In high-growth areas, inspectors may be booked 1–2 weeks out.
**Solution:** Schedule the inspection as soon as work is complete. Do not wait.

### Failed Inspections
**Problem:** Code violations require rework and re-inspection.
**Solution:** Hire an experienced electrician who knows local code amendments. AmpReady electricians are vetted for permit compliance.

### Utility Coordination
**Problem:** Panel upgrades require utility approval for service line changes.
**Solution:** Start utility coordination early. Some utilities take 2–4 weeks to schedule.

## DIY Permits: Can You Pull Your Own?

In most jurisdictions, homeowners can pull permits for work on their own home. However:

- You must perform the work yourself (no unlicensed helpers)
- You are responsible for code compliance
- Failed inspections require correction at your expense
- Some insurers may not cover DIY electrical work

**Recommendation:** Unless you are a licensed electrician, hire a pro. The permit process is built around professional work, and inspectors are not there to teach code.

## How AmpReady Handles Permits

AmpReady's job packet includes all the information electricians need for permit applications:

- Panel specifications and photos
- Load calculations based on your home details
- Charger specifications and requirements
- Wire run estimates and routing

Many AmpReady electricians include permit handling in their quote, so you do not have to navigate the bureaucracy yourself. We also verify that every electrician in our network is licensed and experienced with local permit requirements.

## Bottom Line

Permits and inspections are non-negotiable for EV charger installation. They protect your safety, your home's value, and your insurance coverage. A good electrician handles permits seamlessly as part of their service. The best way to ensure a smooth process is to hire a licensed, experienced professional and let them manage the paperwork.
    `,
    author: "AmpReady Team",
    publishedAt: "2026-05-12",
    updatedAt: "2026-06-01",
    tags: ["permits", "inspections", "regulations", "homeowners"],
    readingTime: 8,
  },
];

export const blogCategories = [
  "All",
  "For Homeowners",
  "For Electricians",
  "Cost & Pricing",
  "Panel Upgrades",
  "Installation",
  "Safety",
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(currentSlug: string, limit = 3): BlogPost[] {
  const current = getBlogPostBySlug(currentSlug);
  if (!current) return [];

  return blogPosts
    .filter((post) => post.slug !== currentSlug)
    .sort((a, b) => {
      const aTags = a.tags.filter((tag) => current.tags.includes(tag)).length;
      const bTags = b.tags.filter((tag) => current.tags.includes(tag)).length;
      return bTags - aTags || new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    })
    .slice(0, limit);
}
