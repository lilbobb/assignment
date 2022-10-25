import { useEffect, useState } from "react";
import axios from "axios";
import "./Random.css";

const RandomUsers = () => {
  const [data, setData] = useState([]);
  const [loadiing, setLoading] = useState(false);
  const [error, setError] = useState("");
  // const [page, setpage] = useState(1);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        let res = await axios.get(
          `https://randomuser.me/api/?results=50`
        );
        console.log(res.data.results);
        setData(res.data.results);
        setLoading(false);
      } catch (error) {
        setError(error);
      }

    };

    fetchUsers();

    
  }, []);




  console.log(error, data);
  return (
    <div className="container">
      <div>{loadiing ? <div>Loading...</div> : null}</div>
      <div>
        {data &&
          data.map(({ picture, name, gender, dob, phone, email, location }) => (
            <div className="container-grand-child">
              <div className="container-img">
                <img src={picture.medium} alt="" />
              </div>
              Name: {}
              {name.first} - {name.last} <div>Age: {dob.age} </div>
              <div>Gender: {gender} </div>
              <div>Phone: {phone} </div>
              <div>Email: {email} </div>
              <div>Location: {location.state} </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RandomUsers;
