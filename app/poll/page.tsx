import PollBar from '@/components/poll/poll-bar';

function Page() {
  return (
    <>
      <div className="p-4">
        <h1>2019年選前民調</h1>
        <PollBar />
        <p className="text-xs">
          選舉民調背景，文稿還沒想好啊啊阿。今天應改可以吃小籠包或便當。以後感覺買不起航，最近有一點點拮据嗚嗚嗚嗚。
        </p>
      </div>
    </>
  );
}

export default Page;
