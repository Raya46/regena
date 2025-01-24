import Loading from "@/_components/Loading";
import useAddAlign from "@/_hooks/_alignHooks/useAddAlign";
import useFetchAlign from "@/_hooks/_alignHooks/useFetchAlign";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const CreateAlign = () => {
  const { refetch, aligns } = useFetchAlign();
  const { fields, setFields, error, isSubmiting, handleAddAlign, showContent } =
    useAddAlign(refetch);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>It's okay to express your feelings here.</Text>
      <Text style={styles.subtitle}>No judgment, just understanding.</Text>

      {/* Image Container */}
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: "https://s3-alpha-sig.figma.com/img/9ed3/99df/37da175391f98c2066640cccd628f84a?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QGK55iEbCUb47bXt5kLXP7c8YjTK-ZdQjcdauTXmtO1gRUlCHpLyVUSp7HvHHM9C1cTsejcgzgGs1yi2BqK5LZrZBbh53u3xORpdy8u3pQq-sVTS5dMUa3Ym2s-aUNazQ5H02uJvA1gkW5z-rPqJfnObf4zNpIO8AyI0BEMZkomZ1n24aNnQME4fC2GrLMN5~CvEIKvYRJbxaxKuPw6a01snoL9~~Tvu06SKxWnC1pMEigHQglZsHte7H62qlbJnm79xnJUGU55sX5qEMwqPDSQZugH-ggSTeZex3cwNzxMrgRkRLgG~l2XJBprPxFUQbENQako2cBcm~ZSDCoJfMg__",
          }}
          style={styles.image}
        />
      </View>

      {showContent ? (
        <View>
          <Text style={{ color: "black" }}>{fields.content}</Text>
        </View>
      ) : (
        <TextInput
          style={styles.input}
          placeholder="Write what you're feeling or thinking right now..."
          onChangeText={(text) => setFields({ ...fields, title: text })}
        />
      )}

      <View style={{ flex: 3 }}></View>

      {showContent ? (
        <View style={{ flexDirection: "column", gap: 16 }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log("handle update align")}
          >
            <Text style={styles.buttonText}>Set as Notification</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonOutline}
            onPress={() => router.back()}
          >
            <Text style={{ color: "#14B8A6" }}>Save for Later</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          {isSubmiting ? (
            <Loading />
          ) : (
            <TouchableOpacity style={styles.button} onPress={handleAddAlign}>
              <Text style={styles.buttonText}>Make It Positive</Text>
            </TouchableOpacity>
          )}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F1F5F9",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
  input: {
    padding: 20,
    marginBottom: 20,
    borderRadius: 24,
    backgroundColor: "#fff",
    color: "black",
    flex: 2,
  },
  button: {
    backgroundColor: "#14B8A6",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonOutline: {
    borderWidth: 1,
    borderColor: "#14B8A6",
    backgroundColor: "transparent",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
});

export default CreateAlign;
