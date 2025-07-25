interface Section {
    subtitle?: string;
    paragraph : string
}
const ArticleText = ({sections}: { sections: Section[]}) => {
    return (
        <>
            {sections.map((section, index) =>
            <div key= {index} className="mb-4">
                {section.subtitle && <h3> {section.subtitle}</h3>}
                <p>{section.paragraph}</p>
            </div>
        )}
        </>
    )
}
export default ArticleText;