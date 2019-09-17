const { 
	REACT_APP_BASE_API_URL,
	REACT_APP_GOOGLE_API_KEY,
	REACT_APP_LS_AUTH_KEY,
	REACT_APP_AUTHORIZED_GOOGLE_DOMAIN
} = process.env

export const LOCAL_STORAGE_AUTH_KEY = REACT_APP_LS_AUTH_KEY
export const AUTHORIZED_DOMAIN = REACT_APP_AUTHORIZED_GOOGLE_DOMAIN
export const BASE_API_URL = REACT_APP_BASE_API_URL

const EM_BASIS = 16

export async function hydrate(endpoint, sortBy = '') {
	const sort = sortBy.length ? `?_sort=${sortBy}` : ''
	const jwtToken = getAuthToken() ? getAuthToken().jwt : ''
	let config = {
		withCredentials: true,
		// mode: 'no-cors',
		// credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
		}
	}
	if (jwtToken.length) { 
		config.headers['Authorization'] = `Bearer ${jwtToken}`
	}
	return await fetch(`${REACT_APP_BASE_API_URL}/${endpoint}${sort}`, config)
    .then(response => response.json())
    .catch(error => console.log('Failed to fetch data: ', error))
}

export function getAuthToken() {
	const token = window.localStorage.getItem(LOCAL_STORAGE_AUTH_KEY)
	return JSON.parse(token)
}

export function isAuthenticated() {
	const token = getAuthToken()
	if (token && token['jwt'] && token['user']) {
		return true
	}
	return false
}

export function logout() {
	window.localStorage.removeItem(LOCAL_STORAGE_AUTH_KEY)
	window.location.reload()
}

export function getOffsetTop(el) {
	return el.getBoundingClientRect().top
}

export function getVerticalGridAlignmentDiscrepancy(el) {
	const elOffsetTop = getOffsetTop(el)
	const gridSizePx = getPxFromWv(getGridSizeWv())
	if (isDesktop() || (elOffsetTop % gridSizePx === 0)) {
		// We don't need alignment on Desktop. All is done via CSS.
		return 0
	}
	const gridCountFromTop = Math.floor(elOffsetTop / gridSizePx)
	const targetGridCountFromTop = gridCountFromTop + 1
	const discrepancy = (targetGridCountFromTop * gridSizePx) - elOffsetTop
	return discrepancy
}

export function getGridSizeWv() {
	if (isMobile()) { return 5 }
	if (isTablet()) { return 5 }
	if (isDesktop()) { return 2.5 }
}

export const BREAKPOINTS_EM = {
	NOT_SMALL_MIN: 30,
	DESKTOP_MIN: 60
}

export function getPxFromWv(wv) {
	return parseFloat(document.documentElement.clientWidth / 100) * wv
}



export function getEmFromPx(px) {
	return px / EM_BASIS // assuming every `em` is 16px
}

export function getPxFromEm(em) {
	return em * EM_BASIS // assuming every `em` is 16px
}

export function getWindowWidthEm() {
	const windowWidthPx = document.documentElement.clientWidth
	return getEmFromPx(Math.round(windowWidthPx))
}

export function isMobile() {
	return getWindowWidthEm() < BREAKPOINTS_EM.NOT_SMALL_MIN
}

export function isTablet() {
	const windowWidthEm = getWindowWidthEm()
	return windowWidthEm >= BREAKPOINTS_EM.NOT_SMALL_MIN && windowWidthEm < BREAKPOINTS_EM.NOT_SMALL_MIN
}

export function isDesktop() {
	return getWindowWidthEm() >= BREAKPOINTS_EM.DESKTOP_MIN
}

export const BASE_ANIME_CONFIG = {
	easing: 'easeOutQuad',
	duration: 6000,
	loop: true,
	autoplay: true,
	delay: 400,
	endDelay: 0,
	direction: 'alternate'
}

export const ENDPOINTS = {
  PLACE_CATEGORIES: 'placecategories',
	TIPS: 'tips',
	INFOS: 'infos',
	FAQS: 'faqs'
}

export const ICON_TYPES = {
  IDEO: 'ideo',
  PLACE: 'place'
}

export const MAP = {
  ZOOM: 15,
  IDEO_NYC_LAT_LNG: [40.729284, -74.007641],
  API_KEY: REACT_APP_GOOGLE_API_KEY,
  STYLES: [  
    {
	    "stylers": [
	      { "visibility": "on" },
	      { "saturation": -100 },
	      { "gamma": 0.54 }
	    ]
	  },{
	    "featureType": "road",
	    "elementType": "labels.icon",
	    "stylers": [
	      { "visibility": "off" }
	    ]
	  },{
	    "featureType": "water",
	    "stylers": [
	      { "color": "#4d4946" }
	    ]
	  },{
	    "featureType": "poi",
	    "elementType": "labels.icon",
	    "stylers": [
	      { "visibility": "off" }
	    ]
	  },{
	    "featureType": "poi",
	    "elementType": "labels.text",
	    "stylers": [
	      { "visibility": "simplified" }
	    ]
	  },{
	    "featureType": "road",
	    "elementType": "geometry.fill",
	    "stylers": [
	      { "color": "#ffffff" }
	    ]
	  },{
	    "featureType": "road.local",
	    "elementType": "labels.text",
	    "stylers": [
	      { "visibility": "simplified" }
	    ]
	  },{
	    "featureType": "water",
	    "elementType": "labels.text.fill",
	    "stylers": [
	      { "color": "#ffffff" }
	    ]
	  },{
	    "featureType": "transit.line",
	    "elementType": "geometry",
	    "stylers": [
	      { "gamma": 0.48 }
	    ]
	  },{
	    "featureType": "transit.station",
	    "elementType": "labels.icon",
	    "stylers": [
	      { "visibility": "off" }
	    ]
	  },{
	    "featureType": "road",
	    "elementType": "geometry.stroke",
	    "stylers": [
	      { "gamma": 7.18 }
	    ]
	  }
	]
}

