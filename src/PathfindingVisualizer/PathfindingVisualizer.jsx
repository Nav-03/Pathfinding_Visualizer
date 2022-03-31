import React, { useState } from 'react';
import { Node } from './Node/Node';

import './PathfindingVisualizer.css';




componentDidMount() {
  const nodes = [];
  for (let row = 0; row < 20; row++) {
    const currentRow = [];
    for (let col = 0, col < 50, col++) {
      currentRow.push([]);
    }
    nodes.push(currentRow);
  }
  this.setState({ nodes });
}

export const PathfindingVisualizer = () => {

  return (
    <div className="grid">
      {nodes.map((row, rowIdx) => {
        return <div>
          {row.map((node, nodeIdx) => <Node></Node>)}
        </div>;
      })}
    </div>
  )
}