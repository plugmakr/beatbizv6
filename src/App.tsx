import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import LandingPage from './components/LandingPage'
import Login from './components/Login'
import Register from './components/Register'
import AdminDashboard from './components/AdminDashboard'
import MemberPortal from './components/MemberPortal'
import Marketplace from './components/Marketplace'
import Features from './components/Features'
import ArtistPage from './components/ArtistPage'

// Admin components
import UserManagement from './components/admin/UserManagement'
import GeneralSettings from './components/admin/GeneralSettings'
import FinancialManagement from './components/admin/FinancialManagement'
import AdminAnalytics from './components/admin/AdminAnalytics'
import AdminMarketplace from './components/admin/AdminMarketplace'
import SecurityManagement from './components/admin/SecurityManagement'
import SupportManagement from './components/admin/SupportManagement'
import SubscriptionPlans from './components/admin/subscriptions/PlanManagement'
import WebsiteBuilder from './components/admin/websites/Templates'
import FunnelBuilder from './components/admin/funnels/FunnelTemplates'

// New admin components
import SiteSettings from './components/admin/general/SiteSettings'
import Notifications from './components/admin/general/Notifications'
import Maintenance from './components/admin/general/Maintenance'
import AllUsers from './components/admin/users/AllUsers'
import Roles from './components/admin/users/Roles'
import Permissions from './components/admin/users/Permissions'
import Revenue from './components/admin/financials/Revenue'
import Payouts from './components/admin/financials/Payouts'
import SalesPercentages from './components/admin/financials/SalesPercentages'
import UserActivity from './components/admin/analytics/UserActivity'
import ContentPerformance from './components/admin/analytics/ContentPerformance'
import SalesReports from './components/admin/analytics/SalesReports'
import MarketplaceInsights from './components/admin/analytics/MarketplaceInsights'
import Products from './components/admin/marketplace/Products'
import Categories from './components/admin/marketplace/Categories'
import FeaturedItems from './components/admin/marketplace/FeaturedItems'
import Promotions from './components/admin/marketplace/Promotions'
import AccessLogs from './components/admin/security/AccessLogs'
import SecuritySettings from './components/admin/security/SecuritySettings'
import DataProtection from './components/admin/security/DataProtection'
import ApiKeys from './components/admin/security/ApiKeys'
import Tickets from './components/admin/support/Tickets'
import Faqs from './components/admin/support/Faqs'
import ContactForms from './components/admin/support/ContactForms'
import KnowledgeBase from './components/admin/support/KnowledgeBase'
import Pricing from './components/admin/subscriptions/Pricing'
import SubscriptionFeatures from './components/admin/subscriptions/Features'
import Discounts from './components/admin/subscriptions/Discounts'
import CustomDomains from './components/admin/websites/CustomDomains'
import SeoSettings from './components/admin/websites/SeoSettings'
import WebsiteAnalytics from './components/admin/websites/WebsiteAnalytics'
import ConversionRates from './components/admin/funnels/ConversionRates'
import AbTesting from './components/admin/funnels/AbTesting'
import EmailIntegration from './components/admin/funnels/EmailIntegration'

// Member components
import ProjectManagement from './components/member/ProjectManagement'
import FinanceManagement from './components/member/FinanceManagement'
import ClientManagement from './components/member/ClientManagement'
import MemberAnalytics from './components/member/MemberAnalytics'
import Collaboration from './components/member/Collaboration'
import MemberMarketplace from './components/member/MemberMarketplace'
import MemberSettings from './components/member/MemberSettings'
import MemberSupport from './components/member/MemberSupport'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="marketplace" element={<Marketplace />} />
          <Route path="features" element={<Features />} />
          <Route path="artist/:id" element={<ArtistPage />} />
        </Route>
        
        <Route path="/admin" element={<AdminDashboard />}>
          <Route path="general" element={<GeneralSettings />}>
            <Route path="site-settings" element={<SiteSettings />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="maintenance" element={<Maintenance />} />
          </Route>
          <Route path="users" element={<UserManagement />}>
            <Route path="all-users" element={<AllUsers />} />
            <Route path="roles" element={<Roles />} />
            <Route path="permissions" element={<Permissions />} />
          </Route>
          <Route path="financials" element={<FinancialManagement />}>
            <Route path="revenue" element={<Revenue />} />
            <Route path="payouts" element={<Payouts />} />
            <Route path="subscriptions" element={<SubscriptionPlans />} />
            <Route path="sales-percentages" element={<SalesPercentages />} />
          </Route>
          <Route path="analytics" element={<AdminAnalytics />}>
            <Route path="user-activity" element={<UserActivity />} />
            <Route path="content-performance" element={<ContentPerformance />} />
            <Route path="sales-reports" element={<SalesReports />} />
            <Route path="marketplace-insights" element={<MarketplaceInsights />} />
          </Route>
          <Route path="marketplace" element={<AdminMarketplace />}>
            <Route path="products" element={<Products />} />
            <Route path="categories" element={<Categories />} />
            <Route path="featured-items" element={<FeaturedItems />} />
            <Route path="promotions" element={<Promotions />} />
          </Route>
          <Route path="security" element={<SecurityManagement />}>
            <Route path="access-logs" element={<AccessLogs />} />
            <Route path="security-settings" element={<SecuritySettings />} />
            <Route path="data-protection" element={<DataProtection />} />
            <Route path="api-keys" element={<ApiKeys />} />
          </Route>
          <Route path="support" element={<SupportManagement />}>
            <Route path="tickets" element={<Tickets />} />
            <Route path="faqs" element={<Faqs />} />
            <Route path="contact-forms" element={<ContactForms />} />
            <Route path="knowledge-base" element={<KnowledgeBase />} />
          </Route>
          <Route path="subscriptions" element={<SubscriptionPlans />}>
            <Route path="plan-management" element={<SubscriptionPlans />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="features" element={<SubscriptionFeatures />} />
            <Route path="discounts" element={<Discounts />} />
          </Route>
          <Route path="websites" element={<WebsiteBuilder />}>
            <Route path="templates" element={<WebsiteBuilder />} />
            <Route path="custom-domains" element={<CustomDomains />} />
            <Route path="seo-settings" element={<SeoSettings />} />
            <Route path="website-analytics" element={<WebsiteAnalytics />} />
          </Route>
          <Route path="funnels" element={<FunnelBuilder />}>
            <Route path="funnel-templates" element={<FunnelBuilder />} />
            <Route path="conversion-rates" element={<ConversionRates />} />
            <Route path="ab-testing" element={<AbTesting />} />
            <Route path="email-integration" element={<EmailIntegration />} />
          </Route>
        </Route>
        
        <Route path="/member" element={<MemberPortal />}>
          <Route path="projects" element={<ProjectManagement />} />
          <Route path="finances" element={<FinanceManagement />} />
          <Route path="clients" element={<ClientManagement />} />
          <Route path="analytics" element={<MemberAnalytics />} />
          <Route path="collaboration" element={<Collaboration />} />
          <Route path="marketplace" element={<MemberMarketplace />} />
          <Route path="settings" element={<MemberSettings />} />
          <Route path="support" element={<MemberSupport />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App