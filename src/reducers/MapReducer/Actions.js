import * as MapActions from './Constants';
const { vastraMapError, vastraRoutingError, currentLocation, mapboxToken} = MapActions;

export function SetMapError(error){
  return {
      type: vastraMapError,
      mapError: error
  };
}

export function SetRoutingError(error){
  return {
      type: vastraRoutingError,
      routingError: error
  };
}

export function SetCurrentLocation(gpsLocation){
  return {
      type: currentLocation,
      gpsLocation
  };
}

export function SetMapboxToken(token){
  return {
      type: getCurrentLocation,
      gpsLocation
  };
}



