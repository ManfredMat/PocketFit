import React, { useState } from 'react'
import { Switch } from 'react-native-elements';

export function MultipleSwitch() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
    }
    return (
        <>
         <Switch
            trackColor={{ false: "#767577", true: "#6AE056" }}
            thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
            onValueChange={toggleSwitch}
            value={isEnabled}/>
        </>
    )
}
