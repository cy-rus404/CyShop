import { StyleSheet ,View, Image } from "react-native";
import Icon from "./assets/shopping-cart.mp4";

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
            backgroundColor: "#1E1E1E"
        },
        Image:{
            width:270,
            height:100,
            resizeMode: "cover",
        }
    }
)