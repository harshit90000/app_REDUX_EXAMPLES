import React, { useState } from 'react';
import { SafeAreaView, Text, View, TextInput, TouchableOpacity, Image, FlatList, Alert } from 'react-native';
import styles from './style';
import { deleteButton, plus } from '../assets/image';
import {  useDispatch, useSelector } from 'react-redux';
import { addTask, deleteTask } from '../redux/taskSlice';

const TodoList = () => {

    const dispatch = useDispatch()
    const [todo, setTodo] = useState("")
    const addButton = () => {
        if (todo.trim().length === 0) {
            alert("Please Enter a Value");
            setTodo("");
            return;
        }
        dispatch(
            addTask({
                task: todo,
            })
        );
        setTodo("");
    }
    const deleteItem = id => {
        if(selector != ""){
        Alert.alert("List All Item Delete",
            "Select option", [
            { text: 'Cancel', onPress: () => (console.log('Cancel Pressed')) },
            {
                text: 'OK', onPress: () => {
                    dispatch(
                        deleteTask({ id: id })
                    )
                }
            }
        ],
            { cancelable: false })
    }
    else{
        alert("Please Enter a Value");
    }

    }
    const selector = useSelector(state=>state.tasks)
    // const data = [
    //     {
    //         id: 1,
    //         title: "harshit"
    //     },
    //     {
    //         id: 2,
    //         title: "Sarthi"
    //     },
    //     {
    //         id: 3,
    //         title: "Jainik"
    //     },
    // ]
    const renderData=({item})=>{
        return(
            <View style={styles.listData}>
                <Text style={styles.textData}>{item.name}</Text>
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.SafeDesign}>
           <View style={styles.listView}>
            <TextInput
                placeholder="Add Todo"
                value={todo}
                onChangeText={setTodo}
                style={styles.listInput}
            />
               <TouchableOpacity onPress={addButton} style={styles.iconViews}>

                    <Image source={plus} style={styles.iconPlus} />

                </TouchableOpacity>
                <TouchableOpacity style={styles.iconViews}
                    onPress={() => deleteItem(setTodo.id) }>
                    <Image source={deleteButton} style={styles.iconPlus} />
                </TouchableOpacity>
            
        </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={selector}
                style={styles.flatStyle}
                keyExtractor={item => item.id}
                renderItem={renderData}
                ListEmptyComponent={<Text style={styles.listEmpty}>No Text Input</Text>}
               />
        </SafeAreaView>
    );
}


export default TodoList;
