import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Platform,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

import * as Permissions from 'expo-permissions';

import * as FaceDetector from 'expo-face-detector';
import { Camera } from 'expo-camera';

import Filter1 from './Filter1';
import Filter2 from './Filter2';
import Filter3 from './Filter3';
import Filter4 from './Filter4';
import Filter5 from './Filter5';
import Filter6 from './Filter6';
import Filter7 from './Filter7';
import Filter8 from './Filter8';
import Filter9 from './Filter9';
import Filter10 from './Filter10';

let data = [
  { id: '1', 
  image: require('../assets/glasses.png') },

  { id: '2', 
  image: require('../assets/glasses-round.png') },

  { id: '3', 
  image: require('../assets/Frapp-02.png') },

  { id: '4', 
  image: require('../assets/Frapp-03.png') },

  { id: '5', 
  image: require('../assets/Frapp-04.png') },

  { id: '6', 
  image: require('../assets/Frapp-05.png') },

  { id: '7', 
  image: require('../assets/Frapp-06.png') },

  { id: '8', 
  image: require('../assets/Frapp-07.png') },

  { id: '9', 
  image: require('../assets/Frapp-08.png') },

  { id: '10', 
  image: require('../assets/Frapp-09.png') },

];

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasCameraPermission: null,
      current_filter: "filter_1",
      faces: [],
    };
    this.onCameraPermission = this.onCameraPermission.bind(this);
    this.onFacesDetected = this.onFacesDetected.bind(this);
    this.onFaceDetectionError = this.onFaceDetectionError.bind(this);
  }

  componentDidMount() {
    Permissions.askAsync(Permissions.CAMERA).then(this.onCameraPermission);
  }

  onCameraPermission({ status }) {
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  onFacesDetected({ faces }) {
    this.setState({ faces: faces });
  }

  onFaceDetectionError(error) {
    console.log(error);
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    }
    if (hasCameraPermission === false) {
      return (
        <View style={styles.container}>
          <Text>No access to camera</Text>
        </View>
      );
    }
    return (
      <View style={styles.container}>

        <SafeAreaView style={styles.droidSafeArea} />

        <View style={styles.headingContainer}>

          <Text style={styles.titleText}>FRAPP</Text>
        
        </View>
        
        <View style={styles.cameraStyle}>
          <Camera
            style={{ flex: 1 }}
            type={Camera.Constants.Type.front}
            faceDetectorSettings={{
              mode: FaceDetector.FaceDetectorMode.fast,
              detectLandmarks: FaceDetector.FaceDetectorLandmarks.all,
              runClassifications: FaceDetector.FaceDetectorClassifications.all,
            }}
            onFacesDetected={this.onFacesDetected}
            onFacesDetectionError={this.onFacesDetectionError}
          />
          {this.state.faces.map((face) => {
            if(this.state.current_filter === "filter_1") {

            return <Filter1 key={face.faceID} face={face} />;

            }
            else if(this.state.current_filter === "filter_2") {

            return <Filter2 key={face.faceID} face={face} />;
            
            }

           else if(this.state.current_filter === "filter_3") {

            return <Filter3 key={face.faceID} face={face} />;
            
            }

            else if(this.state.current_filter === "filter_4") {

            return <Filter4 key={face.faceID} face={face} />;
            
            }

            else if(this.state.current_filter === "filter_5") {

            return <Filter5 key={face.faceID} face={face} />;
            
            }

            else if(this.state.current_filter === "filter_6") {

            return <Filter6 key={face.faceID} face={face} />;
            
            }

            else if(this.state.current_filter === "filter_7") {

            return <Filter7 key={face.faceID} face={face} />;
            
            }

            else if(this.state.current_filter === "filter_8") {

            return <Filter8 key={face.faceID} face={face} />;
            
            }

            else if(this.state.current_filter === "filter_9") {

            return <Filter9 key={face.faceID} face={face} />;
            
            }

            else if(this.state.current_filter === "filter_10") {

            return <Filter10 key={face.faceID} face={face} />;
            
            }
          })}
        </View>

        <View style = {styles.framesContainer}>

          <ScrollView style = {{
            flexDirection: "row",
          }}
          
          horizontal
          showsHorizontalScrollIndicator = {false}
          >
          
            {data.map(filter_data => {
              return (
                <TouchableOpacity style = {styles.filterImageContainer} onPress = {() => this.setState({
                  current_filter: `filter_${filter_data.id}`
                })}>
                  <Image source = {filter_data.image} style = {{
                    height: 32,
                    width: 80,
                  }}  />
                </TouchableOpacity>
              )
            })}

          </ScrollView>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  headingContainer: {
    flex: 0.15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6278e4',
  },
  titleText1: {
    fontSize: RFValue(30),
    fontWeight: 'bold',
    color: '#efb141',
    fontStyle: 'italic',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -3, height: 3 },
    textShadowRadius: 1,
  },
  titleText2: {
    fontSize: RFValue(30),
    fontWeight: 'bold',
    color: 'white',
    fontStyle: 'italic',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -3, height: 3 },
    textShadowRadius: 1,
  },
  subheading1: {
    fontSize: RFValue(20),
    color: '#efb141',
    fontStyle: 'italic',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -3, height: 3 },
    textShadowRadius: 1,
  },
  subheading2: {
    fontSize: RFValue(20),
    color: 'white',
    fontStyle: 'italic',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -3, height: 3 },
    textShadowRadius: 1,
  },
  cameraStyle: { flex: 0.65 },
  framesContainer: {
    flex: 0.2,
    paddingLeft: RFValue(20),
    paddingRight: RFValue(20),
    paddingTop: RFValue(30),
    backgroundColor: '#6278e4',
  },
  filterImageContainer: {
    height: RFPercentage(8),
    width: RFPercentage(15),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e4e7f8',
    borderRadius: 30,
    marginRight: 20,
  },
});
