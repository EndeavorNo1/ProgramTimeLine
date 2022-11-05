import "./TimeLineRow.scss";
const TimeLineRow = () => {
  return (
    <div>
      <h1>Timeline</h1>
      <ul className="timeline-events">
        <li className="timeline-event-years-2">
          <h2>10-08～10-18</h2>
          <h3>6.0.3调研</h3>
          <h4>产品：xxx</h4>
        </li>
        <li className="timeline-event-years-2">
          <h2>10-18～10-20</h2>
          <h3>6.0.3设计稿</h3>
          <h4>UI：xxx</h4>
        </li>
        <li className="timeline-event-years-3">
          <h2>10-21～10-30</h2>
          <h3>6.0.3接口开发</h3>
          <h4>后端：xxx</h4>
        </li>
        <li className="timeline-event-years-7">
          <h2>11-01～11-30</h2>
          <h3>6.0.3接口开发</h3>
          <h4>前端：xxx</h4>
        </li>
      </ul>
      <ul className="timelines-years">
        <li>2022/10/18</li>
        <li>2022/10/21</li>
        <li>2022/10/24</li>
        <li>2022/11/30</li>
        <li>2022/12/08</li>
        {/*<li>2010</li>
        <li>2012</li>
        <li>2014</li>
        <li>2016</li>
        <li>2018</li> */}
      </ul>
    </div>
  );
};

export default TimeLineRow;
