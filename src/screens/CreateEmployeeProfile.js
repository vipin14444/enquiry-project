import React, { useState } from 'react'
import HeaderMain from '../components/HeaderMain'
import './CreateEmployeeProfile.scss'

const CreateEmployeeProfile = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [employeeCode, setEmployeeCode] = useState('')
    const [accountCode, setAccountCode] = useState('')
    const [department, setDepartment] = useState('')
    const [designation, setDesignation] = useState('')
    const [managerName, setManagerName] = useState('')
    const [managerEmail, setManagerEmail] = useState('')
    const [accountEmail, setAccountEmail] = useState('')
    const [hrEmail, setHrEmail] = useState('')

    return (
        <div className='create-employee-profile-container'>
            <HeaderMain hideNav={true} />

            <div className="content">
                <div className="title">Create Employee Profile <span className='info'>All fields are required</span></div>

                <form action="">
                    <div className="row-1">
                        <div className="form-field">
                            <label htmlFor="firstName">First Name</label>
                            <input value={firstName} id='firstName' name='firstName' onChange={e => setFirstName(e.target.value)} type="text" />
                        </div>
                        <div className="form-field">
                            <label htmlFor="firstName">Last Name</label>
                            <input value={lastName} id='firstName' name='firstName' onChange={e => setLastName(e.target.value)} type="text" />
                        </div>
                    </div>
                    <div className="row-2">
                        <div className="form-field">
                            <label htmlFor="firstName">Employee Code</label>
                            <input value={employeeCode} id='firstName' name='firstName' onChange={e => setEmployeeCode(e.target.value)} type="text" />
                        </div>
                        <div className="form-field">
                            <label htmlFor="firstName">Account Code</label>
                            <input value={accountCode} id='firstName' name='firstName' onChange={e => setAccountCode(e.target.value)} type="text" />
                        </div>
                        <div className="form-field">
                            <label htmlFor="firstName">Department</label>
                            <input value={department} id='firstName' name='firstName' onChange={e => setDepartment(e.target.value)} type="text" />
                        </div>
                        <div className="form-field">
                            <label htmlFor="firstName">Designation</label>
                            <input value={designation} id='firstName' name='firstName' onChange={e => setDesignation(e.target.value)} type="text" />
                        </div>
                    </div>
                    <div className="row-2">
                        <div className="form-field">
                            <label htmlFor="firstName">Manager's Name</label>
                            <input value={managerName} id='firstName' name='firstName' onChange={e => setManagerName(e.target.value)} type="text" />
                        </div>
                        <div className="form-field">
                            <label htmlFor="firstName">Manager's Email Address</label>
                            <input value={managerEmail} id='firstName' name='firstName' onChange={e => setManagerEmail(e.target.value)} type="text" />
                        </div>
                    </div>
                    <div className="row-4">
                        <div className="form-field">
                            <label htmlFor="firstName">Accounts Email Address</label>
                            <input value={accountEmail} id='firstName' name='firstName' onChange={e => setAccountEmail(e.target.value)} type="text" />
                        </div>
                    </div>
                    <div className="row-5">
                        <div className="form-field">
                            <label htmlFor="firstName">HR Email Address</label>
                            <input value={hrEmail} id='firstName' name='firstName' onChange={e => setHrEmail(e.target.value)} type="text" />
                        </div>
                    </div>
                </form>

                <div className="actions">
                    <button>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default CreateEmployeeProfile
