import React, { Component } from "react";
import ReactDom from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>WARNING</ApprovalCard>

      <ApprovalCard>
        <CommentDetail />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail />
      </ApprovalCard>
    </div>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));
