import { SearchIcon } from '@heroicons/react/outline';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
function Widgets() {
  return (
    <div className="px-2 mt-2 col-span-2 hidden lg:inline scrollbar-hide">
      <div className="flex items-center space-x-2 bg-gray-100 p-3 rounded-full mt-2">
        <SearchIcon className="h-5 w-5 text-gray-400 cursor-pointer" />
        <input
          type="text"
          placeholder="Search Tweet"
          className="flex-1 outline-none bg-transparent "
        />
      </div>

      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="elonmusk"
        options={{ height: '100vh' }}
      />
    </div>
  );
}
export default Widgets;
