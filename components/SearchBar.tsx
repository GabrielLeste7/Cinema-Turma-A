type SearchProps = {
    value: string;
    onChangeText: (text: string) => void;
    onClear?: () => void;
};