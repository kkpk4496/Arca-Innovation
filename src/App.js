import {useState, useEffect} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import axios from 'axios'
import EmployeeList from './components/EmployeeList'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
})

const App = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get('https://mocki.io/v1/3a4b56bd-ad05-4b12-a181-1eb9a4f5ac8d') // Replace 'API_ENDPOINT_URL' with the actual API endpoint
      .then(response => {
        setData(response.data)
      })
      .catch(error => {
        console.error('Error fetching data:', error)
      })
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Employee Directory</Text>
      <EmployeeList data={data} />
    </View>
  )
}

export default App
