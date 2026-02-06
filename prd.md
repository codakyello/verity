TABLE OF CONTENTS
• 1. Executive Summary
• 2. Product Overview
• 3. Goals & Success Metrics
• 4. User Personas
• 5. User Journeys
• 6. Product Features (MVP)
• 7. Technical Architecture
• 8. API Specifications
• 9. Database Schema
• 10. Security & Compliance
• 11. Launch Timeline
• 12. Post-MVP Roadmap


1. EXECUTIVE SUMMARY
Product Name: VERITY

Tagline: Verified Properties. Verified Trust. Real Growth.

What is VERITY?

VERITY is a property verification platform and marketplace that connects developers, agents, buyers, investors, and lenders. The platform verifies property ownership and legitimacy, detects fraud, provides valuations, and enables faster property transactions across Nigeria's real estate market.

Problem Solved:

• Nigerian banks lose ₦100B+ annually to property fraud (no verification standard)
• Developers can't sell fast enough (properties lack trust signals)
• Agents waste time with unverified listings
• Buyers/investors risk ₦50M+ investments without independent verification
• No trusted property database or valuation standard exists
Solution:

• Centralized property verification platform (2-hour turnaround)
• Verified property badges (trust signal for all stakeholders)
• Fraud detection AI (catches double-selling, boundary disputes, price anomalies)
• AVM valuation model (independent property valuations)
• Marketplace connecting all stakeholders (developers, agents, buyers, investors)
• Data moat (5000+ verified properties = intelligence advantage)
MVP Launch Strategy:

• Developer-first (not banks first) - developers pay immediately
• Week 1-6: Build verification + marketplace
• Week 6: Launch with 5-10 developers + 5000 properties
• Week 7-8: Agents + buyers discover verified properties
• Month 2: Banks launch formally with API
Expected Outcomes (MVP):

• Week 6: ₦5M-₦15M revenue, 1000+ verified properties
• Month 2: ₦40M-₦85M/month, 5000+ verified properties
• Year 1: ₦1B-₦2.4B total revenue


2. PRODUCT OVERVIEW
VERITY consists of THREE integrated products:

PRODUCT 1: VERIFICATION ENGINE (Backend)

What it does:

• Verifies property ownership (title check, owner confirmation)
• Detects fraud (double-selling, boundaries, price anomalies)
• Generates AVM valuations (automated valuation model)
• Produces PDF reports (professional verification documents)
• Processes in batches (100+ properties daily)
Who uses it:

• Developers (bulk estate verification)
• Agents (individual property verification)
• Banks (mortgage collateral verification)
• Investors (investment property verification)
PRODUCT 2: MARKETPLACE (Frontend)

What it does:

• Property listings with verified badges
• Search and filter by location, price, type
• Property detail pages (photos, description, AVM value, verified status)
• Contact developer/agent directly
• Save favorite properties
• Compare properties
Who uses it:

• Agents (list and sell properties)
• Buyers (search verified properties)
• Investors (find investment opportunities)
• Sellers (list properties for sale)
PRODUCT 3: DEVELOPER PORTAL (Backend)

What it does:

• Bulk property upload (CSV format)
• Progress tracking (verification status per property)
• Dashboard (verified count, sales/leads tracking)
• Email notifications (property verified alerts)
• Property export (download verified lists)
Who uses it:

• Developers (upload estates, track progress)
• Property managers (submit properties for verification)


3. GOALS & SUCCESS METRICS
MVP GOALS (End of Week 6):

Product Goals:

• Build production-ready verification engine
• Build production-ready marketplace
• Build production-ready developer portal
• Test with 500+ properties
• Achieve 99.5% uptime
• Zero critical bugs at launch
User Acquisition Goals:

• 5-10 developers on platform
• 5000-10000 properties uploaded
• 1000+ properties verified
• 20-50 agents discovered
• 50+ agent logins
Financial Goals:

• ₦5M-₦15M revenue locked (developer fees)
• 10+ active sales conversations
• First commissions from marketplace sales
Technical Goals:

• API response time < 500ms
• Property search < 1 second (1000+ properties)
• Photo upload success > 95%
• Email delivery success > 98%
• Verification process 100+ properties/day
MONTH 2 GOALS (Post-MVP):

User Growth:

• 100+ agents on marketplace
• 5000+ properties verified
• 20-50 investors active
• 100+ daily active users
Financial:

• ₦40M-₦85M/month revenue
• 5 banks testing API
• 100+ active sales conversations
Product:

