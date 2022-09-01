import React, { useState, useEffect } from 'react'
import render from 'dom-serializer';
import Button from 'react-bootstrap/Button'
import './load.css'

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

export default function LoadingButton() {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);
 
  return (
    <Button style={{marginRight:"35%",marginBottom: "5%",marginTop:"5%",width: "15%",display:"inline-block"}}
      variant="primary"
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
    >
      {isLoading ? 'Loading…': 'לאיפוס'}
    </Button>
  );
}

render(<LoadingButton />);