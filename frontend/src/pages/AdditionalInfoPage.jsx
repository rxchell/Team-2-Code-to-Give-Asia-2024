import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "../utils/FormContext";
import "./form.css";
import axios from "axios";

export default function AdditionalInfoPage() {
  const navigate = useNavigate();
  const { formData, updateFormData } = useFormContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Combine all data and submit
    var bodyFormData = new FormData();
    for (var key in formData) {
      // console.log(key);
      bodyFormData.append(key, formData[key]);
    }
    console.log(bodyFormData);

    try {
      await axios({
        method: "post",
        url: "/api/donations",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Donation created succesfully");
      navigate("/donor/home");
    } catch (err) {
      console.log(err.response.data);
      alert(err.response.data.error);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center w-full">
        <div className="flex items-center space-x-2 mt-4">
          <p className="text-2xl font-bold">
            {" "}
            Donate &gt;&gt; Food Information &gt;&gt; Additional Information
          </p>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-circle btn-ghost btn-xs text-info"
            >
              <svg
                tabIndex={0}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-4 w-4 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <div
              tabIndex={0}
              className="card compact dropdown-content bg-base-100 rounded-box z-[1] w-64 shadow"
            >
              <div tabIndex={0} className="card-body">
                <h2 className="card-title">Donation Guidelines</h2>
                <p>
                  1. The food must not be unsafe and unsuitable at the time it
                  was donated
                  <br />
                  <br />
                  2. The food donor must inform the recipient of any particular
                  handling requirements to ensure the food remains safe to
                  consume
                  <br />
                  <br />
                  3. The food donor must inform the recipient of any time
                  limitwithin which the food remains safe and unsuitable
                  <br />
                  <br />
                  4. The donor must take all reasonable measures to comply with
                  food safety and hygiene requirements up to the point of
                  donation
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <form
            className="bg-white form-content space-y-4"
            onSubmit={handleSubmit}
          >
            <h2 className="text-2xl font-bold mb-8">Additional Information</h2>
            <div className="justify-between">
              <label>Upload photo of meal</label>
              <div>
                <input
                  type="file"
                  required="required"
                  accept="image/*"
                  onChange={(e) =>
                    updateFormData("imageURL", e.target.files[0])
                  }
                />
              </div>
            </div>

            <div className="justify-between">
              <label>
                Collect By
                <input
                  type="datetime-local"
                  required="required"
                  value={formData.collectBy}
                  onChange={(e) => updateFormData("collectBy", e.target.value)}
                />
              </label>
            </div>

            <div className="justify-between">
              <label>Reheat Instructions</label>
              <input
                type="text"
                value={formData.storeReheatInstructions}
                onChange={(e) =>
                  updateFormData("storeReheatInstructions", e.target.value)
                }
              />
            </div>

            <div className="justify-between">
              <label>Additional Notes</label>
              <input
                type="text"
                placeholder="Please enter any other notes here"
                value={formData.notes}
                onChange={(e) =>
                  updateFormData("additionalNotes", e.target.value)
                }
              />
            </div>

            <div className="form-control">
              <label className="cursor-pointer label">
                <input
                  type="checkbox"
                  className="checkbox checkbox-warning"
                  required="required"
                />
                <span className="label-text">
                  By clicking here, I am aware and confirm to have complied with
                  the food safety and requirements.
                </span>
              </label>
            </div>

            <div className="flex justify-end space-x-6">
              <button
                className="btn"
                type="button"
                onClick={() => navigate("/donate")}
              >
                Back
              </button>
              <button className="btn btn-accent" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
