import React from 'react'
//property
const Properties = React.lazy(() => import('./views/explore/propertyhome/Properties'))
const TranactionForm = React.lazy(() => import('./views/Transactionform/Index'))
const TransactionTable=React.lazy(() => import('./views/InvestorDashboard/InvestorDashboardComponent/FinancialLayout/Transection/Index'))
const AddProperty = React.lazy(() => import('./views/AddProperty/Index'))
const ControlPanel = React.lazy(() => import('./views/ControlPanal/Index'))
const ViewImageModel = React.lazy(() => import('./views/ViewImage/Index'))
const VerifyTransactions = React.lazy(() => import('./views/VerifyTransaction/Index'))
const AddManager = React.lazy(() => import('./views/AddManagers/Index'))
const AllManager = React.lazy(() => import('./views/AddManagers/ManagerAcces'))
const ManagerFormAcces = React.lazy(() => import('./views/AddManagers/ManagerFormSubmission'))
const VerifySingleTransactions = React.lazy(() => import('./views/VerifyTransaction/VerifyTransaction'))
const SaleAgent = React.lazy(() => import('./views/SaleAgent/Index'))
const AddSaleAgent = React.lazy(() => import('./views/SaleAgent/AddSaleAgent'))
const AgentProfile = React.lazy(() => import('./views/SaleAgent/AgentProfile'))
const AgentBalanceCheck = React.lazy(() => import('./views/SaleAgent/BalanceChecking'))
const AgentSaleHistory = React.lazy(() => import('./views/SaleAgent/SaleHistory'))
const AgentFormSubmission = React.lazy(() => import('./views/SaleAgent/AgentFormSubmission'))
const ManagerPortalAccess = React.lazy(() => import('./views/AddManagers/ManagerAccessPortal'))
const ManagerAccessProperties = React.lazy(() => import('./views/AddManagers/ShowManagerAccessProperties'))
const CommissionManagment = React.lazy(() => import('./views/CommissionManagment'))





const OwnerAcess = React.lazy(() => import('./views/explore/ownerpropertydertail/OwnerProperty'))
const SingleProperty = React.lazy(() => import('./views/explore/propertydetail/PropertyDetail'))
const Portfolio = React.lazy(() => import('./views/portfolio/Portfolio'))
const Profile =React.lazy(() => import('./views/Settings/Profile/Index'))
const PrivacySettings =React.lazy(() => import('./views/Settings/Privacy Settings/Index'))
const PasswordChange =React.lazy(() => import('./views/pages/ChangePassword/Index'))
const VerificationPage =React.lazy(() => import('./views/pages/Verificationdetail/Index'))
const Login=React.lazy(() => import('./views/pages/login/Login'))

const ForgotPassword =React.lazy(() => import('./views/pages/ForgotPassword/Index'))
const Register =React.lazy(() => import('./views/pages/register/Register'))

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Wallet = React.lazy(() => import('./views/wallet/Wallet'))
const Market = React.lazy(() => import('./views/market/Market'))
const Trade = React.lazy(() => import('./views/trade/Trade'))
const Learn = React.lazy(() => import('./views/learn/Learn'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

// Base
const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))
const Cards = React.lazy(() => import('./views/base/cards/Cards'))
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'))
const Navs = React.lazy(() => import('./views/base/navs/Navs'))
const Paginations = React.lazy(() => import('./views/base/paginations/Paginations'))
const Placeholders = React.lazy(() => import('./views/base/placeholders/Placeholders'))
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./views/base/progress/Progress'))
const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
const Tables = React.lazy(() => import('./views/base/tables/Tables'))
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))

// Buttons
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))

//Forms
const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
const Range = React.lazy(() => import('./views/forms/range/Range'))
const Select = React.lazy(() => import('./views/forms/select/Select'))
const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

const Charts = React.lazy(() => import('./views/charts/Charts'))

// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/TransactionForm', name: 'TransactionForm', element: TranactionForm },
  { path: '/TransactionTable', name: 'TransactionTable', element: TransactionTable },
  { path: '/property', name: 'property', element: AddProperty },
  { path: '/controlpanel', name: 'controlpanel', element: ControlPanel },
  { path: '/viewimage', name: 'viewimage', element: ViewImageModel },
  { path: '/verifytransactions', name: 'VerifyTransactions', element: VerifyTransactions },
  { path: '/VerifySingleTransactions', name: 'VerifySingleTransactions', element: VerifySingleTransactions },
  { path: '/addmanager', name: 'addmanager', element: AddManager },
  { path: '/allmanager', name: 'allmanager', element: AllManager },
  { path: '/saleagent', name: 'saleagent', element: SaleAgent },
  { path: '/addsaleagent', name: 'addsaleagent', element: AddSaleAgent },
  { path: '/agentprofile', name: 'AgentProfile', element: AgentProfile },
  { path: '/agentbalancecheck', name: 'AgentBalanceCheck', element: AgentBalanceCheck },
  { path: '/agentsalehistory', name: 'AgentSaleHistory', element: AgentSaleHistory },
  { path: '/agentformsubmission', name: 'AgentFormSubmission', element: AgentFormSubmission },
  { path: '/managerformacces', name: 'ManagerFormAcces', element: ManagerFormAcces },
  { path: '/manageraccessportal', name: 'ManagerPortalAccess', element: ManagerPortalAccess },
  { path: '/manageraccessproperties', name: 'ManagerAccessProperties', element: ManagerAccessProperties },
  { path: '/commissionmanagment', name: 'CommissionManagment', element: CommissionManagment },


  




  { path: '/explore', name: 'Properties', element: Properties },
  { path: '/explore/OwnerAcess', name: 'OwnerAcces', element: OwnerAcess },
  { path: '/explore/propertydetail', name: 'Property Details', element: SingleProperty },
  { path: '/Setting/Profile', name: 'Profile Settings', element: Login },
  { path: '/Setting/Provicy', name: 'Privacy Settings', element: PrivacySettings },
  { path: '/portfolio', name: 'My Portfolio', element: Portfolio },
  { path: '/login', name: 'Login', element: Login},
  { path: '/register', name: 'Register', element: Register},
  { path: '/VerificationPage', name: 'VerificationPage', element: VerificationPage},
  { path: '/PasswordChange', name: 'PasswordChange', element: PasswordChange},
  { path: '/ForgotPassword', name: 'ForgotPassword', element: ForgotPassword},

  
  { path: '/wallet', name: 'Wallet', element: Wallet},
  { path: '/market', name: 'Market', element: Market},
  { path: '/trade', name: 'Trade', element: Trade},
  { path: '/learn', name: 'Learn', element: Learn},
  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/theme/typography', name: 'Typography', element: Typography },
  { path: '/base', name: 'Base', element: Cards, exact: true },
  { path: '/base/accordion', name: 'Accordion', element: Accordion },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', element: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', element: Cards },
  { path: '/base/carousels', name: 'Carousel', element: Carousels },
  { path: '/base/collapses', name: 'Collapse', element: Collapses },
  { path: '/base/list-groups', name: 'List Groups', element: ListGroups },
  { path: '/base/navs', name: 'Navs', element: Navs },
  { path: '/base/paginations', name: 'Paginations', element: Paginations },
  { path: '/base/placeholders', name: 'Placeholders', element: Placeholders },
  { path: '/base/popovers', name: 'Popovers', element: Popovers },
  { path: '/base/progress', name: 'Progress', element: Progress },
  { path: '/base/spinners', name: 'Spinners', element: Spinners },
  { path: '/base/tables', name: 'Tables', element: Tables },
  { path: '/base/tooltips', name: 'Tooltips', element: Tooltips },
  { path: '/buttons', name: 'Buttons', element: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', element: Buttons },
  { path: '/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', element: ButtonGroups },
  { path: '/charts', name: 'Charts', element: Charts },
  { path: '/forms', name: 'Forms', element: FormControl, exact: true },
  { path: '/forms/form-control', name: 'Form Control', element: FormControl },
  { path: '/forms/select', name: 'Select', element: Select },
  { path: '/forms/checks-radios', name: 'Checks & Radios', element: ChecksRadios },
  { path: '/forms/range', name: 'Range', element: Range },
  { path: '/forms/input-group', name: 'Input Group', element: InputGroup },
  { path: '/forms/floating-labels', name: 'Floating Labels', element: FloatingLabels },
  { path: '/forms/layout', name: 'Layout', element: Layout },
  { path: '/forms/validation', name: 'Validation', element: Validation },
  { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', element: Flags },
  { path: '/icons/brands', name: 'Brands', element: Brands },
  { path: '/notifications', name: 'Notifications', element: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', element: Alerts },
  { path: '/notifications/badges', name: 'Badges', element: Badges },
  { path: '/notifications/modals', name: 'Modals', element: Modals },
  { path: '/notifications/toasts', name: 'Toasts', element: Toasts },
  { path: '/widgets', name: 'Widgets', element: Widgets },
]

export default routes
