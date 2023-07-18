'use client';
//import libraries
import Select from 'react-select';
import { useFormik } from 'formik';
import { schemaForBussinessInfo } from '@/schema';
import { CgArrowLongRight } from 'react-icons/cg';
import { useState } from 'react';

const ClientInformation = () => {
  const [jobTerminationNotice, setJobTerminationNotice] = useState('');
  const [clientStatus, setClientStatus] = useState('');
  const [clientCategory, setClientCategory] = useState('');

  const handleJobTerminationNotice = (selectedjobTerminationNotice) => {
    console.log(selectedjobTerminationNotice);
    setJobTerminationNotice(selectedjobTerminationNotice);
  };
  const handleClientStatus = (selectedClientStatus) => {
    console.log(selectedClientStatus);
    setClientStatus(selectedClientStatus);
  };
  const handleClientCategory = (selectedClientCategory) => {
    setClientCategory(selectedClientCategory);
  };
  //select element options
  const jobTerminationNoticeOptions = [
    { value: 'aaa', label: 'aaa' },
    { value: 'bbb', label: 'bbb' },
    { value: 'ccc', label: 'ccc' },
  ];
  const clientStatusOptions = [
    { value: 'aaa', label: 'aaa' },
    { value: 'bbb', label: 'bbb' },
    { value: 'ccc', label: 'ccc' },
  ];

  const clientCategoryOptions = [
    { value: 'aaa', label: 'aaa' },
    { value: 'bbb', label: 'bbb' },
    { value: 'ccc', label: 'ccc' },
  ];

  // select element custom styles
  const customStyles = {
    control: (base) => ({
      ...base,
      height: 48,
      minHeight: 48,
      borderRadius: 10,
    }),
  };
  // select element custom theme
  const theme = (theme) => ({
    ...theme,
    borderRadius: 0,
    colors: {
      ...theme.colors,
      primary25: 'lightgray',
      primary: 'gray',
    },
  });

  //hook
  const handleOnSubmit = (value) => {
    const datas = [...dataInfo];
    localStorage.setItem('bussinessInfoDetails', JSON.stringify(datas));
    setDataInfo((prev) => [...prev, value]);
  };
  const formik = useFormik({
    initialValues: {
      companyName: '',
      companyDisplayName: '',
      clientId: '',
      clientShortName: '',
      email: '',
      contactNumber: '',
      federalId: '',
      website: '',
      netTerms: '',
      jobTerminationNotice: '',
      fax: '',
      clientStatus: '',
      clientCategory: '',
      clientOwnership: '',
    },
    onSubmit: handleOnSubmit,
    validationSchema: schemaForBussinessInfo,
  });

  const { values, handleBlur, handleSubmit, handleChange, errors, touched } =
    formik;

  return (
    <article className='px-8 py-6'>
      <h2 className='pb-2 mb-2 text-2xl font-semibold'>Business Information</h2>
      <form
        className='grid grid-cols-2 gap-8'
        onSubmit={handleSubmit}
      >
        <div className='flex flex-col'>
          <div className='join'>
            <label
              htmlFor='companyName'
              className={`${
                touched.companyName && errors.companyName && 'btn-error '
              } btn join-item  label-text lg:w-56 w-48  max-w-xs `}
            >
              <span>Company Name</span>
            </label>
            <input
              id='companyName'
              type='text'
              name='companyName'
              placeholder={'Type here'}
              className={`${
                touched.companyName && errors.companyName && 'border-orange-600'
              } input input-bordered join-item w-full max-w-xs`}
              value={values.companyName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <small className='flex justify-center mt-1 text-orange-600'>
            {touched.companyName && errors.companyName
              ? errors.companyName
              : null}
          </small>
        </div>
        <div className='flex flex-col'>
          <div className='join'>
            <label
              htmlFor='companyDisplayName'
              className={`${
                touched.companyDisplayName &&
                errors.companyDisplayName &&
                'btn-error '
              } btn join-item  label-text lg:w-56 w-48  max-w-xs `}
            >
              <span>Company Display Name</span>
            </label>
            <input
              id='companyDisplayName'
              type='text'
              name='companyDisplayName'
              placeholder='Type here'
              className={`${
                touched.companyDisplayName &&
                errors.companyDisplayName &&
                'border-orange-600'
              } input input-bordered join-item w-full max-w-xs`}
              value={values.companyDisplayName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <small className='flex justify-center mt-1 text-orange-600'>
            {touched.companyDisplayName && errors.companyDisplayName
              ? errors.companyDisplayName
              : null}
          </small>
        </div>
        <div className='flex flex-col'>
          <div className='join'>
            <label
              htmlFor='clientId'
              className={`${
                touched.clientId && errors.clientId && 'btn-error '
              } btn join-item  label-text lg:w-56 w-48  max-w-xs `}
            >
              <span>Client ID</span>
            </label>
            <input
              id='clientId'
              type='text'
              name='clientId'
              placeholder='Type here'
              className={`${
                touched.clientId && errors.clientId && 'border-orange-600'
              } input input-bordered join-item w-full max-w-xs`}
              value={values.clientId}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <small className='flex justify-center mt-1 text-orange-600'>
            {touched.clientId && errors.clientId ? errors.clientId : null}
          </small>
        </div>
        <div className='flex flex-col'>
          <div className='join'>
            <label
              htmlFor='clientShortName'
              className={`${
                touched.clientShortName &&
                errors.clientShortName &&
                'btn-error '
              } btn join-item  label-text lg:w-56 w-48  max-w-xs `}
            >
              <span>Client Short Name</span>
            </label>
            <input
              id='clientShortName'
              type='text'
              name='clientShortName'
              placeholder='Type here'
              className={`${
                touched.clientShortName &&
                errors.clientShortName &&
                'border-orange-600'
              } input input-bordered join-item w-full max-w-xs`}
              value={values.clientShortName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <small className='flex justify-center mt-1 text-orange-600'>
            {touched.clientShortName && errors.clientShortName
              ? errors.clientShortName
              : null}
          </small>
        </div>
        <div className='flex flex-col'>
          <div className='join'>
            <label
              htmlFor='email'
              className={`${
                touched.email && errors.email && 'btn-error '
              } btn join-item  label-text lg:w-56 w-48  max-w-xs `}
            >
              <span>Email</span>
            </label>
            <input
              id='email'
              type='email'
              name='email'
              placeholder='Type here'
              className={`${
                touched.email && errors.email && 'border-orange-600'
              } input input-bordered join-item w-full max-w-xs`}
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <small className='flex justify-center mt-1 text-orange-600'>
            {touched.email && errors.email ? errors.email : null}
          </small>
        </div>

        <div className='flex flex-col'>
          <div className='join'>
            <label
              htmlFor='contactNumber'
              className={`${
                touched.contactNumber && errors.contactNumber && 'btn-error '
              } btn join-item  label-text lg:w-56 w-48  max-w-xs `}
            >
              <span>Contact Number</span>
            </label>
            <input
              id='contactNumber'
              type='tel'
              name='contactNumber'
              placeholder='Mob or Tel Number '
              className={`${
                touched.contactNumber &&
                errors.contactNumber &&
                'border-orange-600'
              } input input-bordered join-item w-full max-w-xs`}
              value={values.contactNumber}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <small className='flex justify-center mt-1 text-orange-600'>
            {touched.contactNumber && errors.contactNumber
              ? errors.contactNumber
              : null}
          </small>
        </div>
        <div className='flex flex-col'>
          <div className='join'>
            <label
              htmlFor='federalId'
              className={`${
                touched.federalId && errors.federalId && 'btn-error '
              } btn join-item  label-text lg:w-56 w-48  max-w-xs `}
            >
              <span>Federal ID</span>
            </label>
            <input
              id='federalId'
              type='text'
              name='federalId'
              placeholder='Type here'
              className={`${
                touched.federalId && errors.federalId && 'border-orange-600'
              } input input-bordered join-item w-full max-w-xs`}
              value={values.federalId}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <small className='flex justify-center mt-1 text-orange-600'>
            {touched.federalId && errors.federalId ? errors.federalId : null}
          </small>
        </div>
        <div className='flex flex-col'>
          <div className='join'>
            <label
              htmlFor='website'
              className={`${
                touched.website && errors.website && 'btn-error '
              } btn join-item  label-text lg:w-56 w-48  max-w-xs `}
            >
              <span>Website</span>
            </label>
            <input
              id='website'
              type='url'
              name='website'
              className={`${
                touched.website && errors.website && 'border-orange-600'
              } input input-bordered join-item w-full max-w-xs`}
              placeholder='Type Your URL..'
              value={values.website}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <small className='flex justify-center mt-1 text-orange-600'>
            {touched.website && errors.website ? errors.website : null}
          </small>
        </div>
        <div className='flex flex-col'>
          <div className='join'>
            <label
              htmlFor='netTerms'
              className={`${
                touched.netTerms && errors.netTerms && 'btn-error '
              } btn join-item  label-text lg:w-56 w-48  max-w-xs `}
            >
              <span>Net Terms</span>
            </label>
            <input
              id='netTerms'
              type='text'
              name='netTerms'
              placeholder='Type here'
              className={`${
                touched.netTerms && errors.netTerms && 'border-orange-600'
              } input input-bordered join-item w-full max-w-xs`}
              value={values.netTerms}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <small className='flex justify-center mt-1 text-orange-600'>
            {touched.netTerms && errors.netTerms ? errors.netTerms : null}
          </small>
        </div>
        <div className='flex flex-col'>
          <div className='flex items-center join'>
            <label
              htmlFor='jobTerminationNotice'
              className={`${
                touched.jobTerminationNotice &&
                errors.jobTerminationNotice &&
                'btn-error '
              } btn join-item  label-text lg:w-56 w-48  max-w-xs `}
            >
              <span>Job Termination Notice</span>
            </label>

            <Select
              id='jobTerminationNotice'
              className='w-full max-w-xs join-item '
              options={jobTerminationNoticeOptions}
              placeholder='Job Termination Notice'
              value={(values.jobTerminationNotice = jobTerminationNotice)}
              onChange={(selectedOption) => {
                handleJobTerminationNotice(selectedOption);
                console.log('values', values.JobTerminationNotice);
                // handleChange();
              }}
              onBlur={handleBlur}
              isSearchable={true}
              styles={customStyles}
              theme={theme}
            />
          </div>
          <small className='flex justify-center mt-1 text-orange-600'>
            {touched.jobTerminationNotice && errors.jobTerminationNotice
              ? errors.jobTerminationNotice
              : null}
          </small>
        </div>
        <div className='flex flex-col'>
          <div className='join'>
            <label
              htmlFor='fax'
              className={`${
                touched.fax && errors.fax && 'btn-error '
              } btn join-item  label-text lg:w-56 w-48  max-w-xs `}
            >
              <span>Fax</span>
            </label>
            <input
              id='fax'
              type='text'
              name='fax'
              placeholder='Type here'
              className={`${
                touched.fax && errors.fax && 'border-orange-600'
              } input input-bordered join-item w-full max-w-xs`}
              value={values.fax}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <small className='flex justify-center mt-1 text-orange-600'>
            {touched.fax && errors.fax ? errors.fax : null}
          </small>
        </div>
        <div className='flex flex-col'>
          <div className='flex items-center join'>
            <label
              htmlFor='clientStatus'
              className={`${
                touched.clientStatus && errors.clientStatus && 'btn-error '
              } btn join-item  label-text lg:w-56 w-48  max-w-xs `}
            >
              <span>Client Status</span>
            </label>

            <Select
              id='clientStatus'
              className='w-full max-w-xs join-item'
              options={clientStatusOptions}
              placeholder={'Client Status'}
              isSearchable={true}
              value={(values.clientStatus = clientStatus)}
              onChange={(selectedOption) => {
                handleClientStatus(selectedOption);
                console.log('values', values.ClientStatus);
                // handleChange();
              }}
              onBlur={handleBlur}
              styles={customStyles}
              theme={theme}
            />
          </div>
          <small className='flex justify-center mt-1 text-orange-600'>
            {touched.clientStatus && errors.clientStatus
              ? errors.clientStatus
              : null}
          </small>
        </div>
        <div className='flex flex-col'>
          <div className='flex items-center join'>
            <label
              htmlFor='clientCategory'
              className={`${
                touched.clientCategory && errors.clientCategory && 'btn-error '
              } btn join-item  label-text lg:w-56 w-48  max-w-xs `}
            >
              <span>Client Category</span>
            </label>

            <Select
              id='clientCategory'
              className='w-full max-w-xs join-item'
              options={clientCategoryOptions}
              placeholder={'Client Category'}
              isSearchable={true}
              value={(values.clientCategory = clientCategory)}
              onChange={(selectedOption) => {
                handleClientCategory(selectedOption);
                // setClientCategory(selectedOption.value);
              }}
              onBlur={handleBlur}
              styles={customStyles}
              theme={theme}
            />
          </div>
          <small className='flex justify-center mt-1 text-orange-600'>
            {touched.clientCategory && errors.clientCategory
              ? errors.clientCategory
              : null}
          </small>
        </div>
        <div className='flex flex-col'>
          <div className='flex items-center gap-4 join'>
            <label
              htmlFor='clientOwnership'
              className={`${
                touched.clientOwnership &&
                errors.clientOwnership &&
                'btn-error '
              } btn join-item  label-text lg:w-56 w-48  max-w-xs `}
            >
              <span>Client Ownership</span>
            </label>
            <div className='w-full max-w-xs join-item '>
              <div className='flex items-center gap-1 '>
                <input
                  id='visibleToSelectedOwners'
                  type='radio'
                  name='clientOwnership'
                  value={'visible to selected owners'}
                  onChange={handleChange}
                  className='w-4 h-4 radio'
                  defaultChecked={
                    values.clientOwnership === 'visible to selected owners'
                  }
                />
                <label
                  htmlFor='visibleToSelectedOwners'
                  className=''
                >
                  Visible To Selected Owners
                </label>
              </div>
              <div className='flex items-center gap-1 '>
                <input
                  id='visibleToAll'
                  type='radio'
                  name='clientOwnership'
                  value={'visible to all'}
                  onChange={handleChange}
                  className='w-4 h-4 radio'
                  defaultChecked={values.clientOwnership === 'visible to all'}
                />
                <label
                  htmlFor='visibleToAll'
                  className=''
                >
                  Visible To All
                </label>
              </div>
            </div>
          </div>
          <small className='flex justify-center mt-1 text-orange-600'>
            {touched.clientOwnership && errors.clientOwnership
              ? errors.clientOwnership
              : null}
          </small>
        </div>
        <div className='flex justify-end col-span-2 mt-4 '>
          <button
            type='submit'
            className='w-full max-w-xs text-center btn btn-square btn-success btn-outline'
          >
            Complete
            <CgArrowLongRight />
          </button>
        </div>
      </form>
    </article>
  );
};

export default ClientInformation;
