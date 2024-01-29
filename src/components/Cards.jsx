const Cards = ({second}) => {
  return (
          <article className="max-w-xs mx-auto bg-white shadow-md rounded-md overflow-hidden">
    <div className="img-container">
      <img src="https://apollo.olx.in/v1/files/h5sn7zswhvkl2-IN/image;s=300x600;q=60" alt="" className="w-full h-40 object-cover" />
    </div>
    <div className="p-4">
      <h3 className="text-lg font-semibold">{second?.name}</h3>
      <h1 className="text-xl font-bold text-indigo-600 mt-2">₹ {second?.price.toLocaleString()}</h1>
      <div className="flex items-center mt-2">
        <svg className="h-5 w-5 text-gray-600 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
        <p className="text-gray-600">{second?.address}</p>
        <span className="text-gray-500 ml-auto">{second?.time}</span>
      </div>
    </div>
  </article>
  )
}
export default Cards