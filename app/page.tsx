import Bouquet from "@/components/Bouquet";
import Message from "@/components/Message";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#fdfcf8] overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="z-10 w-full max-w-4xl flex flex-col items-center">
        <Bouquet />
        <Message />
      </div>
    </main>
  );
}
