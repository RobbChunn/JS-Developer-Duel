import { useState } from "react";
import { duelUsers } from "../../services/userService";
import styled from "styled-components";

const Winner = styled.p`
text-align: center;
font-family: 'ABeeZee', sans-serif;
font-size: 25px; 

`

const CheckOutMyForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  margin: auto;
  gap: 1rem;
`;

const ProfileCard = styled.div`
  text-align: center;
  border: 2px solid black;
  margin:
`;

const MrImage = styled.img`
  position: relative;
  left: -400px;
  top: -170px;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 150px;
  margin-bottom: -50px;
`;

const Duel = () => {
  const [githubData, setGithubData] = useState([]);
  const [username, setUsername] = useState("");
  const [username2, setUsername2] = useState("");
  const [winner, setWinner] = useState("");

  const getTheDataFromGithub = (e) => {
    e.preventDefault();
    duelUsers(username, username2).then((data) => {
      setGithubData(data);

      if(data[0].following > data[1].following){
          setWinner(data[0].name)
        
      }else {
          setWinner(data[1].name)
      }
    });
  };

  const handleChange = (e) => {
    let currentName = e.target.value;
    console.log(currentName);
    setUsername(currentName);
  };

  const handleChange2 = (e) => {
    let currentName = e.target.value;
    console.log(currentName);
    setUsername2(currentName);
  };

  return (
    <>
      <CheckOutMyForm className="" onSubmit={getTheDataFromGithub}>
        <label>Username Goes Here</label>
        <input onChange={handleChange} />
        <input onChange={handleChange2} />
        <button type="submit">Submit</button>
      </CheckOutMyForm>
      {username === "" && username2 === "" && (
        <div>You need to enter a name!</div>
      )}
      {githubData.length !== 0 ? (
        <>
          <ProfileCard>
            <ul>
              <li>Name: {githubData[0].name}</li>
              <li>Location: {githubData[0].location}</li>
              <li>Bio: {githubData[0].bio}</li>
              <li>Favorite Language:{githubData[0]["favorite-language"]}</li>
              <li>Followers: {githubData[0].followers}</li>
              <li>Following: {githubData[0].following}</li>
              <li>Titles: {githubData[0].titles}</li>
              <li>Public Repos: {githubData[0]["public-repos"]}</li>
              <MrImage src={githubData[0]["avatar-url"]} alt="pic of user" />
            </ul>
          </ProfileCard>
          {
              winner !== "" && <Winner>{winner} IS THE WINNER!</Winner> 
          }
          <ProfileCard>
            <ul>
              <li>Name: {githubData[1].name}</li>
              <li>Location: {githubData[1].location}</li>
              <li>Bio: {githubData[1].bio}</li>
              <li>Favorite Language:{githubData[1]["favorite-language"]}</li>
              <li>Followers: {githubData[1].followers}</li>
              <li>Following: {githubData[1].following}</li>
              <li>Titles: {githubData[1].titles}</li>
              <li>Public Repos: {githubData[1]["public-repos"]}</li>
              <MrImage src={githubData[1]["avatar-url"]} alt="pic of user" />
            </ul>
          </ProfileCard>
        </>
      ) : (
        <div>No data yet</div>
      )}
    </>
  );
};

export default Duel;
