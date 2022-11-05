import "./TimeLineRow.scss";
const TimeLineRow = () => {
  return (
    <div>
      <h1>Timeline</h1>
      <ul className="timeline-events">
        <li className="timeline-event-years-2">
          <h2>2004-2006</h2>
          <h3>Ideaworks Advertising</h3>
          <h4>Interactive Designer</h4>
        </li>
        <li className="timeline-event-years-2">
          <h2>2006-2008</h2>
          <h3>Pint, Inc</h3>
          <h4>Associate Creative Director</h4>
        </li>
        <li className="timeline-event-years-3">
          <h2>2008-2011</h2>
          <h3>Cuker Interactive</h3>
          <h4>Creative</h4>
        </li>
        <li className="timeline-event-years-7">
          <h2>2011-Present</h2>
          <h3>Independent</h3>
          <h4>Interactive Art Director</h4>
        </li>
      </ul>
      <ul className="timelines-years">
        <li>2000</li>
        <li>2002</li>
        <li>2004</li>
        <li>2006</li>
        <li>2008</li>
        <li>2010</li>
        <li>2012</li>
        <li>2014</li>
        <li>2016</li>
        <li>2018</li>
      </ul>
    </div>
  );
};

export default TimeLineRow;
