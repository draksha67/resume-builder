import { ResumeProvider } from './context/ResumeContext';
import PersonalDetails from './components/Form/PersonalDetails';
import Education from './components/Form/Education';
import Experience from './components/Form/Experience';
import Skills from './components/Form/Skills';
import Projects from './components/Form/Projects';
import PreviewWrapper from './components/Preview/PreviewWrapper';
import ATSChecker from './components/ATSChecker';
import { FileDown, Save, Sparkles } from 'lucide-react';

function App() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <ResumeProvider>
      <div className="min-h-screen font-sans text-slate-100">
        {/* Header */}
        <header className="glass sticky top-0 z-20 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/20">
                AI
              </div>
              <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-200 tracking-tight">
                ResumeBuilder
              </h1>
            </div>

            <div className="flex items-center gap-4">
              <button
                className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                <Save className="w-4 h-4" />
                <span className="opacity-75">Auto-saved</span>
              </button>
              <button
                onClick={handlePrint}
                className="btn-primary flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm"
              >
                <FileDown className="w-4 h-4" />
                Export PDF
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Form Section (Left) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="glass-card p-6 rounded-2xl border border-slate-700/50">
                <div className="flex items-center gap-3 mb-2">
                  <Sparkles className="w-5 h-5 text-purple-400" />
                  <h2 className="text-lg font-semibold text-white">Editor</h2>
                </div>
                <p className="text-sm text-slate-400">Craft your professional story. Use the sections below to build your resume.</p>
              </div>

              <div className="space-y-4">
                <PersonalDetails />
                <Education />
                <Experience />
                <Projects />
                <Skills />
              </div>
            </div>

            {/* Preview Section (Right) */}
            <div className="lg:col-span-7 space-y-6">
              {/* ATS Checker Widget */}
              <ATSChecker />

              {/* Resume Preview */}
              <div className="sticky top-28">
                <div className="bg-slate-800/80 rounded-2xl shadow-2xl p-4 md:p-8 overflow-hidden backdrop-blur-sm border border-slate-700/50">
                  <div className="scale-[0.6] md:scale-[0.85] lg:scale-100 origin-top bg-white shadow-xl min-h-[1000px] mx-auto transition-transform duration-300">
                    <PreviewWrapper />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </main>
      </div>

      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #resume-preview, #resume-preview * {
            visibility: visible;
          }
          #resume-preview {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            margin: 0;
            padding: 0;
            box-shadow: none;
          }
          @page {
            margin: 0;
            size: auto;
          }
        }
      `}</style>
    </ResumeProvider>
  )
}

export default App
