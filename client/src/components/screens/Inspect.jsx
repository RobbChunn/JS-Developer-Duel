import { useState } from 'react'
import { inspectUser } from '../../services/userService'
import styled from 'styled-components'

const CheckOutMyForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 200px;
    margin: auto;
    gap: 1rem;
`

const ProfileCard = styled.div`
    text-align: center;
    border: 2px solid black;
`

const MrImage = styled.img`
    position: relative;
    left: -400px;
    top: -170px;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px;
    width: 150px;
    margin-bottom: -50px;
`

const Inspect = () => {

    const [githubData, setGithubData] = useState ([])
    const [username, setUsername] = useState("")

    const getTheDataFromGithub = (e) => {
        e.preventDefault()
        inspectUser(username).then(data => setGithubData(data))
    }

    const handleChange = (e) => {
        let currentName = e.target.value
        console.log(currentName)
        setUsername(currentName)
    }

    return (
        <>
        <CheckOutMyForm className="" onSubmit={getTheDataFromGithub}>
            <label>Username Goes Here</label>
            <input onChange={handleChange} />
            <button type="submit">Submit</button>
        </CheckOutMyForm>

        <ProfileCard>
            <ul>
                <li>Name: {githubData.name}</li>
                <li>Location: {githubData.location}</li>
                <li>Bio: {githubData.bio}</li>
                <li>Favorite Language:{githubData["favorite-language"]}</li>
                <li>Followers: {githubData.followers}</li>
                <li>Following: {githubData.following}</li>
                <li>Titles: {githubData.titles}</li>
                <li>Public Repos: {githubData["public-repos"]}</li>
                <MrImage src={githubData["avatar-url"]} />
            </ul>
        </ProfileCard>
        {username === "" && <div>You need to enter a name!</div>}
        </>
    )
}
export default Inspect