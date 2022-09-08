import { PageHeader } from '../common/components/PageHeader';
import { ButtonsBar } from '../common/components/ButtonsBar';
import { Button } from '../common/components/Button';
import { trpc } from '../common/helpers/trpc';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { AtomSettings } from '../common/atoms/AtomSettings';
import { Alert } from '../common/components/Alert';
import { useNavigate } from 'react-router-dom';
import { AtomNav } from '../common/atoms/AtomNav';

export const Settings = () => {
  const navigate = useNavigate();
  const setNav = useSetRecoilState(AtomNav);
  const [settings, setSettings] = useRecoilState(AtomSettings);
  const setProjectDirectory = trpc.useMutation(['settings:set-project-directory'], {
    onSuccess: (data) => {
      if (!data.canceled && data.filePaths.length) {
        setSettings((prev) => ({
          ...prev,
          projectDirectory: data.filePaths[0],
        }));
        setNav((prev) => ({ ...prev, active: 'dashboard' }));
        navigate('/');
      }
    },
  });

  return (
    <div>
      <PageHeader title="Settings" icon="fas fa-cubes" />
      <ButtonsBar>
        <Button
          icon="fas fa-directory"
          buttonStyle="primary"
          disabled={settings.projectDirectory !== ''}
          onClick={() => setProjectDirectory.mutate({})}
        >
          Set Project Directory
        </Button>
        <Button
          icon="fas fa-directory"
          buttonStyle="danger"
          disabled={settings.projectDirectory === ''}
          onClick={() => {
            setSettings((prev) => ({
              ...prev,
              projectDirectory: '',
            }));
          }}
        >
          Clear Project Directory
        </Button>
      </ButtonsBar>
      <div>{!settings.projectDirectory && <Alert className="mt-5">Please select a project directory for this session.</Alert>}</div>
    </div>
  );
};
