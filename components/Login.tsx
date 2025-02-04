import { JSX, useState, type ChangeEvent, type FormEvent } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { LoginError, LoginProps, Title, User } from "@/types"

export function Login({ onLogin }: LoginProps): JSX.Element {
  const [formData, setFormData] = useState<User>({
    name: "",
    department: "",
    designation: "",
    email: "",
    mobile: "",
    title: ""
  })

  const [errors, setErrors] = useState({
    title: false,
    name: false,
    department: false,
    designation: false,
    email: false,
    mobile: false,
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const newErrors: LoginError = {
      title: !formData.title,
      name: !formData.name || !(formData.name.length < 50),
      department: !formData.department,
      designation: !formData.designation,
      email: !formData.email || !/\S+@\S+\.\S+/.test(formData.email),
      mobile: !formData.mobile || !/^\d{10}$/.test(formData.mobile),
    };

    // const newErrors: LoginError = {
    //   name: false,
    //   department: false,
    //   designation: false,
    //   email: false,
    //   mobile: false,
    //   title: false
    // }
    // // Custom validation for all fields
    // if (!formData.title) newErrors.title = true
    // if (!formData.name) newErrors.name = true
    // if (!formData.department) newErrors.department = true
    // if (!formData.designation) newErrors.designation = true
    // if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = true
    // if (!formData.mobile || !/^\d{10}$/.test(formData.mobile)) newErrors.mobile = true

    // if (Object.keys(newErrors).length === 0) {
    //   console.log('Form Submitted', formData)
    // } else {
    //   setErrors(newErrors)
    // }

    if (Object.values(newErrors).some((error) => error)) {
      setErrors(newErrors);
    } else {
      onLogin(formData);
    }
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

  const titleOptions: Title[] = ["Mr", "Mrs", "Ms", "Dr"];

  return (
    // <motion.form
    //   onSubmit={handleSubmit}
    //   className="space-y-4"
    //   initial="hidden"
    //   animate="visible"
    //   variants={formVariants}
    // >
    //   <motion.div variants={inputVariants} className="flex items-center gap-4 w-full">
    //     {/* Title Dropdown */}
    //     <div className="w-1/3">
    //       <Label htmlFor="title">Title</Label>
    //       <Select onValueChange={handleTitleChange} value={formData.title} required>
    //         <SelectTrigger className="w-full">
    //           <SelectValue placeholder="Select a title" />
    //         </SelectTrigger>
    //         <SelectContent className="bg-white shadow-lg rounded-lg">
    //           {titleOptions.map((title) => (
    //             <SelectItem
    //               key={title}
    //               value={title}
    //               className="w-full px-4 py-2 bg-white text-gray-900 cursor-pointer 
    // hover:bg-gray-100 hover:text-blue-600 
    // focus:bg-blue-100 focus:text-blue-700
    // aria-selected:bg-blue-200 aria-selected:text-blue-900 pl-8"
    //             >
    //               {title}
    //             </SelectItem>
    //           ))}
    //         </SelectContent>
    //       </Select>
    //     </div>
    //     {/* Name Input Field */}
    //     <div className="w-2/3">
    //       <Label htmlFor="name">Name</Label>
    //       <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
    //     </div>
    //   </motion.div>

    //   <motion.div variants={inputVariants}>
    //     <Label htmlFor="department">Department</Label>
    //     <Input id="department" name="department" value={formData.department} onChange={handleChange} required />
    //   </motion.div>
    //   <motion.div variants={inputVariants}>
    //     <Label htmlFor="designation">Designation</Label>
    //     <Input id="designation" name="designation" value={formData.designation} onChange={handleChange} required />
    //   </motion.div>
    //   <motion.div variants={inputVariants}>
    //     <Label htmlFor="email">Email</Label>
    //     <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
    //   </motion.div>
    //   <motion.div variants={inputVariants}>
    //     <Label htmlFor="mobile">Mobile</Label>
    //     <Input id="mobile" name="mobile" type="tel" value={formData.mobile} onChange={handleChange} required />
    //   </motion.div>
    //   <motion.div
    //     initial={{ opacity: 0, y: 20 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     transition={{ delay: 0.5, duration: 0.5 }}
    //   >
    //     <Button type="submit" className="w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-600 mt-4">
    //       Login
    //     </Button>
    //   </motion.div>
    // </motion.form>

    <motion.form
      onSubmit={handleSubmit}
      className="space-y-4"
      initial="hidden"
      animate="visible"
      variants={formVariants}
    >
      <motion.div variants={inputVariants} className="flex items-start gap-4 w-full">
        {/* Title Dropdown */}
        <div className="w-1/3">
          <Label htmlFor="title">Title</Label>
          <Select
            onValueChange={handleTitleChange}
            value={formData.title}
            required={false} // Remove native required
          >
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
                  focus:bg-blue-100 focus:text-blue-700
                  aria-selected:bg-blue-200 aria-selected:text-blue-900 pl-8"
                >
                  {title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.title && <p className="text-red-600 text-sm min-h-[20px]">Title is required</p>}
        </div>

        {/* Name Input Field */}
        <div className="w-2/3">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required={false} // Remove native required
          />
          {errors.name && <p className="text-red-600 text-sm min-h-[20px]">Name is required</p>}
        </div>
      </motion.div>

      {/* Other Input Fields */}
      <motion.div variants={inputVariants}>
        <Label htmlFor="department">Department</Label>
        <Input
          id="department"
          name="department"
          value={formData.department}
          onChange={handleChange}
          required={false} // Remove native required
        />
        {errors.department && <p className="text-red-600 text-sm">Department is required</p>}
      </motion.div>
      <motion.div variants={inputVariants}>
        <Label htmlFor="designation">Designation</Label>
        <Input
          id="designation"
          name="designation"
          value={formData.designation}
          onChange={handleChange}
          required={false} // Remove native required
        />
        {errors.designation && <p className="text-red-600 text-sm">Designation is required</p>}
      </motion.div>
      <motion.div variants={inputVariants}>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required={false} // Remove native required
        />
        {errors.email && <p className="text-red-600 text-sm">Valid email is required</p>}
      </motion.div>
      <motion.div variants={inputVariants}>
        <Label htmlFor="mobile">Mobile</Label>
        <Input
          id="mobile"
          name="mobile"
          type="tel"
          value={formData.mobile}
          onChange={handleChange}
          required={false} // Remove native required
        />
        {errors.mobile && <p className="text-red-600 text-sm">Valid mobile number is required</p>}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <Button
          type="submit"
          className="w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-600 mt-4"
        >
          Submit
        </Button>
      </motion.div>
    </motion.form>
  )
}

