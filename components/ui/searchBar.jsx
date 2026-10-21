import { TextInput } from "react-native";

const SearchBar = ({ value, onChange }) => {
    return (
        <TextInput
            placeholder="Rechercher un film / une série..."
            onChangeText={onChange}
            value={value}
        />
    );
};

export default SearchBar;
