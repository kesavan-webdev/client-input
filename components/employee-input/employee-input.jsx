"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import Select from "react-select";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebase/firebase.config";

const EmployeeInput = () => {
  const [dataInfo, setDataInfo] = useState("");
  const [jobtitle, setJobtitle] = useState("");
  const [gender, setGender] = useState("");
  const [ethnicity, setEthnicity] = useState("");
  const [employementType, setEmployementType] = useState("");
  const [hrmanager, setHRmanager] = useState("");
  const [locationRight, setLocationRight] = useState("");
  const [locationleft, setLocationleft] = useState("");
  const [category, setCategory] = useState("");
  const [workAuthorization, setWorkAuthorization] = useState("");
  const [holidaycalender, setHolidayCalender] = useState("");
  const [weekendprofile, setWeekendprofile] = useState("");
  const [veteransatus, setVeteransatus] = useState("");
  const [maritalstatus, setMaritalstatus] = useState("");
  const [employeestatus, setEmployeestatus] = useState("");

  // jobtitle //
  const handleJobtile = (selectedJobtitle) => {
    setJobtitle(selectedJobtitle);
  };

  //gender//
  const handleGender = (selectedGender) => {
    setGender(selectedGender);
  };
  //Ethinicity//
  const handleEthnicity = (selectedEthinicity) => {
    setEthnicity(selectedEthinicity);
  };

  //Employee type //
  const handleEmployementType = (selectedEmployementType) => {
    setEmployementType(selectedEmployementType);
  };

  //hrmanger//
  const handleHRmanager = (selectedHRmanager) => {
    setHRmanager(selectedHRmanager);
  };

  //location
  const handleLocationRight = (selectedLocation) => {
    setLocationRight(selectedLocation);
  };

  //locationleft
  const handleLocationleft = (selectedLocation) => {
    setLocationleft(selectedLocation);
  };

  //category
  const handleCategory = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  //workAuthorization
  const handleWorkAuthorization = (selectedWorkAuthorization) => {
    setWorkAuthorization(selectedWorkAuthorization);
  };

  //holidaycalender//
  const handleHolidayCalender = (selectedHolidayCalender) => {
    setHolidayCalender(selectedHolidayCalender);
  };

  //weekendprofile//
  const handleWeekendprofile = (selectedWeekendprofile) => {
    setWeekendprofile(selectedWeekendprofile);
  };
  //veteranstatus//
  const handleVeteranstatus = (selectedVeteranstatus) => {
    setVeteransatus(selectedVeteranstatus);
  };

  //maritalstatus//
  const handleMaritalstatus = (selectedMaritalstatus) => {
    setMaritalstatus(selectedMaritalstatus);
  };
  //employeestatus//
  const handleEmployeestatus = (selectedEmployeestatus) => {
    setEmployeestatus(selectedEmployeestatus);
  };

  const Jobtitle = [
    { value: "Front-End", label: "Front-End" },
    { value: "Back-End", label: "Back-End" },
    { value: "Testing", label: "Testing" },
  ];
  const Gender = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ];
  const Ethnicity = [
    { value: "American Indian", label: "American Indian" },
    { value: " African American", label: " African American" },
    { value: "Alaska Native", label: "Alaska Native" },
    { value: " Pacific Islander", label: " Pacific Islander" },
  ];

  const EmploymentType = [
    { value: "Full-Time Employment", label: "Full-Time Employment" },
    { value: " Part-Time Employment", label: " Part-Time Employment" },
    { value: "Casual Employment", label: "Casual Employment" },
    { value: " Traineeship", label: " Traineeship" },
  ];

  const HRManger = [
    { value: "Recruit candidates", label: "Recruit candidates" },
    { value: "Hire the right employees", label: "Hire the right employees" },
  ];
  const Right = [
    { value: "United States", label: "United States" },
    { value: "Germany", label: "Germany" },
    { value: "Italy", label: "Italy" },
    { value: "France", label: "France" },
  ];

  const Left = [
    { value: "California", label: "California" },
    { value: "Denmark", label: "Denmark" },
    { value: " Israel", label: " Israel" },
    { value: "French Polynesia", label: "French Polynesia" },
  ];

  const Category = [
    { value: "Category-1", label: "Category-1" },
    { value: "Category-2", label: "Category-2" },
    { value: "Category-3", label: "Category-3" },
  ];

  const WorkAuthorization = [
    { value: "Authorization-1", label: "Authorization-1" },
    { value: "Authorization-2", label: "Authorization-2" },
    { value: "Authorization-3", label: "Authorization-3" },
  ];

  const Holidaycalender = [
    { value: "Holidaycalender-1", label: "Holidaycalender-1" },
    { value: "Holidaycalender-2", label: "Holidaycalender-2" },
    { value: "Holidaycalender-3", label: "Holidaycalender-3" },
  ];

  const Weekendprofile = [
    { value: "Default", label: "Default" },
    { value: "Common", label: "Common" },
    { value: "Error", label: "Error" },
  ];

  const Veteran = [
    { value: "Yes", label: "Yes" },
    { value: "No", label: "No" },
  ];

  const Marital = [
    { value: "Married", label: "Married" },
    { value: "Unmarried", label: "Unmarried" },
  ];

  const Employstatus = [
    { value: "Active", label: "Active" },
    { value: "Unactive", label: "Unactive" },
    { value: "on-site", label: "on-site" },
    { value: "Bench", label: "Bench" },
  ];

  // select element custom theme //
  const theme = (theme) => ({
    ...theme,
    borderRadius: 0,
    colors: {
      ...theme.colors,
      primary25: "lightgray",
      primary: "gray",
    },
  });

  //select element custom styles //

  const customStyles = {
    control: (base) => ({
      ...base,
      height: 30,
      minHeight: 30,
      borderRadius: 3,
    }),
  };
  const handleOnSubmit = async (value) => {
    const {
      firstname,
      middlename,
      lastname,
      jobtitle,
      username,
      shortname,
      email,
      alternateemail,
      dateofbirth,
      securitynumber,
      contactnumber,
      gender,
      ethnicity,
      employmentType,
      employmentid,
      hrmanager,
      dateofjoining,
      locationRight,
      locationleft,
      category,
      workAuthorization,
      classifaction,
      payrollid,
      holidaycalender,
      workerid,
      weekendprofile,
      veteransatus,
      employeetype,
      maritalsatus,
      employeestatus,
    } = value;
    try {
      const docRef = await addDoc(collection(db, "Employees"), {
        ...value,
        // contactnumber: Number(contactnumber),
        // contactnumber: parseInt(contactnumber),
      });
    } catch (e) {
      console.log("Adding Document:", e);
    }
  };
  const formik = useFormik({
    initialValues: {
      firstname: "",
      middlename: "",
      lastname: "",
      jobtitle: "",
      username: "",
      shortname: "",
      email: "",
      alternateemail: "",
      dateofbirth: "",
      securitynumber: "",
      contactnumber: "",
      gender: "",
      ethnicity: "",
      employmentType: "",
      employmentid: "",
      hrmanager: "",
      dateofjoining: "",
      locationRight: "",
      locationleft: "",
      category: "",
      workAuthorization: "",
      classifaction: "",
      payrollid: "",
      holidaycalender: "",
      workerid: "",
      weekendprofile: "",
      veteransatus: "",
      employeetype: "",
      maritalsatus: "",
      employeestatus: "",
    },

    onSubmit: handleOnSubmit,
    // onSubmit: (value) => {
    //   setDataInfo((prev) => [...prev, value]);
    //   localStorage.setItem("EmployeInp", JSON.stringify(dataInfo));
    // },

    //   Form //

    validationSchema: Yup.object().shape({
      firstname: Yup.string()
        .max(12, "firstname less than 12")
        .min(3, " firstname More than 3")
        .required(),
      middlename: Yup.string()
        .max(12, "middlename less than 12")
        .min(3, " middlename More than 3")
        .required(),
      lastname: Yup.string()
        .max(6, "lastname less than 12")
        .min(3, "lastname More than 3")
        .required(),
      jobtitle: Yup.object().required("select the option"),
      username: Yup.string()
        .max(12, "username less than 12")
        .min(3, " username More than 3")
        .required(),
      shortname: Yup.string()
        .max(9, "shortname less than 9")
        .min(3, " shortname More than 3")
        .required(),
      email: Yup.string().email("Invalid email address").required(),
      alternateemail: Yup.string()
        .email("Invalid AlternateEmail address")
        .required(),
      dateofbirth: Yup.string().required("select the DOB"),

      securitynumber: Yup.string()
        .matches(/(\+91\ )[6-9]{1}[0-9 ]{4}[0-9 ]{4}[0-9]{3}/, {
          message: "Invalid Indian number",
          excludeEmptyString: false,
        })
        .required(),

      contactnumber: Yup.string()
        .matches(/(\+91\ )[6-9]{1}[0-9 ]{4}[0-9 ]{4}[0-9]{3}/, {
          message: "Invalid Indian number",
          excludeEmptyString: false,
        })
        .required(),

      gender: Yup.object().required("Select the gender"),

      ethnicity: Yup.object().required("Select the option"),

      employmentType: Yup.object().required("Select the Type"),

      employmentid: Yup.string().max(6, "Employmentid less than 6").required(),

      hrmanager: Yup.object().required("Select the option"),

      dateofjoining: Yup.string().required("select the Joining"),

      location: Yup.object().required("select the location"),

      category: Yup.object().required("select the category"),

      workAuthorization: Yup.object().required("select the Authorization"),

      payrollid: Yup.string().max(5, "Invalid Payroll ID").required(),

      holidaycalender: Yup.object().required("select the calender"),

      workerid: Yup.string().max(5, "Invalid worker ID").required(),

      weekendprofile: Yup.array().required("select the option"),
      veteransatus: Yup.object().required("select the status"),
      maritalsatus: Yup.object().required("select the status"),
      employeestatus: Yup.array().required("select the option"),
    }),
  });
  // console.log(formik.values);

  const { values, handleBlur, handleSubmit, handleChange, errors, touched } =
    formik;

  return (
    <>
      {/*InputGroup*/}

      <h1 className="text-red-400 p-3  mx-[2.4rem] font-medium">
        EMPLOYEE DETAILS
      </h1>

      <form onSubmit={formik.handleSubmit}>
        <div className="lg:grid lg:grid-cols-3 lg:gap-4 lg:mx-[6rem] sm:grid-cols-2 sm:grid">
          {/*  First Name */}
          {/* className="w-[9rem]" */}
          <div className="my-[2rem]">
            <label className="input-group">
              <span
                className={`${
                  formik.touched.firstname &&
                  formik.errors.firstname &&
                  "bg-red-400 text-white"
                } w-[9rem] flex  justify-center`}
              >
                First Name
              </span>
              <input
                type="text"
                // className="input input-bordered input-sm w-[13rem]"
                className={`${
                  formik.touched.firstname &&
                  formik.errors.firstname &&
                  "border-red-400"
                } border-2 input input-bordered input-sm w-[13rem] `}
                value={formik.values.firstname}
                onChange={formik.handleChange}
                name="firstname"
                onBlur={formik.handleBlur}
              />
            </label>
            {/* required */}
            <small className="flex justify-center my-1 font-sensrif">
              {formik.touched.firstname && formik.errors.firstname && (
                <p style={{ color: "red" }}>{formik.errors.firstname}</p>
              )}
            </small>
          </div>

          {/* Middle Name */}

          <div className="my-[2rem]">
            <label className="input-group">
              <span
                className={`${
                  formik.touched.middlename &&
                  formik.errors.middlename &&
                  "bg-red-400 text-white"
                } w-[9rem]`}
              >
                Middle Name
              </span>
              <input
                type="text"
                //  className="input input-bordered  input-sm  w-[14rem]"
                className={`${
                  formik.touched.middlename &&
                  formik.errors.middlename &&
                  "border-red-400"
                } border-2 input input-bordered input-sm w-[13rem] `}
                name="middlename"
                value={formik.values.middlename}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </label>
            {/* required */}
            <small className="flex justify-center my-1 font-sensrif">
              {formik.touched.middlename && formik.errors.middlename && (
                <p style={{ color: "red" }}>{formik.errors.middlename}</p>
              )}
            </small>
          </div>

          {/* Last Name */}

          <div className="my-[2rem]">
            <div>
              <label className="input-group">
                <span
                  className={`${
                    formik.touched.lastname &&
                    formik.errors.lastname &&
                    "bg-red-400 text-white"
                  } w-[8rem] flex  justify-center `}
                >
                  Last Name
                </span>
                <input
                  type="text"
                  // className="input input-bordered input-sm  w-[14rem]"
                  className={`${
                    formik.touched.lastname &&
                    formik.errors.lastname &&
                    "border-red-400"
                  } border-2 input input-bordered input-sm w-[14rem] `}
                  name="lastname"
                  value={formik.values.lastname}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </label>
              {/* required */}
              <small className="flex justify-center my-1 font-sensrif">
                {formik.touched.lastname && formik.errors.lastname && (
                  <p style={{ color: "red" }}>{formik.errors.lastname}</p>
                )}
              </small>
            </div>
          </div>

          {/* Job Title */}

          <div className="join flex flex-col">
            <div className="flex">
              <label
                htmlFor="job"
                // className="btn btn-sm join-item "
                className={`${
                  formik.touched.jobtitle &&
                  formik.errors.jobtitle &&
                  "btn-error text-white"
                } btn btn-sm join-item`}
              >
                <span className="w-[7rem]">Job Title</span>
              </label>
              <Select
                id="job"
                theme={theme}
                options={Jobtitle}
                className=" select-bordered w-[13.4rem]  join-item"
                styles={customStyles}
                // name="jobtitle"
                value={(formik.values.jobtitle = jobtitle)}
                // onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                onChange={(selectedOption) => {
                  handleJobtile(selectedOption);
                }}
              />
            </div>
            <div className="mx-[7rem] my-1">
              {/* required */}
              <small className="my-1 font-sensrif ">
                {formik.touched.jobtitle && formik.errors.jobtitle && (
                  <p style={{ color: "red" }}>{formik.errors.jobtitle}</p>
                )}
              </small>
            </div>
          </div>

          {/* User Name */}

          <div>
            <label className="input-group">
              <span
                className={`${
                  formik.touched.username &&
                  formik.errors.username &&
                  "bg-red-400 text-white"
                } w-[9rem] flex  justify-center`}
              >
                User Name
              </span>
              <input
                type="text"
                // className="input input-bordered w-[14rem] input-sm"
                className={`${
                  formik.touched.username &&
                  formik.errors.username &&
                  "border-red-400"
                } border-2 input input-bordered input-sm w-[13rem] `}
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </label>
            {/* required */}
            <small className="flex justify-center my-1 font-sensrif">
              {formik.touched.username && formik.errors.username && (
                <p style={{ color: "red" }}>{formik.errors.username}</p>
              )}
            </small>
          </div>

          {/* Employee Short Name */}

          <div>
            <label className="input-group">
              <span
                className={`${
                  formik.touched.shortname &&
                  formik.errors.shortname &&
                  "bg-red-400 text-white"
                } w-[8rem] `}
              >
                {" "}
                Short Name
              </span>
              <input
                type="text"
                // className="input input-bordered w-[14rem] input-sm"
                className={`${
                  formik.touched.shortname &&
                  formik.errors.shortname &&
                  "border-red-400"
                } border-2 input input-bordered input-sm w-[14rem] `}
                name="shortname"
                value={formik.values.shortname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </label>
            {/* required */}
            <small className="flex justify-center my-1 font-sensrif">
              {formik.touched.shortname && formik.errors.shortname && (
                <p style={{ color: "red" }}>{formik.errors.shortname}</p>
              )}
            </small>
          </div>

          {/* Email Address */}

          <div className="my-[2rem]">
            <label className="input-group">
              <span
                className={`${
                  formik.touched.email &&
                  formik.errors.email &&
                  "bg-red-400 text-white"
                } w-[9rem] flex  justify-center`}
              >
                Email Address
              </span>
              <input
                type="email"
                placeholder="akash@srma.com"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                // className="input input-sm input-bordered w-[13rem]"
                className={`${
                  formik.touched.email &&
                  formik.errors.email &&
                  "border-red-400"
                } border-2 input input-bordered input-sm w-[13rem] `}
              />
            </label>
            {/* required */}
            <small className="flex justify-center my-1 font-sensrif">
              {formik.touched.email && formik.errors.email && (
                <p style={{ color: "red" }}> {formik.errors.email}</p>
              )}
            </small>
          </div>

          {/* Alternate Email Address */}

          <div className="my-[2rem]">
            <label className="input-group">
              <span
                className={`${
                  formik.touched.alternateemail &&
                  formik.errors.alternateemail &&
                  "bg-red-400 text-white"
                } w-[9rem]`}
              >
                AlternateEmail
              </span>
              <input
                type="text"
                placeholder="akash@srma.com"
                //  className="input input-bordered w-[13.5rem] input-sm"
                className={`${
                  formik.touched.alternateemail &&
                  formik.errors.alternateemail &&
                  "border-red-400"
                } border-2 input input-bordered input-sm w-[13.5rem] `}
                name="alternateemail"
                value={formik.values.alternateemail}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </label>
            {/* required */}
            <small className="flex justify-center my-1 font-sensrif">
              {formik.touched.alternateemail &&
                formik.errors.alternateemail && (
                  <p style={{ color: "red" }}>{formik.errors.alternateemail}</p>
                )}
            </small>
          </div>

          {/* Date of Birth */}

          <div className="my-[2rem]">
            <label className="input-group">
              <span
                className={`${
                  formik.touched.dateofbirth &&
                  formik.errors.dateofbirth &&
                  "bg-red-400 text-white"
                } w-[8rem]`}
              >
                DateOfBirth
              </span>
              <input
                type="date"
                id="birthday"
                name="dateofbirth"
                // className="input input-bordered w-[13rem] input-sm "
                className={`${
                  formik.touched.dateofbirth &&
                  formik.errors.dateofbirth &&
                  "border-red-400"
                } border-2 input input-bordered input-sm w-[14rem] `}
                value={formik.values.dateofbirth}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </label>
            {/* required */}
            <small className="flex justify-center my-1 font-sensrif">
              {formik.touched.dateofbirth && formik.errors.dateofbirth && (
                <p style={{ color: "red" }}>{formik.errors.dateofbirth}</p>
              )}
            </small>
          </div>

          {/* Social Security Number */}

          <div>
            <label className="input-group">
              <span
                className={`${
                  formik.touched.securitynumber &&
                  formik.errors.securitynumber &&
                  "bg-red-400 text-white"
                } w-[9rem]`}
              >
                SecurityNumber
              </span>
              <input
                type="text"
                //  className="input input-bordered w-[13rem] input-sm"
                className={`${
                  formik.touched.securitynumber &&
                  formik.errors.securitynumber &&
                  "border-red-400"
                } border-2 input input-bordered input-sm w-[13rem] `}
                name="securitynumber"
                value={formik.values.securitynumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </label>
            {/* required */}
            <small className="flex justify-center my-1 font-sensrif">
              {formik.touched.securitynumber &&
                formik.errors.securitynumber && (
                  <p style={{ color: "red" }}>
                    {" "}
                    {formik.errors.securitynumber}
                  </p>
                )}
            </small>
          </div>

          {/* Contact Number */}

          <div>
            <label className="input-group">
              <span
                className={`${
                  formik.touched.contactnumber &&
                  formik.errors.contactnumber &&
                  "bg-red-400 text-white"
                } `}
              >
                Contact Number
              </span>
              <input
                type="text"
                //  className="input input-bordered w-[13rem] input-sm "
                className={`${
                  formik.touched.contactnumber &&
                  formik.errors.contactnumber &&
                  "border-red-400"
                } border-2 input input-bordered input-sm w-[13rem] `}
                name="contactnumber"
                value={formik.values.contactnumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </label>
            {/* required */}
            <small className="flex justify-center my-1 font-sensrif">
              {formik.touched.contactnumber && formik.errors.contactnumber && (
                <p style={{ color: "red" }}> {formik.errors.contactnumber}</p>
              )}
            </small>
          </div>

          {/* Gender */}

          <div className="join flex flex-col">
            <div className="flex">
              <label
                htmlFor="gender"
                // className="btn btn-sm join-item"
                className={`${
                  formik.touched.gender &&
                  formik.errors.gender &&
                  "bg-red-400 text-white"
                } btn btn-sm join-item`}
              >
                <span className="w-[6.3rem]">Gender</span>
              </label>
              <Select
                id="gender"
                theme={theme}
                options={Gender}
                className=" select-bordered w-[14rem]  join-item"
                styles={customStyles}
                value={(formik.values.gender = gender)}
                name="gender"
                // onChange={formik.handleChange}
                onChange={(selectedOption) => {
                  handleGender(selectedOption);
                }}
                onBlur={formik.handleBlur}
              />
            </div>

            <div>
              {/* required */}
              <small className="flex justify-center my-1 font-sensrif">
                {formik.touched.gender && formik.errors.gender && (
                  <p style={{ color: "red" }}>{formik.errors.gender}</p>
                )}
              </small>
            </div>
          </div>

          {/* Ethnicity */}

          <div className="join my-[2rem] flex flex-col">
            <div className="flex">
              <label
                htmlFor="ethinicity"
                // className="btn btn-sm join-item"
                className={`${
                  formik.touched.ethnicity &&
                  formik.errors.ethnicity &&
                  "bg-red-400 text-white"
                } btn btn-sm join-item`}
              >
                <span className="w-[7rem]">Ethnicity</span>
              </label>
              <Select
                id="ethinicity"
                theme={theme}
                options={Ethnicity}
                isSearchable={true}
                className=" select-bordered w-[13.3rem]  join-item"
                styles={customStyles}
                name="ethnicity"
                value={(formik.values.ethnicity = ethnicity)}
                // onChange={formik.handleChange}
                onChange={(selectedOption) => {
                  handleEthnicity(selectedOption);
                }}
              />
            </div>
            <div>
              {/* required */}
              <small className="flex justify-center font-sensrif">
                {formik.touched.ethnicity && formik.errors.ethnicity && (
                  <p style={{ color: "red" }}>{formik.errors.ethnicity}</p>
                )}
              </small>
            </div>
          </div>

          {/* Employment Type */}

          <div className="join my-[2rem] flex flex-col">
            <div className="flex">
              <label
                htmlFor="employmentType"
                // className="btn btn-sm join-item "
                className={`${
                  formik.touched.employmentType &&
                  formik.errors.employmentType &&
                  "bg-red-400 text-white"
                } btn btn-sm join-item`}
              >
                <span className="w-[rem]">Employment Type</span>
              </label>
              <Select
                id="employmentType"
                theme={theme}
                options={EmploymentType}
                isSearchable={true}
                className=" select-bordered w-[13rem]  join-item"
                styles={customStyles}
                name="employementtype"
                value={(formik.values.employmentType = employementType)}
                // onChange={formik.handleChange}
                onChange={(selectedOption) => {
                  handleEmployementType(selectedOption);
                }}
              />
            </div>
            <div>
              {/* required */}
              <small className="flex justify-center font-sensrif">
                {formik.touched.employmentType &&
                  formik.errors.employmentType && (
                    <p style={{ color: "red" }}>
                      {formik.errors.employmentType}
                    </p>
                  )}
              </small>
            </div>
          </div>

          {/* Employment ID */}

          <div className="my-[2rem]">
            <label className="input-group">
              <span
                className={`${
                  formik.touched.employmentid &&
                  formik.errors.employmentid &&
                  "bg-red-400 text-white"
                } `}
              >
                Employment ID
              </span>
              <input
                type="text"
                //  className="input input-bordered w-[13rem] input-sm "
                className={`${
                  formik.touched.employmentid &&
                  formik.errors.employmentid &&
                  "border-red-400"
                } border-2 input input-bordered input-sm w-[13.4rem] `}
                name="employmentid"
                value={formik.values.employmentid}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </label>
            {/* required */}
            <small className="flex justify-center font-sensrif">
              {formik.touched.employmentid && formik.errors.employmentid && (
                <p style={{ color: "red" }}>{formik.errors.employmentid}</p>
              )}
            </small>
          </div>

          {/* HR Manager */}

          <div className="join my-[1rem] flex flex-col">
            <div className="flex">
              <label
                htmlFor="hrmanager"
                // className="btn btn-sm join-item "
                className={`${
                  formik.touched.hrmanager &&
                  formik.errors.hrmanager &&
                  "bg-red-400 text-white"
                } btn btn-sm join-item`}
              >
                <span className="w-[6.8rem]">HR Manager</span>
              </label>
              <Select
                id="hrmanager"
                theme={theme}
                options={HRManger}
                isSearchable={true}
                className=" select-bordered w-[13.6rem]  join-item"
                styles={customStyles}
                name="hrmanager"
                value={(formik.values.hrmanager = hrmanager)}
                // onChange={formik.handleChange}
                onChange={(selectedOption) => {
                  handleHRmanager(selectedOption);
                }}
              />
            </div>
            <div>
              {/* required */}
              <small className="flex justify-center font-sensrif">
                {formik.touched.hrmanager && formik.errors.hrmanager && (
                  <p style={{ color: "red" }}>{formik.errors.hrmanager}</p>
                )}
              </small>
            </div>
          </div>

          {/* Date of Joining */}

          <div className="my-[1rem]">
            <label className="input-group">
              <span
                className={`${
                  formik.touched.dateofjoining &&
                  formik.errors.dateofjoining &&
                  "bg-red-400 text-white"
                } w-[10rem]`}
              >
                Date Of Joining
              </span>
              <input
                type="date"
                id="joining"
                name="dateofjoining"
                // className="input input-bordered w-[12.5rem] input-sm "
                className={`${
                  formik.touched.dateofjoining &&
                  formik.errors.dateofjoining &&
                  "border-red-400"
                } input input-bordered w-[12.5rem] input-sm `}
                value={formik.values.dateofjoining}
                onChange={formik.handleChange}
              />
            </label>
            {/* required */}
            <small className="flex justify-center font-sensrif">
              {formik.touched.dateofjoining && formik.errors.dateofjoining && (
                <p style={{ color: "red" }}>{formik.errors.dateofjoining}</p>
              )}
            </small>
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-3 lg:gap-4 lg:mx-[6rem] lg:my-[1rem] sm:grid sm:grid-cols-3">
          {/* Location */}

          <div className="join my-[2rem] flex flex-col">
            <div className="flex">
              <label
                htmlFor="location"
                // className="btn btn-sm join-item"
                className={`${
                  formik.touched.location &&
                  formik.errors.location &&
                  "bg-red-400 text-white"
                } btn btn-sm join-item `}
              >
                <span className="w-[7rem]">Location</span>
              </label>
              <Select
                id="locationRight"
                theme={theme}
                options={Right}
                isSearchoable={true}
                className=" select-bordered w-[6rem]  join-item"
                styles={customStyles}
                name="locationRight"
                value={
                  (formik.values.location = locationRight) &&
                  (formik.values.locationRight = locationRight)
                }
                // onChange={formik.handleChange}
                onChange={(selectedOption) => {
                  handleLocationRight(selectedOption);
                }}
              />
              <span>
                <Select
                  id="locationLeft"
                  theme={theme}
                  name="locationLeft"
                  options={Left}
                  isSearchoable={true}
                  className=" select-bordered  w-[7rem] mx-3 join-item"
                  styles={customStyles}
                  value={
                    (formik.values.location = locationleft) &&
                    (formik.values.locationleft = locationleft)
                  }
                  onChange={(selectedOption) => {
                    handleLocationleft(selectedOption);
                  }}
                />
              </span>
            </div>
            <div>
              {/* required */}
              <small className="flex justify-center font-sensrif">
                {formik.touched.location && formik.errors.location && (
                  <p style={{ color: "red" }}>{formik.errors.location}</p>
                )}
              </small>
            </div>
          </div>

          {/* Category */}

          <div className="join my-[2rem] flex flex-col">
            <div className="flex">
              <label
                htmlFor="category"
                // className="btn btn-sm join-item "
                className={`${
                  formik.touched.category &&
                  formik.errors.category &&
                  "bg-red-400 text-white"
                } btn btn-sm join-item`}
              >
                <span className="w-[6.8rem]">Category</span>
              </label>
              <Select
                id="category"
                theme={theme}
                options={Category}
                isSearchable={true}
                className=" select-bordered w-[14.5rem]  join-item"
                styles={customStyles}
                name="category"
                value={(formik.values.category = category)}
                // onChange={formik.handleChange}
                onChange={(selectedOption) => {
                  handleCategory(selectedOption);
                }}
              />
            </div>
            <div>
              {/* required */}
              <small className="flex justify-center font-sensrif">
                {formik.touched.category && formik.errors.category && (
                  <p style={{ color: "red" }}>{formik.errors.category}</p>
                )}
              </small>
            </div>
          </div>

          {/* Classification */}

          <div className="mx-[3rem]">
            <div>
              <label className="font-medium">Classifaction</label>
            </div>
            <div className="flex gap-3 mx-2 my-2">
              <div>
                <input
                  id="Billable"
                  type="radio"
                  name="classifaction"
                  value={"Billable"}
                  onChange={handleChange}
                  defaultChecked={values.classifaction === "Billable"}
                  className="radio w-4 h-4 mx-2 checked:bg-green-500 "
                  checked
                />
                <span>Billable</span>
              </div>
              <div>
                <input
                  type="radio"
                  id="Non-Billable"
                  name="classifaction"
                  value={"Non-Billable"}
                  onChange={handleChange}
                  defaultChecked={values.classifaction === "Non-Billable"}
                  className="radio  w-4 h-4  mx-2 checked:bg-green-500"
                />
                <span>Non-Billable</span>
              </div>
            </div>
          </div>

          {/* Work Authorization */}

          <div className="join my-[1rem] flex flex-col">
            <div className="flex">
              <label
                htmlFor="workAuthorization"
                // className="btn btn-sm join-item "
                className={`${
                  formik.touched.workAuthorization &&
                  formik.errors.workAuthorization &&
                  "bg-red-400 text-white"
                } btn btn-sm join-item`}
              >
                <span>Authorization</span>
              </label>
              <Select
                id="workAuthorization"
                theme={theme}
                options={WorkAuthorization}
                isSearchable={true}
                className=" select-bordered w-[14rem]  join-item"
                styles={customStyles}
                name="workAuthorization"
                value={(formik.values.workAuthorization = workAuthorization)}
                // onChange={formik.handleChange}
                onChange={(selectedOption) => {
                  handleWorkAuthorization(selectedOption);
                }}
              />
            </div>
            <div>
              {/* required */}
              <small className="flex justify-center font-sensrif">
                {formik.touched.workAuthorization &&
                  formik.errors.workAuthorization && (
                    <p style={{ color: "red" }}>
                      {formik.errors.workAuthorization}
                    </p>
                  )}
              </small>
            </div>
          </div>

          {/* payroll ID */}

          <div className="my-[1rem]">
            <label className="input-group">
              <span
                className={`${
                  formik.touched.payrollid &&
                  formik.errors.payrollid &&
                  "bg-red-400 text-white"
                } flex  justify-center w-[8rem]`}
              >
                Payroll ID
              </span>
              <input
                type="text"
                // className="input input-bordered w-[15rem] input-sm"
                className={`${
                  formik.touched.payrollid &&
                  formik.errors.payrollid &&
                  "border-red-400"
                } border-2 input input-bordered input-sm w-[15rem] `}
                name="payrollid"
                value={formik.values.payrollid}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </label>
            {/* required */}
            <small className="flex justify-center font-sensrif">
              {formik.touched.payrollid && formik.errors.payrollid && (
                <p style={{ color: "red" }}>{formik.errors.payrollid}</p>
              )}
            </small>
          </div>

          {/* Holiday Calender */}

          <div className="join my-[1rem] flex flex-col">
            <div className="flex">
              <label
                htmlFor="holidaycalender"
                // className="btn btn-sm join-item "
                className={`${
                  formik.touched.holidaycalender &&
                  formik.errors.holidaycalender &&
                  "bg-red-400 text-white"
                } btn btn-sm join-item`}
              >
                <span>Holiday Calender</span>
              </label>
              <Select
                id="holidaycalender"
                theme={theme}
                options={Holidaycalender}
                isSearchable={true}
                className=" select-bordered w-[12rem]  join-item"
                styles={customStyles}
                name="holidaycalender"
                value={(formik.values.holidaycalender = holidaycalender)}
                // onChange={formik.handleChange}
                onChange={(selectedOption) => {
                  handleHolidayCalender(selectedOption);
                }}
              />
            </div>
            <div>
              {/* required */}
              <small className="flex justify-center font-sensrif">
                {formik.touched.holidaycalender &&
                  formik.errors.holidaycalender && (
                    <p style={{ color: "red" }}>
                      {formik.errors.holidaycalender}
                    </p>
                  )}
              </small>
            </div>
          </div>

          {/* Worker Id */}

          <div className="my-[2rem]">
            <label className="input-group">
              <span
                className={`${
                  formik.touched.workerid &&
                  formik.errors.workerid &&
                  "bg-red-400 text-white"
                } flex  justify-center w-[8rem]`}
              >
                Worker ID
              </span>
              <input
                type="text"
                // className="input input-bordered w-[14rem] input-sm"
                className={`${
                  formik.touched.workerid &&
                  formik.errors.workerid &&
                  "border-red-400"
                } border-2 input input-bordered input-sm w-[14.4rem] `}
                name="workerid"
                value={formik.values.workerid}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </label>
            <div>
              {/* required */}
              <small className="flex justify-center font-sensrif">
                {formik.touched.workerid && formik.errors.workerid && (
                  <p style={{ color: "red" }}>{formik.errors.workerid}</p>
                )}
              </small>
            </div>
          </div>

          {/* Weekend Profile */}

          <div className="join flex flex-col my-[2rem]">
            <div className="flex">
              <label
                htmlFor="weekendprofile"
                // className="btn btn-sm join-item "
                className={`${
                  formik.touched.weekendprofile &&
                  formik.errors.weekendprofile &&
                  "bg-red-400 text-white"
                } btn btn-sm join-item`}
              >
                <span>Weekend Profile </span>
              </label>
              <Select
                id="weekendprofile"
                theme={theme}
                isMulti
                options={Weekendprofile}
                isSearchable={true}
                className=" select-bordered w-[13.5rem]  join-item"
                styles={customStyles}
                name="weekendprofile"
                value={(formik.values.weekendprofile = weekendprofile)}
                onChange={(selectedOption) => {
                  handleWeekendprofile(selectedOption);
                }}
              />
            </div>

            <div>
              {/* required */}
              <small className="flex justify-center font-sensrif">
                {formik.touched.weekendprofile &&
                  formik.errors.weekendprofile && (
                    <p style={{ color: "red" }}>
                      {formik.errors.weekendprofile}
                    </p>
                  )}
              </small>
            </div>
          </div>

          {/* Veteran status */}

          <div className="join my-[2rem] flex flex-col">
            <div className="flex">
              <label
                htmlFor="veteranstatus"
                // className="btn btn-sm join-item "
                className={`${
                  formik.touched.veteransatus &&
                  formik.errors.veteransatus &&
                  "bg-red-400 text-white"
                } btn btn-sm join-item`}
              >
                <span>Veteran status</span>
              </label>
              <Select
                id="veteranstatus"
                theme={theme}
                options={Veteran}
                isSearchable={true}
                className=" select-bordered w-[13.5rem]  join-item"
                styles={customStyles}
                name="veteranstatus"
                value={(formik.values.veteransatus = veteransatus)}
                // onChange={formik.handleChange}
                onChange={(selectedVeteranstatus) => {
                  handleVeteranstatus(selectedVeteranstatus);
                }}
              />
            </div>
            <div>
              {/* required */}
              <small className="flex justify-center font-sensrif">
                {formik.touched.veteransatus && formik.errors.veteransatus && (
                  <p style={{ color: "red" }}>{formik.errors.veteransatus}</p>
                )}
              </small>
            </div>
          </div>

          {/* Employee Type */}

          <div>
            <div>
              <label>Employee Type</label>
            </div>
            <div className="my-1">
              <span>
                <input
                  id="Employee/Consulant/Contractor"
                  type="radio"
                  name="employeetype"
                  onChange={handleChange}
                  value={"Employee/Consulant/Contractor"}
                  defaultChecked={
                    values.employeetype === "Employee/Consulant/Contractor"
                  }
                  className="radio checked:bg-green-500 w-4 h-4 mx-2"
                  checked
                />
              </span>
              <label>Employee/Consulant/Contractor</label>
            </div>
            <div>
              <span>
                <input
                  id="Back-Office Staff"
                  type="radio"
                  name="employeetype"
                  onChange={handleChange}
                  value={"Back-Office Staff"}
                  defaultChecked={values.employeetype === "Back-Office Staff"}
                  className="radio checked:bg-green-500 w-4 h-4 mx-2"
                />
              </span>
              <label>Back-Office Staff</label>
            </div>
          </div>

          {/* Marital status */}

          <div className="join my-[2rem] flex flex-col">
            <div className="flex">
              <label
                htmlFor="maritalstatsu"
                // className="btn btn-sm join-item "
                className={`${
                  formik.touched.maritalsatus &&
                  formik.errors.maritalsatus &&
                  "bg-red-400 text-white"
                } btn btn-sm join-item`}
              >
                <span>Marital status</span>
              </label>
              <Select
                id="maritalstatsu"
                theme={theme}
                options={Marital}
                isSearchable={true}
                className=" select-bordered w-[14rem]  join-item"
                styles={customStyles}
                name="maritalstatus"
                value={(formik.values.maritalsatus = maritalstatus)}
                // onChange={formik.handleChange}
                onChange={(selectedMaritalstatus) => {
                  handleMaritalstatus(selectedMaritalstatus);
                }}
              />
            </div>
            <div>
              {/* required */}
              <small className="flex justify-center font-sensrif">
                {formik.touched.maritalsatus && formik.errors.maritalsatus && (
                  <p style={{ color: "red" }}>{formik.errors.maritalsatus}</p>
                )}
              </small>
            </div>
          </div>

          {/* Employee status */}

          <div className="join my-[2rem] flex flex-col">
            <div className="flex">
              <label
                htmlFor="employeestatus"
                // className="btn btn-sm join-item "
                className={`${
                  formik.touched.employeestatus &&
                  formik.errors.employeestatus &&
                  "bg-red-400 text-white"
                } btn btn-sm join-item`}
              >
                <span>Employee status</span>
              </label>
              <Select
                id="employeestatus"
                theme={theme}
                isMulti
                options={Employstatus}
                isSearchable={true}
                className=" select-bordered w-[13rem]  join-item"
                styles={customStyles}
                name="employeestatus"
                value={(formik.values.employeestatus = employeestatus)}
                // onChange={formik.handleChange}
                onChange={(selectedEmployeestatus) => {
                  handleEmployeestatus(selectedEmployeestatus);
                }}
              />
            </div>
            <div>
              {/* required */}
              <small className="flex justify-center font-sensrif">
                {formik.touched.employeestatus &&
                  formik.errors.employeestatus && (
                    <p style={{ color: "red" }}>
                      {formik.errors.employeestatus}
                    </p>
                  )}
              </small>
            </div>
          </div>
        </div>

        {/* submit  */}
        <div>
          <button
            className="btn btn-sm lg:w-[35rem] lg:mx-[33rem]  font-semibold text-black border-none bg-gray-300 hover:text-white hover:bg-green-500 "
            type="submit"
          >
            Submit
          </button>
        </div>

        <div>
          <button></button>
        </div>
      </form>
    </>
  );
};

export default EmployeeInput;
