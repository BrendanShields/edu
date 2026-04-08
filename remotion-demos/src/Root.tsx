import React from "react";
import { Composition, Folder } from "remotion";
import { CreatingRoutes } from "./compositions/CreatingRoutes";
import { CopyPasteEra } from "./compositions/mcp/CopyPasteEra";
import { FunctionCalling } from "./compositions/mcp/FunctionCalling";
import { EnterMCP } from "./compositions/mcp/EnterMCP";
import { InsideMCPServer } from "./compositions/mcp/InsideMCPServer";
import { WhenToUseMCP } from "./compositions/mcp/WhenToUseMCP";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Folder name="explainers">
        <Composition
          id="creating-routes"
          component={CreatingRoutes}
          durationInFrames={13 * 30}
          fps={30}
          width={1920}
          height={1080}
        />
      </Folder>
      <Folder name="mcp-series">
        <Composition
          id="mcp-e1-copy-paste-era"
          component={CopyPasteEra}
          durationInFrames={420}
          fps={30}
          width={1920}
          height={1080}
        />
        <Composition
          id="mcp-e2-function-calling"
          component={FunctionCalling}
          durationInFrames={420}
          fps={30}
          width={1920}
          height={1080}
        />
        <Composition
          id="mcp-e3-enter-mcp"
          component={EnterMCP}
          durationInFrames={480}
          fps={30}
          width={1920}
          height={1080}
        />
        <Composition
          id="mcp-e4-inside-mcp-server"
          component={InsideMCPServer}
          durationInFrames={480}
          fps={30}
          width={1920}
          height={1080}
        />
        <Composition
          id="mcp-e5-when-to-use-mcp"
          component={WhenToUseMCP}
          durationInFrames={360}
          fps={30}
          width={1920}
          height={1080}
        />
      </Folder>
    </>
  );
};
