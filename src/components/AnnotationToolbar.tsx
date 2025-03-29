'use client';

const colors = ['#ffeb3b', '#2196f3', '#f44336'];

interface AnnotationToolbarProps {
  onToolSelect: (tool: string) => void,
  onColorSelect: (color: string) => void
}

const AnnotationToolbar: React.FC<AnnotationToolbarProps> = ({ onToolSelect, onColorSelect }) => {
  return (
    <div className="flex items-center justify-between gap-12">
      <div className='flex items-center gap-3'>
        <button onClick={() => onToolSelect('highlight')} className='underline text-sm'>Highlight</button>
        <button onClick={() => onToolSelect('underline')} className='underline text-sm'>Underline</button>
      </div>
      
      <div className="flex items-center gap-2">
        {colors.map(color => (
          <div
            key={color}
            onClick={() => onColorSelect(color)}
            style={{ background: color }}
            className='size-6 rounded-full cursor-pointer'
          />
        ))}
      </div>
    </div>
  );
};

export default AnnotationToolbar;
