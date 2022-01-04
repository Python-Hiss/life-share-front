export default function Editpost(props){
let blood_types =['A+',"A-","B+","B-","AB+","AB-","O+","O-"]
    
    return(
      <div>
      <div className="w-4/5 m-auto ">
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form action="#" method="POST" onSubmit={props.handleupdate}>
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-5 space-y-6 bg-white sm:p-6">
                <div className="grid grid-cols-1 gap-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="bloodtype"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Blood Type
                      </label>
                      {/* <input
                        defaultValue={props.itemupdate.title}
                        type="text"
                        name="bloodtype"
                        id="bloodtype"
                        autoComplete="given-name"
                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                      /> */}
                      <select name="bloodtype" class=" mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                        {blood_types.map(type =>{
                          return<option value={type}>{type}</option>
                        })}
                        
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="Content"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Content
                  </label>
                  <input
                    defaultValue={props.itemupdate.text}
                    type="text"
                    name="Content"
                    id="Content"
                    autoComplete="given-name"
                    className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    )
}