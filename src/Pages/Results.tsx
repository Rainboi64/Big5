import React, { useEffect, useState } from "react";
import { VictoryChart, VictoryBar, VictoryAxis } from "victory";
import { getResults } from "../firebase";
import { Result } from "./Test/Types/Result";

export default function Results() {
  const [result, setResult] = useState<Result>();

  useEffect(() => {
    async function getData() {
      const results = await getResults();
      if (results) {
        console.log(results);
        setResult(results);
      }
    }

    if (!result) {
      getData();
    }
  });

  return result ? (
    <VictoryChart>
      <VictoryBar
        style={{ data: { fill: "165996", width: 40 } }}
        // @ts-ignore
        data={[
          { x: "Openness", y: result.Openness.Total },
          { x: "Conscientiousness", y: result.Conscientiousness.Total },
          { x: "Extraversion", y: result.Extroversion.Total },
          { x: "Agreeableness", y: result.Agreeableness.Total },
          { x: "Neuroticism", y: result.Neurocitism.Total },
        ]}
      />
      <VictoryAxis style={{ tickLabels: { angle: 90, fill: "transparent" } }} />
      <VictoryAxis
        axisValue="Openness"
        dependentAxis
        style={{
          tickLabels: { angle: 90, fill: "black", textAnchor: "middle" },
        }}
        tickValues={[2, -2]}
        tickFormat={["Openness", "Traditionalism"]}
      />
      <VictoryAxis
        axisValue="Conscientiousness"
        dependentAxis
        style={{
          tickLabels: { angle: 90, fill: "black", textAnchor: "middle" },
        }}
        // tickValues specifies both the number of ticks and where
        // they are placed on the axis
        tickValues={[2, -2]}
        tickFormat={["Conscientiousness", "Carelessness"]}
      />
      <VictoryAxis
        axisValue="Extraversion"
        dependentAxis
        style={{
          tickLabels: { angle: 90, fill: "black", textAnchor: "middle" },
        }}
        // tickValues specifies both the number of ticks and where
        // they are placed on the axis
        tickValues={[2, -2]}
        tickFormat={["Extraversion", "Introversion"]}
      />
      <VictoryAxis
        axisValue="Agreeableness"
        dependentAxis
        style={{
          tickLabels: { angle: 90, fill: "black", textAnchor: "middle" },
        }}
        // tickValues specifies both the number of ticks and where
        // they are placed on the axis
        tickValues={[2, -2]}
        tickFormat={["Agreeable", "Assertive"]}
      />
      <VictoryAxis
        axisValue="Neuroticism"
        dependentAxis
        style={{
          tickLabels: { angle: 90, fill: "black", textAnchor: "middle" },
        }}
        // tickValues specifies both the number of ticks and where
        // they are placed on the axis
        tickValues={[2, -2]}
        tickFormat={["Emoticonal Stability", "Low Stress"]}
      />
    </VictoryChart>
  ) : (
    <div />
  );
}
// export default function Results() {
//   return <Box></Box>;
// }
