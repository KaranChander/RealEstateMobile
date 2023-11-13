import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const BuyRentHold = ({ data }) => {

  
  return (
    <View>
      <Text style={styles.heading}>Buy Rent Hold</Text>
      <View style={styles.mainContainer}>
        <View style={styles.leftContainer}>
          <Text style={styles.left} numberOfLines={1}>Annual Profit/ Loss</Text>
          <Text style={styles.left} numberOfLines={1}>Appreciation ROI (After 1 Year)</Text>
          <Text style={styles.left} numberOfLines={1}>Cash on Cash ROI</Text>
          <Text style={styles.left} numberOfLines={1}>Cash on Cash ROI</Text>
          <Text style={styles.left} numberOfLines={1}>Cashflow per Unit per Month</Text>
          <Text style={styles.left} numberOfLines={1}>Debt servicing costs</Text>
          <Text style={styles.left} numberOfLines={1}>Effective Gross Income</Text>
          <Text style={styles.left} numberOfLines={1}>Equity ROI (After 1 Year)</Text>
          <Text style={styles.left} numberOfLines={1}>Expense to Income Ratio</Text>
          <Text style={styles.left} numberOfLines={1}>Net Operating Income</Text>
          <Text style={styles.left} numberOfLines={1}>Real Purchase Price</Text>
          <Text style={styles.left} numberOfLines={1}>Total Cash Required</Text>
          <Text style={styles.left} numberOfLines={1}>Total Expenses</Text>
          <Text style={styles.left} numberOfLines={1}>Total Monthly Profit/ Loss</Text>
        </View>
        <View style={styles.rightContainer}>
          <Text>${(data["Annual Profit $"] || 0).toFixed(2)}</Text>
          <Text>{(data["Appreciation ROI (After 1 Year) %"] || 0).toFixed(2)}%</Text>
          <Text>{(data["Cash on Cash ROI %"] || 0).toFixed(2)}%</Text>
          <Text>{(data["Cash on Cash ROI %"] || 0).toFixed(2)}%</Text>
          <Text>${(data["Cashflow per Unit per Month $"] || 0).toFixed(2)}</Text>
          <Text>${(data["Debt servicing costs $"] || 0).toFixed(2)}</Text>
          <Text>${(data["Effective Gross Income\t$"] || 0).toFixed(2)}</Text>
          <Text>{(data["Equity ROI (After 1 Year) %"] || 0).toFixed(2)}%</Text>
          <Text>{(data["Expense to Income Ratio %"] || 0).toFixed(2)}%</Text>
          <Text>${(data["Net Operating Income $"] || 0).toFixed(2)}</Text>
          <Text>${(data["Real Purchase Price (RPP) $"] || 0).toFixed(2)}</Text>
          <Text>${(data["Total Cash Required $"] || 0).toFixed(2)}</Text>
          <Text>${(data["Total Expenses $"] || 0).toFixed(2)}</Text>
          <Text>${(data["Total Monthly Profit or Loss $"] || 0).toFixed(2)}</Text>
        </View>
      </View>
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

  mainContainer: {
    paddingLeft: 22,
    paddingRight: 22,
    flexDirection: "row",
    width: "100%",
  },
  leftContainer: {
    color: "grey",
    fontWeight: "bold",
    flex: 1,
    maxWidth: "80%",
  },
  left : { 
    fontWeight: '400' ,
    whiteSpace: "nowrap",
    overflow: "hidden", 
    textOverflow: "ellipsis",
  },
  rightContainer: {
    paddingLeft: 22,
    color: "black",
    fontWeight: "bold",
    flex: 1,
  },
});

export default BuyRentHold;
