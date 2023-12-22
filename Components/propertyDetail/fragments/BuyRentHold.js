/**
 * The `BuyRentHold` component is a React Native component that displays a list of financial data and
 * allows the user to navigate to an edit screen.
 * @returns The BuyRentHold component is being returned, which renders a view containing various text
 * elements displaying data.
 */
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';

const BuyRentHold = ({ data, property, defaults }) => {

  const navigation = useNavigation();

  const handleEditClick = () => {

    console.log("Edit clicked!");
    console.log(data);
    console.log(defaults);

    navigation.navigate('EditCalculator', { property, defaults, data});
  };
  
  return (
    <View>

      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Buy Rent Hold</Text>
        <TouchableOpacity onPress={handleEditClick}>
          <Text style={styles.editText}>Edit</Text>
        </TouchableOpacity>
      </View>

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
          <Text style={styles.right} numberOfLines={1}>  ${(data["Annual Profit $"] || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Text>          
          <Text style={styles.right} numberOfLines={1}>{(data["Appreciation ROI (After 1 Year) %"] || 0).toFixed(2)}%</Text>
          <Text style={styles.right} numberOfLines={1}>{(data["Cash on Cash ROI %"] || 0).toFixed(2)}%</Text>
          <Text style={styles.right} numberOfLines={1}>{(data["Cash on Cash ROI %"] || 0).toFixed(2)}%</Text>
          <Text style={styles.right} numberOfLines={1}>${(data["Cashflow per Unit per Month $"] || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Text>
          <Text style={styles.right} numberOfLines={1}>${(data["Debt servicing costs $"] || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Text>
          <Text style={styles.right} numberOfLines={1}>${(data["Effective Gross Income\t$"] || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Text>
          <Text style={styles.right} numberOfLines={1}>{(data["Equity ROI (After 1 Year) %"] || 0).toFixed(2)}%</Text>
          <Text style={styles.right} numberOfLines={1}>{(data["Expense to Income Ratio %"] || 0).toFixed(2)}%</Text>
          <Text style={styles.right} numberOfLines={1}>${(data["Net Operating Income $"] || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Text>
          <Text style={styles.right} numberOfLines={1}>${(data["Real Purchase Price (RPP) $"] || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Text>
          <Text style={styles.right } numberOfLines={1}>${(data["Total Cash Required $"] || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Text>
          <Text style={styles.right } numberOfLines={1}>${(data["Total Expenses $"] || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Text>
          <Text style={styles.right } numberOfLines={1}>${(data["Total Monthly Profit or Loss $"] || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 22,
    
  },
  heading: {
    fontWeight: "bold",
    fontSize: 24,
    paddingBottom: 10,
    paddingTop: 10,
  },
  editText: {
    color: "#808080", // You can change the color to fit your design
    fontSize: 16,
    fontWeight: "bold",
    textDecorationLine: 'underline'

  },

  mainContainer: {
    paddingLeft: 22,
    // paddingRight: 22,
    flexDirection: "row",
    width: "100%",
    justifyContent: 'space-between',
    // alignItems: "center"
  },
  leftContainer: {
    // color: "grey",
    // fontWeight: "bold",
    // flex: 1,
    // maxWidth: "100%",
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

export default BuyRentHold;