• Bank API production-ready
• Agent analytics dashboard
• Investor subscription tier
• Advanced search filters


4. USER PERSONAS
PERSONA 1: DEVELOPER (Primary MVP Customer)

Name: Chukwu (Real Estate Developer)

Demographics:

• Age: 45-55
• Role: Owner/Project Manager at estate company
• Experience: 15+ years in real estate
Goals:

• Digitize his 500-unit estate portfolio
• Get verified badges for properties
• Sell units 3-4x faster
• Reach more agents and buyers
• Track property progress in dashboard
Pain Points:

• Currently managing properties with spreadsheets
• Agents can't see full inventory
• Buyers skeptical without verification
• Taking months to sell individual units
• No way to demonstrate legitimacy
Behavior:

• Uses mobile and desktop
• Needs CSV upload for bulk operations
• Wants real-time progress tracking
• Ready to pay ₦10K-₦30K per unit
• Expects support during upload process
PERSONA 2: AGENT (Secondary MVP Customer)

Name: Grace (Real Estate Agent)

Demographics:

• Age: 30-40
• Role: Senior agent at brokerage
• Experience: 8+ years selling properties
Goals:

• Find verified properties to sell
• Close deals faster
• Show verified badge to boost buyer confidence
• Access developer portfolios directly
• Track leads and commissions
Pain Points:

• Spend time verifying properties manually
• Buyers skeptical about legitimacy
• Lost deals due to buyer concerns
• Can't find all available properties
• Manual contact process with developers
Behavior:

• Searches properties multiple times daily
• Needs mobile-friendly interface
• Wants to see AVM valuations
• Willing to pay ₦5K-₦10K per verification
• Expects fast lead response
PERSONA 3: BUYER (Secondary MVP Customer)

Name: Tunde (Property Buyer)

Demographics:

• Age: 35-45
• Income: ₦5M-₦20M/year
• Investment: ₦50M-₦200M property purchase
Goals:

• Find legitimate verified properties
• Get independent valuation before committing
• Avoid fraud and ownership disputes
• Make confident investment decisions
Pain Points:

• Risk losing ₦50M+ to fraud
• No way to verify property legitimacy
• Multiple ownership claims possible
• Price manipulation by sellers
• Manual verification process takes weeks
Behavior:

• Searches properties on mobile
• Compares prices and valuations
• Calls agents to schedule viewings
• Willing to pay ₦10K-₦15K for verification
• Values security and official verification
PERSONA 4: BANK (Month 2 Launch)

Name: Bola (Bank Mortgage Officer)

Demographics:

• Age: 35-50
• Role: Senior mortgage officer
• Experience: 10+ years in lending
Goals:

• Verify mortgage collateral quickly (not 2-4 weeks)
• Reduce property fraud in loan portfolio
• Make faster lending decisions
• Lower risk on property-secured loans
Pain Points:

• Current verification takes 2-4 weeks
• Bank loses ₦100B+ annually to fraud
• Property disputes delay closings
• No independent valuation standard
• Manual verification process is bottleneck
Behavior:

• Uses desktop and occasional mobile
• Needs API integration (automated)
• Wants batch processing (100+ properties)
• Pays ₦300K-₦500K/month subscription
• Expects bank-grade security and SLA


5. USER JOURNEYS
JOURNEY 1: DEVELOPER UPLOADS ESTATE

Step 1: Registration (Day 1)

• Developer creates account on Verity
• Enters company info, estate details
• Receives API key for bulk uploads
Step 2: Prepare Data (Day 2-3)

• Developer compiles property list as CSV
• Fields: address, GPS, photos, description, ownership docs
• Validates CSV format
Step 3: Upload (Day 4)

• Developer uploads CSV on Verity portal
• See upload progress
• Receive confirmation
Step 4: Verification (Day 5-7)

• Properties enter verification queue
• Batch verification process runs
• Developer sees real-time progress on dashboard
• Gets email notification: "100 properties verified!"
Step 5: Verified Properties Live (Day 7)

• All properties get "Verity Verified" badge
• Properties appear on marketplace
• Agents can see and list properties
• Developer tracks sales/leads in dashboard
JOURNEY 2: AGENT FINDS & LISTS PROPERTY

Step 1: Browse Marketplace (Ongoing)

• Agent logs into Verity marketplace
• Searches by location, price, type
• Sees 1000+ verified properties
Step 2: Review Property Details (5 minutes)

