import { useResume } from '../../context/ResumeContext';

const PreviewWrapper = () => {
    const { resumeData } = useResume();
    const { personal, education, experience, skills, projects } = resumeData;

    // Basic template for MVP
    return (
        <div className="bg-white p-8 rounded-lg shadow-sm min-h-[1000px] w-full text-slate-800" id="resume-preview">
            {/* Header */}
            <div className="text-center border-b border-slate-300 pb-5 mb-5">
                <h1 className="text-3xl font-bold uppercase tracking-wide text-slate-900 mb-2">{personal.fullName || 'Your Name'}</h1>
                <div className="text-sm text-slate-600 flex flex-wrap justify-center gap-x-4 gap-y-1">
                    {personal.location && <span>{personal.location}</span>}
                    {personal.email && <span>{personal.email}</span>}
                    {personal.phone && <span>{personal.phone}</span>}
                    {personal.linkedin && <span>{personal.linkedin}</span>}
                    {personal.website && <span>{personal.website}</span>}
                </div>
            </div>

            {/* Summary */}
            {personal.summary && (
                <div className="mb-6">
                    <h3 className="uppercase tracking-widest text-sm font-bold text-slate-700 border-b border-slate-200 mb-2 pb-1">Summary</h3>
                    <p className="text-sm text-slate-700 leading-relaxed">{personal.summary}</p>
                </div>
            )}

            {/* Experience */}
            {experience.length > 0 && (
                <div className="mb-6">
                    <h3 className="uppercase tracking-widest text-sm font-bold text-slate-700 border-b border-slate-200 mb-2 pb-1">Experience</h3>
                    <div className="space-y-4">
                        {experience.map((exp) => (
                            <div key={exp.id}>
                                <div className="flex justify-between items-baseline mb-1">
                                    <h4 className="font-bold text-slate-800">{exp.role}</h4>
                                    <span className="text-sm text-slate-500 whitespace-nowrap">{exp.startDate} – {exp.endDate}</span>
                                </div>
                                <div className="flex justify-between items-center mb-1">
                                    <span className="font-medium text-slate-700 italic">{exp.company}</span>
                                </div>
                                <p className="text-sm text-slate-700 whitespace-pre-wrap">{exp.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Projects */}
            {projects.length > 0 && (
                <div className="mb-6">
                    <h3 className="uppercase tracking-widest text-sm font-bold text-slate-700 border-b border-slate-200 mb-2 pb-1">Projects</h3>
                    <div className="space-y-4">
                        {projects.map((proj) => (
                            <div key={proj.id}>
                                <div className="flex justify-between items-baseline mb-1">
                                    <div className="flex items-center gap-2">
                                        <h4 className="font-bold text-slate-800">{proj.name}</h4>
                                        {proj.link && <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline">Link</a>}
                                    </div>
                                </div>
                                {proj.techStack && <div className="text-xs text-slate-500 mb-1 font-mono">{proj.techStack}</div>}
                                <p className="text-sm text-slate-700">{proj.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Education */}
            {education.length > 0 && (
                <div className="mb-6">
                    <h3 className="uppercase tracking-widest text-sm font-bold text-slate-700 border-b border-slate-200 mb-2 pb-1">Education</h3>
                    <div className="space-y-3">
                        {education.map((edu) => (
                            <div key={edu.id}>
                                <div className="flex justify-between items-baseline">
                                    <h4 className="font-bold text-slate-800">{edu.institution}</h4>
                                    <span className="text-sm text-slate-500 whitespace-nowrap">{edu.startDate} – {edu.endDate}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm text-slate-700">{edu.degree}</span>
                                    {edu.gpa && <span className="text-sm text-slate-600">GPA: {edu.gpa}</span>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Skills */}
            {skills.length > 0 && (
                <div className="mb-6">
                    <h3 className="uppercase tracking-widest text-sm font-bold text-slate-700 border-b border-slate-200 mb-2 pb-1">Skills</h3>
                    <p className="text-sm text-slate-700 leading-relaxed">{skills.join(' • ')}</p>
                </div>
            )}
        </div>
    );
};

export default PreviewWrapper;
