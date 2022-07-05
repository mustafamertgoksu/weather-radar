import moment from 'moment';

export const Time = () => {
  const dateToFormat = '1976-04-19T12:59-0500';
  return (
    <div className="my-4">
      <b className="text-lg text-indigo-200">{moment().format('dddd')} {moment().format('MMMM YYYY')}</b>
    </div>
  )
}
