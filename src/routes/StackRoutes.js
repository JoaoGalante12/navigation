import { createStackNavigator } from "@react-navigation/stack";
import Home from '../paginas/home'
import Cadastrar from '../paginas/cadastrar'
const Stack = createStackNavigator();

export default function StackRoutes(){
return(

        <Stack.Navigator>
        
            <Stack.Screen name ='Home' component={Home}  />
            <Stack.Screen name = 'Cadastrar' component={Cadastrar}/>
        
        </Stack.Navigator>


);

}