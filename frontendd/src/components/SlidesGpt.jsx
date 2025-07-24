import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkles, Upload, Check, Download, Zap, Palette, FileText, Star, ArrowUp, MessageCircle, Layers, Sparkle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { LoadingSpinner } from "@/components/ui/loading-spinner"
import T1 from "../../images/T1.png"
import T2 from "../../images/T2.png"

const templates = [
  {
    id: "GENERIC_MODERN",
    name: "Modern",
    description: "Clean and contemporary design",
    preview: T2,
    color: "from-emerald-400 to-teal-500"
  },
  {
    id: "GENERIC_SIMPLE",
    name: "Classic",
    description: "Timeless and professional",
    preview: T1,
    color: "from-amber-400 to-orange-500"
  },
]

const features = [
  { icon: Zap, title: "Lightning Fast", description: "Generate presentations in seconds", color: "from-emerald-400 to-teal-500" },
  { icon: Palette, title: "Beautiful Templates", description: "Professional designs to choose from", color: "from-violet-400 to-purple-500" },
  { icon: FileText, title: "AI-Powered", description: "Smart content generation", color: "from-amber-400 to-orange-500" },
  { icon: Download, title: "Instant Download", description: "Get your PPTX file immediately", color: "from-rose-400 to-pink-500" }
]

