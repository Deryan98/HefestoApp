import React, { useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';

export const  Categories = async() => {
    try{
        await firestore()
        .collection('Categories')
        .get();
    }catch(error){
        console.error(error);
    }
}  
     

 export  const SubCategories = async() => {
    try{
        await firestore()
         .collection('SubCategories')
         .get();
    }catch (error) {
        console.error(error);
    }
 } 