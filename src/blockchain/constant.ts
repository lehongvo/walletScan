const privacyStatement = {
  blockswap:
    'Blockswap RPC does not track any kind of user information at the builder RPC level (i.e. IP, location, etc.) nor is any information logged. All blocks are encrypted when passed between proposers, builders, relayers, and Ethereum. It does not transmit any transactions to the relayer. We use analytical cookies to see which content on the Site is highly frequented and also to analyze if content should be updated or improved. These cookies process and save data like your browser type, referrer URLs, operating system, date/time stamp, views and clicks on the Site, and your (truncated) IP address. For more information please visit: https://docs.pon.network/pon/privacy',
  '48Club':
    "IP addresses will be read for rate-limit purpose without being actively stored at application layer. Also notice that we don't actively purge user footprint in lower-level protocol.",
  unitedbloc:
    'UnitedBloc does not collect or store any PII information. UnitedBloc does use IP addresses and transaction requests solely for service management purposes. Performance measurements such as rate limiting and routing rules require the analysis of IP addresses and response time measurements require the analysis of transaction requests. UnitedBloc does not and will never use RPC requests to front run transactions.',
  glc: 'The types of Personal Data that we collect directly from you or from third parties depend on the circumstances of collection and on the nature of the service requested or transaction undertaken. It may include (but is not limited to Personal information that links back to an individual, e.g. name, gender, date of birth, and other personal identification numbers Contact information, e.g. address phone number and email address Technical information e.g IP address for API services and login Statistical data such as website visits, for example hits to the GLCscan websie. (check out our privacy statement here: https://glscan.io/Policy)',
  ankr: 'For service delivery purposes, we temporarily record IP addresses to set usage limits and monitor for denial of service attacks against our infrastructure. Though we do look at high-level data around the success rate of transactions made over the blockchain RPC, we do not correlate wallet transactions made over the infrastructure to the IP address making the RPC request. Thus, we do not store, exploit, or share any information regarding Personal Identifiable Information (PII), including wallet addresses. https://www.ankr.com/blog/ankrs-ip-address-policy-and-your-privacy/',
  alchemy:
    'We may collect certain information automatically when you use our Services, such as your Internet protocol (IP) address, user settings, MAC address, cookie identifiers, mobile carrier, mobile advertising and other unique identifiers, browser or device information, location information (including approximate location derived from IP address), and Internet service provider. https://www.alchemy.com/policies/privacy-policy',
  nodereal: `We may automatically record certain information about how you use our Sites (we refer to this information as "Log Data"). Log Data may include information such as a user's Internet Protocol (IP) address, device and browser type, operating system, the pages or features of our Sites to which a user browsed and the time spent on those pages or features, the frequency with which the Sites are used by a user, search terms, the links on our Sites that a user clicked on or used, and other statistics. We use this information to administer the Service and we analyze (and may engage third parties to analyze) this information to improve and enhance the Service by expanding its features and functionality and tailoring it to our users' needs and preferences. https://nodereal.io/terms`,
  publicnode: `We do not store or track any user data with the exception of data that will be public on chain. We do not correlate wallets address's with IP's,  any data which is needed to transact is deleted after 24 hours. We also do no use any Analytics or 3rd party website tracking. https://www.publicnode.com/privacy`,
  onerpc:
    'With the exception of data that will be public on chain, all the other metadata / data should remain private to users and other parties should not be able to access or collect it. 1RPC uses many different techniques to prevent the unnecessary collection of user privacy, which prevents tracking from RPC providers. https://docs.1rpc.io/technology/zero-tracking',
  builder0x69: 'Private transactions / MM RPC: https://twitter.com/builder0x69',
  MEVBlockerRPC:
    'Privacy notice: MEV Blocker RPC does not store any kind of user information (i.e. IP, location, user agent, etc.) in any data bases. Only transactions are preserved to be displayed via status endpoint like https://rpc.mevblocker.io/tx/0x627b09d5a9954a810cd3c34b23694439da40558a41b0d87970f2c3420634a229. Connect to MEV Blocker via https://rpc.mevblocker.io',
  flashbots:
    'Privacy notice: Flashbots Protect RPC does not track any kind of user information (i.e. IP, location, etc.). No user information is ever stored or even logged. https://docs.flashbots.net/flashbots-protect/rpc/quick-start',
  bloxroute:
    'We may collect information that is publicly available in a blockchain when providing our services, such as: Public wallet identifier of the sender and recipient of a transaction, Unique identifier for a transaction, Date and time of a transaction, Transaction value, along with associated costs, Status of a transaction (such as whether the transaction is complete, in-progress, or resulted in an error) https://bloxroute.com/wp-content/uploads/2021/12/bloXroute-Privacy-Policy-04-01-2019-Final.pdf',
  cloudflare:
    'Just as when you visit and interact with most websites and services delivered via the Internet, when you visit our Websites, including the Cloudflare Community Forum, we gather certain information and store it in log files. This information may include but is not limited to Internet Protocol (IP) addresses, system configuration information, URLs of referring pages, and locale and language preferences. https://www.cloudflare.com/privacypolicy/',
  blastapi:
    'All the information in our logs (log data) can only be accessed for the last 7 days at any certain time, and it is completely purged after 14 days. We do not store any user information for longer periods of time or with any other purposes than investigating potential errors and service failures. https://blastapi.io/privacy-policy',
  bitstack:
    'Information about your computer hardware and software may be automatically collected by BitStack. This information can include: your IP address, browser type, domain names, access times and referring website addresses. https://bitstack.com/#/privacy',
  pokt: "What We Do Not Collect: User's IP address, request origin, request data. https://www.blog.pokt.network/rpc-logging-practices/",
  zmok: `API requests - we do NOT store any usage data, additionally, we do not store your logs. No KYC - "Darknet" style of sign-up/sign-in. Only provider that provides Ethereum endpoints as TOR/Onion hidden service. Analytical data are stored only on the landing page/web.  https://zmok.io/privacy-policy`,
  infura:
    'We collect wallet and IP address information. The purpose of this collection is to ensure successful transaction propagation, execution, and other important service functionality such as load balancing and DDoS protection. IP addresses and wallet address data relating to a transaction are not stored together or in a way that allows our systems to associate those two pieces of data. We retain and delete user data such as IP address and wallet address pursuant to our data retention policy. https://consensys.net/blog/news/consensys-data-retention-update/',
  radiumblock:
    'Except for the data that is publicly accessible on the blockchain, RadiumBlock does not collect or keep any user information (like location, IP address, etc.) transmitted via our RPC. For more information about our customer privacy policy please visit https://radiumblock.com/privacy.html',
  etcnetworkinfo:
    'We do use analytics at 3rd party tracking websites (Google Analytics & Google Search Console) the following interactions with our systems are automatically logged when you access our services, such as your Internet Protocol (IP) address as well as accessed services and pages(Packet details are discarded / not logged!). Data redemption is varying based on traffic, but deleted after 31 days We do use these infos to improve our services.',
  omnia:
    'All the data and metadata remain private to the users. No third party is able to access, analyze or track it. OMNIA leverages different technologies and approaches to guarantee the privacy of their users, from front-running protection and private mempools, to obfuscation and random dispatching. https://blog.omniatech.io/how-omnia-handles-your-personal-data',
  blockpi:
    'We do not collect request data or request origin. We only temporarily record the request method names and IP addresses for 7 days to ensure our service functionality such as load balancing and DDoS protection. All the data is automatically deleted after 7 days and we do not store any user information for longer periods of time. https://blockpi.io/privacy-policy',
  payload:
    "Sent transactions are private: https://payload.de/docs. By default, no data is collected when using the RPC endpoint. If provided by the user, the public address for authentication is captured when using the RPC endpoint in order to prioritize requests under high load. This information is optional and solely provided at the user's discretion. https://payload.de/privacy/",
  /*gitshock:
      "We do not collect any personal data from our users. Our platform is built on blockchain technology, which ensures that all transactions are recorded on a public ledger that is accessible to all users. However, this information is anonymous and cannot be linked to any specific individual. https://docs.gitshock.com/users-guide/privacy-policy",*/ // website is down
  gashawk:
    'Sign-in with Ethereum on https://www.gashawk.io required prior to use. We may collect information that is publicly available in a blockchain when providing our services, such as: Public wallet identifier of the sender and recipient of a transaction, Unique identifier for a transaction, Date and time of a transaction, Transaction value, along with associated costs, Status of a transaction (such as whether the transaction is complete, in-progress, or resulted in an error), read the terms of service https://www.gashawk.io/#/terms and the privacy policy https://www.gashawk.io/#/privacy.',
  LiveplexOracleEVM:
    "Usage Data is collected automatically when using the Service. Usage Data may include information such as Your Device's Internet Protocol address (e.g., IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data. When You access the Service by or through a mobile device, we may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data. We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device. https://www.liveplex.io/privacypolicy.html",
  jellypool:
    "The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information. https://www.jellypool.xyz/privacy/",
  restratagem:
    'Only strictly functional data is automatically collected by the RPC. None of this data is directly exported or used for commercial purposes.',
  onfinality:
    'For the sole purpose of providing our service, we temporarily record IP addresses and origins to check against free limits, provide load balancing, prevent DOS attacks, and to determine where best to locate our nodes. We do not, and will never, correlate or link specific wallet addresses or transactions made over our infrastructure to the IP address or origin making the RPC request. After processing IP addresses, we discard the IP address value within 24 hours. Read more here: https://blog.onfinality.io/how-does-onfinality-deal-with-personal-information/',
  getblock:
    'We automatically collect certain information through cookies and similar technologies when you visit, use or navigate Website. This information does not reveal your specific identity (like your name or contact information) and does not allow to identify you. However, it may include device and usage information, such as your IP address, browser and device characteristics, its type and version, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Website, information about your interaction in our emails, and other technical and statistical information. This information is primarily needed to maintain the security and operation of our Website, and for our internal analytics and reporting purposes.Specifically, as the RPC provider, we do not log and store your IP address, country, location and similar data. https://getblock.io/privacy-policy/',
  teamblockchain:
    'We only store and track data that will be publicly available on the blockchain, and do not collect or retain any other user data. https://policy.teamblockchain.team/',
  getloop:
    "Loop Network follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. https://www.getloop.network/privacypolicy",
  ChainUpCloud:
    'We only collect user IP addresses for the purpose of rate limiting. For more information, please visit https://docs.chainupcloud.com/introduction/products/blockchain-api.',
  iota: 'When you visit any of our websites or use any features or resources available on or through our websites. When you visit our website, your device and browser may automatically disclose certain information (such as device type, operating system, browser type, browser settings, IP address, language settings, dates and times of connecting to a website and other technical communications information), some of which may constitute Personal Data; https://www.iota.org/privacy-policy',
  markrgo:
    'We only collect the minimum necessary information to provide our blockchain RPC service (caching). We do not use your data for commercial purposes. Any collected data is short-term and will be automatically deleted within 24 hours if not actively used. https://www.markr.io/privacy-policy',
  diamondswap:
    'We record limited metadata from requests. This data is stored for a maximum of 90 days and is solely used for debugging, identifying suspicious activity, and generating analytics.',
  unifra:
    'Regarding the RPC(remote procedure call) data, we do not collect request data or request origin. We temporarily record the request method names and IP addresses for 7 days to ensure our service functionality such as load balancing and DDoS protection. All the data is automatically deleted after 7 days. Only the amounts of RPC requests of users are recorded for accounting and billing purposes within longer time. https://unifra.io/',
  SFTProtocol:
    'Information collected automatically may include usage details, IP addresses, and information collected through cookies and other tracking technologies',
  gateway:
    'When you use our services or visit our websites, we may log your device’s IP address for debugging and security reasons. We may retain this information for up to twelve months',
  eosnetwork:
    'We collect information about your device and internet connection, including the device’s unique device identifier, IP address, operating system, and browser type, mobile network information',
  jfc: 'We do not collect request data or request origin. We only temporarily record the request method names and IP addresses for 7 days to ensure our service functionality such as load balancing and DDoS protection. All the data is automatically deleted after 7 days and we do not store any user information for longer periods of time. https://blockpi.io/privacy-policy',
  j2o: 'We do not collect request data or request origin. We only temporarily record the request method names and IP addresses for 7 days to ensure our service functionality such as load balancing and DDoS protection. All the data is automatically deleted after 7 days and we do not store any user information for longer periods of time. https://blockpi.io/privacy-policy',
  icplazaorg:
    'Please be aware that we collect your following information for the purpose of satisfying your needs in ICPlaza services(...) 1.We will collect your mobile device information, operation records, transaction records, wallet address and other personal information. https://www.icplaza.pro/privacy-policy',
  tenderly:
    'Additionally, if you are an Account Member, we may collect business and transactional data about you (and your business) that accumulates over the normal course of operation regarding providing our Services. This may include transaction records, stored files, user profiles, information about collaborators, analytics data, and other metrics, as well as other types of information created or generated by your interaction with our Services. https://tenderly.co/privacy-policy',
  soma: 'At SomaNetwork Mainnet Or Testnet, we are committed to protecting your privacy and ensuring the security of your data. This privacy policy summary outlines how we handle and protect your personal information when using our SomaNetwork Mainnet and Testnet services. Please note that this is a summary, and the full privacy policy should be reviewed for complete details soma. 1.We will collect your mobile device information, operation records, transaction records, wallet address and other personal information. https://soma-network.gitbook.io/soma-network/privacy-policy',
  chain49:
    'We collect device information and request metadata like IP address and User Agent for the purpose of load balancing and rate limiting. More info: https://chain49.com/privacy-policy',
  meowrpc:
    'With the exclusion of data that will be openly visible and available on the blockchain, MEOWRPC does not track or store any kind of user information (such as location, IP address, etc.) that passes through our RPC. For further details regarding our privacy practices, we encourage you to refer to our Privacy Policy. https://privacy.meowrpc.com',
  drpc: 'Specific types of technical data that we may temporarily log include:IP address (only in logs for redirecting requests to the nearest RPC nodes and rate limiting at the free level, which are cleared weekly). The user ID is hidden in the temporary logs, so it is not possible to link them to a specific user.https://drpc.org/privacy-policy',
  las: 'The Living Assets network does not store any personal data provided by its users. The network solely communicates on-chain signatures generated by web3 compatible wallets. However, it is possible that clients utilizing the network may necessitate supplementary information from their users to fulfill Know Your Customer obligations. In such cases, explicit consent from the users is mandatory, following standard procedures.',
  dwellir:
    'Except for the data that is publicly accessible on the blockchain, Dwellir does not collect or keep any user information (like location, IP address, etc.) transmitted via our RPC. For more information about our privacy methods, we suggest checking out our Privacy Policy at https://www.dwellir.com/privacy-policy',
  ard: ' (ARD) Ardenium Athena, we prioritize the protection of your privacy and the security of your data. This privacy policy summary provides an overview of how we handle and safeguard your personal information when you use our Ardenium Athena Explorer Blockchain services. However, please note that this is only a summary, and for complete details, we encourage you to review the full privacy policy available at soma, Information Collection: When you use our services, we may collect personal information, such as mobile device details, operation records, transaction records, wallet addresses, and other relevant data. For a more comprehensive understanding, please refer to our full privacy policy at https://docs.ardenium.wiki/ardenium-network/disclaimer.',
  zan: 'ZAN Node Service generally does not store any kind of user information (e.g. IP address, location, requst location, request data, etc.) that transits through our RPCs except for one senario ——we may track your IP address when you are using our RPCs and will delete it immediately when you stoping using our RPCs. To learn more, please review our privacy policy at https://a.zan.top/static/Privacy-Policy.pdf',
  quicknode:
    'Information about your computer hardware and software may be automatically collected by QuickNode. This information can include such details as your IP address, browser type, domain names, access times and referring website addresses.https://www.quicknode.com/privacy',
  chainstack:
    "We process certain personal data to provide you with the core functionality of our Services. Specifically, when you are: Using the Chainstack Console, we process your name, surname, email address (your account identifier), organization name, IP address, all HTTP headers (most importantly User-Agent), cookies; Using the Chainstack Blockchain infrastructure, we process nodes' token stored in Chainstack Vault, IP address and HTTP headers, request body, API token in Chainstack Vault.https://chainstack.com/privacy/",
  shardeum:
    'Shardeum follows a standard procedure of using log files. These files log visitors when they visit websites... The information collected by log files includes IP addresses, browser type, ISP, date and time stamp, referring/exit pages, and potentially the number of clicks.https://shardeum.org/privacy-policy/',
  softnote:
    'CrispMind collects personal information and uses cookies for site operation, analysis, and enhancement, with no control over third-party cookies.https://softnote.com/privacy/',
  lava: "We, our service providers, and our business partners may automatically log information about you, your computer or mobile device, and your interaction over time with the Service..., such as: Device data, ...your computer or mobile device's operating system type and version, manufacturer and model, browser type, screen resolution, RAM and disk size, CPU usage, device type (e.g., phone, tablet), IP address, unique identifiers (including identifiers used for advertising purposes), language settings, mobile device carrier, radio/network information (e.g., Wi-Fi, LTE, 3G), and general location information such as city, state or geographic area. https://www.lavanet.xyz/privacy-policy",
  merkle:
    'merkle does not track or store user information that transits through our RPCs (location, IP, wallet, etc).',
  liquify:
    'What data do we collect? Information collected automatically from your device, including IP address, device type,operating system, browser-type, broad geographic location and other technical information.https://www.liquify.io/privacy_policy.pdf',
  autostake:
    'When you browse our marketing pages, we’ll track that for statistical purposes (like conversion rates and to test new designs). We also store any information you volunteer, like surveys, for as long as it makes sense.https://autostake.com/privacy-policy',
  allthatnode: `In addition to the Personal Information, the Billing Information, and the Geolocational Information..., we automatically collect certain information when you use the Platform or Website: IP addresses, browser type and language...; information about a mobile device, including universally unique ID ("UUID"), platform type and version (e.g., iOS or Android), carrier and country location, hardware and processor information, and network type; and activity and usage information occurring via the Platform or Website.https://www.allthatnode.com/privacypolicy.dsrv`,
  lokibuilder:
    'Private transactions. No tracking of any kind (no IPs, location, wallet etc.): https://lokibuilder.xyz/privacy',
  cyphercore:
    'We collect information about you in various ways when you use our website. This includes information you provide directly to us, information we collect automatically, and information we obtain from third-party sources.https://cyphercore.io/privacy-policy/',
  hybrid:
    "HybridChain may automatically collect information regarding your computer hardware and software. This data can encompass details like your IP address, browser type, domain names, access times, and referring website addresses. This collection is in line with HybridChain's privacy policy and aims to optimize service provision and enhance user experience.https://docs.hybridchain.ai/privacy-policy",
  rivet:
    "We collect End Users’ information when they use our Customers’ web3-enabled websites, web applications, and APIs. This information may include but is not limited to IP addresses, system configuration information, and other information about traffic to and from Customers’ websites (collectively, 'Log Data'). We collect and use Log Data to operate, maintain, and improve our Services in performance of our obligations under our Customer agreements.https://rivet.cloud/privacy-policy",
  tokenview:
    'Information about your computer hardware and software may be automatically collected by Tokenview. This information can include such details as your IP address, browser type, domain names, access times, etc.https://services.tokenview.io/en/protocol',
  thirdweb:
    'Server logs automatically record information and details about your online interactions with us. For example, server logs may record information about your visit to our Site on a particular time and day and collect information such as your device ID and IP address.https://thirdweb.com/privacy',
  itrocket:
    'We do not track, store or process any personal data. You can check our privacy policy here: https://itrocket.net/privacy-policy/',
  nodeconnect:
    'We may collect information about how you interact with our Service. This may include information about your operating system, IP address, and browser type : https://nodeconnect.org/privacy.txt',
  decubate:
    "With the exception of data that will be public on chain, all the other metadata should remain private to users and other parties should not be able to access or collect it. Decubate doesn't store any data related to the user using the RPC. https://docs.decubate.com/rpc-privacy/",
  polysplit:
    'When you use our Service, we does not track the IP address or other user info.https://polysplit.cloud/privacy',
  nocturnDao:
    'As a fundamental practice, we do not collect, store, or process any personal information from our users. This non-collection policy ensures absolute data security and privacy for our users.https://nocturnode.tech/privacy',
  stateless:
    'Through any of our RPC API endpoints, whether public or private, we do not collect personal identifiers such as IP addresses, request origins, or specific request data. https://www.stateless.solutions/api-usage-privacy-policy',
  rpcgrid:
    'Only strictly functional data is automatically collected by the RPC. None of this data is directly exported or used for commercial purposes. https://rpcgrid.com/privacy-policy',
  stackup:
    'We collect Personal Data about you from the following categories of sources: You, When you provide such information directly to us, When you create an account or use our interactive tools and Services. When you use the Services and such information is collected automatically, Third Parties. Read more at https://www.stackup.sh/privacy',
  q: 'Our system records data and information about the computer used by the user automatically and with every visit on our website. The following data are collected: Information regarding the type and version of internet browser used to access the website, Operating system, IP address, Date and time of each access, Web page from which the user was redirected to our page, Web pages and resources that were visited, The data mentioned above are saved for a maximum time period of 30 days.https://q.org/privacy-policy',
  gasswap:
    'GasSwap nodes are provided as a public good and we never store any identifiable information for users. See https://docs.gasswap.org/gasswap/public-node',
  mxc: 'MXC MoonChain prioritizes user privacy and security, ensuring that no identifiable personal information is collected or stored when utilizing the AXS Layer3 Wallet. For complete details, please refer to our Privacy Policy at https://doc.mxc.com/docs/Resources/Privacy.',
  zeeve:
    'We may collect personal and sensitive personal information about you and store this information in connection with the provision and fulfilment of our services to you. Personal information may include: First name and last name,Email address, Location,IP Address://www.zeeve.io/privacy-policy/',
  tatum:
    "Tatum Technology s.r.o.'s policy respects your privacy regarding any information we may collect from you across our website, https://tatum.io, and other sites we own and operate. For more info, check https://tatum.io/privacy-policy .",
  nodifi:
    'Nodifi AI privacy policy request no privacy intrusion. We do not track IP, wallets, or the websites connected to our nodes. For more info check https://nodifi.ai/privacy-policy',
  taikotools:
    "We don't gather: User IP addresses, wallets, sources of requests and request content. For more info check https://taiko.tools/privacy-policy",
  sigmacore:
    'When you use our services, we do not track user info. Check out our privacy statement here: https://sigmacore.io/privacy-statement.pdf',
  graffiti:
    'Regarding RPC (remote procedure call) data, we do not collect request data or request origin. We temporarily record request method names and IP addresses for 7 days to ensure service functionality like load balancing and DDoS protection. All data is automatically deleted after 7 days, except for RPC request amounts, which are recorded for accounting and billing purposes for a longer period.https://graffiti.farm/privacy-policy/',
  NOWNodes:
    'We do not collect any financial data. Other data may be collected by third parties; we are not responsible for the actions of third parties. We do not collect any Personal data other than the Personal data set out in this Policy: https://nownodes.io/assets/data/privacy-pol.pdf. ',
  Envelop:
    'We, Envelop, do not collect and/or process any personal data other than publicly available data.  Check out our privacy statement here: https://docs.envelop.is/legal/privacy-policy',
  '4everland':
    'At 4EVERLAND, we are committed to protecting the privacy and security of your personal information. While we do collect certain data from our users, such as names, email addresses, account credentials, and usage information, we take robust measures to safeguard this data. We retain your personal information only for as long as your account remains active, plus an additional 6 months after closure: https://www.4everland.org/privacy-policy.',
  porters:
    "The Company does not store, process, or share personal data except the User's public Key tied to the PORTERs account. The User's public key is only stored and not shared at any time. The User may request the deletion of such data and the closure of the User's account via email to info@porters.xyz. The User understands that through their use of the Services and the Platform, They consent to the collection and use of this information in accordance with the Terms. https://porters.xyz/tos",
  conduit:
    'We retain Personal Data about you for as long as necessary to provide you with our services. In some cases we retain Personal Data for longer, if doing so is necessary to comply with our legal obligations, resolve disputes or collect fees owed, or is otherwise permitted or required by applicable law, rule or regulation.https://www.conduit.xyz/privacy-policy',
  nal: 'Sometimes we collect your information automatically when you interact with our services, and sometimes we collect your information directly from individuals. At times, we may collect information about an individual from other sources and third parties, even before our first direct interaction.https://www.nal.network/privacy.html',
  originstake:
    'At OriginStake, your privacy is our top priority. Our RPC services strictly handle on-chain information and never collect or store personal data such as IP addresses, wallet details, location, or any other identifying information. We do not track or log user interactions beyond what’s required for on-chain transactions. Any data temporarily collected is solely for maintaining service functionality, such as load balancing or DDoS protection, and is automatically deleted after 7 days. For more details: https://originstake.com/privacy',
  callstatic:
    'While making RPC requests, we do not log, store, or track your IP address, country, location, or any personal data. We log usage data to help you monitor app performance, such as request volume and success rates. These logs are associated solely with the unique API key generated for each of your endpoints, are anonymized, and are not stored in logs. https://callstatic.com/privacy-policy/',
  glidexp:
    'At Glide Protocol, we strictly adhere to privacy principles by ensuring that no IP addresses, geolocation data, financial information, or any personal data are logged, stored, or tracked during RPC requests. This is made possible by the decentralized nature of blockchain technology, which facilitates secure and transparent without the need for personal information, aligning with our commitment to safeguarding user privacy. For more information, visit https://glideprotocol.xyz/privacy-policy',
  bctech:
    "We do not collect, use, or share any personal data of BC Hyper Chain Blockchain RPC endpoint users. Specifically: We do not collect IP addresses, operating systems, or browser types.No device information, including application IDs, is collected. This commitment ensures that users' information remains private and secure when interacting with our RPC endpoint.For more visit https://versatizecoin.com/rpc_privacy.html",
  buildbear:
    "Usage Data is collected automatically when using the Service.Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.https://www.buildbear.io/privacy-policy",
  BlockRazor:
    'Privacy notice: BlockRazor RPC does not track any kind of user information (i.e. IP, location, etc.). Only information that is public on the blockchain are preserved, such as timestamp of a transaction. For more information please visit: https://blockrazor.gitbook.io/blockrazor/scutum-mev-protect-rpc#privacy-statement',
  numa: "Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers, and other diagnostic data. Check out our Terms of use: https://app.numa.network/terms-of-use/ and Privacy Policy: https://app.numa.network/privacy-policy/",
  Histori:
    'At Histori, we do not log, store, or track your IP address, country, location, or any personal data while making RPC requests and REST API calls. Learn more at: https://histori.xyz/support/privacy-policy',
  MemeCore:
    'We do not log, store, or track any user data without consent with exception of data publicly available on chain.',
  owlracle:
    'For rate-limiting and to prevent abuse, we collect and store the IP address of the user making the request. This data is stored for 1 month and is not shared with any third parties. https://owlracle.info/privacy',
  DTEAM:
    'We do not log, store, or track your IP, location, or personal data during RPC requests. https://dteam.tech/privacy-policy',
};