• Clicks property
• Sees verified badge, AVM valuation, photos, description
• Sees fraud detection flags (if any)
• Reviews developer contact info
Step 3: Contact Developer (5 minutes)

• Clicks "Contact Developer" button
• Sends inquiry message
• Developer responds (usually same day)
Step 4: List on Marketplace (10 minutes)

• Agent lists property on marketplace
• Verified badge automatically applied
• Property visible to 100+ agents, 1000+ buyers
Step 5: Generate Leads (Ongoing)

• Buyers contact agent about property
• Agent schedules viewings
• Property sells 30% faster (verified badge helps)
• Agent earns commission
JOURNEY 3: BUYER SEARCHES & PURCHASES

Step 1: Search (5 minutes)

• Buyer opens Verity marketplace
• Searches by location: "Lekki, Lagos"
• Filters: ₦50M-₦100M price range, 3+ bedrooms
• Sees 50+ verified properties
Step 2: Review Properties (10 minutes)

• Clicks property, reviews details
• Sees verified badge (trust signal)
• Sees AVM valuation: ₦75M (asks price ₦70M)
• Reviews fraud detection (no red flags)
• Views photos from multiple angles
Step 3: Request Verification (Optional, 5 minutes)

• Clicks "Verify This Property" button
• Pays ₦10K-₦15K
• Receives detailed verification report (2 hours)
• Report confirms ownership, detects any issues
Step 4: Contact Agent (5 minutes)

• Clicks "Contact Agent" button
• Messages agent, schedules viewing
Step 5: Purchase (Ongoing)

• Views property, negotiates price
• Makes confident purchase decision (verified property)
• Closes deal faster (no verification delays)


6. PRODUCT FEATURES (MVP)
DEVELOPER PORTAL FEATURES

Authentication & Account Management:

• Sign up / login
• Profile management
• Company information
• API key generation
Property Management:

• CSV bulk upload (address, GPS, photos, description)
• Property list view (all uploaded properties)
• Status tracking (pending, verified, rejected)
• Edit property details
• Upload additional photos/documents
Dashboard:

• Total properties count
• Verified count and percentage
• Properties by status (pending, verified, rejected)
• Daily verification rate
• Sales/leads tracking (basic)
• Revenue summary (optional)
Notifications:

• Property verified email
• Inquiry received notification
• Daily summary email
• In-app notifications
Reporting:

• Download verified property list
• Export CSV with details
• Verification report (PDF)
MARKETPLACE FEATURES

Authentication & Discovery:

• Sign up / login (agents, buyers, investors)
• Browse properties without login (public)
• Search by location, price, type
• Advanced filters (bedrooms, amenities, price range)
• Sort by price, newest, verified badge
Property Listing:

• Property detail page with photos (carousel)
• Property description
• Verified badge (trust signal)
• AVM valuation display
• Fraud detection flags (if any)
• Developer name and contact info
• Agent name and contact info
Property Interaction:

• Save property to favorites
• Compare properties (side-by-side)
• Request verification (buyer pays ₦10K-₦15K)
• Contact developer/agent
• Schedule viewing
• Share property on WhatsApp/email
User Profiles:

• Agent profile (properties listed, reviews, contact)
• Buyer profile (favorites, saved searches)
• Investor profile (watchlist, investment history)
• Seller profile (properties for sale)
• Seller profile (properties for sale)

### UX Design Decisions:

**Search-First Paradigm (Filter Strategy)**
*   **Decision**: Adopted the Zillow/Realtor.com model where the Search Box *is* the location filter.
*   **Rationale**: Adding a separate "Location" dropdown in the filter bar is redundant and clutters the UI when the user has already defined their context (e.g., "Lagos") via the search bar.
*   **Implementation**:
    *   **Hero Search / Header Search**: Sets the Location Context.
    *   **Filter Bar**: Strictly for refining attributes (Price, Beds, Type).
    *   **Goal**: Maintain a clean, premium aesthetic with focused user intent.

VERIFICATION ENGINE FEATURES

Property Verification:

• Address standardization (Google Maps API)
• GPS verification (confirm property exists)
• Ownership verification (title check, owner name validation)
• Multiple ownership check (detect double-selling)
Fraud Detection:

• Double-selling detection (same address owned by multiple people)
• Boundary dispute check (GPS proximity analysis)
• Price anomaly detection (compare to nearby properties)
• Fraudster developer flagging (known bad actors)
Valuation:

