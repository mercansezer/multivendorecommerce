import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 p-8">
      <div>
        <Button variant="elevated" className="cursor-pointer">
          I am a button
        </Button>
      </div>

      <div>
        <Input placeholder="Hello World" />
      </div>

      <div>
        <Textarea placeholder="Hello World" />
      </div>
      <div>
        <Progress value={40} />
      </div>
    </div>
  );
}
