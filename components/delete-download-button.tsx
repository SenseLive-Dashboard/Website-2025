"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useRouter } from "next/navigation"

interface DeleteDownloadButtonProps {
  id: string
  children: React.ReactNode
}

export function DeleteDownloadButton({ id, children }: DeleteDownloadButtonProps) {
  const [open, setOpen] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const router = useRouter()

  const handleDelete = async () => {
    setIsDeleting(true)

    try {
      // In a real app, this would be an API call
      // await fetch(`/api/downloads/${id}`, {
      //   method: 'DELETE',
      // })

      // For now, we'll just simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      router.refresh()
      setOpen(false)
    } catch (error) {
      console.error("Error deleting download:", error)
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <>
      <div onClick={() => setOpen(true)}>{children}</div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure you want to delete this document?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete the document and remove it from the download
              center and any related products.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)} disabled={isDeleting}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDelete} disabled={isDeleting}>
              {isDeleting ? "Deleting..." : "Delete"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

