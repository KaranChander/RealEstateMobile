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
          PriceInsights {showPriceInfo ? "▲" : "▼"}
        </Text>
      </TouchableOpacity>

      {showPriceInfo && 
      <View style={styles.mainContainer}>
      

      <View style={styles.leftContainer}>
        <Text>List price</Text>
        <Text>Price/Sq. Ft.</Text>
      </View>

      <View style={styles.rightContainer}>
        <Text>${data.list_price}</Text>
        <Text>${data.price_per_sqft}</Text>
      </View>
      </View>
      }
    </View>
    
  );
};

const styles = StyleSheet.create({
  heading: {
    fontWeight: "bold",
    fontSize: 20,
    paddingTop: 10,
    paddingLeft: 22
  },

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

export default PriceInsights;
