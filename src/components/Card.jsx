import PropTypes from 'prop-types';

export default function Card({ icon, title, count, description }) {
    return (
        <div className='border'>
            <div className='p-4'>
                <h2 className='text-3xl font-semibold flex justify-center items-center gap-4'>
                    <span className='mr-2'>{icon}</span>
                    {title}
                    <span>{count}</span>
                </h2>
                <p className='text-gray-600 text-xl'>{description}</p>
            </div>
        </div>
    );
}

Card.propTypes = {
    icon: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    description: PropTypes.string.isRequired,
};
