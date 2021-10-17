import React from "react";
import Button from "./Button";

export default function ButtonsPanel(props) {
  const borderStyle = "solid #3b5155 1px";

  return (
    <div className="buttons-panel">
      <Button
        handleAction={props.handleClear}
        text="AC"
        id="clear"
        border={{
          borderBottom: borderStyle,
          borderRight: borderStyle,
          borderTop: borderStyle,
        }}
        class="button-clear"
      />
      <Button
        handleAction={props.handleOperators}
        text="/"
        id="divide"
        border={{
          borderBottom: borderStyle,
          borderRight: borderStyle,
          borderLeft: borderStyle,
          borderTop: borderStyle,
        }}
      />
      <Button
        handleAction={props.handleOperators}
        text="*"
        id="multiply"
        border={{
          borderBottom: borderStyle,
          borderLeft: borderStyle,
          borderTop: borderStyle,
        }}
      />
      <Button
        handleAction={props.handleNumbers}
        text="7"
        id="seven"
        border={{
          borderBottom: borderStyle,
          borderRight: borderStyle,
          borderTop: borderStyle,
        }}
      />
      <Button
        handleAction={props.handleNumbers}
        text="8"
        id="eight"
        border={{
          borderBottom: borderStyle,
          borderRight: borderStyle,
          borderTop: borderStyle,
          borderLeft: borderStyle,
        }}
      />
      <Button
        handleAction={props.handleNumbers}
        text="9"
        id="nine"
        border={{
          borderBottom: borderStyle,
          borderRight: borderStyle,
          borderTop: borderStyle,
          borderLeft: borderStyle,
        }}
      />
      <Button
        handleAction={props.handleOperators}
        text="-"
        id="subtract"
        border={{
          borderBottom: borderStyle,
          borderTop: borderStyle,
          borderLeft: borderStyle,
        }}
      />

      <Button
        handleAction={props.handleNumbers}
        text="4"
        id="four"
        border={{
          borderBottom: borderStyle,
          borderRight: borderStyle,
          borderTop: borderStyle,
        }}
      />
      <Button
        handleAction={props.handleNumbers}
        text="5"
        id="five"
        border={{
          borderBottom: borderStyle,
          borderRight: borderStyle,
          borderTop: borderStyle,
          borderLeft: borderStyle,
        }}
      />
      <Button
        handleAction={props.handleNumbers}
        text="6"
        id="six"
        border={{
          borderBottom: borderStyle,
          borderRight: borderStyle,
          borderTop: borderStyle,
          borderLeft: borderStyle,
        }}
      />
      <Button
        handleAction={props.handleOperators}
        text="+"
        id="add"
        border={{
          borderBottom: borderStyle,
          borderTop: borderStyle,
          borderLeft: borderStyle,
        }}
      />
      <Button
        handleAction={props.handleNumbers}
        text="1"
        id="one"
        border={{
          borderBottom: borderStyle,
          borderRight: borderStyle,
          borderTop: borderStyle,
        }}
      />
      <Button
        handleAction={props.handleNumbers}
        text="2"
        id="two"
        border={{
          borderBottom: borderStyle,
          borderRight: borderStyle,
          borderTop: borderStyle,
          borderLeft: borderStyle,
        }}
      />
      <Button
        handleAction={props.handleNumbers}
        text="3"
        id="three"
        border={{
          borderBottom: borderStyle,
          borderRight: borderStyle,
          borderTop: borderStyle,
          borderLeft: borderStyle,
        }}
      />
      <Button
        handleAction={props.handleNumbers}
        text="0"
        id="zero"
        border={{ borderRight: borderStyle, borderTop: borderStyle }}
        class="button-zero"
      />
      <Button
        handleAction={props.handleDecimal}
        text="."
        id="decimal"
        border={{
          borderRight: borderStyle,
          borderTop: borderStyle,
          borderLeft: borderStyle,
        }}
      />
      <Button
        handleAction={props.handleEquals}
        text="="
        id="equals"
        border={{ borderTop: borderStyle, borderLeft: borderStyle }}
        class="button-equal"
      />
    </div>
  );
}