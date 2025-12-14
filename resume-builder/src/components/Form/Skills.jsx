import { useResume } from '../../context/ResumeContext';
import FormSection from './FormSection';
import { Lightbulb, Plus, X } from 'lucide-react';
import { useState } from 'react';

const Skills = () => {
    const { resumeData, updateSection } = useResume();
    const { skills } = resumeData;
    const [newSkill, setNewSkill] = useState('');

    const addSkill = (e) => {
        e.preventDefault();
        if (newSkill.trim()) {
            updateSection('skills', [...skills, newSkill.trim()]);
            setNewSkill('');
        }
    };

    const removeSkill = (indexToRemove) => {
        updateSection('skills', skills.filter((_, index) => index !== indexToRemove));
    };

    return (
        <FormSection title="Skills" icon={Lightbulb}>
            <div className="space-y-4">
                <form onSubmit={addSkill} className="flex gap-2">
                    <input
                        type="text"
                        value={newSkill}
                        onChange={(e) => setNewSkill(e.target.value)}
                        placeholder="Add a skill (e.g. React, Python)"
                        className="flex-1 p-2.5 rounded-lg glass-input"
                    />
                    <button
                        type="submit"
                        disabled={!newSkill.trim()}
                        className="btn-primary px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                        <Plus className="w-5 h-5" />
                    </button>
                </form>

                <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                        <span
                            key={index}
                            className="inline-flex items-center gap-1.5 bg-slate-800 border border-slate-700 text-slate-200 px-3 py-1 rounded-full text-sm font-medium shadow-sm"
                        >
                            {skill}
                            <button
                                onClick={() => removeSkill(index)}
                                className="p-0.5 hover:text-red-400 hover:bg-red-400/10 rounded-full transition-colors"
                            >
                                <X className="w-3 h-3" />
                            </button>
                        </span>
                    ))}
                    {skills.length === 0 && (
                        <p className="text-slate-500 text-sm italic">No skills added yet.</p>
                    )}
                </div>
            </div>
        </FormSection>
    );
};

export default Skills;
