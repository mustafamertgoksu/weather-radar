export const Weather = ({ data, setData, unit }) => {
  return (
    <div className="text-gray-50">
      {data.main ? <div className='my-12 flex flex-col py-12 h-56 w-full items-center bg-slate-50 rounded-lg'>
        <h1 className='text-neutral-900 my-2 text-3xl'>{data.name}</h1>
        <div className='mx-4'> {data.main ? <h2 className='text-xl text-teal-800'>{data.main.temp} {unit == 'metric' ? <span>C°</span> : <span>F°</span> }</h2> : null}</div>
      </div> : null}
    </div>
  )
}
