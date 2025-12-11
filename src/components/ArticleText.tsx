import styles from './css/ArticleText.module.css';

interface Section {
    subtitle?: string;
    paragraph : string
}
const ArticleText = ({sections}: { sections: Section[]}) => {
    return (
        <>
            {sections.map((section, index) =>
            <div key= {index} className={styles.articleSection}>
                {section.subtitle && <h3> {section.subtitle}</h3>}
                <p>{section.paragraph}</p>
            </div>
        )}
        </>
    )
}
export default ArticleText;