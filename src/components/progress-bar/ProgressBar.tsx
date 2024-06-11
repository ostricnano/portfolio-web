import './ProgressBar.css';

interface ProgressBarProps {
  progress: number;
}
export const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <div>
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}>
          {progress}%
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;

