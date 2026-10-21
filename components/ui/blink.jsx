import { useEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native';

const Blink = props => {
    const [isShowingText, setIsShowingText] = useState(true);

    useEffect(() => {
        const toggle = setInterval(() => {
            setIsShowingText(!isShowingText);
        }, 1000);

        return () => clearInterval(toggle);
    });

    if (!isShowingText) {
        return null;
    }

    return <Text style={styles.blink}>{props.text}</Text>;
};

const styles = StyleSheet.create({
    blink: {
        color: "#ff0000",
        textAlign: "center",
    }
});

export default Blink;