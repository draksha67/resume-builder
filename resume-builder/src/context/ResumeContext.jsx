import { createContext, useContext, useState, useEffect } from 'react';

const ResumeContext = createContext();

const initialResumeState = {
    personal: {
        fullName: '',
        email: '',
        phone: '',
        role: '',
        location: '',
        website: '',
        linkedin: '',
        summary: '',
    },
    education: [],
    experience: [],
    skills: [],
    projects: []
};

export const ResumeProvider = ({ children }) => {
    const [resumeData, setResumeData] = useState(() => {
        const saved = localStorage.getItem('resumeData');
        return saved ? JSON.parse(saved) : initialResumeState;
    });

    useEffect(() => {
        localStorage.setItem('resumeData', JSON.stringify(resumeData));
    }, [resumeData]);

    const updatePersonal = (field, value) => {
        setResumeData(prev => ({
            ...prev,
            personal: { ...prev.personal, [field]: value }
        }));
    };

    const updateSection = (section, data) => {
        setResumeData(prev => ({
            ...prev,
            [section]: data
        }));
    };

    return (
        <ResumeContext.Provider value={{ resumeData, updatePersonal, updateSection, setResumeData }}>
            {children}
        </ResumeContext.Provider>
    );
};

export const useResume = () => {
    const context = useContext(ResumeContext);
    if (!context) {
        throw new Error('useResume must be used within a ResumeProvider');
    }
    return context;
};
