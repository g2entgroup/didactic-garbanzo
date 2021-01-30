import Login from './Authentication/login';
import Signup from './Authentication/signup';
import ForgotPassword from './Authentication/forgotpassword';
import NotFound from './Authentication/404';
import Maintenance from './Authentication/maintenance';
import Dashboard from './Dashboard/dashboard';
import Dashboard2 from './Dashboard/dashboard2';
import Dashboard3 from './Dashboard/dashboard3';
import Dashboard4 from './Dashboard/dashboard4';
import Dashboard5 from './Dashboard/dashboard5';
import Dashboard6 from './Dashboard/dashboard6';
import Dashboard7 from './Dashboard/dashboard7';
import Dashboard8 from './Dashboard/dashboard8';
import Dashboard9 from './Dashboard/dashboard9';
import Dashboard10 from './Dashboard/dashboard10';
import Dashboard11 from './Dashboard/dashboard11';
import Dashboard12 from './Dashboard/dashboard12';
import FormAdvanced from './Form/formAdvanced';
import FormBasic from './Form/formsBasic';
import FormCropping from './Form/formsCropping';
import FormDragdropupload from './Form/formDragdropupload';
import FormsEditors from './Form/formsEditors';
import FormSummernote from './Form/formSummernote';
import FormValidation from './Form/formValidation';
import FormWizard from './Form/formWizard';
import ListView from './Contacts/ListView';
import GridView from './Contacts/GridView';
import Inbox from './Email/Inbox';
import Compose from './Email/Compose';
import Details from './Email/Details';
import Chat from './Messenger/chat';
import ProjectList from './Projects/ProjectList';
import TicketList from './Projects/TicketList';
import TicketDetails from './Projects/TicketDetails';
import Taskboard from './Projects/Taskboard';
import TodoList from './Projects/TodoList';
import Clients from './Projects/Clients';
import Icons from './UI/Icons';
import SimpleLine from './UI/SimpleLine';
import Themify from './UI/Themify';
import Bootstrap from './Components/Bootstrap';
import Typography from './Components/Typography';
import RangeSliders from './Components/RangeSliders';
import Tabs from './Components/Tabs';
import ProgressBars from './Components/ProgressBars';
import Notifications from './Components/Notifications';
import Modals from './Components/Modals';
import Calendar from './Calendar/Calendar';
import ApexChart from './Chart/apexChart';
import jVector from './Map/jVector';
import PageSocial from './Pages/pageSocial';
import PageNews from './Pages/pageNews';
import PageBlogPost from './Pages/pageBlogPost';
import PageBlog from './Pages/pageBlog';
import pageBlank from './Pages/pageBlank';
import pageProfile from './Pages/pageProfile';
import pageUserList from './Pages/pageUserList';
import PageTestimonials from './Pages/pageTestimonials';
import PageInvoiceDetails from './Pages/pageInvoiceDetails';
import PageInvoice from './Pages/pageInvoice';
import PageTimeline from './Pages/pageTimeline';
import PageSearchResult from './Pages/pageSearchResult';
import PageGallery from './Pages/pageGallery';
import PagePricing from './Pages/pagePricing';
import PageComingSoon from './Pages/pageComingSoon';
import Widgets from './Widgets/Widgets';
import TableColor from './Table/tableColor';
import TableDragger from './Table/tableDragger';
import TableEditable from './Table/tableEditable';
import TableFilter from './Table/tableFilter';
import TableJqueryDatatable from './Table/tableJqueryDatatable';
import TableNormal from './Table/tableNormal';
import Colors from './Components/Colors';
import Buttons from './Components/Buttons';
import Dialogs from './Components/Dialogs';
import ListGroup from './Components/ListGroup';
import MediaObject from './Components/MediaObject';
import Nestable from './Components/Nestable';

