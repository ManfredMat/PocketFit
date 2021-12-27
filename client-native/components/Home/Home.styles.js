import styled from "styled-components";

const darkGrayBase = '#020E12';
const yellow = "#CEFA1F";
const yellowMedium = "#D9FB52";
const lightYellow = "#E4FC82";
const green = "#6AE056";
const darkBlue = "#083645";
const blueMedium = "#0D5972";
const darkBlueBase = "#041D25";
const greenMedium = "#588A58";


const Styles = {
    
    Container: styled.View`
        height: 100%;
        width: 100%;
        background-color: ${darkGrayBase};
        padding: 10px;
        padding-top: 20px;
        padding-bottom: 78px;
    `,

    HeaderContainer: styled.View`
        display: flex; 
        flex-direction: row; 
        align-items: center;
        padding-bottom: 15px;
    `,

    ProfileImage: styled.Image`
        width: 95px; 
        height: 95px; 
        margin: 8px; 
        border-radius: 9999px; 
        background-color: white;
    `,

    NameLogoContainer: styled.View`
        display: flex;
        flex-direction: column;
    `,

    GymLogo: styled.Image`
        width: 130px;
        height: 18px;
    `,

    HeaderText: styled.Text`
        color: white;
        font-family: "Poppins_500Medium";
        font-size: 25px;
    `,

    ViewDetailedStats: styled.Text`
        color: ${green};
        font-family: "Poppins_500Medium";
        font-size: 15px;
        align-self: flex-end;
        padding-right: 15px;
        padding-bottom: 3px;
    `,

    StatsContainer: styled.View`
        height: 200px;
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;
    `,

    CardStatsYellow: styled.View`
        border-radius: 20px;
        height: 45%;
        width: 30%;
        background-color: ${yellow};
        margin: 5px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        padding: 10px;
    `,

    CardStatsLightYellow: styled.View`
        border-radius: 20px;
        height: 45%;
        width: 30%;
        background-color: ${lightYellow};
        margin: 5px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        padding: 10px;
    `,

    StatImage: styled.Image`
        height: 55px;
        width: 30px;
    `,

    StatText: styled.Text`
        color: black;
        font-family: "Poppins_600SemiBold";
        font-size: 25px;
    `,

    ActivitiesTitlesContainer: styled.View`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    `,

    ActivityTitle: styled.Text`
        color: white;
        font-family: "Poppins_500Medium";
        font-size: 18px;
        margin-top: 8px;
    `,

    ActivitiesContainer: styled.View`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-left: 8px;
        margin-right: 8px;
        margin-bottom: 12px;
    `,

    EventContainer: styled.TouchableOpacity`
        width: ${(props) =>
            props.holidays ? "67%" : "100%"};
        height: 160px;
        background-color: ${green};
        border-radius: 20px;
        padding: 15px;
    `,

    EventTextContainer: styled.View`
        height: 100%;
        width: 70%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    `,

    EventTitle: styled.Text`
        font-family: "Poppins_600SemiBold";
    `,

    EventDescription: styled.Text`
        font-family: "Poppins_500Medium";
    `,

    HollidayContainer: styled.TouchableOpacity`
        width: 30%;
        height: 160px;
        background-color: ${darkBlue};
        border-radius: 20px;
        padding: 10px;
        align-items: center;
        justify-content: space-around;
    `,

    HollidayMonthContainer: styled.View`
        background-color: ${green};
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        border-radius: 15px;
        width: 100%;
        height: 60%;
        bottom: 5px;
    `,

    HollidayDayContainer: styled.View`
        background-color: ${darkBlue};
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        border-radius: 10px;
    `,

    HollidayDay: styled.Text`
        color: white;
        font-family: "Poppins_500Medium";
        font-size: 35px;
    `,

    HollidayMonth: styled.Text`
        color: ${darkBlue};
        font-family: "Poppins_500Medium";
        font-size: 12px;
    `,

    HollidayName: styled.Text`
        color: white;
        text-align: center;
        font-family: "Poppins_500Medium";
    `,

    SlidersIndicatorsContainer: styled.View`
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-bottom: 20px;
    `,

    EventSliderIndicatorContainer: styled.View`
        width: 67%; 
        display: flex;
        flex-direction: row;
        justify-content: center;
    `,

    HolidaySliderIndicatorContainer: styled.View`
        width: 30%;
        display: flex;
        flex-direction: row;
        justify-content: center;    
    `,

    CurrentSliderIndicator: styled.View`
        width: 12px;
        height: 12px;
        border-radius: 9999px;
        background-color: ${(props) =>
            props.current ? "white" : greenMedium};
        margin: 3px;
    `,

    ViewDetailedRoutine: styled.Text`
        color: ${green};
        font-family: "Poppins_500Medium";
        font-size: 18px;
        align-self: flex-end;
        padding-right: 15px;
    `,

    RoutineContainer: styled.View`
        height: 250px;
        margin-left: 10px;
        margin-right: 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    `,

    BlocksContainer: styled.View`
        width: 49%;
        height: 250px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    `,

    BlockContainer: styled.View`
        height: 30%;
        width: 100%;
        background-color: ${yellow};
        border-radius: 20px;
        justify-content: center;
    `,

    BlockSubContainer: styled.View`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
        height: 100%;
    `,

    BlockNumberContainer: styled.View`
        background-color: ${darkGrayBase};
        width: 30px;
        height: 30px;
        border-radius: 9999px;
        align-items: center;
        justify-content: center;
    `,

    BlockNumber: styled.Text`
        color: ${yellow};
        font-family: "Poppins_500Medium";
    `,

    ExercisesContainer: styled.View`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        height: 100%;
    `,

    ExerciseContainer: styled.View`
        border-radius: 6px;
        width: 100px;
        background-color: ${darkBlueBase};
    `,

    ExerciseName: styled.Text`
        color: white;
        font-size: 12px;
        font-family: "Poppins_500Medium";
        align-self: center;
    `,

    RoutineTypeContainer: styled.View`
        width: 48%;
        height: 250px;   
        background-color: ${darkBlue};
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
    `,

    RoutineTypeTitleContainer:styled.Text`
        align-items: center;
        height: 20%;
    `,

    RoutineTypeTitle: styled.Text`
        font-family: "Poppins_500Medium";
        color: ${yellow};
        font-size: 18px;
        margin-top: 8px;
        margin-bottom: 30px;
    `,

    RoutineTypeSubContainerContainer: styled.View`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        height: 80%;
    `,
    
    RoutineTypeSubContainer: styled.View`
        background-color: ${blueMedium};
        border-radius: 15px;
        display: flex;
        flex-direction: row;
        padding: 8px;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin-top: 14px;
        margin-bottom: 5px;
    `,

    RoutineTypeSubtitle: styled.Text`
        font-family: "Poppins_500Medium";
        color: ${green};
        font-size: 12px;
    `,

    /* RoutineTypeNumberContainer: styled.Image`
        border-radius: 9999px;
        height: 55px;
        width: 55px;
        align-items: center;
        justify-content: center;
        align-items: center;
        justify-content: center;
    `, */

    RoutineTypeNumberContainer: styled.View`
        border-radius: 9999px;
        height: 55px;
        width: 55px;
        background-color: ${yellowMedium};
        align-items: center;
        justify-content: center;
    `,

    RoutineTypeNumber: styled.Text`
        color: ${darkBlue};
        font-family: "Poppins_500Medium";
        font-size: 25px;
    `,
}

export default Styles;