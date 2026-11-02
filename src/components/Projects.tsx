import { useState } from 'react'
import { ArrowLeft, ArrowRight, ArrowUpRight, Github, Globe2 } from 'lucide-react'
import { projectScreenshots } from '../data/content'
import SectionHeading from './SectionHeading'

type Props = { t: any }

type CarouselProps = {
  projectName: string
  images: readonly string[]
  previousLabel: string
  nextLabel: string
  showImageLabel: string
  imageUnavailableLabel: string
  screenshotAlt: string
}

function ProjectCarousel({
  projectName,
  images,
  previousLabel,
  nextLabel,
  showImageLabel,
  imageUnavailableLabel,
  screenshotAlt,
}: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [imageUnavailable, setImageUnavailable] = useState(false)

  const selectImage = (index: number) => {
    setActiveIndex(index)
    setImageUnavailable(false)
  }

  const currentImage = images[activeIndex]
  const alt = screenshotAlt
    .replace('{project}', projectName)
    .replace('{number}', String(activeIndex + 1))

  return <div className="project-carousel">
    <div className="carousel-viewport">
      {currentImage && !imageUnavailable
        ? <img key={currentImage} src={currentImage} alt={alt} onError={() => setImageUnavailable(true)}/>
        : <div className="carousel-unavailable" role="status">{imageUnavailableLabel}</div>}
      {images.length > 1 && <>
        <button className="carousel-arrow carousel-previous" type="button" aria-label={previousLabel} onClick={() => selectImage((activeIndex - 1 + images.length) % images.length)}><ArrowLeft size={18}/></button>
        <button className="carousel-arrow carousel-next" type="button" aria-label={nextLabel} onClick={() => selectImage((activeIndex + 1) % images.length)}><ArrowRight size={18}/></button>
      </>}
    </div>
    {images.length > 1 && <div className="carousel-dots">
      {images.map((image, index) => <button
        key={image}
        type="button"
        className={`carousel-dot ${index === activeIndex ? 'is-active' : ''}`}
        aria-label={showImageLabel.replace('{number}', String(index + 1))}
        aria-current={index === activeIndex ? 'true' : undefined}
        onClick={() => selectImage(index)}
      />)}
    </div>}
  </div>
}

export default function Projects({ t }: Props) {
  const accents = ['purple', 'gold']
  return <section className="section section-alt" id="projects"><div className="container"><SectionHeading label={t.label} title={t.title} description={t.description}/><div className="project-grid">
    {t.items.map((project: any, index: number) => <article className={`project-card ${accents[index]}`} key={project.name}>
      <ProjectCarousel
        projectName={project.name}
        images={projectScreenshots[project.id as keyof typeof projectScreenshots] ?? []}
        previousLabel={t.previousImage}
        nextLabel={t.nextImage}
        showImageLabel={t.showImage}
        imageUnavailableLabel={t.imageUnavailable}
        screenshotAlt={t.screenshotAlt}
      />
      <div className="project-content"><div className="project-title-row"><h3>{project.name}</h3><span className="project-index">0{index + 1}</span></div><p>{project.description}</p><div className="tag-list">{project.stack.map((tag: string) => <span className="tag" key={tag}>{tag}</span>)}</div><div className="project-links"><a href={project.demo} target="_blank" rel="noopener noreferrer"><Globe2 size={16}/>{t.demo}<ArrowUpRight size={14}/></a><a href={project.repo} target="_blank" rel="noopener noreferrer"><Github size={16}/>{t.code}<ArrowUpRight size={14}/></a></div></div>
    </article>)}
  </div></div></section>
}