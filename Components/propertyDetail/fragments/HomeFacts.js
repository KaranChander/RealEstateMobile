import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const HomeFacts = ({ data }) => {
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
  const [showHomeInfo, setShowHomeInfo] = useState(false);

  const toggleAdditionalInfo = () => {
    setShowAdditionalInfo(!showAdditionalInfo);
  };

  const toggleHomeInfo = () => {
    setShowHomeInfo(!showHomeInfo);
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleHomeInfo}>
        <Text style={styles.heading}>
          Home Facts {showHomeInfo ? "▲" : "▼"}
        </Text>
      </TouchableOpacity>

      {showHomeInfo &&
      <View style={styles.mainContainer}>
        <View style={styles.leftContainer}>
          <Text>On App</Text>
          <Text>HOA Fee</Text>
          <Text>Built</Text>
          <Text>Property Type</Text>
        </View>

        <View style={styles.rightContainer}>
          <Text>{data.days_on_market || "none"}</Text>
          <Text>${data.hoa.fee || "none"}</Text>
          <Text>{data.description.year_built}</Text>
          <Text>{data.description.sub_type || "none"}</Text>
        </View>
      </View>}

      <TouchableOpacity onPress={toggleAdditionalInfo}>
        <Text style={styles.additionalHeading}>
          Additional Home Facts {showAdditionalInfo ? "▲" : "▼"}
        </Text>
      </TouchableOpacity>

      {showAdditionalInfo && (
        <View style={styles.additionalMainContainer}>
          {data.details.map((fact) => (
            <View style={styles.additionalFact} key={fact.category}>
              <Text style={styles.additionalCategory}>{fact.category}</Text>
              {fact.text.map((item, index) => (
                <Text key={index} style={styles.additionalText}>
                  {item}
                </Text>
              ))}
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontWeight: "bold",
    fontSize: 20,
    paddingTop: 10,
    paddingLeft: 22,
  },
  additionalHeading: {
    fontWeight: "bold",
    fontSize: 20,
    paddingTop: 10,
    paddingLeft: 22,
  },
  additionalMainContainer: {
    paddingLeft: 22,
    paddingRight: 22,
  },
  additionalFact: {
    marginVertical: 5,
  },
  additionalCategory: {
    fontWeight: "bold",
  },
  additionalText: {},
  mainContainer: {
    paddingLeft: 22,
    paddingRight: 22,
    flexDirection: "row",
  },
  leftContainer: {
    color: "grey",
    fontWeight: 13,
  },
  rightContainer: {
    paddingLeft: 22,
    color: "black",
    fontWeight: 13,
  },
});

export default HomeFacts;
