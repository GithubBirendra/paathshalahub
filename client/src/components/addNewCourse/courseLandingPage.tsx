import React from "react";
import { Formik, Field, Form, FieldArray, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "axios";
import { toast } from "sonner";

const categoryValues = [
  { value: "web-development", label: "Web Development" },
  { value: "data-science", label: "Data Science" },
  { value: "machine-learning", label: "Machine Learning" },
  { value: "mobile-development", label: "Mobile Development" },
  { value: "game-development", label: "Game Development" },
  { value: "design", label: "Design" },
  { value: "marketing", label: "Marketing" },
  { value: "business", label: "Business" },
  { value: "personal-development", label: "Personal Development" },
];

const languages = [
  { value: "english", label: "English" },
  { value: "spanish", label: "Spanish" },
  { value: "french", label: "French" },
  { value: "german", label: "German" },
  { value: "chinese", label: "Chinese" },
  { value: "japanese", label: "Japanese" },
  { value: "portuguese", label: "Portuguese" },
  { value: "arabic", label: "Arabic" },
  { value: "hindi", label: "Hindi" },
  { value: "russian", label: "Russian" },
];

const validationSchema = yup.object({
  title: yup.string().required().min(5).max(100),
  description: yup.string().required().min(50).max(500),
  price: yup.number().required().min(0).max(10000),
  category: yup.string().required().oneOf(categoryValues.map((c) => c.value)),
  level: yup.string().required().oneOf(["beginner", "intermediate", "advanced"]),
  language: yup.string().required().oneOf(languages.map((l) => l.value)),
  duration: yup.number().required().min(1).max(100),
  thumbnail: yup
    .string()
    .url("Must be a valid URL")
     .matches(/\.(png|jpg|jpeg|gif)$/i, "Must be an image URL"),

  whatYouWillLearn: yup.array().of(yup.string().required()).min(3).max(10),
  requirements: yup.array().of(yup.string().required()).min(1).max(8),
  instructorId: yup.string().required(),
  isPublished: yup.boolean(),
});

const AddCourseForm = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-start justify-center py-10 px-4">
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Add New Course</h1>

        <Formik
          initialValues={{
            title: "",
            description: "",
            price: "",
            category: "",
            level: "",
            language: "",
            duration: "",
            thumbnail: "",
            whatYouWillLearn: ["", "", ""],
            requirements: [""],
            instructorId: "",
            isPublished: false,
          }}
          validationSchema={validationSchema}
          onSubmit={async (values, { resetForm }) => {
            try {
              await axios.post("http://localhost:8080/course", values);
              toast("Course added successfully!");
              resetForm();
            } catch (err) {
              toast("Error! Course cannot be Added ! ");
            }
          }}
        >
          {({ values }) => (
            <Form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-1">Title</label>
                  <Field
                    name="title"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
                  />
                  <ErrorMessage name="title" component="p" className="text-red-500 text-sm mt-1" />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-1">Price ($)</label>
                  <Field
                    name="price"
                    type="number"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
                  />
                  <ErrorMessage name="price" component="p" className="text-red-500 text-sm mt-1" />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-1">Category</label>
                  <Field
                    as="select"
                    name="category"
                    className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
                  >
                    <option value="">Select</option>
                    {categoryValues.map((c) => (
                      <option key={c.value} value={c.value}>
                        {c.label}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage name="category" component="p" className="text-red-500 text-sm mt-1" />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-1">Level</label>
                  <Field
                    as="select"
                    name="level"
                    className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
                  >
                    <option value="">Select</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </Field>
                  <ErrorMessage name="level" component="p" className="text-red-500 text-sm mt-1" />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-1">Language</label>
                  <Field
                    as="select"
                    name="language"
                    className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
                  >
                    <option value="">Select</option>
                    {languages.map((l) => (
                      <option key={l.value} value={l.value}>
                        {l.label}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage name="language" component="p" className="text-red-500 text-sm mt-1" />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-1">Duration (hours)</label>
                  <Field
                    name="duration"
                    type="number"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
                  />
                  <ErrorMessage name="duration" component="p" className="text-red-500 text-sm mt-1" />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-gray-700 font-semibold mb-1">Thumbnail URL</label>
                  <Field
                    name="thumbnail"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
                  />
                  <ErrorMessage name="thumbnail" component="p" className="text-red-500 text-sm mt-1" />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-1">Description</label>
                <Field
                  as="textarea"
                  name="description"
                  rows="4"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage name="description" component="p" className="text-red-500 text-sm mt-1" />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-1">What You Will Learn</label>
                <FieldArray name="whatYouWillLearn">
                  {({ push, remove }) => (
                    <div className="space-y-2">
                      {values.whatYouWillLearn.map((_, i) => (
                        <div key={i} className="flex gap-2">
                          <Field
                            name={`whatYouWillLearn.${i}`}
                            className="flex-1 border border-gray-300 rounded px-3 py-2"
                          />
                          {i > 0 && (
                            <button
                              type="button"
                              onClick={() => remove(i)}
                              className="text-red-600 font-bold px-2"
                            >
                              −
                            </button>
                          )}
                          {i === values.whatYouWillLearn.length - 1 &&
                            values.whatYouWillLearn.length < 10 && (
                              <button
                                type="button"
                                onClick={() => push("")}
                                className="text-green-600 font-bold px-2"
                              >
                                +
                              </button>
                            )}
                        </div>
                      ))}
                    </div>
                  )}
                </FieldArray>
                <ErrorMessage name="whatYouWillLearn" component="p" className="text-red-500 text-sm mt-1" />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-1">Requirements</label>
                <FieldArray name="requirements">
                  {({ push, remove }) => (
                    <div className="space-y-2">
                      {values.requirements.map((_, i) => (
                        <div key={i} className="flex gap-2">
                          <Field
                            name={`requirements.${i}`}
                            className="flex-1 border border-gray-300 rounded px-3 py-2"
                          />
                          {i > 0 && (
                            <button
                              type="button"
                              onClick={() => remove(i)}
                              className="text-red-600 font-bold px-2"
                            >
                              −
                            </button>
                          )}
                          {i === values.requirements.length - 1 &&
                            values.requirements.length < 8 && (
                              <button
                                type="button"
                                onClick={() => push("")}
                                className="text-green-600 font-bold px-2"
                              >
                                +
                              </button>
                            )}
                        </div>
                      ))}
                    </div>
                  )}
                </FieldArray>
                <ErrorMessage name="requirements" component="p" className="text-red-500 text-sm mt-1" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-1">Instructor ID</label>
                  <Field
                    name="instructorId"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                  <ErrorMessage name="instructorId" component="p" className="text-red-500 text-sm mt-1" />
                </div>

                <div className="flex items-center mt-8">
                  <Field type="checkbox" name="isPublished" className="mr-2" />
                  <label className="text-gray-700">Publish Course</label>
                </div>
              </div>

              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md w-full md:w-auto"
              >
                Submit Course
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddCourseForm;
