import React from 'react';

import './content.less';

const ErrorMessage = (props) => {
  if (props.data.length > 0) {
    const content = props.data.map((item, index) => {
      return (
        <tr key={index}>
          <td className="game">{item.home_team.country} {item.home_team.goals} - {item.away_team.goals} {item.away_team.country}</td>
          <td className="location">{item.location}</td>
          <td className="date">{formatDate(item.datetime)}</td>
          <td className="status">{item.status}</td>
          <td className="events">
            <div className="home"></div>
            <div className="away"></div>
          </td>
        </tr>
      )
    })

    return (
      <table className="content">
        <thead>
          <tr>
            <th className="game">Game</th>
            <th className="location">Location</th>
            <th className="date">Date</th>
            <th className="status">Status</th>
            <th className="events">Events</th>
          </tr>
        </thead>
        <tbody>
        {content}
        </tbody>
      </table>
    )
  } else {
    return null
  }
}

const formatDate = (data) => {
  const date = new Date(data);
  let dd = date.getDate();
  let mm = date.getMonth()+1;
  const yyyy = date.getFullYear();

  if( dd<10 ) {
    dd = '0' + dd;
  }
  if( mm<10 ) {
    mm = '0' + mm;
  }

  const result = dd + '/' + mm + '/' + yyyy;
  return result;
}

export default ErrorMessage;