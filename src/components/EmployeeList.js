import {FlatList} from 'react-native'
import EmployeeCard from './EmployeeCard'

const EmployeeList = ({data}) => (
  <FlatList
    data={data}
    keyExtractor={item => item.id.toString()}
    renderItem={({item}) => <EmployeeCard employee={item} />}
  />
)

export default EmployeeList
