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

const EditCalculator = () => {
  const navigation = useNavigation();

  const [propertyInfo, setPropertyInfo] = useState({
    vacancyRate: "5",
    managementRate: "5",
    advertizingCost: "100",
    annualAppreciationRate: "3",
  });

  const [purchaseInfo, setPurchaseInfo] = useState({
    repairs: "5000",
    repairsContingency: "1000",
    lenderFee: "1500",
    brokerFee: "5000",
    environmentals: "0",
    inspections: "700",
    appraisals: "700",
    misc: "500",
    transferTax: "0",
    legal: "500",
  });

  const [incomeInfo, setIncomeInfo] = useState({
    grossRents: "58800",
    parking: "0",
    storage: "0",
    laundry: "0",
    other: "0",
  });

  const [financing, setFinancing] = useState({
    firstMtgPrincipleAmount:  "355300" ,
    firstMtgInterestRate: "8",
    firstMtgAmortizationPeriod: "30",
    firstMtgCMHCFee: "0",
    secondMtgPrincipleAmount: "0",
    secondMtgInterestRate: "12",
    secondMtgAmortizationPeriod: "9999",
  });

  const [operating, setOperating] = useState({
    repairsRate : "2940", 
    electricity: "0",  
    gas : "0",   
    lawn: "0",	
    water: "1200",
    cable: "1200",
    caretaking: "2880" , 
    advertizing:  "180", 
    associationFees : "0",
    trashRemoval: "0",		
    miscellaneous: "0",		
    commonAreaMaintenance: "0", 
    capitalImprovements: "0", 
    accounting: "0",		
    legal: "0",		
    badDebts: "0",		
    other : "0",		
  });

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

  const handleSave = () => {
    // Add logic to save the data, maybe through an API call or storage mechanism
    // For instance: Save the data to a backend API or local storage
    console.log('Data saved!');
    // You can put the saving logic here
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
              value={propertyInfo.vacancyRate}
              onChangeText={(text) =>
                handlePropertyInfoChange("vacancyRate", text)
              }
            />
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Management Rate</Text>
            <TextInput
              style={styles.c2}
              value={propertyInfo.managementRate}
              onChangeText={(text) =>
                handlePropertyInfoChange("managementRate", text)
              }
            />
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Advertizing Cost per Vacancy</Text>
            <TextInput
              style={styles.c2}
              value={propertyInfo.advertizingCost}
              onChangeText={(text) =>
                handlePropertyInfoChange("advertizingCost", text)
              }
            />
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Annual Appreciation Rate</Text>
            <TextInput
              style={styles.c2}
              value={propertyInfo.annualAppreciationRate}
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
              value={purchaseInfo.repairs}
              onChangeText={(text) => handlePurchaseInfoChange("repairs", text)}
            ></TextInput>
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Repairs Contingency</Text>
            <TextInput
              style={styles.c2}
              value={purchaseInfo.repairsContingency}
              onChangeText={(text) =>
                handlePurchaseInfoChange("repairsContingency", text)
              }
            ></TextInput>
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Lender Fee</Text>
            <TextInput
              style={styles.c2}
              value={purchaseInfo.lenderFee}
              onChangeText={(text) =>
                handlePurchaseInfoChange("lenderFee", text)
              }
            ></TextInput>
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Broker Fee</Text>
            <TextInput
              style={styles.c2}
              value={purchaseInfo.brokerFee}
              onChangeText={(text) =>
                handlePurchaseInfoChange("brokerFee", text)
              }
            ></TextInput>
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Environmentals</Text>
            <TextInput
              style={styles.c2}
              value={purchaseInfo.environmentals}
              onChangeText={(text) =>
                handlePurchaseInfoChange("environmentals", text)
              }
            ></TextInput>
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Inspections or Engineer Report</Text>
            <TextInput
              style={styles.c2}
              value={purchaseInfo.inspections}
              onChangeText={(text) =>
                handlePurchaseInfoChange("inspections", text)
              }
            ></TextInput>
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Appraisals</Text>
            <TextInput
              style={styles.c2}
              value={purchaseInfo.appraisals}
              onChangeText={(text) =>
                handlePurchaseInfoChange("appraisals", text)
              }
            ></TextInput>
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Misc</Text>
            <TextInput
              style={styles.c2}
              value={purchaseInfo.misc}
              onChangeText={(text) => handlePurchaseInfoChange("misc", text)}
            ></TextInput>
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Transfer Tax</Text>
            <TextInput
              style={styles.c2}
              value={purchaseInfo.transferTax}
              onChangeText={(text) =>
                handlePurchaseInfoChange("transferTax", text)
              }
            ></TextInput>
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Legal</Text>
            <TextInput
              style={styles.c2}
              value={purchaseInfo.legal}
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
              value={incomeInfo.grossRents}
              onChangeText={(text) =>
                handleIncomeInfoChange("grossRents", text)
              }
            />
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Parking</Text>
            <TextInput
              style={styles.c2}
              value={incomeInfo.parking}
              onChangeText={(text) => handleIncomeInfoChange("parking", text)}
            />
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Storage</Text>
            <TextInput
              style={styles.c2}
              value={incomeInfo.storage}
              onChangeText={(text) => handleIncomeInfoChange("storage", text)}
            />
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Laundry / Vending</Text>
            <TextInput
              style={styles.c2}
              value={incomeInfo.laundry}
              onChangeText={(text) => handleIncomeInfoChange("laundry", text)}
            />
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Other</Text>
            <TextInput
              style={styles.c2}
              value={incomeInfo.other}
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
              value={financing.firstMtgPrincipleAmount}
              onChangeText={(text) =>
                handleFinancingChange("firstMtgPrincipleAmount", text)
              }
            />
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>1st Mtg Interest Rate</Text>
            <TextInput
              style={styles.c2}
              value={financing.firstMtgInterestRate}
              onChangeText={(text) =>
                handleFinancingChange("firstMtgInterestRate", text)
              }
            />
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>1st Mtg Amortization</Text>
            <TextInput
              style={styles.c2}
              value={financing.firstMtgAmortizationPeriod}
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
              value={financing.firstMtgCMHCFee}
              onChangeText={(text) =>
                handleFinancingChange("firstMtgCMHCFee", text)
              }
            />
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>2nd Mtg Principle Amount 2nd Mtg</Text>
            <TextInput
              style={styles.c2}
              value={financing.secondMtgPrincipleAmount}
              onChangeText={(text) =>
                handleFinancingChange("secondMtgPrincipleAmount", text)
              }
            />
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>2nd Mtg Interest Rate</Text>
            <TextInput
              style={styles.c2}
              value={financing.secondMtgAmortizationPeriod}
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
              value={financing.secondMtgAmortizationPeriod}
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
              value={operating.caretaking}
              onChangeText={(text) => handleOperatingChange('caretaking', text)}
            />
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Advertizing</Text>
            <TextInput
              style={styles.c2}
              value={operating.advertizing}
              onChangeText={(text) => handleOperatingChange('advertizing', text)}
            />
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Association Fees</Text>
            <TextInput
              style={styles.c2}
              value={operating.associationFees}
              onChangeText={(text) => handleOperatingChange('associationFees', text)}
            />
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Trash Removal</Text>
            <TextInput
              style={styles.c2}
              value={operating.trashRemoval}
              onChangeText={(text) => handleOperatingChange('trashRemoval', text)}
            />
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Accounting</Text>
            <TextInput
              style={styles.c2}
              value={operating.accounting}
              onChangeText={(text) => handleOperatingChange('accounting', text)}
            />
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Common Area Maintenance</Text>
            <TextInput
              style={styles.c2}
              value={operating.commonAreaMaintenance}
              onChangeText={(text) => handleOperatingChange('commonAreaMaintenance', text)}
            />
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Capital Improvements</Text>
            <TextInput
              style={styles.c2}
              value={operating.capitalImprovements}
              onChangeText={(text) => handleOperatingChange('capitalImprovements', text)}
            />
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Legal</Text>
            <TextInput
              style={styles.c2}
              value={operating.legal}
              onChangeText={(text) => handleOperatingChange('legal', text)}
            />
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Bad Debts</Text>
            <TextInput
              style={styles.c2}
              value={operating.badDebts}
              onChangeText={(text) => handleOperatingChange('badDebts', text)}
            />
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Cable</Text>
            <TextInput
              style={styles.c2}
              value={operating.cable}
              onChangeText={(text) => handleOperatingChange('cable', text)}
            />
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Lawn / Snow Maintenance </Text>
            <TextInput
              style={styles.c2}
              value={operating.lawn}
              onChangeText={(text) => handleOperatingChange('lawn', text)}
            />
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Water / Sewer</Text>
            <TextInput
              style={styles.c2}
              value={operating.water}
              onChangeText={(text) => handleOperatingChange('water', text)}
            />
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Gas</Text>
            <TextInput
              style={styles.c2}
              value={operating.gas}
              onChangeText={(text) => handleOperatingChange('gas', text)}
            />
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Electricity</Text>
            <TextInput
              style={styles.c2}
              value={operating.electricity}
              onChangeText={(text) => handleOperatingChange('electricity', text)}
            />
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Repairs Rate</Text>
            <TextInput
              style={styles.c2}
              value={operating.repairsRate}
              onChangeText={(text) => handleOperatingChange('repairsRate', text)}
            />
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Miscellaneous</Text>
            <TextInput
              style={styles.c2}
              value={operating.miscellaneous}
              onChangeText={(text) => handleOperatingChange('miscellaneous', text)}
            />
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.c1}>Other</Text>
            <TextInput
              style={styles.c2}
              value={operating.other}
              onChangeText={(text) => handleOperatingChange('other', text)}
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
        backgroundColor: 'blue',
        padding: 15,
        margin: 20,
        alignItems: 'center',
        borderRadius: 10,
      },
      saveButtonText: {
        color: 'white',
        fontWeight: 'bold',
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
