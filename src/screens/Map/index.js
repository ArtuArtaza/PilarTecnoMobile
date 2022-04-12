import React,{useEffect, useState} from "react";
import { Text, View,Dimensions } from "react-native";
import Geolocation from "react-native-geolocation-service";
import MapView from "react-native-maps";
import { hasLocationPermission } from "./LocationPermissions";
import { styles } from "./styles";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const ASPECT_RADIO = width / height;
const LATITUDE = -32.9320576;
const LONGITUDE = -68.822851;
const LATITUDE_DELTA = 0.00422;
const LONGITUDE_DELTA = 0.0022;

const MapScreen = () => {
    const _getLocation = async () => {
        await Geolocation.getCurrentPosition(
          async (posicion) => {
            const longitude = posicion.coords.longitude;
            const latitude = posicion.coords.latitude;
            this.setState({ region: { ...this.state.region, longitude, latitude } });
            console.log(
              `posicion actual... longitud: ${JSON.stringify(
                longitude
              )} latitud: ${JSON.stringify(latitude)}`
            );
          },
          (error) => {
            console.log(error.code, error.message);
          },
          {
            accuracy: {
              android: "high",
              ios: "best",
            },
            enableHighAccuracy: true,
            timeout: 15000,
            maximumAge: 10000,
            distanceFilter: 0,
            forceRequestLocation: true,
          }
        );
      };
    const [region, setRegion] = useState({
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
    }
    )

    useEffect(() => {
        hasLocationPermission()
        _getLocation()

    },[])

    const onRegionChange = region => {
        console.log(region)
        setRegion(region)
    }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        mapType={"standard"} 
        initialRegion={region}
        onRegionChange={onRegionChange}
      >
      </MapView>
    </View>
  );
};

export default MapScreen;
