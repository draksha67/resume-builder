import { useResume } from '../../context/ResumeContext';
import FormSection from './FormSection';
import { Briefcase, Plus, Trash2 } from 'lucide-react';

const Experience = () => {
    const { resumeData, updateSection } = useResume();
    const { experience } = resumeData;

    const addExperience = () => {
        updateSection('experience', [
            ...experience,
            {
                id: Date.now(),
                company: '',
                role: '',
                startDate: '',
                endDate: '',
                description: ''
            }
        ]);
    };

    const removeExperience = (id) => {
        updateSection('experience', experience.filter(exp => exp.id !== id));
    };

    const updateExperience = (id, field, value) => {
        updateSection('experience', experience.map(exp =>
            exp.id === id ? { ...exp, [field]: value } : exp
        ));
    };

    return (
        <FormSection title="Experience" icon={Briefcase}>
            <div className="space-y-6">
                {experience.map((exp) => (
                    <div key={exp.id} className="relative p-4 glass rounded-xl border border-white/5 group animate-in slide-in-from-top-2 duration-300">
                        <button
                            onClick={() => removeExperience(exp.id)}
                            className="absolute top-2 right-2 p-1.5 text-slate-400 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-all opacity-0 group-hover:opacity-100"
                            title="Remove Experience"
                        >
                            <Trash2 className="w-4 h-4" />
                        </button>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300">Company</label>
                                <input
                                    type="text"
                                    value={exp.company}
                                    onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                                    placeholder="Company Name"
                                    className="w-full p-2.5 rounded-lg glass-input"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300">Role</label>
                                <input
                                    type="text"
                                    value={exp.role}
                                    onChange={(e) => updateExperience(exp.id, 'role', e.target.value)}
                                    placeholder="Software Engineer Intern"
                                    className="w-full p-2.5 rounded-lg glass-input"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300">Start Date</label>
                                <input
                                    type="text"
                                    value={exp.startDate}
                                    onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
                                    placeholder="Jun 2023"
                                    className="w-full p-2.5 rounded-lg glass-input"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300">End Date</label>
                                <input
                                    type="text"
                                    value={exp.endDate}
                                    onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                                    placeholder="Aug 2023"
                                    className="w-full p-2.5 rounded-lg glass-input"
                                />
                            </div>
                            <div className="col-span-full space-y-2">
                                <label className="text-sm font-medium text-slate-300">Description</label>
                                <textarea
                                    value={exp.description}
                                    onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
                                    rows={3}
                                    placeholder="Describe your responsibilities and achievements..."
                                    className="w-full p-2.5 rounded-lg glass-input resize-none"
                                />
                            </div>
                        </div>
                    </div>
                ))}

                <button
                    onClick={addExperience}
                    className="flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors px-2"
                >
                    <Plus className="w-4 h-4" /> Add Experience
                </button>
            </div>
        </FormSection>
    );
};

export default Experience;
