import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import { Loader } from "./components/shared/loader.tsx";
import { Preview } from "./components/shared/preview.tsx";

import { Button } from "./components/ui/button.tsx";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "./components/ui/form.tsx";
import { Input } from "./components/ui/input.tsx";

export type DataType = {
  title: string;
  description: string;
  image: string;
};

const schema = z.object({
  url: z.string().url(),
});

function App() {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<DataType | null>(null);

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (values: z.infer<typeof schema>) => {
    try {
      setLoading(true);
      setData(null);

      const { data } = await axios.post(
        "http://localhost:5005/preview",
        values,
      );
      setData(data);
      form.setValue("url", "");
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center w-full lg:w-1/2 mx-auto p-10">
      <h1 className="my-10 text-3xl font-bold">Generate Preview for Link</h1>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full gap-2 items-center mb-10"
        >
          <FormField
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input {...field} placeholder="Enter Url" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
            name="url"
            control={form.control}
          />
          <Button type="submit">Generate</Button>
        </form>
      </Form>

      {isLoading && <Loader />}

      {data && !isLoading && (
        <Preview
          title={data.title}
          description={data.description}
          image={data.image}
        />
      )}
    </div>
  );
}

export default App;
