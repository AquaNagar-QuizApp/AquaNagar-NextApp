import { JSX, useState, type ChangeEvent, type FormEvent } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LoginError, LoginProps, Title, User } from "@/types"

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
    title: "",
    name: "",
    department: "",
    designation: "",
    email: "",
    mobile: "",
    mobileAndEmail: ""
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    let newErrors: LoginError = {
      //!formData.title ? "Title is required" : "",
      title: formData.title === "" ? "Title is required" : "",

      name: !formData.name
        ? "Name is required"
        : !/^[A-Za-z\s]+$/.test(formData.name)
          ? "Only alphabets and spaces are allowed"
          : formData.name.length >= 50
            ? "Name must be less than 50 characters"
            : "",

      department: !formData.department
        ? "Department is required"
        : !/^[A-Za-z\s]+$/.test(formData.department)
          ? "Only alphabets and spaces are allowed"
          : "",

      designation: !formData.designation
        ? "Designation is required"
        : /^\d+$/.test(formData.designation)
          ? "Designation cannot be only numbers"
          : /[^A-Za-z\s\d]/.test(formData.designation)
            ? "Special characters are not allowed"
            : "",

      email: !formData.email
        ? "Email is required"
        : !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
          ? "Enter a valid email address"
          : "",

      mobile: !formData.mobile
        ? "Mobile number is required"
        : !/^\d{10}$/.test(formData.mobile)
          ? "Mobile number must be 10 digits"
          : !/^[6-9]\d{9}$/.test(formData.mobile)
            ? "Mobile number must start with 6, 7, 8, or 9"
            : "",

      mobileAndEmail: ""
    };

    if (Object.values(newErrors).some((error) => error)) {
      setErrors(newErrors);
      return;
    }
    // else {
    //   onLogin(formData);
    // }

    try {
      const user = {
        ...formData,
        title: Number(formData.title), // Ensure title is sent as a number
      };

      const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

      const response = await fetch(apiBaseUrl + "/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      });

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(errorData || "Login failed");
      }

      const data = await response.json();

      // Store JWT token and user details in session storage
      if (typeof window !== "undefined") {
        // sessionStorage.setItem("isLoggedIn", "true");
        // sessionStorage.setItem("currentUser", JSON.stringify(data.user)); // Store user details
        sessionStorage.setItem("accessToken", data.accessToken); // Store JWT token
        sessionStorage.setItem("userID", data.user.userId);
      }

      onLogin(formData); // Call onLogin only if API is successful
    } catch (error: any) {
      console.error("Login failed:", error.message);
      // alert(error.message || "Invalid login credentials");
      // setErrors((prevErrors) => ({
      //   ...prevErrors,
      //   mobileAndEmail: error.message || "Invalid login credentials",
      // }));

      setErrors({
        title: "",
        name: "",
        department: "",
        designation: "",
        email: "",
        mobile: "",
        mobileAndEmail: error.message || "Invalid login credentials",
      });
    }
  }

  const handleTitleChange = (value: number) => {
    setFormData((prev) => ({ ...prev, title: value as Title }));
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const inputVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  }

  // const titleOptions: TitleOption[] = ["Mr", "Mrs", "Ms", "Dr"];

  const titleOptions = Object.keys(Title)
    .filter((key) => isNaN(Number(key))) // Get only string keys (Mr, Mrs, etc.)
    .map((key) => ({
      label: key, // "Mr", "Mrs", etc.
      value: String(Title[key as keyof typeof Title]) // Convert enum number to string
    }));

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-4"
      initial="hidden"
      animate="visible"
      variants={formVariants}
    >
      {errors.mobileAndEmail &&
        <div>
          <p className="text-red-600 text-sm min-h-[20px]">{errors.mobileAndEmail}</p>
        </div>
      }
      <motion.div variants={inputVariants} className="flex items-start gap-4 w-full">
        {/* Title Dropdown */}
        <div className="w-1/3">
          <Label htmlFor="title">Title</Label>
          <Select
            onValueChange={(value) => handleTitleChange(Number(value))}
            value={String(formData.title)}
            required={false} // Remove native required
          >
            <SelectTrigger className="w-full px-2 py-2">
              <SelectValue placeholder="Select a title" />
            </SelectTrigger>
            <SelectContent className="bg-white shadow-lg rounded-lg">
              {titleOptions.map((title) => (
                <SelectItem
                  key={title.value}
                  value={title.value}
                  className="w-full px-4 py-2 bg-white text-gray-900 cursor-pointer 
                  hover:bg-gray-100 hover:text-blue-600 
                  focus:bg-blue-100 focus:text-blue-700
                  aria-selected:bg-blue-200 aria-selected:text-blue-900 pl-8"
                >
                  {title.label}
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
          {errors.name && <p className="text-red-600 text-sm min-h-[20px]">{errors.name}</p>}
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
        {errors.department && <p className="text-red-600 text-sm min-h-[20px]">{errors.department}</p>}
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
        {errors.designation && <p className="text-red-600 text-sm min-h-[20px]">{errors.designation}</p>}
      </motion.div>
      <motion.div variants={inputVariants}>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          // type="email"
          value={formData.email}
          onChange={handleChange}
          required={false} // Remove native required
        />
        {errors.email && <p className="text-red-600 text-sm min-h-[20px]">{errors.email}</p>}
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
        {errors.mobile && <p className="text-red-600 text-sm min-h-[20px]">{errors.mobile}</p>}
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
