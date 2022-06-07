import React from 'react';
import { TouchableOpacity, useColorScheme } from 'react-native'
import Container from '../../../components/Container';
import CustomText from '../../../components/CustomText';
import { darkThemeColor, generalSizes, lightColors } from '../../../globalStyles/globalStyles';
import Icon from "react-native-vector-icons/AntDesign"

const getPriorityColor = (priority) => {
    const priorityColors = {
        "low": "#5FD068",
        "medium": "#34B3F1",
        "high": "#D61C4E",
    }
    return priorityColors[priority]
}


const TaskItem = ({ item, onPress }) => {
    const { id, title, isCompleted, priority } = item || {}
    const theme = useColorScheme()
    return (
        <Container withoutGeneralMargin rowSb shadow_sm br={generalSizes.size_lg} bg={theme === "light" ? "white" : "black"} mt={generalSizes.size_md} pv={generalSizes.size_lg - 4} ph={generalSizes.size_lg}>
            <Container withoutGeneralMargin row>
                <TouchableOpacity onPress={() => onPress(item)}>
                    {isCompleted ? <Icon style={{ borderRadius: 20 }} name='checkcircle' color={theme === "light" ? lightColors.secondary : lightColors.bg_pink} size={22} /> : <Container bg='#ECECEC' width={22} withoutGeneralMargin height={22} br={11} />}

                </TouchableOpacity>

                <Container withoutGeneralMargin>
                    <CustomText extraStyles={{ marginLeft: 12, textDecorationLine: isCompleted ? 'line-through' : "none", }} title={title} size={12} color={lightColors.primary} />
                </Container>
            </Container>
            <Container width={12} height={12} bg={getPriorityColor(priority) || "black"} br={6} />
        </Container>
    )
}

export default TaskItem;