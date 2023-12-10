import React from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";

const About = ({data}) => {
  const [showFullDescription, setShowFullDescription] = React.useState(false);
  const [lines, setLines] = React.useState(4);
  let initialLines = 4;

  // const toggleShowAbout = () => {
  //   setShowAbout(!showAbout);
  // };

  const onTextLayout = ({ nativeEvent: { lines: l } }) => {
    if (initialLines !== l.length) {
      setLines(l.length > 4 ? 4 : undefined);
      initialLines = l.length;
    }
  };

  return (
    <View>
      <Text style={styles.heading}>
        About this home 
        </Text>
      <Text
        style={styles.description}
        onTextLayout={onTextLayout}
        numberOfLines={showFullDescription ? undefined : lines}
      >
        {data.description.text}
      </Text>
      {lines !== undefined && (
        <TouchableOpacity onPress={() => setShowFullDescription(!showFullDescription)}>
          <Text style={styles.readMore}>{showFullDescription ? 'Read Less' : 'Read More'}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontWeight: "bold",
    fontSize: 24,
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 22,
  },
  description: {
    paddingLeft: 22,
    paddingRight: 22,
    fontSize: 16,
  },
  readMore: {
    color: "black",
    marginTop: 5,
    marginBottom: 5,
    fontSize: 16,
    marginLeft: 20,
    fontWeight: "bold",
    textDecorationLine: 'underline'

  },
});


export default About;
