import './Card.css';

export default function Card({ as: Tag = 'div', variant = 'default', className = '', children, ...rest }) {
  const classes = ['card', 'card--' + variant, className].filter(Boolean).join(' ');
  return (
    <Tag className={classes} {...rest}>
      {children}
    </Tag>
  );
}
