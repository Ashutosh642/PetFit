import * as React from 'react';
import { Text, View, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';


const PetfitDetails = ({ navigation }) => {

  return (

    <ScrollView style={{ width: '97%', marginLeft: 7 }}>
      <TouchableOpacity
        onPress={() => navigation.navigate(
          'petview',
          {
            details: ['https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7CVgKuMTLAvDr0j1714lq0jEc8OZ3pNZ8cA&usqp=CAU',
              'Tiger', '5', 'Chennai', 'BorderCollie', 'Loreum ipsum dolor sit er elit lamet consectetaur cillium adipiscing pecu,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua.Ut enim ad minum veniam,quisnostuid exercitation ultamco laboris nisi ut aliqiup ex ea commodo consequat.'
            ]
          }
        )}>


        <View style={styles.datapart}>
          <Image
            style={{ width: 100, height: 100 }}
            source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7CVgKuMTLAvDr0j1714lq0jEc8OZ3pNZ8cA&usqp=CAU" }}
          />
          <View style={{ flexDirection: 'column', marginLeft: 20, }}>
            <Text style={styles.textpart}>
              Pet Name: Tiger
            </Text>
            <Text style={styles.textpart}>
              Pet Age: 5
            </Text>
            <Text style={styles.textpart}>
              Pet Location: Chennai
            </Text>
            <Text style={styles.textpart}>
              Pet Breed: BorderCollie
            </Text>
          </View>
        </View>

      </TouchableOpacity>








      <TouchableOpacity
        onPress={() => navigation.navigate(
          'petview',
          {
            details: ['https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSiS0VUkQdYgKWflWCJAfbbgxP58iosRH_93Q&usqp=CAU',
              'Tannie', '3', 'Hyderabad', 'Beagle', 'Loreum ipsum dolor sit er elit lamet consectetaur cillium adipiscing pecu,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua.Ut enim ad minum veniam,quisnostuid exercitation ultamco laboris nisi ut aliqiup ex ea commodo consequat.'
            ]
          }
        )}>
        <View style={styles.datapart}>
          <Image
            style={{ width: 100, height: 100 }}
            source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSiS0VUkQdYgKWflWCJAfbbgxP58iosRH_93Q&usqp=CAU" }}
          />
          <View style={{ flexDirection: 'column', marginLeft: 20, }}>
            <Text style={styles.textpart}>
              Pet Name: Tannie
            </Text>
            <Text style={styles.textpart}>
              Pet Age: 3
            </Text>
            <Text style={styles.textpart}>
              Pet Location: Hyderabad
            </Text>
            <Text style={styles.textpart}>
              Pet Breed: Beagle
            </Text>
          </View>
        </View>

      </TouchableOpacity>





      <TouchableOpacity
        onPress={() => navigation.navigate(
          'petview',
          {
            details: ['https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShTurouxhjqO7a7i3DiIo4lxlBcWSQ7L4QFQ&usqp=CAU',
              'Mady', '2', 'Bangalore', 'Ragdoll', 'Loreum ipsum dolor sit er elit lamet consectetaur cillium adipiscing pecu,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua.Ut enim ad minum veniam,quisnostuid exercitation ultamco laboris nisi ut aliqiup ex ea commodo consequat.'
            ]
          }
        )}>
        <View style={styles.datapart}>
          <Image
            style={{ width: 100, height: 100 }}
            source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShTurouxhjqO7a7i3DiIo4lxlBcWSQ7L4QFQ&usqp=CAU" }}
          />
          <View style={{ flexDirection: 'column', marginLeft: 20, }}>
            <Text style={styles.textpart}>
              Pet Name: Mady
            </Text>
            <Text style={styles.textpart}>
              Pet Age: 2
            </Text>
            <Text style={styles.textpart}>
              Pet Location: Bangalore
            </Text>
            <Text style={styles.textpart}>
              Pet Breed: Ragdoll
            </Text>
          </View>
        </View>

      </TouchableOpacity>
    </ScrollView>


  );
}

export default PetfitDetails

const styles = StyleSheet.create({
  datapart: {
    backgroundColor: '#a9a9a9',
    flexDirection: 'row',
    padding: 15,
    marginTop: 9,
    height: 130
  },
  textpart: {
    fontSize: 19,
    fontWeight: "400",
    fontFamily: 'Calibri'
  }
})