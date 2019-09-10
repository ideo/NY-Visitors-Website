const { 
	REACT_APP_BASE_API_URL,
	REACT_APP_GOOGLE_API_KEY,
	REACT_APP_LS_AUTH_KEY
} = process.env

export const LOCAL_STORAGE_AUTH_KEY = REACT_APP_LS_AUTH_KEY
export const BASE_API_URL = REACT_APP_BASE_API_URL

export async function hydrate(endpoint, sortBy = '') {
  const sort = sortBy.length ? `?_sort=${sortBy}` : ''
	const jwtToken = getAuthToken() ? getAuthToken().jwt : ''
	let config = {
		withCredentials: true,
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json'
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

export const ENDPOINTS = {
  PLACE_CATEGORIES: 'placecategories',
  TIPS: 'tips'
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

