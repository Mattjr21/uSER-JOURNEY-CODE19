import React, { useState } from 'react'
import './App.css'
import CustomerJourneyMap from './components/CustomerJourneyMap'

function App() {
  return (
    <div className="App">
      <CustomerJourneyMap
        heading="Motorsport Customer Journey Map"
        subheading="Discover how different personas engage with our motorsport brand through their unique customer journeys."
        personas={[
          {
            id: "fan",
            emoji: "🏁",
            title: "Racing Fan",
            description: "Passionate motorsport enthusiast seeking thrilling experiences",
            journey: [
              {
                title: "Discover",
                description: "Initial awareness and interest in motorsport content through social media and search",
                stats: [
                  { icon: "📊", label: "Engagement Rate", value: "85%" },
                  { icon: "⏱️", label: "Time Spent", value: "12min" },
                  { icon: "🎯", label: "Conversion", value: "23%" }
                ]
              },
              {
                title: "Navigate",
                description: "Exploring different racing categories and finding preferred content types",
                stats: [
                  { icon: "🔍", label: "Pages Viewed", value: "8.5" },
                  { icon: "📱", label: "Mobile Usage", value: "72%" },
                  { icon: "⭐", label: "Satisfaction", value: "4.2/5" }
                ]
              },
              {
                title: "Engage",
                description: "Active participation in community discussions and content consumption",
                stats: [
                  { icon: "💬", label: "Comments", value: "156" },
                  { icon: "👥", label: "Shares", value: "43" },
                  { icon: "🔔", label: "Notifications", value: "89%" }
                ]
              },
              {
                title: "Convert",
                description: "Making purchases, subscribing to premium content, or attending events",
                stats: [
                  { icon: "💰", label: "Revenue", value: "$127" },
                  { icon: "🎫", label: "Events", value: "3" },
                  { icon: "📈", label: "Lifetime Value", value: "$890" }
                ]
              }
            ]
          },
          {
            id: "tech",
            emoji: "🤖",
            title: "Tech Enthusiast",
            description: "Interested in autonomous racing technology and innovation",
            journey: [
              {
                title: "Discover",
                description: "Learning about autonomous racing through tech publications and conferences",
                stats: [
                  { icon: "🔬", label: "Research Time", value: "45min" },
                  { icon: "📚", label: "Articles Read", value: "12" },
                  { icon: "🎯", label: "Interest Score", value: "92%" }
                ]
              },
              {
                title: "Navigate",
                description: "Deep diving into technical specifications and development updates",
                stats: [
                  { icon: "⚙️", label: "Tech Pages", value: "15" },
                  { icon: "📊", label: "Data Downloads", value: "8" },
                  { icon: "🔗", label: "External Links", value: "23" }
                ]
              },
              {
                title: "Engage",
                description: "Participating in technical forums and beta testing programs",
                stats: [
                  { icon: "🧪", label: "Beta Tests", value: "5" },
                  { icon: "💭", label: "Forum Posts", value: "89" },
                  { icon: "🤝", label: "Collaborations", value: "12" }
                ]
              },
              {
                title: "Convert",
                description: "Investing in technology partnerships or development programs",
                stats: [
                  { icon: "💼", label: "Partnerships", value: "2" },
                  { icon: "💰", label: "Investment", value: "$5.2K" },
                  { icon: "🚀", label: "Projects", value: "7" }
                ]
              }
            ]
          },
          {
            id: "sponsor",
            emoji: "💰",
            title: "Corporate Sponsor",
            description: "Business looking for marketing opportunities and brand exposure",
            journey: [
              {
                title: "Discover",
                description: "Identifying motorsport as a viable marketing channel for brand exposure",
                stats: [
                  { icon: "📈", label: "ROI Potential", value: "340%" },
                  { icon: "👥", label: "Audience Reach", value: "2.1M" },
                  { icon: "🎯", label: "Target Match", value: "87%" }
                ]
              },
              {
                title: "Navigate",
                description: "Evaluating different sponsorship packages and partnership opportunities",
                stats: [
                  { icon: "📋", label: "Packages Reviewed", value: "6" },
                  { icon: "💼", label: "Meetings", value: "4" },
                  { icon: "📊", label: "Analytics", value: "15" }
                ]
              },
              {
                title: "Engage",
                description: "Negotiating terms and developing custom sponsorship agreements",
                stats: [
                  { icon: "🤝", label: "Negotiations", value: "8" },
                  { icon: "📝", label: "Proposals", value: "3" },
                  { icon: "⏰", label: "Response Time", value: "2.5d" }
                ]
              },
              {
                title: "Convert",
                description: "Finalizing sponsorship deals and launching marketing campaigns",
                stats: [
                  { icon: "✅", label: "Deals Closed", value: "1" },
                  { icon: "💰", label: "Investment", value: "$45K" },
                  { icon: "📺", label: "Campaigns", value: "12" }
                ]
              }
            ]
          },
          {
            id: "partner",
            emoji: "🤝",
            title: "Industry Partner",
            description: "Automotive company seeking strategic partnerships and collaboration",
            journey: [
              {
                title: "Discover",
                description: "Exploring strategic partnerships for technology development and market expansion",
                stats: [
                  { icon: "🔍", label: "Market Research", value: "30h" },
                  { icon: "🌐", label: "Global Reach", value: "45%" },
                  { icon: "⚡", label: "Innovation Score", value: "94%" }
                ]
              },
              {
                title: "Navigate",
                description: "Assessing partnership models and technical collaboration opportunities",
                stats: [
                  { icon: "🔧", label: "Tech Reviews", value: "12" },
                  { icon: "📋", label: "Frameworks", value: "5" },
                  { icon: "🎯", label: "Alignment", value: "91%" }
                ]
              },
              {
                title: "Engage",
                description: "Establishing working relationships and pilot program development",
                stats: [
                  { icon: "👥", label: "Team Meetings", value: "24" },
                  { icon: "🧪", label: "Pilot Programs", value: "3" },
                  { icon: "📈", label: "Progress Rate", value: "78%" }
                ]
              },
              {
                title: "Convert",
                description: "Signing long-term partnership agreements and joint venture creation",
                stats: [
                  { icon: "📄", label: "Agreements", value: "2" },
                  { icon: "💰", label: "Joint Investment", value: "$1.2M" },
                  { icon: "🚀", label: "Ventures", value: "1" }
                ]
              }
            ]
          }
        ]}
        backgroundColor="#F8F9FA"
        textColor="#000000"
        accentColor="#FF3B30"
        headingFont={{ fontSize: "40px", fontWeight: "bold" }}
        subheadingFont={{ fontSize: "18px" }}
        titleFont={{ fontSize: "20px", fontWeight: "600" }}
        bodyFont={{ fontSize: "16px" }}
      />
    </div>
  )
}

export default App
