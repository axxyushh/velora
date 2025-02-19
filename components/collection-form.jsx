import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { collectionSchema } from '@/app/lib/schema'
import { BarLoader } from 'react-spinners'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'

const CollectionForm = ({
  onSuccess,
  open,
  setOpen,
  loading,
}) => {

  const {register, handleSubmit, formState:{errors}} = useForm({
    resolver: zodResolver(collectionSchema),
    defaultValues:{
      name:"",
    }
  })

  const onSubmit = handleSubmit(async(data) => {
    onSuccess(data);
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="font-bold text-3xl">Create new Journal Collection</DialogTitle>
        </DialogHeader>

        {loading && <BarLoader color='green' width={"100%"}/>}
        <form onSubmit={onSubmit}>
        <div className="space-y-2">
            <label className="text-sm font-medium">Collection Name</label>
            <Input
              disabled={loading}
              {...register("name")}
              placeholder="Enter collection name..."
              className={errors.name ? "border-red-500" : ""}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2 pt-5">
            <label className="text-sm font-medium">
              Description (Optional)
            </label>
            <Textarea
              {...register("description")}
              placeholder="Describe your collection..."
              className={errors.description ? "border-red-500" : ""}
            />
            {errors.description && (
              <p className="text-red-500 text-sm">
                {errors.description.message}
              </p>
            )}
          </div>

          <div className="flex justify-end gap-4 pt-4">
            <Button
              type="button"
              variant="ghost"
              onClick={() => setOpen(false)}
              className="space-y-4"
              disabled={loading}
            >
              Cancel
            </Button>
            <Button disabled={loading} type="submit" variant="journal">
              Create Collection
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default CollectionForm