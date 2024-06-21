import react, {useState} from "react";
import Grid from "@mui/material/Grid";
import "../styles/staffpersonalrecorddetailsform.css";

export function StaffpersonalRecordDetails() {
    const [values, setValues] = useState({
        surname: "",
        otherNames: "",
        address: "",
        position:""
    });
    const handleInputChange = (event) => {
        event.preventDefault();

        const { name, value } = event.target;
        setValues((values) => ({
            ...values,
            [name]: value
        }));
    };
    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (values.surname && values.otherNames && values.address && values.position) {
            setValid(true);
        }
        setSubmitted(true);
    };
          return (
              <>

                  <Grid container spacing={6}
                        justifyContent="center"
                        alignItems="center"
                        >
                          
                      <form className="personalDetails-form" onSubmit={handleSubmit}>
                          <div className="wrapper">
                            <h4> Staff Personal Record Details</h4>
                            <br/>
                            <br/>

                              <div>
                                  {!valid && (
                                      <>
                                          <label className="form__label" htmlFor="given-name">Surname </label>
                                          <input
                                              label="Surname"
                                              className="form-field"
                                              type="text"
                                              placeholder="Surname"
                                              name="surname"
                                              value={values.surname}
                                              onChange={handleInputChange}
                                          />
                                      </>
                                  )}
                              </div>
                              <div>
                                  {!valid && (
                                      <>
                                          <label className="form__label"
                                                 htmlFor="othernames">Other Names </label>
                                          <input
                                              label="otherName"
                                              className="form-field"
                                              type="text"
                                              placeholder="otherNames"
                                              name="otherName"
                                              value={values.otherNames}
                                              onChange={handleInputChange}
                                          />
                                      </>
                                  )}
                              </div>
                              <div className="singleField">
                                  {!valid && (
                                      <>
                                          <label className="form__label"
                                                 htmlFor="othernames">Address </label>
                                          <input
                                              label="address"
                                              className="form-field"
                                              type="text"
                                              placeholder="address"
                                              name="address"
                                              value={values.address}
                                              onChange={handleInputChange}
                                          />
                                      </>
                                  )}
                              </div>
                              <br/>
                              <div>
                                  {!valid && (
                                      <>
                                          <label className="form__label"
                                                 htmlFor="position">Position </label>
                                          <input
                                              label="Position"
                                              className="form-field"
                                              type="text"
                                              placeholder="position"
                                              name="position"
                                              value={values.position}
                                              onChange={handleInputChange}
                                          />
                                      </>
                                  )}
                              </div>
                              <br/>
                              <h5>Type of Employment</h5>
                              <br />
                              <div id="type-of-employment">
                              
                                  <label>
                                      <input
                                          name="qual"
                                          type="checkbox"
                                          value="Casual"
                                          onChange={handleInputChange}
                                      />{' '}
                                      Casual
                                  </label>
                                  <br/>
                                  <label>
                                      <input
                                          name="qual"
                                          type="checkbox"
                                          onChange={handleInputChange}
                                      />{' '}
                                      Part-time
                                  </label>
                                  <br/>

                              </div>
                              <br/>
                              <input
                                  label="Position"
                                  className="form-field"
                                  type="text"
                                  placeholder="permanent hours"
                                  name="position"
                                  onChange={handleInputChange}
                              />
                              <br />
                              <div className="date of birth">
                                  <label htmlFor="date">Date of Birth</label>
                                  <input type="date" name="date" id="date"></input>
                              </div>
                              <br />
                              <div>
                                  {!valid && (
                                      <>
                                          <label className="form__label" htmlFor="given-name">Emergency Contact Name </label>
                                          <input
                                              label="emergency"
                                              className="form-field"
                                              type="text"
                                              placeholder="Emergency contact anme"
                                              name="semergency contact name"  
                                              onChange={handleInputChange}
                                          />
                                      </>
                                  )}
                              </div>
                              <div>
                                  {!valid && (
                                      <>
                                          <label className="form__label"
                                                 htmlFor="othernames">Relationship </label>
                                          <input
                                              label="relationship["
                                              className="form-field"
                                              type="text"
                                              placeholder="otherNames"
                                              name="otherName"
                                              value={values.otherNames}
                                              onChange={handleInputChange}
                                          />
                                      </>
                                  )}
                              </div>
                              <div>
                                  {!valid && (
                                      <>
                                          <label className="form__label" htmlFor="given-name">Surname </label>
                                          <input
                                              label="Surname"
                                              className="form-field"
                                              type="text"
                                              placeholder="Surname"
                                              name="surname"
                                              value={values.surname}
                                              onChange={handleInputChange}
                                          />
                                      </>
                                  )}
                              </div>
                              <div>
                                  {!valid && (
                                      <>
                                          <label className="form__label"
                                                 htmlFor="othernames">Other Names </label>
                                          <input
                                              label="otherName"
                                              className="form-field"
                                              type="text"
                                              placeholder="otherNames"
                                              name="otherName"
                                              value={values.otherNames}
                                              onChange={handleInputChange}
                                          />
                                      </>
                                  )}
                              </div>

                          </div>
                      </form>
                  </Grid>

              </>
          );
}