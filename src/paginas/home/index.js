import { useNavigation } from '@react-navigation/native';
import React,{useState,useEffect} from 'react'
import { Children } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Button,FlatList} from 'react-native';
import firebase  from '../../firebaseConnection';



export default function Home(){

const [alunos,setNome] = useState([]);

useEffect(() =>{


    async function buscarNome() {

        await firebase.database().ref('Aluno').on('value',(snapshot)=> {
            setNome(snapshot.val())
        });
        snapshot.forEach((Children) =>{
            var data = {
                key: childItem.key,
                nome: childItem.val().nome,
                nota1: childItem.val().nota1,
                nota2: childItem.val().nota2,
                nota3: childItem.val().nota3,
                imagem: childItem.val().imagem
            };
            setAlunos(alunos =>[...alunos,data])
    }
        )
    
buscarNome();
    }}, [])

return(

    <View style = {{alignItems:'center'}}>

      <Text>{nome} </Text>
            
    </View>


);


}


const styles = StyleSheet.create({

    botao:{
        backgroundColor:'green',
        width:'80%',
        alignItems:"center",
        marginTop:10
    }

})
