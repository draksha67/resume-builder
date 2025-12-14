import { useResume } from '../../context/ResumeContext';
import FormSection from './FormSection';
import { GraduationCap, Plus, Trash2 } from 'lucide-react';

const Education = () => {
    const { resumeData, updateSection } = useResume();
    const { education } = resumeData;

    const addEducation = () => {
        updateSection('education', [
            ...education,
            {
                id: Date.now(),
                institution: '',
                degree: '',
                startDate: '',
                endDate: '',
                gpa: ''
            }
        ]);
    };

    const removeEducation = (id) => {
        updateSection('education', education.filter(edu => edu.id !== id));
    };

    const updateEducation = (id, field, value) => {
        updateSection('education', education.map(edu =>
            edu.id === id ? { ...edu, [field]: value } : edu
        ));
    };

    return (
        <FormSection title="Education" icon={GraduationCap}>
            <div className="space-y-6">
                {education.map((edu) => (
                    <div key={edu.id} className="relative p-4 glass rounded-xl border border-white/5 group animate-in slide-in-from-top-2 duration-300">
                        <button
                            onClick={() => removeEducation(edu.id)}
                            className="absolute top-2 right-2 p-1.5 text-slate-400 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-all opacity-0 group-hover:opacity-100"
                            title="Remove Education"
                        >
                            <Trash2 className="w-4 h-4" />
                        </button>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300">Institution</label>
                                <input
                                    type="text"
                                    value={edu.institution}
                                    onChange={(e) => updateEducation(edu.id, 'institution', e.target.value)}
                                    placeholder="University Name"
                                    className="w-full p-2.5 rounded-lg glass-input"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300">Degree</label>
                                <input
                                    type="text"
                                    value={edu.degree}
                                    onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                                    placeholder="Bachelor of Science in CS"
                                    className="w-full p-2.5 rounded-lg glass-input"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300">Start Date</label>
                                <input
                                    type="text"
                                    value={edu.startDate}
                                    onChange={(e) => updateEducation(edu.id, 'startDate', e.target.value)}
                                    placeholder="Sep 2020"
                                    className="w-full p-2.5 rounded-lg glass-input"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300">End Date</label>
                                <input
                                    type="text"
                                    value={edu.endDate}
                                    onChange={(e) => updateEducation(edu.id, 'endDate', e.target.value)}
                                    placeholder="May 2024"
                                    className="w-full p-2.5 rounded-lg glass-input"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300">GPA (Optional)</label>
                                <input
                                    type="text"
                                    value={edu.gpa}
                                    onChange={(e) => updateEducation(edu.id, 'gpa', e.target.value)}
                                    placeholder="3.8/4.0"
                                    className="w-full p-2.5 rounded-lg glass-input"
                                />
                            </div>
                        </div>
                    </div>
                ))}

                <button
                    onClick={addEducation}
                    className="flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors px-2"
                >
                    <Plus className="w-4 h-4" /> Add Education
                </button>
            </div>
        </FormSection>
    );
};

export default Education;
