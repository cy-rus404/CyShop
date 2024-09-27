import { StyleSheet ,View, Image } from "react-native";
import Icon from "./assets/shopping-cart.png";

export default function SplashScreen(){
    return(
        <View style = {styles.container}>
            <View>
                <Image source= {Icon} style={styles.Image}/>
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
            backgroundColor: "#fff"
        },
        Image:{
            width:100,
            height:100,
            resizeMode: "cover",
        }
    }
)