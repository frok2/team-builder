
function Form() {


  return (
    <div className="Form">
              <form>
            <label>First Name:
                <input
                    type="text"
                    id="fnameInput"
                    placeholder="First Name"
                    maxLength="15"
                    name="fname"
                />
            </label>
            <br />
            <label>Last Name:
                <input
                    type="text"
                    id="lnameInput"
                    placeholder="Last Name"
                    maxLength="15"
                    name="lname"
                />
            </label>
            <br />
            <label>Email: 
                <input
                    type="text"
                    id="emailInput"
                    placeholder="Email"
                    maxLength="15"
                    name="email"
                />
            </label>
            <br />
            <label>Team Position:
                <select name="position">
                    <option id="1">Front-End Developer</option>
                    <option id="2">Back-End Developer</option>
                    <option id="3">Full Stack Developer</option>
                    <option id="4">Dev Ops</option>
                    <option id="5">Data Analyst</option>
                </select>
            </label>
            <br />
            <input type="submit" />
        </form>
    </div>
  );
}

export default Form;
