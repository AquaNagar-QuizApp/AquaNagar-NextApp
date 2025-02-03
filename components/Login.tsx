import { JSX, useState, type ChangeEvent, type FormEvent } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { LoginProps, Title, User } from "@/types"

export function Login({ onLogin }: LoginProps): JSX.Element {
  const [formData, setFormData] = useState<User>({
    name: "",
    title: "",
    department: "",
    designation: "",
    email: "",
    phone: "",
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onLogin(formData)
  }

  const handleTitleChange = (value: Title) => {
    setFormData((prev) => ({ ...prev, title: value }))
  }

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const inputVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  }

  const titleOptions: Title[] = ["Mr", "Mrs", "Ms", "Mx", "Dr", "Prof"];

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-4"
      initial="hidden"
      animate="visible"
      variants={formVariants}
    >
      <motion.div variants={inputVariants} className="flex items-center gap-4 w-full">
        {/* Title Dropdown */}
        <div className="w-1/3">
          <Label htmlFor="title">Title</Label>
          <Select onValueChange={handleTitleChange} value={formData.title} required>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a title" />
            </SelectTrigger>
            <SelectContent className="bg-white shadow-lg rounded-lg">
              {titleOptions.map((title) => (
                <SelectItem
                  key={title}
                  value={title}
                  className="w-full px-4 py-2 bg-white text-gray-900 cursor-pointer 
                       hover:bg-gray-100 hover:text-blue-600 
                       aria-selected:bg-blue-100 aria-selected:text-blue-700 pl-8"
                >
                  {title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        {/* Name Input Field */}
        <div className="w-2/3">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
      </motion.div>
      
      <motion.div variants={inputVariants}>
        <Label htmlFor="department">Department</Label>
        <Input id="department" name="department" value={formData.department} onChange={handleChange} required />
      </motion.div>
      <motion.div variants={inputVariants}>
        <Label htmlFor="designation">Designation</Label>
        <Input id="designation" name="designation" value={formData.designation} onChange={handleChange} required />
      </motion.div>
      <motion.div variants={inputVariants}>
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
      </motion.div>
      <motion.div variants={inputVariants}>
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <Button type="submit" className="w-full">
          Login
        </Button>
      </motion.div>
    </motion.form>
  )
}

