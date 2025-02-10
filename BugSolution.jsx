import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []); // Empty dependency array ensures this runs only once on mount

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Render data here */}
      {JSON.stringify(data)}
    </div>
  );
}

export default MyComponent;