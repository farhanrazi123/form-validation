import React from 'react'
import  {Validation} from './Validation';

const Home = () => {
    const [abc, setAbc] = React.useState()
    const [errors, setError] = React.useState({})
    const [formData, setFormData] = React.useState(
        {
            firstName: "", 
            lastName: "", 
            email: "", 
            password: "", 
            confirmPassword: "",
            gender: "",
            favGame: "",
            city: true
        }
    )

//    console.log(formData)

    function handleChange(e) {
        console.log(e.target.value)
        const {name, value, type, checked,} = e.target
        
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name] : type === "checkbox" ? checked : value
            }
        
        })
    }

    function handleSubmit(event) {
        // console.log(event)
         event.preventDefault()
        // if(formData.password === formData.confirmPassword) {
        //     console.log("Successfully signed up")
        // } else {
        //     console.log("Passwords do not match")
        // }
        setError(Validation(formData))
        setAbc(formData)

    }

    function submitData () {
            console.log("s")
    }


console.log(abc)
    return (
        <form onSubmit={handleSubmit}>
            <br></br>
            <br></br>
            <input
                type="text"
                placeholder="First Name"
                name="firstName"
                onChange={handleChange}
                value = {formData.firstName}
            />
           
          {errors.firstName && <p>{errors.firstName}</p>}
            <br></br>
            <br></br>
            <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                onChange={handleChange}
                value = {formData.lastName}
            />
            {errors.lastName && <p>{errors.lastName}</p>}
            <br></br>
            <br></br>
            <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value = {formData.email}
            />
            {errors.email && <p>{errors.email}</p>}
            <br></br>
            <br></br>
            <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value = {formData.password}
                />
                {errors.password && <p>{errors.password}</p>}
            <br></br>
            <br></br>
            <input
                type="password"
                placeholder="Confirm-password"
                name="confirmPassword"
                onChange={handleChange}
                value = {formData.confirmPassword}
            />
            {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
            <br></br>
            <br></br>
            <label htmlFor="gender">Gender</label>
            <br></br>
            <br></br>
            <input
                type="radio"
                name="gender"
                onChange={handleChange}
                value = {formData.id}
            />
            <label htmlFor="Male">Male</label>
            <input
                type="radio"
                name="gender"
                id='gender'
                onChange={handleChange}
                value = {formData.id}
                
            />
            <label htmlFor="Female">Female</label>
            <br></br>
            <br></br>

            <label htmlFor="favColor">What is your favorite Game?</label>
            <br></br>
            <br></br>
            <select 
                name="favGame"
                onChange={handleChange}
                value = {formData.favGame}
            >
                <option value="Choose">--Choose--</option>
                <option value="Cricket">Cricket</option>
                <option value="Football">Football</option>
                <option value="Baseball">Baseball</option>
                <option value="Badminton">Badminton</option>
                <option value="Tennis">Tennis</option>
                <option value="TT">TT</option>
                <option value="Kabaddi">Kabaddi</option>
            </select>
            <br />
            <br />
            <label htmlFor="city">Which City you want to visit!!</label>
            <br />
            <br />
            <input 
                type="checkbox"  
                name="city"
                id='city1'
                onChange={handleChange}
                checked = {formData.id}
                value="Delhi"
            />
            <label htmlFor="city">Delhi</label>
            <input 
                type="checkbox"  
                name="city"
                id='city2'
                onChange={handleChange}
                checked = {formData.id }
               
            />
            
            <label htmlFor="city">Hyderabad</label>
            <br />
            <br />
            <input 
                type="checkbox"  
                name="city"
                id='city3'
                onClick={handleChange}
                checked = {formData.id }
               
            />
            <label htmlFor="city">Kolkata</label>
            <input 
                type="checkbox"  
                name="city"
                id='city4'
                onChange={handleChange}
                checked = {formData.id }
            />
            <label htmlFor="city">Mumbai</label>
            <br />
            <br />
            <button onClick={submitData}> Submit </button>
        </form>
    )
}

export default Home