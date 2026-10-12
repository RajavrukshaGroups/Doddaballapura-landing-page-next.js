// Blog data matching the exact schema and contents from user request

export const doddaballapurImg = "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop";
export const gatedEntranceImg = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop";
export const plottedSunsetImg = "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1000&auto=format&fit=crop";
export const luxuryVillaImg = "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1000&auto=format&fit=crop";
export const agriFarmlandImg = "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1000&auto=format&fit=crop";
export const northBangaloreHillsImg = "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1000&auto=format&fit=crop";

import blog1 from "../assets/blog-1.jpeg";
//export const blog1Img = blog1?.src || blog1;

// Exactly matches the categories in the showcase sidebar
export const CATEGORIES_DATA = [
  { name: 'Real Estate', count: 5, icon: 'Home' },
  { name: 'Investment', count: 3, icon: 'TrendingUp' },
  { name: 'Lifestyle', count: 3, icon: 'Sparkles' },
  { name: 'North Bangalore', count: 1, icon: 'MapPin' },
  { name: 'Tips & Guide', count: 1, icon: 'Compass' },
];

// Exactly the 6 showcase articles
export const BLOG_POSTS = [
  {
    id: 'why-doddaballapur-is-emerging-as-residential-destination',
    slug: 'why-doddaballapur-is-emerging-as-a-residential-destination-in-north-bangalore',
    title: 'Why Doddaballapur Is Emerging as a Residential Destination in North Bangalore',
    category: 'REAL ESTATE',
    date: 'September 21, 2026',
    readTime: '8 min read',
    author: 'MRCL Editorial Team',
    authorRole: 'Editorial Advisory',
    image: blog1.src,
    imageCaption: 'The arterial Doddaballapur connectivity corridor opening up residential expansion in North Bangalore.',
    excerpt: "Doddaballapur is gaining attention as a potential residential destination, particularly for homebuyers, land investors, and families looking beyond the city's crowded urban pockets.",
    tableOfContents: [
      { id: 'sec-1', title: 'Doddaballapur: From Peripheral Town to Emerging Residential Corridor' },
      { id: 'sec-2', title: 'Connectivity Is Putting North Bangalore on the Radar' },
      { id: 'sec-3', title: 'Why Plots Are Becoming Attractive to Modern Buyers' },
      { id: 'sec-4', title: 'The Rise of Gated Community Plotted Developments' },
      { id: 'sec-5', title: 'A More Accessible Entry Point into North Bangalore' },
      { id: 'sec-6', title: 'Employment and Infrastructure Could Support Residential Demand' },
      { id: 'sec-7', title: 'Doddaballapur vs. Established Bangalore Locations' },
      { id: 'sec-8', title: 'What Should Buyers Check Before Purchasing a Plot?' },
      { id: 'sec-9', title: "The Bigger Picture: North Bangalore's Next Residential Chapter" },
    ],
    content: {
      introduction: [
        "North Bangalore has steadily evolved from an overlooked peripheral zone into one of the city's most closely watched residential corridors. While established areas often come with higher land costs and limited availability, emerging locations are attracting buyers who want to enter the market earlier and plan for the future.",
        "Among these locations, Doddaballapur is gaining attention as a potential residential destination, particularly for homebuyers, land investors, and families looking beyond the city's crowded urban pockets.",
        "So, what is driving this interest? The answer lies in a combination of connectivity, expanding infrastructure, employment potential, lifestyle preferences, and the growing demand for plotted developments."
      ],
      quote: "For families, this can mean planning a customised home. For long-term investors, a plot can represent an asset that offers flexibility compared with a ready-built property.",
      sections: [
        {
          id: 'sec-1',
          heading: 'Doddaballapur: From Peripheral Town to Emerging Residential Corridor',
          paragraphs: [
            "Doddaballapur has traditionally been known for its industrial and semi-urban character. Its location in North Bangalore, however, gives it an important advantage as the city continues expanding northward.",
            "As Bangalore's urban footprint grows, areas surrounding major transportation and employment corridors naturally attract residential development. Doddaballapur is positioned within this larger growth story, making it increasingly relevant to people searching for Plots for sale in Doddaballapur.",
            "Unlike highly developed city neighbourhoods where land parcels can be scarce, plotted developments provide buyers with an opportunity to purchase land and potentially build according to their future requirements."
          ],
          keyTakeaways: [
            "Positioned squarely along the northward axis of Greater Bangalore's growth master plan.",
            "Surrounded by granite hillocks, offering clean air quality and abundant open green spaces.",
            "Fast-growing social infrastructure with reputed educational campuses and healthcare centers nearby."
          ]
        },
        {
          id: 'sec-2',
          heading: 'Connectivity Is Putting North Bangalore on the Radar',
          paragraphs: [
            "One of the primary catalysts shaping residential interest across North Bangalore is infrastructure. Over the last decade, key connectivity projects have made travel between peripheral zones and central hubs significantly smoother.",
            "Doddaballapur enjoys strategic road connectivity via SH-9 (Doddaballapur Road), connecting seamlessly toward Yelahanka, Hebbal, and the Outer Ring Road (ORR). The upcoming satellite town ring road (STRR) expansion provides direct signal-free access across satellite nodes without cutting through dense city traffic.",
            "Additionally, proximity to Kempegowda International Airport (KIADB Aerospace Park & IT Corridor) puts residents within convenient commuting distance to global employment clusters."
          ]
        },
        {
          id: 'sec-3',
          heading: 'Why Plots Are Becoming Attractive to Modern Buyers',
          paragraphs: [
            "While high-rise apartments dominate central Bangalore, plotted developments continue to hold timeless appeal for discerning buyers seeking freedom, land ownership, and generational capital appreciation.",
            "Land is a finite resource. A piece of demarcated land inside an approved, well-planned development provides complete autonomy to design a bespoke villa, retain generous private garden spaces, and build when financial or life plans dictate."
          ],
          highlightBox: {
            title: 'Tangible Land Ownership vs. Vertical Fractional Share',
            description: 'Unlike undivided shares of land (UDS) in apartments, owning a residential plot gives you 100% undisputed freehold title over both the earth and the sky above it.'
          }
        },
        {
          id: 'sec-4',
          heading: 'The Rise of Gated Community Plotted Developments',
          paragraphs: [
            "Traditional standalone plots often brought concerns regarding security, water access, legal boundary encroaching, and delayed civil infrastructure. In contrast, modern gated developments like Samrudhi Sylvan Retreat eliminate these risks altogether.",
            "Buyers today enjoy underground cabling, solar-powered street lighting, rainwater harvesting swales, concrete wide avenues, 24/7 biometric security guards, and clubhouse amenities such as swimming pools, tennis courts, and organic community orchards."
          ]
        },
        {
          id: 'sec-5',
          heading: 'A More Accessible Entry Point into North Bangalore',
          paragraphs: [
            "As Hebbal, Sahakar Nagar, and Yelahanka reach pricing saturation exceeding ₹12,000–₹18,000 per sq. ft., Doddaballapur provides high-growth plots at an accessible price band.",
            "This cost advantage allows first-time investors and growing families to secure larger plot sizes (e.g. 1500 sq.ft to 2400 sq.ft) with substantial upside potential as arterial projects complete."
          ]
        },
        {
          id: 'sec-6',
          heading: 'Employment and Infrastructure Could Support Residential Demand',
          paragraphs: [
            "The North Bangalore corridor is not merely residential—it is also the engine of Karnataka's advanced economic strategy. The Aerospace SEZ, Devanahalli Business Park, Hardware Park, and Doddaballapur Integrated Textile & Engineering Park collectively host over 250 global corporations.",
            "As thousands of senior engineering professionals, aviation specialists, and biotech executives relocate to northern work hubs, the demand for quality suburban retreats and villas within a 20-to-30-minute drive continues to surge."
          ]
        },
        {
          id: 'sec-7',
          heading: 'Doddaballapur vs. Established Bangalore Locations',
          paragraphs: [
            "Comparing Doddaballapur to mature micro-markets reveals distinct trade-offs. While mature micro-markets offer established retail malls and metro stations today, they suffer from high traffic congestion, diminishing air quality, and steep capital requirements.",
            "Doddaballapur offers tranquility, cleaner air indices, mountain views of Makalidurga and Nandi Hills, and an unmatched quality of life for wellness-oriented families."
          ]
        },
        {
          id: 'sec-8',
          heading: 'What Should Buyers Check Before Purchasing a Plot?',
          paragraphs: [
            "When investing in North Bangalore land, legal due diligence is paramount. Prospective purchasers should consistently verify:",
            "1. Approval clearances from statutory urban development authorities (e.g., BIAAPA, DTCP, or BDA).\n2. RERA registration numbers with approved layout sanction drawings.\n3. Clear 30-year encumbrance certificates (EC) and direct Khata certificates.\n4. Verification of road widening buffer zones and environmental clearance."
          ]
        },
        {
          id: 'sec-9',
          heading: "The Bigger Picture: North Bangalore's Next Residential Chapter",
          paragraphs: [
            "As Bangalore cements its position as India's premier innovation capital, growth towards the North is an unavoidable demographic reality. Doddaballapur stands at the threshold of this transformative cycle.",
            "Whether you are planning a serene weekend sanctuary, a family homestead surrounded by nature, or an appreciating portfolio asset, Doddaballapur and Samrudhi Sylvan Retreat represent an inspired path forward."
          ]
        }
      ]
    }
  },
  // {
  //   id: 'growing-demand-gated-community-villas-south-bangalore',
  //   slug: 'the-growing-demand-for-gated-community-villas-in-south-bangalore',
  //   title: 'The Growing Demand for Gated Community Villas in South Bangalore',
  //   category: 'REAL ESTATE',
  //   date: 'September 16, 2026',
  //   readTime: '7 min read',
  //   author: 'MRCL Editorial Team',
  //   authorRole: 'Editorial Advisory',
  //   image: gatedEntranceImg,
  //   imageCaption: 'Grand entrance archway and landscaped security gates at a modern residential community.',
  //   excerpt: 'South Bangalore is witnessing growing interest in gated community villas, as families look for spacious homes, privacy, security, modern amenities and a better lifestyle.',
  //   tableOfContents: [
  //     { id: 'sec-gated-1', title: 'Why Homebuyers Seek Gated Villa Enclaves' },
  //     { id: 'sec-gated-2', title: 'Privacy and Community: The Dual Advantage' },
  //     { id: 'sec-gated-3', title: 'Long-term Capital Appreciation Trends' },
  //     { id: 'sec-gated-4', title: 'Security, Shared Amenities, and Wellness' },
  //   ],
  //   content: {
  //     introduction: [
  //       'South Bangalore is witnessing growing interest in gated community villas, as families look for spacious homes, privacy, security, modern amenities and a better lifestyle.',
  //       'Over the past three years, residential preferences among high-net-worth families and executive professionals have tilted decisively toward horizontal living formats with dedicated private gardens and open skies.'
  //     ],
  //     quote: 'Modern gated communities offer the intimacy of a standalone private residence combined with the communal safety and conveniences of a luxury resort.',
  //     sections: [
  //       {
  //         id: 'sec-gated-1',
  //         heading: 'Why Homebuyers Seek Gated Villa Enclaves',
  //         paragraphs: [
  //           'Density fatigue in central urban sectors has driven families outward. Parents want open spaces where children can cycle safely without vehicular traffic hazards, alongside senior-friendly walking tracks.',
  //           'Villas with manicured lawns and private driveways satisfy this lifestyle upgrade while preserving connectivity to premier international schools and healthcare hubs.'
  //         ]
  //       },
  //       {
  //         id: 'sec-gated-2',
  //         heading: 'Privacy and Community: The Dual Advantage',
  //         paragraphs: [
  //           'A gated enclave balances individual solitude with an active, like-minded social ecosystem. State-of-the-art clubhouses host tennis leagues, weekend farmers markets, and coworking lounges.'
  //         ]
  //       },
  //       {
  //         id: 'sec-gated-3',
  //         heading: 'Long-term Capital Appreciation Trends',
  //         paragraphs: [
  //           'Limited land supply in well-connected southern and northern quadrants ensures that horizontal villa developments demonstrate superior land value escalation compared to aging apartment complexes.'
  //         ]
  //       },
  //       {
  //         id: 'sec-gated-4',
  //         heading: 'Security, Shared Amenities, and Wellness',
  //         paragraphs: [
  //           'With round-the-clock perimeter surveillance, biometric access control, power backup, and dedicated facility managers, villa communities offer total peace of mind for traveling professionals.'
  //         ]
  //       }
  //     ]
  //   }
  // },
  // {
  //   id: 'why-plots-are-becoming-attractive-modern-buyers',
  //   slug: 'why-plots-are-becoming-attractive-to-modern-buyers',
  //   title: 'Why Plots Are Becoming Attractive to Modern Buyers',
  //   category: 'LIFESTYLE',
  //   date: 'September 10, 2026',
  //   readTime: '6 min read',
  //   author: 'MRCL Editorial Team',
  //   authorRole: 'Editorial Advisory',
  //   image: plottedSunsetImg,
  //   imageCaption: 'Demarcated plots with asphalt avenues and manicured green verges under sunset skies.',
  //   excerpt: "From lifestyle flexibility to long-term value, plotted developments are winning the preference of today's homebuyers and investors.",
  //   tableOfContents: [
  //     { id: 'sec-plot-1', title: 'The Architectural Freedom of Building on Your Own Land' },
  //     { id: 'sec-plot-2', title: 'Zero Maintenance Burden Prior to Construction' },
  //     { id: 'sec-plot-3', title: 'High Liquidity and Higher Yield Potential' },
  //     { id: 'sec-plot-4', title: 'Generational Wealth and Heritage Value' },
  //   ],
  //   content: {
  //     introduction: [
  //       "From lifestyle flexibility to long-term value, plotted developments are winning the preference of today's homebuyers and investors.",
  //       "In a market full of standard 3BHK flat layouts, modern homebuyers are seeking individuality. Plotted communities allow homeowners to craft custom architectural statements aligned with their unique lifestyle requirements.",
  //       "Whether you wish to build an eco-friendly biophilic villa with solar panels or a courtyard bungalow for multi-generational living, plots afford ultimate creative liberty."
  //     ],
  //     quote: "You buy a plot not just as square footage, but as a blank canvas for your family's generational legacy.",
  //     sections: [
  //       {
  //         id: 'sec-plot-1',
  //         heading: 'The Architectural Freedom of Building on Your Own Land',
  //         paragraphs: [
  //           'Prefabricated floor plans rarely accommodate every personal passion—be it a private music studio, double-height library, or an organic kitchen garden. When you own the plot, you and your architect call all the shots.'
  //         ]
  //       },
  //       {
  //         id: 'sec-plot-2',
  //         heading: 'Zero Maintenance Burden Prior to Construction',
  //         paragraphs: [
  //           'Purchasing an apartment requires instant maintenance payouts and sinking funds, whereas an approved residential plot in a gated community incurs low recurring holding costs while the underlying land appreciates.'
  //         ]
  //       },
  //       {
  //         id: 'sec-plot-3',
  //         heading: 'High Liquidity and Higher Yield Potential',
  //         paragraphs: [
  //           'Historical data across Bangalore proves that plotted lands in emerging infrastructure corridors yield higher compounding returns over a 5 to 7 year horizon compared to multi-story units.'
  //         ]
  //       },
  //       {
  //         id: 'sec-plot-4',
  //         heading: 'Generational Wealth and Heritage Value',
  //         paragraphs: [
  //           'Land is everlasting. Building a home tailored to family values creates an emotional anchor that can be cherished across generations.'
  //         ]
  //       }
  //     ]
  //   }
  // },
  // {
  //   id: 'why-villas-south-bangalore-attracting-buyers',
  //   slug: 'why-villas-in-south-bangalore-are-attracting-homebuyers-and-investors',
  //   title: 'Why Villas in South Bangalore Are Attracting Homebuyers and Investors',
  //   category: 'LIFESTYLE',
  //   date: 'September 03, 2026',
  //   readTime: '6 min read',
  //   author: 'MRCL Editorial Team',
  //   authorRole: 'Editorial Advisory',
  //   image: luxuryVillaImg,
  //   imageCaption: 'Contemporary luxury villa architecture with private garden lawn and terrace decks.',
  //   excerpt: 'South Bangalore offers the perfect mix of lifestyle, connectivity and long-term value, making it a top choice for homebuyers and investors looking for premium villas.',
  //   tableOfContents: [
  //     { id: 'sec-villa-1', title: 'Lifestyle Prestige and Space Requirements' },
  //     { id: 'sec-villa-2', title: 'Strategic Connectivity to Bannerghatta and Electronic City' },
  //     { id: 'sec-villa-3', title: 'Biophilic Design and Outdoor Living' },
  //   ],
  //   content: {
  //     introduction: [
  //       'South Bangalore offers the perfect mix of lifestyle, connectivity and long-term value, making it a top choice for homebuyers and investors looking for premium villas.',
  //       'South Bangalore has long maintained a reputation for lush tree-lined boulevards, established cultural heritage, and institutional stability. Now, modern luxury villas are redefining this legacy.'
  //     ],
  //     quote: 'The desire for personal sanctuary and green canopy living has turned villa living into the ultimate urban ambition.',
  //     sections: [
  //       {
  //         id: 'sec-villa-1',
  //         heading: 'Lifestyle Prestige and Space Requirements',
  //         paragraphs: [
  //           'With remote and hybrid executive work environments firmly entrenched, having private study rooms, outdoor patios, and personal fitness gyms has transformed from luxury into daily necessity.'
  //         ]
  //       },
  //       {
  //         id: 'sec-villa-2',
  //         heading: 'Strategic Connectivity to Bannerghatta and Electronic City',
  //         paragraphs: [
  //           'Smooth arterial connectivity via the NICE Road and upgraded expressways enables effortless transit between tranquil residential pockets and corporate offices.'
  //         ]
  //       },
  //       {
  //         id: 'sec-villa-3',
  //         heading: 'Biophilic Design and Outdoor Living',
  //         paragraphs: [
  //           'Seamless indoor-outdoor transitions, courtyard ventilation, and double-height light wells create a calm residential ambiance far removed from city hustle.'
  //         ]
  //       }
  //     ]
  //   }
  // },
  // {
  //   id: 'future-agricultural-land-investment-north-bangalore',
  //   slug: 'the-future-of-agricultural-land-investment-in-north-bangalore',
  //   title: 'The Future of Agricultural Land Investment in North Bangalore',
  //   category: 'INVESTMENT',
  //   date: 'August 28, 2026',
  //   readTime: '7 min read',
  //   author: 'MRCL Editorial Team',
  //   authorRole: 'Editorial Advisory',
  //   image: agriFarmlandImg,
  //   imageCaption: 'Fertile agricultural farmland and agro-plantations in the Doddaballapur countryside.',
  //   excerpt: 'With improving connectivity, infrastructure growth and rising demand for plotted developments, agricultural land in North Bangalore is becoming an attractive long-term investment option.',
  //   tableOfContents: [
  //     { id: 'sec-agri-1', title: 'Shift Toward Managed Farmlands and Weekend Homesteads' },
  //     { id: 'sec-agri-2', title: 'Legal Frameworks and Conversion Regulations in Karnataka' },
  //     { id: 'sec-agri-3', title: 'Sustainable High-Yield Agroforestry' },
  //   ],
  //   content: {
  //     introduction: [
  //       'With improving connectivity, infrastructure growth and rising demand for plotted developments, agricultural land in North Bangalore is becoming an attractive long-term investment option.',
  //       'Agricultural land around Bangalore is witnessing a paradigm shift. Buyers are no longer viewing farmland purely as agricultural holdings, but as productive weekend estates and strategic long-term reserves.'
  //     ],
  //     quote: 'Managed agricultural estates offer the romance of organic farming without the daily logistical strain.',
  //     sections: [
  //       {
  //         id: 'sec-agri-1',
  //         heading: 'Shift Toward Managed Farmlands and Weekend Homesteads',
  //         paragraphs: [
  //           'Urban dwellers seek a quiet sanctuary where they can grow fruit trees, harvest organic vegetables, and unplug on weekends. Professional property management organizations now maintain the land on behalf of plot owners.'
  //         ]
  //       },
  //       {
  //         id: 'sec-agri-2',
  //         heading: 'Legal Frameworks and Conversion Regulations in Karnataka',
  //         paragraphs: [
  //           'Recent amendments to Section 79A and 79B of the Karnataka Land Reforms Act have made non-agriculturists eligible to acquire agricultural parcels, expanding participation and liquidity.'
  //         ]
  //       },
  //       {
  //         id: 'sec-agri-3',
  //         heading: 'Sustainable High-Yield Agroforestry',
  //         paragraphs: [
  //           'Modern farmland models incorporate sandalwood, mahogany, and fruit orchards that generate periodic agricultural yields alongside natural capital appreciation.'
  //         ]
  //       }
  //     ]
  //   }
  // },
  // {
  //   id: 'benefits-living-in-north-bangalore',
  //   slug: 'the-benefits-of-living-in-north-bangalore',
  //   title: 'The Benefits of Living in North Bangalore',
  //   category: 'REAL ESTATE',
  //   date: 'August 20, 2026',
  //   readTime: '5 min read',
  //   author: 'MRCL Editorial Team',
  //   authorRole: 'Editorial Advisory',
  //   image: northBangaloreHillsImg,
  //   imageCaption: 'Scenic elevated view of granite hills and emerging master-planned enclaves in North Bangalore.',
  //   excerpt: 'Better connectivity, open spaces, modern infrastructure and growing employment hubs make North Bangalore an ideal place to live and invest.',
  //   tableOfContents: [
  //     { id: 'sec-north-1', title: 'Airport Proximity and Global Accessibility' },
  //     { id: 'sec-north-2', title: 'Cleaner Micro-Climate and Natural Hillocks' },
  //     { id: 'sec-north-3', title: 'Emerging Aerotropolis and Tech Corridors' },
  //   ],
  //   content: {
  //     introduction: [
  //       'Better connectivity, open spaces, modern infrastructure and growing employment hubs make North Bangalore an ideal place to live and invest.',
  //       "North Bangalore is widely acknowledged as the epicenter of Bangalore's future. From wide signal-free expressways to global technology campuses, it offers a quality of life unmatched by congested older localities."
  //     ],
  //     quote: 'Living in North Bangalore combines the freshness of nature with the unmatched momentum of India’s top economic growth corridor.',
  //     sections: [
  //       {
  //         id: 'sec-north-1',
  //         heading: 'Airport Proximity and Global Accessibility',
  //         paragraphs: [
  //           'Frequent corporate travelers save dozens of hours every month thanks to immediate access to Kempegowda International Airport via NH 44 and peripheral link arteries.'
  //         ]
  //       },
  //       {
  //         id: 'sec-north-2',
  //         heading: 'Cleaner Micro-Climate and Natural Hillocks',
  //         paragraphs: [
  //           'Surrounded by Nandi Hills and Makalidurga reserve forests, North Bangalore experiences cooler year-round temperatures, lower particulate pollution, and abundant open recreation reserves.'
  //         ]
  //       },
  //       {
  //         id: 'sec-north-3',
  //         heading: 'Emerging Aerotropolis and Tech Corridors',
  //         paragraphs: [
  //           'The emergence of world-class research institutes, high-speed rail corridors, and multinational manufacturing hubs guarantees strong employment growth and rental resilience.'
  //         ]
  //       }
  //     ]
  //   }
  // }
];

