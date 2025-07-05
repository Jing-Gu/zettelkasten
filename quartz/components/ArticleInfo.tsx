import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const ArticleInfo: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const authorOriginal = fileData.frontmatter?.author as string
  const yearOriginal = fileData.frontmatter?.year as string
  if (authorOriginal && yearOriginal) {
    const author = authorOriginal.replace("[[", "").replace("]]", "") // remove bracket [[ ]]
    const year = yearOriginal.replace("[[", "").replace("]]", "")

    if (author && year) {
      return <div>
        <p class={classNames(displayClass, "article-author")}>
          Author: {author}
        </p>
        <p>Published year: {year}</p>
      </div>

    } else {
      return null
    }
  }

}

ArticleInfo.css = `
.article-author {
  margin: 1rem 0 0 0;
}
`

export default (() => ArticleInfo) satisfies QuartzComponentConstructor