export const extraRpcs = [
  [
    {
      url: 'https://rpc.ankr.com/eth',
      tracking: 'limited',
      trackingDetails: privacyStatement.ankr,
    },
    {
      url: 'https://go.getblock.io/aefd01aa907c4805ba3c00a9e5b48c6b',
      tracking: 'none',
      trackingDetails: privacyStatement.getblock,
    },
    {
      url: 'https://eth-mainnet.nodereal.io/v1/1659dfb40aa24bbb8153a677b98064d7',
      tracking: 'yes',
      trackingDetails: privacyStatement.nodereal,
    },
    {
      url: 'https://ethereum-rpc.publicnode.com',
      tracking: 'none',
      trackingDetails: privacyStatement.publicnode,
    },
    {
      url: 'wss://ethereum-rpc.publicnode.com',
      tracking: 'none',
      trackingDetails: privacyStatement.publicnode,
    },
    {
      url: 'https://1rpc.io/eth',
      tracking: 'none',
      trackingDetails: privacyStatement.onerpc,
    },
    {
      url: 'https://rpc.builder0x69.io/',
      tracking: 'none',
      trackingDetails: privacyStatement.builder0x69,
    },
    {
      url: 'https://rpc.mevblocker.io',
      tracking: 'none',
      trackingDetails: privacyStatement.MEVBlockerRPC,
    },
    {
      url: 'https://rpc.flashbots.net/',
      tracking: 'none',
      trackingDetails: privacyStatement.flashbots,
    },
    {
      url: 'https://virginia.rpc.blxrbdn.com/',
      tracking: 'yes',
      trackingDetails: privacyStatement.bloxroute,
    },
    {
      url: 'https://uk.rpc.blxrbdn.com/',
      tracking: 'yes',
      trackingDetails: privacyStatement.bloxroute,
    },
    {
      url: 'https://singapore.rpc.blxrbdn.com/',
      tracking: 'yes',
      trackingDetails: privacyStatement.bloxroute,
    },
    {
      url: 'https://eth.rpc.blxrbdn.com/',
      tracking: 'yes',
      trackingDetails: privacyStatement.bloxroute,
    },
    {
      url: 'https://cloudflare-eth.com/',
      tracking: 'yes',
      trackingDetails: privacyStatement.cloudflare,
    },
    // RPC Fast -> Tracks IP
    {
      url: 'https://eth-mainnet.public.blastapi.io',
      tracking: 'limited',
      trackingDetails: privacyStatement.blastapi,
    },
    {
      url: 'https://api.securerpc.com/v1',
      tracking: 'unspecified',
    },
    {
      url: 'https://openapi.bitstack.com/v1/wNFxbiJyQsSeLrX8RRCHi7NpRxrlErZk/DjShIqLishPCTB9HiMkPHXjUM9CNM9Na/ETH/mainnet',
      tracking: 'yes',
      trackingDetails: privacyStatement.bitstack,
    },
    {
      url: 'https://eth-pokt.nodies.app',
      tracking: 'none',
      trackingDetails: privacyStatement.pokt,
    },
    {
      url: 'https://eth-mainnet-public.unifra.io',
      tracking: 'limited',
      trackingDetails: privacyStatement.unifra,
    },
    {
      url: 'https://ethereum.blockpi.network/v1/rpc/public',
      tracking: 'limited',
      trackingDetails: privacyStatement.blockpi,
    },
    {
      url: 'https://rpc.payload.de',
      tracking: 'none',
      trackingDetails: privacyStatement.payload,
    },
    {
      url: 'https://api.zmok.io/mainnet/oaen6dy8ff6hju9k',
      tracking: 'none',
      trackingDetails: privacyStatement.zmok,
    },
    {
      url: 'https://node.histori.xyz/eth-mainnet/8ry9f6t9dct1se2hlagxnd9n2a',
      tracking: 'none',
      trackingDetails: privacyStatement.Histori,
    },
    {
      url: 'https://eth-mainnet.g.alchemy.com/v2/demo',
      tracking: 'yes',
      trackingDetails: privacyStatement.alchemy,
    },
    {
      url: 'https://core.gashawk.io/rpc',
      tracking: 'yes',
      trackingDetails: privacyStatement.gashawk,
    },
    //"http://127.0.0.1:8545",
    //"https://yolo-intensive-paper.discover.quiknode.pro/45cad3065a05ccb632980a7ee67dd4cbb470ffbd/",
    //"https://api.mycryptoapi.com/eth",
    //"https://mainnet-nethermind.blockscout.com/",
    //"https://nodes.mewapi.io/rpc/eth",
    //"https://main-rpc.linkpool.io/",
    'https://mainnet.eth.cloud.ava.do/',
    'https://ethereumnodelight.app.runonflux.io',
    'https://eth-mainnet.rpcfast.com?api_key=xbhWBI1Wkguk8SNMu1bvvLurPGLXmgwYeC4S6g2H7WdwFigZSmPWVZRxrskEQwIf',
    //"http://18.211.207.34:8545",
    'https://main-light.eth.linkpool.io',
    {
      url: 'https://rpc.eth.gateway.fm',
      tracking: 'yes',
      trackingDetails: privacyStatement.gateway,
    },
    {
      url: 'https://rpc.chain49.com/ethereum?api_key=14d1a8b86d8a4b4797938332394203dc',
      tracking: 'yes',
      trackingDetails: privacyStatement.chain49,
    },
    {
      url: 'https://eth.meowrpc.com',
      tracking: 'none',
      trackingDetails: privacyStatement.meowrpc,
    },
    {
      url: 'https://eth.drpc.org',
      tracking: 'none',
      trackingDetails: privacyStatement.drpc,
    },
    {
      url: 'https://mainnet.gateway.tenderly.co',
      tracking: 'yes',
      trackingDetails: privacyStatement.tenderly,
    },
    {
      url: 'https://virtual.mainnet.rpc.tenderly.co/7355b215-ef17-4e3e-8f64-d494284ef18a',
      tracking: 'yes',
      trackingDetails: privacyStatement.tenderly,
    },
    {
      url: 'https://gateway.tenderly.co/public/mainnet',
      tracking: 'yes',
      trackingDetails: privacyStatement.tenderly,
    },
    {
      url: 'https://api.zan.top/eth-mainnet',
      tracking: 'limited',
      trackingDetails: privacyStatement.zan,
    },
    {
      url: 'https://eth-mainnet.diamondswap.org/rpc',
      tracking: 'limited',
      trackingDetails: privacyStatement.diamondswap,
    },
    'https://rpc.notadegen.com/eth',
    {
      url: 'https://eth.merkle.io',
      tracking: 'none',
      trackingDetails: privacyStatement.merkle,
    },
    {
      url: 'https://rpc.lokibuilder.xyz/wallet',
      tracking: 'none',
      trackingDetails: privacyStatement.lokibuilder,
    },
    {
      url: 'https://services.tokenview.io/vipapi/nodeservice/eth?apikey=qVHq2o6jpaakcw3lRstl',
      tracking: 'yes',
      trackingDetails: privacyStatement.tokenview,
    },
    {
      url: 'https://eth.nodeconnect.org/',
      tracking: 'yes',
      trackingDetails: privacyStatement.nodeconnect,
    },
    {
      url: 'https://api.stateless.solutions/ethereum/v1/demo',
      tracking: 'none',
      trackingDetails: privacyStatement.stateless,
    },
    {
      url: 'https://rpc.polysplit.cloud/v1/chain/1',
      tracking: 'none',
      trackingDetails: privacyStatement.polysplit,
    },
    {
      url: 'https://public.stackup.sh/api/v1/node/ethereum-mainnet',
      tracking: 'limited',
      trackingDetails: privacyStatement.stackup,
    },
    {
      url: 'https://ethereum-mainnet.gateway.tatum.io',
      tracking: 'yes',
      trackingDetails: privacyStatement.tatum,
    },
    {
      url: 'https://eth.nownodes.io',
      tracking: 'yes',
      trackingDetails: privacyStatement.NOWNodes,
    },
    {
      url: 'https://rpc.nodifi.ai/api/rpc/free',
      tracking: 'none',
      trackingDetails: privacyStatement.nodifi,
    },
    'https://ethereum.rpc.subquery.network/public',
    {
      url: 'https://rpc.graffiti.farm',
      tracking: 'limited',
      trackingDetails: privacyStatement.graffiti,
    },
    {
      url: 'https://rpc.public.curie.radiumblock.co/http/ethereum',
      tracking: 'none',
      trackingDetails: privacyStatement.radiumblock,
    },
    {
      url: 'https://eth-mainnet.4everland.org/v1/37fa9972c1b1cd5fab542c7bdd4cde2f',
      tracking: 'limited',
      trackingDetails: privacyStatement['4everland'],
    },
    {
      url: 'wss://eth-mainnet.4everland.org/ws/v1/37fa9972c1b1cd5fab542c7bdd4cde2f',
      tracking: 'limited',
      trackingDetails: privacyStatement['4everland'],
    },
    {
      url: 'https://rpc.public.curie.radiumblock.co/ws/ethereum',
      tracking: 'none',
      trackingDetails: privacyStatement.radiumblock,
    },
    {
      url: 'wss://ws-rpc.graffiti.farm',
      tracking: 'limited',
      trackingDetails: privacyStatement.graffiti,
    },
    {
      url: 'wss://ethereum.callstaticrpc.com',
      tracking: 'none',
      trackingDetails: privacyStatement.callstatic,
    },
    {
      url: 'https://eth.blockrazor.xyz',
      tracking: 'none',
      trackingDetails: privacyStatement.BlockRazor,
    },
    {
      url: 'https://endpoints.omniatech.io/v1/eth/mainnet/public',
      tracking: 'none',
      trackingDetails: privacyStatement.omnia,
    },
    {
      url: 'https://eth1.lava.build',
      tracking: 'yes',
      trackingDetails: privacyStatement.lava,
    },
    'https://0xrpc.io/eth',
    'wss://0xrpc.io/eth',
    {
      url: 'https://rpc.owlracle.info/eth/70d38ce1826c4a60bb2a8e05a6c8b20f',
      tracking: 'limited',
      trackingDetails: privacyStatement.owlracle,
    },
  ],
  [
    'https://bsctestapi.terminet.io/rpc',
    {
      url: 'https://bsc-testnet.public.blastapi.io',
      tracking: 'limited',
      trackingDetails: privacyStatement.blastapi,
    },
    {
      url: 'https://bsc-testnet-rpc.publicnode.com',
      tracking: 'none',
      trackingDetails: privacyStatement.publicnode,
    },
    {
      url: 'wss://bsc-testnet-rpc.publicnode.com',
      tracking: 'none',
      trackingDetails: privacyStatement.publicnode,
    },
    {
      url: 'https://api.zan.top/bsc-testnet',
      tracking: 'limited',
      trackingDetails: privacyStatement.zan,
    },
    {
      url: 'https://bsc-testnet.blockpi.network/v1/rpc/private',
      tracking: 'limited',
      trackingDetails: privacyStatement.blockpi,
    },
    {
      url: 'https://public.stackup.sh/api/v1/node/bsc-testnet',
      tracking: 'limited',
      trackingDetails: privacyStatement.stackup,
    },
    {
      url: 'https://bsc-testnet.4everland.org/v1/37fa9972c1b1cd5fab542c7bdd4cde2f',
      tracking: 'limited',
      trackingDetails: privacyStatement['4everland'],
    },
    {
      url: 'wss://bsc-testnet.4everland.org/ws/v1/37fa9972c1b1cd5fab542c7bdd4cde2f',
      tracking: 'limited',
      trackingDetails: privacyStatement['4everland'],
    },
    {
      url: 'https://endpoints.omniatech.io/v1/bsc/testnet/public',
      tracking: 'none',
      trackingDetails: privacyStatement.omnia,
    },
    {
      url: 'https://node.histori.xyz/bsc-testnet/8ry9f6t9dct1se2hlagxnd9n2a',
      tracking: 'none',
      trackingDetails: privacyStatement.Histori,
    },
    {
      url: 'https://bsc-testnet.drpc.org',
      tracking: 'none',
      trackingDetails: privacyStatement.drpc,
    },
    {
      url: 'wss://bsc-testnet.drpc.org',
      tracking: 'none',
      trackingDetails: privacyStatement.drpc,
    },
  ],
  [
    {
      url: 'https://rpc.ankr.com/polygon',
      tracking: 'limited',
      trackingDetails: privacyStatement.ankr,
    },
    'https://polygon-rpc.com',
    {
      url: 'https://rpc-mainnet.matic.quiknode.pro',
      tracking: 'yes',
      trackingDetails: privacyStatement.quicknode,
    },
    {
      url: 'https://polygon-pokt.nodies.app',
      tracking: 'none',
      trackingDetails: privacyStatement.pokt,
    },
    {
      url: 'https://polygon-mainnet.public.blastapi.io',
      tracking: 'limited',
      trackingDetails: privacyStatement.blastapi,
    },
    {
      url: 'https://1rpc.io/matic',
      tracking: 'none',
      trackingDetails: privacyStatement.onerpc,
    },
    'https://polygon-mainnet.rpcfast.com?api_key=xbhWBI1Wkguk8SNMu1bvvLurPGLXmgwYeC4S6g2H7WdwFigZSmPWVZRxrskEQwIf',
    {
      url: 'https://polygon-bor-rpc.publicnode.com',
      tracking: 'none',
      trackingDetails: privacyStatement.publicnode,
    },

    {
      url: 'wss://polygon-bor-rpc.publicnode.com',
      tracking: 'none',
      trackingDetails: privacyStatement.publicnode,
    },
    {
      url: 'https://polygon-mainnet.g.alchemy.com/v2/demo',
      tracking: 'yes',
      trackingDetails: privacyStatement.alchemy,
    },
    {
      url: 'https://polygon.blockpi.network/v1/rpc/private',
      tracking: 'limited',
      trackingDetails: privacyStatement.blockpi,
    },
    {
      url: 'https://go.getblock.io/02667b699f05444ab2c64f9bff28f027',
      tracking: 'yes',
      trackingDetails: privacyStatement.getblock,
    },
    {
      url: 'https://polygon.api.onfinality.io/public',
      tracking: 'limited',
      trackingDetails: privacyStatement.onfinality,
    },
    {
      url: 'https://polygon.rpc.blxrbdn.com/',
      tracking: 'yes',
      trackingDetails: privacyStatement.bloxroute,
    },
    {
      url: 'https://polygon.drpc.org',
      tracking: 'none',
      trackingDetails: privacyStatement.drpc,
    },
    {
      url: 'https://polygon.gateway.tenderly.co',
      tracking: 'yes',
      trackingDetails: privacyStatement.tenderly,
    },
    {
      url: 'https://gateway.tenderly.co/public/polygon',
      tracking: 'yes',
      trackingDetails: privacyStatement.tenderly,
    },
    {
      url: 'https://api.zan.top/polygon-mainnet',
      tracking: 'limited',
      trackingDetails: privacyStatement.zan,
    },
    {
      url: 'https://polygon.meowrpc.com',
      tracking: 'none',
      trackingDetails: privacyStatement.meowrpc,
    },
    {
      url: 'https://public.stackup.sh/api/v1/node/polygon-mainnet',
      tracking: 'limited',
      trackingDetails: privacyStatement.stackup,
    },
    {
      url: 'https://polygon-mainnet.gateway.tatum.io',
      tracking: 'yes',
      trackingDetails: privacyStatement.tatum,
    },
    'https://polygon.rpc.subquery.network/public',
    {
      url: 'https://polygon-mainnet.4everland.org/v1/37fa9972c1b1cd5fab542c7bdd4cde2f',
      tracking: 'limited',
      trackingDetails: privacyStatement['4everland'],
    },
    {
      url: 'wss://polygon-mainnet.4everland.org/ws/v1/37fa9972c1b1cd5fab542c7bdd4cde2f',
      tracking: 'limited',
      trackingDetails: privacyStatement['4everland'],
    },
    {
      url: 'https://endpoints.omniatech.io/v1/matic/mainnet/public',
      tracking: 'none',
      trackingDetails: privacyStatement.omnia,
    },
    {
      url: 'https://polygon.lava.build',
      tracking: 'yes',
      trackingDetails: privacyStatement.lava,
    },
    {
      url: 'https://node.histori.xyz/matic-mainnet/8ry9f6t9dct1se2hlagxnd9n2a',
      tracking: 'none',
      trackingDetails: privacyStatement.Histori,
    },
    {
      url: 'https://rpc.owlracle.info/poly/70d38ce1826c4a60bb2a8e05a6c8b20f',
      tracking: 'limited',
      trackingDetails: privacyStatement.owlracle,
    },
  ],
  [
    'https://rpc.soneium.org',
    {
      url: 'https://soneium.drpc.org',
      tracking: 'none',
      trackingDetails: privacyStatement.drpc,
    },
    {
      url: 'wss://soneium.drpc.org',
      tracking: 'none',
      trackingDetails: privacyStatement.drpc,
    },
  ],
  [
    'https://evm.astar.network/',
    'https://rpc.astar.network:8545',
    {
      url: 'https://astar.public.blastapi.io',
      tracking: 'limited',
      trackingDetails: privacyStatement.blastapi,
    },
    {
      url: 'https://getblock.io/nodes/bsc/',
      tracking: 'none',
      trackingDetails: privacyStatement.getblock,
    },
    {
      url: 'https://1rpc.io/astr',
      tracking: 'none',
      trackingDetails: privacyStatement.onerpc,
    },
    {
      url: 'https://astar-mainnet.g.alchemy.com/v2/demo',
      tracking: 'yes',
      trackingDetails: privacyStatement.alchemy,
    },
    {
      url: 'https://astar.api.onfinality.io/public',
      tracking: 'limited',
      trackingDetails: privacyStatement.onfinality,
    },
    {
      url: 'wss://astar.api.onfinality.io/public-ws',
      tracking: 'limited',
      trackingDetails: privacyStatement.onfinality,
    },
    {
      url: 'https://astar-rpc.dwellir.com',
      tracking: 'limited',
      trackingDetails: privacyStatement.dwellir,
    },
    {
      url: 'wss://astar-rpc.dwellir.com',
      tracking: 'limited',
      trackingDetails: privacyStatement.dwellir,
    },
    {
      url: 'https://astar.public.curie.radiumblock.co/http',
      tracking: 'none',
      trackingDetails: privacyStatement.radiumblock,
    },
    {
      url: 'https://astar.public.curie.radiumblock.co/ws',
      tracking: 'none',
      trackingDetails: privacyStatement.radiumblock,
    },

    {
      url: 'https://node.histori.xyz/astar-mainnet/8ry9f6t9dct1se2hlagxnd9n2a',
      tracking: 'none',
      trackingDetails: privacyStatement.Histori,
    },
  ],
  [
    'https://mainnet.base.org',
    'https://developer-access-mainnet.base.org',
    {
      url: 'https://base-mainnet.diamondswap.org/rpc',
      tracking: 'limited',
      trackingDetails: privacyStatement.diamondswap,
    },
    {
      url: 'https://base.blockpi.network/v1/rpc/public',
      tracking: 'limited',
      trackingDetails: privacyStatement.blockpi,
    },
    {
      url: 'https://1rpc.io/base',
      tracking: 'none',
      trackingDetails: privacyStatement.onerpc,
    },
    {
      url: 'https://base-pokt.nodies.app',
      tracking: 'none',
      trackingDetails: privacyStatement.pokt,
    },
    {
      url: 'https://base.meowrpc.com',
      tracking: 'none',
      trackingDetails: privacyStatement.meowrpc,
    },
    {
      url: 'https://base-mainnet.public.blastapi.io',
      tracking: 'limited',
      trackingDetails: privacyStatement.blastapi,
    },
    {
      url: 'https://base.gateway.tenderly.co',
      tracking: 'yes',
      trackingDetails: privacyStatement.tenderly,
    },
    {
      url: 'https://gateway.tenderly.co/public/base',
      tracking: 'yes',
      trackingDetails: privacyStatement.tenderly,
    },
    'https://rpc.notadegen.com/base',
    {
      url: 'https://base-rpc.publicnode.com',
      tracking: 'none',
      trackingDetails: privacyStatement.publicnode,
    },
    {
      url: 'wss://base-rpc.publicnode.com',
      tracking: 'none',
      trackingDetails: privacyStatement.publicnode,
    },
    {
      url: 'https://base.drpc.org',
      tracking: 'none',
      trackingDetails: privacyStatement.drpc,
    },
    {
      url: 'https://base.api.onfinality.io/public',
      tracking: 'limited',
      trackingDetails: privacyStatement.onfinality,
    },
    {
      url: 'https://public.stackup.sh/api/v1/node/base-mainnet',
      tracking: 'limited',
      trackingDetails: privacyStatement.stackup,
    },
    {
      url: 'https://base-mainnet.gateway.tatum.io',
      tracking: 'yes',
      trackingDetails: privacyStatement.tatum,
    },
    'https://base.rpc.subquery.network/public',
    {
      url: 'wss://base.callstaticrpc.com',
      tracking: 'none',
      trackingDetails: privacyStatement.callstatic,
    },
    {
      url: 'https://api.zan.top/base-mainnet',
      tracking: 'limited',
      trackingDetails: privacyStatement.zan,
    },
    {
      url: 'https://endpoints.omniatech.io/v1/base/mainnet/public',
      tracking: 'none',
      trackingDetails: privacyStatement.omnia,
    },
    {
      url: 'https://base.lava.build',
      tracking: 'yes',
      trackingDetails: privacyStatement.lava,
    },
    {
      url: 'https://rpc.numa.network/base',
      tracking: 'yes',
      trackingDetails: privacyStatement.numa,
    },
    {
      url: 'https://node.histori.xyz/base-mainnet/8ry9f6t9dct1se2hlagxnd9n2a',
      tracking: 'none',
      trackingDetails: privacyStatement.Histori,
    },
    'https://0xrpc.io/base',
    'wss://0xrpc.io/base',
    {
      url: 'https://rpc.owlracle.info/base/70d38ce1826c4a60bb2a8e05a6c8b20f',
      tracking: 'limited',
      trackingDetails: privacyStatement.owlracle,
    },
  ],
  [
    'https://api.avax.network/ext/bc/C/rpc',
    'https://avalanche.public-rpc.com',
    {
      url: 'https://rpc.ankr.com/avalanche',
      tracking: 'limited',
      trackingDetails: privacyStatement.ankr,
    },
    {
      url: 'https://ava-mainnet.public.blastapi.io/ext/bc/C/rpc',
      tracking: 'limited',
      trackingDetails: privacyStatement.blastapi,
    },
    'https://avalancheapi.terminet.io/ext/bc/C/rpc',
    {
      url: 'https://avalanche-c-chain-rpc.publicnode.com',
      tracking: 'none',
      trackingDetails: privacyStatement.publicnode,
    },
    {
      url: 'wss://avalanche-c-chain-rpc.publicnode.com',
      tracking: 'none',
      trackingDetails: privacyStatement.publicnode,
    },
    {
      url: 'https://1rpc.io/avax/c',
      tracking: 'none',
      trackingDetails: privacyStatement.onerpc,
    },
    {
      url: 'https://avalanche.blockpi.network/v1/rpc/private',
      tracking: 'limited',
      trackingDetails: privacyStatement.blockpi,
    },
    {
      url: 'https://avax-pokt.nodies.app/ext/bc/C/rpc',
      tracking: 'none',
      trackingDetails: privacyStatement.pokt,
    },
    {
      url: 'https://avalanche.api.onfinality.io/public/ext/bc/C/rpc',
      tracking: 'limited',
      trackingDetails: privacyStatement.onfinality,
    },
    {
      url: 'https://endpoints.omniatech.io/v1/avax/mainnet/public',
      tracking: 'none',
      trackingDetails: privacyStatement.omnia,
    },
    {
      url: 'https://avax.meowrpc.com',
      tracking: 'none',
      trackingDetails: privacyStatement.meowrpc,
    },
    {
      url: 'https://api.zan.top/avax-mainnet/ext/bc/C/rpc',
      tracking: 'limited',
      trackingDetails: privacyStatement.zan,
    },
    {
      url: 'https://avalanche.drpc.org',
      tracking: 'none',
      trackingDetails: privacyStatement.drpc,
    },
    {
      url: 'https://public.stackup.sh/api/v1/node/avalanche-mainnet',
      tracking: 'limited',
      trackingDetails: privacyStatement.stackup,
    },
    {
      url: 'https://avax-x-mainnet.gateway.tatum.io',
      tracking: 'yes',
      trackingDetails: privacyStatement.tatum,
    },
    {
      url: 'https://avalanche-mainnet.gateway.tenderly.co',
      tracking: 'yes',
      trackingDetails: privacyStatement.tenderly,
    },
    {
      url: 'https://node.histori.xyz/avalanche-mainnet/8ry9f6t9dct1se2hlagxnd9n2a',
      tracking: 'none',
      trackingDetails: privacyStatement.Histori,
    },
    'https://0xrpc.io/avax',
    'wss://0xrpc.io/avax',
    {
      url: 'https://rpc.owlracle.info/avax/70d38ce1826c4a60bb2a8e05a6c8b20f',
      tracking: 'limited',
      trackingDetails: privacyStatement.owlracle,
    },
  ],
];
