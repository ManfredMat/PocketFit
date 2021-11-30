import { useNavigation } from "@react-navigation/core";
import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { useEffect } from "react";
const Loading = () => {
    const navigation = useNavigation();
    useEffect(() => {
        const timer = setTimeout(() => {
          navigation.navigate('Inicio')
        }, 1500);
        return () => clearTimeout(timer);
      }, []);

    return(
        <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" color="#6AE056" />
        </View>
    )   
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: '#020E12',
    width: '100%',
    height: '100%'
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});

export default Loading;