// Recent Posts as shown in the design sidebar
export const RECENT_POSTS_DATA = [
  {
    id: 'why-doddaballapur-is-emerging-as-residential-destination',
    title: 'Why Doddaballapur Is Emerging as a Residential Destination in North Bangalore',
    date: 'September 21, 2026',
    image: doddaballapurImg,
    slug: 'why-doddaballapur-is-emerging-as-a-residential-destination-in-north-bangalore',
  },
  {
    id: 'growing-demand-gated-community-villas-south-bangalore',
    title: 'The Growing Demand for Gated Community Villas in South Bangalore',
    date: 'September 16, 2026',
    image: gatedEntranceImg,
    slug: 'the-growing-demand-for-gated-community-villas-in-south-bangalore',
  },
  {
    id: 'why-villas-south-bangalore-attracting-buyers',
    title: 'Why Villas in South Bangalore Are Attracting Homebuyers and Investors',
    date: 'September 10, 2026',
    image: luxuryVillaImg,
    slug: 'why-villas-in-south-bangalore-are-attracting-homebuyers-and-investors',
  },
  {
    id: 'future-agricultural-land-investment-north-bangalore',
    title: 'The Future of Agricultural Land Investment in North Bangalore',
    date: 'September 03, 2026',
    image: agriFarmlandImg,
    slug: 'the-future-of-agricultural-land-investment-in-north-bangalore',
  },
];

// Related Blogs as shown in the design sidebar of Blog Details
export const RELATED_BLOGS_DATA = [
  {
    id: 'growing-demand-gated-community-villas-south-bangalore',
    title: 'The Growing Demand for Gated Community Villas in South Bangalore',
    date: 'September 16, 2026',
    image: gatedEntranceImg,
    slug: 'the-growing-demand-for-gated-community-villas-in-south-bangalore',
  },
  {
    id: 'why-villas-south-bangalore-attracting-buyers',
    title: 'Why Villas in South Bangalore Are Attracting Homebuyers and Investors',
    date: 'September 10, 2026',
    image: luxuryVillaImg,
    slug: 'why-villas-in-south-bangalore-are-attracting-homebuyers-and-investors',
  },
  {
    id: 'future-agricultural-land-investment-north-bangalore',
    title: 'The Future of Agricultural Land Investment in North Bangalore',
    date: 'September 03, 2026',
    image: agriFarmlandImg,
    slug: 'the-future-of-agricultural-land-investment-in-north-bangalore',
  },
];
