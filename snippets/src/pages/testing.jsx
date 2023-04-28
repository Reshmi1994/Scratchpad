import * as React from "react";
function Testing() {
  return (
    <div>
      <div className="abc"></div>


      <form>
        <div>
          <label className="first">Applicant name</label>
          <input type="text" />
        </div>
        <div>
          <label>Photo : </label>
        </div>
        <div class="left">
          <label className="left">Gender :</label>
          <input type="radio" id="Gender" name="Gender" value="Male" />
          <label className="left" for="Gender">
            Male
          </label>
          <label id="cd"></label>
          <input
            class="left"
            type="radio"
            id="Gender"
            name="Gender"
            value="Female"
          />
          <label class="left" for="Gender">
            Female
          </label>
          <label id="cd"></label>
          <input
            class="left"
            type="radio"
            id="Gender"
            name="Gender"
            value="Other"
          />
          <label class="left" for="Gender">
            {" "}
            Other
          </label>
        </div>
      </form>
    </div>
  );
}
export default Testing;
