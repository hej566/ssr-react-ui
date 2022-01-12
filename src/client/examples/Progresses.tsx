import React from 'react';
// @ts-ignore
import SyntaxHighlighter from 'react-syntax-highlighter';
// @ts-ignore
const docco = require('react-syntax-highlighter/dist/cjs/styles/hljs/docco');
import Progress from '../components/Progress';
import ProgressBar from '../components/ProgressBar';

function Progresses() {
  const basic = `
    import Progress from '../components/Progress';
    import ProgressBar from '../components/ProgressBar';
    
    <Progress>
      <ProgressBar value={50} label="some label" />
    </Progress>
    
    <Progress>
      <ProgressBar value={30} className="bg-success" label="some label" />
    </Progress>
    
    <Progress>
      <ProgressBar value={30} className="bg-warning" label="some label" />
    </Progress>
    
    <Progress>
      <ProgressBar value={30} className="bg-danger" label="some label" />
      <ProgressBar value={30} className="bg-warning" label="some label" />
      <ProgressBar value={30} className="bg-success" label="some label" />
    </Progress>
    
    <Progress>
      <ProgressBar value={50} striped label="some label" />
    </Progress>
     
    <Progress>
      <ProgressBar value={75} striped animate label="some label" />
    </Progress>
  `;

  return (
    <div className="rb-progresses container-fluid">
      <section className="rb-progress-basic">
        <h1 className="rb-title">Progress</h1>
        <div className="rb-group">
          <div className="rb-progress-wrapper">
            <Progress>
              <ProgressBar value={50} label="some label" />
            </Progress>
          </div>
          <div className="rb-progress-wrapper">
            <Progress>
              <ProgressBar value={30} className="bg-success" label="some label" />
            </Progress>
          </div>
          <div className="rb-progress-wrapper">
            <Progress>
              <ProgressBar value={30} className="bg-warning" label="some label" />
            </Progress>
          </div>
          <div className="rb-progress-wrapper">
            <Progress>
              <ProgressBar value={30} className="bg-danger" label="some label" />
              <ProgressBar value={30} className="bg-warning" label="some label" />
              <ProgressBar value={30} className="bg-success" label="some label" />
            </Progress>
          </div>
          <div className="rb-progress-wrapper">
            <Progress>
              <ProgressBar value={50} striped label="some label" />
            </Progress>
          </div>
          <div className="rb-progress-wrapper">
            <Progress>
              <ProgressBar value={75} striped animate label="some label" />
            </Progress>
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {basic}
          </SyntaxHighlighter>
        </div>
      </section>
    </div>
  );
}

export default Progresses;
