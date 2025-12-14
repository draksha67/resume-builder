import { useResume } from '../context/ResumeContext';
import { AlertCircle, CheckCircle, Trophy, Zap } from 'lucide-react';
import { useMemo } from 'react';

const ATSChecker = () => {
    const { resumeData } = useResume();

    const analysis = useMemo(() => {
        const { personal, education, experience, skills, projects } = resumeData;
        let score = 0;
        const issues = [];
        const passing = [];

        // 1. Contact Info Check (20 pts)
        let contactScore = 0;
        if (personal.email) contactScore += 5;
        if (personal.phone) contactScore += 5;
        if (personal.linkedin) contactScore += 5;
        if (personal.location) contactScore += 5;
        score += contactScore;

        if (contactScore === 20) passing.push("Contact information is complete");
        else issues.push("Missing contact details (Email, Phone, LinkedIn, or Location)");

        // 2. Summary Check (10 pts)
        if (personal.summary && personal.summary.length > 50) {
            score += 10;
            passing.push("Professional summary is present");
        } else {
            issues.push("Add a professional summary check (min 50 chars)");
        }

        // 3. Experience Check (30 pts)
        if (experience.length >= 1) {
            score += 15;
            let bulletPointsGood = true;
            experience.forEach(exp => {
                if (!exp.description || exp.description.length < 30) bulletPointsGood = false;
            });

            if (bulletPointsGood) {
                score += 15;
                passing.push("Experience details are well descriptive");
            } else {
                issues.push("Some experience entries have short or missing descriptions");
            }
        } else {
            issues.push("Add at least one internship or work experience");
        }

        // 4. Skills Check (20 pts)
        if (skills.length >= 5) {
            score += 20;
            passing.push("Good number of skills listed");
        } else {
            score += (skills.length * 4);
            issues.push("Add more relevant skills (aim for 5+)");
        }

        // 5. Education Check (10 pts)
        if (education.length >= 1) {
            score += 10;
            passing.push("Education section is present");
        } else {
            issues.push("Missing education details");
        }

        // 6. Projects Check (10 pts)
        if (projects.length >= 1) {
            score += 10;
            passing.push("Projects section is present");
        } else {
            issues.push("Add personal or academic projects");
        }

        return { score, issues, passing };
    }, [resumeData]);

    const getScoreColor = (score) => {
        if (score >= 80) return 'text-green-400';
        if (score >= 60) return 'text-yellow-400';
        return 'text-red-400';
    };

    const getProgressColor = (score) => {
        if (score >= 80) return 'bg-green-500';
        if (score >= 60) return 'bg-yellow-500';
        return 'bg-red-500';
    }

    return (
        <div className="glass-card rounded-2xl p-6 border border-slate-700/50">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-slate-800 rounded-lg text-purple-400">
                        <Trophy className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white">ATS Score</h3>
                        <p className="text-xs text-slate-400">Real-time Analysis</p>
                    </div>
                </div>
                <div className={`text-4xl font-bold ${getScoreColor(analysis.score)}`}>
                    {analysis.score}
                </div>
            </div>

            {/* Progress Bar */}
            <div className="h-3 w-full bg-slate-800 rounded-full mb-6 overflow-hidden">
                <div
                    className={`h-full ${getProgressColor(analysis.score)} transition-all duration-500 ease-out`}
                    style={{ width: `${analysis.score}%` }}
                ></div>
            </div>

            <div className="space-y-4">
                {analysis.issues.length > 0 && (
                    <div>
                        <h4 className="text-sm font-semibold text-red-300 mb-3 flex items-center gap-2">
                            <AlertCircle className="w-4 h-4" /> Improvements Needed
                        </h4>
                        <ul className="space-y-2">
                            {analysis.issues.map((issue, i) => (
                                <li key={i} className="text-sm text-slate-400 flex gap-2 items-start bg-red-500/10 p-2 rounded-lg border border-red-500/10">
                                    <span className="mt-0.5">•</span> {issue}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {analysis.passing.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-slate-700/50">
                        <h4 className="text-sm font-semibold text-green-300 mb-3 flex items-center gap-2">
                            <CheckCircle className="w-4 h-4" /> Great Job!
                        </h4>
                        <ul className="space-y-2">
                            {analysis.passing.slice(0, 3).map((item, i) => ( // Only show top 3 passing to save space
                                <li key={i} className="text-sm text-slate-400 flex gap-2 items-start">
                                    <CheckCircle className="w-3.5 h-3.5 mt-0.5 text-green-500/50" /> {item}
                                </li>
                            ))}
                            {analysis.passing.length > 3 && <li className="text-xs text-slate-500 italic">+ {analysis.passing.length - 3} more checks passed</li>}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ATSChecker;
