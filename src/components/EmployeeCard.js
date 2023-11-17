import {View, Text, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  card: {
    padding: 16,
    margin: 8,
    borderRadius: 8,
    width: 250,
  },
})

const EmployeeCard = ({employee}) => (
  <View style={[styles.card, {backgroundColor: employee.backgroundColor}]}>
    <Text>Name: {employee.name}</Text>
    <Text>Email: {employee.email}</Text>
    <Text>Phone: {employee.phone}</Text>
    {employee.parentId !== null ? (
      <Text>Manager: {employee.parentId}</Text>
    ) : (
      ''
    )}
  </View>
)

export default EmployeeCard
