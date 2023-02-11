import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Card from './Card';
export interface Respons {
  username: string
  email: string
  password: string
  _id: object;
}
function Map() {
  const  db = useQuery(['data'], async () => {
    const response = await axios.get('http://localhost:5500');
    return response.data.result;
  });


  if (db.isLoading) return <p>Loading...</p>;
  if (db.error) return <>Error: {db.error}</>;

  return (
    <div>
      <div className="main-container">
      {db.data.map((el : Respons , key : number) => <i key={key}><Card el={el} /></i>)}
        </div>
    </div>
  );
}

export default Map;
