

const URL = "https://randomuser.me/api/";
const getUser = async ()=>{
        const response = await fetch(URL)
        const data = await response.json();
        const person = data.results[0]
        console.log(person);
        const { phone, email } = person;
        const {large: image} = person.picture;
        const { first, last } = person.name;
        const {password} = person.login;
        const {age} = person.dob;
        const { street: {name, number} } = person.location
        return {
            image, 
            phone,
            email,
            name: `${first} ${last}`,
            password,
            age,
            street: `${name} ${number}`,
        }
    }

    export default getUser;