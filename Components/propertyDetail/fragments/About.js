import React from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";

const About = ({data}) => {
  const [showAbout, setShowAbout] = React.useState(false);

  const toggleShowAbout = () => {
    setShowAbout(!showAbout);
  };

  return (
    <View>

      <TouchableOpacity onPress={toggleShowAbout}>
        <Text style={styles.heading}>
        About this home {showAbout ? "▲" : "▼"}
        </Text>
      </TouchableOpacity>

      {showAbout && 
      <Text style={styles.description}>
        {data.description.text}
      </Text>}

    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 22,
  },

  description: {
    paddingLeft: 22,
    paddingRight: 22,
    
  }
});

export default About;
