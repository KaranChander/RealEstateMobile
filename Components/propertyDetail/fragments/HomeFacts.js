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
          Home Facts 
        </Text>
      </TouchableOpacity>

      <View style={styles.mainContainer}>
        <View style={styles.leftContainer}>
          <Text style={styles.left}>On App</Text>
          <Text style={styles.left}>HOA Fee</Text>
          <Text style={styles.left}>Built</Text>
          <Text style={styles.left}>Property Type</Text>
        </View>

        <View style={styles.rightContainer}>
          <Text style={styles.right}>{data.days_on_market || "--"}</Text>
          <Text style={styles.right}>${data.hoa.fee || "--"}</Text>
          <Text style={styles.right}>{data.description.year_built}</Text>
          <Text style={styles.right}>{data.description.sub_type || "--"}</Text>
        </View>
      </View>

      {/* <TouchableOpacity onPress={toggleAdditionalInfo}>
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
      )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontWeight: "bold",
    fontSize: 24,
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
    justifyContent: 'space-between',

  },
  left : { 
    // fontWeight: '400' ,
    // whiteSpace: "nowrap",
    overflow: "hidden", 
    textOverflow: "ellipsis",
    // width: "50%",
    // marginTop: "auto",
    color: "#808080",
    fontWeight: "600",
    fontSize: 16,
    padding: 10,

  },
  right: {
    // overflow: "hidden", 
    // textOverflow: "ellipsis",

    padding: 10,
    // width: '50%',
    borderWidth: 0,
    borderBottomWidth: 1,
    fontSize: 16,
    fontWeight: "500",
  },
  rightContainer: {
    paddingLeft: 22,
    color: "black",
    fontWeight: "bold",
    flex: 1,
    overflow: "hidden", 
    textOverflow: "ellipsis",


  }
});

export default HomeFacts;
