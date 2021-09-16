import React from 'react';
import {
  View,
  StatusBar,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Linking,
  Alert,
  BackHandler,
} from 'react-native';
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
    <View>
      <Text>Cast data</Text>
      <View style={{padding: 30}}>
        <CastButton style={{width: 24, height: 24, tintColor: 'black'}} />
      </View>
    </View>
  );
}
export default Home;
