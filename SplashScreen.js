import { StyleSheet ,View, Image, Text } from "react-native";
import Icon from "./assets/shopping-cart.png";

export default function SplashScreen(){
    return(
        <View style = {styles.container}>
            <View>
                <Image source= {Icon} style={styles.Image}/>
                <Text style={{fontWeight:'bold',textAlign:'center',marginTop:20,fontSize:30}}>CyShop</Text>
            </View>
        </View>
    )
}

const styles=StyleSheet.create(
    {
        container:{
            flex:1,
            justifyContent: "center",
            alignItems:'center',
            backgroundColor: 'orange'
        },
        Image:{
            width:100,
            height:100,
            resizeMode: "cover",
        }
    }
)