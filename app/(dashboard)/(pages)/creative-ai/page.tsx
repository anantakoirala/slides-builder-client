"use client";
import CardList from "@/components/CardList";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronLeft } from "lucide-react";
import React, { useState } from "react";

type Props = {};

const Page = (props: Props) => {
  const [noOfCards, setNoOfCards] = useState(0);
  return (
    <div className="space-y-6 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <Button variant={"outline"} className="mb-4">
        <ChevronLeft className="mr-2 h-4 w-4" />
        Back
      </Button>
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-muted-foreground">
          Generate with <span className="text-primary">Creative AI</span>
        </h1>
        <p className="text-secondary"> What would you like to create?</p>
      </div>
      <div className="bg-primary/10 p-4 rounded-xl">
        <div className="flex flex-col sm:flex-row justify-between gap-3 items-center rounded-xl">
          <Input
            placeholder="Enter promt"
            className="text-base sm:text-xl border-0 focus-visible:ring-0 shadow-none p-0 bg-transparent flex-grow"
          />
          <div className="flex items-center gap-3">
            <Select
              value={noOfCards.toString()}
              onValueChange={(value) => setNoOfCards(parseInt(value))}
            >
              <SelectTrigger className="w-fit gap-2 font-semibold shadow-xl">
                <SelectValue placeholder="Select the number of cards" />
              </SelectTrigger>
              <SelectContent className="w-fit">
                <SelectItem value="0" className="font-semibold">
                  0
                </SelectItem>
                <SelectItem value="1" className="font-semibold">
                  1
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <Button className="font-medium text-lg flex gap-2 items-center"></Button>
      </div>
      <CardList />
    </div>
  );
};

export default Page;
