import * as React from 'react';
import { ScrollView, View, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';




export default function CarouselView({ navigation }) {




  return (
    <>
      <ScrollView horizontal={true} style={styles.container}>

        <TouchableOpacity
          onPress={() => navigation.navigate(
            'petview',
            {
              details: ['https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSeD78SmfIzEvQR_ZXxhiAZ_ng-DdTFMYagKQ&usqp=CAU',
                'Archie', '4', 'Coimbatore', 'Maltese', 'Loreum ipsum dolor sit er elit lamet consectetaur cillium adipiscing pecu,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua.Ut enim ad minum veniam,quisnostuid exercitation ultamco laboris nisi ut aliqiup ex ea commodo consequat.'
              ]
            }
          )}>

          <View>
            <Image
              style={styles.imagecontent}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSeD78SmfIzEvQR_ZXxhiAZ_ng-DdTFMYagKQ&usqp=CAU'
              }}
            />

          </View>

        </TouchableOpacity>



        <TouchableOpacity
          onPress={() => navigation.navigate(
            'petview',
            {
              details: ['https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTFTBhT8PxzaqzZ7JipnyWR0hYK01MKeMQR6g&usqp=CAU',
                'Frankie', '3', 'Mumbai', 'Golden Retriever', 'Loreum ipsum dolor sit er elit lamet consectetaur cillium adipiscing pecu,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua.Ut enim ad minum veniam,quisnostuid exercitation ultamco laboris nisi ut aliqiup ex ea commodo consequat.'
              ]
            }
          )}>

          <View>
            <Image
              style={styles.imagecontent}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTFTBhT8PxzaqzZ7JipnyWR0hYK01MKeMQR6g&usqp=CAU'
              }}
            />

          </View>




        </TouchableOpacity>




        <TouchableOpacity
          onPress={() => navigation.navigate(
            'petview',
            {
              details: ['https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTfhNfsyjXc_BsVxEUTfX1fJVpVG3knZpZykw&usqp=CAU',
                'Bailey', '2', 'Delhi', 'Poodle', 'Loreum ipsum dolor sit er elit lamet consectetaur cillium adipiscing pecu,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua.Ut enim ad minum veniam,quisnostuid exercitation ultamco laboris nisi ut aliqiup ex ea commodo consequat.'
              ]
            }
          )}>

          <View>
            <Image
              style={styles.imagecontent}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTfhNfsyjXc_BsVxEUTfX1fJVpVG3knZpZykw&usqp=CAU'
              }}
            />

          </View>




        </TouchableOpacity>






        <TouchableOpacity
          onPress={() => navigation.navigate(
            'petview',
            {
              details: ['https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTIYzuY_krlxpx_BXJ7SgRDHQOyjrHEcuZcSA&usqp=CAU',
                'Rosie', '4', 'Kolkata', 'Labrador Retriever', 'Loreum ipsum dolor sit er elit lamet consectetaur cillium adipiscing pecu,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua.Ut enim ad minum veniam,quisnostuid exercitation ultamco laboris nisi ut aliqiup ex ea commodo consequat.'
              ]
            }
          )}>

          <View>
            <Image
              style={styles.imagecontent}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTIYzuY_krlxpx_BXJ7SgRDHQOyjrHEcuZcSA&usqp=CAU'
              }}
            />

          </View>




        </TouchableOpacity>


      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    margin: 6,
    backgroundColor: '#a9a9a9'
  },
  imagecontent: {
    width: 129,
    height: 150,
    margin: 8,
    marginTop: 0
  }

})

