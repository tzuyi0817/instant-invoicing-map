import PollBar from '@/components/poll/poll-bar';
import PollPolitics from '@/components/poll/poll-politics';

function Page() {
  return (
    <div>
      <div className="p-4 md:p-[30px]">
        <h1>2019年選前民調</h1>
        <PollBar />
        <p className="text-xs md:text-2xl">
          選舉民調背景，文稿還沒想好啊啊阿。今天應改可以吃小籠包或便當。以後感覺買不起航，最近有一點點拮据嗚嗚嗚嗚。
        </p>
      </div>
      <PollPolitics />
    </div>
  );
}

export default Page;
