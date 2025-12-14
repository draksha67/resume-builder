import { useResume } from '../../context/ResumeContext';
import FormSection from './FormSection';
import { User } from 'lucide-react';

const PersonalDetails = () => {
    const { resumeData, updatePersonal } = useResume();
    const { personal } = resumeData;

    const handleChange = (e) => {
        const { name, value } = e.target;
        updatePersonal(name, value);
    };

    return (
        <FormSection title="Personal Details" icon={User} isOpen={true}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Full Name</label>
                    <input
                        type="text"
                        name="fullName"
                        value={personal.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full p-2.5 rounded-lg glass-input"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Job Title</label>
                    <input
                        type="text"
                        name="role"
                        value={personal.role}
                        onChange={handleChange}
                        placeholder="Software Engineer"
                        className="w-full p-2.5 rounded-lg glass-input"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={personal.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full p-2.5 rounded-lg glass-input"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Phone</label>
                    <input
                        type="tel"
                        name="phone"
                        value={personal.phone}
                        onChange={handleChange}
                        placeholder="+1 234 567 890"
                        className="w-full p-2.5 rounded-lg glass-input"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Location</label>
                    <input
                        type="text"
                        name="location"
                        value={personal.location}
                        onChange={handleChange}
                        placeholder="New York, NY"
                        className="w-full p-2.5 rounded-lg glass-input"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">LinkedIn</label>
                    <input
                        type="text"
                        name="linkedin"
                        value={personal.linkedin}
                        onChange={handleChange}
                        placeholder="linkedin.com/in/john"
                        className="w-full p-2.5 rounded-lg glass-input"
                    />
                </div>
                <div className="col-span-full space-y-2">
                    <label className="text-sm font-medium text-slate-300">Professional Summary</label>
                    <textarea
                        name="summary"
                        value={personal.summary}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Write a brief summary of your professional background..."
                        className="w-full p-2.5 rounded-lg glass-input resize-none"
                    />
                </div>
            </div>
        </FormSection>
    );
};

export default PersonalDetails;