• AVM model (comparable property analysis)
• Market value estimation (75-80% accuracy)
• Price confidence score (0-100%)
• Appreciation trends (optional)
Reporting:

• PDF verification report (4-6 pages)
• Executive summary
• Detailed findings
• Fraud risk assessment (Red/Yellow/Green)
• AVM valuation with confidence
• Final recommendation (APPROVE/CONDITIONAL/DENY)
Processing:

• Batch processing (100+ properties daily)
• Individual verification (2-hour turnaround)
• 2-hour standard / 1-hour priority
• Error handling and retry logic


7. TECHNICAL ARCHITECTURE
FRONTEND STACK:

• Framework: React.js
• Styling: Tailwind CSS
• Maps: Mapbox
• State: Redux
• Data Fetching: React Query
• Deployment: AWS S3 + CloudFront
BACKEND STACK:

• Runtime: Node.js
• Framework: Express.js
• Database: PostgreSQL (relational)
• Cache: Redis
• File Storage: AWS S3
• Email: SendGrid
• Deployment: AWS EC2 + Docker
ML/AI STACK:

• Language: Python
• AVM Model: TensorFlow
• Fraud Detection: Scikit-learn
• Deployment: AWS Lambda / SageMaker
• Integration: REST API from main backend
INFRASTRUCTURE:

• Cloud: AWS
• Compute: EC2
• Database: RDS (PostgreSQL)
• Storage: S3
• Containerization: Docker
• Orchestration: Manual (scale as needed)
• CI/CD: GitHub Actions
• Monitoring: CloudWatch
• Logging: CloudWatch Logs
• Backup: AWS Backup
SECURITY:

• Authentication: JWT tokens
• HTTPS: SSL/TLS encryption
• Database: Encrypted at rest
• API Rate Limiting: 1000 req/min per user
• CORS: Configured for production domains
• Input Validation: Server-side validation
• SQL Injection Protection: Parameterized queries


8. API SPECIFICATIONS
BASE URL: https://api.verity.ng/v1

AUTHENTICATION ENDPOINTS:

POST /auth/register

Register new user (developer, agent, buyer)

• Request: email, password, user_type, name
• Response: user_id, token, user_type
• Status: 201 Created
POST /auth/login

Login user

• Request: email, password
• Response: token, user_id, user_type
• Status: 200 OK
DEVELOPER ENDPOINTS:

POST /developers/register

Register developer account with company details

• Request: company_name, contact_person, phone, email, company_size
• Response: developer_id, company_name, api_key
• Status: 201 Created
POST /properties/upload

Upload CSV file with properties

• Request: file (CSV), developer_id
• Response: upload_id, property_count, preview
• Status: 202 Accepted (async processing)
GET /developers/{developer_id}/dashboard

Get developer dashboard data

• Response: total_properties, verified_count, pending_count, sales_data
• Status: 200 OK
PROPERTY VERIFICATION ENDPOINTS:

POST /properties/verify

Verify single property

• Request: address, gps_lat, gps_lon, property_photos
• Response: verification_id, status, fraud_flags, avm_value, report_url
• Status: 202 Accepted (2-hour processing)
GET /properties/{property_id}

Get property details

• Response: property_info, verification_status, avm_value, fraud_detection, verified_badge
• Status: 200 OK
GET /properties/{property_id}/report

Get PDF verification report

• Response: PDF file download
• Status: 200 OK
MARKETPLACE ENDPOINTS:

GET /properties/search

Search properties with filters

• Query params: location, price_min, price_max, type, bedrooms
• Response: [property array] with verified_badge, avm_value
• Status: 200 OK
GET /properties/{property_id}/contact

Get contact info for property (developer/agent)

• Response: name, phone, email, company
• Status: 200 OK (requires authentication)
POST /properties/{property_id}/inquiry

Send inquiry to developer/agent

• Request: buyer_name, buyer_email, buyer_phone, message
• Response: inquiry_id, status
• Status: 201 Created


9. DATABASE SCHEMA
USERS TABLE:

• user_id (PK)
• email (unique)
• password (hashed)
• user_type (developer/agent/buyer/investor)
• first_name
• last_name
• phone
• created_at
• updated_at
DEVELOPERS TABLE:

• developer_id (PK, FK user_id)
• company_name
• company_registration
• contact_person
• phone
• email
• company_size
• api_key
• created_at
PROPERTIES TABLE:

