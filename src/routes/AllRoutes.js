import { Redirect } from "react-router"

// Dashboard
import Dashboard from "../pages/dashboard/Dashboard"

// Home/ influencers required
import Home from "../pages/home/Home"

// Notifications
import Notifications from "../pages/notifications/Notifications"

// Profile
import Profile from "../pages/profile/Profile"
import EditProfile from "../pages/profile/EditProfile"
import EditResume from "../pages/profile/EditResume"
import ViewProfile from "../pages/profile/ViewProfile"
import ViewResume from "../pages/profile/ViewResume"

// Find people
import FindPeople from "../pages/findPeople/FindPeople"

// Stats
import Stats from "../pages/stats/Stats"

// Messaging
import Message from "../pages/messages/Message"
import MessagesRoom from "../pages/messages/MessagesRoom"

// Settings
import Settings from "../pages/settings/Settings"

// Help
import FAQs from "../pages/faqs/FAQs"

// Detail Views
import ListingDetailPage from "../pages/detail-views/ListingDetailPage"
import ProjectDashboard from "../pages/detail-views/ProjectDashboard"


// Authentication
import Login from "../pages/authentication/Login"
import Register from "../pages/authentication/Register"

// Extras
import Pages404 from "../pages/extras/Pages404"
import Pages500 from "../pages/extras/Pages500"

const userRoutes = [
    // dashboard
    { path: "/dashboard", component: Dashboard },

    // Home
    { path: "/home", component: Home },

    // Notifications
    { path: "/notifications", component: Notifications },

    // Profile
    { path: "/profile", component: Profile },
    { path: "/edit-profile", component: EditProfile },
    { path: "/c/@:username", component: ViewProfile },
    { path: "/edit-resume", component: EditResume },
    { path: "/view-resume", component: ViewResume },

    // Find People
    { path: "/find", component: FindPeople },

    // Stats
    { path: "/stats", component: Stats },
  
    // Messaging
    { path: "/messages", component: Message },
    { path: "/messages/:id", component: MessagesRoom },

    // Settings
    { path: "/settings", component: Settings },

    // Help
    { path: "/help", component: FAQs },
    
    // Detail View
    { path: "/listing/:id", component: ListingDetailPage },
    { path: "/project/:id", component: ProjectDashboard },

    // this route should be at the end of all other routes
    { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
]


const authRoutes = [
    // authentication
    { path: "/login", component: Login },
    { path: "/register", component: Register },
  
    // extras
    { path: "/pages-404", component: Pages404 },
    { path: "/pages-500", component: Pages500 },
]

export { userRoutes, authRoutes }