const Routes = [
    {
        path: "/ui-nestable",
        name: 'Nestable',
        exact: true,
        pageTitle: "Nestable",
        component: Nestable
    },
    {
        path: "/ui-media-object",
        name: 'MediaObject',
        exact: true,
        pageTitle: "MediaObject",
        component: MediaObject
    },
    {
        path: "/ui-list-groups",
        name: 'ListGroup',
        exact: true,
        pageTitle: "ListGroup",
        component: ListGroup
    },
    {
        path: "/ui-dialogs",
        name: 'Dialogs',
        exact: true,
        pageTitle: "Dialogs",
        component: Dialogs
    },
    {
        path: "/ui-buttons",
        name: 'Buttons',
        exact: true,
        pageTitle: "Buttons",
        component: Buttons
    },
    {
        path: "/ui-colors",
        name: 'Colors',
        exact: true,
        pageTitle: "Colors",
        component: Colors
    },
    {
        path: "/table/table-normal",
        name: 'tablenormal',
        exact: true,
        pageTitle: "TableNormal",
        component: TableNormal
    },
    {
        path: "/table/table-jquery-datatable",
        name: 'tablejquerydatatable',
        exact: true,
        pageTitle: "TableJqueryDatatable",
        component: TableJqueryDatatable
    },
    {
        path: "/table/table-filter",
        name: 'tablefilter',
        exact: true,
        pageTitle: "TableFilter",
        component: TableFilter
    },
    {
        path: "/table/table-editable",
        name: 'tableeditable',
        exact: true,
        pageTitle: "TableEditable",
        component: TableEditable
    },
    {
        path: "/table/table-dragger",
        name: 'tabledragger',
        exact: true,
        pageTitle: "TableDragger",
        component: TableDragger
    },
    {
        path: "/table/table-color",
        name: 'tablecolor',
        exact: true,
        pageTitle: "TableColor",
        component: TableColor
    },
    {
        path: "/page-coming-soon",
        name: 'Page Coming Soon',
        exact: true,
        pageTitle: "Page Coming Soon",
        component: PageComingSoon
    },
    {
        path: "/widgets",
        name: 'Widgets',
        exact: true,
        pageTitle: "Widgets",
        component: Widgets
    },
    {
        path: "/page-pricing",
        name: 'Page Pricing',
        exact: true,
        pageTitle: "Page Gallery",
        component: PagePricing
    },
    {
        path: "/dashboard12",
        name: 'dashboard12',
        exact: true,
        pageTitle: "Dashboard12",
        component: Dashboard12
    },
    {
        path: "/task-board",
        name: 'Taskboard',
        exact: true,
        pageTitle: "Taskboard",
        component: Taskboard
    },
    {
        path: "/notifications",
        name: 'Notifications',
        exact: true,
        pageTitle: "Notifications",
        component: Notifications
    },
    {
        path: "/tabs",
        name: 'Tabs',
        exact: true,
        pageTitle: "Tabs",
        component: Tabs
    },
    {
        path: "/progressbars",
        name: 'ProgressBars',
        exact: true,
        pageTitle: "ProgressBars",
        component: ProgressBars
    },
    {
        path: "/modals",
        name: 'Modals',
        exact: true,
        pageTitle: "Modals",
        component: Modals
    },
    {
        path: "/ui-range-sliders",
        name: 'RangeSliders',
        exact: true,
        pageTitle: "RangeSliders",
        component: RangeSliders
    },
    {
        path: "/page-gallery",
        name: 'Page Gallery',
        exact: true,
        pageTitle: "Page Gallery",
        component: PageGallery
    },
    {
        path: "/page-search-results",
        name: 'Page Search Results',
        exact: true,
        pageTitle: "Page Search Results",
        component: PageSearchResult
    },
    {
        path: "/page-timeline",
        name: 'Page Timeline',
        exact: true,
        pageTitle: "Page Timeline",
        component: PageTimeline
    },
    {
        path: "/page-invoices",
        name: 'Page Invoice',
        exact: true,
        pageTitle: "Page Invoice",
        component: PageInvoice
    },
    {
        path: "/page-invoices-details",
        name: 'Page Invoice Details',
        exact: true,
        pageTitle: "Page Invoice Details",
        component: PageInvoiceDetails
    },
    {
        path: "/page-testimonials",
        name: 'Page Testimonials',
        exact: true,
        pageTitle: "Page Testimonials",
        component: PageTestimonials
    },
    {
        path: "/page-user-list",
        name: 'Page User List',
        exact: true,
        pageTitle: "Page User List",
        component: pageUserList
    },
    {
        path: "/page-profile",
        name: 'Page Profile',
        exact: true,
        pageTitle: "Page Profile",
        component: pageProfile
    },
    {
        path: "/page-blank",
        name: 'Page Blank',
        exact: true,
        pageTitle: "Page Blank",
        component: pageBlank
    },
    {
        path: "/page-blog-post",
        name: 'Page Blog post',
        exact: true,
        pageTitle: "Page Blog Post",
        component: PageBlogPost
    },
    {
        path: "/page-blog",
        name: 'Page Blog',
        exact: true,
        pageTitle: "Page Blog",
        component: PageBlog
    },
    {
        path: "/app-clients",
        name: 'Clients',
        exact: true,
        pageTitle: "Clients",
        component: Clients
    },
    {
        path: "/app-todo",
        name: 'TodoList',
        exact: true,
        pageTitle: "TodoList",
        component: TodoList
    },
    {
        path: "/page-news",
        name: 'Page News',
        exact: true,
        pageTitle: "Page News",
        component: PageNews
    },
    {
        path: "/page-social",
        name: 'Page Social',
        exact: true,
        pageTitle: "Page Social",
        component: PageSocial
    },
    {
        path: "/app-jVector-map",
        name: 'JVector',
        exact: true,
        pageTitle: "JVector",
        component: jVector
    },
    {
        path: "/chart/chart-apex",
        name: 'ApexChart',
        exact: true,
        pageTitle: "ApexChart",
        component: ApexChart
    },
    {
        path: "/app-calendar",
        name: 'Calendar',
        exact: true,
        pageTitle: "Calendar",
        component: Calendar
    },
    {
        path: "/ui-typography",
        name: 'Typography',
        exact: true,
        pageTitle: "Typography",
        component: Typography
    },
    {
        path: "/ui-bootstrap",
        name: 'Bootstrap',
        exact: true,
        pageTitle: "Bootstrap",
        component: Bootstrap
    },
    {
        path: "/ui-icons-themify",
        name: 'Themify',
        exact: true,
        pageTitle: "Themify",
        component: Themify
    },
    {
        path: "/ui-icons-line",
        name: 'simpleLine',
        exact: true,
        pageTitle: "SimpleLine",
        component: SimpleLine
    },
    {
        path: "/ui-icons",
        name: 'icons',
        exact: true,
        pageTitle: "Icons",
        component: Icons
    },
    {
        path: "/app-ticket-details",
        name: 'ticketDetails',
        exact: true,
        pageTitle: "TicketDetails",
        component: TicketDetails
    },
    {
        path: "/app-ticket",
        name: 'ticketList',
        exact: true,
        pageTitle: "TicketList",
        component: TicketList
    },
    {
        path: "/app-project-list",
        name: 'projectList',
        exact: true,
        pageTitle: "ProjectList",
        component: ProjectList
    },
    {
        path: "/app-chat",
        name: 'chat',
        exact: true,
        pageTitle: "Chat",
        component: Chat
    },
    {
        path: "/app-inbox-detail",
        name: 'details',
        exact: true,
        pageTitle: "Details",
        component: Details
    },
    {
        path: "/app-compose",
        name: 'compose',
        exact: true,
        pageTitle: "Compose",
        component: Compose
    },
    {
        path: "/app-inbox",
        name: 'inbox',
        exact: true,
        pageTitle: "Inbox",
        component: Inbox
    },
    {
        path: "/app-contact2",
        name: 'gridView',
        exact: true,
        pageTitle: "Grid View",
        component: GridView
    },
    {
        path: "/app-contact",
        name: 'listView',
        exact: true,
        pageTitle: "List View",
        component: ListView
    },
    {
        path: "/form/form-wizard",
        name: 'formwizard',
        exact: true,
        pageTitle: "FormWizard",
        component: FormWizard
    },
    {
        path: "/form/form-validation",
        name: 'formvalidation',
        exact: true,
        pageTitle: "FormValidation",
        component: FormValidation
    },
    {
        path: "/form/form-summernote",
        name: 'formsummernote',
        exact: true,
        pageTitle: "FormSummernote",
        component: FormSummernote
    },
    {
        path: "/form/form-editors",
        name: 'formseditors',
        exact: true,
        pageTitle: "FormsEditors",
        component: FormsEditors
    },
    {
        path: "/form/form-dragdropupload",
        name: 'formdragdropupload',
        exact: true,
        pageTitle: "FormDragdropupload",
        component: FormDragdropupload
    },
    {
        path: "/form/form-cropping",
        name: 'formscropping',
        exact: true,
        pageTitle: "FormsCropping",
        component: FormCropping
    },
    {
        path: "/form/form-basic",
        name: 'formbasic',
        exact: true,
        pageTitle: "FormBasic",
        component: FormBasic
    },
    {
        path: "/form/form-advanced",
        name: 'formadvanced',
        exact: true,
        pageTitle: "FormAdvanced",
        component: FormAdvanced
    },
    {
        path: "/dashboard11",
        name: 'dashboard11',
        exact: true,
        pageTitle: "Dashboard11",
        component: Dashboard11
    },
    {
        path: "/dashboard10",
        name: 'dashboard10',
        exact: true,
        pageTitle: "Dashboard10",
        component: Dashboard10
    },
    {
        path: "/dashboard9",
        name: 'dashboard9',
        exact: true,
        pageTitle: "Dashboard9",
        component: Dashboard9
    },
    {
        path: "/dashboard8",
        name: 'dashboard8',
        exact: true,
        pageTitle: "Dashboard8",
        component: Dashboard8
    },
    {
        path: "/dashboard7",
        name: 'dashboard7',
        exact: true,
        pageTitle: "Dashboard7",
        component: Dashboard7
    },
    {
        path: "/dashboard6",
        name: 'dashboard6',
        exact: true,
        pageTitle: "Dashboard6",
        component: Dashboard6
    },
    {
        path: "/dashboard5",
        name: 'dashboard5',
        exact: true,
        pageTitle: "Dashboard5",
        component: Dashboard5
    },
    {
        path: "/dashboard4",
        name: 'dashboard4',
        exact: true,
        pageTitle: "Dashboard4",
        component: Dashboard4
    },
    {
        path: "/dashboard3",
        name: 'dashboard3',
        exact: true,
        pageTitle: "Dashboard3",
        component: Dashboard3
    },
    {
        path: "/dashboard2",
        name: 'dashboard2',
        exact: true,
        pageTitle: "Dashboard2",
        component: Dashboard2
    },
    {
        path: "/",
        name: 'dashboard',
        exact: true,
        pageTitle: "Dashboard",
        component: Dashboard
    },
    {
        path: "/login",
        name: 'login',
        exact: true,
        pageTitle: "Tables",
        component: Login
    },
    {
        path: "/signup",
        name: 'signup',
        exact: true,
        pageTitle: "Tables",
        component: Signup
    },
    {
        path: "/forgotpassword",
        name: 'forgotpassword',
        exact: true,
        pageTitle: "Tables",
        component: ForgotPassword
    },
    {
        path: "/maintenance",
        name: 'maintenance',
        exact: true,
        pageTitle: "Maintenance",
        component: Maintenance
    },
    {
        path: "/notfound",
        name: 'notfound',
        exact: true,
        pageTitle: "Tables",
        component: NotFound
    }
];

export default Routes;