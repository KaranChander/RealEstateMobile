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

const EditCalculator = ({ route }) => {
  const { property, defaults, data } = route.params;
  console.log("Editing settings !!!");
  console.log(defaults);

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
    <ScrollView>
      {/* Back button */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Text style={styles.backButtonText}>{"<"}</Text>
      </TouchableOpacity>

      <View>
        <Text style={styles.heading}>Property Info</Text>

        <View style={styles.c3}>
          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Vacancy Rate</Text>
            <TextInput
              style={styles.c2}
              value={propertyInfo.vacancyRate.toString()}
              keyboardType="numeric"
              onChangeText={(text) =>
                handlePropertyInfoChange("vacancyRate", text)
              }
            />
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Management Rate</Text>
            <TextInput
              style={styles.c2}
              value={propertyInfo.managementRate.toString()}
              keyboardType="numeric"
              onChangeText={(text) =>
                handlePropertyInfoChange("managementRate", text)
              }
            />
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Advertizing Cost per Vacancy</Text>
            <TextInput
              style={styles.c2}
              keyboardType="numeric"
              value={propertyInfo.advertizingCost.toString()}
              onChangeText={(text) =>
                handlePropertyInfoChange("advertizingCost", text)
              }
            />
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Annual Appreciation Rate</Text>
            <TextInput
              style={styles.c2}
              value={propertyInfo.annualAppreciationRate.toString()}
              keyboardType="numeric"
              onChangeText={(text) =>
                handlePropertyInfoChange("annualAppreciationRate", text)
              }
            />
          </View>
          {/* Add more fields */}
        </View>
      </View>

      <View>
        <Text style={styles.heading}>Purchase Info</Text>

        <View style={styles.c3}>
          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Repairs</Text>
            <TextInput
              style={styles.c2}
              value={purchaseInfo.repairs.toString()}
              keyboardType="numeric"
              onChangeText={(text) => handlePurchaseInfoChange("repairs", text)}
            ></TextInput>
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Repairs Contingency</Text>
            <TextInput
              style={styles.c2}
              value={purchaseInfo.repairsContingency.toString()}
              keyboardType="numeric"
              onChangeText={(text) =>
                handlePurchaseInfoChange("repairsContingency", text)
              }
            ></TextInput>
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Lender Fee</Text>
            <TextInput
              style={styles.c2}
              value={purchaseInfo.lenderFee.toString()}
              keyboardType="numeric"
              onChangeText={(text) =>
                handlePurchaseInfoChange("lenderFee", text)
              }
            ></TextInput>
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Broker Fee</Text>
            <TextInput
              style={styles.c2}
              value={purchaseInfo.brokerFee.toString()}
              keyboardType="numeric"
              onChangeText={(text) =>
                handlePurchaseInfoChange("brokerFee", text)
              }
            ></TextInput>
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Environmentals</Text>
            <TextInput
              style={styles.c2}
              value={purchaseInfo.environmentals.toString()}
              keyboardType="numeric"
              onChangeText={(text) =>
                handlePurchaseInfoChange("environmentals", text)
              }
            ></TextInput>
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Inspections or Engineer Report</Text>
            <TextInput
              style={styles.c2}
              value={purchaseInfo.inspections.toString()}
              keyboardType="numeric"
              onChangeText={(text) =>
                handlePurchaseInfoChange("inspections", text)
              }
            ></TextInput>
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Appraisals</Text>
            <TextInput
              style={styles.c2}
              value={purchaseInfo.appraisals.toString()}
              keyboardType="numeric"
              onChangeText={(text) =>
                handlePurchaseInfoChange("appraisals", text)
              }
            ></TextInput>
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Misc</Text>
            <TextInput
              style={styles.c2}
              value={purchaseInfo.misc.toString()}
              keyboardType="numeric"
              onChangeText={(text) => handlePurchaseInfoChange("misc", text)}
            ></TextInput>
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Transfer Tax</Text>
            <TextInput
              style={styles.c2}
              value={purchaseInfo.transferTax.toString()}
              keyboardType="numeric"
              onChangeText={(text) =>
                handlePurchaseInfoChange("transferTax", text)
              }
            ></TextInput>
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Legal</Text>
            <TextInput
              style={styles.c2}
              value={purchaseInfo.legal.toString()}
              keyboardType="numeric"
              onChangeText={(text) => handlePurchaseInfoChange("legal", text)}
            ></TextInput>
          </View>
        </View>
      </View>

      <View>
        <Text style={styles.heading}>Income Info(Annual)</Text>

        <View style={styles.c3}>
          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Gross Rents</Text>
            <TextInput
              style={styles.c2}
              value={incomeInfo.grossRents.toString()}
              keyboardType="numeric"
              onChangeText={(text) =>
                handleIncomeInfoChange("grossRents", text)
              }
            />
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Parking</Text>
            <TextInput
              style={styles.c2}
              value={incomeInfo.parking.toString()}
              keyboardType="numeric"
              onChangeText={(text) => handleIncomeInfoChange("parking", text)}
            />
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Storage</Text>
            <TextInput
              style={styles.c2}
              value={incomeInfo.storage.toString()}
              keyboardType="numeric"
              onChangeText={(text) => handleIncomeInfoChange("storage", text)}
            />
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Laundry / Vending</Text>
            <TextInput
              style={styles.c2}
              value={incomeInfo.laundry.toString()}
              keyboardType="numeric"
              onChangeText={(text) => handleIncomeInfoChange("laundry", text)}
            />
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Other</Text>
            <TextInput
              style={styles.c2}
              value={incomeInfo.other.toString()}
              keyboardType="numeric"
              onChangeText={(text) => handleIncomeInfoChange("other", text)}
            />
          </View>
        </View>
      </View>

      <View>
        <Text style={styles.heading}>Financing Info</Text>

        <View style={styles.c3}>
          <View style={styles.rowContainer}>
            <Text style={styles.c1}>1st Mtg Principle Borrowed</Text>
            <TextInput
              style={styles.c2}
              value={financing.firstMtgPrincipleAmount.toString()}
              keyboardType="numeric"
              onChangeText={(text) =>
                handleFinancingChange("firstMtgPrincipleAmount", text)
              }
            />
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>1st Mtg Interest Rate</Text>
            <TextInput
              style={styles.c2}
              value={financing.firstMtgInterestRate.toString()}
              keyboardType="numeric"
              onChangeText={(text) =>
                handleFinancingChange("firstMtgInterestRate", text)
              }
            />
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>1st Mtg Amortization</Text>
            <TextInput
              style={styles.c2}
              value={financing.firstMtgAmortizationPeriod.toString()}
              keyboardType="numeric"
              onChangeText={(text) =>
                handleFinancingChange("firstMtgAmortizationPeriod", text)
              }
            />
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>
              Period 1st Mtg CMHC Fee (% of Principle)
            </Text>
            <TextInput
              style={styles.c2}
              value={financing.firstMtgCMHCFee.toString()}
              keyboardType="numeric"
              onChangeText={(text) =>
                handleFinancingChange("firstMtgCMHCFee", text)
              }
            />
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>2nd Mtg Principle Amount 2nd Mtg</Text>
            <TextInput
              style={styles.c2}
              value={financing.secondMtgPrincipleAmount.toString()}
              keyboardType="numeric"
              onChangeText={(text) =>
                handleFinancingChange("secondMtgPrincipleAmount", text)
              }
            />
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>2nd Mtg Interest Rate</Text>
            <TextInput
              style={styles.c2}
              value={financing.secondMtgAmortizationPeriod.toString()}
              keyboardType="numeric"
              onChangeText={(text) =>
                handleFinancingChange("secondMtgAmortizationPeriod", text)
              }
            />
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>
              Interest Rate 2nd Mtg Amortization Period
            </Text>
            <TextInput
              style={styles.c2}
              value={financing.secondMtgAmortizationPeriod.toString()}
              keyboardType="numeric"
              onChangeText={(text) =>
                handleFinancingChange("secondMtgAmortizationPeriod", text)
              }
            />
          </View>
        </View>
      </View>

      <View>
        <Text style={styles.heading}>Operating Expenses(Annual)</Text>

        <View style={styles.c3}>
          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Caretaking</Text>
            <TextInput
              style={styles.c2}
              value={operating.caretaking.toString()}
              keyboardType="numeric"
              onChangeText={(text) => handleOperatingChange("caretaking", text)}
            />
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Association Fees</Text>
            <TextInput
              style={styles.c2}
              value={operating.associationFees.toString()}
              keyboardType="numeric"
              onChangeText={(text) =>
                handleOperatingChange("associationFees", text)
              }
            />
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Trash Removal</Text>
            <TextInput
              style={styles.c2}
              value={operating.trashRemoval.toString()}
              keyboardType="numeric"
              onChangeText={(text) =>
                handleOperatingChange("trashRemoval", text)
              }
            />
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Accounting</Text>
            <TextInput
              style={styles.c2}
              value={operating.accounting.toString()}
              keyboardType="numeric"
              onChangeText={(text) => handleOperatingChange("accounting", text)}
            />
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Common Area Maintenance</Text>
            <TextInput
              style={styles.c2}
              value={operating.commonAreaMaintenance.toString()}
              keyboardType="numeric"
              onChangeText={(text) =>
                handleOperatingChange("commonAreaMaintenance", text)
              }
            />
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Capital Improvements</Text>
            <TextInput
              style={styles.c2}
              value={operating.capitalImprovements.toString()}
              keyboardType="numeric"
              onChangeText={(text) =>
                handleOperatingChange("capitalImprovements", text)
              }
            />
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Legal</Text>
            <TextInput
              style={styles.c2}
              value={operating.legal.toString()}
              keyboardType="numeric"
              onChangeText={(text) => handleOperatingChange("legal", text)}
            />
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Bad Debts</Text>
            <TextInput
              style={styles.c2}
              value={operating.badDebts.toString()}
              keyboardType="numeric"
              onChangeText={(text) => handleOperatingChange("badDebts", text)}
            />
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Cable</Text>
            <TextInput
              style={styles.c2}
              value={operating.cable.toString()}
              keyboardType="numeric"
              onChangeText={(text) => handleOperatingChange("cable", text)}
            />
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Lawn / Snow Maintenance </Text>
            <TextInput
              style={styles.c2}
              value={operating.lawn.toString()}
              keyboardType="numeric"
              onChangeText={(text) => handleOperatingChange("lawn", text)}
            />
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Water / Sewer</Text>
            <TextInput
              style={styles.c2}
              value={operating.water.toString()}
              keyboardType="numeric"
              onChangeText={(text) => handleOperatingChange("water", text)}
            />
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Gas</Text>
            <TextInput
              style={styles.c2}
              value={operating.gas.toString()}
              keyboardType="numeric"
              onChangeText={(text) => handleOperatingChange("gas", text)}
            />
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Electricity</Text>
            <TextInput
              style={styles.c2}
              value={operating.electricity.toString()}
              keyboardType="numeric"
              onChangeText={(text) =>
                handleOperatingChange("electricity", text)
              }
            />
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Repairs Rate</Text>
            <TextInput
              style={styles.c2}
              value={operating.repairsRate.toString()}
              keyboardType="numeric"
              onChangeText={(text) =>
                handleOperatingChange("repairsRate", text)
              }
            />
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Miscellaneous</Text>
            <TextInput
              style={styles.c2}
              value={operating.miscellaneous.toString()}
              keyboardType="numeric"
              onChangeText={(text) =>
                handleOperatingChange("miscellaneous", text)
              }
            />
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Other</Text>
            <TextInput
              style={styles.c2}
              value={operating.other.toString()}
              keyboardType="numeric"
              onChangeText={(text) => handleOperatingChange("other", text)}
            />
          </View>
        </View>
      </View>

      <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  saveButton: {
    backgroundColor: "blue",
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
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  backButton: {
    left: 10,
    top: 10,
  },
  c1: {
    padding: 5,
    width: "50%",
  },
  c2: {
    padding: 5,
    width: "50%",
    borderWidth: 1,
    borderColor: "black",
  },
  c3: {
    paddingRight: 25,
    paddingLeft: 25,
  },
  rowContainer: {
    flexDirection: "row",
    paddingTop: 5,
    paddingBottom: 5,
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
});

export default EditCalculator;
