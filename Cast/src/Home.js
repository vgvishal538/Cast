import React from 'react';
import {
  View,
  StatusBar,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Linking,
  StyleSheet,
  Alert,
  Dimensions,
  BackHandler,
} from 'react-native';
import Video from 'react-native-video';
import {CastButton, useRemoteMediaClient} from 'react-native-google-cast';

function Home() {
  const client = useRemoteMediaClient();
  if (client) {
    // Send the media to your Cast device as soon as we connect to a device
    // (though you'll probably want to call this later once user clicks on a video or something)
    client.loadMedia({
      mediaInfo: {
        contentUrl:
          'https://commondatastorage.googleapis.com/gtv-videos-bucket/CastVideos/mp4/BigBuckBunny.mp4',
      },
    });
  }
  return (
    <View style={{flexDirection: 'column'}}>
      <Text>Cast data</Text>
      <View style={{padding: 30}}>
        <CastButton
          style={{margin: -12, width: 48, height: 48, tintColor: 'black'}}
        />
      </View>
      <Video
        source={{
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/CastVideos/mp4/BigBuckBunny.mp4',
        }}
        style={{
          height: 280,
          width: Dimensions.get('window').width,
        }}
        controls={true}
        repeat={false}
        allowsExternalPlayback={true}
        currentPlaybackTime={true}
        resizeMode={'contain'}
        fullscreen={true}
        ref={ref => {
          this.player = ref;
        }}
      />
    </View>
  );
}
var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
export default Home;
