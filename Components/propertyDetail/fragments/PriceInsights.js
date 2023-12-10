import React from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";

const PriceInsights = ({data}) => {
  const [showPriceInfo, setShowPriceInfo] = React.useState(false);

  const togglePriceInfo = () => {
    setShowPriceInfo(!showPriceInfo);
  };

  return (
    <View>
      <TouchableOpacity onPress={togglePriceInfo}>
        <Text style={styles.heading}>
          Price Insights 
        </Text>
      </TouchableOpacity>

  
      <View style={styles.mainContainer}>
      

      <View style={styles.leftContainer}>
        <Text style={styles.left}>List price</Text>
        <Text style={styles.left}>Price/Sq. Ft.</Text>
      </View>

      <View style={styles.rightContainer}>
        <Text style={styles.right}>${data.list_price}</Text>
        <Text style={styles.right}>${data.price_per_sqft}</Text>
      </View>
      </View>
      
    </View>
    
  );
};

const styles = StyleSheet.create({
  heading: {
    fontWeight: "bold",
    fontSize: 24,
    paddingTop: 10,
    paddingLeft: 22
  },

  mainContainer: {
    paddingLeft: 22,
    // paddingRight: 22,
    flexDirection: "row",
    width: "100%",
    justifyContent: 'space-between',
    // alignItems: "center"
  },
  // leftContainer: {
  //   color: "grey",
  //   fontWeight: "bold",
  //   flex: 1,
  //   maxWidth: "100%",
  // },
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

export default PriceInsights;
