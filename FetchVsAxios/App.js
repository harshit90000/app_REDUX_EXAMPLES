import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import axios from 'axios';
import { myFetchDeleteRequest, myFetchGetRequest, myFetchPostRequest, myFetchPutRequest } from './src/MyFetchAPIRequests';
import { myAxiosDeleteRequest, myAxiosGetRequest, myAxiosPatchRequest, myAxiosPostRequest, myAxiosPutRequest } from './src/MyAxiosAPIRequests';

const App = () => {

  useEffect(() => {
    // getFetchData();
    getAxiosData();
  }, []);

  const getFetchData = async () => {
    // const res = await myFetchGetRequest();
    // console.log('-~-~-~-~-~-> GET DATA <-~-~-~-~-~-~', res);

    const data = {
      title: 'Movie',
      body: 'Fatty',
      userId: 222
    }

    // const res = await myFetchPostRequest(data);
    // console.log('-~-~-~-~-~-> POST DATA <-~-~-~-~-~-~', res);

    // const res = await myFetchPutRequest(1, data);
    // console.log('-~-~-~-~-~-> PUT DATA <-~-~-~-~-~-~', res);

    const data1 = {
      title: 'Movie',
      body: 'Fatty',
      userId: 222
    }

    const data2 = {
      title: 'Movie',
      // body: 'Fatty',
      // userId: 222
    }

    // const res1 = await myFetchPostRequest(data1)
    // const res = await myFetchPutRequest(1, data2)
    // console.log('-~-~-~-~-~-> POST DATA <-~-~-~-~-~-~', res1);
    // console.log('-~-~-~-~-~-> PUT DATA <-~-~-~-~-~-~', res);

    const res = await myFetchDeleteRequest(2);
    console.log('-~-~-~-~-~-> DELETE DATA <-~-~-~-~-~-~', res);

  }

  const getAxiosData = async () => {

    // axios.get("https://fakestoreapi.com/products/categories", {
    //   // headers: {
    //   //   Authorization: 'Bearer',
    //   //   'Content-Type': 'application/json'
    //   // }
    // }).then(res => {
    //   console.log(res.data);
    // })

    // await myAxiosGetRequest().then(res => {
    //   console.log(res.data);
    // }).catch(error => {
    //   console.log(error);
    // })

    // await myAxiosPostRequest({ title: "World", desc: 'is small', id: 100 }).then(res => {
    //   console.log(res.data);      //status
    // }).catch(error => {
    //   console.log(error);
    // })

    // await myAxiosPutRequest(10, { title: "World", desc: 'is small', id: 100 })
    // .then(res => {
    //   console.log(res.data);      //status
    // }).catch(error => {
    //   console.log(error);
    // })

    // await myAxiosPatchRequest(10, { title: "World", desc: 'is small', id: 100 })
    // .then(res => {
    //   console.log(res.data);      //status
    // }).catch(error => {
    //   console.log(error);
    // })

    await myAxiosDeleteRequest(10)
      .then(res => {
        console.log(res);      //status
      }).catch(error => {
        console.log(error);
      })

  }

  

  return (
    <View>
      <Text >App</Text>
    </View>
  )
}

export default App