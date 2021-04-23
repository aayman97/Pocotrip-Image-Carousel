import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Dimensions, Button, TouchableOpacity, FlatList, Animated } from 'react-native';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';

const { height, width } = Dimensions.get('screen')


const data = [
  {
    image: require('./assets/images/1.jpg'),
    name: 'Sunset'
  },
  {
    image: require('./assets/images/2.jpg'),
    name: 'London'
  },
  {
    image: require('./assets/images/3.jpg'),
    name: 'Forest'
  },
  {
    image: require('./assets/images/4.jpg'),
    name: 'Mountains'
  },
  {
    image: require('./assets/images/5.jpg'),
    name: 'Building'
  },
  {
    image: require('./assets/images/6.jpg'),
    name: 'Street'
  },
  {
    image: require('./assets/images/7.jpg'),
    name: 'Sky'
  },
  {
    image: require('./assets/images/8.jpg'),
    name: 'Morning'
  },
  {
    image: require('./assets/images/9.jpg'),
    name: 'Frozen Lake'
  },
  {
    image: require('./assets/images/10.jpg'),
    name: 'Snow'
  },
]
export default function App() {

  const onScrollX = React.useRef(new Animated.Value(0)).current
  const [name, setName] = React.useState('')

  const AnimatedImageBackground = Animated.createAnimatedComponent(ImageBackground)
  const [loaded] = useFonts({
    Gilory: require('./assets/Fonts/Gilroy-ExtraBold.otf'),
    GiloryLight: require('./assets/Fonts/Gilroy-Light.otf')
  });




  if (!loaded) {
    return null;
  }


  return (
    <View style={styles.container}>
      <View style={{ flex: 1, flexDirection: 'row', width, height, position: 'relative', overflow: 'hidden' }}>
        {
          data.map((item, index) => {
            return (

              <AnimatedImageBackground source={item.image} style={{
                width, justifyContent: 'center', alignItems: 'center', opacity: onScrollX.interpolate({
                  inputRange: [(index - 1) * width,
                  (index * width),
                  (index + 1) * width
                  ],
                  outputRange: [0, 0.7, 0],
                }), transform: [{
                  translateX: onScrollX.interpolate({
                    inputRange: [(index - 1) * width,
                    (index * width),
                    (index + 1) * width
                    ],
                    outputRange: [-width * index - 1, -width * index, -width * index + 1,],
                  })
                }]
              }}
                imageStyle={{ backgroundColor: 'rgba(0,0,0,0.8)' }}
                resizeMode='cover' >
              </AnimatedImageBackground>


            )
          })
        }
      </View>

      <View
        style={{
          position: 'absolute',
          width,
          height: height * 0.2,
          top: '8%',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text style={{
          fontFamily: 'GiloryLight',
          color: 'white',
          fontWeight: 'bold',
        }}>LET'S GO WITH</Text>
        <Text style={{
          fontFamily: 'Gilory',
          color: 'white',
          fontSize: 40
        }}>pocotrip</Text>
      </View>


      <View style={{
        width: width * 0.8,
        height: height * 0.5,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 20
      }}>

        <View style={{
          width: width * 0.75,
          height: height * 0.4,
          position: 'absolute',
          overflow: 'hidden',
          borderRadius: 20,
          top: 20
        }}>

          <Animated.FlatList
            keyExtractor={(_, index) => { return index }}
            data={data}
            horizontal
            bounces={false}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: onScrollX } } }],
              { useNativeDriver: false },
            )}
            contentContainerStyle={{ width: data.length * width }}
            snapToInterval={width}
            renderItem={(item) => {
              return (
                <ImageBackground source={item.item.image} style={{
                  width: width, height: height, justifyContent: 'center', alignItems: 'center', bottom: height * 0.273, right: width * 0.126
                }} resizeMode='cover' />
              )
            }}
          />


        </View>

        <View>

        </View>

        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: 200,
          height: height * 0.03,
          overflow: 'hidden',
          top: '45%'
        }}>
          {
            data.map((item, index) => {
              return (
                <Animated.Text
                  style={{
                    fontSize: 20,
                    fontFamily: 'Gilory',
                    top: '410%',
                    transform: [{
                      translateY: onScrollX.interpolate({
                        inputRange: [
                          (index - 1) * width,
                          (index * width),
                          (index + 1) * width,
                        ],
                        outputRange: [(index - 1) * (-height * 0.0275), (index) * (-height * 0.0275), (index + 1) * (-height * 0.0275)],
                      })
                    }]
                  }}
                >{item.name}</Animated.Text>
              )
            })
          }
        </View>
        <View style={{
          width: width * 0.5,
          height: height * 0.02,
          backgroundColor: 'white',
          top: '64%',
          borderRadius: '50%',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          flexDirection: 'row'
        }}>

          {
            data.map((item, index) => {
              return (
                <Animated.View
                  key={index}
                  style={{
                    width: onScrollX.interpolate({
                      inputRange: [
                        (index - 1) * width,
                        (index - 1) * width,
                        (index * width),
                        (index + 1) * width,
                        (index + 2) * width,
                      ],
                      outputRange: [width * 0.017, width * 0.017, width * 0.04, width * 0.017, width * 0.017,],
                    }),
                    height: width * 0.017,
                    borderRadius: '100%',
                    backgroundColor: '#399ac2',
                    opacity: 1 - (index / 10)
                  }}
                />
              )
            })
          }

        </View>
      </View>

      <TouchableOpacity style={{
        position: 'absolute',
        bottom: '11%'
      }}
        onPress={() => {
          console.log('Get started')
        }}
      >
        <LinearGradient style={{
          width: width * 0.8, height: height * 0.05,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 20,
        }}
          colors={['white', '#1f66a8',]}
          start={[-1, 4]}
        >

          <Text style={{
            fontFamily: 'Gilory',
            fontSize: 15,
            color: 'white',
          }}> GET STARTED</Text>

        </LinearGradient>
      </TouchableOpacity>


    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
