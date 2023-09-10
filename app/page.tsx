import UseImperativeHandle from "@/components/UseImperativeHandle";
import UseReducerHook from "@/components/UseReducerHook";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center mt-24">
      {/* <UseReducerHook /> */}
      <UseImperativeHandle />
    </div>
  );
}
