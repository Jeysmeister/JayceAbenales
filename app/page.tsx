import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <Card>
        <CardHeader className="w-full flex justify-center items-center text-2xl relative">
          <CardTitle className="font-light">Developer Identification</CardTitle>
          <div className="absolute top-6 right-6 text-xs">ID # : 915124512</div>
        </CardHeader>
        <CardContent className="flex divide-x-[1px] gap-4">
          <Card className="p-2">
            <Image
              className="rounded-lg "
              src={"/IDPicture.png"}
              alt="IDPicture"
              height={200}
              width={200}
            />
          </Card>
          <div className="min-h-full">
            <div className="pl-4 flex gap-8 text-sm h-full items-center">
              <div className="flex flex-col gap-2 text-nowrap">
                <div>Name :</div>
                <div>Nickname :</div>
                <div>Date Of Birth :</div>
                <div>Contact # :</div>
                <div>Occupation :</div>
              </div>
              <div className="flex flex-col gap-2 italic w-full items-end">
                <div>Abenales, John Carlo H.</div>
                <div>Jayce</div>
                <div>01 / 11 / 2000</div>
                <div>+63 9209607652</div>
                <div>Full Stack Web Developer</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
