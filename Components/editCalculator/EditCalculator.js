import React, { useEffect, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import PercentageSlider from './PercentageSlider';
import Header from "../CommonHeader";



const EditCalculator = ({ route }) => {
  const { property, defaults, data } = route.params;
  console.log("Editing settings !!!");
  console.log(defaults);
  const [isFocused, setFocus] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleFocus = (field) => {
    setFocusedField(field);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };
  const navigation = useNavigation();

  const [propertyInfo, setPropertyInfo] = useState(defaults.propertyInfo);

  const [purchaseInfo, setPurchaseInfo] = useState(defaults.purchaseInfo);

  const [incomeInfo, setIncomeInfo] = useState(defaults.incomeInfo);

  const [financing, setFinancing] = useState(defaults.financing);

  const [operating, setOperating] = useState(defaults.operating);

  useEffect(() => {
    console.log('Defaults:', defaults);
    // Update state when route parameters change
    setPropertyInfo(defaults.propertyInfo);
    setPurchaseInfo(defaults.purchaseInfo);
    setIncomeInfo(defaults.incomeInfo);
    setFinancing(defaults.financing);
    setOperating(defaults.operating);
  }, [defaults]);

  const handleOperatingChange = (key, value) => {
    setOperating({ ...operating, [key]: value });
  };

  const handleFinancingChange = (key, value) => {
    setFinancing({ ...financing, [key]: value });
  };

  const handleIncomeInfoChange = (key, value) => {
    setIncomeInfo({ ...incomeInfo, [key]: value });
  };

  const handlePropertyInfoChange = (key, value) => {
    setPropertyInfo({ ...propertyInfo, [key]: value });
  };

  const handlePurchaseInfoChange = (key, value) => {
    setPurchaseInfo({ ...purchaseInfo, [key]: value });
  };

  const handleSave = async () => {
    try {
      const apiUrl = `http://18.205.25.241/calculator/?property_id=${property.property_id}`;
  
      const requestBody = {
        // Include the data you want to send to the API in the request body
        propertyInfo,
        purchaseInfo,
        incomeInfo,
        financing,
        operating,
      };
  
      const response = await fetch(apiUrl, {
        method: 'POST', // or 'PUT' if applicable
        headers: {
          'Content-Type': 'application/json',
          // Add any other headers required by your API
        },
        body: JSON.stringify(requestBody),
      });
      console.log(requestBody)
  
      if (response.ok) {
        const responseData = await response.json(); // Await the JSON parsing
        console.log('Data saved successfully!');
        console.log(responseData);
        navigation.navigate("PropertyDetails", {property: property, propertyData: property, calculatorData: responseData, defaultsData: responseData.defaults});
        
      } else {
        console.error('Failed to save data. Server returned:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('An error occurred while saving data:', error.message);
    }
  };
  
  

  return (
    <>
    <Header onSearchPress={()=>{
      // navigation.navigate('SearchBar'); // Replace 'SearchScreen' with the name of your search screen

      }} onMapPress={() => {
        // navigation.navigate('PropertiesMap', { propertiesData: propertiesData, propertyLat: selectedPlace.geometry.location.lat, propertyLon: selectedPlace.geometry.location.lng })
      }} type="buyRentHold"></Header>
    <ScrollView>
 
    

      <View style={{ paddingTop: 20 }}>
        <Text style={styles.heading}>Property Info</Text>
        <View style={styles.card}>

        <View style={styles.c3}>
          <View style={styles.colContainer}>
            <Text style={styles.c1}>Vacancy Rate</Text>
            <PercentageSlider
              value={propertyInfo.vacancyRate}
              onValueChange={(value) => handlePropertyInfoChange("vacancyRate", value)}
            />
          </View>

          <View style={styles.colContainer}>
            <Text style={styles.c1}>Management Rate</Text>
            <PercentageSlider
              value={propertyInfo.managementRate}
              onValueChange={(value) => handlePropertyInfoChange("managementRate", value)}
            />
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Advertizing Cost per Vacancy</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', flex: 1 }}>
            <Text>$</Text>

            <TextInput
              style={[styles.c2,
                focusedField === 'field1' ? styles.focused : styles.unfocused]}
                onFocus={() => handleFocus('field1')}
                onBlur={handleBlur}

              keyboardType="numeric"
        
              value={propertyInfo.advertizingCost.toLocaleString()}
              onChangeText={(text) =>
                handlePropertyInfoChange("advertizingCost", text)
              }
            />
          </View>
          </View>

          <View style={styles.colContainer}>
            <Text style={styles.c1}>Annual Appreciation Rate</Text>
            <PercentageSlider
              value={propertyInfo.annualAppreciationRate}
              onValueChange={(value) => handlePropertyInfoChange("annualAppreciationRate", value)}
            />
          </View>
          {/* Add more fields */}
        </View>
      </View>
      </View>

      <View>
        <Text style={styles.heading}>Purchase Info</Text>
        <View style={styles.card}>

        <View style={styles.c3}>
          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Repairs</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', flex: 1 }}>
            <Text>$</Text>

            <TextInput
              style={[styles.c2,
                focusedField === 'field2' ? styles.focused : styles.unfocused
              ]}
              onFocus={() => handleFocus('field2')}
              onBlur={handleBlur}
              value={purchaseInfo.repairs.toLocaleString()}
              keyboardType="numeric"
              
              onChangeText={(text) => handlePurchaseInfoChange("repairs", text)}
            ></TextInput>
            </View>
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Repairs Contingency</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', flex: 1 }}>
            <Text>$</Text>
            <TextInput
              style={[styles.c2,
                focusedField === 'field3' ? styles.focused : styles.unfocused
              ]}
              onFocus={() => handleFocus('field3')}
              onBlur={handleBlur}
      
              value={purchaseInfo.repairsContingency.toLocaleString()}
              keyboardType="numeric"
              onChangeText={(text) =>
                handlePurchaseInfoChange("repairsContingency", text)
              }
            ></TextInput>
                        </View>

          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Lender Fee</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', flex: 1 }}>
            <Text>$</Text>
            <TextInput
              style={[
                styles.c2,
                focusedField === 'field4' ? styles.focused : styles.unfocused
              ]}
              onFocus={() => handleFocus('field4')}
              onBlur={handleBlur}
              value={purchaseInfo.lenderFee.toLocaleString()}
              keyboardType="numeric"
              onChangeText={(text) =>
                handlePurchaseInfoChange("lenderFee", text)
              }
            ></TextInput>
          </View>
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Broker Fee</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', flex: 1 }}>
            <Text>$</Text>
            <TextInput
              style={[
                styles.c2,
                focusedField === 'field5' ? styles.focused : styles.unfocused
              ]}
              onFocus={() => handleFocus('field5')}
              onBlur={handleBlur}
              value={purchaseInfo.brokerFee.toLocaleString()}
              keyboardType="numeric"
              onChangeText={(text) =>
                handlePurchaseInfoChange("brokerFee", text)
              }
            ></TextInput>
          </View>
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Environmentals</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', flex: 1 }}>
            <Text>$</Text>
            <TextInput
               style={[
                styles.c2,
                focusedField === 'field6' ? styles.focused : styles.unfocused
              ]}
              onFocus={() => handleFocus('field6')}
              onBlur={handleBlur}
              value={purchaseInfo.environmentals.toLocaleString()}
              keyboardType="numeric"
              onChangeText={(text) =>
                handlePurchaseInfoChange("environmentals", text)
              }
            ></TextInput>
          </View>
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Inspections or Engineer Report</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', flex: 1 }}>
            <Text>$</Text>
            <TextInput
               style={[
                styles.c2,
                focusedField === 'field7' ? styles.focused : styles.unfocused
              ]}
              onFocus={() => handleFocus('field7')}
              onBlur={handleBlur}
              value={purchaseInfo.inspections.toLocaleString()}
              keyboardType="numeric"
              onChangeText={(text) =>
                handlePurchaseInfoChange("inspections", text)
              }
            ></TextInput>
            </View>
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Appraisals</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', flex: 1 }}>
            <Text>$</Text>
            <TextInput
              style={[
                styles.c2,
                focusedField === 'field8' ? styles.focused : styles.unfocused
              ]}
              onFocus={() => handleFocus('field8')}
              onBlur={handleBlur}
              value={purchaseInfo.appraisals.toLocaleString()}
              keyboardType="numeric"
              onChangeText={(text) =>
                handlePurchaseInfoChange("appraisals", text)
              }
            ></TextInput>
            </View>
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Misc</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', flex: 1 }}>
            <Text>$</Text>
            <TextInput
              style={[
                styles.c2,
                focusedField === 'field9' ? styles.focused : styles.unfocused
              ]}
              onFocus={() => handleFocus('field9')}
              onBlur={handleBlur}
              value={purchaseInfo.misc.toLocaleString()}
              keyboardType="numeric"
              onChangeText={(text) => handlePurchaseInfoChange("misc", text)}
            ></TextInput>
            </View>
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Transfer Tax</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', flex: 1 }}>
            <Text>$</Text>
            <TextInput
              style={[
                styles.c2,
                focusedField === 'field10' ? styles.focused : styles.unfocused
              ]}
              onFocus={() => handleFocus('field10')}
              value={purchaseInfo.transferTax.toLocaleString()}
              keyboardType="numeric"
              onChangeText={(text) =>
                handlePurchaseInfoChange("transferTax", text)
              }
            ></TextInput>
            </View>
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Legal</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', flex: 1 }}>
            <Text>$</Text>
            <TextInput
              style={[
                styles.c2,
                focusedField === 'field11' ? styles.focused : styles.unfocused
              ]}
              onFocus={() => handleFocus('field11')}
              value={purchaseInfo.legal.toLocaleString()}
              keyboardType="numeric"
              onChangeText={(text) => handlePurchaseInfoChange("legal", text)}
            ></TextInput>
            </View>
          </View>
        </View>
      </View>
      </View>

      <View>
        <Text style={styles.heading}>Income Info(Annual)</Text>
        <View style={styles.card}>

        <View style={styles.c3}>
          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Gross Rents</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', flex: 1 }}>
           <Text>$</Text>

            <TextInput
              style={[
                styles.c2,
                focusedField === 'field12' ? styles.focused : styles.unfocused
              ]}
              onFocus={() => handleFocus('field12')}
              value={incomeInfo.grossRents.toLocaleString()}
              keyboardType="numeric"
              onChangeText={(text) =>
                handleIncomeInfoChange("grossRents", text)
              }
            />
            </View>
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Parking</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', flex: 1 }}>
            <Text>$</Text>
            <TextInput
              style={[
                styles.c2,
                focusedField === 'field13' ? styles.focused : styles.unfocused
              ]}
              onFocus={() => handleFocus('field13')}
              value={incomeInfo.parking.toLocaleString()}
              keyboardType="numeric"
              onChangeText={(text) => handleIncomeInfoChange("parking", text)}
            />
            </View>
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Storage</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', flex: 1 }}>
            <Text>$</Text>
            <TextInput
              style={[
                styles.c2,
                focusedField === 'field14' ? styles.focused : styles.unfocused
              ]}
              onFocus={() => handleFocus('field14')}
              value={incomeInfo.storage.toLocaleString()}
              keyboardType="numeric"
              onChangeText={(text) => handleIncomeInfoChange("storage", text)}
            />
            </View>
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Laundry / Vending</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', flex: 1 }}>
            <Text>$</Text>
            <TextInput
              style={[
                styles.c2,
                focusedField === 'field15' ? styles.focused : styles.unfocused
              ]}
              onFocus={() => handleFocus('field15')}
              value={incomeInfo.laundry.toLocaleString()}
              keyboardType="numeric"
              onChangeText={(text) => handleIncomeInfoChange("laundry", text)}
            />
          </View>
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Other</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', flex: 1 }}>
            <Text>$</Text>
            <TextInput
              style={[
                styles.c2,
                focusedField === 'field16' ? styles.focused : styles.unfocused
              ]}
              onFocus={() => handleFocus('field16')}
              value={incomeInfo.other.toLocaleString()}
              keyboardType="numeric"
              onChangeText={(text) => handleIncomeInfoChange("other", text)}
            />
            </View>
          </View>
        </View>
      </View>
</View>
      <View>
        <Text style={styles.heading}>Financing Info</Text>
        <View style={styles.card}>

        <View style={styles.c3}>
          <View style={styles.rowContainer}>
            <Text style={styles.c1}>1st Mtg Principle Borrowed</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', flex: 1 }}>
           <Text>$</Text>

            <TextInput
              style={[
                styles.c2,
                focusedField === 'field16' ? styles.focused : styles.unfocused
              ]}
              onFocus={() => handleFocus('field16')}
              value={financing.firstMtgPrincipleAmount.toLocaleString()}
              keyboardType="numeric"
              onChangeText={(text) =>
                handleFinancingChange("firstMtgPrincipleAmount", text)
              }
            />
          </View>
          </View>

          <View style={styles.colContainer}>
            <Text style={styles.c1}>1st Mtg Interest Rate</Text>
            <PercentageSlider
              value={financing.firstMtgInterestRate}
              onValueChange={(value) => handleFinancingChange("firstMtgInterestRate", value)}
            />
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>1st Mtg Amortization</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', flex: 1 }}>
            <TextInput
              style={[
                styles.c2,
                focusedField === 'field17' ? styles.focused : styles.unfocused
              ]}
              
              onFocus={() => handleFocus('field17')}
              value={financing.firstMtgAmortizationPeriod.toString()}
              keyboardType="numeric"
              onChangeText={(text) =>
                handleFinancingChange("firstMtgAmortizationPeriod", text)
              }
            />
                <Text>Years</Text>
            </View>
          </View>

          <View style={styles.colContainer}>
            <Text style={styles.c1}>
              Period 1st Mtg CMHC Fee (% of Principle)
            </Text>
            <PercentageSlider
              value={financing.firstMtgCMHCFee}
              onValueChange={(value) => handleFinancingChange("firstMtgCMHCFee", value)}
            />
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>2nd Mtg Principle Amount</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', flex: 1 }}>
            <Text>$</Text>

            <TextInput
              style={[
                styles.c2,
                focusedField === 'field18' ? styles.focused : styles.unfocused
              ]}
              onFocus={() => handleFocus('field18')}
              value={financing.secondMtgPrincipleAmount.toLocaleString()}
              keyboardType="numeric"
              onChangeText={(text) =>
                handleFinancingChange("secondMtgPrincipleAmount", text)
              }
            />
            </View>
          </View>

          <View style={styles.colContainer}>
            <Text style={styles.c1}>2nd Mtg Interest Rate</Text>
            <PercentageSlider
              value={financing.secondMtgAmortizationRate}
              onValueChange={(value) => handleFinancingChange("secondMtgAmortizationPeriod", value)}
            />
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>
              Interest Rate 2nd Mtg Amortization Period
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', flex: 1 }}>

            <TextInput
              style={[
                styles.c2,
                focusedField === 'field19' ? styles.focused : styles.unfocused
              ]}
              onFocus={() => handleFocus('field19')}
              value={financing.secondMtgAmortizationPeriod.toString()}
              keyboardType="numeric"
              onChangeText={(text) =>
                handleFinancingChange("secondMtgAmortizationPeriod", text)
              }
            />
             <Text>Years</Text>

            </View>
          </View>
        </View>
      </View>
</View>
      <View>
        <Text style={styles.heading}>Operating Expenses(Annual)</Text>
        <View style={styles.card}>

        <View style={styles.c3}>
        <View style={styles.colContainer}>
            <Text style={styles.c1}>Repairs Rate</Text>
            <PercentageSlider
              value={operating.repairsRate}
              onValueChange={(text) =>
                handleOperatingChange("repairsRate", text)
              }
            />
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Caretaking</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', flex: 1 }}>
            <Text>$</Text>
            <TextInput
              style={[
                styles.c2,
                focusedField === 'field20' ? styles.focused : styles.unfocused
              ]}
              onFocus={() => handleFocus('field20')}
              value={operating.caretaking.toLocaleString()}
              keyboardType="numeric"
              onChangeText={(text) => handleOperatingChange("caretaking", text)}
            />
          </View>
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Association Fees</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', flex: 1 }}>
            <Text>$</Text>
            <TextInput
              style={[
                styles.c2,
                focusedField === 'field21' ? styles.focused : styles.unfocused
              ]}
              onFocus={() => handleFocus('field21')}
              value={operating.associationFees.toLocaleString()}
              keyboardType="numeric"
              onChangeText={(text) =>
                handleOperatingChange("associationFees", text)
              }
            />
            </View>
          </View>

          <View style={styles.rowContainer}>
  <Text style={styles.c1}>Trash Removal</Text>
  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', flex: 1 }}>
    <Text>$</Text>
    <TextInput
      style={[
        styles.c2,
        focusedField === 'field22' ? styles.focused : styles.unfocused
      ]}
      onFocus={() => handleFocus('field22')}
      value={operating.trashRemoval.toLocaleString()}
      keyboardType="numeric"
      onChangeText={(text) =>
        handleOperatingChange("trashRemoval", text)
      }
    />
  </View>
</View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Accounting</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', flex: 1 }}>
            <Text>$</Text>
            <TextInput
              style={[
                styles.c2,
                focusedField === 'field23' ? styles.focused : styles.unfocused
              ]}
              onFocus={() => handleFocus('field23')}
              value={operating.accounting.toLocaleString()}
              keyboardType="numeric"
              onChangeText={(text) => handleOperatingChange("accounting", text)}
            />
          </View>
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Common Area Maintenance</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', flex: 1 }}>
            <Text>$</Text>
            <TextInput
              style={[
                styles.c2,
                focusedField === 'field24' ? styles.focused : styles.unfocused
              ]}
              onFocus={() => handleFocus('field24')}
              value={operating.commonAreaMaintenance.toLocaleString()}
              keyboardType="numeric"
              onChangeText={(text) =>
                handleOperatingChange("commonAreaMaintenance", text)
              }
            />
          </View>
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Capital Improvements</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', flex: 1 }}>
            <Text>$</Text>
            <TextInput
              style={[
                styles.c2,
                focusedField === 'field25' ? styles.focused : styles.unfocused
              ]}
              onFocus={() => handleFocus('field25')}
              value={operating.capitalImprovements.toLocaleString()}
              keyboardType="numeric"
              onChangeText={(text) =>
                handleOperatingChange("capitalImprovements", text)
              }
            />
          </View>
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Legal</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', flex: 1 }}>
            <Text>$</Text>
            <TextInput
              style={[
                styles.c2,
                focusedField === 'field26' ? styles.focused : styles.unfocused
              ]}
              onFocus={() => handleFocus('field26')}
              value={operating.legal.toLocaleString()}
              keyboardType="numeric"
              onChangeText={(text) => handleOperatingChange("legal", text)}
            />
          </View>
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Bad Debts</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', flex: 1 }}>
            <Text>$</Text>
            <TextInput
              style={[
                styles.c2,
                focusedField === 'field27' ? styles.focused : styles.unfocused
              ]}
              onFocus={() => handleFocus('field27')}
              value={operating.badDebts.toLocaleString()}
              keyboardType="numeric"
              onChangeText={(text) => handleOperatingChange("badDebts", text)}
            />
          </View>
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Cable</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', flex: 1 }}>
            <Text>$</Text>
            <TextInput
              style={[
                styles.c2,
                focusedField === 'field28' ? styles.focused : styles.unfocused
              ]}
              onFocus={() => handleFocus('field28')}
              value={operating.cable.toLocaleString()}
              keyboardType="numeric"
              onChangeText={(text) => handleOperatingChange("cable", text)}
            />
          </View>
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Lawn / Snow Maintenance </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', flex: 1 }}>
            <Text>$</Text>
            <TextInput
              style={[
                styles.c2,
                focusedField === 'field29' ? styles.focused : styles.unfocused
              ]}
              onFocus={() => handleFocus('field29')}
              value={operating.lawn.toLocaleString()}
              keyboardType="numeric"
              onChangeText={(text) => handleOperatingChange("lawn", text)}
            />
          </View>
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Water / Sewer</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', flex: 1 }}>
            <Text>$</Text>
            <TextInput
              style={[
                styles.c2,
                focusedField === 'field30' ? styles.focused : styles.unfocused
              ]}
              onFocus={() => handleFocus('field30')}
              value={operating.water.toLocaleString()}
              keyboardType="numeric"
              onChangeText={(text) => handleOperatingChange("water", text)}
            />
          </View>
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Gas</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', flex: 1 }}>
            <Text>$</Text>
            <TextInput
              style={[
                styles.c2,
                focusedField === 'field31' ? styles.focused : styles.unfocused
              ]}
              onFocus={() => handleFocus('field31')}
              value={operating.gas.toLocaleString()}
              keyboardType="numeric"
              onChangeText={(text) => handleOperatingChange("gas", text)}
            />
          </View>
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Electricity</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', flex: 1 }}>
            <Text>$</Text>
            <TextInput
              style={[
                styles.c2,
                focusedField === 'field32' ? styles.focused : styles.unfocused
              ]}
              onFocus={() => handleFocus('field32')}
              value={operating.electricity.toLocaleString()}
              keyboardType="numeric"
              onChangeText={(text) =>
                handleOperatingChange("electricity", text)
              }
            />
          </View>
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Miscellaneous</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', flex: 1 }}>
            <Text>$</Text>
            <TextInput
              style={[
                styles.c2,
                focusedField === 'field33' ? styles.focused : styles.unfocused
              ]}
              onFocus={() => handleFocus('field33')}
              value={operating.miscellaneous.toLocaleString()}
              keyboardType="numeric"
              onChangeText={(text) =>
                handleOperatingChange("miscellaneous", text)
              }
            />
          </View>
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Other</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', flex: 1 }}>
            <Text>$</Text>
            <TextInput
               style={[
                styles.c2,
                focusedField === 'field34' ? styles.focused : styles.unfocused
              ]}
              onFocus={() => handleFocus('field34')}
              value={operating.other.toLocaleString()}
              keyboardType="numeric"
              onChangeText={(text) => handleOperatingChange("other", text)}
            />
          </View>
          </View>
        </View>
      </View>
</View>
      <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff', // Change this to the desired background color
    padding: 0, // Add padding as needed
    margin: 14, // Add margin as needed
    paddingTop: 14,
    paddingBottom: 18,
    borderRadius: 10, // Rounded corners, adjust as needed
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  
  saveButton: {
    backgroundColor: "green",
    padding: 15,
    margin: 20,
    alignItems: "center",
    borderRadius: 10,
  },
  saveButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: 0,
    marginLeft: 20
  },
  backButton: {
    left: 10,
    top: 10,
  },
  c1: {
    padding: 5,
    width: "50%",
    marginTop: "auto",
    color: "#808080",
    fontWeight: "600",
    fontSize: 16,

  },
  c2: {
    padding: 5,
    width: 'auto',
    maxWidth: '50%',
    borderWidth: 0,
    borderBottomWidth: 1,
    fontSize: 16,
    fontWeight: "500",
    // borderBottomColor: "#d4d4d4",
    // borderColor: "black",
    
  },
  focused: {
    borderBottomColor: 'black',
  },
  unfocused: {
    borderBottomColor: '#cccccc',
  },
  c3: {
    paddingRight: 25,
    paddingLeft: 25,
  },
  rowContainer: {
    flexDirection: "row",
    paddingTop: 5,
    paddingBottom: 5,
    justifyContent: 'space-between',
    alignItems: "center"
    },
  backButtonText: {
    fontSize: 30,
    color: "#000000",
  },
  container: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  textContainer: {
    flex: 1,
    padding: 5,
  },
  inputContainer: {
    flex: 1,
    padding: 5,
  },
  text: {
    width: "100%",
    padding: 5,
  },
  inputField: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 5,
    padding: 8,
    marginBottom: 10,
  },
  c2_slider: {
    width: "50%",
  },
});

export default EditCalculator;
