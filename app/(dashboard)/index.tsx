import Bio from "@/src/components/dashboard/Bio";
import { Text, View } from "react-native";
import ViewDashboard from "@/src/components/dashboard/ViewDashboard";
import Level from "@/src/components/dashboard/Level";
import { useFonts } from "expo-font";
import Point from "@/src/components/dashboard/Point";
import PocketHistory from "@/src/components/dashboard/PocketHistory";
import { FontAwesome6 } from "@expo/vector-icons";
// import {FontAwesome6} from "@react-native-vector-icons/fontawesome6";

const Index = () => {
  const [loaded, error] = useFonts({
    "Outfit-Regular": require("../../assets/fonts/Outfit-Regular.ttf"),
    "Outfit-Bold": require("../../assets/fonts/Outfit-Bold.ttf"),
    "Outfit-Medium": require("../../assets/fonts/Outfit-Medium.ttf"),
  });
  return (
    <ViewDashboard>
      <View style={{ paddingHorizontal: 20, backgroundColor: "#7C4585", paddingVertical: 15, flex: 1, justifyContent: "flex-end", flexDirection: "row" }}>
        <FontAwesome6 name="bell" size={27} iconStyle="solid" color="white"></FontAwesome6>
      </View>
      <Bio></Bio>
      <View style={{ flex: 1, flexDirection: "row", marginTop: 40, gap: 10, paddingHorizontal: 20 }}>
        <Level fontTitle="Outfit-Medium" fontTitleRank="Outfit-Bold"></Level>
        <Point fontTitle="Outfit-Medium" fontTitleRank="Outfit-Bold"></Point>
      </View>
      <PocketHistory font="Outfit-Regular"></PocketHistory>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultrices neque et felis varius fringilla. Aenean commodo volutpat pretium. Vestibulum id lacus ligula. Fusce pellentesque, ipsum vitae rhoncus faucibus, enim nunc
        tristique mauris, a tincidunt turpis neque vitae lectus. Nullam id euismod est. Duis eget ante ipsum. Curabitur sagittis est metus, eget vehicula turpis maximus quis. Etiam ullamcorper quis erat dignissim vehicula. Donec malesuada
        blandit justo eu consectetur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis viverra odio sit amet tortor porttitor, non faucibus dolor imperdiet. Nulla sed pellentesque arcu, in volutpat
        nisl. Sed a mauris efficitur, scelerisque quam vel, semper turpis. Vestibulum lobortis facilisis sollicitudin. Quisque vitae rhoncus ante, nec euismod augue. Nullam malesuada maximus pretium. Praesent molestie quam leo, nec
        porttitor turpis placerat eu. Nullam vitae scelerisque nisi. Quisque ex dui, venenatis ac nisi eu, fermentum feugiat quam. Integer aliquam eget velit sed lobortis. Integer rhoncus feugiat diam, vitae finibus quam semper ac.
        Curabitur interdum arcu vitae turpis tincidunt, a placerat magna cursus. Duis eu nunc pulvinar, imperdiet nunc ut, efficitur tellus. Donec consequat nibh quis elementum viverra. Nunc sagittis, leo sed sollicitudin blandit, leo orci
        dictum velit, quis elementum ante erat ac risus. Vestibulum vehicula sem eget condimentum consectetur. Nulla ac metus et eros blandit consectetur. Ut porta sit amet felis eget posuere. Sed eget leo lacinia, ornare felis id, ornare
        tellus. In varius sodales risus nec congue. Ut nec egestas diam. Vivamus iaculis lacinia diam quis finibus. In venenatis a arcu in pellentesque. Integer pellentesque volutpat nisl. Vestibulum imperdiet ante eget purus aliquet, a
        vestibulum neque viverra. Phasellus nec vehicula nulla. Fusce ante nisl, finibus at maximus vitae, volutpat ac turpis. Proin convallis efficitur vulputate. Duis non justo nec augue pretium vehicula. Sed sed turpis tempor, convallis
        nunc placerat, euismod nibh. Aliquam id sagittis quam, at iaculis ante. Fusce porttitor nunc sit amet laoreet rhoncus. Phasellus pharetra dolor ut eros eleifend, eu sodales metus mollis. Cras placerat ultrices mi. Donec blandit
        faucibus iaculis. Sed vehicula mi at sem iaculis, eu fermentum dolor tincidunt. Ut varius elit nunc, a tempor orci eleifend sed. Duis et urna scelerisque purus laoreet fringilla a sit amet nisl.
      </Text>
    </ViewDashboard>
  );
};

export default Index;
