import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View, Text} from "react-native";

export default function Header() {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.topRow}>
                <View style={styles.brandGroup}>
                    <View style={styles.logoBadge}>
                        <Ionicons name ="film" sizze={22} color="#ff2266"></Ionicons>
                    </View>
                    <View>
                        <Text style={styles.brandTitle}>Cine<Text style={styles.brandHighlight}>App</Text></Text>
                        <Text style={styles.brandSubtitle}>Catálogo & Streaming</Text>
                    </View>
                </View>

                <View style={styles.userBadge}>
                    <Ionicons name="sparkles" size={16} color="#ffb800"></Ionicons>
                    <Text style={styles.userBadgeText}>Em alta</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 16,
    },
    topRow:{
        flexDirection:"row",
        justifyContent: "space-between"  
    },

    brandGroup:{
        flexDirection:"row",
        gap: 12,
        alignItems:"center",
    },

    logoBadge:{
        width: 44,
        height: 44,
        backgroundColor: "#rgba(255, 51, 102, 0.12)",
        borderWidth: 1,
        borderColor: "#rgba(255, 51, 102, 0.25)",
        borderRadius: 14,
        alignItems: "center",
        justifyContent: "center",
    },

    brandTitle:{
        fontSize: 24,
        fontWeight: "900",
        color: "#fff",
        letterSpacing: 0.5,
    },

    brandHighlight:{
        color:"#ff3366"
    },
    brandSubtitle:{
      fontSize: 12,
      fontWeight: "500",
      color:"#94a3b8",
      marginTop: 2,
    },
    userBadgeText:{
        fontSize: 12,
        fontWeight: "700",
        color: "#ffb800",
    },
    userBadge:{
        backgroundColor: "#rgba(255, 184, 0, 0.12)",
        borderWidth: 1,
        borderColor: "#rgba(255, 184, 0, 0.25)",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        gap: 6,
        paddingHorizontal: 10,
        paddingVertical: 6,
    },
});