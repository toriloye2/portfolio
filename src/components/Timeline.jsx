import TimelineItem from './TimelineItem';
import timelineData from '../data/timeline';
import Title from './Title';

function Timeline() {
   return (
      <div className="container mx-auto p-10">
         <Title>Timeline</Title>
         <div className="relative">
            {timelineData.map((item, index) => (
               <TimelineItem
                  key={index}
                  year={item.year}
                  title={item.title}
                  details={item.details}
                  side={index % 2 === 0 ? 'left' : 'right'}
               />
            ))}
         </div>
      </div>
   );
}

export default Timeline;
