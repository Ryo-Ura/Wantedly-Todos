import './filter.scss'
export default function Filter({ value, onChange }) {
    const handleClick = (key, e) => {
        e.preventDefault();
        console.log('handleClick in Filter called');
        onChange(key);
    };

    return (
        <div className="tabs">
            <a
                href="/#"
                onClick={handleClick.bind(null, 'ALL')}
                className={value === 'ALL' ? 'is-active' : ''}
            >All</a>
            <a
                href="/#"
                onClick={handleClick.bind(null, 'TODO')}
                className={value === 'TODO' ? 'is-active' : ''}
            >ToDo</a>
            <a href="/#"
                onClick={handleClick.bind(null, 'DONE')}
                className={value === 'DONE' ? 'is-active' : ''}
            >Done</a>
        </div>
    );
}