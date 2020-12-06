import * as React from 'react';
import { ScrollView, View, Image, Text, Button, StyleSheet } from 'react-native';

export default function AboutpetCarousel() {

  const images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSeD78SmfIzEvQR_ZXxhiAZ_ng-DdTFMYagKQ&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTFTBhT8PxzaqzZ7JipnyWR0hYK01MKeMQR6g&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7CVgKuMTLAvDr0j1714lq0jEc8OZ3pNZ8cA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSiS0VUkQdYgKWflWCJAfbbgxP58iosRH_93Q&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShTurouxhjqO7a7i3DiIo4lxlBcWSQ7L4QFQ&usqp=CAU'
  ];
  return (
    <ScrollView horizontal={true} style={styles.container}>
      {images.map((image, index) => (
        <View key={index}>
          <Image
            style={styles.imagecontent}
            source={{
              uri: image
            }}
          />

        </View>
      ))}

    </ScrollView>




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

