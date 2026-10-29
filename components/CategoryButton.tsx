import { Entypo } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text } from "react-native";

type CategoryButonProps = {
    title: string;
    selected: boolean;
    onPress: () => void;
};

export default function CategoryButon({
    title,
    selected,
    onPress,
}: CategoryButonProps) {
    return (
        <Pressable onPress={onPress} style={[
            style.button,
            selected ? style.buttonSelected : style.buttonUnselected
        ]}>
            {selected &&
                <Entypo name="dot-single" size={20} color="#fff"></Entypo>}

                <Text style={[
                style.title,
                selected ? style.titleSelected : style.titleUnSelected,
            ]}
            >
                {title}
            </Text>
        </Pressable>
    );
}

const style = StyleSheet.create({
    button: {
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        paddingHorizontal: 16,
        paddingVertical: 9,
        borderRadius: 24,
    },
    buttonSelected: {
        backgroundColor: "#ff3366",
        borderWidth: 1,
        borderColor: "#ff4c78"
    },
    buttonUnselected: {
        backgroundColor: "#161a28",
        borderWidth: 1,
        borderColor: "#262d42"
    },
    title: {
        fontSize: 14,
        fontWeight: "700",
    },
    titleSelected: {
        color: "#fff"
    },
    titleUnSelected: {
        color: "#9aa3b8"
    }
});