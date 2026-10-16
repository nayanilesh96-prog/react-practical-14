import { useState } from 'react'
import './App.css'

const initialFormValues = {
  fullName: '',
  email: '',
  phone: '',
  dateOfBirth: '',
  gender: '',
  course: '',
  address: '',
}

const fields = [
  ['Full name', 'fullName'],
  ['Email address', 'email'],
  ['Phone number', 'phone'],
  ['Date of birth', 'dateOfBirth'],
  ['Gender', 'gender'],
  ['Course', 'course'],
  ['Address', 'address'],
]

function App() {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [submittedStudent, setSubmittedStudent] = useState(null)

  function handleChange(event) {
    const { name, value } = event.target
    setFormValues((currentValues) => ({ ...currentValues, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    setSubmittedStudent({ ...formValues })
  }

  return (
    <main className="page-shell">
      <section className="registration-card" aria-labelledby="page-title">
        <div className="form-intro">
          <p className="eyebrow">STUDENT SERVICES</p>
          <h1 id="page-title">Student registration</h1>
          <p className="intro-copy">
            Complete the form below to get started. All fields are required.
          </p>
        </div>

        <form className="registration-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-field">
              <label htmlFor="fullName">Full name</label>
              <input
                autoComplete="name"
                id="fullName"
                name="fullName"
                onChange={handleChange}
                placeholder="e.g. Jordan Lee"
                required
                type="text"
                value={formValues.fullName}
              />
            </div>

            <div className="form-field">
              <label htmlFor="email">Email address</label>
              <input
                autoComplete="email"
                id="email"
                name="email"
                onChange={handleChange}
                placeholder="you@example.com"
                required
                type="email"
                value={formValues.email}
              />
            </div>

            <div className="form-field">
              <label htmlFor="phone">Phone number</label>
              <input
                autoComplete="tel"
                id="phone"
                name="phone"
                onChange={handleChange}
                placeholder="(555) 123-4567"
                required
                type="tel"
                value={formValues.phone}
              />
            </div>

            <div className="form-field">
              <label htmlFor="dateOfBirth">Date of birth</label>
              <input
                autoComplete="bday"
                id="dateOfBirth"
                name="dateOfBirth"
                onChange={handleChange}
                required
                type="date"
                value={formValues.dateOfBirth}
              />
            </div>

            <div className="form-field">
              <label htmlFor="gender">Gender</label>
              <select
                id="gender"
                name="gender"
                onChange={handleChange}
                required
                value={formValues.gender}
              >
                <option disabled value="">
                  Select gender
                </option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Non-binary">Non-binary</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="course">Course</label>
              <select
                id="course"
                name="course"
                onChange={handleChange}
                required
                value={formValues.course}
              >
                <option disabled value="">
                  Select a course
                </option>
                <option value="Computer Science">Computer Science</option>
                <option value="Business Administration">
                  Business Administration
                </option>
                <option value="Design">Design</option>
                <option value="Engineering">Engineering</option>
                <option value="Psychology">Psychology</option>
              </select>
            </div>

            <div className="form-field form-field-full">
              <label htmlFor="address">Home address</label>
              <textarea
                autoComplete="street-address"
                id="address"
                name="address"
                onChange={handleChange}
                placeholder="Street, city, and postal code"
                required
                rows="3"
                value={formValues.address}
              />
            </div>
          </div>

          <button className="submit-button" type="submit">
            Submit registration
            <span aria-hidden="true">→</span>
          </button>
        </form>

        {submittedStudent && (
          <section
            aria-labelledby="confirmation-title"
            aria-live="polite"
            className="confirmation"
          >
            <div className="confirmation-heading">
              <span aria-hidden="true" className="confirmation-check">
                ✓
              </span>
              <div>
                <p className="eyebrow">REGISTRATION RECEIVED</p>
                <h2 id="confirmation-title">You’re all set, {submittedStudent.fullName}.</h2>
              </div>
            </div>
            <dl className="submission-details">
              {fields.map(([label, name]) => (
                <div className="detail-row" key={name}>
                  <dt>{label}</dt>
                  <dd>{submittedStudent[name]}</dd>
                </div>
              ))}
            </dl>
          </section>
        )}
      </section>
      <p className="page-footer">Your information is used only for enrollment.</p>
    </main>
  )
}

export default App
