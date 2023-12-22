/**
 * The `About` component is a React Native component that displays a heading, a description, and a
 * "Read More" button. The description text is initially truncated to a maximum of 4 lines, but can be
 * expanded to show the full text when the "Read More" button is pressed.
 * @returns The About component is returning a View component that contains a heading, a description,
 * and a "Read More" button. The heading is a Text component that displays the text "About this home".
 * The description is also a Text component that displays the description text passed in through the
 * data prop. The numberOfLines prop is used to limit the number of lines displayed based on the state
 * of showFullDescription.
 */
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";

const About = ({data}) => {
  const [showFullDescription, setShowFullDescription] = React.useState(false);
  const [lines, setLines] = React.useState(4);
  let initialLines = 4;

 

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
