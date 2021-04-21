import React from "react"
import { ParameterMetaData } from "./types"

interface Props {
  parameter: ParameterMetaData
}
export default function WebActionParameter({ parameter }: Props) {
  let cellStyle = {border: "none", padding: "0px 11px"}
  return (
    <tr>
      <td style={cellStyle}>{parameter.annotations.join(",")}</td>
      <td style={cellStyle}>{parameter.name}</td>
      <td style={cellStyle}>{parameter.type}</td>
    </tr>
  )
}