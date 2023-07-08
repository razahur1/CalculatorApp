export const myColors = {
    light: '#F1F2F3',    
    dark: '#17171C',
    blue: '#4B5EFC',
    btnGray: '#4E505F',
    btnDark: '#2E2F38',
    gray: '#747477',
    black: '#000000',
    white: '#FFFFFF',
    result: '#460582',   
}

import {View, Text, Switch, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [result, setResult] = useState('');

  const colors = {
    dark: '#22252D',
    dark1: '#292B36',
    dark2: '#272B33',
    light: '#FFF',
    light1: 'rgb(220, 220, 220)',
    light2: '#F7F7F7',
  };

  const calculate = (title) => {
    if(title == 'C') {
      setResult('')
    } else if(title == 'DL') {
      setResult(result.substring(0, result.length - 1));
    }  else if(title == '=') {
      const ans = Number(eval(result).toFixed(3)).toString();
      setResult(ans);
    } else {
      setResult(result + title);
    }
  } 

  const Btn = ({title, type}) => (
    <TouchableOpacity
      onPress={() => calculate(title)}
      style={{
        backgroundColor: getColor(colors.light1, colors.dark2),
        height: 60,
        width: 60,
        borderRadius: 10,
        margin: 16,
        padding: 10,
        elevation: 4
      }}>
      <Text
        style={{
          fontSize: 37,
          textAlign: 'center',
          textAlignVertical: 'center',
          color: getBtnColor(type)
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );

  const getBtnColor = (type) => {
    if (type == 'top' ) {
      return '#35FBD6'
    } else if(type == 'right') {
      return '#EB6363'
    }
    return getColor(colors.dark, colors.light);
  }

  const getColor = (light, dark) => (darkTheme ? dark : light);

  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        paddingVertical: 20,
        backgroundColor: getColor(colors.light, colors.dark),
        alignItems: 'center',
      }}>
      <Switch
        value={darkTheme}
        onValueChange={() => setDarkTheme(!darkTheme)}
        trackColor={{true: colors.light2, false: colors.dark2}}
        thumbColor={getColor(colors.dark, colors.light)}
      />
      <Text
        style={{
          fontSize: 40,
          width: '100%',
          textAlign: 'right',
          paddingRight: 20,
          color: getColor(colors.dark, colors.light),
          marginTop: 160, 
          paddingBottom: 20
        }}>
        {result}
      </Text>
      <View style={{ flexDirection: "row", flexWrap: 'wrap', justifyContent: "center", backgroundColor: getColor(colors.light1, colors.dark1), elevation: 7, borderTopLeftRadius: 20, borderTopRightRadius: 20}}>
        <Btn title="C" type="top" />
        <Btn title="DL" type="top" />
        <Btn title="/" type="top" />
        <Btn title="%" type="top" />
        <Btn title="7" type="number" />
        <Btn title="8" type="number" />
        <Btn title="9" type="number" />
        <Btn title="*" type="right" />
        <Btn title="4" type="number" />
        <Btn title="5" type="number" />
        <Btn title="6" type="number" />
        <Btn title="+" type="right" />
        <Btn title="1" type="number" />
        <Btn title="2" type="number" />
        <Btn title="3" type="number" />
        <Btn title="-" type="right" />
        <Btn title="00" type="number" />
        <Btn title="0" type="number" />
        <Btn title="." type="number" />
        <Btn title="=" type="right" />
      </View>
    </View>
  );
}





const [firstNum,setFirstNum] =  useState("");
const [secondNum,setSecondNum] =  useState("");
const [operation,setOperation] =  useState("")
const [result,setResult] =  useState(null)

const handleNumberPress = (val) => {
    if (firstNum.length < 10 && result !== null){
        setFirstNum(firstNum + val);
    }
    else if (firstNum.length < 10 && result === null){
        setFirstNum(firstNum + val);
    }
};

const handleOperationPress = (val) =>{
    if (result !== null){
        setOperation(val);
        setSecondNum(firstNum);
        setFirstNum("");
    }
    else{
        setOperation(val);
        setSecondNum(firstNum);
        setFirstNum("");
    }
    
};

const clear = () => {
    setFirstNum("");
    setSecondNum("");
    setOperation("");
    setResult(null);
}

const getResult = () => {
  switch (operation){
      case "+":
          clear();
          setResult(parseInt(secondNum)+parseInt(firstNum)); 
          break; 
      case "-":
          clear();
          setResult(parseInt(secondNum)-parseInt(firstNum)); 
          break; 
      case "*":
          clear();
          setResult(parseInt(secondNum)*parseInt(firstNum)); 
          break; 
      case "/":
          clear();
          setResult(parseInt(secondNum)/parseInt(firstNum)); 
          break; 
      default:
          clear();
          setResult(0);
          break;      
  }
};

const firstNumDisplay = () =>{
if (firstNum === "" && result === null){
  return <Text style={styles.screenFirstNumber}>{"0"}</Text>
}
if(result !== null){
  return <Text style={result < 99999 ? [styles.screenFirstNumber, {color: '#460582'}] : [styles.screenFirstNumber, {fontSize: 50, color: '#460582'}]}>{result?.toString()}</Text>
}
if (firstNum && firstNum.length < 6){
  return <Text style={styles.screenFirstNumber}>{firstNum}</Text>
}
if (firstNum.length > 5 && firstNum.length < 8){
  return <Text style={[styles.screenFirstNumber, { fontSize: 70 }]}>{firstNum}</Text>
}
else if (firstNum.length > 7){
  return <Text style={[styles.screenFirstNumber, { fontSize: 50 }]}>{firstNum}</Text>
}
};




<Btn title= "C" onPress={()=>getResult('C')}/>
<Btn title= "( )" onPress={()=>getResult('()')}/>
<Btn title= "％" onPress={()=>getResult('%')}/>
<Btn title= "÷" onPress={()=>getResult('/')}/>

<Btn title= "7" onPress={()=>getResult('7')}/>
            <Btn title= "8" onPress={()=>getResult('8')}/>
            <Btn title= "9" onPress={()=>getResult('9')}/>
            <Btn title= "×" onPress={()=>getResult('*')}/>

            <Btn title= "4" onPress={()=>getResult('4')}/>
            <Btn title= "5" onPress={()=>getResult('5')}/>
            <Btn title= "6" onPress={()=>getResult('6')}/>
            <Btn title= "-" onPress={()=>getResult('-')}/>

            <Btn title= "1" onPress={()=>getResult('1')}/>
            <Btn title= "2" onPress={()=>getResult('2')}/>
            <Btn title= "3" onPress={()=>getResult('3')}/>
            <Btn title= "+" onPress={()=>getResult('+')}/>

<Btn title= "." onPress={()=>getResult('.')}/>
            <Btn title= "0" onPress={()=>getResult('0')}/>
            <Btn title= "⌫" onPress={()=>getResult('DL')}/>
            <Btn title= "=" onPress={()=>getResult('=')}/>
            

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