"use client"

import { useState, useEffect } from "react"
import { CheckCircle, Save, AlertCircle } from "lucide-react"

type SaveStatus = "idle" | "saving" | "saved" | "error"

interface AutoSaveIndicatorProps {
  status: SaveStatus
  lastSaved?: Date | null
}

export function AutoSaveIndicator({ status, lastSaved }: AutoSaveIndicatorProps) {
  const [visible, setVisible] = useState(status !== "idle")

  // Hide the indicator after 3 seconds when saved
  useEffect(() => {
    if (status === "saved") {
      const timer = setTimeout(() => {
        setVisible(false)
      }, 3000)

      return () => clearTimeout(timer)
    } else {
      setVisible(true)
    }
  }, [status])

  if (!visible) return null

  return (
    <div className="flex items-center text-sm">
      {status === "saving" && (
        <>
          <Save className="h-4 w-4 animate-pulse mr-2" />
          <span>Saving...</span>
        </>
      )}

      {status === "saved" && (
        <>
          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
          <span>
            Saved {lastSaved && `at ${lastSaved.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`}
          </span>
        </>
      )}

      {status === "error" && (
        <>
          <AlertCircle className="h-4 w-4 text-red-500 mr-2" />
          <span>Failed to save</span>
        </>
      )}
    </div>
  )
}