• property_id (PK)
• developer_id (FK)
• address
• gps_latitude
• gps_longitude
• property_type (apartment/house/office/land)
• bedrooms
• bathrooms
• size_sqft
• description
• photos_count
• created_at
• updated_at
VERIFICATIONS TABLE:

• verification_id (PK)
• property_id (FK)
• status (pending/verified/rejected)
• ownership_verified (true/false)
• owner_name
• fraud_detection_flags (JSON)
• double_selling_flag (true/false)
• boundary_dispute_flag (true/false)
• price_anomaly_flag (true/false)
• verified_at
AVM VALUATIONS TABLE:

• valuation_id (PK)
• property_id (FK)
• estimated_value
• confidence_score (0-100)
• comparable_properties_count
• price_per_sqft
• created_at
MARKETPLACE LISTINGS TABLE:

• listing_id (PK)
• property_id (FK)
• agent_id (FK)
• seller_id (FK)
• listing_price
• listing_status (active/sold/withdrawn)
• created_at


10. SECURITY & COMPLIANCE
DATA PROTECTION:

• All passwords hashed (bcrypt)
• API tokens JWT with 24-hour expiry
• Database encrypted at rest (AWS RDS encryption)
• HTTPS enforced (SSL/TLS)
• No sensitive data in logs
API SECURITY:

• Rate limiting: 1000 requests/minute per user
• CORS configured for approved domains
• Input validation (all fields)
• SQL injection prevention (parameterized queries)
• XSS prevention (sanitized output)
• CSRF protection (token validation)
COMPLIANCE:

• GDPR-ready (data export/deletion)
• Nigeria data protection compliance
• PCI DSS (if accepting payments)
• Regular security audits (quarterly)
• Penetration testing (pre-launch)
BACKUP & RECOVERY:

• Daily database backups (AWS Backup)
• 30-day backup retention
• Recovery time objective (RTO): 1 hour
• Recovery point objective (RPO): 1 hour
MONITORING & ALERTING:

• 99.5% uptime SLA
• Real-time error monitoring (CloudWatch)
• Performance monitoring (API response times)
• Automated alerts for critical issues


11. LAUNCH TIMELINE
WEEK 1: DESIGN & PROTOTYPE

• Define architecture, API specs
• Create wireframes and database schema
• Finalize technical requirements
WEEK 2-3: BUILD CORE PLATFORM

• Verification engine (fraud detection + AVM)
• Marketplace (search, listings, properties)
• Developer portal (upload, dashboard)
• Infrastructure setup (AWS)
WEEK 4: INTEGRATION & TESTING

• Full system integration
• End-to-end testing with 500 properties
• Load testing
• Performance optimization
WEEK 5: FINALIZATION & LAUNCH PREP

• Feature completion and polish
• Documentation and support materials
• Developer recruitment and commitments
• Launch checklist completion
WEEK 6: LAUNCH

• Soft launch to 2-3 trusted developers
• First property verifications
• Marketplace goes live
• Initial agent discovery and adoption
WEEK 7-8: SCALE

• Scale to more developers
• Scale to more agents
• Bank API preparation
MONTH 2: BANK LAUNCH

• Bank API production launch
• 3-5 banks begin mortgage verifications
• Revenue: ₦40M-₦85M/month


12. POST-MVP ROADMAP
MONTH 3 FEATURES:

• Investor subscription tier
• Advanced property analytics
• Agent commission tracking
• Mobile app (optional)
MONTH 4-6 FEATURES:

• Insurance company integrations
• Rent finance product
• Blockchain deeds (optional)
• Government CLS partnership discussions
MONTH 7-12 FEATURES:

• Pan-Africa expansion (Ghana, Kenya)
• Title company functionality
• Advanced AI features
• Regional marketplace partnerships
YEAR 2+ VISION:

• Title insurance product
• Mortgage origination platform
• Property marketplace revenue
• Government official registry partnership


CONCLUSION
VERITY MVP is a focused, developer-first property verification platform and marketplace designed to launch in 6 weeks and generate revenue from Week 6.

The product combines three capabilities:

• Property verification (fraud detection, AVM valuations)
• Verified marketplace (connect stakeholders)
• Developer portal (estate digitization)
Success metrics are clear and measurable:

• Week 6: 1000+ properties verified, ₦5M-₦15M revenue
• Month 2: 5000+ properties, ₦40M-₦85M/month revenue
• Year 1: ₦1B-₦2.4B total revenue
The technology stack is proven, the market need is validated, and the business model is sustainable.

Execute this PRD to build VERITY and become Africa's property verification infrastructure.