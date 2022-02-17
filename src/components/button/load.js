import React,{useState,useEffect} from 'react'
import render from 'dom-serializer';
import Button from 'react-bootstrap/Button'

const button=(props)=>{

function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }
  
  function LoadingButton() {
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
      <Button
        variant="primary"
        disabled={isLoading}
        onClick={!isLoading ? handleClick : null}
      >
        {isLoading ? 'הפרטים נשמרים...' : 'שמירת הפרטים'}
      </Button>
    );
  }
  
  render(<LoadingButton />);
}
export default button;
