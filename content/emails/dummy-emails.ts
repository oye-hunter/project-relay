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
]
