const initialState = {
	isMegaMenu: false,
	isSearchbar: false,
	isNotificationbar: false,
	themeColor: 'theme-cyan',
	fontStyle: 'font-montserrat',
	lightVersion: false,
	RtlVersion: false,
	offcanvas: false,
	horizontalMenu: false,
	miniSidebar: false,
	miniHover: false,
	miniSideMenuOn: false,
	// is3DotMenu: false,
	// isDropDownMenu: false,
	// isProfileMenu: false,
	// isPagesMenu: false,
	// isMailMenu: false,
	// isNotificationMenu: false,
	// isLanguageMenu: false,
	// isAuthMenu: false,
	// isToggleLeftBar: false,
	// isToggleRightBar: false,
	// isOpenSettingBar: false,
	// themeColor: 'cyan',
	// isDarkMode: false,
	// isDarkHeader: false,
	// isFixNavbar: false,
	// isMinSidebar: false,
	// isDarkSidebar: false,
	// isIconColor: false,
	// isGradientColor: true,
	// isBoxShadow: false,
	// isBoxLayout: false,
	// isRtl: false,
	// isMenuGrid: false,
	// isFont: "font-muli",
	// isSubMenuIcon: "list-a",
	// isMenuIcon: "list-c"
}

export default (state = initialState, action) => {
	switch (action.type) {
		case 'TOGGLE_MEGA_MENU':
			return {
				...state,
				isMegaMenu: action.payload
			}
		case 'SET_MINI_SIDE_MENU_ON':
			return {
				...state,
				miniSideMenuOn: action.payload
			}
		case 'SET_MINI_HOVER':
			return {
				...state,
				miniHover: action.payload
			}
		case 'SET_MENU_SIDEBAR':
			return {
				...state,
				miniSidebar: action.payload
			}
		case 'TOGGLE_SEARCH_BAR':
			return {
				...state,
				isSearchbar: action.payload
			}
		case 'TOGGLE_NOTIFICATION_BAR':
			return {
				...state,
				isNotificationbar: action.payload
			}
		case 'SET_HORIZONTAL_MENU':
			return {
				...state,
				horizontalMenu: action.payload
			}
		case 'SET_THEME_COLOR':
			return {
				...state,
				themeColor: action.payload
			}
		case 'SET_FONT_STYLE':
			return {
				...state,
				fontStyle: action.payload
			}
		case 'SET_LIGHT_THEME':
			return {
				...state,
				lightVersion: action.payload
			}
		case 'SET_RTL_VERSION':
			return {
				...state,
				RtlVersion: action.payload
			}
		case 'SET_OFF_CANVAS':
			return {
				...state,
				offcanvas: action.payload
			}
		default:
			return state
	}
}