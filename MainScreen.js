import {
  StyleSheet,
  Switch,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { colors } from "./MyColors";

const MainScreen = () => {
 
const  [darkTheme, setDarkTheme] = useState(false);  
  const [result, setResult] = useState("");
  const [bracketopen, setBracketOpen] = useState(false);

  const getResult = (title) => {
    if (title == "C") {
      setResult("");
    } else if (title == "DL") {
      setResult(result.substring(0, result.length - 1));
    } else if (title == "()") {
      if (bracketopen) {
        setResult(result + ")");
        setBracketOpen(!bracketopen);
      } else {
        setResult(result + "(");
        setBracketOpen(!bracketopen);
      }
    } else if (title == "=") {
      try {
        const ans = Number(eval(result).toFixed(3)).toString();
        setResult(ans);
      } catch (e) {
        setResult("Syntax Error");
      }
    } else if (
      title == "+" ||
      title == "-" ||
      title == "*" ||
      title == "/" ||
      title == "%" ||
      title == "."
    ) {
      if (
        result.slice(-1) == "+" ||
        result.slice(-1) == "-" ||
        result.slice(-1) == "*" ||
        result.slice(-1) == "/" ||
        result.slice(-1) == "." ||
        result.slice(-1) == "%"
      ) {
        setResult(result.slice(0, -1) + title);
      } else {
        setResult(result + title);
      }
    } else {
      setResult(result + title);
    }
  };

  const getDisplay = () => {
    if (result.length <= 5){
      return <Text style={[styles.displayTxt,{fontSize:90,color: darkTheme ? colors.result: colors.gray}]}>{result.toString()}</Text>
    }
    else{
      return <Text style={[styles.displayTxt,{color: darkTheme ? colors.result: colors.gray}]}>{result.toString()}</Text>
    }
  }

  return (
    <View style={[styles.container,{backgroundColor: darkTheme ? colors.dark : colors.light}]}>
      <Switch
        value={darkTheme}
        onValueChange={() => setDarkTheme(!darkTheme)}
        trackColor={{true: colors.light2, false: colors.dark2}}
        thumbColor={darkTheme ? colors.dark : colors.light}
      />

      <ScrollView style={styles.display}>
        
          {getDisplay()}
        
      </ScrollView>
      <View style={styles.keypad}>
            <View style={styles.row}>
              <TouchableOpacity style={styles.btnGray} onPress={() => getResult("C")}>
                <Text style={styles.btnTextLight}>C</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnGray} onPress={() => getResult("()")}>
                <Text style={styles.btnTextLight}>( )</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnGray} onPress={() => getResult("%")}>
                <Text style={styles.btnTextLight}>％</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnBlue} onPress={() => getResult("/")}>
                <Text style={styles.btnTextLight}>÷</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity style={darkTheme ? styles.btnDark : styles.btnLight} onPress={() => getResult("7")}>
                <Text style={darkTheme ? styles.btnTextLight : styles.btnTextDark}>7</Text>
              </TouchableOpacity>
              <TouchableOpacity style={darkTheme ? styles.btnDark : styles.btnLight} onPress={() => getResult("8")}>
                <Text style={darkTheme ? styles.btnTextLight : styles.btnTextDark}>8</Text>
              </TouchableOpacity>
              <TouchableOpacity style={darkTheme ? styles.btnDark : styles.btnLight} onPress={() => getResult("9")}>
                <Text style={darkTheme ? styles.btnTextLight : styles.btnTextDark}>9</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnBlue} onPress={() => getResult("*")}>
                <Text style={styles.btnTextLight}>×</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity style={darkTheme ? styles.btnDark : styles.btnLight} onPress={() => getResult("4")}>
                <Text style={darkTheme ? styles.btnTextLight : styles.btnTextDark}>4</Text>
              </TouchableOpacity>
              <TouchableOpacity style={darkTheme ? styles.btnDark : styles.btnLight} onPress={() => getResult("5")}>
                <Text style={darkTheme ? styles.btnTextLight : styles.btnTextDark}>5</Text>
              </TouchableOpacity>
              <TouchableOpacity style={darkTheme ? styles.btnDark : styles.btnLight} onPress={() => getResult("6")}>
                <Text style={darkTheme ? styles.btnTextLight : styles.btnTextDark}>6</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnBlue} onPress={() => getResult("-")}>
                <Text style={styles.btnTextLight}>-</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity style={darkTheme ? styles.btnDark : styles.btnLight} onPress={() => getResult("1")}>
                <Text style={darkTheme ? styles.btnTextLight : styles.btnTextDark}>1</Text>
              </TouchableOpacity>
              <TouchableOpacity style={darkTheme ? styles.btnDark : styles.btnLight} onPress={() => getResult("2")}>
                <Text style={darkTheme ? styles.btnTextLight : styles.btnTextDark}>2</Text>
              </TouchableOpacity>
              <TouchableOpacity style={darkTheme ? styles.btnDark : styles.btnLight} onPress={() => getResult("3")}>
                <Text style={darkTheme ? styles.btnTextLight : styles.btnTextDark}>3</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnBlue} onPress={() => getResult("+")}>
                <Text style={styles.btnTextLight}>+</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity style={darkTheme ? styles.btnDark : styles.btnLight} onPress={() => getResult(".")}>
                <Text style={darkTheme ? styles.btnTextLight : styles.btnTextDark}>.</Text>
              </TouchableOpacity>
              <TouchableOpacity style={darkTheme ? styles.btnDark : styles.btnLight} onPress={() => getResult("0")}>
                <Text style={darkTheme ? styles.btnTextLight : styles.btnTextDark}>0</Text>
              </TouchableOpacity>
              <TouchableOpacity style={darkTheme ? styles.btnDark : styles.btnLight} onPress={() => getResult("DL")}>
                <Text style={darkTheme ? styles.btnTextLight : styles.btnTextDark}>⌫</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnBlue} onPress={() => getResult("=")}>
                <Text style={styles.btnTextLight}>=</Text>
              </TouchableOpacity>
            </View>
          </View>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    paddingVertical: 30,
    backgroundColor: "white",
    alignItems: "center",
   
  },
  display: {
    width: "85%",
    padding: 10,
    marginBottom: 40,
    display:'flex',
  },
  displayTxt: {
    fontSize: 70,
    fontWeight: "200",
    textAlign: "right",
    color: colors.gray,
  },
  keypad: {
    maxWidth: "100%",
    height: "60%",
  },
  row: {
    flexDirection: "row",
  },
  btnBlue: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: colors.blue,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
    // elevation: 10,
  },
  btnDark: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: colors.btnDark,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
    // elevation: 10,
  },
  btnLight: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
    // elevation: 10,
  },
  btnGray: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: colors.btnGray,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
    // elevation: 10,
  },
  btnTextLight: {
    fontSize: 32,
    color: colors.white,
  },
  btnTextDark: {
    fontSize: 32,
    color: colors.black,
  },
});