export default function SlidesGPT() {
  const [prompt, setPrompt] = useState("")
  const [selectedTemplate, setSelectedTemplate] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerate = async () => {
    console.log("hiii");
    
    setIsGenerating(true)
    
    fetch('https://gptapi.sanjeevdev.in/generate-ppt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: prompt, template: selectedTemplate }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.blob();
      })
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = 'generated-ppt.pptx';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        setIsGenerating(false);
      })
      .catch(err => {
        console.error('Error generating PPT:', err);
        setIsGenerating(false);
      });
    }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] relative overflow-hidden">
      {/* Organic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large organic shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-violet-500/15 to-transparent rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
        
        {/* Geometric accents */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-40 w-1 h-1 bg-violet-400 rounded-full animate-ping animation-delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-1.5 h-1.5 bg-amber-400 rounded-full animate-ping animation-delay-2000"></div>
        <div className="absolute bottom-40 right-20 w-1 h-1 bg-rose-400 rounded-full animate-ping animation-delay-3000"></div>
      </div>

      {/* Subtle noise texture */}
      <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20200%20200%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cfilter%20id%3D%22noise%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.65%22%20numOctaves%3D%223%22%20stitchTiles%3D%22stitch%22/%3E%3C/filter%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url(%23noise)%22%20opacity%3D%220.4%22/%3E%3C/svg%3E')]"></div>

      {/* Navigation */}
      <nav className="relative px-6 py-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-4"
          >
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 via-teal-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-emerald-500/20">
                <Layers className="w-7 h-7 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-violet-400 to-purple-500 rounded-lg flex items-center justify-center">
                <Sparkle className="w-2.5 h-2.5 text-white" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white tracking-tight">SlidesGPT</h1>
              <p className="text-xs text-gray-500 tracking-wider uppercase">Presentation Studio</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3 text-gray-400 text-sm"
          >
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="font-mono">AI-Powered</span>
          </motion.div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative max-w-6xl mx-auto px-6 py-16 md:py-32">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-8 mb-20"
        >
          <div className="inline-flex items-center px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-6">
            <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
            <span className="text-gray-300 text-sm font-medium tracking-wide">Next-Gen Presentation Creation</span>
          </div>
          
          <h2 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tight">
            Create
            <span className="block bg-gradient-to-r from-emerald-400 via-teal-500 to-emerald-600 bg-clip-text text-transparent">
              Stunning
            </span>
            <span className="block text-white">Presentations</span>
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed font-light">
            Transform your ideas into professional presentations with our advanced AI platform
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-2xl border border-white/10 group-hover:border-white/20 transition-all duration-500"></div>
              <div className="relative p-6">
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2 text-sm">{feature.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-10"
        >
          {/* Prompt Input */}
          <div className="relative group">
            {/* Animated background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-teal-500/15 to-emerald-500/20 rounded-3xl blur-3xl group-hover:blur-2xl transition-all duration-700"></div>
            
            {/* Main container */}
            <div className="relative bg-gradient-to-br from-white/8 via-white/5 to-white/3 backdrop-blur-xl rounded-3xl border border-white/10 group-hover:border-emerald-400/30 transition-all duration-500 overflow-hidden">
              {/* Animated border gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/0 via-emerald-400/20 to-emerald-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative p-8">
                {/* Header section */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 via-teal-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-emerald-500/25 group-hover:scale-110 transition-transform duration-500">
                        <MessageCircle className="w-6 h-6 text-white" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-violet-400 to-purple-500 rounded-lg flex items-center justify-center">
                        <Sparkle className="w-2.5 h-2.5 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">Presentation Idea</h3>
                      <p className="text-gray-500 text-sm font-light">Describe what you want to create</p>
                    </div>
                  </div>
                  
                  {/* Character counter */}
                  <div className="text-right">
                    <div className="text-2xl font-bold text-emerald-400">{prompt.length}</div>
                    <div className="text-xs text-gray-500 font-light">characters</div>
                  </div>
                </div>
                
                {/* Textarea */}
                <div className="relative">
                  <Textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Share your vision... For example: 'Create a compelling presentation about sustainable energy solutions for the future, including solar, wind, and nuclear power with real-world case studies and future projections.'"
                    className="min-h-[160px] bg-transparent border-0 text-white text-lg placeholder:text-gray-500 placeholder:font-light focus:ring-0 resize-none w-full font-light leading-relaxed"
                  />
                  
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent"></div>
                </div>
                
                {/* Helper text */}
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
                      <span>AI-powered</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-pulse animation-delay-1000"></div>
                      <span>Smart suggestions</span>
                    </div>
                  </div>
                  
                  {/* Word count */}
                  <div className="text-xs text-gray-500 font-mono">
                    {prompt.split(/\s+/).filter(word => word.length > 0).length} words
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Template Selection */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-white text-3xl font-bold mb-3">Choose Your Template</h3>
              <p className="text-gray-500 font-light">Select a design that matches your vision</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {templates.map((template) => (
                <motion.div
                  key={template.id}
                  className={`relative group cursor-pointer ${
                    selectedTemplate === template.id ? 'ring-2 ring-emerald-400 ring-offset-2 ring-offset-[#0a0a0a]' : ''
                  }`}
                  onClick={() => setSelectedTemplate(template.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500">
                    <div className="relative">
                      <img
                        src={template.preview}
                        alt={`${template.name} template preview`}
                        className="w-full h-52 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-white font-bold text-xl">{template.name}</h4>
                        {selectedTemplate === template.id && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className={`w-8 h-8 bg-gradient-to-br ${template.color} rounded-full flex items-center justify-center shadow-lg`}
                          >
                            <Check className="w-5 h-5 text-white" />
                          </motion.div>
                        )}
                      </div>
                      <p className="text-gray-500 text-sm font-light">{template.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Generate Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="pt-12"
          >
            <Button
              onClick={handleGenerate}
              disabled={!prompt || !selectedTemplate || isGenerating}
              className="w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-600 hover:via-teal-600 hover:to-emerald-700 text-white h-20 text-xl font-bold rounded-3xl transition-all duration-500 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-2xl shadow-emerald-500/25 border border-emerald-400/20"
            >
              {isGenerating ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center"
                >
                  <LoadingSpinner size="default" className="mr-4 text-white" />
                  <span>Creating your masterpiece...</span>
                </motion.div>
              ) : (
                <span className="flex items-center">
                  <Sparkles className="w-7 h-7 mr-4" />
                  Generate Presentation
                </span>
              )}
            </Button>
            
            {(!prompt || !selectedTemplate) && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-gray-600 text-sm mt-6 font-light"
              >
                {!prompt && !selectedTemplate && "Please enter a prompt and select a template"}
                {!prompt && selectedTemplate && "Please enter a prompt to continue"}
                {prompt && !selectedTemplate && "Please select a template to continue"}
              </motion.p>
            )}
          </motion.div>
        </motion.div>
      </main>

      {/* Floating Action Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-500 z-50 border border-emerald-400/20"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <ArrowUp className="w-7 h-7" />
      </motion.button>
    </div>
  )
}

