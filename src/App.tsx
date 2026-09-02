import { useTuiNavigation } from './hooks/useTuiNavigation';
import { LanguageProvider } from './context/LanguageContext';
import { TuiFrame } from './components/tui/TuiFrame';
import { WhoamiPane } from './components/panes/WhoamiPane';
import { ProjectsPane } from './components/panes/ProjectsPane';
import { SkillsPane } from './components/panes/SkillsPane';
import { ExperiencePane } from './components/panes/ExperiencePane';
import { ContactPane } from './components/panes/ContactPane';

function TuiContent() {
  const {
    activePane,
    setPane,
    showHelp,
    setShowHelp,
    lastCommand
  } = useTuiNavigation();

  return (
    <TuiFrame
      activePane={activePane}
      onSelectPane={setPane}
      lastCommand={lastCommand}
      showHelp={showHelp}
      onToggleHelp={() => setShowHelp(prev => !prev)}
    >
      {activePane === 'whoami' && <WhoamiPane onNavigate={setPane} />}
      {activePane === 'projects' && <ProjectsPane />}
      {activePane === 'skills' && <SkillsPane />}
      {activePane === 'experience' && <ExperiencePane />}
      {activePane === 'contact' && <ContactPane />}
    </TuiFrame>
  );
}

export function App() {
  return (
    <LanguageProvider>
      <TuiContent />
    </LanguageProvider>
  );
}

export default App;
