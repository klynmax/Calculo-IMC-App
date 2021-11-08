import React, { useState } from "react";
import { View, TextInput, Text, Button, TouchableOpacity } from "react-native";
import ResultImc from "./ResultImc";
import styles from "./style";

export default function Form() {
  const [height, setHeight] = useState(null);
  const [weigth, setWeigth] = useState(null);
  const [messageImc, setMessageImc] = useState("Preencha o peso e altura");
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState("Calcular");

  function imcCalculator() {
    return setImc((weigth / (height * height)).toFixed(2));
  }

  function validationImc() {
    if (weigth !== null && height !== null) {
      imcCalculator();
      setHeight(null);
      setWeigth(null);
      setMessageImc("Seu imc é igual: ");
      setTextButton("Calcular Novamente");
      return;
    }
    setImc(null);
    setTextButton("Calcular");
    setMessageImc("Preencha o peso e altura");
  }

  return (
    <View style={styles.formContext}>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Altura</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex. 1.75"
          keyboardType="numeric"
          onChangeText={setHeight}
          value={height}
        />
        <Text style={styles.formLabel}>Peso</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex. 75.365"
          keyboardType="numeric"
          onChangeText={setWeigth}
          value={weigth}
        />
        {/* <Button title={textButton} onPress={() => validationImc()} /> */}
        <TouchableOpacity
          style={styles.buttonCalculator}
          onPress={() => validationImc()}
        >
          <Text style={styles.textButtonCalculator}>{textButton}</Text>
        </TouchableOpacity>
      </View>
      <ResultImc messageResultImc={messageImc} resultImc={imc} />
    </View>
  );
}
