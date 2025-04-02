"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Editor, EditorState, RichUtils, getDefaultKeyBinding, convertToRaw, convertFromRaw } from "draft-js"
import "draft-js/dist/Draft.css"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MediaLibrary } from "@/components/media-library"
import {
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  Quote,
  Code,
  Link,
  ImageIcon,
  Heading1,
  Heading2,
  Heading3,
  Undo,
  Redo,
} from "lucide-react"

interface RichTextEditorProps {
  initialContent?: string
  onChange: (content: string) => void
  placeholder?: string
  minHeight?: string
}

export function RichTextEditor({
  initialContent,
  onChange,
  placeholder = "Write your content here...",
  minHeight = "300px",
}: RichTextEditorProps) {
  // Initialize editor state
  const [editorState, setEditorState] = useState(() => {
    if (initialContent) {
      try {
        // Try to parse the initial content as raw Draft.js content
        const contentState = convertFromRaw(JSON.parse(initialContent))
        return EditorState.createWithContent(contentState)
      } catch (e) {
        // If parsing fails, create empty editor state
        return EditorState.createEmpty()
      }
    }
    return EditorState.createEmpty()
  })

  const [activeTab, setActiveTab] = useState("edit")
  const [showMediaLibrary, setShowMediaLibrary] = useState(false)
  const editorRef = useRef<Editor>(null)

  // Focus the editor when clicked
  const focusEditor = () => {
    if (editorRef.current) {
      editorRef.current.focus()
    }
  }

  // Handle editor state changes
  const handleEditorChange = (state: EditorState) => {
    setEditorState(state)

    // Convert content to raw format and pass to parent component
    const contentState = state.getCurrentContent()
    const rawContent = convertToRaw(contentState)
    onChange(JSON.stringify(rawContent))
  }

  // Handle keyboard shortcuts
  const handleKeyCommand = (command: string, editorState: EditorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command)
    if (newState) {
      handleEditorChange(newState)
      return "handled"
    }
    return "not-handled"
  }

  // Map keys to commands
  const mapKeyToEditorCommand = (e: React.KeyboardEvent) => {
    return getDefaultKeyBinding(e)
  }

  // Toggle block type (headings, lists, etc.)
  const toggleBlockType = (blockType: string) => {
    handleEditorChange(RichUtils.toggleBlockType(editorState, blockType))
  }

  // Toggle inline style (bold, italic, etc.)
  const toggleInlineStyle = (inlineStyle: string) => {
    handleEditorChange(RichUtils.toggleInlineStyle(editorState, inlineStyle))
  }

  // Handle media selection from library
  const handleMediaSelect = (media: any) => {
    // In a real implementation, you would insert the media into the editor
    console.log("Selected media:", media)
    // For now, we'll just close the media library
    setShowMediaLibrary(false)
  }

  // Get current inline styles and block type
  const currentInlineStyles = editorState.getCurrentInlineStyle()
  const selection = editorState.getSelection()
  const blockType = editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType()

  // Render HTML preview from editor content
  const renderPreview = () => {
    const contentState = editorState.getCurrentContent()
    if (!contentState.hasText()) {
      return <p className="text-muted-foreground">No content to preview</p>
    }

    // In a real implementation, you would convert Draft.js content to HTML
    // For this demo, we'll just show the plain text
    return (
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p>{contentState.getPlainText()}</p>
      </div>
    )
  }

  return (
    <div className="border rounded-md">
      {/* Toolbar */}
      <div className="flex flex-wrap gap-1 p-2 border-b bg-muted/30">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => toggleInlineStyle("BOLD")}
          className={currentInlineStyles.has("BOLD") ? "bg-muted" : ""}
        >
          <Bold className="h-4 w-4" />
          <span className="sr-only">Bold</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => toggleInlineStyle("ITALIC")}
          className={currentInlineStyles.has("ITALIC") ? "bg-muted" : ""}
        >
          <Italic className="h-4 w-4" />
          <span className="sr-only">Italic</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => toggleInlineStyle("UNDERLINE")}
          className={currentInlineStyles.has("UNDERLINE") ? "bg-muted" : ""}
        >
          <Underline className="h-4 w-4" />
          <span className="sr-only">Underline</span>
        </Button>

        <div className="w-px h-6 bg-border mx-1"></div>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => toggleBlockType("header-one")}
          className={blockType === "header-one" ? "bg-muted" : ""}
        >
          <Heading1 className="h-4 w-4" />
          <span className="sr-only">Heading 1</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => toggleBlockType("header-two")}
          className={blockType === "header-two" ? "bg-muted" : ""}
        >
          <Heading2 className="h-4 w-4" />
          <span className="sr-only">Heading 2</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => toggleBlockType("header-three")}
          className={blockType === "header-three" ? "bg-muted" : ""}
        >
          <Heading3 className="h-4 w-4" />
          <span className="sr-only">Heading 3</span>
        </Button>

        <div className="w-px h-6 bg-border mx-1"></div>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => toggleBlockType("unordered-list-item")}
          className={blockType === "unordered-list-item" ? "bg-muted" : ""}
        >
          <List className="h-4 w-4" />
          <span className="sr-only">Bullet List</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => toggleBlockType("ordered-list-item")}
          className={blockType === "ordered-list-item" ? "bg-muted" : ""}
        >
          <ListOrdered className="h-4 w-4" />
          <span className="sr-only">Numbered List</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => toggleBlockType("blockquote")}
          className={blockType === "blockquote" ? "bg-muted" : ""}
        >
          <Quote className="h-4 w-4" />
          <span className="sr-only">Quote</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => toggleBlockType("code-block")}
          className={blockType === "code-block" ? "bg-muted" : ""}
        >
          <Code className="h-4 w-4" />
          <span className="sr-only">Code Block</span>
        </Button>

        <div className="w-px h-6 bg-border mx-1"></div>

        <Button variant="ghost" size="icon" onClick={() => setShowMediaLibrary(true)}>
          <ImageIcon className="h-4 w-4" />
          <span className="sr-only">Insert Image</span>
        </Button>
        <Button variant="ghost" size="icon">
          <Link className="h-4 w-4" />
          <span className="sr-only">Insert Link</span>
        </Button>

        <div className="w-px h-6 bg-border mx-1"></div>

        <Button variant="ghost" size="icon" onClick={() => handleEditorChange(EditorState.undo(editorState))}>
          <Undo className="h-4 w-4" />
          <span className="sr-only">Undo</span>
        </Button>
        <Button variant="ghost" size="icon" onClick={() => handleEditorChange(EditorState.redo(editorState))}>
          <Redo className="h-4 w-4" />
          <span className="sr-only">Redo</span>
        </Button>
      </div>

      {/* Editor/Preview Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="w-full justify-start rounded-none border-b">
          <TabsTrigger value="edit">Edit</TabsTrigger>
          <TabsTrigger value="preview">Preview</TabsTrigger>
        </TabsList>

        <TabsContent value="edit" className="p-0 m-0">
          <div className="p-4" onClick={focusEditor} style={{ minHeight }}>
            <Editor
              ref={editorRef}
              editorState={editorState}
              onChange={handleEditorChange}
              handleKeyCommand={handleKeyCommand}
              keyBindingFn={mapKeyToEditorCommand}
              placeholder={placeholder}
              spellCheck={true}
            />
          </div>
        </TabsContent>

        <TabsContent value="preview" className="p-0 m-0">
          <div className="p-4" style={{ minHeight }}>
            {renderPreview()}
          </div>
        </TabsContent>
      </Tabs>

      {/* Media Library Dialog */}
      <MediaLibrary open={showMediaLibrary} onClose={() => setShowMediaLibrary(false)} onSelect={handleMediaSelect} />
    </div>
  )
}

