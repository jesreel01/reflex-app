import { View, Text, Image } from "react-native";
import { Card } from "./ui/card";
import { cn } from "~/lib/utils";
import { Cloudy } from "lucide-react-native";

export default function WeatherWidget({ className }: { className?: string }) {
  return (
    <Card
      className={cn("bg-gray-100 rounded-3xl px-5 py-3 pb-5 w-full", className)}
    >
      <View className="flex-row items-center justify-between mb-3 ">
        <View className="flex-row items-center gap-3">
          <Cloudy size={50} color="black" style={{
            marginLeft: -5,
          }}/>
          <View >
            <Text className="text-lg font-semibold">Mostly Cloudy</Text>
            <Text className="text-slate-500 text-base">
              General Santos City, Phil...
            </Text>
          </View>
        </View>
        <Text className="text-5xl pt-4">22°</Text>
      </View>

      <View className="flex-row justify-between">
        <WeatherMetric label="Sensible" value="27°C" />
        <WeatherMetric label="Precipitation" value="4%" />
        <WeatherMetric label="Humidity" value="66%" />
        <WeatherMetric label="Wind" value="16 km/h" />
      </View>
    </Card>
  );
}

function WeatherMetric({ label, value }: { label: string; value: string }) {
  return (
    <View>
      <Text className="text-slate-500 text-sm">{label}</Text>
      <Text className="text-sm font-medium">{value}</Text>
    </View>
  );
}
