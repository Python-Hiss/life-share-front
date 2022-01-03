import { PaperClipIcon,PencilAltIcon } from '@heroicons/react/solid'
import { useAuth } from "../../contexts/auth";


function Example(props) {
  const {tokens } = useAuth();
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg w-4/5 m-auto relative">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Personal Information</h3>
        <PencilAltIcon
                    onClick={props.submitHandler}
                    type="submit"
                    className="h-5 w-5  absolute top-1 right-1 mr-4 mt-4"
                  />
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Role</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{tokens.Role}</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Name</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{props.result.first_name}</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Email address</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{props.result.email}</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Phone Number</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{props.result.phone_number}</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Blood Type</dt>
            {props.result.blood_type &&<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{props.result.blood_type.blood_type}</dd>}
          </div>
          
        </dl>
      </div>
    </div>
  )
}

export default Example