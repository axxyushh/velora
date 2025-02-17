"use client";

import dynamic from "next/dynamic";
import { Controller, useForm } from "react-hook-form";
import "react-quill-new/dist/quill.snow.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { journalSchema } from "@/app/lib/schema";
import { BarLoader } from "react-spinners";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { object } from "zod";
import { getMoodById, MOODS } from "@/app/lib/moods";
import { Button } from "@/components/ui/button";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
const JournalEntryPage = () => {

  const {register, handleSubmit, control, formState:{errors}, getValues} = useForm({
    resolver: zodResolver(journalSchema),
    defaultValues:{
      title: "",
      content:"",
      mood:"",
      collectionId:"",
    },
  });

  const isLoading = false;

  const onSubmit = handleSubmit(async (data) => {
    const mood = getMoodById(data.mood);
    actionFn({
      ...data,
      moodScore: mood.score,
      moodQuery: mood.pixabayQuery,
      ...(isEditMode && { id: editId }),
    });
  });
  
  return (
    <div className="py-8">
      <form className="space-y-2 mx-auto" onSubmit={onSubmit}>
        <h1 className="text-5xl md:text-6xl gradient-title">
          What&apos;s on your mind, dreamer?
        </h1>

        {isLoading && <BarLoader color="green" width={"100%"}/>}

        {/* Title Selection */}
        <div className="space-y-2">
          <label className="text-sm font-medium">
            Title
          </label>
          <Input
            disabled={isLoading}
           {...register("title")}
           placeholder="Give your title that reflects your thoughts..."
           className={`py-5 md:text-md ${errors.title?"border-red-500":""}`}
          />
          {errors.title && (
            <p className="text-red-500 text-sm">
              {errors.title.message}
            </p>
          )}
        </div>

        {/* Mood Selection */}
        <div className="space-y-2">
          <label className="text-sm font-medium">
            How are you feeling?
          </label>
          <Controller
            name="mood"
            control={control}
            render={({field}) => {
              return(
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className={errors.mood ? "border-red-500" : ""}>
                    <SelectValue placeholder="Select your Current mood..." />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.values(MOODS).map((mood) => {
                      return(
                        <SelectItem key={mood.id} value={mood.id}>
                          <span className="flex items-center gap-2">
                            {mood.emoji} {mood.label}
                          </span>
                        </SelectItem>
                      )
                    })}
                  </SelectContent>
                </Select>
              )
            }}
          />
          {errors.title && (
            <p className="text-red-500 text-sm">
              {errors.mood.message}
            </p>
          )}
        </div>

        
        {/* Content Selection */}
        <div className="space-y-2">
          <label className="text-sm font-medium">
            {getMoodById(getValues("mood"))?.prompt ?? "Write your thoughts..."}
          </label>
          <Controller
            name="content"
            control={control}
            render={({ field }) => (
              <ReactQuill
                readOnly={isLoading}
                theme="snow"
                value={field.value}
                onChange={field.onChange}
                modules={{
                  toolbar: [
                    [{ header: [1, 2, 3, false] }],
                    ["bold", "italic", "underline", "strike"],
                    [{ list: "ordered" }, { list: "bullet" }],
                    ["blockquote", "code-block"],
                    ["link"],
                    ["clean"],
                  ],
                }}
              />
            )}
          />
          {errors.content && (
            <p className="text-red-500 text-sm">{errors.content.message}</p>
          )}
        </div>

        {/* Collection */}
        <div className="space-y-2">
          <label className="text-sm font-medium">
            Add to Collection (Optional)
          </label>
          {/* <Controller
            name="collectionId"
            control={control}
            // render={({ field }) => (
            //   <Select
            //     onValueChange={(value) => {
            //       if (value === "new") {
            //         setIsCollectionDialogOpen(true);
            //       } else {
            //         field.onChange(value);
            //       }
            //     }}
            //     value={field.value}
            //   >
            //     <SelectTrigger>
            //       <SelectValue placeholder="Choose a collection..." />
            //     </SelectTrigger>
            //     <SelectContent>
            //       {collections?.map((collection) => (
            //         <SelectItem key={collection.id} value={collection.id}>
            //           {collection.name}
            //         </SelectItem>
            //       ))}
            //       <SelectItem value="new">
            //         <span className="text-orange-600">
            //           + Create New Collection
            //         </span>
            //       </SelectItem>
            //     </SelectContent>
            //   </Select>
            // )}
          /> */}
          {errors.collectionId && (
            <p className="text-red-500 text-sm">{errors.content.message}</p>
          )}
        </div>


        <div className="space-y-4 flex">
          <Button type="submit" variant="journal">
            Publish
          </Button>
        </div>


      </form>
    </div>
  )
}

export default JournalEntryPage