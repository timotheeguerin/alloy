import { Output } from "@alloy-js/core";
import { expect, it } from "vitest";
import { IO } from "./builtins/System/index.js";
import { SourceFile } from "./components/source-file/source-file.jsx";

function Wrapper(props: { children: any }) {
  return (
    <Output>
      <SourceFile path="Program.cs">{props.children}</SourceFile>
    </Output>
  );
}

it("reference class", () => {
  expect(<Wrapper>{IO.BinaryReader}</Wrapper>).toRenderTo(`
    using System.IO;

    BinaryReader
  `);
});

it("can render multiple times", () => {
  expect(<Wrapper>{IO.BinaryReader}</Wrapper>).toRenderTo(`
    using System.IO;

    BinaryReader
  `);

  expect(<Wrapper>{IO.BinaryReader}</Wrapper>).toRenderTo(`
    using System.IO;

    BinaryReader
  `);
});
