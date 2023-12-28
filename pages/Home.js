import { View, Text } from "react-native"
import {ScrollView} from 'react-native'
import Icons from 'react-native-vector-icons/Ionicons'
import Octicons from 'react-native-vector-icons/Octicons'
import MeterialIcons from 'react-native-vector-icons/MaterialIcons'
const Home = () => {
    const Tasks = () => {
        return (
            <>
                <View style={{ backgroundColor: '#375CBB', padding: 30,justifyContent:'space-between', borderRadius: 20, flexDirection:'row' }}>
                    <Text style={{ color: "#fff", fontSize: 18 }}>Task Name</Text>
                    <Icons name="play-outline" size={30} color="#fff"/>
                </View>

            </>
        )
    }
    return (
        
        <>
        <ScrollView>
            <View>
                <View style={{ backgroundColor: '#375CBB',paddingTop:30, minHeight: '100%' }}>
                    <View style={{justifyContent:'space-between', flexDirection:'row', paddingHorizontal:20}}>
                        <MeterialIcons name="menu-open" size={35} color="#fff" />
                        <Octicons name="gear" size={20}  color="#fff" />
                    </View>
                    <View style={{ paddingVertical: 90, paddingHorizontal: 40 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: '#fff', fontSize: 50 }}> 21</Text>
                                <View style={{ justifyContent: 'center' }}>
                                    <View>
                                        <Text style={{ color: '#fff' }}>November</Text>
                                        <Text style={{ color: '#fff' }}>2023</Text>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <View style={{ backgroundColor: '#fff', padding: 20,flexDirection:'row', gap:30, borderRadius:20 }}>
                                    <Text style={{ fontSize: 20 }}>add</Text>
                                    <Octicons name="diff-added" size={30}  color="#375CBB" />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ backgroundColor: '#fff', gap: 30, height: '100%', padding: 15, borderTopLeftRadius: 100 }}>
                        <Text style={{ textAlign: 'center', fontSize: 30 }}>Tasks for Today</Text>
                        <View style={{ gap: 20 }}>
                            <Tasks />
                            <Tasks />
                            <Tasks />
                            <Tasks />
                            <Tasks />
                            <Tasks />
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
        </>
    )
}
export default Home