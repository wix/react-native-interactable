import * as React from "react";
import {
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import styles from "./styles";

export default class MapPanel extends React.PureComponent {
    public render() {
        return (
          <View style={styles.container}>
            <Text>MapPanel</Text>
          </View>
        );
    }
}
