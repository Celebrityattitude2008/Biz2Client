import React from 'react'

export default function ApplyPage() {
  return (
    <div className="py-12 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Work With Us</h1>
      <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Complete Your Application</h2>
          <p className="text-gray-600 mb-4">
            To apply for work opportunities with BizConnect, please complete the following steps:
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Create an Account</h3>
              <p className="text-gray-600 text-sm">
                Start by registering your professional profile with your details and experience
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Upload Your Resume</h3>
              <p className="text-gray-600 text-sm">
                Add your resume and detailed work history to help us understand your expertise
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Await Approval</h3>
              <p className="text-gray-600 text-sm">
                Our team will review your application and contact you within 48 hours
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
              4
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Start Working</h3>
              <p className="text-gray-600 text-sm">
                Once approved, you&apos;ll appear in our professional directory
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-primary p-4">
          <p className="text-primary font-semibold">Ready to apply?</p>
          <p className="text-gray-600 text-sm mt-1">
            <a href="/register" className="text-primary hover:text-secondary font-semibold">
              Start your registration here →
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
