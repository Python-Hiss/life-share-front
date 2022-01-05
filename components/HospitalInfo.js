import { PaperClipIcon,PencilAltIcon } from '@heroicons/react/solid'
import { useAuth } from "../contexts/auth";


function HospitalInfo(props) {
  const {tokens} = useAuth();
  return (
    <div className="relative w-4/5 m-auto overflow-hidden bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Hospital Information</h3>
        <PencilAltIcon
                    onClick={props.submitHandler}
                    type="submit"
                    className="absolute w-5 h-5 mt-4 mr-4 top-1 right-1"
                  />
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Role</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{tokens.Role}</dd>
          </div>
          <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Name</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{props.result.first_name}</dd>
          </div>
          <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Email address</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{props.result.email}</dd>
          </div>
          <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Phone Number</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{props.result.phone_number}</dd>
          </div>
          
        </dl>
      </div>
    </div>
  )
}

export default HospitalInfo