type Props = { label: string; title: string; description?: string }
export default function SectionHeading({ label, title, description }: Props) {
  return <div className="section-heading"><span className="eyebrow">{label}</span><h2>{title}</h2>{description && <p>{description}</p>}</div>
}