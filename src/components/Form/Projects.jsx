import { useResume } from '../../context/ResumeContext';
import FormSection from './FormSection';
import { FolderGit2, Plus, Trash2 } from 'lucide-react';

const Projects = () => {
    const { resumeData, updateSection } = useResume();
    const { projects } = resumeData;

    const addProject = () => {
        updateSection('projects', [
            ...projects,
            {
                id: Date.now(),
                name: '',
                techStack: '',
                link: '',
                description: ''
            }
        ]);
    };

    const removeProject = (id) => {
        updateSection('projects', projects.filter(proj => proj.id !== id));
    };

    const updateProject = (id, field, value) => {
        updateSection('projects', projects.map(proj =>
            proj.id === id ? { ...proj, [field]: value } : proj
        ));
    };

    return (
        <FormSection title="Projects" icon={FolderGit2}>
            <div className="space-y-6">
                {projects.map((proj) => (
                    <div key={proj.id} className="relative p-4 glass rounded-xl border border-white/5 group animate-in slide-in-from-top-2 duration-300">
                        <button
                            onClick={() => removeProject(proj.id)}
                            className="absolute top-2 right-2 p-1.5 text-slate-400 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-all opacity-0 group-hover:opacity-100"
                            title="Remove Project"
                        >
                            <Trash2 className="w-4 h-4" />
                        </button>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300">Project Name</label>
                                <input
                                    type="text"
                                    value={proj.name}
                                    onChange={(e) => updateProject(proj.id, 'name', e.target.value)}
                                    placeholder="Task Manager App"
                                    className="w-full p-2.5 rounded-lg glass-input"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300">Tech Stack</label>
                                <input
                                    type="text"
                                    value={proj.techStack}
                                    onChange={(e) => updateProject(proj.id, 'techStack', e.target.value)}
                                    placeholder="React, Node.js, MongoDB"
                                    className="w-full p-2.5 rounded-lg glass-input"
                                />
                            </div>
                            <div className="space-y-2 md:col-span-2">
                                <label className="text-sm font-medium text-slate-300">Link (Optional)</label>
                                <input
                                    type="url"
                                    value={proj.link}
                                    onChange={(e) => updateProject(proj.id, 'link', e.target.value)}
                                    placeholder="https://github.com/..."
                                    className="w-full p-2.5 rounded-lg glass-input"
                                />
                            </div>
                            <div className="col-span-full space-y-2">
                                <label className="text-sm font-medium text-slate-300">Description</label>
                                <textarea
                                    value={proj.description}
                                    onChange={(e) => updateProject(proj.id, 'description', e.target.value)}
                                    rows={3}
                                    placeholder="What did you build and learn?"
                                    className="w-full p-2.5 rounded-lg glass-input resize-none"
                                />
                            </div>
                        </div>
                    </div>
                ))}

                <button
                    onClick={addProject}
                    className="flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors px-2"
                >
                    <Plus className="w-4 h-4" /> Add Project
                </button>
            </div>
        </FormSection>
    );
};

export default Projects;
