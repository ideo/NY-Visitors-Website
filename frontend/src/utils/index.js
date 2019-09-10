const { 
	REACT_APP_BASE_API_URL,
	REACT_APP_GOOGLE_API_KEY,
	REACT_APP_LOCALSTORAGE_JWT_TOKEN_KEY
} = process.env

export const LOCAL_STORAGE_JWT_TOKEN_KEY = REACT_APP_LOCALSTORAGE_JWT_TOKEN_KEY

export async function hydrate(endpoint, wihAuth = false, sortBy = '') {
  const sort = sortBy.length ? `?_sort=${sortBy}` : ''
	let config = {
		headers: {'Content-Type': 'application/json'}
	}
	if (wihAuth && isAuthenticated()) {
		config = {
			withCredentials: true,
			credentials: 'include',
			headers: {
				'Authorization': `Bearer ${getAuthToken().jwt}`,
				'Content-Type': 'application/json'
			}
		}
	}
	return await fetch(`${REACT_APP_BASE_API_URL}/${endpoint}${sort}`, config)
    .then(response => response.json())
    .catch(error => console.log('Failed to fetch data: ', error))
}

export function getAuthToken() {
	const token = window.localStorage.getItem(LOCAL_STORAGE_JWT_TOKEN_KEY)
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
	window.localStorage.removeItem(LOCAL_STORAGE_JWT_TOKEN_KEY)
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

