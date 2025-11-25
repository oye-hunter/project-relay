export interface Email {
  id: number
  sender: string
  email: string
  subject: string
  preview: string
  timestamp: string
  date: string
  isStarred: boolean
  isRead: boolean
  body: string
}

export const emails: Email[] = [
  {
    id: 1,
    sender: "Sarah Johnson",
    email: "sarah.j@company.com",
    subject: "Q4 Marketing Campaign Review",
    preview: "Hi team, I've compiled the results from our Q4 marketing campaign. Overall, we saw a 23% increase in engagement...",
    timestamp: "10:30 AM",
    date: "Today at 10:30 AM",
    isStarred: false,
    isRead: false,
    body: `Hi team,

I've compiled the results from our Q4 marketing campaign and I'm excited to share them with you.

**Key Highlights:**

• 23% increase in overall engagement across all platforms
• Email open rates improved by 15%
• Social media reach grew by 42%
• Conversion rate increased from 2.3% to 3.1%

The campaign's success can be attributed to several factors:

1. **Targeted Content**: We focused on personalized messaging based on customer segments
2. **Multi-channel Approach**: Consistent presence across email, social media, and paid ads
3. **A/B Testing**: We tested various headlines and CTAs to optimize performance
4. **Timing**: Strategic scheduling based on audience behavior data

**Next Steps:**

I recommend we carry forward these strategies into Q1 2025, with an increased budget allocation to the highest-performing channels. Let's schedule a meeting next week to discuss the detailed breakdown and plan for the upcoming quarter.

Looking forward to your thoughts!

Best regards,
Sarah Johnson
Marketing Lead
Company Inc.`,
  },
  {
    id: 2,
    sender: "Project Manager",
    email: "pm@techcorp.io",
    subject: "Sprint Planning - Next Week",
    preview: "Please review the user stories for the upcoming sprint. We'll be focusing on the authentication module and...",
    timestamp: "9:15 AM",
    date: "Today at 9:15 AM",
    isStarred: true,
    isRead: false,
    body: `Hi team,

Please review the user stories for the upcoming sprint. We'll be focusing on the authentication module and dashboard improvements.

**Sprint Goals:**
- Complete OAuth integration
- Implement password reset flow
- Build dashboard analytics widgets
- Fix critical bugs from last sprint

Please add your estimates to each story in Jira by EOD Friday.

Thanks,
PM Team`,
  },
  {
    id: 3,
    sender: "Michael Chen",
    email: "m.chen@startup.co",
    subject: "Design System Updates",
    preview: "I've updated the component library with the new color palette and typography. Check out the Figma file...",
    timestamp: "Yesterday",
    date: "Yesterday at 2:45 PM",
    isStarred: false,
    isRead: true,
    body: `Hey everyone,

I've updated the component library with the new color palette and typography. Check out the Figma file for all the changes.

**What's New:**
- Updated primary color scheme
- New typography scale
- Improved spacing tokens
- Dark mode variants for all components

The design tokens are ready to be implemented in code. Let me know if you have any questions!

Best,
Michael`,
  },
  {
    id: 4,
    sender: "HR Department",
    email: "hr@company.com",
    subject: "Team Building Event - Save the Date",
    preview: "We're excited to announce our upcoming team building event on March 15th. Activities include...",
    timestamp: "Yesterday",
    date: "Yesterday at 11:20 AM",
    isStarred: false,
    isRead: true,
    body: `Dear Team,

We're excited to announce our upcoming team building event on March 15th!

**Event Details:**
- Date: March 15th, 2025
- Time: 10:00 AM - 4:00 PM
- Location: Mountain View Resort

**Activities:**
- Team challenges and games
- Lunch buffet
- Networking sessions
- Awards ceremony

Please RSVP by March 1st. We look forward to seeing you there!

Best regards,
HR Team`,
  },
  {
    id: 5,
    sender: "Lisa Rodriguez",
    email: "lisa.r@agency.com",
    subject: "Client Presentation Feedback",
    preview: "The client loved the presentation! They've approved the initial concept and want to move forward with...",
    timestamp: "2 days ago",
    date: "Nov 23 at 4:15 PM",
    isStarred: true,
    isRead: true,
    body: `Hi team,

Great news! The client loved the presentation!

They've approved the initial concept and want to move forward with Phase 1. They were particularly impressed with:

- The user flow diagrams
- The modern UI design
- The proposed timeline
- The cost breakdown

Next steps:
1. Finalize the contract (targeting next week)
2. Set up kickoff meeting
3. Begin discovery phase

Excellent work everyone!

Lisa`,
  },
  {
    id: 6,
    sender: "DevOps Team",
    email: "devops@techcorp.io",
    subject: "Server Maintenance Scheduled",
    preview: "Scheduled maintenance window: Saturday 2 AM - 6 AM EST. All services will be temporarily unavailable...",
    timestamp: "2 days ago",
    date: "Nov 23 at 1:30 PM",
    isStarred: false,
    isRead: true,
    body: `Team,

Scheduled maintenance window this weekend:

**When:** Saturday, November 27th, 2:00 AM - 6:00 AM EST
**Impact:** All services will be temporarily unavailable
**Reason:** Database migration and security patches

**What we're doing:**
- Upgrading database servers
- Applying critical security patches
- Optimizing server performance
- Updating SSL certificates

Please plan accordingly and inform your teams. We'll send an update once maintenance is complete.

DevOps Team`,
  },
  {
    id: 7,
    sender: "Newsletter",
    email: "news@designweekly.com",
    subject: "This Week in Design: AI Tools",
    preview: "Discover the latest AI-powered design tools that are revolutionizing the creative industry...",
    timestamp: "3 days ago",
    date: "Nov 22 at 9:00 AM",
    isStarred: false,
    isRead: true,
    body: `This Week in Design 🎨

Discover the latest AI-powered design tools that are revolutionizing the creative industry!

**Featured Tools:**
- Midjourney v6 - Enhanced photorealism
- Figma AI - Smart auto-layout
- Adobe Firefly - Generative fill updates
- Framer AI - AI-powered animations

**Articles:**
- How AI is changing UX design
- The future of design systems
- Accessibility in the age of AI

Read more on our website!

Unsubscribe | Manage preferences`,
  },
  {
    id: 8,
    sender: "James Kim",
    email: "j.kim@company.com",
    subject: "Code Review Request",
    preview: "Could you review my PR for the new dashboard feature? I've implemented the analytics charts and...",
    timestamp: "3 days ago",
    date: "Nov 22 at 3:45 PM",
    isStarred: false,
    isRead: true,
    body: `Hey,

Could you review my PR for the new dashboard feature?

**PR #247: Analytics Dashboard**

I've implemented:
- Real-time analytics charts using Chart.js
- Data filtering by date range
- Export to CSV functionality
- Responsive design for mobile

The PR is ready for review. I've added tests and updated the documentation.

Link: https://github.com/company/project/pull/247

Let me know if you have any questions!

James`,
  },
  {
    id: 9,
    sender: "Alex Thompson",
    email: "alex.t@startup.com",
    subject: "Weekly Engineering Sync",
    preview: "Reminder: Our weekly engineering sync is tomorrow at 10 AM. Please come prepared with your updates...",
    timestamp: "4 days ago",
    date: "Nov 21 at 5:20 PM",
    isStarred: false,
    isRead: true,
    body: `Hi Engineering Team,

Reminder: Our weekly engineering sync is tomorrow at 10 AM in Conference Room B.

**Agenda:**
- Project updates (15 mins)
- Blockers discussion (10 mins)
- Code review process improvements (10 mins)
- Tech debt review (10 mins)

Please come prepared with:
1. Your project status updates
2. Any blockers you're facing
3. Suggestions for process improvements

See you there!

Alex`,
  },
  {
    id: 10,
    sender: "Finance Department",
    email: "finance@company.com",
    subject: "Expense Report Deadline Approaching",
    preview: "Friendly reminder: Q4 expense reports are due by Friday, December 1st. Please submit all business...",
    timestamp: "4 days ago",
    date: "Nov 21 at 3:10 PM",
    isStarred: true,
    isRead: false,
    body: `Hello Team,

Friendly reminder: Q4 expense reports are due by Friday, December 1st.

**Required Documentation:**
- Receipts for all expenses over $25
- Business purpose for each expense
- Project/client code if applicable

**Submission Methods:**
- Online portal: finance.company.com/expenses
- Email to expenses@company.com
- Physical copies to Finance Dept, 3rd floor

Please ensure all submissions are complete and accurate to avoid processing delays.

Thank you,
Finance Department`,
  },
  {
    id: 11,
    sender: "Maria Gonzalez",
    email: "maria.g@design.co",
    subject: "UX Research Findings - User Testing Round 2",
    preview: "I've completed the analysis of our second round of user testing. The results show significant improvement...",
    timestamp: "5 days ago",
    date: "Nov 20 at 11:45 AM",
    isStarred: false,
    isRead: true,
    body: `Hi Team,

I've completed the analysis of our second round of user testing, and I'm happy to share that we've seen significant improvements!

**Key Findings:**
- Task completion rate increased from 65% to 82%
- User satisfaction score improved from 3.2/5 to 4.1/5
- Navigation confusion decreased by 40%

**Areas Still Needing Work:**
- Checkout process (users still finding it too long)
- Search functionality (filtering options not obvious)
- Mobile menu (discoverability issues)

**Recommendations:**
1. Simplify checkout to 3 steps max
2. Improve search filter visibility
3. Redesign mobile navigation

Full report attached. Let's discuss in our design review tomorrow.

Best,
Maria`,
  },
  {
    id: 12,
    sender: "David Park",
    email: "david.park@tech.io",
    subject: "New Security Policy Updates",
    preview: "Important: We're implementing new security policies effective immediately. All employees must complete...",
    timestamp: "5 days ago",
    date: "Nov 20 at 9:30 AM",
    isStarred: true,
    isRead: false,
    body: `Team,

We're implementing new security policies effective immediately in response to recent industry threats.

**Immediate Changes:**
- Mandatory 2FA for all company accounts
- Password complexity requirements increased
- Monthly security training required
- VPN required for remote access

**Required Actions:**
1. Enable 2FA by end of week
2. Complete security training module by Nov 30
3. Update passwords if they don't meet new standards

**Training:**
Access the security training module at: security.company.com/training

These measures are critical for protecting our data and systems. Please prioritize accordingly.

Thanks,
David
Security Team Lead`,
  },
  {
    id: 13,
    sender: "Product Team",
    email: "product@company.com",
    subject: "Product Roadmap Q1 2025",
    preview: "I'm excited to share our Q1 2025 product roadmap! We'll be focusing on three key initiatives: AI features...",
    timestamp: "6 days ago",
    date: "Nov 19 at 4:00 PM",
    isStarred: false,
    isRead: true,
    body: `Hello Everyone,

I'm excited to share our Q1 2025 product roadmap! We'll be focusing on three key initiatives that align with our strategic goals.

**Q1 2025 Initiatives:**

1. **AI-Powered Features**
   - Smart recommendations
   - Automated workflows
   - Predictive analytics

2. **Platform Expansion**
   - Mobile app redesign
   - Third-party integrations
   - API enhancements

3. **Enterprise Features**
   - Advanced reporting
   - Custom permissions
   - Audit logging

**Timeline:**
- Week 1-4: Discovery & Planning
- Week 5-8: Development Phase 1
- Week 9-13: Development Phase 2

We'll have a detailed walkthrough in the all-hands meeting next Wednesday.

Best,
Product Team`,
  },
  {
    id: 14,
    sender: "Recruiting Team",
    email: "recruiting@company.com",
    subject: "New Open Positions - Referral Bonus Available",
    preview: "We have several new positions open across engineering, design, and marketing. Refer a candidate and earn...",
    timestamp: "1 week ago",
    date: "Nov 18 at 2:15 PM",
    isStarred: false,
    isRead: true,
    body: `Hi Team,

We're growing! We have several new positions open and we'd love your help finding great candidates.

**Open Positions:**
- Senior Frontend Engineer (React)
- UX Designer
- Product Marketing Manager
- DevOps Engineer
- Data Scientist

**Referral Bonus:**
- $2,500 for technical roles
- $1,500 for non-technical roles
- Paid after 90 days of employment

**How to Refer:**
1. Check the careers page for role details
2. Have candidate apply online
3. Email recruiting@company.com with your referral

We're looking for people who embody our values and will help us build amazing products together!

Recruiting Team`,
  },
  {
    id: 15,
    sender: "IT Support",
    email: "it-support@company.com",
    subject: "Software License Renewals",
    preview: "Several software licenses are up for renewal next month. Please review the list and let us know if any...",
    timestamp: "1 week ago",
    date: "Nov 18 at 10:00 AM",
    isStarred: false,
    isRead: true,
    body: `Hello,

Several software licenses are up for renewal next month. We need your input to ensure we're only renewing what's necessary.

**Licenses Due for Renewal:**
- Adobe Creative Cloud (25 seats)
- Figma Team (15 seats)
- Slack Enterprise
- Jira Software
- GitHub Team
- Various AWS services

**Action Required:**
Please review the attached spreadsheet and indicate by Friday:
1. Which licenses your team still needs
2. If you need additional seats
3. If there are any tools you'd like to discontinue

This helps us optimize our software spending while ensuring you have the tools you need.

IT Support Team`,
  },
  {
    id: 16,
    sender: "CEO Update",
    email: "ceo@company.com",
    subject: "Company All-Hands Meeting This Friday",
    preview: "Join us for our quarterly all-hands meeting this Friday at 2 PM. I'll be sharing company performance...",
    timestamp: "1 week ago",
    date: "Nov 17 at 3:30 PM",
    isStarred: true,
    isRead: false,
    body: `Team,

I'm excited to invite you to our quarterly all-hands meeting this Friday at 2 PM in the main auditorium (remote option available).

**Agenda:**
- Q3 Performance Review & Q4 Outlook
- New Strategic Initiatives
- Product Roadmap Preview
- Q&A Session
- Team Recognition Awards

**Special Announcements:**
- New office expansion plans
- Updated benefits package
- Annual retreat details

This is a can't-miss event where we'll align on our direction and celebrate our wins. Please make every effort to attend.

Looking forward to seeing you all there!

Best,
Sarah Chen
CEO`,
  },
  {
    id: 17,
    sender: "Customer Support",
    email: "support@company.com",
    subject: "Customer Satisfaction Survey Results",
    preview: "Our Q3 customer satisfaction scores are in! We've achieved a 92% satisfaction rate, up from 85% last...",
    timestamp: "2 weeks ago",
    date: "Nov 15 at 1:20 PM",
    isStarred: false,
    isRead: true,
    body: `Hi Team,

Great news! Our Q3 customer satisfaction scores are in, and we've achieved a 92% satisfaction rate, up from 85% last quarter.

**Key Metrics:**
- Overall Satisfaction: 92% (+7%)
- Response Time: 2.1 hours (-0.5 hours)
- First Contact Resolution: 78% (+5%)
- Net Promoter Score: 45 (+8)

**What's Working:**
- Proactive support initiatives
- Improved documentation
- Faster escalation processes
- Enhanced training programs

**Areas for Improvement:**
- Weekend response times
- Complex technical issues
- Multi-language support

Thank you for your hard work and dedication to our customers!

Support Team Lead`,
  },
  {
    id: 18,
    sender: "Legal Team",
    email: "legal@company.com",
    subject: "Updated Privacy Policy Requirements",
    preview: "Due to new regulations, we need to update our privacy policy by December 15th. All teams must review...",
    timestamp: "2 weeks ago",
    date: "Nov 15 at 11:00 AM",
    isStarred: true,
    isRead: false,
    body: `All Teams,

Due to new international privacy regulations (GDPR updates and new state laws), we need to update our privacy policy by December 15th.

**Required Actions by Team:**

**Engineering:**
- Update cookie consent banner
- Implement new data retention policies
- Add additional opt-out mechanisms

**Product:**
- Review all data collection points
- Update in-app privacy notices
- Coordinate UX changes

**Marketing:**
- Update email subscription preferences
- Review analytics tracking
- Update privacy policy links everywhere

**Timeline:**
- Review period: Now - Nov 30
- Implementation: Dec 1 - Dec 10
- Testing: Dec 11 - Dec 14
- Launch: Dec 15

Please schedule time with legal@company.com for specific guidance.

Legal Team`,
  },
  {
    id: 19,
    sender: "Office Manager",
    email: "office@company.com",
    subject: "Office Renovation Starting Next Week",
    preview: "Exciting news! Our office renovation begins next Monday. We'll be updating the kitchen, adding more...",
    timestamp: "2 weeks ago",
    date: "Nov 14 at 4:45 PM",
    isStarred: false,
    isRead: true,
    body: `Hello Everyone,

Exciting news! Our office renovation begins next Monday and will continue for approximately 3 weeks.

**Renovation Schedule:**
- Week 1: Kitchen & break areas
- Week 2: Conference rooms
- Week 3: Open workspace & lighting

**During Renovation:**
- Kitchen will be temporarily relocated to the 4th floor
- 5 conference rooms will be available in the east wing
- Noise expected during work hours (9 AM - 5 PM)
- Consider working remotely if sensitive to noise

**New Features:**
- Updated kitchen with new appliances
- 4 new focus rooms
- Improved lighting throughout
- More plants and collaborative spaces

We appreciate your patience during this exciting upgrade!

Best,
Office Management Team`,
  },
  {
    id: 20,
    sender: "Data Analytics",
    email: "analytics@company.com",
    subject: "Q3 Business Intelligence Report",
    preview: "The Q3 BI report is now available. Key insights include a 34% increase in user engagement and...",
    timestamp: "2 weeks ago",
    date: "Nov 14 at 10:15 AM",
    isStarred: false,
    isRead: true,
    body: `Team,

The Q3 Business Intelligence Report is now available in the analytics dashboard.

**Executive Summary:**
- 34% increase in user engagement
- 28% growth in new user acquisition
- 15% improvement in retention
- 42% increase in premium conversions

**Key Insights by Department:**

**Product:**
- Feature X drove 45% of engagement growth
- Mobile usage increased by 62%
- User session duration up 28%

**Marketing:**
- Content marketing drove 35% of new signups
- Social media conversion rate: 3.2%
- Email campaign performance improved by 18%

**Sales:**
- Enterprise deals increased by 52%
- Sales cycle shortened by 8 days
- Customer lifetime value up 23%

**Recommendations:**
1. Double down on Feature X development
2. Increase content marketing budget
3. Expand enterprise sales team

Full details in the attached report.

Analytics Team`,
  },
  {
    id: 21,
    sender: "Training Department",
    email: "training@company.com",
    subject: "New Professional Development Courses Available",
    preview: "We've added 12 new professional development courses for Q1. Topics include leadership, technical skills...",
    timestamp: "3 weeks ago",
    date: "Nov 10 at 3:00 PM",
    isStarred: false,
    isRead: true,
    body: `Hi Team,

We're excited to announce 12 new professional development courses available for Q1 enrollment!

**New Technical Courses:**
- Advanced React Patterns
- Cloud Architecture with AWS
- Data Engineering Fundamentals
- DevOps Best Practices
- Mobile Development with Flutter

**Leadership & Soft Skills:**
- Effective Team Leadership
- Project Management Certification
- Public Speaking & Presentation
- Conflict Resolution
- Time Management Mastery

**Enrollment Details:**
- Courses begin January 15th
- Limited seats available
- Company-sponsored (no cost to you)
- Apply by December 1st

**How to Apply:**
Visit learning.company.com/courses and submit your application by December 1st.

Invest in your growth!

Training Department`,
  },
  {
    id: 22,
    sender: "QA Team",
    email: "qa@company.com",
    subject: "Critical Bug Found in Payment System",
    preview: "URGENT: We've identified a critical bug in the payment processing system that may affect transactions...",
    timestamp: "3 weeks ago",
    date: "Nov 10 at 11:30 AM",
    isStarred: true,
    isRead: false,
    body: `URGENT - DEVELOPMENT TEAM

We've identified a critical bug in the payment processing system that requires immediate attention.

**Issue:**
- Double charging occurring in 1.2% of transactions
- Affects users with saved payment methods
- Only occurs during peak traffic hours (2-5 PM)

**Impact:**
- 247 affected transactions so far
- Potential revenue loss
- Customer trust impact

**Immediate Actions:**
1. Payment team investigating root cause
2. Customer support notified for affected users
3. Monitoring increased

**Required:**
- Engineering lead to coordinate fix
- Deployment planned for tonight
- All hands on deck for testing

Please join the emergency call in 15 minutes: meet.company.com/urgent

QA Team`,
  },
  {
    id: 23,
    sender: "Social Committee",
    email: "social@company.com",
    subject: "Holiday Party Planning - We Need Your Input!",
    preview: "It's that time of year! We're planning our annual holiday party and want your suggestions for venue...",
    timestamp: "3 weeks ago",
    date: "Nov 9 at 2:00 PM",
    isStarred: false,
    isRead: true,
    body: `Hello Team!

It's that time of year again - we're starting to plan our annual holiday party and we want YOUR input!

**We're Deciding On:**

**Venue Options:**
- Downtown event space
- Beachfront resort
- Museum private rental
- Company office (transformed!)

**Theme Ideas:**
- Winter Wonderland
- 1920s Great Gatsby
- Masquerade Ball
- Ugly Sweater Contest

**Activity Preferences:**
- Live band vs DJ
- Photo booth
- Games and activities
- Professional photographer

**Please Vote By Friday:**
social.company.com/holiday-vote

We want this to be the best party yet, so please share your ideas!

Social Committee`,
  },
  {
    id: 24,
    sender: "Infrastructure Team",
    email: "infrastructure@company.com",
    subject: "Database Migration Completed Successfully",
    preview: "Great news! The database migration to the new cluster has been completed successfully. Performance improvements...",
    timestamp: "4 weeks ago",
    date: "Nov 5 at 9:00 AM",
    isStarred: false,
    isRead: true,
    body: `Team,

I'm pleased to announce that the database migration to our new cluster has been completed successfully!

**Migration Stats:**
- Duration: 6 hours (2 hours less than estimated)
- Data transferred: 4.2 TB
- Zero data loss
- Minimal downtime (15 minutes)

**Performance Improvements:**
- Query response time: 45% faster
- Write throughput: 3x improvement
- Read capacity: 5x increase
- Uptime: 99.99% guaranteed

**What's Next:**
- Monitor performance for 48 hours
- Optimize queries taking advantage of new features
- Plan phase 2: read replica expansion

**Thank You:**
Special thanks to the entire infrastructure team for working through the weekend to make this happen!

Infrastructure Lead`,
  },
  {
    id: 25,
    sender: "Marketing Team",
    email: "marketing@company.com",
    subject: "New Brand Guidelines Released",
    preview: "We've updated our brand guidelines to reflect our evolving identity. Please review the changes and...",
    timestamp: "4 weeks ago",
    date: "Nov 4 at 3:45 PM",
    isStarred: true,
    isRead: false,
    body: `Hello Everyone,

We're excited to share our updated brand guidelines that reflect our company's growth and evolving identity.

**Key Updates:**

**Visual Identity:**
- Refreshed color palette (softer blues, added accent colors)
- New typography scale (Inter font family)
- Updated logo usage guidelines
- New illustration style

**Voice & Tone:**
- More conversational, less formal
- Emphasis on clarity and approachability
- Updated messaging framework
- New content templates

**Digital Applications:**
- Web component library updated
- Social media templates
- Presentation templates
- Email signature standards

**Access:**
View the complete guidelines at: brand.company.com/guidelines

All teams should begin implementing these updates in Q1 2025.

Marketing Team`,
  },
  {
    id: 26,
    sender: "Sales Operations",
    email: "sales-ops@company.com",
    subject: "New CRM Features Launched",
    preview: "We've deployed several new CRM features based on your feedback. The update includes improved contact...",
    timestamp: "1 month ago",
    date: "Nov 1 at 11:00 AM",
    isStarred: false,
    isRead: true,
    body: `Sales Team,

We've deployed several new CRM features based on your feedback! These updates will help you work more efficiently and close more deals.

**New Features:**

**Contact Management:**
- Bulk contact import/export
- Advanced duplicate detection
- Automated contact enrichment
- Social media integration

**Pipeline Management:**
- Customizable deal stages
- Automated follow-up reminders
- Competitor tracking
- Win/loss analysis

**Reporting & Analytics:**
- Real-time pipeline analytics
- Forecast accuracy scoring
- Team performance dashboards
- Custom report builder

**Training:**
We'll host training sessions this week:
- Tuesday 2 PM: Basic features
- Wednesday 10 AM: Advanced reporting
- Thursday 3 PM: Q&A session

Access the new CRM at: crm.company.com

Sales Ops Team`,
  },
  {
    id: 27,
    sender: "Research & Development",
    email: "rnd@company.com",
    subject: "Breakthrough in Machine Learning Model",
    preview: "Exciting breakthrough in our ML research! We've achieved 98% accuracy in predicting customer behavior...",
    timestamp: "1 month ago",
    date: "Oct 30 at 4:20 PM",
    isStarred: true,
    isRead: false,
    body: `Team,

We have an exciting breakthrough to share from our R&D department!

**Achievement:**
We've developed a new machine learning model that achieves 98% accuracy in predicting customer behavior patterns, significantly outperforming our previous model (85%) and industry standards (92%).

**Technical Details:**
- Architecture: Transformer-based neural network
- Training data: 2.3 million customer interactions
- Inference time: 23ms (real-time capable)
- Accuracy: 98% on test dataset

**Business Impact:**
- Personalized recommendations improved by 40%
- Customer retention predictions: 95% accuracy
- Churn prediction: 3 weeks advance notice
- Lifetime value prediction: 94% accuracy

**Next Steps:**
- Integration with production systems in Q1
- Patent application filed
- Research paper submitted for publication

This puts us 2 years ahead of competitors in predictive analytics!

R&D Team`,
  },
  {
    id: 28,
    sender: "Customer Success",
    email: "success@company.com",
    subject: "Enterprise Customer Onboarding Program",
    preview: "We've redesigned our enterprise customer onboarding program based on feedback. The new program reduces...",
    timestamp: "1 month ago",
    date: "Oct 29 at 2:00 PM",
    isStarred: false,
    isRead: true,
    body: `Hi Team,

We've completely redesigned our enterprise customer onboarding program based on extensive customer feedback and data analysis.

**New Program Features:**

**Structured Timeline:**
- 30-day implementation (down from 60)
- Weekly success milestones
- Clear accountability matrix
- Risk assessment at each stage

**Enhanced Resources:**
- Interactive onboarding checklist
- Video tutorial library
- Dedicated success manager
- 24/7 technical support

**Success Metrics:**
- Time to first value: 3 days (was 14)
- User adoption rate: 89% (was 62%)
- Customer satisfaction: 4.8/5 (was 4.2)

**Training:**
All customer-facing teams must complete the new onboarding certification by November 15th.

Access training at: success.company.com/training

Customer Success Team`,
  },
  {
    id: 29,
    sender: "Compliance Team",
    email: "compliance@company.com",
    subject: "Annual Security Audit Scheduled",
    preview: "Our annual security audit will take place from December 4-8. All teams must prepare documentation...",
    timestamp: "1 month ago",
    date: "Oct 28 at 10:30 AM",
    isStarred: true,
    isRead: false,
    body: `All Teams,

Our annual security audit conducted by external auditors will take place from December 4-8.

**Required Preparation by Department:**

**Engineering:**
- Code review documentation
- Security testing reports
- Incident response plans
- Access control logs

**IT:**
- Network security configurations
- System access logs
- Backup and recovery tests
- Physical security documentation

**HR:**
- Employee security training records
- Background check documentation
- Security policy acknowledgments

**All Teams:**
- Document security procedures
- Prepare for interview sessions
- Have evidence of compliance ready

**Timeline:**
- Preparation: Now - Nov 30
- Audit: Dec 4-8
- Results: Dec 15

This audit is critical for maintaining customer trust and regulatory compliance.

Compliance Team`,
  },
  {
    id: 30,
    sender: "Product Design",
    email: "design@company.com",
    subject: "Design System v3.0 Released",
    preview: "We're excited to announce Design System v3.0! This major release includes a complete component overhaul...",
    timestamp: "1 month ago",
    date: "Oct 27 at 3:15 PM",
    isStarred: false,
    isRead: true,
    body: `Hello Team,

We're thrilled to announce the release of Design System v3.0! This is our most significant update yet.

**What's New:**

**Component Library:**
- 45 new components
- Complete accessibility overhaul
- Dark mode support
- Mobile-first responsive design

**Design Tokens:**
- Updated color system
- New typography scale
- Improved spacing system
- Motion design tokens

**Developer Experience:**
- React, Vue, and Angular versions
- TypeScript support
- Storybook documentation
- Automated testing suite

**Key Benefits:**
- Development speed increased by 40%
- Consistency across all products
- Accessibility compliance out of the box
- Theming support for white-labeling

**Get Started:**
Documentation: design.company.com/v3
GitHub: github.com/company/design-system

Design Team`,
  },
  {
    id: 31,
    sender: "Operations Team",
    email: "operations@company.com",
    subject: "New Work From Home Policy",
    preview: "We're updating our work from home policy to provide more flexibility while maintaining collaboration...",
    timestamp: "2 months ago",
    date: "Oct 20 at 1:00 PM",
    isStarred: false,
    isRead: true,
    body: `Team,

Based on your feedback and our analysis of the past year, we're updating our work from home policy to provide more flexibility while maintaining our collaborative culture.

**New Policy Effective November 1st:**

**Hybrid Schedule:**
- 3 days in office, 2 days remote (flexible)
- Core collaboration hours: 10 AM - 3 PM
- Team alignment days: Tuesdays & Wednesdays in office

**Remote Work Guidelines:**
- Dedicated workspace required
- High-speed internet mandatory
- Available during core hours
- Video on for team meetings

**Office Enhancements:**
- Improved video conferencing rooms
- Hot-desking reservation system
- Enhanced collaboration spaces
- Quiet focus areas

**Equipment:**
- $500 stipend for home office setup
- Company-provided laptop and accessories
- IT support for remote workers

We believe this balanced approach will support both productivity and work-life balance.

Operations Team`,
  },
  {
    id: 32,
    sender: "Engineering Leadership",
    email: "eng-leaders@company.com",
    subject: "Technical Career Ladder Updates",
    preview: "We've updated our technical career ladder to provide clearer growth paths and recognition for technical...",
    timestamp: "2 months ago",
    date: "Oct 18 at 4:30 PM",
    isStarred: true,
    isRead: false,
    body: `Engineering Team,

We've significantly updated our technical career ladder to provide clearer growth paths and better recognize technical excellence.

**Key Changes:**

**New Levels:**
- Added Principal Engineer level
- Distinguished Engineer track
- Technical Fellow path

**Expanded Criteria:**
- Technical leadership weighted higher
- Community contributions recognized
- Mentorship formally evaluated
- Architecture influence measured

**Compensation Alignment:**
- Competitive market benchmarking
- Clear bonus structure per level
- Stock refresh guidelines
- Promotion impact on compensation

**Transparency:**
- All level criteria publicly documented
- Self-assessment tools available
- Promotion calendar published

**Review Process:**
- Bi-annual promotion cycles
- 360-degree feedback
- Technical assessment
- Committee review

View the new ladder: careers.company.com/engineering-levels

We're committed to your growth and recognition!

Engineering Leadership`,
  },
  {
    id: 33,
    sender: "Partnerships Team",
    email: "partnerships@company.com",
    subject: "New Strategic Partnership Announcement",
    preview: "We're excited to announce a new strategic partnership with TechGlobal Inc. This partnership will...",
    timestamp: "2 months ago",
    date: "Oct 15 at 10:00 AM",
    isStarred: false,
    isRead: true,
    body: `Team,

We're thrilled to announce a new strategic partnership with TechGlobal Inc., a leader in enterprise software solutions.

**Partnership Details:**

**What We're Building:**
- Integrated product offerings
- Joint go-to-market strategy
- Shared technology roadmap
- Co-developed enterprise features

**Benefits for Our Company:**
- Access to 5,000+ enterprise customers
- Revenue sharing on joint deals
- Technology exchange and licensing
- Expanded market presence

**Timeline:**
- Announcement: Today
- Technical integration: Q1 2025
- Joint sales: Q2 2025
- Full platform integration: Q4 2025

**Immediate Actions:**
- Sales team training in December
- Engineering kickoff next week
- Marketing campaign planning

This partnership represents a significant growth opportunity and validates our technology leadership.

Partnerships Team`,
  },
  {
    id: 34,
    sender: "Benefits Team",
    email: "benefits@company.com",
    subject: "Open Enrollment Ends Friday",
    preview: "Reminder: Open enrollment for health insurance and benefits ends this Friday. Don't miss your chance...",
    timestamp: "2 months ago",
    date: "Oct 12 at 2:45 PM",
    isStarred: true,
    isRead: false,
    body: `Team,

Friendly reminder that open enrollment for health insurance and benefits ends this Friday at 5 PM PST.

**What's New for 2025:**
- Lower premium increases than industry average
- New mental health coverage options
- Expanded fertility benefits
- Pet insurance now available
- Student loan repayment program

**Required Actions:**
1. Review your current elections
2. Compare new plan options
3. Make changes if needed
4. Submit by Friday 5 PM

**Enrollment Methods:**
- Online: benefits.company.com/enroll
- Phone: 1-800-COMPANY
- In-person: HR office, 3rd floor

**Important:**
If you don't enroll by the deadline, your current elections will roll over, but you may miss out on new benefits and cost savings.

We're here to help! Contact benefits@company.com with questions.

Benefits Team`,
  },
  {
    id: 35,
    sender: "Frontend Guild",
    email: "frontend@company.com",
    subject: "React 18 Migration Complete",
    preview: "Great news! We've successfully completed the React 18 migration across all our applications. Performance...",
    timestamp: "3 months ago",
    date: "Oct 5 at 11:00 AM",
    isStarred: false,
    isRead: true,
    body: `Frontend Team,

I'm excited to announce that we've successfully completed the React 18 migration across all our applications!

**Migration Stats:**
- 45 applications upgraded
- 0 production incidents
- 3 months ahead of schedule
- 100% test coverage maintained

**Performance Improvements:**
- Initial load time: 28% faster
- Time to interactive: 35% improvement
- Bundle size: 18% reduction
- Memory usage: 22% decrease

**New Features Enabled:**
- Concurrent rendering
- Automatic batching
- Transitions API
- Server components (experimental)

**Special Thanks:**
- Migration task force team
- QA for extensive testing
- DevOps for smooth deployments

**Next Steps:**
- React 19 evaluation in Q1
- Server components pilot
- Performance optimization deep dive

This was a massive team effort - great work everyone!

Frontend Guild Leads`,
  },
  {
    id: 36,
    sender: "Data Privacy Officer",
    email: "privacy@company.com",
    subject: "Data Retention Policy Updates",
    preview: "We're updating our data retention policies to comply with new regulations. Key changes include shorter...",
    timestamp: "3 months ago",
    date: "Oct 1 at 3:00 PM",
    isStarred: false,
    isRead: true,
    body: `All Teams,

We're updating our data retention policies to comply with new international regulations (GDPR, CCPA updates, and new state laws).

**Key Changes Effective Immediately:**

**Retention Periods:**
- User activity data: 24 months (was 36)
- Marketing data: 12 months (was 24)
- Support tickets: 18 months (was 36)
- System logs: 6 months (was 12)

**New Requirements:**
- Data minimization principles
- Right to erasure automation
- Consent management updates
- Cross-border transfer compliance

**Action Required by Team:**

**Engineering:**
- Implement new retention periods
- Update data deletion processes
- Add data export capabilities

**Product:**
- Update privacy notices in-app
- Implement consent management
- Design data download features

**Timeline:**
- Compliance review: October
- Implementation: November
- Audit: December

These changes are mandatory for regulatory compliance.

Data Privacy Office`,
  },
  {
    id: 37,
    sender: "Mobile Team",
    email: "mobile@company.com",
    subject: "App Store Feature Award!",
    preview: "Great news! Our mobile app has been featured in the App Store's 'Editors Choice' section. This is...",
    timestamp: "3 months ago",
    date: "Sep 28 at 4:15 PM",
    isStarred: true,
    isRead: false,
    body: `Team,

Incredible news! Our mobile app has been selected for the App Store's "Editors' Choice" feature!

**What This Means:**
- Featured placement for 2 weeks
- Millions of additional impressions
- Apple marketing promotion
- Industry recognition

**Impact So Far:**
- Downloads: +450% week over week
- App Store ranking: #1 in Business category
- User ratings: 4.8 stars (from 4.5)
- Press coverage: 12 major publications

**This Recognition Is Due To:**
- Beautiful, intuitive design
- Excellent performance
- Innovative features
- Strong user engagement

**Celebration:**
Join us for a celebration in the main kitchen tomorrow at 3 PM! We'll have snacks, drinks, and a special announcement.

Thank you for your incredible work that made this possible!

Mobile Team`,
  },
  {
    id: 38,
    sender: "API Team",
    email: "api@company.com",
    subject: "API Rate Limit Changes",
    preview: "We're updating our API rate limits to better serve our customers while maintaining system stability...",
    timestamp: "4 months ago",
    date: "Sep 20 at 2:00 PM",
    isStarred: false,
    isRead: true,
    body: `API Users,

We're updating our API rate limits to better serve our customers while maintaining system stability and performance.

**New Rate Limits (Effective October 1st):**

**Free Tier:**
- Requests per minute: 100 (was 60)
- Requests per day: 50,000 (was 30,000)
- Burst capacity: 200 requests

**Pro Tier:**
- Requests per minute: 1,000 (was 500)
- Requests per day: 1M (was 500,000)
- Burst capacity: 2,000 requests

**Enterprise Tier:**
- Custom limits based on needs
- Dedicated infrastructure
- SLA guarantees

**Additional Changes:**
- Improved rate limit headers
- Better error messages
- Usage analytics dashboard
- Alerting for approaching limits

**Migration:**
No action required for most users. If you're hitting current limits, you may see improved performance.

API Team`,
  },
  {
    id: 39,
    sender: "Content Strategy",
    email: "content@company.com",
    subject: "Content Calendar Q1 2025",
    preview: "Our Q1 2025 content calendar is now available. We're focusing on AI trends, industry benchmarks...",
    timestamp: "4 months ago",
    date: "Sep 15 at 11:30 AM",
    isStarred: false,
    isRead: true,
    body: `Hi Team,

Our Q1 2025 content calendar is now available and packed with exciting initiatives!

**Q1 Themes:**
- AI Industry Trends & Applications
- Performance Benchmark Reports
- Customer Success Stories
- Product Innovation Deep Dives

**Key Campaigns:**

**January: AI Revolution**
- 5-part blog series on AI implementation
- Webinar: AI for Business Growth
- Case study: Customer AI success

**February: Performance Metrics**
- Industry benchmark report
- How-to guides on KPI tracking
- Video series: Measuring ROI

**March: Innovation Spotlight**
- Product announcement content
- Technical deep-dive whitepapers
- Customer innovation stories

**Content Requests:**
Need content support? Submit requests at: content.company.com/requests

**Contributions Welcome:**
We're looking for subject matter experts! Email content@company.com if interested.

Content Strategy Team`,
  },
  {
    id: 40,
    sender: "Infrastructure Security",
    email: "infra-security@company.com",
    subject: "Zero Trust Architecture Implementation",
    preview: "We're beginning the implementation of Zero Trust architecture across our infrastructure. This major...",
    timestamp: "4 months ago",
    date: "Sep 10 at 9:00 AM",
    isStarred: true,
    isRead: false,
    body: `Team,

We're beginning the implementation of Zero Trust architecture across our infrastructure - a major security initiative that will fundamentally change how we secure our systems.

**What is Zero Trust?**
"Never trust, always verify" - every access request is fully authenticated, authorized, and encrypted regardless of source.

**Implementation Phases:**

**Phase 1 (Q4 2024): Identity & Access**
- Multi-factor authentication everywhere
- Device identity verification
- Least privilege access principles

**Phase 2 (Q1 2025): Network Security**
- Micro-segmentation
- Encrypted connections always
- Network policy automation

**Phase 3 (Q2 2025): Data Protection**
- Data classification enforcement
- Encryption at rest and in transit
- Data loss prevention

**Impact on Teams:**
- More frequent authentication required
- Stricter access controls
- Enhanced security monitoring

**Benefits:**
- 85% reduction in breach risk
- Compliance with latest standards
- Future-proof security posture

Training and documentation: security.company.com/zero-trust

Security Team`,
  },
  {
    id: 41,
    sender: "UX Research",
    email: "ux-research@company.com",
    subject: "Annual User Satisfaction Survey Results",
    preview: "Our annual user satisfaction survey results are in! Overall satisfaction increased to 8.7/10 from...",
    timestamp: "5 months ago",
    date: "Aug 25 at 3:45 PM",
    isStarred: false,
    isRead: true,
    body: `Team,

Our annual user satisfaction survey results are in, and I'm thrilled to share some outstanding outcomes!

**Overall Results:**
- User Satisfaction: 8.7/10 (up from 8.2)
- Net Promoter Score: 52 (up from 45)
- Customer Effort Score: 2.1 (down from 2.8)

**Key Positive Findings:**
- 94% of users find the interface intuitive
- 88% would recommend us to colleagues
- 91% feel more productive using our platform
- 86% rate support experience as excellent

**Areas for Improvement:**
- Mobile experience (75% satisfaction)
- Advanced feature discoverability (68%)
- Customization options (72%)
- Integration setup (70%)

**User Quotes:**
"The product keeps getting better every year!"
"Support team is incredibly responsive"
"Mobile app needs some love"

**Action Plan:**
We'll present a detailed improvement roadmap in the all-hands meeting next week.

UX Research Team`,
  },
  {
    id: 42,
    sender: "Platform Team",
    email: "platform@company.com",
    subject: "New Developer Portal Launched",
    preview: "We're excited to announce the launch of our new developer portal! The portal provides comprehensive...",
    timestamp: "5 months ago",
    date: "Aug 20 at 1:00 PM",
    isStarred: false,
    isRead: true,
    body: `Developers,

We're thrilled to announce the launch of our new developer portal - a complete redesign based on your feedback!

**New Features:**

**Documentation:**
- Interactive API documentation
- Code samples in 6 languages
- SDK documentation and guides
- Best practices and tutorials

**Tools:**
- API key management
- Usage analytics dashboard
- Sandbox environment
- Integration testing tools

**Community:**
- Developer forums
- Q&A knowledge base
- Code repository examples
- Event calendar

**Getting Started:**
1. Visit: developers.company.com
2. Create your account
3. Generate API keys
4. Explore the sandbox

**Feedback Welcome:**
This is just the beginning! We'd love your feedback to make it even better.

Platform Team`,
  },
  {
    id: 43,
    sender: "Talent Acquisition",
    email: "talent@company.com",
    subject: "Interview Process Improvements",
    preview: "We've updated our interview process to reduce time-to-hire and improve candidate experience. Key changes...",
    timestamp: "6 months ago",
    date: "Aug 10 at 10:15 AM",
    isStarred: false,
    isRead: true,
    body: `Hiring Managers & Interviewers,

We've significantly improved our interview process based on candidate feedback and internal analysis.

**Key Changes:**

**Process Timeline:**
- Time-to-hire target: 21 days (was 35)
- Interview stages: 3 (was 4)
- Decision timeline: 48 hours post-final interview

**New Components:**
- Structured interview guides
- Skills assessment projects
- Team collaboration round
- Values alignment interview

**Candidate Experience:**
- Clear timeline communication
- Feedback provided to all candidates
- Improved scheduling tools
- Enhanced onboarding prep

**Interviewer Training:**
- Required unconscious bias training
- Technical interview certification
- Feedback writing workshop
- Legal compliance training

**Resources:**
Access the new interview toolkit at: hiring.company.com/toolkit

Let's hire the best talent faster and more effectively!

Talent Team`,
  },
  {
    id: 44,
    sender: "Data Engineering",
    email: "data-eng@company.com",
    subject: "New Data Warehouse Launch",
    preview: "After 6 months of development, we're launching our new cloud data warehouse. The new infrastructure...",
    timestamp: "6 months ago",
    date: "Aug 5 at 4:30 PM",
    isStarred: true,
    isRead: false,
    body: `Team,

After 6 months of intensive development, we're excited to launch our new cloud data warehouse!

**New Infrastructure:**
- Snowflake data warehouse
- dbt for data transformation
- Airflow for orchestration
- Tableau for visualization

**Performance Improvements:**
- Query speed: 10x faster
- Data freshness: Near real-time
- Storage cost: 40% reduction
- Scalability: Automatic scaling

**Data Available:**
- Product analytics
- Customer behavior
- Financial metrics
- Operational data
- External market data

**Access:**
- BI tools: tableau.company.com
- SQL access: snowflake.company.com
- Data catalog: data.company.com/catalog

**Training:**
We'll host workshops next week:
- Tuesday: Introduction to new tools
- Wednesday: Advanced analytics
- Thursday: Self-service reporting

Data Engineering Team`,
  },
  {
    id: 45,
    sender: "Customer Education",
    email: "education@company.com",
    subject: "New Certification Program Launched",
    preview: "We've launched a new customer certification program to help users master our platform. The program includes...",
    timestamp: "7 months ago",
    date: "Jul 25 at 2:00 PM",
    isStarred: false,
    isRead: true,
    body: `Team,

We're excited to launch our new customer certification program designed to help users master our platform and advance their careers!

**Certification Levels:**

**Fundamentals (Beginner)**
- Platform basics
- Core features
- 2-hour course + exam

**Professional (Intermediate)**
- Advanced functionality
- Best practices
- 4-hour course + project

**Expert (Advanced)**
- Technical mastery
- Implementation strategy
- 8-hour course + case study

**Architect (Elite)**
- Enterprise deployment
- Advanced customization
- 16-hour course + capstone

**Benefits:**
- Official certification badge
- LinkedIn profile recognition
- Partner program eligibility
- Priority support access

**Launch Promotion:**
First 100 certifications are free! Share with your customers: learn.company.com/certification

Education Team`,
  },
  {
    id: 46,
    sender: "Performance Team",
    email: "performance@company.com",
    subject: "Q2 Performance Review Cycle Starting",
    preview: "The Q2 performance review cycle begins next week. Managers should prepare feedback and employees should...",
    timestamp: "7 months ago",
    date: "Jul 20 at 11:00 AM",
    isStarred: true,
    isRead: false,
    body: `Team,

The Q2 performance review cycle begins next week. This is an important opportunity for growth, feedback, and alignment.

**Timeline:**
- Self-reviews due: July 31
- Manager reviews due: August 7
- Calibration meetings: August 8-12
- Feedback conversations: August 13-16

**Process Updates:**
- Simplified review form (5 questions)
- Focus on growth and development
- Clear performance indicators
- Career pathing integration

**Preparation Tips:**

**For Employees:**
- Reflect on accomplishments
- Gather peer feedback
- Identify growth areas
- Draft career goals

**For Managers:**
- Collect team feedback
- Review performance data
- Prepare development plans
- Schedule conversations

**Resources:**
- Review platform: performance.company.com
- Guide: performance.company.com/guide
- FAQs: performance.company.com/faq

Let's make this our most impactful review cycle yet!

Performance Team`,
  },
  {
    id: 47,
    sender: "International Expansion",
    email: "international@company.com",
    subject: "European Market Launch Planning",
    preview: "We're beginning planning for our European market launch in 2025. This expansion represents a major...",
    timestamp: "8 months ago",
    date: "Jul 10 at 3:30 PM",
    isStarred: false,
    isRead: true,
    body: `Team,

We're beginning the planning phase for our European market launch in 2025 - a major milestone in our company's growth!

**Launch Timeline:**
- Planning: Now - December 2024
- Preparation: January - June 2025
- Soft Launch: July 2025
- Full Launch: September 2025

**Key Markets:**
- United Kingdom
- Germany
- France
- Netherlands
- Spain

**Required Workstreams:**

**Product & Engineering:**
- GDPR compliance
- Multi-language support
- Local payment methods
- Data residency

**Marketing:**
- Localized content
- Market-specific campaigns
- Partner development
- Brand localization

**Legal & Operations:**
- Entity establishment
- Tax compliance
- Employment laws
- Data protection

**Get Involved:**
We're forming cross-functional teams. Express interest at: expansion.company.com/interest

International Team`,
  },
  {
    id: 48,
    sender: "Innovation Lab",
    email: "innovation@company.com",
    subject: "Hackathon 2024 - Save the Date!",
    preview: "Get ready for our annual company hackathon! This year's theme is 'AI-Powered Innovation' and we have...",
    timestamp: "8 months ago",
    date: "Jul 5 at 1:45 PM",
    isStarred: true,
    isRead: false,
    body: `Team,

Get ready for our most exciting hackathon yet! This year's theme is "AI-Powered Innovation" and we can't wait to see what you create.

**Event Details:**
- Dates: September 12-14, 2024
- Location: Main Office & Remotely
- Theme: AI-Powered Innovation
- Teams: 4-6 people

**What's New This Year:**
- $50,000 in total prizes
- Executive judging panel
- Prototype-to-production track
- AI tools and resources provided

**Tracks:**
- Product Innovation
- Internal Tooling
- Customer Experience
- Wildcard (anything goes!)

**Prizes:**
- Grand Prize: $20,000 + executive presentation
- Category Winners: $5,000 each
- People's Choice: $2,500
- Best First-time Hack: $2,500

**Registration:**
Sign up by August 15th: hackathon.company.com/register

No coding experience required - we need diverse skills and perspectives!

Innovation Lab`,
  },
  {
    id: 49,
    sender: "System Reliability",
    email: "sre@company.com",
    subject: "Q2 System Reliability Report",
    preview: "Our Q2 system reliability report shows significant improvements in uptime and performance. Key metrics...",
    timestamp: "9 months ago",
    date: "Jun 25 at 11:00 AM",
    isStarred: false,
    isRead: true,
    body: `Team,

Our Q2 system reliability report shows significant improvements across all key metrics - great work everyone!

**Q2 2024 Reliability Metrics:**

**Uptime:**
- Overall: 99.99% (up from 99.97%)
- API: 99.99% (up from 99.98%)
- Web: 99.99% (up from 99.96%)
- Mobile: 99.98% (up from 99.95%)

**Performance:**
- API response time: 89ms (improved from 112ms)
- Page load time: 1.2s (improved from 1.8s)
- Mobile app launch: 0.8s (improved from 1.1s)

**Incidents:**
- Total incidents: 8 (down from 15)
- Severity 1: 0 (down from 2)
- Mean time to resolution: 1.2 hours (down from 2.8)

**Key Initiatives Driving Improvement:**
- Automated failure detection
- Improved monitoring
- Proactive capacity planning
- Enhanced deployment processes

**Q3 Focus:**
- Cross-region redundancy
- Advanced performance optimization
- Disaster recovery automation

SRE Team`,
  },
  {
    id: 50,
    sender: "Company Founders",
    email: "founders@company.com",
    subject: "5-Year Company Anniversary Celebration",
    preview: "We're celebrating 5 years of Company next month! It's been an incredible journey, and we want to celebrate...",
    timestamp: "9 months ago",
    date: "Jun 15 at 4:00 PM",
    isStarred: true,
    isRead: false,
    body: `Team,

We're celebrating 5 years of Company next month! It's been an incredible journey, and we're so grateful to every one of you who has been part of our story.

**Celebration Events:**

**Main Celebration - July 15th**
- Time: 6:00 PM - 11:00 PM
- Location: City Convention Center
- Live music, food, drinks, and surprises!
- Plus ones welcome

**Week of Events:**
- Monday: Office breakfast & history wall
- Tuesday: Team photos
- Wednesday: Customer stories showcase
- Thursday: Innovation fair
- Friday: Main celebration!

**Special Announcements:**
- Employee appreciation gifts
- Anniversary bonus
- Updated company vision
- Growth milestone awards

**Our Journey:**
- 2019: 5 people, 1 room
- 2020: Product launch, first customers
- 2021: Series A, team growth
- 2022: Product expansion, profitability
- 2023: International customers
- 2024: 200 employees, market leadership

Thank you for building this incredible company with us. Here's to the next 5 years!

With gratitude,
The Founders`
  }
]