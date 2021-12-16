import React, { useState } from 'react'
import { View, Text, TextInput, Picker, TouchableOpacity } from 'react-native'
import { TextW } from '../../Training/Training.Styles'
import { Container, Card, Input, Select, Box } from './Feedback.Styles'
import star from '../../../assets/star.png'
import { Image } from 'react-native-elements/dist/image/Image'
import axios from 'axios'
import IP from '../../Ips'
export default function FeedBack() {
    const [state, setState] = useState()
    const [input, setInput] = useState({
        subject:'',
        review:'',
        value: '',
        profesor:'', 
        gym:'', 
        event:''
    })
    const handleInputChange = (e, type) => {
        setInput({
          ...input,
          [type]: e.nativeEvent.text,
        });
      };
    const Submit = async () => {
        const res = await axios.post(`https://pocketfithenry.herokuapp.com/api/reviews/send`, input)
        setTimeout(() => {
            res.status === 200 ? alert('reseña enviada con éxito') : 
            alert('Parece que algo salió mal… inténtelo mas tarde')
        }, 1000);
        setInput({
            subject:'',
            review:'',
            value: '',
            profesor:'', 
            gym:'', 
            event:''
        })
    }
    return (
        <Container>
            <Card>
                <View>
                    <View>
                        <TextW>Reseñas</TextW>
                    </View>
                    <Select>
                        <Picker 
                            onValueChange={(itemValue, itemIndex) => setState(itemValue)}
                            style={{ height: 40, width: 290}}>
                            <Picker.Item label='Categoría'/>
                            <Picker.Item label= 'Profesor' value="profesor"/>
                            <Picker.Item label= 'Gimnasio' value="gym"/>
                            <Picker.Item label= 'Evento' value="event"/>
                        </Picker>
                        <TextInput 
                            style={{
                            color:"#fff",
                            backgroundColor: "#083645", 
                            margin:10,
                            borderRadius: 15,
                            paddingLeft: 10}}
                            onChange={(e) => handleInputChange(e, state)}
                            placeholder='Profesor/gimnasio/evento' 
                            value={state === 'profesor' ? input.profesor : 
                                   state ==='gym' ? input.gym : 
                                   state === 'event' ? input.event : null}/>
                    </Select>
                </View>
                <View>
                    <Input 
                     onChange={(e) => handleInputChange(e, "subject")}
                     placeholder='Titulo' 
                     value={input.subject}/>
                </View>
                <Box style={{height: 200}}>
                    <TextInput 
                    style={{height: 50}}
                    onChange={(e) => handleInputChange(e, "review")}
                    value={input.review}
                    multiline={true}/>
                </Box>
                <View style={{flexDirection: 'row', marginLeft: "5%", marginTop: "5%"}}>
                    <TouchableOpacity 
                        style={{marginRight: "2%"}}
                        onPress={()=> setInput({...input, value: 1})}>
                        <Image 
                            source={star}
                            style={{width: 30, height: 30, tintColor:"#6AE056"}}/>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={{marginRight: "2%"}}
                        onPress={()=> setInput({...input, value: 2})}>
                         <Image 
                            source={star}
                            style={{width: 30, height: 30, tintColor: input.value >= 2 ? "#6AE056": '#020E12'}}/>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={{marginRight: "2%"}}
                        onPress={()=> setInput({...input, value: 3})}>
                         <Image 
                            source={star}
                            style={{width: 30, height: 30, tintColor: input.value >= 3 ? "#6AE056": '#020E12'}}/>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={{marginRight: "2%"}}
                        onPress={()=> setInput({...input, value: 4,})}>
                         <Image 
                            source={star}
                            style={{width: 30, height: 30, tintColor: input.value >= 4 ? "#6AE056": '#020E12'}}/>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={{marginRight: "2%"}}
                        onPress={()=> setInput({...input, value: 5})}>
                         <Image 
                            source={star}
                            style={{width: 30, height: 30, tintColor: input.value >= 5 ? "#6AE056": '#020E12'}}/>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={()=> Submit()}
                        style={{marginTop: "3%", marginLeft: '18%'}}>
                        <Text  style={{color: "#6AE056"}}>Enviar</Text>
                    </TouchableOpacity>
                </View>
            </Card>
        </Container>
    )
}
