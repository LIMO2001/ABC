'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import Layout from '../../components/layout/Layout'
import {
  Upload,
  FileText,
  Image,
  File,
  X,
  CheckCircle,
  AlertTriangle,
  Shield,
  Lock,
  Download,
  Eye,
  Trash2,
  Calendar,
  User,
  MessageSquare,
  Clock
} from 'lucide-react'

interface UploadedFile {
  id: string
  name: string
  size: string
  type: string
  uploadDate: string
  status: 'uploaded' | 'processing' | 'approved' | 'requires_attention'
}

export default function ClientPortalPage() {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([
    {
      id: '1',
      name: 'Property_Purchase_Agreement.pdf',
      size: '2.3 MB',
      type: 'pdf',
      uploadDate: '2024-09-25',
      status: 'approved'
    },
    {
      id: '2',
      name: 'Title_Deed_Copy.pdf',
      size: '1.8 MB',
      type: 'pdf',
      uploadDate: '2024-09-24',
      status: 'processing'
    },
    {
      id: '3',
      name: 'ID_Copy.jpg',
      size: '876 KB',
      type: 'image',
      uploadDate: '2024-09-23',
      status: 'requires_attention'
    }
  ])

  const [isDragging, setIsDragging] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const documentCategories = [
    { id: 'all', name: 'All Documents', count: uploadedFiles.length },
    { id: 'contracts', name: 'Contracts & Agreements', count: 1 },
    { id: 'identity', name: 'Identity Documents', count: 1 },
    { id: 'property', name: 'Property Documents', count: 2 },
    { id: 'financial', name: 'Financial Records', count: 0 },
    { id: 'correspondence', name: 'Correspondence', count: 0 }
  ]

  const handleFileUpload = (files: FileList | null) => {
    if (!files) return

    Array.from(files).forEach(file => {
      const newFile: UploadedFile = {
        id: Date.now().toString() + Math.random(),
        name: file.name,
        size: formatFileSize(file.size),
        type: getFileType(file.name),
        uploadDate: new Date().toISOString().split('T')[0],
        status: 'uploaded'
      }

      setUploadedFiles(prev => [...prev, newFile])
    })
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  const getFileType = (filename: string) => {
    const extension = filename.split('.').pop()?.toLowerCase()
    if (['jpg', 'jpeg', 'png', 'gif'].includes(extension || '')) return 'image'
    if (['pdf'].includes(extension || '')) return 'pdf'
    if (['doc', 'docx'].includes(extension || '')) return 'document'
    return 'file'
  }

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'pdf':
        return <FileText className="text-red-500" size={24} />
      case 'image':
        return <Image className="text-blue-500" size={24} />
      case 'document':
        return <File className="text-blue-600" size={24} />
      default:
        return <File className="text-gray-500" size={24} />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'text-green-600 bg-green-50 border-green-200'
      case 'processing':
        return 'text-yellow-600 bg-yellow-50 border-yellow-200'
      case 'requires_attention':
        return 'text-red-600 bg-red-50 border-red-200'
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'approved':
        return 'Approved'
      case 'processing':
        return 'Under Review'
      case 'requires_attention':
        return 'Needs Attention'
      case 'uploaded':
        return 'Recently Uploaded'
      default:
        return 'Unknown'
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    handleFileUpload(e.dataTransfer.files)
  }

  const removeFile = (fileId: string) => {
    setUploadedFiles(prev => prev.filter(file => file.id !== fileId))
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-fnm-black via-fnm-gray-900 to-fnm-black text-fnm-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-6">
              Secure <span className="text-fnm-gold">Client Portal</span>
            </h1>
            <p className="text-xl text-fnm-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Upload and manage your legal documents securely. Our encrypted portal ensures
              your sensitive information remains confidential and easily accessible to your legal team.
            </p>

            {/* Security Features */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-3 text-fnm-gray-300">
                <Shield className="text-fnm-gold" size={24} />
                <span>256-bit Encryption</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-fnm-gray-300">
                <Lock className="text-fnm-gold" size={24} />
                <span>Secure Access Only</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-fnm-gray-300">
                <CheckCircle className="text-fnm-gold" size={24} />
                <span>GDPR Compliant</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Portal Content */}
      <section className="py-16 lg:py-24 bg-fnm-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Notice Banner */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8"
          >
            <div className="flex items-start gap-3">
              <AlertTriangle className="text-yellow-600 flex-shrink-0 mt-0.5" size={20} />
              <div>
                <h3 className="font-semibold text-yellow-800 mb-1">Demo Portal - Concept Only</h3>
                <p className="text-sm text-yellow-700">
                  This is a demonstration of our secure client portal concept. In production, this would require
                  authentication and implement enterprise-grade security measures for document handling.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-4 gap-8">

            {/* Sidebar - Document Categories */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-fnm-white rounded-lg shadow-lg p-6"
              >
                <h2 className="text-xl font-serif font-bold text-fnm-black mb-6">Document Categories</h2>

                <div className="space-y-2">
                  {documentCategories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center justify-between ${
                        selectedCategory === category.id
                          ? 'bg-fnm-gold text-fnm-black'
                          : 'text-fnm-gray-700 hover:bg-fnm-gray-50'
                      }`}
                    >
                      <span className="font-medium">{category.name}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        selectedCategory === category.id
                          ? 'bg-fnm-black text-fnm-white'
                          : 'bg-fnm-gray-200 text-fnm-gray-600'
                      }`}>
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Quick Actions */}
                <div className="mt-8 pt-6 border-t border-fnm-gray-200">
                  <h3 className="font-semibold text-fnm-black mb-4">Quick Actions</h3>
                  <div className="space-y-2">
                    <button className="w-full text-left px-4 py-2 text-sm text-fnm-gray-600 hover:bg-fnm-gray-50 rounded-lg flex items-center gap-2">
                      <MessageSquare size={16} />
                      Message Attorney
                    </button>
                    <button className="w-full text-left px-4 py-2 text-sm text-fnm-gray-600 hover:bg-fnm-gray-50 rounded-lg flex items-center gap-2">
                      <Calendar size={16} />
                      Schedule Meeting
                    </button>
                    <button className="w-full text-left px-4 py-2 text-sm text-fnm-gray-600 hover:bg-fnm-gray-50 rounded-lg flex items-center gap-2">
                      <Download size={16} />
                      Download All
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-3 space-y-8">

              {/* File Upload Area */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-fnm-white rounded-lg shadow-lg p-6"
              >
                <h2 className="text-xl font-serif font-bold text-fnm-black mb-6">Upload Documents</h2>

                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                  className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all duration-300 ${
                    isDragging
                      ? 'border-fnm-gold bg-fnm-gold/5'
                      : 'border-fnm-gray-300 hover:border-fnm-gold hover:bg-fnm-gray-50'
                  }`}
                >
                  <Upload className={`mx-auto mb-4 ${
                    isDragging ? 'text-fnm-gold' : 'text-fnm-gray-400'
                  }`} size={48} />

                  <h3 className="text-lg font-semibold text-fnm-black mb-2">
                    {isDragging ? 'Drop files here' : 'Upload Your Documents'}
                  </h3>

                  <p className="text-fnm-gray-600 mb-4">
                    Drag and drop files here, or click to select files
                  </p>

                  <p className="text-sm text-fnm-gray-500">
                    Supported formats: PDF, DOC, DOCX, JPG, PNG (Max 10MB per file)
                  </p>

                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    onChange={(e) => handleFileUpload(e.target.files)}
                    className="hidden"
                  />
                </div>

                <div className="mt-4 flex items-center gap-2 text-sm text-fnm-gray-600">
                  <Shield size={16} className="text-fnm-gold" />
                  <span>All uploads are encrypted and secure</span>
                </div>
              </motion.div>

              {/* Uploaded Documents */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-fnm-white rounded-lg shadow-lg p-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-serif font-bold text-fnm-black">Your Documents</h2>
                  <span className="text-sm text-fnm-gray-600">
                    {uploadedFiles.length} document{uploadedFiles.length !== 1 ? 's' : ''}
                  </span>
                </div>

                <div className="space-y-4">
                  {uploadedFiles.map((file, index) => (
                    <motion.div
                      key={file.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4 p-4 border border-fnm-gray-200 rounded-lg hover:shadow-md transition-shadow duration-200"
                    >
                      <div className="flex-shrink-0">
                        {getFileIcon(file.type)}
                      </div>

                      <div className="flex-grow min-w-0">
                        <h3 className="font-medium text-fnm-black truncate">{file.name}</h3>
                        <div className="flex items-center gap-4 text-sm text-fnm-gray-600 mt-1">
                          <span>{file.size}</span>
                          <span className="flex items-center gap-1">
                            <Calendar size={12} />
                            {new Date(file.uploadDate).toLocaleDateString()}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(file.status)}`}>
                          {getStatusText(file.status)}
                        </span>

                        <div className="flex items-center gap-2">
                          <button className="p-2 text-fnm-gray-400 hover:text-fnm-gold transition-colors">
                            <Eye size={16} />
                          </button>
                          <button className="p-2 text-fnm-gray-400 hover:text-fnm-gold transition-colors">
                            <Download size={16} />
                          </button>
                          <button
                            onClick={() => removeFile(file.id)}
                            className="p-2 text-fnm-gray-400 hover:text-red-500 transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {uploadedFiles.length === 0 && (
                    <div className="text-center py-12">
                      <FileText className="mx-auto mb-4 text-fnm-gray-300" size={48} />
                      <h3 className="text-lg font-medium text-fnm-gray-600 mb-2">No documents uploaded yet</h3>
                      <p className="text-fnm-gray-500">Upload your first document to get started</p>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Case Status Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-fnm-white rounded-lg shadow-lg p-6"
              >
                <h2 className="text-xl font-serif font-bold text-fnm-black mb-6">Case Status Overview</h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-fnm-black mb-3 flex items-center gap-2">
                      <User size={18} className="text-fnm-gold" />
                      Assigned Attorney
                    </h3>
                    <p className="text-fnm-gray-600 mb-1">Fiona Kasyoka Nyamai</p>
                    <p className="text-sm text-fnm-gray-500">Managing Partner, Real Estate Law</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-fnm-black mb-3 flex items-center gap-2">
                      <Clock size={18} className="text-fnm-gold" />
                      Last Update
                    </h3>
                    <p className="text-fnm-gray-600 mb-1">September 25, 2024</p>
                    <p className="text-sm text-fnm-gray-500">Property documents reviewed</p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-fnm-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-fnm-black">Next Steps</h3>
                    <span className="text-sm text-fnm-gray-500">Updated 2 days ago</span>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-sm text-fnm-gray-600">Initial document review completed</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Clock className="text-fnm-gold flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-sm text-fnm-gray-600">Awaiting additional property surveys</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Clock className="text-fnm-gray-400 flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-sm text-fnm-gray-600">Schedule closing meeting with all parties</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}