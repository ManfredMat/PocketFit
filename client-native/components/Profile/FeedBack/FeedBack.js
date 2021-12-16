import React from 'react'
import { View, Text, TextInput, Picker, TouchableOpacity } from 'react-native'
import { TextW } from '../../Training/Training.Styles'
import { Container, Card, Input, Select } from './Feedback.Styles'
export default function FeedBack() {
    return (
        <Container>
            <Card>
                <View>
                    <View>
                        <TextW>Asunto</TextW>
                    </View>
                    <Select>
                        <Picker
                            style={{ height: 40, width: 290}}>
                            <Picker.Item label= 'Profesor' value="profesor"/>
                            <Picker.Item label= 'Gimnasio' value="profesor"/>
                            <Picker.Item label= 'Evento' value="profesor"/>
                        </Picker>

                    </Select>
                </View>
                <View>
                    <Input placeholder='Titulo'/>
                </View>
                <View>
                    <Input 
                    style={{height: 200}}
                    multiline={true}/>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity>
                        <TextW>1</TextW>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <TextW>2</TextW>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <TextW>3</TextW>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <TextW>4</TextW>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <TextW>5</TextW>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text  style={{color: "#6AE056"}}>Enviar</Text>
                    </TouchableOpacity>
                </View>
            </Card>
        </Container>
    )
}
